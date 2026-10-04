# Roteiro da primeira versão

**Estado:** divisão aprovada e publicada no GitHub em 4 de outubro de 2026. As 11 issues estão abertas com `ready-for-agent`; bloqueios usam dependências nativas e também aparecem no corpo de cada ticket.

A [spec #1](https://github.com/BetoFrega/memolume/issues/1) permanece aberta. Todos os tickets seguem [ADR-0002](adr/0002-private-local-memory.md): nenhuma externalização, RAM por padrão, arquivos originais somente leitura e consolidação explícita próxima da origem em destino privado verificado. Dados fictícios não são um pré-requisito.

| Ordem | Ticket | Bloqueado por |
| --- | --- | --- |
| 1 | [#2: Isolar a sessão e validar a primeira fonte real](https://github.com/BetoFrega/memolume/issues/2) | Nenhum |
| 2 | [#3: Explorar a fonte real em uma sessão privada em RAM](https://github.com/BetoFrega/memolume/issues/3) | [#2](https://github.com/BetoFrega/memolume/issues/2) |
| 3 | [#4: Importar fonte real com prévia, cobertura e recuperação de falhas](https://github.com/BetoFrega/memolume/issues/4) | [#3](https://github.com/BetoFrega/memolume/issues/3) |
| 4 | [#5: Buscar, filtrar e navegar na árvore preservando a seleção](https://github.com/BetoFrega/memolume/issues/5) | [#3](https://github.com/BetoFrega/memolume/issues/3) |
| 5 | [#6: Percorrer origem e relações explícitas com retorno ao contexto](https://github.com/BetoFrega/memolume/issues/6) | [#3](https://github.com/BetoFrega/memolume/issues/3) |
| 6 | [#7: Explorar grafo com seleção sincronizada e alternativa acessível](https://github.com/BetoFrega/memolume/issues/7) | [#5](https://github.com/BetoFrega/memolume/issues/5) |
| 7 | [#8: Capturar snapshots em RAM e preservar a última leitura válida](https://github.com/BetoFrega/memolume/issues/8) | [#4](https://github.com/BetoFrega/memolume/issues/4) |
| 8 | [#9: Comparar snapshots sem transformar lacunas em exclusões](https://github.com/BetoFrega/memolume/issues/9) | [#7](https://github.com/BetoFrega/memolume/issues/7), [#8](https://github.com/BetoFrega/memolume/issues/8) |
| 9 | [#10: Consolidar perto da origem e reimportar um pacote privado](https://github.com/BetoFrega/memolume/issues/10) | [#8](https://github.com/BetoFrega/memolume/issues/8) |
| 10 | [#11: Encerrar estado em RAM e gerir consolidações escolhidas](https://github.com/BetoFrega/memolume/issues/11) | [#10](https://github.com/BetoFrega/memolume/issues/10) |
| 11 | [#12: Qualificar isolamento e distribuir a primeira versão](https://github.com/BetoFrega/memolume/issues/12) | [#6](https://github.com/BetoFrega/memolume/issues/6), [#9](https://github.com/BetoFrega/memolume/issues/9), [#11](https://github.com/BetoFrega/memolume/issues/11) |

## Próxima entrega

[#2: Isolar a sessão e validar a primeira fonte real](https://github.com/BetoFrega/memolume/issues/2) pode começar. Comprovar o isolamento antes de ler a fonte privada; validar o contrato sem enviar conteúdo ou metadados a Git, issues, CI ou respostas do agente.

Depois de cada conclusão, trabalhar na fronteira: somente tickets cujos bloqueadores estejam concluídos. `ready-for-agent` indica briefing pronto, não ausência de dependências. As dependências transitivas não são repetidas.

## Expansões preservadas

Zoom semântico, tabela analítica, lentes, dois inspetores, vistas e percursos salvos; atualização local com pausa e história de decisões; comparação entre assistentes e anotações; modo apresentação; busca semântica e hipóteses revisáveis exclusivamente locais; evidência de recuperação/inclusão no contexto onde a fonte permitir. Todas permanecem sujeitas a nenhuma externalização e RAM por padrão. Histórias 39–52 não bloqueiam o núcleo.
