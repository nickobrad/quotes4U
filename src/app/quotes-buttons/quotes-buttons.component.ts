import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { QuotesTemplate } from '../quotes-template'

@Component({
  selector: 'app-quotes-buttons',
  templateUrl: './quotes-buttons.component.html',
  styleUrls: ['./quotes-buttons.component.css']
})
export class QuotesButtonsComponent implements OnInit {

  @Input() showHideButtons!: QuotesTemplate;
  @Output() positiveVote = new EventEmitter <boolean>();
  @Output() negativeVote = new EventEmitter <boolean>();
  @Output() deleteQuote = new EventEmitter <boolean>();
  @Output() highlightVote = new EventEmitter <boolean>();

  incrementUp(positive:boolean){
    this.positiveVote.emit(positive);
  }

  incrementDown(negative:boolean){
    this.negativeVote.emit(negative);
  }

  quoteDeletion(remove:boolean){
    this.deleteQuote.emit(remove);
  }

  maxVote(highest:boolean){
    this.highlightVote.emit(highest);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
