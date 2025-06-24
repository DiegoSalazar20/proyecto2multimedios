import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

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
  selector: 'app-emprendimiento-detalle',
  imports: [HttpClientModule, NgIf, NgForOf],
  templateUrl: './emprendimiento-detalle.component.html',
  styleUrl: './emprendimiento-detalle.component.css'
})
export class EmprendimientoDetalleComponent implements OnInit {
  emprendimiento!: Emprendimiento;
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.http.get<any>('assets/emprendimientos.json').subscribe((data) => {
      if (data?.emprendimientos) {
        const encontrado = data.emprendimientos.find((e: any) => e.id === id);
        if (encontrado) {
          this.emprendimiento = encontrado;
        } else {
          console.error('Emprendimiento no encontrado con id:', id);
        }
      } else {
        console.error('No se encontraron emprendimientos en el JSON');
      }
    });
  }
}
