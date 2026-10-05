/* Curso: Sites Simples com IA (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🧭', title:'Planejar o site', sub:'O que precisa ter e o que dizer', lessons:[
    { id:'1.1', title:'O que um site simples precisa ter', min:10,
      body:[
        `<div class="card analogy"><h3>🧭 A placa e a porta da loja</h3><p>Quem passa na rua precisa saber o que a loja vende e como entrar. Uma placa clara e uma porta fácil de abrir valem mais que dez enfeites. Um site simples faz o mesmo papel: diz em poucos segundos o que o negócio faz, para quem, e qual é o próximo passo. Se o visitante precisa procurar o telefone, a porta está emperrada.</p></div>`,
        `<div class="term"><b>Página única</b> = site de uma só página, com várias seções que se rolam. <b>Chamada para ação</b> = o botão ou convite para o próximo passo, como "chame no WhatsApp". <b>Prova social</b> = depoimentos, trabalhos e números reais que mostram que o negócio é confiável.</div>`,
        `<div class="card"><h3>Sete blocos para um negócio local</h3><ol class="golden"><li><span>Topo: o que faz e para quem.</span></li><li><span>Serviços.</span></li><li><span>Quem somos.</span></li><li><span>Prova social, com depoimentos autorizados e fotos reais.</span></li><li><span>Contato, com botão de WhatsApp.</span></li><li><span>Endereço e horário.</span></li><li><span>Aviso de privacidade, se houver formulário.</span></li></ol>
          <p>Uma mensagem principal e uma ação principal. Pergunte ao cliente: "o que você quer que o visitante faça?" Menos é mais: um site simples e claro vende mais do que um site grande e confuso.</p></div>`,
        `<div class="card"><h3>Por que pequeno negócio precisa de site, se já tem Instagram?</h3><p>A rede social é ótima para mostrar o dia a dia, mas o negócio não manda nela: o alcance muda, a conta pode ser bloqueada e a informação importante (horário, endereço, preços, como agendar) se perde no meio das publicações. O site é o "cartão de visitas fixo": o link que vai na bio, no Google e no cartão impresso, com tudo organizado num lugar só.</p>
          <p>Para muitos negócios locais, como uma padaria de bairro, um salão ou uma oficina, uma página única resolve. Site de várias páginas faz sentido quando há muitos serviços diferentes, cardápio extenso ou conteúdo que cresce (como um blog). Comece pequeno e cresça com base no que os visitantes realmente procuram.</p></div>`,
        `<div class="why-chain"><b>Por que começar enxuto?</b> Porque página curta fica pronta mais rápido. Porque ficando pronta rápido, o cliente começa a receber contatos antes. Porque recebendo contatos, vocês descobrem o que falta de verdade. E assim a próxima versão melhora com dados, e não com palpite.</div>`,
        `<div class="card"><h3>Erros comuns de quem está começando</h3><ul><li>Encher o topo de frases genéricas ("qualidade e compromisso") e não dizer o que o negócio faz.</li><li>Esconder o contato no rodapé.</li><li>Usar fotos de banco de imagens que não parecem o negócio real.</li><li>Colocar menu com dez itens numa página que tem quatro seções.</li><li>Esquecer o horário de funcionamento, que é uma das informações mais procuradas.</li></ul></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma loja precisa de uma placa clara e de uma porta fácil de abrir, e como isso se parece com um site.</div>`
      ],
      ch:[
        { who:'Alex, 26 anos, vai fazer o site de um cliente', says:'Vou fazer com 12 páginas, menu enorme e 5 animações. Quanto mais, mais profissional.',
          q:'Qual é o melhor começo?',
          opts:[
            {t:'Fazer o site grande, porque o cliente vai achar impressionante.', ok:false, why:'Sites grandes e confusos demoram mais, custam mais e deixam o visitante perdido.'},
            {t:'Começar com uma página clara: o que faz, serviços, sobre, prova social e contato com botão de WhatsApp, e ajustar conforme o uso.', ok:true, why:'Uma página enxuta cumpre o papel principal e cresce depois, com base em dados reais.'},
            {t:'Fazer só a página de contato, sem explicar o que o negócio faz.', ok:false, why:'Sem dizer o que o negócio oferece, o visitante não tem motivo para entrar em contato.'}
          ]},
        { who:'Seu Joaquim, 61 anos, dono de uma padaria de bairro', says:'Eu já tenho Instagram com 2 mil seguidores. Para que eu vou querer site?',
          q:'Qual é a resposta mais honesta e útil?',
          opts:[
            {t:'Dizer que sem site a padaria vai fechar em poucos meses.', ok:false, why:'É uma promessa de medo, exagerada e falsa. Muitos negócios vivem só de indicação.'},
            {t:'Dizer que o Instagram é inútil e que ele deve apagar a conta.', ok:false, why:'A rede social continua útil para mostrar o dia a dia. O site complementa, não substitui.'},
            {t:'Explicar que o site é um endereço fixo, que ele controla, com horário, endereço, encomendas e WhatsApp organizados, e que ajuda quem procura no Google.', ok:true, why:'É um benefício real e concreto, sem exagero. O cliente decide com informação.'}
          ]},
        { who:'Lívia, 24 anos, montando o site de um salão de beleza', says:'No topo eu coloquei "Excelência e compromisso desde 2015". Ficou elegante, né?',
          q:'O que melhoraria esse topo?',
          opts:[
            {t:'Trocar por algo que diga o que faz, para quem e onde, como "Cortes, coloração e escova no Jardim América, com horário marcado pelo WhatsApp", e um botão de agendar.', ok:true, why:'O visitante entende em segundos o que é o negócio e o que fazer em seguida.'},
            {t:'Manter a frase e colocar uma animação chamativa para prender a atenção.', ok:false, why:'Animação não resolve a falta de informação. Frase genérica não diz o que o salão oferece.'},
            {t:'Tirar o topo e começar direto pelo formulário de contato.', ok:false, why:'Sem saber o que o salão faz, quase ninguém preenche formulário.'}
          ]}
      ]},
    { id:'1.2', title:'Textos do site com IA', min:10,
      body:[
        `<div class="card analogy"><h3>✍️ O vendedor do balcão</h3><p>O bom vendedor diz em uma frase o que oferece e o que o cliente ganha com isso. O texto do site precisa fazer exatamente isso. Ele não recita a história da empresa antes de responder à pergunta do cliente: primeiro resolve a dúvida, depois conta o resto.</p></div>`,
        `<div class="term"><b>Mensagem principal</b> = a ideia central que o visitante deve entender em poucos segundos. <b>Benefício</b> = o que o cliente ganha, e não só o que o negócio faz. <b>Texto honesto</b> = texto sem exageros e sem informações inventadas.</div>`,
        `<div class="card"><h3>Uma estrutura simples</h3><p>Título (para quem e qual resultado), subtítulo, 3 benefícios, como funciona em 3 passos, perguntas frequentes e chamada para ação. Peça à IA usando fatos reais passados pelo cliente. Evite promessas como "o melhor" ou "garantido", e nunca coloque depoimentos inventados: só use depoimentos reais, com autorização de quem escreveu. Revise preços, horários e endereço. Prefira frases curtas, com a linguagem do cliente final.</p></div>`,
        `<div class="card"><h3>Primeiro os fatos, depois a IA</h3><p>A IA escreve bem, mas não conhece o negócio. Se você pedir "escreva o site de um pet shop", ela vai inventar serviços, preços e até anos de experiência. O caminho é juntar os fatos antes, numa conversa de 20 minutos com o cliente:</p>
          <ol class="golden"><li><span>O que o negócio faz e o que mais vende.</span></li><li><span>Quem é o cliente típico (bairro, idade, o que valoriza).</span></li><li><span>O que diferencia de verdade (atende em domicílio? abre domingo? tem estacionamento?).</span></li><li><span>Perguntas que os clientes mais fazem no WhatsApp.</span></li><li><span>Dados exatos: endereço, horários, formas de pagamento, telefone.</span></li></ol>
          <p>Com essa lista em mãos, você escreve o seu próprio pedido à IA: diga o tipo de negócio, o público, o tom (simples, acolhedor, direto), os fatos e o que ela <b>não</b> pode inventar. Depois, leia tudo em voz alta e corte o que soar falso ou exagerado.</p></div>`,
        `<div class="flows"><div class="flow old"><b>Texto que afasta</b><div class="node">"Somos referência em soluções automotivas de excelência."</div></div><div class="flow new"><b>Texto que conversa</b><div class="node">"Troca de óleo, freio e suspensão na Vila Nova. Orçamento sem compromisso pelo WhatsApp."</div></div></div>`,
        `<div class="card"><h3>Perguntas frequentes valem ouro</h3><p>Peça ao cliente para olhar as últimas conversas do WhatsApp e listar as 5 perguntas que mais se repetem ("aceita cartão?", "precisa agendar?", "atende plano?"). Responder isso no site economiza tempo do dono e passa segurança ao visitante. Revise cada resposta com o cliente antes de publicar.</p></div>`,
        `<div class="card"><h3>Revisão final em 4 perguntas</h3><p>Antes de dar o texto por pronto, leia cada seção e pergunte: (1) um desconhecido entende o que o negócio faz em 5 segundos? (2) Tem alguma frase que o dono não conseguiria provar? (3) Os dados de contato, preço e horário estão exatamente iguais aos que ele passou? (4) Soa como o dono fala, ou como propaganda de televisão? Se alguma resposta incomodar, reescreva antes de montar.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que o vendedor do balcão diz para convencer alguém a comprar, sem enganar.</div>`
      ],
      ch:[
        { who:'Tatiana, 31 anos, cria sites para pequenos negócios', says:'A IA escreveu depoimentos de clientes para o site e eu coloquei. Dão confiança.',
          q:'Qual é o problema?',
          opts:[
            {t:'Nenhum: depoimentos aumentam a confiança, e ninguém vai conferir.', ok:false, why:'Depoimentos inventados são enganosos e podem gerar problemas com clientes e com a lei.'},
            {t:'Nenhum, desde que ela troque os nomes por outros.', ok:false, why:'Trocar o nome não torna o depoimento verdadeiro. O problema é ele ser falso.'},
            {t:'Os depoimentos são inventados. O certo é remover e usar só depoimentos reais, com autorização de quem escreveu.', ok:true, why:'Depoimentos reais e autorizados constroem confiança de verdade.'}
          ]},
        { who:'Bruno, 28 anos, fazendo o site de um pet shop', says:'Pedi para a IA "escrever o site de um pet shop" e ela colocou banho a R$ 40, hotel para cães e 15 anos de experiência. Ficou ótimo.',
          q:'O que Bruno deveria fazer agora?',
          opts:[
            {t:'Publicar, porque são valores médios de mercado e o cliente ajusta depois.', ok:false, why:'Preço errado no site gera conflito no balcão. O cliente pode nem oferecer hotel.'},
            {t:'Conferir cada informação com o dono, trocar tudo pelos fatos reais e, da próxima vez, passar os fatos no pedido e dizer o que a IA não pode inventar.', ok:true, why:'A IA não conhece o negócio. Fatos reais no pedido e revisão com o dono evitam informação falsa.'},
            {t:'Apagar só os 15 anos de experiência e manter o resto.', ok:false, why:'Preços e serviços também foram inventados e precisam ser conferidos.'}
          ]},
        { who:'Dra. Camila, 35 anos, nutricionista', says:'Quero que o site diga "emagreça 10 kg em 30 dias garantido". Isso vende muito.',
          q:'Como orientar a cliente?',
          opts:[
            {t:'Escrever como ela pediu, porque o site é dela e a responsabilidade também.', ok:false, why:'Você também assina o trabalho. Promessa de resultado garantido em saúde é enganosa e pode ferir regras do conselho profissional.'},
            {t:'Trocar por "resultados incríveis" para ficar mais leve.', ok:false, why:'Continua sendo exagero vago. O ideal é descrever o atendimento real.'},
            {t:'Sugerir um texto sobre o que ela faz de verdade (consulta, plano alimentar, acompanhamento) e lembrar que conselhos profissionais têm regras de publicidade que ela deve conferir.', ok:true, why:'Texto honesto protege a cliente e você, e ainda explica bem o serviço.'}
          ]}
      ]},
    { id:'1.3', title:'A página única por dentro: seções, botão e mapa', min:10,
      body:[
        `<div class="card analogy"><h3>🏪 A vitrine bem arrumada</h3><p>Numa vitrine boa, o olho bate primeiro no produto principal, depois nos detalhes, e por fim no preço e na porta. Ninguém coloca o caixa na vitrine e o produto lá no fundo. A página única segue a mesma ordem: primeiro o que importa, depois o que convence, por fim como chegar.</p></div>`,
        `<div class="term"><b>Seção</b> = um bloco da página com um assunto só (serviços, sobre, contato). <b>Botão flutuante</b> = botão que fica fixo no canto da tela enquanto a pessoa rola, geralmente o do WhatsApp. <b>Link do WhatsApp</b> = endereço que abre uma conversa direto com o número do negócio. <b>Mapa incorporado</b> = mapa do Google colocado dentro da página.</div>`,
        `<div class="card"><h3>A ordem que funciona para negócio local</h3><ol class="golden"><li><span><b>Topo:</b> nome, frase do que faz e para quem, e o botão principal ("Agendar pelo WhatsApp").</span></li><li><span><b>Serviços ou produtos:</b> 3 a 6 itens com uma linha cada. Preço só se o cliente quiser mostrar.</span></li><li><span><b>Como funciona:</b> 3 passos ("chame no WhatsApp, escolha o horário, venha").</span></li><li><span><b>Prova social:</b> fotos reais e depoimentos autorizados.</span></li><li><span><b>Sobre:</b> quem está por trás, em poucas linhas, com foto.</span></li><li><span><b>Perguntas frequentes.</b></span></li><li><span><b>Contato e localização:</b> WhatsApp, telefone, endereço, mapa e horários.</span></li><li><span><b>Rodapé:</b> redes sociais, CNPJ se houver, e link do aviso de privacidade.</span></li></ol></div>`,
        `<div class="card"><h3>O botão de WhatsApp</h3><p>O link oficial tem o formato abaixo: o número vem com código do país (55) e DDD, sem espaços nem traços. Dá para incluir uma mensagem inicial, o que ajuda o dono a saber que o contato veio do site.</p></div>`,
        `<div class="code">https://wa.me/5511999999999?text=Olá,%20vim%20pelo%20site%20e%20quero%20agendar</div>`,
        `<div class="card"><p>Teste o link no celular antes de entregar: o número errado num botão principal é um dos erros mais caros que existem, porque o cliente simplesmente deixa de receber contatos e ninguém percebe. Repita o botão no topo, no meio e no contato, ou use o botão flutuante.</p></div>`,
        `<div class="card"><h3>Mapa e horários</h3><p>No Google Maps, procure o endereço, clique em "Compartilhar" e depois em "Incorporar um mapa" para obter o código. Escreva também o endereço em texto (o mapa pode não carregar em conexão fraca) e uma referência ("ao lado da farmácia"). Horários devem ser exatamente os reais, incluindo feriados e intervalo de almoço. Se o negócio atende só em domicílio, não coloque mapa: escreva os bairros atendidos.</p></div>`,
        `<div class="why-chain"><b>Por que tão poucas seções?</b> Porque no celular cada seção a mais é mais rolagem. Porque mais rolagem é mais gente desistindo antes do contato. Porque o objetivo do site do pequeno negócio é gerar conversa, e não ser lido inteiro.</div>`,
        `<div class="card"><h3>Exemplo rápido: pet shop de bairro</h3><p>Topo: "Banho e tosa com hora marcada no Jardim Europa" e botão "Agendar no WhatsApp". Serviços: banho, tosa, hidratação, rações. Como funciona: chame, escolha o horário, traga o pet (ou peça busca). Prova social: fotos reais de pets atendidos, com autorização dos tutores. Contato: mapa, horários e o botão de novo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> desenhe numa folha os blocos de uma página única, de cima para baixo, e explique a alguém por que cada um está naquela posição.</div>`
      ],
      ch:[
        { who:'Rafael, 30 anos, montando o site de uma oficina mecânica', says:'Coloquei o botão do WhatsApp só no rodapé, bem no final. Quem quiser, rola até lá.',
          q:'O que você recomendaria?',
          opts:[
            {t:'Deixar assim, porque botão repetido parece insistente.', ok:false, why:'No celular, muita gente não rola até o fim. A ação principal precisa estar fácil.'},
            {t:'Trocar o botão por um formulário longo no rodapé.', ok:false, why:'Formulário longo dá mais trabalho que um toque no WhatsApp e reduz contatos.'},
            {t:'Colocar o botão também no topo e após os serviços, ou usar um botão flutuante, e testar o link no celular.', ok:true, why:'A ação principal fica sempre à mão, e o teste garante que o número está certo.'}
          ]},
        { who:'Dona Cida, 54 anos, faz bolos e salgados por encomenda em casa', says:'Coloca meu endereço completo e o mapa da minha casa no site, igual às lojas.',
          q:'Qual é a melhor orientação?',
          opts:[
            {t:'Como ela não atende no local, sugerir não expor o endereço residencial: informar bairros de entrega ou ponto de retirada combinado pelo WhatsApp.', ok:true, why:'Protege a privacidade e a segurança dela, e o cliente final recebe a informação que importa.'},
            {t:'Colocar o mapa, porque todo site precisa de mapa.', ok:false, why:'Mapa só faz sentido quando há atendimento no local. Expor a casa sem necessidade traz riscos.'},
            {t:'Inventar um endereço comercial para parecer loja.', ok:false, why:'Endereço falso engana o cliente e gera problemas.'}
          ]},
        { who:'Paulo, 27 anos, testando o site de uma loja de roupas', says:'O link do WhatsApp ficou wa.me/(11) 98888-7777. Tá certo, é o número da loja.',
          q:'O que está errado?',
          opts:[
            {t:'Nada: o WhatsApp entende qualquer formato.', ok:false, why:'Parênteses, espaços e traços quebram o link, e o botão não abre a conversa.'},
            {t:'O número deve ir com 55 e DDD, só dígitos, como wa.me/5511988887777, e o link precisa ser testado no celular.', ok:true, why:'Esse é o formato que funciona. Testar evita um botão quebrado na ação principal.'},
            {t:'Falta colocar o e-mail da loja no lugar do número.', ok:false, why:'O link do WhatsApp usa o número de telefone, não e-mail.'}
          ]}
      ]},
    { id:'1.4', title:'Escolher a ferramenta certa para cada cliente', min:10,
      body:[
        `<div class="card analogy"><h3>🚗 Carro alugado ou carro próprio</h3><p>Quem precisa ir a um lugar amanhã aluga um carro: é rápido, vem pronto, mas tem regras e mensalidade. Quem quer liberdade compra o próprio carro, mas cuida da manutenção. Não existe a escolha certa para todo mundo: depende de quem vai dirigir, de quanto quer gastar e de quanto quer mexer.</p></div>`,
        `<div class="term"><b>Construtor de sites</b> = plataforma visual de arrastar e soltar, com modelos prontos. <b>HTML gerado por IA</b> = arquivos de código criados com ajuda de uma IA ou do Cursor e publicados numa hospedagem de site estático. <b>Autonomia do cliente</b> = quanto o próprio cliente consegue mudar sozinho depois da entrega. <b>Custo recorrente</b> = o que se paga todo mês ou todo ano para manter o site.</div>`,
        `<div class="tw"><table class="tbl"><tr><th>Critério</th><th>Construtor de sites</th><th>HTML gerado por IA</th></tr><tr><td>Rapidez para começar</td><td>Alta, com modelos prontos</td><td>Média, depende de você testar em partes</td></tr><tr><td>Cliente edita sozinho</td><td>Mais fácil, editor visual</td><td>Mais difícil, precisa de manual ou de você</td></tr><tr><td>Custo</td><td>Plano gratuito com limites (marca da plataforma, sem domínio próprio) ou mensalidade</td><td>Hospedagem estática costuma ter opção gratuita; domínio à parte</td></tr><tr><td>Controle e velocidade</td><td>Menor controle, páginas às vezes pesadas</td><td>Controle total, página leve</td></tr><tr><td>Dependência</td><td>Preso à plataforma</td><td>Arquivos podem mudar de hospedagem</td></tr></table></div>`,
        `<div class="card"><h3>Perguntas para decidir com o cliente</h3><ol class="golden"><li><span>Quem vai atualizar o site? O próprio dono, um funcionário, ou você?</span></li><li><span>Com que frequência muda alguma coisa (cardápio semanal, promoções, fotos)?</span></li><li><span>Quanto o cliente aceita pagar por mês, sem susto?</span></li><li><span>Precisa de algo especial, como agenda online, loja virtual ou área de membros?</span></li><li><span>O cliente já usa alguma plataforma (por exemplo, uma loja virtual) que deveria ser aproveitada?</span></li></ol>
          <p>Regra prática: se o dono quer mexer sozinho toda semana, um construtor costuma servir melhor. Se o site muda pouco e ele prefere pagar você por pequenas alterações, uma página em HTML leve e bem testada é ótima. Se precisa vender online com estoque e pagamento, considere uma plataforma de loja, e não um site do zero.</p></div>`,
        `<div class="card"><h3>Cuidados com qualquer escolha</h3><p>Planos gratuitos, limites e preços das plataformas mudam com frequência: confira as condições atuais antes de recomendar e não prometa que "será gratuito para sempre". Crie as contas com o e-mail do cliente. Leia se o plano gratuito permite uso comercial. E não escolha a ferramenta só porque é a que você sabe usar: escolha pelo que o cliente vai conseguir manter.</p></div>`,
        `<div class="why-chain"><b>Por que perguntar quem vai atualizar?</b> Porque site desatualizado mostra horário e preço errados. Porque informação errada faz o cliente final perder a viagem. Porque isso vira reclamação contra o negócio, e o site, que deveria ajudar, passa a atrapalhar.</div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a um amigo, em 1 minuto, quando você indicaria um construtor de sites e quando faria a página com ajuda da IA, usando o exemplo do carro alugado e do carro próprio.</div>`
      ],
      ch:[
        { who:'Fernanda, 33 anos, dona de uma loja de roupas', says:'Toda semana chega coleção nova e eu mesma quero trocar as fotos e os destaques, sem depender de ninguém.',
          q:'Qual caminho faz mais sentido?',
          opts:[
            {t:'Página em HTML feita pela IA, e ela aprende a programar.', ok:false, why:'Exigir que a cliente aprenda código para trocar fotos toda semana é pouco realista.'},
            {t:'Um construtor de sites ou plataforma de loja com editor visual, contas no e-mail dela, e um treinamento curto de como trocar fotos.', ok:true, why:'Ela atualiza com frequência e quer autonomia: o editor visual atende isso.'},
            {t:'Qualquer um, porque a ferramenta não faz diferença.', ok:false, why:'A ferramenta muda quem consegue manter o site atualizado. Faz muita diferença.'}
          ]},
        { who:'Seu Antônio, 58 anos, dono de uma chaveiro', says:'Meu site vai mudar quase nunca. Quero o mais barato por mês e que abra rápido no celular.',
          q:'Qual é uma boa recomendação?',
          opts:[
            {t:'Plano pago caro de construtor, com recursos que ele não vai usar.', ok:false, why:'Ele pediu baixo custo e quase nenhuma mudança. Pagar por recursos sem uso não faz sentido.'},
            {t:'Não fazer site, porque chaveiro não precisa.', ok:false, why:'Quem procura chaveiro com urgência pesquisa no celular. Um site simples ajuda.'},
            {t:'Uma página em HTML leve, publicada numa hospedagem estática, com domínio no nome dele, e alterações pontuais feitas por você mediante combinado.', ok:true, why:'Custo recorrente baixo, página rápida e regra clara para alterações raras.'}
          ]},
        { who:'Juliana, 29 anos, cria sites há 3 meses', says:'Só sei usar um construtor, então indico ele para todo cliente, até para quem quer vender 300 produtos online com estoque.',
          q:'Qual é o problema?',
          opts:[
            {t:'Ela escolhe pela própria comodidade, e não pela necessidade do cliente. Para loja com estoque e pagamento, uma plataforma de loja virtual pode ser mais adequada, ou indicar outro profissional.', ok:true, why:'A ferramenta deve servir ao cliente. Reconhecer limites e indicar quem sabe também é profissionalismo.'},
            {t:'Nenhum: qualquer construtor faz loja com 300 produtos igual.', ok:false, why:'Recursos e limites variam muito. É preciso conferir se atende estoque, frete e pagamento.'},
            {t:'O problema é cobrar pouco. Se cobrar mais, a ferramenta passa a servir.', ok:false, why:'Preço não muda a capacidade da ferramenta.'}
          ]}
      ]},
    { id:'1.5', title:'Conhecer o cliente e o concorrente local antes de escrever', min:10,
      body:[
        `<div class="card analogy"><h3>🔎 O alfaiate antes do corte</h3><p>Um bom alfaiate não corta o tecido antes de tirar as medidas. Ele pergunta para que é a roupa, onde vai ser usada, do que a pessoa gosta e do que não gosta. Site é igual: antes de escrever uma linha, você tira as medidas do negócio. Texto escrito sem conversa fica genérico, serve para qualquer padaria do Brasil e não convence ninguém.</p></div>`,
        `<div class="term"><b>Entrevista de briefing</b> = conversa curta e organizada com o dono para levantar fatos. <b>Diferencial real</b> = algo que o negócio faz de verdade e que o cliente consegue comprovar, como entrega no mesmo dia ou forno a lenha. <b>Concorrente local</b> = quem disputa o mesmo cliente no bairro ou na cidade. <b>Depoimento</b> = fala de um cliente sobre a experiência, publicada só com autorização.</div>`,
        `<div class="card"><h3>Entrevista de 20 minutos em 6 perguntas</h3><ol class="golden"><li><span>O que você vende ou faz, e o que mais sai?</span></li><li><span>Quem é o cliente típico e como ele chega até você (bairro, indicação, Instagram)?</span></li><li><span>Quais são as 5 perguntas que mais chegam no WhatsApp?</span></li><li><span>Por que o cliente escolhe você e não o vizinho? Peça um exemplo concreto.</span></li><li><span>O que você não faz ou não quer atrair (por exemplo, não atende fora do bairro)?</span></li><li><span>Tem fotos, avaliações ou clientes que topariam dar um depoimento?</span></li></ol></div>`,
        `<div class="card"><h3>Olhar o concorrente sem copiar</h3><p>Pesquise no Google Maps o tipo de negócio e o bairro. Abra 3 concorrentes e anote o que eles destacam, o que falta (horário, preço, como chegar) e o que dizem as avaliações. O objetivo é achar o espaço livre, não copiar texto nem foto. Se todas as pizzarias do bairro falam de "massa artesanal" e nenhuma diz até que horas entrega, a entrega até meia-noite da pizzaria do seu cliente vira destaque.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Diferencial vago</th><th>Diferencial real</th></tr><tr><td>Atendimento de qualidade</td><td>Respondemos no WhatsApp em até 15 minutos, das 8h às 20h</td></tr><tr><td>Os melhores preços</td><td>Corte masculino a partir de R$ 35, com horário marcado</td></tr><tr><td>Tradição</td><td>Padaria da família desde 1998 no Jardim Esperança</td></tr><tr><td>Produtos frescos</td><td>Pão francês saindo do forno às 6h, 11h e 17h</td></tr></table></div>`,
        `<div class="card"><h3>Erros comuns</h3><ul><li>Escrever o site antes de conversar com o dono.</li><li>Aceitar "somos os melhores" sem pedir um exemplo.</li><li>Copiar o texto do concorrente e só trocar o nome.</li><li>Prometer o que o dono não confirmou, como entrega grátis ou horário estendido.</li><li>Inventar depoimento ou publicar print de conversa sem permissão.</li></ul></div>`,
        `<div class="card"><h3>Ética com depoimentos e concorrentes</h3><p>Depoimento só com autorização: peça por mensagem para usar a frase, o primeiro nome e, se houver, a foto. Não edite a fala para parecer mais elogiosa e retire se a pessoa pedir. Com concorrentes, observe só o que é público, sem se passar por cliente para obter informação e sem falar mal de ninguém no site.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> antes de desenhar a casa de alguém, você pergunta quantas pessoas moram lá. Antes de escrever o site, você pergunta ao dono o que ele faz de verdade, o que os clientes perguntam e por que o escolhem, e dá uma olhada nos vizinhos para ver o que ninguém está dizendo.</div>`
      ],
      ch:[
        { who:'Rafael, 27 anos, fazendo o site de uma pizzaria em Campinas', says:'O dono disse que o diferencial é "qualidade e bom atendimento". Vou colocar isso em destaque no topo.', q:'O que Rafael deveria fazer antes?',
          opts:[
            {t:'Colocar assim mesmo, porque foi o próprio dono que disse.', ok:false, why:'Frases vagas servem para qualquer pizzaria e não ajudam o visitante a decidir.'},
            {t:'Pedir exemplos concretos (tempo de entrega, ingredientes, horário) e transformar em frases que o cliente consegue comprovar.', ok:true, why:'Diferencial real é específico e verificável, e isso convence mais do que adjetivos.'},
            {t:'Copiar o diferencial da pizzaria mais bem avaliada do bairro.', ok:false, why:'Copiar é desonesto e ainda pode prometer algo que a pizzaria do cliente não faz.'}
          ]},
        { who:'Juliana, 34 anos, fazendo o site de um salão de manicure em Recife', says:'Achei comentários elogiosos de clientes no Instagram do salão. Vou colocar como depoimentos, com nome e foto.', q:'Qual é o caminho certo?',
          opts:[
            {t:'Pode usar, porque os comentários já são públicos.', ok:false, why:'Público não quer dizer autorizado. Nome e foto são dados pessoais e a imagem tem dono.'},
            {t:'Usar só o texto, trocando o nome por um nome inventado.', ok:false, why:'Depoimento com nome inventado é enganoso, mesmo que a frase seja real.'},
            {t:'Pedir autorização a cada cliente, por mensagem, para usar a frase, o primeiro nome e a foto, e publicar só os autorizados.', ok:true, why:'A autorização respeita a cliente e deixa o depoimento verdadeiro e seguro de usar.'}
          ]},
        { who:'Thiago, 41 anos, fazendo o site de uma oficina mecânica em Goiânia', says:'Pesquisei 3 oficinas do bairro. Uma tem um texto ótimo sobre revisão. Posso usar e só trocar o nome.', q:'O que Thiago deve fazer com a pesquisa?',
          opts:[
            {t:'Usar a pesquisa para ver o que falta nos concorrentes, como orçamento por foto no WhatsApp, e escrever um texto próprio com os fatos da oficina.', ok:true, why:'Pesquisar concorrentes serve para achar o espaço livre, e o texto precisa ser original e verdadeiro.'},
            {t:'Copiar e trocar o nome, porque é texto de internet.', ok:false, why:'Texto de outra empresa tem autor. Copiar é plágio e deixa o site igual ao do vizinho.'},
            {t:'Ignorar os concorrentes, porque pesquisar a concorrência é antiético.', ok:false, why:'Observar o que é público é normal e ajuda a destacar o cliente. Antiético é copiar ou enganar.'}
          ]}
      ]},
    { id:'1.6', title:'Projeto: briefing e mapa de seções de um site real', min:30,
      body:[
        `<div class="card"><p>Agora você vai planejar o site de um negócio de verdade: de um conhecido, de um familiar ou de um comércio do seu bairro (com autorização para usar as informações). Ainda não é para montar o site, e sim para chegar com tudo pronto na hora de montar: os fatos, a ordem das seções e os textos revisados. Pode usar IA para rascunhar textos, mas o pedido é seu e a revisão também.</p></div>`,
        `<div class="card"><p><b>Como fica uma boa entrega:</b> um resumo da entrevista com as respostas do dono, 3 concorrentes observados com o que cada um deixa de dizer, de 2 a 4 diferenciais reais escritos de forma concreta, a ferramenta escolhida com o motivo e a lista de seções em ordem, cada uma com seu texto. No fim, uma lista curta do que ainda falta confirmar com o cliente.</p></div>`
      ],
      projeto:{
        entrega:'Um briefing do negócio com a pesquisa de concorrentes, a escolha da ferramenta justificada e o mapa de seções da página única com os textos de cada seção.',
        passos:[
          'Faça a entrevista de 6 perguntas da lição 1.5 com o dono (ou use um negócio fictício bem detalhado) e observe 3 concorrentes locais, anotando o que falta neles.',
          'Defina a mensagem principal e a ação principal do site (por exemplo, agendar pelo WhatsApp).',
          'Escolha entre construtor de sites e HTML gerado por IA, justificando com as perguntas da lição 1.4.',
          'Liste as seções em ordem e escreva o texto de cada uma, usando só fatos reais; se usar IA, escreva seu próprio pedido e revise.',
          'Leia em voz alta, corte exageros e marque o que ainda precisa ser confirmado com o cliente.'
        ],
        checklist:[
          'O topo diz o que o negócio faz, para quem e onde.',
          'Há uma ação principal clara, com o link do WhatsApp no formato correto.',
          'Nenhum depoimento, preço ou dado foi inventado.',
          'A escolha da ferramenta está justificada pela necessidade do cliente.',
          'Endereço, horários e contato foram conferidos.'
        ],
        minimo:350
      }}
  ]},
  { id:2, icon:'🛠️', title:'Montar e publicar', sub:'Do rascunho ao endereço', lessons:[
    { id:'2.1', title:'Criando o site com ajuda da IA', min:10,
      body:[
        `<div class="card analogy"><h3>🛠️ Casa pré-moldada ou casa de alvenaria</h3><p>A pré-moldada é rápida e tem modelos prontos. A de alvenaria permite mais personalização, mas exige mais cuidado. Os construtores de site são a pré-moldada, e criar o código com ajuda da IA é a alvenaria. Nos dois casos, quem levanta parede sem conferir o prumo acaba refazendo.</p></div>`,
        `<div class="term"><b>Construtor de sites</b> = plataforma com modelos prontos para montar um site sem programar. <b>Código</b> = os arquivos do site, como HTML e CSS. <b>Responsivo</b> = que se adapta bem a celular e computador.</div>`,
        `<div class="card"><h3>Dois caminhos</h3><ol class="golden"><li><span>Construtor de sites, com plano gratuito ou barato (as condições mudam, então confira): mais fácil, com menos controle.</span></li><li><span>Pedir à IA ou ao Cursor que crie a página em HTML e CSS: mais controle, exige mais cuidado.</span></li></ol>
          <p>Em ambos: peça um layout pensado primeiro para celular, use as cores e o logo do cliente, revise textos e imagens (direitos de uso) e teste botões e links. Se usar código gerado por IA, peça explicações simples e teste em partes, e nunca coloque senhas ou chaves no código. A primeira versão deve ser simples.</p></div>`,
        `<div class="card"><h3>Montando em partes, na prática</h3><p>Em vez de pedir "um site completo", divida o trabalho em etapas pequenas e confira cada uma antes de seguir:</p>
          <ol class="golden"><li><span>Estrutura: só as seções vazias, na ordem do seu mapa, com títulos. Abra no navegador e no celular.</span></li><li><span>Textos: cole os textos revisados do briefing em cada seção.</span></li><li><span>Visual: cores, fontes e espaçamento. Peça letras grandes e bom contraste.</span></li><li><span>Botões: WhatsApp no topo e no contato. Toque em cada um no celular.</span></li><li><span>Imagens: fotos leves, com descrição (texto alternativo).</span></li><li><span>Mapa, horários e rodapé.</span></li></ol>
          <p>Ao escrever o seu pedido para cada etapa, diga o que já existe, o que deve mudar e o que <b>não</b> deve ser mexido. Se algo quebrar, volte para a versão anterior: guarde uma cópia dos arquivos a cada etapa que funcionou.</p></div>`,
        `<div class="flows"><div class="flow old"><b>Pedido vago</b><div class="node">"Faça um site bonito para uma pizzaria."</div></div><div class="flow new"><b>Pedido em etapas</b><div class="node">Etapa 2: "Coloque estes textos nas seções que já existem, sem alterar cores nem estrutura."</div></div></div>`,
        `<div class="card"><h3>Erros comuns</h3><ul><li>Aceitar código que você não entende e não testou.</li><li>Pedir tudo de uma vez e não saber onde está o erro.</li><li>Usar fontes e imagens pesadas que deixam a página lenta.</li><li>Esquecer de ver como fica na tela pequena do celular.</li></ul></div>`,
        `<div class="card"><h3>Entenda o que você entrega</h3><p>Você não precisa virar programador, mas precisa saber explicar o básico do que entrega. Peça à IA que explique, em linguagem simples, o que cada parte do código faz e onde ficam os textos, as cores e os links. Anote isso: vai servir para o manual do cliente e para você mesmo, quando precisar fazer uma alteração meses depois.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos a diferença entre montar uma casa pré-moldada e construir uma casa tijolo por tijolo.</div>`
      ],
      ch:[
        { who:'Diego, 29 anos, está começando', says:'Peço à IA um site completo e colo o código sem testar. Depois vejo o que acontece.',
          q:'Qual é a melhor prática?',
          opts:[
            {t:'Pedir em partes pequenas, testar no computador e no celular, conferir botões e links e só então publicar.', ok:true, why:'Etapas pequenas e testes mostram os erros cedo, quando é fácil corrigir.'},
            {t:'Seguir assim mesmo, porque a IA acerta quase sempre.', ok:false, why:'Sem testar, erros chegam ao cliente. A IA pode errar e quebrar partes do site.'},
            {t:'Evitar qualquer ajuda de IA, e escrever tudo do zero.', ok:false, why:'A IA ajuda bastante quando usada em etapas e com teste. O problema é a falta de teste.'}
          ]},
        { who:'Carla, 32 anos, fazendo o site de uma pizzaria', says:'Pedi para a IA mudar a cor do botão e ela mudou também o cardápio e apagou o mapa. E eu não tinha cópia.',
          q:'O que evitaria esse problema?',
          opts:[
            {t:'Nunca mais pedir mudanças à IA.', ok:false, why:'A IA continua útil. O problema foi o pedido sem limites e a falta de cópia.'},
            {t:'Pedir a mudança dizendo o que não deve ser alterado, conferir o resultado e guardar uma cópia dos arquivos a cada etapa que funcionou.', ok:true, why:'Limites claros no pedido e cópias de segurança permitem voltar atrás quando algo quebra.'},
            {t:'Pedir todas as mudanças juntas para economizar tempo.', ok:false, why:'Pedidos grandes misturam erros e dificultam achar o que quebrou.'}
          ]},
        { who:'Marcos, 26 anos, entregando o site de um estúdio de pilates', says:'Para o formulário mandar e-mail, a IA sugeriu colocar a senha do e-mail da cliente direto no código. Coloquei.',
          q:'O que ele deve fazer?',
          opts:[
            {t:'Manter, porque ninguém olha o código do site.', ok:false, why:'O código de um site público pode ser visto por qualquer pessoa no navegador.'},
            {t:'Trocar a senha por outra mais difícil e manter no código.', ok:false, why:'Qualquer senha no código público fica exposta, difícil ou não.'},
            {t:'Remover a senha do código, pedir à cliente para trocá-la e usar um serviço de formulário próprio para isso, sem senhas no site.', ok:true, why:'Senhas e chaves nunca vão no código público. Trocar a senha fecha a brecha.'}
          ]}
      ]},
    { id:'2.2', title:'Colocando no ar: domínio e hospedagem', min:10,
      body:[
        `<div class="card analogy"><h3>🌐 O terreno e o endereço da loja</h3><p>A hospedagem é o terreno onde a loja fica. O domínio é o endereço que as pessoas digitam para chegar. Se o endereço está no nome de outra pessoa, o dono da loja não manda nele.</p></div>`,
        `<div class="term"><b>Domínio</b> = o endereço do site, como nomedaloja.com.br. <b>Hospedagem</b> = o lugar na internet onde os arquivos do site ficam guardados. <b>HTTPS</b> = conexão segura, que aparece como um cadeado no navegador. <b>Subdomínio gratuito</b> = endereço oferecido pela plataforma, como nomedaloja.plataforma.app, bom para rascunho e portfólio.</div>`,
        `<div class="card"><h3>Quem é dono do quê</h3><p>Existem hospedagens gratuitas ou de baixo custo para sites simples. Limites, condições e regras de uso comercial mudam, então confira antes. Domínio costuma ser pago, geralmente por ano, e os valores variam. Confira:</p>
          <ol class="golden"><li><span>HTTPS ativo.</span></li><li><span>Domínio em nome do cliente, ou titularidade e transferência combinadas por escrito.</span></li><li><span>Quem paga a renovação.</span></li><li><span>E-mail do cliente como contato de cadastro.</span></li><li><span>Acessos compartilhados de forma segura.</span></li></ol>
          <p>Se o domínio fica no seu nome, o cliente fica refém de você: evite isso.</p></div>`,
        `<div class="card"><h3>O caminho até o ar</h3><ol class="golden"><li><span><b>Rascunho:</b> publique primeiro num subdomínio gratuito e mande o link para o cliente revisar no celular dele.</span></li><li><span><b>Aprovação:</b> só depois do ok por escrito, ligue o domínio definitivo.</span></li><li><span><b>Registro do domínio:</b> domínios .com.br são registrados no Registro.br, com CPF ou CNPJ do cliente. O próprio cliente pode fazer o cadastro com você ao lado, numa chamada.</span></li><li><span><b>Apontamento:</b> a hospedagem informa quais configurações colocar no painel do domínio. Siga a ajuda oficial da hospedagem, porque as telas mudam.</span></li><li><span><b>Conferência:</b> abra o endereço com e sem "www", veja o cadeado e teste no 4G, fora do Wi-Fi.</span></li></ol></div>`,
        `<div class="card"><h3>Escolhendo o nome do domínio</h3><p>Curto, fácil de falar ao telefone e sem hífen sempre que possível. Prefira o nome do negócio e, se estiver ocupado, acrescente a cidade ou o bairro (por exemplo, padariasaojoaobh.com.br). Evite usar marcas de terceiros no domínio. Anote a data de vencimento e ative a renovação automática na conta do cliente: domínio vencido tira o site do ar e pode ser registrado por outra pessoa.</p></div>`,
        `<div class="why-chain"><b>Por que o rascunho antes?</b> Porque o cliente só enxerga erros quando vê o site no próprio celular. Porque corrigir antes do domínio definitivo evita divulgar uma versão com problema. Porque o primeiro contato do público com o site precisa passar confiança.</div>`,
        `<div class="card"><h3>Compartilhando acessos com segurança</h3><p>Nunca peça a senha pessoal do e-mail do cliente por mensagem. Prefira que ele mesmo faça o login com você ao lado, ou que adicione você como colaborador quando a plataforma permitir. Ao final, remova seus acessos ou registre por escrito que continua com acesso para a manutenção. Ative a verificação em duas etapas nas contas do cliente.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o endereço da loja precisa estar no nome do dono da loja.</div>`
      ],
      ch:[
        { who:'Renato, 33 anos, cria sites para clientes', says:'Registrei o domínio do cliente no meu nome e no meu e-mail, porque é mais fácil para mim.',
          q:'O que está errado?',
          opts:[
            {t:'Nada: ele é quem cuida do site, então o domínio pode ficar com ele.', ok:false, why:'O endereço é um bem do negócio do cliente. No seu nome, ele fica dependente de você.'},
            {t:'Nada, porque o cliente nem vai perceber.', ok:false, why:'Mais cedo ou mais tarde o cliente descobre, e isso gera desconfiança e conflito.'},
            {t:'O domínio deve ser registrado em nome do cliente, ou a titularidade e a transferência devem ser combinadas por escrito, deixando claro quem paga a renovação.', ok:true, why:'Transparência sobre titularidade e renovação evita conflitos e protege o cliente.'}
          ]},
        { who:'Sílvia, 47 anos, dona de uma floricultura', says:'Meu site saiu do ar do nada! Aparece uma página dizendo que o domínio está disponível para compra.',
          q:'O que provavelmente aconteceu e como prevenir?',
          opts:[
            {t:'A hospedagem apagou o site por engano; basta reclamar.', ok:false, why:'A mensagem de domínio disponível indica vencimento do registro, não erro da hospedagem.'},
            {t:'O domínio venceu sem renovação. É preciso renovar logo e, para o futuro, ativar renovação automática na conta dela e anotar a data de vencimento na entrega.', ok:true, why:'Domínio vencido derruba o site e pode ser registrado por outra pessoa. Prevenção é combinar quem renova e quando.'},
            {t:'Alguém hackeou o site; ela precisa trocar de domínio.', ok:false, why:'Não há sinal de invasão. Trocar de domínio sem necessidade perde o endereço conhecido.'}
          ]},
        { who:'Igor, 25 anos, terminou o site de um barbeiro', says:'Já liguei direto no domínio definitivo e o barbeiro divulgou no Instagram. Aí ele viu que o horário estava errado.',
          q:'Qual teria sido o fluxo melhor?',
          opts:[
            {t:'Publicar num endereço de rascunho, mandar para o cliente revisar no celular dele, receber a aprovação por escrito e só então ligar o domínio definitivo.', ok:true, why:'A revisão no rascunho pega erros antes de o público ver.'},
            {t:'Esperar o cliente reclamar e corrigir depois, porque é normal.', ok:false, why:'Erro divulgado prejudica a imagem do negócio e a sua.'},
            {t:'Não deixar o cliente ver antes, para não pedir mudanças.', ok:false, why:'Esconder o site do cliente gera retrabalho maior e desconfiança.'}
          ]}
      ]},
    { id:'2.3', title:'Fotos, logotipo e identidade visual com licença', min:10,
      body:[
        `<div class="card analogy"><h3>👕 O uniforme da equipe</h3><p>Quando a equipe usa o mesmo uniforme, com a mesma cor e o mesmo logo, o cliente reconhece de longe. Se cada um vem com uma roupa diferente, ninguém sabe quem é da loja. A identidade visual é o uniforme do negócio, e o site precisa vestir esse uniforme.</p></div>`,
        `<div class="term"><b>Identidade visual</b> = conjunto de cores, fontes e logo que fazem o negócio ser reconhecido. <b>Licença de imagem</b> = permissão de uso dada pelo autor de uma foto ou desenho. <b>Banco de imagens gratuito</b> = site com fotos liberadas para uso sob certas regras. <b>Direito de imagem</b> = a pessoa que aparece numa foto precisa autorizar seu uso.</div>`,
        `<div class="card"><h3>Identidade visual simples em 4 decisões</h3><ol class="golden"><li><span><b>Duas ou três cores:</b> uma principal (geralmente a do logo ou da fachada), uma de destaque para botões e uma neutra para fundo.</span></li><li><span><b>Uma ou duas fontes:</b> legíveis no celular. Fontes gratuitas para web existem em bibliotecas conhecidas; confira a licença.</span></li><li><span><b>Logo:</b> se o cliente já tem, peça o arquivo original. Se não tem, um logo apenas com o nome numa fonte bonita resolve no começo.</span></li><li><span><b>Estilo das fotos:</b> claras, reais, mostrando o negócio, a equipe e os produtos.</span></li></ol></div>`,
        `<div class="card"><h3>De onde vêm as imagens</h3><p>A melhor foto é a real: o pão saindo do forno, a equipe do salão, o carro na oficina. Fotos de celular, com luz natural e o aparelho limpo, já ficam boas. Banco de imagens gratuito serve para complementar, mas cada banco tem regras próprias: leia a licença, porque algumas exigem crédito ao autor e algumas proíbem certos usos. Imagem pega "do Google" quase sempre tem dono, e usar sem permissão pode gerar cobrança ou notificação.</p>
          <p>Imagens geradas por IA podem ajudar em ilustrações e fundos, mas tome dois cuidados: não use imagem de IA para fingir que é o produto ou o local real (isso engana o cliente) e confira os termos de uso da ferramenta. Logo criado com IA também deve ser revisado: verifique se não ficou parecido com marca de outra empresa.</p></div>`,
        `<div class="card"><h3>Pessoas nas fotos</h3><p>Fotos de clientes e funcionários só com autorização, de preferência por escrito (uma mensagem de WhatsApp guardada já ajuda). Fotos de crianças exigem autorização dos responsáveis e cuidado redobrado. Se alguém pedir para retirar a foto, retire.</p></div>`,
        `<div class="card"><h3>Imagem leve, site rápido</h3><p>Foto direto do celular pode ter vários megabytes e deixar a página lenta no 4G. Antes de colocar no site, reduza o tamanho (algo como 1200 pixels de largura costuma bastar para fotos grandes) e use um compressor de imagens gratuito. Escreva o texto alternativo de cada imagem, descrevendo o que aparece: ajuda quem usa leitor de tela e ajuda o Google a entender a página.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que não podemos pegar o desenho de um colega e dizer que é nosso, e como isso vale para as fotos de um site.</div>`
      ],
      ch:[
        { who:'Thiago, 27 anos, montando o site de uma hamburgueria', says:'Peguei umas fotos lindas de hambúrguer no Google Imagens. Ninguém vai saber que não são da lanchonete.',
          q:'Qual é o melhor caminho?',
          opts:[
            {t:'Usar as fotos, porque estão públicas na internet.', ok:false, why:'Estar na internet não significa estar liberado. Quase toda foto tem dono.'},
            {t:'Usar e colocar "imagem ilustrativa" embaixo.', ok:false, why:'O aviso não substitui a licença e ainda mostra lanche que não é o real.'},
            {t:'Fotografar os lanches reais com boa luz ou usar banco de imagens com licença conferida, preferindo sempre mostrar o produto verdadeiro.', ok:true, why:'Foto real e licenciada evita problema legal e mostra ao cliente o que ele vai receber.'}
          ]},
        { who:'Patrícia, 36 anos, dona de um salão de beleza', says:'Quero colocar no site as fotos de antes e depois das minhas clientes que estão no meu celular.',
          q:'O que você orienta?',
          opts:[
            {t:'Pedir autorização de cada cliente para usar a foto no site, guardar essa autorização e retirar a foto se alguém pedir.', ok:true, why:'Direito de imagem exige autorização. Guardar o registro protege o salão.'},
            {t:'Publicar todas, porque as fotos foram tiradas no salão dela.', ok:false, why:'Tirar a foto no salão não dá direito de publicar o rosto da cliente.'},
            {t:'Publicar só se a cliente não for famosa.', ok:false, why:'Qualquer pessoa tem direito sobre a própria imagem, famosa ou não.'}
          ]},
        { who:'Leandro, 31 anos, dono de uma oficina sem logo', says:'Pede para a IA criar um logo e uma foto da minha oficina toda moderna, mesmo que a minha seja simples.',
          q:'Qual resposta é mais adequada?',
          opts:[
            {t:'Gerar a foto da oficina moderna, porque atrai mais clientes.', ok:false, why:'Mostrar um local que não existe engana o cliente, que vai chegar e se decepcionar.'},
            {t:'Recusar qualquer uso de IA em imagens.', ok:false, why:'A IA pode ajudar no logo e em ilustrações. O problema é fingir o local real.'},
            {t:'Usar a IA para rascunhar um logo simples, conferir se não parece com marca de outra empresa, e fotografar a oficina real arrumada e bem iluminada.', ok:true, why:'Ajuda da IA com revisão, e fotos verdadeiras do local: honesto e profissional.'}
          ]}
      ]},
    { id:'2.4', title:'Ser encontrado: Google, contato e SEO local', min:10,
      body:[
        `<div class="card analogy"><h3>🗺️ A placa na estrada</h3><p>Não adianta ter a melhor lanchonete se ninguém vê a placa na estrada. No mundo online, a placa é o resultado do Google e o pin no mapa. Um site bem feito, com as informações certas, ajuda a placa a aparecer para quem está procurando por perto.</p></div>`,
        `<div class="term"><b>SEO</b> = otimização para buscadores: cuidados para o Google entender e mostrar a página. <b>Título da página</b> = o texto que aparece na aba do navegador e em azul no resultado do Google. <b>Descrição</b> = o resumo que aparece abaixo do título no resultado. <b>Perfil da Empresa no Google</b> = o antigo Google Meu Negócio, a ficha do negócio que aparece no Maps e na busca.</div>`,
        `<div class="card"><h3>SEO básico em uma página</h3><ol class="golden"><li><span><b>Título:</b> o que é, o nome e o local. Exemplo: "Pet Shop Amigo Fiel, banho e tosa no Bairro Centro, Campinas".</span></li><li><span><b>Descrição:</b> uma ou duas frases com o principal serviço, o bairro e a ação ("Agende pelo WhatsApp").</span></li><li><span><b>Título principal na página:</b> a frase do topo deve conter o serviço e a cidade de forma natural.</span></li><li><span><b>Endereço em texto:</b> escrito na página, igual ao do Perfil da Empresa no Google.</span></li><li><span><b>Imagens com texto alternativo</b> e página rápida no celular.</span></li></ol>
          <p>Não encha o texto de palavras repetidas ("pet shop Campinas pet shop barato pet shop"): isso piora a leitura e não ajuda. Escreva para pessoas. Também não prometa ao cliente "primeiro lugar no Google": ninguém controla isso.</p></div>`,
        `<div class="code">&lt;title&gt;Pet Shop Amigo Fiel, banho e tosa no Centro de Campinas&lt;/title&gt;
&lt;meta name="description" content="Banho, tosa e rações no Centro de Campinas. Agende pelo WhatsApp."&gt;</div>`,
        `<div class="card"><h3>O Perfil da Empresa no Google</h3><p>Para negócio local, essa ficha muitas vezes traz mais contatos do que o próprio site. É gratuita. O dono cria (ou reivindica) a ficha com a conta Google dele, passa por uma verificação e preenche: categoria, endereço ou área atendida, horários, telefone, fotos e o link do site. Você pode ajudar em chamada ou presencialmente, mas a conta deve ser do cliente. Combine que ele responda às avaliações com educação e mantenha horários de feriado atualizados. Nunca compre nem invente avaliações.</p></div>`,
        `<div class="card"><h3>Formulário ou só WhatsApp?</h3><p>Para a maioria dos pequenos negócios, o botão de WhatsApp basta e gera mais contatos. Um formulário faz sentido quando o cliente precisa de informações organizadas antes de responder, como orçamento de reforma ou pedido de evento. Se usar formulário: peça só o necessário (nome, contato, mensagem), use um serviço de formulários confiável, teste se a mensagem chega ao e-mail do cliente e inclua o link do aviso de privacidade (veremos na lição 3.3).</p></div>`,
        `<div class="why-chain"><b>Por que o endereço igual em todo lugar?</b> Porque o Google cruza as informações do site, da ficha e de outros sites. Porque dados iguais passam confiança ao buscador. Porque dados diferentes confundem o Google e o cliente, que pode ir ao endereço antigo.</div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a alguém, em 1 minuto, o que é o título, a descrição e a ficha do Google, usando o exemplo da placa na estrada.</div>`
      ],
      ch:[
        { who:'Gustavo, 29 anos, criou o site de uma academia', says:'O título da página ficou "Home". O cliente reclamou que no Google aparece só isso.',
          q:'Como melhorar?',
          opts:[
            {t:'Trocar por algo como "Academia Força Total, musculação e funcional no Bairro Aparecida, Santos" e escrever uma descrição com o serviço, o bairro e a ação.', ok:true, why:'Título e descrição com serviço e local ajudam quem busca a entender e clicar.'},
            {t:'Trocar por "academia academia Santos academia barata melhor academia".', ok:false, why:'Repetir palavras deixa o resultado feio e não ajuda. Escreva para pessoas.'},
            {t:'Deixar "Home", porque o Google decide sozinho.', ok:false, why:'O Google usa muito o título que você define. "Home" não diz nada a ninguém.'}
          ]},
        { who:'Dona Rosa, 66 anos, dona de uma costura e ajustes', says:'Meu sobrinho disse que dá para pagar e ganhar umas 50 avaliações cinco estrelas no Google. Faz isso para mim?',
          q:'O que responder?',
          opts:[
            {t:'Fazer, porque todo mundo faz e ajuda a aparecer.', ok:false, why:'Avaliações falsas enganam o consumidor e violam as regras do Google, podendo levar a punições.'},
            {t:'Explicar que avaliações compradas são enganosas e arriscadas, e sugerir pedir avaliações sinceras a clientes satisfeitos, com o link da ficha.', ok:true, why:'Avaliações reais constroem reputação de verdade e sem risco.'},
            {t:'Fazer só 10 avaliações falsas, para não chamar atenção.', ok:false, why:'A quantidade não muda o problema: continua sendo falso.'}
          ]},
        { who:'Eduardo, 34 anos, montando o site de uma empresa de pequenas reformas', says:'Coloquei um formulário com 15 campos: CPF, data de nascimento, renda, endereço completo... Assim já sei tudo do cliente.',
          q:'Qual é a melhor orientação?',
          opts:[
            {t:'Manter, porque mais dados ajudam a vender.', ok:false, why:'Campos demais afastam o visitante e coletar dados sem necessidade fere o princípio da necessidade da LGPD.'},
            {t:'Tirar o formulário e não deixar nenhum contato.', ok:false, why:'O contato é a ação principal. O problema é o excesso de campos.'},
            {t:'Pedir só o necessário para o orçamento (nome, contato, bairro e descrição do serviço), testar se chega e incluir o aviso de privacidade.', ok:true, why:'Formulário curto gera mais contatos e coleta só o que é preciso.'}
          ]}
      ]},
    { id:'2.5', title:'Revisar o que a IA gerou sem ser programador', min:10,
      body:[
        `<div class="card analogy"><h3>🧾 Conferir a nota antes de pagar</h3><p>Você não precisa ser contador para conferir a nota do mercado: olha se o preço bate e se não cobraram duas vezes o mesmo item. Com o site gerado pela IA é igual. Você não precisa saber programar para conferir o que importa para o cliente. A IA escreve rápido, mas erra com confiança: inventa números, troca endereços e deixa links quebrados.</p></div>`,
        `<div class="term"><b>Link quebrado</b> = link que leva a uma página inexistente ou errada. <b>Link do WhatsApp</b> = endereço wa.me seguido de 55, DDD e número, só com dígitos. <b>Imagem leve</b> = foto redimensionada e comprimida, em geral abaixo de 200 KB. <b>Código-fonte</b> = o texto do site que o navegador lê; dá para ver com Ctrl+U.</div>`,
        `<div class="card"><h3>Revisão em 6 passos, sem programar</h3><ol class="golden"><li><span><b>Leia todo o texto</b> em voz alta, caçando dado inventado: prêmios, anos de mercado, preços.</span></li><li><span><b>Clique em cada botão e link</b>, no computador e no celular.</span></li><li><span><b>Confira o WhatsApp</b> dígito por dígito com o cliente.</span></li><li><span><b>Veja o peso das imagens</b> nas propriedades do arquivo e reduza as maiores.</span></li><li><span><b>Abra o código-fonte</b> e procure com Ctrl+F por "senha", "token", "lorem" e "exemplo".</span></li><li><span><b>Compare com o briefing</b> o endereço, o mapa e os horários.</span></li></ol></div>`,
        `<div class="code">https://wa.me/5511987654321  (certo: 55 + DDD + número, sem espaços)<br>https://wa.me/(11) 98765-4321  (errado: parênteses, espaço e traço quebram o link)</div>`,
        `<div class="tw"><table class="tbl"><tr><th>Problema comum</th><th>Como perceber</th><th>Como pedir a correção</th></tr><tr><td>Texto de exemplo esquecido</td><td>Aparece "lorem ipsum" ou "Seu Negócio"</td><td>Diga a seção exata e cole o texto certo, escrito por você</td></tr><tr><td>WhatsApp errado</td><td>O botão abre conversa com outro número</td><td>Informe o número completo e peça a troca em todos os botões</td></tr><tr><td>Imagem pesada</td><td>A página demora no 4G</td><td>Comprima a foto você mesmo ou peça o ajuste de uma imagem por vez</td></tr><tr><td>Botão sem ação</td><td>Clique sem resposta</td><td>Descreva o botão, onde fica e o que deveria abrir</td></tr><tr><td>Informação inventada</td><td>"20 anos de mercado" que o dono nunca disse</td><td>Peça para remover e use só fatos do briefing</td></tr></table></div>`,
        `<div class="card"><h3>Pedidos de correção que funcionam</h3><p>Um problema por pedido, dizendo onde está (seção, botão), o que acontece e o que deveria acontecer. Depois de cada correção, teste de novo e guarde uma cópia da versão que funcionava. Se a IA mexer em partes que estavam certas, volte à cópia. Pedidos vagos, como "melhore o site", costumam bagunçar o que o cliente já aprovou.</p></div>`,
        `<div class="card"><h3>Ética: quem assina é você</h3><p>A entrega é sua, não da IA. Se você não conseguiu conferir algo, como um formulário que envia dados, não entregue antes de testar ou de pedir ajuda a quem sabe. Se o cliente perguntar, diga que usou IA como ferramenta, e nunca esconda um erro que você conhece.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> a IA é um ajudante rápido que às vezes se engana. Antes de mostrar o site ao dono, você confere cada botão, cada número e cada frase, e pede consertos um de cada vez.</div>`
      ],
      ch:[
        { who:'Camila, 29 anos, fazendo o site de uma loja de bolos em Belo Horizonte', says:'A IA gerou o botão de WhatsApp assim: wa.me/(31) 99876-5432. O número é o da dona, então está certo.', q:'O que Camila deve fazer?',
          opts:[
            {t:'Publicar, porque o número é o correto.', ok:false, why:'O número pode estar certo, mas o formato com parênteses, espaço e traço quebra o link.'},
            {t:'Corrigir para o formato só com dígitos, com 55 e DDD (wa.me/5531998765432), e testar o botão no celular.', ok:true, why:'O link do WhatsApp precisa só de dígitos com DDI e DDD, e o teste no celular confirma que abre a conversa certa.'},
            {t:'Trocar o botão por um texto "chame no WhatsApp", sem link.', ok:false, why:'Sem link, o visitante tem que copiar o número à mão, e muitos desistem.'}
          ]},
        { who:'Bruno, 36 anos, fazendo o site de um pet shop em Curitiba', says:'O texto da IA diz "mais de 15 anos cuidando do seu pet" e "prêmio de melhor pet shop da cidade". Ficou bonito!', q:'Qual é a revisão correta?',
          opts:[
            {t:'Manter, porque passa credibilidade.', ok:false, why:'Credibilidade construída com dado falso vira problema quando o cliente descobre.'},
            {t:'Manter só os 15 anos, que parece um número razoável.', ok:false, why:'Parecer razoável não torna verdadeiro. Tudo precisa ser confirmado.'},
            {t:'Confirmar com o dono; o que não for verdade sai, e o texto fica só com fatos do briefing.', ok:true, why:'A IA inventa com facilidade. Publicar só o que o dono confirmou protege o negócio e você.'}
          ]},
        { who:'Larissa, 25 anos, fazendo o site de um estúdio de pilates em Fortaleza', says:'Pedi para a IA "melhorar o site" e ela mudou as cores, apagou a seção de horários e trocou o mapa.', q:'Como Larissa deveria ter pedido?',
          opts:[
            {t:'Um ajuste por vez, dizendo a seção, o problema e o resultado esperado, testando e guardando cópia a cada passo.', ok:true, why:'Pedidos específicos evitam mudanças indesejadas, e a cópia permite voltar atrás.'},
            {t:'Repetir "melhore o site" até ficar bom.', ok:false, why:'Pedido vago gera mudanças aleatórias e pode piorar o que estava aprovado.'},
            {t:'Desistir da IA e entregar o rascunho como estava, sem revisar.', ok:false, why:'O problema foi o jeito de pedir. Entregar sem revisão também não resolve.'}
          ]}
      ]},
    { id:'2.6', title:'Projeto: site de 1 página publicado em rascunho', min:30,
      body:[
        `<div class="card"><p>Hora de colocar a mão na massa. Use o briefing e o mapa de seções do projeto 1.6 e monte a página única na ferramenta que você escolheu, em etapas pequenas, testando cada uma. Publique num endereço gratuito de rascunho (sem comprar domínio ainda) e registre o que fez. Se usar IA para gerar código ou textos, escreva os seus próprios pedidos e revise tudo.</p></div>`,
        `<div class="card"><p><b>Como fica uma boa entrega:</b> o link do rascunho logo no início, a ferramenta usada, uma lista das imagens com a origem e a licença de cada uma, o título e a descrição da página, os problemas que a revisão encontrou e como foram corrigidos, e o que ainda depende do cliente.</p></div>`
      ],
      projeto:{
        entrega:'O link do site de 1 página publicado em rascunho e um relatório do que foi feito, das imagens usadas e do SEO básico.',
        passos:[
          'Monte a estrutura das seções e depois os textos, o visual, os botões, as imagens e o mapa, guardando uma cópia a cada etapa que funcionou.',
          'Use fotos reais ou com licença conferida e escreva o texto alternativo de cada imagem.',
          'Defina o título da página e a descrição com serviço, nome e local.',
          'Faça a revisão em 6 passos da lição 2.5, publique num endereço gratuito de rascunho, com HTTPS, e teste o botão de WhatsApp no celular.',
          'Escreva o relatório: link, ferramenta, origem e licença de cada imagem, título, descrição e o que ainda falta.'
        ],
        checklist:[
          'O site abre pelo link, com cadeado, no celular e no computador.',
          'O botão de WhatsApp abre a conversa com o número certo e nenhum texto de exemplo ou dado inventado ficou na página.',
          'Todas as imagens são reais ou têm licença registrada no relatório.',
          'Título e descrição dizem o que é, o nome e o local.',
          'Nenhuma senha ou chave aparece no código.'
        ],
        minimo:300
      }}
  ]},
  { id:3, icon:'✅', title:'Qualidade e entrega', sub:'Testar, entregar e manter', lessons:[
    { id:'3.1', title:'Testar no celular, velocidade e acessibilidade básica', min:10,
      body:[
        `<div class="card analogy"><h3>📱 Provar a roupa antes de entregar</h3><p>O alfaiate chama o cliente para provar antes de dar a roupa por pronta. Ajustes feitos na prova custam pouco. Testar o site antes de entregar tem o mesmo efeito.</p></div>`,
        `<div class="term"><b>Acessibilidade</b> = fazer o site ser usável por todos, com bom contraste, letras legíveis e descrição das imagens. <b>Velocidade</b> = o tempo que a página leva para abrir. <b>Teste em aparelhos</b> = abrir o site em mais de um celular e computador.</div>`,
        `<div class="card"><h3>A lista de testes</h3><ol class="golden"><li><span>Abrir no celular (em pelo menos 2 aparelhos) e no computador.</span></li><li><span>Botões grandes e fáceis de tocar.</span></li><li><span>Texto legível, com bom contraste.</span></li><li><span>Imagens leves e com texto alternativo.</span></li><li><span>Links e botão de WhatsApp funcionando.</span></li><li><span>Formulário que envia e chega ao cliente.</span></li><li><span>Página que abre rápido numa conexão comum.</span></li><li><span>Aviso de privacidade se houver coleta de dados.</span></li></ol>
          <p>Existem ferramentas gratuitas de teste de velocidade. Peça a 2 ou 3 pessoas de fora para achar o telefone ou o preço em 10 segundos.</p></div>`,
        `<div class="card"><h3>Como fazer o teste das pessoas de fora</h3><p>Escolha 2 ou 3 pessoas que não conhecem o site, de idades diferentes (inclua alguém mais velho). Entregue o celular com o site aberto e peça tarefas simples, uma de cada vez: "descubra se abre no sábado", "chame no WhatsApp", "ache o endereço". Não ajude, não explique, só observe e anote onde a pessoa hesitou. Cada hesitação é um ajuste a fazer. Esse teste leva 15 minutos e encontra problemas que você, que conhece o site de cor, nunca veria.</p></div>`,
        `<div class="card"><h3>Acessibilidade sem complicação</h3><ul><li>Letra do texto com tamanho confortável no celular (algo em torno de 16 pixels ou mais).</li><li>Texto escuro em fundo claro, ou o contrário, com bom contraste; nada de cinza claro em fundo branco.</li><li>Botões com texto que diz a ação ("Agendar pelo WhatsApp", e não só "Clique aqui").</li><li>Imagens importantes com texto alternativo.</li><li>Não depender só da cor para passar informação.</li><li>Vídeo sem som automático.</li></ul></div>`,
        `<div class="why-chain"><b>Por que testar velocidade?</b> Porque muita gente acessa no 4G, às vezes com sinal fraco. Porque página lenta faz a pessoa voltar para o Google e clicar no concorrente. Porque o próprio Google considera a experiência no celular, e a página rápida tende a ser mais bem vista.</div>`,
        `<div class="card"><h3>Registre os testes</h3><p>Anote numa lista simples: o que foi testado, em qual aparelho, o resultado e o que foi corrigido. Esse registro vira parte da entrega e mostra ao cliente o cuidado que você teve.</p></div>`,
        `<div class="card"><h3>Exemplo de registro</h3><p>"Celular Android antigo, 4G: página abriu em 4 segundos; botão de WhatsApp ok; mapa demorou, adicionei o endereço em texto. iPhone, Wi-Fi: tudo ok. Teste com a vizinha de 65 anos: achou o horário, mas não viu o botão do topo; aumentei o tamanho e mudei a cor."</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma roupa é provada antes de ser entregue.</div>`
      ],
      ch:[
        { who:'Marta, 38 anos, entrega sites para clientes', says:'Testei só no meu computador e achei ótimo. No celular do cliente, o botão de WhatsApp nem aparecia.',
          q:'O que ela deveria ter feito?',
          opts:[
            {t:'Nada: o problema é o celular do cliente, e não o site.', ok:false, why:'Se o site não funciona no celular do cliente, ele não funciona para os clientes dele.'},
            {t:'Testar no celular, em mais de um aparelho, e pedir a pessoas de fora para tentar usar.', ok:true, why:'Testes em aparelhos diferentes mostram problemas que o seu computador esconde.'},
            {t:'Tirar o botão de WhatsApp para não aparecer erro.', ok:false, why:'O botão é a ação principal do site. O certo é consertar, e não tirar.'}
          ]},
        { who:'Vanessa, 30 anos, fazendo o site de uma confeitaria', says:'Usei texto cinza clarinho em fundo branco e letra pequena. Ficou bem delicado, combina com doces.',
          q:'Qual é o risco e o que fazer?',
          opts:[
            {t:'Nenhum risco, porque o estilo combina com a marca.', ok:false, why:'Bonito para quem fez, mas difícil de ler para muita gente, principalmente no sol e no celular.'},
            {t:'Aumentar o contraste e o tamanho da letra, mantendo a delicadeza nas cores de destaque e nas fotos, e pedir a alguém mais velho para ler no celular.', ok:true, why:'Dá para manter o estilo e ainda garantir leitura fácil para todos.'},
            {t:'Colocar todo o texto em letras maiúsculas para chamar atenção.', ok:false, why:'Texto todo em maiúsculas fica mais difícil de ler e não resolve o contraste.'}
          ]},
        { who:'Otávio, 28 anos, site de um restaurante', says:'A página demora uns 15 segundos para abrir no 4G. Coloquei as fotos direto do celular, cada uma com 6 MB.',
          q:'Qual é a correção mais eficaz?',
          opts:[
            {t:'Trocar de hospedagem, porque o problema é o servidor.', ok:false, why:'Antes de trocar de hospedagem, resolva o que mais pesa: fotos enormes.'},
            {t:'Tirar todas as fotos do site.', ok:false, why:'Fotos do restaurante vendem. O certo é deixá-las leves.'},
            {t:'Reduzir as fotos para o tamanho de exibição, comprimir com um compressor gratuito e testar de novo no 4G com uma ferramenta de velocidade.', ok:true, why:'Imagens pesadas são a causa mais comum de lentidão, e otimizá-las resolve sem perder qualidade visível.'}
          ]}
      ]},
    { id:'3.2', title:'Projeto de portfólio, entrega e manutenção', min:10,
      body:[
        `<div class="card analogy"><h3>📁 A entrega das chaves da casa</h3><p>Quem entrega uma casa passa as chaves, o manual dos equipamentos e o contato para dúvidas. O cliente fica seguro e você mantém uma boa relação.</p></div>`,
        `<div class="term"><b>Entrega</b> = repassar acessos, arquivos e instruções ao cliente. <b>Manutenção</b> = cuidar do site depois de pronto, como atualizar textos e renovar o domínio. <b>Projeto fictício</b> = trabalho de treino para um negócio inventado. <b>Portfólio</b> = conjunto de trabalhos que você mostra para conseguir novos clientes.</div>`,
        `<div class="card"><h3>Portfólio, entrega e checklist</h3><p>Para ter o que mostrar, monte sites de 1 página para negócios reais, com autorização, ou fictícios: topo, serviços, sobre, contato com WhatsApp e aviso de privacidade se houver formulário, publicados num endereço gratuito. O projeto deste módulo fecha o curso com testes, proposta e combinado de suporte do seu site.</p>
          <p><b>Entrega profissional:</b></p>
          <ol class="golden"><li><span>Acessos em nome do cliente.</span></li><li><span>Manual de 1 página (como trocar textos e fotos).</span></li><li><span>Combinado do que é manutenção e quanto custa, se houver.</span></li><li><span>Backup.</span></li></ol>
          <p><b>Checklist "estou pronto para cobrar?":</b> site testado em celular e computador, textos revisados e sem depoimentos inventados, imagens com licença, domínio e contas no nome do cliente, aviso de privacidade, combinado escrito (escopo, revisões, prazo, manutenção) e nenhuma promessa de ganho.</p>
          <p><b>Depois deste curso:</b> o curso "Seu Primeiro Serviço com IA" ajuda a organizar a oferta e o atendimento.</p>
          <p>⚠️ Este curso não garante renda: ele ensina a oferecer um serviço com qualidade.</p></div>`,
        `<div class="card"><h3>O manual de 1 página</h3><p>Escreva para o dono, em linguagem simples, com prints se possível: como entrar na plataforma ou a quem pedir alterações, como trocar uma foto ou um horário, onde está o domínio e quando vence, quem paga o quê, e o que fazer se o site sair do ar. Entregue em PDF e também por mensagem, para ele achar fácil depois. Inclua uma lista com as datas importantes (vencimento do domínio, cobrança do plano) e os contatos de suporte da hospedagem.</p></div>`,
        `<div class="card"><h3>Como apresentar um trabalho no portfólio</h3><p>Para cada site, mostre: o negócio (ou "projeto fictício", deixando claro), o problema que o site resolve, o que você fez e o link. Peça autorização ao cliente para mostrar o trabalho. Nunca apresente projeto fictício como se fosse de cliente real, nem invente resultados ("aumentou 300% as vendas") que você não mediu.</p></div>`,
        `<div class="card"><h3>Backup e o pós-entrega</h3><p>Guarde uma cópia completa dos arquivos (ou exporte o site, se a plataforma permitir) e entregue outra ao cliente, numa pasta na nuvem dele. Combine um contato de acompanhamento depois de 30 dias: pergunte se os contatos estão chegando, se algum dado mudou e se ele conseguiu usar o manual. Esse cuidado simples costuma gerar indicações e mostra que você não some depois de receber.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, o que se entrega junto com um site além do endereço.</div>`
      ],
      ch:[
        { who:'Hugo, 25 anos, entregou um site a um cliente', says:'Terminei o site e mandei só o link. O cliente quer mudar um texto, não sabe como e me liga toda semana.',
          q:'O que deveria ter feito na entrega?',
          opts:[
            {t:'Passar os acessos, um manual simples de como alterar textos e fotos, e combinar por escrito o que é manutenção.', ok:true, why:'Uma entrega completa dá autonomia ao cliente, e a manutenção vira um serviço claro, com preço combinado.'},
            {t:'Cobrar toda vez que o cliente ligar, sem avisar antes.', ok:false, why:'Cobrança surpresa gera conflito. O que é pago precisa estar combinado.'},
            {t:'Manter o cliente dependente de propósito, para ele sempre precisar de você.', ok:false, why:'Prender o cliente é antiético e desgasta a relação. Boas entregas geram indicações.'}
          ]},
        { who:'Aline, 23 anos, montando o primeiro portfólio', says:'Fiz três sites fictícios. Vou dizer que são de clientes reais e que aumentaram as vendas, senão ninguém me contrata.',
          q:'Qual é a melhor forma de apresentar?',
          opts:[
            {t:'Dizer que são reais, porque todo iniciante faz isso.', ok:false, why:'Mentir no portfólio destrói a confiança quando o cliente descobre, e é enganoso.'},
            {t:'Esconder os projetos fictícios e esperar ter clientes reais.', ok:false, why:'Projetos de treino bem feitos são úteis para mostrar o que você sabe fazer.'},
            {t:'Apresentar como projetos de treino, explicando o problema de cada negócio e o que ela fez, sem inventar resultados.', ok:true, why:'Honestidade e bom trabalho bastam para mostrar capacidade a quem está contratando.'}
          ]},
        { who:'Seu Valdir, 63 anos, dono de uma loja de material de construção', says:'Recebi o site, mas não sei onde está o domínio nem quando vence. Se você sumir, o que eu faço?',
          q:'O que deveria estar no manual de entrega?',
          opts:[
            {t:'Nada além do link, porque ele não entende de tecnologia.', ok:false, why:'Justamente por não entender, ele precisa de instruções simples e por escrito.'},
            {t:'Onde está o domínio e quando vence, as contas no nome dele, quem paga cada coisa, como pedir alterações e o que fazer se o site sair do ar.', ok:true, why:'Com essas informações, o cliente tem segurança mesmo sem você.'},
            {t:'Apenas a senha da hospedagem anotada num papel.', ok:false, why:'Uma senha solta não explica nada e ainda é um risco de segurança.'}
          ]}
      ]},
    { id:'3.3', title:'LGPD no site: privacidade, formulários e cookies', min:10,
      body:[
        `<div class="card analogy"><h3>📋 A ficha do consultório</h3><p>Quando você preenche uma ficha num consultório, espera saber para que servem aqueles dados e que eles não vão parar na mão de qualquer um. O formulário do site é essa ficha. O aviso de privacidade é a plaquinha que explica, com clareza, o que será feito com as informações.</p></div>`,
        `<div class="term"><b>LGPD</b> = Lei Geral de Proteção de Dados (Lei 13.709/2018), que regula o uso de dados pessoais no Brasil. <b>Dado pessoal</b> = informação que identifica uma pessoa, como nome, telefone, e-mail ou CPF. <b>Aviso de privacidade</b> = texto que explica quais dados são coletados, para quê e como pedir exclusão. <b>Cookies</b> = pequenos arquivos que o site guarda no navegador; alguns são essenciais, outros servem para medir visitas ou anúncios.</div>`,
        `<div class="card"><h3>Quando o site coleta dados?</h3><p>Um site só com textos, fotos e botão de WhatsApp coleta pouco ou nada diretamente (a conversa acontece no WhatsApp). A coleta aparece quando há <b>formulário</b>, <b>ferramenta de medição de visitas</b>, <b>pixel de anúncios</b>, chat incorporado ou cadastro. Cada um desses recursos precisa ser informado no aviso de privacidade.</p></div>`,
        `<div class="card"><h3>Aviso de privacidade simples, em 7 itens</h3><ol class="golden"><li><span>Quem é o responsável (nome do negócio e contato).</span></li><li><span>Quais dados são coletados (por exemplo, nome, telefone e mensagem).</span></li><li><span>Para que são usados (responder ao contato, enviar orçamento).</span></li><li><span>Com quem são compartilhados (por exemplo, o serviço de formulário).</span></li><li><span>Por quanto tempo ficam guardados.</span></li><li><span>Como a pessoa pede para ver, corrigir ou apagar seus dados.</span></li><li><span>Uso de cookies e ferramentas de medição, se houver.</span></li></ol>
          <p>O texto deve ser curto, em linguagem simples e verdadeiro: descreva o que o negócio realmente faz. Copiar a política de uma empresa grande não serve, porque ela descreve outra realidade. A IA pode ajudar a rascunhar a partir dos fatos que você informar, mas o cliente deve revisar e, em casos com dados sensíveis (saúde, crianças) ou dúvidas, consultar um profissional de direito.</p></div>`,
        `<div class="card"><h3>Boas práticas no formulário</h3><ul><li>Peça só o necessário para a finalidade (princípio da necessidade).</li><li>Coloque perto do botão de enviar uma frase como "Usamos seus dados só para responder ao seu contato" e o link do aviso.</li><li>Não marque caixas de aceite já preenchidas.</li><li>Não use os contatos para enviar promoções sem a pessoa ter concordado.</li><li>Garanta que os e-mails do formulário cheguem a uma conta do cliente, protegida por senha forte.</li></ul></div>`,
        `<div class="card"><h3>Cookies e banner</h3><p>Se o site não usa ferramentas de medição nem anúncios, normalmente não há cookies de rastreamento para avisar. Se usar, informe no aviso de privacidade e, para cookies não essenciais (medição e anúncios), o recomendado é pedir consentimento por meio de um banner que permita aceitar ou recusar. A Autoridade Nacional de Proteção de Dados (ANPD) publica guias sobre o tema: consulte a orientação atual.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a um amigo, em 1 minuto, o que um aviso de privacidade precisa contar a quem preenche um formulário.</div>`
      ],
      ch:[
        { who:'Natália, 37 anos, psicóloga', says:'Quero um formulário no site para a pessoa contar o motivo da consulta antes de marcar. Precisa de algum cuidado?',
          q:'Qual é a orientação mais responsável?',
          opts:[
            {t:'Nenhum cuidado, porque é só um formulário de contato.', ok:false, why:'Informações sobre saúde são dados sensíveis na LGPD e pedem cuidado redobrado.'},
            {t:'Pedir que o formulário colete só nome e contato, deixar o motivo para a conversa reservada, ter aviso de privacidade claro e sugerir que ela consulte um profissional de direito e as regras do conselho.', ok:true, why:'Coletar menos dados sensíveis reduz riscos, e casos de saúde merecem orientação especializada.'},
            {t:'Coletar também CPF e endereço, para já ter tudo.', ok:false, why:'Coletar mais do que o necessário aumenta riscos e contraria o princípio da necessidade.'}
          ]},
        { who:'Caio, 26 anos, fazendo o site de uma loja de bicicletas', says:'Copiei a política de privacidade de um grande banco. Tem 12 páginas, fica bem completo.',
          q:'O que há de errado?',
          opts:[
            {t:'Nada: quanto maior a política, mais protegido o cliente fica.', ok:false, why:'Tamanho não é proteção. O texto precisa descrever o que a loja realmente faz.'},
            {t:'Só o fato de ser longa; basta resumir para 6 páginas.', ok:false, why:'Resumir não resolve: o texto continua descrevendo o banco, e não a loja.'},
            {t:'O texto descreve outra empresa e pode ter direitos autorais. O certo é um aviso curto e verdadeiro sobre os dados que a loja coleta, revisado pelo dono.', ok:true, why:'Um aviso honesto e simples informa de verdade quem usa o site.'}
          ]},
        { who:'Luana, 31 anos, montando o site de uma escola de inglês', says:'O cliente quer pixel de anúncios e medição de visitas. O site também tem formulário. Basta colocar o código e pronto?',
          q:'O que fazer além de colocar o código?',
          opts:[
            {t:'Informar o uso dessas ferramentas no aviso de privacidade e incluir um banner que permita aceitar ou recusar os cookies não essenciais, consultando o guia atual da ANPD.', ok:true, why:'Ferramentas de medição e anúncios usam dados de navegação, e o visitante deve ser informado e poder escolher.'},
            {t:'Nada, porque todo site usa essas ferramentas.', ok:false, why:'Ser comum não dispensa informar o visitante.'},
            {t:'Esconder o pixel para o visitante não perceber.', ok:false, why:'Esconder o rastreamento é o oposto da transparência que a LGPD pede.'}
          ]}
      ]},
    { id:'3.4', title:'Preço, pacotes e manutenção mensal com cautela', min:10,
      body:[
        `<div class="card analogy"><h3>🔧 O conserto e a revisão do carro</h3><p>Uma oficina cobra o conserto uma vez e oferece a revisão periódica à parte. O cliente sabe o que está pagando em cada caso. Com sites é igual: a criação é um serviço, a manutenção é outro, e misturar os dois sem combinar é receita para conflito.</p></div>`,
        `<div class="term"><b>Escopo</b> = a lista exata do que está incluído no trabalho. <b>Pacote</b> = combinação fechada de entregas com um preço. <b>Manutenção mensal</b> = valor fixo por mês para pequenas alterações e cuidados combinados. <b>Proposta</b> = documento com escopo, prazo, preço, forma de pagamento e o que não está incluído.</div>`,
        `<div class="card"><h3>Como chegar ao seu preço</h3><ol class="golden"><li><span>Estime as horas reais: conversa, textos, montagem, testes, ajustes e entrega. Iniciante costuma subestimar; some uma folga.</span></li><li><span>Defina quanto vale sua hora, considerando seus custos e o mercado da sua região.</span></li><li><span>Pesquise o que outros profissionais da sua cidade cobram por trabalho parecido.</span></li><li><span>Some os custos repassados (domínio, plano pago), deixando claro que são do cliente.</span></li></ol>
          <p><b>Referência, com cautela:</b> no Brasil é comum ver site simples de 1 página para pequeno negócio sendo oferecido por algo entre R$ 300 e R$ 1.500, e manutenção entre R$ 50 e R$ 200 por mês. São faixas amplas, que variam muito por região, experiência, complexidade e prazo. Use como ponto de partida e pesquise a sua realidade. Ninguém garante quantos clientes você vai ter.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Pacote (exemplo)</th><th>Inclui</th><th>Não inclui</th></tr><tr><td>Essencial</td><td>Página única, até 6 seções, botão de WhatsApp, mapa, 2 rodadas de revisão</td><td>Textos do zero, fotos profissionais, domínio</td></tr><tr><td>Completo</td><td>Essencial + textos com o cliente, Perfil da Empresa no Google, aviso de privacidade</td><td>Loja virtual, anúncios</td></tr><tr><td>Manutenção mensal</td><td>Até 2 alterações pequenas por mês, verificação do site, lembrete de renovação</td><td>Novas seções e redesenho</td></tr></table></div>`,
        `<div class="card"><h3>O que escrever na proposta</h3><p>Escopo detalhado, número de rodadas de revisão, prazo (que começa quando o cliente envia textos e fotos), preço e forma de pagamento (por exemplo, metade no início e metade na entrega), o que não está incluído, quem paga domínio e plano, e as regras da manutenção: o que conta como alteração pequena, prazo de resposta e como cancelar. Manutenção deve ser opcional: o cliente com entrega bem feita consegue seguir sem você.</p>
          <p>Sobre impostos e formalização (por exemplo, MEI e emissão de nota), confira as regras atuais e, se tiver dúvida, consulte um contador.</p></div>`,
        `<div class="why-chain"><b>Por que limitar as revisões?</b> Porque sem limite o projeto nunca termina. Porque projeto que não termina consome horas que não foram pagas. Porque isso gera cansaço e atrito, e com limite claro o cliente decide melhor o que pedir.</div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a alguém a diferença entre o preço da criação e o da manutenção, usando o exemplo do conserto e da revisão do carro.</div>`
      ],
      ch:[
        { who:'Roberta, 29 anos, começando a vender sites', says:'Um cliente pediu desconto e eu fechei "site com alterações ilimitadas para sempre" por R$ 400.',
          q:'Qual é o problema dessa combinação?',
          opts:[
            {t:'Nenhum, porque o cliente ficou feliz.', ok:false, why:'Alterações ilimitadas para sempre viram trabalho sem fim e sem pagamento.'},
            {t:'O problema é só o valor baixo; com R$ 800 estaria certo.', ok:false, why:'Mesmo com valor maior, sem limite o trabalho não tem fim.'},
            {t:'Sem escopo e sem limite, o trabalho não termina. O certo é separar a criação, com revisões limitadas, de uma manutenção mensal opcional, tudo por escrito.', ok:true, why:'Escopo claro protege as duas partes e deixa o preço justo.'}
          ]},
        { who:'Sr. Carlos, 52 anos, dono de uma auto elétrica', says:'Quanto custa um site? Um sobrinho falou que faz por R$ 100 e um rapaz pediu R$ 5 mil.',
          q:'Qual é a resposta mais profissional?',
          opts:[
            {t:'Explicar o que está incluído no seu pacote, mostrar a proposta escrita com escopo, prazo e preço baseado no seu tempo e no mercado local, e deixar ele comparar entregas, e não só valores.', ok:true, why:'Comparar o que está incluído ajuda o cliente a decidir com clareza.'},
            {t:'Cobrar R$ 90 para ganhar do sobrinho.', ok:false, why:'Disputar só no preço pode deixar seu trabalho no prejuízo e sem qualidade.'},
            {t:'Dizer que com o seu site ele vai faturar o dobro, então R$ 5 mil é barato.', ok:false, why:'Promessa de ganho é enganosa: ninguém garante o faturamento do cliente.'}
          ]},
        { who:'Mariana, 34 anos, faz sites há um ano', says:'Meus clientes pagam manutenção, mas cada um entende uma coisa. Um quer que eu crie uma página nova todo mês.',
          q:'Como resolver?',
          opts:[
            {t:'Fazer tudo o que pedirem, para não perder o cliente.', ok:false, why:'Sem limite, a manutenção vira projeto novo sem pagamento.'},
            {t:'Escrever as regras da manutenção (o que conta como alteração pequena, quantas por mês, prazo de resposta) e orçar à parte o que for novo, como páginas e redesenho.', ok:true, why:'Regras escritas alinham a expectativa e mostram o que é cobrado à parte.'},
            {t:'Cancelar a manutenção de todos os clientes.', ok:false, why:'A manutenção é útil. O problema é a falta de regras.'}
          ]}
      ]},
    { id:'3.5', title:'Alterações depois da entrega e suporte', min:10,
      body:[
        `<div class="card analogy"><h3>🔧 A revisão do carro</h3><p>Quem compra um carro sabe que existe garantia para defeito de fábrica, revisão com preço combinado e conserto à parte quando há uma batida. Ninguém espera que a concessionária troque o para-choque de graça. Com o site é igual: o cliente precisa saber o que é correção de um erro seu, o que está na manutenção e o que é serviço novo, com orçamento próprio.</p></div>`,
        `<div class="term"><b>Pedido de alteração</b> = solicitação do cliente para mudar algo no site depois da entrega. <b>Prazo de resposta</b> = tempo combinado para responder e para executar. <b>Backup</b> = cópia de segurança dos arquivos do site, guardada fora da hospedagem. <b>Renovação de domínio</b> = pagamento periódico para manter o endereço; se vencer, o site sai do ar e o endereço pode ser perdido.</div>`,
        `<div class="card"><h3>Como tratar um pedido de mudança</h3><ol class="golden"><li><span><b>Um canal só:</b> combine que os pedidos chegam por mensagem escrita, e não por áudio solto ou ligação no fim de semana.</span></li><li><span><b>Confirme o que entendeu:</b> repita a seção e o texto novo antes de mexer.</span></li><li><span><b>Classifique:</b> erro seu (corrige sem custo), alteração da manutenção ou serviço novo (orçamento à parte).</span></li><li><span><b>Diga o prazo</b> de execução.</span></li><li><span><b>Faça backup</b> antes de alterar.</span></li><li><span><b>Teste, avise e registre:</b> confira no celular, avise que está no ar e anote numa planilha de alterações (data, pedido, o que foi feito).</span></li></ol></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Na manutenção (exemplo)</th><th>Fora da manutenção (orçamento à parte)</th></tr><tr><td>Trocar horários, preços e telefone</td><td>Criar nova página ou seção</td></tr><tr><td>Trocar até 3 fotos por mês</td><td>Redesenho completo</td></tr><tr><td>Backup mensal e checar se o site está no ar</td><td>Loja virtual ou agendamento online</td></tr><tr><td>Lembrar a renovação do domínio, pago pelo cliente</td><td>Textos longos novos, fotos profissionais e anúncios pagos</td></tr></table></div>`,
        `<div class="card"><h3>Prazos e combinados realistas</h3><p>Um combinado simples funciona bem: "respondo em até 1 dia útil e faço alterações simples em até 3 dias úteis". Não prometa atendimento 24 horas se você trabalha sozinho. Combine o que é urgente (site fora do ar, número de WhatsApp errado) e o que pode esperar. Se a Dona Cida, de uma lanchonete em Salvador, muda o cardápio toda semana, talvez o melhor seja ensiná-la a trocar sozinha num construtor ou montar um pacote maior, em vez de atender tudo no improviso.</p></div>`,
        `<div class="card"><h3>Backup e domínio</h3><p>Guarde uma cópia dos arquivos a cada alteração, numa pasta com a data, e entregue uma cópia ao cliente. Domínio e hospedagem ficam no nome do cliente, com o pagamento dele; anote as datas de vencimento e avise com 30 dias de antecedência. Se um dia você parar de prestar o serviço, entregue acessos e backup com antecedência: o site é do cliente.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><ul><li>Aceitar pedido por áudio às 23h e fazer sem confirmar.</li><li>Mexer no site sem backup.</li><li>Registrar o domínio no seu CPF "para facilitar".</li><li>Manutenção sem limite, que vira projeto novo de graça.</li><li>Sumir sem avisar quando estiver sem tempo.</li></ul><p>⚠️ Manutenção é um serviço combinado, não uma garantia de renda mensal: clientes podem cancelar, e tudo bem.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> depois de entregar o site, você combina com o dono como ele pede mudanças, em quanto tempo você responde, o que já está pago e o que custa à parte. E sempre guarda uma cópia antes de mexer, para poder voltar atrás.</div>`
      ],
      ch:[
        { who:'Marcos, 38 anos, cuida do site de uma barbearia em Porto Alegre', says:'O dono mandou um áudio pedindo para "dar uma mexida no site, deixar mais moderno". Ele paga a manutenção mensal.', q:'O que Marcos deve fazer?',
          opts:[
            {t:'Fazer o redesenho completo, já que ele paga manutenção.', ok:false, why:'Redesenho não costuma estar na manutenção. Fazer de graça cria uma expectativa que não se sustenta.'},
            {t:'Confirmar por escrito o que ele quer, explicar que redesenho não está na manutenção combinada e enviar um orçamento à parte.', ok:true, why:'Confirmar o pedido e separar manutenção de serviço novo mantém a relação clara e justa.'},
            {t:'Ignorar o áudio até ele pedir de novo.', ok:false, why:'Deixar o cliente sem resposta quebra o prazo de atendimento e a confiança.'}
          ]},
        { who:'Patrícia, 44 anos, fez o site de uma clínica de fisioterapia em Natal', says:'Registrei o domínio no meu CPF para facilitar. Agora quero parar de fazer sites e não sei o que fazer com ele.', q:'Qual é o caminho certo?',
          opts:[
            {t:'Deixar o domínio vencer, já que ela não presta mais o serviço.', ok:false, why:'O site sairia do ar e a clínica poderia perder o endereço que divulgou.'},
            {t:'Cobrar uma taxa da clínica para liberar o domínio.', ok:false, why:'O endereço foi feito para a clínica. Reter o domínio para cobrar é antiético.'},
            {t:'Avisar com antecedência, transferir o domínio para o nome da clínica e entregar acessos e backup.', ok:true, why:'O site é do cliente. Uma saída organizada protege o negócio e a reputação de Patrícia.'}
          ]},
        { who:'Diego, 31 anos, mantém o site de uma loja de roupas em Belém', says:'Vou trocar as fotos da vitrine direto no site, rapidinho. Se der problema, eu arrumo depois.', q:'O que está faltando no plano de Diego?',
          opts:[
            {t:'Fazer backup antes, trocar as fotos, testar no celular e registrar a alteração.', ok:true, why:'Com backup, teste e registro, qualquer erro é desfeito rápido e o cliente sabe o que mudou.'},
            {t:'Nada, troca de foto é mudança pequena.', ok:false, why:'Até mudança pequena pode quebrar a página ou deixar o site pesado. O backup custa pouco.'},
            {t:'Pedir para a dona testar depois e avisar se quebrou.', ok:false, why:'Testar é responsabilidade de quem altera, não do cliente.'}
          ]}
      ]},
    { id:'3.6', title:'Projeto: testes, proposta e combinado de suporte', min:30,
      body:[
        `<div class="card"><p>Este projeto fecha o curso. Pegue o site publicado em rascunho no projeto 2.6 e coloque à prova. Depois, prepare os documentos que um cliente receberia: o registro dos testes, o aviso de privacidade (se houver coleta de dados), uma proposta de entrega e manutenção e o combinado de alterações e suporte. Pode usar IA para organizar os textos, mas os pedidos e as decisões de preço são seus, com base na sua pesquisa.</p></div>`,
        `<div class="card"><p><b>Como fica uma boa entrega:</b> uma tabela de testes (aparelho, o que foi testado, resultado, correção), um aviso de privacidade curto ou a explicação de por que não é necessário, e uma proposta de 1 página com escopo, revisões, prazo, preço, o que não está incluído, como pedir alterações, prazo de resposta, backup e datas de renovação do domínio.</p><p>⚠️ Nada de prometer ganhos ou primeiro lugar no Google. A Trilha de IA terá um projeto final próprio; aqui o foco é este site.</p></div>`
      ],
      projeto:{
        entrega:'Um checklist de testes preenchido com as correções feitas e uma proposta de entrega, manutenção e suporte para o cliente do site.',
        passos:[
          'Teste o site em pelo menos 2 celulares e 1 computador e faça o teste das pessoas de fora com 2 ou 3 pessoas.',
          'Registre cada teste (aparelho, resultado, correção) e confira velocidade, contraste, botões e links.',
          'Escreva o aviso de privacidade simples, se o site coletar dados, ou explique por que não precisa.',
          'Pesquise preços na sua região e monte a proposta: escopo, revisões, prazo, preço, o que não está incluído e as regras da manutenção.',
          'Escreva o combinado de suporte: canal e prazo de resposta, o que está e o que não está na manutenção, rotina de backup e datas de renovação do domínio.'
        ],
        checklist:[
          'Há registro de testes em aparelhos diferentes, com as correções feitas.',
          'O botão de WhatsApp e os links foram testados no celular.',
          'A proposta separa criação, manutenção e serviços novos e limita as revisões.',
          'O combinado de suporte tem prazo de resposta, backup e renovação do domínio no nome do cliente.',
          'Nenhuma promessa de ganho ou de primeiro lugar no Google aparece na proposta.'
        ],
        minimo:350
      }}
  ]}
];

const MODDONE = {
  1: 'Você sabe planejar um site simples, claro e honesto: seções certas, textos verdadeiros e a ferramenta adequada ao cliente.',
  2: 'Você sabe montar com ajuda da IA, em partes, com imagens licenciadas, SEO local básico e publicação com domínio no nome do cliente.',
  3: 'Parabéns, você concluiu o curso Sites Simples com IA! Seu certificado do curso já está disponível. Você sabe testar, cuidar da privacidade, precificar com cautela, entregar com manual e combinar alterações e suporte com clareza. Lembre: o curso ensina a fazer um serviço bem feito, mas não garante renda.'
};

const PROMPTS = {
  1: [
    { title:'Textos do site', desc:'Para escrever o conteúdo de uma página.' }
  ],
  2: [
    { title:'Site em partes', desc:'Para montar com a IA em etapas.' }
  ],
  3: [
    { title:'Checklist de testes', desc:'Para testar antes de entregar.' }
  ]
};

const THEME = { 1:['#06B6D4','#3B82F6'], 2:['#3B82F6','#06B6D4'], 3:['#06B6D4','#3B82F6'] };
const LIC = { '1.1':'🧭','1.2':'✍️','1.3':'🏪','1.4':'🚗','1.5':'🔎','1.6':'📝','2.1':'🛠️','2.2':'🌐','2.3':'🎨','2.4':'🗺️','2.5':'🧐','2.6':'🚀','3.1':'📱','3.2':'📁','3.3':'🔒','3.4':'💰','3.5':'🤝','3.6':'📋' };

return {
  id: 'sites-simples-com-ia',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
