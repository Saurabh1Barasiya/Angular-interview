import { Component } from '@angular/core';
import { ShareddataService } from '../Shared/shareddata.service';

@Component({
  selector: 'app-cmp5',
  templateUrl: './cmp5.component.html',
  styleUrls: ['./cmp5.component.css']
})
export class Cmp5Component {
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
