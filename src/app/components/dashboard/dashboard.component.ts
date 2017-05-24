import { Component, OnInit } from '@angular/core';
import { CourtService } from '../../services/court';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	uid;
  constructor(private courtService: CourtService) { 
		//Set the user's id up in local storage to use later
 
    //Retrieve the users's id
    this.uid = JSON.parse(localStorage.getItem('currentUser')).uid;
  }

  ngOnInit() {
  	this.courtService.getStories(this.uid).subscribe((res) => {
  		console.log(res);
  	});
  }

}
