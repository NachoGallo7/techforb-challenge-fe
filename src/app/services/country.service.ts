import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { CountryDTO } from '../models/country';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl: string = environment.apis.countries;
  private countries = new BehaviorSubject<CountryDTO[]>([]);
  countries$ = this.countries.asObservable();

  //Just in case the backend is in cold start up
  private readonly permittedAttempts: number = 6;
  private attemptsLeft: number = this.permittedAttempts;
  private intervalId?: number;

  constructor(private httpClient: HttpClient,
    private tokenService: TokenService
  ) { }

  fetchAll(): void {
    const httpHeaders: HttpHeaders = new HttpHeaders({"Authorization": "Bearer " + this.tokenService.getToken()});
    this.httpClient.get(this.baseUrl, {headers: httpHeaders}).subscribe({
      next: response => {
        console.log("VINIERON LOS PAISEEES");
        console.log(response);
        this.countries.next(response as CountryDTO[]);
        this.stopRetryInterval();
      },
      error: err => {
        if (!this.intervalId) {
          this.intervalId = setInterval(() => this.retryFetchAll(), 7000, 0);
        }
      }
    });
  }

  private retryFetchAll(): void {
    if (this.attemptsLeft > 0) {
      this.attemptsLeft--;
      console.log("LOOKING FOR COUNTRIES AGAIN...", );
      console.log("ATTEMPT LEFTS: " + this.attemptsLeft);
      this.fetchAll();
    } else {
      this.stopRetryInterval();
    }
  }

  private stopRetryInterval(): void {
    this.attemptsLeft = this.permittedAttempts;
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }
}
