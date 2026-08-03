import Card from "./card.js";
import type { ICard } from "./types.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function getDecision(): "hit" | "stand" {
    let decision;
    while(true){
        decision = prompt("Your action (hit/stand): ");
        if(decision === "hit" || decision === "stand") return decision;
        else console.log("Invalid Input");
    }
}

export function getValue(arr: ICard[]): number{
    let value = 0;
    let aces = 0;
    for(let card of arr){
        if(card.value === 1) aces++;
        else if(card.value > 10) value+=10;
        else value+= card.value;
    }

    if(aces === 0) return value;
    else if(value >= 11) return value+aces;
    else return value+11+(aces-1);
}

export function getStrHand(arr: ICard[], hideSecondCard: boolean = false): string{
    let str = "";
    let card: ICard;
    for(let i=0;i<arr.length;i++){
        card = arr[i]!;
        if(hideSecondCard && i === 1){
            str+="[hidden]";
            continue;
        }
        
        str+=`${card.getCardValue(card.value)}${card.suit}`;
        if(i!== arr.length-1) str+=", ";
    }
    return str;
}
