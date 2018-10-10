import * as firebase from 'firebase';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SigninPage } from '../pages/signin/signin';
// import { HomePage } from '../pages/home/home';

// Initialize Firebase

const config = {
  apiKey: "AIzaSyCxIHdmeqKOKDE_DgrhwwWkYPYm6W2QYSY",
  authDomain: "chat856422.firebaseapp.com",
  databaseURL: "https://chat856422.firebaseio.com",
  projectId: "chat856422",
  storageBucket: "chat856422.appspot.com",
  messagingSenderId: "703783223103"
};

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  // rootPage: any = HomePage;
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

