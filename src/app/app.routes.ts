import { Routes, CanActivateFn } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GestorComponent } from './pages/gestor/gestor.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard } from './guards/login.guard';
import { ContactosComponent } from './pages/contactos/contactos.component';

export const routes: Routes = [
{path: 'home', component:HomeComponent},
{path: 'gestor', component:GestorComponent, canActivate:[loginGuard]},
{path: 'login', component:LoginComponent},
{path: 'contactos', component:ContactosComponent},

{path: '', redirectTo:'home', pathMatch:'full'}

];
