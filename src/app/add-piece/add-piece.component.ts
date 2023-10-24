import { Component, OnInit } from '@angular/core';
import { Piece } from '../model/piece.model';
import { PieceService } from '../services/piece.service';

@Component({
  selector: 'app-add-piece',
  templateUrl: './add-piece.component.html',
  styleUrls: ['./add-piece.component.css']
})
export class AddPieceComponent implements OnInit {

  newPiece = new Piece();
  constructor(private pieceService: PieceService) { }

  ngOnInit(): void {
  }

  addPiece() {
    
    this.pieceService.ajouterPiece(this.newPiece);
  }

}
