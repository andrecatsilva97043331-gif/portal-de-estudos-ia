/* Curso: Base Profissional (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🔒', title:'Dados e direitos', sub:'O que pode e o que não pode', lessons:[
    { id:'1.1', title:'Dados de clientes: cuidado desde o primeiro dia', min:6,
      body:[
        `<div class="card analogy"><h3>🔒 O caderno do cabeleireiro</h3><p>O cabeleireiro anota o telefone das clientes para marcar horário, mas não mostra o caderno para ninguém nem deixa aberto no balcão. Quando você trabalha para clientes, passa a cuidar de um caderno parecido.</p></div>`,
        `<div class="term"><b>Dado pessoal</b> = informação que identifica uma pessoa, como nome, telefone, e-mail, CPF e foto. <b>LGPD</b> = Lei Geral de Proteção de Dados, a lei brasileira que protege os dados das pessoas. <b>Anonimizar</b> = trocar ou tirar o que identifica a pessoa, como usar "Cliente A" no lugar do nome.</div>`,
        `<div class="card"><h3>Cinco regras de ouro</h3><ol class="golden"><li><span>Peça só o que for realmente necessário.</span></li><li><span>Não cole dados pessoais em ferramentas de IA sem necessidade: nos testes, use dados fictícios.</span></li><li><span>Guarde com segurança: senha forte e verificação em duas etapas.</span></li><li><span>Não compartilhe com terceiros sem permissão.</span></li><li><span>Apague os dados quando o trabalho acabar, se for o combinado.</span></li></ol>
          <p>Dados sensíveis, como saúde, crianças e finanças, exigem cuidado redobrado e orientação profissional. Quem trabalha com dados de outras pessoas responde por eles.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o cabeleireiro não deixa o caderno de telefones aberto para qualquer um ver.</div>`
      ],
      ch:{ who:'Sabrina, 26 anos, social media freelancer', says:'O cliente me mandou uma planilha com nome, telefone e CPF de 300 clientes dele. Vou colar tudo na IA para criar as mensagens.',
        q:'Qual é a melhor atitude?',
        opts:[
          {t:'Colar tudo, porque é o jeito mais rápido de personalizar as mensagens.', ok:false, why:'Colar dados de 300 pessoas, incluindo CPF, expõe os dados dessas pessoas e coloca você em risco.'},
          {t:'Pedir só o necessário, usar dados fictícios ou anonimizados ("Cliente A") e criar modelos com campos como [NOME] para o cliente preencher.', ok:true, why:'Os modelos funcionam sem expor ninguém, e os dados reais ficam só com o cliente.'},
          {t:'Colar só metade da planilha, para reduzir o risco.', ok:false, why:'Metade dos dados ainda são dados de pessoas. O cuidado é não precisar deles.'}
        ]}},
    { id:'1.2', title:'Direitos autorais e uso de conteúdo', min:6,
      body:[
        `<div class="card analogy"><h3>©️ A foto do fotógrafo</h3><p>A foto de um prato tem dono: o fotógrafo. Usar numa campanha sem pedir é como usar o trabalho dele sem pagar. Para usar legalmente, é preciso ter licença.</p></div>`,
        `<div class="term"><b>Direito autoral</b> = proteção que a lei dá ao criador de uma obra. <b>Licença</b> = permissão de uso, com regras (por exemplo, uso comercial permitido ou não). <b>Banco de imagens gratuito</b> = site com imagens que podem ser usadas conforme a licença de cada uma.</div>`,
        `<div class="card"><h3>Na dúvida, não use</h3><ol class="golden"><li><span>Imagem que aparece numa busca não é livre.</span></li><li><span>Use fotos próprias ou bancos com licença que permita uso comercial, e leia as condições (algumas pedem crédito).</span></li><li><span>Conteúdo gerado por IA: leia os termos da ferramenta sobre uso comercial.</span></li><li><span>Não imite marcas, personagens nem o estilo exato de artistas conhecidos.</span></li><li><span>Foto com pessoas: peça autorização de uso de imagem.</span></li><li><span>Cite as fontes dos dados e textos que usar.</span></li></ol>
          <p>As regras sobre IA e direitos autorais estão evoluindo, então, em usos comerciais importantes, consulte um profissional.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que não podemos usar a foto de outra pessoa como se fosse nossa.</div>`
      ],
      ch:{ who:'Diego, 24 anos, faz posts para restaurantes', says:'Baixei a foto de um prato num site de receitas e vou usar no post do restaurante do cliente.',
        q:'Qual é a melhor atitude?',
        opts:[
          {t:'Usar, porque é só uma foto de comida.', ok:false, why:'A foto tem dono e pode ter proteção. Usar sem permissão pode gerar cobrança ou processo.'},
          {t:'Usar e colocar o nome do site embaixo.', ok:false, why:'Dar crédito não substitui a permissão, a menos que a licença permita.'},
          {t:'Usar foto própria, de banco de imagens com licença que permita uso comercial, ou criada em ferramenta cujos termos permitam, conferindo as condições.', ok:true, why:'Imagens com licença clara permitem o uso sem risco para você e para o cliente.'}
        ]}}
  ]},
  { id:2, icon:'🤝', title:'Combinados e limites', sub:'Trabalhar sem dor de cabeça', lessons:[
    { id:'2.1', title:'Combinado por escrito: escopo, prazo e preço', min:6,
      body:[
        `<div class="card analogy"><h3>📝 O cardápio do restaurante</h3><p>No restaurante, você sabe o que vem no prato e quanto custa antes de pedir. Sem cardápio, cada um imagina uma coisa, e a conta vira discussão. O combinado por escrito é o cardápio do seu serviço.</p></div>`,
        `<div class="term"><b>Escopo</b> = o que está incluído no serviço. <b>Prazo</b> = quando será entregue. <b>Revisão</b> = ajuste incluído no preço, com limite combinado.</div>`,
        `<div class="card"><h3>O combinado mínimo</h3><p>Escreva e peça um "ok" do cliente:</p>
          <ol class="golden"><li><span>O que será feito.</span></li><li><span>O que NÃO está incluído.</span></li><li><span>Prazo.</span></li><li><span>Preço e forma de pagamento.</span></li><li><span>Quantas revisões estão incluídas.</span></li><li><span>O que o cliente precisa enviar (textos, fotos, acessos).</span></li></ol>
          <p>Pode ser um documento simples ou uma mensagem organizada, e guarde as conversas. Para valores altos ou casos sensíveis, procure orientação profissional.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o cardápio mostra o preço antes de você pedir.</div>`
      ],
      ch:{ who:'Rafaela, 29 anos, freelancer', says:'Fechei por telefone: \'faço seus posts do mês\'. Agora a cliente quer 40 posts, vídeos e anúncios e diz que estava combinado.',
        q:'O que fazer?',
        opts:[
          {t:'Combinar por escrito, de agora em diante, a quantidade, o que não está incluído e as revisões, e tratar o que passou do combinado como serviço extra.', ok:true, why:'O combinado escrito evita novas confusões, e o extra vira um novo acordo, com novo preço.'},
          {t:'Fazer tudo de graça para não perder a cliente.', ok:false, why:'Fazer de graça cria o hábito de pedir mais e prejudica seu tempo e seu bolso.'},
          {t:'Cancelar tudo e bloquear a cliente.', ok:false, why:'Um acordo bem escrito resolve sem romper a relação.'}
        ]}},
    { id:'2.2', title:'Prometa só o que você controla', min:6,
      body:[
        `<div class="card analogy"><h3>🎯 O médico honesto</h3><p>O bom médico explica o tratamento e o que depende do paciente, mas não promete cura. Você também controla o seu trabalho, e não o resultado do cliente.</p></div>`,
        `<div class="term"><b>Promessa de resultado</b> = garantir algo que depende de muitos fatores, como vendas. <b>Prazo realista</b> = prazo que você consegue cumprir, com folga. <b>Propaganda enganosa</b> = anunciar algo que não é verdade ou que não se pode garantir.</div>`,
        `<div class="card"><h3>Você controla entregas, não resultados</h3><p>Você controla o que entrega, o prazo e a qualidade. Não controla vendas, seguidores nem faturamento do cliente. Prometa o que controla: "entrego 12 posts em 7 dias". Evite: "vou triplicar suas vendas" ou "garanto lucro de X". Dê prazo com folga. Se não souber fazer algo, aprenda antes ou diga que não faz. Anunciar ganhos garantidos pode configurar propaganda enganosa e destrói a confiança.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um médico honesto não promete que você vai ficar curado.</div>`
      ],
      ch:{ who:'Vinícius, 27 anos, quer vender serviços com IA', says:'Vou anunciar \'garanto 10 mil de lucro por mês com meu serviço de IA\', porque assim vendo mais.',
        q:'Qual é a melhor divulgação?',
        opts:[
          {t:'Anunciar a garantia, porque promessas grandes vendem.', ok:false, why:'Ele não controla o lucro do cliente. Promessa que não se cumpre gera reclamação e pode ser propaganda enganosa.'},
          {t:'Falar do que ele entrega ("12 posts por semana, prontos em 48 horas") e mostrar trabalhos reais, sem garantir lucro.', ok:true, why:'Promessas que dependem só dele são honestas e criam confiança.'},
          {t:'Prometer um lucro menor, para parecer mais realista.', ok:false, why:'O problema não é o tamanho do número, e sim garantir algo que não depende dele.'}
        ]}}
  ]},
  { id:3, icon:'🛡️', title:'Segurança e checagem', sub:'Golpes e checklist', lessons:[
    { id:'3.1', title:'Golpes e spam: como se proteger', min:7,
      body:[
        `<div class="card analogy"><h3>🚨 O porteiro desconfiado</h3><p>O bom porteiro confere quem está na porta antes de abrir, mesmo que a pessoa esteja com pressa ou diga que é conhecida. Com mensagens e pagamentos, vale a mesma desconfiança saudável.</p></div>`,
        `<div class="term"><b>Phishing</b> = mensagem falsa que tenta roubar senhas e dados. <b>Comprovante falso</b> = print de pagamento que não corresponde a dinheiro recebido. <b>Verificação em duas etapas</b> = segunda camada de segurança, como um código, além da senha.</div>`,
        `<div class="card"><h3>Sinais de alerta e hábitos de proteção</h3><p><b>Desconfie de:</b> pressa exagerada, pedido de código de verificação, link estranho, "cliente" que pede para você pagar uma taxa antes, comprovante enviado com pedido de troco ou devolução, proposta boa demais.</p>
          <p><b>Proteja-se:</b></p>
          <ol class="golden"><li><span>Confirme o pagamento no aplicativo do seu banco, e não pelo print.</span></li><li><span>Nunca compartilhe códigos.</span></li><li><span>Ative a verificação em duas etapas.</span></li><li><span>Não clique em links desconhecidos.</span></li><li><span>Nunca pague para "liberar" um trabalho.</span></li></ol>
          <p>E não vire spam: não envie mensagens em massa para quem não pediu.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o porteiro confere quem é antes de abrir a porta.</div>`
      ],
      ch:{ who:'Jéssica, 31 anos, vende serviços de design', says:'Um cliente mandou o comprovante do Pix, mas o dinheiro não apareceu na minha conta. Ele pediu para eu entregar o trabalho agora e disse que cai logo.',
        q:'Qual é a melhor atitude?',
        opts:[
          {t:'Entregar, porque o comprovante prova o pagamento.', ok:false, why:'Print de comprovante pode ser falso. O que vale é o dinheiro na sua conta.'},
          {t:'Entregar, porque o cliente parece educado e pediu com gentileza.', ok:false, why:'Educação não confirma pagamento. Golpistas costumam ser simpáticos.'},
          {t:'Conferir no aplicativo do banco e entregar só depois que o pagamento aparecer na conta.', ok:true, why:'Confirmar no banco protege você de comprovantes falsos.'}
        ]}},
    { id:'3.2', title:'Checklist: estou pronto para cobrar?', min:6,
      body:[
        `<div class="card analogy"><h3>✅ A lista de verificação do piloto</h3><p>Antes de decolar, o piloto confere cada item da lista, mesmo tendo milhares de horas de voo. A lista evita esquecimentos que custam caro.</p></div>`,
        `<div class="term"><b>Checklist</b> = lista de itens a conferir antes de uma ação importante. <b>Portfólio</b> = exemplos reais do que você já fez. <b>Revisão humana</b> = você conferindo tudo antes de entregar.</div>`,
        `<div class="card"><h3>Os 8 itens antes do primeiro cliente</h3><ol class="golden"><li><span>Sei fazer o serviço e já fiz um projeto de teste (portfólio).</span></li><li><span>Tenho uma oferta clara: escopo, prazo e preço.</span></li><li><span>Tenho o combinado por escrito.</span></li><li><span>Cuido dos dados: só o necessário e dados fictícios nos testes.</span></li><li><span>Uso conteúdo com licença.</span></li><li><span>Não prometo ganhos nem o que não controlo.</span></li><li><span>Reviso tudo antes de entregar: fatos, nomes e números.</span></li><li><span>Confirmo o pagamento no banco.</span></li></ol>
          <p><b>Projeto final de portfólio:</b> escreva o combinado de 1 página do serviço que pretende oferecer e peça à IA para revisar.</p>
          <p><b>Próximo passo:</b> escolha um curso de serviço da Trilha Renda com IA.</p>
          <p>⚠️ <b>Importante:</b> este curso não garante renda, ele ensina a trabalhar do jeito certo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, por que o piloto usa uma lista antes de decolar, e como isso se parece com o seu checklist.</div>`
      ],
      ch:{ who:'Otávio, 23 anos, quer começar a cobrar', says:'Já fiz 2 testes, mas não tenho nada por escrito nem sei exatamente o que vou entregar. Quero começar a cobrar amanhã.',
        q:'Qual é o melhor caminho?',
        opts:[
          {t:'Antes de cobrar, definir a oferta e o combinado por escrito, usar o checklist e revisar o que entrega, e então começar com segurança.', ok:true, why:'Com oferta clara e combinado escrito, ele começa sem riscos desnecessários e com mais confiança do cliente.'},
          {t:'Cobrar já e organizar tudo depois, quando surgir algum problema.', ok:false, why:'Organizar depois costuma sair caro: conflitos e retrabalho aparecem antes da organização.'},
          {t:'Nunca cobrar, porque nunca vai estar 100% pronto.', ok:false, why:'O checklist existe para saber quando se está pronto o bastante, sem esperar a perfeição.'}
        ]}}
  ]}
];

const MODDONE = {
  1: 'Você sabe cuidar de dados e de direitos de uso desde o primeiro projeto.',
  2: 'Você sabe combinar por escrito e prometer só o que controla.',
  3: 'Você sabe se proteger de golpes e usar o checklist antes de cobrar. Agora você tem a base profissional.'
};

const PROMPTS = {
  1: [
    { title:'Dados fictícios para teste', desc:'Para testar sem expor pessoas reais.',
      text:'Crie 10 registros fictícios de clientes (nome, telefone, cidade) para eu testar [TAREFA]. Use nomes e números inventados e deixe claro que são fictícios.' }
  ],
  2: [
    { title:'Combinado de uma página', desc:'Para registrar o acordo com o cliente.',
      text:'Monte um combinado de 1 página para o serviço [SERVIÇO] com: o que está incluído, o que NÃO está incluído, prazo, preço de [VALOR], forma de pagamento, [N] revisões e o que o cliente precisa me enviar. Use linguagem simples e deixe campos [ENTRE COLCHETES]. Não é um contrato jurídico.' }
  ],
  3: [
    { title:'Checklist antes de cobrar', desc:'Para conferir se você está pronto.',
      text:'Aqui está o que pretendo oferecer: [DESCRIÇÃO]. Verifique com este checklist: oferta clara, combinado por escrito, cuidado com dados, conteúdo com licença, nenhuma promessa de ganho, revisão antes de entregar e conferência do pagamento. Diga o que está faltando.' }
  ]
};

const THEME = { 1:['#3B82F6','#6366F1'], 2:['#6366F1','#3B82F6'], 3:['#3B82F6','#6366F1'] };
const LIC = { '1.1':'🔒','1.2':'©️','2.1':'📝','2.2':'🎯','3.1':'🚨','3.2':'✅' };

return {
  id: 'base-profissional',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  dicaPrompts: 'Troque o que está entre [COLCHETES] pelos dados do seu caso e cole em qualquer assistente de IA (ChatGPT, Gemini, Claude...).',
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
