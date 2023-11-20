import { Component, OnInit } from '@angular/core';
import { Piece } from '../model/piece.model';
import { Nature } from '../model/nature.model';
import { PieceService } from '../services/piece.service';
@Component({
  selector: 'app-recherche-par-nature',
  templateUrl: './recherche-par-nature.component.html',
  styleUrls: []
})
export class RechercheParNatureComponent implements OnInit {
  pieces: Piece[] = [];
  IdNature: number | undefined;
  natures: Nature[] = [];
  selectedNatureId: number | undefined;

  constructor(private pieceService: PieceService) { }

  ngOnInit(): void {
    this.pieceService.listeNatures().subscribe(
      (nats: any) => {
        // Vérifiez la structure des données renvoyées
        console.log(nats);
  
        // Utilisez les données directement si elles sont dans le format attendu
        this.natures = nats; // Assurez-vous que cela correspond à la structure attendue
      },)
  }

  onChange() {
    if (this.IdNature !== undefined) {
      this.pieceService.rechercherPiecesParNature(this.IdNature).subscribe(
        (pieces: Piece[]) => {
          this.pieces = pieces;
          console.log('Pièces avec la nature sélectionnée :', this.pieces);
        },
        (error: any) => {
          console.error('Erreur lors de la recherche des pièces par nature :', error);
        }
      );
    }
  }
}