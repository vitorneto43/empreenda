# Empreenda! Beta 0.7 — contas, convites e compartilhamento

## O que funciona imediatamente
- Preserva as **200 temporadas procedurais**, 100 decisões por temporada, cinco escolhas.
- Jogo em modo visitante; cada navegador mantém seu progresso local.
- Botões **Convidar no WhatsApp**, **Compartilhar placar** e **Planos** (prévia sem cobrança).
- O link de convite aceita `?ref=...`, mas **não registra indicações automaticamente**.

## Para ativar cadastro e login reais
1. Crie um projeto no Supabase (https://supabase.com).
2. SQL Editor: execute `supabase-schema.sql`; há políticas RLS que isolam o progresso de cada conta.
3. Authentication > URL Configuration: defina **Site URL** para sua URL do GitHub Pages e inclua essa URL exata em Redirect URLs para confirmação por e-mail.
4. Copie a **Project URL** e a chave pública **publishable/anon** para `config.js`. Nunca cole uma chave secreta ou `service_role` no projeto.
5. Publique todos os arquivos via GitHub Pages (raiz, branch main).
6. Faça um cadastro e confirme e-mail, se habilitado; entre em dois navegadores para validar.

## Limitações que você precisa saber
- O modo visitante e o modo logado usam partidas separadas. Não há importação automática de progresso do visitante.
- Conta autenticada sincroniza a última partida com o Supabase. Atualmente só há **uma partida ativa por conta**.
- O placar compartilhado via WhatsApp é **texto da simulação**, sem selo de verificação. Não existe ranking público verificado.
- A sincronização é uma versão inicial de teste: duas sessões simultâneas podem sobrescrever o progresso.
- As 200 temporadas reutilizam banco de temas com geração procedural, não são 200 histórias autorais independentes.
- O Premium **não aceita pagamentos ainda**. O preço de R$ 19,90 é hipótese para validar interesse.
- Para placar público competitivo, benefícios de indicação e certificados oficiais, mover o cálculo decisório para servidor com validação antifraude.
- A página carrega uma biblioteca JS pela CDN para usar Supabase; com a integração desligada, o jogo funciona como visitante.

## Como rodar
Abra a pasta no VS Code e use a extensão Live Server. Publique todos os arquivos preservando nomes e caminhos.


## Beta 0.8 — Camada pedagógica
- Após cada decisão: explicação das consequências, conceito, riscos, orientação e comparação das cinco alternativas.
- Nenhuma escolha é rotulada como universalmente correta. Projeções da comparação são simplificadas e não incluem o estado completo da empresa.
- Vídeos são futuros/opcionais: informe `window.EMPREENDA_VIDEOS = { "cafeteria-T1-1": "https://.../video.mp4" };` **antes** do script `app.js` para que vídeos próprios possam aparecer. O identificador deve coincidir com o id da situação.
- Atenção: o conteúdo pedagógico atual ainda se baseia nas cinco estratégias genéricas; ampliar com explicações específicas por cenário é a próxima etapa editorial.
- O salvamento, a conta Supabase e a estrutura procedural são preservados. Testar a migração com conta real antes de publicar.
