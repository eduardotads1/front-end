import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  lista: any[];

  email: string;
  password: string;

  constructor(
    private loginService: LoginService) { }

  ngOnInit() {
    
  }

  consulta(){
    this.loginService.save(this.email).subscribe(response => this.lista = response);
  }

}
