/* Curso: Posts para Redes Sociais com IA (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🎯', title:'Planejar', sub:'Antes de criar o primeiro post', lessons:[
    { id:'1.1', title:'Entender o negócio e o público: o briefing', min:10,
      body:[
        `<div class="card analogy"><h3>🎯 A consulta do alfaiate</h3><p>O alfaiate mede o cliente antes de cortar o tecido. Cortar sem medir desperdiça pano e tempo. O briefing é a medição antes de criar qualquer post.</p></div>`,
        `<div class="term"><b>Briefing</b> = conjunto de informações que orienta o trabalho, como negócio, público, objetivo e tom. <b>Público-alvo</b> = as pessoas que o negócio quer alcançar. <b>Objetivo do post</b> = o que o post precisa provocar, como gerar mensagens ou lembrar da marca.</div>`,
        `<div class="card"><h3>As 6 perguntas para o cliente</h3><ol class="golden"><li><span>O que vende e para quem?</span></li><li><span>O que o torna diferente?</span></li><li><span>Que tom a marca usa (amigável, formal, divertido)?</span></li><li><span>Qual é o objetivo dos posts?</span></li><li><span>O que não pode ser dito (regras do setor, assuntos a evitar)?</span></li><li><span>Quais posts ele admira?</span></li></ol>
          <p>Registre em 1 página e peça à IA: "Revise este briefing e aponte o que está faltando." Use só o que o cliente informou: nunca deixe a IA inventar fatos sobre o negócio.</p></div>`,
        `<div class="card"><h3>Como conduzir a conversa</h3><p>Muitos donos de pequenos negócios não têm tempo para reunião longa. Funciona bem uma conversa de 15 a 20 minutos (presencial, chamada ou áudios no WhatsApp) seguida de um resumo escrito que o cliente confirma. Faça perguntas concretas: em vez de "qual é o seu público?", pergunte "quem mais compra com você? De que bairro? Em que dia da semana o movimento é maior?". Peça também fotos reais do negócio, a lista de produtos com preços atuais e os horários de funcionamento: esses são os fatos que você vai usar nos posts.</p></div>`,
        `<div class="code">BRIEFING: Padaria Pão da Vila (exemplo)
Vende: pães artesanais, salgados e bolos caseiros, no bairro Vila Nova.
Público: famílias do bairro e trabalhadores que passam de manhã.
Diferencial: pão de fermentação natural feito todo dia às 5h.
Tom: acolhedor, simples, com humor leve.
Objetivo: lembrar do café da manhã e gerar encomendas de bolo pelo WhatsApp.
Evitar: falar de "zero glúten" (não é), comparar com concorrentes.
Admira: perfis que mostram o forno e a equipe.</div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Aceitar "meu público é todo mundo" sem aprofundar; anotar o briefing só de cabeça; deixar a IA preencher o que faltou com suposições; esquecer de perguntar o que não pode ser dito. Cada lacuna vira um post genérico ou, pior, um post com informação falsa. Quando faltar algo, marque "a confirmar" e pergunte, em vez de adivinhar.</p></div>`,
        `<div class="card"><h3>Usando a IA no briefing, do jeito certo</h3><p>Depois de escrever o briefing com as respostas do cliente, a IA é ótima para encontrar lacunas: peça que ela liste perguntas que você esqueceu de fazer para aquele tipo de negócio. Uma oficina, por exemplo, pode ter regras sobre garantia de serviço; um salão pode ter serviços que só algumas profissionais fazem. Leve essas perguntas ao cliente. O que a IA não pode fazer é responder por ele: cada informação do briefing precisa ter vindo do dono do negócio.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o alfaiate mede antes de cortar o tecido.</div>`
      ],
      ch:[
        { who:'Aline, 28 anos, freelancer', says:'Peguei uma pizzaria como cliente e já pedi 30 posts para a IA sem perguntar nada a ela. Saiu tudo genérico.',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Pedir mais 30 posts, esperando que algum saia bom.', ok:false, why:'Mais posts genéricos continuam genéricos. Faltam informações do negócio.'},
            {t:'Conversar com a cliente usando um briefing (público, diferencial, tom, objetivo e o que evitar) e usar isso no pedido à IA.', ok:true, why:'Com informações reais, a IA escreve algo ligado ao negócio e a cliente se reconhece nos posts.'},
            {t:'Copiar posts de outras pizzarias e só trocar o nome.', ok:false, why:'Copiar tira a identidade do negócio e pode violar direitos autorais.'}
          ]},
        { who:'Juliana, 41 anos, dona de um pet shop', says:'Meu público é todo mundo que tem bicho. Pode escrever para todo mundo, não precisa complicar.',
          q:'Como conduzir essa parte do briefing?',
          opts:[
            {t:'Aceitar "todo mundo" como público e seguir, para não incomodar a cliente.', ok:false, why:'Escrever para todo mundo gera texto que não conversa com ninguém. O briefing fica sem a informação mais útil.'},
            {t:'Deixar a IA definir o público ideal de um pet shop e usar o que ela sugerir.', ok:false, why:'A IA vai supor um público genérico, que pode não ter nada a ver com quem realmente compra na loja da Juliana.'},
            {t:'Fazer perguntas concretas: quem mais compra, de que bairro, quais serviços mais procuram (banho, ração, acessórios) e anotar no briefing.', ok:true, why:'Perguntas concretas revelam o público real sem exigir que a cliente saiba termos de marketing.'}
          ]},
        { who:'Rafael, 37 anos, dono de uma oficina mecânica', says:'Não tenho tempo para reunião. Faz aí os posts do jeito que você achar melhor.',
          q:'Qual é a melhor resposta do freelancer?',
          opts:[
            {t:'Mandar as 6 perguntas do briefing por WhatsApp, aceitar respostas em áudio e devolver um resumo escrito para ele confirmar.', ok:true, why:'Respeita o tempo do cliente e ainda garante informações reais, confirmadas por escrito.'},
            {t:'Começar os posts sem nenhuma informação, já que ele autorizou.', ok:false, why:'Sem briefing, os posts saem genéricos ou com fatos errados (serviços, preços, horários), e o cliente vai pedir para refazer.'},
            {t:'Recusar o cliente, porque sem reunião não é possível trabalhar.', ok:false, why:'É possível adaptar o formato da conversa. Recusar perde um cliente que só precisava de um jeito mais rápido.'}
          ]}
      ]},
    { id:'1.2', title:'Calendário de conteúdo de 30 dias', min:10,
      body:[
        `<div class="card analogy"><h3>🗓️ A grade da programação de TV</h3><p>A TV mistura notícia, novela e filme em horários previsíveis. Quem assiste sabe o que esperar, e nunca é só propaganda. Um calendário de posts funciona assim.</p></div>`,
        `<div class="term"><b>Pilar de conteúdo</b> = um tema que se repete, como dicas, bastidores, ofertas e depoimentos. <b>Frequência</b> = quantos posts por semana. <b>Calendário</b> = o plano com dia, tema e formato de cada post.</div>`,
        `<div class="card"><h3>Quatro pilares e uma frequência realista</h3><p>Educar (dicas), mostrar (bastidores e produtos), relacionar (perguntas e enquetes) e vender (ofertas e chamadas). Em geral, funciona melhor misturar bastante conteúdo útil e de relacionamento com a venda direta, ajustando ao cliente. Prefira uma frequência que dê para manter: 3 posts por semana durante meses vale mais que 7 por semana e parar. Peça à IA uma tabela com dia, pilar, ideia, formato e chamada para ação, e adapte aos fatos reais (promoções verdadeiras, horários). Não prometa resultados: o alcance depende da plataforma.</p></div>`,
        `<div class="card"><h3>Montando o mês, passo a passo</h3><ol class="golden"><li><span>Liste as datas que importam para o negócio: feriados, datas comerciais (Dia das Mães, Black Friday), aniversário da loja, eventos do bairro.</span></li><li><span>Pergunte ao cliente quais ofertas reais haverá no mês. Só elas entram no pilar "vender".</span></li><li><span>Defina a frequência com base no tempo de quem vai fornecer fotos e aprovar.</span></li><li><span>Distribua os pilares pela semana, sem repetir o mesmo pilar em dias seguidos.</span></li><li><span>Peça à IA ideias para preencher a tabela e corte o que não combina com o negócio.</span></li><li><span>Envie o calendário para aprovação antes de produzir qualquer post.</span></li></ol></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Dia</th><th>Pilar</th><th>Ideia (barbearia)</th><th>Formato</th></tr><tr><td>Segunda</td><td>Educar</td><td>Como manter o degradê por mais tempo</td><td>Carrossel</td></tr><tr><td>Quarta</td><td>Mostrar</td><td>Bastidor: afiando as navalhas</td><td>Vídeo curto</td></tr><tr><td>Sexta</td><td>Relacionar</td><td>Enquete: barba cheia ou aparada?</td><td>Stories</td></tr><tr><td>Sábado</td><td>Vender</td><td>Horários livres da semana que vem</td><td>Post</td></tr></table></div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Aceitar um calendário que a IA encheu de promoções e sorteios que o cliente nunca combinou; planejar 30 posts sem saber quem vai tirar as fotos; ignorar o ritmo do negócio (uma padaria vende mais no fim de semana, um salão lota antes de feriados). O calendário é um plano, não uma prisão: revise na metade do mês se algo mudou.</p></div>`,
        `<div class="card"><h3>Quanto conteúdo cabe no mês?</h3><p>Uma conta simples ajuda a não prometer demais. Se o cliente consegue separar uma hora por semana para fotos e aprovações, e cada post leva para você cerca de 40 minutos entre legenda, arte e revisão, 3 posts por semana já somam mais de 8 horas de trabalho no mês, só seu. Coloque essa conta no papel antes de fechar a frequência. Ela vai ser útil de novo no módulo 3, quando você montar o pacote e o preço.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a TV mistura vários tipos de programa em vez de passar só propaganda.</div>`
      ],
      ch:[
        { who:'Marcelo, 33 anos, dono de uma barbearia', says:'Todo post que a IA sugeriu é oferta e desconto. Meus seguidores vão ficar cansados.',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Manter só ofertas, porque o objetivo do negócio é vender.', ok:false, why:'Posts só de venda cansam a audiência e fazem as pessoas pararem de acompanhar.'},
            {t:'Parar de postar até a IA aprender a escrever melhor.', ok:false, why:'O problema está no pedido e no planejamento, e parar não resolve.'},
            {t:'Misturar os pilares (dicas, bastidores, perguntas e ofertas) num calendário, com uma frequência que ele consiga manter.', ok:true, why:'A variedade mantém o interesse, e a frequência realista garante constância.'}
          ]},
        { who:'Patrícia, 45 anos, dona de uma padaria', says:'Quero postar duas vezes por dia, todo dia. Mas sou eu que tiro as fotos e ainda fico no caixa.',
          q:'Que frequência faz mais sentido propor?',
          opts:[
            {t:'Uma frequência menor que ela consiga sustentar, como 3 posts por semana, com uma sessão de fotos semanal em horário calmo.', ok:true, why:'Constância por meses vale mais que um ritmo intenso que acaba na segunda semana por falta de fotos.'},
            {t:'Manter 14 posts por semana, porque quanto mais posts, melhor.', ok:false, why:'Sem fotos e sem tempo para aprovar, o calendário quebra rápido e o perfil fica parado.'},
            {t:'Não definir frequência e postar só quando der vontade.', ok:false, why:'Sem plano, o perfil fica irregular e o cliente não sabe o que esperar do seu serviço.'}
          ]},
        { who:'Diego, 29 anos, social media iniciante', says:'A IA montou o calendário do salão com promoção de 30% no Dia das Mães e um sorteio que a dona nunca combinou.',
          q:'O que ele deve fazer antes de produzir os posts?',
          opts:[
            {t:'Manter a promoção e o sorteio, porque são boas ideias para a data.', ok:false, why:'Boa ideia não é fato. Anunciar promoção ou sorteio que não existe gera problema com as clientes do salão.'},
            {t:'Publicar e avisar a dona depois, para ganhar tempo.', ok:false, why:'Publicar oferta não autorizada expõe o negócio. A aprovação vem antes, não depois.'},
            {t:'Marcar esses itens como "a confirmar", perguntar à dona o que ela realmente quer oferecer e só manter o que for aprovado.', ok:true, why:'O pilar de venda só usa ofertas reais. Sugestões viram perguntas ao cliente, nunca anúncios por conta própria.'}
          ]}
      ]},
    { id:'1.3', title:'Pilares e formatos por tipo de negócio', min:10,
      body:[
        `<div class="card analogy"><h3>🧰 A caixa de ferramentas</h3><p>O marceneiro não usa martelo para tudo: parafuso pede chave, corte pede serrote. Nas redes é igual. Carrossel, vídeo curto, stories e post único são ferramentas diferentes, e cada uma resolve um tipo de mensagem.</p></div>`,
        `<div class="term"><b>Post único</b> = uma imagem com legenda, bom para avisos e produtos. <b>Carrossel</b> = sequência de imagens que a pessoa desliza, ótimo para passo a passo e listas. <b>Vídeo curto (reels)</b> = vídeo vertical de poucos segundos, bom para mostrar movimento, antes e depois e bastidores. <b>Stories</b> = conteúdo que some em 24 horas, bom para o dia a dia, enquetes e avisos rápidos.</div>`,
        `<div class="card"><h3>Escolha o formato pela mensagem</h3><p>Primeiro decida o que o post precisa dizer; depois escolha o formato. "Como escolher a ração certa" tem várias etapas: carrossel. "Olha como ficou esse corte" tem transformação visual: vídeo curto. "Hoje tem horário livre às 15h" é urgente e passageiro: stories. "Chegou o bolo de pote de maracujá" é um produto: post único com foto real. Os nomes e recursos de cada plataforma mudam com o tempo, mas essa lógica continua valendo.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Negócio</th><th>Pilares fortes</th><th>Formatos que costumam funcionar</th></tr><tr><td>Padaria</td><td>Mostrar (forno, fornada), vender (encomendas)</td><td>Vídeo curto do pão saindo, stories com a fornada do dia</td></tr><tr><td>Salão de beleza</td><td>Mostrar (transformações), relacionar</td><td>Vídeo curto de antes e depois autorizado, stories de horários livres</td></tr><tr><td>Oficina</td><td>Educar (manutenção), confiança</td><td>Carrossel de dicas, vídeo curto explicando um defeito comum</td></tr><tr><td>Nutricionista</td><td>Educar, relacionar</td><td>Carrossel educativo, sem promessa de resultado</td></tr><tr><td>Loja de roupas</td><td>Mostrar (peças no corpo), vender</td><td>Vídeo curto de provador, carrossel de combinações</td></tr></table></div>`,
        `<div class="card"><h3>Passo a passo para definir o mix</h3><ol class="golden"><li><span>Volte ao briefing: qual é o objetivo principal dos posts?</span></li><li><span>Escolha 3 ou 4 pilares que fazem sentido para esse negócio.</span></li><li><span>Para cada pilar, defina o formato mais natural.</span></li><li><span>Considere o esforço: vídeo exige gravação e edição, carrossel exige mais texto e design, stories exigem presença diária.</span></li><li><span>Peça à IA para sugerir ideias por pilar e formato, e filtre pelo que o cliente consegue fornecer (fotos, vídeos, tempo).</span></li></ol></div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Fazer vídeo de tudo porque "vídeo dá mais alcance", mesmo quando o cliente não grava nada; carrossel com 15 telas cheias de texto; stories sem continuidade, postados uma vez por mês. Também conte o esforço na hora de cobrar: um vídeo roteirizado e editado leva bem mais tempo que um post único, e isso precisa aparecer no seu pacote.</p></div>`,
        `<div class="card"><h3>Teste e ajuste</h3><p>Nenhum mix nasce perfeito. Combine com o cliente um período de teste de um mês e observe quais formatos geram mais conversas e mensagens, não só curtidas. Uma pet shop pode descobrir que carrosséis de cuidados são salvos e compartilhados, enquanto fotos de produto passam despercebidas. Ajuste no mês seguinte.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que não dá para usar o martelo para apertar um parafuso, e o que isso tem a ver com escolher o formato de um post.</div>`
      ],
      ch:[
        { who:'Sônia, 52 anos, nutricionista', says:'Quero ensinar a montar uma marmita equilibrada, etapa por etapa, para meus pacientes salvarem e consultarem depois.',
          q:'Qual formato combina melhor com essa mensagem?',
          opts:[
            {t:'Um story, porque é mais rápido de fazer.', ok:false, why:'Stories somem em 24 horas, e ela quer que o conteúdo fique disponível para consulta.'},
            {t:'Um carrossel com uma etapa por tela, linguagem simples e sem prometer resultado de saúde.', ok:true, why:'Passo a passo combina com carrossel, que a pessoa desliza e pode salvar. Sem promessas, respeita as regras do setor de saúde.'},
            {t:'Uma única imagem com todo o texto escrito em letra pequena.', ok:false, why:'Texto demais em uma imagem fica ilegível no celular e ninguém lê até o fim.'}
          ]},
        { who:'Bruno, 34 anos, dono de uma loja de roupas', says:'Chegou coleção nova hoje e quero mostrar as peças no corpo, de um jeito rápido e que dê vontade de vir na loja.',
          q:'Qual é a melhor sugestão?',
          opts:[
            {t:'Um carrossel só com texto descrevendo cada peça.', ok:false, why:'Roupa precisa ser vista em movimento e no corpo. Só texto não mostra caimento nem cor.'},
            {t:'Um post de dica genérica de moda, sem mostrar a coleção.', ok:false, why:'A mensagem do dia é a coleção nova. Um post genérico perde a oportunidade.'},
            {t:'Um vídeo curto de provador mostrando as peças vestidas e stories com enquete perguntando qual peça as pessoas preferem.', ok:true, why:'Vídeo curto mostra caimento e movimento; a enquete nos stories gera conversa e dá pistas do que mais interessa.'}
          ]},
        { who:'Camila, 26 anos, social media de um salão', says:'A dona quer avisar todo dia quais horários ainda estão livres na agenda. Vou fazer um post no feed por dia?',
          q:'Qual formato faz mais sentido para esse aviso?',
          opts:[
            {t:'Stories diários com os horários livres e um botão ou chamada para agendar.', ok:true, why:'É uma informação do dia, que perde validade rápido. Stories são feitos para isso e não poluem o feed.'},
            {t:'Um post fixo no feed com os horários, atualizado uma vez por mês.', ok:false, why:'Horários livres mudam todo dia. Um post mensal fica desatualizado e confunde as clientes.'},
            {t:'Um vídeo editado de 2 minutos explicando a agenda.', ok:false, why:'Esforço alto para uma informação simples e passageira. Ninguém assiste 2 minutos para saber um horário.'}
          ]}
      ]},
    { id:'1.4', title:'Pesquisa de referências sem copiar', min:10,
      body:[
        `<div class="card analogy"><h3>🍳 O cozinheiro que prova pratos</h3><p>Um bom cozinheiro prova pratos de outros restaurantes para entender combinações de sabor. Depois cria a própria receita, com os ingredientes da casa. Ele não serve o prato do vizinho com o nome trocado. Pesquisar referências de posts é provar o prato, não roubar a receita.</p></div>`,
        `<div class="term"><b>Referência</b> = exemplo que inspira uma ideia, uma estrutura ou um estilo. <b>Cópia</b> = reproduzir texto, imagem, vídeo ou música de outra pessoa como se fosse seu. <b>Pasta de referências</b> = coleção organizada de exemplos, com anotação do motivo de cada um.</div>`,
        `<div class="card"><h3>Analise o porquê, não o conteúdo</h3><p>Diante de um post que funciona, pergunte: qual é o gancho da primeira linha? Quantas telas tem o carrossel? Que tipo de foto usa? Qual é a chamada para ação? Essas respostas são a estrutura, e estrutura pode ser reaproveitada. Já o texto, as fotos, a arte e a música pertencem a quem criou. Com a IA, peça análise ("descreva a estrutura deste tipo de post: gancho, sequência e chamada") e nunca "reescreva este texto do concorrente com outras palavras": paráfrase de texto alheio continua sendo cópia.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Inspirar-se (ok)</th><th>Copiar (evite)</th></tr><tr><td>Usar a estrutura "3 erros comuns" com os fatos do seu cliente</td><td>Pegar a lista de erros do concorrente e trocar algumas palavras</td></tr><tr><td>Gostar do estilo de fotos claras e fazer fotos reais do negócio</td><td>Baixar as fotos de outra loja e postar</td></tr><tr><td>Notar que vídeos curtos de bastidor funcionam no setor</td><td>Regravar o mesmo roteiro, cena por cena</td></tr><tr><td>Compartilhar um post de outra pessoa pelos recursos da plataforma, com crédito</td><td>Repostar a arte de alguém como se fosse do cliente</td></tr></table></div>`,
        `<div class="card"><h3>Como montar sua pasta de referências</h3><ol class="golden"><li><span>Busque exemplos em negócios do mesmo setor, de outras cidades e de setores diferentes (boas ideias atravessam setores).</span></li><li><span>Salve o link ou a captura de tela com a fonte.</span></li><li><span>Anote em uma linha o motivo: "gancho com pergunta", "carrossel de 5 telas", "cores claras".</span></li><li><span>Separe por pilar: educar, mostrar, relacionar, vender.</span></li><li><span>Na hora de criar, escolha a estrutura e preencha com o briefing e as fotos do cliente.</span></li></ol></div>`,
        `<div class="card"><h3>Erros comuns e ética</h3><p>Querer deixar o perfil do cliente "igualzinho" ao de uma marca famosa (mesmas cores, fontes e frases) apaga a identidade dele e pode gerar problema de imitação de marca. Usar música de sucesso em vídeo comercial sem verificar se a plataforma permite aquele uso também é arriscado. Na dúvida, prefira as bibliotecas de áudio liberadas da própria plataforma e leia os termos.</p></div>`,
        `<div class="card"><h3>Exemplo prático</h3><p>Você viu um carrossel de uma hamburgueria de outra cidade com a estrutura "3 coisas que você não sabia sobre o nosso pão". Para a padaria do seu cliente, a estrutura vira "3 coisas que acontecem antes das 6h na Pão da Vila", com fotos reais do forno e fatos que o dono contou. Mesma lógica, conteúdo totalmente próprio.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos a diferença entre provar o bolo da vizinha para ter ideias e pegar o bolo dela para vender como se fosse seu.</div>`
      ],
      ch:[
        { who:'Thiago, 31 anos, atende uma hamburgueria', says:'Achei um carrossel incrível de uma hamburgueria de outra cidade. Posso pedir para a IA reescrever o texto trocando as palavras?',
          q:'Qual é o caminho certo?',
          opts:[
            {t:'Sim: com palavras trocadas, já não é mais cópia.', ok:false, why:'Paráfrase de texto alheio continua sendo aproveitar o trabalho de outra pessoa. Além disso, os fatos são de outro negócio.'},
            {t:'Analisar a estrutura (gancho, sequência de telas, chamada) e criar um carrossel novo com os fatos e as fotos da hamburgueria dele.', ok:true, why:'A estrutura inspira; o conteúdo vem do briefing do cliente. Assim o post é original e verdadeiro.'},
            {t:'Repostar as imagens do carrossel original no perfil do cliente, só dando crédito na legenda.', ok:false, why:'Crédito não autoriza usar a arte como se fosse do cliente, e as imagens mostram produtos que ele não vende.'}
          ]},
        { who:'Lúcia, 48 anos, dona de uma floricultura', says:'Quero que meu Instagram fique igualzinho ao daquela floricultura famosa: mesma cor, mesma fonte, até as mesmas frases.',
          q:'Como o freelancer deve orientar a Lúcia?',
          opts:[
            {t:'Fazer exatamente igual, porque o cliente sempre tem razão.', ok:false, why:'Copiar a identidade de outra marca apaga a da Lúcia e pode gerar problemas de imitação.'},
            {t:'Ignorar a referência e fazer algo totalmente diferente sem conversar.', ok:false, why:'A referência mostra o gosto da cliente. Ignorar sem explicar gera atrito e retrabalho.'},
            {t:'Entender o que ela admira (clareza, fotos com luz natural, tom delicado) e criar uma identidade própria com essas qualidades.', ok:true, why:'Aproveita o que a referência ensina sem copiar, e a floricultura ganha uma cara própria.'}
          ]},
        { who:'Gustavo, 27 anos, freelancer', says:'Salvo um monte de prints de posts no celular, mas depois não lembro por que salvei nenhum deles.',
          q:'O que deixaria essa pesquisa útil?',
          opts:[
            {t:'Uma pasta organizada por pilar, com a fonte de cada exemplo e uma linha anotando o motivo (gancho, formato, cores).', ok:true, why:'Com o motivo anotado, a referência vira uma ferramenta que você consulta na hora de criar.'},
            {t:'Salvar ainda mais prints, para ter mais opções.', ok:false, why:'Mais material desorganizado só aumenta a confusão.'},
            {t:'Parar de pesquisar referências e criar só da cabeça.', ok:false, why:'Referências bem usadas ajudam muito. O problema é a organização, não a pesquisa.'}
          ]}
      ]},
    { id:'1.5', title:'Diagnóstico rápido do perfil atual', min:10,
      body:[
        `<div class="card analogy"><h3>🧭 O mecânico que escuta o motor</h3><p>Antes de passar o orçamento, o bom mecânico liga o carro, escuta o motor e olha o painel. Ele não troca peças no escuro. Antes de planejar posts, faça o mesmo com o perfil do cliente: um diagnóstico rápido mostra o que já funciona, o que está quebrado e por onde começar.</p></div>`,
        `<div class="term"><b>Bio</b> = o texto curto no topo do perfil, que diz o que o negócio é, onde fica e como falar com ele. <b>Destaques</b> = coleções de stories fixadas no perfil, como cardápio, preços e endereço. <b>Frequência atual</b> = quantos posts o perfil fez nas últimas semanas. <b>Concorrente local</b> = negócio parecido, na mesma região, que disputa os mesmos clientes.</div>`,
        `<div class="card"><h3>Diagnóstico em 30 minutos</h3><ol class="golden"><li><span><b>Bio:</b> em 5 segundos dá para saber o que o negócio vende, em que bairro fica e como pedir? O link ou o WhatsApp funcionam?</span></li><li><span><b>Destaques:</b> existem? Estão atualizados? Cardápio, preços e horários batem com a realidade?</span></li><li><span><b>Últimos 12 posts:</b> anote datas, formatos e pilares. Há meses parados? É tudo oferta?</span></li><li><span><b>Comentários e mensagens:</b> há perguntas sem resposta? Que dúvidas se repetem?</span></li><li><span><b>Concorrentes locais:</b> olhe 3 perfis da região e anote o que fazem bem e o que falta.</span></li><li><span><b>Resumo:</b> escreva 3 pontos fortes, 3 problemas e 3 prioridades para o primeiro mês.</span></li></ol></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Item</th><th>Sinal bom</th><th>Sinal de alerta</th></tr><tr><td>Bio</td><td>"Sorvetes artesanais na Praça Central. Ter a dom, 13h às 22h. Peça pelo WhatsApp"</td><td>Só o nome da loja e um emoji</td></tr><tr><td>Destaques</td><td>Sabores do mês, preços atuais, como chegar</td><td>Promoção de dois anos atrás</td></tr><tr><td>Frequência</td><td>2 ou 3 posts por semana, sem buracos longos</td><td>10 posts num mês e nenhum nos 3 seguintes</td></tr><tr><td>Mensagens</td><td>Respostas no mesmo dia</td><td>Pedidos de orçamento sem resposta</td></tr></table></div>`,
        `<div class="code">DIAGNÓSTICO: Sorveteria Gelato da Praça (exemplo)
Fortes: fotos reais bonitas; clientes elogiam nos comentários; sabores criativos.
Problemas: bio sem horário; destaque com preço antigo; último post há 7 semanas.
Concorrentes: um vizinho posta os sabores do dia nos stories; outro não responde ninguém.
Prioridades: 1) corrigir bio e destaques; 2) voltar com 3 posts por semana; 3) responder as mensagens antigas.</div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Pular o diagnóstico e entregar um calendário bonito que ignora problemas básicos, como um telefone errado na bio; julgar o perfil só pelo número de seguidores; apresentar o diagnóstico como uma lista de críticas, o que constrange o dono. Comece pelo que está bom e trate os problemas como oportunidades. Quando não souber se uma informação está certa, como um preço no destaque, pergunte em vez de supor.</p></div>`,
        `<div class="card"><h3>Ética no diagnóstico</h3><p>Observe concorrentes para entender o mercado, nunca para copiar nem para falar mal deles nos posts do cliente. Só peça acesso ao perfil depois de fechar o trabalho e prefira os recursos de acesso compartilhado que as plataformas oferecem, em vez de pedir a senha. A IA pode organizar suas anotações em um resumo claro, mas os dados vêm da sua observação e do cliente. E não prometa que corrigir a bio vai multiplicar as vendas.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o mecânico escuta o motor antes de dizer o que precisa consertar.</div>`
      ],
      ch:[
        { who:'Simone, 46 anos, dona de uma sorveteria', says:'Quero começar os posts amanhã. Precisa mesmo olhar meu perfil antes? Já sei que está meio largado.',
          q:'O que o freelancer deve responder?',
          opts:[
            {t:'Começar já e ignorar o perfil, porque o importante é voltar a postar.', ok:false, why:'Posts novos num perfil com bio incompleta e destaques desatualizados levam o cliente final a informações erradas.'},
            {t:'Fazer um diagnóstico rápido (bio, destaques, últimos posts, mensagens e concorrentes locais) e combinar as prioridades com ela antes do calendário.', ok:true, why:'Em meia hora o diagnóstico mostra o que corrigir primeiro, e o calendário passa a resolver problemas reais.'},
            {t:'Apagar todos os posts antigos para recomeçar do zero.', ok:false, why:'Apagar sem analisar perde fotos boas e histórico, e é uma decisão que só a dona pode tomar.'}
          ]},
        { who:'Henrique, 32 anos, social media', says:'No destaque "Preços" da hamburgueria, o combo aparece a R$ 25. Acho que já mudou, mas não tenho certeza.',
          q:'Como tratar isso no diagnóstico?',
          opts:[
            {t:'Pedir para a IA estimar o preço atual de um combo na região e atualizar o destaque.', ok:false, why:'A IA não sabe o preço praticado pelo cliente. Um preço estimado é um fato inventado.'},
            {t:'Deixar como está, porque mexer em destaques não faz parte do trabalho.', ok:false, why:'Preço desatualizado gera reclamação no balcão. Apontar o problema no diagnóstico é parte do serviço.'},
            {t:'Marcar como "a confirmar" e perguntar ao dono o preço atual antes de propor qualquer ajuste.', ok:true, why:'Dúvida vira pergunta ao cliente, e só o preço confirmado entra no perfil.'}
          ]},
        { who:'Kátia, 38 anos, dona de uma loja de bolos', says:'A confeitaria da esquina tem um perfil lindo. Copia os posts dela e ainda faz uma indireta dizendo que o bolo dela é seco.',
          q:'Como usar os concorrentes no diagnóstico?',
          opts:[
            {t:'Observar o que eles fazem bem e o que falta, para encontrar o espaço da Kátia, sem copiar e sem falar mal de ninguém.', ok:true, why:'Olhar concorrentes mostra o que os clientes da região já veem. A diferença da Kátia vem dos fatos dela, não de ataques.'},
            {t:'Copiar os posts e fazer a indireta, já que foi a cliente que pediu.', ok:false, why:'Copiar viola o trabalho alheio, e falar mal de concorrente expõe a loja a conflito e a problemas legais.'},
            {t:'Ignorar os concorrentes, porque cada negócio é único.', ok:false, why:'Sem olhar a região, você perde pistas do que funciona e de onde há espaço para se destacar.'}
          ]}
      ]},
    { id:'1.6', title:'Projeto: diagnóstico, briefing e calendário de 2 semanas', min:30,
      body:[
        `<div class="card"><p>Hora de planejar de verdade. Escolha um pequeno negócio real (de um conhecido, da família ou do seu bairro, com autorização) ou, se ainda não tiver, um negócio fictício bem detalhado. Você vai produzir o diagnóstico, o briefing e o calendário que serviriam para começar a trabalhar amanhã. Pode usar IA para revisar e sugerir ideias, mas escreva o seu próprio pedido e confira cada fato com o dono do negócio.</p></div>`,
        `<div class="card"><h3>Como fica uma boa entrega</h3><p>Um documento curto, em três partes: o diagnóstico em meia página (pontos fortes, problemas e 3 prioridades), o briefing em 1 página com os itens "a confirmar" marcados e o calendário em tabela. Quem ler deve entender o negócio e o plano sem precisar perguntar nada. Separe uns 10 minutos no fim só para reler como se você fosse o dono.</p></div>`
      ],
      projeto:{
        entrega:'Um diagnóstico do perfil atual, um briefing de 1 página e um calendário de 2 semanas (dia, pilar, ideia, formato e chamada para ação) para um negócio real ou fictício identificado.',
        passos:[
          'Faça o diagnóstico rápido do perfil atual (bio, destaques, últimos posts, mensagens e 3 concorrentes locais) e anote 3 prioridades.',
          'Converse com o dono do negócio (ou detalhe o fictício) usando as 6 perguntas e escreva o briefing em 1 página, marcando "a confirmar" o que não foi verificado.',
          'Defina 3 ou 4 pilares e uma frequência que o negócio consiga manter.',
          'Monte o calendário de 2 semanas, escolhendo o formato de cada post pela mensagem e incluindo as prioridades do diagnóstico.',
          'Revise com IA usando um pedido escrito por você, ajuste o que não combinar com os fatos e releia tudo como se fosse o dono.'
        ],
        checklist:[
          'O diagnóstico aponta pontos fortes, problemas e prioridades, sem críticas ofensivas e sem copiar concorrentes.',
          'O briefing tem público concreto, diferencial, tom, objetivo e o que evitar.',
          'O calendário mistura pilares e não é só oferta.',
          'Cada formato foi escolhido pela mensagem e cabe no tempo do cliente.',
          'Nenhuma promoção, preço ou depoimento foi inventado.'
        ],
        minimo:400
      }}
  ]},
  { id:2, icon:'✍️', title:'Criar', sub:'Textos e artes de qualidade', lessons:[
    { id:'2.1', title:'Legendas com a voz da marca', min:10,
      body:[
        `<div class="card analogy"><h3>✍️ O sotaque da marca</h3><p>Cada marca fala de um jeito, como cada região tem seu sotaque. O cliente reconhece a marca pela voz, mesmo sem ver o logo.</p></div>`,
        `<div class="term"><b>Voz da marca</b> = o jeito característico de falar da marca. <b>Chamada para ação (CTA)</b> = convite para o próximo passo, como "chame no WhatsApp". <b>Clichê</b> = frase batida que não diz nada de concreto.</div>`,
        `<div class="card"><h3>Mostre exemplos e confira os fatos</h3><ol class="golden"><li><span>Reúna 3 textos do cliente de que ele gosta.</span></li><li><span>Peça à IA para descrever a voz e depois escrever no mesmo estilo.</span></li><li><span>Deixe campos para fatos reais (preço, horário, endereço), que você preenche.</span></li><li><span>Peça 3 versões.</span></li><li><span>Corte exageros e clichês, como "o melhor do Brasil".</span></li><li><span>Use uma chamada para ação clara e honesta.</span></li></ol>
          <p>Escreva no pedido: "Não invente promoções, preços nem depoimentos." Mesmo assim, revise tudo: a IA pode inventar detalhes.</p></div>`,
        `<div class="card"><h3>A estrutura de uma boa legenda</h3><p>Uma legenda que funciona costuma ter três partes. <b>Abertura:</b> a primeira linha, que aparece antes do "mais" e decide se a pessoa continua lendo. <b>Corpo:</b> a informação útil, com fatos concretos (o que é, para quem, quando, quanto). <b>Chamada:</b> o próximo passo, uma só, clara. Parágrafos curtos e frases simples ajudam quem lê no celular. Emojis podem dar ritmo, mas com moderação e combinando com a voz da marca.</p></div>`,
        `<div class="code">ANTES (genérico): "Venha conhecer nossa oficina! Qualidade e excelência no atendimento. Somos os melhores!"

DEPOIS (voz da oficina, com fatos): "Barulho no freio ao parar no semáforo? Pode ser pastilha gasta. Aqui a gente olha na hora e te mostra a peça antes de trocar. Seg a sex, 8h às 18h. Manda uma foto ou um áudio no WhatsApp que a gente te orienta."</div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Usar o mesmo tom para todos os clientes (a loja infantil descontraída e o escritório de contabilidade não falam igual); encher de adjetivos vazios ("incrível", "incomparável"); colocar três chamadas diferentes no mesmo post; publicar a primeira versão da IA sem ler em voz alta. Ler em voz alta é um teste simples: se soa como o dono do negócio falando, a voz está certa.</p></div>`,
        `<div class="card"><h3>Monte um guia de voz de meia página</h3><p>Depois de acertar a voz com o cliente, registre em um guia curto: 3 palavras que descrevem o tom (por exemplo, "acolhedor, direto, bem-humorado"), expressões que a marca usa, palavras proibidas, uso de emojis e a forma de tratar o cliente ("você", "vocês", "a gente"). Esse guia acelera cada nova legenda, serve de base para os pedidos à IA e garante que o perfil soe igual mesmo quando outra pessoa ajudar na produção. Revise o guia com o cliente a cada poucos meses: a voz pode amadurecer junto com o negócio.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que é o "sotaque" de uma marca.</div>`
      ],
      ch:[
        { who:'Rosana, 35 anos, atende uma pizzaria', says:'A IA escreveu \'a melhor pizza do Brasil, com 50% de desconto só hoje\' e eu publiquei sem conferir. O cliente não tinha promoção.',
          q:'O que ela deveria ter feito?',
          opts:[
            {t:'Revisar tudo antes de publicar, pedir à IA que não invente promoções ou preços e confirmar os fatos com o cliente.', ok:true, why:'Promoção falsa causa problema com os clientes do negócio. A conferência é parte do serviço.'},
            {t:'Nada: erros assim são normais em posts feitos com IA.', ok:false, why:'O erro era evitável com revisão. Quem publica responde pelo conteúdo.'},
            {t:'Culpar a ferramenta de IA e trocar por outra.', ok:false, why:'Qualquer ferramenta pode inventar detalhes. A revisão humana é o que protege.'}
          ]},
        { who:'Vanessa, 39 anos, dona de uma loja de roupas infantis', says:'A IA escreveu tudo formal, cheio de "prezados clientes". Minha loja é descontraída, as mães falam comigo como amiga.',
          q:'Qual é o melhor ajuste no pedido à IA?',
          opts:[
            {t:'Pedir para a IA "ser mais jovem" e encher de gírias e emojis.', ok:false, why:'Sem exemplos, a IA chuta um estilo exagerado que também não é o da Vanessa.'},
            {t:'Aceitar o tom formal, porque passa mais profissionalismo.', ok:false, why:'Tom diferente do real afasta as clientes que já conhecem o jeito da loja.'},
            {t:'Mostrar à IA 3 textos que a Vanessa já escreveu, pedir que descreva essa voz e reescreva as legendas nela.', ok:true, why:'Exemplos reais ensinam a voz com precisão. A IA imita o estilo em vez de inventar um.'}
          ]},
        { who:'Paulo, 44 anos, dono de uma oficina', says:'A legenda ficou "serviço de excelência, qualidade incomparável". Bonita, mas parece que não diz nada.',
          q:'Como melhorar essa legenda?',
          opts:[
            {t:'Trocar os adjetivos vazios por fatos concretos: que serviço, em quanto tempo, como pedir orçamento, e uma chamada clara.', ok:true, why:'Fatos concretos ajudam o cliente a decidir. Adjetivos genéricos todo concorrente usa.'},
            {t:'Acrescentar mais adjetivos para reforçar a qualidade.', ok:false, why:'Mais clichês deixam o texto ainda mais vazio e menos confiável.'},
            {t:'Tirar a legenda e deixar só a foto.', ok:false, why:'A legenda é onde ficam os fatos e a chamada para ação. Sem ela, a pessoa não sabe o que fazer.'}
          ]}
      ]},
    { id:'2.2', title:'Imagens e artes com ferramentas gratuitas', min:10,
      body:[
        `<div class="card analogy"><h3>🎨 A vitrine da loja</h3><p>A vitrine é a primeira coisa que o cliente vê. Quando é limpa e tem um estilo só, passa confiança. Os posts são a vitrine digital do negócio.</p></div>`,
        `<div class="term"><b>Identidade visual</b> = cores, fontes e estilo que se repetem nos posts. <b>Modelo (template)</b> = layout pronto para editar. <b>Texto na imagem</b> = palavras dentro da arte, que as IAs de imagem costumam errar.</div>`,
        `<div class="card"><h3>Consistência e conferência</h3><p>Existem editores de design com plano gratuito e IAs que geram imagens. Recursos, limites e licenças mudam, então leia os termos sobre uso comercial. Boas práticas:</p>
          <ol class="golden"><li><span>Defina 2 cores e 2 fontes do cliente.</span></li><li><span>Use modelos e mantenha o mesmo estilo.</span></li><li><span>IAs de imagem costumam errar textos dentro da arte: coloque os textos você mesmo no editor.</span></li><li><span>Confira mãos, logos e detalhes.</span></li><li><span>Não imite marcas nem pessoas reais.</span></li><li><span>Fotos reais do negócio costumam valer mais que imagens genéricas.</span></li><li><span>Pessoas reconhecíveis exigem autorização de uso de imagem.</span></li></ol></div>`,
        `<div class="card"><h3>Do rascunho à arte final</h3><p>Um fluxo simples: escolha o modelo no editor, ajuste para as cores e fontes do cliente, insira a foto real (ou uma imagem gerada sem texto, quando fizer sentido), digite o texto você mesmo e confira tudo no tamanho do celular. Formatos verticais costumam ocupar mais espaço na tela, mas as medidas recomendadas mudam: confira as atuais na ajuda da plataforma. Texto grande, pouco texto e bom contraste entre letra e fundo fazem a arte ser lida em um segundo.</p></div>`,
        `<div class="card"><h3>Foto real ou imagem gerada?</h3><p>Imagem gerada por IA pode servir para fundos, ilustrações e ideias abstratas. Mas mostrar como se fosse do negócio um bolo, um corte de cabelo ou um carro consertado que não são reais engana quem compra. Regra prática: produto e resultado sempre com foto real; se usar ilustração gerada, que fique claro que é ilustrativa. Uma foto simples, bem iluminada perto da janela, costuma passar mais confiança que uma imagem perfeita e falsa.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Mudar de cor e fonte a cada post; usar a foto de um cliente ou funcionário sem autorização; publicar arte com preço digitado errado; baixar imagens de buscadores achando que são livres. Antes de publicar, confira cada número em voz alta, comparando com a lista que o cliente enviou.</p></div>`,
        `<div class="card"><h3>Orientando o cliente a fotografar</h3><p>Muitas vezes quem tira as fotos é o próprio dono. Mande um guia simples: limpar a lente, usar luz da janela, fundo sem bagunça, celular na vertical, várias fotos do mesmo produto de ângulos diferentes. Dez minutos de orientação melhoram mais o perfil do que qualquer ferramenta. Peça que ele envie tudo numa pasta compartilhada, separada por semana, para você escolher as melhores.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma vitrine organizada faz a gente confiar mais na loja.</div>`
      ],
      ch:[
        { who:'Caio, 25 anos, faz artes para lojas', says:'Pedi a imagem de um cartaz com o preço escrito. A IA gerou, mas o preço saiu com letras trocadas, e publiquei assim mesmo.',
          q:'Qual é a melhor prática?',
          opts:[
            {t:'Aceitar: a IA sempre acerta textos curtos.', ok:false, why:'IAs de imagem erram textos com frequência, mesmo curtos.'},
            {t:'Reclamar com a ferramenta e esperar uma versão perfeita.', ok:false, why:'Esperar não resolve o post de hoje, e o preço errado já foi publicado.'},
            {t:'Gerar a imagem sem texto, colocar o preço você mesmo num editor e conferir cada detalhe antes de publicar.', ok:true, why:'O texto digitado por você sai certo, e a conferência evita erro de preço.'}
          ]},
        { who:'Mariana, 32 anos, faz posts para uma doceria', says:'A IA gerou a foto de um bolo lindo, bem mais bonito que o da doceria. Posso postar como se fosse o bolo deles?',
          q:'Qual é a orientação correta?',
          opts:[
            {t:'Não. Produto se mostra com foto real; ela pode ajudar a doceria a fazer fotos melhores com luz natural e um fundo simples.', ok:true, why:'Mostrar um bolo que não existe engana o cliente final, que vai receber outra coisa. Foto real bem feita resolve.'},
            {t:'Sim, porque a imagem é só para chamar atenção.', ok:false, why:'Quando o cliente receber um bolo diferente, a confiança na doceria cai e pode haver reclamação.'},
            {t:'Sim, desde que não diga nada na legenda.', ok:false, why:'Ficar em silêncio não muda o fato de que a imagem sugere um produto que não é o real.'}
          ]},
        { who:'Eduardo, 36 anos, dono de uma academia de bairro', says:'Tirei ontem uma foto ótima de um aluno treinando. Vou usar no post de matrícula.',
          q:'O que precisa acontecer antes de publicar?',
          opts:[
            {t:'Nada, porque a foto foi tirada dentro da academia.', ok:false, why:'Ser no local do negócio não dispensa a autorização de quem aparece reconhecível.'},
            {t:'Pedir autorização ao aluno, de preferência por escrito, dizendo onde e para que a foto será usada.', ok:true, why:'Uso de imagem de pessoa reconhecível exige autorização. Por escrito, fica registrado o que foi combinado.'},
            {t:'Publicar e tirar do ar se o aluno reclamar.', ok:false, why:'O constrangimento acontece antes da reclamação, e apagar depois não desfaz o problema.'}
          ]}
      ]},
    { id:'2.3', title:'Ganchos, chamadas honestas e roteiros de vídeos curtos', min:10,
      body:[
        `<div class="card analogy"><h3>🪝 O vendedor da feira</h3><p>Na feira, o vendedor que grita "olha a manga docinha, prova aqui!" para quem passa. Ele chama atenção com algo verdadeiro e convida para um próximo passo simples. Se gritasse "manga que cura tudo!", perderia a freguesia na semana seguinte. Gancho e chamada para ação são o grito honesto da feira.</p></div>`,
        `<div class="term"><b>Gancho</b> = a primeira linha da legenda ou os primeiros segundos do vídeo, que fazem a pessoa parar. <b>Caça-clique</b> = gancho exagerado ou falso, que promete o que o post não entrega. <b>Roteiro</b> = plano do vídeo, cena por cena, com o que aparece e o que se fala.</div>`,
        `<div class="card"><h3>Tipos de gancho honesto</h3><ol class="golden"><li><span><b>Pergunta real:</b> "Seu pão endurece no dia seguinte?"</span></li><li><span><b>Erro comum:</b> "3 erros no banho do cachorro em casa."</span></li><li><span><b>Bastidor:</b> "5h da manhã na padaria: o que acontece antes de abrir."</span></li><li><span><b>Resultado primeiro:</b> mostrar o corte pronto e depois como foi feito (com autorização da cliente).</span></li><li><span><b>Número concreto e verdadeiro:</b> "Nosso bolo leva 4 horas para ficar pronto."</span></li></ol><p>Peça à IA 10 opções de gancho e escolha a que for verdadeira e combinar com a voz da marca. Descarte qualquer uma que assuste, exagere ou prometa resultado.</p></div>`,
        `<div class="card"><h3>Chamada para ação honesta</h3><p>Uma chamada por post, clara e possível: "chame no WhatsApp", "salve para consultar depois", "responda na enquete", "encomende até quinta". Urgência só quando for real: "últimas unidades" com estoque cheio é enganar, e o cliente percebe.</p></div>`,
        `<div class="code">ROTEIRO DE VÍDEO CURTO (barbearia, cerca de 20 segundos)
0 a 3 s: degradê pronto girando na cadeira. Texto na tela: "Do zero ao degradê".
3 a 8 s: máquina passando na lateral (sem som de fala, com legenda).
8 a 14 s: acabamento na navalha, close.
14 a 18 s: cliente sorrindo no espelho (com autorização).
18 a 20 s: texto: "Agende pelo WhatsApp. Ter a sáb."</div>`,
        `<div class="card"><h3>Passo a passo do roteiro com IA</h3><p>Diga à IA o objetivo, a duração, o que o cliente consegue gravar e a voz da marca, e peça um roteiro em cenas com tempo. Depois adapte: troque cenas impossíveis, confira se a chamada é verdadeira e se cada pessoa que aparece autorizou. Gravar várias cenas curtas de uma vez (produção em lote) economiza tempo do cliente.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Começar o vídeo com 5 segundos de logo; gancho de medo ("seu filho corre perigo!"); vídeo longo sem cortes; chamada para ação escondida no fim de um texto enorme.</p></div>`,
        `<div class="card"><h3>Teste rápido do gancho</h3><p>Antes de aprovar um gancho, faça três perguntas: é verdade? O post entrega o que o gancho promete? O dono do negócio falaria assim? Se alguma resposta for "não", troque.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o vendedor da feira que mente sobre a fruta perde os fregueses.</div>`
      ],
      ch:[
        { who:'Renata, 30 anos, social media de um pet shop', says:'A IA sugeriu o gancho "Seu cachorro pode morrer se você fizer isso!" para um post sobre banho em casa.',
          q:'O que a Renata deve fazer?',
          opts:[
            {t:'Usar, porque medo chama atenção e gera engajamento.', ok:false, why:'Gancho de medo exagerado é caça-clique: assusta, quebra a confiança e não combina com um pet shop de bairro.'},
            {t:'Trocar por um gancho honesto, como "3 erros comuns no banho do cachorro em casa", e conferir as dicas com quem entende do assunto.', ok:true, why:'Chama atenção com algo verdadeiro e útil. Conferir as dicas evita espalhar informação errada.'},
            {t:'Tirar o gancho e começar a legenda direto pelas dicas.', ok:false, why:'Sem uma primeira linha que desperte interesse, muita gente nem chega às dicas.'}
          ]},
        { who:'Felipe, 35 anos, dono de uma barbearia', says:'Quero um vídeo mostrando o degradê, mas meus vídeos ficam com 2 minutos e ninguém assiste até o fim.',
          q:'Qual roteiro tem mais chance de funcionar?',
          opts:[
            {t:'Abrir com o logo da barbearia por 5 segundos e depois mostrar o corte inteiro.', ok:false, why:'Os primeiros segundos são decisivos. Logo parado faz a pessoa passar para o próximo vídeo.'},
            {t:'Gravar o corte inteiro sem cortes, para mostrar que é real.', ok:false, why:'Mostrar tudo deixa o vídeo longo e cansativo. Dá para ser verdadeiro com cenas selecionadas.'},
            {t:'Um vídeo de uns 20 segundos: resultado nos 3 primeiros segundos, 3 ou 4 cenas curtas do processo e uma chamada clara no final.', ok:true, why:'Gancho visual logo no início segura a atenção, e as cenas curtas contam a história sem cansar.'}
          ]},
        { who:'Cláudia, 50 anos, dona de uma loja de cosméticos', says:'A IA escreveu "Últimas unidades! Corre que acaba hoje!", mas eu tenho estoque de sobra desse batom.',
          q:'Qual é a melhor chamada para ação?',
          opts:[
            {t:'Uma chamada honesta e clara, como "Chame no WhatsApp para ver as cores disponíveis".', ok:true, why:'Convida para um próximo passo real, sem urgência falsa, e preserva a confiança das clientes.'},
            {t:'Manter a urgência, porque todo mundo faz isso.', ok:false, why:'Urgência falsa engana o consumidor e, quando a cliente vê o produto à venda na semana seguinte, perde a confiança.'},
            {t:'Não colocar chamada nenhuma, para não parecer insistente.', ok:false, why:'Sem chamada, a pessoa interessada não sabe o próximo passo. Uma chamada honesta não é insistência.'}
          ]}
      ]},
    { id:'2.4', title:'Hashtags e acessibilidade: texto alternativo e legendas', min:10,
      body:[
        `<div class="card analogy"><h3>🚪 A rampa na entrada da loja</h3><p>Uma rampa na porta permite que cadeirantes, mães com carrinho e entregadores entrem na loja. Ela custa pouco e amplia quem consegue ser atendido. Texto alternativo e legendas em vídeo são a rampa dos posts: deixam o conteúdo chegar a mais gente.</p></div>`,
        `<div class="term"><b>Hashtag</b> = palavra com # que agrupa posts sobre um assunto. <b>Texto alternativo</b> = descrição da imagem que leitores de tela leem em voz alta para pessoas cegas ou com baixa visão. <b>Legenda no vídeo (closed caption)</b> = texto na tela com as falas, útil para pessoas surdas e para quem assiste sem som.</div>`,
        `<div class="card"><h3>Hashtags com bom senso</h3><p>Hashtags ajudam a organizar e podem ajudar pessoas a encontrar o post, mas não são fórmula mágica: o peso delas muda conforme a plataforma e ao longo do tempo. Prefira poucas e relevantes a 30 genéricas como #amor e #instagood. Combine assunto e local: #padariavilanova, #barbeariaemcampinas, #docesdefesta. Escreva hashtags com maiúscula em cada palavra (#PadariaVilaNova): leitores de tela conseguem pronunciá-las melhor. E nunca prometa ao cliente que hashtags vão "viralizar" o post.</p></div>`,
        `<div class="card"><h3>Como escrever um bom texto alternativo</h3><ol class="golden"><li><span>Descreva o que importa para entender o post, em 1 ou 2 frases.</span></li><li><span>Inclua textos que aparecem na imagem (preço, horário, nome do produto).</span></li><li><span>Não comece com "imagem de"; o leitor de tela já avisa que é imagem.</span></li><li><span>Evite descrições genéricas como "foto bonita".</span></li></ol><p>A maioria das plataformas tem um campo de texto alternativo nas configurações avançadas do post. A IA pode sugerir uma descrição, mas confira se ela descreveu o que está realmente na foto.</p></div>`,
        `<div class="code">RUIM: "Imagem de pizza."
BOM: "Pizza de calabresa com cebola roxa saindo do forno a lenha. Texto na arte: Pizza do dia, sexta-feira, R$ 49."</div>`,
        `<div class="card"><h3>Outros cuidados de acessibilidade</h3><p>Ative ou adicione legendas nos vídeos e revise o texto gerado automaticamente, que costuma errar nomes e números. Não deixe informação importante só dentro da imagem: repita preço e horário na legenda. Use contraste forte entre letra e fundo e fontes grandes. Emojis demais atrapalham, porque o leitor de tela lê o nome de cada um ("rosto chorando de rir, rosto chorando de rir..."). Coloque as hashtags no fim, não no meio das frases.</p></div>`,
        `<div class="card"><h3>Por que isso também é bom negócio</h3><p>Muita gente assiste vídeos sem som no ônibus ou no trabalho; idosos leem melhor letras grandes; clientes com deficiência também compram. Acessibilidade é respeito e, ao mesmo tempo, um diferencial que poucos freelancers oferecem. Inclua no seu pacote.</p></div>`,
        `<div class="card"><h3>Checklist de 1 minuto</h3><p>Antes de publicar: texto alternativo preenchido, informação importante repetida na legenda, legendas no vídeo revisadas, contraste conferido, poucos emojis e hashtags no fim.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma rampa na porta da loja ajuda muito mais gente do que só quem usa cadeira de rodas.</div>`
      ],
      ch:[
        { who:'Helena, 42 anos, dona de uma papelaria', says:'Coloquei 30 hashtags como #amor, #instagood e #foto. Agora meu post vai viralizar, né?',
          q:'Como orientar a Helena?',
          opts:[
            {t:'Sim; quanto mais hashtags, mais alcance garantido.', ok:false, why:'Não existe garantia de alcance, e hashtags genéricas colocam o post no meio de milhões de outros sem relação com a papelaria.'},
            {t:'Trocar por poucas hashtags relevantes e locais (assunto e bairro ou cidade) e explicar que o conteúdo útil pesa mais que elas.', ok:true, why:'Hashtags específicas ajudam quem procura aquele assunto na região, e a orientação honesta evita expectativa falsa.'},
            {t:'Comprar seguidores para compensar a falta de alcance.', ok:false, why:'Seguidores comprados não compram na papelaria e podem prejudicar a conta.'}
          ]},
        { who:'Marcos, 38 anos, dono de uma pizzaria', says:'Um cliente cego me disse que nunca sabe qual é a pizza do dia nos meus posts. A informação está toda na arte.',
          q:'Qual é a melhor solução?',
          opts:[
            {t:'Colocar ainda mais texto dentro da arte, em letras maiores.', ok:false, why:'Leitores de tela não leem o texto dentro da imagem. Letra maior ajuda quem enxerga pouco, mas não quem é cego.'},
            {t:'Explicar ao cliente que esse é o padrão das redes sociais.', ok:false, why:'Existe solução simples. Ignorar o pedido afasta um cliente e passa uma imagem ruim.'},
            {t:'Escrever texto alternativo descrevendo a imagem e repetir sabor, preço e dia também na legenda.', ok:true, why:'O leitor de tela lê o texto alternativo e a legenda, e a informação chega a todos.'}
          ]},
        { who:'Tatiane, 29 anos, faz vídeos para um salão', says:'Nos meus vídeos a cabeleireira explica a técnica falando, mas muita gente assiste sem som no ônibus.',
          q:'O que melhora esses vídeos?',
          opts:[
            {t:'Adicionar legendas com as falas na tela e revisar o texto automático antes de publicar.', ok:true, why:'Legenda atende quem assiste sem som e pessoas surdas. A revisão corrige erros comuns da transcrição automática.'},
            {t:'Colocar uma música bem alta por cima da fala.', ok:false, why:'Quem está sem som continua sem entender, e a música ainda atrapalha quem ouve.'},
            {t:'Escrever a explicação só na legenda do post, abaixo do vídeo.', ok:false, why:'Ajuda um pouco, mas a pessoa precisa parar de assistir para ler. A legenda na tela acompanha cada cena.'}
          ]}
      ]},
    { id:'2.5', title:'Carrosséis que ensinam', min:10,
      body:[
        `<div class="card analogy"><h3>📚 As fichas de receita da avó</h3><p>Muita avó guardava as receitas em fichas: uma etapa por linha, letra grande, nada sobrando. Qualquer pessoa da família conseguia seguir. Um carrossel educativo é uma ficha de receita deslizável: cada tela leva a pessoa um passo adiante, sem esforço.</p></div>`,
        `<div class="term"><b>Carrossel educativo</b> = sequência de telas que ensina algo útil ao público do negócio. <b>Capa</b> = a primeira tela, que promete o que o carrossel vai ensinar. <b>Slide</b> = cada tela da sequência. <b>Revisão de fatos</b> = conferir cada dica com quem entende do assunto antes de publicar.</div>`,
        `<div class="card"><h3>Estrutura slide a slide</h3><ol class="golden"><li><span><b>Capa:</b> promessa clara e honesta, como "4 sinais de que o pneu precisa de troca".</span></li><li><span><b>Por que importa:</b> uma frase sobre o problema que a dica evita.</span></li><li><span><b>Conteúdo:</b> de 3 a 5 slides, um passo ou um erro por slide, com frase curta e imagem real quando possível.</span></li><li><span><b>Resumo:</b> a lista dos pontos em uma tela, boa para salvar.</span></li><li><span><b>Chamada:</b> um próximo passo honesto, como "Ficou na dúvida? Manda uma foto do pneu no WhatsApp".</span></li></ol></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Negócio</th><th>Tema educativo</th><th>Quem confere</th></tr><tr><td>Oficina</td><td>4 sinais de que o pneu precisa de troca</td><td>O mecânico responsável</td></tr><tr><td>Padaria</td><td>Como conservar o pão francês por mais tempo</td><td>O padeiro</td></tr><tr><td>Loja de tintas</td><td>3 erros que deixam a parede manchada</td><td>O dono ou o pintor parceiro</td></tr><tr><td>Pet shop</td><td>Cuidados com o pelo no verão</td><td>A veterinária ou a equipe de banho e tosa</td></tr></table></div>`,
        `<div class="code">CARROSSEL: Oficina do Zé (exemplo, 7 slides)
1. Capa: "4 sinais de que o pneu precisa de troca"
2. "Pneu gasto aumenta a distância de frenagem."
3. Sinal 1: sulco raso (foto real do indicador de desgaste)
4. Sinal 2: bolha na lateral
5. Sinal 3: rachaduras
6. Sinal 4: volante vibrando
7. "Na dúvida, passa aqui que a gente olha sem compromisso. Seg a sex, 8h às 18h."</div>`,
        `<div class="card"><h3>Revisão de fatos: a etapa que não pode faltar</h3><p>A IA ajuda a sugerir temas, organizar a sequência e encurtar frases, mas pode inventar números, regras e dicas que parecem certas e não são. O dono do negócio é o especialista: mande o rascunho para ele conferir cada slide. Se usar um número ("pneu abaixo de tal milímetro"), confirme a fonte. Em saúde, alimentação, estética e finanças, siga as regras do setor e nunca prometa resultado.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Slides lotados de texto em letra pequena; capa que promete "o segredo que ninguém conta" e entrega o óbvio; slides fora de ordem; dica perigosa sem conferência; esquecer o texto alternativo e a chamada no fim. Use as cores e fontes do cliente em todas as telas, para o carrossel ser reconhecido de longe.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma receita escrita em passos curtos é mais fácil de seguir do que um texto corrido.</div>`
      ],
      ch:[
        { who:'Wagner, 49 anos, dono de uma oficina', says:'Quero um carrossel ensinando a cuidar do carro, mas pode colocar tudo num slide só, para ficar rápido.',
          q:'Qual estrutura você propõe?',
          opts:[
            {t:'Um slide só com 10 dicas em letra pequena.', ok:false, why:'No celular, ninguém lê um bloco de texto miúdo. A dica se perde e o post não é salvo.'},
            {t:'Capa com promessa clara, uma dica por slide com frase curta, um resumo e uma chamada para orçamento pelo WhatsApp.', ok:true, why:'Uma ideia por tela facilita a leitura, o resumo incentiva salvar e a chamada indica o próximo passo.'},
            {t:'Quinze slides com a explicação técnica detalhada de cada peça.', ok:false, why:'Excesso de telas e termos técnicos cansa o público leigo, que desiste antes do fim.'}
          ]},
        { who:'Priscila, 34 anos, social media de um pet shop', says:'A IA escreveu no carrossel que cachorro deve tomar banho a cada 3 dias. Achei estranho.',
          q:'Qual é o próximo passo?',
          opts:[
            {t:'Não publicar essa dica antes de confirmar com a veterinária ou a equipe do pet shop e ajustar o texto ao que elas orientam.', ok:true, why:'Dica de saúde animal precisa de quem entende. A revisão de fatos evita espalhar orientação errada.'},
            {t:'Publicar, porque a IA deve ter pesquisado.', ok:false, why:'A IA pode inventar informações que parecem certas. Quem publica responde pelo conteúdo.'},
            {t:'Trocar para "a cada 5 dias", que parece mais razoável.', ok:false, why:'Trocar um chute por outro continua sendo inventar. A resposta certa vem do especialista.'}
          ]},
        { who:'Ronaldo, 41 anos, dono de uma loja de tintas', says:'Quero a capa "O segredo que os pintores escondem de você!" no carrossel sobre pintar parede.',
          q:'Como ajustar a capa?',
          opts:[
            {t:'Manter, porque mistério gera cliques.', ok:false, why:'É caça-clique: promete um segredo que não existe, frustra quem desliza e ainda insinua algo ruim sobre os pintores, que também são clientes da loja.'},
            {t:'Tirar a capa e começar direto pelo primeiro erro.', ok:false, why:'A capa é o que faz a pessoa parar e entender o assunto. Sem ela, o carrossel perde força.'},
            {t:'Trocar por uma capa honesta e específica, como "3 erros que deixam a parede manchada", e entregar exatamente isso nos slides.', ok:true, why:'A promessa clara atrai quem tem o problema, e o conteúdo cumpre o que a capa anunciou.'}
          ]}
      ]},
    { id:'2.6', title:'Projeto: 3 posts completos', min:30,
      body:[
        `<div class="card"><p>Use o briefing e o calendário do projeto do módulo 1. Agora você vai produzir três posts prontos para aprovação, como entregaria a um cliente. Pode usar IA para gerar opções, mas o pedido é seu, e a revisão final também.</p></div>`,
        `<div class="card"><h3>Como fica uma boa entrega</h3><p>Para cada post, um bloco com: formato e data, gancho, legenda completa, chamada para ação, descrição da arte (ou roteiro em cenas, ou a sequência de slides do carrossel), hashtags, texto alternativo e uma linha "a confirmar com o cliente". Quem aprova deve conseguir imaginar o post pronto só lendo o bloco. Reserve um tempo no fim para testar a leitura no celular.</p></div>`
      ],
      projeto:{
        entrega:'Três posts completos do seu calendário, cada um com formato, gancho, legenda na voz da marca, chamada para ação, ideia de arte (ou roteiro, se for vídeo, ou slides, se for carrossel), hashtags e texto alternativo.',
        passos:[
          'Escolha 3 posts do calendário com pilares diferentes, sendo pelo menos um carrossel educativo e, se possível, um vídeo curto.',
          'Escreva o seu pedido à IA com o briefing e exemplos da voz da marca, e gere opções de gancho e legenda.',
          'Revise: corte clichês, confira fatos (as dicas do carrossel com o dono) e deixe uma única chamada para ação honesta.',
          'Descreva a arte (foto real, cores, texto na tela), o roteiro em cenas ou o carrossel slide a slide, e escreva o texto alternativo.',
          'Leia tudo em voz alta, confira como fica na tela do celular e marque o que precisa ser confirmado com o cliente.'
        ],
        checklist:[
          'Cada post tem gancho verdadeiro e uma chamada para ação clara.',
          'O carrossel tem capa honesta, uma ideia por slide e resumo.',
          'As legendas soam como o dono do negócio e não têm promessas exageradas.',
          'Há texto alternativo e as hashtags são poucas e relevantes.',
          'Nenhum preço, promoção, dica ou depoimento foi inventado.'
        ],
        minimo:400
      }}
  ]},
  { id:3, icon:'✅', title:'Entregar', sub:'Revisão, aprovação e portfólio', lessons:[
    { id:'3.1', title:'Revisão, aprovação do cliente e cuidados', min:10,
      body:[
        `<div class="card analogy"><h3>✅ O revisor do jornal</h3><p>Antes de imprimir, o revisor lê de ponta a ponta, confere nomes e números. Sem esse olhar final, um erro pequeno vira manchete.</p></div>`,
        `<div class="term"><b>Aprovação</b> = o ok do cliente antes de publicar. <b>Fato</b> = informação que se pode verificar, como preço e horário. <b>Setor regulado</b> = área com regras próprias de publicidade, como saúde e finanças.</div>`,
        `<div class="card"><h3>Um fluxo simples de entrega</h3><ol class="golden"><li><span>Envie o material para aprovação do cliente, por escrito.</span></li><li><span>Confira fatos: preços, horários, nomes, endereços.</span></li><li><span>Setores regulados (saúde, estética, finanças, advocacia, alimentos) têm regras de publicidade: não prometa cura, resultado garantido nem "antes e depois" sem conferir as regras do setor com o cliente ou com a entidade responsável.</span></li><li><span>Depoimentos só com autorização.</span></li><li><span>Combine quantas rodadas de revisão estão incluídas.</span></li><li><span>Guarde as aprovações.</span></li></ol></div>`,
        `<div class="card"><h3>Como pedir a aprovação</h3><p>Junte os posts em um único lugar (um documento, uma pasta compartilhada ou uma sequência organizada no WhatsApp), numerados, com data prevista de publicação. Peça uma resposta clara: "aprovado" ou a lista de ajustes. Aprovação por áudio é fácil de esquecer ou contestar; se o cliente preferir áudio, responda por escrito resumindo o que foi aprovado. Defina um prazo: se a aprovação atrasar, a data de publicação também muda.</p></div>`,
        `<div class="code">Oi, Dona Célia! Seguem os 4 posts da semana de 10 a 16:
1) Seg: dica de conservação do pão
2) Qua: vídeo da fornada
3) Sex: enquete de sabores
4) Sáb: encomendas de bolo (preço R$ 65, conforme sua lista)
Pode responder "aprovado" ou me dizer o que ajustar até quinta, 18h? Estão incluídas 2 rodadas de ajuste por semana.</div>`,
        `<div class="card"><h3>Use a IA como segundo revisor</h3><p>Depois da sua revisão, peça à IA para apontar fatos que precisam de confirmação, promessas exageradas e possíveis problemas de imagem. Ela ajuda a enxergar o que passou despercebido, mas não substitui a conferência com o cliente nem a orientação de um profissional quando há dúvida jurídica ou de regras do setor.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Publicar sem aprovação "porque estava bom"; não combinar rodadas de ajuste e virar refém de alterações infinitas; perder as aprovações no meio das conversas; tratar post de clínica, nutricionista ou escritório como se fosse post de loja comum.</p></div>`,
        `<div class="card"><h3>Checklist final antes de agendar</h3><p>Leia cada post uma última vez procurando: preço e horário iguais aos da lista do cliente; nome do negócio, endereço e telefone corretos; nenhuma promessa de cura, resultado ou ganho; pessoas que aparecem com autorização; depoimentos autorizados; versão publicada igual à aprovada. Se algo mudou depois da aprovação, mesmo uma vírgula no preço, peça um novo ok. Esse cuidado de dois minutos é o que diferencia um serviço profissional de um amador.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um jornal tem alguém que lê tudo antes de imprimir.</div>`
      ],
      ch:[
        { who:'Fernanda, 30 anos, atende uma clínica de estética', says:'A IA sugeriu o post \'elimine rugas para sempre, resultado garantido\'. Posso publicar?',
          q:'Qual é a melhor atitude?',
          opts:[
            {t:'Publicar, porque promessas fortes atraem clientes.', ok:false, why:'Garantir resultado em saúde e estética é arriscado e pode violar as regras de publicidade do setor.'},
            {t:'Reescrever sem garantias de resultado e conferir com o cliente as regras de publicidade do setor.', ok:true, why:'Evita problema com as regras do setor e mantém o post honesto.'},
            {t:'Publicar e apagar se alguém reclamar.', ok:false, why:'O dano pode acontecer antes de qualquer reclamação.'}
          ]},
        { who:'Rodrigo, 33 anos, social media de uma nutricionista', says:'A cliente aprovou o post por áudio. Depois que publiquei, ela disse que nunca tinha aprovado aquela versão.',
          q:'O que evitaria esse problema?',
          opts:[
            {t:'Confiar na memória e insistir que ela aprovou.', ok:false, why:'Sem registro, vira palavra contra palavra e o relacionamento com a cliente se desgasta.'},
            {t:'Registrar a aprovação por escrito, indicando qual versão e qual data, e guardar esse histórico.', ok:true, why:'Com o registro, fica claro o que foi aprovado. Se a cliente prefere áudio, basta responder com um resumo escrito.'},
            {t:'Parar de pedir aprovação e publicar direto, para ganhar tempo.', ok:false, why:'Sem aprovação, qualquer erro fica todo sob sua responsabilidade, e o cliente perde a confiança.'}
          ]},
        { who:'Bianca, 27 anos, freelancer', says:'A dona do restaurante pediu a sexta rodada de alterações no mesmo post. Eu nunca combinei nada sobre isso.',
          q:'Qual é a atitude mais profissional?',
          opts:[
            {t:'Recusar qualquer ajuste a partir de agora e bloquear a cliente.', ok:false, why:'Reação brusca rompe o relacionamento, e a falta de combinado foi também da freelancer.'},
            {t:'Continuar fazendo alterações sem limite e sem falar nada.', ok:false, why:'Sem limite, o trabalho não termina e o valor por hora despenca.'},
            {t:'Fazer este ajuste com educação e propor, por escrito, quantas rodadas estão incluídas daqui em diante e como ficam os ajustes extras.', ok:true, why:'Resolve o presente sem atrito e cria um combinado claro para o futuro.'}
          ]}
      ]},
    { id:'3.2', title:'Projeto de portfólio e checklist', min:10,
      body:[
        `<div class="card analogy"><h3>📁 A vitrine do seu próprio ateliê</h3><p>O costureiro mostra peças prontas para o cliente imaginar o que ele faz. Seu portfólio é essa vitrine: sem ele, ninguém sabe do que você é capaz.</p></div>`,
        `<div class="term"><b>Portfólio</b> = exemplos reais ou de treino do que você faz. <b>Case</b> = a história de um trabalho: o problema, o que você fez e o resultado real. <b>Projeto fictício</b> = trabalho de treino para um negócio inventado.</div>`,
        `<div class="card"><h3>O que entra no portfólio e checklist</h3><p>Escolha um negócio real, com autorização, ou fictício, e reúna:</p>
          <ol class="golden"><li><span>Briefing de 1 página.</span></li><li><span>Calendário de 7 dias.</span></li><li><span>Cinco legendas na voz da marca.</span></li><li><span>Duas artes feitas no editor.</span></li><li><span>Um documento de revisão com os fatos conferidos.</span></li></ol>
          <p>Deixe claro no portfólio quando o projeto for fictício.</p>
          <p><b>Checklist "estou pronto para cobrar?":</b> briefing feito, calendário feito, revisão feita, combinado escrito (escopo, número de posts, revisões), imagens com licença e nenhuma promessa de ganho.</p>
          <p><b>Próximo passo:</b> nas próximas lições você aprende métricas, relatório, pacote mensal e atendimento a comentários, e o projeto deste módulo fecha o curso. Os projetos dos três módulos já formam o seu kit. Depois, um bom complemento é o curso "Pacotes de Mensagens para WhatsApp e LinkedIn".</p>
          <p>⚠️ Este curso não garante renda: ele ensina a oferecer um serviço com qualidade.</p></div>`,
        `<div class="card"><h3>Como contar um case</h3><p>Um case bom cabe em uma página e segue uma ordem simples: <b>situação</b> (o negócio e o problema, por exemplo "padaria sem posts há 6 meses"), <b>o que você fez</b> (briefing, calendário, posts, fotos orientadas), <b>resultado real</b> (só o que foi medido, com o período, e dizendo de onde veio o número) e <b>aprendizado</b>. Se não houver números, tudo bem: mostre o antes e depois visual do perfil e uma frase autorizada do cliente sobre o processo.</p></div>`,
        `<div class="why-chain"><b>Por que ser honesto no portfólio?</b> Porque o cliente vai contratar com base nele. Por quê? Porque é a única prova que ele tem antes de trabalhar com você. E se a prova for falsa? A primeira entrega revela a diferença, e você perde o cliente e a indicação dele.</div>`,
        `<div class="card"><h3>Formato e seleção</h3><p>Prefira qualidade a quantidade: de 6 a 9 peças bem escolhidas, organizadas em 2 ou 3 cases, mostram mais que 40 posts soltos. Pode ser um PDF curto, uma página simples ou os destaques do seu próprio perfil profissional. Mostre variedade (carrossel, vídeo curto, stories) e setores diferentes.</p></div>`,
        `<div class="card"><h3>Autorização para usar no portfólio</h3><p>Mesmo em trabalho real e pago, pergunte ao cliente se pode mostrar os posts e os números no seu portfólio. Alguns preferem não divulgar dados. Registre a resposta por escrito. Se o cliente não autorizar os números, mostre só o processo e as peças, ou troque o nome do negócio e avise que os dados foram omitidos.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, por que mostrar trabalhos prontos ajuda a conquistar clientes.</div>`
      ],
      ch:[
        { who:'Leonardo, 22 anos, quer montar um portfólio e ainda não tem clientes', says:'Vou colocar no meu portfólio posts que fiz para marcas famosas, sem avisar que foi treino, para parecer que já trabalhei com elas.',
          q:'Qual é a melhor abordagem?',
          opts:[
            {t:'Criar projetos para negócios reais, com autorização, ou para um negócio fictício, deixando claro no portfólio quando for fictício.', ok:true, why:'Portfólio honesto constrói confiança e evita problemas por se passar por quem não é.'},
            {t:'Colocar os posts das marcas famosas como se fossem trabalhos reais.', ok:false, why:'Fingir que trabalhou para marcas é enganoso e pode causar problemas jurídicos e de reputação.'},
            {t:'Não montar portfólio e esperar o primeiro cliente aparecer.', ok:false, why:'Sem exemplos, o cliente não tem como avaliar o seu trabalho.'}
          ]},
        { who:'Natália, 31 anos, freelancer', says:'A padaria que eu atendo teve mais encomendas no mês em que comecei. Posso escrever no portfólio "aumentei as vendas em 200%"?',
          q:'Como apresentar esse resultado?',
          opts:[
            {t:'Escrever 200%, porque um número grande impressiona.', ok:false, why:'Ela não mediu as vendas, e outros fatores (data comemorativa, clima, indicação) podem ter influenciado. Número inventado é enganoso.'},
            {t:'Relatar só o que foi medido, com período e fonte, como "as mensagens pelo perfil passaram de 12 para 30 no mês, segundo os dados da plataforma", sem atribuir tudo a si.', ok:true, why:'Resultado com fonte e contexto é verificável e honesto, e passa mais credibilidade.'},
            {t:'Arredondar para um número bonito que pareça realista.', ok:false, why:'Arredondar sem base continua sendo inventar. Se o cliente perguntar como mediu, não haverá resposta.'}
          ]},
        { who:'Igor, 24 anos, iniciante', says:'Fiz 40 posts de treino nos últimos meses. Coloco todos no portfólio para mostrar que trabalho muito?',
          q:'Qual é a melhor escolha?',
          opts:[
            {t:'Colocar os 40, porque quantidade mostra experiência.', ok:false, why:'O cliente não vai olhar 40 posts, e os mais fracos diminuem a impressão dos melhores.'},
            {t:'Mostrar só 1 post, o melhor de todos.', ok:false, why:'Um único exemplo não mostra variedade de formatos nem consistência.'},
            {t:'Selecionar de 6 a 9 peças variadas, organizadas em cases curtos com briefing, o que fez e o aprendizado, indicando o que é fictício.', ok:true, why:'Seleção organizada mostra qualidade, variedade e raciocínio, que é o que o cliente quer avaliar.'}
          ]}
      ]},
    { id:'3.3', title:'Métricas básicas e relatório simples', min:10,
      body:[
        `<div class="card analogy"><h3>🩺 O check-up de rotina</h3><p>No check-up, o médico olha alguns números (pressão, glicose) e compara com a consulta anterior. Ele não promete que você nunca vai ficar doente, mas mostra o que melhorou e o que merece atenção. O relatório mensal de redes sociais é o check-up do perfil.</p></div>`,
        `<div class="term"><b>Alcance</b> = quantas contas diferentes viram o conteúdo. <b>Visualizações</b> = quantas vezes o conteúdo foi exibido (a mesma pessoa pode contar mais de uma vez). <b>Interações</b> = curtidas, comentários, compartilhamentos e salvamentos. <b>Métrica de vaidade</b> = número que parece bom mas não diz se o negócio avançou, como curtidas isoladas.</div>`,
        `<div class="card"><h3>Que números olhar</h3><p>Os nomes e a forma de cálculo mudam entre plataformas e com o tempo, então use as definições da ferramenta de estatísticas da própria rede. Para pequenos negócios, normalmente importa mais o que se aproxima da venda: mensagens recebidas, cliques no link ou no WhatsApp, pedidos de orçamento, salvamentos e compartilhamentos. Curtidas e seguidores são sinais, não objetivos. Compare sempre com o período anterior, e não um post isolado.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Métrica</th><th>O que sugere</th><th>Cuidado</th></tr><tr><td>Alcance</td><td>Quanta gente nova viu</td><td>Varia muito com mudanças da plataforma</td></tr><tr><td>Salvamentos</td><td>Conteúdo útil, para consultar depois</td><td>Mais comum em carrosséis de dicas</td></tr><tr><td>Mensagens e cliques</td><td>Interesse real em comprar</td><td>Confirme com o cliente quantas viraram venda</td></tr><tr><td>Seguidores</td><td>Crescimento da audiência</td><td>Seguidor comprado não compra</td></tr></table></div>`,
        `<div class="code">RELATÓRIO DE SETEMBRO: Pet Shop Amigo Fiel
Feito: 12 posts (4 carrosséis, 4 vídeos curtos, 4 posts), stories 3x por semana.
Números (comparado a agosto): alcance 3.100 (antes 2.600); mensagens 41 (antes 25); salvamentos 88 (antes 40).
Destaque: carrossel "3 erros no banho em casa" teve mais salvamentos.
Aprendizados: dicas de cuidado geram mais conversa que fotos de produto.
Próximo mês: mais carrosséis de dicas e um vídeo por semana de bastidor do banho e tosa.</div>`,
        `<div class="card"><h3>Montando o relatório, passo a passo</h3><ol class="golden"><li><span>Anote os números do mês na ferramenta de estatísticas e os do mês anterior.</span></li><li><span>Pergunte ao cliente quantas mensagens viraram pedidos (só ele sabe).</span></li><li><span>Peça à IA ajuda para resumir em linguagem simples, mas confira cada conta: ela pode errar porcentagens.</span></li><li><span>Escreva no máximo 3 aprendizados e 3 próximos passos.</span></li><li><span>Envie em 1 página e ofereça uma conversa rápida.</span></li></ol></div>`,
        `<div class="card"><h3>Ética e expectativa</h3><p>Nunca prometa número de seguidores, alcance ou vendas: isso depende da plataforma, do produto, do preço e de muitos fatores fora do seu controle. Prometa entregas (posts, relatório, constância) e acompanhamento honesto. Se os números caírem, mostre também, com hipóteses e ajustes.</p></div>`,
        `<div class="card"><h3>Linguagem do relatório</h3><p>Escreva para o dono do negócio, não para outro social media: "41 pessoas mandaram mensagem pelo perfil" é mais claro que "41 conversões no direct".</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o médico compara os exames de agora com os de antes, em vez de olhar só um número.</div>`
      ],
      ch:[
        { who:'Adriana, 43 anos, dona de uma loja de roupas', says:'Meu post teve 2 mil curtidas, mas ninguém mandou mensagem para comprar. Não entendo.',
          q:'Como explicar e o que ajustar?',
          opts:[
            {t:'Explicar que curtida não é venda, olhar mensagens e cliques, e testar posts com peças, preços reais e uma chamada clara para o WhatsApp.', ok:true, why:'Curtidas são sinal de interesse, não de compra. Ajustar conteúdo e chamada aproxima o perfil das vendas.'},
            {t:'Dizer que 2 mil curtidas já é sucesso e que as vendas virão sozinhas.', ok:false, why:'Confunde métrica de vaidade com resultado de negócio e cria expectativa sem base.'},
            {t:'Comprar curtidas para o próximo post ir ainda melhor.', ok:false, why:'Curtidas compradas não geram vendas e distorcem os números que ajudam a decidir.'}
          ]},
        { who:'Leandro, 30 anos, social media', says:'O dono da hamburgueria quer que eu coloque no contrato a garantia de mil seguidores novos por mês.',
          q:'Qual é a resposta mais honesta e profissional?',
          opts:[
            {t:'Aceitar, e se não bater a meta, comprar seguidores para cumprir.', ok:false, why:'Seguidor comprado não consome, pode prejudicar a conta e esconde a realidade do cliente.'},
            {t:'Explicar que não dá para garantir seguidores, propor entregas claras (posts, frequência, relatório) e acompanhar as métricas juntos.', ok:true, why:'Você controla a qualidade e a constância das entregas, não o comportamento da plataforma. Prometer só o que controla é honesto.'},
            {t:'Aceitar a garantia e torcer para dar certo.', ok:false, why:'Promessa sem controle vira quebra de contrato e conflito.'}
          ]},
        { who:'Beatriz, 35 anos, social media de uma clínica veterinária', says:'Passei os números para a IA e ela escreveu que o alcance cresceu 80%. Fui conferir e foi 18%.',
          q:'O que a Beatriz deve fazer com o relatório?',
          opts:[
            {t:'Enviar como está, porque o cliente não vai conferir.', ok:false, why:'Número errado no relatório engana o cliente e, se for descoberto, destrói a confiança.'},
            {t:'Tirar todos os números e enviar só os aprendizados.', ok:false, why:'Sem números, o relatório perde a base para comparar meses e tomar decisões.'},
            {t:'Corrigir para 18%, conferir todas as outras contas com a fonte e manter o hábito de revisar o que a IA calcula.', ok:true, why:'A IA pode errar contas. Conferir com a fonte garante um relatório confiável.'}
          ]}
      ]},
    { id:'3.4', title:'Pacote, preço com cautela e rotina mensal', min:10,
      body:[
        `<div class="card analogy"><h3>🍱 O cardápio do restaurante por quilo</h3><p>No restaurante, o cliente sabe o que está incluído no prato executivo e quanto paga pela sobremesa extra. Ninguém fica constrangido no caixa. Um pacote de redes sociais bem descrito funciona como esse cardápio: claro sobre o que entra, o que não entra e quanto custa.</p></div>`,
        `<div class="term"><b>Pacote</b> = conjunto fixo de entregas mensais por um valor combinado. <b>Escopo</b> = a lista do que está incluído e do que não está. <b>Valor-hora</b> = quanto você precisa ganhar por hora de trabalho para cobrir custos e viver. <b>Produção em lote</b> = fazer várias tarefas iguais de uma vez, como todas as legendas do mês num só dia.</div>`,
        `<div class="card"><h3>Como chegar a um preço</h3><ol class="golden"><li><span>Cronometre quanto tempo leva cada entrega (um post, um carrossel, um vídeo, o relatório), incluindo reuniões e ajustes.</span></li><li><span>Some as horas do pacote no mês.</span></li><li><span>Defina seu valor-hora mínimo, considerando custos (internet, ferramentas pagas, impostos) e o que você precisa ganhar.</span></li><li><span>Multiplique e compare com o que se pratica na sua região, perguntando a outros profissionais e pesquisando anúncios.</span></li><li><span>Se o cliente não puder pagar, reduza o escopo, não o seu valor-hora.</span></li></ol></div>`,
        `<div class="card"><h3>Faixas como referência, com cautela</h3><p>Em pesquisas informais, pacotes simples para pequenos negócios feitos por iniciantes aparecem com valores que vão de algumas centenas de reais até perto de mil e poucos reais por mês, conforme o número de posts, a presença de vídeos e a cidade. Isso é só um ponto de partida: os valores variam muito por região, experiência e escopo, e mudam com o tempo. Pesquise antes de definir os seus. Para emitir nota fiscal ou formalizar como MEI, consulte um contador.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Pacote (exemplo)</th><th>Inclui</th><th>Não inclui</th></tr><tr><td>Essencial</td><td>8 posts por mês, legendas, 1 rodada de ajuste, relatório simples</td><td>Vídeos, stories diários, responder mensagens</td></tr><tr><td>Completo</td><td>12 posts, 4 vídeos curtos roteirizados, stories 3x por semana, 2 rodadas, relatório e reunião</td><td>Impulsionamento pago, fotos presenciais, atendimento no direct</td></tr></table></div>`,
        `<div class="card"><h3>A rotina mensal</h3><p><b>Semana 1:</b> reunião curta, calendário do mês e aprovação. <b>Semana 2:</b> produção em lote (fotos orientadas, legendas, artes, roteiros) e envio para aprovação. <b>Semana 3:</b> ajustes e agendamento das publicações. <b>Semana 4:</b> relatório e planejamento do próximo mês. Com essa rotina, dá para atender alguns clientes sem viver correndo de véspera.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Dar preço na hora, por medo de perder o cliente; não escrever o escopo e acabar respondendo mensagens do cliente de graça; prometer resultado para justificar o preço. Coloque tudo num combinado escrito simples e, em dúvidas de contrato, procure orientação profissional.</p></div>`,
        `<div class="card"><h3>Reajuste e revisão do pacote</h3><p>Combine desde o início quando o pacote será revisto (por exemplo, a cada 6 meses). Assim, ajustar preço ou escopo vira rotina, não surpresa.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o cardápio mostra o preço de cada coisa antes de a pessoa pedir.</div>`
      ],
      ch:[
        { who:'Jéssica, 26 anos, freelancer', says:'Uma confeitaria pediu orçamento e eu falei R$ 150 por mês por 20 posts com vídeos, porque fiquei com medo de perder a cliente.',
          q:'O que ela deveria ter feito?',
          opts:[
            {t:'Manter o valor, porque o importante é ter clientes.', ok:false, why:'Com tantas entregas, o valor por hora fica tão baixo que o trabalho se torna insustentável e a qualidade cai.'},
            {t:'Pedir um dia para responder, calcular as horas reais e o valor-hora, pesquisar a região e, se preciso, oferecer um pacote menor dentro do orçamento.', ok:true, why:'Preço com base em horas e pesquisa é sustentável, e ajustar o escopo preserva o seu valor.'},
            {t:'Cobrar um valor bem alto, para parecer profissional.', ok:false, why:'Preço sem cálculo, alto ou baixo, é chute. Profissionalismo é saber explicar de onde vem o valor.'}
          ]},
        { who:'Otávio, 40 anos, dono de uma oficina', says:'No pacote que contratei está incluído responder as mensagens dos clientes no direct, né? Achei que estava.',
          q:'O que a freelancer deveria ter feito desde o início?',
          opts:[
            {t:'Deixar tudo combinado só na conversa, porque é mais informal.', ok:false, why:'Combinado só falado gera exatamente esse tipo de mal-entendido.'},
            {t:'Aceitar responder as mensagens agora, sem cobrar, para não perder o cliente.', ok:false, why:'Atendimento no direct é um trabalho diário à parte. Assumir de graça compromete o tempo e o preço do pacote.'},
            {t:'Escrever o escopo do pacote listando o que está incluído e o que não está, como atendimento no direct, e oferecer esse serviço à parte, se quiser.', ok:true, why:'Escopo escrito evita expectativa errada e abre espaço para vender um serviço extra de forma clara.'}
          ]},
        { who:'Larissa, 28 anos, atende 3 clientes', says:'Faço os posts de cada cliente no dia anterior, sempre correndo. Já atrasei duas vezes este mês.',
          q:'O que mais ajudaria a Larissa?',
          opts:[
            {t:'Adotar uma rotina mensal: calendário aprovado no início, produção em lote, agendamento das publicações e relatório no fim do mês.', ok:true, why:'Trabalhar com antecedência e em lote reduz a correria e dá tempo para revisar com calma.'},
            {t:'Trabalhar mais horas à noite para dar conta.', ok:false, why:'Mais horas sem organização levam a cansaço e mais erros, sem resolver a causa.'},
            {t:'Largar todos os clientes e recomeçar do zero.', ok:false, why:'O problema é de organização, não de clientes. Uma rotina resolve sem perder renda.'}
          ]}
      ]},
    { id:'3.5', title:'Comentários, mensagens e pequenas crises', min:10,
      body:[
        `<div class="card analogy"><h3>💬 O balcão da loja cheia</h3><p>Quando um cliente reclama em voz alta no balcão, a fila inteira presta atenção no jeito como o atendente responde. Educação e calma acalmam todo mundo; discussão espanta até quem estava satisfeito. Comentários públicos são esse balcão: a resposta é vista por todos os seguidores.</p></div>`,
        `<div class="term"><b>Atendimento nas redes</b> = responder comentários e mensagens privadas (direct). <b>Reclamação pública</b> = crítica feita nos comentários, à vista de todos. <b>Crise pequena</b> = problema que começa a chamar atenção, como várias reclamações sobre o mesmo erro. <b>Roteiro de respostas</b> = respostas-modelo aprovadas pelo dono para as situações mais comuns.</div>`,
        `<div class="tw"><table class="tbl"><tr><th>Situação</th><th>O social media faz</th><th>O dono decide</th></tr><tr><td>Dúvida de horário ou preço</td><td>Responde com a informação aprovada</td><td>Mantém a lista de preços atualizada</td></tr><tr><td>Reclamação de produto ou serviço</td><td>Acolhe em público e chama no privado</td><td>Troca, desconto ou reembolso</td></tr><tr><td>Erro num post (preço errado)</td><td>Avisa, propõe a correção e publica depois do ok</td><td>Como honrar ou corrigir a oferta</td></tr><tr><td>Ofensa, golpe ou spam</td><td>Oculta ou denuncia conforme a regra combinada</td><td>A regra de moderação</td></tr><tr><td>Ameaça, assunto jurídico ou de saúde</td><td>Não responde por conta própria e avisa na hora</td><td>O que fazer, com orientação profissional</td></tr></table></div>`,
        `<div class="card"><h3>Passo a passo diante de uma reclamação pública</h3><ol class="golden"><li><span>Não responda no calor do momento nem apague a crítica.</span></li><li><span>Avise o dono e entenda o que aconteceu.</span></li><li><span>Responda em público de forma curta: agradeça, reconheça e convide para o privado.</span></li><li><span>No privado, siga a solução que o dono decidiu, sem prometer o que ele não autorizou.</span></li><li><span>Se resolveu, uma resposta final em público mostra cuidado a quem lê depois.</span></li><li><span>Registre o caso e, se o problema se repetir, leve o assunto ao dono.</span></li></ol></div>`,
        `<div class="code">COMENTÁRIO: "Pedi pizza sábado e chegou fria e com 1 hora de atraso."
RESPOSTA (aprovada pelo dono): "Oi, Carla! Sentimos muito pela pizza fria e pela demora no sábado. Isso não é o que queremos para você. Já te chamamos no direct para entender e resolver. Obrigado por avisar."</div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Apagar críticas legítimas, o que costuma gerar prints e mais reclamações; discutir em público ou culpar o cliente; prometer reembolso sem autorização; respostas copiadas e frias, iguais para tudo; deixar a IA responder sozinha. A IA pode rascunhar respostas a partir do roteiro aprovado, mas cada uma passa pela sua leitura, e reclamações sempre passam pelo dono.</p></div>`,
        `<div class="card"><h3>Ética e escopo</h3><p>Nunca peça CPF, endereço ou telefone nos comentários: dados pessoais só no privado e só o necessário. Não invente desculpas, não crie perfis falsos para elogiar o negócio e não pague por avaliações. Lembre que responder mensagens todos os dias é um serviço à parte, que precisa estar no escopo e no preço do pacote.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o jeito de responder uma reclamação no balcão importa para todas as pessoas da fila.</div>`
      ],
      ch:[
        { who:'Jorge, 55 anos, dono de uma pizzaria', says:'Uma cliente comentou no post que a pizza chegou fria e atrasada. Apaga esse comentário antes que alguém veja!',
          q:'Qual é a melhor orientação?',
          opts:[
            {t:'Apagar o comentário e bloquear a cliente, para proteger a imagem da pizzaria.', ok:false, why:'Apagar crítica legítima costuma piorar: a cliente volta com prints e outras pessoas percebem.'},
            {t:'Responder que a pizza saiu quente e que a culpa foi do trânsito.', ok:false, why:'Discutir em público e se defender sem apurar passa descaso para todos que leem.'},
            {t:'Manter o comentário, responder em público com educação, reconhecer o problema, chamar no privado e deixar o Jorge decidir a solução.', ok:true, why:'A resposta calma mostra cuidado a todos os seguidores, e a solução fica com quem pode decidir.'}
          ]},
        { who:'Elaine, 29 anos, social media de um salão', says:'Uma cliente pediu no direct o dinheiro de volta por um corte. Respondo logo que vamos devolver, para acalmar?',
          q:'O que a Elaine deve fazer?',
          opts:[
            {t:'Acolher a cliente, dizer que vai verificar com a dona e retornar num prazo combinado, deixando a decisão do reembolso com a dona.', ok:true, why:'Reembolso é decisão do negócio. Acolher e dar prazo acalma a cliente sem prometer o que não foi autorizado.'},
            {t:'Prometer a devolução na hora, para encerrar o assunto.', ok:false, why:'Prometer sem autorização compromete a dona e pode gerar um segundo conflito, agora interno.'},
            {t:'Ignorar a mensagem até a cliente desistir.', ok:false, why:'Silêncio costuma levar a reclamação para os comentários ou para sites de reclamação, à vista de todos.'}
          ]},
        { who:'Sérgio, 36 anos, social media de uma academia', says:'Estou pensando em deixar a IA responder sozinha todos os comentários, inclusive as reclamações.',
          q:'Qual é o uso mais seguro da IA aqui?',
          opts:[
            {t:'Deixar a IA responder tudo automaticamente, para ganhar tempo.', ok:false, why:'Sem revisão, a IA pode prometer o que a academia não faz ou responder mal a uma situação delicada.'},
            {t:'Usar a IA para rascunhar respostas a partir de um roteiro aprovado pelo dono, revisar cada uma e encaminhar reclamações a ele.', ok:true, why:'A IA agiliza o rascunho, e a revisão humana garante tom certo e decisões nas mãos do dono.'},
            {t:'Proibir qualquer uso de IA no atendimento.', ok:false, why:'Com roteiro e revisão, a IA ajuda bastante. O problema é o uso sem supervisão, não a ferramenta.'}
          ]}
      ]},
    { id:'3.6', title:'Projeto: relatório e proposta de pacote mensal', min:30,
      body:[
        `<div class="card"><p>Este projeto fecha o curso. Você vai preparar os documentos que transformam posts em um serviço contínuo: um relatório simples e uma proposta de pacote. Use o negócio dos projetos anteriores. Se ainda não houver números reais, faça um relatório-modelo e indique claramente que os números são de exemplo. Junto com os projetos dos módulos 1 e 2, ele forma o seu kit de portfólio. A trilha terá um projeto final próprio.</p></div>`,
        `<div class="card"><h3>Como fica uma boa entrega</h3><p>Duas páginas no máximo. Na primeira, o relatório: o que foi feito, números com comparação e fonte, 3 aprendizados e 3 próximos passos. Na segunda, a proposta: entregas do mês, o que inclui e o que não inclui (deixando claro quem responde comentários e mensagens), rodadas de ajuste, rotina das 4 semanas e o preço com a conta que leva a ele. Antes de considerar pronto, peça a alguém de fora para ler e diga o que essa pessoa não entendeu.</p></div>`,
        `<div class="card"><p>⚠️ A proposta mostra a qualidade do seu serviço; ela não garante clientes nem renda. Em dúvidas sobre contrato ou nota fiscal, procure um profissional.</p></div>`
      ],
      projeto:{
        entrega:'Um relatório mensal de 1 página e uma proposta de pacote com escopo (inclui e não inclui, inclusive o atendimento a comentários e mensagens), rotina mensal e preço calculado por horas.',
        passos:[
          'Monte o relatório: o que foi feito, números comparados ao período anterior (reais ou marcados como exemplo), 3 aprendizados e 3 próximos passos.',
          'Cronometre ou estime o tempo de cada entrega, some as horas do pacote, defina seu valor-hora mínimo e pesquise valores da sua região.',
          'Escreva a proposta com o que inclui, o que não inclui, quem responde comentários e mensagens, rodadas de ajuste e a rotina das 4 semanas.',
          'Peça a alguém de fora para ler os dois documentos e ajuste o que ficou confuso.',
          'Revise para garantir que não há nenhuma promessa de seguidores, alcance ou vendas.'
        ],
        checklist:[
          'O relatório usa métricas próximas do negócio, e números de exemplo estão identificados como exemplo.',
          'O preço tem cálculo explicado e pesquisa da região.',
          'O escopo diz claramente o que não está incluído.',
          'A proposta diz quem cuida de comentários e mensagens e o que fica com o dono.',
          'Não há promessa de resultado.'
        ],
        minimo:400
      }}
  ]}
];

const MODDONE = {
  1: 'Você sabe diagnosticar o perfil atual, levantar o briefing, escolher pilares e formatos, pesquisar referências sem copiar e montar um calendário com frequência realista.',
  2: 'Você sabe escrever na voz da marca, criar ganchos e chamadas honestas, roteirizar vídeos curtos, montar carrosséis que ensinam e deixar posts acessíveis, conferindo cada detalhe.',
  3: 'Parabéns, você concluiu o curso Posts para Redes Sociais com IA! Seu certificado do curso já está disponível. Você sabe revisar com o cliente, montar um portfólio honesto, ler métricas sem prometer resultados, cuidar de comentários e reclamações e propor um pacote mensal com preço calculado. Resultados dependem de muitos fatores: o seu compromisso é com a qualidade e a honestidade das entregas.'
};

const PROMPTS = {
  1: [
    { title:'Calendário de 30 dias', desc:'Para planejar os posts do mês.' }
  ],
  2: [
    { title:'Legendas na voz da marca', desc:'Para escrever no estilo do cliente.' }
  ],
  3: [
    { title:'Revisão antes de publicar', desc:'Para conferir riscos.' }
  ]
};

const THEME = { 1:['#06B6D4','#3B82F6'], 2:['#3B82F6','#06B6D4'], 3:['#06B6D4','#3B82F6'] };
const LIC = {
  '1.1':'🎯','1.2':'🗓️','1.3':'🧰','1.4':'🔎','1.5':'🧭','1.6':'📋',
  '2.1':'✍️','2.2':'🎨','2.3':'🪝','2.4':'♿','2.5':'📚','2.6':'📝',
  '3.1':'✅','3.2':'📁','3.3':'📊','3.4':'💰','3.5':'💬','3.6':'📑'
};

return {
  id: 'posts-para-redes-sociais',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
