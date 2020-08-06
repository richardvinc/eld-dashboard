import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prodiFilter',
})
export class ProdiFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter((item) => {
      return item.prodi.toLocaleLowerCase().includes(searchText);
    });
  }
}
