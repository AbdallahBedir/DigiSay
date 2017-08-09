import { Component , ViewEncapsulation } from '@angular/core';
import { JsonFileService } from './services/json-file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'DigiSay';
  JsonData:any[];
  DataLoaded:boolean= false;
  revenues:any[] = [];

  constructor(private _jsonFileService:JsonFileService){
    this._jsonFileService.getJsonData().subscribe(
      data => 
      {
        this.JsonData = data.items;
        console.log(`this is the data fetched from json file`,this.JsonData);
         this.JsonData.forEach(element => {
              this.revenues.push({'date':element.date,'amount':element.revenue.amount})
        });
      },
      err =>
      {
        console.log(`Error While fetching data from json file`,err);
      },
      () =>
      {
        console.log(`Data fetched Completely from json file`);
        this.DataLoaded = true;
      }
    );
  }

  ngOnInit(){

  }

}
