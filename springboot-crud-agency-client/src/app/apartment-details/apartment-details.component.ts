import { Apartment } from '../apartment';
import { Component, OnInit, Input } from '@angular/core';
import { ApartmentService } from '../apartment.service';
import { ApartmentListComponent } from '../apartment-list/apartment-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['apartments']);
  }
}
