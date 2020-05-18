import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      name: 'Chip',
      redirectTo: '/chip'
    },
    {
      name: 'Datetime',
      redirectTo: '/datetime'
    },
    {
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      name: 'Grid',
      redirectTo: '/grid'
    },
    {
      name: 'Avatar',
      redirectTo: '/avatar'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  name: string;
  redirectTo: string;
}