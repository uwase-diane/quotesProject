import { Component, OnInit } from '@angular/core';
import { QuoteClass } from '../quote-class';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
 
  quotes: QuoteClass[] = [
    new QuoteClass(1, 'Watch finding Nemo', 'Cissie','Manzi', new Date(2020,3,14),0,0),
    new QuoteClass(2, 'Watch finding Nemo', 'Cissie','Manzi', new Date(2020,3,14),0,0)
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

 deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quotename}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
