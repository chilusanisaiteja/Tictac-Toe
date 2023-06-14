import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tictactoe';

  squares: any[] = [];
  xIstrue: boolean = true;
  winner: string = '';
  player: string = 'X';
  iswinner: boolean = false;

  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.iswinner = false;
    this.xIstrue = true;
  }

  getPlayer() {
    return this.xIstrue ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (this.iswinner) {
      this.newGame();
      this.iswinner = false;
      this.xIstrue = true;
      this.player = 'X';
    } else if (!this.squares[idx]) {
      this.squares[idx] = this.player;
      this.xIstrue = !this.xIstrue;
      this.player = this.getPlayer();
      if (this.calculateWinner() !== null) {
        this.winner = this.calculateWinner();
        this.iswinner = true;
      }
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] == this.squares[b] &&
        this.squares[b] == this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
