import { ILivro } from "./componentes/livro/interface/ilivro";

export const livros: ILivro[] = [
    {
        titulo: 'As ondas',
        autoria: 'Virginia Woolf',
        genero: {
            id: 'romance',
            value: 'Romance',
            livros: []
        },
        favorito: false,
        imagem: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wC...'
    },
]