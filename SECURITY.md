# Segurança

O aplicativo ainda não foi implementado. Os controles abaixo são requisitos para as futuras entregas, sem alegação de validação operacional.

## Limites de leitura e dados

- Ler apenas arquivos e pastas selecionados pelo usuário, sem escrita nas fontes.
- Não seguir automaticamente referências ou links simbólicos para fora da seleção.
- Tratar conteúdo importado como dado; não executar scripts, Markdown ativo ou instruções encontradas nos arquivos.
- Nenhuma externalização de conteúdo ou metadados, por nenhum componente ou subprocesso. Não oferecer envio opcional a IA externa, telemetria, analytics ou relatórios remotos.
- RAM por padrão, sem caches, temporários, bancos ou logs privados automáticos controlados pelo aplicativo.
- Consolidação somente explícita, em área privada dedicada próxima da fonte. Destino em Git, sincronização, volume remoto ou condição incerta impede gravação.
- Aplicar os mesmos controles de retenção a índices, snapshots e evidências.
- Revisar conteúdo e omissões antes de exportar; mascarar texto na UI não anonimiza um pacote.

Não publique conteúdo real de memória, metadados, exportações, credenciais ou caminhos privados em issues ou PRs. A validação real autorizada ocorre localmente e não envia esses dados para CI ou para as respostas de ferramentas do agente. Dados fictícios não são um pré-requisito.

O [ADR-0002](docs/adr/0002-private-local-memory.md) define o escopo da garantia. A aplicação não controla sincronizadores, backups, malware, capturas, swap ou crash dumps do sistema operacional; não prometer apagamento físico ou ausência absoluta de cópias fora de seu domínio de execução. Persistência fica desativada se a condição local do destino não puder ser verificada.

## Relatar uma vulnerabilidade

Use a opção **Report a vulnerability** na [aba Security](https://github.com/BetoFrega/memolume/security) quando disponível. Se ela não estiver disponível, abra uma issue pedindo um canal privado, sem detalhes sensíveis. Inclua privadamente versão/commit, cenário, impacto e passos com dados fictícios. Não há SLA de resposta definido nesta etapa.
