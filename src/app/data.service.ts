import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient){}
  //getting data from API
  getData():Observable<any[]>{
    return this.hc.get<any[]>('http://localhost:3000/events')
   }
}
