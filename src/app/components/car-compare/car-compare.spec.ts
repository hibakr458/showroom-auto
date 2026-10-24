import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-car-compare',
  standalone: true,
  templateUrl: './car-compare.html',
  styleUrl: './car-compare.css',
})
export class CarCompare {
  @Input() cars: Auto[] = [];
  @Output() onClear = new EventEmitter<void>();

  // la touche Échap annule la comparaison
  @HostListener('document:keydown.escape')
  clear() {
    this.onClear.emit();
  }
}