
let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")


let player = {

    name: "Suchit",
    chip: 130
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chip



function getRandomCard()
{
    let randomNumber = Math.floor(Math.random()*13) + 1
    
    if(randomNumber>10)
    {return 10}
    else if(randomNumber ==1)
    {
    return 11
    }else{
        return randomNumber
    }
}


function newCard()
{   
    if(isAlive === true && hasBlackJack === false)
    
    {
    let card = getRandomCard()
    cards.push(card) 
    console.log("Drawing a New card from the deck")
    sum+=card
    renderGame()
    }
} 
function startGame()
{
     isAlive = true
     let firstCard = getRandomCard()
     let secondCard = getRandomCard()
     cards = [firstCard,secondCard]
     sum = cards[0] + cards[1]
     hasBlackJack === false
    
    
    renderGame()
}
function renderGame(){
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    sumEl.textContent = "Sum: " + sum 
    messageEl.textContent = message 
    cardEl.textContent = "Cards: "
    for(let i = 0 ; i < cards.length ; i++)
    {
        cardEl.textContent += cards[i] + " "
    }
    
    

}

