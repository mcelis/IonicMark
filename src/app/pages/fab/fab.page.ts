import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {
  data = Array(50);

  constructor() { }

  ngOnInit() {
  }

  onClickGoogle(){
    console.log('Boton google presionado');
  }

}
