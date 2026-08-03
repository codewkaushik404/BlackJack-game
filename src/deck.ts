import Card from "./card.js";
import { Suit} from "./types.js";
import type { ICard } from "./types.js";

class Deck{
    private deck: ICard[] = [];

    constructor(){
        this.makeCards();
        this.shuffleCards();
    }

    deal(num: number): ICard[]{
        let cards: ICard[] = [];
        for(let i=0;i<num;i++){
            const card = this.deck.pop()!;
            cards.push(card);
        }
        return cards;
    }

    private makeCards(): void{
        const suits: Suit[] = [Suit.Hearts, Suit.Diamonds, Suit.Clubs, Suit.Spades];

        for(let i=0;i<4;i++){
            for(let value=1;value<=13;value++){
                const card = new Card(value, suits[i]!);
                this.deck.push(card);
            }
        }
    }

    private shuffleCards(): void{
        for(let i=this.deck.length-1;i>0;i--){
            const j = Math.floor(Math.random()*(i+1));
            const temp = this.deck[i]!;
            this.deck[i] = this.deck[j]!;
            this.deck[j] = temp;
        }
    }
}

export default Deck;