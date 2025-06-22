import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  rutaActual: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.rutaActual = this.router.url;
    });
  }

  redirigir(ruta: string) {
    this.router.navigate([ruta]);
  }
}
