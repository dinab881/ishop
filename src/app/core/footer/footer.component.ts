import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'is-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  today = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
