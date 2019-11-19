import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  lista: any[];

  user: string;
  password: string;

  constructor(
    private loginService: LoginService) { }

  ngOnInit() {
    
  }

  salvar(){
    return this.loginService.save(this.user ,this.password)
    .subscribe(x => {
      console.log(x);
    },
    error =>{

    });
  }

}
