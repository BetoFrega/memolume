# Roteiro da primeira versão

Este roteiro é uma **proposta para revisão**, ainda sem tickets publicados. Os requisitos de privacidade foram definidos pelo usuário no [ADR-0002](adr/0002-private-local-memory.md). Dados fictícios não são um pré-requisito. Cada ticket entrega um percurso verificável; números abaixo são propostas, não números de issues.

A [spec #1](https://github.com/BetoFrega/memolume/issues/1) registra nenhuma externalização, RAM por padrão e consolidação explícita próxima da origem.

| Ordem | Entrega | Bloqueado por |
| --- | --- | --- |
| 1 | Isolar a sessão e validar a primeira fonte real | Nenhum |
| 2 | Explorar a fonte real em uma sessão privada em RAM | 1 |
| 3 | Importar fonte real com prévia, cobertura e recuperação de falhas | 2 |
| 4 | Buscar, filtrar e navegar na árvore preservando a seleção | 2 |
| 5 | Percorrer origem e relações explícitas com retorno ao contexto | 2 |
| 6 | Explorar grafo com seleção sincronizada e alternativa acessível | 4 |
| 7 | Capturar snapshots em RAM e preservar a última leitura válida | 3 |
| 8 | Comparar snapshots sem transformar lacunas em exclusões | 6, 7 |
| 9 | Consolidar perto da origem e reimportar um pacote privado | 7 |
| 10 | Encerrar estado em RAM e gerir consolidações escolhidas | 7 |
| 11 | Qualificar isolamento e distribuir a primeira versão | 5, 8, 9, 10 |

Trabalhar na fronteira: tickets sem bloqueadores abertos. O primeiro ticket prova o isolamento antes de ler a fonte privada. Exploração e snapshots usam RAM; consolidação e reimportação vêm depois como ação explícita. Dependências transitivas não são repetidas.

## Expansões preservadas

Zoom semântico, tabela analítica, lentes, dois inspetores, vistas e percursos salvos; atualização local com pausa e história de decisões; comparação entre assistentes e anotações; modo apresentação; busca semântica e hipóteses revisáveis exclusivamente locais; evidência de recuperação/inclusão no contexto onde a fonte permitir. Todas permanecem sujeitas a nenhuma externalização e RAM por padrão. Histórias 39–52 não são bloqueios do núcleo.
