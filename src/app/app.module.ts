import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiecesComponent } from './piece/pieces.component';
import { AddPieceComponent } from './add-piece/add-piece.component';
import { FormsModule } from '@angular/forms';
import { UpdatePieceComponent } from './update-piece/update-piece.component';


@NgModule({
  declarations: [
    AppComponent,
    PiecesComponent,
    AddPieceComponent,
    UpdatePieceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
