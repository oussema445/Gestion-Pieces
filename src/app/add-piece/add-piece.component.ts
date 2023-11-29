import { Component, OnInit } from '@angular/core';
import { Piece } from '../model/piece.model';
import { PieceService } from '../services/piece.service';
import { Router } from '@angular/router';
import { nature } from '../model/nature.model';
@Component({
  selector: 'app-add-piece',
  templateUrl: './add-piece.component.html',
  styleUrls: ['./add-piece.component.css']
})
export class AddPieceComponent implements OnInit {
  natures! : nature[];
  newIdNat! : number;
  newnature! : nature;
  newPiece = new Piece();
  constructor(private pieceService: PieceService,private router :Router) { }

  ngOnInit(): void {
    this.pieceService.listenatures().
    subscribe(nats => {this.natures = nats;
    console.log(nats);
    });
    }
  
    addPiece(){
      this.newPiece.nature = this.natures.find(nat => nat.idNat == this.newIdNat)!;
      this.pieceService.ajouterPiece(this.newPiece)
      .subscribe(piec => {
      console.log(piec);
      this.router.navigate(['pieces']);
      });
      }
  

}
