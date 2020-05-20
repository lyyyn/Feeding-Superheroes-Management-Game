//variable declaration
const ZERO = 0;
const HAPPY = 'happy';
const ANGRY = 'angry';
const START_DAY = 'Start Day';
const DEFAULT_CURR = 'SGD';
const DAY_SECONDS = 20;
const CUST_DELAY_IN_MS = 500; //0.5 sec
const NUM_OF_SLOT = 5;
const NUM_OF_FOOD = 9;
const NUM_OF_SUPERHEROES = 729;
const NUM_OF_DAILY_CUST = 5;
const LIST_OF_BROKEN_HEROES = [51, 54, 74, 101, 113, 117, 131, 133, 134, 143, 164, 184, 205, 244, 283, 288, 290, 291, 292, 362, 447, 453, 511, 512, 552, 553, 593, 603, 629, 662, 682, 694, 698, 715, 721, 725];
const ORDER_COMPOSITION = [[0, 1, 2], [3], [4, 5, 6, 7], [8]]; //create into class and create instance
const ORDER_NULL_PROBABILITY = 30;
const DAY_MESSAGE_TITLE = ['Ready for your first day?'];
const WELCOME_MESSAGE_CONTENT = `Superheroes will teleport into our store soon. <br/>Just drag the food they order to the Superheroes image to serve. <br/>They will pay you when they leave, uhm.. <br/>provided that you completed the order before store close. <br/>`
const QUIZ_QUESTIONS = ['You look familiar. Are you', 'Hey! I think I know you', 'Do I know you?', 'Have we met before?', 'I\'ve seen you somewhere', 'And your name must be', 'I know you!', 'It\'s been a while,']
const ENTRY_GREETINGS = ['Hullo', 'Hi', 'Ooosh!', 'How do you do', 'Goodday', 'G\'day', 'Good afternoon'];
const ORDER_GREETINGS = ['I want to order ', 'Gimme ', 'Maybe I\'ll get ', 'For today, it\'ll be ', 'Please give me ', 'How about ', 'I\'d like ', 'Just '];
const FOOD_ARR = [ //plan to read from files in the future
    { foodID: 0, foodName: 'Oolong Tea', foodIngredients: 'Tea', foodOrigin: 'China', foodType: 'Drink', foodMethod: 'Boil', foodCostFrSupplier: 6, foodPriceinSGD: 2, foodRating: 2, foodQty: 10, foodImage: 'https://i.ibb.co/jDVRwQ0/drink-tea.png' },
    { foodID: 1, foodName: 'Arabica Coffee', foodIngredients: 'Coffee', foodOrigin: 'Indonesia', foodType: 'Drink', foodMethod: 'Boil', foodCostFrSupplier: 15000, foodPriceinSGD: 2.5, foodRating: 2, foodQty: 10, foodImage: 'https://i.ibb.co/5xy7jMz/drink-coffee.png' },
    { foodID: 2, foodName: 'Kunlun Water', foodIngredients: 'Water', foodOrigin: 'China', foodType: 'Drink', foodMethod: 'Boil', foodCostFrSupplier: 5, foodPriceinSGD: 1.5, foodRating: 1, foodQty: 10, foodImage: 'https://i.ibb.co/kQ9GXxS/drink-water.png' },
    { foodID: 3, foodName: 'Yunnan Broccoli', foodIngredients: 'Broccoli', foodOrigin: 'China', foodType: 'Veggie', foodMethod: 'Steam', foodCostFrSupplier: 9, foodPriceinSGD: 4, foodRating: 1, foodQty: 10, foodImage: 'https://i.ibb.co/7b33T88/food-steam-Broccoli.png' },
    { foodID: 4, foodName: 'Egg Custard', foodIngredients: 'Egg', foodOrigin: 'China', foodType: 'Protein', foodMethod: 'Steam', foodCostFrSupplier: 15.6, foodPriceinSGD: 5.25, foodRating: 1, foodQty: 10, foodImage: 'https://i.ibb.co/GcPm5wf/food-steam-Egg.png' },
    { foodID: 5, foodName: 'Steam Tofu', foodIngredients: 'Tofu', foodOrigin: 'China', foodType: 'Protein', foodMethod: 'Steam', foodCostFrSupplier: 12.5, foodPriceinSGD: 4.5, foodRating: 1, foodQty: 10, foodImage: 'https://i.ibb.co/yy2GcX8/food-steam-Tofu.png' },
    { foodID: 6, foodName: 'Hainan Chicken', foodIngredients: 'Chicken', foodOrigin: 'China', foodType: 'Meat', foodMethod: 'Steam', foodCostFrSupplier: 18.25, foodPriceinSGD: 6, foodRating: 1, foodQty: 10, foodImage: 'https://i.ibb.co/whGnH4k/food-steamed-Chicken.png' },
    { foodID: 7, foodName: 'Steam Fish', foodIngredients: 'Fish', foodOrigin: 'China', foodType: 'Meat', foodMethod: 'Steam', foodCostFrSupplier: 20.3, foodPriceinSGD: 7, foodRating: 2, foodQty: 10, foodImage: 'https://i.ibb.co/rssrvZL/food-steam-Fish.png' },
    { foodID: 8, foodName: 'Thai Rice', foodIngredients: 'Rice', foodOrigin: 'Thailand', foodType: 'Carbo', foodMethod: 'Steam', foodCostFrSupplier: 40, foodPriceinSGD: 3, foodRating: 1, foodQty: 10, foodImage: 'https://i.ibb.co/TvddwdV/food-Rice.png' }
];
const SUPPLIER_ARR = [
    { supplierCountry: 'Singapore', supplierCurrency: 'SGD', currencyRate: 1 },
    { supplierCountry: 'China', supplierCurrency: 'CNY', currencyRate: 4.5 },
    { supplierCountry: 'Thailand', supplierCurrency: 'THB', currencyRate: 20.808 },
    { supplierCountry: 'Indonesia', supplierCurrency: 'IDR', currencyRate: 9413.1 }
];

