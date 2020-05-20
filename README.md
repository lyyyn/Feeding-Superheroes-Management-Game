# Feeding-Superheroes-Management-Game
A simple game built with JS, HTML, CSS and free public API. A food store serving superheroes with built in trivia games for extra tip.
 
## Game Descriptions
You will be managing a shop especially serving superheroes. Drag and drop food dishes to customers. Each day will be timed, and at the end of the day, there will be a day summary of your sales.
When you completed the set requested by superhero, you will get paid. On top of that, if you recognized the superheroes and guessed the name correctly, they will give you extra tip, provided that you completed their order, of course.

## Game Link
[https://lyyyn.github.io/Feeding-Superheroes/](https://lyyyn.github.io/Feeding-Superheroes-Management-Game/)

## Technologies
* **HTML**
* **CSS**
* **Javascript**
* **Jquery** is used for DOM manipulation
* **Jquery UI** is used for draggable and droppable 
* **Chart.js** is used for the charting
* **Ajax** is used to request get superheroes information from API

## API used
* [https://superheroapi.com/](https://superheroapi.com/)
The **API** is used to get the superheroes details and image.
* [https://quickchart.io/](https://quickchart.io/)
The **API** is used to create chart.

## Approaches Taken
It started with the idea to create shop management. I browse through the list of free APIs, and think of what game I can come out of from it. From there, I draw out a rough sketch of what I want it to be. 
From the plan, I drafted a priority list of function, step by step of what I need to develop first, second, third and so on. And I work on it.
Of course the game doesn't turned out exactly as I originally planned. Along the way, I found new ideas, dropped some ideas. But I generally think it's better than what I hoped for.

## Accomplishments  
* The game actually can play infinitely. The day system is created in a way that it will just loop infinitely. 
* The look and feel are designed to aligned with the superheroes theme.
* The fully randomized option, to fully engage user, not to memorize to win it.
* It has quite a balance between serving food and recognizing superheroes, it's designed in a way so that on average, if you don't know the superheroes, rather than clicking multiple times on it just to recognize it, it will make more economical sense to just ignore and serve the customer. But if you do know the superheroes, it will not take you long, should be less than 2 secs to get that extra tip.
* The normal alert from browser is replaced by modal. 
* Utilize class for a better OOP, it also serve as a foundation for database.
* Parameterized almost everything. There should be very minimal magic number floating around.

## Difficulties Faced
* The drag and drop took me quite some time. I finally understand that clone need to be done twice (at the draggable and droppable, both, for it to stay). In the end, the drag and drop mechanism doesn't require the clone.
* The 2 decimal number calculation that didn't tally randomly. After spending long hours on this, I decided to just keep it at full float and only convert to 2 decimal on display. I also learned about how javascript handle float. Good lesson. 
* Refactoring & reorganizing code. I think this is the biggest challenge. 

## Game Instructions
* Start your day. 
* Serve the ordered food to the superheroes or the counter in front of them. Once the order is fully served, they will pay and leave.
* As long as the store is open, new customer will keep coming in.
* There's a [...] icon on top of the order, you can click on it to guess the name of the superheroes. Guess correctly and you will get extra tip, provided you completed the order, of course.

## Wireframe Design and User Stories
1. This is the first sketch of how I plan it.
<img src="https://github.com/lyyyn/Feeding-Superheroes-Management-Game/blob/master/mockup/Step%201.png" width="500px"/>
<img src="https://github.com/lyyyn/Feeding-Superheroes-Management-Game/blob/master/mockup/Step%202.png" width="500px"/>

2. then I created the wireframe in HTML, nothing fancy
<img src="https://github.com/lyyyn/Feeding-Superheroes/blob/master/mockup/wireframe1.png" width="500px"/>

3. Then I develop the basic functionality, the day loop with timer, the food layout, the customer coming in, the modal pop up at the beginning and end of day.
<img src="https://github.com/lyyyn/Feeding-Superheroes-Management-Game/blob/master/mockup/firstFunctionalVersionA.png" width="500px"/>
<img src="https://github.com/lyyyn/Feeding-Superheroes-Management-Game/blob/master/mockup/firstFunctionalVersionB.png" width="500px"/>
<img src="https://github.com/lyyyn/Feeding-Superheroes-Management-Game/blob/master/mockup/firstFunctionalVersionC.png" width="500px"/>

4. Then I prettify the look.
<img src="https://github.com/lyyyn/Feeding-Superheroes-Management-Game/blob/master/mockup/secondFunctionalVersionA.png" width="500px"/>
<img src="https://github.com/lyyyn/Feeding-Superheroes-Management-Game/blob/master/mockup/secondFunctionalVersionB.png" width="500px"/>
<img src="https://github.com/lyyyn/Feeding-Superheroes-Management-Game/blob/master/mockup/secondFunctionalVersionC.png" width="500px"/>

5. Then I add more functionality to it. The drag and drop to serve the food to customer, the customer leaving, the customer pay, add the end day calculation, display the EOD summary, balancing the number economically, add the quiz and tipping logic. Added sound effect on it too.
<img src="https://github.com/lyyyn/Feeding-Superheroes-Management-Game/blob/master/mockup/thirdFunctionalVersionA.png" width="500px"/>
<img src="https://github.com/lyyyn/Feeding-Superheroes/blob/master/mockup/thirdFunctionalVersionB.png" width="500px"/>
<img src="https://github.com/lyyyn/Feeding-Superheroes-Management-Game/blob/master/mockup/thirdFunctionalVersionC.png" width="500px"/>
<img src="https://github.com/lyyyn/Feeding-Superheroes-Management-Game/blob/master/mockup/thirdFunctionalVersionD.png" width="500px"/>
<img src="https://github.com/lyyyn/Feeding-Superheroes-Management-Game/blob/master/mockup/thirdFunctionalVersionE.png" width="500px"/>
<img src="https://github.com/lyyyn/Feeding-Superheroes-Management-Game/blob/master/mockup/thirdFunctionalVersionF.png" width="500px"/>
<img src="https://github.com/lyyyn/Feeding-Superheroes-Management-Game/blob/master/mockup/thirdFunctionalVersionG.png" width="500px"/>
<img src="https://github.com/lyyyn/Feeding-Superheroes-Management-Game/blob/master/mockup/thirdFunctionalVersionH.png" width="500px"/>
<img src="https://github.com/lyyyn/Feeding-Superheroes-Management-Game/blob/master/mockup/thirdFunctionalVersionI.png" width="500px"/>
<img src="https://github.com/lyyyn/Feeding-Superheroes-Management-Game/blob/master/mockup/thirdFunctionalVersionJ.png" width="500px"/>

## Additional Features were under Considerations
- Add jukebox capability where player can select the background sound
- Add option for player to select the order to be displayed as image instead of wording
- Add option to get player name at the start of the game and address them personally thoroughout
- Capability to "stock" up, and buying inventory from oversea market, directly using the historical exchange rate API
- Ability to save, link to database for better data management
- Function to level up, getting access to different type of food
- Various achievement to unlock, like serving up to xx customer, earning xxx, profiting xxx, spent xxx on supplies, get tipped xxx, serving up all marvel's superheroes, recognized xxx superheroes, etc.
- Marketplace to spent accumulated money, for eg. discount from supplier, auto restocking everyday, extra tip from superheroes, ability to buy hint for guessing the superhero name, intel service to auto-guess superhero's name, etc.
- Weekly leaderboard
- Function to send challenge to friend
- incorporate touch, tap and drag and drop for mobile device

## Credits
- Thank you to Shan for helping with the initial stage, especially for recommending to create a class for shop. It turned out to be very useful and versatile, I've been using it to track all the variable. To think that if this is saveable in the future, it opened up to many possibilities. Also for feedback on the color of the timer bar :) It was polkadot by the way.
- Thank you to Siew La for helping me to test the game and feedback. Thanks to her now the food can also be delivered to counter, on top of dragging to the customer. Also thank you for spending time troubleshooting with me for the 2 decimal point thingy.
- Thank you to YS for sending the article to explain on the 2 decimal rounding issue with javascript. So we stop wondering.
- Thank you to Shi Jie for sharing his drag and drop code for me to review. It helped me to understand the .clone().
- Thank you to these people I don't know on the net for their amazing CSS that assist in prettifying this game and the timer that I based my daily loop on:
* Polkadot background: https://codepen.io/aanjulena/pen/xGrKh
* Speech bubble & modal bubble, modal background: https://codepen.io/Lyyyn/pen/VwvMKPa
* Wood grain: https://codepen.io/melissamcewen/pen/EPBPbv
* Metal: http://simurai.com/lab/2011/08/21/brushed-metal
* Progress Bar: https://stackoverflow.com/questions/24530908/showing-a-time-countdown-progress-bar


