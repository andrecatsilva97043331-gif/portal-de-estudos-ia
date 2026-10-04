/* Curso: Do Projeto ao Negócio (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🎯', title:'Seu serviço', sub:'Do que você sabe a uma oferta clara', lessons:[
    { id:'1.1', title:'Transformar o que você sabe em um serviço', min:6,
      body:[
        `<div class="card analogy"><h3>🍰 A receita da vovó virando cardápio</h3><p>A receita da vovó é boa, mas só vira negócio quando alguém sabe <b>o que vai receber, quanto custa e quando fica pronto</b>. Seu conhecimento em IA também precisa virar algo que o cliente entenda.</p></div>`,
        `<div class="term"><b>Serviço</b> = algo útil que você faz para outra pessoa em troca de pagamento. <b>Cliente</b> = quem tem o problema e paga pela solução. <b>Resultado</b> = a mudança que o cliente percebe depois do seu trabalho.</div>`,
        `<div class="card"><h3>Problema, cliente e resultado</h3><p>Complete a frase:</p>
          <div class="code">Eu ajudo [TIPO DE CLIENTE] a [RESULTADO] por meio de [O QUE EU FAÇO].</div>
          <p><b>Exemplo:</b> "Eu ajudo pequenas lojas a responder clientes mais rápido, criando um atendimento automático no WhatsApp."</p>
          <p>Clientes compram <b>resultado, e não tecnologia</b>: ninguém quer "um agente de IA", querem perder menos tempo ou vender mais. Teste a frase com 3 pessoas do tipo de cliente e veja se entendem e se têm esse problema.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos a diferença entre saber fazer uma receita e ter uma doceria que vende bolo.</div>`
      ],
      ch:{ who:'Henrique, 27 anos, aprendeu a criar automações com IA', says:'Vou oferecer \'automações com IA e agentes inteligentes\'. Os donos de loja devem se empolgar com a tecnologia.',
        q:'Qual é o melhor ajuste na oferta?',
        opts:[
          {t:'Manter a frase e explicar melhor a tecnologia para o cliente.', ok:false, why:'Clientes compram a solução do problema deles, e não detalhes da tecnologia.'},
          {t:'Dizer o resultado para o cliente, como "responder clientes no WhatsApp em segundos, sem você ficar o dia todo no celular".', ok:true, why:'Falar do resultado que o cliente quer torna a oferta clara e fácil de comprar.'},
          {t:'Oferecer tudo o que ele sabe, para o cliente escolher.', ok:false, why:'Uma lista enorme confunde. Uma oferta clara é mais fácil de entender e de vender.'}
        ]}},
    { id:'1.2', title:'Nicho e oferta clara', min:7,
      body:[
        `<div class="card analogy"><h3>🧭 A loja especializada</h3><p>Quem procura um sapato de dança vai à loja especializada, e não ao vendedor ambulante que vende tudo. <b>Quem se especializa é mais lembrado e indicado.</b></p></div>`,
        `<div class="term"><b>Nicho</b> = um grupo específico de clientes com um problema parecido. <b>Escopo</b> = o que está incluído no serviço e o que não está. <b>Entregável</b> = o que o cliente recebe no fim, de forma concreta.</div>`,
        `<div class="card"><h3>Uma oferta que cabe em um parágrafo</h3><p>Escolha um nicho com 3 perguntas:</p>
          <ol class="golden"><li><span>Conheço esse tipo de cliente?</span></li><li><span>Eles têm um problema claro e frequente?</span></li><li><span>Têm como pagar?</span></li></ol>
          <p>Depois descreva a oferta: o que está incluído (<b>escopo</b>), o que você entrega (<b>entregável</b>), em quanto tempo e o que não está incluído.</p>
          <p><b>Exemplo:</b> "Atendimento automático no WhatsApp para clínicas de estética: respostas a 10 perguntas frequentes e agendamento, entregue em 7 dias, com 1 ajuste incluso."</p>
          <p>⚠️ Não prometa o que não depende de você, como "vai dobrar suas vendas".</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que lembramos mais da loja que só vende uma coisa e vende bem.</div>`
      ],
      ch:{ who:'Larissa, 31 anos, quer vender serviços com IA', says:'Vou atender qualquer empresa, de qualquer área, com qualquer serviço. Assim aumento minhas chances.',
        q:'Qual é a melhor abordagem?',
        opts:[
          {t:'Escolher um nicho que ela conhece, com um problema claro, e montar uma oferta com escopo, entrega e prazo definidos.', ok:true, why:'Foco facilita a divulgação, a confiança do cliente e a entrega bem-feita.'},
          {t:'Atender todos, porque quanto mais clientes, melhor.', ok:false, why:'Sem foco, o trabalho vira bagunça e a divulgação fica vaga.'},
          {t:'Prometer aumento de vendas para qualquer cliente.', ok:false, why:'Ela não controla as vendas do cliente. Prometer resultado que não depende de você gera frustração.'}
        ]}}
  ]},
  { id:2, icon:'💬', title:'Proposta e preço', sub:'Falar de dinheiro com clareza', lessons:[
    { id:'2.1', title:'Como montar uma proposta simples', min:7,
      body:[
        `<div class="card analogy"><h3>🧱 O orçamento do pedreiro</h3><p>O bom pedreiro diz o que vai fazer, com quais materiais, em quanto tempo, por quanto e <b>o que não está incluído</b>. Com isso, ninguém se surpreende no meio da obra.</p></div>`,
        `<div class="term"><b>Proposta</b> = documento que descreve o que você vai fazer, quando e por quanto. <b>Revisão</b> = ajuste incluído no serviço, com limite combinado. <b>Validade</b> = prazo em que o preço da proposta vale.</div>`,
        `<div class="card"><h3>A proposta de uma página</h3><p>Inclua:</p>
          <ol class="golden"><li><span>O <b>problema do cliente</b>, em palavras dele.</span></li><li><span>O que você vai fazer (<b>escopo</b>) e o que vai entregar.</span></li><li><span>O que <b>não está incluído</b>.</span></li><li><span><b>Prazo</b>.</span></li><li><span><b>Preço</b> e forma de pagamento.</span></li><li><span>Quantas <b>revisões</b> estão incluídas.</span></li><li><span><b>Validade</b> da proposta.</span></li></ol>
          <p>Escreva com clareza e sem termos técnicos. Peça à IA para revisar a proposta e apontar pontos que o cliente poderia entender de outra forma.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o pedreiro combina o que vai fazer e o que não vai fazer antes de começar a obra.</div>`
      ],
      ch:{ who:'Thiago, 29 anos, fez um site para um cliente', says:'Combinamos o site por mensagem. No final, o cliente pediu 5 telas a mais e disse que estava no combinado.',
        q:'O que faltou?',
        opts:[
          {t:'Nada, é assim com todos os clientes.', ok:false, why:'Essa situação é evitável com uma proposta escrita.'},
          {t:'Pedir desculpas e fazer tudo de graça para manter o cliente.', ok:false, why:'Fazer de graça cria o hábito de pedir mais e prejudica seu trabalho e seu bolso.'},
          {t:'Uma proposta escrita com escopo, o que não está incluído e quantas revisões estão no preço.', ok:true, why:'O que está escrito evita discussões e deixa claro o que é extra.'}
        ]}},
    { id:'2.2', title:'Como pensar o preço', min:7,
      body:[
        `<div class="card analogy"><h3>🍽️ Precificar um prato</h3><p>O dono do restaurante soma ingredientes, tempo de preparo, aluguel e margem, e olha o preço de pratos parecidos na região. Ele <b>não chuta um número</b> nem copia o vizinho sem pensar.</p></div>`,
        `<div class="term"><b>Custo</b> = o que você gasta para entregar, incluindo o seu tempo. <b>Valor</b> = o que o resultado vale para o cliente. <b>Margem</b> = o que sobra depois de cobrir os custos.</div>`,
        `<div class="card"><h3>Três olhares sobre o preço</h3>
          <div class="tw"><table class="tbl"><tr><th>Olhar</th><th>A pergunta</th></tr>
          <tr><td><b>Custo</b></td><td>Quantas horas você gasta e quanto vale a sua hora, somando ferramentas e imposto.</td></tr>
          <tr><td><b>Valor</b></td><td>Quanto o resultado ajuda o cliente (tempo economizado, clientes atendidos).</td></tr>
          <tr><td><b>Mercado</b></td><td>O que é cobrado por serviços parecidos na sua região.</td></tr></table></div>
          <p>Você pode cobrar <b>por projeto, por hora ou por mensalidade</b> (para serviços contínuos, como manutenção). Comece sem preços muito baixos, porque o preço baixo demais atrai clientes difíceis e não paga seu tempo.</p>
          <p>Não existe um valor mágico, e ninguém pode prometer quanto você vai ganhar. Pesquise o mercado e ajuste com a experiência.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o dono do restaurante soma tudo o que gasta antes de decidir o preço do prato.</div>`
      ],
      ch:{ who:'Bruna, 25 anos, está começando', says:'Vou cobrar o mais barato possível para ganhar clientes. Quase de graça, só para começar.',
        q:'Qual é a melhor estratégia?',
        opts:[
          {t:'Cobrar quase de graça sempre, porque o cliente vai valorizar.', ok:false, why:'Preço muito baixo não paga o seu tempo e costuma atrair clientes difíceis.'},
          {t:'Copiar o preço do concorrente sem pensar nos próprios custos.', ok:false, why:'O concorrente tem custos e valor diferentes dos seus. Copiar sem calcular pode dar prejuízo.'},
          {t:'Calcular o custo da sua hora, considerar o valor para o cliente, olhar o mercado local e definir um preço que pague o seu trabalho, ajustando com a experiência.', ok:true, why:'Considerar custo, valor e mercado leva a um preço justo para você e para o cliente.'}
        ]}}
  ]},
  { id:3, icon:'✅', title:'Entregar e crescer', sub:'Com segurança e responsabilidade', lessons:[
    { id:'3.1', title:'Combinados por escrito e entrega sem dor de cabeça', min:7,
      body:[
        `<div class="card analogy"><h3>🤝 O contrato de aluguel</h3><p>O contrato de aluguel diz valor, prazo, o que cada um faz e o que acontece se algo der errado. <b>Não é falta de confiança</b>: é cuidado para que a relação continue boa.</p></div>`,
        `<div class="term"><b>Contrato</b> = acordo escrito entre as partes, com direitos e deveres. <b>Cláusula</b> = cada regra do contrato. <b>Aceite</b> = a confirmação do cliente de que recebeu e aprovou a entrega.</div>`,
        `<div class="card"><h3>O mínimo para trabalhar tranquilo</h3>
          <ol class="golden"><li><span><b>Escopo, prazo e preço</b> por escrito.</span></li><li><span><b>Forma e datas de pagamento</b>, e o que acontece se atrasar.</span></li><li><span><b>Quem é dono</b> do que foi entregue e se você pode mostrá-lo no seu portfólio.</span></li><li><span>Como serão tratados <b>dados do cliente</b> e de clientes dele (LGPD): use só o necessário e não envie dados desnecessários a ferramentas de IA.</span></li><li><span><b>Aviso de que você usa IA</b> no trabalho, quando isso for relevante para o cliente.</span></li><li><span><b>Aceite por escrito</b> no fim.</span></li></ol>
          <p>Modelos de contrato ajudam, mas para valores altos ou casos sensíveis, consulte um profissional.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um acordo escrito evita brigas, mesmo entre amigos.</div>`
      ],
      ch:{ who:'Rodolfo, 34 anos, automatizou o atendimento de uma clínica', says:'Usei os contatos e as mensagens dos pacientes da clínica para testar minha automação em ferramentas de IA, sem avisar ninguém.',
        q:'O que está errado?',
        opts:[
          {t:'Nada: era para melhorar o atendimento, então tudo bem.', ok:false, why:'Boa intenção não dispensa cuidado com dados de pessoas, ainda mais dados de saúde.'},
          {t:'Ele deveria ter testado só com dados fictícios, combinado por escrito como os dados seriam tratados e pedido orientação jurídica, por serem dados sensíveis.', ok:true, why:'Dados fictícios nos testes e um combinado claro protegem os pacientes, a clínica e o prestador de serviço.'},
          {t:'O erro foi não cobrar a mais pelo teste.', ok:false, why:'O problema não é o valor cobrado, e sim o uso inadequado de dados de pessoas.'}
        ]}},
    { id:'3.2', title:'Formalizar, organizar e crescer sem prometer milagres', min:6,
      body:[
        `<div class="card analogy"><h3>🏠 Arrumar a casa antes das visitas</h3><p>Quando a casa está organizada, receber mais gente é tranquilo. Quando está bagunçada, cada visita vira um problema. <b>Seu negócio funciona do mesmo jeito.</b></p></div>`,
        `<div class="term"><b>Formalização</b> = registrar a atividade para trabalhar de forma legal, por exemplo como MEI. <b>Portfólio</b> = exemplos reais do que você já fez. <b>Depoimento</b> = a opinião de um cliente satisfeito, com autorização para publicar.</div>`,
        `<div class="card"><h3>Cresça com base firme</h3>
          <ol class="golden"><li><span><b>Formalização</b>: pesquise as regras atuais em fontes oficiais, como o Portal do Empreendedor (gov.br), e converse com um contador, porque limites, atividades permitidas e impostos mudam.</span></li><li><span><b>Separe</b> o dinheiro pessoal do dinheiro do trabalho e anote entradas e saídas.</span></li><li><span>Monte um <b>portfólio</b> com projetos reais, com autorização dos clientes para mostrá-los.</span></li><li><span>Peça <b>depoimentos</b>.</span></li><li><span>Faça a divulgação com <b>honestidade</b>: não prometa ganhos nem resultados garantidos, porque cada cliente e cada projeto são diferentes.</span></li></ol>
          <p>Crescer é consequência de entregar bem, repetidamente. Esta é a última etapa da Trilha de IA: continue praticando e ensinando o que aprendeu.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, por que organizar a casa antes de receber visitas ajuda a crescer.</div>`
      ],
      ch:{ who:'Gabriela, 28 anos, fecha os primeiros clientes', says:'Vou divulgar que quem contratar meu serviço vai faturar 10 mil por mês. Assim chamo mais gente.',
        q:'Qual é a melhor postura na divulgação?',
        opts:[
          {t:'Prometer esse ganho, porque promessas grandes atraem clientes.', ok:false, why:'Ela não controla o faturamento do cliente. Promessa que não se cumpre gera reclamações e pode ser propaganda enganosa.'},
          {t:'Prometer ganhos menores, para parecer mais realista.', ok:false, why:'Qualquer promessa de ganho garantido tem o mesmo problema. O resultado depende de muitos fatores.'},
          {t:'Mostrar projetos reais e depoimentos, explicar o que o serviço entrega e falar com honestidade sobre o que depende do cliente.', ok:true, why:'Provas reais e transparência constroem confiança e evitam promessas que não dá para cumprir.'}
        ]}}
  ]}
];

const MODDONE = {
  1: 'Você sabe transformar o que sabe em um serviço claro, para um nicho, com resultado que o cliente entende.',
  2: 'Você sabe montar uma proposta simples e pensar o preço com custo, valor e mercado.',
  3: 'Você sabe combinar por escrito, cuidar dos dados e crescer com honestidade. Parabéns por concluir a Trilha de IA!'
};

const PROMPTS = {
  1: [
    { title:'Minha oferta em uma frase', desc:'Para definir nicho e oferta.',
      text:'Eu sei fazer [HABILIDADES] com IA. Meu possível cliente é [TIPO DE CLIENTE]. Ajude-me a escrever a frase "Eu ajudo [CLIENTE] a [RESULTADO] por meio de [O QUE FAÇO]", com 3 variações, e liste 5 perguntas para testar com pessoas desse público. Não prometa ganhos.' }
  ],
  2: [
    { title:'Proposta de uma página', desc:'Para montar uma proposta clara.',
      text:'Monte uma proposta de 1 página para [CLIENTE] com: problema, o que farei, o que NÃO está incluído, entregáveis, prazo, preço de [VALOR], forma de pagamento, [N] revisões incluídas e validade de [DIAS] dias. Use linguagem simples e deixe campos [ENTRE COLCHETES] para eu preencher.' }
  ],
  3: [
    { title:'Checklist do combinado', desc:'Para revisar antes de começar.',
      text:'Este é o resumo do combinado com meu cliente: [RESUMO SEM DADOS PESSOAIS]. Aponte o que está faltando (escopo, prazo, pagamento, direitos, tratamento de dados, aceite) e quais pontos devo levar a um profissional jurídico ou a um contador. Não é consultoria jurídica.' }
  ]
};

const THEME = { 1:['#EF4444','#EC4899'], 2:['#EC4899','#F43F5E'], 3:['#F43F5E','#EF4444'] };
const LIC = { '1.1':'🎯','1.2':'🧭','2.1':'📄','2.2':'💲','3.1':'🤝','3.2':'📈' };

return {
  id: 'do-projeto-ao-negocio',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  dicaPrompts: 'Troque o que está entre [COLCHETES] pelos dados do seu caso e cole em qualquer assistente de IA (ChatGPT, Gemini, Claude...).',
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
