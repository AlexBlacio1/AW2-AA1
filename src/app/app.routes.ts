import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GestorComponent } from './pages/gestor/gestor.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
{path: 'home', component:HomeComponent},
{path: 'gestor', component:GestorComponent},
{path: 'login', component:LoginComponent},

{path: '', redirectTo:'home', pathMatch:'full'}

];
