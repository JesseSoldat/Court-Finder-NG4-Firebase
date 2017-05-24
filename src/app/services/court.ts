import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

//Firebase
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Injectable()
export class CourtService {
	uid: string; //currently logged in user uid
	stories: FirebaseListObservable<Story[]>; //all stories for a user
	locations: FirebaseListObservable<Location[]>; //all of the locations for all of the users



	constructor(private afDb: AngularFireDatabase,
							private afAuth: AngularFireAuth) {

		this.uid = JSON.parse(localStorage.getItem('currentUser')).uid
		this.locations = this.afDb.list(`locations`) as FirebaseListObservable<Location[]>;
	}

	getStories(friendUid) {
		//use friendUid if we are getting other's stories
		//this.uid points to the current user
		return this.stories = this.afDb.list(`users/${this.uid}/stories`) as FirebaseListObservable<any>;
	}
}

interface Story {
	$key?:string;
  title?:string;
  description?:string;
  lat?:string;
  lng?:string;
  uid?:string;
  images?:Image[];
  
}

interface Image {
	url: string,
  raw: string,
  createdBy: string,  
}

interface Location {
	$key?:string;
	uid:string;
	title: string;
	lat:string;
	lng:string;
}



