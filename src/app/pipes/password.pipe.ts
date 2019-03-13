import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, valor: boolean): any {
    let palabra = value;
    if (valor === true){
      return ("*".repeat(palabra.length))
    }
    else{
      return palabra
    }
  }

}
