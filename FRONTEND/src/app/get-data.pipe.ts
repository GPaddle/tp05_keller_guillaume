import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getData'
})
export class GetDataPipe implements PipeTransform {

  transform(jsonResponse: any, ...args: unknown[]): any {

    console.log(jsonResponse);
    

    if (jsonResponse) {
      return Array.isArray(jsonResponse.data) ? jsonResponse.data : [jsonResponse.data];
    } else {
      console.log("Response failed");
      return null;
    }
  }

}
