import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: string = '';
  contrasena: string = '';

  constructor(private authService: UserService) { }

  guardarUsuario() {
    const userData = { usuario: this.usuario, contrasena: this.contrasena }
    if (userData) {
      this.authService.addUser(userData).subscribe(
        (response) => {
          console.log('Usuario guardado exitosamente', response);
        },
        (error) => {
          console.error('Error al guardar el usuario', error);
        }
      );
    }
    else
    {
      console.error('Usuario o contraña invalida');
    }

  }



  ngOnInit(): void {
  }

}
