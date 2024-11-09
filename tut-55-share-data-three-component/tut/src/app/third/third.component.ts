import { Component } from '@angular/core';
import { MyserviceService } from '../Sharedfoler/myservice.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
  num:any= 0;
  constructor(private myservice:MyserviceService){}

  ngOnInit(): void {
    this.myservice.data$.subscribe((data)=>{
      this.num = data;
    })
  }
}
