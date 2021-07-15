import { Component, OnInit } from '@angular/core';
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
    new QuotesTemplate(1, 'Watch finding Nemo', 0),
    new QuotesTemplate(2, 'Watch finding Nemo', 0),
    new QuotesTemplate(3, 'Watch finding Nemo', 0),
    new QuotesTemplate(4, 'Watch finding Nemo', 0),
    new QuotesTemplate(5, 'Watch finding Nemo', 0),
    new QuotesTemplate(6, 'Watch finding Nemo', 0)
  ];

  plusOne(positiveVote:boolean, index:number){
    if(positiveVote){
      this.quotes[index].votes ++
    }
  }
  minusOne(negativeVote:boolean, index:number){
    if(negativeVote){
      this.quotes[index].votes --
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

  constructor() { }

  ngOnInit(): void {
  }

}
