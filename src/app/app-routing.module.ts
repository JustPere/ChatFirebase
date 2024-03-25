import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { chatPageComponent } from './chatPage/chatPage.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'chatPage', component: chatPageComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/inicio' }, // Ruta por defecto para rutas desconocidas
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
