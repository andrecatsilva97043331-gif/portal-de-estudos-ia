/* Curso: Formalizando: MEI e Organização Financeira (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🏛️', title:'Entender a formalização', sub:'Quando e como', lessons:[
    { id:'1.1', title:'Por que e quando formalizar', min:6,
      body:[
        `<div class="card analogy"><h3>🏛️ Documentar o carro</h3><p>Rodar com o carro sem documento até é possível, mas qualquer batida vira problema grande. Com tudo em dia, você circula com mais segurança. Formalizar o negócio tem um efeito parecido, com custos e deveres.</p></div>`,
        `<div class="term"><b>Informalidade</b> = trabalhar sem registro como empresa. <b>CNPJ</b> = o número de registro de uma empresa na Receita Federal. <b>MEI</b> = Microempreendedor Individual, categoria simplificada para pequenos negócios, com regras e limites próprios.</div>`,
        `<div class="card"><h3>Não existe resposta única</h3><p>Trabalhar informal parece mais simples no início, mas limita: muitas empresas só contratam quem emite nota fiscal, e há serviços e benefícios ligados a ter um registro. Formalizar traz custos mensais e obrigações. A decisão depende do seu volume, do tipo de cliente e da atividade. Pergunte: meus clientes exigem nota? Minha atividade pode ser MEI? Compensa para mim? Confira as regras atuais no Portal do Empreendedor (gov.br) e converse com um contador ou procure orientação de entidades como o Sebrae. Este curso explica o básico e não substitui orientação profissional.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que andar com os documentos do carro em dia traz mais segurança.</div>`
      ],
      ch:{ who:'Letícia, 28 anos, presta serviços de forma informal', says:'Uma empresa quer contratar meu serviço, mas exige nota fiscal. Eu sou informal e não sei o que fazer.',
        q:'Qual é o melhor caminho?',
        opts:[
          {t:'Dizer à empresa que nota fiscal não é necessária.', ok:false, why:'Muitas empresas precisam da nota. Insistir sem ela costuma perder o cliente.'},
          {t:'Pesquisar no Portal do Empreendedor se a atividade pode ser MEI, avaliar custo e obrigações e, se compensar, formalizar antes de emitir a nota, buscando orientação de um contador ou do Sebrae.', ok:true, why:'Conferir regras e custos antes de decidir evita surpresas e permite atender empresas com segurança.'},
          {t:'Emitir a nota usando o CNPJ de um parente.', ok:false, why:'Usar o CNPJ de outra pessoa é irregular e traz riscos para você e para o parente.'}
        ]}},
    { id:'1.2', title:'MEI na prática: o que é e o que muda', min:7,
      body:[
        `<div class="card analogy"><h3>📋 A carteirinha do clube</h3><p>O clube dá benefícios, mas também tem regras, mensalidade e limites. Quem entra precisa conhecer tudo isso, e os termos podem mudar com o tempo.</p></div>`,
        `<div class="term"><b>DAS</b> = a guia única mensal em que o MEI paga seus impostos e contribuições. <b>DASN-SIMEI</b> = a declaração anual do faturamento do MEI. <b>Limite de faturamento</b> = o valor máximo de receita por ano permitido ao MEI, que pode mudar por lei.</div>`,
        `<div class="card"><h3>O que vale lembrar, sem decorar números</h3><ol class="golden"><li><span>Só algumas atividades podem ser MEI: confira a lista oficial.</span></li><li><span>Existe um limite anual de faturamento: confira o valor atual no Portal do Empreendedor.</span></li><li><span>O DAS é pago todo mês, em geral até o dia 20, mesmo em meses sem faturamento: confirme a data.</span></li><li><span>A declaração anual é entregue uma vez por ano, em geral até o fim de maio: confirme o prazo do ano.</span></li><li><span>Nota fiscal é obrigatória nas vendas e serviços para empresas.</span></li><li><span>Atrasos geram multa e juros e podem causar problemas com o CNPJ.</span></li></ol>
          <p>O cadastro do MEI é feito de graça no Portal do Empreendedor, e sites que cobram para "abrir o MEI" podem ser desnecessários ou golpes.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que quem entra num clube precisa conhecer as regras do clube.</div>`
      ],
      ch:{ who:'Cássio, 32 anos, quer virar MEI', says:'Achei um site que cobra para abrir o MEI para mim e promete rapidez. Parece prático.',
        q:'O que fazer?',
        opts:[
          {t:'Pagar e passar todos os dados, porque parece mais fácil.', ok:false, why:'Passar dados pessoais a sites desconhecidos é arriscado, e o cadastro oficial é gratuito.'},
          {t:'Pagar, mas só se o site tiver muitas avaliações positivas.', ok:false, why:'Avaliações podem ser falsas, e o serviço continua sendo desnecessário.'},
          {t:'Fazer o cadastro no Portal do Empreendedor, que é gratuito, conferindo que o endereço é o oficial do gov.br, e desconfiar de quem cobra por isso.', ok:true, why:'O caminho oficial é gratuito e seguro, e evita golpes e gastos desnecessários.'}
        ]}}
  ]},
  { id:2, icon:'💼', title:'Organizar', sub:'Contas, notas e controle', lessons:[
    { id:'2.1', title:'Separar contas e controlar entradas e saídas', min:6,
      body:[
        `<div class="card analogy"><h3>🧮 Duas carteiras</h3><p>A carteira do bolso é para as suas contas pessoais, e a do negócio é para as do trabalho. Misturar as duas faz você nunca saber se o negócio está dando lucro.</p></div>`,
        `<div class="term"><b>Entrada</b> = dinheiro que você recebe. <b>Saída</b> = dinheiro que você gasta, como ferramentas, internet e impostos. <b>Lucro</b> = o que sobra depois de pagar os custos.</div>`,
        `<div class="card"><h3>Cinco hábitos simples</h3><ol class="golden"><li><span>Separe a conta pessoal da conta do negócio (muitos bancos têm opções de conta para pequenos negócios: compare as condições).</span></li><li><span>Anote toda entrada e saída numa planilha: data, cliente, serviço, valor e forma de pagamento.</span></li><li><span>Separe uma parte de cada recebimento para impostos e imprevistos.</span></li><li><span>Defina um valor fixo que você retira para si todo mês.</span></li><li><span>Revise tudo uma vez por mês.</span></li></ol>
          <p>A IA ajuda a montar a planilha, mas os números reais são seus: não envie extratos com dados pessoais completos a ferramentas de IA.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que ter uma carteira para o lanche e outra para o negócio ajuda a saber quanto sobrou.</div>`
      ],
      ch:{ who:'Wagner, 35 anos, presta serviços', says:'Recebo tudo na minha conta pessoal e gasto como quiser. No fim do mês não sei se tive lucro.',
        q:'Qual é o melhor ajuste?',
        opts:[
          {t:'Separar as contas, anotar toda entrada e saída, reservar parte para impostos e revisar uma vez por mês.', ok:true, why:'Com contas separadas e registro, ele vê o lucro real e evita sustos com impostos.'},
          {t:'Esperar o fim do ano para tentar lembrar de tudo.', ok:false, why:'A memória falha e o fim do ano chega com contas confusas.'},
          {t:'Comprar um sistema caro antes de ter clientes.', ok:false, why:'Uma planilha simples resolve no começo. O hábito importa mais que a ferramenta.'}
        ]}},
    { id:'2.2', title:'Notas, recibos e cobrança correta', min:6,
      body:[
        `<div class="card analogy"><h3>🧾 O recibo da padaria</h3><p>O recibo comprova a compra para os dois lados. Se houver dúvida depois, os dois sabem o que foi combinado e pago.</p></div>`,
        `<div class="term"><b>Nota fiscal de serviço</b> = documento que registra um serviço prestado e comprova a receita. <b>Recibo</b> = comprovante simples de pagamento. <b>Meio rastreável</b> = forma de pagamento que deixa registro, como Pix e transferência.</div>`,
        `<div class="card"><h3>Registre tudo</h3><p>Para o MEI, a nota fiscal é obrigatória quando o serviço é prestado a empresa; para pessoas físicas, em geral só quando o cliente pede, mas a receita deve ser registrada de qualquer forma. As regras de emissão variam por município, então confirme na prefeitura ou no Portal do Empreendedor. Na nota, descreva claramente o serviço e o valor, com os dados do cliente apenas o necessário. Receba por meios rastreáveis e guarde notas e comprovantes pelo prazo que o contador indicar. Não combine "pagar sem nota para ter desconto": isso gera risco para você e para o cliente.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o recibo ajuda quem vendeu e quem comprou.</div>`
      ],
      ch:{ who:'Renata, 30 anos, é MEI', says:'Uma empresa me pagou por um serviço, e eu não emiti nota porque dá trabalho.',
        q:'Qual é a atitude correta?',
        opts:[
          {t:'Deixar assim: a empresa não vai reclamar.', ok:false, why:'A empresa pode precisar da nota, e a falta dela gera problemas fiscais para você.'},
          {t:'Emitir a nota, porque serviço para empresa exige nota, aprendendo o processo na prefeitura ou no portal oficial e registrando a receita.', ok:true, why:'Emitir a nota cumpre a obrigação, protege os dois lados e mantém o negócio regular.'},
          {t:'Emitir a nota só se a empresa cobrar.', ok:false, why:'A obrigação é do MEI, e não depende de a empresa cobrar.'}
        ]}}
  ]},
  { id:3, icon:'✅', title:'Obrigações e crescimento', sub:'Em dia e com segurança', lessons:[
    { id:'3.1', title:'Prazos e obrigações: DAS e declaração anual', min:6,
      body:[
        `<div class="card analogy"><h3>📅 A conta de luz</h3><p>Se você esquece de pagar, vêm juros e multa. Um lembrete no celular evita o problema. Com impostos funciona do mesmo jeito.</p></div>`,
        `<div class="term"><b>DAS</b> = o pagamento mensal do MEI. <b>Declaração anual</b> = o resumo do faturamento do ano, entregue à Receita. <b>Multa e juros</b> = valores acrescentados quando algo é pago ou entregue fora do prazo.</div>`,
        `<div class="card"><h3>Crie o seu calendário</h3><ol class="golden"><li><span>Lembrete mensal para pagar o DAS (em geral até o dia 20: confirme).</span></li><li><span>Lembrete anual da declaração (em geral até o fim de maio: confirme o prazo do ano).</span></li><li><span>Guarde os comprovantes.</span></li><li><span>Declare o faturamento real, com e sem nota: declarar errado é um problema sério.</span></li><li><span>Atrasos geram multa e juros e podem trazer restrições.</span></li><li><span>Se o faturamento passar do limite ou a atividade mudar, procure orientação, porque pode mudar o enquadramento e haver cobrança adicional.</span></li><li><span>Em dúvida, consulte um contador.</span></li></ol>
          <p>Use a IA para criar o calendário de lembretes, mas confirme as datas no site oficial.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que colocar lembrete para pagar a conta de luz evita multa.</div>`
      ],
      ch:{ who:'Fabrício, 34 anos, é MEI', says:'Esqueci do DAS por 4 meses porque no começo não tive clientes. Achei que sem faturar eu não precisava pagar.',
        q:'O que fazer agora?',
        opts:[
          {t:'Nada: sem faturar, não existe pagamento a fazer.', ok:false, why:'O DAS do MEI é mensal, mesmo em meses sem faturamento.'},
          {t:'Esperar alguém cobrar para só então resolver.', ok:false, why:'Esperar aumenta multas e juros e pode complicar o CNPJ.'},
          {t:'Regularizar pelo Portal do Empreendedor, entender o que está em atraso, buscar orientação se precisar e criar lembretes mensais para não repetir.', ok:true, why:'Regularizar cedo reduz o custo do atraso, e o lembrete evita que aconteça de novo.'}
        ]}},
    { id:'3.2', title:'Crescer com segurança e checklist final', min:7,
      body:[
        `<div class="card analogy"><h3>📈 A escada</h3><p>Para subir com segurança, vai-se um degrau de cada vez, sem pular nenhum. Pular degraus aumenta o risco de cair.</p></div>`,
        `<div class="term"><b>Reserva de emergência</b> = dinheiro guardado para imprevistos. <b>Contrato</b> = acordo escrito, com direitos e deveres. <b>Enquadramento</b> = o tipo de empresa em que o negócio se encaixa, conforme a atividade e o faturamento.</div>`,
        `<div class="card"><h3>Hábitos de um negócio saudável</h3><ol class="golden"><li><span>Reserva de emergência: comece pequena e regular.</span></li><li><span>Reajuste os preços com o tempo, conforme custos e experiência.</span></li><li><span>Para clientes recorrentes ou valores altos, use contrato, com orientação jurídica.</span></li><li><span>Mostre portfólio, depoimentos autorizados e indicações.</span></li><li><span>Acompanhe o limite do MEI e o tipo de atividade: se o negócio crescer, converse com um contador sobre o melhor enquadramento.</span></li><li><span>Proteja os dados dos clientes (LGPD) e as suas contas (verificação em duas etapas).</span></li><li><span>Continue aprendendo e não prometa ganhos.</span></li></ol>
          <p><b>Projeto final:</b> monte a "pasta do negócio" com planilha de entradas e saídas, calendário de impostos, modelo de combinado, modelo de proposta e lista de documentos.</p>
          <p><b>Checklist "estou pronto para cobrar?":</b> decidi sobre formalizar e conferi as regras no site oficial, contas separadas, planilha de controle, calendário do DAS e da declaração, sei quando emitir nota, combinado escrito e nenhuma promessa de ganho.</p>
          <p>⚠️ Este é o último curso da Trilha Renda com IA. Ele não garante renda: ele ensina a organizar o seu serviço com responsabilidade.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, por que subir a escada um degrau de cada vez é mais seguro, e como isso vale para um negócio.</div>`
      ],
      ch:{ who:'Elias, 29 anos, tem um negócio crescendo', says:'Meu negócio cresceu rápido e nem sei quanto faturei no ano. Vou deixar para ver só no ano que vem.',
        q:'Qual é a melhor prática?',
        opts:[
          {t:'Acompanhar o faturamento ao longo do ano na planilha, conferir o limite do MEI e conversar com um contador sobre o enquadramento.', ok:true, why:'Acompanhar durante o ano evita surpresas, e o contador ajuda a decidir o melhor caminho com segurança.'},
          {t:'Deixar para o ano que vem e ver o que acontece.', ok:false, why:'Se o limite for ultrapassado, o problema aumenta a cada mês sem acompanhamento.'},
          {t:'Declarar menos do que faturou para pagar menos imposto.', ok:false, why:'Declarar menos que o real é irregular e pode trazer multas e problemas graves.'}
        ]}}
  ]}
];

const MODDONE = {
  1: 'Você entende quando formalizar faz sentido e o que muda com o MEI, sabendo onde conferir as regras atuais.',
  2: 'Você sabe separar contas, controlar entradas e saídas e emitir nota quando necessário.',
  3: 'Você sabe cumprir prazos e crescer com segurança. Parabéns por concluir a Trilha Renda com IA!'
};

const PROMPTS = {
  1: [
    { title:'Perguntas para decidir', desc:'Para decidir se vale formalizar.',
      text:'Eu faço [SERVIÇO] para [TIPO DE CLIENTE]. Liste perguntas que devo responder para decidir se me formalizo como MEI (atividade permitida, clientes que exigem nota, custo mensal, limite de faturamento) e o que devo conferir no Portal do Empreendedor. Isto não é orientação contábil: lembre-me de confirmar tudo no site oficial e com um contador.' }
  ],
  2: [
    { title:'Planilha de controle', desc:'Para organizar entradas e saídas.',
      text:'Monte um modelo de planilha de controle para o meu serviço [SERVIÇO], com as colunas: data, cliente, serviço, valor, forma de pagamento e nota emitida (sim ou não), mais uma aba de saídas (ferramentas, internet, impostos), com resumo mensal e uma linha para reserva de impostos.' }
  ],
  3: [
    { title:'Calendário de lembretes', desc:'Para não esquecer prazos.',
      text:'Crie um calendário de lembretes para um MEI com: pagamento mensal do DAS, declaração anual, revisão mensal da planilha e revisão trimestral de preços. Deixe as datas como [CONFIRMAR NO SITE OFICIAL], porque as regras podem mudar.' }
  ]
};

const THEME = { 1:['#10B981','#84CC16'], 2:['#84CC16','#10B981'], 3:['#10B981','#84CC16'] };
const LIC = { '1.1':'🏛️','1.2':'📋','2.1':'🧮','2.2':'🧾','3.1':'📅','3.2':'📈' };

return {
  id: 'formalizando-mei-e-financas',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  dicaPrompts: 'Troque o que está entre [COLCHETES] pelos dados do seu caso e cole em qualquer assistente de IA (ChatGPT, Gemini, Claude...).',
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
