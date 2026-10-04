# ADR-0002: nenhuma externalização e estado em RAM

**Estado:** aceito por instrução do usuário; implementação e validação pendentes.

**Data:** 2026-10-04.

## Contexto

O usuário rejeitou exigir um corpus fictício como condição de validar formatos reais. Determinou que a aplicação não externalize informação privada, guarde seu estado em memória por padrão e mantenha eventual consolidação próxima dos arquivos originais.

Esta decisão substitui as propostas anteriores de demonstração obrigatória, armazenamento durável automático e recursos opcionais que enviem dados a serviços externos.

## Decisão

1. **Nenhuma externalização pelo Memolume.** Conteúdo, metadados, nomes e caminhos, índices, embeddings, evidências, snapshots e dados derivados permanecem no computador. Não há exceção para consentimento de envio a IA externa, telemetria ou relatórios de erro. Também não há chamadas de atualização, recursos de CDN ou subprocessos com saída remota durante uma sessão com dados privados.
2. **RAM por padrão.** Importação, catálogo, busca, relações, estado de navegação, snapshots e comparação usam memória volátil. Não escrever dados privados em caches, bancos, armazenamento de navegador, temporários ou logs por padrão. Encerrar a sessão libera as referências do processo; não prometer apagamento físico de RAM, swap ou dumps controlados pelo sistema operacional.
3. **Fontes originais somente leitura.** Adaptadores nunca reescrevem o material do assistente. Uma consolidação é um artefato derivado separado, não uma alteração da memória original.
4. **Persistência explícita e próxima da origem.** Somente uma ação consciente de salvar/consolidar autoriza gravar dados. Usar uma área dedicada adjacente à fonte, aprovada pelo usuário, com acesso restrito. Não usar um banco central oculto nem criar pastas automaticamente na fonte. Seleção da fonte não concede permissão de escrever nela.
5. **Falhar sem gravar quando o destino for incerto.** Bloquear gravação em repositórios Git, pastas sincronizadas, volumes remotos ou destinos cuja condição local não tenha sido verificada. Se não houver um destino próximo seguro, continuar em RAM; não escolher outra localização silenciosamente.
6. **Validação real e privada.** A aplicação pode ler a fonte real selecionada localmente. O conteúdo não entra em Git, issues, CI hospedada, capturas públicas nem respostas de ferramentas enviadas ao agente de IA. A execução privada devolve somente o resultado da verificação, sem valores, caminhos ou metadados da fonte. Testes artificiais mínimos de casos de borda podem ser construídos depois de conhecer o contrato, mas não são condição de começar nem prova de compatibilidade.
7. **Portabilidade exclusivamente local.** Exportar significa consolidar um pacote em disco sob as mesmas regras de destino. Não oferecer upload, compartilhamento remoto, copiar dados privados para a área de transferência nem abrir aplicações externas com conteúdo privado como parte do fluxo.

## Garantia e limite de responsabilidade

O requisito verificável é ausência de saída externa e de persistência automática por ação do aplicativo e de seus componentes. A arquitetura precisa bloquear rede para o processo e seus filhos, empacotar recursos de interface localmente e tratar conteúdo importado como dado. Se houver servidor local, ele usa apenas loopback e impede acesso por outras máquinas.

O aplicativo não controla software de sincronização, backups, captura de tela, malware, swap ou crash dumps do sistema. Detectar todas essas condições em qualquer sistema não é uma capacidade comprovada. A qualificação deve declarar a plataforma e as condições de execução verificadas; persistência permanece desativada quando os requisitos do destino não puderem ser comprovados.

## Critérios de aceitação

- Percurso completo em dados reais locais termina sem rede externa, incluindo resolução de nomes, bibliotecas de interface, logs e subprocessos.
- Medição externa ao processo comprova ausência de tentativas e transmissões; a restrição de rede impede a saída mesmo quando uma dependência tenta realizá-la.
- Sem ação de salvar, não surgem arquivos, caches ou bancos privados no espaço controlado pelo aplicativo; fontes originais preservam conteúdo e inventário.
- Snapshots voláteis podem ser comparados na sessão; reabertura não restaura informação privada sem reimportação ou pacote salvo explicitamente.
- Consolidação mostra destino e material incluído, recusa local não verificado e não sobrescreve arquivos originais.
- Artefatos públicos incluem somente código, documentação e resultados sem conteúdo ou metadados privados. Dados fictícios não são um bloqueio para a implementação.

## Consequências

História entre sessões exige consolidação consciente. A distribuição precisa sustentar bloqueio de rede e armazenamento volátil; essas propriedades influenciam a escolha da stack. Funcionalidades futuras continuam sujeitas a esta decisão, incluindo recursos semânticos exclusivamente locais. A documentação desta regra não é prova de que o aplicativo já a cumpre.
