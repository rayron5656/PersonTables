import { Component, OnInit,Input,EventEmitter } from '@angular/core';
import {Car} from './Car';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() selectedCar:string = '';

 

  constructor() { }

  ngOnInit(): void {
  }

}
