import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fakeArray = [1,1,1,1,1];
  rate = 0;

  onClick(rate: number){
    this.rate = rate;
    console.log(rate)
  }

}
