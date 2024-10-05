import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {
  private orcamentos: any[] = [];
  private orcamentosSubject = new BehaviorSubject<any[]>(this.orcamentos);

  getOrcamentos() {
    return this.orcamentosSubject.asObservable();
  }

  adicionarOrcamento(orcamento: any) {
    this.orcamentos.push(orcamento);
    this.orcamentosSubject.next(this.orcamentos);
  }
}
