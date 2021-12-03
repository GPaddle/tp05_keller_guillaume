import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './form/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApiLogin = "/api/login"
  urlApiAuth = "/api/auth"
  tokenParse: String = "";

  constructor(private httpClient: HttpClient) { }

  public postLogin(login: String, password: String): Observable<Contact> {
    let data: String;
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    data = `login=${login}&pass=${password}`;
    return this.httpClient.post<Contact>(this.urlApiLogin, data, httpOptions);
  }

  public getLogin(login: String): Observable<Contact> {
    let data: String = "login=" + login;

    return this.httpClient.get<any>(this.urlApiAuth + login);

  }
}
