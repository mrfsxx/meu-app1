import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Contact, ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{

  public contacts: Contact[] = this.contactService.all();

  constructor(private modalController: ModalController, private contactService: ContactService) {}

  async showDetails(contact: Contact){
    const modal= await this.modalController.create({
      component: ContactService,
      componentProps: {
        contact
      }

    });
    await modal.present();
  }

}
