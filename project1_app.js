//utility functions
const getRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const generateRandomSuperheroID = () => {
    return Math.ceil(Math.random() * NUM_OF_SUPERHEROES);
}

const generateRandomFoodItem = (percentage, arr) => { //probability of returning null or any of the array
    if ((Math.floor(Math.random() * 101)) <= percentage) {
        return null;
    } else {
        return getRandom(arr);
    };
}

//classes
class Customer {
    constructor(cName, cURL) {
        this.custName = cName;
        this.custMoney = 100;
        this.custImage = cURL;
        this.custPatience = 5; //willing to wait for 5 secs
        this.slot = 0;

        // this.preferredIngredients = getFaveIngredients(4);
        //arr of ingredients the ingredients array

    }
    enter() {
        //enter the store
        //pick empty slot
        console.log($('.empty:eq(0)').text());
        $('.empty:eq(0)')
            .html(`<img src="${this.custImage}">`)
            .removeClass('empty');
    }
    leave() {
        //enter the store
    }
    order(cOrder) {
        //display the order bubble
        console.log(cOrder);
    }
    greet() {
        //say something
    }
}

class Food {
    constructor(fdArr) {
        this.foodName = fdArr[0];
        this.foodIngredients = fdArr[1];
        this.foodOrigin = fdArr[2];
        this.foodType = fdArr[3];
        this.foodMethod = fdArr[4];
        this.foodCostFrSupplier = fdArr[5];
        this.foodPriceinSGD = fdArr[6];
        this.foodRating = fdArr[7];
        this.foodQty = fdArr[8];
        this.foodImage = fdArr[9];
    }
}

class FoodOrigin {
    constructor(country, currency, rate) {
        this.originCountry = country || 'Singapore';
        this.originCurrency = currency || 'SGD';
        this.originRate = rate || 1;
    }
}

class Bento { //4 ingredients
    constructor(firstBox, secondBox, thirdBox, fourthBox) {
        this.firstBox = firstBox;
        this.secondBox = secondBox;
        this.thirdBox = thirdBox;
        this.fourthBox = fourthBox;
    }
}

class DailySummary {
    constructor() {
        this.day = day;
        this.totalIngredientCost = totalCost;
    }
}

//instances
const singapore = new FoodOrigin('Singapore', 'SGD', 1);
const china = new FoodOrigin('China', 'CNY', 4.5);
const thailand = new FoodOrigin('Thailand', 'THB', 20.808);
const indonesia = new FoodOrigin('Indonesia', 'IDR', 9413.1);

//variable declaration
const START_DAY = 'Start Day';
const DAY_SECONDS = 20;
const CUST_DELAY_IN_MS = 1000; //1 sec
const NUM_OF_SLOT = 5;
const NUM_OF_FOOD = 9;
const NUM_OF_SUPERHEROES = 729;
const NUM_OF_DAILY_CUST = 5;
const LIST_OF_BROKEN_HEROES = [51, 54, 74, 101, 113, 117, 131, 133, 134, 143, 164, 184, 205, 244, 283, 288, 290, 291, 292, 362, 447, 453, 511, 512, 552, 553, 593, 603, 629, 662, 682, 694, 698, 715, 721, 725];
const ORDER_COMPOSITION = [[0, 1, 2], [3], [4, 5, 6, 7], [8]]; //create into class and create instance
const ORDER_NULL_PROBABILITY = 30;
const DAY_MESSAGE = ['Ready for your first day?']
const DAY_SUMMARY = ['', 'Summary of Day 1', 'Summary of Day 2', 'Summary of Day 3', 'Summary of Day 4', 'Summary of Day 5'];
// const CUSTOMER_LIST = {
//     level: 1,
//     customer_names: []
// }

let currDay = 0;
let isStoreOpen = false;
let level = 1;
let earning = 0;
let happyCust = 0;
let currCost = 0;
let foodArr = [
    ['Oolong Tea', 'Tea', 'China', 'Drink', 'Boil', 6, 2, 2, 0, 'https://i.ibb.co/jDVRwQ0/drink-tea.png'],
    ['Arabica Coffee', 'Coffee', 'Indonesia', 'Drink', 'Boil', 15000, 2.5, 2, 0, 'https://i.ibb.co/5xy7jMz/drink-coffee.png'],
    ['Kunlun Spring Water', 'Water', 'China', 'Drink', 'Boil', 5, 1.5, 1, 0, 'https://i.ibb.co/kQ9GXxS/drink-water.png'],
    ['Yunnan Specialty Broccoli', 'Broccoli', 'China', 'Veggie', 'Steam', 9, 4, 1, 0, 'https://i.ibb.co/7b33T88/food-steam-Broccoli.png'],
    ['Macao Egg Custard', 'Egg', 'China', 'Protein', 'Steam', 15.6, 5.25, 1, 0, 'https://i.ibb.co/GcPm5wf/food-steam-Egg.png'],
    ['Steam Tofu', 'Tofu', 'China', 'Protein', 'Steam', 12.5, 4.5, 1, 0, 'https://i.ibb.co/yy2GcX8/food-steam-Tofu.png'],
    ['Hainan Chicken', 'Chicken', 'China', 'Meat', 'Steam', 18.25, 6, 1, 0, 'https://i.ibb.co/whGnH4k/food-steamed-Chicken.png'],
    ['Hongkong Grouper', 'Fish', 'China', 'Meat', 'Steam', 20.3, 7, 2, 0, 'https://i.ibb.co/rssrvZL/food-steam-Fish.png'],
    ['Hom Mali Rice', 'Rice', 'Thailand', 'Carbo', 'Steam', 40, 3, 1, 0, 'https://i.ibb.co/TvddwdV/food-Rice.png']
]
const todayFood = [];
const todayCust = [];

