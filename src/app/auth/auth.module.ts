import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './pages/admin/admin.component';



@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule 
  ]
})
export class AuthModule { }
