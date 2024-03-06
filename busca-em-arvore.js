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

// Criando as cidades
const arad = new Cidade("Arad");
const zerind = new Cidade("Zerind");
const oradea = new Cidade("Oradea");
const sibiu = new Cidade("Sibiu");
const timisoara = new Cidade("Timisoara");
const lugoj = new Cidade("Lugoj");
const mehadia = new Cidade("Mehadia");
const dobreta = new Cidade("Dobreta");
const craiova = new Cidade("Craiova");
const rimnicuVilcea = new Cidade("Rimnicu Vilcea");
const fagaras = new Cidade("Fagaras");
const pitesti = new Cidade("Pitesti");
const bucharest = new Cidade("Bucharest");
const giurgiu = new Cidade("Giurgiu");
const urziceni = new Cidade("Urziceni");
const hirsova = new Cidade("Hirsova");
const eforie = new Cidade("Eforie");
const vaslui = new Cidade("Vaslui");
const iasi = new Cidade("Iasi");
const neamt = new Cidade("Neamt");

// Adicionando os vizinhos
arad.adicionarVizinho(zerind, 75);
arad.adicionarVizinho(sibiu, 140);
arad.adicionarVizinho(timisoara, 118);

zerind.adicionarVizinho(arad, 75);
zerind.adicionarVizinho(oradea, 71);

oradea.adicionarVizinho(zerind, 71);
oradea.adicionarVizinho(sibiu, 151);

sibiu.adicionarVizinho(arad, 140);
sibiu.adicionarVizinho(oradea, 151);
sibiu.adicionarVizinho(fagaras, 99);
sibiu.adicionarVizinho(rimnicuVilcea, 80);

timisoara.adicionarVizinho(arad, 118);
timisoara.adicionarVizinho(lugoj, 111);

lugoj.adicionarVizinho(timisoara, 111);
lugoj.adicionarVizinho(mehadia, 70);

mehadia.adicionarVizinho(lugoj, 70);
mehadia.adicionarVizinho(dobreta, 75);

dobreta.adicionarVizinho(mehadia, 75);
dobreta.adicionarVizinho(craiova, 120);

craiova.adicionarVizinho(dobreta, 120);
craiova.adicionarVizinho(pitesti, 138);
craiova.adicionarVizinho(rimnicuVilcea, 146);

rimnicuVilcea.adicionarVizinho(sibiu, 80);
rimnicuVilcea.adicionarVizinho(pitesti, 97);
rimnicuVilcea.adicionarVizinho(craiova, 146);

fagaras.adicionarVizinho(sibiu, 99);
fagaras.adicionarVizinho(bucharest, 211);

pitesti.adicionarVizinho(rimnicuVilcea, 97);
pitesti.adicionarVizinho(craiova, 138);
pitesti.adicionarVizinho(bucharest, 101);

bucharest.adicionarVizinho(fagaras, 211);
bucharest.adicionarVizinho(pitesti, 101);
bucharest.adicionarVizinho(giurgiu, 90);
bucharest.adicionarVizinho(urziceni, 85);

giurgiu.adicionarVizinho(bucharest, 90);

urziceni.adicionarVizinho(bucharest, 85);
urziceni.adicionarVizinho(hirsova, 98);
urziceni.adicionarVizinho(vaslui, 142);

hirsova.adicionarVizinho(urziceni, 98);
hirsova.adicionarVizinho(eforie, 86);

eforie.adicionarVizinho(hirsova, 86);

vaslui.adicionarVizinho(urziceni, 142);
vaslui.adicionarVizinho(iasi, 92);

iasi.adicionarVizinho(vaslui, 92);
iasi.adicionarVizinho(neamt, 87);

neamt.adicionarVizinho(iasi, 87);