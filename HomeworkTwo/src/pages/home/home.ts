import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CardsPage} from "../cards/cards";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showCardsPage(){
    this.navCtrl.push(CardsPage);
  }

}
