import { GeneroLiterario } from "./generoLiterario";

export interface ILivro {
    titulo: string;
    autoria: string;
    imagem: string;
    favorito: boolean;
    genero: GeneroLiterario;
}