import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-car-modal',
  standalone: true,
  templateUrl: './car-modal.html',
  styleUrl: './car-modal.css',
})
export class CarModal {
  @Input() car!: Auto;
  @Output() onClose = new EventEmitter<void>();

  // la touche Échap ferme aussi la fenêtre
  @HostListener('document:keydown.escape')
  close() {
    this.onClose.emit();
  }
}