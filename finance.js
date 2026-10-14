'use strict';
// Simulação didática. Cada 5 decisões corresponde a um mês de operação.
const PERIOD_DECISIONS=5;
function ensureFinance(s){
 if(!s.finance||typeof s.finance!=='object')s.finance={period:Math.floor((s.step||0)/PERIOD_DECISIONS),loans:[],employees:[],assets:[],events:[],nextId:1};
 const f=s.finance;
 for(const k of ['loans','employees','assets','events'])if(!Array.isArray(f[k]))f[k]=[];
 if(!Number.isInteger(f.period))f.period=0;
 if(!Number.isInteger(f.nextId))f.nextId=1;
 return f;
}
function loanPayment(principal,rate,n){return Math.round(principal*rate/(1-Math.pow(1+rate,-n)));}
function registerCommitment(s,chapter,choice){
 const f=ensureFinance(s),notes=[];
 // Ações explícitas são derivadas do tema e da estratégia selecionada.
 // id=1: expansão agressiva, id=2: negociação gradual, id=0: teste, id=4: cautela.
 const id=choice.id,kind=chapter.type.toLowerCase();
 const credit=['crédito','dívida','capital'].includes(kind);
 const people=['pessoas','gestão de pessoas','gestão','liderança'].includes(kind);
 const equipment=['investimentos','investimento','manutenção','capacidade','expansão'].includes(kind);
 if(credit&&(id===1||id===2)&&f.loans.filter(x=>x.remaining>0).length<3){
  const principal=id===1?12000:6000,rate=id===1?.025:.017,months=id===1?12:8;
  const payment=loanPayment(principal,rate,months),loan={id:f.nextId++,principal,remaining:principal,rate,months,payment,paid:0};
  f.loans.push(loan);s.cash+=principal;
  notes.push(`Crédito contratado: ${money(principal)} recebido no caixa; ${months} prestações estimadas de ${money(payment)}. O valor recebido NÃO é faturamento nem lucro.`);
 }else if(credit&&id===4&&f.loans.some(x=>x.remaining>0)){
  const loan=f.loans.find(x=>x.remaining>0);const extra=Math.min(Math.round(loan.remaining*.2),Math.max(0,Math.floor(s.cash*.12)));
  if(extra>0){loan.remaining-=extra;s.cash-=extra;notes.push(`Amortização extra: ${money(extra)} reduziu a dívida, sem contar como despesa operacional. A liquidez diminuiu.`);}
 }else if(credit&&(id===1||id===2))notes.push('Novo crédito não contratado: limite didático de 3 operações simultâneas.');
 if(people&&(id===1||id===2)&&f.employees.length<8){
  const salary=id===1?2100:1500,productivity=id===1?7:4;
  f.employees.push({id:f.nextId++,name:`Colaborador ${f.nextId-1}`,salary,productivity,active:true});
  s.team=Math.min(100,s.team+productivity);
  notes.push(`Contratação efetuada. Novo gasto recorrente estimado de ${money(salary)} por mês (salário e encargos simulados); equipe ganhou capacidade.`);
 }else if(people&&id===4&&f.employees.some(x=>x.active)){
  const employee=f.employees.find(x=>x.active);employee.productivity+=2;s.team=Math.min(100,s.team+2);
  notes.push(`Treinamento: ${employee.name} ganhou produtividade. O custo mensal do emprego continua.`);
 }
 if(equipment&&(id===1||id===2)&&f.assets.filter(x=>x.active).length<6){
  const monthly=id===1?480:220;
  f.assets.push({id:f.nextId++,title:`Investimento: ${chapter.title}`,monthly,active:true});
  s.stock=Math.min(100,s.stock+(id===1?6:3));
  notes.push(`O investimento gera custos de manutenção/estrutura de ${money(monthly)} por mês. Os efeitos continuam nas próximas rodadas.`);
 }
 return {notes};
}
function advanceFinancialCalendar(s){
 const f=ensureFinance(s),notes=[];
 if((s.step+1)%PERIOD_DECISIONS!==0)return {notes,closed:false};
 f.period++;
 let payments=0,interestPaid=0,salaries=0,maintenance=0;
 for(const loan of f.loans){
  if(loan.remaining<=0)continue;
  const interest=Math.round(loan.remaining*loan.rate),due=Math.min(loan.payment,loan.remaining+interest);
  loan.remaining=Math.max(0,loan.remaining-(due-interest));loan.paid+=due;
  s.cash-=due;payments+=due;interestPaid+=interest;
  // Juros afetam o resultado; amortização de principal não é despesa.
  s.expenses+=interest;
  notes.push(`Empréstimo #${loan.id}: prestação ${money(due)} (juros ${money(interest)}; dívida restante ${money(loan.remaining)}).`);
 }
 for(const employee of f.employees){if(!employee.active)continue;salaries+=employee.salary;s.team=Math.min(100,s.team+1)}
 for(const asset of f.assets){if(asset.active)maintenance+=asset.monthly;}
 s.cash-=salaries+maintenance;s.expenses+=salaries+maintenance;
 if(salaries)notes.push(`Folha de pagamento recorrente: ${money(salaries)}.`);
 if(maintenance)notes.push(`Manutenção e estrutura: ${money(maintenance)}.`);
 if(!notes.length)notes.push('Mês encerrado sem contratos recorrentes; mantenha a reserva de caixa para imprevistos.');
 f.events.push({month:f.period,step:s.step+1,payments,interestPaid,salaries,maintenance,cash:s.cash,notes});
 if(f.events.length>40)f.events.shift();
 return {notes,closed:true};
}
function financePanel(){
 if(!state)return '';
 const f=ensureFinance(state),debt=f.loans.reduce((a,b)=>a+b.remaining,0);
 const payroll=f.employees.filter(e=>e.active).reduce((a,b)=>a+b.salary,0);
 const upkeep=f.assets.filter(e=>e.active).reduce((a,b)=>a+b.monthly,0);
 return `<section class="card"><h3>📒 Compromissos que continuam</h3><p class="muted">Mês ${f.period+1} • A cada ${PERIOD_DECISIONS} decisões, chega um fechamento mensal.</p><div class="inline financial-totals"><span>🏦 Dívidas: <strong>${money(debt)}</strong></span><span>👥 Folha/mês: <strong>${money(payroll)}</strong></span><span>🛠️ Estrutura/mês: <strong>${money(upkeep)}</strong></span></div>${f.loans.filter(l=>l.remaining>0).map(l=>`<p class="muted">Empréstimo #${l.id}: saldo ${money(l.remaining)} • prestação prevista ${money(l.payment)}</p>`).join('')}${f.events.length?`<details><summary>Último fechamento mensal</summary><p>${f.events.at(-1).notes.map(escapeHTML).join('<br>')}</p></details>`:''}</section>`;
}
function financialReport(commit,monthly){
 const notes=[...commit.notes,...monthly.notes];
 if(!notes.length)return `<section class="study-panel"><h2>📆 Consequências futuras</h2><p>Nenhum novo contrato recorrente nesta escolha. Dívidas, funcionários e estruturas anteriores continuam ativos e aparecerão no fechamento do mês.</p></section>`;
 return `<section class="study-panel"><h2>📆 Consequências que permanecem</h2>${notes.map(n=>`<p>• ${escapeHTML(n)}</p>`).join('')}<p class="muted">${monthly.closed?'O mês terminou e obrigações foram cobradas.':'Os encargos recorrentes serão processados no próximo fechamento mensal.'}</p></section>`;
}
function financeSummary(){const f=ensureFinance(state),debt=f.loans.reduce((a,l)=>a+l.remaining,0);return `Saldo das dívidas: ${money(debt)}. Funcionários ativos: ${f.employees.filter(e=>e.active).length}. Meses simulados: ${f.period}. Resultados simplificados: saldos de caixa e margem não substituem demonstrações contábeis.`;}
