import { Component } from '@angular/core';
import { ShareddataService } from '../Shared/shareddata.service';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css']
})
export class Cmp2Component {
  data!:any;

  constructor(private sh:ShareddataService){

  }

  ngOnInit(){
    this.sh.shared$.subscribe((data)=>{
      // console.log(data);
      this.data = data;
    })
  }
}
