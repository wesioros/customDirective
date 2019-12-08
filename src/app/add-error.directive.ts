import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  OnInit,
  Renderer2,
  Input,
  OnChanges,
  DoCheck
} from "@angular/core";
import { FormGroup } from "@angular/forms";

export class AddErrorDirectiveContext {
  AddErrorDirective: any = null;
}

@Directive({
  selector: "[appAddError]"
})
export class AddErrorDirective implements OnInit, DoCheck {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private renderer: Renderer2
  ) {}
  private _permissionIf: string[];
  @Input("appAddErrorFrom") form: FormGroup;
  @Input("appAddErrorquienSoy") nombre: string;
  context: AddErrorDirectiveContext = new AddErrorDirectiveContext();

  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.templateRef, this.context);
  }
  ngDoCheck() {
    if (this.form.invalid && this.form.touched) {
      Object.keys(this.form.controls).forEach(control => {
        const controlValue = this.form.get(control);
        const element = this.templateRef.elementRef.nativeElement.nextElementSibling.querySelector(
          "input[formControlName=" + control + "]"
        ).parentNode;
        if (controlValue.invalid && controlValue.touched) {
          const p: any = this.renderer.createElement("mat-error");
          if (controlValue.errors.required) {
            p.innerHTML = "Campo requerido";
          } else if (controlValue.errors.min) {
            p.innerHTML = "minímo " + controlValue.errors.min.min;
          }
          if (!element.querySelector("mat-error")) {
            this.renderer.appendChild(element, p);
          }
        } else {
          if (element.querySelector("mat-error")) {
            element.querySelector("mat-error").remove();
          }
        }
      });
    }
  }
}
