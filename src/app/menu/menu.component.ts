import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Contenido {
  nombre: string;
  url_image: string;
  alt: string;
}


@Component({
  selector: 'app-menu',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuAbierto = false;
  cerrandoMenu = false;
  animacionEntrada = false;

  rutaActual: string = '';
  contenido: Contenido[] = [];
  contenidoMovil: Contenido[] = [];

  fondoMenuMovil: { url_image: string; alt: string } | null = null;

  constructor(private router: Router, private http: HttpClient) {
    this.router.events.subscribe(() => {
      this.rutaActual = this.router.url;
    });
  }

  ngOnInit(): void {
    this.cargarLogoDesktop();
    this.cargarLogoMovil();
    this.cargarFondoMenuMovil();
  }
  

  cargarLogoDesktop() {
    this.http.get<any>('assets/emprendimientos.json').subscribe((data) => {
      if (data?.contenidos) {
        const logoNegro = data.contenidos.find((c: Contenido) => c.nombre === 'logo_negro');
        if (logoNegro) {
          this.contenido = [logoNegro];
        } else {
          console.error('No se encontró el contenido "logo_negro" en el JSON.');
        }
      } else {
        console.error('contenidos no encontrados en el JSON.');
      }
    });
  }

  cargarLogoMovil() {
    this.http.get<any>('assets/emprendimientos.json').subscribe((data) => {
      if (data?.contenidos) {
        const logoBlanco = data.contenidos.find((c: Contenido) => c.nombre === 'logo_blanco');
        if (logoBlanco) {
          this.contenidoMovil = [logoBlanco];
        } else {
          console.error('No se encontró el contenido "logo_blanco" en el JSON.');
        }
      } else {
        console.error('contenidos no encontrados en el JSON.');
      }
    });
  }

  cargarFondoMenuMovil() {
  this.http.get<any>('assets/emprendimientos.json').subscribe((data) => {
    if (data?.contenidos) {
      const fondo = data.contenidos.find((c: Contenido) => c.nombre === 'fondo_menu_movil');
      if (fondo) {
        this.fondoMenuMovil = fondo;
      } else {
        console.error('No se encontró el contenido "fondo_menu_movil" en el JSON.');
      }
    } else {
      console.error('contenidos no encontrados en el JSON.');
    }
  });
}

  redirigir(ruta: string) {
    this.router.navigate([ruta]);
  }

  abrirMenu() {
    this.menuAbierto = true;
    this.cerrandoMenu = false;
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
