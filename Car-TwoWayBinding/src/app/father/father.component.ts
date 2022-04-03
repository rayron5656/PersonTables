import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

 carTypes:string[] = ['mazda',
  'toyota',
  'ford',
  'skoda',
  'ferrari',
  'lamborghini',
  'james bond car'];

  @Input() carSelect:string = '';

  constructor() { }

  ngOnInit(): void {
    
  }
  handelChange(){
    console.log(this.carSelect);
  }

}
