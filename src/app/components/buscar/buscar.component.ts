import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonIcon } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
  

@Component({
  selector: 'app-buscar',
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonIcon
  ],
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss'],
  exports: [BuscarComponent]
})
export class BuscarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
