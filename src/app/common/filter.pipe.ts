
    import {Pipe, PipeTransform} from '@angular/core';
 
    @Pipe({name: 'category'})
    export class CategoryPipe implements PipeTransform {
      transform(categories: any, searchText: any): any {
          //console.log('Hello');
          
         if(searchText == null) return categories;

        return categories.filter(function(category){
            //return category.CategoryName;  
            console.log('Hello');
            if (category !== undefined) {
               return category.FULL_NAME.toLowerCase().indexOf(searchText) > -1;
            }
        })
      }
    }


    @Pipe({name: 'SearchName'})
    export class SearchNamePipe implements PipeTransform {
      transform(SearchNames: any, searchText: any): any {
       //   console.log('Hello');
          
         if(searchText == null) return SearchNames;

        return SearchNames.filter(function(SearchName){
            //return category.CategoryName;  
          //  console.log('Hello');
            if (SearchName !== undefined) {
                return SearchName.FULL_NAME.toLowerCase().indexOf(searchText) > -1;
            }
        })
      }
    }