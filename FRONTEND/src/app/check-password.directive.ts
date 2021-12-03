import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCheckPassword]'
})
export class CheckPasswordDirective {

  @Input() initPass?: string;

  constructor(private el: ElementRef) { }

  checkPasswordMatch() {
    // console.log(this.initPass);
    
    if (this.el.nativeElement.value == this.initPass) {
      this.el.nativeElement.pattern = ".*"
    } else {
      this.el.nativeElement.pattern = ""
    }
  }
  @HostListener('blur') onBlur(evt: any) {
    this.checkPasswordMatch();
  }

  @HostListener('keyup', ['$event']) inputChanged(event: any) {
    this.checkPasswordMatch();
  }
}
