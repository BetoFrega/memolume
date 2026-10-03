<p align="center">
  <img src="docs/brand/memolume-logo.png" alt="Memolume" width="520">
</p>

# Memolume

**Explore a memória dos seus assistentes.**

Memolume é um projeto independente, livre e de código aberto para explorar visualmente registros de memória e estruturas acessíveis do ChatGPT Desktop e do Codex. Sua proposta é conectar conteúdo, origem e evolução: encontrar uma memória, entender o que sustenta aquele registro e comparar o que mudou entre observações.

> **Estado atual: preparação do projeto.** Este repositório contém a especificação, documentação de domínio, identidade visual e ferramentas de verificação documental. O aplicativo e os adaptadores ainda precisam ser implementados e validados. Ainda não há release para instalar.

## A experiência que estamos construindo

1. **Importar:** escolher explicitamente uma fonte local ou pacote compatível e revisar formatos reconhecidos, cobertura e erros.
2. **Explorar:** navegar entre árvore, lista e grafo mantendo busca, filtros, seleção e snapshot.
3. **Conferir a origem:** abrir conteúdo, localização, relações e evidências no inspetor, com ausência ou inacessibilidade indicadas.
4. **Comparar:** capturar snapshots e ver novos registros, alterações e correspondências incertas.
5. **Transportar:** revisar uma exportação local e reimportar seu pacote versionado.

A primeira versão inclui uma demonstração com **dados fictícios**, separada das fontes pessoais, e uma alternativa acessível em lista para todo o conteúdo do grafo.

## Princípios

- Processamento e armazenamento locais; fluxo essencial sem conta, backend proprietário ou IA externa.
- Fontes somente leitura, limitadas à seleção feita pelo usuário.
- Proveniência explícita: semelhança entre textos não confirma a origem de uma memória.
- Memórias, resumos, conversas e instruções preservam seus tipos e escopos conhecidos.
- Cobertura parcial permanece visível. Ausência numa coleta incompleta não comprova exclusão.
- Nenhum envio de conteúdo, analytics ou conexão remota por padrão.
- Navegação por teclado, foco visível, rótulos de relações e redução de movimento.

Esses são requisitos do produto a implementar; a validação de cada um faz parte dos tickets.

## Compatibilidade planejada

| Fonte | Estado | Condição para anunciar suporte |
| --- | --- | --- |
| Arquivos de memória locais do Codex selecionados pelo usuário | Planejada | Validar formatos, identidade e leitura com amostras autorizadas e fixtures sintéticas. |
| Memórias locais do app desktop | Em investigação | Identificar modalidade e comprovar acesso e formato; não presumir equivalência com Codex. |
| Exportações do ChatGPT | Planejada | Reconhecer somente os registros efetivamente presentes no pacote. |
| Resumo/lista de memórias fornecido pelo usuário | Planejada | Preservar modalidade declarada e cobertura parcial. |
| Instruções e fontes externas incluídas na seleção | Planejada | Preservar tipo original e limites de acesso. |

O primeiro marco combina a demonstração com **um adaptador real validado**. Conversas exportadas não se tornam memórias automaticamente, e um resumo não representa necessariamente toda a memória disponível.

## Trabalhar neste repositório

Pré-requisito para as ferramentas documentais: **Node.js 24 LTS** e Git. Nenhuma dependência npm é necessária nesta etapa.

```sh
git clone https://github.com/BetoFrega/memolume.git
cd memolume
npm run check
```

`npm run check` verifica links locais, estrutura obrigatória, metadados e presença da logo. Esse comando **não testa o futuro aplicativo**. Não há comando de execução do produto enquanto a stack não for escolhida.

## Documentação e planejamento

- [Especificação da primeira versão](docs/product/spec.md): problema, solução, histórias, decisões e critérios de teste.
- [Brief de produto e experiência](docs/product/source-specification.md): recorte de UX e material que originou a especificação.
- [Glossário e contexto](CONTEXT.md): fonte, item, evidência, relação, snapshot e mudança.
- [Arquitetura proposta](docs/architecture.md): fronteiras, contratos e invariantes.
- [Estratégia de validação](docs/testing.md): percurso integrado e casos de falha.
- [Roteiro e tickets](docs/roadmap.md): entregas verticais e dependências.
- [Decisões de arquitetura](docs/adr/README.md): decisões registradas e perguntas ainda abertas.
- [Guia de contribuição](CONTRIBUTING.md): como propor e validar mudanças.
- [Segurança e dados pessoais](SECURITY.md): tratamento de fontes e relato privado de vulnerabilidades.
- [Identidade visual](docs/brand/README.md): logo inicial e prompt de geração.

O trabalho é acompanhado em [GitHub Issues](https://github.com/BetoFrega/memolume/issues). Tickets prontos usam o label `ready-for-agent`; os bloqueios indicam a ordem possível de execução.

## Primeiros marcos

1. Validar uma fonte e demonstrar importação, cobertura e acesso à origem.
2. Entregar exploração contínua entre lista, árvore, grafo e inspetor.
3. Completar snapshots, comparação conservadora, exportação e reimportação.

Zoom semântico, vistas salvas, anotações, comparação entre assistentes e assistência semântica opcional ficam para expansões. Edição das memórias originais e reconstrução de histórico inexistente estão fora do escopo.

## Licença e independência

[MIT](LICENSE). Memolume é um projeto independente e não é afiliado, endossado ou produzido pela OpenAI. ChatGPT e Codex são nomes de produtos de seus respectivos titulares.
