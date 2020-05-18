import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertControl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(){
    const alert = await this.alertControl.create({
        header: 'Alert',
        subHeader: 'Alert con multiples botones',
        message: 'Ests es un mensaje de alerta',
        inputs: [
          {
            name: 'name',
            type: 'text'
          }
        ],
        buttons: ['Cancelar', 'Abrir', 'Eliminar']
    });

    await alert.present();
  }

}
