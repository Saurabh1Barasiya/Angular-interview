import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'tut';

  constructor(private cdRef: ChangeDetectorRef) {}

  @ViewChild('child') childcomponent!:ChildComponent;

  childData:string='';

  ngAfterViewInit(){
    console.log(this.childcomponent);
    this.childData = this.childcomponent.data; 
    this.cdRef.detectChanges(); // Manually trigger change detection
  }

}
