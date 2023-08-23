import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  squre !:string[];
  xIsNext !:boolean;
  winner : string='';

  newGame(){
    this.squre=Array(9).fill(null);
    this.winner = '';
    this.xIsNext=true;
  }

  get player(){
    return this.xIsNext ? 'X': 'O';
  }
  makeMove(id:number){
    if(!this.squre[id]){
      this.squre.splice(id,1,this.player);
      this.xIsNext=!this.xIsNext;
    }
    this.winner=this.calculateWinner()
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
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squre[a] &&
        this.squre[a] === this.squre[b] &&
        this.squre[a] === this.squre[c]
      ) {
        return this.squre[a];
      }
    }
    return '';
  }
}
