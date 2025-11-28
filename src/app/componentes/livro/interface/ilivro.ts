import { IGeneroLiterario } from "./generoLiterario";

export interface ILivro {
    titulo: string;
    autoria: string;
    imagem: string;
    favorito: boolean;
    genero: IGeneroLiterario;
}