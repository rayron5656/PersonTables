import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
import { Person } from '../interfaces/Person';
import { PersonsService } from '../Services/persons.service';

@Component({
  selector: 'app-inspect-person',
  templateUrl: './inspect-person.component.html',
  styleUrls: ['./inspect-person.component.css']
})
export class InspectPersonComponent implements OnInit {


  id:number = 0;
  person:any = '';

  constructor(private route:ActivatedRoute, private _personService:PersonsService,private _router:Router ) {
    this.route.params
    .subscribe(params => {
      this.id = params['id'];
    })
    this._personService
    .getPerson(this.id)
    .subscribe((data) => {
      this.person = data
    });
    
    
  
  }

  ngOnInit(): void {
  }

  Click(){
    console.log(this.person);
  }

}
