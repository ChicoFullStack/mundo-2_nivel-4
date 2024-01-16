// livros-angular/src/app/livro-dados/livro-dados.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro(); // Instância padrão de Livro
  autoresForm: string = '';
  editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.route.paramMap.subscribe(params => {
      const codigo = params.get('codigo');
      if (codigo) {
        const livroCodigo = parseInt(codigo, 10);
        const livroExistente = this.servLivros.obterLivros().find(livro => livro.codigo === livroCodigo);
        if (livroExistente) {
          this.livro = { ...livroExistente }; // Cria uma cópia do livro existente
          this.autoresForm = this.livro.autores.join('\n');
        }
      }
    });
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n').map(autor => autor.trim());
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  };
}
