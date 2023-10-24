import { Injectable } from '@angular/core';
import { Piece } from '../model/piece.model';


@Injectable({
  providedIn: 'root'
})
export class PieceService {

 pieces : Piece[]; 
 piece! : Piece;
  constructor() { 
    this.pieces = [{idPiece : 1, nom : "CRÉMAILLÈRE DE DIRECTION", model :"Volkswagen serie Golf", prix : 1500, dateMise : new Date("01/14/2011")},
                     {idPiece : 2, nom : "RÉTROVISEUR", model :"BMW serie M", prix : 800, dateMise: new Date("12/17/2010")},
                     {idPiece : 3, nom :"DISQUE DE FREIN", model :"MerCedes Benz", prix : 220, dateMise : new Date("02/20/2020")}
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


}
