import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Contenido {
  nombre: string;
  url_image: string;
  alt: string;
}

@Component({
  selector: 'app-inicio',
  imports: [MenuComponent, CommonModule, HttpClientModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{

  contenido: Contenido[] = [];

  constructor(private router: Router, private http: HttpClient) {}

 ngOnInit(): void {
  this.http.get<any>('assets/emprendimientos.json').subscribe((data) => {
    if (data?.contenidos) {
      const inicio = data.contenidos.find((c: Contenido) => c.nombre === 'inicio');
      if (inicio) {
        this.contenido = [inicio];
      } else {
        console.error('No se encontró el contenido "inicio" en el JSON.');
      }
    } else {
      console.error('contenidos no encontrados en el JSON.');
    }
  });
}


  RedirigirEmprendimientos() {
    this.router.navigate(['/emprendimientos']);
  }

}
