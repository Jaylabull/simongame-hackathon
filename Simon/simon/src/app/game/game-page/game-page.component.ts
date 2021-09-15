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


  onUserClick(input: number){
    console.log(input);
    if (input == 1) {
      console.log(this.color);
    } else if (input == 2) {
      console.log(this.color2);
    }  else if (input == 3) {
      console.log(this.color3);
    }  else if (input == 4) {
      console.log(this.color4);
    }
    
  }

  //on game start
  gameStart(){
    let rand = Math.floor(Math.random() * 5);

    //loop randomize each 3 number that represnts a color
    for(let i = 0; i < 10; i++){

    }


  }


}
