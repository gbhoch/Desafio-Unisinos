import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'; 

import { AppComponent } from './app.component';
import { OrcamentoFormComponent } from './orcamento-form/orcamento-form.component';
import { OrcamentoListaComponent } from './orcamento-lista/orcamento-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    OrcamentoFormComponent,
    OrcamentoListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
