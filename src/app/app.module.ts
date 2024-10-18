import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiecesComponent } from './piece/pieces.component';
import { AddPieceComponent } from './add-piece/add-piece.component';
import { FormsModule } from '@angular/forms';
import { UpdatePieceComponent } from './update-piece/update-piece.component';
import { LoginComponent } from './login/login.component';
import { RechercheParnatureComponent } from './recherche-par-nature/recherche-par-nature.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PiecesComponent,
    AddPieceComponent,
    UpdatePieceComponent,
    LoginComponent,
    RechercheParnatureComponent,
    ForbiddenComponent,
    SearchFilterPipe,
    RechercheParNomComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
