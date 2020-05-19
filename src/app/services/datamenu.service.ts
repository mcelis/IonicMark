import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatamenuService {

  constructor() { 
    console.log('Servcio corriendo!')
  }
  private componentes: Componente[] = [
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
    },
    {
      name: 'Badge',
      redirectTo: '/badge'
    },
    {
      name: 'Button',
      redirectTo: '/button'
    },
    {
      name: 'Card',
      redirectTo: '/card'
    },
    {
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },
    {
      name: 'Infinite Scroll',
      redirectTo: '/infinite'
    },
    {
      name: 'Input',
      redirectTo: '/input'
    },
    {
      name: 'List Item',
      redirectTo: '/list-item'
    },
    {
      name: 'Note',
      redirectTo: '/note'
    }
  ];

  getComponente(): Componente[]{
    return this.componentes;
  }
}

export interface Componente{
  name: string;
  redirectTo: string;
}
