import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './access/login/login.component';
import { CadastrarComponent } from './access/cadastrar/cadastrar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent  },
  { path: 'cadastrar', component: CadastrarComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
