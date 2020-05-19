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
const CURR_DAY = 1;
const DAY_MESSAGE = ['','This is your first day. Click start button to start.']
const dailySummary = [];

//DOM variables  
const $modal = $('#modal');
const $modalContent = $('#modal-content');
const $messageButton = $('#modal-close');

//various functions
const startDay = (day) => {
    console.log('day started');
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
$messageButton.on('click', closeMessage);

//main
$(() => {
    //Day 1
    setMessage(DAY_MESSAGE[CURR_DAY],'Start'); 
    setTimeout(displayMessage, 1000);

    startDay(CURR_DAY);





});