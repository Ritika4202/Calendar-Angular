import { Component ,OnInit} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  events1:object[];
  calendarOptions: CalendarOptions;
  constructor(private ds:DataService)
  {}
  ngOnInit(){
    this.ds.getData().subscribe(
      res=>{
       this.events1=res;
       this.events1.forEach(this.checkForData)
       this.fun();
      },
      err=>{
      console.log(err);
      }
      )
   }
   //
  checkForData(item){
    //checking if there is no data on a day 
   if(item.title=='')
   {
     item.color="red";
   }
  }
  fun(){
  this.calendarOptions = 
  {
    initialView:'dayGridMonth',
    events:this.events1,
    dateClick: this.handleDateClick.bind(this) ,
  }; 
  }
    handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
    }
}
  


