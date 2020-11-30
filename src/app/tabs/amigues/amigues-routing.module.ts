import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmiguesPage } from './amigues.page';

const routes: Routes = [
  {
    path: '',
    component: AmiguesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmiguesPageRoutingModule {}
