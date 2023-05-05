import green from '../assets/produtores/green.png'
import grow from '../assets/produtores/grow.png'
import jenny from '../assets/produtores/jenny-jack.png'
import potager from '../assets/produtores/potager.png'
import salad from '../assets/produtores/salad.png'

const gerarNumAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
    titulo: 'Produtores',
    lista: [
        { 
            nome: 'Green',
            imagem: green,
            distancia: gerarNumAleatorio(1, 500),
            estrelas: gerarNumAleatorio(1, 5),
        },
        { 
            nome: 'Grow',
            imagem: grow,
            distancia: gerarNumAleatorio(1, 500),
            estrelas: gerarNumAleatorio(1, 5),
        },
        { 
            nome: 'Jenny Jack Farm',
            imagem: jenny,
            distancia: gerarNumAleatorio(1, 500),
            estrelas: gerarNumAleatorio(1, 5),
        },
        { 
            nome: 'Potager',
            imagem: potager,
            distancia: gerarNumAleatorio(1, 500),
            estrelas: gerarNumAleatorio(1, 5),
        },
        { 
            nome: 'Salad',
            imagem: salad,
            distancia: gerarNumAleatorio(1, 500),
            estrelas: gerarNumAleatorio(1, 5),
        }

    ]
}

export default produtores;