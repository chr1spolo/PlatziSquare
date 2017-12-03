import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'a[appCountClicks]'
})
export class AppCountClicksDirective {
  clickN = 0;
  @HostListener('click', ['$event.target']) onClick (btn) {
    console.log('a', btn, `Ǹumero de clicks ${this.clickN}`, this.clickN ++);
  }
}
