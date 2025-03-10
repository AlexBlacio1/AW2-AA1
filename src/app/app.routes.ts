import { Routes, CanActivateFn } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GestorComponent } from './pages/gestor/gestor.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
{path: 'home', component:HomeComponent},
{path: 'gestor', component:GestorComponent, canActivate:[loginGuard]},
{path: 'login', component:LoginComponent},

{path: '', redirectTo:'home', pathMatch:'full'}

];
