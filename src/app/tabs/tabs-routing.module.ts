import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [

    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'eventos',
      loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
    },
    {
      path: 'conf',
      loadChildren: () => import('./conf/conf.module').then( m => m.ConfPageModule)
     
      },
      {
        path: 'amigues',
        loadChildren: () => import('./amigues/amigues.module').then( m => m.AmiguesPageModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
