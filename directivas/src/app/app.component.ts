import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivas';
  prueba = 'pruebita';
  constructor() {
    console.log('constructor entro super genial', this.prueba);
  }
}

/*
ngOnInit cuando el componente esta inicializado
ngOnChanges cuando la data de propiedades relacionadas cambian
ngDoCheck Durante cada revision  del ciclo  de deteccion de cambios
ngAftercontentInit despues de insertar contenido (<app-pagina>)
ngAfterContentChecked despues de la revision del contenito insertado
ngAfterViewInit despues de la inicializacion del componente/hijos
ngAfterViewChecked despues de cada revision  de los componentes hijos
ngOnDestroy justo antes que se destruya el componente o la directiva
*/
