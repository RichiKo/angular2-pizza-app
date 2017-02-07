import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserAuthDto } from '../../../data-transfer-objects/user-auth-dto.model';
import { UserDto } from '../../../data-transfer-objects/user-dto.model';
import { endpointUrl } from '../../../consts';
import { Router } from '@angular/router';
import { Cart } from '../../../cart/ts/models/cart.model';
import { Account } from '../models/account.model';


@Injectable()
export class AuthService {
  constructor(private http: Http, private cart: Cart, private account: Account, private router: Router) {
  }

  login(email, passwd): Observable<UserDto> {
    console.log('Try to login with Email: ' + email + ' AND password: ' + passwd);

    let endpoint_url: string = endpointUrl + 'login';
    let userAuthDto: UserAuthDto = new UserAuthDto(email, passwd);
    let body = JSON.stringify(userAuthDto);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(endpoint_url, body, options)
      .map(res => res.json())
      .map((data: any) => UserDto.fromJson(data))
      .do(res => {
        if (res.authToken.success) {
          localStorage.setItem('auth_token', res._authToken.token);
          console.log('Login erfolgreich: this.loggedIn =' + res._authToken.success);
        }
      })
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.cart.flush();
    this.account.flush();
    this.router.navigate(['']);
  }

  isLoggedIn() {
    let token: string = localStorage.getItem('auth_token');
    return token != null && token.length > 0; 
  }
}