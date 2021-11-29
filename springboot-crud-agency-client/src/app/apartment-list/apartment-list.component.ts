import { ApartmentDetailsComponent } from '../apartment-details/apartment-details.component';
import { Observable } from "rxjs";
import { ApartmentService } from "./../apartment.service";
import { Apartment } from "./../apartment";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-apartment-list",
  templateUrl: "./apartment-list.component.html",
  styleUrls: ["./apartment-list.component.css"]
})
export class ApartmentListComponent implements OnInit {
  apartments: Observable<Apartment[]>;

  constructor(private apartmentService: ApartmentService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.apartments = this.apartmentService.getApartmentsList();
  }

  deleteApartment(id: number) {
    this.apartmentService.deleteApartment(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  apartmentDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateApartment(id: number){
    this.router.navigate(['update', id]);
  }
}
