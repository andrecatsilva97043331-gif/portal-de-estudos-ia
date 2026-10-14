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
    { id:'1.7', title:'Exemplo resolvido: da conversa com o dono à página no papel', min:14,
      body:[
        `<div class="card analogy"><h3>🍲 A receita antes do almoço de domingo</h3><p>Quem vai cozinhar para a família no domingo separa os ingredientes, lê a receita e só depois acende o fogão. Quem começa sem olhar a despensa descobre no meio que falta o tomate. Com o site é igual: as anotações da conversa com o dono são os ingredientes, e o mapa de seções é a receita. Só depois disso faz sentido abrir a ferramenta.</p></div>`,
        `<div class="card"><h3>O caso: Barbearia do Wesley, em Contagem (MG)</h3><p>Anotações da entrevista de 20 minutos, só com fatos que o dono confirmou:</p><ol class="golden"><li><span>Corte, barba e sobrancelha. O que mais sai é corte com barba.</span></li><li><span>Clientes do bairro Eldorado, de 18 a 45 anos, muitos chegam por indicação.</span></li><li><span>Pergunta campeã no WhatsApp: "tem horário hoje?" e "aceita Pix?".</span></li><li><span>Diferencial real: abre às 7h para quem trabalha cedo, e atende com hora marcada.</span></li><li><span>Não faz química nem atende a domicílio.</span></li></ol></div>`,
        `<div class="flows"><div class="flow old"><b>Topo antes (rascunho sem briefing)</b><div class="node">"Barbearia Premium: estilo, tradição e excelência para o homem moderno."</div></div><div class="flow new"><b>Topo depois (com os fatos)</b><div class="node">"Corte e barba no Eldorado, Contagem. Abrimos às 7h, com hora marcada. Botão: Ver horários no WhatsApp."</div></div></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Seção</th><th>Problema no rascunho</th><th>Versão melhorada</th></tr><tr><td>Serviços</td><td>Listava "química e coloração", que ele não faz</td><td>Só corte, barba e sobrancelha, cada um com uma linha</td></tr><tr><td>Perguntas frequentes</td><td>Não existia</td><td>"Tem horário hoje?", "Aceita Pix?", "Precisa marcar?"</td></tr><tr><td>Prova social</td><td>Frases inventadas pela IA</td><td>2 depoimentos reais, com autorização por mensagem</td></tr><tr><td>Contato</td><td>Só um formulário</td><td>Botão de WhatsApp, endereço em texto, mapa e horários</td></tr></table></div>`,
        `<div class="card"><h3>Erros comuns</h3><ul><li>Colar no chat da IA o nome e o telefone de clientes da barbearia: use só dados do negócio, nunca de pessoas.</li><li>Aceitar serviço que a IA "achou que combinava".</li><li>Usar foto de cliente tirada do Instagram sem pedir.</li><li>Pular as perguntas frequentes, que respondem o que o cliente mais quer saber.</li></ul></div>`,
        `<div class="card"><h3>✋ Agora é sua vez (ChatGPT, cerca de 4 min)</h3><ol class="golden"><li><span>Escolha um negócio do seu bairro ou invente um com detalhes.</span></li><li><span>Escreva você as 5 anotações, no formato do exemplo.</span></li><li><span>Peça, com as suas palavras, só o texto do topo e das perguntas frequentes, dizendo o que a IA não pode inventar.</span></li><li><span>Compare com as suas anotações e risque o que não for fato.</span></li></ol><p>🔒 Não cole nomes, telefones ou conversas de clientes. Use só informações públicas do negócio ou fictícias.</p></div>`
      ],
      ch:[
        { who:'Gabriela, 27 anos, fazendo o site de uma lavanderia em Sorocaba', says:'A IA colocou "lavagem a seco e entrega grátis" nos serviços. Ficou completo, vou manter.', q:'O que ela deve fazer primeiro?',
          opts:[
            {t:'Manter, porque são serviços comuns de lavanderia.', ok:false, why:'Ser comum não quer dizer que essa lavanderia oferece. Serviço errado gera cliente frustrado.'},
            {t:'Conferir com as anotações da entrevista e com a dona, e tirar o que não foi confirmado.', ok:true, why:'O briefing é a fonte da verdade. A IA completa lacunas com palpites.'},
            {t:'Trocar "grátis" por "com taxa" e manter o resto.', ok:false, why:'Ainda é informação não confirmada. Tudo precisa vir dos fatos do negócio.'}
          ]},
        { who:'Wesley, 33 anos, o barbeiro do exemplo', says:'Para a IA escrever melhor, vou mandar o print da minha agenda, com nome e telefone dos clientes.', q:'Como orientar?',
          opts:[
            {t:'Aceitar, porque quanto mais contexto, melhor o texto.', ok:false, why:'Dados de clientes não são necessários para escrever o site e não devem ir para ferramentas externas.'},
            {t:'Mandar só os nomes, sem os telefones.', ok:false, why:'Nome também é dado pessoal. O texto do site não precisa disso.'},
            {t:'Explicar que basta descrever os serviços e horários, sem dados de clientes, e escrever o pedido só com fatos do negócio.', ok:true, why:'Coletar e repassar só o necessário protege os clientes dele e segue a lógica da LGPD.'}
          ]},
        { who:'Otávio, 24 anos, planejando o site de uma loja de açaí', says:'O dono disse que a pergunta mais comum é "entrega no meu bairro?". Onde coloco isso?', q:'Qual é a melhor decisão?',
          opts:[
            {t:'Nas perguntas frequentes e perto do botão de WhatsApp, com a lista real de bairros atendidos.', ok:true, why:'Responder a dúvida mais comum onde a pessoa decide reduz mensagens repetidas e ajuda a converter.'},
            {t:'Em lugar nenhum: o cliente pergunta no WhatsApp.', ok:false, why:'Se a dúvida é a mais comum, o site deve responder antes.'},
            {t:'No rodapé, em letra pequena.', ok:false, why:'Informação importante escondida é como não ter.'}
          ]}
      ]},
    { id:'1.8', title:'Lista de materiais: fotos, autorizações e dados antes de montar', min:14,
      body:[
        `<div class="card analogy"><h3>🧱 A lista do pedreiro</h3><p>Antes de começar a obra, o pedreiro entrega a lista: tantos sacos de cimento, tanto de areia, tantos tijolos. Se o material não chega, a obra para, e ninguém culpa o pedreiro. No site, a sua lista de materiais diz o que o cliente precisa mandar, em que formato e com qual autorização. Sem ela, o projeto empaca esperando "umas fotos".</p></div>`,
        `<div class="flows"><div class="flow old"><b>Pedido vago</b><div class="node">"Dona Neide, me manda umas fotos e as informações aí quando puder."</div></div><div class="flow new"><b>Pedido organizado</b><div class="node">Lista com 6 itens, formato de cada um, prazo combinado e o aviso de que a montagem começa quando tudo chegar.</div></div></div>`,
        `<div class="card"><h3>Exemplo resolvido: Confeitaria da Dona Neide, em Belém</h3><div class="tw"><table class="tbl"><tr><th>Material</th><th>Quem fornece</th><th>Cuidado</th></tr><tr><td>Logo</td><td>Dona Neide (arquivo original)</td><td>Logo baixado do Google sai borrado; peça o arquivo da gráfica</td></tr><tr><td>8 a 12 fotos dos bolos</td><td>Dona Neide, com luz natural</td><td>Fotos dela, e não de outras confeitarias</td></tr><tr><td>Fotos com pessoas</td><td>Dona Neide</td><td>Autorização de cada pessoa por mensagem; crianças só com os responsáveis</td></tr><tr><td>Depoimentos</td><td>Clientes</td><td>Pedido de autorização para frase e primeiro nome</td></tr><tr><td>Dados do negócio</td><td>Dona Neide</td><td>Telefone, bairros de entrega, horários, formas de pagamento</td></tr><tr><td>Acessos</td><td>Dona Neide</td><td>Contas no e-mail dela; nada de senha por WhatsApp</td></tr></table></div></div>`,
        `<div class="why-chain"><b>Por que o prazo começa com o material?</b> Porque sem fotos e dados você monta no escuro. Porque montar no escuro gera retrabalho. Porque retrabalho atrasa a entrega e a culpa recai sobre você, mesmo sem ser sua.</div>`,
        `<div class="card"><h3>Erros comuns</h3><ul><li>Usar foto de bolo de outra confeitaria "só até chegar a dela".</li><li>Publicar foto de festa com convidados sem autorização.</li><li>Pedir RG ou CPF do cliente sem precisar: guarde só o que o trabalho exige e apague o resto ao final.</li><li>Receber senha pessoal por mensagem.</li></ul></div>`,
        `<div class="card"><h3>✋ Agora é sua vez (Google Maps, cerca de 4 min)</h3><ol class="golden"><li><span>Busque no Maps o tipo de negócio do seu cliente no bairro dele.</span></li><li><span>Abra 3 perfis e veja que tipos de foto aparecem: fachada, produto, equipe.</span></li><li><span>Anote quais fotos ajudam a decidir e quais faltam.</span></li><li><span>Escreva a sua lista de materiais com formato e cuidado para cada item.</span></li></ol><p>🔒 Só observe: não baixe nem reutilize fotos dos concorrentes, e não anote dados de quem fez avaliações.</p></div>`
      ],
      ch:[
        { who:'Dona Neide, 58 anos, confeiteira em Belém', says:'Ainda não tirei as fotos dos meus bolos. Pega umas da internet por enquanto, depois a gente troca.', q:'Qual é a melhor resposta?',
          opts:[
            {t:'Usar fotos da internet e trocar depois.', ok:false, why:'Fotos da internet têm dono, e o "depois" costuma não chegar. Ela venderia bolos que não são dela.'},
            {t:'Combinar um dia para fotografar com luz natural, deixar a seção marcada como pendente e só publicar com fotos reais.', ok:true, why:'Fotos reais mostram o produto verdadeiro e evitam problema de direitos.'},
            {t:'Gerar fotos de bolos com IA e dizer que são dela.', ok:false, why:'Mostrar produto falso como se fosse real engana o cliente final.'}
          ]},
        { who:'Henrique, 30 anos, fazendo o site de um buffet infantil em Londrina', says:'O dono me mandou 40 fotos de festas, com várias crianças. Vou usar as mais bonitas na página.', q:'O que fazer antes de publicar?',
          opts:[
            {t:'Publicar, porque as festas aconteceram no buffet.', ok:false, why:'O local não dá direito sobre a imagem das crianças.'},
            {t:'Borrar só os olhos das crianças.', ok:false, why:'Ainda é possível reconhecer, e falta a autorização dos responsáveis.'},
            {t:'Usar fotos do espaço e da decoração sem pessoas, e só usar fotos com crianças que tenham autorização escrita dos responsáveis.', ok:true, why:'Imagem de criança pede cuidado redobrado. Fotos do espaço mostram o serviço sem esse risco.'}
          ]},
        { who:'Priscila, 26 anos, montando a lista de materiais de uma clínica veterinária', says:'Vou pedir também a lista de clientes com telefone, para colocar um "nossos clientes" no site.', q:'Como ajustar a lista?',
          opts:[
            {t:'Tirar esse item: o site não precisa de dados de clientes. Para prova social, pedir depoimentos autorizados.', ok:true, why:'Pedir só o necessário protege os clientes da clínica e evita expor dados pessoais.'},
            {t:'Manter, mas publicar só os nomes.', ok:false, why:'Nome é dado pessoal e publicar sem autorização expõe as pessoas.'},
            {t:'Manter e guardar a lista para usar em outros projetos.', ok:false, why:'Dados coletados para uma finalidade não devem ser reaproveitados para outra.'}
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
    { id:'2.7', title:'Exemplo resolvido: a página única no Google Sites', min:15,
      body:[
        `<div class="card analogy"><h3>🧩 O móvel que vem na caixa</h3><p>O guarda-roupa que chega desmontado vem com as peças e o manual. Quem segue a ordem e confere cada parafuso monta numa tarde. Quem pula etapas fica com a porta torta. O Google Sites é esse móvel: os blocos estão prontos, e o seu trabalho é encaixar na ordem do mapa de seções e conferir cada parte.</p></div>`,
        `<div class="card"><h3>O caso: Oficina do Seu Jair, em Uberlândia</h3><ol class="golden"><li><span><b>Conta:</b> criar o site na conta Google do próprio Seu Jair, com ele ao lado, ou combinar por escrito a transferência da propriedade.</span></li><li><span><b>Tema:</b> escolher um tema simples e ajustar a cor para o azul da fachada.</span></li><li><span><b>Seções:</b> topo, serviços, como funciona, fotos reais, perguntas e contato, com os textos já revisados.</span></li><li><span><b>Botão:</b> inserir um botão "Pedir orçamento no WhatsApp" com o link wa.me no formato correto.</span></li><li><span><b>Mapa:</b> inserir o mapa e escrever o endereço também em texto.</span></li><li><span><b>Publicar:</b> escolher o endereço provisório e abrir no celular. Depois de cada edição, publicar de novo, senão a mudança não aparece.</span></li></ol></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Primeira versão</th><th>Problema</th><th>Depois da revisão</th></tr><tr><td>Topo só com foto de carro, sem frase</td><td>Ninguém sabe o que a oficina faz</td><td>"Freio, suspensão e troca de óleo no Bairro Tibery"</td></tr><tr><td>Botão "Clique aqui"</td><td>Não diz a ação</td><td>"Pedir orçamento no WhatsApp"</td></tr><tr><td>Só o mapa</td><td>Não carrega em sinal fraco</td><td>Mapa + endereço em texto + referência</td></tr><tr><td>Menu com 7 itens</td><td>Página única não precisa disso</td><td>Menu com 4 âncoras ou nenhum</td></tr></table></div>`,
        `<div class="card"><h3>Limites do plano gratuito</h3><p>O endereço gratuito fica dentro de sites.google.com. Para usar um domínio próprio, é preciso comprar o domínio e seguir a ajuda oficial para ligar. Os recursos são mais simples que os de construtores pagos. Explique isso ao cliente antes e confira as condições atuais, porque elas mudam.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><ul><li>Criar na sua conta pessoal e depois não conseguir entregar.</li><li>Editar e esquecer de publicar de novo.</li><li>Inserir imagens de busca sem conferir a licença.</li><li>Não testar o botão no celular.</li></ul></div>`,
        `<div class="card"><h3>✋ Agora é sua vez (Google Sites, cerca de 5 min)</h3><ol class="golden"><li><span>Crie um site novo para um negócio fictício ou para o cliente que autorizou.</span></li><li><span>Monte só o topo e o contato, com frase do que faz, para quem e onde.</span></li><li><span>Insira o botão de WhatsApp e confira o link.</span></li><li><span>Publique em modo provisório e abra no celular.</span></li></ol><p>🔒 Não use o telefone de outra pessoa sem autorização; num teste, use o seu ou deixe um número de exemplo e não divulgue o link.</p></div>`
      ],
      ch:[
        { who:'Jair, 60 anos, dono da oficina', says:'Você criou o site na sua conta Google. Se um dia a gente parar de trabalhar junto, como eu fico?', q:'Qual teria sido o melhor caminho?',
          opts:[
            {t:'Criar o site na conta Google dele, com ele ao lado, ou transferir a propriedade e registrar isso na entrega.', ok:true, why:'O site é do negócio. Na conta do cliente, ele não depende de você para continuar.'},
            {t:'Manter na sua conta e prometer que nunca vai sumir.', ok:false, why:'Promessa não substitui a posse. O cliente fica refém.'},
            {t:'Passar a senha da sua conta pessoal para ele.', ok:false, why:'Compartilhar senha pessoal é inseguro para os dois.'}
          ]},
        { who:'Sabrina, 23 anos, ajustando um site no Google Sites', says:'Troquei o horário de sábado no editor, mas no celular do cliente continua o horário antigo.', q:'O que provavelmente faltou?',
          opts:[
            {t:'Esperar uma semana, porque o Google demora.', ok:false, why:'A mudança só aparece depois de publicar de novo.'},
            {t:'Clicar em publicar de novo depois da edição e conferir no celular.', ok:true, why:'No Google Sites, as edições ficam no rascunho até a nova publicação.'},
            {t:'Apagar o site e criar outro.', ok:false, why:'Desnecessário e ainda muda o endereço que já foi divulgado.'}
          ]},
        { who:'Seu Raimundo, 67 anos, dono de uma mercearia', says:'Ouvi dizer que no Google Sites é grátis. Então o endereço vai ser mercearia.com.br de graça, né?', q:'Como explicar com honestidade?',
          opts:[
            {t:'Confirmar que sim, para fechar o serviço.', ok:false, why:'É informação falsa. Ele descobriria depois e perderia a confiança.'},
            {t:'Dizer que o Google Sites não serve para mercearia.', ok:false, why:'Serve bem para página simples. O ponto é explicar o endereço.'},
            {t:'Explicar que a montagem no plano gratuito fica num endereço dentro de sites.google.com e que o domínio próprio é comprado à parte, por ano, se ele quiser.', ok:true, why:'Mostrar o que é grátis e o que custa evita surpresa e deixa a decisão com ele.'}
          ]}
      ]},
    { id:'2.8', title:'Planos grátis sem surpresa: subdomínio, marca da plataforma e imagens de IA', min:14,
      body:[
        `<div class="card analogy"><h3>🏬 O quiosque no shopping</h3><p>O quiosque sai mais barato que uma loja de rua, mas segue as regras do shopping: horário dele, placa com o nome do shopping, e o contrato pode mudar na renovação. Plano gratuito de site é parecido. Funciona bem, desde que o cliente saiba das regras antes, e não depois que divulgou o link.</p></div>`,
        `<div class="term"><b>Subdomínio</b> = endereço dentro do da plataforma, como negocio.plataforma.app. <b>Marca da plataforma</b> = selo ou aviso "feito com..." que alguns planos grátis exibem, como uma marca d'água. <b>Termos de uso</b> = regras da ferramenta, incluindo uso comercial e o que acontece com o que você cria.</div>`,
        `<div class="card"><h3>Exemplo resolvido: Rafa, personal trainer em Florianópolis</h3><div class="tw"><table class="tbl"><tr><th>O que o plano grátis costuma ter</th><th>Impacto para o Rafa</th><th>Como explicar</th></tr><tr><td>Subdomínio</td><td>Endereço mais longo no cartão</td><td>Serve para começar; domínio próprio é opcional e pago à parte</td></tr><tr><td>Selo da plataforma</td><td>Aparece no rodapé ou num canto</td><td>Mostrar como fica antes de aprovar</td></tr><tr><td>Limites de páginas ou recursos</td><td>Pode faltar agenda online</td><td>Dizer o que dá e o que não dá</td></tr><tr><td>Condições que mudam</td><td>Pode virar pago</td><td>Anotar a data em que você conferiu</td></tr></table></div></div>`,
        `<div class="flows"><div class="flow old"><b>Proposta antes</b><div class="node">"Site grátis para sempre, sem nenhum custo."</div></div><div class="flow new"><b>Proposta depois</b><div class="node">"Página no plano gratuito, com subdomínio e selo da plataforma (condições conferidas em outubro). Domínio próprio é opcional, com custo anual pago por você."</div></div></div>`,
        `<div class="card"><h3>Imagens de IA no plano grátis</h3><p>Em algumas ferramentas, como o Ideogram no plano gratuito, tudo o que você gera fica público. Então não coloque no pedido o nome, o logo ou a foto de um cliente sem autorização. Use a imagem de IA como ilustração ou rascunho de logo, anote no relatório que foi gerada por IA e não a apresente como foto do lugar real.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><ul><li>Prometer "grátis para sempre".</li><li>Esconder o selo da plataforma até o cliente ver no ar.</li><li>Ignorar se o plano permite uso comercial.</li><li>Gerar logo com o nome do cliente numa ferramenta pública sem combinar.</li></ul></div>`,
        `<div class="card"><h3>✋ Agora é sua vez (Ideogram, cerca de 4 min)</h3><ol class="golden"><li><span>Abra a página de planos e anote, com a data, o que o gratuito oferece.</span></li><li><span>Descreva com suas palavras uma imagem de topo para um negócio fictício.</span></li><li><span>Gere 2 opções e escolha uma.</span></li><li><span>Escreva 2 linhas de aviso ao cliente: origem da imagem e regras do plano.</span></li></ol><p>🔒 No grátis as imagens ficam públicas: não use nomes, rostos ou logos reais.</p></div>`
      ],
      ch:[
        { who:'Rafa, 29 anos, personal trainer', says:'O site ficou pronto, mas apareceu um selo da plataforma no rodapé. Ninguém me avisou.', q:'O que teria evitado a surpresa?',
          opts:[
            {t:'Mostrar antes da aprovação como o plano grátis exibe o site, com subdomínio e selo, e anotar isso na proposta.', ok:true, why:'Avisar antes transforma o limite numa escolha consciente do cliente.'},
            {t:'Esconder o selo com um bloco branco por cima.', ok:false, why:'Burlar o plano pode violar os termos de uso e o site pode ser suspenso.'},
            {t:'Dizer que o selo some sozinho em alguns meses.', ok:false, why:'É uma informação falsa.'}
          ]},
        { who:'Kelly, 25 anos, criando o logo de uma doceria no plano grátis de uma ferramenta de imagens', says:'Vou colocar o nome da doceria e a foto da dona no pedido para a imagem ficar personalizada.', q:'O que considerar?',
          opts:[
            {t:'Nada, a imagem é só para uso interno.', ok:false, why:'No plano em que tudo fica público, o que você gera pode ser visto por qualquer pessoa.'},
            {t:'Combinar com a dona antes, não usar a foto dela e lembrar que o resultado fica público.', ok:true, why:'Autorização e cuidado com imagem de pessoas valem também em ferramentas de IA.'},
            {t:'Usar a foto de uma modelo qualquer da internet no lugar.', ok:false, why:'A foto da modelo também tem dono e direito de imagem.'}
          ]},
        { who:'Fábio, 35 anos, recomendando ferramenta para um cliente', says:'Li no ano passado que esse construtor era grátis com domínio próprio. Vou prometer isso.', q:'Qual é a postura certa?',
          opts:[
            {t:'Prometer, porque a informação era oficial.', ok:false, why:'Condições de plano mudam. A informação de um ano atrás pode estar errada.'},
            {t:'Conferir a página oficial de planos hoje, anotar a data e passar ao cliente o que vale agora.', ok:true, why:'Conferir antes de recomendar evita promessa que você não controla.'},
            {t:'Não falar de custos para não assustar.', ok:false, why:'Omitir custo gera conflito depois.'}
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
    { id:'3.7', title:'Exemplo resolvido: antes e depois com PageSpeed e WAVE', min:15,
      body:[
        `<div class="card analogy"><h3>🩺 O check-up no posto de saúde</h3><p>Ninguém precisa ser médico para entender um exame: você olha o que está fora da faixa e conversa sobre isso. As ferramentas de teste fazem o check-up do site. Você não precisa entender cada número, só achar o que está em vermelho, corrigir o que dá e conferir de novo.</p></div>`,
        `<div class="card"><h3>O caso: Açaíteria Ponto Doce, em Manaus (exemplo ilustrativo)</h3><p>O PageSpeed, na aba de celular, deu nota de desempenho em vermelho. O WAVE apontou imagens sem texto alternativo e erros de contraste. Veja o que foi feito, um item por vez:</p><div class="tw"><table class="tbl"><tr><th>Antes</th><th>O que a ferramenta mostrou</th><th>Correção sem programar</th></tr><tr><td>3 fotos de 5 MB</td><td>Imagens grandes atrasam a página</td><td>Redimensionar para 1200 px e comprimir</td></tr><tr><td>Texto cinza claro no branco</td><td>Contraste baixo</td><td>Texto quase preto e letra maior</td></tr><tr><td>Fotos sem descrição</td><td>Imagem sem texto alternativo</td><td>"Copo de açaí com banana e granola"</td></tr><tr><td>Botão "Clique aqui"</td><td>Link sem sentido fora do contexto</td><td>"Pedir no WhatsApp"</td></tr><tr><td>Vídeo com som automático</td><td>Atrapalha quem usa leitor de tela</td><td>Vídeo sem autoplay</td></tr></table></div></div>`,
        `<div class="card"><h3>Checklist rápido de acessibilidade e velocidade</h3><ol class="golden"><li><span>Fotos leves e com descrição.</span></li><li><span>Contraste bom e letra confortável no celular.</span></li><li><span>Botões que dizem a ação.</span></li><li><span>Nada tocando sozinho.</span></li><li><span>Teste de novo e registre o antes e o depois.</span></li></ol></div>`,
        `<div class="why-chain"><b>Por que corrigir um item por vez?</b> Porque assim você sabe o que melhorou a nota. Porque, se algo quebrar, é fácil voltar. Porque o registro de antes e depois vira prova do seu cuidado na entrega.</div>`,
        `<div class="card"><h3>Erros comuns</h3><ul><li>Perseguir nota 100 e gastar horas em detalhes que o visitante nem percebe.</li><li>Testar só a versão de computador.</li><li>Achar que a ferramenta substitui o teste com pessoas de verdade.</li><li>Prometer ao cliente que a nota garante clientes ou posição no Google.</li></ul></div>`,
        `<div class="card"><h3>✋ Agora é sua vez (PageSpeed e WAVE, cerca de 5 min)</h3><ol class="golden"><li><span>Rode o PageSpeed no rascunho que você publicou, na aba de celular.</span></li><li><span>Rode o WAVE no mesmo link.</span></li><li><span>Escolha 2 problemas que dá para resolver sem programar.</span></li><li><span>Corrija, teste de novo e anote o antes e o depois.</span></li></ol><p>🔒 Teste os seus sites ou os de clientes que autorizaram. Não divulgue relatório do site de outra pessoa para expor falhas.</p></div>`
      ],
      ch:[
        { who:'Jéssica, 28 anos, revisando o site de uma açaíteria', says:'O PageSpeed deu vermelho. Vou trocar tudo de uma vez: hospedagem, tema e fotos.', q:'Qual é o melhor caminho?',
          opts:[
            {t:'Trocar tudo, porque assim resolve mais rápido.', ok:false, why:'Mudando tudo junto, você não sabe o que ajudou e pode quebrar o site.'},
            {t:'Ler as principais sugestões, começar pelas imagens pesadas, testar de novo e seguir um item por vez.', ok:true, why:'Imagens são a causa mais comum de lentidão, e corrigir em etapas mostra o efeito de cada ajuste.'},
            {t:'Ignorar a nota, porque ferramenta não entende de açaí.', ok:false, why:'A nota reflete a experiência de quem abre no 4G. Vale corrigir o principal.'}
          ]},
        { who:'Leonardo, 32 anos, viu o relatório do WAVE', says:'Apareceram 6 imagens sem texto alternativo. Vou escrever "imagem" em todas.', q:'Como corrigir direito?',
          opts:[
            {t:'Escrever "imagem" mesmo, porque o erro some.', ok:false, why:'Some do relatório, mas não ajuda quem usa leitor de tela.'},
            {t:'Repetir o nome da loja em todas para ajudar no Google.', ok:false, why:'Repetir palavra-chave não descreve a imagem e piora a leitura.'},
            {t:'Descrever o que cada imagem mostra, como "Fachada azul da loja na Rua das Flores".', ok:true, why:'Texto alternativo é para pessoas: deve contar o que a imagem mostra.'}
          ]},
        { who:'Seu Elias, 59 anos, dono de uma papelaria', says:'Agora que a nota ficou verde, vou vender muito mais, né?', q:'Qual é a resposta honesta?',
          opts:[
            {t:'Sim, nota verde garante mais vendas.', ok:false, why:'Ninguém garante vendas. É uma promessa enganosa.'},
            {t:'Explicar que o site ficou mais rápido e fácil de usar, o que ajuda quem visita, mas que vendas dependem de muitos outros fatores.', ok:true, why:'Mostra o benefício real sem prometer resultado que você não controla.'},
            {t:'Dizer que a nota não serve para nada.', ok:false, why:'Serve: mede a experiência do visitante. Só não garante vendas.'}
          ]}
      ]},
    { id:'3.8', title:'Exemplo resolvido: formulário enxuto e aviso de privacidade de verdade', min:14,
      body:[
        `<div class="card analogy"><h3>📒 O caderninho do fiado</h3><p>O dono da venda anota no caderninho o nome e quanto a pessoa deve. Não pede RG, profissão nem data de nascimento, e guarda o caderno na gaveta, não em cima do balcão. Formulário de site deve seguir a mesma lógica: pedir só o necessário, dizer para que serve e guardar com cuidado.</p></div>`,
        `<div class="card"><h3>O caso: Studio de unhas da Taís, em Ribeirão Preto</h3><div class="flows"><div class="flow old"><b>Formulário antes</b><div class="node">9 campos: nome, CPF, data de nascimento, endereço, e-mail, WhatsApp, Instagram, renda e mensagem. Caixa "aceito receber promoções" já marcada. Nenhum aviso.</div></div><div class="flow new"><b>Formulário depois</b><div class="node">Nome, WhatsApp, serviço desejado e melhor horário. Perto do botão: "Usamos seus dados só para responder ao seu contato" e o link do aviso. Promoções só se a pessoa marcar.</div></div></div></div>`,
        `<div class="card"><h3>O aviso de privacidade da Taís, item por item</h3><div class="tw"><table class="tbl"><tr><th>Item</th><th>Como ficou</th></tr><tr><td>Responsável</td><td>Studio da Taís, contato pelo WhatsApp do site</td></tr><tr><td>Dados</td><td>Nome, WhatsApp, serviço e horário preferido</td></tr><tr><td>Finalidade</td><td>Responder e agendar</td></tr><tr><td>Compartilhamento</td><td>O serviço de formulário que recebe as mensagens</td></tr><tr><td>Tempo</td><td>Apagados depois de 6 meses sem novo contato</td></tr><tr><td>Direitos</td><td>Pedir para ver, corrigir ou apagar pelo WhatsApp</td></tr><tr><td>Cookies</td><td>O site não usa medição nem anúncios</td></tr></table></div><p>Curto, verdadeiro e com o que o studio faz de fato. Se um dia entrar medição de visitas, o aviso muda junto.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><ul><li>Copiar a política de uma empresa grande.</li><li>Respostas do formulário chegando no seu e-mail pessoal, e não no da cliente.</li><li>Planilha de respostas compartilhada com "qualquer pessoa com o link".</li><li>Escrever "seus dados estão 100% seguros": ninguém garante isso.</li><li>Pedir dados de saúde sem necessidade.</li></ul></div>`,
        `<div class="card"><h3>✋ Agora é sua vez (Claude, cerca de 4 min)</h3><ol class="golden"><li><span>Escreva você um aviso de 7 itens para um negócio fictício, no formato da tabela.</span></li><li><span>Peça ao Claude, com as suas palavras, para apontar trechos confusos ou promessas que você não controla.</span></li><li><span>Ajuste o texto e confira se cada item descreve o que o negócio faz de verdade.</span></li></ol><p>🔒 Não cole respostas reais de formulário nem dados de clientes. Isso não substitui orientação jurídica em casos sensíveis.</p></div>`
      ],
      ch:[
        { who:'Taís, 31 anos, dona do studio de unhas', says:'Quero pedir CPF e data de nascimento no formulário, para já ter o cadastro completo.', q:'Qual é a melhor orientação?',
          opts:[
            {t:'Pedir, porque é só um formulário.', ok:false, why:'Pedir mais dados do que o necessário contraria o princípio da necessidade da LGPD e afasta visitantes.'},
            {t:'Pedir só nome, WhatsApp, serviço e horário. Se um dia precisar de mais para outra finalidade, avaliar e informar.', ok:true, why:'Para agendar, esses dados bastam. Menos dados, menos risco e mais contatos.'},
            {t:'Pedir, mas deixar os campos escondidos.', ok:false, why:'Campo escondido coletando dados é o oposto da transparência.'}
          ]},
        { who:'Vinícius, 27 anos, configurou o formulário de uma imobiliária', says:'As respostas vão para uma planilha que deixei aberta para qualquer pessoa com o link, para facilitar.', q:'O que corrigir?',
          opts:[
            {t:'Nada, ninguém vai adivinhar o link.', ok:false, why:'Links vazam por mensagem, histórico ou print. Dados pessoais ficam expostos.'},
            {t:'Trocar o link a cada mês.', ok:false, why:'Continua aberto a quem tiver o link no período.'},
            {t:'Restringir a planilha às contas da imobiliária, com senha forte e verificação em duas etapas, e tirar o seu acesso ao final se não for cuidar da manutenção.', ok:true, why:'Acesso restrito protege os dados de quem preencheu o formulário.'}
          ]},
        { who:'Amanda, 34 anos, escrevendo o aviso de privacidade de uma escola de música', says:'Coloquei "seus dados estão 100% seguros e nunca serão compartilhados". Passa confiança.', q:'Como melhorar a frase?',
          opts:[
            {t:'Trocar por algo verdadeiro: quais dados, para quê, com qual serviço são compartilhados e como pedir exclusão.', ok:true, why:'O aviso deve descrever a realidade. O serviço de formulário já recebe os dados, então "nunca compartilhados" é falso.'},
            {t:'Manter, porque toda empresa escreve isso.', ok:false, why:'Ser comum não torna a frase verdadeira.'},
            {t:'Aumentar para "segurança de nível bancário".', ok:false, why:'É outra promessa que ela não consegue provar.'}
          ]}
      ]},
    { id:'3.9', title:'Primeiro mês no ar: acompanhar contatos e mandar um relatório simples', min:15,
      body:[
        `<div class="card analogy"><h3>🌱 A muda recém-plantada</h3><p>Quem planta uma muda não vai embora no mesmo dia. Nas primeiras semanas, rega, olha se as folhas estão firmes e protege do sol forte. Também não arranca a muda para ver se a raiz cresceu. O primeiro mês do site é parecido: você confere se tudo funciona, observa os primeiros contatos e ajusta o que for preciso, sem prometer frutos antes da hora.</p></div>`,
        `<div class="term"><b>Origem do contato</b> = por onde o cliente chegou: site, indicação, Instagram, placa na rua. <b>Mensagem de origem</b> = texto já preenchido no link do WhatsApp, como "vim pelo site" (lição 1.3), que ajuda o dono a contar quem veio da página. <b>Relatório de acompanhamento</b> = mensagem curta ao cliente com o que foi conferido, o que chegou e o próximo ajuste.</div>`,
        `<div class="card"><h3>Roteiro do primeiro mês</h3><ol class="golden"><li><span><b>Semana 1:</b> refaça os testes no celular: botão de WhatsApp, formulário, mapa e telefone. Confira se a mensagem de origem aparece na conversa.</span></li><li><span><b>Semana 2:</b> pergunte ao dono quantas conversas começaram com "vim pelo site" e quais dúvidas chegaram.</span></li><li><span><b>Semana 3:</b> ajuste o que as dúvidas mostraram, como incluir nas perguntas frequentes a pergunta que mais se repetiu.</span></li><li><span><b>Semana 4:</b> mande o relatório de acompanhamento e combine os próximos passos, incluindo a manutenção, se ela fizer parte do combinado.</span></li></ol></div>`,
        `<div class="card"><h3>Exemplo resolvido: Lavanderia da Dona Rosa, em Curitiba (ilustrativo)</h3><p>O site ficou pronto e o Gustavo, que fez a página, precisava fechar o primeiro mês.</p><div class="flows"><div class="flow old"><h4>Antes</h4><div class="node">"Oi, Dona Rosa! O site tá funcionando certinho. Com ele a senhora vai ter muito mais clientes! Qualquer coisa me chama 😉"</div></div><div class="flow new"><h4>Depois</h4><div class="node">"Oi, Dona Rosa! Resumo do primeiro mês do site:<br>1. Testei botão, mapa e formulário no celular: tudo funcionando.<br>2. A senhora contou 9 conversas com 'vim pelo site' (número ilustrativo).<br>3. A dúvida que mais apareceu foi o prazo para edredom; já coloquei a resposta nas perguntas frequentes.<br>4. Próximo passo: trocar as fotos da fachada, que estão escuras. Posso fazer na semana que vem?"</div></div></div></div>`,
        `<div class="card"><h3>O que mudou e por quê</h3><ol class="golden"><li><span>Saiu a promessa de "muito mais clientes": ninguém controla isso, e a promessa vira cobrança no futuro.</span></li><li><span>Entrou o que foi conferido, com fatos que a dona consegue checar.</span></li><li><span>O número veio da contagem dela, e não de uma ferramenta que ela não conhece.</span></li><li><span>A mensagem termina com um ajuste concreto e uma pergunta simples, que mantém a conversa viva sem pressão.</span></li></ol></div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><p><b>Prometer resultado:</b> o site ajuda o cliente a ser encontrado, mas preço, atendimento e época do ano pesam nas vendas. <b>Instalar rastreadores sem avisar:</b> ferramentas de estatística e cookies precisam aparecer no aviso de privacidade (lição 3.3); para começar, a mensagem de origem e a pergunta "como nos conheceu?" bastam. <b>Pedir a senha do dono</b> para ver estatísticas do Perfil da Empresa: peça para ser adicionado como administrador ou que ele mesmo olhe e te conte. <b>Relatório com jargão:</b> troque "taxa de rejeição" por frases que a dona entende. <b>Colocar nomes de clientes no relatório:</b> conte números, sem identificar ninguém.</p></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (Claude, cerca de 5 minutos)</h3><ol class="golden"><li><span>Escolha o site que você montou no módulo 2 ou um negócio fictício.</span></li><li><span>Escreva você um relatório de primeiro mês com 4 itens: o que testou, o que chegou (com número inventado), o que ajustou e o próximo passo.</span></li><li><span>Mande ao Claude com o seu pedido: que aponte jargão, promessas que você não controla e trechos confusos, sem reescrever tudo.</span></li><li><span>Decida você as mudanças e salve a versão final como modelo para os próximos clientes.</span></li></ol><p>🔒 Não cole nomes, telefones ou conversas dos clientes do negócio. Use números redondos e dados fictícios.</p></div>`
      ],
      ch:[
        { who:'Renan, 25 anos, entregou o site de uma loja de materiais de construção', says:'O dono quer saber se o site está trazendo cliente. Vou instalar uma ferramenta de estatística e um monte de cookies hoje mesmo, sem avisar ninguém.',
          q:'Qual é o caminho mais adequado para começar?',
          opts:[
            {t:'Instalar tudo, porque quanto mais dados, melhor.', ok:false, why:'Rastreamento sem aviso fere a transparência exigida pela LGPD e ainda gera dados que o dono não sabe ler.'},
            {t:'Começar pela mensagem de origem no link do WhatsApp e pela pergunta "como nos conheceu?", e, se for usar estatísticas, atualizar o aviso de privacidade antes.', ok:true, why:'São formas simples e transparentes de contar contatos. Ferramentas de rastreamento só entram com aviso.'},
            {t:'Dizer ao dono que não tem como saber e encerrar o assunto.', ok:false, why:'Existem formas simples de acompanhar. Deixar o dono sem resposta enfraquece a confiança no trabalho.'}
          ]},
        { who:'Tatiane, 32 anos, vai mandar o relatório do primeiro mês de um site de manicure', says:'Chegaram poucas conversas com "vim pelo site". Vou escrever que o resultado foi ótimo e que no próximo mês vai triplicar.',
          q:'O que ela deve fazer?',
          opts:[
            {t:'Mandar como planejou, para a cliente não desistir da manutenção.', ok:false, why:'Prometer que vai triplicar é enganoso. Quando não acontecer, a cliente perde a confiança e cancela do mesmo jeito.'},
            {t:'Não mandar relatório neste mês e esperar números melhores.', ok:false, why:'Sumir justamente quando o resultado é fraco passa a impressão de que ela esconde algo.'},
            {t:'Contar o número real, o que já foi conferido e um ajuste possível, como deixar o botão de WhatsApp mais visível ou divulgar o link no perfil do Google.', ok:true, why:'Número honesto com um próximo passo concreto ajuda a cliente a decidir e mostra o valor do acompanhamento.'}
          ]},
        { who:'Seu Raimundo, 66 anos, dono de uma serralheria', says:'Esse negócio de relatório eu não entendo. Fala na minha língua: o site está servindo para alguma coisa?',
          q:'Qual resposta combina com o que a lição ensina?',
          opts:[
            {t:'"O site teve boa taxa de rejeição e o SEO está otimizado."', ok:false, why:'Jargão não responde à pergunta do Seu Raimundo e afasta o cliente.'},
            {t:'"Tudo funcionando no celular. Este mês o senhor contou 6 pessoas que chegaram dizendo que viram o site, e a dúvida mais comum foi sobre portão. Já coloquei a resposta lá."', ok:true, why:'Fatos simples, números que ele mesmo contou e um ajuste feito: é a língua dele.'},
            {t:'"Pode ficar tranquilo, o site vai encher a serralheria de clientes."', ok:false, why:'É promessa sem base. O relatório mostra o que aconteceu, não o que se espera que aconteça.'}
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
const LIC = { '1.1':'🧭','1.2':'✍️','1.3':'🏪','1.4':'🚗','1.5':'🔎','1.7':'🍲','1.8':'🧱','1.6':'📝','2.1':'🛠️','2.2':'🌐','2.3':'🎨','2.4':'🗺️','2.5':'🧐','2.7':'🧩','2.8':'🏬','2.6':'🚀','3.1':'📱','3.2':'📁','3.3':'🔒','3.4':'💰','3.5':'🤝','3.7':'🩺','3.8':'📒','3.9':'🌱','3.6':'📋' };

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
