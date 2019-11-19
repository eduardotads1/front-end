import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './access/login/login.component';
import { LoginService } from './access/login/login.service';
import { FormsModule} from '@angular/forms';
import { CadastrarComponent } from './access/cadastrar/cadastrar.component';
import { CadastrarService } from './access/cadastrar/cadastrar.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ LoginService, CadastrarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
