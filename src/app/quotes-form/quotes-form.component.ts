import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuotesTemplate } from '../quotes-template'


@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})

export class QuotesFormComponent implements OnInit {

  @Output() addQuote = new EventEmitter<QuotesTemplate>();
  newQuote = new QuotesTemplate(0, "", "", new Date(), 0, 0);

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
