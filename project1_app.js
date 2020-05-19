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

class Ingredient {
    constructor() {
        this.name = name;
        this.cost = calculateCost();
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

//variable declaration
const START_DAY = 'Start Day';
const DAY_SECONDS = 20;
const DAY_MESSAGE = ['Ready for your first day?']
const DAY_SUMMARY = ['', 'Summary of Day 1','Summary of Day 2','Summary of Day 3','Summary of Day 4','Summary of Day 5'];
const CUSTOMER_LIST = {
    level: 1,
    customer_names: []
}

let currDay = 0;
let level = 1;
let earning = 0;
let happyCust = 0;

//DOM variables  
const $modal = $('#modal');
const $modalContent = $('#modal-content');
const $messageButton = $('#modal-close');

//various functions
const buyFood = () => {
    console.log(`buying food for day ${currDay}`);
}

const prepareFood = () => {
    console.log(`preparing food for day ${currDay}`);
}

const resetVars = () => {
    earning = 0;
    happyCust = 0;
}

const updateDisplay = () => {
    $('#day').text(`Day: ${currDay}`);
    $('#money').text(`SGD ${earning}`);
    $('#happy').text(`😍 ${happyCust}`); //&#128525; smiley with heart eyes
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
    buyFood();
    prepareFood();
    resetVars();
    updateDisplay();
}

const startDay = (day,DAY_SECONDS) => {
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
        startDay(currDay,DAY_SECONDS);
    }
});

//main
$(() => {
    //Day Cycle
    setMessage(DAY_MESSAGE[currDay],START_DAY); 
    setTimeout(displayMessage, 1000);







});