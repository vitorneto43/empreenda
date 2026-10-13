'use strict';
const SECTORS={
 cafeteria:{name:'Cafeteria',icon:'☕',description:'Atendimento, perecíveis, cardápio e movimento diário.',product:'cafés e lanches',stock:'grãos, leite e insumos',team:'baristas',supplier:'torrefação de café',client:'clientes do bairro'},
 restaurante:{name:'Restaurante',icon:'🍽️',description:'Cozinha, salão, delivery e segurança alimentar.',product:'refeições',stock:'alimentos frescos',team:'cozinheiros e garçons',supplier:'distribuidora de alimentos',client:'clientes do almoço'},
 roupas:{name:'Loja de roupas',icon:'👗',description:'Coleções, tamanhos, vitrines e giro de estoque.',product:'peças de vestuário',stock:'coleção e tamanhos',team:'vendedores',supplier:'atacadista de roupas',client:'compradores da loja'},
 supermercado:{name:'Supermercado',icon:'🛒',description:'Reposição, perecíveis, preços e filas.',product:'itens de cesta básica',stock:'mercadorias e perecíveis',team:'caixas e repositores',supplier:'distribuidora atacadista',client:'moradores da região'},
 confeccao:{name:'Indústria de confecção',icon:'🧵',description:'Costura, matéria-prima, qualidade e produção.',product:'lotes de roupas',stock:'tecidos e aviamentos',team:'costureiras',supplier:'fornecedor de tecidos',client:'lojistas'},
 tecnologia:{name:'Empresa de tecnologia',icon:'💻',description:'SaaS, clientes, desenvolvimento e suporte.',product:'assinaturas de software',stock:'capacidade de servidores e licenças',team:'desenvolvedores e suporte',supplier:'provedor de infraestrutura',client:'empresas assinantes'},
 agro:{name:'Agricultura e agronegócio',icon:'🌱',description:'Safra, insumos, clima e comercialização.',product:'produção agrícola',stock:'sementes e insumos agrícolas',team:'trabalhadores rurais',supplier:'fornecedor de insumos',client:'compradores da colheita'},
 construcao:{name:'Construção civil',icon:'🏗️',description:'Obras, cronogramas, materiais e contratos.',product:'serviços de obra',stock:'cimento, aço e materiais',team:'equipes de obra',supplier:'depósito de materiais',client:'contratantes'},
 logistica:{name:'Transportes e logística',icon:'🚚',description:'Rotas, manutenção, entregas e fretes.',product:'serviços de transporte',stock:'combustível e peças',team:'motoristas e operadores',supplier:'oficina e posto parceiro',client:'clientes de frete'},
 franquias:{name:'Franquias e redes',icon:'🏬',description:'Padronização, royalties, expansão e unidades.',product:'produtos das unidades',stock:'estoque da rede',team:'gestores das lojas',supplier:'fornecedor homologado',client:'consumidores da rede'}
};
