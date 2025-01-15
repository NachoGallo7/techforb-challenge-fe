import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUserDTO } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = "http://localhost:8080"

  constructor(private httpClient: HttpClient) { }

  register(username: string, email: string, password: string, confirmationPassword: string) {
    let signUserDTO: SignUserDTO = {email: email, password: password}
    return this.httpClient.post(this.baseUrl + "/register", signUserDTO);
  }
}
