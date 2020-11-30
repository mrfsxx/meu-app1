import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmiguesPageRoutingModule } from './amigues-routing.module';

import { AmiguesPage } from './amigues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmiguesPageRoutingModule
  ],
  declarations: [AmiguesPage]
})
export class AmiguesPageModule {}
