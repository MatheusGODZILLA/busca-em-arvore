# busca-em-arvore
## Exemplo de construção de uma função de buscar em largura para encontrar o melhor caminho em uma árvore
Este código implementa uma função de busca em largura em uma árvore para encontrar o melhor caminho entre duas cidades em um grafo representado por uma estrutura de árvore.

## Componentes do código:
- Classe Cidade: Define uma classe Cidade que representa cada nó da árvore. Cada cidade tem um nome e uma lista de vizinhos, onde cada vizinho é uma cidade adjacente à cidade atual, junto com a distância até esse vizinho.

- Função busca_em_arvore: Implementa a busca em largura na árvore. Começando da cidade de origem, a função explora os vizinhos em uma ordem específica, mantendo uma fila (borda) de cidades a serem exploradas. Ela continua expandindo a borda até encontrar a cidade de destino ou até que não haja mais cidades para explorar. A função retorna o melhor caminho encontrado, juntamente com o custo total desse caminho.

- Criação das cidades e definição dos vizinhos: São criadas várias instâncias da classe Cidade, representando os nós da árvore. Os vizinhos de cada cidade são definidos usando o método adicionarVizinho, que associa uma cidade vizinha à cidade atual juntamente com a distância entre elas.

- Execução da busca: Define uma cidade de origem e uma cidade de destino e executa a função busca_em_arvore para encontrar o melhor caminho entre elas. Se um caminho for encontrado, imprime o caminho e o custo total; caso contrário, imprime uma mensagem indicando que não foi possível encontrar um caminho.
