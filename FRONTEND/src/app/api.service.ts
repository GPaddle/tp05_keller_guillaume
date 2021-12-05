import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from './form/contact';
import { People } from './form/people';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApiLogin = "/api/login"
  urlApiRegister = "/api/register"
  tokenParse: String = "";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  };

  public postLogin(login: string, password: string): Observable<Contact> {
    let data: Object = {
      "login": login,
      "password": password,
    };

    return this.httpClient.post<any>(environment.API_URL + this.urlApiLogin, data, this.httpOptions);
  }

  public postRegistration(people: People): Observable<Contact> {

    return this.httpClient.post<any>(environment.API_URL + this.urlApiRegister, people, this.httpOptions);
  }
}
