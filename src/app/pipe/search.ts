import { Pipe, PipeTransform } from "@angular/core";
@Pipe({ name: "search" })
export class CategoryPipe implements PipeTransform {
  transform(categories: any, searchText: any): any {
    if (searchText == null || searchText === "") {
      return categories;
    } else {
      const filteredCategories = [];
      categories.filter((subCategory, index) => {
        if (
          subCategory.brandName
            .toLowerCase()
            .indexOf(searchText.toLowerCase()) !== -1 ||
          subCategory.productName
            .toLowerCase()
            .indexOf(searchText.toLowerCase()) !== -1
        ) {
          if (filteredCategories.indexOf(subCategory) === -1) {
            filteredCategories.push(subCategory);
          }
        } else {
          //   var newDiv = document.createElement("div");
          //   newDiv.style.textAlign = "center";
          //   newDiv.style.color = "red";
          //   var newContent = document.createTextNode("No data");
          //   newDiv.appendChild(newContent);
          //   var currentDiv = document.getElementById("div1");
          //   document.body.insertBefore(newDiv, currentDiv);
        }
      });

      return filteredCategories;
    }
  }
}
