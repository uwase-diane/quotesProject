import { Component, OnInit } from '@angular/core';
import { QuoteClass } from '../quote-class';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
 
  quotes: QuoteClass[] = [
    new QuoteClass(1, 'I always believed that when you follow your heart or your gut, when you really follow the things that feel great to you, you can never lose, because settling is the worst feeling in the world.', ' Rihanna','UD', new Date(2020,3,14)),
    
  ];

  addNewQuote(quote){
    let quotelength = this.quotes.length;
    quote.id = quotelength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }


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
