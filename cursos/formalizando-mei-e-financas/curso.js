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
const LIC = { '1.1':'🏛️','1.2':'📋','1.3':'🔐','1.4':'👟','1.5':'🚲','1.6':'🧭','2.1':'🧮','2.2':'🧾','2.3':'🍰','2.4':'🚰','2.5':'🚪','2.6':'📊','3.1':'📅','3.2':'📈','3.3':'🤝','3.4':'🩺','3.5':'🧰','3.6':'🗓️' };

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
