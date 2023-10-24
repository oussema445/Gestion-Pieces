import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PieceService } from '../services/piece.service';
import { Piece } from '../model/piece.model';
@Component({
selector: 'app-update-piece',
templateUrl: './update-piece.component.html',
styleUrls: ['./update-piece.component.css']
})
export class UpdatePieceComponent implements OnInit {
currentPiece = new Piece();
constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
private pieceService: PieceService) { }
ngOnInit() {
// console.log(this.route.snapshot.params.id);
this.currentPiece = this.pieceService.consulterPiece(this.activatedRoute.snapshot. params['id']);
console.log(this.currentPiece);
} 
updatePiece(){ 
  this.pieceService.updatePiece(this.currentPiece);
  this.router.navigate(['pieces']);
  }
}
