import { ILivro } from "./ilivro";

export interface IGeneroLiterario {
    id: string;
    value: string;
    livros: ILivro[]
}