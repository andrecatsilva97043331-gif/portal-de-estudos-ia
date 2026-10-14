/* Curso: Seu Primeiro Serviço com IA (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🔍', title:'Descobrir', sub:'O que você pode oferecer', lessons:[
    { id:'1.1', title:'O mapa das suas habilidades e do que as pessoas pagam para resolver', min:10,
      body:[
        `<div class="card analogy"><h3>🔍 O mapa do tesouro</h3><p>Você já tem um baú de habilidades, mas sem um mapa não sabe onde cavar. O mapa liga o que você sabe fazer ao que as pessoas precisam e aceitam pagar. Sem ele, você cava em qualquer lugar, se cansa e desiste achando que "não tem talento para nada".</p></div>`,
        `<div class="term"><b>Habilidade</b> = algo que você sabe fazer, mesmo que tenha aprendido na prática. <b>Problema real</b> = uma dificuldade que as pessoas enfrentam e querem resolver. <b>Serviço</b> = uma solução entregue por você em troca de pagamento. <b>Demanda</b> = gente que tem o problema e está disposta a pagar para resolvê-lo.</div>`,
        `<div class="card"><h3>Habilidade escondida também conta</h3><p>Muita gente acha que só vale como habilidade aquilo que tem diploma. Não é assim. Quem organizou a festa da família inteira sabe planejar e cobrar fornecedores. Quem cuida do Instagram da igreja sabe fazer posts e responder mensagens. Quem trabalhou no caixa da padaria sabe atender gente apressada e lidar com troco e controle. Tudo isso pode virar parte de um serviço.</p><p>Pense em quatro lugares: o trabalho (atual ou antigo), a casa, os hobbies e as coisas que as pessoas costumam pedir para você ("me ajuda a montar esse currículo?", "você arruma a planilha do meu negócio?"). Esse último é o sinal mais forte: se pedem de graça, talvez alguém pague.</p></div>`,
        `<div class="card"><h3>Três listas e um cruzamento</h3><ol class="golden"><li><span>Liste pelo menos 10 coisas que você sabe fazer, no trabalho, em casa e em hobbies. Não filtre ainda.</span></li><li><span>Liste problemas que você viu pessoas ou pequenos negócios terem: o salão que demora a responder no WhatsApp, a confeitaria sem cardápio organizado, a oficina sem controle de orçamentos, o pet shop que nunca posta nada.</span></li><li><span>Peça ideias à IA contando suas habilidades e os problemas que você observou. Peça serviços simples, que uma pessoa sozinha consiga entregar.</span></li><li><span>Cruze as listas e escolha de 3 a 5 ideias que juntam o que você sabe com um problema que você viu de perto.</span></li></ol>
          <p>A IA é ótima para abrir possibilidades, mas ela não conhece o seu bairro, os seus contatos nem o bolso dos seus clientes. Ela dá ideias; só gente de verdade confirma se há demanda.</p></div>`,
        `<div class="flows"><div class="flow old"><h4>❌ Como muita gente começa</h4><p>Vê um vídeo dizendo que "tal serviço dá dinheiro", compra curso, monta perfil e só depois descobre que não gosta do trabalho ou que ninguém por perto precisa daquilo.</p></div><div class="flow new"><h4>✅ Como começar com o mapa</h4><p>Parte do que já sabe, observa problemas reais ao redor, gera ideias com ajuda da IA e testa com pessoas antes de gastar tempo e dinheiro.</p></div></div>`,
        `<div class="card"><h3>Erros comuns nesta etapa</h3><p>Descartar habilidades "simples demais" (organizar, explicar, escrever bem são valiosas para quem não sabe). Escolher pelo que parece moderno, e não pelo que você aguenta fazer toda semana. E confundir "as pessoas acham legal" com "as pessoas pagam": elogio não é demanda.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que, para achar um tesouro, não basta ter uma pá: precisa de um mapa. Depois diga qual seria o "X" do seu mapa.</div>`
      ],
      ch:[
        { who:'Vanessa, 30 anos, quer começar a oferecer um serviço', says:'Perguntei à IA que serviço eu devo vender, e ela deu 10 ideias. Vou escolher a que parece mais bonita e começar.',
          q:'Qual é o melhor próximo passo?',
          opts:[
            {t:'Escolher a ideia mais bonita e investir tudo nela.', ok:false, why:'Beleza não prova demanda. Sem conversar com possíveis clientes, ela pode investir numa ideia que ninguém paga.'},
            {t:'Escolher 3 ideias, conversar com pessoas que têm o problema e ver se elas pagariam para resolver.', ok:true, why:'Conversar com possíveis clientes confirma se há demanda antes de investir tempo e dinheiro.'},
            {t:'Pedir mais 100 ideias para a IA, até achar uma perfeita.', ok:false, why:'Mais ideias não substituem o teste com pessoas reais.'}
          ]},
        { who:'Seu Antônio, 52 anos, trabalhou 20 anos como estoquista de mercado', says:'Não tenho habilidade nenhuma para vender. Só sei contar caixa, organizar prateleira e controlar o que entra e sai.',
          q:'Como ajudar o Seu Antônio a montar o mapa?',
          opts:[
            {t:'Mostrar que controle de estoque e organização são habilidades úteis para lojas de bairro, mercadinhos e depósitos que vivem perdendo mercadoria.', ok:true, why:'Habilidade aprendida na prática conta. Muitos pequenos negócios têm justamente o problema que ele sabe resolver.'},
            {t:'Dizer que ele precisa fazer uma faculdade antes de oferecer qualquer coisa.', ok:false, why:'Diploma não é requisito para um serviço simples. O que importa é resolver bem um problema real.'},
            {t:'Sugerir que ele copie o serviço que mais aparece nos vídeos da internet.', ok:false, why:'Seguir a moda ignora o que ele já sabe fazer, que é justamente a vantagem dele.'}
          ]},
        { who:'Larissa, 24 anos, é chamada pelas tias para arrumar o cardápio da confeitaria e as fotos do perfil', says:'Faço isso de graça para a família há anos. Será que isso diz alguma coisa?',
          q:'O que esse pedido frequente indica?',
          opts:[
            {t:'Nada: se é para a família, não conta.', ok:false, why:'Pedidos frequentes, mesmo da família, mostram que existe um problema e que ela resolve bem.'},
            {t:'Que ela deve começar cobrando caro das tias imediatamente.', ok:false, why:'O ponto não é cobrar da família, e sim perceber a pista e testar com outros negócios parecidos.'},
            {t:'Que é uma pista forte de serviço: confeitarias e lanchonetes parecidas podem ter o mesmo problema e pagar para resolver.', ok:true, why:'Aquilo que pedem para você de graça costuma ser o sinal mais claro de uma habilidade com demanda.'}
          ]}
      ]},
    { id:'1.2', title:'Escolher um serviço e um nicho', min:10,
      body:[
        `<div class="card analogy"><h3>🎯 A loja especializada</h3><p>Quem precisa de um sapato de dança vai à loja especializada, e não ao vendedor que vende de tudo. Quem se especializa é lembrado e indicado com mais facilidade. Quando alguém pergunta "você conhece alguém que arruma cardápio de lanchonete?", o seu nome precisa vir à cabeça.</p></div>`,
        `<div class="term"><b>Nicho</b> = um grupo específico de clientes com um problema parecido. <b>Serviço principal</b> = o serviço que você mais vai oferecer no começo. <b>Critério de escolha</b> = o que você usa para decidir entre as opções, em vez de decidir no impulso.</div>`,
        `<div class="card"><h3>Cinco critérios para decidir</h3><p>Pegue as 3 a 5 ideias da lição anterior e dê nota de 1 a 5 a cada uma em cada critério:</p>
          <ol class="golden"><li><span>Eu sei fazer (ou aprendo rápido)?</span></li><li><span>Eu gosto de fazer, a ponto de aguentar repetir toda semana?</span></li><li><span>O cliente tem um problema claro e frequente?</span></li><li><span>O cliente tem como pagar?</span></li><li><span>Consigo chegar às primeiras pessoas, por conhecidos ou pelo bairro?</span></li></ol>
          <p>Some as notas. A maior soma não é uma ordem, é uma conversa: se a ideia campeã tem nota 1 em "gosto de fazer", desconfie. Um serviço que você detesta vira abandono em poucos meses.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Ideia</th><th>Sei</th><th>Gosto</th><th>Problema</th><th>Pagam</th><th>Acesso</th><th>Total</th></tr><tr><td>Cardápio digital para lanchonetes</td><td>4</td><td>5</td><td>4</td><td>3</td><td>4</td><td>20</td></tr><tr><td>Posts para pet shops</td><td>3</td><td>3</td><td>3</td><td>3</td><td>2</td><td>14</td></tr><tr><td>Planilha de orçamento para oficinas</td><td>5</td><td>2</td><td>4</td><td>4</td><td>3</td><td>18</td></tr></table></div>`,
        `<div class="card"><h3>Por que nicho ajuda quem está começando</h3><p>Com um nicho, você fala a língua do cliente. Quem atende salões aprende que sábado é o dia mais cheio, que muitas clientes marcam pelo WhatsApp e que faltas sem aviso doem no bolso. Essa familiaridade deixa a sua oferta mais certeira e a sua divulgação mais simples: você sabe onde essas pessoas estão e o que as incomoda.</p><p>Escolha um nicho que você conheça ou consiga visitar, como "salões de beleza do meu bairro" ou "confeitarias que vendem por encomenda". Depois teste a frase "Eu ajudo [NICHO] a [RESULTADO]" com 3 pessoas desse nicho. Se elas não entenderem ou não se reconhecerem, reescreva.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><p>Nicho largo demais ("pequenos negócios") não ajuda ninguém a lembrar de você. Nicho pequeno demais ("barbearias veganas da minha rua") pode não ter clientes suficientes. E trocar de nicho toda semana impede que você aprenda com a repetição. Comece com uma coisa só: dá para ampliar depois, com experiência e casos reais.</p></div>`,
        `<div class="why-chain"><b>Por que foco funciona?</b> Porque, com um serviço e um nicho, você repete o trabalho. Repetindo, fica mais rápido e melhor. Ficando melhor, entrega com mais qualidade no mesmo tempo. Com qualidade e casos parecidos, as indicações aparecem dentro do próprio nicho, porque donos de salão conversam com donos de salão.</div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que escolher uma coisa só para fazer bem pode ser melhor do que tentar fazer tudo.</div>`
      ],
      ch:[
        { who:'Caio, 28 anos, sabe de planilhas, redes sociais e sites', says:'Vou oferecer planilhas, posts, sites, vídeos e tudo o que o cliente quiser, para qualquer tipo de negócio.',
          q:'Qual é a melhor estratégia para começar?',
          opts:[
            {t:'Oferecer tudo a todos, para não perder nenhuma oportunidade.', ok:false, why:'A mensagem fica confusa e o cliente não sabe em que você é bom.'},
            {t:'Não oferecer nada até dominar todas as áreas.', ok:false, why:'Ninguém domina tudo. Começar pequeno e aprender com clientes reais é o caminho.'},
            {t:'Escolher um serviço e um nicho que conhece, e dar notas pelos critérios antes de decidir.', ok:true, why:'Foco e critérios claros tornam a oferta mais fácil de explicar e de vender.'}
          ]},
        { who:'Priscila, 35 anos, deu notas às suas ideias', says:'A planilha para oficinas ficou com a maior nota em quase tudo, mas tirei 1 em "gosto de fazer". Odeio mexer com planilha.',
          q:'O que ela deveria considerar?',
          opts:[
            {t:'Seguir a maior nota sem pensar, porque número não mente.', ok:false, why:'As notas ajudam a decidir, mas um serviço que ela detesta tende a ser abandonado ou mal feito.'},
            {t:'Olhar a segunda ideia mais bem avaliada que ela goste de fazer, e lembrar que as notas servem para conversar, não para mandar.', ok:true, why:'Critérios organizam a decisão, mas o gosto pelo trabalho pesa na constância, essencial no começo.'},
            {t:'Desistir de todas as ideias, porque nenhuma é perfeita.', ok:false, why:'Nenhuma ideia é perfeita. O objetivo é escolher uma boa o suficiente para testar.'}
          ]},
        { who:'Diego, 27 anos, testou a frase de nicho com donos de barbearia', says:'Escrevi "Eu ajudo empreendedores a alavancar sua presença digital". Os três barbeiros com quem falei ficaram com cara de dúvida.',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Manter a frase: os barbeiros é que não entendem de marketing.', ok:false, why:'Se o público do nicho não entende, a frase falhou. A culpa não é do cliente.'},
            {t:'Acrescentar mais termos técnicos para parecer especialista.', ok:false, why:'Jargão afasta. Quem é especialista explica de um jeito que o cliente entende.'},
            {t:'Reescrever com o nicho e um resultado concreto, como "Eu ajudo barbearias do bairro a organizar a agenda pelo WhatsApp", e testar de novo.', ok:true, why:'Nicho claro e resultado concreto, em palavras do cliente, fazem a pessoa se reconhecer na frase.'}
          ]}
      ]},
    { id:'1.3', title:'Validar a demanda conversando com pessoas reais', min:10,
      body:[
        `<div class="card analogy"><h3>🩺 O médico que pergunta antes de receitar</h3><p>Um bom médico não chega receitando remédio. Ele pergunta onde dói, desde quando, o que você já tentou. Só depois propõe um tratamento. Validar a demanda é fazer a consulta antes de "receitar" o seu serviço.</p></div>`,
        `<div class="term"><b>Validação</b> = confirmar, com pessoas reais, que o problema existe e incomoda. <b>Pergunta indutora</b> = pergunta que já sugere a resposta que você quer ouvir. <b>Sinal de compra</b> = atitude que mostra interesse real, como pedir preço, pedir para começar ou indicar alguém.</div>`,
        `<div class="card"><h3>Por que perguntar "você compraria?" não funciona</h3><p>As pessoas são gentis. Se você pergunta "você pagaria por um cardápio digital bonito?", a dona da lanchonete provavelmente diz "pagaria, sim" para não te desanimar. Isso é opinião sobre o futuro, e opinião sobre o futuro engana. O que vale é o que a pessoa já faz hoje: se ela já gastou tempo ou dinheiro tentando resolver o problema, ele é real.</p></div>`,
        `<div class="flows"><div class="flow old"><h4>❌ Perguntas que induzem</h4><p>"Você não acha que precisa de posts melhores?" "Meu serviço seria útil para você, né?" "Quanto você pagaria por isso?"</p></div><div class="flow new"><h4>✅ Perguntas que revelam</h4><p>"Como você responde os clientes hoje?" "Qual foi a última vez que isso deu problema?" "O que você já tentou para resolver?" "Quanto tempo isso toma da sua semana?"</p></div></div>`,
        `<div class="card"><h3>Roteiro de uma conversa de 15 minutos</h3><ol class="golden"><li><span>Explique que você está estudando o assunto e quer aprender, não vender. E cumpra: não venda nessa conversa.</span></li><li><span>Pergunte como a pessoa faz hoje a tarefa ligada ao problema.</span></li><li><span>Peça um caso concreto: "me conta a última vez que isso aconteceu".</span></li><li><span>Pergunte o que ela já tentou e quanto isso custou em tempo ou dinheiro.</span></li><li><span>No fim, pergunte se ela conhece outra pessoa com o mesmo problema.</span></li><li><span>Anote logo depois, com as palavras que ela usou. Essas palavras vão para a sua oferta.</span></li></ol>
          <p>Converse com pelo menos 5 pessoas do nicho. Pode ser a dona do salão onde você corta o cabelo, o mecânico da esquina, a vizinha que vende bolo. Se 3 ou mais contam o mesmo tipo de dor e já tentaram resolver, é um bom sinal. Se ninguém lembra de um caso concreto, o problema talvez não incomode tanto.</p></div>`,
        `<div class="card"><h3>Ética e cuidado</h3><p>Respeite o tempo das pessoas: peça licença, combine a duração e agradeça. Não grave sem autorização. Não use a conversa para empurrar venda escondida: se depois você quiser oferecer o serviço, faça isso em outro momento e de forma clara. A IA pode ajudar a revisar o seu roteiro e apontar perguntas que estão induzindo a resposta, mas quem conversa é você.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos a diferença entre perguntar "você gosta do meu desenho?" e "o que você faria diferente neste desenho?". Qual das duas ensina mais?</div>`
      ],
      ch:[
        { who:'Thiago, 26 anos, vai conversar com donos de pet shop', says:'Minha primeira pergunta vai ser: "Você não acha que seu pet shop precisa de um Instagram mais profissional?"',
          q:'Como melhorar essa pergunta?',
          opts:[
            {t:'Manter: é direta e economiza tempo.', ok:false, why:'É indutora: quase todo mundo diz "sim" por educação, e Thiago não aprende nada sobre a realidade do cliente.'},
            {t:'Trocar por "Como as pessoas descobrem o seu pet shop hoje?" e "O que você já tentou para atrair clientes novos?"', ok:true, why:'Perguntas abertas sobre o que a pessoa já faz revelam se o problema existe e quanto ele incomoda.'},
            {t:'Começar mostrando o preço do pacote, para ver se ela se interessa.', ok:false, why:'Vender na conversa de validação muda o clima e impede que o dono fale com sinceridade.'}
          ]},
        { who:'Renata, 31 anos, conversou com 6 confeiteiras', says:'Todas disseram que meu serviço de cardápio "seria legal", mas nenhuma lembrou de um problema recente com isso e nenhuma já tentou resolver.',
          q:'O que esse resultado indica?',
          opts:[
            {t:'Que o problema talvez não incomode o suficiente, e vale investigar outra dor que elas citaram ou outro nicho.', ok:true, why:'"Seria legal" é elogio, não demanda. Sem caso concreto nem tentativa anterior, o sinal é fraco.'},
            {t:'Que a demanda está confirmada, porque todas acharam legal.', ok:false, why:'Achar legal não é o mesmo que ter um problema e pagar para resolvê-lo.'},
            {t:'Que ela deve abaixar o preço até alguém aceitar.', ok:false, why:'Preço não resolve falta de problema. Primeiro é preciso achar uma dor real.'}
          ]},
        { who:'Marcos, 40 anos, conversa com o dono de uma oficina mecânica', says:'O dono contou que perde orçamentos porque anota tudo em papel e não lembra de retornar ao cliente. Ele já tentou um aplicativo, mas achou complicado.',
          q:'Qual é a atitude mais útil agora?',
          opts:[
            {t:'Interromper e vender na hora um pacote completo, aproveitando o momento.', ok:false, why:'Na validação, o objetivo é aprender. Vender no meio quebra a confiança e encerra o aprendizado.'},
            {t:'Ignorar a parte do aplicativo, porque não tem relação com o serviço dele.', ok:false, why:'A tentativa anterior é ouro: mostra que a dor é real e o que não funcionou para esse cliente.'},
            {t:'Pedir mais detalhes do caso, anotar as palavras do dono e, no fim, perguntar se ele conhece outras oficinas com o mesmo problema.', ok:true, why:'Caso concreto mais tentativa anterior é sinal forte de demanda, e as palavras do cliente vão melhorar a oferta.'}
          ]}
      ]},
    { id:'1.4', title:'Sua frase de posicionamento e um diferencial honesto', min:10,
      body:[
        `<div class="card analogy"><h3>🪧 A placa da loja</h3><p>Quem passa na rua olha a placa por dois segundos. "Chaveiro 24h" diz tudo: o que faz e por que escolher. A sua frase de posicionamento é a placa do seu serviço. Se a pessoa precisa de uma explicação longa para entender, ela já passou reto.</p></div>`,
        `<div class="term"><b>Posicionamento</b> = o lugar que você quer ocupar na cabeça do cliente: para quem você é a melhor escolha e por quê. <b>Diferencial</b> = um motivo verdadeiro para escolherem você e não outra pessoa. <b>Promessa</b> = aquilo que você garante entregar.</div>`,
        `<div class="card"><h3>A fórmula em três partes</h3><p>"Eu ajudo <b>[NICHO]</b> a <b>[RESULTADO]</b> com <b>[COMO / DIFERENCIAL]</b>."</p><p>Exemplos: "Eu ajudo salões do bairro a responder clientes mais rápido com mensagens prontas para o WhatsApp, feitas na linguagem do salão." "Eu ajudo confeitarias que vendem por encomenda a organizar pedidos com uma planilha simples e uma aula de uso pelo celular." Repare: nada de "soluções inovadoras" ou "alavancar resultados". Palavras que a dona do salão usaria.</p></div>`,
        `<div class="card"><h3>Diferencial honesto: de onde ele vem</h3><p>Você está começando, então não tem "10 anos de mercado" nem "centenas de clientes". E não precisa fingir. Diferenciais honestos de quem começa costumam vir de:</p><ol class="golden"><li><span><b>Proximidade:</b> você é do bairro, atende presencialmente, conhece a rotina dos negócios locais.</span></li><li><span><b>Experiência vivida:</b> você trabalhou num salão, numa oficina, num comércio, e entende o dia a dia por dentro.</span></li><li><span><b>Atenção:</b> poucos clientes por vez, resposta rápida, explicação com paciência.</span></li><li><span><b>Formato:</b> algo simples de usar, entregue com um guia, sem depender de você para sempre.</span></li></ol></div>`,
        `<div class="flows"><div class="flow old"><h4>❌ Diferencial inventado</h4><p>"O melhor da cidade." "Resultados garantidos." "Especialista com anos de experiência" (quando não é verdade). Promessas sobre vendas do cliente, que você não controla.</p></div><div class="flow new"><h4>✅ Diferencial honesto</h4><p>"Trabalhei 5 anos em salão e sei como é o sábado lotado." "Atendo só 3 clientes por mês para dar atenção." "Entrego com um vídeo curto ensinando a usar."</p></div></div>`,
        `<div class="card"><h3>Como testar a sua frase</h3><p>Leia a frase para 3 pessoas do nicho e peça que expliquem com as próprias palavras o que você faz. Se a explicação delas bater com a sua intenção, a frase funciona. Se disserem algo diferente, ajuste. Você pode pedir à IA versões alternativas e que aponte palavras confusas, mas escolha a versão que você consegue sustentar na prática: cada palavra da frase é uma promessa.</p><p>Um cuidado final: diferencial não é atacar concorrente. Falar mal de outros profissionais passa insegurança. Fale do que você faz bem.</p></div>`,
        `<div class="card"><h3>Onde a frase vai aparecer</h3><p>Na bio do perfil, no topo da página de oferta, na primeira mensagem para um possível cliente e até na resposta quando alguém pergunta "e você, trabalha com o quê?". Por isso ela precisa caber em uma respiração. Se você tropeça ao falar em voz alta, ela está longa demais.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a placa "Chaveiro 24h" funciona melhor do que "Soluções completas em segurança residencial".</div>`
      ],
      ch:[
        { who:'Fernanda, 29 anos, está escrevendo sua frase de posicionamento', says:'Coloquei: "Sou a melhor social media da cidade, com resultados garantidos." Ainda não tive nenhum cliente.',
          q:'O que ela deveria fazer?',
          opts:[
            {t:'Trocar por algo verdadeiro, como "Eu ajudo pet shops do bairro a postar toda semana com fotos dos próprios clientes de quatro patas", destacando a atenção que ela pode dar.', ok:true, why:'Um diferencial honesto e verificável gera confiança. "Melhor da cidade" e "garantido" não se sustentam sem histórico.'},
            {t:'Manter: no marketing, todo mundo exagera.', ok:false, why:'Exagero sem base quebra a confiança no primeiro contato e pode configurar propaganda enganosa.'},
            {t:'Tirar a frase e não dizer nada sobre ela.', ok:false, why:'Sem posicionamento, o cliente não entende para quem é o serviço nem por que escolhê-la.'}
          ]},
        { who:'Jorge, 45 anos, trabalhou 15 anos numa oficina e agora quer oferecer planilhas de orçamento', says:'Não tenho diferencial nenhum. Tem muita gente fazendo planilha por aí.',
          q:'Qual seria um diferencial honesto para ele?',
          opts:[
            {t:'Dizer que é programador experiente, para competir com os outros.', ok:false, why:'Inventar experiência é desonesto e logo aparece na prática.'},
            {t:'Cobrar o preço mais baixo do mercado como único diferencial.', ok:false, why:'Preço baixo é fácil de copiar e pode não cobrir o custo dele. Ele tem algo mais valioso.'},
            {t:'Destacar que conhece a rotina de oficina por dentro e faz planilhas na linguagem do mecânico.', ok:true, why:'Experiência vivida no nicho é um diferencial real, difícil de copiar e fácil de comprovar.'}
          ]},
        { who:'Aline, 33 anos, testou a frase com 3 donas de salão', says:'Pedi que explicassem o que eu faço. Uma disse "você faz site", outra "você cuida do Instagram" e a terceira não soube dizer.',
          q:'O que esse teste mostra?',
          opts:[
            {t:'Que as donas de salão não prestaram atenção.', ok:false, why:'Quando três pessoas do nicho entendem coisas diferentes, o problema está na frase.'},
            {t:'Que a frase está confusa e precisa dizer com clareza o resultado e o formato, depois ser testada de novo.', ok:true, why:'O teste existe para isso: se o cliente não repete a ideia com as próprias palavras, é hora de reescrever.'},
            {t:'Que ela deve oferecer site, Instagram e tudo mais, já que cada uma entendeu uma coisa.', ok:false, why:'Ampliar o serviço por confusão deixa a oferta ainda mais vaga.'}
          ]}
      ]},
    { id:'1.5', title:'Faça uma amostra do serviço antes de vender', min:10,
      body:[
        `<div class="card analogy"><h3>🍰 A fatia de degustação</h3><p>A confeitaria que deixa uma fatia de bolo para degustação no balcão faz duas coisas ao mesmo tempo: mostra ao cliente o que ele vai receber e confirma, para si mesma, que a receita está boa e que dá para produzir no tempo certo. A amostra do seu serviço é a sua fatia de degustação: um trabalho de treino que você faz antes do primeiro cliente.</p></div>`,
        `<div class="term"><b>Amostra</b> = uma versão real do seu serviço, feita para treinar, normalmente para um negócio fictício. <b>Tempo real</b> = quanto você levou, cronometrado, do começo ao fim. <b>Lacuna</b> = algo que você descobriu que ainda não sabe fazer bem. <b>Ponto de dor da entrega</b> = a etapa que mais travou ou demorou.</div>`,
        `<div class="card"><h3>Por que fazer antes de vender</h3><p>Até aqui você escolheu um serviço com critérios e conversou com pessoas. Mas uma coisa é achar que sabe fazer; outra é fazer do começo ao fim. A amostra revela três coisas que nenhuma conversa revela: quanto tempo o trabalho leva de verdade, o que você precisa aprender antes de cobrar e como o resultado fica na prática. Essas três respostas vão alimentar o prazo, o preço e a sua confiança para oferecer.</p></div>`,
        `<div class="card"><h3>Passo a passo da amostra</h3><ol class="golden"><li><span>Invente um cliente fictício do seu nicho, com detalhes: "Salão Cachos da Vila, 2 cabeleireiras, atende pelo WhatsApp, muitas faltas aos sábados".</span></li><li><span>Defina o que você entregaria, do jeito mais parecido possível com a oferta real.</span></li><li><span>Ligue o cronômetro e faça tudo: pesquisa, criação, revisão e organização da entrega. Pause o cronômetro nas interrupções.</span></li><li><span>Anote em que etapa travou, o que precisou pesquisar e o que ficaria melhor com mais prática.</span></li><li><span>Mostre a amostra a uma pessoa do nicho e pergunte o que ela entendeu e o que mudaria.</span></li></ol></div>`,
        `<div class="card"><h3>Usando a IA na amostra, do jeito certo</h3><p>A amostra também é o lugar para testar como a IA entra no seu processo. Use-a para rascunhos, ideias e estrutura, e anote quanto tempo leva revisando o que ela gerou: esse tempo faz parte do serviço. Repare nos erros que ela comete no seu tipo de trabalho, como horários inventados, tom que não combina com o nicho ou promessas exageradas. Quem vai responder pela entrega é você, então a revisão humana entra no cronômetro.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Etapa</th><th>Tempo estimado</th><th>Tempo real</th><th>O que aprendi</th></tr><tr><td>Pesquisa sobre o cliente</td><td>30 min</td><td>1 h</td><td>Preciso de uma lista de perguntas pronta</td></tr><tr><td>Criação com ajuda da IA</td><td>1 h</td><td>1 h 30</td><td>Revisar o tom levou mais que criar</td></tr><tr><td>Organizar e enviar</td><td>15 min</td><td>45 min</td><td>Falta um modelo de guia de uso</td></tr></table></div>`,
        `<div class="card"><h3>Erros comuns e honestidade</h3><p>Fazer a amostra "de cabeça", sem cronometrar, e depois prometer prazos impossíveis. Escolher um caso fácil demais, que não representa a realidade. Desistir porque a primeira versão ficou fraca: a primeira sempre fica, e é para isso que ela existe. E, ao mostrar a amostra, deixe claro que é um trabalho de treino para um negócio fictício. Nunca use nome, logotipo ou fotos de um negócio real que não te contratou.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a confeitaria prova o bolo antes de colocar à venda, e o que ela descobre provando.</div>`
      ],
      ch:[
        { who:'Gustavo, 26 anos, quer oferecer planilhas de controle para oficinas mecânicas', says:'Nunca fiz uma planilha dessas do começo ao fim, mas acho que levo umas 2 horas. Já vou anunciar com entrega em 1 dia.',
          q:'Qual é o próximo passo mais seguro?',
          opts:[
            {t:'Anunciar logo e descobrir o tempo real com o primeiro cliente.', ok:false, why:'Se o tempo real for muito maior, o primeiro cliente recebe atraso, e o preço pode ficar abaixo do custo.'},
            {t:'Fazer uma amostra para uma oficina fictícia, cronometrar cada etapa e só então definir prazo e preço.', ok:true, why:'A amostra revela o tempo real e as lacunas antes de prometer qualquer coisa a um cliente pagante.'},
            {t:'Esperar fazer um curso completo de planilhas antes de qualquer coisa.', ok:false, why:'Estudar ajuda, mas a amostra mostra exatamente o que falta aprender, sem adiar indefinidamente.'}
          ]},
        { who:'Paula, 32 anos, fez a amostra de mensagens prontas para um salão fictício', says:'Estimei 2 horas e levei 5. A IA escreveu rápido, mas gastei muito tempo arrumando o tom, que estava formal demais para salão.',
          q:'Como ela deve usar essa descoberta?',
          opts:[
            {t:'Considerar o tempo de revisão como parte do serviço, ajustar prazo e preço e pensar em como deixar essa etapa mais rápida.', ok:true, why:'A revisão humana é trabalho real. Contá-la no tempo evita prazos e preços irreais.'},
            {t:'Parar de revisar e mandar o texto da IA direto, para caber nas 2 horas.', ok:false, why:'Cortar a revisão reduz a qualidade e coloca a reputação dela em risco.'},
            {t:'Ignorar o resultado, porque com cliente real vai ser mais rápido.', ok:false, why:'Pode ficar mais rápido com prática, mas a decisão de hoje precisa se basear no tempo medido.'}
          ]},
        { who:'Rogério, 41 anos, fez um cardápio de treino e quer mostrar a uma dona de lanchonete', says:'Usei o nome e a logo da Pastelaria Japa, que é famosa aqui no bairro. Fica mais convincente.',
          q:'O que ele deveria fazer?',
          opts:[
            {t:'Manter, porque é só um exemplo e ninguém vai reclamar.', ok:false, why:'Usar marca real sem autorização pode enganar quem vê e gerar problema com o dono da pastelaria.'},
            {t:'Não mostrar nada, porque ainda não tem clientes reais.', ok:false, why:'Uma amostra honesta é útil justamente para quem ainda não tem clientes.'},
            {t:'Trocar por um negócio fictício, com nome inventado, e identificar a peça como projeto de treino.', ok:true, why:'A amostra continua mostrando a habilidade dele, sem usar marca de terceiros nem enganar ninguém.'}
          ]}
      ]},
    { id:'1.7', title:'Olhar a concorrência para se diferenciar, sem copiar', min:14,
      body:[
        `<div class="card analogy"><h3>🔭 A volta na feira antes de montar a banca</h3><p>O feirante novo não monta a banca e sai gritando preço. Antes, dá uma volta na feira: vê quem vende o mesmo, quanto cobra, onde a fila é grande e do que os fregueses reclamam ("o tomate daquela banca vem sempre amassado"). Ele não copia a banca do vizinho: procura o espaço que ninguém está ocupando bem. Olhar a concorrência é dar essa volta na feira antes de oferecer o seu serviço.</p></div>`,
        `<div class="term"><b>Concorrente</b> = quem resolve o mesmo problema para o mesmo cliente, inclusive o "sobrinho que faz de graça" ou o próprio dono fazendo sozinho. <b>Lacuna</b> = uma necessidade que os concorrentes atendem mal ou não atendem. <b>Informação pública</b> = o que qualquer pessoa vê: perfis, páginas, avaliações e anúncios.</div>`,
        `<div class="card"><h3>Exemplo resolvido: a Bruna e os cardápios digitais</h3><p>A Bruna validou que lanchonetes do bairro sofrem com cardápio desatualizado. Antes de montar a oferta, ela observou 5 concorrentes, só com informação pública: perfis de quem oferece o serviço, avaliações de clientes e o que os donos de lanchonete contaram nas conversas.</p>
          <div class="tw"><table class="tbl"><tr><th>Concorrente</th><th>O que entrega</th><th>Preço visível</th><th>Reclamação comum</th></tr><tr><td>Agência do centro</td><td>Cardápio, site e redes</td><td>Só sob consulta</td><td>"Caro e demorado para mudar um preço"</td></tr><tr><td>Freelancer A</td><td>Cardápio em PDF bonito</td><td>Baixo</td><td>"Para mudar o preço, tenho que pedir e pagar de novo"</td></tr><tr><td>Aplicativo de cardápio</td><td>Sistema pronto</td><td>Mensalidade</td><td>"Complicado, desisti"</td></tr><tr><td>Sobrinho do dono</td><td>Arte no celular</td><td>De graça</td><td>"Some quando eu preciso"</td></tr><tr><td>O próprio dono</td><td>Foto do quadro de giz</td><td>Zero</td><td>"Os clientes perguntam tudo no WhatsApp"</td></tr></table></div>
          <p>O padrão salta aos olhos: quase ninguém deixa o dono <b>atualizar o preço sozinho</b>. Essa é a lacuna.</p></div>`,
        `<div class="flows"><div class="flow old"><h4>❌ Oferta antes da pesquisa</h4><p>"Faço cardápio digital bonito e barato." Problemas: é igual ao freelancer A, compete só por preço e não resolve a reclamação que mais apareceu.</p></div><div class="flow new"><h4>✅ Oferta depois da pesquisa</h4><p>"Cardápio digital para lanchonetes do bairro, que você mesmo atualiza pelo celular. Entrego com uma aula de 20 minutos, em 5 dias úteis." Diferencial verdadeiro, ligado a uma dor real.</p></div></div>`,
        `<div class="card"><h3>O passo a passo</h3><ol class="golden"><li><span>Liste de 3 a 5 concorrentes, incluindo as alternativas "caseiras" (o dono, o parente, a planilha de papel).</span></li><li><span>Para cada um, anote só o que é público: o que entrega, preço quando aparece, prazo e o que os clientes elogiam ou reclamam.</span></li><li><span>Procure o que se repete nas reclamações: ali costuma estar a lacuna.</span></li><li><span>Escreva um diferencial que você consegue cumprir de verdade e que responda a essa lacuna.</span></li></ol></div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><p><b>Copiar textos, artes ou a página de um concorrente:</b> além de antiético, pode violar direitos autorais, e o cliente percebe. Inspire-se na estrutura, crie o seu conteúdo. <b>Fingir ser cliente para arrancar material ou propostas:</b> use o que é público e o que você ouviu nas conversas honestas. <b>Achar ótimo não ter concorrente nenhum:</b> às vezes é sinal de que ninguém paga por aquilo; volte às conversas de validação. <b>Competir só por preço:</b> sempre haverá alguém mais barato, inclusive o "de graça". <b>Falar mal dos outros:</b> fale do que você faz bem.</p></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez (cerca de 5 minutos)</h3><p>Use o <b>Google Gemini</b> como parceiro de organização, não como fonte de dados:</p><ol class="golden"><li><span>Escreva, com as suas palavras, o que você observou de 3 concorrentes do seu nicho (sem nomes de pessoas).</span></li><li><span>Peça que ele organize em uma tabela e que te faça perguntas sobre o que ficou faltando.</span></li><li><span>Desconfie de preços ou fatos sobre empresas que ele trouxer por conta própria: a IA pode inventar. Vale o que você viu.</span></li><li><span>Escreva você mesmo uma frase de diferencial que responda à lacuna que mais se repetiu.</span></li></ol><p>🔒 Não cole conversas privadas, prints com telefone nem dados de pessoas com quem você conversou.</p></div>`
      ],
      ch:[
        { who:'Fábio, 30 anos, quer oferecer posts para pet shops', says:'Achei uma social media que faz posts lindos para pet shops. Vou copiar as legendas e as artes dela, só trocando o nome, e cobrar menos.',
          q:'Qual é o melhor caminho?',
          opts:[
            {t:'Copiar e cobrar menos, porque assim ele já começa com um portfólio bonito.', ok:false, why:'Copiar trabalho alheio é antiético, pode violar direitos autorais e não mostra a habilidade real dele.'},
            {t:'Observar o que ela entrega e do que os clientes de pet shop reclamam, e criar uma oferta própria que responda a uma lacuna.', ok:true, why:'A concorrência serve para achar espaço livre, não para copiar. Um diferencial próprio é mais difícil de imitar.'},
            {t:'Desistir, porque já existe alguém muito bom no nicho.', ok:false, why:'Ter concorrente costuma indicar que existe demanda. O caminho é se diferenciar, não desistir.'}
          ]},
        { who:'Camila, 27 anos, pesquisou serviços de agenda para salões', says:'Nas avaliações e conversas, quase todas as donas de salão reclamam que o sistema que usam é complicado e ninguém ensina a mexer.',
          q:'Como ela pode usar essa descoberta?',
          opts:[
            {t:'Ignorar, porque reclamação de cliente dos outros não é problema dela.', ok:false, why:'Reclamação repetida dos concorrentes é exatamente a lacuna que pode virar diferencial.'},
            {t:'Oferecer o mesmo sistema complicado, só que mais barato.', ok:false, why:'Mais barato não resolve a dor que mais apareceu: a dificuldade de uso.'},
            {t:'Incluir na oferta uma configuração simples e um treino curto para a dona e a equipe, e dizer isso com clareza.', ok:true, why:'Ela transforma a reclamação repetida em um diferencial verdadeiro e cumprível.'}
          ]},
        { who:'Otávio, 35 anos, não achou ninguém oferecendo planilhas para borracharias na cidade', says:'Ninguém faz isso aqui! Vou investir em site e logo amanhã, porque o mercado é todo meu.',
          q:'O que ele deveria fazer antes de investir?',
          opts:[
            {t:'Investir logo, antes que alguém tenha a mesma ideia.', ok:false, why:'Ausência de concorrentes não prova demanda. Ele pode gastar num serviço que ninguém paga.'},
            {t:'Conferir com borracheiros se eles têm o problema, como resolvem hoje e se já gastaram com isso.', ok:true, why:'Sem concorrente, a validação com pessoas reais fica ainda mais importante: pode haver um motivo para o espaço estar vazio.'},
            {t:'Mudar de nicho imediatamente, porque sem concorrente não existe mercado.', ok:false, why:'Também não dá para concluir isso sem conversar. O espaço vazio pode ser oportunidade ou falta de demanda.'}
          ]}
      ]},
    { id:'1.8', title:'Seguir, ajustar ou trocar: decidir com o que você aprendeu', min:14,
      body:[
        `<div class="card analogy"><h3>🚦 O GPS que recalcula a rota</h3><p>O motorista de aplicativo não insiste na rua bloqueada só porque já tinha decidido passar por ela, e também não volta para casa no primeiro trânsito. O GPS olha a situação real e diz: siga, desvie ou mude o caminho. Depois das conversas e da amostra, você tem dados reais na mão. Agora é hora de recalcular a rota com eles, e não com o entusiasmo ou o medo.</p></div>`,
        `<div class="term"><b>Evidência</b> = algo que você viu ou ouviu, e não algo que imagina. <b>Sinal de compra</b> = pedir preço, perguntar quando você começa, indicar alguém. <b>Seguir</b> = manter serviço e nicho. <b>Ajustar</b> = mudar o formato ou o foco, mantendo a dor. <b>Trocar</b> = escolher outra ideia da sua lista.</div>`,
        `<div class="card"><h3>Exemplo resolvido: o Renan e as academias</h3><p>O Renan queria fazer posts para academias de bairro. Conversou com 5 donos e fez uma amostra. Primeiro ele decidiu "no sentimento": "todo mundo achou legal, vou seguir". Depois montou a tabela de evidências:</p>
          <div class="tw"><table class="tbl"><tr><th>Evidência</th><th>Resultado</th><th>O que indica</th></tr><tr><td>Contaram um caso concreto com posts</td><td>1 de 5</td><td>Dor fraca</td></tr><tr><td>Já gastaram tempo ou dinheiro com posts</td><td>1 de 5</td><td>Pouca prioridade</td></tr><tr><td>Reclamaram de mensalidade atrasada e de cobrar aluno pelo WhatsApp</td><td>4 de 5</td><td>Dor forte, que ele não procurava</td></tr><tr><td>Sinal de compra</td><td>2 pediram "você faz isso das cobranças?"</td><td>Interesse real</td></tr><tr><td>Amostra de posts</td><td>Levou 6 h e ele gostou de fazer</td><td>Sabe e gosta, mas a dor é outra</td></tr></table></div>
          <p><b>Decisão:</b> ajustar. Mesmo nicho, outra dor: mensagens e uma planilha simples para lembrar e cobrar mensalidades com educação. Ele faz uma nova amostra curta e volta a 2 donos para mostrar.</p></div>`,
        `<div class="card"><h3>Uma regra simples para decidir</h3><ol class="golden"><li><span><b>Seguir</b> quando a maioria das pessoas (por exemplo, 3 de 5) conta casos concretos, já tentou resolver e aparece ao menos um sinal de compra.</span></li><li><span><b>Ajustar</b> quando a dor existe, mas é outra, ou o formato não serve (preço, prazo, jeito de entregar).</span></li><li><span><b>Trocar</b> quando quase ninguém lembra de um caso concreto ou quando a amostra mostrou que você detesta o trabalho.</span></li><li><span>Defina um limite antes de começar: por exemplo, 3 semanas e nenhum gasto grande até a decisão.</span></li></ol></div>`,
        `<div class="why-chain"><b>Por que decidir por evidência?</b> Porque elogio é educação, não compromisso. Sem tabela, você ouve o que quer ouvir. Ouvindo o que quer, insiste numa ideia fraca. Insistindo, gasta meses e dinheiro. Com a tabela, os mesmos 5 encontros viram uma decisão clara e rápida.</div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><p><b>Decidir pelo "achei legal":</b> conte só casos, tentativas e sinais de compra. <b>Trocar de ideia a cada "não":</b> um não é uma pessoa; olhe o conjunto. <b>Insistir por apego</b> porque já contou para todo mundo: mudar de rota com base em dados é maturidade, não fracasso. <b>Gastar com logo, site ou equipamento antes de decidir:</b> a decisão vem antes do investimento.</p></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez (cerca de 5 minutos)</h3><p>Use o <b>Tally</b> (o formulário de registro do módulo):</p><ol class="golden"><li><span>Acrescente ao seu formulário um campo "contou caso concreto? (sim/não)" e outro "sinal de compra? (qual)".</span></li><li><span>Registre ou atualize as conversas que já fez, uma resposta por pessoa.</span></li><li><span>Abra a visão de respostas e conte quantas vezes cada dor apareceu.</span></li><li><span>Escreva sua decisão (seguir, ajustar ou trocar) e o motivo em duas linhas.</span></li></ol><p>🔒 Use só o primeiro nome ou um apelido; não registre telefone, endereço nem informações sensíveis de quem conversou com você.</p></div>`
      ],
      ch:[
        { who:'Sueli, 44 anos, testou organizar pedidos de confeitarias', says:'Das 5 confeiteiras, 4 me contaram um pedido perdido no último mês, 3 já tentaram caderno e planilha, e uma perguntou quanto eu cobraria.',
          q:'Qual é a decisão mais coerente?',
          opts:[
            {t:'Trocar de ideia, porque uma pessoa não demonstrou interesse.', ok:false, why:'Um caso isolado não muda o conjunto. As evidências da maioria apontam para uma dor real.'},
            {t:'Seguir com o serviço, porque há casos concretos, tentativas anteriores e um sinal de compra.', ok:true, why:'É exatamente o padrão que justifica seguir: dor repetida, gente que já tentou resolver e alguém perguntando preço.'},
            {t:'Fazer mais 30 conversas antes de decidir qualquer coisa.', ok:false, why:'Mais conversas ajudam, mas ela já tem evidência suficiente para dar o próximo passo com uma amostra ou piloto.'}
          ]},
        { who:'Wagner, 29 anos, queria fazer sites para oficinas', says:'Os mecânicos não ligaram para site, mas quase todos reclamaram que perdem orçamentos anotados em papel. Já gastei com domínio e logo do meu serviço de sites.',
          q:'O que ele deveria fazer?',
          opts:[
            {t:'Insistir nos sites, porque já investiu dinheiro.', ok:false, why:'Dinheiro gasto não volta por insistir. Decidir pelo que já gastou leva a gastar ainda mais numa ideia fraca.'},
            {t:'Desistir de oficinas e procurar outro nicho do zero.', ok:false, why:'O nicho mostrou uma dor forte. Jogar fora essa descoberta seria desperdício.'},
            {t:'Ajustar: manter o nicho e testar um serviço para organizar orçamentos, com uma amostra curta.', ok:true, why:'A dor apareceu com clareza no mesmo nicho. Ajustar o formato aproveita o que ele aprendeu.'}
          ]},
        { who:'Lívia, 31 anos, fez a amostra de edição de vídeos curtos para clínicas', says:'Havia demanda, mas levei 9 horas, detestei cada minuto e passei a semana adiando. As pessoas gostaram do resultado.',
          q:'Como ela deve pesar isso?',
          opts:[
            {t:'Considerar trocar para outra ideia da lista que ela goste de fazer, porque não gostar do trabalho costuma levar ao abandono.', ok:true, why:'Demanda sem gosto pelo trabalho vira adiamento e queda de qualidade. O critério "gosto de fazer" também é evidência.'},
            {t:'Seguir de qualquer jeito, porque a demanda é o único critério que importa.', ok:false, why:'Ela mesma registrou que adiou a semana inteira. Um serviço que você detesta raramente se sustenta.'},
            {t:'Esconder dos clientes que leva 9 horas e cobrar como se levasse 2.', ok:false, why:'Além de não resolver o problema do gosto, cobrar por 2 horas o que leva 9 é trabalhar no prejuízo.'}
          ]}
      ]},
    { id:'1.6', title:'Projeto: seu mapa de habilidades e o serviço escolhido', min:30,
      body:[
        `<div class="card"><p>Agora é com você. Neste projeto você vai sair do "acho que poderia fazer alguma coisa" para uma escolha concreta, testada e com motivos. Use o que aprendeu: as três listas, os cinco critérios, a validação sem induzir, a amostra cronometrada e a frase de posicionamento. A IA pode ajudar a gerar ideias e revisar textos, mas as notas, as conversas, a amostra e a decisão final são suas.</p></div>`
      ],
      projeto: {
        entrega: 'Um documento com o seu mapa de habilidades, a tabela de notas das ideias, o resumo de conversas com pessoas do nicho, o registro da amostra cronometrada e a frase de posicionamento escolhida.',
        passos: [
          'Liste pelo menos 10 habilidades (trabalho, casa, hobbies e o que pedem para você) e pelo menos 5 problemas reais que você observou em pequenos negócios ou pessoas ao redor; cruze as listas e escolha de 3 a 5 ideias.',
          'Dê notas de 1 a 5 a cada ideia nos cinco critérios (sei, gosto, problema claro, pagam, acesso), some e escreva por que escolheu uma delas.',
          'Converse com pelo menos 3 pessoas do nicho escolhido usando perguntas abertas e anote o que ouviu, com as palavras delas.',
          'Faça uma amostra do serviço para um negócio fictício, cronometre cada etapa e registre o tempo real, as lacunas e onde a IA ajudou ou atrapalhou.',
          'Escreva a frase "Eu ajudo [NICHO] a [RESULTADO] com [DIFERENCIAL]" com um diferencial honesto e registre como as pessoas a entenderam.'
        ],
        checklist: [
          'Minhas listas têm habilidades práticas, não só as de diploma.',
          'A escolha tem notas e um motivo escrito, inclusive sobre gostar de fazer.',
          'Conversei com pessoas reais sem perguntas indutoras e anotei casos concretos.',
          'Fiz a amostra cronometrada, identificada como projeto de treino, e anotei o tempo real.',
          'Minha frase tem nicho, resultado e um diferencial verdadeiro, sem promessa de ganhos.'
        ],
        minimo: 380
      } }
  ]},
  { id:2, icon:'📦', title:'Montar a oferta', sub:'Escopo, entrega e preço', lessons:[
    { id:'2.1', title:'Escopo, entregáveis e prazo', min:10,
      body:[
        `<div class="card analogy"><h3>📦 A caixa de bombons com a lista na tampa</h3><p>A lista diz exatamente o que há dentro. Ninguém abre esperando 24 e encontra 12. A oferta deve deixar claro o que o cliente recebe, quando recebe e o que fica de fora.</p></div>`,
        `<div class="term"><b>Escopo</b> = o que está incluído no serviço e o que não está. <b>Entregável</b> = algo concreto que o cliente recebe, como um documento, uma arte, uma planilha ou um site. <b>Prazo</b> = o tempo combinado para a entrega. <b>Revisão</b> = uma rodada de ajustes depois da primeira entrega.</div>`,
        `<div class="card"><h3>A oferta em um parágrafo</h3><p>"Eu ajudo [NICHO] a [RESULTADO]. Entrego [ENTREGÁVEIS] em [PRAZO]. Estão incluídas [N] revisões. Não está incluído [LIMITE]."</p><p>Exemplo: "Eu ajudo salões a responder clientes mais rápido. Entrego 12 mensagens prontas para WhatsApp, com guia de uso, em 5 dias úteis. Está incluída 1 rodada de ajustes. Não está incluído o envio das mensagens nem a gestão do WhatsApp."</p><p>Quanto mais claro, menos desentendimento. Use palavras simples e fale do resultado que o cliente entende, e não de tecnologia. "Planilha com fórmulas automatizadas em nuvem" diz menos à dona da confeitaria do que "uma planilha no celular que mostra os pedidos da semana".</p></div>`,
        `<div class="card"><h3>Entregável bom é contável</h3><p>Se o cliente não consegue conferir se recebeu, o entregável está vago. Compare:</p><div class="tw"><table class="tbl"><tr><th>Vago</th><th>Contável</th></tr><tr><td>"Cuido das suas redes"</td><td>"8 posts por mês, com legenda, entregues toda segunda"</td></tr><tr><td>"Organizo seu negócio"</td><td>"Planilha de pedidos com 3 abas e 1 aula de 30 minutos"</td></tr><tr><td>"Melhoro seu atendimento"</td><td>"12 respostas prontas para as perguntas mais comuns"</td></tr></table></div></div>`,
        `<div class="card"><h3>Como definir o prazo sem se enforcar</h3><ol class="golden"><li><span>Estime quantas horas o trabalho leva de verdade. Se nunca fez, faça um teste para você mesmo e cronometre.</span></li><li><span>Some o tempo de esperar o cliente responder, mandar fotos ou informações.</span></li><li><span>Acrescente uma folga para imprevistos.</span></li><li><span>Diga em dias úteis e a partir de quando começa a contar (ex.: "a partir do recebimento das fotos").</span></li></ol></div>`,
        `<div class="card"><h3>O "não está incluído" protege os dois lados</h3><p>Muita gente tem vergonha de escrever limites, achando que parece má vontade. É o contrário: limite claro mostra profissionalismo. Sem ele, um "só mais uma coisinha" vira dez, e você trabalha o dobro pelo mesmo preço. Com ele, quando o cliente pede algo a mais, você responde com tranquilidade: "isso não está no pacote, mas posso fazer à parte por tanto".</p><p>Peça à IA para revisar a oferta e apontar o que pode ser mal entendido, mas confira se cada item é algo que você realmente consegue entregar no prazo. Releia a oferta como se fosse o cliente mais apressado do bairro: ele entenderia o que recebe em 30 segundos?</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a caixa de bombons tem uma lista na tampa, e o que aconteceria se não tivesse.</div>`
      ],
      ch:[
        { who:'Elaine, 33 anos, está montando sua oferta', says:'Escrevi "faço o que o cliente precisar", sem prazo nem lista do que entrego. Assim ele fica livre para pedir.',
          q:'Qual é o problema?',
          opts:[
            {t:'Nenhum: liberdade total agrada ao cliente.', ok:false, why:'Sem limites, o cliente pede cada vez mais e a entrega nunca termina.'},
            {t:'Ela deveria cobrar bem mais caro pela liberdade.', ok:false, why:'O problema não é o preço, e sim a falta de escopo, de prazo e de entrega definidos.'},
            {t:'Falta definir o que entrega, em quanto tempo, quantas revisões e o que não está incluído.', ok:true, why:'Uma oferta com escopo, prazo e limites evita desentendimentos e mostra profissionalismo.'}
          ]},
        { who:'Dona Cida, dona de uma padaria, contratou posts com o Lucas', says:'Lucas, além dos 8 posts, você pode responder os comentários e fazer uns vídeos? É rapidinho.',
          q:'Como Lucas deve responder, se o combinado era só 8 posts?',
          opts:[
            {t:'Fazer tudo de graça, para não perder a cliente.', ok:false, why:'Aceitar tudo sem cobrar ensina a cliente que o escopo não vale e leva Lucas ao esgotamento.'},
            {t:'Lembrar com gentileza o que está no pacote e oferecer os itens extras à parte, com preço e prazo.', ok:true, why:'O escopo combinado dá base para uma conversa tranquila e abre espaço para um serviço adicional.'},
            {t:'Recusar seco e dizer que não é obrigação dele.', ok:false, why:'O limite está certo, mas a forma ríspida desgasta a relação. Dá para ser firme e gentil.'}
          ]},
        { who:'Wesley, 25 anos, oferece cardápio digital para lanchonetes', says:'Nunca fiz um cardápio desses. Vou prometer entrega em 1 dia para impressionar.',
          q:'Qual é a forma mais segura de definir o prazo?',
          opts:[
            {t:'Fazer um cardápio de teste, cronometrar, somar o tempo de espera pelas fotos do cliente e uma folga, e informar em dias úteis.', ok:true, why:'Prazo baseado em teste real e com folga é cumprível. Atrasar a primeira entrega custa mais do que um prazo maior.'},
            {t:'Manter 1 dia: se atrasar, ele explica depois.', ok:false, why:'Prometer sem saber o tempo real quase garante atraso, e atraso no primeiro trabalho prejudica a confiança.'},
            {t:'Não informar prazo nenhum, para não se comprometer.', ok:false, why:'Sem prazo, o cliente fica inseguro e a oferta parece amadora.'}
          ]}
      ]},
    { id:'2.2', title:'Como pensar o preço sem prometer ganhos', min:10,
      body:[
        `<div class="card analogy"><h3>💲 O preço do prato do dia</h3><p>O dono do restaurante soma ingredientes, tempo de cozinha, aluguel e uma margem, e olha o preço de pratos parecidos na região. Ele não chuta nem copia o vizinho sem pensar.</p></div>`,
        `<div class="term"><b>Custo</b> = o que você gasta para entregar, incluindo o seu tempo. <b>Valor</b> = o quanto o resultado vale para o cliente. <b>Margem</b> = o que sobra depois de cobrir os custos. <b>Valor da hora</b> = quanto você precisa receber por hora trabalhada para que o serviço valha a pena.</div>`,
        `<div class="card"><h3>Custo, valor e mercado</h3><ol class="golden"><li><span><b>Custo:</b> quantas horas você gasta e quanto vale a sua hora, somando ferramentas, transporte, internet e impostos.</span></li><li><span><b>Valor:</b> quanto o resultado ajuda o cliente (tempo economizado, menos clientes perdidos, mais organização).</span></li><li><span><b>Mercado:</b> o que se cobra por serviços parecidos na sua região e para o seu nicho.</span></li></ol></div>`,
        `<div class="card"><h3>Um cálculo de exemplo (números só para ilustrar)</h3><p>Imagine que você definiu que a sua hora precisa valer R$ 40 e que um pacote de mensagens para salão leva 6 horas, contando conversa inicial, criação, revisão e entrega. Isso dá R$ 240 de tempo. Some uma parte das ferramentas que você usa, o transporte até o salão e uma reserva para impostos. Esse é o seu piso: abaixo dele, você paga para trabalhar.</p><p>Depois olhe para cima: quanto isso vale para o salão? Se as mensagens economizam horas de atendimento por semana, o valor percebido pode ser maior que o piso. E compare com o mercado local: se ninguém na região cobra perto do seu preço, entenda por quê antes de decidir.</p><p>Os números do seu caso serão outros. O importante é o método: piso pelo custo, teto pelo valor, referência pelo mercado.</p></div>`,
        `<div class="card"><h3>Formas de cobrar</h3><div class="tw"><table class="tbl"><tr><th>Forma</th><th>Quando usar</th><th>Cuidado</th></tr><tr><td>Por projeto</td><td>Entrega com começo e fim claros</td><td>Escopo bem fechado</td></tr><tr><td>Por hora</td><td>Tarefas difíceis de prever</td><td>Registrar as horas com transparência</td></tr><tr><td>Mensalidade</td><td>Serviço contínuo, como posts semanais</td><td>Definir o que cabe no mês</td></tr></table></div></div>`,
        `<div class="card"><h3>Preço de piloto e honestidade</h3><p>No início, um preço de piloto, mais baixo e combinado com feedback e depoimento em troca, pode ajudar, desde que seja dito claramente que é uma condição especial e temporária, com o preço normal já informado. Não esconda que o preço vai subir.</p><p>E nunca prometa quanto o cliente vai ganhar nem quanto você vai faturar. Ninguém pode garantir isso. Prometa o que você entrega. A IA pode ajudar a montar a conta e a pesquisar referências, mas os números do seu custo vêm da sua realidade. Revise o preço depois de cada um dos primeiros trabalhos: o tempo real mostra se a conta estava certa.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o dono do restaurante soma tudo o que gasta antes de decidir o preço do prato.</div>`
      ],
      ch:[
        { who:'Júlio, 26 anos, está definindo o preço', says:'Vou cobrar o que me der na cabeça, sem fazer nenhuma conta.',
          q:'Qual é a melhor abordagem?',
          opts:[
            {t:'Cobrar sem conta, porque o cliente vai aceitar o que for.', ok:false, why:'Sem conta, ele pode cobrar abaixo do custo e sair no prejuízo.'},
            {t:'Copiar o preço de quem cobra mais caro na internet.', ok:false, why:'Outros profissionais têm outro nível, outro público e outros custos.'},
            {t:'Calcular o custo da sua hora, considerar o valor para o cliente, pesquisar o mercado local e ajustar com a experiência.', ok:true, why:'O preço baseado em custo, valor e mercado é justo para você e para o cliente.'}
          ]},
        { who:'Sabrina, 30 anos, cobra R$ 150 por um pacote de posts para pet shop', says:'Fiz as contas depois: gasto umas 8 horas, tenho custo de ferramenta e de ônibus até o cliente. Sobra quase nada.',
          q:'O que a conta dela revela?',
          opts:[
            {t:'Que ela está abaixo do piso de custo e precisa rever o preço, o escopo ou o tempo gasto.', ok:true, why:'Se o preço não cobre horas e custos, ela paga para trabalhar. Ajustar preço ou escopo é necessário.'},
            {t:'Que está tudo certo, porque o cliente está satisfeito.', ok:false, why:'Satisfação do cliente não paga as contas dela. Um serviço que dá prejuízo não se sustenta.'},
            {t:'Que ela deve aceitar mais clientes pelo mesmo preço para compensar.', ok:false, why:'Mais clientes abaixo do custo só aumentam o prejuízo e o cansaço.'}
          ]},
        { who:'Otávio, 34 anos, vai oferecer preço de piloto a uma clínica de fisioterapia', says:'Vou cobrar metade e não falar nada. Depois, no segundo serviço, cobro o dobro e ela que se acostume.',
          q:'Qual é o jeito honesto de usar o preço de piloto?',
          opts:[
            {t:'Fazer de graça para sempre, para garantir a cliente.', ok:false, why:'Trabalho gratuito permanente não valida o preço nem se sustenta.'},
            {t:'Esconder o desconto para ela achar que é o preço normal.', ok:false, why:'A surpresa no segundo serviço quebra a confiança e pode fazer a cliente sair.'},
            {t:'Dizer por escrito que é uma condição especial de piloto, informar o preço normal e combinar feedback e depoimento em troca.', ok:true, why:'Transparência sobre o desconto e o preço futuro mantém a confiança e deixa claro o que cada lado ganha.'}
          ]}
      ]},
    { id:'2.3', title:'O combinado escrito: revisões, sinal, prazos e limites', min:10,
      body:[
        `<div class="card analogy"><h3>🤝 O fio do bigode e a mensagem salva</h3><p>Antigamente dizia-se que a palavra valia como "um fio do bigode". Hoje, com tanta conversa por áudio e mensagem, a memória falha dos dois lados. O combinado escrito não é desconfiança: é a lembrança que os dois consultam quando surge a dúvida "mas a gente não tinha falado que...?".</p></div>`,
        `<div class="term"><b>Combinado escrito</b> = um texto simples, por mensagem, e-mail ou documento, com o que foi acertado. <b>Sinal</b> = parte do pagamento feita antes de começar. <b>Rodada de revisão</b> = uma vez em que o cliente pede ajustes, todos juntos. <b>Aceite</b> = a confirmação do cliente de que concorda com o combinado.</div>`,
        `<div class="card"><h3>O que não pode faltar</h3><ol class="golden"><li><span><b>Quem e o quê:</b> seu nome, o nome do cliente e o serviço em uma frase.</span></li><li><span><b>Entregáveis:</b> a lista contável do que será entregue.</span></li><li><span><b>Prazo:</b> em dias úteis, contado a partir de quê (pagamento do sinal, recebimento de fotos ou informações).</span></li><li><span><b>Revisões:</b> quantas rodadas estão incluídas e como pedir (de preferência, todos os ajustes de uma vez).</span></li><li><span><b>Pagamento:</b> valor, forma, sinal e quando se paga o restante.</span></li><li><span><b>O que não está incluído:</b> os limites claros.</span></li><li><span><b>Mudanças:</b> como funciona se o cliente pedir algo novo no meio (novo orçamento).</span></li><li><span><b>Aceite:</b> peça que o cliente responda "de acordo".</span></li></ol></div>`,
        `<div class="card"><h3>Exemplo de combinado por WhatsApp</h3><p>"Oi, Dona Marta! Resumindo o que combinamos para o Salão da Marta: vou entregar 12 mensagens prontas para WhatsApp e um guia de uso em PDF. Prazo: 5 dias úteis a partir do envio das informações do salão. Inclui 1 rodada de ajustes: você me manda todos os pontos juntos. Valor: R$ X, sendo metade de sinal para começar e metade na entrega. Não está incluído o envio das mensagens nem a criação de artes. Se surgir algo novo, faço um orçamento à parte. Pode me responder com "de acordo"?"</p></div>`,
        `<div class="card"><h3>Por que pedir sinal</h3><p>O sinal confirma o compromisso dos dois lados. Ele reduz o risco de você trabalhar dias e o cliente sumir, e mostra que o cliente leva o serviço a sério. Diga o valor do sinal com naturalidade, como parte do processo. Se o cliente desistir depois que você começou, o combinado deve dizer o que acontece com o sinal: deixe isso escrito antes, nunca invente na hora.</p></div>`,
        `<div class="card"><h3>Erros comuns e cuidados</h3><p>Começar só com um áudio. Aceitar "revisões ilimitadas". Não dizer quando o prazo começa a contar. Mudar o preço no meio sem conversar. Para serviços maiores ou contínuos, vale procurar um modelo de contrato e, se tiver dúvida, conversar com um contador ou advogado. A IA pode ajudar a transformar a conversa num resumo organizado, mas leia cada linha antes de enviar: o combinado é seu, não da ferramenta.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que os amigos combinam as regras do jogo antes de começar a partida, e não no meio dela.</div>`
      ],
      ch:[
        { who:'Gisele, 28 anos, fechou um cardápio digital com uma hamburgueria', says:'O dono mandou um áudio dizendo "fechado, pode começar". Vou começar sem mandar nada por escrito.',
          q:'O que ela deveria fazer antes de começar?',
          opts:[
            {t:'Começar logo, porque pedir confirmação escrita pode ofender.', ok:false, why:'Áudio é fácil de esquecer ou interpretar diferente. O resumo escrito evita brigas depois.'},
            {t:'Exigir um contrato de 10 páginas com firma reconhecida.', ok:false, why:'Para um serviço pequeno, isso é exagero e assusta o cliente. Um resumo claro por mensagem resolve.'},
            {t:'Enviar um resumo por mensagem com entregáveis, prazo, revisões, valor, sinal e limites, e pedir que ele responda "de acordo".', ok:true, why:'Um combinado curto e aceito por escrito protege os dois lados sem burocracia.'}
          ]},
        { who:'Roberto, dono de uma loja de material de construção', says:'Já é a sexta vez que peço ajuste no folheto. Agora quero trocar a cor de novo. Você disse que fazia ajustes, não disse?',
          q:'O que teria evitado essa situação?',
          opts:[
            {t:'Um combinado com número de rodadas de revisão definido e a orientação de mandar todos os ajustes juntos.', ok:true, why:'Rodadas definidas organizam os pedidos e deixam claro quando ajustes extras passam a ser cobrados.'},
            {t:'Nunca aceitar nenhum ajuste.', ok:false, why:'Revisões fazem parte de um bom serviço. O problema é não ter limite combinado.'},
            {t:'Fazer o folheto mais rápido, para dar tempo de ajustar à vontade.', ok:false, why:'Velocidade não resolve a falta de limite: os pedidos continuariam sem fim.'}
          ]},
        { who:'Patrícia, 37 anos, organiza a agenda de uma personal trainer', says:'No meio do trabalho, a cliente pediu para eu também montar a planilha financeira dela. Vou encaixar sem falar nada.',
          q:'Qual é a melhor conduta?',
          opts:[
            {t:'Encaixar sem falar e atrasar a entrega original, se precisar.', ok:false, why:'Assumir trabalho novo em silêncio atrasa o combinado e gera trabalho sem pagamento.'},
            {t:'Dizer que o pedido novo não estava no combinado e propor um orçamento à parte, com novo prazo.', ok:true, why:'Mudança de escopo pede novo combinado. Isso mantém o prazo original e valoriza o trabalho extra.'},
            {t:'Cancelar o serviço inteiro, porque a cliente quebrou o combinado.', ok:false, why:'Pedir algo novo é normal. A resposta certa é negociar, não romper.'}
          ]}
      ]},
    { id:'2.4', title:'Organizar a entrega: checklist, IA com revisão humana e dados do cliente', min:10,
      body:[
        `<div class="card analogy"><h3>✈️ O checklist do piloto de avião</h3><p>Mesmo com milhares de horas de voo, o piloto confere a lista antes de decolar. Não é falta de experiência: é que a memória falha justamente no dia corrido. Na sua entrega é igual: um checklist simples evita esquecer o arquivo, o guia de uso ou aquela revisão de nomes.</p></div>`,
        `<div class="term"><b>Fluxo de entrega</b> = as etapas que você segue do "fechado" até o "entregue". <b>Revisão humana</b> = você conferir, com atenção, tudo o que a IA produziu antes de mandar ao cliente. <b>Dados pessoais</b> = informações que identificam alguém, como nome, telefone, endereço, CPF ou fotos.</div>`,
        `<div class="card"><h3>Um fluxo de entrega em cinco etapas</h3><ol class="golden"><li><span><b>Coletar:</b> peça ao cliente, de uma vez, tudo o que você precisa (fotos, preços, horários, logotipo). Uma lista de pedidos economiza dias.</span></li><li><span><b>Produzir:</b> faça a primeira versão, com ou sem ajuda da IA.</span></li><li><span><b>Revisar:</b> confira com o checklist antes de mostrar.</span></li><li><span><b>Apresentar e ajustar:</b> envie, explique e receba a rodada de ajustes.</span></li><li><span><b>Entregar e encerrar:</b> mande a versão final, o guia de uso e confirme que o cliente recebeu.</span></li></ol></div>`,
        `<div class="card"><h3>IA como assistente, você como responsável</h3><p>A IA acelera rascunhos de textos, ideias de posts, estruturas de planilha. Mas ela erra: inventa informações, troca preços, usa um tom que não combina com o cliente, escreve "promoção imperdível" para uma clínica que não pode fazer esse tipo de propaganda. Quem assina a entrega é você. Antes de enviar, confira:</p><div class="tw"><table class="tbl"><tr><th>Conferir</th><th>Exemplo de erro comum</th></tr><tr><td>Fatos e números</td><td>Preço, horário ou endereço errados</td></tr><tr><td>Tom de voz</td><td>Linguagem formal demais para uma barbearia</td></tr><tr><td>Promessas</td><td>"Resultado garantido", "cura", "o melhor da cidade"</td></tr><tr><td>Português</td><td>Erros de digitação e frases estranhas</td></tr><tr><td>Originalidade</td><td>Imagens ou textos copiados de terceiros</td></tr></table></div></div>`,
        `<div class="card"><h3>Dados do cliente: cuidado redobrado</h3><p>Ao organizar a agenda de um salão ou a lista de pacientes de uma clínica, você terá acesso a nomes, telefones e, às vezes, informações de saúde. Esses dados pertencem às pessoas, e a lei brasileira de proteção de dados (LGPD) exige cuidado com eles. Regras práticas: peça só o que precisa; não cole dados pessoais de clientes em ferramentas de IA (troque por nomes fictícios ou apague); guarde arquivos em lugar com senha; não compartilhe com terceiros; e apague ou devolva tudo ao fim do serviço, se foi o combinado. Na dúvida sobre o que é permitido, pergunte ao cliente e procure orientação.</p></div>`,
        `<div class="card"><h3>Ferramentas simples bastam</h3><p>Uma pasta por cliente, um documento com o checklist e uma planilha de controle (cliente, etapa, prazo, pagamento) já organizam muito. Não precisa de sistema caro para começar: precisa de constância. Ao fim de cada entrega, acrescente ao checklist o item que você quase esqueceu: ele fica melhor a cada cliente.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o piloto confere a lista antes de decolar, mesmo sabendo voar muito bem.</div>`
      ],
      ch:[
        { who:'Bruno, 27 anos, faz legendas de posts para uma clínica odontológica', says:'Pedi à IA 8 legendas e vou mandar direto para a clínica. Ela escreve melhor que eu.',
          q:'O que ele deveria fazer antes de enviar?',
          opts:[
            {t:'Revisar cada legenda: fatos, preços, tom, promessas proibidas para a área de saúde e português.', ok:true, why:'A IA erra e não conhece as regras do cliente. A revisão humana é parte do serviço que ele vende.'},
            {t:'Mandar direto, porque a responsabilidade é da IA se houver erro.', ok:false, why:'Quem entrega e assina o trabalho é o Bruno. Erro na entrega é responsabilidade dele perante o cliente.'},
            {t:'Não usar IA nunca, porque ela sempre erra.', ok:false, why:'A IA pode ajudar muito nos rascunhos. O problema é usar sem revisão, não usar.'}
          ]},
        { who:'Michele, 32 anos, organiza a lista de clientes de um salão', says:'Vou colar a planilha com nome, telefone e aniversário de todas as clientes na IA e pedir mensagens personalizadas.',
          q:'Qual é a conduta mais cuidadosa?',
          opts:[
            {t:'Colar tudo, porque é mais rápido e ninguém vai saber.', ok:false, why:'Dados pessoais das clientes do salão merecem proteção. Expor em ferramentas sem necessidade é um risco e desrespeita a LGPD.'},
            {t:'Pedir à IA um modelo de mensagem com campos como [NOME], sem colar dados reais, e personalizar depois na ferramenta do próprio salão.', ok:true, why:'Assim ela aproveita a IA sem expor dados pessoais, seguindo o princípio de usar só o necessário.'},
            {t:'Publicar a lista num grupo para as colegas ajudarem a escrever.', ok:false, why:'Compartilhar dados de clientes com terceiros sem autorização é grave.'}
          ]},
        { who:'Leandro, 29 anos, atrasou a entrega de um cardápio para uma pizzaria', says:'Esperei 4 dias pelas fotos, depois pelos preços, depois pelo logo. Cada coisa veio num dia.',
          q:'O que melhoraria o fluxo nas próximas entregas?',
          opts:[
            {t:'Começar sem as informações e inventar os preços.', ok:false, why:'Inventar dados gera retrabalho e erros graves no cardápio.'},
            {t:'Aceitar que atrasos são normais e não avisar mais prazos.', ok:false, why:'Sem prazo, o cliente perde a confiança. O problema tem solução simples.'},
            {t:'Enviar logo no fechamento uma lista com tudo o que precisa e combinar que o prazo conta a partir do recebimento completo.', ok:true, why:'Coletar tudo de uma vez e amarrar o prazo ao recebimento evita esperas picadas e atrasos.'}
          ]}
      ]},
    { id:'2.5', title:'Apresentar a oferta e responder dúvidas sem pressão', min:10,
      body:[
        `<div class="card analogy"><h3>🔧 O mecânico que explica o orçamento</h3><p>Quando o mecânico mostra a peça gasta, explica o que vai trocar, quanto custa e quanto tempo leva, o cliente confia, mesmo que o valor não seja baixo. Quando ele só diz "dá tanto" e vira as costas, o cliente desconfia e vai pesquisar em outra oficina. Apresentar a oferta é explicar o orçamento com calma, não empurrar o serviço.</p></div>`,
        `<div class="term"><b>Apresentação da oferta</b> = a conversa ou mensagem em que você mostra ao cliente o que entrega, o prazo e o preço. <b>Objeção</b> = uma dúvida ou resistência do cliente, como "está caro" ou "vou pensar". <b>Ajuste de escopo</b> = mudar o que está incluído para caber no orçamento do cliente, em vez de simplesmente baixar o preço. <b>Pressão</b> = tática que força a decisão, como urgência falsa.</div>`,
        `<div class="card"><h3>Uma apresentação em quatro partes</h3><ol class="golden"><li><span><b>Retome o problema</b> com as palavras do cliente: "Você me contou que perde clientes porque demora a responder no sábado".</span></li><li><span><b>Mostre o que entrega:</b> entregáveis contáveis, prazo e revisões, de preferência com a amostra que você fez.</span></li><li><span><b>Diga o preço com tranquilidade</b>, a forma de pagamento e o sinal. Sem pedir desculpas pelo valor.</span></li><li><span><b>Convide para a decisão</b> e abra espaço para perguntas: "Faz sentido para você? Ficou alguma dúvida?".</span></li></ol></div>`,
        `<div class="card"><h3>As dúvidas mais comuns e como responder</h3><div class="tw"><table class="tbl"><tr><th>O cliente diz</th><th>Uma resposta honesta</th></tr><tr><td>"Está caro."</td><td>Pergunte com o que ele está comparando e, se precisar, ofereça uma versão menor: "Posso fazer 6 mensagens em vez de 12, por um valor menor".</td></tr><tr><td>"Vou pensar."</td><td>"Claro. Ficou alguma dúvida que eu possa esclarecer? Posso te procurar na quinta?"</td></tr><tr><td>"Meu sobrinho faz de graça."</td><td>Respeite e explique o que está incluído no seu serviço: prazo, revisão, guia de uso.</td></tr><tr><td>"Vou vender mais com isso?"</td><td>Seja honesto: o serviço ajuda numa parte do processo, mas ninguém pode garantir vendas.</td></tr></table></div></div>`,
        `<div class="card"><h3>Baixar preço x ajustar escopo</h3><p>Dar desconto no impulso, só porque o cliente hesitou, ensina que o seu preço é negociável sem critério e pode te levar abaixo do custo. O caminho mais saudável é ajustar o que está incluído: menos entregáveis, prazo mais longo, sem a aula de uso. Assim o preço continua coerente com o trabalho, e o cliente escolhe o que cabe no bolso dele.</p></div>`,
        `<div class="flows"><div class="flow old"><h4>❌ Venda com pressão</h4><p>"Só hoje com esse preço!", "Últimas vagas!" quando não é verdade, promessa de resultado garantido, mensagens insistentes todo dia.</p></div><div class="flow new"><h4>✅ Venda com clareza</h4><p>Explica o que entrega, diz o preço com calma, responde às dúvidas com honestidade e combina quando voltar a conversar.</p></div></div>`,
        `<div class="card"><h3>Ética na conversa</h3><p>Urgência falsa e promessa de ganho podem até fechar uma venda, mas destroem a confiança e a indicação, que são o que mais traz clientes para quem está começando. Um "não" respeitado hoje pode virar um cliente daqui a três meses. Você pode treinar a conversa com a IA, pedindo que ela faça o papel de um cliente desconfiado, mas a resposta que você dá ao cliente real precisa ser verdadeira.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a gente confia mais no mecânico que mostra a peça gasta do que no que só fala o preço.</div>`
      ],
      ch:[
        { who:'Dona Lúcia, dona de uma confeitaria, recebeu a oferta de um cardápio digital', says:'Achei caro. Não tenho esse dinheiro agora.',
          q:'Qual é a resposta mais saudável para quem oferece o serviço?',
          opts:[
            {t:'Dar 50% de desconto na hora para não perder a venda.', ok:false, why:'Desconto no impulso pode ficar abaixo do custo e ensina que o preço não tem critério.'},
            {t:'Encerrar a conversa, porque ela não valoriza o trabalho.', ok:false, why:'Uma objeção de preço é normal e pode ter solução. Desistir na primeira dúvida é perder uma chance.'},
            {t:'Perguntar o que caberia no orçamento e oferecer uma versão menor, como um cardápio com menos itens, por um valor menor.', ok:true, why:'Ajustar o escopo mantém o preço coerente com o trabalho e permite que a cliente escolha o que cabe no bolso.'}
          ]},
        { who:'Felipe, 29 anos, oferece posts para academias de bairro', says:'Vou escrever na proposta: "Promoção só até hoje, últimas 2 vagas!" Na verdade não tenho nenhum cliente ainda.',
          q:'O que ele deveria fazer?',
          opts:[
            {t:'Tirar a urgência falsa e apresentar com clareza o que entrega, o prazo e o preço, combinando quando volta a conversar.', ok:true, why:'Urgência inventada é enganosa e quebra a confiança. Clareza e acompanhamento educado funcionam melhor a longo prazo.'},
            {t:'Manter, porque todo mundo usa essa tática.', ok:false, why:'Mesmo comum, informação falsa é enganosa e prejudica a reputação quando o cliente percebe.'},
            {t:'Aumentar a pressão, mandando mensagem todo dia até a academia fechar.', ok:false, why:'Insistência excessiva afasta o cliente e queima a indicação.'}
          ]},
        { who:'Seu Arnaldo, dono de um pet shop, ouviu a apresentação da Bianca', says:'Gostei, mas vou pensar.',
          q:'Qual é a melhor resposta da Bianca?',
          opts:[
            {t:'Insistir que ele precisa decidir agora, senão o preço sobe.', ok:false, why:'Pressionar com ameaça de preço, sem que isso seja verdade, gera desconfiança.'},
            {t:'Agradecer, perguntar se ficou alguma dúvida e combinar um dia para retomar a conversa.', ok:true, why:'Respeitar o tempo do cliente e combinar um retorno mantém a porta aberta sem pressão.'},
            {t:'Não dizer nada e nunca mais procurar o Seu Arnaldo.', ok:false, why:'"Vou pensar" não é "não". Um retorno combinado é normal e esperado.'}
          ]}
      ]},
    { id:'2.7', title:'Pacotes: versão essencial, completa e extras', min:14,
      body:[
        `<div class="card analogy"><h3>🧱 O açaí de 300, 500 e 700 ml</h3><p>A loja de açaí não tem um copo só. Tem três tamanhos e uma lista de adicionais com preço na parede. Quem tem pouco dinheiro leva o pequeno e sai satisfeito; quem quer mais escolhe o grande; e ninguém precisa pedir desconto, porque cada um escolhe o que cabe no bolso. Pacotes fazem o mesmo pelo seu serviço.</p></div>`,
        `<div class="term"><b>Pacote</b> = um conjunto fechado de entregáveis, com prazo e preço. <b>Essencial</b> = a menor versão que ainda resolve o problema de verdade. <b>Completo</b> = a versão com mais itens para quem quer mais. <b>Extra</b> = item avulso, com preço já definido, para pedidos além do pacote.</div>`,
        `<div class="card"><h3>Exemplo resolvido: mensagens prontas para salões</h3><p><b>Antes:</b> a Tainá tinha um pacote único de R$ 330. Problemas: salões menores achavam caro e pediam desconto, ela cedia no impulso e ficava abaixo do custo; e os pedidos de "só mais uma mensagem" saíam de graça.</p><p><b>Depois:</b> ela usou o método da lição 2.2 para cada pacote. Números só para ilustrar: hora de R$ 40, R$ 15 de custos por trabalho (ferramentas e internet) e reserva de 10% para impostos e imprevistos (o seu percentual depende do seu caso; confirme com um contador).</p>
          <div class="tw"><table class="tbl"><tr><th>Pacote</th><th>O que inclui</th><th>Horas reais</th><th>Conta</th><th>Preço</th></tr><tr><td>Essencial</td><td>6 mensagens + guia em texto, 1 rodada de ajustes</td><td>4 h</td><td>(4 × 40 + 15) × 1,10 = 192,50</td><td>R$ 195</td></tr><tr><td>Completo</td><td>12 mensagens + guia + aula de 30 min pelo celular, 1 rodada de ajustes</td><td>7 h</td><td>(7 × 40 + 15) × 1,10 = 324,50</td><td>R$ 330</td></tr><tr><td>Extra: rodada de ajustes</td><td>Mais uma rodada, todos os pontos juntos</td><td>1 h</td><td>1 × 40 × 1,10 = 44</td><td>R$ 45</td></tr></table></div>
          <p>Agora, quando o salão diz "está caro", ela não dá desconto: mostra o Essencial. E quando pede "mais uma rodada", já existe preço.</p></div>`,
        `<div class="card"><h3>Regras para montar os seus pacotes</h3><ol class="golden"><li><span>No máximo 2 ou 3 pacotes. Mais que isso confunde e trava a decisão.</span></li><li><span>A diferença entre eles é de entregáveis contáveis, e não de "mais dedicação" ou "atendimento VIP".</span></li><li><span>O Essencial precisa resolver o problema de verdade. Pacote "isca", feito para ser ruim e empurrar o caro, é enganação.</span></li><li><span>Todo pacote, inclusive o menor, fica acima do seu piso de custo.</span></li><li><span>Os extras mais pedidos ganham preço publicado antes de alguém pedir.</span></li></ol></div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><p><b>Inflar o Completo</b> com itens que ninguém usa só para parecer valioso: ofereça o que os clientes pediram nas conversas. <b>Calcular só o Completo</b> e "chutar" o Essencial pela metade do preço: refaça a conta com as horas reais de cada um. <b>Pacotes com nomes bonitos e conteúdo vago</b> ("Bronze, Prata, Ouro") sem dizer o que está dentro. <b>Esquecer o prazo</b> de cada pacote: o Completo costuma levar mais dias.</p></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez (cerca de 5 minutos)</h3><p>Use o <b>Google Planilhas</b>, de preferência a planilha de preço que você já começou:</p><ol class="golden"><li><span>Crie uma coluna para cada pacote (Essencial e Completo) e uma linha para cada extra.</span></li><li><span>Preencha as horas com o tempo cronometrado na sua amostra, e não com o tempo que gostaria de levar.</span></li><li><span>Monte a fórmula você mesmo: horas × valor da hora + custos, depois a sua reserva.</span></li><li><span>Confira se algum pacote ficou abaixo do piso e escreva, em uma linha, o que diferencia um do outro.</span></li></ol><p>🔒 A planilha de preço não precisa de nenhum dado de cliente. Se usar um caso real como base, troque o nome por um apelido.</p></div>`
      ],
      ch:[
        { who:'Mateus, 26 anos, faz cardápios digitais', says:'Criei cinco pacotes: Bronze, Prata, Ouro, Platina e Diamante. A diferença é o nível de dedicação.',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Manter os cinco, porque mais opções agradam a todos.', ok:false, why:'Opções demais confundem o cliente e travam a decisão, ainda mais sem diferença clara.'},
            {t:'Reduzir para 2 ou 3 pacotes e diferenciar por entregáveis contáveis, como número de itens, aula de uso e prazo.', ok:true, why:'Poucos pacotes, com diferenças que o cliente consegue conferir, facilitam a escolha e evitam discussão depois.'},
            {t:'Trocar os nomes por outros mais chamativos.', ok:false, why:'O problema não é o nome, e sim a quantidade e a diferença vaga entre os pacotes.'}
          ]},
        { who:'Rosana, 38 anos, calculou o Completo em R$ 400 pelas horas reais', says:'Para o Essencial vou cobrar R$ 120, só para atrair. Mas ele leva 5 horas, e minha hora vale R$ 40.',
          q:'O que a conta mostra?',
          opts:[
            {t:'Que o Essencial fica abaixo do piso: só as horas já somam R$ 200. Ela precisa reduzir os entregáveis ou subir o preço.', ok:true, why:'5 × 40 = R$ 200 antes de custos e reserva. Pacote abaixo do piso significa pagar para trabalhar.'},
            {t:'Que está certo, porque o Essencial serve só para atrair clientes.', ok:false, why:'Se a maioria escolher o Essencial, ela trabalha no prejuízo. Todo pacote precisa cobrir o custo.'},
            {t:'Que ela deve tirar o Essencial e oferecer só o Completo.', ok:false, why:'Ter uma versão menor é útil para quem tem orçamento curto. O ajuste é na conta, não em eliminar a opção.'}
          ]},
        { who:'Seu Ademir, dono de uma barbearia, contratou o pacote Essencial de mensagens', says:'Ficou bom! Dá para fazer mais duas mensagens, para Dia dos Pais e Natal?',
          q:'Como responder do jeito mais profissional?',
          opts:[
            {t:'Fazer de graça, porque são só duas.', ok:false, why:'Extras sem cobrança viram hábito e desvalorizam o pacote que ele pagou.'},
            {t:'Dizer que só faz se ele trocar para o Completo.', ok:false, why:'Forçar a troca de pacote por um pedido pequeno soa como pressão. O extra existe para isso.'},
            {t:'Agradecer e informar o preço e o prazo do extra "mensagem avulsa", que já estava definido.', ok:true, why:'Extra com preço publicado torna a conversa simples, justa e sem constrangimento para os dois lados.'}
          ]}
      ]},
    { id:'2.8', title:'Receber com segurança: sinal, Pix, recibo e atraso', min:14,
      body:[
        `<div class="card analogy"><h3>🧾 A costureira do bairro</h3><p>A costureira tira as medidas e pede metade para comprar o tecido. Anota tudo no caderno: nome, peça, valor, quanto já foi pago. Na prova final, recebe o restante e entrega a roupa. Se alguém atrasa para buscar, ela liga com educação, sem escândalo na porta da loja. Receber bem é isso: combinado claro, registro e cobrança respeitosa.</p></div>`,
        `<div class="term"><b>Sinal</b> = parte do pagamento antes de começar. <b>Comprovante</b> = prova de que o pagamento foi feito. <b>Recibo</b> = documento simples em que você declara que recebeu um valor. <b>Nota fiscal de serviço</b> = documento fiscal emitido por quem é formalizado, conforme as regras da sua prefeitura.</div>`,
        `<div class="card"><h3>Do "fechado" ao "pago" em cinco passos</h3><ol class="golden"><li><span><b>Combinado:</b> valor, sinal, data do restante e forma de pagamento já escritos (lição 2.3).</span></li><li><span><b>Sinal confirmado:</b> só comece depois de ver o dinheiro no aplicativo do seu banco. Print de comprovante pode ser de um Pix agendado, cancelado ou até falso.</span></li><li><span><b>Chave Pix:</b> prefira uma chave aleatória ou um e-mail de trabalho, sem espalhar CPF e telefone pessoal à toa.</span></li><li><span><b>Entrega final:</b> combine antes que os arquivos finais (editáveis, sem marca d'água) vão após o pagamento do restante. Uma prévia pode ir antes.</span></li><li><span><b>Registro e recibo:</b> anote cliente, data e valor na sua planilha e envie recibo quando pedirem.</span></li></ol></div>`,
        `<div class="card"><h3>Exemplo resolvido: cobrança que atrasou</h3><p>O Diego entregou o cardápio do Seu Paulo, e o restante venceu ontem.</p>
          <div class="flows"><div class="flow old"><h4>❌ Antes</h4><p>"Seu Paulo, cadê o meu dinheiro?? Já entreguei faz tempo." Problemas: tom agressivo, sem valor, sem chave, sem saída para o cliente. E, quando não deu certo, Diego pensou em reclamar do cliente nas redes.</p></div><div class="flow new"><h4>✅ Depois</h4><p>"Oi, Seu Paulo! Tudo certo com o cardápio? Passando para lembrar do restante, R$ X, combinado para ontem. A chave Pix é a de sempre. Se precisar de outra data, me avisa que a gente combina."</p></div></div>
          <div class="tw"><table class="tbl"><tr><th>Quando</th><th>O que fazer</th></tr><tr><td>1 dia após o vencimento</td><td>Lembrete gentil, com valor e chave</td></tr><tr><td>Uns 5 dias depois</td><td>Segundo lembrete, propondo nova data</td></tr><tr><td>Uns 10 dias depois</td><td>Ligação ou conversa, buscando um acordo (por exemplo, dividir)</td></tr><tr><td>Sem acordo</td><td>Procurar orientação (Sebrae, um advogado ou o Juizado Especial Cível, conforme o caso)</td></tr></table></div></div>`,
        `<div class="card"><h3>Recibo, nota e impostos: o básico</h3><p>Um recibo simples tem: seu nome, nome do cliente, serviço, valor, forma de pagamento e data. Quem é formalizado (por exemplo, como MEI) segue as regras de nota fiscal de serviço da sua cidade e as obrigações do seu enquadramento. Essas regras mudam: confira no Portal do Empreendedor (gov.br), no Sebrae ou com um contador. O curso "Formalizando: MEI e Organização Financeira" aprofunda o tema. Mesmo antes de formalizar, guarde uma reserva para impostos nas suas contas.</p></div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><p><b>Começar sem sinal</b> "porque é conhecido". <b>Aceitar print sem conferir</b> no banco. <b>Não registrar</b> e esquecer quem pagou. <b>Cobrar com grosseria ou expor o cliente</b> em grupos e redes: é antiético, queima a sua reputação e pode trazer problema legal. <b>Prender o trabalho sem ter combinado antes:</b> a regra de entrega final após pagamento precisa estar no combinado.</p></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez (cerca de 5 minutos)</h3><p>Use o <b>ChatGPT</b> para treinar a cobrança:</p><ol class="golden"><li><span>Escreva você mesmo um lembrete de pagamento atrasado para um cliente fictício.</span></li><li><span>Peça que ele faça o papel de um cliente que atrasou e está sem dinheiro, e responda à sua mensagem.</span></li><li><span>Responda propondo um acordo justo, sem ameaça nem pressão.</span></li><li><span>Monte o seu modelo de recibo com campos como [CLIENTE], [VALOR] e [DATA].</span></li></ol><p>🔒 Não cole nome, CPF, telefone, chave Pix real nem valores de clientes reais. Use dados inventados.</p></div>`
      ],
      ch:[
        { who:'Cristiane, 33 anos, fechou um cardápio com uma lanchonete', says:'O dono mandou o print do Pix do sinal. Já vou começar o trabalho agora mesmo.',
          q:'O que ela deveria fazer antes de começar?',
          opts:[
            {t:'Conferir no aplicativo do banco se o valor realmente entrou.', ok:true, why:'Print pode ser de Pix agendado, cancelado ou falso. O que vale é o dinheiro na conta.'},
            {t:'Começar logo, porque pedir para conferir é desconfiar do cliente.', ok:false, why:'Conferir no próprio banco é rotina, não acusação. O cliente nem precisa saber.'},
            {t:'Pedir que o dono mande uma foto do documento dele junto com o print.', ok:false, why:'Pedir documento pessoal sem necessidade expõe dados e não confirma o pagamento. Basta olhar o extrato.'}
          ]},
        { who:'Anderson, 28 anos, entregou posts para uma loja de roupas', says:'O pagamento atrasou 3 dias. Estou pensando em postar no grupo do bairro que a loja é caloteira.',
          q:'Qual é a conduta mais adequada?',
          opts:[
            {t:'Postar no grupo, porque assim a loja paga mais rápido.', ok:false, why:'Expor o cliente publicamente é antiético, pode gerar problema legal e afasta outros clientes do Anderson.'},
            {t:'Mandar lembretes educados com valor e chave, propor nova data e, sem acordo, buscar orientação.', ok:true, why:'Cobrança respeitosa e em etapas resolve a maioria dos atrasos e preserva a reputação dele.'},
            {t:'Não cobrar nada, para não perder a cliente.', ok:false, why:'Cobrar o combinado é direito dele. Dá para cobrar com educação e manter a relação.'}
          ]},
        { who:'Débora, 30 anos, entregou uma planilha para uma oficina', says:'O cliente pagou o restante e pediu um recibo. Ainda não sou formalizada. Posso dar recibo?',
          q:'Qual é a resposta mais correta?',
          opts:[
            {t:'Não pode dar nenhum documento até abrir uma empresa.', ok:false, why:'Um recibo simples declarando o valor recebido pode ser feito. A nota fiscal é que depende de formalização.'},
            {t:'Emitir uma nota fiscal usando o CNPJ de um amigo.', ok:false, why:'Usar o CNPJ de outra pessoa é irregular e pode causar problemas para os dois.'},
            {t:'Fazer um recibo simples com os dois nomes, serviço, valor, forma de pagamento e data, e pesquisar a formalização no gov.br ou com um contador.', ok:true, why:'O recibo registra o pagamento de forma honesta; a formalização e a nota fiscal seguem regras oficiais que vale conferir.'}
          ]}
      ]},
    { id:'2.9', title:'Ferramentas de trabalho: conferir limites, regras de uso e ter um plano B', min:15,
      body:[
        `<div class="card analogy"><h3>🧰 A maleta do eletricista</h3><p>O eletricista chega na casa do cliente com as ferramentas que conhece bem e uma de reserva para o que mais quebra. Ele não aparece com uma furadeira emprestada que nunca usou, nem descobre na hora que a bateria acabou. Quem presta serviço com IA também tem uma maleta: as ferramentas que usa em cada etapa. Conhecer os limites delas antes do cliente chegar evita o susto no dia da entrega.</p></div>`,
        `<div class="term"><b>Limite do plano gratuito</b> = quantidade de uso permitida sem pagar, que pode mudar a qualquer momento. <b>Termos de uso</b> = regras da ferramenta, incluindo se o resultado pode ser usado para fins comerciais e o que acontece com o que você envia. <b>Plano B</b> = outra ferramenta ou outro jeito de fazer a mesma etapa, já testado.</div>`,
        `<div class="card"><h3>Exemplo resolvido: a Larissa e os posts do salão</h3><p>Larissa vende pacotes de posts para salões. Ela criava as imagens numa ferramenta gratuita que nunca tinha lido com atenção.</p><div class="flows"><div class="flow old"><h4>Antes</h4><div class="node">No dia da entrega, o limite semanal da conta acabou no terceiro post.</div><div class="node">Ela descobriu que, no plano gratuito, as imagens ficavam públicas, inclusive uma com o logo do salão.</div><div class="node">Correu para uma ferramenta nova, sem saber usar, e atrasou a entrega.</div></div><div class="flow new"><h4>Depois</h4><div class="node">Montou uma tabela com as ferramentas de cada etapa, o limite conferido na página oficial e a data em que conferiu.</div><div class="node">Leu nos termos se o uso comercial é permitido e o que fica público ou é guardado.</div><div class="node">Testou um plano B para cada etapa e passou a criar as imagens no começo da semana, longe do prazo.</div></div></div></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Etapa</th><th>Ferramenta</th><th>Limite conferido (data)</th><th>Uso comercial?</th><th>O que nunca envio</th><th>Plano B</th></tr><tr><td>Rascunho dos textos</td><td>Assistente de IA A</td><td>Limite por período (conferido em [DATA])</td><td>Conferido nos termos</td><td>Dados de clientes do salão</td><td>Assistente de IA B</td></tr><tr><td>Imagens</td><td>Gerador de imagens C</td><td>Créditos por semana; imagens públicas no grátis</td><td>Conferido nos termos</td><td>Logo e fotos do salão</td><td>Fotos próprias e editor simples</td></tr><tr><td>Organização</td><td>Planilha</td><td>Sem limite relevante</td><td>Sim</td><td>Senhas</td><td>Caderno</td></tr></table></div>`,
        `<div class="card"><h3>E quando vale pagar?</h3><p>Pague quando o limite gratuito trava a entrega com frequência e você já tem clientes que cobrem o custo. Aí a assinatura entra no preço, como qualquer custo (lição 2.2). Exemplo com <b>valores ilustrativos</b>: uma assinatura de R$ 60 por mês, dividida entre 4 clientes, acrescenta R$ 15 ao custo de cada um. Assinar antes de ter cliente é gastar com uma ideia que ainda não foi testada.</p></div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><p><b>Confiar no limite de memória:</b> limites mudam; confira na página oficial e anote a data. <b>Não ler sobre uso comercial:</b> algumas ferramentas restringem o uso do resultado em trabalho pago, ou deixam o que você cria visível para todos. <b>Enviar dados do cliente sem pensar:</b> antes de colar qualquer coisa, pergunte se aquilo precisa mesmo ir para a ferramenta. <b>Usar a conta pessoal do cliente:</b> trabalhe nas suas contas e entregue os arquivos a ele. <b>Plano B nunca testado:</b> o plano B só ajuda se você já usou pelo menos uma vez.</p></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez (Google Planilhas, cerca de 6 minutos)</h3><ol class="golden"><li><span>Crie uma planilha com as colunas: etapa, ferramenta, limite conferido, data, uso comercial, o que nunca envio e plano B.</span></li><li><span>Preencha uma linha para cada etapa do serviço que você escolheu.</span></li><li><span>Para cada ferramenta, abra a página oficial de planos ou de termos e anote, com as suas palavras, o que encontrou e a data.</span></li><li><span>Escolha um plano B para a etapa mais importante e marque um dia para testá-lo.</span></li></ol><p>🔒 Na planilha, nada de senhas, CPF ou dados de clientes. Se não encontrar a informação sobre uso comercial, anote "não encontrei" e trate como dúvida, não como permissão.</p></div>`
      ],
      ch:[
        { who:'Gabriel, 23 anos, cria cardápios com IA para lanchonetes', says:'Tenho três entregas na sexta. Uso o plano grátis de um gerador de imagens e acho que o limite dá, mas nunca contei.',
          q:'O que ele deve fazer agora?',
          opts:[
            {t:'Conferir hoje o limite na página oficial, adiantar as imagens no começo da semana e deixar um plano B testado.', ok:true, why:'Saber o limite com antecedência e ter alternativa transforma um susto na sexta numa semana tranquila.'},
            {t:'Esperar a sexta e, se o limite acabar, pedir mais prazo aos três clientes.', ok:false, why:'Pedir prazo por falta de planejamento queima a confiança justamente no começo da relação.'},
            {t:'Assinar o plano mais caro da ferramenta hoje, para garantir.', ok:false, why:'Pode até resolver, mas é gastar sem saber se precisa. Primeiro confira o limite e calcule se o custo cabe no preço.'}
          ]},
        { who:'Priscila, 35 anos, faz posts para uma clínica veterinária', says:'Vou colar na IA a lista de clientes da clínica com nome e telefone, para ela sugerir posts personalizados.',
          q:'Qual é a orientação correta?',
          opts:[
            {t:'Pode colar, porque a ferramenta é famosa e confiável.', ok:false, why:'Ser famosa não autoriza o uso dos dados. Os clientes da clínica não aceitaram que os contatos fossem para uma ferramenta de IA.'},
            {t:'Colar só os telefones, sem os nomes.', ok:false, why:'Telefone também identifica a pessoa. Continua sendo dado pessoal enviado sem necessidade.'},
            {t:'Não enviar dados de clientes; descrever o público em termos gerais, como "tutores de cães e gatos do bairro", que já é suficiente para os posts.', ok:true, why:'Para criar posts, um perfil geral do público basta. Dado pessoal fica fora da ferramenta.'}
          ]},
        { who:'Otávio, 40 anos, quer vender legendas de produtos para lojas virtuais', says:'Achei uma ferramenta grátis ótima, mas não sei se posso usar o que ela gera num trabalho pago.',
          q:'Qual é o passo mais adequado?',
          opts:[
            {t:'Usar à vontade, porque ferramenta grátis libera tudo.', ok:false, why:'Grátis não significa uso comercial liberado. Cada ferramenta define isso nos termos.'},
            {t:'Ler os termos de uso e a página de planos na fonte oficial, anotar o que diz e a data, e tratar como dúvida o que não estiver claro.', ok:true, why:'A regra está nos termos. Anotar com data ajuda a conferir de novo quando mudar.'},
            {t:'Perguntar num grupo de rede social e seguir a opinião da maioria.', ok:false, why:'Opinião de grupo pode estar desatualizada ou errada. A fonte é a página oficial da ferramenta.'}
          ]}
      ]},
    { id:'2.6', title:'Projeto: sua oferta em um parágrafo e o preço calculado', min:30,
      body:[
        `<div class="card"><p>Hora de transformar o serviço escolhido no módulo 1 em uma oferta que você pode mandar a um cliente amanhã. Você vai escrever a oferta, calcular o preço com o método de custo, valor e mercado, montar o seu modelo de combinado escrito e preparar respostas honestas para as dúvidas mais prováveis. Use os seus próprios números: o tempo real da amostra, custos reais, pesquisa real na sua região.</p></div>`
      ],
      projeto: {
        entrega: 'Um documento com a oferta em um parágrafo, o cálculo do preço passo a passo, um modelo de combinado escrito e as suas respostas para as dúvidas mais prováveis dos clientes.',
        passos: [
          'Escreva a oferta com nicho, resultado, entregáveis contáveis, prazo em dias úteis, número de revisões e o que não está incluído.',
          'Use o tempo real da amostra do módulo 1, defina o valor da sua hora e some ferramentas, transporte e reserva para impostos: esse é o seu piso.',
          'Pesquise pelo menos 3 referências de preço de serviços parecidos na sua região, escreva o que o resultado vale para o cliente e defina o preço final, a forma de cobrança e, se usar, o preço de piloto com o preço normal informado.',
          'Monte o modelo de combinado escrito com entregáveis, prazo, revisões, pagamento e sinal, limites, mudanças e aceite.',
          'Escreva como responderia a 3 dúvidas prováveis ("está caro", "vou pensar" e "vou vender mais?"), incluindo uma versão menor do serviço para quem tiver orçamento curto.'
        ],
        checklist: [
          'Cada entregável pode ser contado e conferido pelo cliente.',
          'O preço não fica abaixo do meu piso de custo e a conta está escrita.',
          'O combinado diz quando o prazo começa a contar e quantas revisões estão incluídas.',
          'Minhas respostas às dúvidas ajustam o escopo em vez de dar desconto sem critério, e não usam urgência falsa.',
          'Não há promessa de ganhos ou resultados que eu não controlo.'
        ],
        minimo: 380
      } }
  ]},
  { id:3, icon:'🧪', title:'Validar', sub:'Testar com um primeiro cliente', lessons:[
    { id:'3.1', title:'O cliente-piloto', min:10,
      body:[
        `<div class="card analogy"><h3>🧪 O ensaio antes da estreia</h3><p>A peça de teatro faz ensaio geral para um público pequeno antes da estreia. Os erros aparecem, e a equipe corrige antes de a casa lotar. O cliente-piloto é o seu ensaio: um trabalho real, com alguém real, mas com a combinação clara de que vocês dois estão aprendendo.</p></div>`,
        `<div class="term"><b>Cliente-piloto</b> = o primeiro cliente, em condição especial, para testar o serviço e aprender. <b>Depoimento</b> = a opinião do cliente sobre o seu trabalho, publicada com autorização. <b>Feedback</b> = o que o cliente achou, com o que funcionou e o que melhorar.</div>`,
        `<div class="card"><h3>Quem é um bom cliente-piloto</h3><p>Alguém do seu nicho, que tenha o problema de verdade e que esteja disposto a dar retorno sincero. Pode ser uma das pessoas com quem você conversou na validação, o dono do pet shop onde você leva o cachorro, a confeiteira que já te pediu ajuda. Evite escolher só pela amizade: a mãe que elogia tudo não ajuda a encontrar falhas. E evite o cliente mais difícil do bairro: no piloto, você quer aprender, não apagar incêndio.</p></div>`,
        `<div class="card"><h3>Como fazer um piloto honesto</h3><ol class="golden"><li><span>Escolha alguém do seu nicho, que tenha o problema.</span></li><li><span>Combine por escrito: escopo, prazo, preço do piloto, preço normal e que será uma condição especial.</span></li><li><span>Diga com clareza o que você pede em troca: feedback sincero e, se a pessoa quiser, um depoimento.</span></li><li><span>Entregue com cuidado e revise tudo, como faria com um cliente pagante integral.</span></li><li><span>Peça feedback com 3 perguntas: o que foi mais útil? O que faltou? Você indicaria?</span></li><li><span>Peça um depoimento, com autorização para publicar, e só publique o que for real.</span></li><li><span>Anote o que aprendeu e ajuste a oferta.</span></li></ol></div>`,
        `<div class="flows"><div class="flow old"><h4>❌ Piloto mal feito</h4><p>Faz de graça sem combinar nada, entrega correndo, não pergunta o que o cliente achou e depois inventa um depoimento elogioso.</p></div><div class="flow new"><h4>✅ Piloto bem feito</h4><p>Combina por escrito, entrega com o mesmo cuidado de um cliente pagante, coleta feedback com perguntas abertas e publica só o depoimento autorizado, com as palavras do cliente.</p></div></div>`,
        `<div class="card"><h3>Durante o piloto, observe</h3><p>Quanto tempo cada etapa levou de verdade (para ajustar prazo e preço). Em que momento o cliente ficou confuso. Que informação faltou na coleta. Que parte o cliente mais elogiou espontaneamente. Anote tudo num caderno ou documento: essas anotações valem mais que qualquer curso, porque são da sua realidade.</p><p>Não prometa resultados de vendas: prometa o que você entrega. Se o cliente perguntar "vou vender mais?", responda com honestidade que o seu serviço ajuda em uma parte do processo e que o resultado depende de muitos fatores.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma peça de teatro faz um ensaio antes da estreia, e quem deve estar na plateia desse ensaio.</div>`
      ],
      ch:[
        { who:'Beatriz, 29 anos, fez seu primeiro serviço para uma amiga', says:'Terminei e entreguei. Como ela gostou, vou escrever um depoimento bonito em nome dela para colocar no meu perfil.',
          q:'O que ela deveria fazer?',
          opts:[
            {t:'Escrever o depoimento e publicar, porque a amiga gostou.', ok:false, why:'Escrever em nome de outra pessoa sem autorização é falso e quebra a confiança.'},
            {t:'Não pedir nada, para não incomodar a amiga.', ok:false, why:'Pedir feedback e depoimento é parte normal do processo, e a maioria das pessoas ajuda.'},
            {t:'Pedir feedback, perguntar se a amiga aceita dar um depoimento com as próprias palavras e só publicar com a autorização dela.', ok:true, why:'Depoimento real, nas palavras do cliente e autorizado, constrói credibilidade honesta.'}
          ]},
        { who:'Henrique, 31 anos, precisa escolher o cliente-piloto para seu serviço de agenda online para barbearias', says:'Tenho duas opções: minha tia, que não tem barbearia mas elogia tudo, ou o Seu Zé, barbeiro do bairro que vive perdendo horário marcado.',
          q:'Quem é o melhor cliente-piloto?',
          opts:[
            {t:'A tia, porque é mais fácil e ela vai gostar de tudo.', ok:false, why:'Ela não tem o problema nem é do nicho. Elogio sem uso real não ensina nada.'},
            {t:'O Seu Zé, porque é do nicho, tem o problema de verdade e pode dar um retorno útil.', ok:true, why:'O piloto serve para testar o serviço na vida real. Quem tem a dor dá o feedback que importa.'},
            {t:'Nenhum dos dois: melhor esperar um cliente grande que pague o preço cheio.', ok:false, why:'Esperar o cliente ideal adia o aprendizado. O piloto existe justamente para começar.'}
          ]},
        { who:'Carla, 26 anos, está no meio do piloto com uma loja de roupas do bairro', says:'Como é preço de piloto, vou fazer mais rápido e sem revisar tanto. Quando for cliente pagando o preço cheio eu capricho.',
          q:'Qual é o problema dessa ideia?',
          opts:[
            {t:'Nenhum: preço menor justifica entrega menor.', ok:false, why:'O preço do piloto é uma condição comercial, não licença para entregar pior.'},
            {t:'Ela deveria cobrar o preço cheio para ter motivação.', ok:false, why:'O preço não é o ponto. O problema é a qualidade do teste.'},
            {t:'O piloto só ensina se for entregue com a mesma qualidade real; feito às pressas, o feedback e o depoimento não refletem o serviço de verdade.', ok:true, why:'O objetivo do piloto é testar o serviço como ele será. Entrega descuidada estraga o teste e a reputação.'}
          ]}
      ]},
    { id:'3.2', title:'Página de oferta e checklist "estou pronto para cobrar?"', min:10,
      body:[
        `<div class="card analogy"><h3>📁 O cartão de visitas do seu serviço</h3><p>Uma página que diz quem você ajuda, o que entrega e como falar com você, em um lugar só. Quem recebe entende em um minuto. É o que você manda quando alguém pergunta "como funciona o seu trabalho?", em vez de cinco áudios longos.</p></div>`,
        `<div class="term"><b>Página de oferta</b> = documento de 1 página que apresenta o seu serviço. <b>Caso</b> = a história de um trabalho feito. <b>Chamada para ação</b> = a instrução clara do que fazer para contratar. <b>Checklist</b> = lista de itens a conferir antes de começar a cobrar.</div>`,
        `<div class="card"><h3>As partes de uma página de oferta</h3><ol class="golden"><li><span><b>Para quem é:</b> o nicho, em palavras que ele reconhece.</span></li><li><span><b>O problema que resolve:</b> de preferência com as palavras que você ouviu nas conversas de validação.</span></li><li><span><b>O que você entrega e em quanto tempo:</b> entregáveis contáveis e prazo.</span></li><li><span><b>O que está incluído e o que não está.</b></span></li><li><span><b>Preço (ou faixa) e forma de pagamento,</b> incluindo o sinal.</span></li><li><span><b>Como contratar:</b> um único caminho claro, como "me chame no WhatsApp com a palavra CARDÁPIO".</span></li><li><span><b>Um exemplo do seu trabalho:</b> do piloto, com autorização, ou um projeto de treino identificado como fictício.</span></li></ol></div>`,
        `<div class="card"><h3>Formato simples, conteúdo claro</h3><p>Pode ser um PDF, uma imagem para o WhatsApp, uma página no perfil ou um documento compartilhado. O formato importa menos que a clareza. Use títulos curtos, frases curtas e nada de jargão. Teste com alguém do nicho: entregue a página e peça que diga, em voz alta, o que você faz, quanto custa e como contratar. Se travar em algum ponto, ajuste esse ponto.</p><p>A IA pode ajudar a revisar o texto e sugerir títulos, mas cada informação (prazo, preço, entregável, depoimento) precisa ser verdadeira e conferida por você.</p></div>`,
        `<div class="card"><h3>Checklist "estou pronto para cobrar?"</h3><div class="tw"><table class="tbl"><tr><th>Item</th><th>Onde você aprendeu</th></tr><tr><td>Nicho escolhido e demanda conversada com pessoas reais</td><td>Módulo 1</td></tr><tr><td>Frase de posicionamento com diferencial honesto</td><td>Lição 1.4</td></tr><tr><td>Oferta em um parágrafo, com limites</td><td>Lição 2.1</td></tr><tr><td>Preço calculado (custo, valor e mercado)</td><td>Lição 2.2</td></tr><tr><td>Modelo de combinado escrito</td><td>Lição 2.3</td></tr><tr><td>Fluxo de entrega e cuidado com dados de clientes</td><td>Lição 2.4</td></tr><tr><td>Piloto feito ou planejado</td><td>Lição 3.1</td></tr><tr><td>Nenhuma promessa de ganho</td><td>Curso todo</td></tr></table></div>
          <p>Nas próximas lições você vai aprender a usar o feedback, montar um portfólio honesto e organizar sua rotina. No <b>projeto 3.6</b>, ao fim deste módulo, você transforma este rascunho numa página de oferta pronta para divulgar, junto com o plano do cliente-piloto. Por enquanto, faça um rascunho da página com o que já tem. Concluindo todas as lições e projetos, você emite o certificado do curso.</p>
          <p><b>Próximo passo depois deste curso:</b> o curso "Primeiros Clientes".</p>
          <p>⚠️ Este curso não garante renda: ele ensina a oferecer um serviço com clareza.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, quem você quer ajudar, o que você entrega e como a pessoa faz para contratar.</div>`
      ],
      ch:[
        { who:'Rafael, 31 anos, montou a página de oferta', says:'Coloquei na página: "Aumento suas vendas em 200% em 30 dias, garantido". Vai chamar muita atenção.',
          q:'O que ele deveria fazer?',
          opts:[
            {t:'Manter a frase: chama atenção e os clientes vão acreditar.', ok:false, why:'Ele não controla as vendas do cliente. Garantir resultados assim é enganoso.'},
            {t:'Trocar para o que ele de fato entrega e controla, como "entrego 12 mensagens prontas em 5 dias, com guia de uso", sem garantir vendas.', ok:true, why:'Promessas sobre o que depende dele são honestas e cumpríveis, e dão credibilidade.'},
            {t:'Diminuir o número para 100%, para parecer mais realista.', ok:false, why:'O problema não é o tamanho do número, e sim garantir um resultado que não depende dele.'}
          ]},
        { who:'Juliana, 30 anos, terminou a página de oferta para clínicas de estética', says:'No fim da página coloquei: "Me chama no Instagram, no WhatsApp, no e-mail, no LinkedIn ou passa no meu endereço".',
          q:'Como melhorar a chamada para ação?',
          opts:[
            {t:'Escolher um único caminho principal e claro, como "Me chame no WhatsApp com a palavra AGENDA".', ok:true, why:'Um caminho só reduz a dúvida e facilita para o cliente dar o próximo passo.'},
            {t:'Acrescentar mais canais, para ninguém ficar de fora.', ok:false, why:'Muitas opções confundem e diluem a atenção. O cliente hesita e adia.'},
            {t:'Tirar a chamada, porque quem se interessar vai dar um jeito.', ok:false, why:'Sem instrução clara, muitos interessados simplesmente não entram em contato.'}
          ]},
        { who:'Vítor, 25 anos, ainda não teve cliente e quer mostrar um exemplo na página', says:'Fiz um cardápio de treino para uma lanchonete imaginária. Vou dizer que foi para a Lanchonete do Bairro, que é real.',
          q:'Qual é o jeito honesto de usar esse exemplo?',
          opts:[
            {t:'Usar o nome da lanchonete real, porque ninguém vai conferir.', ok:false, why:'Atribuir trabalho falso a um negócio real é enganoso e pode gerar problemas com o dono.'},
            {t:'Mostrar o cardápio identificado como "projeto de treino, negócio fictício".', ok:true, why:'Projeto de treino identificado mostra a habilidade dele sem enganar ninguém.'},
            {t:'Não mostrar nenhum exemplo até ter 10 clientes.', ok:false, why:'Um exemplo honesto ajuda o cliente a entender o serviço. Não precisa esperar.'}
          ]}
      ]},
    { id:'3.3', title:'Aprender com o feedback e ajustar a oferta', min:10,
      body:[
        `<div class="card analogy"><h3>🧁 A receita que melhora a cada fornada</h3><p>A confeiteira faz o bolo, prova, ouve os clientes e ajusta: menos açúcar, mais recheio, forma diferente. A receita de hoje é melhor que a do primeiro mês porque ela ouviu e mudou. Seu serviço é uma receita: o feedback mostra o que ajustar.</p></div>`,
        `<div class="term"><b>Feedback</b> = retorno do cliente sobre o que funcionou e o que não funcionou. <b>Padrão</b> = algo que se repete em vários retornos. <b>Ajuste</b> = mudança concreta na oferta, no processo ou no preço, feita a partir do que você aprendeu.</div>`,
        `<div class="card"><h3>Como pedir feedback que ajuda</h3><p>"Gostou?" rende um "gostei" e mais nada. Perguntas abertas e específicas rendem aprendizado:</p><ol class="golden"><li><span>O que foi mais útil para você?</span></li><li><span>O que faltou ou ficou confuso?</span></li><li><span>Em que momento você ficou em dúvida sobre o que eu estava fazendo?</span></li><li><span>Você está usando o que eu entreguei? Como?</span></li><li><span>Você indicaria? Para quem?</span></li></ol><p>Peça por mensagem, para a pessoa responder com calma, ou numa conversa curta de 10 minutos, alguns dias depois da entrega, quando ela já teve tempo de usar.</p></div>`,
        `<div class="card"><h3>Ouvir sem se defender</h3><p>A crítica dói, principalmente no começo. A reação natural é explicar ("mas é que você demorou a mandar as fotos..."). Segure. Agradeça, anote e pergunte mais: "me conta um exemplo?". Depois, sozinho, você decide o que fazer. Cliente que critica com educação está te dando de graça uma consultoria. Cliente que não gostou e não fala simplesmente não volta.</p></div>`,
        `<div class="card"><h3>Separar o ruído do padrão</h3><p>Nem todo comentário vira mudança. Um cliente que queria a planilha azul é gosto pessoal. Três clientes dizendo que não entenderam como usar a planilha é padrão, e padrão pede ajuste. Organize assim:</p><div class="tw"><table class="tbl"><tr><th>O que ouvi</th><th>Quantos disseram</th><th>Tipo</th><th>Ajuste</th></tr><tr><td>"Não entendi como usar"</td><td>3 de 3</td><td>Padrão</td><td>Incluir vídeo curto de uso</td></tr><tr><td>"Demorou para começar"</td><td>2 de 3</td><td>Padrão</td><td>Mandar lista de coleta no fechamento</td></tr><tr><td>"Queria em outra cor"</td><td>1 de 3</td><td>Gosto pessoal</td><td>Nenhum, ou oferecer opção</td></tr></table></div></div>`,
        `<div class="card"><h3>O que pode ser ajustado</h3><p><b>Oferta:</b> tirar um entregável que ninguém usa, acrescentar o guia que todos pediram. <b>Processo:</b> mudar a ordem das etapas, melhorar a coleta. <b>Prazo:</b> aumentar se o tempo real foi maior. <b>Preço:</b> se o piloto mostrou que leva o dobro do tempo, o preço precisa acompanhar. <b>Comunicação:</b> usar na página as palavras que os clientes usaram no feedback.</p><p>A IA pode ajudar a agrupar comentários e sugerir padrões, mas a decisão de ajuste é sua. Mude uma ou duas coisas por vez, teste com o próximo cliente e observe de novo. E lembre: feedback de cliente é dado pessoal também; não exponha críticas com nome sem autorização.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a confeiteira muda a receita quando vários clientes dizem a mesma coisa, mas não quando só um pede bolo de outra cor.</div>`
      ],
      ch:[
        { who:'Daniela, 34 anos, entregou planilhas para três confeitarias', says:'As três disseram que não sabiam por onde começar a usar a planilha. Uma também achou a cor feia.',
          q:'Qual é o ajuste mais importante?',
          opts:[
            {t:'Mudar a cor da planilha, porque foi a crítica mais clara.', ok:false, why:'A cor foi comentário de uma pessoa só. A dificuldade de uso apareceu nas três e é o padrão.'},
            {t:'Incluir um guia ou vídeo curto de uso na entrega, já que a dificuldade apareceu nas três.', ok:true, why:'Problema repetido por todos os clientes é padrão e merece ajuste na oferta.'},
            {t:'Ignorar tudo, porque elas compraram e pagaram.', ok:false, why:'Cliente que não consegue usar a entrega não indica nem volta. O feedback aponta melhoria importante.'}
          ]},
        { who:'Eduardo, 28 anos, recebeu crítica de um personal trainer', says:'Ele disse que as mensagens ficaram formais demais para os alunos. Já comecei a responder explicando que esse é o meu estilo.',
          q:'Qual é a melhor reação?',
          opts:[
            {t:'Defender o estilo dele até o cliente concordar.', ok:false, why:'Discutir faz o cliente parar de dar retorno. A entrega é para os alunos do cliente, não para o gosto do Eduardo.'},
            {t:'Pedir desculpas e devolver o dinheiro imediatamente.', ok:false, why:'Uma crítica de tom não exige devolução. Exige ouvir e ajustar.'},
            {t:'Agradecer, pedir um exemplo de como ele fala com os alunos e usar isso no ajuste.', ok:true, why:'Ouvir sem se defender e pedir exemplos transforma a crítica em melhoria concreta.'}
          ]},
        { who:'Simone, 39 anos, terminou o piloto com um pet shop', says:'O serviço levou 12 horas, e eu tinha calculado 6. O cliente adorou o resultado.',
          q:'O que ela deve ajustar?',
          opts:[
            {t:'Rever prazo e preço com base no tempo real, ou enxugar o escopo para caber no tempo calculado.', ok:true, why:'O piloto revelou o custo real. Ajustar preço, prazo ou escopo evita trabalhar no prejuízo nos próximos clientes.'},
            {t:'Nada, porque o cliente adorou.', ok:false, why:'Satisfação é ótima, mas se o tempo dobrou, o preço calculado não cobre o custo dela.'},
            {t:'Cobrar a diferença do cliente-piloto agora, depois de entregue.', ok:false, why:'Mudar o preço depois do combinado quebra a confiança. O ajuste vale para os próximos clientes.'}
          ]}
      ]},
    { id:'3.4', title:'Montar um portfólio honesto', min:10,
      body:[
        `<div class="card analogy"><h3>🖼️ A vitrine da padaria</h3><p>A vitrine mostra os pães e doces que a padaria realmente faz. Se ela exibisse um bolo de casamento comprado em outro lugar, o cliente encomendaria e se decepcionaria. O portfólio é a sua vitrine: mostra o que você realmente faz, do jeito que você faz.</p></div>`,
        `<div class="term"><b>Portfólio</b> = conjunto de exemplos do seu trabalho. <b>Caso</b> = a história de um trabalho: situação, o que você fez e o que foi entregue. <b>Projeto de treino</b> = trabalho feito para praticar, para um negócio fictício ou sem contratação, identificado como tal. <b>Autorização</b> = permissão do cliente para mostrar o trabalho e o depoimento.</div>`,
        `<div class="card"><h3>Comece mesmo sem clientes</h3><p>Ninguém nasce com portfólio. No início, você pode montar 2 ou 3 projetos de treino: um cardápio para a "Lanchonete Sabor da Esquina (fictícia)", mensagens para um "salão fictício", uma planilha para uma "oficina modelo". Isso mostra a sua habilidade e o seu estilo. A regra de ouro é identificar: "projeto de treino" ou "negócio fictício" escrito de forma visível. Nunca use o nome ou a marca de um negócio real que não te contratou.</p></div>`,
        `<div class="card"><h3>Como contar um caso real</h3><ol class="golden"><li><span><b>Situação:</b> quem era o cliente e qual era o problema (ex.: "pet shop do bairro que esquecia de confirmar banhos agendados").</span></li><li><span><b>O que você fez:</b> as etapas principais, em linguagem simples.</span></li><li><span><b>O que foi entregue:</b> os entregáveis, com imagens se possível.</span></li><li><span><b>O que o cliente disse:</b> o depoimento autorizado, com as palavras dele.</span></li></ol><p>Repare que o caso não promete "aumentou o faturamento em X%". Se o cliente relatar espontaneamente um resultado, você pode citar como relato dele, com autorização e sem transformar em garantia para os próximos.</p></div>`,
        `<div class="card"><h3>Depoimento autorizado, do jeito certo</h3><p>Peça por escrito: "Posso publicar o seu comentário no meu perfil e na minha página de oferta, com o seu nome e o nome do negócio?". Guarde a resposta. Respeite se a pessoa preferir só o primeiro nome ou nenhum nome. Não edite o sentido do que ela disse; correções de digitação, só com o ok dela. E nunca escreva depoimento por ela, nem com a IA, nem "só para adiantar".</p></div>`,
        `<div class="flows"><div class="flow old"><h4>❌ Portfólio que engana</h4><p>Imagens baixadas da internet, logos de empresas que nunca foram clientes, depoimentos inventados, números de resultado sem fonte.</p></div><div class="flow new"><h4>✅ Portfólio honesto</h4><p>Trabalhos seus, projetos de treino identificados, casos reais com autorização, depoimentos nas palavras do cliente.</p></div></div>`,
        `<div class="card"><h3>Cuidados com dados e imagens</h3><p>Antes de mostrar uma tela da agenda do salão ou uma planilha de clientes, apague ou borre nomes, telefones e valores. Fotos de pessoas (clientes do salão, alunos do personal) só com autorização delas. Imagens que você usou precisam ser suas, do cliente ou de bancos com licença de uso. Poucos exemplos bons e verdadeiros valem mais que muitos duvidosos.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a padaria não pode colocar na vitrine um bolo que ela não fez.</div>`
      ],
      ch:[
        { who:'Natália, 27 anos, quer montar portfólio de posts para negócios locais', says:'Ainda não tenho clientes. Vou pegar posts bonitos de uma agência famosa e colocar no meu portfólio, ninguém vai saber.',
          q:'O que ela deveria fazer?',
          opts:[
            {t:'Usar os posts da agência, porque todo mundo começa assim.', ok:false, why:'Apresentar trabalho alheio como seu é desonesto e pode violar direitos autorais. Quando o cliente contratar, a diferença aparece.'},
            {t:'Criar 2 ou 3 projetos de treino próprios para negócios fictícios e identificá-los claramente.', ok:true, why:'Projetos de treino mostram a habilidade real dela sem enganar ninguém.'},
            {t:'Esperar ter clientes para só então pensar em portfólio.', ok:false, why:'Sem nenhum exemplo fica mais difícil conseguir o primeiro cliente. Projetos de treino resolvem isso.'}
          ]},
        { who:'Ricardo, 33 anos, terminou o piloto com uma academia de bairro', says:'O dono disse que gostou. Vou colocar a logo da academia e escrever "aumentamos as matrículas em 50%" no meu portfólio.',
          q:'Qual é o jeito honesto de mostrar esse caso?',
          opts:[
            {t:'Publicar a logo e o número, porque o dono gostou do trabalho.', ok:false, why:'Gostar não é autorizar, e o número de matrículas não foi medido nem depende só dele.'},
            {t:'Não mostrar nada, para não arriscar.', ok:false, why:'Um caso real bem contado é valioso. Basta pedir autorização e evitar números inventados.'},
            {t:'Pedir autorização para usar o nome e a logo, descrever o problema, o que fez e o que entregou, e usar só um depoimento com as palavras do dono.', ok:true, why:'Caso autorizado e sem resultados inventados constrói credibilidade de verdade.'}
          ]},
        { who:'Tatiane, 29 anos, organizou a agenda de uma clínica de fisioterapia', says:'Quero mostrar no portfólio um print da agenda que montei. Aparecem os nomes e telefones dos pacientes.',
          q:'Qual é a conduta correta?',
          opts:[
            {t:'Apagar ou borrar nomes, telefones e qualquer dado de paciente, e confirmar com a clínica se pode mostrar.', ok:true, why:'Dados de pacientes são sensíveis e protegidos pela LGPD. Anonimizar e pedir permissão é obrigatório.'},
            {t:'Publicar assim mesmo, porque mostra que o trabalho é real.', ok:false, why:'Expor dados de pacientes é grave, desrespeita a lei e a confiança da clínica.'},
            {t:'Trocar os nomes reais por nomes de pacientes de outra clínica.', ok:false, why:'Continua expondo dados de pessoas reais. O certo é anonimizar ou usar dados fictícios.'}
          ]}
      ]},
    { id:'3.5', title:'Rotina, capacidade e limites para atender bem', min:10,
      body:[
        `<div class="card analogy"><h3>🍳 A cozinha do restaurante pequeno</h3><p>Um restaurante com quatro bocas no fogão não aceita cinquenta pedidos ao mesmo tempo. Se aceitar, a comida atrasa, esfria e o cliente não volta. O dono esperto conhece a capacidade da cozinha e organiza os pedidos para caber nela. Com o seu serviço é igual: o primeiro cliente satisfeito traz o segundo, e é aí que a falta de rotina começa a cobrar a conta.</p></div>`,
        `<div class="term"><b>Capacidade</b> = quantos trabalhos você consegue entregar bem numa semana, com o tempo que realmente tem. <b>Rotina de trabalho</b> = horários e etapas fixos para produzir, responder e cobrar. <b>Fila</b> = a ordem de atendimento dos clientes que já fecharam. <b>Controle de recebimentos</b> = registro simples de quem pagou, quanto e quando.</div>`,
        `<div class="card"><h3>Calcule a sua capacidade antes de vender</h3><ol class="golden"><li><span>Anote quantas horas por semana você tem de verdade para o serviço, descontando trabalho, família, estudo e descanso.</span></li><li><span>Use o tempo real medido no piloto (e não o tempo que você gostaria de levar).</span></li><li><span>Reserve uma parte das horas para responder mensagens, cobrar, divulgar e aprender. Isso também é trabalho.</span></li><li><span>Divida as horas que sobram pelo tempo de cada serviço: esse é o número de clientes que cabem por semana.</span></li></ol><p>Se você tem 10 horas livres por semana, reserva 3 para mensagens e divulgação, e cada pacote de mensagens para salão leva 7 horas, cabe um cliente por semana com qualidade. Aceitar três é prometer atraso.</p></div>`,
        `<div class="card"><h3>Uma rotina simples que funciona</h3><div class="tw"><table class="tbl"><tr><th>Momento</th><th>O que fazer</th></tr><tr><td>Início da semana</td><td>Olhar a fila, os prazos e o que falta receber dos clientes</td></tr><tr><td>Blocos de produção</td><td>Horários fixos para produzir, com o celular longe</td></tr><tr><td>Janela de mensagens</td><td>Responder clientes em 1 ou 2 horários do dia, e avisar isso no combinado</td></tr><tr><td>Fim da semana</td><td>Atualizar o controle de recebimentos e anotar o que aprendeu</td></tr></table></div></div>`,
        `<div class="card"><h3>Dizer não (ou "agora não") com educação</h3><p>Quando a agenda está cheia, você tem três respostas honestas: informar um prazo maior ("consigo começar dia 15"), colocar o cliente numa lista de espera ou indicar outra pessoa de confiança. O que não dá é dizer "sim" para tudo e atrasar todo mundo. Também vale dizer não a pedidos fora do seu serviço ou que vão contra a sua ética, como criar depoimentos falsos ou propaganda enganosa para um cliente. Recusar com clareza protege a sua reputação.</p></div>`,
        `<div class="card"><h3>Organização do dinheiro desde o início</h3><p>Separe o dinheiro do serviço do dinheiro de casa, nem que seja numa conta ou planilha à parte. Registre cada recebimento, com cliente, data e valor, e guarde os comprovantes. Quando os trabalhos ficarem frequentes, pesquise a formalização (por exemplo, como MEI): confira regras, atividades permitidas, obrigações e limites no site oficial do Portal do Empreendedor (gov.br) e converse com um contador antes de decidir. Essas regras mudam, então não confie em números de vídeos ou de conversas.</p><p>A IA pode ajudar a montar a planilha de controle e a organizar a semana, mas os números são os seus e as decisões também.</p></div>`,
        `<div class="flows"><div class="flow old"><h4>❌ Sem rotina</h4><p>Aceita tudo, responde mensagem a qualquer hora, perde prazos, esquece quem pagou e se esgota em poucos meses.</p></div><div class="flow new"><h4>✅ Com rotina</h4><p>Sabe quantos clientes cabem, informa prazos realistas, responde em horários combinados e sabe exatamente o que entrou de dinheiro.</p></div></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o restaurante com quatro bocas no fogão não aceita cinquenta pedidos de uma vez, e o que ele pode dizer ao cliente que chega com a cozinha cheia.</div>`
      ],
      ch:[
        { who:'Mariana, 30 anos, faz cardápios digitais nas horas livres', says:'Fechei com três lanchonetes na mesma semana. Cada cardápio me leva umas 8 horas e eu só tenho 10 horas livres por semana. Vou prometer todos para sexta.',
          q:'Qual é a decisão mais responsável?',
          opts:[
            {t:'Prometer todos para sexta e virar as noites, se precisar.', ok:false, why:'São 24 horas de trabalho em 10 horas disponíveis. O resultado provável é atraso, qualidade pior e esgotamento.'},
            {t:'Organizar uma fila, informar a cada lanchonete uma data realista de início e entrega, e cumprir.', ok:true, why:'Capacidade calculada e prazos honestos mantêm a qualidade e a confiança dos três clientes.'},
            {t:'Cancelar os três, porque não dá para atender todos ao mesmo tempo.', ok:false, why:'Não é preciso cancelar: com fila e prazos claros, os três podem ser atendidos.'}
          ]},
        { who:'Seu Valdir, dono de uma oficina, contratou o Igor para organizar orçamentos', says:'Igor, preciso que você me responda a qualquer hora, inclusive domingo à noite. Cliente meu é atendido na hora.',
          q:'Como Igor pode responder sem perder o cliente?',
          opts:[
            {t:'Aceitar e responder sempre, mesmo de madrugada, para agradar.', ok:false, why:'Disponibilidade total sem combinado leva ao esgotamento e atrapalha os outros clientes.'},
            {t:'Parar de responder fora do horário sem avisar nada.', ok:false, why:'Mudar a regra em silêncio frustra o cliente. O horário precisa ser combinado.'},
            {t:'Explicar com gentileza os horários de atendimento, incluir isso no combinado e, se fizer sentido, oferecer um plantão como serviço à parte.', ok:true, why:'Horário combinado organiza a relação e abre a possibilidade de cobrar por uma disponibilidade extra.'}
          ]},
        { who:'Kelly, 28 anos, faz posts para um pet shop e uma clínica veterinária', says:'O dinheiro dos clientes cai na mesma conta das despesas de casa. Não sei dizer quanto recebi no mês passado.',
          q:'Qual é o primeiro passo mais útil?',
          opts:[
            {t:'Separar o dinheiro do serviço, registrar cada recebimento com cliente, data e valor, e guardar os comprovantes.', ok:true, why:'Controle simples e separado mostra quanto o serviço rende de fato e prepara para uma futura formalização.'},
            {t:'Esperar crescer mais para começar a se organizar.', ok:false, why:'Quanto mais clientes, mais difícil arrumar a bagunça depois. Organizar no começo é mais fácil.'},
            {t:'Calcular de cabeça no fim do ano.', ok:false, why:'A memória falha, e sem registro ela não consegue avaliar preço, custos nem obrigações.'}
          ]}
      ]},
    { id:'3.7', title:'Quando algo dá errado: atraso, insatisfação e reembolso', min:14,
      body:[
        `<div class="card analogy"><h3>🧯 O encanador que volta para consertar</h3><p>Todo encanador já deixou um cano pingando. O que separa o profissional do enrolão não é nunca errar: é o que ele faz depois. Um some e para de atender o telefone. O outro liga, diz "foi a vedação que eu fiz, passo aí amanhã às 9 sem custo" e aparece. Esse ganha indicação até do cliente que teve o problema.</p></div>`,
        `<div class="term"><b>Imprevisto</b> = algo que sai do combinado: atraso, erro, cliente insatisfeito. <b>Correção</b> = refazer o que ficou errado, dentro do combinado. <b>Reembolso</b> = devolver todo ou parte do valor pago. <b>Política de cancelamento</b> = regra escrita, antes do serviço, do que acontece se alguém desistir.</div>`,
        `<div class="card"><h3>Exemplo resolvido: o cardápio da pizzaria</h3><p>No piloto, a Joana atrasou 2 dias e o cardápio saiu com o preço errado em 3 pizzas. O dono reclamou.</p>
          <div class="flows"><div class="flow old"><h4>❌ Antes</h4><p>Ela demorou um dia para responder e escreveu: "Desculpa qualquer coisa, mas você mandou as informações bagunçadas." Problemas: sumiço, desculpa vaga, culpa no cliente e nenhuma solução.</p></div><div class="flow new"><h4>✅ Depois</h4><p>"Seu Carlos, o erro nos preços foi meu: copiei da tabela antiga. Já corrigi as 3 pizzas e te mando a versão nova hoje até as 18h. O atraso também foi meu. Para não repetir, passei a conferir cada preço com a sua lista antes de enviar."</p></div></div>
          <p>Repare nos quatro passos da versão boa: <b>responder rápido</b>, <b>assumir o erro específico</b>, <b>propor a correção com data</b> e <b>dizer o que muda no processo</b>.</p></div>`,
        `<div class="card"><h3>Cada situação pede uma resposta</h3><div class="tw"><table class="tbl"><tr><th>Situação</th><th>Resposta honesta</th></tr><tr><td>Atraso por sua causa</td><td>Avise antes de vencer o prazo, com nova data realista. Nunca depois.</td></tr><tr><td>Atraso porque o cliente não mandou o material</td><td>Lembre com educação que o prazo conta a partir do recebimento, como estava no combinado.</td></tr><tr><td>Erro seu</td><td>Corrija sem custo e o mais rápido possível.</td></tr><tr><td>Insatisfação de gosto</td><td>Use a rodada de ajustes combinada; peça exemplos do que ele imagina.</td></tr><tr><td>Pedido de reembolso</td><td>Siga a regra escrita. Se você não entregou o combinado, devolver o proporcional é o justo.</td></tr></table></div></div>`,
        `<div class="why-chain"><b>Por que assumir o erro funciona?</b> Porque o cliente já sabe que algo deu errado. Se você se defende, ele passa a desconfiar de tudo. Se você assume e corrige, ele vê que pode contar com você quando der problema. E é exatamente isso que ele vai contar quando te indicar.</div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><p><b>Sumir</b> esperando o problema esfriar: só piora. <b>Prometer demais para compensar</b> ("faço o site de graça!"): você cria um novo prazo que talvez não cumpra. <b>Brigar ou culpar o cliente</b>, mesmo quando ele contribuiu. <b>Dar desconto sem corrigir o erro:</b> o problema continua. <b>Não ter regra de cancelamento escrita:</b> inclua no combinado. Para dúvidas sobre direitos do consumidor e reembolso, consulte o Procon, o Sebrae ou um advogado.</p></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez (cerca de 5 minutos)</h3><p>Use o <b>Microsoft Copilot</b> para treinar uma conversa difícil:</p><ol class="golden"><li><span>Descreva uma situação fictícia de erro ou atraso no seu tipo de serviço, sem nomes reais.</span></li><li><span>Peça que ele faça o papel de um cliente chateado e mande a primeira reclamação.</span></li><li><span>Responda você, usando os quatro passos: responder, assumir, corrigir com data, mudar o processo.</span></li><li><span>Peça que ele aponte onde a sua resposta soou defensiva e reescreva esse trecho.</span></li></ol><p>🔒 Se for se inspirar numa reclamação real, tire nomes, contatos e detalhes que identifiquem o cliente antes de escrever na IA.</p></div>`
      ],
      ch:[
        { who:'Leonardo, 27 anos, está no piloto com uma clínica de estética', says:'Hoje é quarta e eu prometi entregar na sexta, mas não vou conseguir. Vou ficar quieto e ver se ela nem percebe.',
          q:'Qual é a melhor atitude?',
          opts:[
            {t:'Ficar quieto e entregar quando der.', ok:false, why:'A cliente vai perceber na sexta, e o silêncio transforma um atraso em quebra de confiança.'},
            {t:'Avisar hoje, assumir o atraso e informar uma nova data que ele consegue cumprir.', ok:true, why:'Aviso antecipado e data realista mostram responsabilidade e dão à cliente tempo de se organizar.'},
            {t:'Entregar na sexta uma versão feita às pressas, sem revisar.', ok:false, why:'Cumprir a data com qualidade ruim troca um problema por outro, e no piloto estraga o teste.'}
          ]},
        { who:'Marta, dona de uma doceria, recebeu as legendas da Patrícia', says:'Você escreveu que temos opção sem glúten, mas não temos! Uma cliente já perguntou.',
          q:'Como a Patrícia deve responder?',
          opts:[
            {t:'Dizer que a IA escreveu aquilo e que a culpa não é dela.', ok:false, why:'Quem entrega responde pelo trabalho. Culpar a ferramenta passa insegurança e não resolve.'},
            {t:'Oferecer 20% de desconto e não mexer nas legendas.', ok:false, why:'Desconto sem correção deixa a informação errada no ar, o que pode prejudicar a doceria.'},
            {t:'Assumir o erro, corrigir as legendas na hora, sem custo, e passar a conferir cada informação com a cliente antes de enviar.', ok:true, why:'Erro de informação exige correção imediata. Mudar o processo evita que se repita.'}
          ]},
        { who:'Seu Jairo, dono de um pet shop, pediu reembolso', says:'Desisti das mensagens, quero meu dinheiro de volta. Mas você já me entregou 8 das 12 e eu já estou usando.',
          q:'Qual é o caminho mais justo?',
          opts:[
            {t:'Devolver tudo, para evitar briga.', ok:false, why:'Ele já recebeu e usa a maior parte do trabalho. Devolver tudo não é proporcional ao que foi entregue.'},
            {t:'Seguir a regra de cancelamento combinada; se não houver, propor de forma transparente devolver a parte que não foi entregue.', ok:true, why:'Reembolso proporcional ao que falta entregar é justo para os dois lados. Ter a regra escrita antes evita essa negociação.'},
            {t:'Recusar qualquer devolução e parar de responder.', ok:false, why:'Parar de responder agrava o conflito e prejudica a reputação. Há uma parte do serviço que não foi entregue.'}
          ]}
      ]},
    { id:'3.8', title:'Do piloto à oferta oficial: revisar e seguir com calma', min:14,
      body:[
        `<div class="card analogy"><h3>🏁 A receita depois do primeiro mês da marmitaria</h3><p>Quem abre uma marmitaria descobre, no primeiro mês, que a porção era grande demais, que o feijão acabava antes do meio-dia e que a entrega das 11h nunca dava certo. Não precisa fechar: ajusta a porção, o horário e o preço, imprime o cardápio novo e segue. Depois do piloto, a sua oferta também ganha uma versão 2, feita com o que aconteceu de verdade.</p></div>`,
        `<div class="term"><b>Oferta v1</b> = a oferta que você testou no piloto. <b>Oferta oficial (v2)</b> = a versão revisada com os números e o feedback reais. <b>Indicador</b> = um número simples que você acompanha, como horas por trabalho ou propostas enviadas.</div>`,
        `<div class="card"><h3>Exemplo resolvido: o cardápio do Diego</h3><p><b>Oferta v1:</b> "Cardápio digital, R$ 200, entrega em 3 dias, revisões à vontade."</p>
          <div class="tw"><table class="tbl"><tr><th>Item</th><th>Planejado</th><th>Real no piloto</th></tr><tr><td>Horas de trabalho</td><td>5 h</td><td>9 h</td></tr><tr><td>Prazo</td><td>3 dias</td><td>8 dias (fotos chegaram em partes)</td></tr><tr><td>Revisões</td><td>"À vontade"</td><td>4 rodadas</td></tr><tr><td>Feedback</td><td>-</td><td>"Lindo, mas não sei mudar os preços"</td></tr></table></div>
          <p><b>Conta revisada</b> (números só para ilustrar): 9 h × R$ 40 = R$ 360, mais R$ 15 de custos = R$ 375, mais 10% de reserva = R$ 412,50. Preço: R$ 415.</p>
          <p><b>Oferta oficial (v2):</b> "Cardápio digital para lanchonetes, com até 40 itens e um vídeo curto ensinando a atualizar os preços. 1 rodada de ajustes. Entrega em 5 dias úteis a partir do recebimento de fotos e preços. R$ 415, metade de sinal."</p></div>`,
        `<div class="card"><h3>Revisão em cinco passos</h3><ol class="golden"><li><span>Compare planejado e real: horas, prazo, revisões e custos.</span></li><li><span>Liste os padrões do feedback (lição 3.3) e escolha 1 ou 2 ajustes.</span></li><li><span>Refaça a conta do preço com as horas reais e decida se muda o preço, o escopo ou os dois.</span></li><li><span>Atualize página de oferta, combinado e pacotes para a v2, com o depoimento autorizado.</span></li><li><span>Defina indicadores simples para as próximas 4 semanas: conversas iniciadas, propostas enviadas, contratos fechados e horas reais por trabalho.</span></li></ol></div>`,
        `<div class="card"><h3>Expectativa honesta</h3><p>Ter a oferta oficial pronta não garante clientes nem renda. É comum passar semanas com poucas respostas no começo. Os indicadores servem para você aprender onde travou (poucas conversas? propostas sem resposta?), e não para se cobrar um faturamento. Respeite a capacidade que você calculou na lição 3.5: crescer além dela derruba a qualidade. Como conseguir mais clientes é o tema do curso "Primeiros Clientes".</p></div>`,
        `<div class="card"><h3>Erros comuns e como evitar</h3><p><b>Manter o preço do piloto</b> para todos os novos clientes, mesmo sabendo que não cobre o custo. <b>Mudar tudo de uma vez</b> e não saber o que funcionou: 1 ou 2 ajustes por ciclo. <b>Esquecer de atualizar o combinado</b>, e a v1 continuar valendo nas conversas. <b>Usar o depoimento do piloto sem autorização</b> ou mudar as palavras do cliente. <b>Prometer na página</b> resultados que o piloto não mostrou.</p></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez (cerca de 5 minutos)</h3><p>Use o <b>Carrd</b> para publicar a v2:</p><ol class="golden"><li><span>Abra a sua página de oferta (ou crie uma, se ainda não fez).</span></li><li><span>Atualize entregáveis, prazo, preço e o que não está incluído, com base no que o piloto mostrou.</span></li><li><span>Inclua o depoimento só se tiver autorização por escrito, com as palavras do cliente.</span></li><li><span>Peça a 1 pessoa do nicho que diga o que entendeu da oferta e anote o que ficou confuso.</span></li></ol><p>🔒 Não coloque na página telefone, prints de conversas nem dados de clientes. Fotos e logos de clientes, só com autorização.</p></div>`
      ],
      ch:[
        { who:'Gabriela, 29 anos, terminou o piloto de agenda para salões', says:'Calculei 4 horas e levei 8. O piloto foi a R$ 150. Vou manter R$ 150 para todo mundo, para não assustar ninguém.',
          q:'Qual é a melhor decisão?',
          opts:[
            {t:'Manter R$ 150, porque preço baixo atrai mais clientes.', ok:false, why:'Com o dobro de horas, o preço do piloto não cobre o custo. Mais clientes assim significa mais prejuízo.'},
            {t:'Refazer a conta com as 8 horas reais e definir o preço oficial, ou enxugar o escopo para caber no tempo.', ok:true, why:'A oferta oficial precisa nascer dos números reais do piloto, não do preço especial combinado para testar.'},
            {t:'Cobrar a diferença da cliente do piloto.', ok:false, why:'O preço do piloto foi combinado. Ajustes valem para os próximos clientes.'}
          ]},
        { who:'Rodrigo, 32 anos, recebeu o feedback do piloto com uma loja de material de construção', says:'Vou mudar de uma vez preço, prazo, entregáveis, nicho, nome do serviço e a página toda.',
          q:'O que faz mais sentido?',
          opts:[
            {t:'Mudar tudo agora, já que o piloto mostrou vários pontos.', ok:false, why:'Mudando tudo, ele não saberá o que funcionou na próxima rodada, e pode jogar fora o que deu certo.'},
            {t:'Não mudar nada, porque um piloto só não prova nada.', ok:false, why:'O piloto existe para gerar ajustes. Ignorar o que aprendeu desperdiça o teste.'},
            {t:'Escolher 1 ou 2 ajustes ligados aos padrões do feedback, atualizar a oferta e observar o próximo cliente.', ok:true, why:'Poucos ajustes por vez deixam claro o que melhorou e mantêm o que já funciona.'}
          ]},
        { who:'Aline, 35 anos, publicou a oferta oficial há 3 semanas', says:'Mandei 4 propostas e ninguém fechou ainda. Acho que o curso não funcionou e vou desistir.',
          q:'Qual é a leitura mais útil?',
          opts:[
            {t:'Usar os indicadores para ver onde trava, como pedir retorno sobre as propostas e conferir se a página está clara, e seguir dentro da capacidade dela.', ok:true, why:'Poucas respostas no início são comuns. Os indicadores mostram onde ajustar, sem prometer resultado rápido.'},
            {t:'Baixar o preço pela metade imediatamente.', ok:false, why:'Sem saber o motivo, cortar o preço pode deixá-la abaixo do custo sem resolver o problema real.'},
            {t:'Prometer na página resultados garantidos para chamar atenção.', ok:false, why:'Promessa de resultado que ela não controla é enganosa e destrói a confiança.'}
          ]}
      ]},
    { id:'3.6', title:'Projeto: página de oferta e plano do seu cliente-piloto', min:30,
      body:[
        `<div class="card"><p>Neste projeto você junta o módulo inteiro num material que pode usar já: a página de oferta do seu serviço e o plano do cliente-piloto, do convite ao feedback. Um plano escrito evita improviso, deixa o combinado claro e garante que você vai sair do piloto com aprendizado e, se o cliente quiser, um depoimento autorizado. Se você já fez um piloto, use o projeto para registrar o que aconteceu e o que vai ajustar. Concluindo este projeto e as demais lições, você emite o certificado do curso.</p></div>`
      ],
      projeto: {
        entrega: 'Uma página de oferta de 1 página e um plano de cliente-piloto com perfil do cliente, convite, combinado, perguntas de feedback, pedido de depoimento e a sua capacidade semanal.',
        passos: [
          'Descreva quem será o seu cliente-piloto (ou 2 opções), por que ele é do nicho e qual problema real ele tem, e escreva o convite deixando claro que é piloto, com o preço do piloto, o preço normal e o que você pede em troca.',
          'Adapte o seu modelo de combinado escrito para o piloto: entregáveis, prazo, revisões, pagamento, limites, horários de atendimento e cuidado com os dados do cliente.',
          'Liste de 4 a 5 perguntas abertas de feedback, o texto de pedido de depoimento com autorização e uma tabela para registrar o tempo real de cada etapa e os ajustes.',
          'Escreva a página de oferta: para quem é, o problema, o que você entrega e em quanto tempo, o que está e o que não está incluído, preço e pagamento, um único caminho para contratar e um exemplo honesto de trabalho.',
          'Calcule quantos clientes cabem por semana, teste a página com 2 pessoas do nicho, ajuste o que não ficou claro e passe o checklist "estou pronto para cobrar?".'
        ],
        checklist: [
          'O convite diz claramente que é piloto e informa o preço normal.',
          'O combinado tem prazo, revisões, limites, horários e cuidado com dados pessoais.',
          'As perguntas de feedback são abertas e o pedido de depoimento pede autorização.',
          'A página tem nicho, entregáveis contáveis, prazo, limites, preço, um caminho para contratar e um exemplo verdadeiro.',
          'Não há promessa de ganhos nem de resultados que eu não controlo, e minha capacidade semanal está calculada.'
        ],
        minimo: 400
      } }
  ]}
];

const MODDONE = {
  1: 'Você sabe cruzar suas habilidades com problemas reais, validar a demanda conversando com pessoas, testar a entrega com uma amostra e escolher um serviço, um nicho e uma frase de posicionamento honesta.',
  2: 'Você sabe montar uma oferta clara, com escopo, prazo e preço calculado, fazer um combinado escrito, organizar a entrega com revisão humana e cuidado com dados, e apresentar a oferta sem pressão.',
  3: 'Parabéns, você concluiu o curso Seu Primeiro Serviço! Você sabe testar com um cliente-piloto, aprender com o feedback, montar um portfólio honesto e organizar sua rotina, e já pode emitir o certificado do curso. Próximo passo da trilha: o curso "Primeiros Clientes".'
};

const PROMPTS = {
  1: [
    { title:'Ideias de serviço', desc:'Para cruzar habilidades e problemas.' },
    { title:'Roteiro sem induzir', desc:'Para revisar suas perguntas de validação e encontrar as que sugerem a resposta.' }
  ],
  2: [
    { title:'Oferta em um parágrafo', desc:'Para escrever a oferta com clareza.' },
    { title:'Combinado escrito', desc:'Para transformar o que você acertou com o cliente num resumo claro, sem dados pessoais.' }
  ],
  3: [
    { title:'Pesquisa de feedback', desc:'Para aprender com o cliente-piloto.' },
    { title:'Padrões no feedback', desc:'Para agrupar comentários de clientes (anonimizados) e separar padrão de gosto pessoal.' },
    { title:'Revisão da página de oferta', desc:'Para pedir à IA que aponte trechos confusos, jargão e promessas que você não controla na sua página.' }
  ]
};

const THEME = { 1:['#10B981','#84CC16'], 2:['#84CC16','#10B981'], 3:['#10B981','#84CC16'] };
const LIC = {
  '1.1':'🔍','1.2':'🎯','1.3':'🩺','1.4':'🪧','1.5':'⏱️','1.6':'🗺️','1.7':'🔭','1.8':'🚦',
  '2.1':'📦','2.2':'💲','2.3':'🤝','2.4':'✈️','2.5':'💬','2.6':'📝','2.7':'🧱','2.8':'🧾','2.9':'🧰',
  '3.1':'🧪','3.2':'📁','3.3':'🧁','3.4':'🖼️','3.5':'🍳','3.6':'🚀','3.7':'🧯','3.8':'🏁'
};

return {
  id: 'seu-primeiro-servico',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
