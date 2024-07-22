import { Component } from '@angular/core';
import { ShareddataService } from '../Shared/shareddata.service';

@Component({
  selector: 'app-cmp4',
  templateUrl: './cmp4.component.html',
  styleUrls: ['./cmp4.component.css']
})
export class Cmp4Component {
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
