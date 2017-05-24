import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  onEmailSignin(form: NgForm) {
	this.authService.emailSignin(form.value.email, form.value.password).
		then((user) => {		
		})
		.catch((err) => {
			console.log(err);
		});
	}

  onFaceSignup() {
    this.authService.faceSignup().then((user) => {
    })
    .catch((err) => {
        console.log(err);
      });
  }

  onGoogleSignup() {
    this.authService.googleSignup();
  }

}
