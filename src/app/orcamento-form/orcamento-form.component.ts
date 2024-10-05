import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 

@Component({
  selector: 'app-orcamento-form',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule], 
  templateUrl: './orcamento-form.component.html',
  styleUrls: ['./orcamento-form.component.css']
})
export class OrcamentoFormComponent {
  nome: string = '';
  descricao: string = '';
  valor: number = 0; 
}
