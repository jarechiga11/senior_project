import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the ExplorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {
  allList: any
  public userProfiles: firebase.database.Reference;
  public currentList: firebase.database.Reference;
  postType = 'standard';



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userProfiles = firebase.database().ref(`userProfile`);
  }

  ionViewDidLoad() {

    this.userProfiles.on('value', snapshot => {
      let rawList = [];
      snapshot.forEach(snap => {
        this.currentList = firebase.database().ref('userProfile/' + snap.key + '/eventList');
        this.currentList.on('value', snapshot2 => {
          snapshot2.forEach(snap2 => {
            rawList.push({
              id: snap2.key,
              eventLocation: snap2.val().eventLocation,
              photo: snap2.val().photo,
            });
            return false
          });
        });
        return false
      });
      this.allList = rawList;
    });

    console.log('ionViewDidLoad ExplorePage');
  }

  getEventList(eventList): firebase.database.Reference {
    return this.userProfiles.child(eventList);
  }

  goToEventDetail(eventId) {
    this.navCtrl.push('EventDetailPage', { eventId: eventId });
  }

}