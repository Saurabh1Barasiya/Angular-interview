import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  constructor(private mys:MyserviceService){}
  totel : number = 0;

  ngOnInit(): void {
    this.mys.addnewcount$.subscribe((data)=>{
      this.totel = data;
    })
  }
}
