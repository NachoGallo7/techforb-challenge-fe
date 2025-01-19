import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService{

  private token?: string;

  constructor() { 
    const retrievedToken = localStorage.getItem("token");
    if(!this.token && retrievedToken) {
      this.token = retrievedToken;
    }
  }

  setToken(newToken: string): void {
    this.token = newToken;
    localStorage.setItem("token", newToken);
  }

  getToken(): string|undefined {
    return this.token;
  }
}
