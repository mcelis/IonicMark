import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { PopviewComponent } from './popview/popview.component';



@NgModule({
  declarations: [HeaderComponent, MenuComponent, PopviewComponent],
  exports: [
    HeaderComponent,
    MenuComponent,
    PopviewComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
