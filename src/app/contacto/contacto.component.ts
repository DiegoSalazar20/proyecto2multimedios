import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';

interface Contacto {
  nombre: string;
  correo: string;
  descripcion?: string;
  telefono?: string;
}

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MenuComponent],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contactos: Contacto[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/emprendimientos.json').subscribe((data) => {
      if (data?.contactos_adicionales) {
        this.contactos = data.contactos_adicionales.filter((c: Contacto) => !!c.nombre);
      } else {
        console.error('contactos_adicionales no encontrados en el JSON');
      }
    });
  }
}
