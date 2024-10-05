import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrcamentoFormComponent } from './orcamento-form/orcamento-form.component';
import { OrcamentoListaComponent } from './orcamento-lista/orcamento-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OrcamentoFormComponent, OrcamentoListaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'desafio-unisinos';
}
