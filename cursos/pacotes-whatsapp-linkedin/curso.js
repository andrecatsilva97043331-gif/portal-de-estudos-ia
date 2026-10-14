/* Curso: Pacotes de Mensagens para WhatsApp e LinkedIn (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'📦', title:'O pacote', sub:'O que entregar e como escrever', lessons:[
    { id:'1.1', title:'O que é um pacote de mensagens e o que entregar', min:10,
      body:[
        `<div class="card analogy"><h3>📦 A caixa de ferramentas organizada</h3><p>Ninguém entrega ao cliente um martelo solto: entrega a caixa organizada, com as ferramentas dos usos mais comuns, cada uma no lugar. Um pacote de mensagens é essa caixa para o dia a dia do atendimento. Quando a dona do salão recebe uma cliente nova no WhatsApp, ela não precisa pensar do zero no que escrever: abre a caixa, pega a mensagem certa, troca o nome e envia.</p></div>`,
        `<div class="term"><b>Pacote de mensagens</b> = conjunto organizado de modelos de mensagem para situações do negócio. <b>Modelo com campos</b> = mensagem com espaços para preencher, como [NOME] e [DATA]. <b>Situação</b> = o momento do atendimento, como boas-vindas, lembrete ou pós-venda.</div>`,
        `<div class="card"><h3>Cubra as situações que se repetem</h3><p>Um bom pacote inclui: boas-vindas, resposta a "quanto custa?", confirmação de agendamento, lembrete, pós-venda com pedido de avaliação, cobrança educada e retomada de contato. Entregue:</p>
          <ol class="golden"><li><span>Um documento organizado.</span></li><li><span>Para cada mensagem: nome, quando usar e campos a preencher.</span></li><li><span>Duas variações, para não parecer robótico.</span></li><li><span>Um guia de uso curto.</span></li></ol>
          <p>De 10 a 15 mensagens é um bom tamanho inicial. O seu serviço é criar os modelos, e quem envia aos contatos é o cliente.</p></div>`,
        `<div class="card"><h3>Por que o pequeno negócio paga por isso</h3><p>Quem tem uma padaria, um pet shop ou uma oficina responde as mesmas perguntas dezenas de vezes por semana, quase sempre com pressa e no meio de outra tarefa. O resultado são respostas secas, esquecidas ou com erros. O pacote resolve três dores: <b>tempo</b> (a resposta já está pronta), <b>padrão</b> (todo mundo da equipe fala do mesmo jeito) e <b>venda perdida</b> (o lembrete e a retomada trazem de volta quem sumiu). Você não vende "textos": vende atendimento mais rápido e mais simpático.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Situação</th><th>Exemplo de uso</th><th>Campos comuns</th></tr><tr><td>Boas-vindas</td><td>Primeira mensagem de um contato novo</td><td>[NOME], [HORÁRIO DE ATENDIMENTO]</td></tr><tr><td>Preço</td><td>Pergunta "quanto custa?"</td><td>[SERVIÇO], [VALOR], [LINK DO CATÁLOGO]</td></tr><tr><td>Confirmação</td><td>Agendamento marcado</td><td>[DATA], [HORA], [ENDEREÇO]</td></tr><tr><td>Pós-venda</td><td>Dois dias após o serviço</td><td>[NOME], [LINK DE AVALIAÇÃO]</td></tr></table></div>`,
        `<div class="code">Confirmação (variação 1):
Oi, [NOME]! Seu horário de [SERVIÇO] está confirmado para [DATA], às [HORA]. Qualquer imprevisto, é só avisar por aqui. Até lá!</div>`,
        `<div class="card"><h3>Erros comuns de quem está começando</h3><p>Entregar textos sem dizer quando usar cada um; esquecer os campos e deixar nomes de outro cliente no meio do texto; escrever tudo no mesmo tom, como se uma clínica e uma barbearia falassem igual; e prometer que o pacote "vai dobrar as vendas". Nada disso é necessário: um pacote honesto e bem organizado já tem valor de sobra.</p></div>`,
        `<div class="card"><h3>Antes de escrever: o levantamento</h3><p>Reserve uma conversa curta com o dono do negócio e pergunte: quais perguntas você mais responde? Em que momento os clientes somem? Como você costuma tratar as pessoas, por "você" ou por "senhor"? Que informações mudam com frequência, como preços e horários? Peça dois ou três prints de conversas reais, sempre sem nomes e telefones dos clientes finais. Com essas respostas, o pacote nasce com a cara do negócio.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma caixa de ferramentas organizada é melhor que ferramentas soltas.</div>`
      ],
      ch:[
        { who:'Patrícia, 32 anos, quer oferecer pacotes de mensagens para salões', says:'Vou entregar 100 mensagens num arquivo gigante, sem organização. Quanto mais, melhor.',
          q:'Qual é a melhor entrega?',
          opts:[
            {t:'Entregar o arquivo gigante, porque a quantidade impressiona o cliente.', ok:false, why:'Sem organização, o cliente não acha a mensagem certa na hora e não usa o material.'},
            {t:'Entregar de 10 a 15 mensagens organizadas por situação, com quando usar, campos e variações.', ok:true, why:'Um pacote enxuto e bem organizado é usado de verdade, e o cliente percebe valor.'},
            {t:'Entregar uma só mensagem genérica para qualquer situação.', ok:false, why:'Cada situação pede um tom e um conteúdo. Uma só mensagem não resolve o dia a dia.'}
          ]},
        { who:'Seu Joaquim, 58 anos, dono de uma padaria de bairro', says:'Recebo encomenda de bolo pelo WhatsApp o dia todo e sempre esqueço de confirmar data e sabor. O que esse pacote teria pra mim?',
          q:'Qual proposta atende melhor a dor dele?',
          opts:[
            {t:'Um texto bonito sobre a história da padaria para mandar a todos os contatos.', ok:false, why:'Pode ser simpático, mas não resolve a dor real: confirmar encomendas sem esquecer detalhes.'},
            {t:'Modelos de confirmação de encomenda com campos [SABOR], [DATA] e [HORÁRIO DE RETIRADA], mais um lembrete na véspera.', ok:true, why:'O pacote começa pela situação que se repete e causa problema. Campos obrigam a conferir os detalhes.'},
            {t:'Um robô que responde sozinho todas as conversas, sem ele precisar olhar.', ok:false, why:'Não é o serviço que você entrega, e encomenda de bolo exige atenção humana para detalhes e mudanças.'}
          ]},
        { who:'Juliana, 41 anos, nutricionista', says:'Gostei da ideia, mas tenho medo de as mensagens ficarem com cara de outro consultório. Como saber se é meu?',
          q:'O que você deve fazer antes de escrever o pacote dela?',
          opts:[
            {t:'Copiar um pacote pronto da internet e trocar só o nome do consultório.', ok:false, why:'Fica genérico, pode ter tom errado e nem cobre as situações dela. Ela perceberia.'},
            {t:'Escrever rápido e deixar que ela mesma ajuste tudo depois.', ok:false, why:'Transfere o trabalho para a cliente, que contratou justamente para não ter esse trabalho.'},
            {t:'Fazer perguntas sobre o atendimento dela (situações frequentes, jeito de falar, regras) e pedir exemplos de conversas reais, sem dados de pacientes.', ok:true, why:'Um breve levantamento garante que o pacote tenha a voz e as situações dela, sem expor dados sensíveis.'}
          ]}
      ]},
    { id:'1.2', title:'Mensagens que soam humanas', min:10,
      body:[
        `<div class="card analogy"><h3>💬 A conversa no balcão</h3><p>No balcão, o atendente chama pelo nome, fala claro e vai direto ao ponto. Ele não lê um panfleto em voz alta. As mensagens precisam soar como essa conversa: curtas, gentis e com um próximo passo claro.</p></div>`,
        `<div class="term"><b>Personalização</b> = adaptar a mensagem ao contato, como usar o nome. <b>Tom</b> = o jeito de falar da mensagem. <b>Mensagem robótica</b> = texto longo, genérico e sem jeito de conversa.</div>`,
        `<div class="card"><h3>Oito dicas para soar humano</h3><ol class="golden"><li><span>Seja curto: no WhatsApp, poucas linhas.</span></li><li><span>Use o nome com um campo [NOME].</span></li><li><span>Uma ideia por mensagem.</span></li><li><span>Termine com uma pergunta ou um próximo passo claro.</span></li><li><span>Evite exageros, letras maiúsculas e emojis demais.</span></li><li><span>Ofereça variações.</span></li><li><span>Leia em voz alta: se soar estranho, reescreva.</span></li><li><span>Adapte ao tom do negócio, mais formal numa clínica e mais leve numa barbearia.</span></li></ol>
          <p>Nunca invente promoções ou prazos.</p></div>`,
        `<div class="flows"><div class="flow old"><h4>Robótica</h4><div class="node">PREZADO CLIENTE!!! Temos a SATISFAÇÃO de informar que nossos serviços de excelência estão disponíveis com condições IMPERDÍVEIS 🔥🔥🔥 Entre em contato!!!</div></div><div class="flow new"><h4>Humana</h4><div class="node">Oi, [NOME]! Aqui é a Carla, do Pet Feliz. O banho do [NOME DO PET] ficou para sexta, às 10h. Esse horário funciona pra você?</div></div></div>`,
        `<div class="card"><h3>Como usar a IA sem perder o tom humano</h3><p>A IA ajuda a gerar rascunhos rápidos, mas tende a escrever textos longos, formais e cheios de adjetivos. Seu trabalho é dar contexto e depois editar. No seu pedido, explique o tipo de negócio, quem é o cliente final, a situação da mensagem, o tamanho máximo e o tom desejado. Depois, revise cada texto com três perguntas: <b>eu falaria isso pessoalmente?</b>, <b>dá para cortar uma frase?</b> e <b>a pessoa sabe o que fazer depois de ler?</b> Se alguma resposta for "não", reescreva.</p></div>`,
        `<div class="why-chain"><p><b>Por que mensagens curtas funcionam?</b> Porque são lidas no celular, entre outras tarefas. <b>Por que isso importa?</b> Porque quem lê rápido responde rápido. <b>E por que terminar com pergunta?</b> Porque a pergunta convida a uma resposta e mantém a conversa viva.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Abrir com "Prezado(a) cliente" numa loja de roupas jovem; mandar três parágrafos quando bastava uma linha; usar gírias que o dono do negócio não usaria; e repetir sempre o mesmo texto, que o cliente final passa a reconhecer como automático. As variações existem justamente para isso: duas ou três formas de dizer a mesma coisa.</p></div>`,
        `<div class="card"><h3>Exercício rápido de reescrita</h3><p>Pegue uma mensagem real que algum negócio já mandou para você, como uma promoção ou um lembrete. Conte as linhas, os emojis e as palavras em maiúsculas. Depois reescreva com no máximo três linhas, usando o seu nome no início e uma pergunta no fim. Compare as duas versões em voz alta. Esse treino, repetido algumas vezes, desenvolve o "ouvido" para o tom humano, que é a habilidade mais valiosa deste serviço.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma conversa de balcão é melhor do que alguém lendo um panfleto.</div>`
      ],
      ch:[
        { who:'Rodrigo, 29 anos, cria mensagens para lojas', says:'A IA escreveu mensagens longas, cheias de emojis e promessas. Os clientes acharam parecer spam.',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Colocar ainda mais emojis e promessas, para chamar atenção.', ok:false, why:'Exageros reforçam a impressão de spam e afastam as pessoas.'},
            {t:'Enviar uma mensagem única e longa, para explicar tudo de uma vez.', ok:false, why:'Textos longos cansam, e muita gente nem lê até o fim.'},
            {t:'Encurtar, usar o nome, uma ideia por mensagem e uma pergunta final, no tom do negócio, sem exageros nem promessas.', ok:true, why:'Mensagens curtas, pessoais e honestas soam como conversa e são mais respondidas.'}
          ]},
        { who:'Diego, 33 anos, dono de uma barbearia', says:'Minha clientela é jovem, a gente se trata por "mano". Mas as mensagens que recebi parecem de banco: "Prezado senhor, informamos...".',
          q:'Como ajustar o pacote dele?',
          opts:[
            {t:'Reescrever num tom leve e próximo, como ele fala no balcão, sem exagerar nas gírias e mantendo clareza de data, hora e preço.', ok:true, why:'O tom deve ser o do negócio. Leve não significa confuso: as informações continuam claras.'},
            {t:'Manter o tom formal, porque mensagem profissional precisa ser formal.', ok:false, why:'Profissional é ser claro e respeitoso. Formalidade excessiva destoa de uma barbearia jovem.'},
            {t:'Encher de gírias e palavrões para parecer descontraído.', ok:false, why:'Exagero soa forçado e pode ofender parte dos clientes. Leve é diferente de caricato.'}
          ]},
        { who:'Fernanda, 27 anos, dona de uma loja de roupas online', says:'Mando sempre o mesmo texto de pós-venda. Uma cliente respondeu: "isso é robô, né?".',
          q:'Qual é a melhor solução?',
          opts:[
            {t:'Parar de mandar pós-venda, porque as clientes não gostam.', ok:false, why:'O problema não é o pós-venda, é a repetição. Abandonar perde avaliações e recompras.'},
            {t:'Criar duas ou três variações, citar a peça comprada com um campo [PRODUTO] e terminar com uma pergunta simples.', ok:true, why:'Variações e um detalhe pessoal tornam a mensagem reconhecível como conversa, não como disparo.'},
            {t:'Deixar a mensagem mais longa, explicando que não é robô.', ok:false, why:'Explicar que não é robô soa ainda mais artificial. Personalização mostra isso melhor.'}
          ]}
      ]},
    { id:'1.3', title:'A jornada do cliente: do primeiro contato à reativação', min:10,
      body:[
        `<div class="card analogy"><h3>🗺️ O mapa da viagem</h3><p>Antes de uma viagem, você olha o mapa: saída, paradas, chegada e volta. Sem mapa, esquece uma parada importante. A jornada do cliente é o mapa do atendimento: mostra todos os momentos em que o negócio conversa com alguém, para que o pacote não deixe nenhum buraco.</p></div>`,
        `<div class="term"><b>Jornada do cliente</b> = sequência de momentos desde o primeiro contato até a volta do cliente. <b>Ponto de contato</b> = cada momento em que o negócio manda ou responde uma mensagem. <b>Reativação</b> = retomar contato com quem não compra há algum tempo, com respeito.</div>`,
        `<div class="card"><h3>As cinco etapas que quase todo negócio tem</h3><ol class="golden"><li><span><b>Primeiro contato:</b> boas-vindas, horário de atendimento e como pedir. É a primeira impressão.</span></li><li><span><b>Orçamento:</b> resposta a "quanto custa?", com valor ou faixa, o que está incluso e um próximo passo.</span></li><li><span><b>Fechamento e confirmação:</b> data, hora, endereço, forma de pagamento.</span></li><li><span><b>Pós-venda:</b> agradecimento, cuidado com o produto ou serviço e pedido de avaliação.</span></li><li><span><b>Cobrança gentil e reativação:</b> lembrete de pagamento sem constrangimento e convite para voltar depois de um tempo.</span></li></ol></div>`,
        `<div class="card"><h3>Como mapear com o cliente, passo a passo</h3><p>Faça uma conversa de 20 minutos com o dono do negócio. Peça que ele conte como foi o atendimento de um cliente típico, do primeiro "oi" até a última mensagem. Anote cada momento. Depois pergunte: <b>onde você perde clientes?</b> (muita gente pede preço e some), <b>o que você mais repete?</b> e <b>o que você tem vergonha de mandar?</b> (cobrança costuma aparecer aqui). Essas respostas mostram onde o pacote vale mais.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Etapa</th><th>Oficina mecânica</th><th>Pet shop</th></tr><tr><td>Primeiro contato</td><td>Pedido de orçamento de revisão</td><td>Pergunta sobre banho e tosa</td></tr><tr><td>Orçamento</td><td>Valor das peças e mão de obra</td><td>Preço por porte do animal</td></tr><tr><td>Confirmação</td><td>Data de entrega do carro</td><td>Horário de busca do pet</td></tr><tr><td>Pós-venda</td><td>Como está o carro após a revisão</td><td>Foto do pet e pedido de avaliação</td></tr><tr><td>Reativação</td><td>Lembrete da próxima troca de óleo</td><td>Lembrete do próximo banho</td></tr></table></div>`,
        `<div class="code">Cobrança gentil:
Oi, [NOME], tudo bem? Passando para lembrar do pagamento de [SERVIÇO], no valor de [VALOR], com vencimento em [DATA]. Se já pagou, desconsidere e obrigado! Qualquer dúvida, estou por aqui.</div>`,
        `<div class="card"><h3>Cuidados</h3><p>Cobrança nunca deve ameaçar, expor ou constranger: o Código de Defesa do Consumidor proíbe cobrança vexatória, e em dúvida o cliente deve consultar um advogado. Reativação só para quem já é cliente e não pediu para sair, com intervalo razoável (não toda semana). Vale combinar com o dono do negócio a frequência de cada mensagem e anotar isso no guia de uso.</p></div>`,
        `<div class="card"><h3>Do mapa para o pacote</h3><p>Com a jornada desenhada, escolha uma ou duas mensagens por etapa e comece pelas etapas onde o negócio mais perde clientes. Assim, um pacote de 10 mensagens já cobre o caminho inteiro, e você sabe explicar ao cliente por que cada mensagem existe.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> desenhe para uma criança de 10 anos o caminho de um cliente, do primeiro "oi" até voltar à loja, como se fosse um mapa de tesouro.</div>`
      ],
      ch:[
        { who:'Marcos, 45 anos, dono de uma oficina mecânica', says:'Muita gente pede orçamento, eu mando o valor e a pessoa some. Não sei o que fazer.',
          q:'Qual parte da jornada o pacote deve reforçar?',
          opts:[
            {t:'Só as boas-vindas, para causar boa impressão.', ok:false, why:'A pessoa já chegou. O problema está depois do orçamento, quando ela some.'},
            {t:'Uma resposta de orçamento com o que está incluso e um próximo passo, mais um acompanhamento gentil alguns dias depois.', ok:true, why:'O ponto de perda é o orçamento. Explicar o valor e retomar com educação recupera parte desses contatos.'},
            {t:'Mandar o orçamento todo dia até a pessoa responder.', ok:false, why:'Insistência diária incomoda, gera bloqueio e denúncias. Um acompanhamento basta.'}
          ]},
        { who:'Cristina, 50 anos, dona de um salão de beleza', says:'Tenho clientes que devem há um mês e fico sem graça de cobrar. Quero uma mensagem bem dura para resolver.',
          q:'Como deve ser a mensagem de cobrança?',
          opts:[
            {t:'Dura, citando que vai expor o nome da cliente no grupo do bairro se não pagar.', ok:false, why:'Expor ou ameaçar é cobrança vexatória, proibida pelo Código de Defesa do Consumidor, e destrói a relação.'},
            {t:'Não mandar nada e esperar a cliente lembrar sozinha.', ok:false, why:'Evitar a conversa só aumenta o prejuízo. Uma cobrança gentil resolve a maioria dos casos.'},
            {t:'Gentil e clara: valor, serviço, data, forma de pagamento e um "se já pagou, desconsidere", sem ameaças.', ok:true, why:'Cobrança respeitosa preserva a cliente, funciona na maioria das vezes e evita problemas legais.'}
          ]},
        { who:'Lucas, 30 anos, dono de um pet shop', says:'Tenho uma lista de clientes que não aparecem há meses. Posso mandar uma mensagem para todo mundo?',
          q:'Qual orientação de reativação é mais adequada?',
          opts:[
            {t:'Enviar uma mensagem simpática só para quem já é cliente e não pediu para sair, com um lembrete útil e a opção de não receber mais.', ok:true, why:'Reativação respeitosa usa a relação que já existe, oferece algo útil e dá saída fácil.'},
            {t:'Comprar mais números de pet shops concorrentes e mandar para todos.', ok:false, why:'Lista comprada é contato sem consentimento: gera denúncia, bloqueio e risco com a LGPD.'},
            {t:'Mandar a mesma mensagem toda semana até eles voltarem.', ok:false, why:'Frequência alta vira incômodo e leva a bloqueios. Reativação pede intervalo razoável.'}
          ]}
      ]},
    { id:'1.4', title:'Respostas rápidas e roteiros no WhatsApp Business', min:10,
      body:[
        `<div class="card analogy"><h3>🎬 O roteiro do teatro</h3><p>O ator não improvisa a peça inteira: ele tem um roteiro, mas coloca emoção e se adapta à plateia. Um roteiro de atendimento funciona igual: dá a sequência e as falas principais, e a pessoa que atende ajusta à conversa real.</p></div>`,
        `<div class="term"><b>WhatsApp Business</b> = versão do aplicativo para empresas, com recursos como perfil comercial, catálogo e respostas rápidas. <b>Resposta rápida</b> = mensagem salva que se chama com um atalho (por exemplo, digitando "/preco"). <b>Mensagem de ausência</b> = resposta automática fora do horário. <b>Etiqueta</b> = marcação colorida para organizar conversas.</div>`,
        `<div class="card"><h3>O que você pode entregar dentro do aplicativo</h3><p>Os recursos mudam com o tempo, então confira no aplicativo e na central de ajuda oficial o que está disponível hoje. Em geral, o pacote pode incluir:</p><ol class="golden"><li><span><b>Mensagem de saudação</b> para quem chama pela primeira vez.</span></li><li><span><b>Mensagem de ausência</b> com o horário de atendimento e quando a pessoa terá resposta.</span></li><li><span><b>Respostas rápidas</b> com atalhos curtos e fáceis de lembrar, como /preco, /endereco, /confirma.</span></li><li><span><b>Sugestão de etiquetas</b>, como "novo contato", "orçamento enviado", "pago", "pós-venda".</span></li></ol></div>`,
        `<div class="card"><h3>Roteiro: a sequência que guia a conversa</h3><p>Um roteiro é uma ordem de respostas para uma situação inteira. Exemplo para agendamento numa clínica de estética: 1) saudação e pergunta sobre o procedimento; 2) explicação curta e valor ou faixa; 3) oferta de dois horários; 4) confirmação com data, hora e endereço; 5) lembrete na véspera. Cada passo é uma resposta rápida, e o roteiro mostra a ordem e o que fazer se a pessoa fugir do caminho (por exemplo, pedir desconto).</p></div>`,
        `<div class="code">/ausencia
Oi! Obrigada por chamar a Doce Encanto. Nosso atendimento é de terça a sábado, das 8h às 18h. Assim que abrirmos, respondemos sua mensagem. 🍰

/endereco
Estamos na [RUA], [NÚMERO], [BAIRRO]. Aqui o mapa: [LINK]</div>`,
        `<div class="card"><h3>Quando passar para uma pessoa</h3><p>Todo roteiro precisa de uma saída: reclamação, pedido fora do padrão, cliente irritado, assunto de saúde ou dinheiro. Nesses casos, a resposta rápida não deve encerrar a conversa, e sim dizer "vou verificar com cuidado e te respondo até [HORÁRIO]". Coloque essa regra no guia de uso. Respostas automáticas demais, sem humano por trás, irritam e fazem perder clientes.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Atalhos difíceis de lembrar (/msg07); mensagem de ausência prometendo resposta "imediata"; respostas rápidas com preços que mudam e ninguém atualiza; e etiquetas demais, que ninguém usa. Menos é mais: oito a doze respostas rápidas bem pensadas costumam cobrir a rotina de um pequeno negócio. Se for configurar no celular do cliente, peça autorização e não guarde senhas nem conversas.</p></div>`,
        `<div class="card"><h3>Teste antes de entregar</h3><p>Peça a alguém que mande mensagens como se fosse um cliente e use as respostas rápidas na ordem do roteiro. Repare onde a conversa trava ou fica estranha e ajuste o texto ou o atalho.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o ator tem roteiro, mas ainda assim precisa prestar atenção na plateia.</div>`
      ],
      ch:[
        { who:'Sônia, 52 anos, dona de uma doceria', says:'Recebo mensagens às 23h e as pessoas ficam bravas porque só respondo no outro dia.',
          q:'Qual recurso resolve melhor esse problema?',
          opts:[
            {t:'Responder todas as mensagens de madrugada para não perder ninguém.', ok:false, why:'Não é sustentável e não resolve a expectativa. O problema é informação, não esforço.'},
            {t:'Uma mensagem de ausência clara, com horário de atendimento e quando a pessoa terá resposta.', ok:true, why:'Avisar o horário alinha a expectativa e mostra cuidado, mesmo com a loja fechada.'},
            {t:'Uma mensagem de ausência dizendo "resposta imediata garantida".', ok:false, why:'Prometer o que não vai cumprir aumenta a frustração. A mensagem precisa ser verdadeira.'}
          ]},
        { who:'Tatiane, 38 anos, dona de uma clínica de estética', says:'Fiz respostas rápidas com atalhos /m1, /m2, /m3... e minha recepcionista nunca lembra qual é qual.',
          q:'Como melhorar?',
          opts:[
            {t:'Criar mais atalhos numerados, para cobrir mais situações.', ok:false, why:'Mais números aumentam a confusão. O problema é que os atalhos não dizem nada.'},
            {t:'Imprimir a lista e colar no balcão, mantendo os atalhos numerados.', ok:false, why:'Ajuda pouco e ainda obriga a consultar uma lista. Melhor que o atalho já diga o conteúdo.'},
            {t:'Usar atalhos com o nome da situação, como /preco, /confirma e /endereco, e listar no guia de uso.', ok:true, why:'Atalhos que descrevem o conteúdo são lembrados sem esforço e evitam erros no atendimento.'}
          ]},
        { who:'Paulo, 47 anos, dono de uma loja de materiais de construção', says:'Quero que as respostas rápidas resolvam tudo, até reclamação de entrega atrasada.',
          q:'Qual orientação você daria?',
          opts:[
            {t:'Para reclamações, usar uma resposta que acolhe e diz quando a pessoa terá retorno, e passar o caso para alguém resolver de fato.', ok:true, why:'Reclamação pede atenção humana. A resposta rápida só acolhe e organiza o próximo passo.'},
            {t:'Criar uma resposta padrão dizendo que a culpa é da transportadora e encerrar.', ok:false, why:'Empurrar a culpa e encerrar irrita o cliente e não resolve o atraso.'},
            {t:'Ignorar reclamações, porque resposta rápida é só para vendas.', ok:false, why:'Ignorar reclamação piora a situação e gera avaliações negativas.'}
          ]}
      ]},
    { id:'1.5', title:'Briefing do pacote: perguntas ao dono, tom e políticas', min:10,
      body:[
        `<div class="card analogy"><h3>📝 A ficha do alfaiate</h3><p>Antes de cortar o tecido, o alfaiate tira as medidas e anota tudo numa ficha: ombro, manga, cintura, se o cliente prefere a roupa mais justa ou mais folgada. Sem a ficha, o terno sai bonito, mas não serve. O briefing é a ficha de medidas do pacote de mensagens: com ele, as mensagens já nascem do tamanho do negócio.</p></div>`,
        `<div class="term"><b>Briefing</b> = conjunto de informações que o dono do negócio passa antes de você começar a escrever. <b>Tom de voz</b> = o jeito de falar da marca, como mais formal ou mais descontraído. <b>Políticas</b> = as regras do negócio que aparecem nas mensagens, como troca, entrega, pagamento e cancelamento.</div>`,
        `<div class="card"><h3>O roteiro do briefing, passo a passo</h3><ol class="golden"><li><span><b>O negócio:</b> o que vende, para quem, em que bairro ou cidade atende e qual o horário de funcionamento.</span></li><li><span><b>As situações:</b> quais perguntas chegam todo dia, em que momento os clientes somem e que mensagem o dono tem vergonha ou preguiça de mandar.</span></li><li><span><b>O tom:</b> trata por "você" ou "senhor"? Usa emoji? Três palavras que descrevem o jeito do negócio e três coisas que ele nunca diria.</span></li><li><span><b>As políticas:</b> prazo e taxa de entrega, formas de pagamento, regra de troca, cancelamento e atraso.</span></li><li><span><b>Os limites:</b> o que a mensagem nunca pode prometer e quando a conversa deve passar para o dono.</span></li></ol></div>`,
        `<div class="card"><h3>Por que as políticas entram nas mensagens</h3><p>Boa parte das brigas de atendimento nasce de regra que ninguém explicou. A cliente da loja de roupas acha que pode trocar em 30 dias, mas a loja aceita só em 7. O cliente da marmitaria pensa que a entrega é grátis em qualquer bairro. Quando a política aparece de forma clara e gentil na mensagem certa, o conflito nem começa. Mas atenção: você não inventa política. Se o dono não sabe responder, anote como pendência e peça que ele decida antes da entrega. Para dúvidas sobre direitos do consumidor, como prazo de arrependimento em compras online, oriente o dono a consultar o Código de Defesa do Consumidor ou um advogado.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Política</th><th>Pergunta ao dono</th><th>Onde aparece</th></tr><tr><td>Entrega</td><td>Quais bairros, qual taxa, qual prazo?</td><td>Orçamento e confirmação</td></tr><tr><td>Pagamento</td><td>Pix, cartão, sinal antecipado?</td><td>Fechamento e cobrança</td></tr><tr><td>Troca</td><td>Em quantos dias, com quais condições?</td><td>Pós-venda</td></tr><tr><td>Cancelamento</td><td>Até quando pode desmarcar sem custo?</td><td>Confirmação e lembrete</td></tr></table></div>`,
        `<div class="code">Confirmação com política (marmitaria):
Oi, [NOME]! Seu pedido de [QUANTIDADE] marmitas está confirmado para [DATA]. A entrega no [BAIRRO] custa [TAXA] e chega entre [HORÁRIO]. Pagamento por Pix ou na entrega. Precisa mudar algo? É só avisar até [PRAZO DE ALTERAÇÃO].</div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Fazer o briefing de cabeça e esquecer metade; aceitar respostas vagas como "a entrega é rápida" sem pedir o prazo real; copiar a política de troca de outra loja; e pedir prints de conversas com nome e telefone dos clientes finais. Peça prints sempre sem dados pessoais e guarde o briefing por escrito, com data. Ele também protege você: se o dono mudar uma regra depois, fica claro o que foi combinado.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o alfaiate mede o cliente antes de cortar o tecido.</div>`
      ],
      ch:[
        { who:'Leandro, 31 anos, começando a fazer pacotes', says:'O dono da marmitaria disse que "a entrega é rapidinha". Vou escrever nas mensagens "entrega em 20 minutos" para soar profissional.',
          q:'Qual é a atitude correta?',
          opts:[
            {t:'Escrever "20 minutos", porque um número passa mais confiança.', ok:false, why:'É uma política inventada. Se a entrega atrasar, o cliente cobra uma promessa que o dono nunca fez.'},
            {t:'Deixar a entrega fora das mensagens, para não se comprometer.', ok:false, why:'Omitir gera exatamente a dúvida que o pacote deveria evitar. A informação precisa estar lá, mas correta.'},
            {t:'Perguntar ao dono o prazo real por bairro e usar um campo como [HORÁRIO] até ele confirmar.', ok:true, why:'Política vem do dono, não de você. O campo marca a pendência e evita prometer o que não se cumpre.'}
          ]},
        { who:'Simone, 48 anos, dona de uma loja de roupas', says:'Toda semana uma cliente briga porque quer trocar depois de 20 dias, e minha regra é 7 dias.',
          q:'Como o pacote pode ajudar?',
          opts:[
            {t:'Incluir a regra de troca, com prazo e condições, de forma gentil na mensagem de pós-venda e na confirmação da compra.', ok:true, why:'A política dita antes evita o conflito depois. Gentileza mantém o clima bom mesmo com a regra clara.'},
            {t:'Criar uma resposta dura para quando a cliente reclamar, citando que a culpa é dela.', ok:false, why:'Culpar a cliente piora a relação. O problema é que a regra não foi comunicada antes.'},
            {t:'Não falar de troca nas mensagens, para a cliente não ter a ideia de trocar.', ok:false, why:'Esconder a regra só adia a briga. Informação clara reduz reclamações.'}
          ]},
        { who:'Otávio, 26 anos, fez o briefing de uma barbearia', says:'Pedi prints de conversas reais ao dono e ele mandou com os nomes e telefones dos clientes. Posso usar assim?',
          q:'O que ele deve fazer?',
          opts:[
            {t:'Usar os prints como estão, porque o dono autorizou.', ok:false, why:'O dono não pode autorizar em nome dos clientes finais. Dados pessoais não precisam circular para você escrever.'},
            {t:'Pedir que o dono reenvie os prints sem nomes e telefones, apagar os originais e anotar no briefing só o que importa.', ok:true, why:'Você precisa do jeito de falar, não dos dados. Guardar só o necessário respeita a LGPD.'},
            {t:'Recusar o trabalho, porque briefing com prints é proibido.', ok:false, why:'Prints sem dados pessoais são úteis e permitidos. Basta tirar as informações que identificam as pessoas.'}
          ]}
      ]},
    { id:'1.7', title:'Perfil comercial do WhatsApp Business: a vitrine antes da conversa', min:12,
      body:[
        `<div class="card analogy"><h3>🏪 A fachada da loja</h3><p>Antes de entrar numa loja de bairro, você olha a fachada: o nome, o que vende, o horário na porta. Se a placa está apagada e a vitrine vazia, você segue andando. No WhatsApp, o perfil comercial é essa fachada. O cliente olha antes de mandar o primeiro "oi", e um perfil bem feito já responde metade das perguntas.</p></div>`,
        `<div class="term"><b>Perfil comercial</b> = nome, foto, descrição, horário, endereço e links do negócio no WhatsApp Business. <b>Catálogo</b> = vitrine de produtos ou serviços com foto, nome, preço e descrição. <b>Direito de imagem</b> = a pessoa ou o autor de uma foto decide se ela pode ser usada.</div>`,
        `<div class="card"><h3>Exemplo resolvido: a esmalteria Studio Bela</h3><p>A dona pediu ajuda porque recebia sempre as mesmas perguntas: "onde fica?", "abre sábado?", "quanto custa?".</p></div>`,
        `<div class="flows"><div class="flow old"><h4>Antes</h4><div class="node">Foto: logo pixelado com a marca d'água de um aplicativo grátis</div><div class="node">Descrição: "O MELHOR salão da cidade!!! Venha conferir 💅💅💅"</div><div class="node">Horário: em branco</div><div class="node">Catálogo: fotos de unhas baixadas da internet</div></div><div class="flow new"><h4>Depois</h4><div class="node">Foto: logo limpo ou a fachada real</div><div class="node">Descrição: "Manicure e pedicure no Jardim América. Atendimento com hora marcada, de terça a sábado. Agende por aqui."</div><div class="node">Horário: preenchido e igual à mensagem de ausência</div><div class="node">Catálogo: fotos do próprio trabalho, com "a partir de [VALOR]"</div></div></div>`,
        `<div class="card"><h3>O que mudou e por quê</h3><ol class="golden"><li><span>A descrição diz o que faz, onde e como pedir. O superlativo saiu, porque não prova nada.</span></li><li><span>O horário preenchido evita a cobrança de resposta às 23h.</span></li><li><span>As fotos são da própria esmalteria. As que mostram clientes só entraram com autorização por escrito.</span></li><li><span>A marca d'água saiu do logo: ela passa a impressão de trabalho improvisado.</span></li></ol></div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><p><b>Foto da internet:</b> imagem do Google, do Pinterest ou do concorrente tem dono. Use fotos próprias ou de bancos com licença de uso, e leia a licença. <b>Foto de cliente:</b> mesmo que seja só a mão, peça autorização e guarde a resposta. <b>Marca d'água:</b> muitos editores gratuitos colocam a própria marca na imagem. Escolha uma ferramenta que não faça isso ou use a foto simples, bem iluminada. Nunca remova a marca d'água de um banco de imagens: isso viola a licença. <b>Dados demais:</b> quem atende em casa pode mostrar só o bairro e passar o endereço completo depois do agendamento. <b>Preço velho:</b> catálogo desatualizado gera briga. Coloque no guia de uso quem revisa e quando.</p></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (WhatsApp Business)</h3><ol class="golden"><li><span>Num número de teste ou no seu, escreva uma descrição de até 3 linhas para um negócio fictício: o que faz, para quem, onde e como pedir.</span></li><li><span>Preencha o horário e confira se ele bate com a sua mensagem de ausência.</span></li><li><span>Cadastre 2 itens no catálogo com fotos tiradas por você.</span></li><li><span>Abra o perfil por outro celular: em 5 segundos dá para entender o negócio? Ajuste o que travou.</span></li></ol><p>🔒 Para mexer no perfil de um cliente, peça autorização, não abra as conversas dele e não use fotos de pessoas sem permissão.</p></div>`
      ],
      ch:[
        { who:'Daniela, 34 anos, faz bolos sob encomenda em casa', says:'Quero montar o catálogo do WhatsApp com aquelas fotos lindas de bolo que eu acho na internet. As minhas ficam feias.',
          q:'Qual é a melhor orientação?',
          opts:[
            {t:'Usar as fotos da internet, porque todo mundo faz isso e ninguém vai reclamar.', ok:false, why:'As fotos têm dono, e o cliente vai esperar um bolo que ela não fez. É risco legal e de confiança.'},
            {t:'Fotografar os próprios bolos com luz natural e fundo simples, e usar banco de imagens só com licença, sem fingir que é trabalho dela.', ok:true, why:'Foto própria mostra o que o cliente vai receber de verdade. Banco com licença serve para ilustrar, não para enganar.'},
            {t:'Usar as fotos da internet, mas apagar a marca d’água delas.', ok:false, why:'Remover a marca d’água viola a licença e piora o problema: além de usar sem permissão, esconde a origem.'}
          ]},
        { who:'Seu Edson, 61 anos, dono de uma chaveiro', says:'Meu perfil diz só "Chaveiro do Edson". O povo liga perguntando se faço chave de carro e se abro domingo.',
          q:'O que deve entrar primeiro no perfil dele?',
          opts:[
            {t:'Uma descrição curta com os serviços principais, o bairro e o horário, incluindo se atende domingo.', ok:true, why:'O perfil responde às perguntas que se repetem antes mesmo da conversa começar.'},
            {t:'Uma frase de efeito, como "O chaveiro número 1 do Brasil".', ok:false, why:'Superlativo não informa nada e não responde às dúvidas que fazem o cliente ligar.'},
            {t:'O CPF e o endereço residencial dele, para passar confiança.', ok:false, why:'Dado pessoal não traz confiança ao cliente e expõe o dono sem necessidade.'}
          ]}
      ]},
    { id:'1.8', title:'Teste e revisão final: do rascunho ao pacote pronto', min:12,
      body:[
        `<div class="card analogy"><h3>🪡 A prova da costureira</h3><p>A costureira não entrega o vestido sem a prova: a cliente veste, anda, senta, e só aí aparece a alça que aperta. No papel estava perfeito. Com o pacote de mensagens é igual: só no teste de conversa aparece a mensagem que deixa dúvida ou soa estranha.</p></div>`,
        `<div class="term"><b>Cliente oculto</b> = pessoa que finge ser cliente para testar o atendimento. <b>Rodada de ajuste</b> = correção feita depois do teste, antes da entrega. <b>Revisão com IA</b> = pedir que a IA aponte problemas, e não que reescreva tudo.</div>`,
        `<div class="card"><h3>Exemplo resolvido: o orçamento da vidraçaria</h3><p>No teste, a pessoa que fingia ser cliente leu a mensagem e perguntou: "que medição? Vocês vêm aqui quando? Tenho que pagar já?".</p></div>`,
        `<div class="flows"><div class="flow old"><h4>Antes do teste</h4><div class="node">Segue orçamento conforme solicitado. Box temperado 8mm incolor, ferragens em alumínio, valor [VALOR]. Prazo 15 dias úteis após medição. 50% de entrada. Aguardo retorno.</div></div><div class="flow new"><h4>Depois do teste</h4><div class="node">Oi, [NOME]! O box para o seu banheiro fica em [VALOR], já com instalação. Antes de fabricar, a gente vai aí medir: prefere [OPÇÃO 1] ou [OPÇÃO 2]? Depois da medição, ele fica pronto em [PRAZO] dias úteis.</div></div></div>`,
        `<div class="card"><h3>O roteiro do teste, passo a passo</h3><ol class="golden"><li><span>Escolha 3 situações: uma fácil, uma de preço e uma difícil, como uma reclamação.</span></li><li><span>Chame alguém que não conhece o pacote.</span></li><li><span>Responda usando só as mensagens do pacote.</span></li><li><span>Anote onde travou: pergunta repetida, informação faltando ou tom estranho.</span></li><li><span>Ajuste e registre o que mudou na versão do documento.</span></li></ol><p>No exemplo, saíram os termos técnicos, entrou o próximo passo e o sinal de 50% ficou para a confirmação, com a forma de pagamento.</p></div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><p><b>Colar conversas reais na IA:</b> prints com nomes e telefones de clientes finais são dados pessoais. Use só os modelos com campos e confira as configurações de privacidade da ferramenta. <b>Aceitar tudo o que a IA sugere:</b> ela pode inventar promoção, prazo ou política. Se não veio do briefing, não entra. <b>Testar só com quem elogia:</b> o amigo que acha tudo lindo não ajuda. <b>Revisar só no computador:</b> leia no celular, onde a mensagem vai ser lida.</p></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (Claude)</h3><ol class="golden"><li><span>Separe 3 mensagens do seu pacote, com campos no lugar de qualquer dado real.</span></li><li><span>Escreva você o pedido: o negócio, o público, o tom e que a IA só aponte o que parece confuso ou robótico, sem reescrever.</span></li><li><span>Compare os apontamentos com a sua leitura em voz alta e decida você o que muda.</span></li><li><span>Faça um teste de 5 minutos com alguém fingindo ser cliente e anote 2 ajustes.</span></li></ol><p>🔒 Nada de nomes, telefones ou conversas de clientes reais no chat da IA.</p></div>`
      ],
      ch:[
        { who:'Michele, 30 anos, terminou um pacote para uma academia', says:'Para revisar mais rápido, vou colar na IA os prints de 50 conversas reais da academia, com nome e telefone dos alunos.',
          q:'Qual é o caminho mais seguro?',
          opts:[
            {t:'Colar os prints, porque a IA só vai ler e não vai fazer nada com os dados.', ok:false, why:'Ela não controla o que a ferramenta faz com o conteúdo, e os alunos não autorizaram esse uso dos dados.'},
            {t:'Revisar com a IA só os modelos com campos como [NOME], sem conversas reais, e testar o pacote com um cliente oculto.', ok:true, why:'Para revisar o texto, os modelos bastam. O teste de conversa mostra o resto sem expor ninguém.'},
            {t:'Não revisar nada e entregar como está, para não correr risco.', ok:false, why:'Pular a revisão deixa passar erros que o teste encontraria com facilidade e sem risco.'}
          ]},
        { who:'Caio, 27 anos, testou um pacote de uma lavanderia', says:'A IA sugeriu acrescentar "entrega grátis em 24h" na mensagem de orçamento. Ficou mais vendedor.',
          q:'O que ele deve fazer?',
          opts:[
            {t:'Manter, porque a IA conhece boas práticas de venda.', ok:false, why:'A IA não conhece as regras da lavanderia. Uma política inventada vira promessa que o dono não cumpre.'},
            {t:'Manter, mas trocar 24h por 48h para ficar mais seguro.', ok:false, why:'Continua sendo uma política inventada. O problema é a origem da informação, não o número.'},
            {t:'Tirar a frase e só usar prazo e taxa de entrega que vierem do briefing, confirmados pelo dono.', ok:true, why:'Política vem do dono. A IA ajuda no texto, mas não decide as regras do negócio.'}
          ]}
      ]},
    { id:'1.6', title:'Projeto: pacote de 10 mensagens para a jornada de um negócio', min:30,
      body:[
        `<div class="card"><p>Agora é com você. Escolha um negócio real (de alguém que você conhece, com autorização) ou um negócio fictício bem detalhado. Faça o briefing, mapeie a jornada e escreva as 10 mensagens que mais fariam diferença no dia a dia dele. Você pode usar IA para rascunhos, mas escreva o seu próprio pedido, com o contexto do negócio, e revise cada mensagem com as dicas da lição 1.2.</p></div>`,
        `<div class="card"><h3>Como fica uma boa entrega</h3><p>Uma entrega bem feita começa com um briefing curto (negócio, público, tom e políticas), traz o mapa da jornada com o ponto de maior perda marcado e apresenta cada mensagem como uma ficha: nome, quando usar, texto com campos e, quando houver, a variação. No fim, uma linha conta o que mudou depois do teste, por exemplo: "cortei a confirmação de 5 para 3 linhas porque a pessoa que testou se perdeu no endereço".</p></div>`
      ],
      projeto: {
        entrega: 'Um pacote de 10 mensagens de WhatsApp cobrindo a jornada de um negócio real ou fictício, com nome, quando usar e campos.',
        passos: [
          'Faça o briefing em poucas linhas: tipo de negócio, público, tom de voz e políticas de entrega, pagamento e troca.',
          'Mapeie as cinco etapas da jornada e marque onde o negócio mais perde clientes.',
          'Escreva 10 mensagens, cada uma com nome, quando usar e campos entre colchetes, incluindo as políticas onde fizer sentido.',
          'Crie uma variação para pelo menos 3 das mensagens.',
          'Leia tudo em voz alta, teste 3 mensagens com alguém que finja ser cliente e anote o que ajustou.'
        ],
        checklist: [
          'As cinco etapas da jornada (contato, orçamento, confirmação, pós-venda, cobrança ou reativação) estão cobertas.',
          'Toda mensagem tem campos como [NOME] e um próximo passo claro.',
          'Não há promessas de ganho, promoções inventadas nem ameaças na cobrança.',
          'O tom combina com o negócio escolhido.',
          'As políticas citadas (entrega, pagamento, troca) vieram do briefing, sem regras inventadas.'
        ],
        minimo: 400
      } }
  ]},
  { id:2, icon:'💼', title:'LinkedIn e organização', sub:'Tom profissional e entrega clara', lessons:[
    { id:'2.1', title:'Posts e mensagens no LinkedIn', min:10,
      body:[
        `<div class="card analogy"><h3>💼 O aperto de mão profissional</h3><p>É cordial, objetivo e sem forçar intimidade. No LinkedIn, o tom é parecido: claro, útil e respeitoso. Você não chega numa reunião de negócios oferecendo o seu produto antes de dizer bom dia.</p></div>`,
        `<div class="term"><b>Post</b> = publicação para a sua rede. <b>Mensagem de conexão</b> = o bilhete curto que acompanha um convite. <b>Gancho</b> = a primeira linha do post, que faz a pessoa querer ler o resto.</div>`,
        `<div class="card"><h3>Utilidade e respeito</h3><p>O LinkedIn é uma rede profissional: funcionam bem histórias reais, aprendizados e bastidores do trabalho. Post: gancho na primeira linha, conteúdo útil e fecho com uma pergunta. Mensagens a quem você não conhece: personalize, explique o motivo do contato, não envie o mesmo texto de venda em massa nem venda logo de cara, e respeite quem não responde. Revise nomes, cargos e empresas citados, não invente resultados ou clientes e não exponha informações confidenciais. A plataforma tem regras contra automação e spam, então leia os termos de uso.</p></div>`,
        `<div class="card"><h3>A estrutura de um bom post</h3><ol class="golden"><li><span><b>Gancho:</b> uma frase curta que desperta curiosidade ou nomeia um problema ("Um contador me disse que perde 3 horas por semana respondendo a mesma pergunta.").</span></li><li><span><b>Contexto:</b> a situação real, em poucas linhas.</span></li><li><span><b>Aprendizado:</b> o que você ou o cliente descobriu, de forma prática.</span></li><li><span><b>Fecho:</b> uma pergunta para a rede ou um convite leve para conversar.</span></li></ol><p>Parágrafos curtos, de uma ou duas linhas, facilitam a leitura no celular. Evite listas de hashtags enormes e frases motivacionais vazias.</p></div>`,
        `<div class="code">Post (exemplo para uma contadora):
Toda segunda, recebo a mesma pergunta: "posso abrir MEI sendo CLT?".
Resolvi escrever uma resposta clara e salvar como modelo.
Resultado: menos tempo digitando, mais tempo para explicar o que realmente importa a cada cliente.
Você também tem uma pergunta que responde toda semana? Qual é?</div>`,
        `<div class="card"><h3>Ética no LinkedIn</h3><p>Escreva posts para o cliente, mas nunca invente números, depoimentos ou cases. Se o cliente pedir "coloca que aumentamos 300% as vendas", pergunte de onde vem o dado. Sem fonte, não entra. Também não publique nomes de clientes do seu cliente sem autorização. Nas mensagens, deixe claro quem está escrevendo: não é ético se passar por outra pessoa.</p></div>`,
        `<div class="card"><h3>Ritmo e reaproveitamento</h3><p>Para um pequeno profissional, um ou dois posts por semana já mantêm a presença, desde que sejam úteis. Uma boa fonte de ideias são as próprias perguntas que os clientes fazem no WhatsApp: cada pergunta frequente pode virar um post curto com a resposta. Assim, o pacote de WhatsApp e o de LinkedIn conversam entre si, e o seu cliente percebe que você entendeu o negócio dele como um todo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos como é um bom aperto de mão numa reunião de trabalho.</div>`
      ],
      ch:[
        { who:'Cláudia, 36 anos, quer divulgar seus serviços', says:'Quero mandar o mesmo texto de venda, longo, para 200 desconhecidos no LinkedIn usando uma ferramenta automática.',
          q:'Qual é a melhor abordagem?',
          opts:[
            {t:'Personalizar o contato com poucas pessoas relevantes, explicar o motivo da mensagem, evitar disparo automático e ler os termos da plataforma.', ok:true, why:'Contato personalizado e respeitoso tem mais resposta e evita bloqueio por spam.'},
            {t:'Fazer o envio automático, porque quanto mais gente, mais chance.', ok:false, why:'Disparo em massa costuma ser ignorado e pode levar ao bloqueio da conta.'},
            {t:'Mandar a mesma mensagem, mas fingir ser outra pessoa.', ok:false, why:'Se passar por outra pessoa é enganoso e quebra regras da plataforma.'}
          ]},
        { who:'Renata, 44 anos, contadora com escritório próprio', says:'Meu cliente pediu um post dizendo que ele "triplicou o faturamento de 50 empresas". Ele não tem esses números.',
          q:'O que você deve fazer?',
          opts:[
            {t:'Escrever do jeito que ele pediu, porque a responsabilidade é dele.', ok:false, why:'Você também assina o texto. Publicar dados inventados é enganoso e pode virar problema para os dois.'},
            {t:'Explicar que só entram números com fonte e propor um post baseado em uma história real ou num aprendizado concreto.', ok:true, why:'Posts honestos constroem reputação. Uma história real convence mais que um número sem base.'},
            {t:'Trocar "triplicou" por "dobrou", para parecer mais realista.', ok:false, why:'Continua sendo um número inventado. O problema é a falta de fonte, não o tamanho.'}
          ]},
        { who:'Eduardo, 39 anos, consultor de segurança do trabalho', says:'Meus posts começam com "Olá, rede! Hoje gostaria de compartilhar com vocês algumas reflexões..." e ninguém lê.',
          q:'Qual ajuste mais ajuda?',
          opts:[
            {t:'Colocar 30 hashtags no fim, para alcançar mais gente.', ok:false, why:'Hashtags em excesso poluem o post e não resolvem a abertura fraca.'},
            {t:'Escrever um texto mais longo, para mostrar conhecimento.', ok:false, why:'Mais texto com a mesma abertura fraca só aumenta o abandono.'},
            {t:'Trocar a abertura por um gancho concreto, como um problema real que ele viu numa obra, e fechar com uma pergunta.', ok:true, why:'O gancho é o que faz a pessoa parar de rolar a tela. Um caso real chama atenção logo na primeira linha.'}
          ]}
      ]},
    { id:'2.2', title:'Organizando o pacote: documento, nomes e guia de uso', min:10,
      body:[
        `<div class="card analogy"><h3>🗂️ A gaveta com divisórias</h3><p>Quando cada talher tem o seu lugar, você acha o que precisa sem procurar. Um pacote bem organizado funciona como essa gaveta: o cliente abre, encontra a situação e copia a mensagem em segundos.</p></div>`,
        `<div class="term"><b>Guia de uso</b> = instruções curtas de quando e como usar cada mensagem. <b>Variação</b> = outra versão da mesma mensagem. <b>Campo</b> = o espaço que o cliente preenche.</div>`,
        `<div class="card"><h3>A estrutura do documento</h3><ol class="golden"><li><span>Capa: nome do cliente, data e versão.</span></li><li><span>Índice por situação.</span></li><li><span>Para cada mensagem: nome, quando usar, texto com [CAMPOS], duas variações e observações ("não enviar após as 20h").</span></li><li><span>Guia curto: como personalizar, como respeitar quem pede para não receber, quando passar para uma pessoa.</span></li><li><span>Lista do que o cliente precisa preencher (preços, links, endereço).</span></li></ol>
          <p>Entregue em formato fácil de usar, como documento ou planilha. Revise ortografia e consistência, como o nome do negócio e o jeito de tratar o cliente.</p></div>`,
        `<div class="card"><h3>Nomes que ajudam a achar</h3><p>Dê a cada mensagem um código e um nome descritivo: "01 Boas-vindas", "02 Preço do corte", "03 Confirmação de horário". A numeração segue a jornada, então quem lê o índice já entende a ordem do atendimento. No WhatsApp Business, o nome vira o atalho da resposta rápida (/boasvindas, /preco). Mantenha o mesmo nome no documento e no aplicativo, para ninguém se confundir.</p></div>`,
        `<div class="card"><h3>Versões e revisões</h3><p>Coloque a versão na capa (v1, v2) e uma linha "o que mudou". Quando o cliente pedir ajustes, você entrega a v2 e ele sabe que deve apagar a anterior. Isso também ajuda a controlar quantas revisões já foram feitas, conforme combinado no orçamento. Guarde uma cópia sua de cada versão entregue.</p></div>`,
        `<div class="card"><h3>Checklist de revisão antes de entregar</h3><p>Leia o documento inteiro procurando: nome do negócio escrito sempre igual; tratamento consistente (você ou senhor/senhora); campos entre colchetes, sem dados de outro cliente esquecidos; horários e endereços marcados para o cliente confirmar; nenhuma promessa de resultado; ortografia revisada. Um erro bobo, como o nome da loja errado, derruba a confiança no trabalho inteiro.</p></div>`,
        `<div class="code">Exemplo de ficha no documento:
02 Preço do corte
Quando usar: quando a cliente perguntar quanto custa um corte.
Mensagem: Oi, [NOME]! O corte feminino sai por [VALOR] e inclui lavagem e finalização. Quer que eu veja um horário pra você?
Variação: Oi, [NOME], tudo bem? O corte está [VALOR], já com lavagem e finalização. Prefere manhã ou tarde?
Observação: confirmar o valor atualizado antes de enviar.</div>`,
        `<div class="card"><h3>Entrega com explicação</h3><p>Ao entregar, faça uma chamada rápida de 15 minutos ou grave um áudio curto mostrando onde está cada coisa. Muitos clientes nunca abrem um documento que não entenderam no primeiro minuto. Essa explicação simples aumenta muito a chance de o pacote ser usado de verdade.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que arrumar a gaveta com divisórias ajuda a achar as coisas.</div>`
      ],
      ch:[
        { who:'Bruno, 27 anos, entrega pacotes de mensagens', says:'Entreguei as mensagens soltas num bloco de notas, sem dizer quando usar cada uma. A cliente ficou perdida.',
          q:'O que ele deveria ter feito?',
          opts:[
            {t:'Organizar num documento com índice por situação, quando usar, campos, variações e um guia de uso curto.', ok:true, why:'A organização transforma textos soltos em uma ferramenta que o cliente consegue usar.'},
            {t:'Nada: textos bons não precisam de explicação.', ok:false, why:'Sem orientação, o cliente não sabe qual mensagem usar em cada momento.'},
            {t:'Entregar mais mensagens, para ela escolher.', ok:false, why:'Mais mensagens sem organização deixam o cliente ainda mais perdido.'}
          ]},
        { who:'Aline, 31 anos, faz pacotes para salões', says:'Entreguei o pacote de um salão e, na mensagem de boas-vindas, ficou o nome de outro salão que eu atendi antes.',
          q:'O que teria evitado esse erro?',
          opts:[
            {t:'Escrever mais rápido, para não ter tempo de errar.', ok:false, why:'Pressa causa exatamente esse tipo de erro. O que evita é conferência.'},
            {t:'Usar campos como [NOME DO NEGÓCIO] nos modelos-base e passar o checklist de revisão antes de cada entrega.', ok:true, why:'Campos e checklist impedem que dados de um cliente vazem para o pacote de outro.'},
            {t:'Nunca reaproveitar nada e começar sempre do zero.', ok:false, why:'Reaproveitar estrutura é normal e eficiente. O problema foi a falta de revisão.'}
          ]},
        { who:'Gustavo, 35 anos, dono de uma hamburgueria', says:'Pedi para trocar o preço do combo e recebi um arquivo novo. Agora tenho três arquivos e não sei qual é o certo.',
          q:'Qual prática resolve isso?',
          opts:[
            {t:'Mandar só a mensagem corrigida por WhatsApp, sem arquivo.', ok:false, why:'Fragmenta o pacote: com o tempo, ninguém sabe onde está cada versão.'},
            {t:'Mandar sempre o arquivo com o mesmo nome, sem indicar mudança.', ok:false, why:'Sem versão, o cliente não distingue o antigo do novo e pode usar preço errado.'},
            {t:'Indicar a versão na capa e no nome do arquivo, com uma linha "o que mudou", e orientar a apagar as anteriores.', ok:true, why:'Controle de versão deixa claro qual arquivo vale e registra as revisões feitas.'}
          ]}
      ]},
    { id:'2.3', title:'Perfil profissional e mensagens de conexão respeitosas', min:10,
      body:[
        `<div class="card analogy"><h3>🪪 O cartão de visita e o cumprimento</h3><p>Antes de alguém aceitar conversar, olha seu cartão de visita: quem você é, o que faz, como pode ajudar. Depois vem o cumprimento. No LinkedIn, o perfil é o cartão e a mensagem de conexão é o cumprimento. Se um dos dois falha, a conversa nem começa.</p></div>`,
        `<div class="term"><b>Título do perfil</b> = a frase abaixo do nome, que diz o que a pessoa faz. <b>Sobre</b> = o resumo do perfil, em primeira pessoa. <b>Prospecção</b> = buscar possíveis clientes e iniciar contato. <b>Follow-up</b> = mensagem de acompanhamento depois de um primeiro contato.</div>`,
        `<div class="card"><h3>Um perfil que explica em 5 segundos</h3><ol class="golden"><li><span><b>Foto</b> nítida, rosto visível, fundo simples.</span></li><li><span><b>Título</b> com quem você ajuda e como: "Ajudo clínicas a responder pacientes com mais rapidez no WhatsApp" diz mais que "Empreendedor | Inovação | Sucesso".</span></li><li><span><b>Sobre</b> com 3 partes curtas: o problema que você resolve, como você trabalha e como entrar em contato.</span></li><li><span><b>Destaques</b> com exemplos de trabalho, marcando quando for projeto fictício.</span></li></ol><p>Esse pode ser um serviço para o seu cliente (revisar o perfil dele) e também algo que você faz para si.</p></div>`,
        `<div class="card"><h3>Mensagem de conexão: curta e com motivo</h3><p>O convite deve ter poucas linhas: quem você é, por que escolheu aquela pessoa e um pedido leve. Nada de venda no convite. Se a pessoa aceitar, agradeça e, só se fizer sentido, ofereça algo útil. Se ela não responder ao follow-up, pare. Insistir várias vezes queima o nome do seu cliente.</p></div>`,
        `<div class="code">Convite:
Oi, [NOME]! Vi seu post sobre atendimento em clínicas odontológicas e me identifiquei, trabalho com isso também. Gostaria de me conectar para acompanhar seu conteúdo.

Follow-up (uma vez só, alguns dias depois de aceitar):
Obrigado por aceitar, [NOME]! Se um dia fizer sentido conversar sobre mensagens de atendimento, fico à disposição. Sucesso!</div>`,
        `<div class="flows"><div class="flow old"><h4>Prospecção invasiva</h4><div class="node">Convite genérico + texto de venda de 10 linhas + três cobranças de resposta</div></div><div class="flow new"><h4>Prospecção respeitosa</h4><div class="node">Convite com motivo real + agradecimento + uma oferta útil + respeito ao silêncio</div></div></div>`,
        `<div class="card"><h3>Limites e cuidados</h3><p>A plataforma limita convites e pode restringir contas que parecem automatizadas ou que recebem muitos "não conheço esta pessoa". Os limites mudam, então consulte a central de ajuda. Não use extensões que enviam convites em massa: além de violar os termos, coloca a conta do cliente em risco. Volume pequeno e personalizado vale mais.</p></div>`,
        `<div class="card"><h3>Para o seu cliente</h3><p>Ao entregar mensagens de conexão a um cliente, inclua no guia quantos convites por semana são razoáveis e quando parar de insistir. Assim ele usa o material com segurança e protege a própria reputação na rede.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a gente diz "oi" e o próprio nome antes de pedir algo a um desconhecido.</div>`
      ],
      ch:[
        { who:'Vanessa, 29 anos, designer de cardápios', says:'Meu título no LinkedIn é "Criativa | Apaixonada | Sonhadora". Ninguém entende o que eu faço.',
          q:'Qual título funciona melhor?',
          opts:[
            {t:'"Designer | Criativa | Inovadora | Visionária", com mais adjetivos.', ok:false, why:'Adjetivos não dizem o que ela faz nem para quem. O problema continua.'},
            {t:'"Crio cardápios claros e bonitos para restaurantes e lanchonetes".', ok:true, why:'Diz quem ela ajuda e o que entrega. Quem lê entende em segundos se ela serve para ele.'},
            {t:'Deixar o título em branco, para gerar curiosidade.', ok:false, why:'Sem título, a pessoa não tem motivo para clicar. Curiosidade sem informação não funciona.'}
          ]},
        { who:'Roberto, 42 anos, dono de uma gráfica', says:'Mandei convite para um gerente de marketing, ele aceitou e eu já mandei a tabela de preços completa. Ele não respondeu.',
          q:'O que teria sido mais adequado?',
          opts:[
            {t:'Mandar a tabela de novo, com desconto, até ele responder.', ok:false, why:'Insistir com venda depois de silêncio é invasivo e queima o contato.'},
            {t:'Ligar para a empresa e pedir para falar com ele.', ok:false, why:'Pular etapas sem relação prévia costuma ser visto como pressão.'},
            {t:'Agradecer a conexão, perguntar ou oferecer algo útil ao trabalho dele e só falar de preço se ele mostrar interesse.', ok:true, why:'Relação vem antes da venda. Um contato útil abre espaço para uma conversa de verdade.'}
          ]},
        { who:'Kátia, 37 anos, psicóloga', says:'Uma pessoa me indicou uma extensão que manda 500 convites por dia no LinkedIn. Vale a pena para divulgar meu consultório?',
          q:'Qual é a melhor orientação?',
          opts:[
            {t:'Não usar: viola os termos, pode restringir a conta e convites genéricos têm pouca resposta. Melhor poucos convites personalizados por semana.', ok:true, why:'Automação em massa arrisca a conta e a reputação. Poucos contatos bem escolhidos geram conversas reais.'},
            {t:'Usar só nos fins de semana, quando a plataforma vigia menos.', ok:false, why:'Não existe horário que torne a automação permitida. O risco continua.'},
            {t:'Usar, mas trocar a foto do perfil para não ser reconhecida.', ok:false, why:'Esconder a identidade é enganoso e não reduz o risco de violar os termos.'}
          ]}
      ]},
    { id:'2.4', title:'Revisão de tom, públicos diferentes e formato de entrega', min:10,
      body:[
        `<div class="card analogy"><h3>👔 A roupa para cada ocasião</h3><p>Você não vai de terno à praia nem de chinelo a uma entrevista. A pessoa é a mesma, a roupa muda. Com mensagens é igual: o negócio é o mesmo, mas o tom muda conforme quem vai ler.</p></div>`,
        `<div class="term"><b>B2B</b> = empresa vendendo para empresa (uma gráfica atendendo escritórios). <b>B2C</b> = empresa vendendo para o consumidor final (uma loja de roupas atendendo clientes). <b>Guia de tom</b> = poucas regras que descrevem como o negócio fala.</div>`,
        `<div class="tw"><table class="tbl"><tr><th>Aspecto</th><th>B2B</th><th>B2C</th></tr><tr><td>Quem lê</td><td>Gestor, comprador, dono de outra empresa</td><td>Consumidor, muitas vezes no celular e com pressa</td></tr><tr><td>Tom</td><td>Cordial e objetivo</td><td>Próximo e acolhedor</td></tr><tr><td>Foco</td><td>Prazo, condições, nota fiscal, economia de tempo</td><td>Experiência, conveniência, cuidado</td></tr><tr><td>Emojis</td><td>Raros ou nenhum</td><td>Com moderação, se combinar com a marca</td></tr></table></div>`,
        `<div class="card"><h3>Como revisar o tom, passo a passo</h3><ol class="golden"><li><span>Escreva com o cliente três palavras que descrevem o jeito do negócio (por exemplo: "acolhedor, simples, confiável").</span></li><li><span>Liste três coisas que o negócio nunca diria (gírias pesadas, "promoção imperdível", ironia).</span></li><li><span>Leia cada mensagem e pergunte se ela combina com as três palavras.</span></li><li><span>Peça ao dono que leia em voz alta duas mensagens: se ele travar ou rir, o tom não é dele.</span></li></ol></div>`,
        `<div class="code">B2B (gráfica para escritório):
Bom dia, [NOME]. Segue o orçamento de 500 cartões de visita: [VALOR], entrega em [PRAZO] dias úteis, com nota fiscal. Posso reservar a produção?

B2C (gráfica para festa infantil):
Oi, [NOME]! Os convites do aniversário ficam prontos em [PRAZO] dias. Quer ver uma prévia da arte antes de imprimir?</div>`,
        `<div class="card"><h3>Entregar em formato fácil</h3><p>O melhor formato é o que o cliente já usa. Para quem vive no celular, um documento compartilhado com índice clicável. Para quem gosta de organização, uma planilha com colunas: código, situação, quando usar, mensagem, variação, etiqueta sugerida, observações. Sugira também etiquetas do WhatsApp Business alinhadas à jornada, com as mesmas cores no documento. Se o cliente tem equipe, faça uma página de uma folha só com os atalhos, para imprimir e deixar perto do caixa.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Usar o mesmo pacote para B2B e B2C trocando só o nome; entregar em formato que o cliente não sabe abrir; e mandar um arquivo enorme sem índice. Pergunte antes onde ele prefere receber e faça um teste: peça para ele achar a mensagem de cobrança. Se demorar mais de 10 segundos, reorganize.</p></div>`,
        `<div class="card"><h3>Um mesmo negócio, dois públicos</h3><p>Muitos negócios atendem os dois lados: a confeitaria vende bolo para famílias e coffee break para empresas. Nesses casos, separe o pacote em duas seções com o mesmo índice e tons diferentes.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a gente fala diferente com a avó e com o melhor amigo, mesmo sendo a mesma pessoa falando.</div>`
      ],
      ch:[
        { who:'Helena, 46 anos, dona de uma empresa de limpeza', says:'Atendo condomínios e também casas de família. Posso usar as mesmas mensagens para os dois?',
          q:'Qual orientação faz mais sentido?',
          opts:[
            {t:'Sim, basta trocar o nome do cliente.', ok:false, why:'Síndicos e famílias querem informações diferentes. Só trocar o nome não adapta a mensagem.'},
            {t:'Criar duas versões: para condomínios, foco em contrato, prazo e nota fiscal; para famílias, foco em confiança, cuidado e horário.', ok:true, why:'B2B e B2C leem com prioridades diferentes. A mesma informação pode ser apresentada de forma adequada a cada um.'},
            {t:'Usar só a versão formal para todo mundo, para não errar.', ok:false, why:'Formalidade excessiva afasta famílias, que esperam um tom mais próximo.'}
          ]},
        { who:'Seu Antônio, 63 anos, dono de uma ferragem', says:'Não sei mexer em documento compartilhado. Uso só o WhatsApp e às vezes papel.',
          q:'Qual formato de entrega é mais adequado para ele?',
          opts:[
            {t:'Uma planilha complexa com filtros e fórmulas, porque é mais profissional.', ok:false, why:'Profissional é o que o cliente consegue usar. Uma planilha complexa ficaria esquecida.'},
            {t:'Mandar o link de um documento online e deixar que ele aprenda.', ok:false, why:'Transfere a dificuldade para o cliente e reduz as chances de ele usar o pacote.'},
            {t:'Configurar as respostas rápidas no WhatsApp dele (com autorização) e entregar uma folha impressa com os atalhos.', ok:true, why:'O formato certo é o que ele já usa. Respostas rápidas e papel cabem na rotina dele.'}
          ]},
        { who:'Mariana, 34 anos, dona de uma loja de cosméticos naturais', says:'Achei as mensagens corretas, mas não parecem a minha loja. Minhas clientes me chamam de "Mari".',
          q:'Qual é o melhor próximo passo?',
          opts:[
            {t:'Definir com ela três palavras do tom da loja e três coisas que ela nunca diria, e revisar as mensagens com base nisso.', ok:true, why:'Um guia de tom simples transforma o "não parece a minha loja" em critérios concretos de revisão.'},
            {t:'Dizer que as mensagens estão corretas e que ela vai se acostumar.', ok:false, why:'Mensagens que a dona não reconhece como dela não serão usadas.'},
            {t:'Colocar "Mari" no começo de todas as mensagens e não mudar mais nada.', ok:false, why:'Ajuda pouco: o tom está no conjunto da mensagem, não só na assinatura.'}
          ]}
      ]},
    { id:'2.5', title:'Follow-up e pós-venda no LinkedIn e por e-mail', min:10,
      body:[
        `<div class="card analogy"><h3>📬 O vizinho que devolve a vasilha</h3><p>Quando a vizinha manda um bolo, você devolve a vasilha com um obrigado, e talvez pergunte se ela quer a receita do seu pudim. Você não bate na porta dela todo dia perguntando se gostou. Follow-up e pós-venda são essa vasilha devolvida: um contato gentil, no momento certo, que mantém a relação viva sem virar incômodo.</p></div>`,
        `<div class="term"><b>Follow-up</b> = mensagem de acompanhamento depois de uma conversa, proposta ou reunião. <b>Pós-venda</b> = contato depois que o serviço foi entregue, para saber se deu certo e manter a relação. <b>E-mail curto</b> = mensagem de poucas linhas, com assunto claro e um único pedido.</div>`,
        `<div class="card"><h3>A regra do "um, dois e para"</h3><ol class="golden"><li><span><b>Primeiro follow-up:</b> de três a cinco dias úteis depois da proposta ou conversa, lembrando o assunto em uma frase e oferecendo ajuda.</span></li><li><span><b>Segundo follow-up:</b> cerca de uma semana depois, curto, deixando a porta aberta: "se não for o momento, tudo bem".</span></li><li><span><b>Pare:</b> sem resposta depois disso, encerre com educação ou simplesmente não escreva mais. Silêncio também é resposta.</span></li><li><span><b>Pós-venda:</b> alguns dias depois da entrega, pergunte se está tudo certo e, só depois, peça uma avaliação ou indicação.</span></li></ol><p>Esses intervalos são uma referência. Combine com o seu cliente o ritmo que faz sentido para o negócio dele e registre no guia de uso.</p></div>`,
        `<div class="card"><h3>LinkedIn ou e-mail?</h3><p>No B2B, muita gente prefere receber proposta e acompanhamento por e-mail, porque fica registrado e é fácil de encaminhar ao sócio. O LinkedIn funciona bem para manter a relação: comentar um post, parabenizar por uma conquista, mandar uma mensagem curta. Uma contadora que mandou proposta a uma clínica pode fazer o follow-up por e-mail e, meses depois, retomar o contato no LinkedIn com algo útil, como um aviso sobre prazo de imposto.</p></div>`,
        `<div class="code">E-mail curto de follow-up:
Assunto: Proposta de mensagens para a [NOME DA EMPRESA]

Oi, [NOME], tudo bem?
Passando para saber se você conseguiu ver a proposta que enviei na [DIA]. Se tiver alguma dúvida, posso explicar em 10 minutos por telefone.
Se não for o momento, sem problema.
[SEU NOME]</div>`,
        `<div class="tw"><table class="tbl"><tr><th>Situação</th><th>Faça</th><th>Evite</th></tr><tr><td>Proposta sem resposta</td><td>Dois lembretes curtos e espaçados</td><td>"Oi?", "Viu?", "???" em sequência</td></tr><tr><td>Serviço entregue</td><td>Perguntar se está tudo certo</td><td>Pedir indicação no mesmo dia</td></tr><tr><td>Cliente disse "não"</td><td>Agradecer e encerrar</td><td>Insistir com desconto</td></tr></table></div>`,
        `<div class="card"><h3>Erros comuns e ética</h3><p>Escrever "como você não respondeu, imagino que não tenha interesse" em tom de cobrança; mandar o mesmo e-mail para dezenas de contatos com cópia aberta, expondo os endereços de todos; e inventar urgência, como "a proposta vence hoje", quando não vence. Cada contato deve ter um motivo real. Para e-mails de divulgação a muitas pessoas, valem as mesmas regras de consentimento e descadastro do WhatsApp. E se a pessoa pedir para não receber mais, respeite na hora e confirme com uma frase educada.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos a diferença entre devolver a vasilha com um obrigado e bater na porta da vizinha todo dia.</div>`
      ],
      ch:[
        { who:'Fábio, 37 anos, mandou proposta para uma imobiliária', says:'Mandei a proposta há uma semana e ninguém respondeu. Penso em mandar mensagem todo dia até responderem.',
          q:'Qual é o melhor caminho?',
          opts:[
            {t:'Mandar todo dia, porque quem não é visto não é lembrado.', ok:false, why:'Mensagem diária soa como pressão e costuma levar ao bloqueio do contato.'},
            {t:'Mandar um follow-up curto lembrando o assunto, outro cerca de uma semana depois e, sem resposta, parar.', ok:true, why:'Dois contatos espaçados mostram interesse sem incomodar. Silêncio prolongado também é uma resposta.'},
            {t:'Mandar um e-mail dizendo que a proposta vence hoje, para criar urgência.', ok:false, why:'Urgência inventada é enganosa e queima a confiança se for descoberta.'}
          ]},
        { who:'Priscila, 29 anos, entregou um pacote para uma clínica de fisioterapia', says:'Entreguei o pacote hoje de manhã. Já posso pedir uma indicação e um depoimento?',
          q:'Qual é o melhor momento para o pós-venda?',
          opts:[
            {t:'Pedir agora, enquanto o cliente ainda lembra do trabalho.', ok:false, why:'No dia da entrega o cliente nem usou o pacote. Pedir indicação antes de ele ver resultado soa apressado.'},
            {t:'Nunca pedir, porque pode parecer interesseiro.', ok:false, why:'Pedir com educação, no momento certo, é normal e ajuda a construir o portfólio.'},
            {t:'Esperar alguns dias, perguntar se o pacote está funcionando e, se estiver tudo certo, pedir a avaliação ou indicação.', ok:true, why:'Primeiro o cuidado, depois o pedido. Quem já usou e gostou indica com mais vontade.'}
          ]},
        { who:'Henrique, 44 anos, consultor', says:'Um contato no LinkedIn respondeu: "obrigado, mas não tenho interesse agora". Posso oferecer um desconto para tentar de novo?',
          q:'Qual resposta é mais adequada?',
          opts:[
            {t:'Agradecer, dizer que fica à disposição se mudar de ideia e não insistir.', ok:true, why:'Respeitar o não preserva a relação. Muitas portas se reabrem justamente porque não foram forçadas.'},
            {t:'Oferecer um desconto grande na mesma hora.', ok:false, why:'Insistir com desconto depois de um "não" claro soa como pressão e desvaloriza o serviço.'},
            {t:'Mandar a proposta de novo daqui a dois dias, como se nada tivesse acontecido.', ok:false, why:'Ignorar a resposta da pessoa é desrespeitoso e leva ao bloqueio.'}
          ]}
      ]},
    { id:'2.7', title:'Proposta do pacote: do orçamento confuso à página clara', min:12,
      body:[
        `<div class="card analogy"><h3>🍔 O cardápio do combo</h3><p>Na lanchonete, o cardápio diz o que vem no combo, quanto custa e quanto sai a batata extra. Ninguém precisa perguntar três vezes. Se o atendente responde "depende", o cliente desiste. A proposta do seu pacote é esse cardápio: em uma página, o cliente entende o que recebe, quanto paga e o que fazer para começar.</p></div>`,
        `<div class="term"><b>Proposta</b> = documento curto que apresenta o serviço, o escopo, o prazo e o valor. <b>Validade</b> = até quando aquele preço e aquele prazo valem. <b>Extra</b> = o que não está incluído e é cobrado à parte.</div>`,
        `<div class="card"><h3>Exemplo resolvido: a proposta para uma clínica veterinária</h3><p>A dona da clínica pediu um orçamento depois de uma conversa rápida. A primeira versão foi esta:</p></div>`,
        `<div class="flows"><div class="flow old"><h4>Proposta fraca</h4><div class="node">Oi! Faço mensagens pra WhatsApp e LinkedIn, fica R$ 500, vai bombar suas vendas 🚀 Fechado?</div></div></div>`,
        `<div class="card"><h3>Os problemas</h3><ol class="golden"><li><span>Não mostra que entendeu a dor da clínica.</span></li><li><span>Não diz o que está incluso: quantas mensagens, variações, guia.</span></li><li><span>Promete resultado ("vai bombar"), o que ninguém pode garantir.</span></li><li><span>Não fala de prazo, revisões nem forma de pagamento.</span></li><li><span>Pressiona com "Fechado?" em vez de propor um próximo passo.</span></li></ol></div>`,
        `<div class="code">Proposta melhorada (resumo da página):
1. O que entendi: muitos tutores pedem preço de vacina e somem; os lembretes de retorno são esquecidos.
2. O que entrego: 12 mensagens de WhatsApp com 2 variações cada, lembrete de vacina e guia de uso de 1 página.
3. Como trabalho: briefing de 30 min, entrega em [PRAZO] dias úteis, até 2 rodadas de revisão.
4. Investimento: [VALOR], com [FORMA DE PAGAMENTO].
5. Não está incluso: posts de LinkedIn e configuração no aparelho (posso orçar à parte).
6. Validade: [DATA]. Próximo passo: marcar o briefing.
O pacote organiza o atendimento; não garante aumento de vendas.</div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><p><b>Reaproveitar a proposta de outro cliente</b> sem revisar: o nome de outra empresa ou detalhes do negócio dela vazam. Use campos e passe o checklist. <b>Logos de clientes sem autorização:</b> só mostre quem permitiu. <b>Esconder o extra:</b> o conflito aparece na segunda revisão. <b>Pedir dados demais antes de fechar:</b> para orçar, basta o nome do negócio e o contato; CPF ou endereço ficam para a hora do pagamento, se forem necessários. <b>PDF de 10 páginas:</b> uma página bem organizada é lida, dez não.</p></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (Google Docs)</h3><ol class="golden"><li><span>Crie um documento "Proposta – [negócio fictício]" com os 6 títulos do exemplo, usando Título 2.</span></li><li><span>Preencha cada parte com as suas palavras, pensando na dor daquele negócio.</span></li><li><span>Termine com uma linha honesta sobre o que o pacote faz e o que não garante.</span></li><li><span>Peça a alguém que leia em 2 minutos e diga o que vai receber, quanto paga e quando. Ajuste o que ficou confuso.</span></li></ol><p>🔒 Use um negócio fictício ou um real com autorização, e compartilhe o documento só com quem precisa ler, no modo leitor.</p></div>`
      ],
      ch:[
        { who:'Leonardo, 32 anos, vai mandar a primeira proposta para uma autoescola', says:'Vou mandar só o valor por WhatsApp. Se ela quiser saber o que inclui, pergunta.',
          q:'Qual é a melhor forma de apresentar a proposta?',
          opts:[
            {t:'Mandar só o valor, porque cliente gosta de resposta curta.', ok:false, why:'Preço sem escopo vira comparação só por valor e gera dúvida sobre o que está incluso.'},
            {t:'Uma página curta com a dor que ele entendeu, o que entrega, prazo, revisões, valor, o que é extra e o próximo passo.', ok:true, why:'Com tudo claro numa página, a cliente decide sem precisar perguntar e não há surpresa depois.'},
            {t:'Um documento de 12 páginas com a história dele e teorias de comunicação.', ok:false, why:'Ninguém lê 12 páginas para contratar um pacote de mensagens. O essencial se perde.'}
          ]},
        { who:'Tânia, 39 anos, reaproveitou a proposta de um cliente antigo', says:'Copiei a proposta que mandei para uma pizzaria e troquei o nome no topo. Vou enviar para uma hamburgueria.',
          q:'Qual cuidado ela não pode pular?',
          opts:[
            {t:'Revisar o documento inteiro: detalhes, números e dores da pizzaria não podem aparecer para a hamburgueria.', ok:true, why:'Informação de um cliente vazando para outro quebra o sigilo e mostra descuido. Estrutura pode ser reaproveitada; conteúdo, não.'},
            {t:'Nenhum: proposta é igual para todo mundo.', ok:false, why:'Cada negócio tem dores e escopo próprios. Uma proposta genérica convence menos e pode expor o cliente anterior.'},
            {t:'Deixar o nome da pizzaria para mostrar que ela tem clientes.', ok:false, why:'Expor um cliente sem autorização é falta de sigilo, e a hamburgueria vai perceber o copia e cola.'}
          ]}
      ]},
    { id:'2.8', title:'Calendário de posts e imagens com direito de uso', min:12,
      body:[
        `<div class="card analogy"><h3>🍱 O cardápio da semana da marmitaria</h3><p>A marmitaria que planeja o cardápio da semana compra certo, não desperdiça e não fica sem ideia na quarta-feira. Quem decide na hora acaba repetindo o mesmo prato. Com posts é igual: um calendário simples evita a semana em que saem três posts e o mês em que não sai nenhum.</p></div>`,
        `<div class="term"><b>Calendário de conteúdo</b> = tabela com o que publicar em cada semana. <b>Pilar</b> = tipo de assunto que se repete, como dúvida frequente ou bastidor. <b>Licença de imagem</b> = regra que diz como uma foto pode ser usada.</div>`,
        `<div class="card"><h3>Exemplo resolvido: a contadora Renata</h3><p><b>Antes:</b> postava quando lembrava, às vezes três posts num dia e depois nada por um mês. Usava fotos achadas no Google, uma delas com a marca d'água de um banco de imagens, e textos como "Feliz segunda, rede!". <b>O que fizemos:</b> transformamos as perguntas que ela mais recebe no WhatsApp em pilares e montamos 4 semanas, com a origem de cada imagem anotada.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Semana</th><th>Pilar</th><th>Ideia</th><th>Imagem</th></tr><tr><td>1</td><td>Dúvida frequente</td><td>"MEI pode contratar funcionário?"</td><td>Foto própria da mesa de trabalho</td></tr><tr><td>2</td><td>Bastidor</td><td>Como ela organiza os documentos dos clientes</td><td>Print de planilha com dados fictícios</td></tr><tr><td>3</td><td>Erro comum</td><td>Perder o prazo de uma declaração</td><td>Sem imagem: só texto</td></tr><tr><td>4</td><td>História real</td><td>Cliente que se regularizou</td><td>Foto enviada pela cliente, com autorização</td></tr></table></div>`,
        `<div class="why-chain"><p><b>Por que pilares?</b> Porque ninguém fica sem ideia: cada semana já tem um tipo de assunto. <b>Por que tirar das perguntas do WhatsApp?</b> Porque são dúvidas reais do público. <b>E por que uma frequência baixa?</b> Porque um post por semana que se mantém vale mais que cinco que param em um mês.</p></div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><p><b>Foto do Google:</b> aparecer na busca não significa ser livre. Use fotos próprias ou de bancos com licença e leia o que ela permite. <b>Tirar marca d'água:</b> viola a licença; se a foto tem marca, ela não é grátis para aquele uso. <b>Marca d'água do aplicativo:</b> editores gratuitos podem colocar a própria marca na arte; avise o cliente ou escolha uma opção que não faça isso. <b>Pessoas na foto:</b> só com autorização. <b>Prints com dados:</b> nomes, CNPJ ou valores de clientes saem ou viram fictícios. <b>Ritmo irreal:</b> não prometa ao cliente um post por dia se ele não vai sustentar.</p></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (Microsoft Copilot)</h3><ol class="golden"><li><span>Liste você 4 perguntas frequentes de um negócio fictício.</span></li><li><span>Escreva um post curto para uma delas, com gancho e pergunta no fim.</span></li><li><span>Peça ao Copilot duas versões de tom mantendo os fatos, escolha uma e ajuste você.</span></li><li><span>Monte a tabela de 4 semanas com pilar, ideia e a origem de cada imagem: própria, autorizada ou banco com licença.</span></li></ol><p>🔒 Não cole nomes, números ou casos de clientes reais no chat.</p></div>`
      ],
      ch:[
        { who:'Gilberto, 48 anos, arquiteto', says:'Achei no Google a foto perfeita de uma sala para o meu post. Tem uma marca d\u2019água no canto, mas dá para cortar.',
          q:'Qual é a melhor decisão?',
          opts:[
            {t:'Cortar a marca d\u2019água e publicar, porque está na internet.', ok:false, why:'A marca indica que a foto tem dono e licença paga. Cortar viola a licença e pode gerar cobrança.'},
            {t:'Usar foto de um projeto próprio ou de um banco com licença que permita o uso, e deixar claro quando a imagem é só ilustrativa.', ok:true, why:'Foto própria mostra o trabalho real. Banco com licença resolve a ilustração sem risco.'},
            {t:'Publicar a foto com a marca, porque assim está dando crédito.', ok:false, why:'Mostrar a marca não é licença. A foto continua sendo usada sem permissão.'}
          ]},
        { who:'Lívia, 26 anos, cuida do LinkedIn de um escritório de advocacia', says:'O sócio quer um post por dia, mas na prática eles demoram uma semana para aprovar cada texto.',
          q:'O que você proporia?',
          opts:[
            {t:'Aceitar um post por dia e publicar sem aprovação quando atrasar.', ok:false, why:'Publicar sem aprovação num escritório de advocacia é arriscado, e o ritmo prometido não se sustenta.'},
            {t:'Desistir do calendário, porque eles não têm tempo.', ok:false, why:'Sem plano, os posts param de vez. O problema é o ritmo, não a ideia de planejar.'},
            {t:'Um calendário de um post por semana com pilares, aprovando o mês inteiro numa reunião curta.', ok:true, why:'Um ritmo que cabe na rotina de aprovação se mantém, e a reunião mensal resolve o gargalo.'}
          ]}
      ]},
    { id:'2.6', title:'Projeto: perfil, 3 posts e 3 mensagens de LinkedIn', min:30,
      body:[
        `<div class="card"><p>Agora você vai produzir a parte de LinkedIn de um pacote. Pode ser para você mesmo (divulgando o seu serviço de mensagens) ou para um profissional real que autorizou. Use IA para rascunhos se quiser, mas escreva o seu próprio pedido com o contexto e revise tudo com o que aprendeu sobre gancho, tom, follow-up e respeito.</p></div>`,
        `<div class="card"><h3>Como fica uma boa entrega</h3><p>Um documento com índice e quatro partes: o perfil (título e "Sobre"), os três posts, as mensagens de conexão e follow-up e, no fim, um bloco curto de revisão. Nesse bloco, você anota as três palavras do tom e o que mudou depois de ler em voz alta, por exemplo: "troquei a abertura do post 2, que começava com 'Olá, rede', por um caso real de uma cliente".</p></div>`
      ],
      projeto: {
        entrega: 'Título e texto "Sobre" de um perfil, 3 posts e 3 mensagens de LinkedIn (convite, agradecimento e follow-up), organizados num documento.',
        passos: [
          'Defina para quem é o perfil e qual público ele quer alcançar (B2B ou B2C).',
          'Escreva o título e o "Sobre" em três partes: problema, como trabalha e contato.',
          'Escreva 3 posts com gancho, contexto, aprendizado e fecho com pergunta.',
          'Escreva 3 mensagens: convite com motivo, agradecimento e um único follow-up, com a regra de quando parar.',
          'Revise o tom com três palavras-guia, leia em voz alta, anote o que mudou e organize tudo num documento com índice.'
        ],
        checklist: [
          'O título diz para quem e o que o profissional faz, sem adjetivos vazios.',
          'Os posts não inventam números, clientes ou depoimentos.',
          'Nenhuma mensagem vende logo no convite e há no máximo um follow-up.',
          'O tom é coerente com o público escolhido.'
        ],
        minimo: 400
      } }
  ]},
  { id:3, icon:'⚖️', title:'Uso responsável', sub:'Consentimento, LGPD e preço', lessons:[
    { id:'3.1', title:'Consentimento e spam: só para quem aceitou', min:10,
      body:[
        `<div class="card analogy"><h3>⚖️ A campainha</h3><p>A campainha toca para quem você quer visitar e quem quer ser visitado. Jogar panfleto por baixo de todas as portas incomoda e vira reclamação.</p></div>`,
        `<div class="term"><b>Consentimento</b> = permissão da pessoa para receber mensagens. <b>Descadastro (opt-out)</b> = jeito simples de a pessoa pedir para não receber mais. <b>Disparo em massa</b> = envio do mesmo texto a muita gente de uma vez.</div>`,
        `<div class="card"><h3>Mensagem boa é mensagem esperada</h3><ol class="golden"><li><span>Envie para quem já é cliente ou pediu contato.</span></li><li><span>Não compre listas de números.</span></li><li><span>Ofereça um descadastro fácil ("responda SAIR") e respeite.</span></li><li><span>Não adicione pessoas em grupos sem pedir.</span></li><li><span>WhatsApp e LinkedIn têm regras contra spam e uso abusivo de automação e podem bloquear contas: leia as políticas atuais. Para contatos comerciais organizados, existem ferramentas oficiais, como o WhatsApp Business, com recursos próprios: confira as condições vigentes.</span></li><li><span>LGPD: guarde só o necessário e informe a finalidade.</span></li></ol>
          <p>Você entrega os modelos e orienta o cliente a usá-los com consentimento.</p></div>`,
        `<div class="card"><h3>Como conseguir o consentimento na prática</h3><p>O jeito mais simples é perguntar. No caixa da padaria: "posso te mandar pelo WhatsApp quando sair o pão de queijo quentinho?". No fim do atendimento do salão: "quer receber lembrete do próximo horário?". Quem diz sim entra na lista; quem diz não, não entra. Um cartaz com QR code para a pessoa chamar o negócio por iniciativa própria também funciona. Anote quando e como a pessoa aceitou.</p></div>`,
        `<div class="flows"><div class="flow old"><h4>Sem consentimento</h4><div class="node">Lista comprada → disparo para todos → denúncias → número bloqueado</div></div><div class="flow new"><h4>Com consentimento</h4><div class="node">Cliente aceita no balcão → recebe mensagem útil → pode sair quando quiser → confiança</div></div></div>`,
        `<div class="why-chain"><p><b>Por que o descadastro precisa ser fácil?</b> Porque quem não consegue sair denuncia. <b>Por que denúncias importam?</b> Porque as plataformas restringem ou bloqueiam números muito denunciados. <b>E por que isso afeta você?</b> Porque o cliente vai culpar o pacote que você entregou.</p></div>`,
        `<div class="card"><h3>Seu papel e seus limites</h3><p>Você não envia as mensagens: entrega modelos e orientação. Mas se o cliente pedir um texto para lista comprada, explique os riscos e recuse essa parte. Coloque no guia de uso uma seção "quem pode receber" e, em toda mensagem de divulgação, uma linha de saída como "Se não quiser mais receber, é só responder SAIR".</p></div>`,
        `<div class="code">Linha de consentimento no fim do atendimento:
Quer receber por aqui o lembrete do seu próximo horário e novidades do salão, no máximo duas vezes por mês? É só responder SIM. Se um dia não quiser mais, basta mandar SAIR.</div>`,
        `<div class="card"><h3>Frequência também é respeito</h3><p>Mesmo quem aceitou receber pode se cansar. Combine com o cliente uma frequência máxima (por exemplo, até duas mensagens de divulgação por mês) e registre no guia de uso. Lembretes e confirmações ligados a um serviço marcado são esperados; divulgação demais vira incômodo e leva a bloqueios.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que só tocamos a campainha de quem quer nos receber.</div>`
      ],
      ch:[
        { who:'Wesley, 34 anos, tem uma loja', says:'Comprei uma lista com 5 mil números e vou disparar a mensagem para todos pelo WhatsApp.',
          q:'Qual é o problema?',
          opts:[
            {t:'Nenhum: quanto mais gente receber, mais vendas.', ok:false, why:'Mensagens para quem não pediu geram denúncias e podem bloquear o número.'},
            {t:'Disparar só à noite, para incomodar menos.', ok:false, why:'O horário não resolve a falta de permissão.'},
            {t:'Falta de consentimento: isso pode bloquear a conta e gerar problemas com a LGPD. O certo é enviar só a clientes e a quem pediu contato, com opção de sair.', ok:true, why:'Consentimento e descadastro protegem a conta e as pessoas, e geram contatos mais interessados.'}
          ]},
        { who:'Dona Lúcia, 60 anos, dona de uma padaria', says:'Quero avisar quando sai a fornada de pão de queijo, mas não sei como montar a lista sem incomodar ninguém.',
          q:'Qual é o melhor caminho?',
          opts:[
            {t:'Perguntar no caixa quem quer receber o aviso e colocar um cartaz com QR code, anotando quem aceitou.', ok:true, why:'Perguntar diretamente é o consentimento mais claro, e a lista fica formada só por quem quer receber.'},
            {t:'Pegar os números das comandas antigas e mandar para todos.', ok:false, why:'Ter o número não significa ter permissão para mandar divulgação. Falta consentimento.'},
            {t:'Criar um grupo e adicionar todos os clientes de uma vez.', ok:false, why:'Adicionar pessoas em grupos sem pedir incomoda e é um dos motivos mais comuns de denúncia.'}
          ]},
        { who:'Thiago, 28 anos, dono de uma academia pequena', says:'Um aluno respondeu "SAIR", mas eu queria mandar só mais uma promoção para ele.',
          q:'O que fazer?',
          opts:[
            {t:'Mandar só mais uma, porque a promoção é boa.', ok:false, why:'Ignorar o pedido de saída quebra a confiança e aumenta o risco de denúncia.'},
            {t:'Remover o contato da lista de divulgação e confirmar com uma mensagem curta e educada.', ok:true, why:'Respeitar o descadastro é obrigação ética e protege o número. Confirmar mostra respeito.'},
            {t:'Mandar a promoção por outro número.', ok:false, why:'Trocar de número para contornar o pedido é desrespeitoso e enganoso.'}
          ]}
      ]},
    { id:'3.2', title:'Projeto de portfólio e checklist', min:10,
      body:[
        `<div class="card analogy"><h3>📁 A degustação na doceria</h3><p>O cliente prova um pedacinho antes de comprar. Seu portfólio é a degustação do seu serviço: mostra a qualidade sem precisar de explicação.</p></div>`,
        `<div class="term"><b>Portfólio</b> = exemplos reais ou de treino do seu trabalho. <b>Projeto fictício</b> = trabalho de treino para um negócio inventado. <b>Checklist</b> = lista de itens a conferir antes de entregar.</div>`,
        `<div class="card"><h3>Portfólio e checklist</h3><p>Seu portfólio pode começar com os projetos que você monta nos três módulos deste curso, para um negócio real, com autorização, ou fictício: mensagens de WhatsApp para toda a jornada, posts e mensagens de LinkedIn e um guia de uso com descadastro. Marque no portfólio quando o projeto for fictício.</p>
          <p><b>Checklist "estou pronto para cobrar?":</b> mensagens com campos, variações feitas, guia de uso e descadastro, nenhuma promessa de ganho, orientação de consentimento dada ao cliente, revisão de nomes e ortografia e combinado por escrito (quantidade de mensagens, revisões e prazo).</p>
          <p><b>Próximo passo:</b> conclua as lições 3.3 a 3.5 e faça o projeto 3.6, que fecha o curso. A trilha terá um projeto final próprio. Em seguida, o curso "Sites Simples com IA" é uma boa continuação.</p>
          <p>⚠️ Este curso não garante renda: ele ensina a oferecer um serviço com qualidade.</p></div>`,
        `<div class="card"><h3>Como montar um portfólio que convence</h3><ol class="golden"><li><span><b>Escolha dois ou três exemplos</b> de segmentos diferentes (um salão, uma oficina, uma contadora), para mostrar que você adapta o tom.</span></li><li><span><b>Mostre o antes e depois</b>: uma mensagem robótica e a sua versão. É o jeito mais rápido de o cliente perceber o valor.</span></li><li><span><b>Explique o processo</b> em poucas linhas: levantamento, jornada, escrita, revisão, entrega.</span></li><li><span><b>Proteja dados</b>: nada de nomes ou telefones reais de clientes finais nos exemplos.</span></li></ol></div>`,
        `<div class="card"><h3>O combinado por escrito</h3><p>Antes de começar, mande ao cliente um resumo por escrito (pode ser no próprio WhatsApp): o que está incluído (por exemplo, 12 mensagens com duas variações e guia de uso), quantas rodadas de revisão, prazo de entrega, valor e forma de pagamento, e o que é extra (mensagens adicionais, configuração no aplicativo, posts). Peça um "de acordo". Esse cuidado simples evita a maioria dos conflitos.</p></div>`,
        `<div class="card"><h3>Depoimentos honestos</h3><p>Quando entregar um trabalho real, peça ao cliente um depoimento curto sobre como foi trabalhar com você e use somente com autorização. Nunca escreva depoimentos em nome de outras pessoas nem invente clientes. Um portfólio pequeno e verdadeiro é melhor que um grande e falso.</p></div>`,
        `<div class="card"><h3>Onde mostrar</h3><p>Um documento com dois ou três exemplos, uma pasta de imagens das mensagens ou a seção de destaques do LinkedIn já bastam. Tenha um link fácil de mandar quando alguém perguntar "tem algum exemplo?". Atualize sempre que concluir um trabalho melhor que os anteriores.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, por que uma degustação ajuda a vender.</div>`
      ],
      ch:[
        { who:'Amanda, 24 anos, fez um pacote de teste', says:'Já fiz um pacote de teste, mas vou cobrar sem combinar quantas revisões estão incluídas.',
          q:'O que ela deveria fazer antes de cobrar?',
          opts:[
            {t:'Cobrar já, e resolver as revisões conforme o cliente pedir.', ok:false, why:'Sem limite combinado, o cliente pode pedir revisões sem fim e prejudicar o seu tempo.'},
            {t:'Combinar por escrito a quantidade de mensagens, as revisões incluídas e o prazo, e usar o checklist antes de entregar.', ok:true, why:'O combinado escrito evita conflito e deixa claro o que é extra.'},
            {t:'Oferecer revisões ilimitadas para ganhar a confiança do cliente.', ok:false, why:'Revisões ilimitadas tiram o valor do seu tempo. Limites claros mostram profissionalismo.'}
          ]},
        { who:'Igor, 26 anos, começando a vender pacotes', says:'Ainda não tenho clientes. Pensei em colocar no portfólio logos de empresas grandes, como se eu tivesse atendido.',
          q:'Qual é a melhor alternativa?',
          opts:[
            {t:'Usar os logos, porque todo mundo faz isso no começo.', ok:false, why:'É enganoso, pode gerar problema com as marcas e destrói sua credibilidade quando descoberto.'},
            {t:'Montar projetos fictícios bem feitos, marcados como fictícios, e mostrar o antes e depois das mensagens.', ok:true, why:'Projetos de treino honestos mostram sua habilidade sem enganar ninguém.'},
            {t:'Esperar ter clientes reais para só então montar um portfólio.', ok:false, why:'Sem portfólio fica difícil conseguir o primeiro cliente. Projetos fictícios resolvem esse impasse.'}
          ]},
        { who:'Sabrina, 33 anos, entregou um pacote para um pet shop', says:'O cliente ficou muito satisfeito. Posso colocar as mensagens no meu portfólio com os nomes e telefones dos clientes dele que aparecem nos exemplos?',
          q:'O que ela deve fazer?',
          opts:[
            {t:'Pedir autorização ao dono do pet shop e trocar nomes e telefones de clientes finais por dados fictícios.', ok:true, why:'Mostrar o trabalho com autorização e sem dados pessoais respeita o cliente e a LGPD.'},
            {t:'Publicar como está, porque o cliente ficou satisfeito.', ok:false, why:'Satisfação não é autorização, e dados de clientes finais não podem ser expostos.'},
            {t:'Não mostrar nunca, porque trabalho real não pode entrar em portfólio.', ok:false, why:'Pode entrar, com autorização e dados protegidos. Trabalho real fortalece o portfólio.'}
          ]}
      ]},
    { id:'3.3', title:'Regras das plataformas e LGPD na prática', min:10,
      body:[
        `<div class="card analogy"><h3>🚦 As regras do trânsito</h3><p>Ninguém dirige sem conhecer o semáforo. As regras não estão ali para atrapalhar: protegem todo mundo e evitam acidentes. WhatsApp, LinkedIn e a LGPD são as regras de trânsito das mensagens. Quem conhece dirige tranquilo; quem ignora leva multa ou perde a carteira (no caso, a conta).</p></div>`,
        `<div class="term"><b>LGPD</b> = Lei Geral de Proteção de Dados (Lei 13.709/2018), que regula o uso de dados pessoais no Brasil. <b>Dado pessoal</b> = informação que identifica uma pessoa, como nome e telefone. <b>Dado sensível</b> = dado sobre saúde, religião, origem racial, entre outros, que exige ainda mais cuidado. <b>Lista de transmissão</b> = recurso do WhatsApp que envia uma mensagem a vários contatos, cada um recebendo individualmente.</div>`,
        `<div class="card"><h3>Regras das plataformas que afetam o pacote</h3><ol class="golden"><li><span><b>Listas de transmissão</b> do WhatsApp só chegam a quem salvou o número do negócio na agenda. Isso é um bom sinal: quem salvou, em geral, quer receber.</span></li><li><span><b>Limites</b> de envio, de grupos e de convites existem e mudam com o tempo. Consulte sempre a central de ajuda oficial antes de orientar o cliente.</span></li><li><span><b>Denúncias e bloqueios</b> pesam: muitos bloqueios podem levar à restrição do número.</span></li><li><span><b>Automação não oficial</b> (aplicativos piratas, extensões de disparo) viola os termos e pode banir a conta.</span></li><li><span><b>Opt-out</b>: inclua sempre uma forma clara de sair nas mensagens de divulgação.</span></li></ol></div>`,
        `<div class="card"><h3>LGPD no dia a dia das mensagens</h3><p>Em linguagem simples, a lei pede: usar os dados para uma finalidade clara e informada ("vamos usar seu número para lembretes de horário"), guardar só o necessário, proteger esses dados e atender a pessoa que pede para ver, corrigir ou apagar seus dados. Na prática, para o seu cliente, isso significa: não pedir CPF se não precisa, não compartilhar a lista de contatos com terceiros, não deixar o celular do negócio desbloqueado no balcão e apagar contatos de quem pediu.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Situação</th><th>Evite</th><th>Prefira</th></tr><tr><td>Nutricionista</td><td>Mandar resultado de exame em grupo</td><td>Conversa individual, com cuidado redobrado (dado de saúde)</td></tr><tr><td>Loja de roupas</td><td>Pedir CPF para mandar promoção</td><td>Pedir só o nome e o número, com permissão</td></tr><tr><td>Oficina</td><td>Repassar a lista de clientes a uma autopeças parceira</td><td>Não compartilhar dados sem base legal e sem informar o cliente</td></tr></table></div>`,
        `<div class="card"><h3>Seu papel e o limite da sua orientação</h3><p>Você não é advogado. Seu papel é escrever mensagens que respeitam essas regras e incluir no guia de uso um resumo simples dos cuidados, com a recomendação de que o cliente consulte a central de ajuda das plataformas e, em dúvidas jurídicas, um advogado. Negócios de saúde (clínicas, psicólogos, nutricionistas) também têm regras dos seus conselhos profissionais sobre publicidade e atendimento.</p></div>`,
        `<div class="card"><h3>No guia de uso</h3><p>Resuma tudo em cinco linhas que o cliente consiga seguir: quem pode receber, como sair, o que não pedir, o que não compartilhar e onde tirar dúvidas.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o semáforo ajuda até quem está com pressa.</div>`
      ],
      ch:[
        { who:'Carla, 39 anos, dona de uma loja de roupas', says:'Montei uma lista de transmissão com 200 clientes, mas parece que só metade recebe as novidades.',
          q:'Qual é a explicação mais provável e a orientação certa?',
          opts:[
            {t:'O WhatsApp está com defeito; ela deve criar um grupo e adicionar todo mundo.', ok:false, why:'Não é defeito, e adicionar todos num grupo sem pedir gera incômodo e denúncias.'},
            {t:'Na lista de transmissão, só recebe quem salvou o número da loja; ela pode convidar as clientes a salvar o contato, sem forçar.', ok:true, why:'Essa regra funciona como um filtro de interesse. Convidar a salvar respeita a escolha de cada cliente.'},
            {t:'Usar um aplicativo não oficial que envia para todos, mesmo sem número salvo.', ok:false, why:'Automação não oficial viola os termos e pode banir o número da loja.'}
          ]},
        { who:'Dra. Beatriz, 45 anos, nutricionista', says:'Quero um modelo para mandar o plano alimentar e comentar os exames dos pacientes pelo WhatsApp.',
          q:'Qual cuidado é mais importante no pacote dela?',
          opts:[
            {t:'Nenhum especial: é só uma mensagem como outra qualquer.', ok:false, why:'Dados de saúde são dados sensíveis na LGPD e pedem cuidado redobrado.'},
            {t:'Mandar os exames numa lista de transmissão, para economizar tempo.', ok:false, why:'Informação de saúde é individual. Envio coletivo arrisca vazamento e quebra o sigilo.'},
            {t:'Tratar como dado sensível: conversa individual, só o necessário, e orientar que ela confira as regras do conselho profissional e, em dúvida, consulte um advogado.', ok:true, why:'Saúde exige o máximo de cuidado com privacidade, e há regras profissionais específicas além da LGPD.'}
          ]},
        { who:'Rafael, 36 anos, dono de uma oficina', says:'Uma loja de autopeças me ofereceu desconto se eu passar a lista de telefones dos meus clientes.',
          q:'Como você o orientaria?',
          opts:[
            {t:'Não repassar os dados: os clientes deram o número para a oficina, não para terceiros; em caso de dúvida, consultar um advogado.', ok:true, why:'Compartilhar dados sem base legal e sem informar o titular fere a LGPD e a confiança dos clientes.'},
            {t:'Repassar, porque o desconto é bom e ninguém vai saber.', ok:false, why:'O risco legal e de reputação é real, e o cliente que receber spam vai ligar a origem à oficina.'},
            {t:'Repassar só os nomes, sem os telefones.', ok:false, why:'Nome também é dado pessoal. O problema é compartilhar sem base legal, não a quantidade.'}
          ]}
      ]},
    { id:'3.4', title:'Precificar com cautela e oferecer manutenção', min:10,
      body:[
        `<div class="card analogy"><h3>🧾 O orçamento do pintor</h3><p>Um bom pintor não chuta o preço: mede as paredes, pergunta a cor, vê se precisa de massa. Depois diz o que está incluso e quanto custa um retoque futuro. Precificar um pacote de mensagens é igual: entender o tamanho do trabalho antes de dar o valor.</p></div>`,
        `<div class="term"><b>Escopo</b> = o que está incluído no trabalho. <b>Revisão</b> = rodada de ajustes depois da primeira entrega. <b>Manutenção</b> = serviço recorrente de atualizar o pacote (preços, datas, novas situações). <b>Valor por hora</b> = quanto você precisa ganhar por hora trabalhada para cobrir custos e viver.</div>`,
        `<div class="card"><h3>Como chegar a um preço, passo a passo</h3><ol class="golden"><li><span>Estime as horas: levantamento com o cliente, mapa da jornada, escrita, revisão, organização e entrega.</span></li><li><span>Defina seu valor por hora considerando custos (internet, ferramentas, impostos) e experiência.</span></li><li><span>Pesquise o que outros profissionais da sua região cobram por serviços parecidos.</span></li><li><span>Monte de duas a três opções de pacote (básico, completo, completo com configuração no aplicativo).</span></li><li><span>Registre o escopo por escrito, com revisões incluídas e prazo.</span></li></ol></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Opção</th><th>O que inclui (exemplo)</th></tr><tr><td>Básico</td><td>10 mensagens de WhatsApp, uma variação cada, guia de uso, uma revisão</td></tr><tr><td>Completo</td><td>15 mensagens com duas variações, 3 posts e 3 mensagens de LinkedIn, duas revisões</td></tr><tr><td>Completo + configuração</td><td>Tudo do completo e configuração das respostas rápidas e etiquetas no aplicativo, com o cliente presente</td></tr></table></div>`,
        `<div class="card"><h3>Quanto cobrar: só como referência</h3><p>Não existe tabela oficial. Como ponto de partida para pesquisa, há quem cobre algo na faixa de R$ 150 a R$ 600 por um pacote básico e mais pelo completo, mas isso <b>varia muito</b> por região, experiência, tamanho do negócio e escopo. Pesquise na sua cidade, comece com um valor que pague suas horas e ajuste com o tempo. Cobrar muito pouco também é um problema: você se cansa e o cliente desconfia. E nunca prometa ao cliente que o pacote vai aumentar as vendas em um número específico.</p></div>`,
        `<div class="card"><h3>Manutenção: o serviço que continua</h3><p>Preços mudam, o salão lança um serviço novo, a loja entra em liquidação, a padaria muda o horário. Ofereça manutenção mensal ou trimestral com escopo claro: por exemplo, até 5 ajustes por mês e uma mensagem nova por data comemorativa. Combine valor, o que está incluído e como cancelar. Manutenção cria renda mais previsível, mas só faça se puder cumprir.</p></div>`,
        `<div class="card"><h3>Formalização</h3><p>Se for cobrar com frequência, avalie a formalização (por exemplo, como MEI, se a sua atividade se enquadrar) e emissão de nota. Regras fiscais mudam e dependem do caso: consulte um contador antes de decidir.</p></div>`,
        `<div class="card"><h3>Como apresentar o preço</h3><p>Mostre as opções lado a lado, destaque o que cada uma resolve e deixe o cliente escolher. Se ele achar caro, reduza o escopo, não o seu valor por hora.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o pintor mede a parede antes de dizer o preço.</div>`
      ],
      ch:[
        { who:'Jéssica, 25 anos, vai fazer o primeiro orçamento para um salão', says:'Vi na internet que alguém cobra R$ 2.000 por pacote. Vou cobrar isso também, sem pensar no trabalho.',
          q:'Qual é a forma mais cautelosa de precificar?',
          opts:[
            {t:'Copiar o valor da internet, porque se alguém cobra, ela também pode.', ok:false, why:'Um valor solto não considera região, escopo nem experiência. Pode afastar o cliente ou não cobrir o trabalho.'},
            {t:'Estimar as horas, definir o valor por hora, pesquisar na região e montar opções com escopo claro.', ok:true, why:'Preço baseado em trabalho real e pesquisa local é mais justo e fácil de explicar ao cliente.'},
            {t:'Fazer de graça no primeiro cliente e cobrar só a partir do décimo.', ok:false, why:'Trabalho gratuito em excesso desvaloriza o serviço. Um projeto de treino ou um valor inicial menor é diferente de dez trabalhos de graça.'}
          ]},
        { who:'Seu Valter, 55 anos, dono de uma pizzaria', says:'Gostei do pacote, mas o cardápio muda todo mês. Daqui a pouco as mensagens vão ficar com preço errado.',
          q:'O que você pode oferecer?',
          opts:[
            {t:'Dizer que é problema dele e que o pacote foi entregue.', ok:false, why:'Perde uma oportunidade de serviço recorrente e deixa o cliente com material desatualizado.'},
            {t:'Prometer atualizar sempre que ele pedir, sem cobrar nada.', ok:false, why:'Trabalho ilimitado sem cobrança não se sustenta e gera frustração dos dois lados.'},
            {t:'Uma manutenção mensal com escopo claro (por exemplo, até 5 ajustes e uma mensagem nova por mês), valor combinado e forma de cancelar.', ok:true, why:'Manutenção com limites resolve a dor do cliente e cria uma renda mais previsível para você.'}
          ]},
        { who:'Natália, 30 anos, apresentando proposta para uma loja de pet', says:'O cliente perguntou: "Com esse pacote, quanto minhas vendas vão aumentar?"',
          q:'Qual resposta é mais honesta?',
          opts:[
            {t:'Explicar que não dá para garantir números, mas que o pacote padroniza o atendimento, economiza tempo e organiza lembretes e pós-venda.', ok:true, why:'Ser honesto sobre o que o serviço entrega gera confiança e evita promessas que você não controla.'},
            {t:'"Pelo menos 50% em três meses, garantido."', ok:false, why:'Promessa de resultado que você não controla é enganosa e vira conflito se não acontecer.'},
            {t:'Mudar de assunto e falar só do preço.', ok:false, why:'Fugir da pergunta passa insegurança. Melhor responder com honestidade.'}
          ]}
      ]},
    { id:'3.5', title:'Objeções e respostas difíceis: preço, atraso e reclamação', min:10,
      body:[
        `<div class="card analogy"><h3>🤝 O guarda-chuva na porta</h3><p>Em dia de chuva, a boa loja deixa um guarda-chuva na porta e um pano para secar o chão. A chuva não é culpa de ninguém, mas o cuidado com quem chega molhado faz toda a diferença. Objeções e reclamações são a chuva do atendimento: vão acontecer. O pacote não impede a chuva, mas deixa o guarda-chuva pronto.</p></div>`,
        `<div class="term"><b>Objeção</b> = dúvida ou resistência do cliente antes de comprar, como "está caro". <b>Reclamação</b> = insatisfação depois da compra, como atraso ou defeito. <b>Empatia</b> = mostrar que entendeu o sentimento da pessoa antes de explicar ou resolver. <b>Escalar</b> = passar a conversa para o dono ou uma pessoa com poder de decidir.</div>`,
        `<div class="card"><h3>A sequência das respostas difíceis</h3><ol class="golden"><li><span><b>Acolha:</b> reconheça o sentimento em uma frase ("entendo, esperar a entrega atrasada é chato mesmo").</span></li><li><span><b>Entenda:</b> faça uma pergunta para saber o que de fato aconteceu ou preocupa.</span></li><li><span><b>Explique sem se defender:</b> diga o que está incluso, o que houve ou qual é a regra, sem culpar o cliente.</span></li><li><span><b>Ofereça um próximo passo:</b> uma opção concreta, com prazo para o retorno.</span></li><li><span><b>Escale quando precisar:</b> se envolver reembolso, saúde, ameaça ou cliente muito irritado, passe para o dono.</span></li></ol></div>`,
        `<div class="card"><h3>Preço, atraso e reclamação</h3><p><b>Preço:</b> quando alguém diz "está caro", não baixe o valor na hora. Explique o que está incluso e, se o negócio tiver, ofereça uma opção menor. No pet shop, o banho simples custa menos que o banho com tosa. <b>Atraso:</b> avise antes de o cliente perguntar, peça desculpas sem desculpas esfarrapadas e dê um novo prazo realista. <b>Reclamação:</b> agradeça por avisar, peça uma foto ou detalhe se precisar e diga quando a pessoa terá resposta. Nunca discuta em público, como nos comentários de uma avaliação: responda com educação e leve a conversa para o privado.</p></div>`,
        `<div class="code">Atraso (confeitaria):
Oi, [NOME]. Peço desculpas: o seu bolo vai atrasar cerca de [TEMPO] por causa de [MOTIVO REAL]. Ele fica pronto às [NOVO HORÁRIO]. Se esse horário não funcionar, me avise que a [NOME DO DONO] fala com você agora mesmo.</div>`,
        `<div class="tw"><table class="tbl"><tr><th>Situação</th><th>A mensagem resolve</th><th>Passe para o dono</th></tr><tr><td>"Está caro"</td><td>Explicar o que está incluso e opções</td><td>Pedido de desconto fora da política</td></tr><tr><td>Pequeno atraso</td><td>Aviso com desculpas e novo prazo</td><td>Atraso grande ou prejuízo ao cliente</td></tr><tr><td>Reclamação</td><td>Acolher e marcar retorno</td><td>Reembolso, defeito, cliente muito irritado</td></tr></table></div>`,
        `<div class="card"><h3>Erros comuns e ética</h3><p>Responder no impulso; usar ironia; culpar o motoboy, o fornecedor ou o próprio cliente; prometer reembolso ou brinde sem autorização do dono; e esconder um problema esperando que o cliente não perceba. A mensagem pronta é um ponto de partida: em casos difíceis, ela deve ser ajustada à conversa real, nunca colada sem ler. No guia de uso, deixe escrito quem decide sobre desconto, troca e reembolso.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que, quando um amigo está chateado, primeiro a gente escuta e só depois explica.</div>`
      ],
      ch:[
        { who:'Rosana, 42 anos, dona de um pet shop', says:'Uma cliente disse que o banho está caro e pediu 30% de desconto. Quero uma resposta pronta para isso.',
          q:'Qual resposta o pacote deve trazer?',
          opts:[
            {t:'Dar os 30% na hora, para não perder a cliente.', ok:false, why:'Desconto automático desvaloriza o serviço e cria uma regra que o negócio não decidiu.'},
            {t:'Acolher a dúvida, explicar o que está incluso no banho e oferecer uma opção mais simples, se existir; desconto fora da política fica com a dona.', ok:true, why:'Explicar valor e oferecer alternativas respeita a cliente e o negócio. Exceções de preço são decisão da dona.'},
            {t:'Responder que quem acha caro deve procurar outro lugar.', ok:false, why:'Resposta ríspida perde a cliente e pode virar avaliação negativa.'}
          ]},
        { who:'Wagner, 35 anos, dono de uma hamburgueria com delivery', says:'Quando o pedido atrasa, a gente só responde se o cliente reclamar, e sempre diz que a culpa é do motoboy.',
          q:'Como melhorar o pacote dele?',
          opts:[
            {t:'Manter assim, porque o atraso realmente é culpa do motoboy.', ok:false, why:'Culpar terceiros não resolve nada para o cliente e passa desorganização.'},
            {t:'Criar uma mensagem que promete brinde em todo atraso.', ok:false, why:'Promessa de brinde sem decisão do dono pode virar custo e conflito. Não cabe ao pacote decidir isso.'},
            {t:'Criar uma mensagem de aviso proativo: desculpas, motivo real em poucas palavras e novo horário estimado, enviada antes de o cliente perguntar.', ok:true, why:'Avisar antes mostra cuidado e reduz a irritação. O cliente quer saber quando chega, não de quem é a culpa.'}
          ]},
        { who:'Elaine, 51 anos, dona de uma loja de móveis planejados', says:'Um cliente escreveu furioso dizendo que o armário chegou riscado e que vai me processar. A recepcionista quer usar a resposta rápida de reclamação.',
          q:'Qual é a orientação certa?',
          opts:[
            {t:'Usar só a resposta rápida para acolher e marcar o retorno, e passar o caso imediatamente para a dona decidir troca ou conserto.', ok:true, why:'Defeito com cliente irritado e ameaça de processo pedem decisão humana. A mensagem só acolhe e organiza o próximo passo.'},
            {t:'Responder com a política de troca completa e encerrar a conversa.', ok:false, why:'Despejar regras num cliente furioso aumenta a raiva. Primeiro acolher, depois resolver com quem decide.'},
            {t:'Não responder até o cliente se acalmar.', ok:false, why:'O silêncio aumenta a irritação e a chance de o caso piorar.'}
          ]}
      ]},
    { id:'3.7', title:'Opt-in na prática: formulário e registro de consentimento', min:12,
      body:[
        `<div class="card analogy"><h3>📋 A lista de espera do restaurante</h3><p>No restaurante cheio, você mesmo escreve o nome na lista e diz quantas pessoas são. Ninguém coloca o seu nome sem perguntar, e se você desistir, risca. O opt-in funciona assim: a pessoa escolhe entrar, sabe para que está entrando e consegue sair.</p></div>`,
        `<div class="term"><b>Opt-in</b> = a pessoa marca, por vontade própria, que quer receber mensagens. <b>Finalidade</b> = para que o dado vai ser usado. <b>Registro de consentimento</b> = anotação de quem aceitou, quando e para quê. <b>Caixa pré-marcada</b> = aceite que já vem marcado; não vale como escolha livre.</div>`,
        `<div class="card"><h3>Exemplo resolvido: a pizzaria que quer mandar o cardápio da semana</h3><p><b>Antes:</b> um formulário "Cadastre-se e concorra a uma pizza!" pedia nome, CPF, data de nascimento, endereço e WhatsApp. Embaixo, uma caixa já marcada: "Aceito receber ofertas da pizzaria e de parceiros".</p></div>`,
        `<div class="card"><h3>Os problemas</h3><ol class="golden"><li><span>Dados demais: para mandar o cardápio, CPF e data de nascimento não são necessários.</span></li><li><span>Caixa pré-marcada: a pessoa não escolheu de verdade.</span></li><li><span>"Parceiros": abre a porta para repassar a lista a outras empresas.</span></li><li><span>Não diz com que frequência chega nem como sair.</span></li><li><span>Sorteio misturado: promoção com sorteio pode exigir autorização do governo; o dono deve consultar antes.</span></li></ol></div>`,
        `<div class="code">Depois (formulário enxuto):
Nome: ______   WhatsApp: ______
[ ] Quero receber pelo WhatsApp o cardápio da semana e as promoções da Pizzaria [NOME], no máximo 1 vez por semana. Meu número não será repassado a ninguém. Posso sair quando quiser respondendo SAIR.
(caixa obrigatória e desmarcada)</div>`,
        `<div class="card"><h3>O registro que protege o negócio</h3><p>O Google Formulários grava a data e a hora de cada resposta numa planilha. Acrescente uma coluna "saiu em" e anote quando alguém pedir SAIR. Assim, se um cliente perguntar "por que recebo isso?", o dono mostra quando ele aceitou. Combine quem pode abrir essa planilha: ela é uma lista de dados pessoais.</p></div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><p>Planilha compartilhada com "qualquer pessoa com o link"; esquecer de tirar da lista quem pediu para sair; usar o aceite de lembretes de horário para mandar promoções, que é outra finalidade; e importar a lista antiga de clientes como se todos tivessem aceitado. Para esses contatos antigos, mande uma única mensagem perguntando se querem continuar recebendo.</p></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (Google Formulários)</h3><ol class="golden"><li><span>Crie um formulário com só dois dados: nome e WhatsApp.</span></li><li><span>Escreva você o texto do aceite: o que a pessoa recebe, com que frequência e como sai.</span></li><li><span>Deixe a caixa obrigatória e desmarcada.</span></li><li><span>Responda com dados fictícios, abra a planilha, confira a data e a hora e crie a coluna "saiu em".</span></li><li><span>Revise o compartilhamento da planilha para que só você tenha acesso.</span></li></ol><p>🔒 Nos testes, use dados inventados, nunca o número de outra pessoa.</p></div>`
      ],
      ch:[
        { who:'Marcelo, 40 anos, dono de uma loja de suplementos', says:'Meu formulário de cadastro já vem com a caixa "aceito receber promoções" marcada. Assim ninguém esquece de marcar.',
          q:'Qual é o ajuste necessário?',
          opts:[
            {t:'Nenhum: se a pessoa não quisesse, desmarcaria.', ok:false, why:'Aceite que já vem marcado não mostra escolha da pessoa. Muita gente nem percebe a caixa.'},
            {t:'Deixar a caixa desmarcada, com texto claro sobre o que, com que frequência e como sair, e registrar quem marcou.', ok:true, why:'Consentimento vale quando a pessoa escolhe sabendo o que vai receber, e o registro mostra isso depois.'},
            {t:'Tirar a caixa e cadastrar todo mundo que comprar na loja.', ok:false, why:'Comprar não é aceitar divulgação. Sem escolha, a lista vira fonte de denúncias.'}
          ]},
        { who:'Patrícia, 35 anos, dona de um estúdio de pilates', says:'As alunas aceitaram receber lembrete de aula. Posso usar esses mesmos números para mandar promoção de uma loja de roupas fitness parceira?',
          q:'Qual é a orientação correta?',
          opts:[
            {t:'Sim, porque as alunas já aceitaram receber mensagens do estúdio.', ok:false, why:'Elas aceitaram lembrete de aula, não promoção de terceiros. A finalidade mudou.'},
            {t:'Sim, desde que mande à noite, quando elas têm tempo de ler.', ok:false, why:'O horário não resolve a falta de consentimento para aquela finalidade.'},
            {t:'Não usar para isso; se quiser divulgar a parceira, perguntar antes quem quer receber, com opção de sair.', ok:true, why:'Cada finalidade pede o próprio aceite. Perguntar antes respeita as alunas e protege o número do estúdio.'}
          ]}
      ]},
    { id:'3.8', title:'Segurança na entrega: acessos, golpes e encerramento do projeto', min:12,
      body:[
        `<div class="card analogy"><h3>🔑 A chave do eletricista</h3><p>Quando você viaja e deixa a chave com o eletricista para ele trocar a fiação, espera que ele mexa só no quadro de luz, não abra suas gavetas e devolva a chave no fim. Sem cópia. Quem configura o WhatsApp ou o LinkedIn de um cliente recebe uma chave parecida, e precisa devolvê-la do mesmo jeito.</p></div>`,
        `<div class="term"><b>Código de verificação</b> = número de 6 dígitos que o WhatsApp manda por SMS para ativar a conta num aparelho. <b>Verificação em duas etapas</b> = PIN extra, criado pelo dono, pedido de tempos em tempos. <b>Encerramento</b> = etapa final em que você apaga dados e remove os seus acessos.</div>`,
        `<div class="card"><h3>Exemplo resolvido: a configuração de uma loja de calçados</h3><p><b>Antes:</b> o freelancer pediu por mensagem a senha do e-mail e o código que chegou por SMS, salvou um backup das conversas no próprio drive "para consultar" e ficou com a planilha de contatos. Meses depois, ninguém sabia quem tinha acesso a quê.</p></div>`,
        `<div class="flows"><div class="flow old"><h4>Jeito arriscado</h4><div class="node">Pede senha e código → guarda conversas e contatos → nunca remove o acesso</div></div><div class="flow new"><h4>Jeito seguro</h4><div class="node">Cliente opera o próprio celular numa chamada → ativa o PIN de duas etapas → você trabalha só com os modelos → no fim, apaga arquivos e sai dos acessos</div></div></div>`,
        `<div class="card"><h3>Checklist de encerramento</h3><ol class="golden"><li><span>Apague prints e arquivos com dados de clientes finais.</span></li><li><span>Remova o seu acesso de documentos, planilhas e páginas de empresa.</span></li><li><span>Confirme com o dono que o PIN de duas etapas está ativo e só ele sabe.</span></li><li><span>Entregue uma lista do que foi configurado e onde.</span></li><li><span>Guarde só o necessário para você: proposta, combinado e versão final dos modelos, sem contatos.</span></li></ol></div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><p><b>Pedir ou repassar o código de 6 dígitos:</b> é o golpe mais comum de clonagem de WhatsApp. Ninguém deve enviar esse código a ninguém, nem a você. <b>Pedir senha do LinkedIn:</b> o cliente pode colar os textos, ou dar acesso de administrador na página da empresa pelos recursos oficiais. <b>Misturar contas de clientes no seu celular pessoal.</b> <b>Ficar com a lista de contatos</b> "por garantia": isso é guardar dado pessoal sem finalidade. Se algo vazar, avise o dono na hora; a ANPD tem orientações sobre incidentes. Inclua também no guia de uso uma frase para os clientes finais, como "nunca pedimos códigos nem Pix por número novo".</p></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (site da ANPD)</h3><ol class="golden"><li><span>No site da ANPD, procure o guia orientativo de segurança da informação para agentes de pequeno porte (se o nome mudar, busque por "segurança").</span></li><li><span>Leia a parte sobre controle de acesso e senhas.</span></li><li><span>Escreva você um checklist de 5 itens para o início e o fim de cada projeto.</span></li><li><span>Escreva uma frase de alerta contra golpes para o guia de uso do cliente.</span></li></ol><p>🔒 No checklist, use exemplos fictícios, sem senhas ou números reais.</p></div>`
      ],
      ch:[
        { who:'Juliano, 29 anos, vai configurar o WhatsApp Business de uma ótica', says:'O dono está viajando. Ele disse que me manda por mensagem o código de 6 dígitos que chegar no celular dele.',
          q:'Qual é a melhor orientação?',
          opts:[
            {t:'Aceitar o código, porque o dono confia nele.', ok:false, why:'Repassar o código é exatamente o caminho dos golpes de clonagem. A confiança não reduz o risco se a mensagem vazar.'},
            {t:'Remarcar para uma chamada em que o próprio dono opera o celular, e ativar o PIN de duas etapas que só ele sabe.', ok:true, why:'O código e o PIN ficam só com o dono. Você orienta a configuração sem ter a chave da conta.'},
            {t:'Pedir o código e apagar a mensagem logo depois.', ok:false, why:'Apagar depois não desfaz o risco: o código já circulou e a conta pode ser ativada em outro aparelho.'}
          ]},
        { who:'Bianca, 31 anos, terminou um pacote para uma imobiliária', says:'Ficou comigo uma planilha com 800 contatos de clientes da imobiliária. Vou guardar, vai que eles pedem algo depois.',
          q:'O que ela deve fazer no encerramento?',
          opts:[
            {t:'Guardar a planilha numa pasta com senha, por segurança.', ok:false, why:'Senha protege, mas não resolve: ela não tem mais finalidade para guardar esses dados.'},
            {t:'Usar os contatos para divulgar o próprio serviço.', ok:false, why:'Os clientes deram os dados à imobiliária. Usar para outra finalidade fere a LGPD e a confiança.'},
            {t:'Apagar a planilha, confirmar ao dono que apagou e manter só a proposta, o combinado e os modelos finais.', ok:true, why:'Sem finalidade, o dado não deve ficar com ela. Confirmar por escrito fecha o projeto com transparência.'}
          ]}
      ]},
    { id:'3.6', title:'Projeto: guia de uso responsável e proposta de preço', min:30,
      body:[
        `<div class="card"><p>Este projeto fecha o curso e prepara você para conversar com um cliente de verdade. Você vai escrever o guia de uso responsável que acompanha o pacote, incluindo como lidar com respostas difíceis, e uma proposta de preço com escopo claro. Use IA se quiser para revisar o texto, mas o raciocínio do preço (horas, valor por hora, pesquisa) deve ser seu.</p></div>`,
        `<div class="card"><h3>Como fica uma boa entrega</h3><p>O guia cabe em uma página, em tópicos curtos: quem pode receber, como sair, frequência, cuidados com dados e quem decide sobre desconto, troca e reembolso. A proposta mostra as opções lado a lado, com o que está incluso, revisões, prazo e valor, e termina com uma linha honesta: "o pacote organiza o atendimento, mas não garante aumento de vendas". Antes de enviar, alguém de fora leu e entendeu tudo sem a sua ajuda.</p></div>`
      ],
      projeto: {
        entrega: 'Um guia de uso responsável de uma página e uma proposta de preço com duas ou três opções de pacote e manutenção.',
        passos: [
          'Escreva o guia: quem pode receber mensagens, como respeitar o SAIR, frequência máxima e quando passar para uma pessoa (preço fora da política, atraso grande, reclamação).',
          'Inclua um resumo simples de cuidados com a LGPD e a recomendação de consultar as regras das plataformas e um advogado em dúvidas.',
          'Estime suas horas e seu valor por hora, e anote como pesquisou os preços da sua região.',
          'Monte duas ou três opções de pacote com escopo, revisões, prazo e uma opção de manutenção.',
          'Peça a alguém de fora para ler o guia e a proposta, anote as dúvidas que surgiram e ajuste o texto.'
        ],
        checklist: [
          'O guia orienta consentimento, descadastro e proteção de dados.',
          'O guia diz quem decide sobre desconto, troca e reembolso e quando a conversa passa para o dono.',
          'A proposta deixa claro o que está incluso, o que é extra e quantas revisões há.',
          'Não há promessa de aumento de vendas nem de resultado garantido.',
          'O preço tem uma justificativa (horas, custos, pesquisa local).'
        ],
        minimo: 350
      } }
  ]}
];

const MODDONE = {
  1: 'Você sabe montar um pacote útil, mapear a jornada do cliente, escrever mensagens que soam humanas e organizar respostas rápidas.',
  2: 'Você sabe criar perfil, posts e mensagens respeitosas no LinkedIn, adaptar o tom a cada público e entregar tudo num formato claro.',
  3: 'Parabéns, você concluiu o curso Pacotes de Mensagens para WhatsApp e LinkedIn! Seu certificado do curso já está disponível. Você sabe orientar o uso com consentimento e LGPD, lidar com objeções com empatia, montar um portfólio honesto e precificar com cautela. Lembre: qualidade e respeito valem mais que promessas.'
};

const PROMPTS = {
  1: [
    { title:'Pacote de mensagens', desc:'Para criar modelos por situação.' }
  ],
  2: [
    { title:'Post de LinkedIn', desc:'Para criar posts profissionais.' }
  ],
  3: [
    { title:'Revisão de consentimento', desc:'Para checar o uso responsável.' }
  ]
};

const THEME = { 1:['#06B6D4','#3B82F6'], 2:['#3B82F6','#06B6D4'], 3:['#06B6D4','#3B82F6'] };
const LIC = { '1.1':'📦','1.2':'💬','1.3':'🗺️','1.4':'⚡','1.5':'📝','1.6':'🛠️','2.1':'💼','2.2':'🗂️','2.3':'🪪','2.4':'👔','2.5':'📬','2.6':'🛠️','3.1':'⚖️','3.2':'📁','3.3':'🚦','3.4':'🧾','3.5':'🤝','3.6':'🛠️','1.7':'🏪','1.8':'🪡','2.7':'📄','2.8':'📅','3.7':'📋','3.8':'🔐' };

return {
  id: 'pacotes-whatsapp-linkedin',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
