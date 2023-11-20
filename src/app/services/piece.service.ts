import { Injectable } from '@angular/core';
import { Piece } from '../model/piece.model';
import { Nature } from '../model/nature.model';
import { Observable, catchError, of } from 'rxjs';


  


@Injectable({
  providedIn: 'root'
})
export class PieceService {


 pieces : Piece[]; 
 piece! : Piece;







  



 natures : Nature[];
  constructor() { 
    this.natures = [ {idNat : 1, nomNat : "Derection"},
{idNat : 2, nomNat : "Accessoires"},
{idNat : 3, nomNat : "batterie"}];
    this.pieces = [{idPiece : 1, nom : "CRÉMAILLÈRE DE DIRECTION", model :"Volkswagen serie Golf", prix : 1500, dateMise : new Date("01/14/2011"),nature : {idNat : 1, nomNat : "Derection"}},
                     {idPiece : 2, nom : "RÉTROVISEUR", model :"BMW serie M", prix : 800, dateMise: new Date("12/17/2010"),nature : {idNat : 2, nomNat : "Accessoires"}},
                     {idPiece : 3, nom :"DISQUE DE FREIN", model :"MerCedes Benz", prix : 220, dateMise : new Date("02/20/2020"),nature : {idNat : 1, nomNat : "Derection"}}
                    ];
    
  }

  listePieces():Piece[] {
    return this.pieces;
    }

    ajouterPiece( pie: Piece){
      this.pieces.push(pie);
      }
      supprimerPiece( piec: Piece){
        
        const index = this.pieces.indexOf(piec, 0);
        if (index > -1) {
        this.pieces.splice(index, 1);
        }
      
        }
        consulterPiece(id:number): Piece{
          this.piece = this.pieces.find(p => p.idPiece == id)!;
          return this.piece;
          }

          trierPieces(){
            this.pieces = this.pieces.sort((n1,n2) => {
            if (n1.idPiece! > n2.idPiece!) {
            return 1;
            }
            if (n1.idPiece! < n2.idPiece!) {
            return -1;
            }
            return 0;
            });
            }

          updatePiece(p:Piece){
this.supprimerPiece(p);
this.ajouterPiece(p);
this.trierPieces();
}
listeNatures(): Observable<Nature[]> {
  return of(this.natures); // Supposons que this.natures soit votre tableau de Nature
}

      consulterNature(id:number): Nature{
        return this.natures.find(nat => nat.idNat == id)!;
        }
       
        rechercherPiecesParNature(idNat: number): Observable<Piece[]> {
          return of(this.filterPiecesByNature(idNat)).pipe(
            catchError((error: any) => {
              console.error('Une erreur s\'est produite', error);
              return of([]); // Retourne un Observable vide en cas d'erreur
            })
          );
        }
        
        private filterPiecesByNature(idNat: number): Piece[] {
          return this.pieces.filter(piece => piece.nature.idNat === idNat);
        }
        
}


