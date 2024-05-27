import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chicken-page',
  templateUrl: './chicken-page.component.html',
  styleUrls: ['./chicken-page.component.css']
})
export class ChickenPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goBack(): void {
    history.back();
  }
}
