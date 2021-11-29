import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { CreateApartmentComponent } from './create-apartment/create-apartment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { UpdateApartmentComponent } from './update-apartment/update-apartment.component';
import { ApartmentSearchComponent } from './apartment-search/apartment-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'apartment', pathMatch: 'full' },
  { path: 'apartments', component: ApartmentListComponent },
  { path: 'add', component: CreateApartmentComponent },
  { path: 'update/:id', component: UpdateApartmentComponent },
  { path: 'details/:id', component: ApartmentDetailsComponent },
  { path: 'search', component: ApartmentSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
