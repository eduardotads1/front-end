import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8080/login/cadastrar';

  constructor(private http: HttpClient) {}

  save(username:string, password:string) {
    return this.http.post(this.url, { nome:username , senha:password });
  }

}
