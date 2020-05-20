import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loadimg',
  templateUrl: './loadimg.page.html',
  styleUrls: ['./loadimg.page.scss'],
})
export class LoadimgPage implements OnInit {

  constructor(private loadingControl: LoadingController) { }

  ngOnInit() {
  }

   async presentLoading(){
    const loading = await this.loadingControl.create(
      {
        message: 'porfavor, espere un momento',
        duration: 2000
      }
    );

    await loading.present();

    const {role, data} = await loading.onWillDismiss();
    console.log('Finalizo el proceso');


  }

}
