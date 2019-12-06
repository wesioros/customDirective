import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';
@Directive({
  selector: '[appApplyFormats]'
})
export class ApplyFormatsDirective {

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {}
               @Input() set appApplyFormats(notice: string) { }



              }
