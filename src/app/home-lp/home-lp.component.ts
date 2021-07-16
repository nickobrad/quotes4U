import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-lp',
  templateUrl: './home-lp.component.html',
  styleUrls: ['./home-lp.component.css']
})
export class HomeLPComponent implements OnInit {

  myImage:string = "../assets/bg1.jpg";


  constructor() { }

  ngOnInit(): void {
  }

}
