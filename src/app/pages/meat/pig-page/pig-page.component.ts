import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pig-page',
  templateUrl: './pig-page.component.html',
  styleUrls: ['./pig-page.component.css']
})
export class PigPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goBack(): void {
    history.back();
  }
}
