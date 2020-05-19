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
        return todayFood[getRandom(arr)];
    };
}

const orderFormat = (arr) => {
    let saying = '';
    saying += getRandom(ORDER_GREETINGS) + '</br>';
    arr.forEach((element, index) => {
        if (element != null) { saying += element.foodName + '</br>' };
    });
    return saying;
}

//classes
class Customer {
    constructor(cID, cName, cURL) {
        this.custID = cID;
        this.custName = cName;
        this.custMoney = 100;
        this.custImage = cURL;
        this.custPatience = 5; //willing to wait for 5 secs
        this.custOrder = [];
        this.custSlot = 0;
    }
    enter() {
        //enter the store
        //pick empty slot
        // console.log($('.empty:eq(0)').text()); /* debug */
        this.custSlot = $('.empty:eq(0)').attr('id');
        $('.empty:eq(0)').removeClass('empty');
        $('#' + this.custSlot)
            .css('background-image', `url("${this.custImage}")`);
    }
    greet() {
        //say something
        $('#' + this.custSlot)
            .html(`<span>${getRandom(ENTRY_GREETINGS)}</span>`);
    }
    order(cOrder) {
        this.custOrder = cOrder;
        //display the order bubble
        $('#' + this.custSlot)
            .html(`<span>${orderFormat(cOrder)}</span>`);
    }
    eat() {

    }
    leave() {
        //enter the store
    }


}

