import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BuscarComponent } from 'src/app/components/buscar/buscar.component';


@Component({
  selector: 'app-listas',
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarComponent
  ],
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
