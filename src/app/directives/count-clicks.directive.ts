import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: 'a[appCountClicks]'
})
export class AppCountClicksDirective {
  clickN = 0;
  @HostBinding('style.opacity') opacity: number = .1;
  @HostListener('click', ['$event.target']) onClick (btn) {
    console.log('a', btn, `Ǹumero de clicks ${this.clickN}`, this.clickN ++);
    this.opacity += .1;
  }
}
