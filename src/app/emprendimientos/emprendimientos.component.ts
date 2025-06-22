import {Component, OnInit} from '@angular/core';
import {MenuComponent} from '../menu/menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface Emprendimiento {
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
  imports: [CommonModule, HttpClientModule, MenuComponent],
  templateUrl: './emprendimientos.component.html',
  styleUrl: './emprendimientos.component.css'
})
export class EmprendimientosComponent implements OnInit {
  emprendimientos: Emprendimiento[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/emprendimientos.json').subscribe((data) => {
      if (data?.emprendimientos) {
        this.emprendimientos = data.emprendimientos.filter((e: Emprendimiento) => !!e.nombre);
        console.log(this.emprendimientos[0].imagenes[0].url_image);
      } else {
        console.error('contactos_adicionales no encontrados en el JSON');
      }
    });
  }

}
