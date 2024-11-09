import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MyserviceService } from '../Sharedfoler/myservice.service';

@Component({
  selector: 'app-secound',
  templateUrl: './secound.component.html',
  styleUrls: ['./secound.component.css']
})
export class SecoundComponent implements OnInit{

  @ViewChild('myInp') myInp!:ElementRef;

  constructor(private myservice:MyserviceService){}
  num:any = 0;

  ngOnInit(): void {
    this.myservice.data$.subscribe((data)=>{
      this.num = data;
    })
  }

  sendData(){
    // convert string to integer data.
    let data = +this.myInp.nativeElement.value;
    let newData =  +this.num + data

    this.myservice.emmitData(newData);
    
  }


}
