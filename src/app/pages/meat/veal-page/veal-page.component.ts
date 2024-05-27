import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veal-page',
  templateUrl: './veal-page.component.html',
  styleUrls: ['./veal-page.component.css']
})
export class VealPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goBack(): void {
    history.back();
  }
}
