import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { PersonListComponent } from './person-list/person-list.component';
import { HttpClientModule } from '@angular/common/http';
import { InspectPersonComponent } from './inspect-person/inspect-person.component';



const appRoute:Routes = [
  {path:'person/inspect/:id', component:InspectPersonComponent},
  {path:'', component:PersonListComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    InspectPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoute),
    
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