//DOM variables  
const $modal = $('#modal');
const $modalContent = $('#modal-content');
const $messageButton = $('#modal-close');

//various functions
const randomizeCustOrder = () => { //array of 4 food item from todayFood
    const cOrder = [];
    //1st random between null or 0-2 (drink) -> null = not ordering drink
    //2nd random between null or 3 (veggie) -> null = not ordering veggie
    //3rd random between null or 4-7 (protein/meat) -> null = not ordering protein/meat
    //4th random between null or 8 (rice) -> null = not ordering rice
    ORDER_COMPOSITION.forEach(element => {
        cOrder.push(generateRandomFoodItem(ORDER_NULL_PROBABILITY, element));
    });
    return cOrder;
};

const buildTodayFoodArr = (num) => {
    let food = null;
    foodArr.forEach(element => {
        food = new Food(element);
        todayFood.push(food);
    });
    console.log(todayFood);
}

const displayFood = () => {
    todayFood.forEach((element, index) => {
        //place in the tray
        $('.food:nth-child(' + (index + 1) + ')')
            .html(`<img src="${element.foodImage}">`);
    });
}

const prepareFood = () => {
    console.log(`preparing food for day ${currDay}`);
    buildTodayFoodArr(NUM_OF_FOOD);
    displayFood();
}

const resetVars = () => {
    earning = 0;
    happyCust = 0;
    currCost = [];
    todayFood.splice(0, todayFood.length); //empty array without reassigning
    todayCust.splice(0, todayCust.length);
}

const cleaningSlots = () => {
    //remov
    $('.empty').empty();
    $('.customer').addClass('empty');
    
}

const updateDisplay = () => {
    $('#day').text(`Day: ${currDay}`);
    $('#money').text(`SGD ${earning}`);
    $('#happy').text(`${String.fromCodePoint(128523)} ${happyCust}`); //&#128523; smiley deliciously 😋
    //&#128545; angry face 😡
}

const getUniqueSuperheroes = (num) => {
    let i = 1;
    let newSuperheroID = 0;
    let uniqueID = [];
    while (i <= num) {
        newSuperheroID = generateRandomSuperheroID();
        if ((!uniqueID.includes(newSuperheroID)) && (!LIST_OF_BROKEN_HEROES.includes(newSuperheroID))) {
            uniqueID.push(newSuperheroID);
            i++;
        };
    }
    return uniqueID;
}

const delayedEntrance = (callback, timer) => {
    return new Promise(resolve => {
        setTimeout(() => {
            callback();
            resolve();
        }, timer);
    });
};

const fetchCustomer = (uniqueID) => {
    const currCust = new Customer();
    $.ajax({
        url: 'https://www.superheroapi.com/api.php/10158656646217518/' + getRandom(uniqueID)
    }).then(
        (data) => {
            currCust.custName = data.name;
            currCust.custImage = data.image.url;
            currCust.enter();
            currCust.order(randomizeCustOrder());
            todayCust.push(currCust);
        })
        .catch(error => {
            console.log('err: ', error);
        });
}

const keepCustomerComeIn = (num) => {
    const uniqueID = getUniqueSuperheroes(5);

    delayedEntrance(() => {
        fetchCustomer(uniqueID);
    }, CUST_DELAY_IN_MS)
        .then(() => {
            return delayedEntrance(() => {
                fetchCustomer(uniqueID);
            }, CUST_DELAY_IN_MS)
        })
        .then(() => {
            return delayedEntrance(() => {
                fetchCustomer(uniqueID);
            }, CUST_DELAY_IN_MS)
        })
        .then(() => {
            return delayedEntrance(() => {
                fetchCustomer(uniqueID);
            }, CUST_DELAY_IN_MS)
        })
        .then(() => {
            return delayedEntrance(() => {
                fetchCustomer(uniqueID);
            }, CUST_DELAY_IN_MS)
        })

}

const openStore = () => {
    console.log(`store is open for day ${currDay}`);
    isStoreOpen = true;
    earning += 100;
    happyCust += 5;
    //generate customer with random order till the timer run out
    keepCustomerComeIn(NUM_OF_DAILY_CUST);


}

const closeStore = () => {
    console.log(`closing store for day ${currDay}`);
    isStoreOpen = false;
}


const progress = (timeleft, timetotal, $element) => {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, timeleft == timetotal ? 0 : 1000, 'linear');
    if (timeleft > 0) {
        setTimeout(() => {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    } else {
        setTimeout(() => {
            closeStore();//calculate the summary
            setMessage(DAY_SUMMARY[currDay], START_DAY);
            setTimeout(displayMessage, 1000);
        }, 1000);
    }

};

const prepareStore = () => {
    prepareFood();
    resetVars();
    updateDisplay();
}

const startDay = (day, DAY_SECONDS) => {
    console.log(`Started day ${day}`);
    prepareStore(); //all the display preparation
    openStore(); //where customer come in
    progress(DAY_SECONDS, DAY_SECONDS, $('#timebar'));
}

const displayMessage = () => {
    $modal.css('display', 'block');
}

const closeMessage = () => {
    $modal.css('display', 'none');
}

const setMessage = (newContent, buttonText = 'Next') => {
    $modalContent.text(newContent);
    $messageButton.text(buttonText);
}

//Event listener
$messageButton.on('click', (Event) => {
    closeMessage();

    //check if start new day
    if ($messageButton.text() === START_DAY) {
        currDay++;
        startDay(currDay, DAY_SECONDS);
    }
});

//main
$(() => {
    //Day Cycle
    setMessage(DAY_MESSAGE[currDay], START_DAY);
    setTimeout(displayMessage, 1000);







});