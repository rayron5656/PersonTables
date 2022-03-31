import { Component, OnInit } from '@angular/core';

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
  'jamesbondcar'];

  carSelect:any ='';

  constructor() { }

  ngOnInit(): void {
    console.log(this.carTypes);
  }

}
