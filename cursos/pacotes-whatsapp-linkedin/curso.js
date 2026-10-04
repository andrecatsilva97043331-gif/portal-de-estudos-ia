/* Curso: Pacotes de Mensagens para WhatsApp e LinkedIn (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'📦', title:'O pacote', sub:'O que entregar e como escrever', lessons:[
    { id:'1.1', title:'O que é um pacote de mensagens e o que entregar', min:6,
      body:[
        `<div class="card analogy"><h3>📦 A caixa de ferramentas organizada</h3><p>Ninguém entrega ao cliente um martelo solto: entrega a caixa organizada, com as ferramentas dos usos mais comuns, cada uma no lugar. Um pacote de mensagens é essa caixa para o dia a dia do atendimento.</p></div>`,
        `<div class="term"><b>Pacote de mensagens</b> = conjunto organizado de modelos de mensagem para situações do negócio. <b>Modelo com campos</b> = mensagem com espaços para preencher, como [NOME] e [DATA]. <b>Situação</b> = o momento do atendimento, como boas-vindas, lembrete ou pós-venda.</div>`,
        `<div class="card"><h3>Cubra as situações que se repetem</h3><p>Um bom pacote inclui: boas-vindas, resposta a "quanto custa?", confirmação de agendamento, lembrete, pós-venda com pedido de avaliação, cobrança educada e retomada de contato. Entregue:</p>
          <ol class="golden"><li><span>Um documento organizado.</span></li><li><span>Para cada mensagem: nome, quando usar e campos a preencher.</span></li><li><span>Duas variações, para não parecer robótico.</span></li><li><span>Um guia de uso curto.</span></li></ol>
          <p>De 10 a 15 mensagens é um bom tamanho inicial. O seu serviço é criar os modelos, e quem envia aos contatos é o cliente.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma caixa de ferramentas organizada é melhor que ferramentas soltas.</div>`
      ],
      ch:{ who:'Patrícia, 32 anos, quer oferecer pacotes de mensagens para salões', says:'Vou entregar 100 mensagens num arquivo gigante, sem organização. Quanto mais, melhor.',
        q:'Qual é a melhor entrega?',
        opts:[
          {t:'Entregar o arquivo gigante, porque a quantidade impressiona o cliente.', ok:false, why:'Sem organização, o cliente não acha a mensagem certa na hora e não usa o material.'},
          {t:'Entregar de 10 a 15 mensagens organizadas por situação, com quando usar, campos e variações.', ok:true, why:'Um pacote enxuto e bem organizado é usado de verdade, e o cliente percebe valor.'},
          {t:'Entregar uma só mensagem genérica para qualquer situação.', ok:false, why:'Cada situação pede um tom e um conteúdo. Uma só mensagem não resolve o dia a dia.'}
        ]}},
    { id:'1.2', title:'Mensagens que soam humanas', min:7,
      body:[
        `<div class="card analogy"><h3>💬 A conversa no balcão</h3><p>No balcão, o atendente chama pelo nome, fala claro e vai direto ao ponto. Ele não lê um panfleto em voz alta. As mensagens precisam soar como essa conversa.</p></div>`,
        `<div class="term"><b>Personalização</b> = adaptar a mensagem ao contato, como usar o nome. <b>Tom</b> = o jeito de falar da mensagem. <b>Mensagem robótica</b> = texto longo, genérico e sem jeito de conversa.</div>`,
        `<div class="card"><h3>Oito dicas para soar humano</h3><ol class="golden"><li><span>Seja curto: no WhatsApp, poucas linhas.</span></li><li><span>Use o nome com um campo [NOME].</span></li><li><span>Uma ideia por mensagem.</span></li><li><span>Termine com uma pergunta ou um próximo passo claro.</span></li><li><span>Evite exageros, letras maiúsculas e emojis demais.</span></li><li><span>Ofereça variações.</span></li><li><span>Leia em voz alta: se soar estranho, reescreva.</span></li><li><span>Adapte ao tom do negócio, mais formal numa clínica e mais leve numa barbearia.</span></li></ol>
          <p>Nunca invente promoções ou prazos.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma conversa de balcão é melhor do que alguém lendo um panfleto.</div>`
      ],
      ch:{ who:'Rodrigo, 29 anos, cria mensagens para lojas', says:'A IA escreveu mensagens longas, cheias de emojis e promessas. Os clientes acharam parecer spam.',
        q:'Qual é o melhor ajuste?',
        opts:[
          {t:'Colocar ainda mais emojis e promessas, para chamar atenção.', ok:false, why:'Exageros reforçam a impressão de spam e afastam as pessoas.'},
          {t:'Enviar uma mensagem única e longa, para explicar tudo de uma vez.', ok:false, why:'Textos longos cansam, e muita gente nem lê até o fim.'},
          {t:'Encurtar, usar o nome, uma ideia por mensagem e uma pergunta final, no tom do negócio, sem exageros nem promessas.', ok:true, why:'Mensagens curtas, pessoais e honestas soam como conversa e são mais respondidas.'}
        ]}}
  ]},
  { id:2, icon:'💼', title:'LinkedIn e organização', sub:'Tom profissional e entrega clara', lessons:[
    { id:'2.1', title:'Posts e mensagens no LinkedIn', min:7,
      body:[
        `<div class="card analogy"><h3>💼 O aperto de mão profissional</h3><p>É cordial, objetivo e sem forçar intimidade. No LinkedIn, o tom é parecido: claro, útil e respeitoso.</p></div>`,
        `<div class="term"><b>Post</b> = publicação para a sua rede. <b>Mensagem de conexão</b> = o bilhete curto que acompanha um convite. <b>Gancho</b> = a primeira linha do post, que faz a pessoa querer ler o resto.</div>`,
        `<div class="card"><h3>Utilidade e respeito</h3><p>O LinkedIn é uma rede profissional: funcionam bem histórias reais, aprendizados e bastidores do trabalho. Post: gancho na primeira linha, conteúdo útil e fecho com uma pergunta. Mensagens a quem você não conhece: personalize, explique o motivo do contato, não envie o mesmo texto de venda em massa nem venda logo de cara, e respeite quem não responde. Revise nomes, cargos e empresas citados, não invente resultados ou clientes e não exponha informações confidenciais. A plataforma tem regras contra automação e spam, então leia os termos de uso.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos como é um bom aperto de mão numa reunião de trabalho.</div>`
      ],
      ch:{ who:'Cláudia, 36 anos, quer divulgar seus serviços', says:'Quero mandar o mesmo texto de venda, longo, para 200 desconhecidos no LinkedIn usando uma ferramenta automática.',
        q:'Qual é a melhor abordagem?',
        opts:[
          {t:'Personalizar o contato com poucas pessoas relevantes, explicar o motivo da mensagem, evitar disparo automático e ler os termos da plataforma.', ok:true, why:'Contato personalizado e respeitoso tem mais resposta e evita bloqueio por spam.'},
          {t:'Fazer o envio automático, porque quanto mais gente, mais chance.', ok:false, why:'Disparo em massa costuma ser ignorado e pode levar ao bloqueio da conta.'},
          {t:'Mandar a mesma mensagem, mas fingir ser outra pessoa.', ok:false, why:'Se passar por outra pessoa é enganoso e quebra regras da plataforma.'}
        ]}},
    { id:'2.2', title:'Organizando o pacote: documento, nomes e guia de uso', min:6,
      body:[
        `<div class="card analogy"><h3>🗂️ A gaveta com divisórias</h3><p>Quando cada talher tem o seu lugar, você acha o que precisa sem procurar. Um pacote bem organizado funciona como essa gaveta.</p></div>`,
        `<div class="term"><b>Guia de uso</b> = instruções curtas de quando e como usar cada mensagem. <b>Variação</b> = outra versão da mesma mensagem. <b>Campo</b> = o espaço que o cliente preenche.</div>`,
        `<div class="card"><h3>A estrutura do documento</h3><ol class="golden"><li><span>Capa: nome do cliente, data e versão.</span></li><li><span>Índice por situação.</span></li><li><span>Para cada mensagem: nome, quando usar, texto com [CAMPOS], duas variações e observações ("não enviar após as 20h").</span></li><li><span>Guia curto: como personalizar, como respeitar quem pede para não receber, quando passar para uma pessoa.</span></li><li><span>Lista do que o cliente precisa preencher (preços, links, endereço).</span></li></ol>
          <p>Entregue em formato fácil de usar, como documento ou planilha. Revise ortografia e consistência, como o nome do negócio e o jeito de tratar o cliente.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que arrumar a gaveta com divisórias ajuda a achar as coisas.</div>`
      ],
      ch:{ who:'Bruno, 27 anos, entrega pacotes de mensagens', says:'Entreguei as mensagens soltas num bloco de notas, sem dizer quando usar cada uma. A cliente ficou perdida.',
        q:'O que ele deveria ter feito?',
        opts:[
          {t:'Organizar num documento com índice por situação, quando usar, campos, variações e um guia de uso curto.', ok:true, why:'A organização transforma textos soltos em uma ferramenta que o cliente consegue usar.'},
          {t:'Nada: textos bons não precisam de explicação.', ok:false, why:'Sem orientação, o cliente não sabe qual mensagem usar em cada momento.'},
          {t:'Entregar mais mensagens, para ela escolher.', ok:false, why:'Mais mensagens sem organização deixam o cliente ainda mais perdido.'}
        ]}}
  ]},
  { id:3, icon:'⚖️', title:'Uso responsável', sub:'Consentimento e portfólio', lessons:[
    { id:'3.1', title:'Consentimento e spam: só para quem aceitou', min:7,
      body:[
        `<div class="card analogy"><h3>⚖️ A campainha</h3><p>A campainha toca para quem você quer visitar e quem quer ser visitado. Jogar panfleto por baixo de todas as portas incomoda e vira reclamação.</p></div>`,
        `<div class="term"><b>Consentimento</b> = permissão da pessoa para receber mensagens. <b>Descadastro (opt-out)</b> = jeito simples de a pessoa pedir para não receber mais. <b>Disparo em massa</b> = envio do mesmo texto a muita gente de uma vez.</div>`,
        `<div class="card"><h3>Mensagem boa é mensagem esperada</h3><ol class="golden"><li><span>Envie para quem já é cliente ou pediu contato.</span></li><li><span>Não compre listas de números.</span></li><li><span>Ofereça um descadastro fácil ("responda SAIR") e respeite.</span></li><li><span>Não adicione pessoas em grupos sem pedir.</span></li><li><span>WhatsApp e LinkedIn têm regras contra spam e uso abusivo de automação e podem bloquear contas: leia as políticas atuais. Para contatos comerciais organizados, existem ferramentas oficiais, como o WhatsApp Business, com recursos próprios: confira as condições vigentes.</span></li><li><span>LGPD: guarde só o necessário e informe a finalidade.</span></li></ol>
          <p>Você entrega os modelos e orienta o cliente a usá-los com consentimento.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que só tocamos a campainha de quem quer nos receber.</div>`
      ],
      ch:{ who:'Wesley, 34 anos, tem uma loja', says:'Comprei uma lista com 5 mil números e vou disparar a mensagem para todos pelo WhatsApp.',
        q:'Qual é o problema?',
        opts:[
          {t:'Nenhum: quanto mais gente receber, mais vendas.', ok:false, why:'Mensagens para quem não pediu geram denúncias e podem bloquear o número.'},
          {t:'Disparar só à noite, para incomodar menos.', ok:false, why:'O horário não resolve a falta de permissão.'},
          {t:'Falta de consentimento: isso pode bloquear a conta e gerar problemas com a LGPD. O certo é enviar só a clientes e a quem pediu contato, com opção de sair.', ok:true, why:'Consentimento e descadastro protegem a conta e as pessoas, e geram contatos mais interessados.'}
        ]}},
    { id:'3.2', title:'Projeto de portfólio e checklist', min:6,
      body:[
        `<div class="card analogy"><h3>📁 A degustação na doceria</h3><p>O cliente prova um pedacinho antes de comprar. Seu portfólio é a degustação do seu serviço: mostra a qualidade sem precisar de explicação.</p></div>`,
        `<div class="term"><b>Portfólio</b> = exemplos reais ou de treino do seu trabalho. <b>Projeto fictício</b> = trabalho de treino para um negócio inventado. <b>Checklist</b> = lista de itens a conferir antes de entregar.</div>`,
        `<div class="card"><h3>Projeto final e checklist</h3><p>Monte um pacote para um negócio real, com autorização, ou fictício: 10 mensagens de WhatsApp (boas-vindas, preço, confirmação, lembrete, pós-venda, cobrança educada e retomada), 3 posts de LinkedIn e um guia de uso com descadastro. Marque no portfólio quando o projeto for fictício.</p>
          <p><b>Checklist "estou pronto para cobrar?":</b> mensagens com campos, variações feitas, guia de uso e descadastro, nenhuma promessa de ganho, orientação de consentimento dada ao cliente, revisão de nomes e ortografia e combinado por escrito (quantidade de mensagens, revisões e prazo).</p>
          <p><b>Próximo passo:</b> o curso "Sites Simples com IA".</p>
          <p>⚠️ Este curso não garante renda: ele ensina a oferecer um serviço com qualidade.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, por que uma degustação ajuda a vender.</div>`
      ],
      ch:{ who:'Amanda, 24 anos, fez um pacote de teste', says:'Já fiz um pacote de teste, mas vou cobrar sem combinar quantas revisões estão incluídas.',
        q:'O que ela deveria fazer antes de cobrar?',
        opts:[
          {t:'Cobrar já, e resolver as revisões conforme o cliente pedir.', ok:false, why:'Sem limite combinado, o cliente pode pedir revisões sem fim e prejudicar o seu tempo.'},
          {t:'Combinar por escrito a quantidade de mensagens, as revisões incluídas e o prazo, e usar o checklist antes de entregar.', ok:true, why:'O combinado escrito evita conflito e deixa claro o que é extra.'},
          {t:'Oferecer revisões ilimitadas para ganhar a confiança do cliente.', ok:false, why:'Revisões ilimitadas tiram o valor do seu tempo. Limites claros mostram profissionalismo.'}
        ]}}
  ]}
];

const MODDONE = {
  1: 'Você sabe montar um pacote útil, enxuto e organizado, e escrever mensagens que soam humanas.',
  2: 'Você sabe adaptar o tom ao LinkedIn e entregar tudo num documento claro.',
  3: 'Você sabe orientar o uso com consentimento e montar um portfólio honesto, pronto para mostrar a clientes.'
};

const PROMPTS = {
  1: [
    { title:'Pacote de mensagens', desc:'Para criar modelos por situação.',
      text:'Negócio: [NEGÓCIO]. Tom: [TOM]. Crie 10 mensagens de WhatsApp para as situações: boas-vindas, preço, confirmação, lembrete, pós-venda, cobrança educada e retomada de contato. Use campos [NOME], [DATA] e [VALOR]. Dê 2 variações curtas de cada. Não invente promoções.' }
  ],
  2: [
    { title:'Post de LinkedIn', desc:'Para criar posts profissionais.',
      text:'Escreva 3 posts de LinkedIn sobre [TEMA] para [PÚBLICO], com gancho na primeira linha, conteúdo útil e pergunta final. Tom [TOM]. Não invente resultados, clientes nem números.' }
  ],
  3: [
    { title:'Revisão de consentimento', desc:'Para checar o uso responsável.',
      text:'Este é o plano de envio do meu cliente: [DESCRIÇÃO]. Aponte riscos de spam, de falta de consentimento e de privacidade, e sugira como pedir permissão e oferecer descadastro. Lembre-me de conferir as políticas atuais das plataformas.' }
  ]
};

const THEME = { 1:['#06B6D4','#3B82F6'], 2:['#3B82F6','#06B6D4'], 3:['#06B6D4','#3B82F6'] };
const LIC = { '1.1':'📦','1.2':'💬','2.1':'💼','2.2':'🗂️','3.1':'⚖️','3.2':'📁' };

return {
  id: 'pacotes-whatsapp-linkedin',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  dicaPrompts: 'Troque o que está entre [COLCHETES] pelos dados do seu caso e cole em qualquer assistente de IA (ChatGPT, Gemini, Claude...).',
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
