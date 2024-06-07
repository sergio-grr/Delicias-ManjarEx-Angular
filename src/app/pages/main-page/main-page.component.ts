import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements AfterViewInit {

  showElement: boolean = true;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const animatedContainer = this.elementRef.nativeElement.querySelector('#animatedcontainer');
    const animation = this.elementRef.nativeElement.querySelector('#animation');

    const hasAnimatedBefore = sessionStorage.getItem('hasAnimated');
    if (hasAnimatedBefore) {
      this.renderer.setStyle(animatedContainer, 'display', 'none');
      this.renderer.setStyle(animation, 'display', 'none');
      return;
    }

    animatedContainer.addEventListener('animationend', () => {
      this.renderer.setStyle(animatedContainer, 'display', 'none');
      sessionStorage.setItem('hasAnimated', 'true');
    });

    animation.addEventListener('animationend', () => {
      this.renderer.setStyle(animation, 'display', 'none');
    });

    setTimeout(() => {
      this.renderer.addClass(animatedContainer, 'fade-out');
      this.renderer.addClass(animation, 'fade-out');
    }, 500);
  }
}
