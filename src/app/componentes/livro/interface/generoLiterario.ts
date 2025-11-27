import { ILivro } from "./ilivro";

export interface GeneroLiterario {
    id: string;
    value: string;
    livros: ILivro[]
}