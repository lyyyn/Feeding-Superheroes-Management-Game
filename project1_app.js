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
const DAY_MESSAGE = ['Ready for your first day?']
const DAY_SUMMARY = ['', 'Summary of Day 1','Summary of Day 2','Summary of Day 3','Summary of Day 4','Summary of Day 5'];

let currDay = 0;

//DOM variables  
const $modal = $('#modal');
const $modalContent = $('#modal-content');
const $messageButton = $('#modal-close');

//various functions
const progress = (timeleft, timetotal, $element) => {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, timeleft == timetotal ? 0 : 1000, 'linear');
    if (timeleft > 0) {
        setTimeout(() => {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    } else {
        setTimeout(() => {
            setMessage(DAY_SUMMARY[currDay], START_DAY);
            setTimeout(displayMessage, 1000);
        }, 1000);
    }

};

const startDay = (day) => {
    console.log(`Started day ${day}`);
    progress(5, 5, $('#timebar'));
    
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
        startDay(currDay);
    }
});

//main
$(() => {
    //Day Cycle
    setMessage(DAY_MESSAGE[currDay],START_DAY); 
    setTimeout(displayMessage, 1000);







});