import { Component, Input} from '@angular/core';
import { Categoria } from './categoria.model';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent {

 @Input() item!: Categoria;
  constructor() { }

  ngOnInit() {}

}
