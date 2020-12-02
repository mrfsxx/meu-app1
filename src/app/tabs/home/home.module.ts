import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
type Task= {
name: string,
completed: boolean
};
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {
  public tasks: Task[] = [
  {name: 'Learn Ionic', completed:false},
  {name:'Buy milk', completed: true}

  ];
  public newTaskName ='';
  public addTask(){
    this.tasks.push({
     name:this.newTaskName,
     completed: false
    })
    this.newTaskName = '';
  }
}
