import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.page.html',
  styleUrls: ['./refresh.page.scss'],
})
export class RefreshPage implements OnInit {

  data = Array(10);
  constructor() { }

  ngOnInit() {
  }

  doRefresh(event){
    console.log('Se lanzo refresh');
    setTimeout(()=>{
      console.log('termini de procesar');
      const newArray = Array(5);
      this.data.push(... newArray);
      event.target.complete();
    }, 2000
    );
  }

}
