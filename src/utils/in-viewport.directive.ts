import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, PLATFORM_ID, Renderer2, OnDestroy, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appInViewport]',
  standalone: true
})
export class InViewportDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  @HostBinding('class.animate__animated') animateClass = true;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'animate__fadeInLeft');
            this.renderer.removeClass(this.el.nativeElement, '');
            this.observer.disconnect();
          }
        }, { threshold: 0.1 });

        this.observer.observe(this.el.nativeElement);
      } else {
        this.renderer.removeClass(this.el.nativeElement, '');
      }
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