class Food {
    constructor(fdObj) {
        this.foodID = fdObj.foodID;
        this.foodName = fdObj.foodName;
        this.foodIngredients = fdObj.foodIngredients;
        this.foodOrigin = fdObj.foodOrigin;
        this.foodType = fdObj.foodType;
        this.foodMethod = fdObj.foodMethod;
        this.foodCostFrSupplier = fdObj.foodCostFrSupplier;
        this.foodPriceinSGD = fdObj.foodPriceinSGD;
        this.foodRating = fdObj.foodRating;
        this.foodQty = fdObj.foodQty;
        this.foodImage = fdObj.foodImage;
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
const ZERO = 0;
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
const DAY_MESSAGE = ['Ready for your first day?'];
const ENTRY_GREETINGS = ['Hullo', 'Hi', 'Ooosh!', 'How do you do', 'Goodday', 'G\'day', 'Good afternoon'];
const ORDER_GREETINGS = ['I want to order ', 'Gimme ', 'Maybe I\'ll get ', 'For today, it\'ll be ', 'Please give me ', 'How about ', 'I\'d like ', 'Just '];
const DAY_SUMMARY = ['', 'Summary of Day 1', 'Summary of Day 2', 'Summary of Day 3', 'Summary of Day 4', 'Summary of Day 5'];
const FOOD_ARR = [ //plan to read from files in the future
    {foodID:0,foodName:'Oolong Tea',foodIngredients:'Tea',foodOrigin:'China',foodType:'Drink',foodMethod:'Boil',foodCostFrSupplier:6,foodPriceinSGD:2,foodRating:2,foodQty:10,foodImage:'https://i.ibb.co/jDVRwQ0/drink-tea.png'},
    {foodID:1,foodName:'Arabica Coffee',foodIngredients:'Coffee',foodOrigin:'Indonesia',foodType:'Drink',foodMethod:'Boil',foodCostFrSupplier:15000,foodPriceinSGD:2.5,foodRating:2,foodQty:10,foodImage:'https://i.ibb.co/5xy7jMz/drink-coffee.png'},
    {foodID:2,foodName:'Kunlun Water',foodIngredients:'Water',foodOrigin:'China',foodType:'Drink',foodMethod:'Boil',foodCostFrSupplier:5,foodPriceinSGD:1.5,foodRating:1,foodQty:10,foodImage:'https://i.ibb.co/kQ9GXxS/drink-water.png'},
    {foodID:3,foodName:'Yunnan Broccoli',foodIngredients:'Broccoli',foodOrigin:'China',foodType:'Veggie',foodMethod:'Steam',foodCostFrSupplier:9,foodPriceinSGD:4,foodRating:1,foodQty:10,foodImage:'https://i.ibb.co/7b33T88/food-steam-Broccoli.png'},
    {foodID:4,foodName:'Egg Custard',foodIngredients:'Egg',foodOrigin:'China',foodType:'Protein',foodMethod:'Steam',foodCostFrSupplier:15.6,foodPriceinSGD:5.25,foodRating:1,foodQty:10,foodImage:'https://i.ibb.co/GcPm5wf/food-steam-Egg.png'},
    {foodID:5,foodName:'Steam Tofu',foodIngredients:'Tofu',foodOrigin:'China',foodType:'Protein',foodMethod:'Steam',foodCostFrSupplier:12.5,foodPriceinSGD:4.5,foodRating:1,foodQty:10,foodImage:'https://i.ibb.co/yy2GcX8/food-steam-Tofu.png'},
    {foodID:6,foodName:'Hainan Chicken',foodIngredients:'Chicken',foodOrigin:'China',foodType:'Meat',foodMethod:'Steam',foodCostFrSupplier:18.25,foodPriceinSGD:6,foodRating:1,foodQty:10,foodImage:'https://i.ibb.co/whGnH4k/food-steamed-Chicken.png'},
    {foodID:7,foodName:'Steam Fish',foodIngredients:'Fish',foodOrigin:'China',foodType:'Meat',foodMethod:'Steam',foodCostFrSupplier:20.3,foodPriceinSGD:7,foodRating:2,foodQty:10,foodImage:'https://i.ibb.co/rssrvZL/food-steam-Fish.png'},
    {foodID:8,foodName:'Thai Rice',foodIngredients:'Rice',foodOrigin:'Thailand',foodType:'Carbo',foodMethod:'Steam',foodCostFrSupplier:40,foodPriceinSGD:3,foodRating:1,foodQty:10,foodImage:'https://i.ibb.co/TvddwdV/food-Rice.png'}
]

const todayFood = [];
const todayUniqueCustID = [];
const todayCust = [];


let currDay = ZERO;
let isStoreOpen = false;
let level = 1;
let earning = ZERO;
let happyCust = ZERO;
let currCost = ZERO;

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

const buildTodayFOOD_ARR = (num) => {
    let food = null;
    FOOD_ARR.forEach(obj => {
        food = new Food(obj);
        todayFood.push(food);
        // console.log(food);
    });
    // console.log(todayFood); /* debug */
}

const displayFood = () => {
    todayFood.forEach((element, index) => {
        //place in the tray
        $('.food:nth-child(' + (index + 1) + ')')
            .html(`<img src="${element.foodImage}" class="draggable" id="${element.foodID}">`)
    });
    //make food draggable
    $(".draggable").draggable({ helper: "clone" });
    //make box droppable
    $(".box").droppable({
        accept: ".draggable",
        drop: function (event, ui) {
            console.log("drop");
            $(this).removeClass("border").removeClass("over").removeClass("ui-droppable");
            let dropped = ui.draggable;
            let droppedOn = $(this);
            $(dropped).detach().css({ top: 0, left: 0 }).appendTo(droppedOn);
        },
        over: function (event, elem) {
            $(this).addClass("over");
            console.log("over");
        }
        ,
        out: function (event, elem) {
            $(this).removeClass("over");
        }
    });

    // $("#origin").droppable({
    //     accept: ".draggable", drop: function (event, ui) {
    //         console.log("drop");
    //         $(this).removeClass("border").removeClass("over");
    //         var dropped = ui.draggable;
    //         var droppedOn = $(this);
    //         $(dropped).detach().css({ top: 0, left: 0 }).appendTo(droppedOn);


    //     }
    // });
}

const prepareFood = () => {
    console.log(`preparing food for day ${currDay}`);
    buildTodayFOOD_ARR(NUM_OF_FOOD);
    displayFood();
}

const resetVars = () => {
    earning = ZERO;
    happyCust = ZERO;
    currCost = [];
    todayFood.splice(ZERO, todayFood.length); //empty array without reassigning
    todayCust.splice(ZERO, todayCust.length);
    todayUniqueCustID.splice(ZERO, todayUniqueCustID.length);
}

const cleaningSlots = () => {
    //remov
    $('.customer').css('background-image', '');
    $('.customer').empty();
    $('.customer').addClass('empty');

}

const updateDisplay = () => {
    $('#day').text(`Day: ${currDay}`);
    $('#money').text(`SGD ${earning}`);
    $('#happy').text(`${String.fromCodePoint(128523)} ${happyCust}`); //&#128523; smiley deliciously 😋
    //&#128545; angry face 😡
}

const delayedAction = (callback, timer) => {
    return new Promise(resolve => {
        setTimeout(() => {
            callback();
            resolve();
        }, timer);
    });
};

const fetchCustomer = (unqID) => {
    const currCust = new Customer();
    $.ajax({
        url: 'https://www.superheroapi.com/api.php/10158656646217518/' + unqID
    }).then(
        (data) => {
            todayCust.push(currCust);
            currCust.custID = data.id;
            currCust.custName = data.name;
            currCust.custImage = data.image.url;
            currCust.enter();
            delayedAction(() => {
                currCust.greet();
            }, CUST_DELAY_IN_MS)
                .then(() => {
                    return delayedAction(() => {
                        currCust.order(randomizeCustOrder());
                    }, CUST_DELAY_IN_MS)
                })
        })
        .catch(error => {
            console.log('err: ', error);
        });
}

const getUniqueSuperheroesID = () => {
    let newSuperheroID = generateRandomSuperheroID();
    while ((todayUniqueCustID.includes(newSuperheroID)) || (LIST_OF_BROKEN_HEROES.includes(newSuperheroID))) {
        newSuperheroID = generateRandomSuperheroID();
    };
    todayUniqueCustID.push(newSuperheroID);
    return newSuperheroID;
}

const keepCustomerComeIn = () => {
    delayedAction(() => {
        fetchCustomer(getUniqueSuperheroesID());
    }, CUST_DELAY_IN_MS)
        .then(() => {
            return delayedAction(() => {
                fetchCustomer(getUniqueSuperheroesID());
            }, CUST_DELAY_IN_MS)
        })
        .then(() => {
            return delayedAction(() => {
                fetchCustomer(getUniqueSuperheroesID());
            }, CUST_DELAY_IN_MS)
        })
        .then(() => {
            return delayedAction(() => {
                fetchCustomer(getUniqueSuperheroesID());
            }, CUST_DELAY_IN_MS)
        })
        .then(() => {
            return delayedAction(() => {
                fetchCustomer(getUniqueSuperheroesID());
            }, CUST_DELAY_IN_MS)
        })

}

const openStore = () => {
    console.log(`store is open for day ${currDay}`);
    isStoreOpen = true;
    earning += 100;
    happyCust += 5;
    //generate customer with random order till the timer run out
    keepCustomerComeIn();


}

const closeStore = () => {
    console.log(`closing store for day ${currDay}`);
    isStoreOpen = false;
    cleaningSlots();
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
    resetVars();
    prepareFood();
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