import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadimgPageRoutingModule } from './loadimg-routing.module';

import { LoadimgPage } from './loadimg.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadimgPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LoadimgPage]
})
export class LoadimgPageModule {}
