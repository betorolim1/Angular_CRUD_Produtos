import {
  Directive,
  OnInit,
  Input,
  ViewContainerRef,
  TemplateRef,
} from "@angular/core";

@Directive({
  selector: "[myFor]",
})
export class ForDirective implements OnInit {
  @Input("myForEm") chars: string[];

  @Input("myForUsando") texto: string[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    for (let number of this.chars) {
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
    this.container.createEmbeddedView(this.template, { $implicit: this.texto });

  }
}
