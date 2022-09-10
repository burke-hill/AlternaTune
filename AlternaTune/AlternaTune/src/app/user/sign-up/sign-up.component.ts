import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {


  showSuccessMessage: boolean;
  serverErrorMessages: string;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }



  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 4000);
      },
      err => {
        if (err.status == 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
      }
    );
  }
}
