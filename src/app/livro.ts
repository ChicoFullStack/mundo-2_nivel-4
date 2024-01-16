export class Livro {
  codigo: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(codigo?: number, codEditora?: number, titulo?: string, resumo?: string, autores?: string[]) {
    this.codigo = codigo || 0;
    this.codEditora = codEditora || 0;
    this.titulo = titulo || '';
    this.resumo = resumo || '';
    this.autores = autores || [];
  }
}

