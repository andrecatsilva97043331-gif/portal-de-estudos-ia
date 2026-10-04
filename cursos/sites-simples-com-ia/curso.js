/* Curso: Sites Simples com IA (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🧭', title:'Planejar o site', sub:'O que precisa ter e o que dizer', lessons:[
    { id:'1.1', title:'O que um site simples precisa ter', min:6,
      body:[
        `<div class="card analogy"><h3>🧭 A placa e a porta da loja</h3><p>Quem passa na rua precisa saber o que a loja vende e como entrar. Uma placa clara e uma porta fácil de abrir valem mais que dez enfeites. Um site simples faz o mesmo papel.</p></div>`,
        `<div class="term"><b>Página única</b> = site de uma só página, com várias seções que se rolam. <b>Chamada para ação</b> = o botão ou convite para o próximo passo, como "chame no WhatsApp". <b>Prova social</b> = depoimentos, trabalhos e números reais que mostram que o negócio é confiável.</div>`,
        `<div class="card"><h3>Sete blocos para um negócio local</h3><ol class="golden"><li><span>Topo: o que faz e para quem.</span></li><li><span>Serviços.</span></li><li><span>Quem somos.</span></li><li><span>Prova social, com depoimentos autorizados e fotos reais.</span></li><li><span>Contato, com botão de WhatsApp.</span></li><li><span>Endereço e horário.</span></li><li><span>Aviso de privacidade, se houver formulário.</span></li></ol>
          <p>Uma mensagem principal e uma ação principal. Pergunte ao cliente: "o que você quer que o visitante faça?" Menos é mais: um site simples e claro vende mais do que um site grande e confuso.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma loja precisa de uma placa clara e de uma porta fácil de abrir, e como isso se parece com um site.</div>`
      ],
      ch:{ who:'Alex, 26 anos, vai fazer o site de um cliente', says:'Vou fazer com 12 páginas, menu enorme e 5 animações. Quanto mais, mais profissional.',
        q:'Qual é o melhor começo?',
        opts:[
          {t:'Fazer o site grande, porque o cliente vai achar impressionante.', ok:false, why:'Sites grandes e confusos demoram mais, custam mais e deixam o visitante perdido.'},
          {t:'Começar com uma página clara: o que faz, serviços, sobre, prova social e contato com botão de WhatsApp, e ajustar conforme o uso.', ok:true, why:'Uma página enxuta cumpre o papel principal e cresce depois, com base em dados reais.'},
          {t:'Fazer só a página de contato, sem explicar o que o negócio faz.', ok:false, why:'Sem dizer o que o negócio oferece, o visitante não tem motivo para entrar em contato.'}
        ]}},
    { id:'1.2', title:'Textos do site com IA', min:6,
      body:[
        `<div class="card analogy"><h3>✍️ O vendedor do balcão</h3><p>O bom vendedor diz em uma frase o que oferece e o que o cliente ganha com isso. O texto do site precisa fazer exatamente isso.</p></div>`,
        `<div class="term"><b>Mensagem principal</b> = a ideia central que o visitante deve entender em poucos segundos. <b>Benefício</b> = o que o cliente ganha, e não só o que o negócio faz. <b>Texto honesto</b> = texto sem exageros e sem informações inventadas.</div>`,
        `<div class="card"><h3>Uma estrutura simples</h3><p>Título (para quem e qual resultado), subtítulo, 3 benefícios, como funciona em 3 passos, perguntas frequentes e chamada para ação. Peça à IA usando fatos reais passados pelo cliente. Evite promessas como "o melhor" ou "garantido", e nunca coloque depoimentos inventados: só use depoimentos reais, com autorização de quem escreveu. Revise preços, horários e endereço. Prefira frases curtas, com a linguagem do cliente final.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que o vendedor do balcão diz para convencer alguém a comprar, sem enganar.</div>`
      ],
      ch:{ who:'Tatiana, 31 anos, cria sites para pequenos negócios', says:'A IA escreveu depoimentos de clientes para o site e eu coloquei. Dão confiança.',
        q:'Qual é o problema?',
        opts:[
          {t:'Nenhum: depoimentos aumentam a confiança, e ninguém vai conferir.', ok:false, why:'Depoimentos inventados são enganosos e podem gerar problemas com clientes e com a lei.'},
          {t:'Nenhum, desde que ela troque os nomes por outros.', ok:false, why:'Trocar o nome não torna o depoimento verdadeiro. O problema é ele ser falso.'},
          {t:'Os depoimentos são inventados. O certo é remover e usar só depoimentos reais, com autorização de quem escreveu.', ok:true, why:'Depoimentos reais e autorizados constroem confiança de verdade.'}
        ]}}
  ]},
  { id:2, icon:'🛠️', title:'Montar e publicar', sub:'Do rascunho ao endereço', lessons:[
    { id:'2.1', title:'Criando o site com ajuda da IA', min:7,
      body:[
        `<div class="card analogy"><h3>🛠️ Casa pré-moldada ou casa de alvenaria</h3><p>A pré-moldada é rápida e tem modelos prontos. A de alvenaria permite mais personalização, mas exige mais cuidado. Os construtores de site são a pré-moldada, e criar o código com ajuda da IA é a alvenaria.</p></div>`,
        `<div class="term"><b>Construtor de sites</b> = plataforma com modelos prontos para montar um site sem programar. <b>Código</b> = os arquivos do site, como HTML e CSS. <b>Responsivo</b> = que se adapta bem a celular e computador.</div>`,
        `<div class="card"><h3>Dois caminhos</h3><ol class="golden"><li><span>Construtor de sites, com plano gratuito ou barato (as condições mudam, então confira): mais fácil, com menos controle.</span></li><li><span>Pedir à IA ou ao Cursor que crie a página em HTML e CSS: mais controle, exige mais cuidado.</span></li></ol>
          <p>Em ambos: peça um layout pensado primeiro para celular, use as cores e o logo do cliente, revise textos e imagens (direitos de uso) e teste botões e links. Se usar código gerado por IA, peça explicações simples e teste em partes, e nunca coloque senhas ou chaves no código. A primeira versão deve ser simples.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos a diferença entre montar uma casa pré-moldada e construir uma casa tijolo por tijolo.</div>`
      ],
      ch:{ who:'Diego, 29 anos, está começando', says:'Peço à IA um site completo e colo o código sem testar. Depois vejo o que acontece.',
        q:'Qual é a melhor prática?',
        opts:[
          {t:'Pedir em partes pequenas, testar no computador e no celular, conferir botões e links e só então publicar.', ok:true, why:'Etapas pequenas e testes mostram os erros cedo, quando é fácil corrigir.'},
          {t:'Seguir assim mesmo, porque a IA acerta quase sempre.', ok:false, why:'Sem testar, erros chegam ao cliente. A IA pode errar e quebrar partes do site.'},
          {t:'Evitar qualquer ajuda de IA, e escrever tudo do zero.', ok:false, why:'A IA ajuda bastante quando usada em etapas e com teste. O problema é a falta de teste.'}
        ]}},
    { id:'2.2', title:'Colocando no ar: domínio e hospedagem', min:7,
      body:[
        `<div class="card analogy"><h3>🌐 O terreno e o endereço da loja</h3><p>A hospedagem é o terreno onde a loja fica. O domínio é o endereço que as pessoas digitam para chegar. Se o endereço está no nome de outra pessoa, o dono da loja não manda nele.</p></div>`,
        `<div class="term"><b>Domínio</b> = o endereço do site, como nomedaloja.com.br. <b>Hospedagem</b> = o lugar na internet onde os arquivos do site ficam guardados. <b>HTTPS</b> = conexão segura, que aparece como um cadeado no navegador.</div>`,
        `<div class="card"><h3>Quem é dono do quê</h3><p>Existem hospedagens gratuitas ou de baixo custo para sites simples. Limites, condições e regras de uso comercial mudam, então confira antes. Domínio costuma ser pago, geralmente por ano, e os valores variam. Confira:</p>
          <ol class="golden"><li><span>HTTPS ativo.</span></li><li><span>Domínio em nome do cliente, ou titularidade e transferência combinadas por escrito.</span></li><li><span>Quem paga a renovação.</span></li><li><span>E-mail do cliente como contato de cadastro.</span></li><li><span>Acessos compartilhados de forma segura.</span></li></ol>
          <p>Se o domínio fica no seu nome, o cliente fica refém de você: evite isso.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o endereço da loja precisa estar no nome do dono da loja.</div>`
      ],
      ch:{ who:'Renato, 33 anos, cria sites para clientes', says:'Registrei o domínio do cliente no meu nome e no meu e-mail, porque é mais fácil para mim.',
        q:'O que está errado?',
        opts:[
          {t:'Nada: ele é quem cuida do site, então o domínio pode ficar com ele.', ok:false, why:'O endereço é um bem do negócio do cliente. No seu nome, ele fica dependente de você.'},
          {t:'Nada, porque o cliente nem vai perceber.', ok:false, why:'Mais cedo ou mais tarde o cliente descobre, e isso gera desconfiança e conflito.'},
          {t:'O domínio deve ser registrado em nome do cliente, ou a titularidade e a transferência devem ser combinadas por escrito, deixando claro quem paga a renovação.', ok:true, why:'Transparência sobre titularidade e renovação evita conflitos e protege o cliente.'}
        ]}}
  ]},
  { id:3, icon:'✅', title:'Qualidade e entrega', sub:'Testar, entregar e manter', lessons:[
    { id:'3.1', title:'Testar no celular, velocidade e acessibilidade básica', min:6,
      body:[
        `<div class="card analogy"><h3>📱 Provar a roupa antes de entregar</h3><p>O alfaiate chama o cliente para provar antes de dar a roupa por pronta. Ajustes feitos na prova custam pouco. Testar o site antes de entregar tem o mesmo efeito.</p></div>`,
        `<div class="term"><b>Acessibilidade</b> = fazer o site ser usável por todos, com bom contraste, letras legíveis e descrição das imagens. <b>Velocidade</b> = o tempo que a página leva para abrir. <b>Teste em aparelhos</b> = abrir o site em mais de um celular e computador.</div>`,
        `<div class="card"><h3>A lista de testes</h3><ol class="golden"><li><span>Abrir no celular (em pelo menos 2 aparelhos) e no computador.</span></li><li><span>Botões grandes e fáceis de tocar.</span></li><li><span>Texto legível, com bom contraste.</span></li><li><span>Imagens leves e com texto alternativo.</span></li><li><span>Links e botão de WhatsApp funcionando.</span></li><li><span>Formulário que envia e chega ao cliente.</span></li><li><span>Página que abre rápido numa conexão comum.</span></li><li><span>Aviso de privacidade se houver coleta de dados.</span></li></ol>
          <p>Existem ferramentas gratuitas de teste de velocidade. Peça a 2 ou 3 pessoas de fora para achar o telefone ou o preço em 10 segundos.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma roupa é provada antes de ser entregue.</div>`
      ],
      ch:{ who:'Marta, 38 anos, entrega sites para clientes', says:'Testei só no meu computador e achei ótimo. No celular do cliente, o botão de WhatsApp nem aparecia.',
        q:'O que ela deveria ter feito?',
        opts:[
          {t:'Nada: o problema é o celular do cliente, e não o site.', ok:false, why:'Se o site não funciona no celular do cliente, ele não funciona para os clientes dele.'},
          {t:'Testar no celular, em mais de um aparelho, e pedir a pessoas de fora para tentar usar.', ok:true, why:'Testes em aparelhos diferentes mostram problemas que o seu computador esconde.'},
          {t:'Tirar o botão de WhatsApp para não aparecer erro.', ok:false, why:'O botão é a ação principal do site. O certo é consertar, e não tirar.'}
        ]}},
    { id:'3.2', title:'Projeto de portfólio, entrega e manutenção', min:7,
      body:[
        `<div class="card analogy"><h3>📁 A entrega das chaves da casa</h3><p>Quem entrega uma casa passa as chaves, o manual dos equipamentos e o contato para dúvidas. O cliente fica seguro e você mantém uma boa relação.</p></div>`,
        `<div class="term"><b>Entrega</b> = repassar acessos, arquivos e instruções ao cliente. <b>Manutenção</b> = cuidar do site depois de pronto, como atualizar textos e renovar o domínio. <b>Projeto fictício</b> = trabalho de treino para um negócio inventado.</div>`,
        `<div class="card"><h3>Projeto final, entrega e checklist</h3><p>Monte um site de 1 página para um negócio real, com autorização, ou fictício: topo, serviços, sobre, contato com WhatsApp e aviso de privacidade se houver formulário, publicado num endereço gratuito para mostrar.</p>
          <p><b>Entrega profissional:</b></p>
          <ol class="golden"><li><span>Acessos em nome do cliente.</span></li><li><span>Manual de 1 página (como trocar textos e fotos).</span></li><li><span>Combinado do que é manutenção e quanto custa, se houver.</span></li><li><span>Backup.</span></li></ol>
          <p><b>Checklist "estou pronto para cobrar?":</b> site testado em celular e computador, textos revisados e sem depoimentos inventados, imagens com licença, domínio e contas no nome do cliente, aviso de privacidade, combinado escrito (escopo, revisões, prazo, manutenção) e nenhuma promessa de ganho.</p>
          <p><b>Próximo passo:</b> o curso "Seu Primeiro Serviço com IA".</p>
          <p>⚠️ Este curso não garante renda: ele ensina a oferecer um serviço com qualidade.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, o que se entrega junto com um site além do endereço.</div>`
      ],
      ch:{ who:'Hugo, 25 anos, entregou um site a um cliente', says:'Terminei o site e mandei só o link. O cliente quer mudar um texto, não sabe como e me liga toda semana.',
        q:'O que deveria ter feito na entrega?',
        opts:[
          {t:'Passar os acessos, um manual simples de como alterar textos e fotos, e combinar por escrito o que é manutenção.', ok:true, why:'Uma entrega completa dá autonomia ao cliente, e a manutenção vira um serviço claro, com preço combinado.'},
          {t:'Cobrar toda vez que o cliente ligar, sem avisar antes.', ok:false, why:'Cobrança surpresa gera conflito. O que é pago precisa estar combinado.'},
          {t:'Manter o cliente dependente de propósito, para ele sempre precisar de você.', ok:false, why:'Prender o cliente é antiético e desgasta a relação. Boas entregas geram indicações.'}
        ]}}
  ]}
];

const MODDONE = {
  1: 'Você sabe planejar um site simples, claro e honesto, com textos verdadeiros.',
  2: 'Você sabe montar com ajuda da IA, em partes, e publicar com domínio e hospedagem no nome do cliente.',
  3: 'Você sabe testar, entregar e orientar a manutenção. Agora você pode oferecer esse serviço com qualidade.'
};

const PROMPTS = {
  1: [
    { title:'Textos do site', desc:'Para escrever o conteúdo de uma página.',
      text:'Negócio: [NEGÓCIO]. Público: [PÚBLICO]. Fatos reais: [FATOS DO CLIENTE]. Escreva os textos de um site de 1 página: título, subtítulo, 3 benefícios, como funciona em 3 passos, perguntas frequentes e chamada para ação. Não invente depoimentos, preços nem garantias.' }
  ],
  2: [
    { title:'Site em partes', desc:'Para montar com a IA em etapas.',
      text:'Vamos criar um site de 1 página para [NEGÓCIO] em etapas. Primeiro, a estrutura (seções). Depois eu peço cada parte. Layout pensado primeiro para celular, cores [CORES], botão de WhatsApp. Explique em linguagem simples o que cada parte faz e como eu testo. Não coloque senhas nem chaves no código.' }
  ],
  3: [
    { title:'Checklist de testes', desc:'Para testar antes de entregar.',
      text:'Meu site é de [TIPO]. Monte um checklist de testes de celular, computador, velocidade, acessibilidade básica, links, formulário e privacidade. Para cada item, diga como conferir sem ferramentas pagas.' }
  ]
};

const THEME = { 1:['#06B6D4','#3B82F6'], 2:['#3B82F6','#06B6D4'], 3:['#06B6D4','#3B82F6'] };
const LIC = { '1.1':'🧭','1.2':'✍️','2.1':'🛠️','2.2':'🌐','3.1':'📱','3.2':'📁' };

return {
  id: 'sites-simples-com-ia',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  dicaPrompts: 'Troque o que está entre [COLCHETES] pelos dados do seu caso e cole em qualquer assistente de IA (ChatGPT, Gemini, Claude...).',
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
