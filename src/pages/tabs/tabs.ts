import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: string;
  tab2Root: string;
  tab3Root: string;
  tab4Root: string;
  tab5Root: string;
  tab6Root: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1Root = 'ExplorePage';
    this.tab2Root = 'ChannelPage';
    this.tab3Root = 'EventCreatePage';
    this.tab4Root = 'ProfilePage';
    this.tab5Root = 'InboxPage'; 
  }


}
