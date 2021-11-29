import { Component, OnInit } from '@angular/core';
import { Apartment } from '../apartment';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-update-apartment',
  templateUrl: './update-apartment.component.html',
  styleUrls: ['./update-apartment.component.css']
})
export class UpdateApartmentComponent implements OnInit {

  id: number;
  apartment: Apartment;

  constructor(private route: ActivatedRoute,private router: Router,
    private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.apartment = new Apartment();

    this.id = this.route.snapshot.params['id'];
    
    this.apartmentService.getApartment(this.id)
      .subscribe(data => {
        console.log(data)
        this.apartment = data;
      }, error => console.log(error));
  }

  updateApartment() {
    this.apartmentService.updateApartment(this.id, this.apartment)
      .subscribe(data => {
        console.log(data);
        this.apartment = new Apartment();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateApartment();    
  }

  gotoList() {
    this.router.navigate(['/apartments']);
  }
}
