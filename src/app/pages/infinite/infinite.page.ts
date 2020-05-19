import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event:any){
    console.log('Cargando los datos');
    setTimeout(() => {
      const newArray = Array(20);
      this.data.push(... newArray);
      event.target.complete();

      if(this.data.length == 100){
        event.target.disabled = true;
        console.log('Se acabaron los datos !!!')
      }
    }, 1000);
  }

}
