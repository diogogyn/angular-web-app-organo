import { Component, input } from '@angular/core';
import { ILivro } from './interface/ilivro';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class Livro {
  livro = input.required<ILivro>();

   alternarFavorito() {
    this.livro().favorito = !this.livro().favorito
  }

}
