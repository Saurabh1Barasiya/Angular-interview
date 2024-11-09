import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  private subject = new Subject();
  data$ = this.subject.asObservable();

  emmitData(data:any){
    this.subject.next(data);
  }
}
