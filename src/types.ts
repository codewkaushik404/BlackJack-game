export enum Suit{
    Diamonds = "♦",
    Hearts = "♥",
    Spades = "♠",
    Clubs = "♣"
}

export interface ICard{
    value: number;
    suit: Suit; 
    getCardValue: (key: number) => string;
}