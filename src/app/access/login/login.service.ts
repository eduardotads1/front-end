import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8080/login/acessar';

  constructor(private http: HttpClient) {}

  save(em : any) {
    return this.http.get<any[]>(this.url, 
      {params:{
        id:em
      }});
  }

}
