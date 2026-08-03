import { Suit, type ICard } from "./types.js";

class Card implements ICard{
    private static readonly CARD_VALUES: Record<number, string> = {
        1: "A",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "J",
        12: "Q",
        13: "K"
    }

    value: number;
    suit: Suit;

    constructor(value: number, suit:Suit){
        this.value = value;
        this.suit = suit;
    }

    getCardValue(key: number): string{
        return Card.CARD_VALUES[key]!;
    }

}

export default Card;