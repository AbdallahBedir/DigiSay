import { Component, OnInit} from '@angular/core';
import { JsonFileService } from '../services/json-file.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  JsonData:any[];
  FollowersData:number[] =[];
  DateData:string[] =[];
  DataLoaded:boolean = false;

  constructor(private _jsonFileService:JsonFileService) {
        this._jsonFileService.getJsonData().subscribe(data => {
                this.JsonData = data.items;
                console.log(`this is the data fetched from json file`,this.JsonData);
                this.JsonData.forEach(element => {
                  this.FollowersData.push(element.followers);
                  this.DateData.push(element.date);
                });
                console.log(`this is the Amount data`,this.FollowersData);
              },err => {
                console.log(`there is error while fetching data from json file`)
              },
              () => {
                console.log(`Data fetched completely from json file`);
                this.DataLoaded = true;
              });
  }

  ngOnInit() {
    
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  //public barChartLabels:string[] = ['1/6/2017', '1/7/2017', '1/8/2017', '1/9/2017', '1/10/2017', '1/11/2017', '1/12/2017'];
  public barChartLabels:string[] = this.DateData;
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    //{data: [132697, 232697, 332697, 432697, 532697, 602897, 787697], label: 'Followers'},
    {data: this.FollowersData, label: 'Followers'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100000),
      590000,
      800000,
      (Math.random() * 100000),
      560000,
      (Math.random() * 1000000),
      400000];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}
