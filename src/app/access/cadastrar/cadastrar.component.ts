import { Component, OnInit } from '@angular/core';
import { CadastrarService } from './cadastrar.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.less']
})
export class CadastrarComponent implements OnInit {

  nome: string;
  email:  string;
  senha:  string;

  constructor(  private cadastrarService: CadastrarService) { }

  ngOnInit() {
  }

  salvar(){
    return this.cadastrarService.salvar(this.nome, this.email, this.senha)
    .subscribe(x =>{

    })
  }

}
