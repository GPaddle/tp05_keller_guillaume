import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from './form/contact';

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

  private proceedLogin(login: string, password: string, url: string): Observable<Contact> {
    let data: Object = {
      "login": login,
      "password": password,
    };

    return this.httpClient.post<any>(url, data, this.httpOptions);
  }

  public postLogin(login: string, password: string): Observable<Contact> {
    return this.proceedLogin(login, password, environment.API_URL + this.urlApiLogin);
  }

  public postRegistration(login: string, password: string): Observable<Contact> {
    return this.proceedLogin(login, password, environment.API_URL + this.urlApiRegister);
  }
}
