# Segurança

O aplicativo ainda não foi implementado. Os controles abaixo são requisitos para as futuras entregas, sem alegação de validação operacional.

## Limites de leitura e dados

- Ler apenas arquivos e pastas selecionados pelo usuário, sem escrita nas fontes.
- Não seguir automaticamente referências ou links simbólicos para fora da seleção.
- Tratar conteúdo importado como dado; não executar scripts, Markdown ativo ou instruções encontradas nos arquivos.
- Processar localmente; recursos essenciais não dependem de analytics, IA externa ou serviços remotos.
- Aplicar os mesmos controles de retenção a índices, snapshots e evidências.
- Revisar conteúdo e omissões antes de exportar; mascarar texto na UI não anonimiza um pacote.

Não publique conteúdo real de memória, exportações, credenciais ou caminhos privados em issues ou PRs. Use reproduções sintéticas.

## Relatar uma vulnerabilidade

Use a opção **Report a vulnerability** na [aba Security](https://github.com/BetoFrega/memolume/security) quando disponível. Se ela não estiver disponível, abra uma issue pedindo um canal privado, sem detalhes sensíveis. Inclua privadamente versão/commit, cenário, impacto e passos com dados fictícios. Não há SLA de resposta definido nesta etapa.
