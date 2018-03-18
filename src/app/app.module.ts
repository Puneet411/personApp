import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { HomeComponent } from './home/home.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { SearchComponent } from './search/search.component';
import { RentalComponent } from './rental/rental.component';
import { FilterAgeComponent } from './filter-age/filter-age.component';
import {RouterModule} from '@angular/router';
import { DisplayPersonComponent } from './display-person/display-person.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTableModule} from 'angular5-data-table';
import {HttpClientModule} from '@angular/common/http';
import {PersonService} from './person.service';
import { RentalDisplayComponent } from './rental-display/rental-display.component';
import { MapValuesPipe } from './map-values.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarHeaderComponent,
    HomeComponent,
    AddPersonComponent,
    SearchComponent,
    RentalComponent,
    FilterAgeComponent,
    DisplayPersonComponent,
    RentalDisplayComponent,
    MapValuesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
    {path:'',component:HomeComponent},
    {path:'add',component:AddPersonComponent},
    {path:'search',component:SearchComponent},
    {path:'filter',component:FilterAgeComponent},
    {path:'edit/:id',component:RentalComponent},
      {path:'rental-display/:id',component:RentalDisplayComponent},
      {path:'display',component:DisplayPersonComponent}
    ])
  ],
  providers: [
    PersonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
