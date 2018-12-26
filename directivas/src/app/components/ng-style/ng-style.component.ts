import { Component, OnInit } from '@angular/core';

// ng g c components/ngStyle -it -is   it: genera template is: genera los estilos
@Component({
  selector: 'app-ng-style',
  template: `
    <!--<p  [ngStyle]="{'font-size': tamano + 'px', 'color':'red'}">-->
    <p [style.fontSize.px]="tamano">
       Hola mundo... esta es un etiwqueta
    </p>
    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamano = tamano - 5">
        <i class="fa fa-minus"></i>
    </button>
      `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamano = 30;

  constructor() { }

  ngOnInit() {
  }

}
