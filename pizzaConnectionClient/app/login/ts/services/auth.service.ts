import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserAuthDto } from '../../../data-transfer-objects/user-auth-dto.model';
import { UserDto } from '../../../data-transfer-objects/user-dto.model';
import { endpointUrl } from '../../../consts';
 

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

   
login(email, passwd):Observable<UserDto> {
  console.log("Try to login with Email: " + email + " AND password: " + passwd);

  let endpoint_url: string = endpointUrl + 'login';
  let userAuthDto:UserAuthDto = new UserAuthDto(email, passwd);
  let body = JSON.stringify(userAuthDto);
  let headers = new Headers({'Content-Type': 'application/json'});
  let options = new RequestOptions({headers:headers});

  return this.http.post(endpoint_url, body, options)
    .map(res => res.json())
    .map((data:any) => UserDto.fromJson(data))
    .do(res => {
      if(res.authToken.success) {
        localStorage.setItem('auth_token', res._authToken.token);
        console.log("Login erfolgreich: this.loggedIn =" + res._authToken.success);
      }
    })
  }
}