//Chart Global Config
Chart.defaults.global.legend.display = false;


//Audio variables
const SND_CUST_ENTER = new Audio('./Sounds/cust_enter.mp3');
const SND_STORE_CLOSE = new Audio('./Sounds/store_close.mp3');

//DOM variables  
const $modal = $('#modal');
const $modalTitle = $('#modal-title');
const $modalContent = $('#modal-content');
const $modalButton = $('#modal-close');
const $customer = $('.customer');
const $answer = $('#answer');

//utility functions
const getRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const generateRandomFoodItem = (percentage, arrPossibleFood) => { //probability of returning null or any of the array
    if ((Math.floor(Math.random() * 101)) <= percentage) {
        return null;
    } else {
        return shop.todayFood[getRandom(arrPossibleFood)];
    };
};

const formatCurr = (float) => {
    float = parseFloat(float).toFixed(2);
    return DEFAULT_CURR + ' ' + float.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const shuffle = (arr) => {
    let arrCnt = arr.length;
    let tempArr;
    let index;

    // While there are elements in the array
    while (arrCnt > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * arrCnt);
        // Decrease arrCnt by 1
        arrCnt--;
        // And swap the last element with it
        tempArr = arr[arrCnt];
        arr[arrCnt] = arr[index];
        arr[index] = tempArr;
    }
    return arr;
}


//classes
class Shop {
    constructor() {
        this.currDay = ZERO;
        this.isStoreOpen = false;
        this.level = 1;
        this.todayEarning = ZERO;
        this.todayCost = ZERO;
        this.todayProfit = ZERO;
        this.todayHappyCust = ZERO;
        this.totalEarning = ZERO;
        this.totalProfit = ZERO;
        this.totalHappyCust = ZERO;
        this.todayCust = [];
        this.todayFood = [];
        this.todaySupplier = [];
        this.todayUniqueCustID = [];
        this.todaySummary = ['']; //it's purposely initiated with a empty string to skip the 0 index of array
        this.historicalEarning = [''];
        this.historicalCost = [''];
        this.historicalProfit = [''];
    }
    getCustomerByID(id) {
        return this.todayCust.find(customer => customer.custID === id);
    }
    getFoodByID(id) {
        return this.todayFood.find(food => food.foodID === id);
    }
    getSupplierByCountry(country) {
        return this.todaySupplier.find(supplier => supplier.originCountry === country);
    }
    prepare() {
        resetVars();
        prepareFood();
        updateDisplay();
    }
    open() {
        console.log(`store is open for day ${this.currDay}`);
        shop.isStoreOpen = true;
        //generate customer with random order till the timer run out
        generateInitialCustomer();
    }
    recordDailySales() {
        this.historicalEarning.push(this.todayEarning);
        this.historicalCost.push(this.todayCost);
        this.historicalProfit.push(this.todayProfit);
    }
    formatAndSaveSalesSummary() {
        let salesSummary = '';
        salesSummary += `<table>`;
        salesSummary += `<tr><td><table>`;
        salesSummary += `<tr><td>Today's Sales</td><td>${formatCurr(this.todayEarning)}</td></tr>`;
        salesSummary += `<tr><td>Cost of Food</td><td>${formatCurr(this.todayCost)}</td></tr>`;
        salesSummary += `<tr><td>Today's Profit</td><td>${formatCurr(this.todayProfit)}</td></tr>`;
        salesSummary += `</table></td>`;
        salesSummary += `<td><table>`
        salesSummary += `<tr><td>Happy Customer</td><td>${this.todayHappyCust}</td></tr>`;
        salesSummary += `<tr><td>Upset Customer</td><td>${ZERO}</td></tr>`;
        salesSummary += `</table></td></tr>`;
        salesSummary += `<tr><td><canvas id="pieChart"></canvas></td></tr>`;
        salesSummary += `</table>`;
        this.todaySummary.push(salesSummary);
    }
    createPieChart() {
        const ctx = $('#pieChart');
        const pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Cost', 'Profit'],
                datasets: [{
                    label: 'Today\'s Sales',
                    data: [this.todayCost.toFixed(2), this.todayProfit.toFixed(2)],
                    backgroundColor: [
                        'rgb(240, 58, 23)',
                        'rgb(1, 123, 196)'
                    ],
                    borderColor: [
                        'rgb(0, 0, 0)',
                        'rgb(0, 0, 0)'
                    ],
                    borderWidth: 2
                }]
            }
        });

    }
    close() {
        SND_STORE_CLOSE.play();
        console.log(`closing store for day ${this.currDay}`);
        shop.isStoreOpen = false;
        cleaningSlots();
        delayedAction(() => {
            this.recordDailySales();
            this.formatAndSaveSalesSummary();
            setMessage(`Summary for Day ${(this.currDay)}`, START_DAY, this.todaySummary[(this.currDay)]);
            this.createPieChart();
        }, CUST_DELAY_IN_MS)
    }
};

