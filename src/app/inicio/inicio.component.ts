import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [MenuComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  constructor(private router: Router) {}

  RedirigirEmprendimientos() {
    this.router.navigate(['/emprendimientos']);
  }

}
