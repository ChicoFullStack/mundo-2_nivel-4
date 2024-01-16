// livros-angular/src/app/controle-livros.service.ts
import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Node Essencial', resumo: 'Node.js é uma das plataformas de desenvolvimento mais conhecidas do mercado, que utiliza JavaScript como linguagem de programação e torna o desenvolvimento de web services RESTful muito produtivo.', autores: ['Ricardo R. Lecheta'] },
    { codigo: 2, codEditora: 1, titulo: 'React - Aprenda Praticando', resumo: 'React é uma biblioteca para a criação de sites, interfaces gráficas e aplicações web, criada pelo Facebook, e seu uso tem crescido muito, sendo usada por grandes empresas, como Netflix, Walmart e The New York Times', autores: ['Maurício Samy Silva '] },
    { codigo: 3, codEditora: 3, titulo: 'A Biblioteca da Meia-Noite', resumo: 'A Biblioteca da Meia-Noite é um romance incrível que fala dos infinitos rumos que a vida pode tomar e da busca incessante pelo rumo certo', autores: ['Matt Haig', 'Adriana Fidalgo '] },
    { codigo: 4, codEditora: 2, titulo: 'Star Wars: Thrawn Ascendancy', resumo: 'O último triunfo de Thrawn ainda está fresco em seus ombros. Ele liderou os Chiss à vitória e trouxe glória para a Casa Mitth, mas a verdadeira ameaça à Ascendência ainda não foi extinta. Os inimigos não mandam avisos nem ultimatos, não reúnem naves na fronteira do Caos. As armas vêm disfarçadas de sorrisos e generosidade: presentes oferecidos de boa vontade; serviços incondicionais', autores: ['Timothy Zahn'] },
    // Adicione mais livros conforme necessário
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    // Encontrar o maior código existente
    const maiorCodigo = Math.max(...this.livros.map(l => l.codigo), 0);

    // Atribuir o novo código ao livro
    livro.codigo = maiorCodigo + 1;

    // Adicionar o livro ao vetor
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    // Encontrar o índice do livro com o código fornecido
    const index = this.livros.findIndex(l => l.codigo === codigo);

    // Remover o livro com o uso de splice
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
