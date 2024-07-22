import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {

  constructor() { }

  share = new BehaviorSubject<any>(null);
  shared$ = this.share.asObservable();

  setData(data:any){
    this.share.next(data);
  }

  getData(){
    return this.share.value;
  }

  
}
