import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUserDTO, SignUserDTO } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = "http://localhost:8080/users"

  constructor(private httpClient: HttpClient) { }

  register(username: string, email: string, password: string) {
    const registerUserDTO: RegisterUserDTO = {username: username, email: email, password: password};
    return this.httpClient.post(this.baseUrl + "/register", registerUserDTO);
  }

  login(email: string, password: string) {
    const signUserDTO: SignUserDTO = {email: email, password: password};
    return this.httpClient.post(this.baseUrl + "/login", signUserDTO);
  }
}
