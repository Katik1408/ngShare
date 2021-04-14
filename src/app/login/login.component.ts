import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      uname: new FormControl(),
      pwd: new FormControl(),
    });
  }

  goToDashboard(data) {
    if (this.loginService.checkUser(data.uname, data.pwd)) {
      this.router.navigateByUrl('dashboard');
    }
  }
}
