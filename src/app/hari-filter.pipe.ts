import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hariFilter',
})
export class HariFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter((item) => {
      return item.hari.toLocaleLowerCase().includes(searchText);
    });
  }
}
