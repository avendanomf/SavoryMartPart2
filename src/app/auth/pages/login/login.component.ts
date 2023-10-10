import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = '';
  contrasena: string = '';
  constructor(private authService: UserService, private router: Router) { }

  autenticarUsuario() {
    this.authService.validateUser(this.usuario, this.contrasena).subscribe(isValid => {
      if (isValid) {
        console.log('Credenciales válidas');
        this.router.navigate(['/auth/admin']);
      } else {
        console.log('Credenciales no válidas');
      }
    });
  }




  // guardarUsuario() {
  //   this.authService.addUser(this.usuario, this.contrasena).subscribe(
  //     (response) => {
  //       console.log('Usuario guardado exitosamente', response);
  //     },
  //     (error) => {
  //       console.error('Error al guardar el usuario', error);
  //     }
  //   );
  // }



  ngOnInit(): void {
  }

}
