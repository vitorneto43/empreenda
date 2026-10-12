# Empreenda! v0.4 — Histórias de Negócios

Abra a pasta no VS Code e rode `index.html` com Live Server. Sem dependências, servidor ou conta.

## O que mudou
- Selecione cafeteria (40 capítulos), loja de roupas (16 capítulos) ou pequena confecção (16 capítulos).
- Em cada nova partida, a ordem dos capítulos internos varia em blocos, as cinco opções A–E são embaralhadas, e o contexto narrativo / eventos variam.
- As cinco escolhas têm compensações: crescimento, caixa, reputação, equipe, operação. O jogo não declara uma resposta certa única.
- Escolhas alteram receita, caixa, resultado, reputação, equipe e operação; baixo desempenho pode diminuir vendas futuras.
- Relatório de decisões, falência, e certificado demonstrativo ao concluir com caixa e resultado positivos.

## Arquivos
- `chapters.js`: 40 situações originais da cafeteria, mantidas.
- `sectors.js`: setores novos, 16 situações por setor, alternativas e gerador de campanhas.
- `app.js`: motor de decisão, estado, métricas, telas e certificados.
- `style.css`: layout responsivo.

## Limitações transparentes
Ainda é um protótipo. As narrativas têm variações controladas (não capítulos infinitos criados por IA). As 16 situações dos setores novos utilizam estratégias-modelo adaptadas; precisam de revisão pedagógica específica antes de publicação comercial. Não há autenticação, banco de dados, nomes no certificado nem validação pública. Investimentos estão simplificados no resultado acumulado; não há contabilidade formal, passivo real ou modelagem financeira regulatória. Ao começar outra empresa, o progresso da partida atual é substituído. Os dados da versão 0.3.1 não são importados automaticamente.
