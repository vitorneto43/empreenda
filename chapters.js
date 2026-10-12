// Conteúdo da temporada 1: 40 capítulos. Valores fictícios, para fins didáticos.
const CHAPTERS_BASE=[
 {title:'A porta se abre',type:'Planejamento',scene:'Você alugou um pequeno ponto para a Cafeteria Aurora. A vizinhança está curiosa, mas o dinheiro inicial precisa durar. Como começar?',choices:[
  {title:'Investir com moderação e guardar reserva',cost:3000,sales:650,expenses:400,rep:3,lesson:'Capital de giro é a reserva para manter as operações enquanto as vendas crescem.',story:'A abertura foi simples. A reserva financeira deixou você mais tranquilo.'},
  {title:'Comprar equipamentos de luxo',cost:7500,sales:800,expenses:500,rep:9,lesson:'Bons equipamentos ajudam, mas imobilizar quase todo o caixa aumenta o risco.',story:'Os equipamentos impressionam, mas os próximos boletos assustam.'},
  {title:'Organizar uma inauguração extravagante',cost:9000,sales:950,expenses:650,rep:12,lesson:'Marketing pode atrair clientes, mas deve respeitar o orçamento.',story:'A cafeteria lotou de curiosos. Agora é preciso pagar o espetáculo.'}]},
 {title:'O preço do primeiro café',type:'Precificação',scene:'O café custa R$ 6 por unidade, incluindo insumos diretos. Você precisa definir um preço que o público aceite e que pague a estrutura.',choices:[
  {title:'Preço de R$ 12, após pesquisar a vizinhança',cost:150,sales:1700,expenses:850,rep:5,lesson:'Preço exige analisar custos, concorrência, clientes e margem de contribuição.',story:'Os clientes aceitam o preço, e a margem ajuda a pagar as contas.'},
  {title:'Preço de R$ 7 para atrair todo mundo',cost:150,sales:1400,expenses:1300,rep:8,lesson:'Vender muito com margem pequena pode não sustentar o negócio.',story:'A fila cresce, mas sobra pouquíssimo dinheiro por venda.'},
  {title:'Preço de R$ 25 sem consultar ninguém',cost:150,sales:450,expenses:450,rep:-10,lesson:'Preço desalinhado à percepção de valor pode derrubar a demanda.',story:'Os clientes reclamam do preço e começam a procurar alternativas.'}]},
 {title:'Um fornecedor bate à porta',type:'Estoque',scene:'Um fornecedor oferece desconto se você comprar ingredientes para seis meses. Existe risco de perdas e vencimento.',choices:[
  {title:'Comprar somente o necessário para as próximas semanas',cost:400,sales:1500,expenses:850,rep:2,lesson:'Estoque enxuto reduz desperdício e capital parado.',story:'Você repõe com frequência e quase não desperdiça ingredientes.'},
  {title:'Comprar tudo para ganhar o desconto',cost:3600,sales:1550,expenses:1100,rep:1,lesson:'Desconto não compensa mercadoria estragada e caixa imobilizado.',story:'O depósito fica cheio e parte dos produtos perde validade.'},
  {title:'Não comprar nada e contar com a sorte',cost:0,sales:200,expenses:300,rep:-12,lesson:'Falta de estoque provoca vendas perdidas e clientes insatisfeitos.',story:'Na hora do almoço, vários itens acabam e os clientes vão embora.'}]},
 {title:'A primeira reclamação',type:'Atendimento',scene:'Uma cliente publicou que recebeu um pedido errado. Outros moradores estão lendo a avaliação.',choices:[
  {title:'Ouvir, corrigir e treinar a equipe',cost:220,sales:1450,expenses:650,rep:13,lesson:'Resolver falhas e corrigir o processo protege a reputação no longo prazo.',story:'A cliente atualiza a avaliação e elogia sua postura.'},
  {title:'Ignorar porque foi apenas uma pessoa',cost:0,sales:650,expenses:650,rep:-12,lesson:'Uma reclamação ignorada pode afetar a confiança de novos clientes.',story:'Outras avaliações negativas surgem.'},
  {title:'Devolver todos os pedidos do dia',cost:2500,sales:1050,expenses:700,rep:6,lesson:'Uma solução desproporcional pode comprometer as finanças sem resolver a causa.',story:'Alguns clientes ficam felizes, mas o caixa sofre.'}]},
 {title:'A proposta de publicidade',type:'Marketing',scene:'Um influenciador oferece divulgação cara. Você ainda não sabe se o público dele mora perto da loja.',choices:[
  {title:'Testar campanha local com orçamento limitado',cost:300,sales:2000,expenses:900,rep:8,lesson:'Campanhas pequenas permitem medir retorno antes de aumentar o investimento.',story:'A campanha atrai moradores próximos, e você mede as vendas.'},
  {title:'Investir R$ 4.000 no influenciador',cost:4000,sales:1200,expenses:850,rep:2,lesson:'Alcance não é o mesmo que conversão em vendas.',story:'O vídeo viraliza fora da cidade, mas poucas pessoas visitam a loja.'},
  {title:'Cortar toda divulgação e esperar',cost:0,sales:700,expenses:650,rep:-3,lesson:'Divulgação consistente ajuda os clientes a descobrir o negócio.',story:'A cafeteria fica tranquila até demais.'}]},
 {title:'Dinheiro da casa ou da empresa?',type:'Finanças',scene:'A cafeteira de casa quebrou. Você pensa em retirar dinheiro do caixa da cafeteria sem registrar.',choices:[
  {title:'Manter contas separadas e registrar retirada planejada',cost:200,sales:1650,expenses:950,rep:0,lesson:'Separar recursos pessoais e empresariais facilita gestão e tomada de decisões.',story:'Você sabe exatamente quanto a empresa pode gastar.'},
  {title:'Usar R$ 3.000 do caixa sem registrar',cost:3000,sales:1500,expenses:1050,rep:-3,lesson:'Retiradas sem controle comprometem o capital de giro e distorcem os relatórios.',story:'O saldo diminui e você perde o controle das contas.'},
  {title:'Ignorar as contas por um mês',cost:1400,sales:850,expenses:1200,rep:-4,lesson:'Registros regulares permitem perceber problemas antes de ficarem graves.',story:'Contas vencem sem você perceber.'}]},
 {title:'O convite para contratar',type:'Pessoas',scene:'O movimento está crescendo. Você precisa escolher como atender melhor sem comprometer a folha de pagamento.',choices:[
  {title:'Contratar ajuda em horário de pico e acompanhar resultados',cost:400,sales:2350,expenses:1250,rep:10,lesson:'Dimensionar equipe de acordo com a demanda ajuda a equilibrar serviço e custos.',story:'As filas diminuem e os clientes voltam com frequência.'},
  {title:'Contratar cinco pessoas de uma vez',cost:3200,sales:2250,expenses:1900,rep:6,lesson:'Aumentar custos fixos mais rápido que as receitas é arriscado.',story:'A equipe fica ociosa em boa parte do dia.'},
  {title:'Trabalhar sozinho e atrasar pedidos',cost:0,sales:750,expenses:550,rep:-13,lesson:'Economizar na equipe pode gerar perdas de vendas e reputação.',story:'Clientes desistem depois de esperar demais.'}]},
 {title:'A tentação de expandir',type:'Estratégia',scene:'Surge um ponto disponível no bairro vizinho. Abrir outra loja seria emocionante — mas sua primeira unidade ainda requer atenção.',choices:[
  {title:'Melhorar os processos antes de expandir',cost:450,sales:2600,expenses:1100,rep:9,lesson:'Expansão sustentável exige processos estáveis e caixa suficiente.',story:'Você padroniza receitas, compras e atendimento. A loja melhora.'},
  {title:'Abrir uma filial imediatamente',cost:6500,sales:1950,expenses:1950,rep:4,lesson:'Crescer sem capital e processos suficientes amplia os riscos.',story:'A filial abre, mas as duas lojas disputam o mesmo dinheiro.'},
  {title:'Fechar mais cedo e parar de inovar',cost:0,sales:700,expenses:850,rep:-7,lesson:'A estagnação também pode prejudicar a competitividade.',story:'Os concorrentes avançam e seu movimento cai.'}]},
 {title:'O mês decisivo',type:'Crises',scene:'Um concorrente abre na rua e os custos sobem. Esta é sua chance de demonstrar gestão sob pressão.',choices:[
  {title:'Rever custos, manter qualidade e criar fidelidade',cost:350,sales:2900,expenses:1300,rep:13,lesson:'Eficiência e retenção tendem a ser mais sustentáveis que descontos indiscriminados.',story:'Clientes fiéis recomendam a cafeteria, apesar da concorrência.'},
  {title:'Vender tudo abaixo do custo',cost:150,sales:1800,expenses:2600,rep:4,lesson:'Preços abaixo dos custos por longos períodos podem destruir o negócio.',story:'As filas crescem, mas cada pedido aprofunda o prejuízo.'},
  {title:'Pegar empréstimo caro e dobrar os gastos',cost:4800,sales:1500,expenses:1700,rep:-4,lesson:'Endividamento sem plano de retorno pode agravar uma crise.',story:'A dívida pesa enquanto o faturamento não acompanha.'}]}
];
const CHAPTERS = [...CHAPTERS_BASE, ...[
  {
    "title": "O bilhete de Dona Lúcia",
    "type": "Relacionamento",
    "scene": "Dona Lúcia, cliente desde o primeiro dia, diz que o café perdeu o sabor. Seu funcionário Caio percebeu uma mudança nos grãos.",
    "choices": [
      {
        "title": "Investigar os lotes e ouvir Caio",
        "cost": 180,
        "sales": 1700,
        "expenses": 850,
        "rep": 6,
        "lesson": "Ouvir clientes e verificar a qualidade antes de alterar o produto.",
        "story": "Você identificou um lote ruim, negociou uma reposição e reconquistou Dona Lúcia."
      },
      {
        "title": "Desconsiderar a opinião de Dona Lúcia",
        "cost": 2300,
        "sales": 850,
        "expenses": 1000,
        "rep": -6,
        "lesson": "Ouvir clientes e verificar a qualidade antes de alterar o produto.",
        "story": "Dona Lúcia deixa de frequentar a loja e conta aos vizinhos."
      },
      {
        "title": "Trocar de marca sem testar",
        "cost": 100,
        "sales": 690,
        "expenses": 900,
        "rep": -4,
        "lesson": "Ouvir clientes e verificar a qualidade antes de alterar o produto.",
        "story": "O café novo surpreende alguns, mas afasta clientes habituais."
      }
    ]
  },
  {
    "title": "A chuva de terça-feira",
    "type": "Fluxo de caixa",
    "scene": "Uma chuva forte esvazia a rua por uma semana. O aluguel vence sexta-feira e a equipe espera o pagamento.",
    "choices": [
      {
        "title": "Rever gastos e oferecer encomendas",
        "cost": 245,
        "sales": 1890,
        "expenses": 950,
        "rep": 7,
        "lesson": "Custos fixos continuam existindo mesmo quando a demanda diminui.",
        "story": "A campanha de encomendas reduz o impacto da chuva."
      },
      {
        "title": "Esperar o sol sem mudar nada",
        "cost": 2750,
        "sales": 940,
        "expenses": 1120,
        "rep": -7,
        "lesson": "Custos fixos continuam existindo mesmo quando a demanda diminui.",
        "story": "O caixa cai enquanto as despesas seguem chegando."
      },
      {
        "title": "Usar toda a reserva em anúncios",
        "cost": 400,
        "sales": 810,
        "expenses": 1070,
        "rep": -5,
        "lesson": "Custos fixos continuam existindo mesmo quando a demanda diminui.",
        "story": "Os anúncios atraem atenção, mas o gasto esgota a proteção financeira."
      }
    ]
  },
  {
    "title": "O contrato de Sérgio",
    "type": "Fornecedores",
    "scene": "Sérgio, um distribuidor novo, propõe preço baixo se a Aurora assinar exclusividade de um ano. Há multa de saída.",
    "choices": [
      {
        "title": "Negociar teste curto com indicadores",
        "cost": 310,
        "sales": 2080,
        "expenses": 1050,
        "rep": 8,
        "lesson": "Contratos devem equilibrar preço, qualidade, prazo e flexibilidade.",
        "story": "O teste revela a qualidade do serviço sem comprometer o futuro."
      },
      {
        "title": "Assinar sem ler para aproveitar desconto",
        "cost": 3200,
        "sales": 1030,
        "expenses": 1240,
        "rep": -8,
        "lesson": "Contratos devem equilibrar preço, qualidade, prazo e flexibilidade.",
        "story": "Você fica preso a entregas inconsistentes e a uma multa elevada."
      },
      {
        "title": "Recusar qualquer negociação",
        "cost": 700,
        "sales": 930,
        "expenses": 1240,
        "rep": -6,
        "lesson": "Contratos devem equilibrar preço, qualidade, prazo e flexibilidade.",
        "story": "Você evita risco, mas deixa passar a chance de melhorar as compras."
      }
    ]
  },
  {
    "title": "A fila da escola",
    "type": "Operação",
    "scene": "A escola próxima começa a liberar alunos às 16h e o movimento cresce. A fila provoca atrasos e pedidos errados.",
    "choices": [
      {
        "title": "Organizar fila e pré-preparar itens",
        "cost": 375,
        "sales": 2270,
        "expenses": 1150,
        "rep": 6,
        "lesson": "Capacidade operacional deve acompanhar a demanda.",
        "story": "Os pedidos saem no horário e a equipe respira aliviada."
      },
      {
        "title": "Aumentar preços apenas no horário de pico",
        "cost": 3650,
        "sales": 1120,
        "expenses": 1000,
        "rep": -9,
        "lesson": "Capacidade operacional deve acompanhar a demanda.",
        "story": "Parte dos estudantes para de visitar a loja."
      },
      {
        "title": "Aceitar pedidos além da capacidade",
        "cost": 100,
        "sales": 1050,
        "expenses": 900,
        "rep": -4,
        "lesson": "Capacidade operacional deve acompanhar a demanda.",
        "story": "Os erros se acumulam e os reembolsos aumentam."
      }
    ]
  },
  {
    "title": "O sumiço dos copos",
    "type": "Controle",
    "scene": "A contagem semanal mostra que faltam dezenas de copos descartáveis. Você não sabe se houve perdas ou erro de registro.",
    "choices": [
      {
        "title": "Implantar controle de entradas e saídas",
        "cost": 440,
        "sales": 2460,
        "expenses": 850,
        "rep": 7,
        "lesson": "Inventário e apuração de fatos são melhores que suposições.",
        "story": "O registro revela falha de armazenagem e reduz desperdícios."
      },
      {
        "title": "Acusar publicamente um funcionário",
        "cost": 2300,
        "sales": 1210,
        "expenses": 1120,
        "rep": -6,
        "lesson": "Inventário e apuração de fatos são melhores que suposições.",
        "story": "A equipe perde confiança e o clima piora sem resolver a causa."
      },
      {
        "title": "Ignorar porque os copos são baratos",
        "cost": 400,
        "sales": 690,
        "expenses": 1070,
        "rep": -5,
        "lesson": "Inventário e apuração de fatos são melhores que suposições.",
        "story": "As perdas se repetem e começam a pesar no orçamento."
      }
    ]
  },
  {
    "title": "Caio quer aprender",
    "type": "Pessoas",
    "scene": "Caio, atendente da Aurora, pede treinamento para operar a máquina de espresso. Você precisa decidir como desenvolver a equipe.",
    "choices": [
      {
        "title": "Treinar Caio em horários planejados",
        "cost": 180,
        "sales": 2650,
        "expenses": 950,
        "rep": 8,
        "lesson": "Treinamento é investimento quando alinhado ao trabalho.",
        "story": "Caio melhora a qualidade e sente que pode crescer."
      },
      {
        "title": "Negar qualquer oportunidade de treinamento",
        "cost": 2750,
        "sales": 850,
        "expenses": 1240,
        "rep": -7,
        "lesson": "Treinamento é investimento quando alinhado ao trabalho.",
        "story": "Caio fica desmotivado e começa a procurar outro emprego."
      },
      {
        "title": "Promover Caio sem acompanhamento",
        "cost": 700,
        "sales": 810,
        "expenses": 1240,
        "rep": -6,
        "lesson": "Treinamento é investimento quando alinhado ao trabalho.",
        "story": "Erros operacionais aparecem porque faltou preparação."
      }
    ]
  },
  {
    "title": "Um concorrente abre ao lado",
    "type": "Concorrência",
    "scene": "Uma rede inaugura na mesma rua com promoções agressivas e anúncios por toda a cidade.",
    "choices": [
      {
        "title": "Reforçar atendimento e produtos autorais",
        "cost": 245,
        "sales": 1700,
        "expenses": 1050,
        "rep": 6,
        "lesson": "Diferenciação sustentável é mais sólida que guerra de preços.",
        "story": "Os clientes valorizam o atendimento e as receitas próprias."
      },
      {
        "title": "Cortar preços abaixo do custo",
        "cost": 3200,
        "sales": 940,
        "expenses": 1000,
        "rep": -8,
        "lesson": "Diferenciação sustentável é mais sólida que guerra de preços.",
        "story": "O volume sobe, mas a margem desaba."
      },
      {
        "title": "Espalhar boatos sobre a rede",
        "cost": 100,
        "sales": 930,
        "expenses": 900,
        "rep": -4,
        "lesson": "Diferenciação sustentável é mais sólida que guerra de preços.",
        "story": "A reputação da Aurora sofre com a postura antiética."
      }
    ]
  },
  {
    "title": "O bolo de Teresa",
    "type": "Parcerias",
    "scene": "Teresa, confeiteira do bairro, quer fornecer bolos artesanais. Seus produtos são elogiados, mas os prazos variam.",
    "choices": [
      {
        "title": "Fazer piloto com metas de entrega",
        "cost": 310,
        "sales": 1890,
        "expenses": 1150,
        "rep": 7,
        "lesson": "Projetos-piloto reduzem riscos de novas parcerias.",
        "story": "A parceria funciona em pequena escala e atrai novos clientes."
      },
      {
        "title": "Comprar grande volume sem testar",
        "cost": 3650,
        "sales": 1030,
        "expenses": 1120,
        "rep": -9,
        "lesson": "Projetos-piloto reduzem riscos de novas parcerias.",
        "story": "Entregas atrasam e bolos vencem no estoque."
      },
      {
        "title": "Dispensar Teresa sem conversar",
        "cost": 400,
        "sales": 1050,
        "expenses": 1070,
        "rep": -5,
        "lesson": "Projetos-piloto reduzem riscos de novas parcerias.",
        "story": "A Aurora perde uma oportunidade de criar produtos exclusivos."
      }
    ]
  },
  {
    "title": "O balanço que não fecha",
    "type": "Finanças",
    "scene": "Seu relatório mostra vendas maiores que o dinheiro no caixa. O problema pode estar nas taxas de cartão e recebíveis.",
    "choices": [
      {
        "title": "Conferir vendas, taxas e prazos de recebimento",
        "cost": 375,
        "sales": 2080,
        "expenses": 850,
        "rep": 8,
        "lesson": "Faturamento, lucro e caixa são conceitos diferentes.",
        "story": "Você descobre taxas e parcelamentos antes de gastar o que ainda não recebeu."
      },
      {
        "title": "Tratar todo faturamento como dinheiro disponível",
        "cost": 2300,
        "sales": 1120,
        "expenses": 1240,
        "rep": -6,
        "lesson": "Faturamento, lucro e caixa são conceitos diferentes.",
        "story": "Faltam recursos para pagamentos que você considerava cobertos."
      },
      {
        "title": "Apagar registros e recomeçar",
        "cost": 700,
        "sales": 690,
        "expenses": 1240,
        "rep": -6,
        "lesson": "Faturamento, lucro e caixa são conceitos diferentes.",
        "story": "Os dados se perdem e fica difícil encontrar o erro."
      }
    ]
  },
  {
    "title": "A quinta-feira do bairro",
    "type": "Marketing",
    "scene": "A associação de moradores propõe uma feira local. A taxa de participação é pequena e o público costuma ser da região.",
    "choices": [
      {
        "title": "Participar e medir clientes que retornam",
        "cost": 440,
        "sales": 2270,
        "expenses": 950,
        "rep": 6,
        "lesson": "Marketing local precisa de objetivo e medição.",
        "story": "A Aurora atrai novos vizinhos e mede o retorno da feira."
      },
      {
        "title": "Montar estande caríssimo e oferecer tudo grátis",
        "cost": 2750,
        "sales": 1210,
        "expenses": 1000,
        "rep": -7,
        "lesson": "Marketing local precisa de objetivo e medição.",
        "story": "O movimento aumenta, mas o gasto supera as vendas."
      },
      {
        "title": "Ignorar qualquer evento comunitário",
        "cost": 100,
        "sales": 810,
        "expenses": 900,
        "rep": -4,
        "lesson": "Marketing local precisa de objetivo e medição.",
        "story": "A cafeteria perde visibilidade para outros estabelecimentos locais."
      }
    ]
  },
  {
    "title": "A promoção dos três cafés",
    "type": "Precificação",
    "scene": "Sua equipe sugere desconto para quem comprar três cafés. É preciso preservar a margem e controlar a promoção.",
    "choices": [
      {
        "title": "Calcular margem e limitar duração",
        "cost": 180,
        "sales": 2460,
        "expenses": 1050,
        "rep": 7,
        "lesson": "Promoções precisam considerar margem de contribuição.",
        "story": "O pacote aumenta o ticket médio sem comprometer o resultado."
      },
      {
        "title": "Dar 70% de desconto sem analisar custos",
        "cost": 3200,
        "sales": 850,
        "expenses": 1120,
        "rep": -8,
        "lesson": "Promoções precisam considerar margem de contribuição.",
        "story": "A oferta fica popular, mas gera perda por venda."
      },
      {
        "title": "Nunca testar nenhum pacote",
        "cost": 400,
        "sales": 930,
        "expenses": 1070,
        "rep": -5,
        "lesson": "Promoções precisam considerar margem de contribuição.",
        "story": "A concorrência testa ofertas enquanto a Aurora fica parada."
      }
    ]
  },
  {
    "title": "O freezer parou",
    "type": "Crises",
    "scene": "Às seis da manhã, o freezer falha. Há alimentos que podem ter sido afetados e pedidos agendados para hoje.",
    "choices": [
      {
        "title": "Descartar produtos inseguros e ajustar cardápio",
        "cost": 245,
        "sales": 2650,
        "expenses": 1150,
        "rep": 8,
        "lesson": "Segurança alimentar deve prevalecer sobre ganhos imediatos.",
        "story": "Você protege clientes e comunica a mudança com transparência."
      },
      {
        "title": "Vender mesmo sem saber se estão seguros",
        "cost": 3650,
        "sales": 940,
        "expenses": 1240,
        "rep": -9,
        "lesson": "Segurança alimentar deve prevalecer sobre ganhos imediatos.",
        "story": "Clientes passam mal na narrativa e a reputação despenca."
      },
      {
        "title": "Comprar equipamento caro sem orçamento",
        "cost": 700,
        "sales": 1050,
        "expenses": 1240,
        "rep": -6,
        "lesson": "Segurança alimentar deve prevalecer sobre ganhos imediatos.",
        "story": "O equipamento novo funciona, mas o caixa fica perigosamente baixo."
      }
    ]
  },
  {
    "title": "O domingo das contas",
    "type": "Planejamento",
    "scene": "O movimento cresceu, mas ninguém consegue explicar quais produtos realmente dão lucro. É hora de analisar o mix de vendas.",
    "choices": [
      {
        "title": "Comparar margem e volume de cada produto",
        "cost": 310,
        "sales": 1700,
        "expenses": 850,
        "rep": 6,
        "lesson": "Mix de produtos deve ser avaliado pela contribuição ao resultado.",
        "story": "Você ajusta o cardápio e melhora o resultado total."
      },
      {
        "title": "Olhar só os itens mais vendidos",
        "cost": 2300,
        "sales": 1030,
        "expenses": 1000,
        "rep": -6,
        "lesson": "Mix de produtos deve ser avaliado pela contribuição ao resultado.",
        "story": "Itens populares escondem custos altos e reduzem o lucro."
      },
      {
        "title": "Retirar os itens de menor preço sem analisar",
        "cost": 100,
        "sales": 690,
        "expenses": 900,
        "rep": -4,
        "lesson": "Mix de produtos deve ser avaliado pela contribuição ao resultado.",
        "story": "Alguns itens baratos eram rentáveis e clientes ficam insatisfeitos."
      }
    ]
  },
  {
    "title": "O cliente corporativo",
    "type": "Negociação",
    "scene": "Uma empresa quer 100 cafés por semana, mas exige preço menor, entrega pontual e nota fiscal.",
    "choices": [
      {
        "title": "Calcular capacidade e negociar contrato viável",
        "cost": 375,
        "sales": 1890,
        "expenses": 950,
        "rep": 7,
        "lesson": "Contratos grandes exigem análise de margem e execução.",
        "story": "Você assina um acordo que considera capacidade, custo e prazo."
      },
      {
        "title": "Aceitar preço que não paga custos",
        "cost": 2750,
        "sales": 1120,
        "expenses": 1120,
        "rep": -7,
        "lesson": "Contratos grandes exigem análise de margem e execução.",
        "story": "A demanda cresce, mas o contrato gera prejuízo recorrente."
      },
      {
        "title": "Recusar antes de conhecer os detalhes",
        "cost": 400,
        "sales": 810,
        "expenses": 1070,
        "rep": -5,
        "lesson": "Contratos grandes exigem análise de margem e execução.",
        "story": "A Aurora perde uma fonte potencial de receita estável."
      }
    ]
  },
  {
    "title": "Mudança no aluguel",
    "type": "Risco",
    "scene": "A proprietária do imóvel anuncia reajuste para a renovação do contrato. Você tem dois meses para se preparar.",
    "choices": [
      {
        "title": "Projetar cenários e negociar com antecedência",
        "cost": 440,
        "sales": 2080,
        "expenses": 1050,
        "rep": 8,
        "lesson": "Antecipação permite negociar riscos e custos fixos.",
        "story": "A negociação oferece prazo e permite ajustar o orçamento."
      },
      {
        "title": "Assinar qualquer valor sem fazer contas",
        "cost": 3200,
        "sales": 1210,
        "expenses": 1240,
        "rep": -8,
        "lesson": "Antecipação permite negociar riscos e custos fixos.",
        "story": "O aluguel passa a comprometer parte excessiva da receita."
      },
      {
        "title": "Ignorar o aviso até o vencimento",
        "cost": 700,
        "sales": 930,
        "expenses": 1240,
        "rep": -6,
        "lesson": "Antecipação permite negociar riscos e custos fixos.",
        "story": "A falta de planejamento torna a renovação mais difícil."
      }
    ]
  },
  {
    "title": "A mensagem viral",
    "type": "Reputação",
    "scene": "Um vídeo mostra uma fila longa na Aurora, mas sugere que a loja não respeita clientes. O vídeo viralizou no bairro.",
    "choices": [
      {
        "title": "Reconhecer espera e explicar melhorias concretas",
        "cost": 180,
        "sales": 2270,
        "expenses": 1150,
        "rep": 6,
        "lesson": "Comunicação transparente e correções reais constroem confiança.",
        "story": "O público percebe a resposta e a fila passa a andar melhor."
      },
      {
        "title": "Atacar publicamente quem postou",
        "cost": 3650,
        "sales": 850,
        "expenses": 1000,
        "rep": -9,
        "lesson": "Comunicação transparente e correções reais constroem confiança.",
        "story": "A discussão cresce e afasta clientes."
      },
      {
        "title": "Comprar avaliações positivas falsas",
        "cost": 100,
        "sales": 1050,
        "expenses": 900,
        "rep": -4,
        "lesson": "Comunicação transparente e correções reais constroem confiança.",
        "story": "O esquema é descoberto e a confiança desaba."
      }
    ]
  },
  {
    "title": "A planilha de Teresa",
    "type": "Indicadores",
    "scene": "Teresa propõe revisar semanalmente quatro números: faturamento, margem, desperdício e clientes recorrentes.",
    "choices": [
      {
        "title": "Criar painel pequeno com indicadores úteis",
        "cost": 245,
        "sales": 2460,
        "expenses": 850,
        "rep": 7,
        "lesson": "Poucos indicadores bem utilizados ajudam mais que dados sem ação.",
        "story": "O painel mostra perdas cedo e facilita decisões."
      },
      {
        "title": "Medir dezenas de números sem rotina",
        "cost": 2300,
        "sales": 940,
        "expenses": 1120,
        "rep": -6,
        "lesson": "Poucos indicadores bem utilizados ajudam mais que dados sem ação.",
        "story": "A equipe gasta tempo registrando métricas sem agir."
      },
      {
        "title": "Evitar números para confiar na intuição",
        "cost": 400,
        "sales": 690,
        "expenses": 1070,
        "rep": -5,
        "lesson": "Poucos indicadores bem utilizados ajudam mais que dados sem ação.",
        "story": "Problemas só aparecem quando o caixa já caiu."
      }
    ]
  },
  {
    "title": "Hora da entrega",
    "type": "Canais de venda",
    "scene": "Um aplicativo de entregas oferece novos clientes, mas cobra comissão sobre cada pedido.",
    "choices": [
      {
        "title": "Testar delivery com preço e embalagem calculados",
        "cost": 310,
        "sales": 2650,
        "expenses": 950,
        "rep": 8,
        "lesson": "Cada canal tem custos e margens próprios.",
        "story": "O canal adicional funciona nos produtos com margem adequada."
      },
      {
        "title": "Cobrar o mesmo valor sem contar taxas",
        "cost": 2750,
        "sales": 1030,
        "expenses": 1240,
        "rep": -7,
        "lesson": "Cada canal tem custos e margens próprios.",
        "story": "As comissões consomem o ganho esperado."
      },
      {
        "title": "Parar de atender presencialmente",
        "cost": 700,
        "sales": 810,
        "expenses": 1240,
        "rep": -6,
        "lesson": "Cada canal tem custos e margens próprios.",
        "story": "Clientes antigos ficam frustrados com a mudança brusca."
      }
    ]
  },
  {
    "title": "O feriado prolongado",
    "type": "Demanda",
    "scene": "Haverá um feriado de quatro dias. A região pode ficar vazia ou receber visitantes, e você precisa comprar insumos.",
    "choices": [
      {
        "title": "Usar histórico e montar estoque flexível",
        "cost": 375,
        "sales": 1700,
        "expenses": 1050,
        "rep": 6,
        "lesson": "Previsões devem considerar cenários e margens de erro.",
        "story": "Você ajusta pedidos conforme sinais de demanda e evita perdas."
      },
      {
        "title": "Dobrar compras por impulso",
        "cost": 3200,
        "sales": 1120,
        "expenses": 1000,
        "rep": -8,
        "lesson": "Previsões devem considerar cenários e margens de erro.",
        "story": "Parte dos produtos vence depois do movimento menor que o esperado."
      },
      {
        "title": "Fechar sem avaliar oportunidade",
        "cost": 100,
        "sales": 930,
        "expenses": 900,
        "rep": -4,
        "lesson": "Previsões devem considerar cenários e margens de erro.",
        "story": "Turistas encontram a cafeteria fechada e vão a concorrentes."
      }
    ]
  },
  {
    "title": "Caio pede aumento",
    "type": "Pessoas",
    "scene": "Caio agora é um dos funcionários mais experientes e pede aumento. O caixa permite ajustes modestos, mas não promessas ilimitadas.",
    "choices": [
      {
        "title": "Avaliar desempenho e negociar plano viável",
        "cost": 440,
        "sales": 1890,
        "expenses": 1150,
        "rep": 7,
        "lesson": "Gestão de pessoas exige respeito e sustentabilidade financeira.",
        "story": "Caio entende os critérios e ajuda a melhorar processos."
      },
      {
        "title": "Prometer valor que não cabe no orçamento",
        "cost": 3650,
        "sales": 1210,
        "expenses": 1120,
        "rep": -9,
        "lesson": "Gestão de pessoas exige respeito e sustentabilidade financeira.",
        "story": "A folha aumenta mais que as receitas."
      },
      {
        "title": "Recusar e humilhar Caio na frente de todos",
        "cost": 400,
        "sales": 1050,
        "expenses": 1070,
        "rep": -5,
        "lesson": "Gestão de pessoas exige respeito e sustentabilidade financeira.",
        "story": "A equipe perde confiança na liderança."
      }
    ]
  },
  {
    "title": "Uma nova máquina",
    "type": "Investimento",
    "scene": "Uma máquina automatizada promete acelerar pedidos. O fabricante oferece financiamento e apresenta números otimistas.",
    "choices": [
      {
        "title": "Calcular retorno e testar capacidade",
        "cost": 180,
        "sales": 2080,
        "expenses": 850,
        "rep": 8,
        "lesson": "Investimentos devem ser avaliados pelo retorno esperado e pelo risco.",
        "story": "Você descobre quando o investimento realmente se paga."
      },
      {
        "title": "Financiar sem conferir os números",
        "cost": 2300,
        "sales": 850,
        "expenses": 1240,
        "rep": -6,
        "lesson": "Investimentos devem ser avaliados pelo retorno esperado e pelo risco.",
        "story": "As parcelas pressionam o caixa antes de a máquina gerar retorno."
      },
      {
        "title": "Rejeitar toda tecnologia automaticamente",
        "cost": 700,
        "sales": 690,
        "expenses": 1240,
        "rep": -6,
        "lesson": "Investimentos devem ser avaliados pelo retorno esperado e pelo risco.",
        "story": "O tempo de espera continua alto e limita o crescimento."
      }
    ]
  },
  {
    "title": "O estoque de inverno",
    "type": "Estoque",
    "scene": "Uma frente fria aumenta a procura por bebidas quentes. O estoque de chocolate e café precisa acompanhar a mudança.",
    "choices": [
      {
        "title": "Repor gradualmente e acompanhar vendas",
        "cost": 245,
        "sales": 2270,
        "expenses": 950,
        "rep": 6,
        "lesson": "Compras devem responder a dados e à sazonalidade.",
        "story": "A Aurora aproveita o clima e evita desperdício."
      },
      {
        "title": "Comprar estoque para seis meses",
        "cost": 2750,
        "sales": 940,
        "expenses": 1000,
        "rep": -7,
        "lesson": "Compras devem responder a dados e à sazonalidade.",
        "story": "A previsão exagerada deixa produtos parados por meses."
      },
      {
        "title": "Manter cardápio igual e ignorar a demanda",
        "cost": 100,
        "sales": 810,
        "expenses": 900,
        "rep": -4,
        "lesson": "Compras devem responder a dados e à sazonalidade.",
        "story": "Clientes procuram outras lojas com opções para o frio."
      }
    ]
  },
  {
    "title": "O erro no pedido grande",
    "type": "Atendimento",
    "scene": "A encomenda corporativa saiu incompleta. O cliente precisa de uma resposta antes da reunião começar.",
    "choices": [
      {
        "title": "Assumir falha e entregar correção possível",
        "cost": 310,
        "sales": 2460,
        "expenses": 1050,
        "rep": 7,
        "lesson": "Recuperação de serviço exige responsabilidade e agilidade.",
        "story": "O cliente aprecia a rapidez e mantém a parceria."
      },
      {
        "title": "Culpar a equipe sem falar com o cliente",
        "cost": 3200,
        "sales": 1030,
        "expenses": 1120,
        "rep": -8,
        "lesson": "Recuperação de serviço exige responsabilidade e agilidade.",
        "story": "A equipe fica ressentida e o cliente sem solução."
      },
      {
        "title": "Esconder o problema até alguém reclamar",
        "cost": 400,
        "sales": 930,
        "expenses": 1070,
        "rep": -5,
        "lesson": "Recuperação de serviço exige responsabilidade e agilidade.",
        "story": "O atraso na comunicação agrava a perda de confiança."
      }
    ]
  },
  {
    "title": "A escolha da filial",
    "type": "Expansão",
    "scene": "O corretor oferece um ponto no centro com alto fluxo, mas exige caução e aluguel elevados.",
    "choices": [
      {
        "title": "Validar demanda e simular cenários antes",
        "cost": 375,
        "sales": 2650,
        "expenses": 1150,
        "rep": 8,
        "lesson": "Antes de expandir, teste demanda e capital necessário.",
        "story": "A Aurora aprende sobre o local antes de assumir custos."
      },
      {
        "title": "Assinar imediatamente por medo de perder",
        "cost": 3650,
        "sales": 1120,
        "expenses": 1240,
        "rep": -9,
        "lesson": "Antes de expandir, teste demanda e capital necessário.",
        "story": "O contrato compromete o caixa e a margem de segurança."
      },
      {
        "title": "Abrir filial sem capital de giro",
        "cost": 700,
        "sales": 1050,
        "expenses": 1240,
        "rep": -6,
        "lesson": "Antes de expandir, teste demanda e capital necessário.",
        "story": "A nova unidade abre sem recursos para o primeiro trimestre."
      }
    ]
  },
  {
    "title": "O programa de fidelidade",
    "type": "Retenção",
    "scene": "Dona Lúcia sugere um cartão de pontos para incentivar a volta dos clientes. A equipe tem receio de dar descontos demais.",
    "choices": [
      {
        "title": "Criar benefício sustentável e medir retorno",
        "cost": 440,
        "sales": 1700,
        "expenses": 850,
        "rep": 6,
        "lesson": "Fidelização deve gerar valor sem eliminar margem.",
        "story": "Clientes voltam com frequência e a margem permanece saudável."
      },
      {
        "title": "Dar café grátis a cada compra",
        "cost": 2300,
        "sales": 1210,
        "expenses": 1000,
        "rep": -6,
        "lesson": "Fidelização deve gerar valor sem eliminar margem.",
        "story": "A promoção compromete os custos de atendimento."
      },
      {
        "title": "Ignorar clientes recorrentes",
        "cost": 100,
        "sales": 690,
        "expenses": 900,
        "rep": -4,
        "lesson": "Fidelização deve gerar valor sem eliminar margem.",
        "story": "Alguns clientes fiéis mudam para a cafeteria rival."
      }
    ]
  },
  {
    "title": "O mês do imposto",
    "type": "Conformidade",
    "scene": "As obrigações fiscais se aproximam. Você percebe que misturou comprovantes pessoais e empresariais.",
    "choices": [
      {
        "title": "Organizar documentos e buscar orientação contábil",
        "cost": 180,
        "sales": 1890,
        "expenses": 950,
        "rep": 7,
        "lesson": "Conformidade e documentação são partes da gestão responsável.",
        "story": "Você regulariza os registros e evita surpresas."
      },
      {
        "title": "Não registrar vendas para reduzir tributos",
        "cost": 2750,
        "sales": 850,
        "expenses": 1120,
        "rep": -7,
        "lesson": "Conformidade e documentação são partes da gestão responsável.",
        "story": "A conduta irregular cria riscos legais e financeiros."
      },
      {
        "title": "Deixar tudo para depois do prazo",
        "cost": 400,
        "sales": 810,
        "expenses": 1070,
        "rep": -5,
        "lesson": "Conformidade e documentação são partes da gestão responsável.",
        "story": "Juros, multas e retrabalho pesam no orçamento."
      }
    ]
  },
  {
    "title": "A equipe está cansada",
    "type": "Liderança",
    "scene": "Depois de meses intensos, surgem erros e faltas. Caio conta que a escala ficou desgastante.",
    "choices": [
      {
        "title": "Reorganizar turnos e ouvir a equipe",
        "cost": 245,
        "sales": 2080,
        "expenses": 1050,
        "rep": 8,
        "lesson": "Bem-estar e processos sustentáveis apoiam produtividade.",
        "story": "O ambiente melhora e os erros diminuem."
      },
      {
        "title": "Exigir horas extras indefinidamente",
        "cost": 3200,
        "sales": 940,
        "expenses": 1240,
        "rep": -8,
        "lesson": "Bem-estar e processos sustentáveis apoiam produtividade.",
        "story": "A rotatividade aumenta e a loja perde experiência."
      },
      {
        "title": "Premiar só a velocidade, sem qualidade",
        "cost": 700,
        "sales": 930,
        "expenses": 1240,
        "rep": -6,
        "lesson": "Bem-estar e processos sustentáveis apoiam produtividade.",
        "story": "Pedidos saem rápidos, mas as falhas afastam consumidores."
      }
    ]
  },
  {
    "title": "O investidor misterioso",
    "type": "Financiamento",
    "scene": "Um investidor oferece recursos para abrir duas lojas, mas quer participação elevada e controle sobre decisões importantes.",
    "choices": [
      {
        "title": "Analisar termos e comparar alternativas",
        "cost": 310,
        "sales": 2270,
        "expenses": 1150,
        "rep": 6,
        "lesson": "Capital externo tem preço, condições e impactos na governança.",
        "story": "Você negocia com clareza sobre controle e retorno."
      },
      {
        "title": "Assinar sem ler o acordo",
        "cost": 3650,
        "sales": 1030,
        "expenses": 1000,
        "rep": -9,
        "lesson": "Capital externo tem preço, condições e impactos na governança.",
        "story": "O capital entra, mas você perde autonomia sobre a operação."
      },
      {
        "title": "Rejeitar sem considerar cenário algum",
        "cost": 100,
        "sales": 1050,
        "expenses": 900,
        "rep": -4,
        "lesson": "Capital externo tem preço, condições e impactos na governança.",
        "story": "A oportunidade pode ser boa, mas fica sem análise."
      }
    ]
  },
  {
    "title": "O relatório anual",
    "type": "Análise",
    "scene": "Chegou o fim do ano. Você precisa descobrir se houve crescimento saudável ou só mais movimentação.",
    "choices": [
      {
        "title": "Comparar lucro, caixa, clientes e custos",
        "cost": 375,
        "sales": 2460,
        "expenses": 850,
        "rep": 7,
        "lesson": "Empresas precisam avaliar resultado, liquidez e qualidade do crescimento.",
        "story": "O relatório revela avanços e pontos que ainda precisam melhorar."
      },
      {
        "title": "Avaliar sucesso apenas pelo faturamento",
        "cost": 2300,
        "sales": 1120,
        "expenses": 1120,
        "rep": -6,
        "lesson": "Empresas precisam avaliar resultado, liquidez e qualidade do crescimento.",
        "story": "Você confunde volume de vendas com sustentabilidade."
      },
      {
        "title": "Comemorar sem revisar resultados",
        "cost": 400,
        "sales": 690,
        "expenses": 1070,
        "rep": -5,
        "lesson": "Empresas precisam avaliar resultado, liquidez e qualidade do crescimento.",
        "story": "Problemas permanecem escondidos até o próximo ciclo."
      }
    ]
  },
  {
    "title": "A grande decisão",
    "type": "Estratégia",
    "scene": "A Aurora chegou a uma encruzilhada: crescer com cuidado, apostar tudo em expansão ou manter operações sem melhorias.",
    "choices": [
      {
        "title": "Consolidar operação lucrativa e expansão gradual",
        "cost": 440,
        "sales": 2650,
        "expenses": 950,
        "rep": 8,
        "lesson": "Uma estratégia deve conectar recursos disponíveis a objetivos reais.",
        "story": "A Aurora fortalece sua base e prepara um futuro sustentável."
      },
      {
        "title": "Abrir três filiais com dívida elevada",
        "cost": 2750,
        "sales": 1210,
        "expenses": 1240,
        "rep": -7,
        "lesson": "Uma estratégia deve conectar recursos disponíveis a objetivos reais.",
        "story": "Os custos fixos crescem mais rápido que as receitas."
      },
      {
        "title": "Parar de investir em melhoria e atendimento",
        "cost": 700,
        "sales": 810,
        "expenses": 1240,
        "rep": -6,
        "lesson": "Uma estratégia deve conectar recursos disponíveis a objetivos reais.",
        "story": "O negócio sobrevive, mas perde competitividade aos poucos."
      }
    ]
  },
  {
    "title": "O destino da Aurora",
    "type": "Conclusão",
    "scene": "Dona Lúcia, Caio e Teresa se reúnem para celebrar o aniversário da cafeteria. O futuro depende do histórico de suas escolhas.",
    "choices": [
      {
        "title": "Reinvestir parte do lucro e guardar reserva",
        "cost": 180,
        "sales": 1700,
        "expenses": 1050,
        "rep": 6,
        "lesson": "Lucro sustentável requer disciplina também nos bons momentos.",
        "story": "Você comemora preservando recursos para o próximo ciclo."
      },
      {
        "title": "Retirar todo o caixa como recompensa",
        "cost": 3200,
        "sales": 850,
        "expenses": 1000,
        "rep": -8,
        "lesson": "Lucro sustentável requer disciplina também nos bons momentos.",
        "story": "A empresa fica vulnerável a qualquer imprevisto."
      },
      {
        "title": "Fazer uma festa caríssima financiada",
        "cost": 100,
        "sales": 930,
        "expenses": 900,
        "rep": -4,
        "lesson": "Lucro sustentável requer disciplina também nos bons momentos.",
        "story": "A dívida transforma a comemoração em preocupação."
      }
    ]
  }
]];
