import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistroEventoComponent } from './registro-evento/registro-evento.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    RegistroEventoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ],
  exports: [
    
  ]
})
export class ModulesModule { }
