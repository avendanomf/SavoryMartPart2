import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usuariosUrl = 'assets/database/usuarios.json';

  constructor(private http: HttpClient) { }

  // Obtener la lista de usuarios desde el archivo JSON
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usuariosUrl);
  } 
  validateUser(username: string, password: string): Observable<boolean> {
    return this.getUsers().pipe(
      map((usuarios: any[]) => {
        const user = usuarios.find(u => u.usuario === username);
        if (user && user.contraseña === password) {
          console.log(user);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  private saveUsers(users: any[]): Observable<void> {
    const json = JSON.stringify(users);
    const blob = new Blob([json], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'usuarios.json';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    return new Observable<void>();
  }


  addUser(newUser: { usuario: string; contrasena: string }): Observable<void> {
    return this.getUsers().pipe(
      switchMap((usuarios: any[]) => {
        usuarios.push(newUser);
        return this.saveUsers(usuarios);
      }),
      catchError((error: any) => {
        
        console.error('Error al agregar el usuario:', error);
        return new Observable<void>();
      })
    );
  }

}
