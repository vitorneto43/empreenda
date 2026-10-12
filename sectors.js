'use strict';
// Propostas didáticas: valores fictícios, não projeções reais.
const SECTORS={
 cafe:{name:'Cafeteria Aurora',icon:'☕',description:'Café de bairro: alimentos perecíveis, atendimento e concorrência.',stock:'grãos e ingredientes',product:'cafés e lanches',team:'baristas',rival:'a cafeteria da esquina',customer:'clientes do bairro',source:'fornecedor de café'},
 roupas:{name:'Boutique Horizonte',icon:'👗',description:'Loja de roupas: tamanhos, coleções, estoque e vendas digitais.',stock:'peças de vestuário',product:'roupas e acessórios',team:'vendedores',rival:'uma rede de fast fashion',customer:'clientes da loja',source:'distribuidor de roupas'},
 confeccao:{name:'Confecção Raiz',icon:'🧵',description:'Pequena indústria: produção, desperdício, qualidade e prazos.',stock:'tecidos e aviamentos',product:'peças confeccionadas',team:'costureiras e operadores',rival:'uma confecção de grande escala',customer:'lojistas compradores',source:'fornecedor de tecidos'}
};
const PHASES=[
 ['Primeiro estoque','O fornecedor oferece um lote de {stock} com preço menor por unidade, mas o caixa está limitado.','Compras'],
 ['Preço sob pressão','{rival} iniciou uma promoção. Seus {customer} comparam os preços de {product}.','Precificação'],
 ['Pedidos inesperados','Uma divulgação funcionou e os pedidos dobraram nesta semana. A equipe de {team} está no limite.','Operação'],
 ['O fornecedor atrasou','Seu {source} não entregará tudo no prazo. Você tem compromissos com {customer}.','Fornecedores'],
 ['Contratação difícil','Há um candidato experiente e outro iniciante para reforçar a equipe de {team}.','Pessoas'],
 ['A temporada virou','A demanda por {product} caiu e um concorrente está atraindo atenção.','Mercado'],
 ['Uma avaliação negativa','Um cliente relata um problema de qualidade em {product}, e a notícia começa a circular.','Atendimento'],
 ['Contrato de alto volume','Um cliente corporativo oferece grande pedido com desconto e prazo de pagamento longo.','Negociação'],
 ['Caixa apertado','Aluguel, folha de pagamento e compras vencerão antes de parte das receitas entrar.','Finanças'],
 ['Nova oportunidade online','Você pode atender pedidos digitais, mas precisará organizar divulgação e entregas.','Crescimento'],
 ['Falha na qualidade','Uma inspeção interna revela retrabalho e desperdício em {stock}.','Qualidade'],
 ['Hora de expandir','A operação está mais conhecida. Surge a chance de abrir nova unidade ou aumentar a capacidade.','Estratégia'],
 ['Mudança de fornecedor','O fornecedor atual reajustou preços e há propostas alternativas ainda não testadas.','Negociação'],
 ['A equipe pede mudanças','Os profissionais dizem que a escala está apertada e os erros estão aumentando.','Pessoas'],
 ['O desafio da margem','As vendas aumentaram, mas os custos de materiais e serviços também.','Finanças'],
 ['O fim do ciclo','Chegou a hora de avaliar o lucro, as obrigações e a sustentabilidade do próximo período.','Conclusão']
];
const fmtTemplate=(s,x)=>s.replace(/\{(\w+)\}/g,(_,k)=>x[k]||'');
// Cinco alternativas plausíveis, com impactos e riscos diferentes por decisão.
const STRATEGIES=[
 {title:'Fazer um piloto pequeno, medir resultados e ajustar',sales:1100,expenses:720,cost:280,rep:2,risk:0,lesson:'Testes pequenos preservam recursos, mas podem limitar a velocidade de expansão.',story:'O piloto gera dados reais, embora o crescimento seja mais lento.'},
 {title:'Investir forte para ganhar mercado rapidamente',sales:2350,expenses:1190,cost:1450,rep:8,risk:2,lesson:'Crescimento acelerado pode aumentar demanda e reputação, mas pressiona o caixa.',story:'O movimento aumenta muito, junto com a exposição financeira.'},
 {title:'Negociar prazo, metas de qualidade e reserva de caixa',sales:1490,expenses:950,cost:460,rep:4,risk:0,lesson:'Negociação e reservas equilibram riscos de liquidez e operação.',story:'A negociação evita parte da pressão e melhora a previsibilidade.'},
 {title:'Reduzir custos e preços para defender participação',sales:1650,expenses:1470,cost:130,rep:-3,risk:1,lesson:'Volume maior não garante lucro quando as margens são apertadas.',story:'As vendas sobem, mas quase todo o ganho vai para custos.'},
 {title:'Focar clientes fiéis e qualidade, mesmo perdendo volume',sales:1020,expenses:650,cost:330,rep:9,risk:0,lesson:'Diferenciação protege a reputação, mas pode reduzir vendas de curto prazo.',story:'Os clientes fiéis elogiam a experiência; o volume cresce devagar.'}
];
// Cada etapa tem cinco estratégias específicas; a matemática compartilha um motor consistente.
const DECISION_LABELS=[
 ['Comprar lote pequeno e repor semanalmente','Fechar lote grande em troca do desconto','Negociar entregas fracionadas com fornecedor','Trocar para produto mais barato e de menor margem','Priorizar insumos premium e variedade limitada'],
 ['Testar promoções por bairro e medir margem','Igualar todos os preços do concorrente por um mês','Negociar combos e condições com fornecedores','Oferecer descontos altos sem revisar custo unitário','Destacar qualidade e atendimento sem guerra de preços'],
 ['Aceitar pedidos em pequena escala e monitorar espera','Comprar máquinas e contratar imediatamente','Negociar prazos de entrega com grandes clientes','Dar descontos para absorver todos os pedidos','Priorizar encomendas fiéis com padrão de qualidade'],
 ['Comprar reposição emergencial em quantidade limitada','Pagar transporte expresso para suprir todos os pedidos','Dividir entregas com dois fornecedores avaliados','Vender com grande desconto o pouco estoque restante','Informar clientes e oferecer alternativas de qualidade'],
 ['Treinar um aprendiz em contrato de experiência','Contratar dois especialistas com custo mais alto','Negociar contratação gradual com metas claras','Congelar contratações e dar descontos para compensar espera','Reduzir pedidos para manter atendimento excelente'],
 ['Testar novo público por duas semanas','Investir alto em uma reformulação da marca','Negociar ofertas sazonais e metas com parceiros','Diminuir preço sem rever os custos operacionais','Fidelizar clientes atuais com atendimento premium'],
 ['Ouvir o cliente e corrigir uma amostra do problema','Recolher todos os produtos imediatamente, sem investigação','Negociar devoluções individuais com rastreio das falhas','Dar desconto geral sem resolver o defeito','Priorizar melhorias de qualidade e transparência'],
 ['Aceitar lote piloto com pagamento antecipado parcial','Expandir produção para atender tudo de imediato','Negociar entrega em etapas e garantias contratuais','Aceitar desconto alto mesmo com margem apertada','Recusar excesso de volume para manter padrão atual'],
 ['Renegociar vencimentos e cobrar contas a receber','Tomar empréstimo expressivo para antecipar expansão','Negociar cronograma financeiro com todos os parceiros','Liquidar estoque com descontos para fazer caixa','Reduzir despesas mantendo produtos de maior margem'],
 ['Iniciar canal digital com catálogo de poucos itens','Contratar operação digital completa de imediato','Negociar logística terceirizada e pedidos programados','Prometer frete grátis sem calcular custo','Oferecer compra assistida e entrega cuidadosa'],
 ['Auditar pequeno lote e corrigir processo','Substituir máquinas e ferramentas de uma só vez','Negociar controle de qualidade com fornecedor','Reduzir preço de itens defeituosos sem revisão','Suspender linha problemática até garantir qualidade'],
 ['Abrir teste de uma nova linha sem aluguel extra','Alugar uma segunda unidade com equipe completa','Negociar expansão com metas e cláusulas de saída','Expandir com promoções agressivas para gerar movimento','Crescer devagar para preservar atendimento e caixa'],
 ['Testar novo fornecedor em pedido limitado','Migrar todo volume para fornecedor mais barato','Negociar contrato com multas e auditoria de qualidade','Trocar pelo menor preço sem verificar histórico','Manter fornecedor atual exigindo melhorias mensuráveis'],
 ['Testar nova escala e medir produtividade','Contratar reforço amplo já no próximo mês','Negociar folgas e metas de qualidade com a equipe','Pedir horas extras contínuas com cortes de custos','Reduzir volume de pedidos até normalizar a equipe'],
 ['Testar novos preços em parte da linha','Investir muito para dobrar volume de vendas','Renegociar matérias-primas e prazos','Dar descontos para manter clientes mesmo sem margem','Manter preços e reforçar proposta de qualidade'],
 ['Criar plano de reinvestimento e preservar reserva','Expandir rapidamente usando quase todo o caixa','Renegociar custos e estabelecer metas de lucro','Distribuir grande parte do caixa em promoções finais','Consolidar qualidade e fidelização antes de crescer']
];
function buildSectorChapters(sector){const s=SECTORS[sector];return PHASES.map(([title,scene,type],i)=>({id:`${sector}-${i}`,title,scene:fmtTemplate(scene,s),type,choices:STRATEGIES.map((opt,j)=>({...opt,title:DECISION_LABELS[i][j],story:`${opt.story} ${i%2===0?'O próximo período trará um novo desafio.':'A decisão terá reflexos nos próximos meses.'}`,cost:Math.round(opt.cost*(1+(i%4)*.10)),sales:Math.round(opt.sales*(1+(i%3)*.08)),expenses:Math.round(opt.expenses*(1+(i%4)*.07))}))}));}
function enrichCafe(){return CHAPTERS.map((c,i)=>({ ...c,id:`cafe-${i}`,choices:[...c.choices.map(o=>({...o,risk:0})), {title:'Negociar condições menores e testar a demanda primeiro',cost:Math.round((c.choices[0].cost+c.choices[1].cost)/4),sales:Math.round((c.choices[0].sales+c.choices[1].sales)/2*.87),expenses:Math.round((c.choices[0].expenses+c.choices[1].expenses)/2),rep:2,risk:0,lesson:'Um teste limitado reduz risco, mas pode deixar oportunidades de venda para trás.',story:'Você escolhe um experimento de baixo custo. Os clientes reagem, e a equipe registra os resultados.'},{title:'Buscar parceria e dividir custos com outro negócio',cost:Math.round(c.choices[0].cost*.48+80),sales:Math.round(c.choices[0].sales*.84),expenses:Math.round(c.choices[0].expenses*.83),rep:1,risk:1,lesson:'Parcerias dividem recursos e responsabilidades, mas reduzem o controle sobre a operação.',story:'Uma parceria ajuda a distribuir os custos. Surgem novas oportunidades e novas dependências.'}] }));}
