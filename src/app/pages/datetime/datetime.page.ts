import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  fechaNacimiento: Date = new Date();
  customPicker: any;
  curtomYears = [2018,2015,2012,2009];

  constructor() { 
    this.customPicker = {
      buttons: [
        {
          text: 'Guardar la fecha',
          handler: () => console.log('Se ha guardado la fecha!')
        },
        {
          text: 'No salir',
          handler: () => {console.log('No puedes salir de aqui');
          return false;
        }
      }
      ]
    }
  }

  ngOnInit() {
    console.log(this.fechaNacimiento);
  }

  cambiarFecha(event){
    console.log(this.fechaNacimiento);
  }

}
