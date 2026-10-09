# BlackJack 

A simplified Blackjack card game built with **TypeScript and Node.js**, featuring interactive gameplay, betting, and bankroll management through the command line.

## Features

- **Interactive Gameplay** — Play against the dealer with hit and stand actions.
- **Card & Deck Management** — Shuffle a standard 52-card deck and calculate hand values, including flexible Ace scoring.
- **Betting System** — Start with a $100 bankroll, place bets, and manage your balance across rounds.
- **Dealer Logic** — The dealer follows standard rules, hitting below 17 and standing at 17 or higher.
- **Game Outcome Handling** — Supports Blackjack payouts, busts, wins, losses, and pushes (ties).

## Tech Stack

- TypeScript
- Node.js
- `prompt-sync` for command-line input

## Getting Started

```bash
git clone <your-repository-url>
cd <your-project-directory>
npm install
```

Run the game using your configured TypeScript execution or build script.

## Game Rules

- Get as close to 21 as possible without exceeding it.
- Number cards retain their face value; J, Q, and K count as 10.
- Aces count as 1 or 11, whichever benefits the hand.
- A natural Blackjack pays 3:2.
- The dealer hits below 17 and stands at 17 or higher.
- Players lose their bet when they bust or lose against the dealer; ties return the bet.

## Concepts Practiced

TypeScript fundamentals, object-oriented programming, functions, arrays, randomization, user input handling, and game-state management.
