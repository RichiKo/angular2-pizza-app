import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';
import { AuthService } from '../services/auth.service';
import { Account } from '../models/account.model';

@Component({
  selector: 'login',
  templateUrl: 'app/login/templates/login.html',
  styleUrls: ['app/css/styles.css']
})

export class LoginComponent {

  private email: string;
  private passwd: string;
  msgs: Message[] = [];

  constructor(private authService: AuthService, private router: Router, private account: Account) {
  }

  login() {
    console.log('Trying to login with user' + this.email);
    this.authService.login(this.email, this.passwd)
      .subscribe((result) => {
        if(result.authToken.success === true) {
          this.account.id = result.id;
          this.account.salutation = result.salutation;
          this.account.firstName = result.firstName;
          this.account.lastName = result.lastName;
          this.account.streetName = result.streetName;
          this.account.zipCode = result.zipCode;
          this.account.cityName = result.cityName;

          this.router.navigate(['confirmation']);
        } else {
          this.msgs.push({
            severity:'error',
            summary:'Fehler!',
            detail: 'Sie konnten nicht angemeldet werden'
          });
        }
      });
  }
}