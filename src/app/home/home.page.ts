import { Component } from '@angular/core';
import { SearchbarComponent } from '../components/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({

  imports: [
    CommonModule,
    IonicModule,
    SearchbarComponent,
    FormsModule
  ],
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
})
export class HomePage {

  constructor() {}

}
