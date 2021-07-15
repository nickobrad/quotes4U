import { Component, OnInit } from '@angular/core';
import { globalAgent } from 'http';
import { QuotesTemplate } from '../quotes-template'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  mouseHovering(index:number){
    this.quotes[index].isHidden = !this.quotes[index].isHidden;
  }
  mouseLeft(index:number){
    this.quotes[index].isHidden = false;
  }

  quotes: QuotesTemplate[] = [
    new QuotesTemplate(1, 'Watch finding Nemo', '', new Date(), 0, 0),
    new QuotesTemplate(2, 'Watch finding Nemo', '', new Date(), 0, 0),
    new QuotesTemplate(3, 'Watch finding Nemo', '', new Date(), 0, 0),
    new QuotesTemplate(4, 'Watch finding Nemo', '', new Date(), 0, 0),
    new QuotesTemplate(5, 'Watch finding Nemo', '', new Date(), 0, 0),
    new QuotesTemplate(6, 'Watch finding Nemo', '', new Date(), 0, 0),
  ];

  plusOne(positiveVote:boolean, index:number){
    if(positiveVote){
      this.quotes[index].likes ++
    }
  }
  minusOne(negativeVote:boolean, index:number){
    if(negativeVote){
      this.quotes[index].dislikes ++
    }
  }
  removeQuote(deleteQuote:boolean, index:number){
    if(deleteQuote){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}?`) //Backticks have been used
    }
    if (deleteQuote){
      this.quotes.splice(index, 1)
    }
  }

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.postDate = new Date(quote.postDate);
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
