
    import {Pipe, PipeTransform} from '@angular/core';
 
    @Pipe({name: 'category'})
    export class CategoryPipe implements PipeTransform {
      transform(categories: any, searchText: any): any {
         if(searchText == null) return categories;

        return categories.filter(function(category){
            //return category.CategoryName;  
            if (category !== undefined) {
                return category.FULL_NAME.toLowerCase().indexOf(searchText) > -1;
            }
        })
      }
    }