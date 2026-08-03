import PromptSync from "prompt-sync";
import { getDecision, getValue, getStrHand } from "./utils.js";
import Deck from "./deck.js";
import type { ICard } from "./types.js";

const prompt = PromptSync();

function playerTurn(playerHand: ICard[], deck: Deck): number {
    let decision = getDecision();
    let value = getValue(playerHand);

    while(decision === "hit"){
        let card = deck.deal(1)[0]!;
        playerHand.push(card);
        value = getValue(playerHand);
        console.log(`Your hand: ${getStrHand(playerHand)} (Total Value: ${value})`);

        if(value > 21) return value; 
        decision = getDecision();
    }
    return value;
}

function dealerTurn(dealerHand: ICard[], deck: Deck): number{
    let value = getValue(dealerHand);
    console.log(`Dealer's hand: ${getStrHand(dealerHand)} (Total: ${value})`);

    while(value < 17){
        let card = deck.deal(1)[0]!;
        dealerHand.push(card);
        value = getValue(dealerHand);
        console.log(`Dealer hits: ${getStrHand(dealerHand)} (Total: ${value})`);

        if(value >= 17) return value;
    }
    return value;
}

let balance = 100;
let bet: number;
let deck: Deck = new Deck(); 
let playerHand: ICard[] = [];
let dealerHand: ICard[] = [];
let response: string = "yes";

while(balance > 0 && response === "yes"){
    console.log(`Your balance : ${balance}$`);
    const input = prompt("Enter your bet: ");
    if(input === null) break;

    bet = Number(input);
    if(bet <= 0 || bet > balance){
        console.log("Incorrect bet amount entered");
        break;
    }

    balance-=bet;

    // assign 2 random cards to player
    playerHand = deck.deal(2);

    //assign 2 random cards to dealer
    dealerHand = deck.deal(2);

    let playerValue = getValue(playerHand);
    let dealerValue = getValue(dealerHand);
    let profit;

    console.log(`Your hand: ${getStrHand(playerHand)} (Total: ${playerValue})`);
    console.log(`Dealer's hand: ${getStrHand(dealerHand, true)}`);

    if(playerValue === 21 && dealerValue === 21){
        //Push
        balance+=bet;
        console.log("It's a Tie(Push)\nGame ends...");
    }
    else if(playerValue === 21){
            //Payout = 3:2 means 3 units profit for every 2 units paid
            //2$ -> Profit = 3$ total 5$
            
            //Blackjack
            profit = bet*1.5;
            balance = balance + bet + profit;
            console.log(`BlackJack! You won: ${bet*1.5}\nTotal Balance: ${balance}`);
    }
    else if(dealerValue === 21){
        //Lost
        console.log(`BlackJack! Dealer won, you lost...`);
    }
    else{
        //now player turn
        //if hit keep continuing until player stands
        //now dealer hit if val < 17 and stands if val >=17
        
        let finalPlayerValue = playerTurn(playerHand, deck);
        if(finalPlayerValue > 21){
            //Lost
            console.log("Bust! You lost...");
        }
        else{
            let finalDealerValue = dealerTurn(dealerHand, deck);
            //Player wins normally
            if(finalDealerValue > 21 || finalPlayerValue > finalDealerValue){
                profit = bet;
                balance+= bet+ profit;
                console.log(`Dealer lost. You won: ${profit}\nTotal Balance: ${balance}`);
            }
            else if(finalDealerValue === finalPlayerValue){
                balance+=bet;
                console.log("It's a Tie(Push)\nGame ends...");
            }
            else console.log("You lost to the dealer!");
        }
    }

    if(balance <= 0) 
        console.log("You are out of money!");
    response = prompt("Do you want to continue playing (yes/no): ")?.toLowerCase() || "no";
}

console.log("Game Over");