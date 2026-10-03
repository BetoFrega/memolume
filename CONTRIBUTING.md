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

Registre escolhas de stack, identidade, persistência, empacotamento ou contrato de pacotes em um ADR antes de tornar outras entregas dependentes delas. A ferramenta documental não fixa a arquitetura do aplicativo.

## Dados e fixtures

Use apenas dados sintéticos nos commits, PRs, screenshots e issues públicos. Nunca inclua memórias pessoais, exportações reais, credenciais, índices ou snapshots privados. Amostras autorizadas podem validar um adaptador localmente; extraia fixtures sintéticas e documente a versão e os limites sem publicar conteúdo pessoal.

Adaptadores precisam declarar formatos, capacidades e cobertura. Uma integração só entra na lista de compatibilidade depois de uma demonstração verificável. Falhas parciais, origens ausentes e identidades ambíguas fazem parte da aceitação.

## Propor um PR

Descreva o comportamento entregue, os critérios cobertos, a validação executada e as limitações remanescentes. Vincule o ticket, preserve fontes originais e não introduza envio externo obrigatório. Para relatos de vulnerabilidade, siga [SECURITY.md](SECURITY.md).
