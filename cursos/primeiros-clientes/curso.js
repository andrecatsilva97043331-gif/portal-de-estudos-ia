/* Curso: Primeiros Clientes (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🔎', title:'Encontrar e conversar', sub:'Quem são e como falar com eles', lessons:[
    { id:'1.1', title:'Onde estão os seus primeiros clientes', min:6,
      body:[
        `<div class="card analogy"><h3>🔎 Pescar no lago perto de casa</h3><p>Quem está começando pesca no lago que já conhece, e não no oceano. Os primeiros clientes costumam estar perto: gente que você conhece ou que conhece alguém.</p></div>`,
        `<div class="term"><b>Rede de contatos</b> = as pessoas que você conhece direta ou indiretamente. <b>Indicação</b> = quando alguém recomenda o seu serviço a outra pessoa. <b>Comunidade</b> = grupo de pessoas com um interesse ou uma profissão em comum.</div>`,
        `<div class="card"><h3>Comece perto e com respeito</h3><ol class="golden"><li><span>Pessoas que você conhece e que têm o problema, ou conhecem alguém que tem.</span></li><li><span>Indicações do seu cliente-piloto.</span></li><li><span>Comunidades do seu nicho em que você ajuda de verdade, respondendo dúvidas, sem spam.</span></li><li><span>Perfil profissional claro (LinkedIn ou Instagram) com sua oferta e exemplos.</span></li><li><span>Parcerias com quem atende o mesmo público, como contadores ou fotógrafos.</span></li></ol>
          <p>Faça uma lista de 20 nomes e fale com 5 por semana, em mensagens pessoais. Não compre listas, não adicione ninguém em grupos sem permissão e respeite quem não quiser receber.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que quem está começando a pescar vai primeiro ao lago perto de casa.</div>`
      ],
      ch:{ who:'Priscila, 27 anos, começando a oferecer seu serviço', says:'Vou adicionar todos os meus contatos num grupo de divulgação, sem avisar, e mandar minha oferta.',
        q:'Qual é a melhor abordagem?',
        opts:[
          {t:'Adicionar todos no grupo, porque quanto mais gente, mais chance.', ok:false, why:'Adicionar pessoas sem permissão incomoda, gera saídas e pode causar denúncias.'},
          {t:'Falar com pessoas próximas que têm o problema, uma a uma, com mensagem pessoal, respeitando quem não quiser.', ok:true, why:'A conversa pessoal gera confiança e mais respostas do que um grupo forçado.'},
          {t:'Comprar uma lista de contatos e mandar a oferta para todos.', ok:false, why:'Mensagens para quem não pediu são spam, mal vistas e podem violar regras e a LGPD.'}
        ]}},
    { id:'1.2', title:'A primeira conversa: perguntar antes de oferecer', min:7,
      body:[
        `<div class="card analogy"><h3>👂 O médico que escuta antes de receitar</h3><p>O bom médico pergunta, ouve e só depois indica o tratamento. Se receitasse na porta, errava com frequência. Seu primeiro contato com um cliente funciona assim.</p></div>`,
        `<div class="term"><b>Diagnóstico</b> = entender o problema do cliente antes de propor algo. <b>Pergunta aberta</b> = pergunta que pede explicação, e não apenas sim ou não. <b>Objeção</b> = dúvida ou resistência do cliente.</div>`,
        `<div class="card"><h3>Roteiro de 15 minutos</h3><ol class="golden"><li><span>Cumprimento e contexto.</span></li><li><span>Perguntas abertas: "Como você faz isso hoje?", "O que mais incomoda?", "O que já tentou?", "O que seria um bom resultado?"</span></li><li><span>Resuma o que ouviu, com as palavras dele.</span></li><li><span>Só então apresente a oferta, ligada ao problema que ele contou.</span></li><li><span>Combine o próximo passo, como "envio a proposta até quinta".</span></li></ol>
          <p>Ouça mais do que fale. Não prometa resultados: diga o que você entrega. Se o seu serviço não for o certo, diga isso e indique outro caminho: honestidade gera indicações.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o médico faz perguntas antes de dizer qual é o remédio.</div>`
      ],
      ch:{ who:'Fábio, 30 anos, faz suas primeiras reuniões com clientes', says:'Quando falo com um possível cliente, já despejo toda a minha lista de serviços nos primeiros 2 minutos.',
        q:'Qual é o melhor ajuste?',
        opts:[
          {t:'Continuar assim: quanto mais opções, mais chance de interessar.', ok:false, why:'Uma lista longa sem entender o problema confunde e parece que você não escutou.'},
          {t:'Falar mais rápido, para dar tempo de apresentar tudo.', ok:false, why:'Velocidade não resolve. O que falta é ouvir o cliente.'},
          {t:'Começar com perguntas sobre o problema, ouvir, resumir e só depois apresentar o serviço que se liga ao que ele disse.', ok:true, why:'O cliente se sente ouvido, e a oferta fica relevante para ele.'}
        ]}}
  ]},
  { id:2, icon:'📄', title:'Propor e negociar', sub:'Com clareza e respeito', lessons:[
    { id:'2.1', title:'A proposta com três opções', min:7,
      body:[
        `<div class="card analogy"><h3>📄 O cardápio com três tamanhos</h3><p>Pequeno, médio e grande. O cliente escolhe o que cabe no bolso e na necessidade, e você deixa claro o que muda de um para o outro.</p></div>`,
        `<div class="term"><b>Pacote</b> = combinação de itens do serviço com preço fechado. <b>Opção</b> = cada alternativa da proposta. <b>Validade</b> = o prazo em que o preço da proposta vale.</div>`,
        `<div class="card"><h3>Dê escolha clara</h3><p>Monte uma proposta de 1 página com 2 ou 3 opções (básica, completa e premium). Para cada uma: o que inclui, o que não inclui, prazo, preço e revisões. Acrescente a forma de pagamento e a validade. Comece mostrando o problema do cliente com as palavras dele. Evite mais de 3 opções e preços escondidos. Não é obrigatório ter 3: o ponto é que a escolha seja simples de entender.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um cardápio com três tamanhos facilita escolher.</div>`
      ],
      ch:{ who:'Mariana, 34 anos, envia sua primeira proposta', says:'Mandei uma proposta com 7 opções, cada uma com 12 detalhes. O cliente sumiu.',
        q:'Qual é o melhor ajuste?',
        opts:[
          {t:'Simplificar para 2 ou 3 opções, com diferenças claras, linguagem simples e prazo de validade.', ok:true, why:'Menos opções e mais clareza ajudam o cliente a decidir.'},
          {t:'Mandar ainda mais detalhes, para ele não ter dúvidas.', ok:false, why:'Mais detalhes aumentam a confusão e atrasam a decisão.'},
          {t:'Baixar o preço de todas as opções.', ok:false, why:'O problema não era o preço, e sim a dificuldade de entender e escolher.'}
        ]}},
    { id:'2.2', title:'Negociar com respeito: objeções e descontos', min:7,
      body:[
        `<div class="card analogy"><h3>🤝 A conversa na feira</h3><p>O feirante escuta, explica o que o produto vale e sabe até onde pode ir. Ele não dá o preço pela metade assim que alguém diz "está caro".</p></div>`,
        `<div class="term"><b>Objeção</b> = o motivo que o cliente dá para hesitar, como "está caro" ou "vou pensar". <b>Desconto condicional</b> = redução em troca de algo, como pagamento à vista ou escopo menor. <b>Limite</b> = o menor preço ou a menor condição que você aceita.</div>`,
        `<div class="card"><h3>Seis passos quando ouvir "está caro"</h3><ol class="golden"><li><span>Pergunte com o que ele compara e o que esperava.</span></li><li><span>Relembre o que está incluído e o resultado que ele busca.</span></li><li><span>Ofereça alternativas, como escopo menor, parcelamento ou o pacote básico, em vez de só baixar o preço.</span></li><li><span>Dê desconto só com contrapartida (à vista, depoimento, indicação).</span></li><li><span>Saiba o seu limite antes de negociar.</span></li><li><span>Diga "não" com educação se não compensar.</span></li></ol>
          <p>Nunca prometa o que você não entrega só para fechar.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o feirante não dá o preço pela metade assim que alguém reclama.</div>`
      ],
      ch:{ who:'Gustavo, 28 anos, negocia sua primeira proposta', says:'O cliente falou que estava caro e eu, na hora, cortei 50% sem perguntar nada.',
        q:'O que seria melhor?',
        opts:[
          {t:'Cortar o preço pela metade, porque o cliente sempre tem razão.', ok:false, why:'Cortar sem entender gera prejuízo e ensina o cliente a sempre pedir mais.'},
          {t:'Perguntar o que ele esperava, relembrar o que está incluído e oferecer alternativas (escopo menor ou parcelamento), com desconto só em troca de algo.', ok:true, why:'Entender a objeção e oferecer opções preserva o valor do seu trabalho e ajuda o cliente a decidir.'},
          {t:'Ficar ofendido e encerrar a conversa.', ok:false, why:'Objeção de preço é comum. Encerrar a conversa perde um cliente que poderia fechar.'}
        ]}}
  ]},
  { id:3, icon:'✅', title:'Atender', sub:'Entregar, cobrar e conquistar indicações', lessons:[
    { id:'3.1', title:'Entrega, aceite e cobrança educada', min:7,
      body:[
        `<div class="card analogy"><h3>✅ A nota de entrega do motoboy</h3><p>Quem recebe assina, e as duas partes ficam tranquilas. Nada de "eu não recebi" ou "você não entregou". O aceite é a sua assinatura digital.</p></div>`,
        `<div class="term"><b>Aceite</b> = confirmação do cliente de que recebeu e aprovou a entrega. <b>Sinal</b> = parte do pagamento feita antes de começar, combinada por escrito. <b>Cobrança educada</b> = lembrete respeitoso de pagamento, sem constrangimento.</div>`,
        `<div class="card"><h3>Do combinado ao pagamento</h3><ol class="golden"><li><span>Combinado escrito: escopo, prazo, preço e revisões.</span></li><li><span>Sinal: ajuda a formalizar o início, e deve ser combinado por escrito.</span></li><li><span>Entregue com checklist e peça o aceite por escrito, como "recebi e aprovei".</span></li><li><span>Pagamento: confirme no banco e use meios rastreáveis.</span></li><li><span>Cobrança educada: lembrete antes do vencimento, outro no dia e uma mensagem firme e cordial após o atraso, nunca expondo o cliente publicamente.</span></li><li><span>Guarde conversas e comprovantes.</span></li></ol>
          <p>Para valores altos, busque orientação jurídica ou contábil.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a gente assina quando recebe uma encomenda.</div>`
      ],
      ch:{ who:'Rodrigo, 32 anos, tem um cliente que atrasou o pagamento', says:'O cliente atrasou e eu vou postar o nome dele nos stories para ele pagar de vergonha.',
        q:'Qual é a melhor atitude?',
        opts:[
          {t:'Postar nos stories, para pressionar.', ok:false, why:'Expor o cliente publicamente é constrangedor e pode gerar problemas legais para você.'},
          {t:'Esquecer a dívida, para evitar conflito.', ok:false, why:'Trabalho entregue merece pagamento. Esquecer ensina o cliente a não pagar.'},
          {t:'Enviar um lembrete educado, depois uma mensagem firme e cordial citando o combinado, sem expor o cliente e, se não resolver, buscar orientação adequada.', ok:true, why:'A cobrança respeitosa e documentada resolve a maioria dos casos e protege a sua reputação.'}
        ]}},
    { id:'3.2', title:'Pós-venda, indicações e checklist', min:6,
      body:[
        `<div class="card analogy"><h3>🌱 O padeiro que lembra do seu pão</h3><p>O padeiro que lembra do seu nome e do que você gosta faz você voltar e indicar a padaria. O pós-venda cria essa relação.</p></div>`,
        `<div class="term"><b>Pós-venda</b> = o cuidado com o cliente depois da entrega. <b>Indicação</b> = recomendação do seu trabalho a outra pessoa. <b>Cliente recorrente</b> = quem contrata você mais de uma vez.</div>`,
        `<div class="card"><h3>Depois da entrega</h3><ol class="golden"><li><span>Pergunte, em cerca de 7 dias, se está funcionando e ofereça um pequeno ajuste.</span></li><li><span>Peça um depoimento, com autorização.</span></li><li><span>Peça indicação sem pressão: "conhece alguém que também precisa?"</span></li><li><span>Guarde o contato, com permissão, para lembrar de renovações.</span></li><li><span>Ofereça manutenção ou mensalidade quando fizer sentido.</span></li><li><span>Registre o que aprendeu.</span></li></ol>
          <p><b>Projeto final:</b> monte o seu kit de atendimento, com roteiro de conversa (10 perguntas), modelo de proposta com 2 ou 3 opções, mensagem de aceite, 3 mensagens de cobrança educada e mensagem de pós-venda.</p>
          <p><b>Checklist "estou pronto para cobrar?":</b> roteiro, proposta, combinado escrito, aceite, confirmação de pagamento no banco, cobrança educada, pós-venda e nenhuma promessa de ganho.</p>
          <p><b>Próximo passo:</b> o curso "Formalizando: MEI e Organização Financeira".</p>
          <p>⚠️ Este curso não garante renda: ele ensina a atender com profissionalismo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, por que lembrar do cliente depois da entrega ajuda a ter novos clientes.</div>`
      ],
      ch:{ who:'Luana, 29 anos, entregou seu primeiro trabalho', says:'Entreguei, recebi e nunca mais falei com o cliente. Para que insistir?',
        q:'Qual é a melhor prática?',
        opts:[
          {t:'Perguntar alguns dias depois se está funcionando, pedir depoimento e indicação sem pressão e registrar o que aprendeu.', ok:true, why:'O pós-venda mostra cuidado, gera depoimentos e indicações e melhora seus próximos serviços.'},
          {t:'Não falar mais, porque o trabalho já acabou.', ok:false, why:'Sem contato, ela perde depoimentos, indicações e a chance de o cliente voltar.'},
          {t:'Mandar mensagens todos os dias pedindo indicação.', ok:false, why:'Insistir demais incomoda. O pedido deve ser educado e sem pressão.'}
        ]}}
  ]}
];

const MODDONE = {
  1: 'Você sabe onde procurar os primeiros clientes e conduzir uma primeira conversa, ouvindo antes de oferecer.',
  2: 'Você sabe montar propostas claras e negociar sem perder o respeito nem o valor do seu trabalho.',
  3: 'Você sabe entregar, cobrar com educação e cultivar indicações. Agora você tem um kit de atendimento completo.'
};

const PROMPTS = {
  1: [
    { title:'Roteiro de primeira conversa', desc:'Para ouvir antes de oferecer.' }
  ],
  2: [
    { title:'Proposta com 3 opções', desc:'Para montar uma proposta clara.' }
  ],
  3: [
    { title:'Cobrança educada', desc:'Para lembrar o pagamento com respeito.' }
  ]
};

const THEME = { 1:['#10B981','#84CC16'], 2:['#84CC16','#10B981'], 3:['#10B981','#84CC16'] };
const LIC = { '1.1':'🔎','1.2':'👂','2.1':'📄','2.2':'🤝','3.1':'✅','3.2':'🌱' };

return {
  id: 'primeiros-clientes',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
