import { Injectable } from '@angular/core';

export interface Contact {
  name:string;
  username:string;
  text:string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
private contacts: Contact[] = [
  {name: 'Marfs',username:'mrfsxx', text:'Eu decido jogar Third Strike um pouquinho e aí o cara dá 30 taunts por partida, fica 5-4 pra mim e ele ainda me chama de "noob".'},
  {name: 'Olatorugu',username:'vsguerra', text:'Nossa, hype tá a milhão. Acho que na real que tô mais hypado pro Neo do que pro remake do FFVII. #TWEWY.'},
  {name: 'Tami',username:'Tamires01-alt', text:'Estou emocionada de finalmente ver esse Patch escrito Shadowbringers e não ser no PS4'},
  {name: 'Camis',username:'camilaplevi', text:'Impressionante como qualquer FF clássico teria HORAS de duração a menos se não fosse Random Battle'},

];

  public all() {
    return this.contacts;
  }
}
