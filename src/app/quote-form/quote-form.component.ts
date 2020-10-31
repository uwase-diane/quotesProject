import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QuoteClass } from '../quote-class';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new QuoteClass (0,"","","",new Date(),0,0);

  @Output() addQuote = new EventEmitter<QuoteClass>();

  submitGoal(){
this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit() {
  }

}
