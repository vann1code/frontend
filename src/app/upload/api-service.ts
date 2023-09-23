import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  private apiUrl = 'http://localhost:8080'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  public fazerRequisicaoPost(data: any) {
    return this.http.post(`${this.apiUrl}/upload`, data);
  }
}