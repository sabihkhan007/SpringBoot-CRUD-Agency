import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateApartmentComponent } from './create-apartment/create-apartment.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateApartmentComponent } from './update-apartment/update-apartment.component';
import { ApartmentSearchComponent } from './apartment-search/apartment-search.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateApartmentComponent,
    ApartmentDetailsComponent,
    ApartmentListComponent,
    UpdateApartmentComponent,
    ApartmentSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
