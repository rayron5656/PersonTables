import { Component, OnInit } from '@angular/core';
import { Person } from '../interfaces/Person';
import { PersonsService } from '../Services/persons.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons:Person[] = [];

  constructor(private _personService:PersonsService) {
    this._personService.getPersons().subscribe((data:any) => {this.persons = data}); 
    
   }

  ngOnInit(): void {
  }

}
