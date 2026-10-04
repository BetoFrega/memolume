# Roteiro da primeira versão

Este roteiro é uma **proposta para revisão**, ainda sem tickets publicados. Cada ticket entrega um percurso verificável. Bloqueios indicam dependências reais, não prioridade editorial. Histórias 39–52 da especificação são expansões futuras.

A especificação principal está publicada na [issue #1](https://github.com/BetoFrega/memolume/issues/1), com o label `ready-for-agent` e a fronteira de testes aprovada. A aprovação da spec não substitui a revisão da decomposição em tickets abaixo.

| Ordem | Entrega | Bloqueado por |
| --- | --- | --- |
| 1 | Validar a primeira fonte e demonstrar leitura com cobertura | Nenhum |
| 2 | Explorar demonstração fictícia com lista e inspetor | 1 |
| 3 | Importar fonte real com prévia, cobertura e recuperação de falhas | 1, 2 |
| 4 | Buscar, filtrar e navegar na árvore preservando a seleção | 2 |
| 5 | Percorrer origem e relações explícitas com retorno ao contexto | 2 |
| 6 | Explorar grafo com seleção sincronizada e alternativa acessível | 4 |
| 7 | Capturar snapshots locais e manter a última leitura válida | 3 |
| 8 | Comparar snapshots sem transformar lacunas em exclusões | 7 |
| 9 | Exportar e reimportar pacote local com cobertura preservada | 7 |
| 10 | Gerir fontes e retenção sem alterar os arquivos originais | 7 |
| 11 | Qualificar e distribuir a primeira versão com uma fonte comprovada | 4, 5, 6, 8, 9, 10 |

Trabalhar na fronteira: tickets sem bloqueadores abertos. O primeiro ticket valida fonte e escolhe a base mínima por evidência; depois, demonstração e importação sustentam exploração, história e portabilidade. O último marco qualifica a distribuição sem exigir expansões.

## Expansões preservadas

Zoom semântico, tabela analítica, lentes, dois inspetores, vistas e percursos salvos; atualização local com pausa e história de decisões; comparação entre assistentes e anotações em camada própria; modo apresentação; busca semântica e hipóteses revisáveis; evidência de recuperação/inclusão no contexto onde a fonte permitir. Nenhuma dessas expansões está prometida para o núcleo.