class Customer {
    constructor() {
        this.custID = '';
        this.custName = '';
        this.custGender = '';
        this.custMoney = 100;
        this.custImage = '';
        this.custPatience = 5; //willing to wait for 5 secs
        this.custOrder = [];
        this.custFulfilled = [];
        this.custSlot = 0;
        this.custOrderSaying = '';
        this.custOrderCompleted = true
    }
    enter() {
        if (shop.isStoreOpen) {
            //enter the store
            SND_CUST_ENTER.play();
            //pick empty slot
            this.custSlot = $('.empty:eq(0)').attr('id');
            $('.empty:eq(0)').removeClass('empty');
            $('#' + this.custSlot)
                .css('background-image', `url("${this.custImage}")`)
                .attr('custid', this.custID);
        }
    }
    greet() {
        //say something
        if (shop.isStoreOpen) {
            $('#' + this.custSlot)
                .html(`<span>${getRandom(ENTRY_GREETINGS)}</span>`);
        }
    }
    order(arr4OrderedFoods) {
        this.custOrder = arr4OrderedFoods;
        this.sayOrder();
    }
    sayOrder() {
        let saying = '';
        saying += getRandom(ORDER_GREETINGS) + '</br>';
        this.custOrder.forEach((orderedFood, index) => {
            if (this.custFulfilled.indexOf(orderedFood) >= 0) {
                saying += `<del>${orderedFood.foodName}</del><br/>`;
            } else if (orderedFood != null) {
                saying += `${orderedFood.foodName} </br>`;
            };
        });

        this.custOrderSaying = saying;

        //display the order bubble
        if (shop.isStoreOpen) {
            $('#' + this.custSlot)
                //&#128161;💡  &#128172;💬  &#129300;🤔
                .html(`<button class="quiz" onclick="askQuiz(event)">${String.fromCodePoint(128172)}</button> <span>${this.custOrderSaying}</span>`);
        }
    }
    checkOrder(foodID) {
        const servedFood = shop.getFoodByID(parseInt(foodID));
        if ((this.custOrder.indexOf(servedFood) >= 0) && (shop.isStoreOpen)) {
            this.custFulfilled.push(servedFood);
            this.sayOrder();
            if (this.isOrderCompleted()) {
                delayedAction(() => {
                    this.settleBill();
                    this.leave(HAPPY);
                }, CUST_DELAY_IN_MS)
                    .then(() => {
                        return delayedAction(() => {
                            if (shop.isStoreOpen) {
                                fetchCustomer(getUniqueSuperheroesID());
                            }
                        }, CUST_DELAY_IN_MS)
                    });
            };
        } else {
            console.log('complain, served wrong food');
        }
    }
    isOrderCompleted() {
        if (this.custOrder.length === this.custFulfilled.length) {
            return true;
        } else {
            return false;
        };
    }
    settleBill() {
        let receipt = 0;
        let cost = 0;
        let profit = 0;
        this.custOrder.forEach(food => {
            receipt += food.foodPriceinSGD;
            cost += food.foodCostFrSupplier / shop.getSupplierByCountry(food.foodOrigin).originRate;
            profit += food.foodPriceinSGD - (food.foodCostFrSupplier / shop.getSupplierByCountry(food.foodOrigin).originRate);
            console.log(food.foodName + ': ' + food.foodPriceinSGD);
        })
        console.log('sales: ' + receipt);
        console.log('cost: ' + cost.toFixed(2));
        console.log('profit: ' + profit.toFixed(2));
        shop.todayEarning += receipt;
        shop.totalEarning += receipt;
        shop.todayCost += cost;
        shop.todayProfit += profit;
        shop.totalProfit += profit;
        updateDisplay();
    }
    leave(mood) {
        //leave the store
        if (mood === HAPPY) {
            shop.todayHappyCust++;
            shop.totalHappyCust++;
            updateDisplay();
        }
        console.log(this.custName + ' leave store');
        $('#' + this.custSlot)
            .empty()
            .css('background-image', '')
            .attr('custid', '')
            .addClass('empty');
    }
};

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
};

