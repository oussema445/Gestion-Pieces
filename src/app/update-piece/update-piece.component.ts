import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PieceService } from '../services/piece.service';
import { Piece } from '../model/piece.model';
import { Nature } from '../model/nature.model';
@Component({
selector: 'app-update-piece',
templateUrl: './update-piece.component.html',
styleUrls: ['./update-piece.component.css']
})
export class UpdatePieceComponent implements OnInit {
currentPiece = new Piece();
natures! : Nature[];
updatedNatId! : number;
constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
private pieceService: PieceService) { }
ngOnInit(): void {
  this.pieceService.listeNatures().subscribe(
    (natures: Nature[]) => {
      this.natures = natures;
})

  this.currentPiece =
  this.pieceService.consulterPiece(this.activatedRoute.snapshot.params['id']);
  this.updatedNatId=this.currentPiece.nature.idNat;
} 
updatePiece() {
  this.currentPiece.nature=this.pieceService.consulterNature(this.updatedNatId);
  this.pieceService.updatePiece(this.currentPiece);
  this.router.navigate(['pieces']);
  }
}
