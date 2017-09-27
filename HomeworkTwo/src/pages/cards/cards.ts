import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {

    cards = [
        {
            imgPath: "picture1.jpg",
            title: "Cool building",
            desc: "This is a cool picture.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "picture2.jpg",
            title: "Temple in New York",
            desc: "This is a cool picture.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "picture3.jpg",
            title: "MIT",
            desc: "This is a cool picture.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "picture4.jpg",
            title: "Princeton",
            desc: "This is a cool picture.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "picture5.jpg",
            title: "Dining Hall",
            desc: "This is a cool picture.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "picture6.jpg",
            title: "A City",
            desc: "This is a cool picture.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "picture7.jpg",
            title: "Another City",
            desc: "This is a cool picture.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "picture8.jpg",
            title: "Boston",
            desc: "This is a cool picture.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "picture9.jpg",
            title: "Another Boston",
            desc: "This is a cool picture.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "picture10.jpg",
            title: "Lastly, Boston",
            desc: "This is a cool picture.",
            favorited: false,
            shared: false
        }
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  clickFav(card) {
    let index = this.cards.indexOf(card);

    if(index > -1) {
        if(card.favorited){
            this.cards[index].favorited = false;
        }else {
            this.cards[index].favorited = true;
        }
    }
  };

  clickShare(card) {
      let index = this.cards.indexOf(card);

      if(index > -1) {
          if(card.shared){
              this.cards[index].shared = false;
          }else {
              this.cards[index].shared = true;
          }
      }
  }

  clickDelete(card) {
      let index = this.cards.indexOf(card);

      this.cards.splice(index, 1)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

}
