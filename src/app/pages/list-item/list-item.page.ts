import { Component, OnInit , ViewChild} from '@angular/core';
import { IonList } from '@ionic/angular'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.page.html',
  styleUrls: ['./list-item.page.scss'],
})
export class ListItemPage implements OnInit {

  @ViewChild('myList') lista: IonList;

  constructor() { }

  ngOnInit() {
  }

  buttonClick(){
    console.log('Usted hizo click en el item de boton');
  }

  favorito(){
    console.log('Usted hizo click en el boton favorito');
    this.lista.closeSlidingItems();
  }

  compartir(){
    console.log('Usted hizo click en el boton compartir');
    this.lista.closeSlidingItems();
  }


}
