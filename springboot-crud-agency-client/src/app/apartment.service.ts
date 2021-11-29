import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  private baseUrl = 'http://localhost:8080/api/apartments';

  constructor(private http: HttpClient) { }

  getApartment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createApartment(apartment: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, apartment);
  }

  updateApartment(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteApartment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getApartmentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  searchApartment(dto: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}` + "/search", dto);
  }
}
