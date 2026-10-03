# ADR-0001: preparação documental e licença

**Estado:** aceito para o bootstrap do repositório.

**Data:** 2026-10-03.

## Contexto

O usuário solicitou um repositório público para um projeto livre e de código aberto, com documentação, logo e planejamento. A especificação ainda não escolheu stack, plataforma inicial e distribuição, e exige validar uma fonte antes de anunciar compatibilidade.

## Decisão

- Criar BetoFrega/memolume como repositório público com contexto único, documentação em português e GitHub Issues.
- Adotar MIT como licença inicial permissiva, coerente com o projeto FOSS e contribuição de adaptadores.
- Publicar documentação e ferramentas documentais independentes de dependências npm. Usar Node.js 24 LTS para essas ferramentas.
- Manter stack do aplicativo, primeiro adaptador, plataforma, persistência e distribuição em aberto.
- Gerar uma logo inicial com a ferramenta imagegen integrada; registrar prompt e artefato em documentação de marca.

## Consequências

O repositório pode ser estudado, distribuído e contribuído desde o início. A runtime do check documental não determina a stack do produto. Não há alegação de aplicativo pronto, integração validada ou suporte a uma plataforma. O brief original permanece como referência histórica; este ADR resolve a licença que estava aberta naquele documento.
