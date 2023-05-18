import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale'
})
export class OnSalePipe implements PipeTransform {

  //Chinh gia tri tra ve cho pipi thanh string
  transform(value: unknown, ...args: unknown[]): string {

    //khi trai.haGia return true -> tra ve on Sale
    if(value){
      return "On Sale";
    }
    return "";
  }

}
