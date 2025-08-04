import { Component } from '@angular/core';
import { SearchbarComponent } from '../components/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CategoriasComponent } from '../components/categorias/categorias.component';
import { PopularesComponent } from '../components/populares/populares.component';

interface Categoria {
  id: number;
  label: string;
  image: string;
  active: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    SearchbarComponent,
    CategoriasComponent,
    PopularesComponent
  ],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categorias: Categoria[] = [];

  constructor() {}

  ngOnInit() {
    this.getCategorias(); // 👈 aquí ya se llama correctamente
  }

  getCategorias() {
    this.categorias = [
      { id: 1, label: 'Castillo San Felipe', image: 'assets/images/icons/castillo-de-san-felipe.jpg', active: true },
      { id: 2, label: 'Ciudad Amurallada', image: 'assets/images/icons/barrios.jpg', active: false },
      { id: 3, label: 'Playa Blanca', image: 'assets/images/icons/1.jpg', active: false },
      { id: 4, label: 'Islas del Rosario', image: 'assets/images/icons/1.jpg', active: false },
      { id: 5, label: 'Getsemaní', image: 'assets/images/icons/1.jpg', active: false }
    ];
  }
}
