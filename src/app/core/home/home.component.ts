import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = [
    { title: 'Best proposals on market', img: '/assets/images/slider-7.jpg', description: '' },
    { title: 'Discounts', img: '/assets/images/slider-8.png', description: 'Best proposals on market'},
    { title: 'Slide 3', img: '/assets/images/slider-9.jpg', description: '' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
