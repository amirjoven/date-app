
import { Component, OnInit } from '@angular/core';
import { Dateinfo } from 'src/app/dateinfo';
import { DateServiceService } from 'src/app/date-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'date-app';
  
  public ServerDateinfo: Dateinfo;
    
  constructor(private dateService: DateServiceService) {
    this.ServerDateinfo = new Dateinfo;
  }

  ngOnInit() {
    this.dateService.getDate().subscribe(data => {
      this.ServerDateinfo = data;
    });
  }
 
}
