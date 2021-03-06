
import { Component, OnInit } from '@angular/core';
import { countUpTimerConfigModel, CountupTimerService ,timerTexts } from 'ngx-timer';



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

  score: number = 0;
  highlights: string[] = ['#ff3333','#99ff66','#80aaff','#ffff66'];
  colors: string[] = ['darkred','darkgreen','darkblue', 'darkgoldenrod'];

  countupTimerService:CountupTimerService;
  testConfig : countUpTimerConfigModel;
  

  constructor() { 
    this.countupTimerService = new CountupTimerService();
    this.testConfig = new countUpTimerConfigModel();
    
    //custom class
    this.testConfig.timerClass  = 'test_Timer_class';
 
    //timer text values  
    this.testConfig.timerTexts = new timerTexts();
    this.testConfig.timerTexts.hourText = "Hours"; //default - hh
    this.testConfig.timerTexts.minuteText = "Minutes"; //default - mm
    this.testConfig.timerTexts.secondsText = "Seconds"; //default - ss
  }



  ngOnInit(): void {
    let cdate = new Date();
   cdate.setHours(cdate.getHours()-2); 
    this.countupTimerService.startTimer( cdate);
  }


  playSound(){
    let audio = new Audio();
    audio.src = "simon/src/app/Sounds/Blow.mp3";
    audio.load();
    audio.play()
    this.playSound();
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
  instruction: Number[] =[];
  //on game start
  gameStart() {
    (document.getElementById("0") as HTMLElement).style.pointerEvents = "all";
    (document.getElementById("1") as HTMLElement).style.pointerEvents = "all";
    (document.getElementById("2") as HTMLElement).style.pointerEvents = "all";
    (document.getElementById("3") as HTMLElement).style.pointerEvents = "all";
    this.arr = [];
    let rand = Math.floor(Math.random() * 2);

    //loop randomize each 3 number that represnts a color
    for (let i = 0; i < 10; i++) {
      rand = Math.floor(Math.random() * 4);
      this.arr.push(rand);
    }

    console.log(this.arr);
    this.running(3);
//
    //this.running(4);
  }
  current_postion: number = 3;
  index_of_array: number = 0;
  running( position: number) {


    for (let i = 0; i < position; i++) {
        this.instruction[i] = this.arr[i];
      console.log(this.arr[i]);
      //  let currentTime: number = new Date().getTime();
      //  let allottedTime: number = currentTime;
        //highlight sequence of colors for user to see
        
        
        // while(allottedTime <= currentTime + 1000){
           (document.getElementById(String(this.arr[i])) as HTMLElement).style.backgroundColor = this.highlights[this.arr[i].valueOf()];
        //   allottedTime = new Date().getTime();
        // }
        (document.getElementById(String(this.arr[i])) as HTMLElement).style.backgroundColor = this.colors[this.arr[i].valueOf()];
        // currentTime = new Date().getTime();
        // allottedTime = currentTime;
        // while(currentTime <= currentTime + 1000){
        //   allottedTime = new Date().getTime();
        // }
        //console.log("loop continues");
        //await this.delay(1000, i);
        //console.log("loop continues");
       

    }
  }

  delay(ms: number, j:number){
    return new Promise(() => setTimeout(() =>{
       (document.getElementById(String(this.arr[j])) as HTMLElement).style.backgroundColor = this.colors[this.arr[j].valueOf()];
    }, ms));
  }

  isCorrect(r: number) {
    // we have the array of number 

    // checking if the button id match the number in the array

    //arr[position] === r;

    
    console.log("r is: " + r);
    console.log("arr[index] is: " + this.arr[this.index_of_array]);

    if (this.arr[this.index_of_array] === r) {
      console.log(r + " is correct");
      // this r
      this.score = this.score + 1;
      this.index_of_array = this.index_of_array + 1; 
      if (this.index_of_array === this.current_postion) {
        this.current_postion = this.current_postion +1;
          // call other method that display the new sequence.
          if (this.index_of_array == 10) {
            // we stop the game
            this.arr = [];
            console.log("game clear");
            alert("Success your score is: " + this.score);
            (document.getElementById("0") as HTMLElement).style.pointerEvents = "none";
            (document.getElementById("1") as HTMLElement).style.pointerEvents = "none";
            (document.getElementById("2") as HTMLElement).style.pointerEvents = "none";
            (document.getElementById("3") as HTMLElement).style.pointerEvents = "none";
            this.score = 0;
            this.index_of_array = 0;
            this.current_postion = 3;
          }
          else{
            this.index_of_array = 0;
            this.running( this.current_postion );
          }
          
          
      }
    // output a corect sound
    } else {
      // output incorrect sound
      console.log(r + " is wrong");
      console.log("game over");
      alert("Game Over your score is: " + this.score);
      this.score = 0;
      this.arr = [];
      this.instruction = [];
      this.index_of_array = 0;
      console.clear();
      (document.getElementById("0") as HTMLElement).style.pointerEvents = "none";
      (document.getElementById("1") as HTMLElement).style.pointerEvents = "none";
      (document.getElementById("2") as HTMLElement).style.pointerEvents = "none";
      (document.getElementById("3") as HTMLElement).style.pointerEvents = "none";
      this.index_of_array = 0;
      this.current_postion = 3;
    }


  }

}
