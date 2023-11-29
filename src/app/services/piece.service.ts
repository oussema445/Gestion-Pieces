import { Injectable } from '@angular/core';
import { Piece } from '../model/piece.model';
import { nature } from '../model/nature.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class PieceService {


  apiURL: string = 'http://localhost:8080/pieces/api';
  apiURLNat: string = 'http://localhost:8080/pieces/nat';

 // pieces! : Piece[];
  piece!: Piece;

  constructor(private http : HttpClient) {
    /*  this.natures = [ {idNat : 1, nomPieceNat : "Derection"},
 {idNat : 2, nomPieceNat : "Accessoires"},
 {idNat : 3, nomPieceNat : "batterie"}]; 
    this.pieces = [{ idPiece: 1, nomPiece: "CRÉMAILLÈRE DE DIRECTION", model: "Volkswagen serie Golf",prixPiece: 1500, dateCreation: new Date("01/14/2011"), nature: { idNat: 1, nomPieceNat: "Derection" } },
    { idPiece: 2, nomPiece: "RÉTROVISEUR", model: "BMW serie M",prixPiece: 800, dateCreation: new Date("12/17/2010"), nature: { idNat: 2, nomPieceNat: "Accessoires" } },
    { idPiece: 3, nomPiece: "DISQUE DE FREIN", model: "MerCedes Benz",prixPiece: 220, dateCreation: new Date("02/20/2020"), nature: { idNat: 1, nomPieceNat: "Derection" } }
    ];*/

  }

  listePieces(): Observable<Piece[]>{
    return this.http.get<Piece[]>(this.apiURL);
    }


    ajouterPiece( piec: Piece):Observable<Piece>{
      return this.http.post<Piece>(this.apiURL, piec, httpOptions);
      }
      supprimerPiece(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }
        consulterPiece(id: number): Observable<Piece> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Piece>(url);
          }

 /*  trierPieces() {
    this.pieces = this.pieces.sort((n1, n2) => {
      if (n1.idPiece! > n2.idPiece!) {
        return 1;
      }
      if (n1.idPiece! < n2.idPiece!) {
        return -1;
      }
      return 0;
    });
  }
 */
  updatePiece(piec:Piece) : Observable<Piece>
  {
  return this.http.put<Piece>(this.apiURL, piec, httpOptions);
  }
  listenatures():Observable<nature[]>{
    return this.http.get<nature[]>(this.apiURL+"/nat");
    }

    rechercherParNature(idNat: number): Observable<Piece[]> {
      const url = `${this.apiURL}/piecsnat/${idNat}`;
      return this.http.get<Piece[]>(url);
    }
    
    rechercherParNom(nom: string):Observable< Piece[]> {
      const url = `${this.apiURL}/piecsByName/${nom}`;
      return this.http.get<Piece[]>(url);
      }


}


