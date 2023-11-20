import { Component, OnInit } from '@angular/core';
import { Piece } from '../model/piece.model';
import { PieceService } from '../services/piece.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html'
})
export class PiecesComponent implements OnInit {

    pieces ! : Piece[]; 

    constructor(private pieceService : PieceService,
      public authService: AuthService) { }

  ngOnInit(): void {

    this.pieces = this.pieceService.listePieces();
  }
  supprimerPiece(p: Piece)
{

let conf = confirm("Etes-vous sûr ?");
if (conf)
this.pieceService.supprimerPiece(p);
}

}
