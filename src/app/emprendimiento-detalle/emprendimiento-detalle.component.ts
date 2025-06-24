import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

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
  imports: [HttpClientModule],
  templateUrl: './emprendimiento-detalle.component.html',
  styleUrl: './emprendimiento-detalle.component.css'
})
export class EmprendimientoDetalleComponent implements OnInit {
  emprendimientos: Emprendimiento[] = [];
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID recibido:', id);
    this.http.get<any>('assets/emprendimientos.json').subscribe((data) => {
      if (data?.emprendimientos) {
        this.emprendimientos = data.emprendimientos.filter((e: Emprendimiento) => !!e.nombre);
      } else {
        console.error('contactos_adicionales no encontrados en el JSON');
      }
    });
  }
}
