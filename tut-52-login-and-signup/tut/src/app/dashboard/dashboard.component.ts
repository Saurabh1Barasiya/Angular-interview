import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private route:Router){}
  logout(){
    localStorage.removeItem("user");
    this.route.navigate(["/login"]);
  }
}
