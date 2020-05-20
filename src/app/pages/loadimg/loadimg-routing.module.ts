import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadimgPage } from './loadimg.page';

const routes: Routes = [
  {
    path: '',
    component: LoadimgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadimgPageRoutingModule {}
