import { Directive, ElementRef, HostListener, Input} from '@angular/core';
// generar directivas comando: ng g d directives/resaltado
@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) { // el seria el objeto html
    console.log('directiva llamada');
   // el.nativeElement.style.backgroundColor = 'yellow';
  }
  @Input('appResaltado') nuevoColor: string;
  // para estar al pendiente de ls cambios en el elemento del html necesitamos agregar Hostlistener

  @HostListener('mouseenter') mouseEntro() {
    console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor || 'yellow');
    // this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null);
  }


  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
