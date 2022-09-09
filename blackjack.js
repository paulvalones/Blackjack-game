var player = {
    playerName: "Paul",
    playerChip: 145
}
var {playerName, playerChip} = player;
var cardList = [];
var sum = 0;
var hasBlackJack = false;
var isAlive = false;
var message = "";
var messageEl = document.querySelector("#message-el");
var cardEl = document.querySelector("#cards");
var sumEl = document.querySelector("#sum");
var playerEl = document.querySelector("#player-el");

playerEl.textContent = playerName + ": $" + playerChip;

function startGame() {
    // if (!isAlive) {
        isAlive = true;
        hasBlackJack = false;
        var firstCard = getRandomCard();
        var secondCard = getRandomCard();
        sum = firstCard + secondCard;
        cardList = [firstCard, secondCard]
        // cardList.push(firstCard);
        // cardList.push(secondCard);

        renderGame();
    // }
}

function renderGame() {
    cardEl.textContent = "Cards:";

    for (var numCards of cardList) {
        cardEl.textContent += numCards + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;

    if( sum <= 20 ) {
        message = "Do you want to draw a new card? 🙂";
    } else if ( sum === 21) {
        message = "Wohoo! Blackjack tym! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        var card = getRandomCard();
        cardList.push(card);
        sum += card;
    
        renderGame();
    }
}

function getRandomCard() {
    var generatedNumber = Math.floor(Math.random() * 13 + 1);

    if (generatedNumber === 1) {
        return 11;
    } else if (generatedNumber >= 11) {
        return 10;
    } else {
        return generatedNumber;
    }
}