class SupplierOrigin {
    constructor(spObj) {
        this.originCountry = spObj.supplierCountry;
        this.originCurrency = spObj.supplierCurrency;
        this.originRate = spObj.currencyRate;
    }
};

//instances
const shop = new Shop([]);


//various functions
const randomizeCustOrder = () => { //array of 4 food item from todayFood
    const cOrder = [];
    //1st random between null or 0-2 (drink) -> null = not ordering drink
    //2nd random between null or 3 (veggie) -> null = not ordering veggie
    //3rd random between null or 4-7 (protein/meat) -> null = not ordering protein/meat
    //4th random between null or 8 (rice) -> null = not ordering rice
    ORDER_COMPOSITION.forEach(element => {
        let randomFoodItem = generateRandomFoodItem(ORDER_NULL_PROBABILITY, element);
        if (randomFoodItem !== null) {
            cOrder.push(randomFoodItem);
        }
    });
    //force customer to order at least 1 drink
    if (cOrder.length === 0) { cOrder.push(generateRandomFoodItem(ZERO, ORDER_COMPOSITION[0])) };
    return cOrder;
};

const buildTodayFoodArr = () => {
    let food = null;
    FOOD_ARR.forEach(obj => {
        food = new Food(obj);
        shop.todayFood.push(food);
    });
};

const buildTodaySupplierArr = () => {
    let supplier = null;
    SUPPLIER_ARR.forEach(obj => {
        supplier = new SupplierOrigin(obj);
        shop.todaySupplier.push(supplier);
    });
};

const displayFood = () => {
    shop.todayFood.forEach((element, index) => {
        //place in the tray
        $('.food:nth-child(' + (index + 1) + ')')
            .html(`<img src="${element.foodImage}" class="draggable" id="${element.foodID}" title="${element.foodName}">`)
    });
    //make food draggable
    $(".draggable").draggable({ helper: "clone" });
    //make customer droppable
    $(".customer").droppable({
        accept: ".draggable",
        drop: function (event, ui) {
            if (shop.isStoreOpen) {
                $(this).removeClass("border").removeClass("over");
                const custID = $(event.target).attr('custid');
                const thisCust = shop.getCustomerByID(custID);
                thisCust.checkOrder(ui.draggable.attr('id'));
            }
        },
        over: function (event, elem) {
            if (shop.isStoreOpen) {
                $(this).addClass("over");
            }
        },
        out: function (event, elem) {
            $(this).removeClass("over");
        }
    });
};

const prepareFood = () => {
    console.log(`preparing food for day ${shop.currDay}`);
    buildTodaySupplierArr();
    buildTodayFoodArr();
    displayFood();
};

const resetVars = () => {
    shop.todayEarning = ZERO;
    shop.todayHappyCust = ZERO;
    shop.todayCost = ZERO;
    shop.todayProfit = ZERO;
    shop.todayFood.splice(ZERO, shop.todayFood.length); //empty array without reassigning
    shop.todayCust.splice(ZERO, shop.todayCust.length);
    shop.todayUniqueCustID.splice(ZERO, shop.todayUniqueCustID.length);
};

const cleaningSlots = () => {
    $customer.css('background-image', '');
    $customer.empty();
    $customer.addClass('empty');
    $customer.removeClass('over');
    $customer.attr('custid', '');
    $answer.empty();
};

