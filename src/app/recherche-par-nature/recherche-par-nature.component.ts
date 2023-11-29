import { Component, OnInit } from '@angular/core';
import { Piece } from '../model/piece.model';
import { nature } from '../model/nature.model';
import { PieceService } from '../services/piece.service';
@Component({
  selector: 'app-recherche-par-nature',
  templateUrl: './recherche-par-nature.component.html',
  styleUrls: []
})
export class RechercheParnatureComponent implements OnInit {
  pieces!: Piece[];
  id!: number;
  Natures!: nature[];
  

<<<<<<< HEAD
  onChange() {
    if (this.IdNature !== undefined) {
      this.pieceService.rechercherPiecesParNature(this.IdNature).subscribe(
        (pieces: Piece[]) => {
          this.pieces = pieces;
          console.log('Pièces avec la nature sélectionnée :', this.pieces);}
      );
    }
=======
  constructor(private pieceService: PieceService) {}
  ngOnInit(): void {
    this.pieceService.listenatures().subscribe(
      nats => {
        this.Natures = nats; // Accédez directement aux données du tableau nature[]
        console.log('Natures:', this.Natures);
      },
      error => {
        console.error('Erreur lors de la récupération des natures :', error);
        // Gérez les erreurs si la récupération des données échoue
      }
    );
>>>>>>> f3d42fdc1c10e0fe7ffef2baa7fae1f019948237
  }
  
  onChange() {
    this.pieceService.rechercherParNature(this.id)
      .subscribe(pieces => { 
        this.pieces = pieces;
      });
  }
    

 
}