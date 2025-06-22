import { Component } from '@angular/core';
import {MenuComponent} from '../menu/menu.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-emprendimientos',
  imports: [
    MenuComponent,
  ],
  templateUrl: './emprendimientos.component.html',
  styleUrl: './emprendimientos.component.css'
})
export class EmprendimientosComponent {

}
