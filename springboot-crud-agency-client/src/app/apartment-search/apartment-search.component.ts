import { ApartmentDetailsComponent } from '../apartment-details/apartment-details.component';
import { Observable } from "rxjs";
import { ApartmentService } from "../apartment.service";
import { Apartment } from "../apartment";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { SearchDto } from '../search-dto';

@Component({
  selector: "app-apartment-search",
  templateUrl: "./apartment-search.component.html",
  styleUrls: ["./apartment-search.component.css"]
})
export class ApartmentSearchComponent implements OnInit {

  searchDto: SearchDto = new SearchDto();
  apartments: Observable<any[]>;

  constructor(private apartmentService: ApartmentService,
    private router: Router) { }

  ngOnInit() {
  }

  search() {
    if (this.searchDto.wishToPay == undefined || this.searchDto.wishToPay == null)
      this.searchDto.wishToPay = 0; else this.searchDto.wishToPay;

    if (this.searchDto.minNoOfBeds == undefined || this.searchDto.minNoOfBeds == null)
      this.searchDto.minNoOfBeds = 0; else this.searchDto.minNoOfBeds;

    if (this.searchDto.minBedArea == undefined || this.searchDto.minBedArea == null)
      this.searchDto.minBedArea = 0; else this.searchDto.minBedArea;

    if (this.searchDto.minNoOfBaths == undefined || this.searchDto.minNoOfBaths == null)
      this.searchDto.minNoOfBaths = 0; else this.searchDto.minNoOfBaths;

    if (this.searchDto.minBathArea == undefined || this.searchDto.minBathArea == null)
      this.searchDto.minBathArea = 0; else this.searchDto.minBathArea;

    if (this.searchDto.minTotalArea == undefined || this.searchDto.minTotalArea == null)
      this.searchDto.minTotalArea = 0; else this.searchDto.minTotalArea;

    this.apartmentService
      .searchApartment(this.searchDto).subscribe(data => {
        console.log(data);
        this.apartments = data;

      },
        error => console.log(error));
  }
}
