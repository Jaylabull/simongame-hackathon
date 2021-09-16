import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  color = '#ff3333';
  color2 = '#99ff66';
  color3 = '#80aaff';
  color4 = '#ffff66';


  constructor() { }



  ngOnInit(): void {
  }


  onUserClick(input: number): number {
    console.log(input);
    if (input == 1) {
      console.log(this.color);
    } else if (input == 2) {
      console.log(this.color2);
    } else if (input == 3) {
      console.log(this.color3);
    } else if (input == 4) {
      console.log(this.color4);
    }
    return input;
  }
  arr: Number[] = [];
  //on game start
  gameStart() {
    let rand = Math.floor(Math.random() * 5);

    //loop randomize each 3 number that represnts a color
    for (let i = 0; i < 10; i++) {
      rand = Math.floor(Math.random() * 5);
      this.arr.push(rand);
    }

    console.log(this.arr);
    this.running(3);

    //this.running(4);
  }
  current_postion: number = 3;
  index_of_array: number = 0;
  running( position: number) {


    for (let i = 0; i < position; i++) {

      console.log(this.arr[i]);
      for (let j = 0; j <= i; j++) {
        //highlight sequence of colors for user to see
      }
      for (let j = 0; j <= i; j++) {
        //get user input. check if correct sequence
        // let input : number = onClick();
        //check if correct
        //if(isCorrect(r[j], /*user input*/)){

      }
    }
  }


  isCorrect(r: number) {
    // we have the array of number 


    // checking if the button id match the number in the array

    //arr[position] === r;

    if (this.index_of_array >= 10) {
      // we stop the game
    }

    if (this.arr[this.index_of_array] === r) {
      
      // this r
      this.index_of_array = this.index_of_array + 1; 
      
      if (this.index_of_array === this.current_postion) {
        this.current_postion = this.current_postion +1;
          // call other method that display the new sequence.
          this.index_of_array = 0;
          this.running( this.current_postion );
          
      }
    // output a corect sound
    } else {
      // output incorrect sound
    }


  }

}
