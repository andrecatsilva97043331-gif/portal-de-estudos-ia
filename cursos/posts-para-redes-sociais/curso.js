/* Curso: Posts para Redes Sociais com IA (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🎯', title:'Planejar', sub:'Antes de criar o primeiro post', lessons:[
    { id:'1.1', title:'Entender o negócio e o público: o briefing', min:6,
      body:[
        `<div class="card analogy"><h3>🎯 A consulta do alfaiate</h3><p>O alfaiate mede o cliente antes de cortar o tecido. Cortar sem medir desperdiça pano e tempo. O briefing é a medição antes de criar qualquer post.</p></div>`,
        `<div class="term"><b>Briefing</b> = conjunto de informações que orienta o trabalho, como negócio, público, objetivo e tom. <b>Público-alvo</b> = as pessoas que o negócio quer alcançar. <b>Objetivo do post</b> = o que o post precisa provocar, como gerar mensagens ou lembrar da marca.</div>`,
        `<div class="card"><h3>As 6 perguntas para o cliente</h3><ol class="golden"><li><span>O que vende e para quem?</span></li><li><span>O que o torna diferente?</span></li><li><span>Que tom a marca usa (amigável, formal, divertido)?</span></li><li><span>Qual é o objetivo dos posts?</span></li><li><span>O que não pode ser dito (regras do setor, assuntos a evitar)?</span></li><li><span>Quais posts ele admira?</span></li></ol>
          <p>Registre em 1 página e peça à IA: "Revise este briefing e aponte o que está faltando." Use só o que o cliente informou: nunca deixe a IA inventar fatos sobre o negócio.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o alfaiate mede antes de cortar o tecido.</div>`
      ],
      ch:{ who:'Aline, 28 anos, freelancer', says:'Peguei uma pizzaria como cliente e já pedi 30 posts para a IA sem perguntar nada a ela. Saiu tudo genérico.',
        q:'Qual é o melhor ajuste?',
        opts:[
          {t:'Pedir mais 30 posts, esperando que algum saia bom.', ok:false, why:'Mais posts genéricos continuam genéricos. Faltam informações do negócio.'},
          {t:'Conversar com a cliente usando um briefing (público, diferencial, tom, objetivo e o que evitar) e usar isso no pedido à IA.', ok:true, why:'Com informações reais, a IA escreve algo ligado ao negócio e a cliente se reconhece nos posts.'},
          {t:'Copiar posts de outras pizzarias e só trocar o nome.', ok:false, why:'Copiar tira a identidade do negócio e pode violar direitos autorais.'}
        ]}},
    { id:'1.2', title:'Calendário de conteúdo de 30 dias', min:7,
      body:[
        `<div class="card analogy"><h3>🗓️ A grade da programação de TV</h3><p>A TV mistura notícia, novela e filme em horários previsíveis. Quem assiste sabe o que esperar, e nunca é só propaganda. Um calendário de posts funciona assim.</p></div>`,
        `<div class="term"><b>Pilar de conteúdo</b> = um tema que se repete, como dicas, bastidores, ofertas e depoimentos. <b>Frequência</b> = quantos posts por semana. <b>Calendário</b> = o plano com dia, tema e formato de cada post.</div>`,
        `<div class="card"><h3>Quatro pilares e uma frequência realista</h3><p>Educar (dicas), mostrar (bastidores e produtos), relacionar (perguntas e enquetes) e vender (ofertas e chamadas). Em geral, funciona melhor misturar bastante conteúdo útil e de relacionamento com a venda direta, ajustando ao cliente. Prefira uma frequência que dê para manter: 3 posts por semana durante meses vale mais que 7 por semana e parar. Peça à IA uma tabela com dia, pilar, ideia, formato e chamada para ação, e adapte aos fatos reais (promoções verdadeiras, horários). Não prometa resultados: o alcance depende da plataforma.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a TV mistura vários tipos de programa em vez de passar só propaganda.</div>`
      ],
      ch:{ who:'Marcelo, 33 anos, dono de uma barbearia', says:'Todo post que a IA sugeriu é oferta e desconto. Meus seguidores vão ficar cansados.',
        q:'Qual é o melhor ajuste?',
        opts:[
          {t:'Manter só ofertas, porque o objetivo do negócio é vender.', ok:false, why:'Posts só de venda cansam a audiência e fazem as pessoas pararem de acompanhar.'},
          {t:'Parar de postar até a IA aprender a escrever melhor.', ok:false, why:'O problema está no pedido e no planejamento, e parar não resolve.'},
          {t:'Misturar os pilares (dicas, bastidores, perguntas e ofertas) num calendário, com uma frequência que ele consiga manter.', ok:true, why:'A variedade mantém o interesse, e a frequência realista garante constância.'}
        ]}}
  ]},
  { id:2, icon:'✍️', title:'Criar', sub:'Textos e artes de qualidade', lessons:[
    { id:'2.1', title:'Legendas com a voz da marca', min:7,
      body:[
        `<div class="card analogy"><h3>✍️ O sotaque da marca</h3><p>Cada marca fala de um jeito, como cada região tem seu sotaque. O cliente reconhece a marca pela voz, mesmo sem ver o logo.</p></div>`,
        `<div class="term"><b>Voz da marca</b> = o jeito característico de falar da marca. <b>Chamada para ação (CTA)</b> = convite para o próximo passo, como "chame no WhatsApp". <b>Clichê</b> = frase batida que não diz nada de concreto.</div>`,
        `<div class="card"><h3>Mostre exemplos e confira os fatos</h3><ol class="golden"><li><span>Reúna 3 textos do cliente de que ele gosta.</span></li><li><span>Peça à IA para descrever a voz e depois escrever no mesmo estilo.</span></li><li><span>Deixe campos para fatos reais (preço, horário, endereço), que você preenche.</span></li><li><span>Peça 3 versões.</span></li><li><span>Corte exageros e clichês, como "o melhor do Brasil".</span></li><li><span>Use uma chamada para ação clara e honesta.</span></li></ol>
          <p>Escreva no pedido: "Não invente promoções, preços nem depoimentos." Mesmo assim, revise tudo: a IA pode inventar detalhes.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que é o "sotaque" de uma marca.</div>`
      ],
      ch:{ who:'Rosana, 35 anos, atende uma pizzaria', says:'A IA escreveu \'a melhor pizza do Brasil, com 50% de desconto só hoje\' e eu publiquei sem conferir. O cliente não tinha promoção.',
        q:'O que ela deveria ter feito?',
        opts:[
          {t:'Revisar tudo antes de publicar, pedir à IA que não invente promoções ou preços e confirmar os fatos com o cliente.', ok:true, why:'Promoção falsa causa problema com os clientes do negócio. A conferência é parte do serviço.'},
          {t:'Nada: erros assim são normais em posts feitos com IA.', ok:false, why:'O erro era evitável com revisão. Quem publica responde pelo conteúdo.'},
          {t:'Culpar a ferramenta de IA e trocar por outra.', ok:false, why:'Qualquer ferramenta pode inventar detalhes. A revisão humana é o que protege.'}
        ]}},
    { id:'2.2', title:'Imagens e artes com ferramentas gratuitas', min:7,
      body:[
        `<div class="card analogy"><h3>🎨 A vitrine da loja</h3><p>A vitrine é a primeira coisa que o cliente vê. Quando é limpa e tem um estilo só, passa confiança. Os posts são a vitrine digital do negócio.</p></div>`,
        `<div class="term"><b>Identidade visual</b> = cores, fontes e estilo que se repetem nos posts. <b>Modelo (template)</b> = layout pronto para editar. <b>Texto na imagem</b> = palavras dentro da arte, que as IAs de imagem costumam errar.</div>`,
        `<div class="card"><h3>Consistência e conferência</h3><p>Existem editores de design com plano gratuito e IAs que geram imagens. Recursos, limites e licenças mudam, então leia os termos sobre uso comercial. Boas práticas:</p>
          <ol class="golden"><li><span>Defina 2 cores e 2 fontes do cliente.</span></li><li><span>Use modelos e mantenha o mesmo estilo.</span></li><li><span>IAs de imagem costumam errar textos dentro da arte: coloque os textos você mesmo no editor.</span></li><li><span>Confira mãos, logos e detalhes.</span></li><li><span>Não imite marcas nem pessoas reais.</span></li><li><span>Fotos reais do negócio costumam valer mais que imagens genéricas.</span></li><li><span>Pessoas reconhecíveis exigem autorização de uso de imagem.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma vitrine organizada faz a gente confiar mais na loja.</div>`
      ],
      ch:{ who:'Caio, 25 anos, faz artes para lojas', says:'Pedi a imagem de um cartaz com o preço escrito. A IA gerou, mas o preço saiu com letras trocadas, e publiquei assim mesmo.',
        q:'Qual é a melhor prática?',
        opts:[
          {t:'Aceitar: a IA sempre acerta textos curtos.', ok:false, why:'IAs de imagem erram textos com frequência, mesmo curtos.'},
          {t:'Reclamar com a ferramenta e esperar uma versão perfeita.', ok:false, why:'Esperar não resolve o post de hoje, e o preço errado já foi publicado.'},
          {t:'Gerar a imagem sem texto, colocar o preço você mesmo num editor e conferir cada detalhe antes de publicar.', ok:true, why:'O texto digitado por você sai certo, e a conferência evita erro de preço.'}
        ]}}
  ]},
  { id:3, icon:'✅', title:'Entregar', sub:'Revisão, aprovação e portfólio', lessons:[
    { id:'3.1', title:'Revisão, aprovação do cliente e cuidados', min:6,
      body:[
        `<div class="card analogy"><h3>✅ O revisor do jornal</h3><p>Antes de imprimir, o revisor lê de ponta a ponta, confere nomes e números. Sem esse olhar final, um erro pequeno vira manchete.</p></div>`,
        `<div class="term"><b>Aprovação</b> = o ok do cliente antes de publicar. <b>Fato</b> = informação que se pode verificar, como preço e horário. <b>Setor regulado</b> = área com regras próprias de publicidade, como saúde e finanças.</div>`,
        `<div class="card"><h3>Um fluxo simples de entrega</h3><ol class="golden"><li><span>Envie o material para aprovação do cliente, por escrito.</span></li><li><span>Confira fatos: preços, horários, nomes, endereços.</span></li><li><span>Setores regulados (saúde, estética, finanças, advocacia, alimentos) têm regras de publicidade: não prometa cura, resultado garantido nem "antes e depois" sem conferir as regras do setor com o cliente ou com a entidade responsável.</span></li><li><span>Depoimentos só com autorização.</span></li><li><span>Combine quantas rodadas de revisão estão incluídas.</span></li><li><span>Guarde as aprovações.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um jornal tem alguém que lê tudo antes de imprimir.</div>`
      ],
      ch:{ who:'Fernanda, 30 anos, atende uma clínica de estética', says:'A IA sugeriu o post \'elimine rugas para sempre, resultado garantido\'. Posso publicar?',
        q:'Qual é a melhor atitude?',
        opts:[
          {t:'Publicar, porque promessas fortes atraem clientes.', ok:false, why:'Garantir resultado em saúde e estética é arriscado e pode violar as regras de publicidade do setor.'},
          {t:'Reescrever sem garantias de resultado e conferir com o cliente as regras de publicidade do setor.', ok:true, why:'Evita problema com as regras do setor e mantém o post honesto.'},
          {t:'Publicar e apagar se alguém reclamar.', ok:false, why:'O dano pode acontecer antes de qualquer reclamação.'}
        ]}},
    { id:'3.2', title:'Projeto de portfólio e checklist', min:7,
      body:[
        `<div class="card analogy"><h3>📁 A vitrine do seu próprio ateliê</h3><p>O costureiro mostra peças prontas para o cliente imaginar o que ele faz. Seu portfólio é essa vitrine: sem ele, ninguém sabe do que você é capaz.</p></div>`,
        `<div class="term"><b>Portfólio</b> = exemplos reais ou de treino do que você faz. <b>Case</b> = a história de um trabalho: o problema, o que você fez e o resultado real. <b>Projeto fictício</b> = trabalho de treino para um negócio inventado.</div>`,
        `<div class="card"><h3>Projeto final e checklist</h3><p>Escolha um negócio real, com autorização, ou fictício, e entregue:</p>
          <ol class="golden"><li><span>Briefing de 1 página.</span></li><li><span>Calendário de 7 dias.</span></li><li><span>Cinco legendas na voz da marca.</span></li><li><span>Duas artes feitas no editor.</span></li><li><span>Um documento de revisão com os fatos conferidos.</span></li></ol>
          <p>Deixe claro no portfólio quando o projeto for fictício.</p>
          <p><b>Checklist "estou pronto para cobrar?":</b> briefing feito, calendário feito, revisão feita, combinado escrito (escopo, número de posts, revisões), imagens com licença e nenhuma promessa de ganho.</p>
          <p><b>Próximo passo:</b> o curso "Pacotes de Mensagens para WhatsApp e LinkedIn".</p>
          <p>⚠️ Este curso não garante renda: ele ensina a oferecer um serviço com qualidade.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, por que mostrar trabalhos prontos ajuda a conquistar clientes.</div>`
      ],
      ch:{ who:'Leonardo, 22 anos, quer montar um portfólio e ainda não tem clientes', says:'Vou colocar no meu portfólio posts que fiz para marcas famosas, sem avisar que foi treino, para parecer que já trabalhei com elas.',
        q:'Qual é a melhor abordagem?',
        opts:[
          {t:'Criar projetos para negócios reais, com autorização, ou para um negócio fictício, deixando claro no portfólio quando for fictício.', ok:true, why:'Portfólio honesto constrói confiança e evita problemas por se passar por quem não é.'},
          {t:'Colocar os posts das marcas famosas como se fossem trabalhos reais.', ok:false, why:'Fingir que trabalhou para marcas é enganoso e pode causar problemas jurídicos e de reputação.'},
          {t:'Não montar portfólio e esperar o primeiro cliente aparecer.', ok:false, why:'Sem exemplos, o cliente não tem como avaliar o seu trabalho.'}
        ]}}
  ]}
];

const MODDONE = {
  1: 'Você sabe levantar o briefing e montar um calendário de 30 dias com variedade e frequência realista.',
  2: 'Você sabe escrever na voz da marca e criar artes consistentes, conferindo cada detalhe.',
  3: 'Você sabe revisar com o cliente e montar um portfólio honesto. Agora você está pronto para oferecer esse serviço com qualidade.'
};

const PROMPTS = {
  1: [
    { title:'Calendário de 30 dias', desc:'Para planejar os posts do mês.',
      text:'Negócio: [NEGÓCIO]. Público: [PÚBLICO]. Objetivo: [OBJETIVO]. Monte uma tabela de 30 dias com: dia, pilar (educar, mostrar, relacionar, vender), ideia, formato e chamada para ação. Use no máximo [N] posts por semana. Não invente promoções, preços nem depoimentos.' }
  ],
  2: [
    { title:'Legendas na voz da marca', desc:'Para escrever no estilo do cliente.',
      text:'Estes são textos do cliente de que ele gosta: [EXEMPLOS]. Descreva a voz da marca em 3 linhas e escreva 3 versões de legenda sobre [ASSUNTO], com chamada para ação. Deixe [CAMPOS] para preço, horário e endereço. Não invente fatos.' }
  ],
  3: [
    { title:'Revisão antes de publicar', desc:'Para conferir riscos.',
      text:'Revise estes posts: [POSTS]. Aponte fatos que preciso confirmar com o cliente, promessas exageradas, possíveis problemas de direitos de imagem e, se o setor for [SETOR], pontos de atenção com as regras de publicidade.' }
  ]
};

const THEME = { 1:['#06B6D4','#3B82F6'], 2:['#3B82F6','#06B6D4'], 3:['#06B6D4','#3B82F6'] };
const LIC = { '1.1':'🎯','1.2':'🗓️','2.1':'✍️','2.2':'🎨','3.1':'✅','3.2':'📁' };

return {
  id: 'posts-para-redes-sociais',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  dicaPrompts: 'Troque o que está entre [COLCHETES] pelos dados do seu caso e cole em qualquer assistente de IA (ChatGPT, Gemini, Claude...).',
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
