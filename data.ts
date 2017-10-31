import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {


    myData = {
      "MenuItems" : [
          {Header: "Appetizers",
            FoodItems: [
            {MenuItem: "Egg rolls"},
            {MenuItem: "Crab Rangoons"},
            {MenuItem: "Shimp Dumpling"},
            {MenuItem: "Spring rolls"}
            ]},
          {Header: "Soups",
             FoodItems: [
            {MenuItem: "Egg Drop"},
            {MenuItem: "Wanton"},
            {MenuItem: "Hot & Sour"},
            {MenuItem: "Chicken Noodle"}
            ]},
          {Header: "Rice",
             FoodItems: [
            {MenuItem: "White Rice"},
            {MenuItem: "Chicken Fried Rice"},
            {MenuItem: "Shrimp Fried Rice"},
            {MenuItem: "Pork Fried Rice"}
            ]},
          {Header: "Dinner Entrée",
             FoodItems: [
            {MenuItem: "Ma Po Tofu"},
            {MenuItem: "Cumin Chicken Wings"},
            {MenuItem: "Beef Hot Pot"}
            ]}
      ]
    };

  constructor() {
    console.log('Hello DataProvider Provider');
  }

  getData(): Object {
      return this.myData.MenuItems;
  };

}
