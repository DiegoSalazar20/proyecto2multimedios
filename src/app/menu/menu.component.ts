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
  menuAbierto = false;
cerrandoMenu = false;
animacionEntrada = false;

  rutaActual: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.rutaActual = this.router.url;
    });
  }

  redirigir(ruta: string) {
    this.router.navigate([ruta]);
  }

  abrirMenu() {
  this.menuAbierto = true;
  this.cerrandoMenu = false;
  // Activar animación de entrada en el siguiente ciclo del DOM
  setTimeout(() => {
    this.animacionEntrada = true;
  }, 10);
}

cerrarMenu() {
  this.animacionEntrada = false;
  this.cerrandoMenu = true;
}

onAnimacionTerminada() {
  if (this.cerrandoMenu) {
    this.menuAbierto = false;
    this.cerrandoMenu = false;
  }
}
}
