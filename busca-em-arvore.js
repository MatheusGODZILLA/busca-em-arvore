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

// Função de busca em largura em uma árvore
function busca_em_arvore(origem, destino) {
    const borda = [{ cidade: origem, caminho: [origem], custo: 0 }];
    const visitados = new Set();
  
    while (borda.length > 0) {
        borda.sort((a, b) => {
            let custoA = 0;
            let custoB = 0;

            for (let i = 0; i < a.caminho.length - 1; i++) {
                custoA += a.caminho[i].vizinhos.find(v => v.cidade === a.caminho[i + 1]).distancia;
            }

            for (let i = 0; i < b.caminho.length - 1; i++) {
                custoB += b.caminho[i].vizinhos.find(v => v.cidade === b.caminho[i + 1]).distancia;
            }

            return custoA - custoB;
        });

        const { cidade, caminho, custo } = borda.shift();
  
        if (cidade === destino) {
            return { caminho: caminho.map(c => c.nome), custo };
        }
  
        visitados.add(cidade);
  
        for (const { cidade: vizinho, distancia } of cidade.vizinhos) {
            if (!visitados.has(vizinho)) {
                const novoCaminho = [...caminho, vizinho];
                const novoCusto = custo + distancia;
                borda.push({ cidade: vizinho, caminho: novoCaminho, custo: novoCusto });
            }
        }
    }
    return null;
}