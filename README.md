# Empreenda! Beta 0.9 — Consequências Vivas

Continuação incremental da Beta 0.8, mantendo 10 negócios, 20 temporadas procedurais por negócio, 100 decisões por temporada, cinco alternativas, explicações pedagógicas, autenticação opcional via Supabase e compartilhamento.

## O que há de novo

- Arquivo separado `finance.js`: motor financeiro didático e fácil de manter.
- Cada **cinco decisões** equivalem a **um mês** no calendário da empresa.
- Escolhas de crédito podem contratar empréstimos com juros mensais, parcelas calculadas e saldo devedor até quitação.
- Escolhas de pessoas podem contratar funcionários; salários são cobrados nos meses seguintes.
- Investimentos em expansão/capacidade podem criar custo mensal de estrutura e manutenção.
- Painel de dívidas, folha e manutenção; explicação ao fechar cada mês e no feedback de cada decisão.
- Partidas antigas recebem inicialização compatível do livro financeiro quando abertas.

## Limitações importantes

- O motor é **educativo**, não uma ferramenta de contabilidade ou planejamento financeiro real. Custos, empréstimos, salários e ciclos temporais são fictícios e simplificados.
- As decisões ainda partem de cinco estratégias genéricas por situação. Nem todo empréstimo, contratação ou investimento tem um evento narrativo único a vários capítulos de distância; isso é trabalho futuro.
- Os contratos são ativados por tipo de desafio e estratégia escolhida; os números são hipóteses didáticas. Folha e dívidas continuam sendo cobradas após a decisão original.
- O cálculo ainda não tem imposto por regime, férias, multas, ativos depreciáveis ou juros de mora por insuficiência de caixa; a falta de dinheiro encerra a partida.
- A aplicação ainda mantém só uma partida ativa por jogador; sessões simultâneas podem sobrescrever o progresso. O ranking ainda não é auditável pelo servidor.
- Não substitua o `config.js` já configurado no seu repositório pela versão vazia deste pacote. Apenas valores públicos podem ficar nesse arquivo: **nunca secret/service_role**.

## Instalação

1. Faça um backup da Beta 0.8 e dos dados em teste.
2. Copie os arquivos da Beta 0.9 para a pasta do VS Code; **preserve o config.js existente**.
3. Inicie com Live Server e teste como visitante primeiro.
4. Faça cinco decisões e confira o fechamento mensal; jogue mais cinco e verifique custos recorrentes. Para gerar empréstimo, escolha uma alternativa de expansão ou negociação durante um desafio do tipo Crédito/Capital/Dívida.
5. Teste cadastro e sincronização antes de substituir os arquivos públicos no GitHub Pages.

Não há alterações necessárias no esquema SQL desta versão: o `game_state` JSON já comporta os campos novos.
