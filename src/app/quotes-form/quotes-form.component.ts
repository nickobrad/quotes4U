import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuotesTemplate } from '../quotes-template'


@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})

export class QuotesFormComponent implements OnInit {

  @Output() addQuote = new EventEmitter<QuotesTemplate>();
  newQuote = new QuotesTemplate (0, "","", new Date(), 0, 0);

  submitQuote(form: NgForm){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new QuotesTemplate (0, "","", new Date(), 0, 0);

  }
  constructor() { }

  ngOnInit(): void {
  }

}
