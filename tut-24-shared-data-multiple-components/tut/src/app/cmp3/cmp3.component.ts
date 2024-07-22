import { Component } from '@angular/core';
import { ShareddataService } from '../Shared/shareddata.service';

@Component({
  selector: 'app-cmp3',
  templateUrl: './cmp3.component.html',
  styleUrls: ['./cmp3.component.css']
})
export class Cmp3Component {
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
