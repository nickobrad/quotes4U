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
    new QuotesTemplate(1, 'Jay-Z', 'I had Benzes before you had braces, the all white maybach but I am not a racist', new Date(2021,3,14), 0, 13),
    new QuotesTemplate(2, 'Drake', 'How did a pound of kush become a fountain of youth? How did a bottle of wine become a fountain of youth?', new Date(2020,6,9), 0, 90),
    new QuotesTemplate(3, 'Kanye West', 'Do not let me get in my zone, The stars is in the building, They hands is to the ceiling, I know I am bout to kill it', new Date(2019,1,15), 0, 8),
    new QuotesTemplate(4, 'Big Sean', 'Are you willing to give up what you love for who you love?', new Date(2018,4,20), 0, 15),
    new QuotesTemplate(5, 'Childish Gambino', 'No  matter what you say and what you do, when I am alone I would rather be with you. I will be right by your side till 3005', new Date(2017,8,30), 0, 62),
    new QuotesTemplate(6, 'Lil Wayne', 'Did not wear a bullet proof so I got shot and you can see the proof. Blind eyes could look at me and see the truth, wonder if Stevie do.', new Date(2016,11,5), 0, 20),
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

  favouritesQuote(quote:any) {
    let maxValue: number = Math.max.apply(
      Math,
      this.quotes.map(function (quote) {
        return quote.likes;
      })
    );
    let quoteIndex: number = this.quotes.findIndex(
      (quote) => quote.likes === maxValue
    );
    this.quotes.forEach((quote) => {
      quote.status = false;
    });
    this.quotes[quoteIndex].status = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
