import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { ContactFormComponent} from '../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public emptyContact: HomePage={
    text: ''
  }

  constructor() { }

  ngOnInit() {
  }
public handleSave(){
  console.log(this.emptyContact);
}
}
