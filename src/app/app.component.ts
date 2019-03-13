import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = "Carlos";
  nombreCompleto = "cArlOs alberTo velAzquez rOMERO"
  arreglo=[0,1,2,3,4,5,6,7,8,9];
  PI = Math.PI;
  porcentaje = 0.234;
  salario = 1234.5
  fecha = new Date()
  activar:boolean = true

  video = "m0eSf0JrUIk"

  variables = {
    nombre: this.nombre,
    titulo: this.title,
    numeros:{
      arreglo: this.arreglo,
      pi: this.PI,
      salario: this.salario,
    }
  };

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout( ()=>resolve('Llego la data!'), 3500 )
  } )

}
