import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  implements AfterViewInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const animatedContainer = this.elementRef.nativeElement.querySelector('#animatedcontainer');

    animatedContainer.addEventListener('animationend', () => {
      this.renderer.setStyle(animatedContainer, 'display', 'none');
    });

    setTimeout(() => {
      this.renderer.addClass(animatedContainer, 'fade-out');
    }, 2000);
  }
}
