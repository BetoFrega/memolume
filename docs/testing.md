# Estratégia de validação

## Fronteira principal aprovada

Exercitar o comportamento externo integrado: **ler uma fonte real local autorizada em RAM → buscar → selecionar na árvore e no grafo → abrir origem → observar um segundo estado em RAM → comparar → consolidar explicitamente em destino próximo verificado → reimportar**.

Percurso integrado aprovado pelo usuário em 4 de outubro de 2026, atualizado pela determinação de usar dados reais privados, nenhuma externalização e RAM por padrão. Dados fictícios não são um pré-requisito.

Preferir esse percurso à multiplicação de testes internos de componentes. Não há prior art de testes do aplicativo neste repositório. A suíte será implementada junto às primeiras entregas; os checks documentais atuais não substituem testes do produto.

## Casos essenciais

| Caso | Evidência esperada |
| --- | --- |
| Importação válida | Conteúdo, tipo, identidade e relações explícitas preservados. |
| Reimportação idêntica | Nenhuma duplicata ou mudança de conteúdo inventada. |
| Leitura parcial ou falha | Cobertura visível, outros conjuntos preservados, ausência não tratada como exclusão. |
| Origem ausente/inacessível | Estado explícito, sem vínculo fabricado por similaridade. |
| Alternância de vistas | Mesmos filtros, seleção e snapshot; item oculto pode ser revelado. |
| Voltar da origem | Percurso e filtros restaurados. |
| Comparação estável | Antes/depois do mesmo item, datas e cobertura visíveis. |
| Identidade ambígua | Correspondência incerta, sem união silenciosa. |
| Portabilidade | Reimportação preserva registros, relações, cobertura e omissões declaradas. |
| Retenção | Remoção dos dados escolhidos do visualizador preserva a fonte original. |
| Validação privada | Conteúdo e metadados da fonte real não aparecem em repositório, issues, CI hospedada, capturas públicas ou respostas de ferramentas do agente. |
| RAM por padrão | Sem salvar, não surgem bancos, caches, temporários ou logs privados controlados pela aplicação. |
| Nenhuma externalização | Medição externa ao processo mostra ausência de rede externa; restrição de saída cobre componentes e subprocessos. |
| Consolidação segura | Gravação explícita em área próxima verificada; destino Git, sincronizado, remoto ou incerto é recusado. |
| Operação offline | Percurso completo sem chamadas externas. |

## Fronteiras complementares

- Adaptador público: formatos e versões reconhecidos, capacidades, dados malformados, cobertura e identidade.
- Leitura: comparar hashes e inventário das fontes antes/depois; verificar escapes de raiz, links simbólicos e conteúdo hostil.
- Acessibilidade: fluxo por teclado e leitor de tela, foco previsível, lista equivalente ao grafo e redução de movimento.
- Inspeção visual: desktop, janela estreita, conteúdo longo e grafos densos.
- Desempenho: medir localmente com a fonte real autorizada; manter tamanhos e medições vinculadas à fonte privados. Só resultados sem conteúdo ou metadados privados entram nos artefatos públicos.
- Isolamento: medir conexões fora do processo e inventariar o espaço de arquivos controlado pela aplicação antes/depois. Testar falha sem gravar quando o destino não puder ser verificado. Logs e relatórios da execução privada não entram na CI ou nas respostas do agente.

## Conclusão da primeira versão

O fluxo principal funciona com pelo menos um adaptador real validado em dados privados locais, sem externalização e com RAM por padrão. Os requisitos acima passam; a matriz de compatibilidade corresponde ao que foi demonstrado. Consolidação é explícita e próxima da origem. Documentação publicada, protótipo e integração real têm estados separados. O [ADR-0002](adr/0002-private-local-memory.md) delimita a garantia do aplicativo e os componentes fora de seu controle.
