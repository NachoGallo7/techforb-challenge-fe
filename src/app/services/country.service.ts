import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { CountryDTO } from '../models/country';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl: string = "http://localhost:8080/countries";
  private countries = new BehaviorSubject<CountryDTO[]>([]);
  countries$ = this.countries.asObservable();

  constructor(private httpClient: HttpClient,
    private tokenService: TokenService
  ) { }

  fetchAll(): void {
    console.log("VINIERON LOS PAISEEES");
    const httpHeaders: HttpHeaders = new HttpHeaders({"Authorization": "Bearer " + this.tokenService.getToken()});
    this.httpClient.get(this.baseUrl, {headers: httpHeaders}).subscribe({
      next: response => {
        console.log("VINIERON LOS PAISEEES");
        console.log(response);
        this.countries.next(response as CountryDTO[]);
      }
    });
  }
}
