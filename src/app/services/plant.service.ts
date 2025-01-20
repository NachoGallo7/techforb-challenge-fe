import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { PlantDTO, PostPlantDTO, PutPlantDTO } from '../models/plants';
import { BehaviorSubject, finalize } from 'rxjs';
import { Page } from '../models/pages';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private baseUrl: string = environment.apis.plants;
  private plantsSubject = new BehaviorSubject<PlantDTO[]>([]);
  plants$ = this.plantsSubject.asObservable();

  constructor(private httpClient: HttpClient,
    private tokenService: TokenService) { }

  fetchAll(): void {
    const httpHeaders: HttpHeaders = new HttpHeaders({"Authorization": "Bearer " + this.tokenService.getToken()});
    this.httpClient.get(this.baseUrl, { headers: httpHeaders }).subscribe({
      next: (result) => {
        this.plantsSubject.next((result as Page<PlantDTO>).content);
      }
    });
  }

  create(createPlant: PostPlantDTO) {
    const httpHeaders: HttpHeaders = new HttpHeaders({"Authorization": "Bearer " + this.tokenService.getToken()});
    const response = this.httpClient.post(this.baseUrl, createPlant, {headers: httpHeaders}).subscribe({
      complete: () => this.fetchAll()
    });
  }

  update(updatePlant: PutPlantDTO, updatedPlantId: number) {
    const httpHeaders: HttpHeaders = new HttpHeaders({"Authorization": "Bearer " + this.tokenService.getToken()});
    const response = this.httpClient.put(this.baseUrl + "/" + updatedPlantId, updatePlant, {headers: httpHeaders}).subscribe({
      complete: () => this.fetchAll()
    });
  }
}
