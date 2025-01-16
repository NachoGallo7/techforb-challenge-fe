import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private baseUrl: string = "http://localhost:8080/plants"

  constructor(private httpClient: HttpClient,
    private tokenService: TokenService) { }

  getAll() {
    const httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders.set("Authorization", "Bearer " + this.tokenService.getToken());
    return this.httpClient.get(this.baseUrl, {headers: httpHeaders});
  }
}
