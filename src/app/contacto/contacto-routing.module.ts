import { NgModule } from '@angular/core';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes =[
  {
    path: '',
    children: [
      { path: 'contacto', component: ContactoComponent },
      { path: '**', redirectTo: 'contacto' }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ContactoRoutingModule { }
