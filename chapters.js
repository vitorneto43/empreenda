'use strict';
// Banco de situações autorais parametrizáveis. Cada temporada possui 100 posições,
// mas nesta beta os 25 temas retornam em 4 ciclos com números e contexto diferentes.
const THEMES=[
 ['A reserva de emergência','Uma despesa não planejada ameaça o capital de giro.','Finanças'],
 ['O preço praticado','Clientes comparam os preços de {product} com os concorrentes.','Precificação'],
 ['Uma proposta de fornecimento','A {supplier} oferece desconto por volume em {stock}.','Compras'],
 ['A reclamação pública','Um dos {client} relatou um problema e outros estão acompanhando.','Atendimento'],
 ['Campanha publicitária','Surge oportunidade de divulgar {product}, mas o retorno é incerto.','Marketing'],
 ['Vencimentos desencontrados','Os pagamentos vencem antes do recebimento de parte das vendas.','Caixa'],
 ['Reforço da equipe','O aumento da demanda está sobrecarregando {team}.','Pessoas'],
 ['A expansão tentadora','Um novo ponto ou canal de vendas fica disponível.','Expansão'],
 ['Queda na demanda','As vendas de {product} caem sem aviso.','Demanda'],
 ['Falha do fornecedor','A {supplier} comunica um atraso importante.','Fornecedores'],
 ['A proposta de um investidor','Um investidor quer participação na empresa em troca de recursos.','Capital'],
 ['Controle de qualidade','Uma auditoria aponta retrabalho e desperdício envolvendo {stock}.','Qualidade'],
 ['O concorrente agressivo','Um concorrente lança promoção difícil de acompanhar.','Concorrência'],
 ['A parceria inesperada','Outra empresa propõe compartilhar custos e clientes.','Parcerias'],
 ['Negociação de aluguel','O contrato do imóvel ou instalação será reajustado.','Custos'],
 ['Pedido grande demais','Um cliente quer comprar muito, com desconto e prazo longo.','Negociação'],
 ['A equipe insatisfeita','Integrantes da equipe pedem mudanças nas condições de trabalho.','Gestão de pessoas'],
 ['Problema de operação','Uma falha operacional afeta a entrega de {product}.','Operações'],
 ['Renovar equipamentos','Máquinas e sistemas estão ficando obsoletos.','Investimentos'],
 ['Novos canais digitais','Você avalia oferecer {product} por um canal online.','Digital'],
 ['Uma fiscalização','É necessário revisar registros e obrigações aplicáveis à operação.','Conformidade'],
 ['Mudança no comportamento do cliente','Os {client} passaram a exigir mais rapidez e informação.','Pesquisa'],
 ['A negociação com o banco','Uma linha de crédito está disponível, mas tem custos.','Crédito'],
 ['Reinvestir ou distribuir','Há recursos em caixa e pressões por retiradas.','Estratégia'],
 ['Fechamento do trimestre','Você precisa escolher prioridades para o próximo período.','Planejamento'],

 ['O pedido antecipado','Um cliente quer reservar {product}, mas oferece sinal menor do que o necessário.','Contratos'],
 ['O dia de chuva','Uma semana de chuva altera o fluxo esperado de {client}.','Demanda'],
 ['A conta de energia','A conta de energia subiu e pressiona o custo de operação.','Custos'],
 ['A compra coletiva','Empresas vizinhas sugerem comprar {stock} em conjunto.','Compras'],
 ['O produto encalhado','Parte de {stock} permanece sem saída e ocupa capacidade.','Estoque'],
 ['O treinamento','Um curso pode melhorar o desempenho de {team}, mas exige horas de trabalho.','Pessoas'],
 ['A avaria inesperada','Um equipamento essencial falha no pior momento do mês.','Manutenção'],
 ['O contrato anual','Um comprador propõe um contrato de um ano com preços fixos.','Contratos'],
 ['O cliente influente','Um criador de conteúdo oferece divulgação em troca de benefícios.','Marketing'],
 ['Mudança de fornecedor','Um novo fornecedor apresenta preço menor, sem histórico comprovado.','Fornecedores'],
 ['Venda a prazo','Um cliente importante quer prazo superior ao praticado no negócio.','Crédito'],
 ['A falta de troco','Pequenos problemas no atendimento se acumulam em horários de pico.','Atendimento'],
 ['Desconto por fidelidade','Clientes frequentes pedem vantagens exclusivas.','Fidelização'],
 ['Tecnologia no caixa','Um software promete reduzir erros de registro e conciliação.','Sistemas'],
 ['As metas da equipe','As metas atuais estimulam volume, mas podem prejudicar qualidade.','Pessoas'],
 ['O estoque de segurança','A equipe quer manter reserva adicional de {stock}.','Estoque'],
 ['A compra de última hora','Uma demanda súbita exige recompor {stock} a preço maior.','Compras'],
 ['A proposta do shopping','Surge um espaço com alto movimento e aluguel elevado.','Expansão'],
 ['Feriado prolongado','Um feriado altera custos e o comportamento de {client}.','Planejamento'],
 ['O erro no pedido','A equipe registrou incorretamente um pedido relevante.','Qualidade'],
 ['Os indicadores atrasados','Você percebe que os dados de vendas estão sendo fechados com atraso.','Dados'],
 ['A queixa recorrente','Diversos clientes mencionam o mesmo ponto fraco do serviço.','Atendimento'],
 ['O concorrente fechou','Uma empresa vizinha fecha as portas e deixa parte do mercado disponível.','Concorrência'],
 ['A entrega devolvida','Uma entrega retorna por falha na conferência.','Logística'],
 ['A pesquisa de satisfação','Você pode entrevistar clientes, mas parte da equipe teme críticas.','Pesquisa'],
 ['O contrato de manutenção','Uma empresa oferece manutenção preventiva por assinatura.','Manutenção'],
 ['A nova embalagem','Uma embalagem diferenciada pode valorizar {product} e elevar custos.','Produto'],
 ['O comprador exigente','Um comprador quer qualidade comprovada e preço baixo.','Negociação'],
 ['A folga no orçamento','O mês foi melhor que o previsto e sobrou recurso para alocar.','Planejamento'],
 ['A reunião adiada','Uma negociação foi adiada e isso pode afetar o calendário de recebimentos.','Caixa'],
 ['A publicidade local','Um veículo local oferece campanha de alcance limitado e preço definido.','Marketing'],
 ['O novo concorrente digital','Uma operação online passa a atender parte dos seus {client}.','Concorrência'],
 ['O sistema fora do ar','Um sistema usado na operação está indisponível e afeta pedidos.','Continuidade'],
 ['A devolução em massa','Um lote apresenta defeitos e ameaça o relacionamento com clientes.','Qualidade'],
 ['O funcionário experiente','Um profissional-chave recebeu uma oferta de outra empresa.','Pessoas'],
 ['Excesso de turnos','A equipe relata desgaste com uma sequência de jornadas intensas.','Pessoas'],
 ['A negociação de tarifas','O provedor de pagamentos oferece um novo contrato de tarifas.','Financeiro'],
 ['O mix de produtos','Alguns produtos vendem muito, mas contribuem pouco para o resultado.','Portfólio'],
 ['Mercado sazonal','O setor se aproxima de sua temporada de menor movimento.','Sazonalidade'],
 ['O contrato informal','Um parceiro sugere iniciar a operação sem formalizar condições.','Governança'],
 ['A parceria com escolas','Uma instituição da região propõe atender seus alunos e funcionários.','Parcerias'],
 ['A mudança na legislação','Uma nova obrigação exige revisar procedimentos com apoio especializado.','Conformidade'],
 ['O custo do desperdício','Sobras e perdas estão acima dos níveis esperados.','Eficiência'],
 ['O caixa do fim do mês','Recebimentos importantes estão previstos somente para o próximo mês.','Caixa'],
 ['O novo gerente','É possível delegar parte das decisões para profissional contratado.','Gestão'],
 ['Troca de endereço','A vizinhança mudou e um novo endereço começa a parecer atraente.','Localização'],
 ['O investimento em marca','Uma agência sugere renovar nome, fachada e identidade da empresa.','Marketing'],
 ['Mercadoria em consignação','Um parceiro oferece {stock} para pagamento somente após a venda.','Estoque'],
 ['O cliente inadimplente','Um comprador atrasou um pagamento que você contava receber.','Cobrança'],
 ['A escolha do financiamento','Duas opções de capital apresentam prazos e garantias diferentes.','Crédito'],
 ['O grupo de compras','Empreendedores da região oferecem acesso a novos distribuidores.','Parcerias'],
 ['Demanda acima do limite','Os pedidos ultrapassam a capacidade atual de {team}.','Capacidade'],
 ['A oferta de exclusividade','Um fornecedor exige exclusividade em troca de melhores preços.','Estratégia'],
 ['O bônus por produtividade','A equipe solicita participação nos resultados.','Pessoas'],
 ['O balanço do semestre','Receitas cresceram, mas o caixa não acompanhou o crescimento.','Financeiro'],
 ['A auditoria surpresa','Registros e notas fiscais precisam estar prontos para verificação.','Conformidade'],
 ['O programa de indicação','Clientes satisfeitos podem indicar novos compradores por recompensa.','Aquisição'],
 ['A ameaça de fraude','Uma transação suspeita chama atenção e pode gerar prejuízo.','Risco'],
 ['A máquina de segunda mão','Um equipamento usado custa menos, mas sua vida útil é incerta.','Investimento'],
 ['O aumento de matéria-prima','A alta de preços afeta diretamente a margem dos produtos.','Custos'],
 ['Venda cruzada','Você identifica uma oportunidade de oferecer produtos complementares.','Vendas'],
 ['A divergência no inventário','O saldo físico de {stock} não corresponde ao sistema.','Controle'],
 ['O atendimento por mensagem','Clientes pedem respostas mais rápidas em canais digitais.','Atendimento'],
 ['O grande evento','Um evento da cidade poderá gerar procura extraordinária.','Demanda'],
 ['Parceria com influenciador','Um influenciador de nicho oferece conteúdo patrocinado.','Marketing'],
 ['A oportunidade B2B','Uma empresa oferece compras regulares com margem mais baixa.','Negociação'],
 ['O novo turno','Um segundo turno pode atender demanda reprimida, mas eleva custos fixos.','Capacidade'],
 ['Falha de segurança','Um incidente obriga a revisar procedimentos e controles.','Risco'],
 ['A renegociação da dívida','É possível parcelar um compromisso, mas com encargos adicionais.','Dívida'],
 ['A cultura da empresa','Você percebe que a equipe desconhece as prioridades do negócio.','Liderança'],
 ['O teste com produto novo','Uma ideia de novo produto chama atenção, mas não foi validada.','Inovação'],
 ['A mudança de público','Um novo segmento demonstra interesse por {product}.','Mercado'],
 ['O fechamento anual','Os resultados exigem decidir entre expansão, consolidação e reservas.','Estratégia'],
 ['Os números não batem','A conciliação revela diferenças entre vendas registradas e recebidas.','Controles'],
 ['A sucessão do fornecedor','A empresa que fornece insumos essenciais mudou de gestão.','Fornecedores']
];
// Em vez de cinco respostas universais, cada contexto usa verbos e soluções próprias.
// IDs mantidos por perfil de risco para compatibilidade com finance.js.
const DECISION_BANK={
 'Finanças':['Recalcular o fluxo de caixa e adiar os gastos opcionais','Usar a reserva disponível para resolver o problema já','Negociar vencimentos e reservar recursos para obrigações','Promover vendas com desconto para acelerar entradas','Reduzir despesas sem cortar atividades essenciais'],
 'Precificação':['Testar novo preço em uma pequena amostra de clientes','Reduzir preço agressivamente para tentar ganhar mercado','Renegociar custos antes de alterar a tabela','Oferecer combos com margem calculada e prazo definido','Manter preço e destacar qualidade e valor percebido'],
 'Compras':['Comprar lote piloto para medir qualidade e giro','Comprar o volume máximo para aproveitar o desconto','Negociar lotes e entregas menores com o fornecedor','Antecipar compras e oferecer promoções para girar estoque','Comprar apenas o necessário e manter caixa reservado'],
 'Atendimento':['Investigar o ocorrido e testar uma correção pontual','Prometer compensações amplas sem estimar os custos','Negociar solução individual e registrar o caso','Oferecer descontos aos clientes afetados com prazo definido','Corrigir o processo e comunicar prazos transparentes'],
 'Marketing':['Testar campanha pequena com métrica de conversão','Investir pesado em anúncios para acelerar alcance','Negociar pagamento por resultado e metas claras','Dar descontos patrocinados para estimular volume','Fortalecer atendimento e indicações antes de escalar anúncios'],
 'Pessoas':['Treinar a equipe atual e medir o ganho de produtividade','Contratar imediatamente vários profissionais','Contratar uma pessoa em etapas e acompanhar resultados','Oferecer bônus por metas objetivas de curto prazo','Reorganizar escalas e preservar o clima da equipe'],
 'Crédito':['Projetar prestações e testar alternativa sem nova dívida','Aceitar o financiamento maior para acelerar o plano','Negociar juros, garantias e valor menor de crédito','Usar a linha disponível para promover vendas imediatas','Amortizar compromissos existentes e preservar liquidez'],
 'Expansão':['Testar a demanda no novo mercado antes de abrir unidade','Abrir a unidade completa para capturar o mercado','Negociar locação flexível e expansão por etapas','Financiar inauguração com descontos para atrair fluxo','Fortalecer a unidade atual e expandir quando houver reserva'],
 'Qualidade':['Inspecionar amostra e rastrear a origem da falha','Substituir todo o lote imediatamente, sem diagnóstico','Negociar correção com fornecedor e controlar entregas','Oferecer descontos para escoar estoque seguro e aprovado','Suspender temporariamente o item afetado e corrigir processos'],
 'Estoque':['Auditar uma amostra e calcular o giro real','Comprar mais mercadoria para evitar falta futura','Negociar reposições menores e frequentes','Realizar promoção planejada de itens com baixo giro','Reorganizar inventário e definir estoque mínimo'],
 'Fornecedores':['Homologar fornecedor alternativo em lote de teste','Trocar de fornecedor imediatamente pelo menor preço','Negociar entregas fracionadas e cláusulas de atraso','Repassar parte do impacto ao preço com cautela','Manter fornecedor atual e formar estoque de contingência'],
 'Caixa':['Atualizar projeção diária de entradas e saídas','Usar todo o saldo para cobrir as despesas imediatas','Renegociar datas de pagamento e recebimento','Oferecer incentivo limitado para antecipação de vendas','Rever custos recorrentes e manter uma reserva mínima'],
 'Risco':['Fazer análise de impacto e iniciar piloto controlado','Assumir o risco para aproveitar a oportunidade agora','Negociar garantias e condições antes de avançar','Aplicar desconto para compensar o risco comercial','Priorizar controles internos e plano de contingência'],
 'Contratos':['Fazer contrato-piloto com escopo e prazo limitados','Aceitar integralmente para ganhar o cliente','Renegociar prazos, garantias e pagamento','Propor desconto por volume com contrapartidas claras','Recusar até comprovar capacidade e rentabilidade'],
 'Concorrência':['Pesquisar diferenciais dos concorrentes e testar resposta','Cortar preços em toda a loja imediatamente','Negociar custos para competir sem eliminar margem','Criar promoção limitada para produtos estratégicos','Focar fidelização e atendimento em clientes existentes'],
 'Investimentos':['Testar aluguel ou uso compartilhado antes de comprar','Comprar o equipamento completo imediatamente','Negociar financiamento e entrega por etapas','Comprar e compensar o custo com campanha de volume','Priorizar manutenção dos recursos atuais até ter reserva'],
 'Manutenção':['Fazer diagnóstico e manutenção preventiva direcionada','Substituir imediatamente todos os equipamentos','Negociar reparo com garantia e pagamento parcelado','Aumentar volume de vendas para pagar equipamento novo','Criar plano de contingência e manter peças críticas'],
 'Planejamento':['Revisar indicadores e experimentar uma ação pequena','Aplicar todo o orçamento no plano mais ambicioso','Dividir orçamento entre etapas com pontos de revisão','Elevar vendas com descontos para cumprir metas imediatas','Preservar caixa e consolidar os processos existentes'],
 'Negociação':['Simular margens e realizar uma contraproposta limitada','Aceitar os termos integralmente para fechar rápido','Negociar volume, prazo e garantia em conjunto','Conceder desconto em troca de pagamento antecipado','Recusar condições que comprometam o caixa'],
 'Demanda':['Medir mudança de procura antes de ajustar capacidade','Aumentar rapidamente toda a produção e estoque','Negociar equipe e insumos temporários','Fazer promoção limitada para nivelar a procura','Proteger caixa e priorizar itens com maior margem']
};
const TYPE_GROUP={
 'Financeiro':'Finanças','Custos':'Finanças','Custos fixos':'Finanças','Dívida':'Crédito','Capital':'Crédito','Gestão de pessoas':'Pessoas','Liderança':'Pessoas','Gestão':'Pessoas','Capacidade':'Expansão','Investimento':'Investimentos','Operação':'Manutenção','Operações':'Manutenção','Eficiência':'Qualidade','Conformidade':'Risco','Governança':'Contratos','Controles':'Qualidade','Cobrança':'Caixa','Sistemas':'Investimentos','Dados':'Planejamento','Mercado':'Demanda','Sazonalidade':'Demanda','Digital':'Marketing','Fidelização':'Atendimento','Aquisição':'Marketing','Produto':'Precificação','Portfólio':'Precificação','Vendas':'Negociação','Logística':'Fornecedores','Pesquisa':'Demanda','Estratégia':'Planejamento','Parcerias':'Contratos','Localização':'Expansão','Continuidade':'Risco','Inovação':'Investimentos','Controle':'Estoque','Risco':'Risco','Crédito':'Crédito'
};
const PROFILES=[
 {id:0,risk:0,cost:250,sales:1100,expenses:720,rep:2,stock:1,team:1},
 {id:1,risk:2,cost:1800,sales:2500,expenses:1320,rep:5,stock:-6,team:-5},
 {id:2,risk:1,cost:650,sales:1550,expenses:850,rep:3,stock:2,team:2},
 {id:3,risk:1,cost:480,sales:2100,expenses:1690,rep:4,stock:-4,team:-3},
 {id:4,risk:0,cost:200,sales:1190,expenses:780,rep:6,stock:4,team:3}
];
function decisionOptions(entry,s,seed,number,seasonNumber,cycle,demand,adversity){
 const group=DECISION_BANK[entry.type]?entry.type:(TYPE_GROUP[entry.type]||'Planejamento');
 const actions=DECISION_BANK[group];
 const source=(Math.imul(seed+seasonNumber*67+number*113,1664525)>>>0);
 const volatility=(source%101)/100;
 return PROFILES.map((profile,i)=>{
  const tilt=.8+((source>>>((i*5)%24))%55)/100;
  const demandFit=(i===1?demand/100:i===3?1.2-demand/250:i===4?.8+demand/500:1);
  const scenarioCost=Math.round(profile.cost*(.8+volatility*.7)*adversity*tilt);
  const revenue=Math.round(profile.sales*demandFit*(.7+volatility*.5)*(1+cycle*.055));
  const running=Math.round(profile.expenses*(.85+(1-volatility)*.4)*(1+cycle*.09)*adversity);
  const context=replace(entry.title.toLowerCase(),s);
  const complements=[`para resolver ${context}`,`diante de ${context}`,`no contexto de ${context}`,`para reagir a ${context}`,`considerando ${context}`];
  const decision=`${replace(actions[i],s)} — ${complements[i]}`;
  const story=`Sobre ${context}, você decidiu: ${decision.toLowerCase()}. A mudança afeta vendas, custos e a capacidade de reação nos períodos seguintes.`;
  const lesson=[
    `Em ${context}, testar antes de comprometer recursos protege o caixa, mas pode atrasar oportunidades.`,
    `Em ${context}, crescer rápido aumenta a exposição: uma demanda menor que o previsto pode pressionar o pagamento de salários e dívidas.`,
    `Em ${context}, negociar prazo, garantia e custo distribui riscos, mas requer acompanhar vencimentos.`,
    `Em ${context}, vender mais ou dar descontos não garante lucro: compare margem e necessidade de capital de giro.`,
    `Em ${context}, preservar liquidez e qualidade reduz alguns riscos, mas também pode limitar expansão e participação de mercado.`
  ][i];
  return {...profile,title:decision,story,lesson,cost:scenarioCost,sales:revenue,expenses:running};
 });
}
const replace=(s,vars)=>s.replace(/\{(\w+)\}/g,(_,key)=>vars[key]||key);
// 20 temporadas por setor × 10 setores = 200 campanhas procedurais jogáveis.
// Os temas-base são reutilizados em temporadas com cenários e parâmetros distintos;
// não são 20.000 capítulos escritos manualmente.
const SEASON_ARCS=[
 ['Primeiros clientes','Abertura e descoberta do público'],['O bairro muda','Posicionamento e concorrência'],
 ['Crescer sem quebrar','Capital de giro e demanda'],['Novos talentos','Pessoas e liderança'],
 ['Preço ou valor','Margens e diferenciação'],['Um rival poderoso','Concorrência e fidelização'],
 ['Expansão cautelosa','Investimento e capacidade'],['Ano turbulento','Choques de custos e resiliência'],
 ['O salto digital','Canais e processos digitais'],['Negócios em parceria','Fornecimento e contratos'],
 ['Qualidade à prova','Controles e reclamações'],['Rumo à segunda unidade','Replicação e expansão'],
 ['A crise de confiança','Reputação e recuperação'],['Decisões de crédito','Dívidas e financiamento'],
 ['Talento e cultura','Gestão e produtividade'],['A batalha do caixa','Liquidez e rentabilidade'],
 ['Mercados novos','Públicos e portfólio'],['Operação em escala','Processos e capacidade'],
 ['O grande imprevisto','Continuidade e risco'],['Legado empreendedor','Estratégia e sustentabilidade']
];
const SECTOR_EVENTS={
 cafeteria:['A máquina de espresso perde pressão','O fornecedor de leite muda a tabela','Uma avaliação viraliza no bairro','O movimento da manhã dispara','O bolo do dia sobra no balcão'],
 restaurante:['O delivery chega frio','Uma reserva de grupo lota o salão','Os alimentos chegam fora da temperatura','O chef altera o cardápio','A fila do almoço cresce'],
 roupas:['Uma coleção perde relevância','O estoque está sem tamanhos populares','A vitrine não atrai visitantes','Uma troca vira reclamação pública','A estação muda antes do esperado'],
 supermercado:['Frutas amadurecem antes da venda','Há filas nos caixas de pagamento','Um produto essencial falta nas gôndolas','Os refrigeradores consomem mais energia','A validade de vários itens se aproxima'],
 confeccao:['Uma máquina de costura para','O corte desperdiça tecido','A modelagem de um lote saiu errada','Um varejista pede uma coleção exclusiva','O prazo de entrega está apertado'],
 tecnologia:['O servidor apresenta lentidão','Um cliente corporativo ameaça cancelar','O backlog cresce sem prioridade','Um bug afeta o faturamento','O custo de infraestrutura dispara'],
 agro:['A previsão indica estiagem','O preço da semente sobe','A colheita pode atrasar','Uma praga ameaça parte da lavoura','O preço de venda no atacado recua'],
 construcao:['A obra recebe pedido de alteração','O cimento atrasou no canteiro','O cronograma de entregas escorrega','A equipe identifica retrabalho','O orçamento de materiais estourou'],
 logistica:['Um caminhão precisa de manutenção','Uma rota tem congestionamento frequente','Uma carga sofreu avaria','O preço do diesel sobe','O cliente exige rastreamento'],
 franquias:['Uma unidade foge do padrão','O franqueado pede ajuda financeira','A rede lança um cardápio obrigatório','O fundo de marketing é contestado','Uma nova praça parece promissora']
};
function buildSeason(sector,seed,seasonNumber=1){
 const s=SECTORS[sector],order=[],arc=SEASON_ARCS[seasonNumber-1]||SEASON_ARCS[0];
 // Cada etapa tem 100 decisões; a ordem muda em cada partida e temporada.
 // Não é uma árvore narrativa autoral completa, mas históricos e indicadores se acumulam.
 const scenePool=THEMES.map(([title,scene,type])=>({title,scene,type}));
 SECTOR_EVENTS[sector].forEach((title,i)=>scenePool.push({title,scene:`${title}. Você deve avaliar impacto sobre ${s.product}, equipe e capital de giro antes de agir.`,type:['Operação','Gestão','Risco','Mercado','Financeiro'][i]}));
 let indices=Array.from({length:scenePool.length},(_,i)=>i);
 shuffleWith(indices,seed+seasonNumber*313);
 for(let cycle=0;cycle<4;cycle++){
  for(let k=0;k<25;k++){
   const number=order.length+1,entry=scenePool[indices[cycle*25+k]],demand=65+((seed*7+number*17+seasonNumber*11)%76);
   const capital=1100+((seed*11+number*359+seasonNumber*41)%7200);
   const variant=.66+((seed+number*13+seasonNumber*7)%71)/100;
   const phase=['Preparação','Operação','Crescimento','Fechamento'][cycle];
   const adversity=1+Math.max(0,seasonNumber-1)*.021;
   const options=permute(decisionOptions(entry,s,seed,number,seasonNumber,cycle,demand,adversity),seed+number*41+seasonNumber*83);
   order.push({id:`${sector}-T${seasonNumber}-${number}`,title:entry.title,type:entry.type,
    scene:`${replace(entry.scene,s)} ${arc[0]} — ${phase.toLowerCase()}. A demanda estimada equivale a ${demand}% da referência e há ${capital.toLocaleString('pt-BR')} reais em compromissos operacionais previstos. Seu histórico financeiro influencia a decisão.`,
    options,demand,cycle:cycle+1});
  }
 }
 return order;
}
function shuffleWith(arr,seed){let x=(seed|0)||1;for(let i=arr.length-1;i>0;i--){x=(Math.imul(x,1664525)+1013904223)|0;const j=(x>>>0)%(i+1);[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;}
function permute(a,seed){return shuffleWith(a,seed);}
