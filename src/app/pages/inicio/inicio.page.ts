import { Componente, DatamenuService } from './../../services/datamenu.service';
import { MenuComponent } from './../../components/menu/menu.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  constructor(private dataMenu: DatamenuService) { }

  componentes: Componente[];

  ngOnInit() {
    this.componentes = this.dataMenu.getComponente();
  }

}
