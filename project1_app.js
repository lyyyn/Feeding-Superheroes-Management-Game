//utility functions
const getRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

//classes
class Customer {
    constructor(name) {
        this.name = name;
        //get the stats using ajax using the name

        //do AJAX outside
        //https://www.superheroapi.com/api.php/10158656646217518/search/Agent%20Bob
        this.money = calculateMoney();
        // money = sum of ( intelligence : "10"
        // strength : "8"
        // speed : "13"
        // durability : "5"
        // power : "5"
        // combat : "20")

        this.preferredIngredients = getFaveIngredients(4);
        //arr of ingredients the ingredients array

    }
    enter() {
        //enter the store
    }
    leave() {
        //enter the store
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
const NUM_OF_FOOD = 9;
const DAY_MESSAGE = ['Ready for your first day?']
const DAY_SUMMARY = ['', 'Summary of Day 1', 'Summary of Day 2', 'Summary of Day 3', 'Summary of Day 4', 'Summary of Day 5'];
const CUSTOMER_LIST = {
    level: 1,
    customer_names: []
}

let currDay = 0;
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

//DOM variables  
const $modal = $('#modal');
const $modalContent = $('#modal-content');
const $messageButton = $('#modal-close');

//various functions
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
}

const updateDisplay = () => {
    $('#day').text(`Day: ${currDay}`);
    $('#money').text(`SGD ${earning}`);
    $('#happy').text(`${String.fromCodePoint(128523)} ${happyCust}`); //&#128523; smiley deliciously 😋
    //&#128545; angry face 😡
}

const openStore = () => {
    console.log(`store is open for day ${currDay}`);
    earning += 100;
    happyCust += 5;
}

const closeStore = () => {
    console.log(`closing store for day ${currDay}`);
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