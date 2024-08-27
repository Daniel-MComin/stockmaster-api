import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {

    switch(value){
      case 'Eletrônico': return 'cable';
      case 'Alimento': return 'cookie';
      case 'Hospitalar': return 'local_hospital';
      case 'Medicamento': return 'medication';
      case 'Vestimenta': return 'checkroom';
      case 'Móvel': return 'chair';
    }
    return 'code';
  }

}
