import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  modalAbierto: boolean = false;

  abrirModalPoliticas() {
    this.modalAbierto = true;
  }

  cerrarModalPoliticas() {
    this.modalAbierto = false;
  }
}
