# Contribuir com o Memolume

Comece pelo [README](README.md), pelo [glossário](CONTEXT.md), pela [especificação](docs/product/spec.md) e pelos [ADRs relevantes](docs/adr/README.md).

## Escolher uma entrega

O tracker é [GitHub Issues](https://github.com/BetoFrega/memolume/issues). Trabalhe na fronteira: um ticket `ready-for-agent` cujos bloqueadores estejam concluídos. Leia o corpo inteiro, comentários e dependências antes de começar. Comente para combinar a execução e evitar trabalho duplicado.

Cada entrega deve atravessar um comportamento observável completo e ser demonstrável ou verificável. Critérios de aceitação, cobertura e limitações precisam acompanhar o PR. Use o vocabulário de domínio, sem tratar documentos planejados como capacidades entregues.

## Desenvolvimento

```sh
npm run check
```

A verificação atual cobre a documentação e o scaffold. Quando o aplicativo existir, acrescente os comandos da stack escolhida e execute os testes de comportamento indicados em [docs/testing.md](docs/testing.md).

Registre escolhas de stack, identidade, consolidação, empacotamento ou contrato de pacotes em um ADR antes de tornar outras entregas dependentes delas. Essas escolhas devem cumprir [ADR-0002](docs/adr/0002-private-local-memory.md): nenhuma externalização, RAM por padrão e gravação explícita próxima da origem. A ferramenta documental não fixa a stack do aplicativo.

## Dados e fixtures

Nunca inclua memórias pessoais, metadados da fonte, exportações reais, credenciais, índices ou snapshots privados em commits, PRs, screenshots ou issues. A validação do adaptador usa uma fonte real autorizada em execução local isolada, com RAM por padrão. A rotina não leva conteúdo privado às respostas de ferramentas do agente nem à CI hospedada; devolve somente resultado sem conteúdo ou metadados privados.

Dados fictícios não são exigidos. Casos artificiais mínimos de borda podem ser construídos após conhecer o contrato, mas não provam compatibilidade. Não tente transformar a fonte pessoal em fixture pública por simples substituição de nomes ou mascaramento: relações e metadados também podem identificar informações.

Adaptadores precisam declarar formatos, capacidades e cobertura. Uma integração só entra na lista de compatibilidade depois de uma demonstração verificável. Falhas parciais, origens ausentes e identidades ambíguas fazem parte da aceitação.

## Propor um PR

Descreva o comportamento entregue, os critérios cobertos, a validação executada e as limitações remanescentes, sem conteúdo ou metadados da fonte privada. Vincule o ticket, preserve arquivos originais e não introduza saída externa, mesmo opcional. Para relatos de vulnerabilidade, siga [SECURITY.md](SECURITY.md).
