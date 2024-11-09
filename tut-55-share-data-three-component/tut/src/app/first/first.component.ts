import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MyserviceService } from '../Sharedfoler/myservice.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent{
  @ViewChild('myinp') myInp!:ElementRef;

  constructor(private myservice:MyserviceService){}
  
  sendData(){
    let data = this.myInp.nativeElement.value;
    this.myInp.nativeElement.value = '';

    this.myservice.emmitData(data);


  }
  

}
