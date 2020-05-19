import { Component, OnInit, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Componente, DatamenuService } from './../../services/datamenu.service';
import { IonMenu } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @ViewChild ('MiMenu') Menu: IonMenu;

  constructor(private dataMenu: DatamenuService) { }

  componentes: Componente[];

  ngOnInit() {
    this.componentes = this.dataMenu.getComponente();
  }

  onClickMenu(){
    this.Menu.close();
  }


}
