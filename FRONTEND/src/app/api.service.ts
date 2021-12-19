import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from './form/address';
import { Contact } from './form/contact';
import { People } from './form/people';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApiLogin: string = "/login"
  urlApiRegister: string = "/register"
  urlApiAddress: string = "/address"
  urlApiUser: string = "/user";

  user_id: number;

  tokenParse: String = "";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  };

  public postLogin(login: string, password: string): Observable<{ data: any, statusCode: Number }> {
    let data: Object = {
      "login": login,
      "password": password,
    };

    return this.httpClient.post<any>(environment.API_URL + this.urlApiLogin, data, this.httpOptions);
  }

  public postRegistration(people: People): Observable<{ data: any, statusCode: Number }> {
    return this.httpClient.post<any>(environment.API_URL + this.urlApiRegister, people, this.httpOptions);
  }

  public postAddress(address: Address, user_id: Number): Observable<Contact> {
    return this.httpClient.post<any>(environment.API_URL + this.urlApiAddress, { address, "user_id": user_id }, this.httpOptions);
  }

  public getUser(user_id: number) {
    return this.httpClient.get<any>(environment.API_URL + this.urlApiUser + "/" + user_id, this.httpOptions);
  }
  
  public removeAddress(id: number) {
    return this.httpClient.delete<any>(environment.API_URL + this.urlApiAddress + "/" + id, this.httpOptions);
  }
}
