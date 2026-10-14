/* Curso: Formalizando: MEI e Organização Financeira (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🏛️', title:'Entender a formalização', sub:'Quando e como', lessons:[
    { id:'1.1', title:'Por que e quando formalizar', min:10,
      body:[
        `<div class="card analogy"><h3>🏛️ Documentar o carro</h3><p>Rodar com o carro sem documento até é possível, mas qualquer batida ou blitz vira problema grande. Com tudo em dia, você circula com mais segurança, consegue vender o carro, fazer seguro e resolver imprevistos. Formalizar o negócio tem um efeito parecido: abre portas e dá tranquilidade, mas também traz custos e deveres que precisam caber na sua realidade.</p></div>`,
        `<div class="term"><b>Informalidade</b> = trabalhar sem registro como empresa. <b>CNPJ</b> = o número de registro de uma empresa na Receita Federal. <b>MEI</b> = Microempreendedor Individual, categoria simplificada para pequenos negócios, com regras e limites próprios. <b>Formalizar</b> = registrar o negócio para que ele exista oficialmente, com direitos e obrigações.</div>`,
        `<div class="card"><h3>Não existe resposta única</h3><p>Trabalhar informal parece mais simples no início, mas limita: muitas empresas só contratam quem emite nota fiscal, alguns fornecedores só vendem no atacado para quem tem CNPJ, e há serviços bancários e benefícios previdenciários ligados a ter um registro e contribuir. Por outro lado, formalizar traz um pagamento mensal e obrigações que não somem nos meses fracos. A decisão depende do seu volume de trabalho, do tipo de cliente e da sua atividade.</p><p>Este curso explica o básico e não substitui orientação profissional. Regras, valores, prazos, limites e atividades permitidas mudam com o tempo: confira sempre no Portal do Empreendedor (gov.br) e converse com um contador ou procure entidades como o Sebrae.</p></div>`,
        `<div class="card"><h3>Perguntas que ajudam a decidir</h3><ol class="golden"><li><span>Meus clientes atuais ou os que eu quero atender exigem nota fiscal?</span></li><li><span>Minha atividade aparece na lista oficial de atividades permitidas ao MEI?</span></li><li><span>Eu trabalho sozinho ou tenho sócio? (MEI não permite sócio.)</span></li><li><span>O meu faturamento previsto cabe no limite anual atual? (Confira o valor no portal oficial.)</span></li><li><span>Consigo pagar a guia mensal mesmo num mês sem clientes?</span></li><li><span>Quero comprar de fornecedores que exigem CNPJ ou vender por plataformas que pedem registro?</span></li><li><span>Quero ter proteção previdenciária, como contribuição para aposentadoria e auxílios, dentro das regras do INSS?</span></li></ol></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Situação</th><th>Sinal</th></tr><tr><td>Manicure que atende só vizinhas, poucas horas por semana</td><td>Pode avaliar com calma, sem pressa</td></tr><tr><td>Confeiteira recebendo pedidos de empresas para eventos</td><td>Forte sinal para formalizar, pois empresas pedem nota</td></tr><tr><td>Dois amigos abrindo uma oficina juntos</td><td>MEI não serve (há sócio): procurar contador</td></tr><tr><td>Personal trainer querendo atender em academia que exige CNPJ</td><td>Pesquisar se a atividade é permitida e avaliar</td></tr></table></div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Formalizar por impulso, sem conferir se a atividade é permitida; não formalizar e perder um cliente grande por falta de nota; usar o CNPJ de parente ou amigo para emitir nota (irregular e arriscado para os dois); acreditar em quem promete "abrir empresa e não pagar nada". A decisão boa é a informada: pesquise, faça as contas e pergunte a quem entende.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que andar com os documentos do carro em dia traz mais segurança, e por que isso também tem um custo.</div>`
      ],
      ch:[
        { who:'Letícia, 28 anos, presta serviços de forma informal', says:'Uma empresa quer contratar meu serviço, mas exige nota fiscal. Eu sou informal e não sei o que fazer.',
          q:'Qual é o melhor caminho?',
          opts:[
            {t:'Dizer à empresa que nota fiscal não é necessária.', ok:false, why:'Muitas empresas precisam da nota. Insistir sem ela costuma perder o cliente.'},
            {t:'Pesquisar no Portal do Empreendedor se a atividade pode ser MEI, avaliar custo e obrigações e, se compensar, formalizar antes de emitir a nota, buscando orientação de um contador ou do Sebrae.', ok:true, why:'Conferir regras e custos antes de decidir evita surpresas e permite atender empresas com segurança.'},
            {t:'Emitir a nota usando o CNPJ de um parente.', ok:false, why:'Usar o CNPJ de outra pessoa é irregular e traz riscos para você e para o parente.'}
          ]},
        { who:'Dona Cida, 52 anos, faz salgados para festas do bairro', says:'Vendo umas duas encomendas por mês, só para conhecidos. Minha sobrinha diz que eu sou obrigada a abrir MEI hoje mesmo.',
          q:'Como Dona Cida deve pensar essa decisão?',
          opts:[
            {t:'Abrir o MEI hoje, sem pesquisar, porque todo mundo precisa.', ok:false, why:'Formalizar sem avaliar pode criar um custo mensal que ela ainda não precisa ou não consegue manter.'},
            {t:'Nunca formalizar, porque quem é pequeno não precisa de nada disso.', ok:false, why:'Se as vendas crescerem ou surgirem clientes que exigem nota, ela pode perder oportunidades e proteção.'},
            {t:'Responder às perguntas de decisão (clientes, volume, atividade, custo mensal), conferir as regras no Portal do Empreendedor e conversar com um contador ou com o Sebrae antes de decidir.', ok:true, why:'A decisão depende do contexto dela, e as regras oficiais e a orientação profissional evitam escolhas por impulso.'}
          ]},
        { who:'Rafael e Bruno, 30 anos, querem abrir uma barbearia juntos', says:'Vamos abrir um MEI só no nome do Rafael, e o Bruno fica como sócio "de boca".',
          q:'Qual é o problema desse plano?',
          opts:[
            {t:'O MEI não permite sócio, e um acordo informal deixa o Bruno sem proteção; o melhor é procurar um contador para ver o tipo de empresa adequado para os dois.', ok:true, why:'Sociedade exige outro formato de empresa. Esconder o sócio gera risco jurídico e conflitos futuros.'},
            {t:'Nenhum: basta confiar um no outro.', ok:false, why:'Confiança não substitui registro. Se houver briga ou dívida, o Bruno não tem como provar a parte dele.'},
            {t:'O único problema é que precisam de dois MEIs com o mesmo nome.', ok:false, why:'Dois MEIs não formam uma sociedade e não resolvem a divisão do negócio.'}
          ]}
      ]},
    { id:'1.2', title:'MEI na prática: o que é e o que muda', min:10,
      body:[
        `<div class="card analogy"><h3>📋 A carteirinha do clube</h3><p>O clube dá benefícios: piscina, quadra, festas. Mas também tem regras, mensalidade e limites. Quem entra precisa conhecer tudo isso, e os termos podem mudar a cada assembleia. O MEI funciona assim: você ganha acesso a coisas boas, paga uma mensalidade e precisa seguir regras que o governo pode atualizar.</p></div>`,
        `<div class="term"><b>DAS</b> = a guia única mensal em que o MEI paga seus impostos e contribuições. <b>DASN-SIMEI</b> = a declaração anual do faturamento do MEI. <b>Limite de faturamento</b> = o valor máximo de receita por ano permitido ao MEI, que pode mudar por lei. <b>CCMEI</b> = o certificado que comprova o registro como MEI.</div>`,
        `<div class="card"><h3>O que vale lembrar, sem decorar números</h3><ol class="golden"><li><span>Só algumas atividades podem ser MEI: confira a lista oficial.</span></li><li><span>Existe um limite anual de faturamento: confira o valor atual no Portal do Empreendedor.</span></li><li><span>O DAS é pago todo mês, em geral até o dia 20, mesmo em meses sem faturamento: confirme a data.</span></li><li><span>A declaração anual é entregue uma vez por ano, em geral até o fim de maio: confirme o prazo do ano.</span></li><li><span>Nota fiscal é obrigatória nas vendas e serviços para empresas.</span></li><li><span>Atrasos geram multa e juros e podem causar problemas com o CNPJ.</span></li></ol>
          <p>O cadastro do MEI é feito de graça no Portal do Empreendedor, e sites que cobram para "abrir o MEI" podem ser desnecessários ou golpes.</p></div>`,
        `<div class="flows"><div class="flow old"><h4>Antes (informal)</h4><div class="node">Recebe no Pix pessoal</div><div class="node">Não emite nota</div><div class="node">Sem contribuição previdenciária</div><div class="node">Perde clientes empresas</div></div><div class="flow new"><h4>Depois (MEI)</h4><div class="node">Tem CNPJ e pode abrir conta de negócio</div><div class="node">Emite nota quando preciso</div><div class="node">Contribui pelo DAS, dentro das regras do INSS</div><div class="node">Paga em dia e declara uma vez por ano</div></div></div>`,
        `<div class="card"><h3>O que muda no dia a dia</h3><p>Pense numa cabeleireira que vira MEI. Antes, ela só atendia e recebia. Agora ela tem uma rotina pequena, mas fixa: todo mês confere se o DAS foi pago, guarda os comprovantes, anota quanto faturou (com e sem nota) e, uma vez por ano, informa esse total na declaração. Quando um salão parceiro pede nota, ela sabe emitir. Quando quer comprar produtos de um distribuidor que só vende para CNPJ, ela pode. Isso é o que muda: um pouco mais de organização em troca de mais portas abertas.</p><p>O MEI também precisa observar regras municipais, como licenças e alvarás para certas atividades e locais. Uma lanchonete, por exemplo, pode ter exigências sanitárias que um designer em casa não tem. Pergunte na prefeitura da sua cidade.</p></div>`,
        `<div class="card"><h3>Mitos comuns</h3><p>"Virei MEI, então não pago mais nada se não faturar": falso, a guia mensal continua. "MEI pode ter qualquer atividade": falso, há uma lista. "Posso faturar quanto quiser e acerto depois": arriscado, existe limite e ultrapassá-lo muda o enquadramento. "Preciso pagar alguém para abrir": o cadastro oficial é gratuito. Em todos os casos, a fonte confiável é o Portal do Empreendedor e um contador.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que quem entra num clube precisa conhecer as regras do clube, e por que é bom conferir se as regras mudaram.</div>`
      ],
      ch:[
        { who:'Cássio, 32 anos, quer virar MEI', says:'Achei um site que cobra para abrir o MEI para mim e promete rapidez. Parece prático.',
          q:'O que fazer?',
          opts:[
            {t:'Pagar e passar todos os dados, porque parece mais fácil.', ok:false, why:'Passar dados pessoais a sites desconhecidos é arriscado, e o cadastro oficial é gratuito.'},
            {t:'Pagar, mas só se o site tiver muitas avaliações positivas.', ok:false, why:'Avaliações podem ser falsas, e o serviço continua sendo desnecessário.'},
            {t:'Fazer o cadastro no Portal do Empreendedor, que é gratuito, conferindo que o endereço é o oficial do gov.br, e desconfiar de quem cobra por isso.', ok:true, why:'O caminho oficial é gratuito e seguro, e evita golpes e gastos desnecessários.'}
          ]},
        { who:'Juliana, 26 anos, é MEI e faz bolos sob encomenda', says:'Em janeiro quase não tive pedidos. Como não faturei, nem vou pagar o DAS desse mês.',
          q:'O que Juliana precisa entender?',
          opts:[
            {t:'Que está certa: sem faturamento não há guia.', ok:false, why:'O DAS do MEI é mensal e continua devido mesmo em meses sem vendas.'},
            {t:'Que o DAS é mensal mesmo sem faturamento, e que vale planejar uma reserva nos meses bons para cobrir os meses fracos, conferindo a data no portal oficial.', ok:true, why:'Planejar a guia como custo fixo evita atrasos, multas e juros nos meses de baixa.'},
            {t:'Que pode pagar tudo junto no fim do ano sem nenhum acréscimo.', ok:false, why:'Pagar com atraso gera multa e juros, e o acúmulo pode trazer problemas com o CNPJ.'}
          ]},
        { who:'Seu Antônio, 58 anos, quer abrir uma lanchonete como MEI', says:'Já me cadastrei como MEI, então posso abrir as portas amanhã sem falar com mais ninguém.',
          q:'O que falta Seu Antônio verificar?',
          opts:[
            {t:'Nada: o CNPJ resolve tudo.', ok:false, why:'O registro federal não dispensa as exigências da prefeitura e da vigilância sanitária.'},
            {t:'Só se o nome da lanchonete é bonito.', ok:false, why:'O nome não é o ponto crítico. Licenças e regras locais podem impedir o funcionamento.'},
            {t:'As exigências da prefeitura para o local e a atividade, como alvará e regras sanitárias para alimentos, além de confirmar no portal oficial se a atividade é permitida ao MEI.', ok:true, why:'Atividades com alimentos e atendimento ao público costumam ter regras municipais próprias, que precisam ser cumpridas.'}
          ]}
      ]},
    { id:'1.3', title:'Passo a passo seguro do cadastro', min:10,
      body:[
        `<div class="card analogy"><h3>🔐 A chave da sua casa</h3><p>Você não entrega a chave de casa para um desconhecido que bateu na porta oferecendo ajuda. A conta gov.br é a chave da sua vida digital com o governo: com ela se abre empresa, se consulta benefício e muito mais. Cuidar dela é cuidar do seu negócio.</p></div>`,
        `<div class="term"><b>Conta gov.br</b> = o login único para serviços do governo federal, com níveis de segurança (bronze, prata e ouro). <b>CNAE</b> = o código que identifica a atividade econômica da empresa. <b>Ocupação</b> = o nome da atividade na lista do MEI, ligada a um CNAE. <b>Golpe do boleto falso</b> = cobrança enviada por e-mail, carta ou mensagem que imita o governo para enganar o empreendedor.</div>`,
        `<div class="card"><h3>Passo a passo (confira as telas atuais no portal)</h3><ol class="golden"><li><span>Crie ou fortaleça sua conta gov.br pelo aplicativo ou site oficial. Muitos serviços exigem nível prata ou ouro, obtidos, por exemplo, com validação bancária ou biometria.</span></li><li><span>Ative a verificação em duas etapas na conta gov.br.</span></li><li><span>Acesse o Portal do Empreendedor digitando o endereço oficial (gov.br/mei), sem clicar em anúncios patrocinados.</span></li><li><span>Leia a lista de ocupações permitidas e escolha a que descreve o que você realmente faz. Se nenhuma servir, o MEI pode não ser o seu caminho.</span></li><li><span>Informe endereço, forma de atuação (em casa, em loja, pela internet, porta a porta) e confira os dados antes de enviar.</span></li><li><span>Baixe e guarde o CCMEI e anote o seu CNPJ num lugar seguro.</span></li><li><span>Verifique com a prefeitura se a sua atividade e o seu endereço precisam de licença.</span></li></ol></div>`,
        `<div class="card"><h3>Escolher a atividade com cuidado</h3><p>A ocupação escolhida define o que você pode fazer e, em alguns casos, a forma de emitir nota. Uma pessoa que faz unhas e sobrancelhas, por exemplo, deve procurar na lista a ocupação que cobre esses serviços. Quem vende doces e também dá aulas de confeitaria pode precisar de uma ocupação principal e outras secundárias. Se escolher errado, você pode ter problemas com nota ou com a prefeitura. Leia a descrição completa, compare as opções e, na dúvida, pergunte a um contador ou ao Sebrae antes de concluir.</p></div>`,
        `<div class="card"><h3>Golpes mais comuns contra o MEI</h3><p>Depois que o CNPJ aparece em bases públicas, chegam mensagens. Algumas imitam a Receita Federal e cobram "taxa anual obrigatória"; outras oferecem "registro em cadastro nacional" que parece oficial; há boletos com aparência de DAS, mas com outro beneficiário. Regras de proteção:</p><ol class="golden"><li><span>O DAS é gerado por você, no portal oficial ou no aplicativo oficial, nunca recebido pronto pelo correio ou por mensagem.</span></li><li><span>Antes de pagar qualquer boleto, confira o beneficiário e a origem.</span></li><li><span>Desconfie de urgência ("pague hoje ou seu CNPJ será cancelado").</span></li><li><span>Nunca passe senha da conta gov.br nem códigos recebidos por SMS.</span></li><li><span>Na dúvida, entre no portal digitando o endereço e confira se existe algum débito real.</span></li></ol></div>`,
        `<div class="card"><h3>E a IA nisso?</h3><p>Você pode pedir à IA que explique termos como CNAE ou que monte uma lista de perguntas para levar ao contador. Mas não envie CPF, senha, número do CNPJ com dados pessoais ou fotos de documentos a ferramentas de IA. E lembre: a IA pode estar desatualizada sobre regras e valores. A palavra final é sempre do portal oficial.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que não se entrega a chave de casa a um estranho, e como isso se parece com proteger a conta gov.br.</div>`
      ],
      ch:[
        { who:'Patrícia, 34 anos, abriu o MEI de pet shop móvel', says:'Chegou uma carta com cara de governo cobrando uma "taxa de manutenção do CNPJ" com boleto já pronto. Vence amanhã.',
          q:'Qual é a atitude mais segura?',
          opts:[
            {t:'Não pagar o boleto da carta; entrar no Portal do Empreendedor digitando o endereço oficial, verificar se existe algum débito real e gerar o DAS por lá, se houver.', ok:true, why:'O DAS é gerado pelo próprio MEI no canal oficial. Cobranças prontas com urgência são sinal clássico de golpe.'},
            {t:'Pagar logo para não arriscar perder o CNPJ.', ok:false, why:'A urgência é justamente a arma do golpe. Pagar sem conferir pode significar perder dinheiro para criminosos.'},
            {t:'Ligar para o telefone que está na própria carta para confirmar.', ok:false, why:'O telefone da carta pode ser dos próprios golpistas. A conferência deve ser feita por canais oficiais que você mesmo busca.'}
          ]},
        { who:'Marcos, 40 anos, conserta celulares e quer formalizar', says:'Não achei minha atividade exata na lista. Vou escolher qualquer uma parecida, depois eu vejo.',
          q:'O que Marcos deveria fazer?',
          opts:[
            {t:'Escolher qualquer ocupação, porque ninguém confere.', ok:false, why:'A ocupação errada pode gerar problemas na emissão de notas, na prefeitura e no enquadramento.'},
            {t:'Ler as descrições das ocupações com calma, comparar com o que ele realmente faz e, se tiver dúvida, perguntar a um contador ou ao Sebrae antes de concluir o cadastro.', ok:true, why:'A atividade define o que ele pode fazer como MEI. Escolher com orientação evita retrabalho e irregularidade.'},
            {t:'Desistir de formalizar para sempre.', ok:false, why:'Talvez exista uma ocupação adequada ou outro formato de empresa. Desistir sem pesquisar fecha portas à toa.'}
          ]},
        { who:'Sueli, 47 anos, dona de uma loja de bairro', says:'Um rapaz se ofereceu para fazer meu MEI de graça. Ele só pediu minha senha do gov.br e o código que chegou no meu celular.',
          q:'Como Sueli deve responder?',
          opts:[
            {t:'Passar a senha, mas trocar depois.', ok:false, why:'Com senha e código, a pessoa pode alterar dados, abrir serviços e até pedir benefícios em nome dela antes da troca.'},
            {t:'Passar só o código do SMS, que é menos importante.', ok:false, why:'O código é a segunda chave da conta. Com ele, o golpista consegue entrar mesmo sem a senha em alguns casos.'},
            {t:'Recusar, nunca compartilhar senha nem código, e fazer o cadastro ela mesma no portal oficial, pedindo ajuda presencial a um ponto de atendimento do Sebrae ou da prefeitura, se precisar.', ok:true, why:'Senha e código são pessoais. Existem canais oficiais e gratuitos de apoio que não pedem essas informações.'}
          ]}
      ]},
    { id:'1.4', title:'Direitos, deveres e quando o MEI não serve', min:10,
      body:[
        `<div class="card analogy"><h3>👟 O tênis do tamanho certo</h3><p>Um tênis ótimo, mas dois números menor, machuca. O MEI é um ótimo "calçado" para muitos pequenos negócios, mas não para todos. Saber quando ele aperta é tão importante quanto saber usá-lo.</p></div>`,
        `<div class="term"><b>Direitos</b> = o que o MEI ganha ao se formalizar. <b>Deveres</b> = o que o MEI precisa cumprir para continuar regular. <b>Desenquadramento</b> = quando o negócio deixa de poder ser MEI e passa para outro tipo de empresa. <b>Contador</b> = profissional que orienta sobre impostos, enquadramento e obrigações.</div>`,
        `<div class="tw"><table class="tbl"><tr><th>Direitos (confira as regras atuais)</th><th>Deveres (confira prazos atuais)</th></tr><tr><td>CNPJ e possibilidade de emitir nota fiscal</td><td>Pagar o DAS todo mês, mesmo sem faturar</td></tr><tr><td>Abrir conta e pedir crédito como empresa</td><td>Entregar a declaração anual de faturamento</td></tr><tr><td>Comprar de fornecedores que vendem só para CNPJ</td><td>Emitir nota quando a regra exige (por exemplo, para empresas)</td></tr><tr><td>Benefícios previdenciários, conforme regras e carências do INSS</td><td>Respeitar o limite de faturamento e as atividades permitidas</td></tr><tr><td>Possibilidade de contratar empregado, dentro das regras</td><td>Cumprir as obrigações trabalhistas, se contratar</td></tr><tr><td>Participar de compras públicas, em alguns casos</td><td>Manter licenças municipais, quando exigidas</td></tr></table></div>`,
        `<div class="card"><h3>Quando o MEI não serve (sinais de alerta)</h3><ol class="golden"><li><span><b>Atividade não permitida:</b> algumas profissões regulamentadas e atividades específicas ficam fora da lista. Exemplo: certas atividades da área da saúde ou consultorias técnicas podem não estar permitidas.</span></li><li><span><b>Sócio:</b> o MEI é individual. Se duas pessoas dividem o negócio, é preciso outro formato.</span></li><li><span><b>Crescer além do limite:</b> se o faturamento previsto passa do limite anual (confira o valor atual), o negócio precisa mudar de enquadramento.</span></li><li><span><b>Participação em outra empresa:</b> há restrições para quem já é sócio ou titular de outra empresa.</span></li><li><span><b>Equipe maior que a permitida:</b> o MEI tem limite de contratação.</span></li></ol><p>Em qualquer um desses casos, o caminho é conversar com um contador antes de abrir ou mudar algo. Ele compara as opções de empresa e explica custos e obrigações de cada uma.</p></div>`,
        `<div class="why-chain"><b>Por que acompanhar isso durante o ano?</b> Porque o negócio pode crescer rápido. → Se crescer sem acompanhamento, o limite pode ser ultrapassado sem você perceber. → Ultrapassar pode gerar cobrança adicional e mudança obrigatória de enquadramento. → Quem acompanha mês a mês percebe a tempo e planeja a mudança com o contador, sem susto.</div>`,
        `<div class="card"><h3>Exemplos práticos</h3><p>Uma clínica de estética com duas sócias não cabe no MEI: precisa de outro formato. Um personal trainer deve conferir se a atividade dele aparece na lista e quais exigências do conselho profissional existem. Uma padaria que contratou mais gente e passou a vender muito pode estar saindo do MEI: é hora de conversar com o contador. Uma costureira sozinha, trabalhando em casa e com faturamento moderado, costuma ser o perfil para o qual o MEI foi pensado. Em todos os casos, a confirmação vem do Portal do Empreendedor e do contador, nunca de "ouvi dizer".</p></div>`,
        `<div class="card"><h3>Ética e honestidade</h3><p>Não divida o faturamento entre CNPJs de parentes para "caber no limite" e não esconda sócios. Isso é irregular, pode gerar multas e coloca outras pessoas em risco. Crescer é bom: o passo seguinte é mudar de formato com orientação, não esconder o crescimento.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um tênis bom, mas pequeno demais, machuca, e por que trocar de número quando o pé cresce é normal.</div>`
      ],
      ch:[
        { who:'Carla, 36 anos, é MEI e tem uma confeitaria que cresceu muito', says:'Este ano as vendas dobraram. Estou com medo de passar do limite, então pensei em emitir parte das notas no CNPJ da minha mãe.',
          q:'Qual é a melhor orientação para Carla?',
          opts:[
            {t:'Usar o CNPJ da mãe, porque é da família.', ok:false, why:'Dividir faturamento em outro CNPJ para driblar o limite é irregular e coloca a mãe em risco também.'},
            {t:'Acompanhar o faturamento mês a mês, conferir o limite atual no Portal do Empreendedor e procurar um contador para planejar a mudança de enquadramento com antecedência.', ok:true, why:'Crescer é positivo. Com acompanhamento e orientação, ela muda de formato no momento certo e sem irregularidades.'},
            {t:'Parar de vender até o ano acabar.', ok:false, why:'Recusar clientes por medo pode prejudicar o negócio. O caminho é planejar a transição, não travar o crescimento.'}
          ]},
        { who:'Diego, 31 anos, mecânico', says:'Quero abrir uma oficina com meu cunhado. Cada um entra com metade do dinheiro. Dá para ser MEI?',
          q:'O que responder a Diego?',
          opts:[
            {t:'Dá, desde que o cunhado não apareça em nenhum papel.', ok:false, why:'Esconder o sócio deixa o cunhado sem proteção e cria risco de conflito e irregularidade.'},
            {t:'Dá, se os dois abrirem MEIs separados e dividirem o mesmo caixa.', ok:false, why:'Dois MEIs com caixa misturado não formam uma sociedade organizada e podem gerar problemas fiscais.'},
            {t:'O MEI não permite sócio; para uma sociedade, é preciso outro tipo de empresa, e um contador pode indicar o formato e os custos adequados.', ok:true, why:'Sociedade exige um formato próprio, com contrato social que protege os dois.'}
          ]},
        { who:'Viviane, 29 anos, manicure MEI', says:'Ouvi que como MEI eu tenho direito a benefícios do INSS. Então já posso pedir auxílio se ficar doente no mês que vem?',
          q:'O que Viviane precisa conferir?',
          opts:[
            {t:'As regras e carências atuais do INSS para o benefício, além de manter o DAS em dia, consultando os canais oficiais.', ok:true, why:'Os benefícios dependem de regras, tempo de contribuição e pagamentos em dia, que devem ser conferidos nos canais oficiais.'},
            {t:'Nada: todo MEI tem direito imediato a qualquer benefício.', ok:false, why:'Benefícios previdenciários têm regras e carências. Supor direito automático pode gerar frustração.'},
            {t:'Só se o contador dela gosta do INSS.', ok:false, why:'A questão não é opinião, e sim as regras oficiais do benefício.'}
          ]}
      ]},
    { id:'1.5', title:'Alternativas e transições: informal, MEI e outros formatos', min:10,
      body:[
        `<div class="card analogy"><h3>🚲 Da bicicleta ao carro</h3><p>Quem começa a fazer entregas pode ir de bicicleta. Quando as entregas crescem, talvez seja hora de uma moto; depois, de um carro ou de uma van. Nenhum veículo é "o certo" para sempre: o certo é o que combina com o tamanho do trabalho de agora. Com o formato do negócio é igual: informal, MEI e outros tipos de empresa são veículos diferentes para fases diferentes.</p></div>`,
        `<div class="term"><b>Transição</b> = a passagem de um formato de negócio para outro, como sair da informalidade para o MEI ou do MEI para outro tipo de empresa. <b>Microempresa</b> = um dos formatos de empresa para quem não cabe no MEI, com regras próprias. <b>Regime tributário</b> = a forma como a empresa calcula e paga os impostos, escolhida com ajuda do contador. <b>Contrato social</b> = documento que registra os sócios e as regras de uma sociedade.</div>`,
        `<div class="tw"><table class="tbl"><tr><th>Formato</th><th>Costuma combinar com</th><th>Atenção</th></tr><tr><td>Informal</td><td>Teste de ideia, poucos clientes, renda complementar eventual</td><td>Sem nota, sem CNPJ, menos proteção e menos portas abertas</td></tr><tr><td>MEI</td><td>Quem trabalha sozinho, em atividade permitida, com faturamento dentro do limite atual</td><td>Guia mensal, declaração anual, lista de atividades e limite a conferir no portal oficial</td></tr><tr><td>Outros formatos de empresa</td><td>Quem tem sócio, atividade fora da lista do MEI, equipe maior ou faturamento acima do limite</td><td>Exigem contador, têm custos e obrigações maiores e escolhas de regime tributário</td></tr></table></div>`,
        `<div class="card"><h3>Sinais de que é hora de mudar de "veículo"</h3><ol class="golden"><li><span>Clientes começaram a pedir nota fiscal com frequência (sinal para sair da informalidade).</span></li><li><span>O acumulado do ano na sua planilha está se aproximando do limite atual do MEI.</span></li><li><span>Você quer trazer um sócio ou já divide o negócio com alguém.</span></li><li><span>Quer oferecer um serviço novo que não aparece na lista de atividades do MEI.</span></li><li><span>Precisa de uma equipe maior do que o MEI permite.</span></li><li><span>Grandes clientes ou contratos pedem um formato de empresa diferente.</span></li></ol></div>`,
        `<div class="card"><h3>Quando chamar um contador (e como aproveitar a conversa)</h3><p>Chame um contador antes de decisões que mudam o formato do negócio: sair do MEI, incluir sócio, contratar, abrir um ponto comercial, vender para órgãos públicos ou fechar um contrato grande. Também vale procurar quando algo saiu do controle, como guias e declarações atrasadas. Para aproveitar bem a conversa, leve: a sua planilha com o faturamento mês a mês, a lista das atividades que você faz, os planos para os próximos meses e as suas dúvidas por escrito. Pergunte quais são os custos e as obrigações de cada formato possível, e qual seria o momento ideal para a mudança. Muitos contadores atendem pequenos negócios, e o Sebrae oferece orientação gratuita em vários lugares.</p></div>`,
        `<div class="card"><h3>Exemplos de transição</h3><p>Uma manicure atendia informalmente as vizinhas; quando um salão passou a pedir nota, ela conferiu a atividade no portal oficial e virou MEI. Um técnico de ar-condicionado MEI viu, no fechamento mensal, que o acumulado do ano subia rápido; procurou o contador meses antes e mudou de formato sem susto. Duas amigas que queriam abrir uma clínica de estética juntas nem passaram pelo MEI: foram direto ao contador para montar uma sociedade com contrato social. Em todos os casos, a decisão veio de números acompanhados e de orientação, nunca de pressa.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Ficar no MEI "na marra" depois de crescer, escondendo faturamento ou dividindo notas com parentes; mudar de formato sem calcular se o preço cobre os novos custos; achar que outro formato é "sempre melhor" porque um conhecido usa; ou adiar a conversa com o contador até a multa chegar. Mudar de formato não é fracasso nem luxo: é ajustar o veículo ao tamanho da estrada. Os detalhes de cada formato (custos, impostos, limites) mudam com o tempo, então confirme sempre no Portal do Empreendedor e com o contador.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que quem entrega uma pizza vai de bicicleta, mas quem entrega uma geladeira precisa de um caminhão, e o que isso tem a ver com o formato do negócio.</div>`
      ],
      ch:[
        { who:'Sérgio, 43 anos, MEI de manutenção de ar-condicionado', says:'Meu faturamento está crescendo todo mês. Prefiro nem olhar a planilha, porque se eu descobrir que vou sair do MEI vai dar trabalho.',
          q:'Qual é a melhor atitude para Sérgio?',
          opts:[
            {t:'Continuar sem olhar, porque o problema só existe se ele souber.', ok:false, why:'Ignorar não muda as regras. Se passar do limite sem planejar, o custo e a correria ficam maiores.'},
            {t:'Acompanhar o acumulado do ano, comparar com o limite atual no portal oficial e procurar um contador com antecedência para planejar a transição.', ok:true, why:'Planejar cedo permite mudar de formato no momento certo, ajustando preço e custos sem surpresa.'},
            {t:'Passar parte dos serviços para o CNPJ da esposa.', ok:false, why:'Dividir faturamento em outro CNPJ para driblar o limite é irregular e coloca a esposa em risco.'}
          ]},
        { who:'Lúcia e Neide, 50 anos, querem abrir uma loja de artesanato juntas', says:'Vamos começar como MEI e depois vemos o que fazer com a sociedade.',
          q:'Como elas devem começar?',
          opts:[
            {t:'Abrir um MEI no nome de uma e confiar no acordo de boca.', ok:false, why:'O MEI não permite sócio, e o acordo de boca deixa a outra sem proteção.'},
            {t:'Cada uma abrir um MEI e misturar o caixa.', ok:false, why:'Dois MEIs com caixa misturado não organizam a sociedade e podem gerar problemas fiscais.'},
            {t:'Procurar um contador antes de abrir, para escolher um formato de empresa que aceite sócias e registrar as regras num contrato social.', ok:true, why:'Sociedade pede outro formato, e o contrato social protege as duas desde o início.'}
          ]},
        { who:'Caio, 24 anos, faz edição de vídeos nas horas vagas', says:'Tenho só um cliente eventual e ainda estou testando se gosto disso. Um amigo disse que sem abrir empresa eu sou "amador".',
          q:'O que faz mais sentido para Caio agora?',
          opts:[
            {t:'Avaliar o momento: se ainda está testando, com poucos clientes e sem pedidos de nota, pode planejar a formalização para quando surgirem sinais claros, conferindo as regras no portal oficial quando chegar a hora.', ok:true, why:'O formato deve acompanhar a fase do negócio. Definir os sinais de mudança evita tanto a pressa quanto o atraso.'},
            {t:'Abrir uma empresa grande com sócio imaginário para parecer profissional.', ok:false, why:'Formato acima da necessidade traz custos e obrigações sem retorno, e sócio de fachada é irregular.'},
            {t:'Nunca pensar em formalização, mesmo se o negócio crescer.', ok:false, why:'Se surgirem clientes que exigem nota ou o volume crescer, ficar informal limita e expõe a riscos.'}
          ]}
      ]},
    { id:'1.7', title:'Exemplo resolvido: informal ou MEI? O caso da Joana', min:14,
      body:[
        `<div class="card analogy"><h3>⚖️ O pacote grande do mercado</h3><p>No mercado, o pacote grande de arroz parece sempre mais vantajoso. Mas quem faz a conta por quilo, e pensa se vai conseguir usar tudo antes de estragar, às vezes descobre que o pacote menor serve melhor. Formalizar também é uma conta: o que você ganha, o que passa a pagar e o que muda na rotina. Decidir no "acho que sim" é como comprar o pacote pela embalagem.</p></div>`,
        `<div class="card"><h3>Do roteiro ao caso real</h3><p>Nas lições anteriores você viu as perguntas de decisão, o que muda com o MEI e quando ele não serve. Agora vamos juntar tudo num exemplo resolvido, passo a passo, do jeito que você vai fazer com o seu negócio. Todos os valores abaixo são <b>inventados para treinar o raciocínio</b>: não são valores oficiais. A guia mensal real e o limite de faturamento atual você confere no Portal do Empreendedor (gov.br).</p></div>`,
        `<div class="card"><h3>O caso</h3><p>Joana, 31 anos, faz unhas em domicílio há dois anos, sozinha e de forma informal. Atende só pessoas físicas, recebe no Pix pessoal e fatura cerca de R$ 2.000 por mês (exemplo). Um hotel da cidade ofereceu um contrato para atender hóspedes em eventos, cerca de R$ 1.200 por mês, mas só paga com nota fiscal.</p></div>`,
        `<div class="card"><h3>Resolvendo passo a passo</h3><ol class="golden"><li><span><b>Situação atual:</b> ela escreve quanto fatura, quem são os clientes e como recebe. Nada de chute: usa o histórico do Pix dos últimos meses, sem compartilhar com ninguém.</span></li><li><span><b>O que mudou:</b> surgiu um cliente empresa que exige nota. Esse é um dos sinais de formalização da lição 1.5.</span></li><li><span><b>Regras:</b> no Portal do Empreendedor, ela confirma que a ocupação dela consta na lista do MEI, que trabalha sem sócio e que o faturamento previsto (cerca de R$ 3.200 por mês) cabe com folga no limite anual atual.</span></li><li><span><b>Custos novos:</b> a guia mensal (no exemplo, R$ 90, valor inventado) e cerca de 2 horas por mês de organização: notas, planilha e comprovantes.</span></li><li><span><b>Comparação:</b> ela coloca os dois cenários lado a lado (tabela abaixo).</span></li><li><span><b>Decisão com marco:</b> formalizar antes de assinar com o hotel, e pedir ao Sebrae uma conversa gratuita para tirar as dúvidas que sobraram.</span></li></ol></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Item (valores ilustrativos)</th><th>Continuar informal</th><th>Virar MEI</th></tr><tr><td>Receita mensal prevista</td><td>R$ 2.000</td><td>R$ 3.200 (com o hotel)</td></tr><tr><td>Guia mensal</td><td>Não tem</td><td>R$ 90 no exemplo (confira o valor real no portal)</td></tr><tr><td>Nota fiscal para o hotel</td><td>Não consegue emitir: perde o contrato</td><td>Emite</td></tr><tr><td>Previdência</td><td>Nenhuma contribuição</td><td>Contribui pelo DAS, nas regras do INSS</td></tr><tr><td>Rotina extra</td><td>Nenhuma</td><td>Cerca de 2 horas por mês</td></tr></table></div>`,
        `<div class="flows"><div class="flow old"><h4>Decisão no impulso</h4><div class="node">"Todo mundo diz que tem que abrir"</div><div class="node">Abre sem conferir a ocupação</div><div class="node">Esquece a guia nos meses fracos</div></div><div class="flow new"><h4>Decisão com conta</h4><div class="node">Compara os dois cenários com números</div><div class="node">Confere as regras no portal oficial</div><div class="node">Define quando e por que formalizar</div></div></div>`,
        `<div class="card"><h3>E se a conta desse outro resultado?</h3><p>Se Joana atendesse só vizinhas, poucas horas por semana, sem nenhum pedido de nota, a mesma conta poderia mostrar que ainda não é hora. Aí a decisão seria "esperar até um marco": por exemplo, o primeiro cliente empresa ou a renda do trabalho passar a pagar as contas da casa. Esperar com um marco definido também é uma decisão informada.</p></div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><ol class="golden"><li><span><b>Comparar só a guia com a receita:</b> inclua também o tempo de organização e o que você perde sem nota.</span></li><li><span><b>Usar valores de rede social:</b> guia e limite mudam; anote os números do portal oficial e a data em que conferiu.</span></li><li><span><b>Esquecer os meses fracos:</b> refaça a conta com o pior mês do ano, não com o melhor.</span></li><li><span><b>Decidir sem marco:</b> "um dia eu formalizo" vira nunca; escreva o sinal que vai fazer você mudar.</span></li></ol></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez (cerca de 5 minutos)</h3><ol class="golden"><li><span>Abra o Portal do Empreendedor, conferindo que o endereço termina em gov.br, e anote o nome exato da ocupação mais próxima do seu serviço.</span></li><li><span>Anote a guia mensal e o limite anual que aparecem lá hoje, com a data da consulta.</span></li><li><span>Monte uma tabela de dois cenários como a da Joana, com as suas estimativas, incluindo o pior mês do ano.</span></li><li><span>Escreva em duas frases a sua decisão e o marco que faria você mudar de ideia.</span></li></ol><p>Se usar o NotebookLM para tirar dúvidas, adicione só páginas oficiais como fonte. Não coloque CPF, senha do gov.br, dados bancários nem nomes de clientes em ferramentas de IA ou em planilhas compartilhadas.</p></div>`
      ],
      ch:[
        { who:'Denise, 45 anos, faz faxinas em residências', says:'Fiz a conta do MEI usando o mês de dezembro, que foi o meu melhor mês. Deu tudo certo, então vou abrir.',
          q:'O que falta na conta da Denise?',
          opts:[
            {t:'Nada: o melhor mês mostra o potencial do negócio.', ok:false, why:'A guia é paga todo mês. Calcular só com o melhor mês esconde o aperto dos meses fracos.'},
            {t:'Refazer a conta com o pior mês do ano e com a média, confirmando o valor atual da guia no portal oficial, para ver se ela consegue pagar mesmo nos meses fracos.', ok:true, why:'A decisão precisa caber no mês difícil. Com o pior mês e a média, ela enxerga o risco real antes de assumir o custo fixo.'},
            {t:'Trocar a conta por um vídeo de rede social que diz que MEI sempre compensa.', ok:false, why:'Cada caso é diferente, e valores de rede social podem estar desatualizados. A fonte é o portal oficial.'}
          ]},
        { who:'Gustavo, 29 anos, dá aulas particulares de violão', says:'Usei na minha conta o valor da guia que um amigo me falou no ano passado.',
          q:'Qual é o risco e como corrigir?',
          opts:[
            {t:'Nenhum risco: o valor da guia nunca muda.', ok:false, why:'Os valores são atualizados com o tempo. Usar um número antigo pode distorcer a decisão.'},
            {t:'O risco é só o amigo ficar chateado.', ok:false, why:'O problema não é o amigo, e sim a informação possivelmente desatualizada.'},
            {t:'O valor pode estar desatualizado; ele deve conferir a guia e as regras da atividade dele no Portal do Empreendedor e anotar a data da consulta.', ok:true, why:'Com o número oficial e datado, a conta fica confiável e fácil de revisar no futuro.'}
          ]},
        { who:'Lorena, 36 anos, vende bolos de pote para vizinhos', says:'Fiz a comparação: não tenho cliente que peça nota e vendo pouco. Mas me sinto culpada por não abrir o MEI agora.',
          q:'Qual é a decisão mais coerente com a conta dela?',
          opts:[
            {t:'Abrir o MEI imediatamente para tirar a culpa.', ok:false, why:'Formalizar por culpa, sem necessidade clara, cria um custo fixo que a conta dela não justificou ainda.'},
            {t:'Registrar a decisão de esperar, com um marco claro (por exemplo, o primeiro cliente empresa ou vendas crescendo por vários meses), e rever a conta quando ele chegar.', ok:true, why:'Esperar com marco definido é uma decisão informada, e não um esquecimento.'},
            {t:'Nunca mais pensar no assunto.', ok:false, why:'Se as vendas crescerem ou surgirem pedidos de nota, ela pode perder oportunidades. O marco evita isso.'}
          ]}
      ]},
    { id:'1.8', title:'Os primeiros 30 dias depois do CNPJ', min:14,
      body:[
        `<div class="card analogy"><h3>🏁 A mudança de casa</h3><p>Pegar a chave da casa nova é só o começo. Nos primeiros dias você liga a luz, troca o endereço no banco, avisa os parentes e descobre onde fica o registro da água. Com o CNPJ é igual: o cadastro é a chave, mas o negócio só "funciona" quando você liga as coisas certas nas primeiras semanas.</p></div>`,
        `<div class="term"><b>NFS-e</b> = Nota Fiscal de Serviço eletrônica. <b>Emissor Nacional da NFS-e</b> = o sistema oficial do governo em que o MEI prestador de serviço emite as suas notas de serviço (é o padrão obrigatório para o MEI de serviços desde 2023). <b>Conta do negócio</b> = conta bancária ligada ao CNPJ ou usada só para o negócio. <b>Chave Pix do CNPJ</b> = chave Pix cadastrada com o número do CNPJ.</div>`,
        `<div class="card"><h3>Exemplo resolvido: o primeiro mês do Marcos</h3><p>Lembra do Marcos, que conserta celulares (lição 1.3)? Ele escolheu a ocupação com orientação do Sebrae e abriu o MEI. Em vez de "deixar o CNPJ lá", ele dividiu o primeiro mês em quatro semanas, com poucas tarefas por vez:</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Semana</th><th>Tarefas do Marcos</th><th>Por quê</th></tr><tr><td>1</td><td>Salvar o CCMEI na pasta do negócio, conferir os dados do cadastro e perguntar à prefeitura se o endereço e a atividade precisam de licença</td><td>Erro de cadastro e falta de licença são mais fáceis de corrigir no início</td></tr><tr><td>2</td><td>Comparar condições de conta para o negócio, abrir a conta e cadastrar a chave Pix do CNPJ</td><td>A partir daqui, o dinheiro do trabalho não se mistura com o de casa</td></tr><tr><td>3</td><td>Entrar no Emissor Nacional da NFS-e com o login gov.br, conferir os dados e conhecer os campos da nota</td><td>Aprender com calma, e não no dia em que o cliente pede a nota com pressa</td></tr><tr><td>4</td><td>Gerar a primeira guia no portal oficial, criar o lembrete mensal, abrir a planilha de entradas e saídas e avisar os clientes da nova chave Pix</td><td>A rotina começa certa desde o primeiro mês</td></tr></table></div>`,
        `<div class="card"><h3>Serviço e produto: a nota não é a mesma</h3><p>Marcos presta serviço, por isso usa a NFS-e no emissor nacional. Se ele também vendesse peças e acessórios para empresas, essa venda de mercadoria usaria outro tipo de nota, que segue as regras do estado. Quem faz as duas coisas deve confirmar com o contador ou no Portal do Empreendedor como emitir cada uma. Detalhes de acesso e telas mudam com o tempo: entre sempre pelos endereços oficiais.</p></div>`,
        `<div class="flows"><div class="flow old"><h4>CNPJ aberto e esquecido</h4><div class="node">Continua recebendo no Pix pessoal</div><div class="node">Não sabe emitir nota quando o cliente pede</div><div class="node">Descobre guias atrasadas meses depois</div></div><div class="flow new"><h4>CNPJ ativo e organizado</h4><div class="node">Conta e chave Pix do negócio</div><div class="node">Já conhece o emissor de notas</div><div class="node">Lembrete da guia e planilha desde o primeiro mês</div></div></div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><ol class="golden"><li><span><b>Achar que o CNPJ parado não gera custo:</b> a guia é mensal desde a abertura, com ou sem cliente. Crie o lembrete na primeira semana.</span></li><li><span><b>Fazer tudo num dia só:</b> cansa e algo fica esquecido. Poucas tarefas por semana funcionam melhor.</span></li><li><span><b>Abrir a primeira conta que aparece:</b> compare tarifas, limites e atendimento nas condições oficiais de cada banco.</span></li><li><span><b>Responder mensagens de "regularização do novo CNPJ":</b> logo após a abertura chegam ofertas e cobranças falsas. Tudo o que é oficial você acessa digitando o endereço.</span></li></ol></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez (cerca de 4 minutos)</h3><ol class="golden"><li><span>Copie a tabela de quatro semanas num papel ou planilha e adapte as tarefas ao seu negócio.</span></li><li><span>No Portal do Empreendedor, localize onde se gera a guia mensal e onde há orientação sobre nota fiscal.</span></li><li><span>No site do Sebrae, procure um conteúdo ou atendimento gratuito sobre os primeiros passos do MEI e anote como acessar.</span></li><li><span>Marque o que já fez e escolha a primeira tarefa da semana que vem.</span></li></ol><p>Privacidade: não anote senha, códigos de acesso, CPF ou dados bancários na lista; se compartilhar o plano com alguém, mande só as tarefas.</p></div>`
      ],
      ch:[
        { who:'Tiago, 27 anos, abriu o MEI de instalação de som automotivo', says:'Abri o CNPJ há três meses, mas ainda não tive cliente com nota. Não paguei nada, porque nem comecei de verdade.',
          q:'O que Tiago precisa fazer?',
          opts:[
            {t:'Nada: a guia só começa a contar depois da primeira nota.', ok:false, why:'A guia do MEI é mensal desde a abertura, com ou sem faturamento.'},
            {t:'Entrar no Portal do Empreendedor, ver as guias em aberto, regularizar e criar o lembrete mensal; se a situação estiver confusa, pedir orientação ao Sebrae ou a um contador.', ok:true, why:'Regularizar cedo reduz multa e juros, e o lembrete evita que o atraso se repita.'},
            {t:'Fechar o CNPJ e abrir outro para começar do zero.', ok:false, why:'Fechar não apaga débitos e cria mais trabalho. O caminho é regularizar.'}
          ]},
        { who:'Bianca, 33 anos, é MEI e faz instalação de cortinas', says:'Um condomínio quer me contratar e pediu a nota de serviço para amanhã. Nunca entrei no emissor.',
          q:'Qual é o melhor caminho para ela agora e no futuro?',
          opts:[
            {t:'Mandar um recibo simples no lugar da nota.', ok:false, why:'O condomínio pediu nota de serviço. Recibo não substitui a nota quando ela é exigida.'},
            {t:'Pedir a um conhecido que emita a nota no CNPJ dele.', ok:false, why:'Emitir nota no CNPJ de outra pessoa é irregular e arriscado para os dois.'},
            {t:'Acessar o Emissor Nacional da NFS-e pelo endereço oficial com o login gov.br, emitir a nota com calma e, se travar, pedir ajuda ao Sebrae ou ao contador; depois, incluir "conhecer o emissor" na rotina de quem acaba de abrir o MEI.', ok:true, why:'A NFS-e nacional é o caminho oficial para o MEI de serviços, e conhecer o sistema antes evita a correria.'}
          ]},
        { who:'Otaviano, 52 anos, abriu o MEI de conserto de eletrodomésticos', says:'Recebi no WhatsApp uma mensagem dizendo que meu CNPJ novo precisa de "ativação" paga em 24 horas.',
          q:'Qual é a atitude correta?',
          opts:[
            {t:'Pagar logo, porque o CNPJ é novo e ele ainda não conhece as regras.', ok:false, why:'Não existe taxa de ativação do MEI. Golpistas miram justamente quem acabou de abrir o CNPJ.'},
            {t:'Ignorar a mensagem, não clicar em links e conferir a situação do CNPJ digitando o endereço do Portal do Empreendedor.', ok:true, why:'Tudo o que é oficial pode ser conferido no portal. Urgência e cobrança por mensagem são sinais clássicos de golpe.'},
            {t:'Responder a mensagem com o CPF para confirmar a identidade.', ok:false, why:'Mandar dados pessoais a desconhecidos aumenta o risco de golpe e uso indevido.'}
          ]}
      ]},
    { id:'1.6', title:'Projeto: minha decisão sobre formalizar', min:30,
      body:[
        `<div class="card"><p>Agora é com você. Em vez de seguir o que "todo mundo diz", você vai tomar uma decisão informada sobre formalizar o seu negócio (ou sobre o que ajustar, se já for MEI). Use o Portal do Empreendedor (gov.br) como fonte e anote as dúvidas para levar a um contador ou ao Sebrae. Não copie números de sites não oficiais: confira tudo na fonte.</p></div>`
      ],
      projeto: {
        entrega: 'Um documento curto com a sua decisão sobre formalizar (ou ajustar o MEI), baseado nas perguntas de decisão e na pesquisa no portal oficial.',
        passos: [
          'Responda por escrito às perguntas de decisão da lição 1.1 para o seu negócio (clientes, volume, sócio, custo mensal, fornecedores, proteção).',
          'Pesquise no Portal do Empreendedor se a sua atividade aparece na lista de ocupações e anote o nome exato da ocupação.',
          'Liste os direitos e deveres que mais pesam para você e os sinais de alerta da lição 1.4 que se aplicam (ou não).',
          'Escreva a sua decisão (formalizar agora, esperar até um marco definido ou procurar outro formato), o motivo e os sinais que vão indicar a próxima transição (lição 1.5).',
          'Monte um plano de cadastro seguro (lição 1.3) e liste de 3 a 5 perguntas para levar a um contador ou ao Sebrae.'
        ],
        checklist: [
          'Conferi a atividade e as regras no Portal do Empreendedor, sem usar números de sites não oficiais.',
          'Minha decisão tem um motivo claro, ligado aos meus clientes e ao meu volume.',
          'Verifiquei os sinais de quando o MEI não serve (sócio, atividade, limite) e defini os sinais de transição.',
          'Meu plano de cadastro usa só canais oficiais e protege a minha conta gov.br.',
          'Tenho uma lista de perguntas para um contador ou para o Sebrae.'
        ],
        minimo: 350
      } }
  ]},
  { id:2, icon:'💼', title:'Organizar', sub:'Contas, notas, preço e caixa', lessons:[
    { id:'2.1', title:'Separar contas e controlar entradas e saídas', min:10,
      body:[
        `<div class="card analogy"><h3>🧮 Duas carteiras</h3><p>A carteira do bolso é para as suas contas pessoais, e a do negócio é para as do trabalho. Misturar as duas faz você nunca saber se o negócio está dando lucro, ou se você só está gastando o dinheiro que deveria comprar material na semana que vem.</p></div>`,
        `<div class="term"><b>Entrada</b> = dinheiro que você recebe. <b>Saída</b> = dinheiro que você gasta, como ferramentas, internet e impostos. <b>Lucro</b> = o que sobra depois de pagar os custos. <b>Retirada</b> (ou pró-labore) = o valor que você tira do negócio para pagar a sua vida pessoal.</div>`,
        `<div class="card"><h3>Cinco hábitos simples</h3><ol class="golden"><li><span>Separe a conta pessoal da conta do negócio (muitos bancos têm opções de conta para pequenos negócios: compare as condições).</span></li><li><span>Anote toda entrada e saída numa planilha: data, cliente, serviço, valor e forma de pagamento.</span></li><li><span>Separe uma parte de cada recebimento para impostos e imprevistos.</span></li><li><span>Defina um valor fixo que você retira para si todo mês.</span></li><li><span>Revise tudo uma vez por mês.</span></li></ol>
          <p>A IA ajuda a montar a planilha, mas os números reais são seus: não envie extratos com dados pessoais completos a ferramentas de IA.</p></div>`,
        `<div class="flows"><div class="flow old"><h4>Caixa misturado</h4><div class="node">Cliente paga no Pix pessoal</div><div class="node">Mercado, conta de luz e material saem da mesma conta</div><div class="node">Fim do mês: "para onde foi o dinheiro?"</div></div><div class="flow new"><h4>Caixa separado</h4><div class="node">Cliente paga na conta do negócio</div><div class="node">Material e guia saem da conta do negócio</div><div class="node">Uma retirada fixa vai para a conta pessoal</div><div class="node">Fim do mês: lucro visível</div></div></div>`,
        `<div class="card"><h3>Exemplo com valores hipotéticos</h3><p>Imagine uma diarista que faturou R$ 2.400 no mês. Na conta do negócio saíram R$ 180 de produtos de limpeza, R$ 220 de transporte e R$ 60 de celular e internet usados no trabalho, além da guia mensal e da reserva para imprevistos. O que sobra é o resultado do mês, e dele sai a retirada fixa. Se ela misturasse tudo com o mercado e as contas de casa, não saberia se o trabalho está pagando os próprios custos. Os valores aqui são só um exemplo para treinar o raciocínio: use sempre os seus números reais.</p></div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><ol class="golden"><li><span><b>Pagar a conta de casa com o dinheiro do negócio "só desta vez"</b>: registre como retirada, para não sumir do controle.</span></li><li><span><b>Esquecer as pequenas saídas</b> (estacionamento, taxa da maquininha, embalagem): elas somam muito no fim do mês.</span></li><li><span><b>Anotar só as entradas</b>: sem as saídas, você vê faturamento, não lucro.</span></li><li><span><b>Deixar para anotar no fim do mês</b>: anote no mesmo dia ou, no máximo, uma vez por semana.</span></li></ol><p>Dica prática: escolha um horário fixo, como domingo à noite, para lançar a semana inteira. Dez minutos por semana valem mais do que uma tarde inteira de correria no fim do mês.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que ter uma carteira para o lanche e outra para o negócio ajuda a saber quanto sobrou.</div>`
      ],
      ch:[
        { who:'Wagner, 35 anos, presta serviços', says:'Recebo tudo na minha conta pessoal e gasto como quiser. No fim do mês não sei se tive lucro.',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Separar as contas, anotar toda entrada e saída, reservar parte para impostos e revisar uma vez por mês.', ok:true, why:'Com contas separadas e registro, ele vê o lucro real e evita sustos com impostos.'},
            {t:'Esperar o fim do ano para tentar lembrar de tudo.', ok:false, why:'A memória falha e o fim do ano chega com contas confusas.'},
            {t:'Comprar um sistema caro antes de ter clientes.', ok:false, why:'Uma planilha simples resolve no começo. O hábito importa mais que a ferramenta.'}
          ]},
        { who:'Tânia, 44 anos, tem um pequeno salão de beleza', says:'Anoto tudo o que entra no caderno e o mês sempre parece ótimo. Mas nunca sobra dinheiro para repor os produtos.',
          q:'O que provavelmente está faltando no controle dela?',
          opts:[
            {t:'Anotar as entradas com letra mais bonita.', ok:false, why:'A forma não é o problema. O que falta é enxergar os gastos.'},
            {t:'Cobrar mais caro de todas as clientes imediatamente.', ok:false, why:'Talvez o preço precise de ajuste, mas sem anotar as saídas ela nem sabe quanto custa cada serviço.'},
            {t:'Anotar também todas as saídas (produtos, taxas, aluguel, retiradas pessoais), para ver o lucro real, e não apenas o faturamento.', ok:true, why:'Só com entradas e saídas ela descobre para onde o dinheiro está indo e quanto realmente sobra.'}
          ]},
        { who:'Roberto, 38 anos, dono de uma pequena oficina', says:'Quero colar meus extratos bancários completos numa IA para ela organizar tudo para mim.',
          q:'Qual é o jeito mais seguro de usar a IA aqui?',
          opts:[
            {t:'Colar tudo, inclusive nomes, CPFs e números de conta dos clientes, porque assim fica mais completo.', ok:false, why:'Expor dados pessoais de clientes e bancários a ferramentas externas é arriscado e pode ferir a LGPD.'},
            {t:'Pedir à IA ajuda para montar a estrutura da planilha (colunas e categorias) e preencher ele mesmo os valores, sem enviar dados pessoais.', ok:true, why:'A IA ajuda no modelo, e os dados sensíveis ficam com ele. Assim ele aprende a controlar o próprio caixa.'},
            {t:'Nunca usar planilha nenhuma, só a memória.', ok:false, why:'A memória falha. Uma planilha simples é a base do controle financeiro.'}
          ]}
      ]},
    { id:'2.2', title:'Notas, recibos e cobrança correta', min:10,
      body:[
        `<div class="card analogy"><h3>🧾 O recibo da padaria</h3><p>O recibo comprova a compra para os dois lados. Se houver dúvida depois, os dois sabem o que foi combinado e pago. Num negócio, notas e recibos são a memória oficial de cada venda: protegem você numa discussão e mostram o seu faturamento real.</p></div>`,
        `<div class="term"><b>Nota fiscal de serviço</b> = documento que registra um serviço prestado e comprova a receita. <b>Nota fiscal de produto</b> = documento que registra a venda de mercadorias. <b>Recibo</b> = comprovante simples de pagamento. <b>Meio rastreável</b> = forma de pagamento que deixa registro, como Pix e transferência.</div>`,
        `<div class="card"><h3>Registre tudo</h3><p>Para o MEI, a nota fiscal é obrigatória quando o serviço ou a venda é para empresa; para pessoas físicas, em geral só quando o cliente pede, mas a receita deve ser registrada de qualquer forma. As regras e o sistema de emissão podem variar conforme a atividade e o município, então confirme na prefeitura, no Portal do Empreendedor ou com o contador. Na nota, descreva claramente o serviço e o valor, com os dados do cliente apenas o necessário. Receba por meios rastreáveis e guarde notas e comprovantes pelo prazo que o contador indicar. Não combine "pagar sem nota para ter desconto": isso gera risco para você e para o cliente.</p></div>`,
        `<div class="card"><h3>Um recibo simples tem</h3><ol class="golden"><li><span>Seu nome ou nome do negócio e, se tiver, o CNPJ.</span></li><li><span>Nome do cliente (só o necessário).</span></li><li><span>Descrição do serviço ou produto, com data.</span></li><li><span>Valor e forma de pagamento.</span></li><li><span>Se é pagamento total, sinal ou parcela.</span></li><li><span>Sua assinatura ou confirmação digital.</span></li></ol></div>`,
        `<div class="card"><h3>Cobrança correta e educada</h3><p>Cobrar bem começa antes do serviço: combine valor, forma e data de pagamento por escrito. Para serviços maiores, como uma reforma pequena ou um bolo de casamento, um sinal na confirmação reduz o risco de desistência. Se o pagamento atrasar, lembre o cliente com educação, mostre o combinado e ofereça uma forma prática de pagar. Exemplo de tom: "Oi, Júlia! Passando para lembrar do pagamento do serviço do dia 10, combinado para hoje. Segue a chave Pix do negócio. Qualquer dúvida, estou à disposição." Evite exposição em redes sociais ou ameaças: além de antiético, pode gerar problemas legais.</p></div>`,
        `<div class="card"><h3>Organização dos documentos</h3><p>Crie uma pasta (física ou no computador) por mês, com subpastas "notas emitidas", "recibos" e "comprovantes de despesas". Dê nomes claros aos arquivos, como "2026-10-recibo-cliente-servico". Faça uma cópia de segurança. No fim do mês, confira se cada entrada da planilha tem um documento correspondente. Isso facilita muito a declaração anual e qualquer conversa com o contador.</p><p>Se usar a IA para criar um modelo de recibo, peça só a estrutura (campos e ordem) e preencha você mesmo, sem colar dados reais de clientes.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o recibo ajuda quem vendeu e quem comprou.</div>`
      ],
      ch:[
        { who:'Renata, 30 anos, é MEI', says:'Uma empresa me pagou por um serviço, e eu não emiti nota porque dá trabalho.',
          q:'Qual é a atitude correta?',
          opts:[
            {t:'Deixar assim: a empresa não vai reclamar.', ok:false, why:'A empresa pode precisar da nota, e a falta dela gera problemas fiscais para você.'},
            {t:'Emitir a nota, porque serviço para empresa exige nota, aprendendo o processo na prefeitura ou no portal oficial e registrando a receita.', ok:true, why:'Emitir a nota cumpre a obrigação, protege os dois lados e mantém o negócio regular.'},
            {t:'Emitir a nota só se a empresa cobrar.', ok:false, why:'A obrigação é do MEI, e não depende de a empresa cobrar.'}
          ]},
        { who:'Fernanda, 33 anos, confeiteira', says:'Uma cliente pediu desconto para pagar "por fora", sem nota e em dinheiro vivo, num bolo grande para uma empresa.',
          q:'Como Fernanda deve responder?',
          opts:[
            {t:'Aceitar, porque o desconto fecha a venda.', ok:false, why:'Venda para empresa exige nota, e combinar "por fora" traz risco fiscal para os dois lados.'},
            {t:'Recusar com educação, explicar que trabalha com nota e meios rastreáveis, e mostrar o valor do produto em vez de dar desconto irregular.', ok:true, why:'Ela mantém o negócio regular e reforça o profissionalismo, que costuma atrair clientes melhores.'},
            {t:'Aceitar o dinheiro e não registrar nada na planilha.', ok:false, why:'Além de irregular, ela perde o controle do próprio faturamento e pode declarar errado.'}
          ]},
        { who:'Luís, 41 anos, eletricista', says:'Fiz um serviço há 20 dias e o cliente ainda não pagou. Estou pensando em postar o nome dele nas redes.',
          q:'Qual é a melhor forma de cobrar?',
          opts:[
            {t:'Postar o nome nas redes para pressionar.', ok:false, why:'Expor o cliente é antiético e pode gerar processo contra o próprio Luís.'},
            {t:'Esquecer a dívida para evitar conflito.', ok:false, why:'Abrir mão do pagamento prejudica o caixa e ensina que atrasar não tem consequência.'},
            {t:'Enviar uma mensagem educada lembrando o combinado, com valor, data e chave Pix do negócio, e, para os próximos serviços, combinar por escrito e pedir sinal.', ok:true, why:'Cobrança educada e documentada resolve a maioria dos casos, e o combinado escrito previne novos atrasos.'}
          ]}
      ]},
    { id:'2.3', title:'Precificar com custos, impostos e reserva', min:10,
      body:[
        `<div class="card analogy"><h3>🍰 A receita do bolo</h3><p>Se você esquece de colocar o fermento na receita, o bolo não cresce. No preço, os "ingredientes esquecidos" costumam ser a guia mensal, a taxa da maquininha, o tempo de deslocamento e a reserva. O preço parece bom, mas no fim do mês o negócio "não cresce".</p></div>`,
        `<div class="term"><b>Custo direto</b> = o que você gasta em cada serviço ou produto (material, embalagem, ingrediente). <b>Custo fixo</b> = o que você paga todo mês, vendendo ou não (guia do MEI, internet, aluguel). <b>Margem</b> = a parte do preço que sobra depois dos custos. <b>Reserva</b> = uma parte separada para imprevistos e meses fracos.</div>`,
        `<div class="card"><h3>Os blocos do preço</h3><ol class="golden"><li><span><b>Custos diretos</b> de cada venda: liste item por item.</span></li><li><span><b>Parte dos custos fixos</b>: divida o total mensal pelo número de vendas ou horas que você realmente faz no mês.</span></li><li><span><b>Seu tempo</b>: quanto vale a sua hora de trabalho, incluindo preparação e deslocamento.</span></li><li><span><b>Impostos e taxas</b>: a guia mensal do MEI entra nos custos fixos; taxas de maquininha e plataformas entram em cada venda. Para saber exatamente o que se aplica a você, confira no portal oficial e com o contador.</span></li><li><span><b>Reserva e margem</b>: uma parte para imprevistos e para o negócio crescer.</span></li></ol></div>`,
        `<div class="card"><h3>Exemplo com valores hipotéticos (só para treinar)</h3><p>Uma confeiteira vende um bolo de festa. Ingredientes e embalagem: R$ 45. Gás e energia estimados por bolo: R$ 8. Taxa da maquininha, se o cliente pagar no cartão: alguns reais, conforme a taxa do seu contrato. Ela faz cerca de 20 bolos por mês e tem custos fixos mensais (guia do MEI, internet, parte do aluguel) que, divididos por 20, dão R$ 15 por bolo. O bolo leva 3 horas de trabalho, e ela definiu que a sua hora vale R$ 20, ou seja, R$ 60. Somando: 45 + 8 + 15 + 60 = R$ 128, mais a taxa do cartão. Por cima disso, ela acrescenta uma parte para reserva e margem. Só depois compara com o mercado. Esses números são inventados: o importante é o raciocínio, e você deve usar os seus valores reais.</p></div>`,
        `<div class="card"><h3>Comparar com o mercado, sem copiar</h3><p>Pesquise o que outros cobram na sua região, mas não copie: o vizinho pode ter custos diferentes, ou estar trabalhando no prejuízo sem saber. Se o seu preço calculado ficar muito acima do mercado, reveja custos, tempo e público, em vez de simplesmente baixar e trabalhar de graça. Se ficar abaixo, talvez você esteja subestimando o seu valor.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Cobrar só o material; esquecer que a guia mensal existe mesmo em meses fracos; não contar o tempo de orçamento e deslocamento; dar desconto sem saber a margem; nunca reajustar o preço quando os insumos sobem. E a IA? Ela pode montar uma planilha de cálculo de preço com as colunas certas, mas os números e a decisão final são seus. Nunca peça à IA "qual imposto eu pago": confira no portal oficial e com o contador, porque a IA pode estar desatualizada.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um bolo sem fermento não cresce, e qual é o "fermento esquecido" no preço de um negócio.</div>`
      ],
      ch:[
        { who:'Gabriela, 27 anos, faz sobrancelhas em domicílio', says:'Cobro só o valor da pinça e da linha, mais um pouquinho. Mas no fim do mês nunca sobra nada.',
          q:'O que está faltando no preço dela?',
          opts:[
            {t:'Nada: o preço só precisa cobrir o material.', ok:false, why:'Cobrir só o material ignora tempo, deslocamento, custos fixos e reserva, por isso não sobra dinheiro.'},
            {t:'Incluir custos fixos (como a guia mensal e o celular), o tempo de deslocamento, o valor da hora dela e uma reserva, conferindo no portal oficial e com o contador o que se aplica de impostos.', ok:true, why:'O preço precisa pagar todos os custos e o trabalho dela. Só assim sobra resultado no fim do mês.'},
            {t:'Copiar o preço da concorrente mais barata da cidade.', ok:false, why:'A concorrente pode ter outros custos ou trabalhar no prejuízo. Copiar não garante que o preço cubra os custos dela.'}
          ]},
        { who:'Seu Jorge, 55 anos, dono de uma pequena padaria', says:'Uma IA me disse um número de imposto para colocar no preço. Vou usar esse número e pronto.',
          q:'Qual é o cuidado necessário?',
          opts:[
            {t:'Usar o número da IA, porque ela sabe tudo.', ok:false, why:'A IA pode estar desatualizada ou errar regras específicas. Imposto exige fonte oficial.'},
            {t:'Ignorar impostos no preço.', ok:false, why:'Ignorar impostos e taxas faz o preço não cobrir os custos reais.'},
            {t:'Usar a IA apenas para organizar a planilha de preço e confirmar os impostos e valores que se aplicam à padaria no portal oficial e com o contador.', ok:true, why:'A IA ajuda na estrutura, mas regras e valores fiscais precisam vir de fontes oficiais e de um profissional.'}
          ]},
        { who:'Aline, 35 anos, tem um pet shop de banho e tosa', says:'O shampoo e o transporte subiram muito, mas tenho vergonha de aumentar o preço para as clientes antigas.',
          q:'Qual é a melhor atitude?',
          opts:[
            {t:'Refazer o cálculo com os custos atuais, definir o novo preço e avisar as clientes com antecedência e transparência, explicando o reajuste.', ok:true, why:'Reajustar com aviso prévio é profissional e evita que o negócio passe a trabalhar no prejuízo.'},
            {t:'Manter o preço para sempre e cortar a qualidade dos produtos.', ok:false, why:'Cortar qualidade escondido prejudica os animais e a confiança das clientes.'},
            {t:'Aumentar sem avisar e ver quem reclama.', ok:false, why:'Surpresa no preço gera desconfiança. Avisar antes mantém o bom relacionamento.'}
          ]}
      ]},
    { id:'2.4', title:'Fluxo de caixa simples e retirada fixa', min:10,
      body:[
        `<div class="card analogy"><h3>🚰 A caixa d'água</h3><p>A caixa d'água recebe água pelo cano de cima e entrega pelas torneiras. Se sai mais do que entra, um dia ela seca, mesmo que hoje esteja cheia. O fluxo de caixa é olhar para os dois canos ao mesmo tempo e saber quando a caixa vai ficar baixa.</p></div>`,
        `<div class="term"><b>Fluxo de caixa</b> = o registro de quanto dinheiro entra e sai, e quando. <b>Saldo</b> = o que sobra no caixa num determinado dia. <b>Categoria</b> = o grupo de cada gasto ou recebimento (material, transporte, vendas à vista). <b>Pró-labore</b> ou <b>retirada fixa</b> = o "salário" que o dono tira do negócio todo mês.</div>`,
        `<div class="card"><h3>Montando a planilha mensal</h3><ol class="golden"><li><span>Crie as colunas: data, descrição, categoria, entrada, saída, forma de pagamento e saldo.</span></li><li><span>Defina poucas categorias de entrada: por exemplo, serviços, produtos, sinais recebidos.</span></li><li><span>Defina categorias de saída: material, transporte, taxas e maquininha, guia do MEI, aluguel ou espaço, marketing, retirada do dono, reserva.</span></li><li><span>Lance tudo no dia ou uma vez por semana.</span></li><li><span>No fim do mês, some cada categoria e veja onde o dinheiro foi parar.</span></li></ol></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Data</th><th>Descrição</th><th>Categoria</th><th>Entrada</th><th>Saída</th></tr><tr><td>02/10</td><td>Corte e escova (cliente A)</td><td>Serviços</td><td>R$ 90</td><td></td></tr><tr><td>03/10</td><td>Produtos para cabelo</td><td>Material</td><td></td><td>R$ 150</td></tr><tr><td>05/10</td><td>Taxa da maquininha da semana</td><td>Taxas</td><td></td><td>R$ 12</td></tr><tr><td>10/10</td><td>Retirada do mês (parte 1)</td><td>Retirada do dono</td><td></td><td>R$ 600</td></tr></table></div>`,
        `<div class="card"><h3>Por que uma retirada fixa?</h3><p>Sem retirada fixa, o dono pega dinheiro do caixa toda vez que precisa, e o negócio nunca sabe quanto pode gastar ou investir. Com uma retirada fixa, por exemplo em duas datas por mês, você separa a vida pessoal da vida do negócio. Comece com um valor que o negócio consegue pagar mesmo num mês fraco; se sobrar mais, reforce a reserva ou faça um ajuste depois de alguns meses. Esse valor é uma decisão sua com base nos seus números, não uma regra fixa. Valores na tabela acima são apenas ilustrativos.</p></div>`,
        `<div class="card"><h3>Olhar para frente</h3><p>Fluxo de caixa não é só passado. Na planilha, crie uma aba com as contas que já sabe que vêm: a guia mensal, o aluguel, a compra grande de material antes do Natal. Uma loja de bairro que sabe que dezembro vende muito e janeiro vende pouco pode guardar parte de dezembro para pagar as contas de janeiro. Isso evita pegar empréstimo caro por falta de planejamento.</p></div>`,
        `<div class="card"><h3>IA sem dados sensíveis</h3><p>Peça à IA para sugerir categorias para o seu tipo de negócio, explicar fórmulas de soma por categoria ou criar um gráfico simples. Não envie nomes, CPFs, telefones de clientes nem dados bancários. Troque nomes por códigos (cliente A, cliente B) se precisar mostrar um exemplo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma caixa d'água cheia hoje pode secar amanhã, se sair mais água do que entra.</div>`
      ],
      ch:[
        { who:'Márcia, 42 anos, dona de uma loja de roupas no bairro', says:'Em dezembro vendo muito e gasto tudo. Em fevereiro sempre falta dinheiro para pagar o aluguel e a guia.',
          q:'O que o fluxo de caixa sugere?',
          opts:[
            {t:'Fechar a loja em fevereiro.', ok:false, why:'Fechar não resolve o problema de planejamento e ainda reduz as vendas.'},
            {t:'Registrar as contas futuras na planilha e guardar parte das vendas de dezembro para cobrir os meses fracos, com uma retirada fixa no lugar de gastos sem controle.', ok:true, why:'Olhar para frente e separar dinheiro nos meses bons garante as contas nos meses fracos.'},
            {t:'Pegar empréstimo todo fevereiro e não mudar nada.', ok:false, why:'Empréstimo recorrente por falta de planejamento custa caro e não resolve a causa.'}
          ]},
        { who:'Paulo, 37 anos, personal trainer', says:'Não tenho salário definido. Quando preciso de dinheiro, tiro da conta do negócio.',
          q:'Qual é a melhor prática para Paulo?',
          opts:[
            {t:'Continuar tirando quando precisar, porque o dinheiro é dele mesmo.', ok:false, why:'Sem retirada definida, ele nunca sabe quanto o negócio gera nem quanto pode investir.'},
            {t:'Não tirar nada até o fim do ano.', ok:false, why:'Ele precisa pagar a vida pessoal. Ficar sem retirada é insustentável.'},
            {t:'Definir uma retirada fixa que o negócio consiga pagar mesmo num mês fraco, registrar como categoria própria e revisar o valor depois de alguns meses de controle.', ok:true, why:'A retirada fixa separa a vida pessoal da empresa e deixa o resultado do negócio visível.'}
          ]},
        { who:'Isabela, 31 anos, tem uma clínica de estética pequena', says:'Minha planilha tem 40 categorias diferentes. Desisti de preencher porque é complicado demais.',
          q:'Como simplificar?',
          opts:[
            {t:'Reduzir para poucas categorias claras de entrada e saída, que ela consiga preencher toda semana, e detalhar mais só se precisar.', ok:true, why:'Uma planilha simples e preenchida vale mais do que uma completa e abandonada.'},
            {t:'Contratar alguém para preencher e nunca olhar.', ok:false, why:'Ela precisa entender os próprios números para decidir. Delegar sem acompanhar não resolve.'},
            {t:'Parar de controlar o dinheiro.', ok:false, why:'Sem controle, ela não sabe se a clínica dá lucro.'}
          ]}
      ]},
    { id:'2.5', title:'Receber com segurança: Pix, maquininha e golpes', min:10,
      body:[
        `<div class="card analogy"><h3>🚪 O porteiro do prédio</h3><p>Um bom porteiro não abre a porta só porque alguém disse "sou entregador". Ele confere, liga para o morador, olha o crachá. Na hora de receber, você precisa ser o porteiro do seu caixa: só entregue o produto ou conclua o serviço quando tiver certeza de que o dinheiro realmente entrou.</p></div>`,
        `<div class="term"><b>Comprovante falso</b> = imagem editada ou gerada que imita um comprovante de Pix ou transferência. <b>Maquininha</b> = aparelho para receber no cartão, com taxas por venda. <b>Estorno</b> ou <b>chargeback</b> = devolução de um pagamento no cartão, pedida pelo comprador ao banco. <b>Inadimplência</b> = quando o cliente não paga no prazo combinado.</div>`,
        `<div class="card"><h3>Pix: confira no extrato, não no print</h3><ol class="golden"><li><span>Use uma chave Pix do negócio (de preferência o CNPJ ou um e-mail do negócio), e não o seu CPF pessoal.</span></li><li><span>Antes de entregar, confira o valor no aplicativo do banco ou no extrato. Print enviado pelo cliente não prova nada.</span></li><li><span>Desconfie de comprovantes "agendados": agendamento pode ser cancelado.</span></li><li><span>Desconfie de pressa: "já paguei, pode liberar que estou com o motoboy aqui".</span></li><li><span>Ative as notificações de recebimento do banco para conferir na hora.</span></li><li><span>Não clique em links de "Pix recebido" que chegam por mensagem: o banco não pede para você confirmar nada por link.</span></li></ol></div>`,
        `<div class="card"><h3>Maquininha: conheça as taxas e proteja-se</h3><p>Cada maquininha tem taxa por venda, prazo de recebimento e, às vezes, aluguel. Compare as condições oficiais das empresas antes de escolher e inclua a taxa no preço (lição 2.3). No dia a dia: o cartão deve ficar nas mãos do cliente, a senha é digitada por ele, e o valor na tela deve ser conferido em voz alta antes de confirmar. Em vendas à distância, cuidado com pedidos grandes de clientes desconhecidos pagando no cartão de terceiros: o titular verdadeiro pode pedir estorno depois e você fica sem o produto e sem o dinheiro. Guarde o comprovante da venda e o registro da entrega.</p></div>`,
        `<div class="flows"><div class="flow old"><h4>Recebimento arriscado</h4><div class="node">Cliente manda print</div><div class="node">Você libera na hora</div><div class="node">Dinheiro nunca entra</div><div class="node">Prejuízo e sem como cobrar</div></div><div class="flow new"><h4>Recebimento seguro</h4><div class="node">Cliente paga na chave do negócio</div><div class="node">Você confere no aplicativo do banco</div><div class="node">Libera e emite recibo ou nota</div><div class="node">Lança na planilha</div></div></div>`,
        `<div class="card"><h3>Inadimplência: prevenir é mais barato que cobrar</h3><p>Para encomendas e serviços maiores, peça sinal na confirmação e o restante na entrega. Para clientes recorrentes, combine por escrito a data de pagamento e o que acontece em caso de atraso, de forma clara e dentro da lei. Mantenha uma lista de "a receber" na planilha, com cliente (use códigos), valor e data prevista. Se atrasar, lembre com educação no dia seguinte ao vencimento, depois em alguns dias, e ofereça uma forma prática de pagar. Nunca exponha o cliente publicamente. Se o valor for alto e a conversa não resolver, procure orientação jurídica ou do Sebrae sobre os caminhos formais de cobrança.</p></div>`,
        `<div class="card"><h3>Exemplos de pequenos negócios</h3><p>Uma loja de bairro vendendo pelo WhatsApp recebeu um print perfeito de Pix numa sexta à noite; a dona conferiu o aplicativo, o dinheiro não estava lá, e ela não entregou. Uma oficina passou a pedir sinal para peças encomendadas e acabou com o prejuízo de clientes que sumiam. Uma confeitaria colocou na maquininha a regra de conferir o valor em voz alta e parou de ter vendas digitadas errado. A IA pode ajudar a escrever mensagens educadas de cobrança e listas de conferência, sem receber dados de clientes.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o porteiro não abre a porta só porque alguém disse que é entregador, e por que um print de pagamento é parecido com isso.</div>`
      ],
      ch:[
        { who:'Mariana, 29 anos, vende roupas pelo Instagram', says:'Um cliente novo mandou o print do Pix e pediu para eu despachar o pedido agora, porque o motoboy dele já está na porta.',
          q:'O que Mariana deve fazer?',
          opts:[
            {t:'Despachar logo, porque o print parece verdadeiro.', ok:false, why:'Prints podem ser editados ou gerados. A pressa é um sinal clássico de golpe.'},
            {t:'Conferir no aplicativo do banco se o valor realmente entrou e só então liberar o pedido, mesmo que o cliente insista.', ok:true, why:'Só o extrato prova o pagamento. Conferir antes de entregar evita perder o produto e o dinheiro.'},
            {t:'Pedir ao cliente um segundo print para ter certeza.', ok:false, why:'Dois prints falsos continuam sendo falsos. A conferência tem que ser no banco.'}
          ]},
        { who:'Ronaldo, 47 anos, tem uma loja de peças de moto', says:'Um desconhecido comprou peças caras por telefone, pagou com vários cartões diferentes e pediu entrega num endereço de outra cidade.',
          q:'Qual é o principal risco e como agir?',
          opts:[
            {t:'Não há risco: cartão aprovado é dinheiro garantido.', ok:false, why:'Aprovação não impede o estorno. Se os cartões forem de terceiros, o titular pode contestar a compra.'},
            {t:'Aceitar e dar desconto, porque é um cliente grande.', ok:false, why:'Desconto não reduz o risco de fraude. Ele só aumenta o prejuízo se houver estorno.'},
            {t:'Desconfiar do padrão (cliente desconhecido, vários cartões, pressa), preferir pagamento conferido no banco e guardar todos os comprovantes, consultando a maquininha sobre proteção contra fraude.', ok:true, why:'Esse padrão é comum em fraudes com cartão de terceiros. Prevenir é mais barato do que perder a mercadoria.'}
          ]},
        { who:'Camila, 38 anos, dona de uma escolinha de reforço', says:'Três famílias estão atrasando a mensalidade há dois meses. Tenho vergonha de cobrar e fico sem dinheiro para pagar as contas.',
          q:'Qual é o melhor caminho?',
          opts:[
            {t:'Enviar lembretes educados com valor e forma de pagamento, conversar sobre um acordo possível e, para todos, deixar por escrito a data de pagamento e a regra para atrasos dentro da lei.', ok:true, why:'Cobrança educada e combinado claro resolvem a maioria dos atrasos e protegem o caixa da escola.'},
            {t:'Falar dos atrasos no grupo de pais para pressionar.', ok:false, why:'Expor as famílias é antiético, pode gerar processo e destrói a confiança.'},
            {t:'Não cobrar e pegar empréstimo para cobrir.', ok:false, why:'Assim o atraso dos clientes vira dívida dela, com juros, e o problema continua.'}
          ]}
      ]},
    { id:'2.7', title:'Exemplo resolvido: do mês bagunçado ao mês organizado', min:14,
      body:[
        `<div class="card analogy"><h3>🧹 A gaveta da bagunça</h3><p>Toda cozinha tem aquela gaveta onde vai tudo: pilha, elástico, conta de luz, chave que ninguém sabe de onde é. Quando você precisa de algo, perde dez minutos. Mas basta uma tarde para esvaziar, separar em grupos e criar uma regra: "pilha vai aqui". O extrato de quem mistura negócio e casa é essa gaveta. Vamos arrumar uma, passo a passo.</p></div>`,
        `<div class="card"><h3>O caso</h3><p>Cleide, 39 anos, é MEI e faz marmitas para vizinhos e para uma pequena empresa do bairro. Tudo entra e sai da conta pessoal dela. Olhando o saldo, ela acha que "sobraram uns R$ 1.900" no mês, mas mesmo assim falta dinheiro para comprar ingredientes no começo do mês seguinte. Todos os valores abaixo são <b>ilustrativos</b>, inclusive a guia mensal, que no exemplo vale R$ 90 (o valor real você confere no portal oficial).</p></div>`,
        `<div class="card"><h3>Resolvendo passo a passo</h3><ol class="golden"><li><span><b>Marcar cada linha do extrato:</b> N para negócio e P para pessoal. Nada é apagado, só classificado.</span></li><li><span><b>Dividir o que é dos dois:</b> o gás e a energia da cozinha servem à casa e às marmitas. Cleide estima uma proporção (no exemplo, metade para o negócio) e usa sempre a mesma regra.</span></li><li><span><b>Agrupar as linhas N em poucas categorias</b>, como na lição 2.4.</span></li><li><span><b>Calcular o resultado do negócio</b>: entradas menos saídas do negócio.</span></li><li><span><b>Comparar com o que saiu para a vida pessoal</b> e descobrir a diferença.</span></li></ol></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Negócio no mês (ilustrativo)</th><th>Entrada</th><th>Saída</th></tr><tr><td>Marmitas (vizinhos e empresa)</td><td>R$ 3.600</td><td></td></tr><tr><td>Ingredientes</td><td></td><td>R$ 1.300</td></tr><tr><td>Embalagens</td><td></td><td>R$ 260</td></tr><tr><td>Metade do gás e da energia</td><td></td><td>R$ 180</td></tr><tr><td>Entregas</td><td></td><td>R$ 140</td></tr><tr><td>Guia mensal (valor de exemplo)</td><td></td><td>R$ 90</td></tr><tr><td>Taxas de cartão</td><td></td><td>R$ 40</td></tr><tr><td><b>Resultado do negócio</b></td><td colspan="2"><b>R$ 3.600 − R$ 2.010 = R$ 1.590</b></td></tr></table></div>`,
        `<div class="why-chain"><b>Por que faltava dinheiro?</b> O saldo de R$ 1.900 parecia folga, mas incluía o dinheiro que já estava na conta no começo do mês e marmitas pagas adiantado para o mês seguinte. → Do resultado de R$ 1.590, Cleide tirou cerca de R$ 1.400 para mercado e contas de casa, sem anotar como retirada. → Só uns R$ 190 do mês ficaram de fato no negócio, pouco para os ingredientes do mês seguinte. → O problema não era vender pouco: era não enxergar o que era de quem.</div>`,
        `<div class="flows"><div class="flow old"><h4>Antes</h4><div class="node">Uma conta só, olhando o saldo</div><div class="node">Mercado e ingredientes na mesma fatura</div><div class="node">Pagamentos antecipados parecendo lucro</div><div class="node">Falta dinheiro no começo do mês</div></div><div class="flow new"><h4>Depois</h4><div class="node">Conta do negócio separada</div><div class="node">Retirada fixa de R$ 1.100 em duas datas</div><div class="node">R$ 250 por mês para a reserva</div><div class="node">Os R$ 240 restantes ficam no caixa para os ingredientes</div></div></div>`,
        `<div class="card"><h3>A regra nova da Cleide</h3><p>Com o resultado em mãos, ela definiu: retirada fixa de R$ 1.100 (o que o negócio aguenta mesmo num mês mais fraco), R$ 250 para a reserva e o restante no caixa. Marmitas pagas antecipadamente ficam anotadas numa linha "recebido para o mês que vem", para não serem gastas antes da hora. No mês seguinte, as compras de mercado passaram a sair da conta pessoal, abastecida pela retirada. A organização não aumentou as vendas, mas acabou com o susto do começo do mês.</p></div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><ol class="golden"><li><span><b>Olhar o saldo como se fosse lucro:</b> saldo inclui dinheiro adiantado e contas que ainda vão vencer.</span></li><li><span><b>Mudar a regra dos custos divididos todo mês:</b> escolha uma proporção razoável e mantenha; revise só se o uso mudar.</span></li><li><span><b>Desistir no primeiro mês:</b> o primeiro mês arrumado dá trabalho; os seguintes levam minutos por semana.</span></li><li><span><b>Definir a retirada pelo melhor mês:</b> use um valor que o negócio pague mesmo no mês fraco.</span></li></ol></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez (cerca de 5 minutos)</h3><ol class="golden"><li><span>No Google Planilhas, crie uma aba "mês de teste" com as colunas data, descrição, N ou P, categoria, entrada e saída.</span></li><li><span>Lance de 10 a 15 movimentos de um mês, reais ou estimados, digitando você mesmo.</span></li><li><span>Marque N ou P em cada linha e defina a regra dos custos divididos, se houver.</span></li><li><span>Some o negócio por categoria e calcule o resultado.</span></li><li><span>Compare com o que saiu para a vida pessoal e escreva uma regra para o mês seguinte.</span></li></ol><p>Privacidade: não importe nem cole o extrato do banco; troque nomes de clientes por códigos e não anote CPF, CNPJ de clientes ou números de conta. Não compartilhe a planilha por link aberto.</p></div>`
      ],
      ch:[
        { who:'Neusa, 48 anos, é MEI e faz doces para festas', says:'Meu saldo no fim do mês está ótimo, mas metade dele é sinal de encomendas para o mês que vem.',
          q:'Como ela deve tratar esse dinheiro?',
          opts:[
            {t:'Usar tudo agora, porque já está na conta.', ok:false, why:'O sinal vai pagar ingredientes das próximas encomendas. Gastar agora deixa o mês seguinte sem caixa.'},
            {t:'Anotar os sinais numa linha separada de "recebido para o mês que vem" e não contar esse valor como resultado do mês atual.', ok:true, why:'Separar o adiantamento mostra o resultado real e garante dinheiro para cumprir as encomendas.'},
            {t:'Devolver todos os sinais para não confundir a conta.', ok:false, why:'O sinal protege contra desistências. O problema é só de registro, não do sinal em si.'}
          ]},
        { who:'Rogério, 41 anos, é MEI e faz fretes com a própria van', says:'Uso a van para trabalhar e para levar a família no fim de semana. Cada mês coloco um valor diferente de combustível no negócio.',
          q:'Qual é o ajuste mais sensato?',
          opts:[
            {t:'Lançar todo o combustível no negócio, porque a van é de trabalho.', ok:false, why:'Parte do uso é pessoal. Lançar tudo no negócio distorce o resultado e o preço do frete.'},
            {t:'Não lançar combustível nenhum para simplificar.', ok:false, why:'Combustível é um dos maiores custos dele. Sem ele, o resultado parece maior do que é.'},
            {t:'Definir uma regra fixa e razoável para dividir o combustível (por exemplo, pela quilometragem dos fretes), aplicar todo mês e revisar só se o uso mudar.', ok:true, why:'Uma regra estável deixa os meses comparáveis e o custo do frete mais próximo da realidade.'}
          ]},
        { who:'Cíntia, 35 anos, é MEI e faz bordados personalizados', says:'Organizei o mês e descobri que o negócio dá resultado, mas eu tirei mais para casa do que ele gerou.',
          q:'Qual é o próximo passo mais útil?',
          opts:[
            {t:'Definir uma retirada fixa menor que o resultado de um mês fraco, transferir em datas certas para a conta pessoal e separar uma parte para a reserva.', ok:true, why:'A retirada fixa limita o que sai para casa ao que o negócio aguenta, e a reserva protege os meses fracos.'},
            {t:'Continuar tirando o que precisar e torcer para vender mais.', ok:false, why:'Sem limite, a retirada continua maior que o resultado e o caixa vai secando.'},
            {t:'Parar de tirar dinheiro do negócio por um ano.', ok:false, why:'Ela precisa pagar a vida pessoal. A solução é um valor sustentável, não zero.'}
          ]}
      ]},
    { id:'2.8', title:'Exemplo resolvido: preço, retirada e caixa dos próximos 3 meses', min:15,
      body:[
        `<div class="card analogy"><h3>🎯 A viagem de carro</h3><p>Antes de uma viagem longa, você calcula o combustível pelo destino: quantos quilômetros, quanto o carro faz por litro, onde tem posto. Ninguém enche o tanque "pelo que dá" e torce para chegar. No negócio, o destino é a retirada que você precisa para viver. O preço é o combustível: ele é calculado de trás para frente, a partir do destino.</p></div>`,
        `<div class="term"><b>Horas vendáveis</b> = as horas do mês que viram serviço cobrado, sem contar orçamento, deslocamento e compras. <b>Valor-hora mínimo</b> = o menor valor por hora que paga a retirada, os custos fixos e a reserva. <b>Projeção de caixa</b> = estimativa das entradas e saídas dos próximos meses.</div>`,
        `<div class="card"><h3>O caso</h3><p>Diego, 33 anos, é MEI e monta móveis. Cobra "o que os outros cobram" e não sabe se isso paga a vida dele. Ele vai calcular o preço a partir da retirada e depois testar o plano nos próximos três meses. <b>Todos os números são ilustrativos</b>, inclusive a guia mensal de R$ 90: o valor real você confere no portal oficial.</p></div>`,
        `<div class="card"><h3>Resolvendo passo a passo</h3><ol class="golden"><li><span><b>Destino:</b> a retirada de que Diego precisa para as contas pessoais é R$ 2.400 por mês.</span></li><li><span><b>Custos fixos do negócio:</b> guia mensal (R$ 90 no exemplo), celular e internet (R$ 80) e reposição de ferramentas (R$ 150) = R$ 320.</span></li><li><span><b>Reserva:</b> R$ 200 por mês.</span></li><li><span><b>Total a cobrir por mês:</b> 2.400 + 320 + 200 = R$ 2.920.</span></li><li><span><b>Horas vendáveis:</b> ele trabalha cerca de 100 horas no mês, mas só umas 60 viram montagem cobrada; o resto é orçamento, deslocamento e compra de material.</span></li><li><span><b>Valor-hora mínimo:</b> 2.920 ÷ 60 ≈ R$ 48,70. Ele arredonda para R$ 50.</span></li><li><span><b>Preço de um serviço:</b> um guarda-roupa de 4 horas = 4 × 50 = R$ 200, mais custos diretos daquele serviço (parafusos e deslocamento, R$ 25) = R$ 225, mais a taxa do cartão quando o cliente pagar assim.</span></li><li><span><b>Mercado:</b> só agora ele compara com a região. Se estiver muito acima, revê horas e custos antes de baixar o preço.</span></li></ol></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Projeção (ilustrativa)</th><th>Novembro</th><th>Dezembro</th><th>Janeiro</th></tr><tr><td>Entradas previstas</td><td>R$ 3.400</td><td>R$ 3.900</td><td>R$ 2.200</td></tr><tr><td>Retirada + fixos + reserva</td><td>R$ 2.920</td><td>R$ 2.920</td><td>R$ 2.920</td></tr><tr><td>Custos diretos dos serviços</td><td>R$ 200</td><td>R$ 250</td><td>R$ 150</td></tr><tr><td>Saldo do mês</td><td>+ R$ 280</td><td>+ R$ 730</td><td>− R$ 870</td></tr><tr><td><b>Saldo acumulado no caixa</b></td><td><b>R$ 280</b></td><td><b>R$ 1.010</b></td><td><b>R$ 140</b></td></tr></table></div>`,
        `<div class="why-chain"><b>O que a projeção mostrou?</b> Janeiro costuma ser fraco para Diego. → Sozinho, janeiro fecha no vermelho. → Mas, se ele não gastar as sobras de novembro e dezembro, o caixa acumulado cobre janeiro. → Por isso a regra dele virou: "sobra de mês bom fica no caixa até passar o mês fraco", e a retirada continua a mesma o ano todo.</div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><ol class="golden"><li><span><b>Dividir pelas horas trabalhadas, e não pelas vendáveis:</b> o valor-hora fica baixo demais e o tempo de orçamento e deslocamento sai de graça.</span></li><li><span><b>Aumentar a retirada no mês bom:</b> a sobra de dezembro é o que paga janeiro.</span></li><li><span><b>Esquecer a guia nos meses fracos:</b> ela é custo fixo e entra na conta de todos os meses.</span></li><li><span><b>Projetar só o mês atual:</b> três meses à frente já mostram os buracos a tempo de agir.</span></li></ol></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez (cerca de 5 minutos)</h3><ol class="golden"><li><span>No Google Planilhas, escreva a retirada de que você precisa e os seus custos fixos, com números redondos.</span></li><li><span>Estime as suas horas vendáveis no mês, sendo honesto com o tempo que não é cobrado.</span></li><li><span>Calcule o seu valor-hora mínimo e o preço de um serviço típico.</span></li><li><span>Projete três meses, incluindo um mês que costuma ser fraco.</span></li><li><span>Se quiser, descreva a lógica (sem dados pessoais) ao Microsoft Copilot e peça que aponte custos esquecidos; a decisão final do preço é sua.</span></li></ol><p>Privacidade: use estimativas redondas; não cole extratos, dados bancários, CPF ou nomes de clientes na IA.</p></div>`
      ],
      ch:[
        { who:'Alessandra, 30 anos, é MEI e faz design de sobrancelhas', says:'Trabalho umas 160 horas por mês, então dividi meus custos e a minha retirada por 160 para achar o valor da hora.',
          q:'Qual é o problema desse cálculo?',
          opts:[
            {t:'Nenhum: quanto mais horas, melhor o cálculo.', ok:false, why:'Nem toda hora trabalhada é cobrada. Dividir por todas deixa o valor-hora baixo demais.'},
            {t:'Ela deveria dividir só pelas horas vendáveis, aquelas que viram atendimento cobrado, porque o tempo de agenda, deslocamento e compras também precisa ser pago.', ok:true, why:'Com as horas vendáveis, o preço passa a pagar todo o tempo de trabalho, inclusive o que não aparece para o cliente.'},
            {t:'Ela deveria tirar a guia mensal da conta para o preço ficar mais competitivo.', ok:false, why:'A guia é custo fixo e precisa ser paga todo mês. Tirá-la da conta faz o preço ficar abaixo do custo real.'}
          ]},
        { who:'Fernando, 44 anos, é MEI e faz manutenção de piscinas', says:'No verão sobra dinheiro todo mês. Pensei em dobrar minha retirada de dezembro a fevereiro.',
          q:'O que a projeção de caixa recomenda?',
          opts:[
            {t:'Dobrar a retirada, porque o dinheiro é dele.', ok:false, why:'No inverno o movimento cai. Gastar as sobras agora deixa os meses fracos sem caixa.'},
            {t:'Parar de trabalhar no inverno.', ok:false, why:'Parar não resolve o planejamento e reduz ainda mais a renda.'},
            {t:'Manter a retirada fixa, guardar as sobras do verão no caixa e projetar os meses de inverno para saber quanto precisa ficar guardado.', ok:true, why:'Negócios sazonais precisam que o mês bom pague o mês fraco. A projeção mostra quanto guardar.'}
          ]},
        { who:'Vitória, 28 anos, é MEI e faz bolos', says:'Calculei meu preço e deu bem acima das confeiteiras do bairro. Vou baixar para o preço delas e pronto.',
          q:'Qual é a atitude mais coerente com o cálculo?',
          opts:[
            {t:'Rever primeiro as horas vendáveis, os custos e o público antes de mexer no preço, e só ajustar se encontrar algo a corrigir.', ok:true, why:'O cálculo mostra o mínimo que paga as contas. Baixar sem rever é trabalhar no prejuízo.'},
            {t:'Copiar o preço das concorrentes, porque elas sabem o que fazem.', ok:false, why:'As concorrentes podem ter outros custos ou estar no prejuízo sem saber.'},
            {t:'Esconder os custos do cálculo para o preço ficar parecido.', ok:false, why:'Esconder custos não os faz sumir: eles continuam saindo do caixa.'}
          ]}
      ]},
    { id:'2.6', title:'Projeto: planilha de entradas e saídas', min:30,
      body:[
        `<div class="card"><p>Neste projeto, você monta a planilha de entradas e saídas do SEU negócio, com categorias que façam sentido para você. A IA pode ajudar a sugerir colunas e fórmulas, mas a estrutura, as categorias e os números são seus. Não envie dados pessoais de clientes nem extratos completos a ferramentas de IA.</p></div>`
      ],
      projeto: {
        entrega: 'A descrição da sua planilha mensal de entradas e saídas, com colunas, categorias, regra de retirada fixa e reserva, e um mês de exemplo preenchido com os seus números (ou estimativas).',
        passos: [
          'Liste as colunas da planilha (data, descrição, categoria, entrada, saída, forma de pagamento, saldo) e explique por que cada uma é útil.',
          'Defina de 3 a 5 categorias de entrada e de 5 a 8 categorias de saída para o seu negócio.',
          'Preencha pelo menos 10 lançamentos de um mês (reais ou estimados), usando códigos no lugar de nomes de clientes.',
          'Defina a sua retirada fixa e a parte para reserva, explicando como chegou nesses valores.',
          'Crie uma aba de "a receber" e escreva a sua regra de conferência de pagamentos; depois, conte o que a planilha mostrou e o que você vai ajustar.'
        ],
        checklist: [
          'A planilha separa claramente o dinheiro do negócio do dinheiro pessoal.',
          'Tenho poucas categorias, claras, que consigo preencher toda semana.',
          'Defini retirada fixa e reserva com base nos meus números.',
          'Incluí uma lista de "a receber" e a minha regra de conferência de pagamentos (lição 2.5).',
          'Não usei dados pessoais de clientes nem enviei extratos a ferramentas de IA.'
        ],
        minimo: 380
      } }
  ]},
  { id:3, icon:'✅', title:'Obrigações e crescimento', sub:'Em dia e com segurança', lessons:[
    { id:'3.1', title:'Prazos e obrigações: DAS e declaração anual', min:10,
      body:[
        `<div class="card analogy"><h3>📅 A conta de luz</h3><p>Se você esquece de pagar, vêm juros e multa. Um lembrete no celular evita o problema. Com impostos funciona do mesmo jeito: o difícil não é pagar, é lembrar no dia certo, todo mês, inclusive nos meses corridos.</p></div>`,
        `<div class="term"><b>DAS</b> = o pagamento mensal do MEI. <b>Declaração anual</b> (DASN-SIMEI) = o resumo do faturamento do ano, entregue à Receita. <b>Multa e juros</b> = valores acrescentados quando algo é pago ou entregue fora do prazo. <b>Parcelamento</b> = forma oficial de pagar débitos atrasados em partes, conforme as regras vigentes.</div>`,
        `<div class="card"><h3>Crie o seu calendário</h3><ol class="golden"><li><span>Lembrete mensal para pagar o DAS (em geral até o dia 20: confirme).</span></li><li><span>Lembrete anual da declaração (em geral até o fim de maio: confirme o prazo do ano).</span></li><li><span>Guarde os comprovantes.</span></li><li><span>Declare o faturamento real, com e sem nota: declarar errado é um problema sério.</span></li><li><span>Atrasos geram multa e juros e podem trazer restrições.</span></li><li><span>Se o faturamento passar do limite ou a atividade mudar, procure orientação, porque pode mudar o enquadramento e haver cobrança adicional.</span></li><li><span>Em dúvida, consulte um contador.</span></li></ol>
          <p>Use a IA para criar o calendário de lembretes, mas confirme as datas no site oficial.</p></div>`,
        `<div class="card"><h3>Como gerar e pagar o DAS com segurança</h3><p>O DAS deve ser gerado por você no Portal do Empreendedor ou no aplicativo oficial do MEI, entrando sempre pelo endereço oficial. Algumas pessoas preferem ativar o débito automático, quando disponível: confira as condições no canal oficial. Depois de pagar, salve o comprovante na pasta do mês. Nunca pague guia recebida pronta por e-mail, carta ou mensagem, mesmo que pareça oficial.</p></div>`,
        `<div class="card"><h3>A declaração anual sem susto</h3><p>Na declaração, você informa quanto faturou no ano anterior, separando as categorias pedidas pelo sistema (por exemplo, comércio e serviços, conforme a sua atividade). Se você preencheu a planilha todo mês, essa tarefa leva poucos minutos: basta somar as entradas. Quem não controlou passa dias tentando lembrar, procurando extratos e corre o risco de declarar errado. Mesmo sem faturamento no ano, a declaração costuma ser obrigatória: confirme no portal.</p></div>`,
        `<div class="why-chain"><b>Por que a planilha mensal facilita a declaração?</b> Porque a declaração pede o faturamento do ano. → O faturamento do ano é a soma dos meses. → Se cada mês está somado na planilha, a soma do ano sai pronta. → Com o número certo, você declara com segurança e confere se está perto do limite.</div>`,
        `<div class="card"><h3>Se atrasou, regularize</h3><p>Atrasar acontece. O pior é ignorar. Entre no portal oficial, veja o que está em aberto, gere as guias atualizadas ou verifique se há parcelamento disponível, conforme as regras do momento. Se a situação estiver confusa (muitos meses, declaração em atraso, aviso de exclusão), procure um contador ou o Sebrae. Em seguida, crie lembretes para não repetir.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que colocar lembrete para pagar a conta de luz evita multa.</div>`
      ],
      ch:[
        { who:'Fabrício, 34 anos, é MEI', says:'Esqueci do DAS por 4 meses porque no começo não tive clientes. Achei que sem faturar eu não precisava pagar.',
          q:'O que fazer agora?',
          opts:[
            {t:'Nada: sem faturar, não existe pagamento a fazer.', ok:false, why:'O DAS do MEI é mensal, mesmo em meses sem faturamento.'},
            {t:'Esperar alguém cobrar para só então resolver.', ok:false, why:'Esperar aumenta multas e juros e pode complicar o CNPJ.'},
            {t:'Regularizar pelo Portal do Empreendedor, entender o que está em atraso, buscar orientação se precisar e criar lembretes mensais para não repetir.', ok:true, why:'Regularizar cedo reduz o custo do atraso, e o lembrete evita que aconteça de novo.'}
          ]},
        { who:'Sandra, 39 anos, é MEI e tem um ateliê de costura', says:'Está chegando a época da declaração anual e eu não anotei nada no ano. Vou chutar um valor baixo.',
          q:'Qual é o melhor caminho?',
          opts:[
            {t:'Chutar um valor baixo para pagar menos.', ok:false, why:'Declarar menos que o real é irregular e pode trazer multas e problemas graves.'},
            {t:'Reconstruir o faturamento com extratos, notas e recibos, declarar o valor real (com e sem nota), pedir ajuda a um contador se precisar, e começar a planilha mensal para o próximo ano.', ok:true, why:'Declarar o valor real mantém o negócio regular, e a planilha evita o mesmo aperto no ano seguinte.'},
            {t:'Não entregar a declaração.', ok:false, why:'Deixar de entregar gera multa e pode trazer restrições ao CNPJ.'}
          ]},
        { who:'Otávio, 45 anos, tem uma oficina de bicicletas', says:'Recebi por mensagem um boleto do DAS já pronto, com o meu nome. Facilita, né?',
          q:'O que Otávio deve fazer?',
          opts:[
            {t:'Pagar, porque tem o nome dele.', ok:false, why:'Golpistas usam dados públicos do CNPJ para parecer oficiais. Ter o nome não prova nada.'},
            {t:'Não pagar a guia recebida; gerar o DAS ele mesmo no portal ou no aplicativo oficial e conferir se o valor e o beneficiário batem.', ok:true, why:'O DAS legítimo é gerado nos canais oficiais pelo próprio MEI. Isso evita cair em golpe.'},
            {t:'Repassar a mensagem para outros MEIs pagarem também.', ok:false, why:'Repassar espalha o golpe. O certo é ignorar e alertar que pode ser fraude.'}
          ]}
      ]},
    { id:'3.2', title:'Crescer com segurança', min:10,
      body:[
        `<div class="card analogy"><h3>📈 A escada</h3><p>Para subir com segurança, vai-se um degrau de cada vez, sem pular nenhum. Pular degraus aumenta o risco de cair. No negócio, cada degrau é um hábito firme: controle, preço certo, obrigações em dia, reserva. Só então vem o próximo passo.</p></div>`,
        `<div class="term"><b>Reserva de emergência</b> = dinheiro guardado para imprevistos. <b>Contrato</b> = acordo escrito, com direitos e deveres. <b>Enquadramento</b> = o tipo de empresa em que o negócio se encaixa, conforme a atividade e o faturamento. <b>Portfólio</b> = a vitrine com exemplos do seu trabalho.</div>`,
        `<div class="card"><h3>Hábitos de um negócio saudável</h3><ol class="golden"><li><span>Reserva de emergência: comece pequena e regular.</span></li><li><span>Reajuste os preços com o tempo, conforme custos e experiência.</span></li><li><span>Para clientes recorrentes ou valores altos, use contrato, com orientação jurídica.</span></li><li><span>Mostre portfólio, depoimentos autorizados e indicações.</span></li><li><span>Acompanhe o limite do MEI e o tipo de atividade: se o negócio crescer, converse com um contador sobre o melhor enquadramento.</span></li><li><span>Proteja os dados dos clientes (LGPD) e as suas contas (verificação em duas etapas).</span></li><li><span>Continue aprendendo e não prometa ganhos.</span></li></ol></div>`,
        `<div class="card"><h3>Sinais de que o negócio está crescendo</h3><p>Agenda cheia por várias semanas seguidas, clientes esperando, faturamento subindo mês a mês, vontade de contratar ajuda ou abrir um espaço. São ótimas notícias, mas cada uma pede uma checagem. Contratar alguém envolve obrigações trabalhistas. Abrir um ponto pode exigir alvará. Faturar mais pode aproximar você do limite do MEI. Antes de dar o passo, olhe a planilha, confira as regras no portal oficial e converse com um contador.</p><p>Uma boa pergunta para cada degrau: "se este passo der errado, o meu caixa e a minha reserva aguentam?" Se a resposta for não, fortaleça o degrau atual antes de subir.</p></div>`,
        `<div class="flows"><div class="flow old"><h4>Crescer no improviso</h4><div class="node">Aceita tudo sem calcular</div><div class="node">Contrata ajudante sem registro</div><div class="node">Descobre no fim do ano que passou do limite</div><div class="node">Multa e correria</div></div><div class="flow new"><h4>Crescer com degraus</h4><div class="node">Acompanha faturamento mensal</div><div class="node">Calcula se o preço cobre a nova estrutura</div><div class="node">Conversa com contador antes de contratar ou mudar</div><div class="node">Muda de enquadramento no momento certo</div></div></div>`,
        `<div class="card"><h3>Checklist "estou pronto para cobrar?"</h3><p>Na lição 3.5 você vai conhecer a "pasta do negócio" e, no projeto 3.6, vai montar o seu calendário e a sua rotina mensal, que fecham o curso e liberam o certificado. Já vá conferindo o checklist "estou pronto para cobrar?": decidi sobre formalizar e conferi as regras no site oficial; contas separadas; planilha de controle; calendário do DAS e da declaração; sei quando emitir nota; tenho modelo de combinado escrito; não faço nenhuma promessa de ganho. O que faltar, você completa nas próximas lições.</p>
          <p><b>Próximo passo:</b> depois desta trilha, siga para os cursos de aprofundamento do portal que fizerem sentido para o seu negócio.</p>
          <p>⚠️ Este é o último curso da Trilha Renda com IA. Ele não garante renda: ele ensina a organizar o seu serviço com responsabilidade.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, por que subir a escada um degrau de cada vez é mais seguro, e como isso vale para um negócio.</div>`
      ],
      ch:[
        { who:'Elias, 29 anos, tem um negócio crescendo', says:'Meu negócio cresceu rápido e nem sei quanto faturei no ano. Vou deixar para ver só no ano que vem.',
          q:'Qual é a melhor prática?',
          opts:[
            {t:'Acompanhar o faturamento ao longo do ano na planilha, conferir o limite do MEI e conversar com um contador sobre o enquadramento.', ok:true, why:'Acompanhar durante o ano evita surpresas, e o contador ajuda a decidir o melhor caminho com segurança.'},
            {t:'Deixar para o ano que vem e ver o que acontece.', ok:false, why:'Se o limite for ultrapassado, o problema aumenta a cada mês sem acompanhamento.'},
            {t:'Declarar menos do que faturou para pagar menos imposto.', ok:false, why:'Declarar menos que o real é irregular e pode trazer multas e problemas graves.'}
          ]},
        { who:'Kátia, 33 anos, dona de uma pequena lanchonete', says:'Estou cheia de pedidos e vou chamar minha prima para ajudar todo dia, sem registro, pagando por fora.',
          q:'O que Kátia deve considerar antes?',
          opts:[
            {t:'Nada: ajuda de parente nunca tem regra.', ok:false, why:'Trabalho regular e remunerado pode gerar vínculo e obrigações, mesmo entre parentes.'},
            {t:'Contratar mais cinco pessoas para garantir.', ok:false, why:'Crescer de uma vez, sem calcular, aumenta custos e pode ultrapassar o que o MEI permite.'},
            {t:'Calcular se o faturamento cobre esse custo, conferir as regras de contratação do MEI no portal oficial e conversar com um contador sobre a forma correta de contratar.', ok:true, why:'Contratar do jeito certo protege Kátia e a prima, e o cálculo mostra se o crescimento se paga.'}
          ]},
        { who:'Henrique, 36 anos, faz fotos de eventos', says:'Quero postar fotos dos clientes no Instagram como portfólio. Não preciso pedir nada, né?',
          q:'Qual é a forma correta de montar o portfólio?',
          opts:[
            {t:'Postar tudo, porque as fotos são dele.', ok:false, why:'A imagem das pessoas é protegida. Sem autorização, ele pode ter problemas legais e perder a confiança dos clientes.'},
            {t:'Pedir autorização por escrito para usar as imagens no portfólio, combinar isso no contrato e respeitar quem não quiser aparecer.', ok:true, why:'A autorização protege o cliente e o fotógrafo, e mostra profissionalismo.'},
            {t:'Não fazer portfólio nenhum.', ok:false, why:'O portfólio é importante para atrair clientes. Basta fazê-lo com autorização.'}
          ]}
      ]},
    { id:'3.3', title:'Contratos simples e proteção', min:10,
      body:[
        `<div class="card analogy"><h3>🤝 O combinado do futebol</h3><p>Antes da pelada, todo mundo combina: quantos minutos, quem fica no gol, o que vale e o que não vale. Quando o combinado é claro, a briga é rara. Num negócio, o combinado escrito faz o mesmo papel: evita mal-entendidos antes que eles virem prejuízo.</p></div>`,
        `<div class="term"><b>Combinado escrito</b> = resumo simples do que foi acertado com o cliente, enviado por mensagem ou e-mail e aceito por ele. <b>Contrato</b> = acordo formal, com cláusulas, para serviços maiores ou recorrentes. <b>LGPD</b> = Lei Geral de Proteção de Dados, que define como dados pessoais devem ser tratados. <b>Sinal</b> = valor pago adiantado para confirmar um serviço.</div>`,
        `<div class="card"><h3>O que todo combinado deve ter</h3><ol class="golden"><li><span>O que será feito, com detalhes (e o que NÃO está incluído).</span></li><li><span>Prazo ou data de entrega.</span></li><li><span>Valor total, sinal (se houver) e forma de pagamento.</span></li><li><span>O que acontece se o cliente desistir ou remarcar.</span></li><li><span>Quantos ajustes ou retornos estão incluídos.</span></li><li><span>Aceite do cliente: um "de acordo" por escrito já ajuda muito.</span></li></ol><p>Para valores altos, serviços longos ou clientes empresas, um contrato formal é mais seguro, e vale pedir revisão de um advogado ou orientação do Sebrae. Não copie contratos prontos da internet sem entender cada cláusula.</p></div>`,
        `<div class="card"><h3>Exemplo de combinado (escreva o seu do seu jeito)</h3><p>Uma confeitaria envia ao cliente: "Bolo de chocolate para 30 pessoas, com cobertura de brigadeiro, entrega no dia 15 às 14h, retirada no local. Valor total combinado, com sinal de metade na confirmação e o restante na retirada, por Pix na conta do negócio. Cancelamento com menos de 5 dias: o sinal não é devolvido, porque os ingredientes já foram comprados. Confirma?" O cliente responde "confirmo". Simples, claro e guardado. Repare que o combinado não promete nada que não dependa da confeiteira.</p></div>`,
        `<div class="card"><h3>Recibos e documentos: o que guardar</h3><p>Guarde o combinado aceito, as notas e os recibos emitidos, os comprovantes de pagamento recebidos e os comprovantes das suas despesas. Guarde também os documentos do negócio: CCMEI, comprovantes do DAS, declarações anuais, licenças da prefeitura. Pergunte ao contador por quanto tempo cada tipo de documento deve ser guardado. Faça cópia digital de segurança e organize por ano e mês.</p></div>`,
        `<div class="card"><h3>LGPD no pequeno negócio</h3><p>Uma clínica, um pet shop ou um personal trainer lidam com dados pessoais: nome, telefone, endereço, às vezes informações de saúde. Regras práticas: peça só o necessário; explique para que usa; não compartilhe listas de clientes; guarde as fichas em local protegido (armário fechado ou arquivo com senha); apague o que não precisa mais; não mande mensagens de propaganda para quem não autorizou; e nunca cole dados de clientes em ferramentas de IA. Dados de saúde merecem cuidado redobrado.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que combinar as regras antes do jogo evita briga no meio da partida.</div>`
      ],
      ch:[
        { who:'Rose, 46 anos, faz doces para casamentos', says:'Uma noiva cancelou o pedido dois dias antes. Eu já tinha comprado tudo, mas não tínhamos combinado nada sobre cancelamento.',
          q:'O que Rose deve fazer daqui para frente?',
          opts:[
            {t:'Mandar um combinado escrito em todo pedido, com sinal na confirmação e regra clara de cancelamento, e pedir o aceite da cliente.', ok:true, why:'Com regras combinadas antes, o risco de prejuízo cai e as conversas difíceis ficam mais simples.'},
            {t:'Parar de aceitar encomendas de casamento.', ok:false, why:'Abandonar um bom tipo de cliente não resolve a falta de combinado.'},
            {t:'Expor a noiva nas redes para servir de exemplo.', ok:false, why:'Exposição é antiética, pode gerar processo e afasta outros clientes.'}
          ]},
        { who:'Dr. Thiago, 38 anos, fisioterapeuta com um consultório pequeno', says:'Guardo as fichas dos pacientes numa pasta aberta na recepção e mando promoções para todos pelo WhatsApp, mesmo quem não pediu.',
          q:'Qual ajuste está mais alinhado à LGPD?',
          opts:[
            {t:'Nenhum: dados de pacientes não precisam de cuidado especial.', ok:false, why:'Dados de saúde são sensíveis e exigem proteção especial.'},
            {t:'Guardar as fichas em local protegido, pedir só os dados necessários e enviar mensagens de divulgação apenas a quem autorizou.', ok:true, why:'Proteger os dados e respeitar a autorização são bases da LGPD e da confiança dos pacientes.'},
            {t:'Colar as fichas numa IA para organizar melhor.', ok:false, why:'Enviar dados de saúde a ferramentas externas aumenta o risco de vazamento.'}
          ]},
        { who:'Leandro, 34 anos, pintor de paredes', says:'Um cliente diz que o combinado incluía pintar o teto também. Eu lembro que não. Foi tudo de boca.',
          q:'O que teria evitado esse conflito?',
          opts:[
            {t:'Fazer o serviço mais rápido.', ok:false, why:'Velocidade não resolve a dúvida sobre o que estava incluído.'},
            {t:'Cobrar menos para evitar discussão.', ok:false, why:'Baixar o preço não esclarece o escopo e pode virar prejuízo.'},
            {t:'Um combinado escrito, enviado antes do início, listando o que está incluído e o que não está, com o aceite do cliente.', ok:true, why:'Deixar o escopo escrito e aceito evita a guerra de memórias e protege os dois lados.'}
          ]}
      ]},
    { id:'3.4', title:'Rotina financeira mensal e reserva de emergência', min:10,
      body:[
        `<div class="card analogy"><h3>🩺 O check-up</h3><p>Ninguém espera passar mal para medir a pressão. Um check-up regular pega o problema cedo, quando é barato resolver. O fechamento do mês é o check-up do negócio: meia hora por mês que evita sustos grandes.</p></div>`,
        `<div class="term"><b>Fechamento do mês</b> = momento fixo para conferir entradas, saídas, obrigações e resultado. <b>Indicador</b> = um número simples que mostra a saúde do negócio. <b>Ticket médio</b> = o valor médio de cada venda. <b>Reserva de emergência</b> = dinheiro separado para imprevistos, como equipamento quebrado ou mês fraco.</div>`,
        `<div class="card"><h3>Roteiro do fechamento (cerca de 30 minutos)</h3><ol class="golden"><li><span>Confira se todas as entradas e saídas do mês estão na planilha, com comprovante.</span></li><li><span>Confira se o DAS do mês foi pago e se o comprovante está guardado.</span></li><li><span>Some o faturamento do mês e o acumulado do ano, e compare com o limite atual do MEI (confira no portal oficial).</span></li><li><span>Calcule o resultado: entradas menos saídas.</span></li><li><span>Pague a retirada fixa e transfira a parte da reserva.</span></li><li><span>Anote três indicadores e uma decisão para o mês seguinte.</span></li><li><span>Confira o calendário: tem obrigação anual chegando?</span></li></ol></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Indicador simples</th><th>Como calcular</th><th>O que mostra</th></tr><tr><td>Faturamento do mês</td><td>Soma das entradas</td><td>Se as vendas sobem ou caem</td></tr><tr><td>Resultado do mês</td><td>Entradas menos saídas</td><td>Se o negócio se paga</td></tr><tr><td>Ticket médio</td><td>Faturamento dividido pelo número de vendas</td><td>Se vale oferecer pacotes ou complementos</td></tr><tr><td>Maior categoria de gasto</td><td>A soma de saída mais alta</td><td>Onde negociar ou economizar</td></tr><tr><td>Acumulado do ano</td><td>Soma dos meses</td><td>Distância do limite do MEI</td></tr></table></div>`,
        `<div class="card"><h3>Reserva de emergência do negócio</h3><p>A geladeira da confeitaria queima. A moto de entregas quebra. Chove o mês inteiro e o lava-rápido fica vazio. Sem reserva, o dono recorre ao cheque especial ou ao cartão, que costumam ter juros altos. Com reserva, o problema vira só um transtorno. Como montar: defina uma meta (por exemplo, o suficiente para cobrir alguns meses de custos fixos do negócio), separe uma parte de cada mês, mesmo pequena, e guarde numa aplicação de fácil resgate, separada da conta do dia a dia. Use só para emergências reais e reponha depois. A meta é sua: comece pelo que for possível.</p></div>`,
        `<div class="card"><h3>Exemplo de decisão a partir dos números</h3><p>Um lava-rápido percebeu no fechamento que a maior categoria de gasto era produto de limpeza comprado em pequenas quantidades. Decisão do mês: pesquisar fornecedor que venda para CNPJ em embalagem maior. Uma personal trainer viu que o ticket médio era baixo porque vendia aulas avulsas; decidiu testar pacotes mensais. Perceba: os números não decidem sozinhos, mas mostram onde olhar. A IA pode ajudar a criar o modelo do fechamento e a calcular indicadores, sem receber dados pessoais.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que fazer check-up regularmente é melhor do que esperar ficar doente.</div>`
      ],
      ch:[
        { who:'Edson, 50 anos, dono de um lava-rápido', says:'Meu compressor quebrou e não tenho dinheiro guardado. Vou ter que entrar no cheque especial.',
          q:'O que Edson pode fazer para não passar por isso de novo?',
          opts:[
            {t:'Nunca mais consertar equipamentos.', ok:false, why:'Sem equipamento ele não trabalha. O problema é a falta de reserva, não o conserto.'},
            {t:'Contar com o cheque especial como reserva permanente.', ok:false, why:'Cheque especial costuma ter juros altos e transforma imprevistos em dívida longa.'},
            {t:'Criar uma reserva de emergência do negócio, separando uma parte todo mês numa conta de fácil resgate, e usar só em imprevistos reais.', ok:true, why:'A reserva transforma emergências em transtornos pequenos e evita juros altos.'}
          ]},
        { who:'Priscila, 32 anos, tem uma loja de acessórios online', says:'Faço tudo certinho no dia a dia, mas nunca paro para olhar o mês. Nem sei se estou perto do limite do MEI.',
          q:'Qual hábito resolve isso?',
          opts:[
            {t:'Um fechamento mensal com data fixa: conferir lançamentos, DAS pago, faturamento do mês e acumulado do ano comparado ao limite atual do portal oficial, e anotar uma decisão.', ok:true, why:'O fechamento regular mostra a saúde do negócio e avisa a tempo se o limite está próximo.'},
            {t:'Olhar os números só quando sobrar tempo.', ok:false, why:'Sem data fixa, o fechamento nunca acontece e os problemas aparecem tarde.'},
            {t:'Parar de vender quando achar que vendeu muito.', ok:false, why:'Sem números, ela decide no escuro e pode perder vendas à toa.'}
          ]},
        { who:'Wellington, 40 anos, dono de uma pequena oficina', says:'O faturamento subiu, mas o resultado do mês caiu. Não entendo.',
          q:'Por onde ele deve começar a investigar?',
          opts:[
            {t:'Cortar a própria retirada pela metade sem olhar mais nada.', ok:false, why:'Cortar sem entender a causa pode não resolver e prejudica a vida pessoal dele.'},
            {t:'Olhar as categorias de saída do mês para achar qual gasto cresceu mais, e conferir se o preço ainda cobre os custos atuais.', ok:true, why:'Comparar as categorias mostra onde o dinheiro está saindo, e rever o preço evita trabalhar mais para ganhar menos.'},
            {t:'Comemorar, porque faturamento maior é sempre bom.', ok:false, why:'Faturar mais não basta: se os custos sobem mais, o negócio ganha menos.'}
          ]}
      ]},
    { id:'3.5', title:'A pasta do negócio e os documentos a guardar', min:10,
      body:[
        `<div class="card analogy"><h3>🧰 A caixa de ferramentas</h3><p>Um bom eletricista não sai procurando a chave de fenda pela casa toda a cada serviço: ele tem uma caixa de ferramentas organizada, cada coisa no seu lugar. A "pasta do negócio" é a sua caixa de ferramentas administrativa. Quando o contador pergunta algo, um cliente pede um recibo antigo ou chega a época da declaração, você abre a pasta e encontra em minutos.</p></div>`,
        `<div class="term"><b>Pasta do negócio</b> = conjunto organizado, físico ou digital, com os documentos, controles e modelos do seu negócio. <b>Cópia de segurança</b> (backup) = uma segunda cópia guardada em outro lugar, para não perder tudo se o celular ou o computador quebrar. <b>Prazo de guarda</b> = por quanto tempo um documento deve ser mantido, a confirmar com o contador. <b>Modelo</b> = texto-base que você reaproveita, como um combinado ou um recibo.</div>`,
        `<div class="card"><h3>O que vai na pasta</h3><ol class="golden"><li><span><b>Documentos do negócio:</b> CCMEI ou documentos da empresa, número do CNPJ, licenças e alvarás da prefeitura, registros em conselho profissional, se houver.</span></li><li><span><b>Obrigações:</b> comprovantes de pagamento do DAS, recibos das declarações anuais, calendário de prazos.</span></li><li><span><b>Controle financeiro:</b> a planilha de entradas e saídas, a lista de "a receber", os fechamentos mensais e a meta de reserva.</span></li><li><span><b>Vendas:</b> notas fiscais emitidas, recibos, combinados aceitos e contratos.</span></li><li><span><b>Despesas:</b> notas e comprovantes de compras de material, equipamentos e serviços.</span></li><li><span><b>Modelos:</b> combinado escrito, recibo, mensagem de cobrança educada, aviso de reajuste.</span></li><li><span><b>Plano:</b> sua decisão sobre formalização, os sinais de transição e o plano de crescimento em degraus.</span></li></ol></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Pasta</th><th>Exemplo de conteúdo</th><th>Quando atualizar</th></tr><tr><td>01 Negócio</td><td>CCMEI, licenças, dados do CNPJ</td><td>Quando algo mudar</td></tr><tr><td>02 Obrigações</td><td>Comprovantes do DAS, declarações</td><td>Todo mês e todo ano</td></tr><tr><td>03 Financeiro</td><td>Planilha, fechamentos, reserva</td><td>Toda semana e no fechamento</td></tr><tr><td>04 Vendas</td><td>Notas, recibos, combinados</td><td>A cada venda</td></tr><tr><td>05 Despesas</td><td>Comprovantes de compras</td><td>A cada compra</td></tr><tr><td>06 Modelos e plano</td><td>Combinado, recibo, plano de crescimento</td><td>A cada revisão</td></tr></table></div>`,
        `<div class="card"><h3>Como organizar sem complicar</h3><p>Escolha um só lugar principal: uma pasta no computador ou no armazenamento em nuvem, ou uma pasta sanfonada de papel. Dentro dela, crie as seis subpastas da tabela e, nas de vendas, despesas e obrigações, separe por ano e mês. Dê nomes padronizados aos arquivos, por exemplo "2026-10-das-comprovante" ou "2026-10-recibo-cliente-A". Fotografe os papéis importantes logo que recebe. Uma vez por mês, no fechamento, confira se cada lançamento da planilha tem o documento correspondente. Uma vez por ano, faça uma cópia de segurança completa num segundo lugar.</p></div>`,
        `<div class="card"><h3>Segurança e LGPD</h3><p>A pasta tem dados seus e de clientes. Proteja com senha o computador e o armazenamento em nuvem, ative a verificação em duas etapas e não compartilhe o acesso com quem não precisa. Papéis com dados de clientes ficam em local fechado. Quando um documento não precisar mais ser guardado (confirme o prazo com o contador), descarte de forma segura, picotando papéis e apagando arquivos. Nunca envie a pasta inteira, extratos ou fichas de clientes para ferramentas de IA; se quiser ajuda para organizar, descreva só a estrutura.</p></div>`,
        `<div class="card"><h3>Exemplos práticos</h3><p>Uma dona de pet shop recebeu uma reclamação de um cliente sobre um serviço de meses atrás; abriu a pasta, achou o combinado aceito e o recibo, e resolveu a conversa com calma. Um marceneiro levou a pasta ao contador quando pensou em sair do MEI, e a conversa durou meia hora em vez de várias semanas. Uma cabeleireira que perdeu o celular não perdeu nada do negócio, porque tinha cópia de segurança. Organização não dá dinheiro sozinha, mas evita perdas e economiza tempo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que guardar os brinquedos em caixas com etiqueta faz a gente achar tudo mais rápido, e como isso vale para os papéis de um negócio.</div>`
      ],
      ch:[
        { who:'Adriana, 41 anos, tem uma loja de presentes', says:'Guardo notas e recibos misturados numa sacola. Quando o contador pede algo, levo horas procurando e às vezes não acho.',
          q:'Qual é a melhor forma de organizar?',
          opts:[
            {t:'Comprar uma sacola maior.', ok:false, why:'O problema não é espaço, e sim a falta de organização por tipo e por período.'},
            {t:'Jogar fora os papéis antigos para diminuir a bagunça.', ok:false, why:'Alguns documentos precisam ser guardados por um prazo, que deve ser confirmado com o contador antes de descartar.'},
            {t:'Montar a pasta do negócio com subpastas por tipo (negócio, obrigações, financeiro, vendas, despesas, modelos), separar por ano e mês e conferir os documentos no fechamento mensal.', ok:true, why:'Com uma estrutura fixa e conferência mensal, ela encontra qualquer documento em minutos.'}
          ]},
        { who:'Fábio, 35 anos, fotógrafo de eventos', says:'Tudo do meu negócio está só no celular. Se ele quebrar, eu perco contratos, recibos e fotos dos clientes.',
          q:'O que Fábio deve fazer primeiro?',
          opts:[
            {t:'Criar uma cópia de segurança protegida por senha em outro lugar, com verificação em duas etapas, e atualizá-la com frequência.', ok:true, why:'A cópia de segurança protege o negócio contra perda e roubo, e a senha protege os dados dos clientes.'},
            {t:'Mandar todos os arquivos para um grupo de mensagens da família, como backup.', ok:false, why:'Compartilhar dados de clientes com outras pessoas fere a privacidade e a LGPD.'},
            {t:'Torcer para o celular nunca quebrar.', ok:false, why:'Sem cópia, um único acidente pode apagar anos de documentos importantes.'}
          ]},
        { who:'Beatriz, 30 anos, nutricionista com consultório pequeno', says:'Quero usar uma IA para organizar a minha pasta. Pensei em enviar todas as fichas dos pacientes para ela classificar.',
          q:'Qual é o jeito seguro de usar a IA aqui?',
          opts:[
            {t:'Enviar as fichas, porque a IA organiza melhor que ela.', ok:false, why:'Fichas de pacientes têm dados de saúde, que são sensíveis. Enviá-las a ferramentas externas aumenta o risco de vazamento.'},
            {t:'Pedir à IA só uma sugestão de estrutura de pastas e nomes de arquivos, sem enviar nenhum dado de paciente, e organizar ela mesma.', ok:true, why:'A IA ajuda no modelo, e os dados sensíveis continuam protegidos com ela.'},
            {t:'Deixar de guardar fichas para não ter dados para proteger.', ok:false, why:'Registros profissionais podem ser obrigatórios. O certo é guardar com segurança, conforme as regras da profissão.'}
          ]}
      ]},
    { id:'3.7', title:'Exemplo resolvido: um mês de obrigações em dia', min:14,
      body:[
        `<div class="card analogy"><h3>🔁 Escovar os dentes</h3><p>Ninguém marca na agenda "escovar os dentes": virou hábito, com hora certa e poucos minutos. Por isso quase nunca esquecemos. As obrigações do MEI funcionam melhor do mesmo jeito: em vez de uma maratona quando o prazo aperta, pequenas tarefas fixas, sempre nos mesmos dias.</p></div>`,
        `<div class="term"><b>Rotina em camadas</b> = organizar as tarefas pela frequência: semanal, mensal, anual e eventual. <b>Lembrete com folga</b> = aviso marcado alguns dias antes do prazo, e não no próprio dia. <b>Obrigação local</b> = exigência da prefeitura ou do conselho da profissão, como licença ou renovação de alvará.</div>`,
        `<div class="card"><h3>O caso</h3><p>Rita, 37 anos, é cabeleireira e MEI há um ano. Ela já pagou guia atrasada duas vezes e, na época da declaração anual, passou um fim de semana inteiro procurando comprovantes. Juntando o que aprendeu nas lições 3.1, 3.4 e 3.5, ela montou a rotina abaixo. As datas oficiais (vencimento da guia e prazo da declaração) ela confere todo ano no Portal do Empreendedor, porque podem mudar.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Quando</th><th>O que a Rita faz</th><th>Tempo</th></tr><tr><td>Toda sexta, fim do dia</td><td>Lança as entradas e saídas da semana, confere se toda nota de serviço emitida e todo recibo estão na pasta do negócio</td><td>10 a 15 min</td></tr><tr><td>Dia 5 de cada mês</td><td>Fechamento do mês anterior: resultado, retirada fixa, reserva, acumulado do ano e uma decisão</td><td>30 min</td></tr><tr><td>Alguns dias antes do vencimento da guia</td><td>Gera a guia no portal ou no aplicativo oficial, paga e salva o comprovante na pasta do mês</td><td>10 min</td></tr><tr><td>Uma vez por ano, semanas antes do prazo</td><td>Soma o faturamento do ano na planilha e entrega a declaração anual</td><td>30 min</td></tr><tr><td>Na data de renovação</td><td>Confere licenças e exigências da prefeitura para o salão</td><td>Varia</td></tr></table></div>`,
        `<div class="card"><h3>Resolvendo passo a passo: como ela montou</h3><ol class="golden"><li><span><b>Listou tudo o que precisa fazer</b>, sem se preocupar com a ordem.</span></li><li><span><b>Separou por frequência</b>: semanal, mensal, anual e eventual.</span></li><li><span><b>Conferiu as datas oficiais</b> no portal e as locais na prefeitura, anotando onde conferiu.</span></li><li><span><b>Escolheu dias fixos</b> que combinam com a agenda do salão (sexta é o dia mais calmo no fim da tarde).</span></li><li><span><b>Criou lembretes com folga</b>, que se repetem sozinhos.</span></li><li><span><b>Testou por um mês e ajustou</b>: a tarefa semanal ficou curta porque passou a lançar no mesmo dia.</span></li></ol></div>`,
        `<div class="flows"><div class="flow old"><h4>Lembra quando dá</h4><div class="node">Guia paga com atraso, multa e juros</div><div class="node">Notas e recibos espalhados</div><div class="node">Declaração feita no susto</div></div><div class="flow new"><h4>Rotina em camadas</h4><div class="node">Cerca de uma hora e meia por mês no total</div><div class="node">Guia paga antes do vencimento</div><div class="node">Declaração pronta em minutos, com a soma da planilha</div></div></div>`,
        `<div class="card"><h3>Atenção ao acumulado do ano</h3><p>No fechamento de agosto, Rita viu que o acumulado já passava de 70% do limite anual atual, e ainda faltavam os meses de festas, os melhores do salão. Como acompanhava todo mês, percebeu a tempo e marcou conversa com um contador para avaliar o enquadramento (lição 1.5), em vez de descobrir no ano seguinte.</p></div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><ol class="golden"><li><span><b>Lembrete no dia do vencimento:</b> qualquer imprevisto vira atraso. Marque com alguns dias de folga.</span></li><li><span><b>Rotina comprida demais:</b> se o fechamento leva uma tarde, ele vai ser adiado. Comece pequeno.</span></li><li><span><b>Copiar datas de redes sociais:</b> confirme no portal oficial e anote a data da consulta.</span></li><li><span><b>Esquecer as obrigações locais e do seu ramo:</b> licenças, alvarás e conselhos profissionais também têm prazos.</span></li></ol></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez (cerca de 5 minutos)</h3><ol class="golden"><li><span>Confira no Portal do Empreendedor o vencimento da guia e o prazo da declaração anual deste ano.</span></li><li><span>No Google Agenda, crie um evento semanal curto para lançar entradas, saídas e documentos.</span></li><li><span>Crie um evento mensal para o fechamento e outro, com alguns dias de folga, para a guia.</span></li><li><span>Crie um evento anual para a declaração, com aviso semanas antes.</span></li><li><span>Anote quanto tempo a sua rotina vai levar por mês.</span></li></ol><p>Privacidade: não escreva senha, CPF, CNPJ, dados bancários ou nomes de clientes na descrição dos eventos, e não deixe a agenda pública.</p></div>`
      ],
      ch:[
        { who:'Joaquim, 46 anos, é MEI e faz manutenção de jardins', says:'Coloquei o lembrete da guia para o próprio dia do vencimento. No mês passado eu estava num serviço longe e esqueci.',
          q:'Qual ajuste resolve melhor?',
          opts:[
            {t:'Apagar o lembrete, já que não funcionou.', ok:false, why:'Sem lembrete, o esquecimento fica ainda mais provável.'},
            {t:'Mover o lembrete para alguns dias antes do vencimento conferido no portal, num dia de agenda mais leve, e regularizar a guia atrasada pelo canal oficial.', ok:true, why:'Folga no lembrete absorve imprevistos, e regularizar logo reduz multa e juros.'},
            {t:'Pagar a guia de vários meses de uma vez no fim do ano.', ok:false, why:'Pagar com atraso gera multa e juros a cada mês e pode trazer problemas ao CNPJ.'}
          ]},
        { who:'Aparecida, 55 anos, é MEI e tem uma banca de costura', says:'Montei uma rotina de fechamento com 25 passos. Faz três meses que eu adio porque leva a tarde toda.',
          q:'Qual é a melhor saída?',
          opts:[
            {t:'Reduzir para os passos essenciais (lançamentos, guia paga, resultado, retirada, reserva, acumulado do ano) e lançar a semana toda sexta, para o fechamento ficar curto.', ok:true, why:'Uma rotina curta e feita vale mais que uma completa e adiada. O lançamento semanal encurta o fechamento.'},
            {t:'Fazer o fechamento só uma vez por ano.', ok:false, why:'Uma vez por ano é tarde demais para corrigir preço, caixa ou perceber o limite chegando.'},
            {t:'Adicionar mais passos para ficar perfeito.', ok:false, why:'Mais passos aumentam o motivo para adiar. O problema é o tamanho, não a falta de itens.'}
          ]},
        { who:'Renan, 31 anos, é MEI e faz instalação de ar-condicionado', says:'No fechamento de setembro vi que meu acumulado do ano já está perto do limite atual do MEI, e o verão ainda nem começou.',
          q:'O que Renan deve fazer?',
          opts:[
            {t:'Recusar clientes até o fim do ano sem falar com ninguém.', ok:false, why:'Recusar trabalho no escuro pode ser desnecessário e custar caro. Primeiro, ele precisa de orientação.'},
            {t:'Emitir parte das notas no CNPJ do irmão.', ok:false, why:'Dividir faturamento em outro CNPJ para driblar o limite é irregular e coloca o irmão em risco.'},
            {t:'Projetar o faturamento dos próximos meses, conferir as regras atuais no portal oficial e procurar um contador agora para planejar o enquadramento.', ok:true, why:'Ele percebeu a tempo graças à rotina. Planejar com o contador evita cobrança adicional e correria.'}
          ]}
      ]},
    { id:'3.8', title:'Exemplo resolvido: o mês em que o caixa apertou', min:14,
      body:[
        `<div class="card analogy"><h3>🛟 A boia na piscina</h3><p>Quem está aprendendo a nadar e cansa no meio da piscina não deve se debater: isso só gasta mais energia. O certo é segurar a boia, respirar e decidir para que lado ir. Num mês em que o dinheiro não fecha, a reação comum é se debater: pegar o primeiro crédito que aparece ou parar de pagar o que vence primeiro. A reserva é a boia, e um plano simples é o jeito de respirar.</p></div>`,
        `<div class="term"><b>Mês de aperto</b> = mês em que as saídas previstas passam das entradas previstas. <b>Prioridade de pagamento</b> = ordem em que as contas são pagas, pensando no que gera mais multa, juros ou risco ao negócio. <b>Renegociação</b> = combinar com o credor um novo prazo ou forma de pagamento, de preferência antes do vencimento.</div>`,
        `<div class="card"><h3>O caso</h3><p>Vânia, 43 anos, é MEI e faz consertos e ajustes de roupas. No dia 5 de março, no fechamento, ela projetou o mês: entradas previstas de R$ 1.500, contra R$ 2.400 de saídas (retirada fixa, guia mensal, linhas e tecidos, aluguel da máquina industrial). Faltam R$ 900. Ela tem R$ 1.200 na reserva e R$ 400 a receber de duas clientes atrasadas. <b>Valores ilustrativos</b>.</p></div>`,
        `<div class="card"><h3>Resolvendo passo a passo</h3><ol class="golden"><li><span><b>Ver cedo:</b> ela descobriu o buraco no dia 5, não no dia do vencimento. Isso dá tempo para escolher.</span></li><li><span><b>Cobrar o que é seu:</b> manda lembretes educados às duas clientes atrasadas, com valor e chave Pix do negócio (lição 2.5).</span></li><li><span><b>Buscar receita possível:</b> avisa as clientes antigas que tem horários livres para ajustes de roupa, sem dar desconto abaixo do custo.</span></li><li><span><b>Ordenar as contas:</b> a guia mensal e as contas que geram multa e juros altos vêm primeiro; o aluguel da máquina ela renegocia antes do vencimento, explicando a situação.</span></li><li><span><b>Usar a reserva com limite:</b> tira só o que faltar depois dos passos anteriores.</span></li><li><span><b>Ajustar a retirada só se necessário</b>, com valor e prazo definidos, e não "tirando o que der".</span></li><li><span><b>Repor e aprender:</b> anota quanto usou da reserva, define como repor nos meses seguintes e registra o que causou o aperto.</span></li></ol></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Como o buraco foi coberto (ilustrativo)</th><th>Valor</th></tr><tr><td>Falta prevista no mês</td><td>R$ 900</td></tr><tr><td>Recebido das clientes atrasadas</td><td>R$ 400</td></tr><tr><td>Ajustes extras com clientes antigas</td><td>R$ 200</td></tr><tr><td>Retirado da reserva</td><td>R$ 300</td></tr><tr><td><b>Falta restante</b></td><td><b>R$ 0, sem crédito caro e com R$ 900 ainda na reserva</b></td></tr></table></div>`,
        `<div class="flows"><div class="flow old"><h4>Debatendo na água</h4><div class="node">Descobre o buraco no dia do vencimento</div><div class="node">Deixa de pagar a guia "porque o governo espera"</div><div class="node">Entra no cheque especial ou no rotativo do cartão</div><div class="node">O aperto vira dívida de vários meses</div></div><div class="flow new"><h4>Segurando a boia</h4><div class="node">Vê o buraco no fechamento do dia 5</div><div class="node">Cobra, busca receita e renegocia antes</div><div class="node">Usa a reserva só no que faltou</div><div class="node">Repõe a reserva nos meses seguintes</div></div></div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><ol class="golden"><li><span><b>Deixar a guia para depois:</b> o atraso gera multa e juros e pode complicar o CNPJ; se já atrasou, regularize pelo canal oficial (lição 3.1).</span></li><li><span><b>Liquidar abaixo do custo:</b> vender mais com prejuízo aumenta o buraco.</span></li><li><span><b>Usar crédito caro como primeira saída:</b> cheque especial e rotativo do cartão costumam ter juros muito altos; compare e peça orientação antes.</span></li><li><span><b>Esconder o aperto da própria planilha:</b> sem registrar, você não aprende o que causou o problema nem repõe a reserva.</span></li></ol><p>Se o aperto se repete vários meses seguidos, não é imprevisto: é sinal para rever preço, custos ou volume de clientes, com apoio do Sebrae ou de um contador.</p></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez (cerca de 5 minutos)</h3><ol class="golden"><li><span>Escreva você mesmo a lista das contas de um mês do seu negócio e marque a ordem de prioridade.</span></li><li><span>Anote quanto você tem a receber e quanto tem na reserva (ou zero, se ainda não tem).</span></li><li><span>No Google Gemini, descreva um mês de aperto com números redondos e peça que aponte ações ou perguntas que você esqueceu.</span></li><li><span>Escolha você três ações para o seu plano e salve na pasta do negócio.</span></li></ol><p>Privacidade e cuidado: não envie extratos, dados bancários, CPF, CNPJ ou nomes de clientes à IA. Para dúvidas sobre guias, parcelamento e regras fiscais, confirme no portal oficial ou com um contador, porque a IA pode errar.</p></div>`
      ],
      ch:[
        { who:'Hélio, 49 anos, é MEI e faz pequenos reparos elétricos', says:'Este mês não fecha. Vou deixar a guia do MEI para depois e pagar só o cartão, que cobra mais.',
          q:'Qual é o problema desse plano?',
          opts:[
            {t:'Nenhum: a guia pode esperar sem consequência.', ok:false, why:'A guia atrasada gera multa e juros e pode trazer problemas ao CNPJ e à contribuição previdenciária.'},
            {t:'Ele está tratando a guia como opcional; o melhor é ver o buraco com antecedência, cobrar o que tem a receber, renegociar o que for possível e manter a guia em dia, regularizando pelo canal oficial se já tiver atrasado.', ok:true, why:'A guia é obrigação mensal. Um plano com cobrança e renegociação evita trocar um problema por outro.'},
            {t:'O problema é só ter cartão de crédito.', ok:false, why:'O cartão não é o centro da questão. O ponto é a falta de plano para o mês de aperto.'}
          ]},
        { who:'Sabrina, 34 anos, é MEI e vende salgados congelados', says:'Para cobrir o mês, pensei em fazer uma promoção com preço abaixo do que me custa cada pacote.',
          q:'O que ela deve considerar?',
          opts:[
            {t:'Que vender abaixo do custo aumenta o prejuízo a cada venda; é melhor oferecer pacotes ou divulgar com preço que ainda cubra os custos, e cobrar valores em aberto.', ok:true, why:'Promoção só ajuda o caixa se o preço cobrir o custo. Senão, quanto mais vende, mais perde.'},
            {t:'Que qualquer venda ajuda, mesmo com prejuízo.', ok:false, why:'Venda com prejuízo tira dinheiro do caixa em vez de colocar.'},
            {t:'Que deve parar de vender até o mês passar.', ok:false, why:'Parar corta a entrada de dinheiro justamente quando ela mais precisa.'}
          ]},
        { who:'Jonas, 38 anos, é MEI e faz entregas de bicicleta', says:'Usei quase toda a reserva no mês passado. Agora o mês está normal de novo.',
          q:'Qual é o próximo passo mais importante?',
          opts:[
            {t:'Esquecer a reserva, porque ela já cumpriu o papel.', ok:false, why:'Sem repor, o próximo imprevisto vai direto para o crédito caro.'},
            {t:'Aumentar a retirada para compensar o mês difícil.', ok:false, why:'Aumentar a retirada agora atrasa a reposição da reserva e deixa o negócio vulnerável.'},
            {t:'Definir quanto vai repor por mês até voltar à meta, registrar o que causou o aperto e ajustar o plano para que não se repita.', ok:true, why:'Repor a reserva e entender a causa protegem o negócio no próximo imprevisto.'}
          ]}
      ]},
    { id:'3.6', title:'Projeto: calendário de obrigações e rotina mensal', min:30,
      body:[
        `<div class="card"><p>Neste projeto, você monta o calendário de obrigações do seu negócio e a sua rotina de fechamento mensal. Pesquise as datas e regras atuais no Portal do Empreendedor (gov.br) e na prefeitura, e confirme com um contador quando tiver dúvida. Não confie em datas copiadas de redes sociais.</p></div>`
      ],
      projeto: {
        entrega: 'Um calendário anual de obrigações e lembretes do seu negócio, mais o roteiro da sua rotina de fechamento mensal com indicadores e meta de reserva.',
        passos: [
          'Pesquise no portal oficial as obrigações do seu caso (guia mensal, declaração anual) e anote os prazos atuais e onde os conferiu.',
          'Inclua obrigações locais e do seu ramo (licenças, renovações, conselho profissional), se houver.',
          'Defina a data fixa do seu fechamento mensal e escreva o roteiro passo a passo.',
          'Escolha de 3 a 5 indicadores e a meta da sua reserva de emergência, com quanto vai separar por mês.',
          'Monte a estrutura da sua pasta do negócio (lição 3.5): subpastas, padrão de nomes, onde fica a cópia de segurança e a lista de documentos com prazo de guarda a confirmar com o contador.'
        ],
        checklist: [
          'Todas as datas foram conferidas em fonte oficial, e anotei onde.',
          'Tenho lembretes configurados (celular, agenda ou planilha).',
          'Minha rotina mensal inclui conferir o acumulado do ano em relação ao limite atual.',
          'Defini a meta e o valor mensal da reserva com base nos meus números.',
          'Minha pasta do negócio tem estrutura, cópia de segurança protegida e nenhum dado de cliente enviado a ferramentas de IA.'
        ],
        minimo: 400
      } }
  ]}
];

const MODDONE = {
  1: 'Você entende quando formalizar faz sentido, como se cadastrar com segurança, quando o MEI não serve e quando mudar de formato, sabendo onde conferir as regras atuais.',
  2: 'Você sabe separar contas, emitir nota, calcular preço com todos os custos, controlar o fluxo de caixa e receber com segurança.',
  3: 'Parabéns! Você concluiu o curso e a Trilha Renda com IA, com o seu certificado do curso garantido. Continue conferindo regras, valores e prazos no Portal do Empreendedor e com o seu contador.'
};

const PROMPTS = {
  1: [
    { title:'Perguntas para decidir', desc:'Para decidir se vale formalizar.' },
    { title:'Perguntas para o contador', desc:'Para preparar uma conversa objetiva com um contador ou com o Sebrae.' }
  ],
  2: [
    { title:'Planilha de controle', desc:'Para organizar entradas e saídas.' },
    { title:'Calculadora de preço', desc:'Para estruturar o cálculo de preço com custos, tempo e reserva, usando os seus números.' }
  ],
  3: [
    { title:'Calendário de lembretes', desc:'Para não esquecer prazos.' },
    { title:'Modelo de combinado', desc:'Para estruturar um combinado escrito claro para o seu serviço.' }
  ]
};

const THEME = { 1:['#10B981','#84CC16'], 2:['#84CC16','#10B981'], 3:['#10B981','#84CC16'] };
const LIC = { '1.1':'🏛️','1.2':'📋','1.3':'🔐','1.4':'👟','1.5':'🚲','1.6':'🧭','2.1':'🧮','2.2':'🧾','2.3':'🍰','2.4':'🚰','2.5':'🚪','2.6':'📊','3.1':'📅','3.2':'📈','3.3':'🤝','3.4':'🩺','3.5':'🧰','3.6':'🗓️','1.7':'⚖️','1.8':'🏁','2.7':'🧹','2.8':'🎯','3.7':'🔁','3.8':'🛟' };

return {
  id: 'formalizando-mei-e-financas',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
