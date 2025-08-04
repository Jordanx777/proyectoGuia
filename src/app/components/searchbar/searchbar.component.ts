import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
 
  selector: 'app-searchbar',
  imports: [CommonModule, IonicModule],
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  standalone: true,
})
export class SearchbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
