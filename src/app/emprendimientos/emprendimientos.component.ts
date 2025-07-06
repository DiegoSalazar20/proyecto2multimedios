import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InViewportDirective } from '../../utils/in-viewport.directive';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export interface Emprendimiento {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  ubicacion: string;
  horario: string;
  contacto: Contacto;
  precio: string;
  imagenes: Imagen[];
}

export interface Contacto {
  telefono: string;
  correo: string;
  web: string;
}

export interface Imagen {
  url_image: string;
  alt: string;
}



@Component({
  selector: 'app-emprendimientos',
  imports: [CommonModule, HttpClientModule, MenuComponent, InViewportDirective, FormsModule],
  templateUrl: './emprendimientos.component.html',
  styleUrl: './emprendimientos.component.css'
})
export class EmprendimientosComponent implements OnInit {
  emprendimientos: Emprendimiento[] = [];
  filtrados: Emprendimiento[] = [];
  busqueda: string = '';
  emprendimientoSeleccionado: number | null = null;
  esMovil: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>('assets/emprendimientos.json').subscribe((data) => {
      if (data?.emprendimientos) {
        this.emprendimientos = data.emprendimientos.filter((e: Emprendimiento) => !!e.nombre);
        this.filtrados = this.emprendimientos;
      } else {
        console.error('contactos_adicionales no encontrados en el JSON');
      }
    });
    this.esMovil = window.innerWidth < 768;
  }

  filtrar(): void {
    const termino = this.busqueda.toLowerCase();
    this.filtrados = this.emprendimientos.filter((e) =>
      e.nombre.toLowerCase().includes(termino)
    );
  }

  redirigirEmprendimiento(id: number): void {
    this.router.navigate(['/emprendimiento', id]);
  }


  activarHoverMovil(index: number) {
    this.emprendimientoSeleccionado = index;
  }

  desactivarHoverMovil() {
    setTimeout(() => {
      this.emprendimientoSeleccionado = null;
    }, 300);
  }
  
}
