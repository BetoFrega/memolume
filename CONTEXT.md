# Contexto do Memolume

Memolume permite explorar registros acessíveis de assistentes, sua estrutura observada, proveniência e evolução. O percurso central é importação → exploração → origem → snapshots → comparação → exportação/reimportação.

## Estado

Projeto em preparação. Documentação e planejamento não demonstram implementação nem compatibilidade. Stack, plataforma, empacotamento e distribuição permanecem abertos. Estado em RAM, nenhuma externalização e consolidação explícita próxima da origem são requisitos definidos. Ferramentas documentais usam Node.js 24; isso não escolhe a runtime do produto.

## Glossário

| Termo | Significado |
| --- | --- |
| Fonte | Material selecionado pelo usuário, com modalidade, limites de leitura, capacidades e cobertura documentados. |
| Modalidade | Natureza da fonte: memória local, resumo declarado, histórico, instrução ou outra forma reconhecida. |
| Item | Registro normalizado que preserva tipo original, conteúdo, fonte e identidade nativa quando confiável. |
| Memória | Item identificado como memória pela fonte ou por declaração explícita; não é sinônimo de conversa. |
| Evidência | Registro ou trecho observado, ou localizador preservado, com disponibilidade e motivo de ausência. |
| Proveniência | Explicação verificável da origem de um item ou da razão pela qual uma relação existe. |
| Relação | Vínculo rotulado entre itens; sua natureza pode ser explícita da fonte, inferida ou manual. |
| Escopo | Projeto ou contexto conhecido na fonte; quando ausente, permanece desconhecido. |
| Cobertura | Material reconhecido, ignorado, inacessível e limites de uma leitura; não equivale à memória total do assistente. |
| Snapshot | Estado observado em uma coleta, com data, fontes, versões de adaptadores e cobertura por fonte. |
| Mudança | Diferença entre snapshots compatíveis, com classificação e certeza da correspondência. |
| Identidade | Referência persistente a um item; um hash de conteúdo identifica versão, não identidade por si só. |
| Origem não identificada | Não há vínculo explícito disponível; não autoriza inferir uma origem por similaridade. |
| Deixou de ser observado | Item ausente numa leitura completa e comparável; não comprova exclusão na fonte. |
| Sessão privada | Exploração de dados reais locais, com estado volátil e sem saída externa de conteúdo ou metadados. |
| Consolidação | Artefato derivado salvo explicitamente em área privada próxima da fonte; não altera o material original. |

## Invariantes

- Nenhuma escrita nos arquivos originais; nenhuma varredura geral do computador.
- Nenhuma externalização de conteúdo ou metadados por ação do Memolume, inclusive componentes e subprocessos.
- Estado em RAM por padrão, sem caches, temporários, bancos ou logs privados automáticos.
- Persistência somente explícita e próxima da origem, em área dedicada cujo destino local seja verificado; condição incerta mantém os dados em RAM.
- Referências e links simbólicos não ampliam a raiz selecionada automaticamente.
- Conteúdo importado é dado, inclusive Markdown, links e aparentes instruções.
- Datas de origem, modificação e observação têm significados distintos.
- Uma leitura parcial ou falha não substitui silenciosamente um snapshot válido.
- Árvore, lista, grafo e inspetor compartilham seleção, filtros e snapshot.
- Distância de nós não representa confiança, relevância ou uso pelo assistente.
- Estado armazenado não prova recuperação ou inclusão numa resposta.
- Dados do visualizador e arquivos originais têm controles de retenção separados.

Consulte a [especificação](docs/product/spec.md) e os [ADRs](docs/adr/README.md) antes de implementar.
