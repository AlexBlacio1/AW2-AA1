import { Component } from '@angular/core';

@Component({
  selector: 'app-gestor',
  imports: [],
  templateUrl: './gestor.component.html',
  styleUrl: './gestor.component.css'
})
export class GestorComponent {

  logout(){
    localStorage.setItem("login","false")
    window.location.href='home'
  }
}
