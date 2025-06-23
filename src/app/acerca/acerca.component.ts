import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';

interface Contenido {
  nombre: string;
  url_image: string;
  alt: string;
}

@Component({
  selector: 'app-acerca',
  imports: [MenuComponent, HttpClientModule, CommonModule],
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.css'
})
export class AcercaComponent implements OnInit {

  contenido: Contenido[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/emprendimientos.json').subscribe((data) => {
      if (data?.contenidos) {
        const acerca = data.contenidos.find((c: Contenido) => c.nombre === 'acerca');
        if (acerca) {
          this.contenido = [acerca];
          console.log('Contenido cargado:', this.contenido);
        } else {
          console.error('No se encontró el contenido "inicio" en el JSON.');
        }
      } else {
        console.error('contenidos no encontrados en el JSON.');
      }
    });
  }



}
