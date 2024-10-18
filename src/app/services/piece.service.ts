import { Injectable } from '@angular/core';
import { Piece } from '../model/piece.model';
import { nature } from '../model/nature.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service'; // Import AuthService to get JWT token

@Injectable({
  providedIn: 'root'
})
export class PieceService {

  apiURL: string = 'http://localhost:8081/pieces/api';
  apiURLNat: string = 'http://localhost:8081/pieces/nat';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Add JWT to headers
  private getHeaders() {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    return new HttpHeaders({ "Authorization": jwt });
  }

  listePieces(): Observable<Piece[]> {
    const headers = this.getHeaders();
    return this.http.get<Piece[]>(this.apiURL + "/all", { headers });
  }

  ajouterPiece(piec: Piece): Observable<Piece> {
    const headers = this.getHeaders();
    return this.http.post<Piece>(this.apiURL, piec, { headers });
  }

  supprimerPiece(id: number): Observable<void> {
    const url = `${this.apiURL}/${id}`;
    const headers = this.getHeaders();
    return this.http.delete<void>(url, { headers });
  }

  consulterPiece(id: number): Observable<Piece> {
    const url = `${this.apiURL}/${id}`;
    const headers = this.getHeaders();
    return this.http.get<Piece>(url, { headers });
  }

  updatePiece(piec: Piece): Observable<Piece> {
    const headers = this.getHeaders();
    return this.http.put<Piece>(this.apiURL, piec, { headers });
  }

  listenatures(): Observable<nature[]> {
    const headers = this.getHeaders();
    return this.http.get<nature[]>(this.apiURL + "/nat", { headers });
  }

  rechercherParNature(idNat: number): Observable<Piece[]> {
    const url = `${this.apiURL}/piecsnat/${idNat}`;
    const headers = this.getHeaders();
    return this.http.get<Piece[]>(url, { headers });
  }

  rechercherParNom(nom: string): Observable<Piece[]> {
    const url = `${this.apiURL}/piecsByName/${nom}`;
    const headers = this.getHeaders();
    return this.http.get<Piece[]>(url, { headers });
  }
}
