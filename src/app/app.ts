import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { Rodape } from './componentes/rodape/rodape';
import { ListaLivros } from './componentes/lista-livros/lista-livros';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecalho, Rodape,ListaLivros],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-web-app-organo');
}
