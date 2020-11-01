import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

import { QuoteClass } from '../quote-class';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  vote = 0;
  unvote = 0;

  likeButtonClick(){
    this.vote ++;
  }
  
  dislikeButtonClick(){
    this.unvote --;
  }

  @Input() quote: QuoteClass;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
