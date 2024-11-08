import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  count:number = 0;
  private subject = new BehaviorSubject<number>(0);
  addnewcount$ = this.subject.asObservable();


  increment(){
    this.subject.next(this.count+1);
  }

}
