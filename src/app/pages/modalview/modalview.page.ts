import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalview',
  templateUrl: './modalview.page.html',
  styleUrls: ['./modalview.page.scss'],
})
export class ModalviewPage implements OnInit {

  constructor(private modalControl: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalControl.dismiss(
      {
        message: 'El usuario recibio el mensaje'
      }
    );
  }

}
