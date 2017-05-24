import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
		isAuthenticated;
		uid;
   constructor(private afAuth: AngularFireAuth,
   						private router: Router) {

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.isAuthenticated = true;
        //Set the user's id up in local storage to use later
        localStorage.setItem('currentUser', JSON.stringify({ uid: user.uid, auth: true }));
        //Retrieve the users's id
        this.uid = JSON.parse(localStorage.getItem('currentUser')).uid;
  
        this.router.navigate(['dashboard']);
      } else {
        this.isAuthenticated = false;
        this.router.navigate(['login']);
      }
    
    }); 
  }
}
