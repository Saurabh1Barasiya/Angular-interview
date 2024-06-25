import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy
{

  constructor(){
    console.log("I am form hero class constructor...");
  }
  
  ngOnChanges(changes: SimpleChanges){
    console.log("I am form hero class ngOnChanges...");
  }

  ngOnInit(){
    console.log("I am form hero class ng OnInit...");
  }

  ngDoCheck(): void {
    console.log("I am form hero class ng ngDocheck...");
  }

  ngAfterContentInit(): void {
    console.log("I am form hero class ngAfterContentInit...");
  }

  ngAfterContentChecked(): void {
    console.log("I am form hero class ngAfterContentChecked...");
  }

  ngAfterViewInit(): void {
    console.log("I am form hero class ngAfterViewInit...");
  }

  ngAfterViewChecked(): void {
    console.log("I am form hero class ngAfterViewChecked...");
  }
  
  ngOnDestroy(): void {
    console.log("I am form hero class ngOnDestroy...");
  }



}