const updateDisplay = () => {
    $('#day').text(`Day: ${shop.currDay}`);
    $('#money').text(`SGD ${shop.totalProfit.toFixed(2)}`);
    $('#happy').text(`${String.fromCodePoint(128523)} ${shop.totalHappyCust}`); //&#128523; smiley deliciously 😋
    //&#128545; angry face 😡 
};

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
            shop.todayCust.push(currCust);
            currCust.custID = data.id;
            currCust.custName = data.name;
            currCust.custGender = data.appearance.gender;
            currCust.custImage = data.image.url;
            currCust.enter();
            delayedAction(() => {
                if (shop.isStoreOpen) {
                    currCust.greet();
                }
            }, CUST_DELAY_IN_MS)
                .then(() => {
                    return delayedAction(() => {
                        if (shop.isStoreOpen) {
                            currCust.order(randomizeCustOrder());
                        }
                    }, CUST_DELAY_IN_MS)
                })
        })
        .catch(error => {
            console.log('err: ', error);
        });
};

const getUniqueSuperheroesID = () => {
    //ensure the superheroes of 1 day is unique
    let newSuperheroID = Math.ceil(Math.random() * NUM_OF_SUPERHEROES);
    while ((shop.todayUniqueCustID.includes(newSuperheroID)) || (LIST_OF_BROKEN_HEROES.includes(newSuperheroID))) {
        newSuperheroID = Math.ceil(Math.random() * NUM_OF_SUPERHEROES);;
    };
    shop.todayUniqueCustID.push(newSuperheroID);
    return newSuperheroID;
};

const generateInitialCustomer = () => {
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
};

const progress = (timeleft, timetotal, $element) => {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div')
        .animate({ width: progressBarWidth }, timeleft == timetotal ? 0 : 1000, 'linear')
        .html(timeleft + 's');
    if (timeleft > 0) {
        setTimeout(() => {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    } else {
        setTimeout(() => {
            shop.close();//calculate the summary
            setTimeout(displayMessage, 1000);
        }, 1000);
    }

};

const startDay = (DAY_SECONDS) => {
    shop.currDay++;
    console.log(`Started day ${shop.currDay}`);
    shop.prepare(); //all the display preparation
    shop.open(); //where customer come in
    progress(DAY_SECONDS, DAY_SECONDS, $('#timebar'));
};

const displayMessage = () => {
    $modal.css('display', 'block');
};

const closeMessage = () => {
    $modal.css('display', 'none');
};

const setMessage = (newTitle, buttonText = 'Next', newContent = '') => {
    $modalTitle.text(newTitle);
    if (newContent === '') {
        $modalContent.css('display', 'none');
    } else {
        $modalContent.html(newContent);
        $modalContent.css('display', 'block');
    }
    $modalButton.text(buttonText);
};

const checkAnswer = (event,correctID) => {
    const selectedID = $(event.target).val();
    const hero = shop.getCustomerByID(correctID.toString());
    const pronouns = (hero.custGender === 'Female')? 'She' : 'He';
    if (selectedID === correctID.toString()) {
        $answer.empty();
        $answer.html(`<p>You've correctly identified ${hero.custName}.</p>`);        
    } else{
        $answer.empty();
        $answer.html(`<p>Sorry, you must be mistaken.</p>`);   
    }
};

const askQuiz = (event) => {
    //get any random 2 of today's customer + correct customer
    let wrong = null;
    let wrongCnt = 0;
    const correctID = $(event.target).parent().attr('custid');
    let answer = [];

    while (wrongCnt < 2) {
        wrong = getRandom(shop.todayCust);
        if ((wrong.custID != correctID) && (answer.filter(cust => cust.custID === wrong.custID).length === 0)) {
            answer.push(wrong);
            wrongCnt++;
        }

    }
    answer.push(shop.getCustomerByID(correctID));
    console.log(answer);

    $answer.empty();
    $answer.append(`<div>${getRandom(QUIZ_QUESTIONS)}</div>`);
    shuffle(answer).forEach(hero => {
        $answer.append(`<div><input type="radio" value="${hero.custID}" onclick="checkAnswer(event,${correctID})"> ${hero.custName}</div>`);
    })

    console.log(shop.getCustomerByID(correctID).custName);
};

//Event listener
$modalButton.on('click', () => {
    closeMessage();

    //check if start new day
    if ($modalButton.text() === START_DAY) {
        startDay(DAY_SECONDS);
    }
});

$(document).on('keypress', function (key) {
    if ((key.which == 13) && $modal.css('display') === 'block') {
        $modalButton.click();
    }
});

//main
$(() => {
    //Day Cycle
    setMessage(DAY_MESSAGE_TITLE[shop.currDay], START_DAY, WELCOME_MESSAGE_CONTENT);
    setTimeout(displayMessage, 1000);







});