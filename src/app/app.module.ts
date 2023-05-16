import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
