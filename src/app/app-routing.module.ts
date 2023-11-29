import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPieceComponent } from './add-piece/add-piece.component';
import { PiecesComponent } from './piece/pieces.component';
import { UpdatePieceComponent } from './update-piece/update-piece.component';
import { LoginComponent } from './login/login.component';
import { RechercheParnatureComponent } from './recherche-par-nature/recherche-par-nature.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PieceGuard } from './piece.guard';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [
  {path: "pieces", component : PiecesComponent},
  {path: "updatePiece/:id", component: UpdatePieceComponent},
  {path: 'login', component: LoginComponent},
  {path: "rechercheParnature", component : RechercheParnatureComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "", redirectTo: "pieces", pathMatch: "full" },
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "add-piece", component : AddPieceComponent, canActivate:[PieceGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 