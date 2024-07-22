import { Component, OnInit } from '@angular/core';
import { ShareddataService } from '../Shared/shareddata.service';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component implements OnInit{
  
  data!:any;

  constructor(private sh:ShareddataService){

  }

  ngOnInit(){
    this.sh.shared$.subscribe((data)=>{
      this.data = data;
    })
  }

  update(){
    
    this.sh.setData(Math.floor(Math.random()*100));
  }

}
