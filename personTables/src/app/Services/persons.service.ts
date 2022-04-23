import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export  class PersonsService {
  getPerson(id: number) {
    return this.Personal.get('https://fakestoreapi.com/users/'+id);
  }

  constructor(private Personal:HttpClient) {
    
   }

  getPersons(){
    return this.Personal.get('https://fakestoreapi.com/users');
    
  }
}
