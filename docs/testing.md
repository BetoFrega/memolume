# Estratégia de validação

## Fronteira principal aprovada

Exercitar o comportamento externo integrado: **importar conjunto fictício → buscar → selecionar na árvore e no grafo → abrir origem → observar um segundo estado → comparar → exportar → reimportar**.

Fronteira aprovada pelo usuário em 4 de outubro de 2026.

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
| Demonstração | Aviso Dados fictícios persistente e separação das fontes pessoais. |
| Operação offline | Percurso completo sem chamadas externas. |

## Fronteiras complementares

- Adaptador público: formatos e versões reconhecidos, capacidades, dados malformados, cobertura e identidade.
- Leitura: comparar hashes e inventário das fontes antes/depois; verificar escapes de raiz, links simbólicos e conteúdo hostil.
- Acessibilidade: fluxo por teclado e leitor de tela, foco previsível, lista equivalente ao grafo e redução de movimento.
- Inspeção visual: desktop, janela estreita, conteúdo longo e grafos densos.
- Desempenho: corpus sintético com tamanhos documentados; definir metas com a stack e medir antes de anunciar limites.

## Conclusão da primeira versão

O fluxo principal funciona com demonstração e pelo menos um adaptador real validado. Os requisitos acima passam; a matriz de compatibilidade corresponde ao que foi demonstrado. Documentação publicada, protótipo e integração real têm estados separados.
