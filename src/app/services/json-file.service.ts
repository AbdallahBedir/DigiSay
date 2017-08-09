import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class JsonFileService {

  constructor(private _http:Http) {
              
  }

  getJsonData(){
      return this._http.get('../assets/api.json')
                       .map(res => res.json());
  }
}
