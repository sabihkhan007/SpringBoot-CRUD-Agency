import { ApartmentService } from '../apartment.service';
import { Apartment } from '../apartment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-apartment',
  templateUrl: './create-apartment.component.html',
  styleUrls: ['./create-apartment.component.css']
})
export class CreateApartmentComponent implements OnInit {

  apartment: Apartment = new Apartment();
  submitted = false;

  constructor(private apartmentService: ApartmentService,
    private router: Router) { }

  ngOnInit() {
  }

  newApartment(): void {
    this.submitted = false;
    this.apartment = new Apartment();
  }

  save() {
    this.apartmentService
    .createApartment(this.apartment).subscribe(data => {
      console.log(data)
      this.apartment = new Apartment();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/apartments']);
  }
}
