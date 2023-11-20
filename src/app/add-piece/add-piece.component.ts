import { Component, OnInit } from '@angular/core';
import { Piece } from '../model/piece.model';
import { PieceService } from '../services/piece.service';
import { Router } from '@angular/router';
import { Nature } from '../model/nature.model';
@Component({
  selector: 'app-add-piece',
  templateUrl: './add-piece.component.html',
  styleUrls: ['./add-piece.component.css']
})
export class AddPieceComponent implements OnInit {
  natures! : Nature[];
  newIdNat! : number;
  newNature! : Nature;
  newPiece = new Piece();
  constructor(private pieceService: PieceService,private router :Router) { }

  ngOnInit(): void {
    this.pieceService.listeNatures().subscribe(
      (natures: Nature[]) => {
        this.natures = natures;
})
}
  
addPiece() {
  this.newNature =
  this.pieceService.consulterNature(this.newIdNat);
  this.newPiece.nature = this.newNature;
  this.pieceService.ajouterPiece(this.newPiece);
  this.router.navigate(['pieces']);
  }

}
