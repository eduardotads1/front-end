import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CadastrarService {

  endPoint = 'http://localhost:8080/login/cadastrar';
  
  constructor(private http: HttpClient) { }

  salvar(nome:string, email:string, senha:string){
    return this.http.post<any[]>(this.endPoint, {nome:nome , email:email , senha:senha} );
  }

}
