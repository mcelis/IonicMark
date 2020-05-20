import { PopviewComponent } from './../../components/popview/popview.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverControl: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(event:any){
    const popover = await this.popoverControl.create(
      {
        component: PopviewComponent,
        mode: 'ios',
        event,
        translucent: true
      }
    );
    await popover.present();
  }

}
