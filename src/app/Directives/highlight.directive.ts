import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') appHighlight = 'blue';

  constructor(private el : ElementRef) { 
    // console.log("Highlist directive show ", this.appHighlight);
    // el.nativeElement.style.color = this.appHighlight;
  }

  ngOnInit():void{
    console.log("ngOninit Highlist directive show ", this.appHighlight);
    this.el.nativeElement.style.color = this.appHighlight;
  }

}
