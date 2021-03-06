import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { HomePage } from 'src/app/home/home.page';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
@Input() contact: HomePage;
@Output() save = new EventEmitter();
  constructor() { }

  ngOnInit() {}

}
