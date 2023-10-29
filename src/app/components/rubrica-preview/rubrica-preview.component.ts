import { Component, Input } from '@angular/core';
import { Contatto } from 'src/app/models/contatto';

@Component({
  selector: '[app-rubrica-preview]',
  templateUrl: './rubrica-preview.component.html',
  styleUrls: ['./rubrica-preview.component.css']
})
export class RubricaPreviewComponent {
  @Input()
  contatto?: Contatto;
  @Input()
  numero?: number;
}
