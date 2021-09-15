import { Component, OnInit } from '@angular/core';

import { Directive, ElementRef, HostListener , Input }  from '@angular/core';



@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight = '';
  @Input() secondValue = '';

  constructor(private el: ElementRef) { }
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }

  @HostListener('click', ['$event.target.id']) onMouseClick() {
    //if(event.target.id== 1){
      this.highlight( this.appHighlight|| this.secondValue);
     //'#ff3333'
    //} else if (event.target.id  == 2){
    
    //    this.highlight("@ff2222");
    // } else if (input == 3) {
    //   this.highlight("@ff1111");
    // } else {
    //   this.highlight("@ff0000");
    // }
    
    
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
