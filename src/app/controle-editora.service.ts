// livros-angular/src/app/controle-editora.service.ts
import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Novatec Editora' },
    { codEditora: 2, nome: 'Universo geek' },
    { codEditora: 3, nome: 'Bertrand Brasil' },
    // Adicione mais editoras conforme necessário
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : 'Editora não encontrada';
  }
}
