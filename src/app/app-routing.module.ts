import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPieceComponent } from './add-piece/add-piece.component';
import { PiecesComponent } from './piece/pieces.component';
import { UpdatePieceComponent } from './update-piece/update-piece.component';

const routes: Routes = [
  {path: "pieces", component : PiecesComponent},
  {path: "add-piece", component : AddPieceComponent},
  {path: "updatePiece/:id", component: UpdatePieceComponent},
  {path: "", redirectTo: "pieces", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 