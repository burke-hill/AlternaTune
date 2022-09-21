import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { json } from 'express';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }

  showSuccessMessage: boolean;
  serverErrorMessages: string;

  model = {

    username: '',
    password: ''
  };

  ngOnInit(): void {
  }


  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      res => {


        var testdata = JSON.stringify(res);
        var json = JSON.parse(testdata);
        console.log(json.token);
        this.userService.setToken(json.token);
        this.router.navigateByUrl('/profile');
      },
      err => {

        console.log("Error");
      }
    );
  }

}
