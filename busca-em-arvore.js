// Exemplo de construção de uma função para buscar o melhor caminho em uma árvore

// Classe cidade que será usada para preencher a árvore
class Cidade {
    nome;
    vizinhos;

    constructor(nome) {
        this.nome = nome;
        this.vizinhos = []; 
    }

    adicionarVizinho(vizinho, distancia) {
        this.vizinhos.push({cidade: vizinho, distancia: distancia});
    }
}