import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PieceService } from '../services/piece.service';
import { Piece } from '../model/piece.model';
import { nature } from '../model/nature.model';
@Component({
selector: 'app-update-piece',
templateUrl: './update-piece.component.html',
styleUrls: ['./update-piece.component.css']
})
export class UpdatePieceComponent implements OnInit {
currentPiece = new Piece();
natures!: nature[] ;
updatedNatId! : number;
constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
private pieceService: PieceService) { }
ngOnInit(): void {
  this.pieceService.listenatures().subscribe(nats => {
    this.natures = nats;
    console.log(nats);
  });

  this.pieceService.consulterPiece(this.activatedRoute.snapshot.params['id']).subscribe(piec => {
    this.currentPiece = piec;
    this.currentPiece = piec;
    this.updatedNatId =
    this.currentPiece.nature.idNat!;
  });
}

  updatePiece() {
      this.currentPiece.nature = this.natures.
      find(nat => nat.idNat == this.updatedNatId)!;
     
  
    this.pieceService.updatePiece(this.currentPiece).subscribe(updatedPiece => {
      this.router.navigate(['pieces']);
    });
  }
  


}
