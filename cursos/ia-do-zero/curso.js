/* Curso: IA do Zero (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🧠', title:'Entendendo a IA', sub:'O que ela é e como funciona', lessons:[
    { id:'1.1', title:'Afinal, o que é IA?', min:8,
      body:[
        `<div class="card analogy"><h3>🤖 O estagiário que leu a biblioteca inteira</h3><p>Imagine um estagiário que leu milhões de livros, sites e conversas, mas <b>nunca saiu da sala</b>. Ele fala sobre quase tudo e responde rápido, mas não viveu nada: tudo o que sabe veio do que leu. A IA que você usa hoje funciona parecido.</p></div>`,
        `<div class="term"><b>Inteligência Artificial (IA)</b> = programa de computador que faz tarefas que antes exigiam inteligência humana, como entender texto, reconhecer imagens ou conversar. <b>Modelo</b> = o "cérebro" da IA, o programa já treinado. <b>Ferramenta</b> = o app ou site onde você conversa com o modelo, como um chat.</div>`,
        `<div class="card"><h3>IA não é um robô nem uma pessoa</h3><p>A IA que conversa com você é um programa treinado com uma enorme quantidade de textos. Ela não pensa como gente nem tem opinião própria: produz respostas que combinam com o que aprendeu.</p>
          <p>Você já usa IA sem perceber: sugestão de texto no celular, filtro de spam no e-mail, recomendação de vídeos, tradutor. O que mudou nos últimos anos foi a <b>IA generativa</b>, aquela que cria texto, imagem, áudio e código a partir de um pedido seu.</p>
          <p>Três ideias para guardar:</p>
          <ol class="golden"><li><span>IA é uma <b>ferramenta</b>, não uma pessoa.</span></li><li><span>Ela é ótima com <b>linguagem e padrões</b>.</span></li><li><span>Ela precisa de <b>você</b> para dar direção e conferir o resultado.</span></li></ol></div>`,
        `<div class="card"><h3>🧭 Na prática: quem faz o quê</h3><p>Pense numa tarefa comum, como responder a mensagem de um cliente que pediu orçamento. A divisão saudável fica assim:</p>
          <div class="tw"><table class="tbl"><tr><th>A IA faz</th><th>Você faz</th></tr>
          <tr><td>Escreve um rascunho educado e organizado</td><td>Diz o que precisa ser respondido e para quem</td></tr>
          <tr><td>Sugere 2 ou 3 jeitos de falar</td><td>Escolhe o tom que combina com o seu negócio</td></tr>
          <tr><td>Lembra itens que costumam aparecer num orçamento</td><td>Confere preços, prazos e o que você realmente consegue entregar</td></tr></table></div>
          <p>Repare: a IA acelera a parte de escrever e organizar, mas o conhecimento do seu negócio, o julgamento e a responsabilidade continuam com você.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique em voz alta, como se falasse com uma criança de 10 anos: "O que é IA e por que ela não é um robô que pensa?" Se travar, volte à analogia do estagiário.</div>`
      ],
      ch:[
        { who:'Dona Marta, 58 anos, dona de uma padaria', says:'Meu neto disse que a IA já pensa e sente como a gente. Então posso deixar ela decidir o preço de tudo na padaria, né?',
          q:'Qual é a melhor resposta para Dona Marta?',
          opts:[
            {t:'A IA sente e pensa como uma pessoa, então pode decidir tudo sozinha.', ok:false, why:'A IA não sente nem pensa como uma pessoa: ela gera respostas a partir de padrões que aprendeu. As decisões do negócio continuam sendo suas.'},
            {t:'A IA é uma ferramenta que ajuda e sugere, mas quem decide o preço, conhecendo a padaria, é a Dona Marta.', ok:true, why:'Exato. A IA pode calcular, comparar e sugerir, mas não conhece sua clientela, seus custos reais nem seu bairro. A decisão final é humana.'},
            {t:'A IA só serve para empresas grandes, então a padaria não tem como usar.', ok:false, why:'Qualquer pessoa pode usar IA, inclusive com ferramentas gratuitas, por exemplo para criar cardápio ou responder clientes. O erro é achar que ela é só para gigantes.'}
          ]},
        { who:'Seu Antônio, 63 anos, aposentado', says:'Nunca usei IA na vida. Isso é coisa de jovem, eu nem tenho nada a ver com isso.',
          q:'O que mostra que Seu Antônio provavelmente já usa IA?',
          opts:[
            {t:'Nada: IA só existe em laboratórios e empresas de tecnologia.', ok:false, why:'A IA já está em aplicativos comuns do celular, do banco e do e-mail. Ela não está só em laboratórios.'},
            {t:'Ele só usaria IA se tivesse comprado um robô.', ok:false, why:'A IA do dia a dia é um programa, não um robô. Ela roda dentro de apps que você já tem.'},
            {t:'O corretor do teclado, o filtro de spam do e-mail e as sugestões de vídeo do celular dele já usam IA.', ok:true, why:'Isso mesmo. Muita gente usa IA sem perceber. A novidade é a IA generativa, com a qual você conversa e pede textos e imagens.'}
          ]},
        { who:'Juliana, 30 anos, manicure autônoma', says:'Quero usar a IA para responder as clientes no WhatsApp. Ela consegue fazer isso sozinha, sem eu olhar?',
          q:'Qual é a divisão de tarefas mais saudável?',
          opts:[
            {t:'A IA ajuda a escrever rascunhos de respostas, e a Juliana confere horários, preços e o tom antes de enviar.', ok:true, why:'A IA acelera a escrita, mas só a Juliana conhece a agenda, os preços e as clientes. Ela dá a direção e confere.'},
            {t:'A IA responde tudo sozinha, porque escreve melhor que a Juliana.', ok:false, why:'Escrever bem não é o mesmo que saber a agenda e os preços dela. Sem conferência, a IA pode prometer o que não existe.'},
            {t:'Não dá para usar IA em nada ligado a clientes.', ok:false, why:'Dá, sim: rascunhos de mensagens são um ótimo uso. O cuidado é revisar e não colar dados pessoais das clientes.'}
          ]}
      ]},
    { id:'1.2', title:'Como a IA aprende', min:8,
      body:[
        `<div class="card analogy"><h3>📚 Reconhecer a letra da vovó</h3><p>Depois de ver centenas de bilhetes da vovó, você reconhece a letra dela até num bilhete novo, sem que ninguém tenha te ensinado regra nenhuma. Você <b>aprendeu por exemplos</b>. A IA aprende assim também: vendo uma quantidade enorme de exemplos.</p></div>`,
        `<div class="term"><b>Treinamento</b> = etapa em que a IA vê muitos exemplos e se ajusta para acertar mais. <b>Dados</b> = os exemplos usados no treino, como textos, imagens e áudios. <b>Padrão</b> = algo que se repete e que a IA aprende a reconhecer. <b>Prompt</b> = o pedido ou a pergunta que você escreve para a IA.</div>`,
        `<div class="card"><h3>Exemplos + padrões = respostas</h3><p>Os modelos de linguagem, os "cérebros" dos chats, foram treinados com bilhões de textos. Aprenderam quais palavras costumam vir depois de quais. Ao responder, o modelo monta o texto palavra por palavra, escolhendo continuações prováveis e coerentes com o seu pedido. Por isso:</p>
          <ol class="golden"><li><span>Se há muito exemplo bom sobre o assunto, a IA tende a ir bem.</span></li><li><span>Se o assunto é recente, muito local ou raro (como a lei do seu município), ela pode errar.</span></li><li><span>Ela não "consulta a verdade": produz o que parece <b>plausível</b>. Algumas ferramentas conseguem buscar na internet, mas o princípio é o mesmo: confira.</span></li></ol>
          <p>O caminho completo:</p>
          <div class="pipe"><div class="node ink">Dados</div><div class="ar">➜</div><div class="node ink">Treinamento</div><div class="ar">➜</div><div class="node ink">Modelo</div><div class="ar">➜</div><div class="node yel">Seu prompt</div><div class="ar">➜</div><div class="node ink">Resposta</div></div></div>`,
        `<div class="card"><h3>🔎 O que isso muda no seu uso</h3><p>Saber como a IA aprendeu ajuda a prever quando ela vai bem e quando vai tropeçar:</p>
          <div class="tw"><table class="tbl"><tr><th>Pergunta</th><th>Expectativa</th></tr>
          <tr><td>"Explique o que é juros compostos"</td><td>✅ Assunto com muitos exemplos: tende a ir bem.</td></tr>
          <tr><td>"Qual o horário da feira do meu bairro?"</td><td>⚠️ Informação local e que muda: pode inventar.</td></tr>
          <tr><td>"Quem ganhou o jogo de ontem?"</td><td>⚠️ Fato recente: depende de a ferramenta buscar na internet, e mesmo assim confira.</td></tr></table></div>
          <p>Outro ponto: a IA também aprendeu com textos com erros e preconceitos. Ela pode repetir esses defeitos com toda a naturalidade. Por isso o seu olhar crítico faz parte do processo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos: "Como a IA aprendeu a escrever textos?" Use um exemplo seu, como aprender a reconhecer a letra de alguém.</div>`
      ],
      ch:[
        { who:'Rafael, 24 anos, estudante de Administração', says:'Perguntei para a IA sobre uma lei que mudou mês passado e ela respondeu com toda a confiança. Então deve estar certo, né?',
          q:'O que explica o risco nessa situação?',
          opts:[
            {t:'A IA sempre pesquisa na internet em tempo real, então a resposta é sempre atualizada.', ok:false, why:'Nem toda ferramenta pesquisa na internet, e mesmo as que pesquisam podem errar. Não dá para assumir que a resposta está atualizada.'},
            {t:'Como a resposta veio longa e bem escrita, é sinal de que está correta.', ok:false, why:'Texto bem escrito não prova que está certo. A IA escreve bem mesmo quando erra.'},
            {t:'A IA aprende com exemplos do passado e produz respostas plausíveis, então pode errar em assuntos recentes e ainda assim soar segura.', ok:true, why:'É isso. Por isso, em assuntos recentes ou importantes, você confere em fonte oficial.'}
          ]},
        { who:'Sandra, 47 anos, síndica de um prédio em Belo Horizonte', says:'Perguntei à IA qual é a regra de coleta de lixo reciclável da minha rua e ela me deu dias e horários bem certinhos.',
          q:'Como Sandra deve tratar essa resposta?',
          opts:[
            {t:'Como uma informação que precisa ser conferida no site ou no telefone da prefeitura, porque é local e muda com o tempo.', ok:true, why:'Informação muito local e que muda é onde a IA mais inventa. A fonte oficial da prefeitura resolve a dúvida.'},
            {t:'Como certa, porque a IA leu a internet inteira.', ok:false, why:'Ler muito não garante conhecer a regra da rua dela. Para assuntos locais, os exemplos no treino são poucos ou desatualizados.'},
            {t:'Como errada com certeza, porque a IA nunca acerta nada local.', ok:false, why:'Ela pode até acertar, mas não dá para saber sem conferir. O ponto não é desprezar, é verificar.'}
          ]},
        { who:'Kleber, 36 anos, professor de História', says:'Pedi à IA a mesma pergunta duas vezes e vieram respostas um pouco diferentes. Ela está com defeito?',
          q:'O que explica essa diferença?',
          opts:[
            {t:'A ferramenta quebrou e precisa ser reinstalada.', ok:false, why:'Não é defeito. Variar faz parte do jeito como o modelo monta as respostas.'},
            {t:'A IA monta o texto escolhendo continuações prováveis, então pode variar as palavras a cada tentativa.', ok:true, why:'Exato. Como ela escolhe entre várias continuações plausíveis, as respostas mudam um pouco. Por isso vale comparar versões e conferir fatos.'},
            {t:'A IA muda de opinião porque pensou melhor durante a noite.', ok:false, why:'A IA não tem opinião nem pensa entre uma pergunta e outra. A variação vem do modo como ela gera o texto.'}
          ]}
      ]},
    { id:'1.3', title:'O que a IA faz bem e onde ela erra', min:8,
      body:[
        `<div class="card analogy"><h3>⚖️ O GPS que não vê a rua interditada</h3><p>O GPS é ótimo para traçar rotas, mas se a rua foi fechada hoje de manhã, ele pode mandar você direto para o bloqueio. Quem está no volante precisa olhar para a rua. Com a IA é igual: ela ajuda muito, mas <b>quem confere é você</b>.</p></div>`,
        `<div class="term"><b>Alucinação</b> = quando a IA inventa uma informação falsa com jeito de verdadeira. <b>Viés</b> = tendência da IA de repetir preconceitos que existiam nos dados em que aprendeu. <b>Revisão humana</b> = você conferindo o resultado antes de usar.</div>`,
        `<div class="card"><h3>Onde confiar e onde conferir</h3>
          <div class="tw"><table class="tbl"><tr><th>✅ Faz bem</th><th>⚠️ Erra com frequência</th></tr>
          <tr><td>Resumir textos</td><td>Contas e números exatos</td></tr>
          <tr><td>Reescrever em outro tom</td><td>Datas</td></tr>
          <tr><td>Dar ideias</td><td>Citar leis, estudos e livros (pode inventar)</td></tr>
          <tr><td>Explicar assunto difícil de forma simples</td><td>Fatos muito recentes</td></tr>
          <tr><td>Organizar listas e planos; traduzir</td><td>Informações locais e específicas</td></tr></table></div>
          <p><b>Regra de ouro:</b> quanto mais grave a consequência de um erro (saúde, dinheiro, lei), mais você deve conferir em fonte oficial.</p>
          <p>Exemplo: pedir 10 ideias de nome para a sua loja é ótimo. Confiar na IA para a dose de um remédio, nunca.</p></div>`,
        `<div class="card"><h3>🚦 Os 3 erros mais comuns de quem começa</h3><ol class="golden"><li><span><b>Confiar no tom:</b> a IA escreve com segurança mesmo quando está errada. Tom confiante não é prova.</span></li><li><span><b>Usar a resposta como está:</b> copiar e colar sem ler. Sempre leia como se fosse o texto de um estagiário novo.</span></li><li><span><b>Desistir no primeiro erro:</b> a IA errou uma conta e a pessoa conclui que "não presta". O caminho é usar para o que ela faz bem e conferir o resto.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a IA, mesmo escrevendo bem, às vezes inventa coisas. Use a analogia do GPS.</div>`
      ],
      ch:[
        { who:'Seu Jorge, 45 anos, dono de uma oficina mecânica', says:'Pedi para a IA montar o orçamento de um cliente e ela somou tudo rapidinho. Posso mandar direto sem olhar?',
          q:'Qual é a atitude mais segura?',
          opts:[
            {t:'Usar a IA para organizar e redigir o orçamento, mas conferir os valores e a soma antes de enviar.', ok:true, why:'A IA ajuda muito na organização e na redação, mas pode errar contas. Conferir os números é o que protege você e o cliente.'},
            {t:'Mandar direto: se a IA escreveu com segurança, a conta está certa.', ok:false, why:'Segurança no tom não é garantia de acerto. Contas e números exatos estão entre os pontos onde a IA mais erra.'},
            {t:'Nunca mais usar IA, porque ela erra contas.', ok:false, why:'A IA continua útil para organizar e escrever. O risco se resolve com conferência, não abandonando a ferramenta.'}
          ]},
        { who:'Michele, 34 anos, mãe de duas crianças', says:'Meu filho está com febre. Vou perguntar à IA quanto de remédio dar, é mais rápido do que ligar para o pediatra.',
          q:'Qual é o uso adequado da IA nesse caso?',
          opts:[
            {t:'Seguir a dose que a IA indicar, porque ela leu muitos livros de medicina.', ok:false, why:'Dose de remédio é um caso de consequência grave. A IA pode errar números e não conhece a criança.'},
            {t:'Não usar a IA para a dose. Seguir a bula e o pediatra; a IA pode, no máximo, ajudar a organizar perguntas para levar à consulta.', ok:true, why:'Saúde é área de alto risco: a orientação vem de profissional e fonte oficial. A IA pode ajudar em tarefas secundárias, como listar dúvidas.'},
            {t:'Perguntar para duas IAs diferentes e usar a dose que aparecer nas duas.', ok:false, why:'Duas IAs podem errar igual. Para saúde, a conferência precisa ser com profissional e bula, não com outra IA.'}
          ]},
        { who:'Wesley, 26 anos, dono de uma hamburgueria delivery', says:'Quero usar a IA esta semana. Em qual destas tarefas ela vai me ajudar mais com menos risco?',
          q:'Qual tarefa combina melhor com o que a IA faz bem?',
          opts:[
            {t:'Calcular sozinha o imposto que ele deve pagar no mês.', ok:false, why:'Imposto envolve números exatos e regras que mudam. Erro aqui custa caro; o ideal é contador ou fonte oficial.'},
            {t:'Descobrir o endereço exato de um fornecedor novo da cidade dele.', ok:false, why:'Informação local e específica é onde a IA mais inventa. Melhor buscar direto no site ou mapa.'},
            {t:'Criar 10 ideias de nomes para um combo novo e reescrever a descrição do cardápio em tom divertido.', ok:true, why:'Ideias e reescrita são pontos fortes da IA, e um erro aqui é fácil de perceber e corrigir.'}
          ]}
      ]},
    { id:'1.4', title:'Mitos e verdades sobre a IA', min:8,
      body:[
        `<div class="card analogy"><h3>📺 O boato do grupo da família</h3><p>Todo grupo de família tem aquele boato que corre rápido: "vi num vídeo que...". Sobre IA circulam muitos assim, uns exagerando o perigo, outros exagerando o poder. Separar mito de verdade é o que faz você <b>usar com calma e com cuidado</b>.</p></div>`,
        `<div class="term"><b>Mito</b> = ideia popular que não corresponde aos fatos. <b>Automação</b> = quando uma tarefa passa a ser feita por máquina ou programa. <b>Histórico</b> = registro das conversas que fica salvo na sua conta.</div>`,
        `<div class="card"><h3>Cinco boatos, cinco respostas</h3>
          <div class="tw"><table class="tbl"><tr><th>Boato</th><th>O que é verdade</th></tr>
          <tr><td>"A IA sabe tudo."</td><td>Ela sabe muito sobre o que viu no treino, mas inventa quando não sabe e pode estar desatualizada.</td></tr>
          <tr><td>"A IA tem consciência e sentimentos."</td><td>Ela imita a linguagem humana muito bem, mas não sente nem tem vontade própria.</td></tr>
          <tr><td>"A IA vai tirar todos os empregos."</td><td>Muitas tarefas mudam, e algumas somem. Quem aprende a usar IA costuma ganhar tempo e valor, e novas funções aparecem.</td></tr>
          <tr><td>"O que eu falo com a IA é segredo."</td><td>Depende da ferramenta e das configurações. Suas conversas podem ficar guardadas. Trate como conversa num lugar público.</td></tr>
          <tr><td>"Precisa saber programar para usar."</td><td>Não. Você conversa em português, como num aplicativo de mensagens.</td></tr></table></div>
          <p>O caminho do meio é o mais útil: a IA não é mágica nem monstro. É uma ferramenta poderosa que exige um usuário atento.</p></div>`,
        `<div class="card"><h3>🧪 Como testar um boato sozinho</h3><ol class="golden"><li><span>Pergunte: <b>quem está dizendo</b> e se ganha algo com isso (curso milagroso, app pago, cliques).</span></li><li><span>Teste na prática: faça perguntas à IA sobre um assunto que você domina e veja onde ela acerta e onde erra.</span></li><li><span>Procure a informação em <b>veículo ou instituição confiável</b> antes de repassar.</span></li></ol><p>Esse hábito vale para IA e para qualquer notícia.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> escolha um dos boatos da tabela e explique a uma criança de 10 anos por que ele não é bem assim.</div>`
      ],
      ch:[
        { who:'Cida, 55 anos, costureira', says:'Vi um vídeo dizendo que a IA vai substituir todas as costureiras no ano que vem. Nem vale a pena eu aprender nada novo.',
          q:'Qual é a resposta mais equilibrada?',
          opts:[
            {t:'É verdade: em um ano ninguém mais vai trabalhar com costura.', ok:false, why:'É um exagero típico de boato. Trabalhos manuais e de atendimento próximo continuam existindo, e muitos ganham com a tecnologia.'},
            {t:'A IA muda algumas tarefas, mas a Cida pode usá-la a seu favor, por exemplo para divulgar o trabalho e organizar encomendas.', ok:true, why:'O caminho do meio: entender o que muda e usar a IA para ganhar tempo e clientes, em vez de ter medo ou ignorar.'},
            {t:'A IA nunca vai mudar nada no trabalho de ninguém.', ok:false, why:'Também é exagero, para o outro lado. Muitas tarefas já estão mudando, e por isso vale aprender.'}
          ]},
        { who:'Fernando, 42 anos, vendedor de seguros', says:'Contei para a IA detalhes de um cliente achando que era como um diário. Afinal, ninguém vê o que eu escrevo ali, certo?',
          q:'O que Fernando precisa saber?',
          opts:[
            {t:'Que a conversa pode ficar guardada pela empresa da ferramenta, dependendo das configurações, então dados de clientes não devem ir para lá.', ok:true, why:'A IA online é um serviço de uma empresa, não um diário trancado. Dados de clientes pedem cuidado e anonimização.'},
            {t:'Que está tudo bem, porque a IA esquece tudo assim que a conversa acaba.', ok:false, why:'Muitas ferramentas guardam o histórico na conta, e o uso dos dados depende das configurações. Não dá para contar com esquecimento.'},
            {t:'Que só há risco se ele escrever em inglês.', ok:false, why:'O idioma não muda nada. O risco está no tipo de informação compartilhada, não na língua.'}
          ]},
        { who:'Lívia, 19 anos, estudante do ensino técnico', says:'Meu amigo disse que, para usar IA de verdade, primeiro preciso fazer um curso de programação de seis meses.',
          q:'O que é verdade para quem está começando?',
          opts:[
            {t:'Sem programar, a IA não entende nada do que você escreve.', ok:false, why:'Os assistentes de IA entendem português comum. Programação é útil para usos avançados, não para começar.'},
            {t:'Só vale usar IA depois de saber como ela foi construída por dentro.', ok:false, why:'Ninguém precisa saber montar um motor para dirigir. Entender o básico e praticar já basta para começar.'},
            {t:'Dá para começar hoje, conversando em português; o que faz diferença é saber pedir bem e conferir as respostas.', ok:true, why:'Exato. O essencial para iniciantes é clareza no pedido e senso crítico, exatamente o que este curso ensina.'}
          ]}
      ]},
    { id:'1.5', title:'Palavras que você vai ouvir sobre IA', min:8,
      body:[
        `<div class="card analogy"><h3>📖 O vocabulário do mecânico</h3><p>Na primeira vez que você leva o carro à oficina, o mecânico fala em "junta do cabeçote" e "pastilha" e você só concorda com a cabeça. Depois que aprende meia dúzia de palavras, a conversa fica clara e ninguém te engana. Com IA é igual: <b>poucos termos já tiram o medo das notícias e dos vídeos</b>.</p></div>`,
        `<div class="term"><b>Chatbot</b> = programa com o qual você conversa por mensagens. <b>IA generativa</b> = IA que cria conteúdo novo, como texto, imagem, áudio ou código. <b>Modelo de linguagem</b> = o "cérebro" treinado com textos que gera as respostas.</div>`,
        `<div class="card"><h3>Mini dicionário para o dia a dia</h3>
          <div class="tw"><table class="tbl"><tr><th>Você ouve</th><th>Quer dizer</th><th>Por que importa</th></tr>
          <tr><td>Prompt</td><td>O pedido que você escreve</td><td>Pedido melhor, resposta melhor</td></tr>
          <tr><td>Alucinação</td><td>Informação inventada com cara de verdade</td><td>Motivo para conferir sempre</td></tr>
          <tr><td>Contexto</td><td>Tudo o que a IA sabe da conversa atual</td><td>Conversas longas podem confundir a IA</td></tr>
          <tr><td>Treinamento</td><td>Fase em que a IA aprendeu com exemplos</td><td>Ela pode estar desatualizada</td></tr>
          <tr><td>Multimodal</td><td>Entende texto, imagem e áudio</td><td>Você pode mandar foto ou falar</td></tr>
          <tr><td>Agente de IA</td><td>IA que executa tarefas em vários passos, às vezes usando outros programas</td><td>Exige ainda mais supervisão</td></tr>
          <tr><td>Deepfake</td><td>Vídeo, foto ou áudio falso feito com IA</td><td>Base de muitos golpes</td></tr></table></div>
          <p>Você não precisa decorar a tabela. O objetivo é reconhecer a palavra quando ela aparecer e saber o que perguntar.</p></div>`,
        `<div class="card"><h3>🧠 Como lidar com termos novos</h3><p>Sempre vão surgir palavras novas, e muitas são usadas para impressionar ou vender. Quando ouvir uma, faça três perguntas: <b>o que isso faz na prática?</b>, <b>que problema resolve para mim?</b> e <b>quais cuidados exige?</b> Você pode, inclusive, pedir à própria IA para explicar o termo com um exemplo do seu dia a dia, e depois conferir numa fonte confiável se a explicação faz sentido. Desconfie de quem usa muitos termos difíceis e não consegue explicar de forma simples o que está vendendo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> escolha três palavras da tabela e explique cada uma para alguém da sua família com um exemplo da vida real.</div>`
      ],
      ch:[
        { who:'Seu Benedito, 66 anos, dono de uma banca de jornal', says:'Li que a IA "alucinou" numa reportagem. Então ela fica doida e tem que ser desligada?',
          q:'O que "alucinação" significa nesse contexto?',
          opts:[
            {t:'Que a IA estragou de vez e não pode mais ser usada.', ok:false, why:'Não é defeito permanente. É um comportamento conhecido que se resolve conferindo as respostas.'},
            {t:'Que a IA inventou uma informação falsa com aparência de verdadeira.', ok:true, why:'Exato. Alucinação é o nome para invenções convincentes, e é por isso que fatos importantes precisam ser conferidos.'},
            {t:'Que a IA teve sentimentos e ficou confusa.', ok:false, why:'A IA não tem sentimentos. O termo é só uma comparação para o erro de inventar informação.'}
          ]},
        { who:'Rosângela, 39 anos, dona de uma loja de roupas', says:'Um vendedor me ofereceu um "agente de IA" que responde clientes e faz pedidos sozinho. Parece ótimo, posso ligar e esquecer?',
          q:'Qual é a postura mais sensata?',
          opts:[
            {t:'Ligar e esquecer, porque agente de IA não erra.', ok:false, why:'Agentes também erram, e como agem em vários passos, um erro pode virar pedido errado ou promessa indevida.'},
            {t:'Recusar qualquer tecnologia nova.', ok:false, why:'Pode ser útil. O ponto é entender o que faz e quais cuidados exige antes de decidir.'},
            {t:'Perguntar o que ele faz na prática, que problema resolve e como ela acompanha e corrige o que ele faz.', ok:true, why:'Quanto mais a IA age sozinha, mais supervisão é necessária. As três perguntas ajudam a decidir com segurança.'}
          ]},
        { who:'Caíque, 20 anos, estudante de Logística', says:'O professor disse que o modelo pode estar desatualizado por causa do treinamento. Não entendi a ligação.',
          q:'Qual explicação está correta?',
          opts:[
            {t:'O modelo aprendeu com exemplos até certa época; o que aconteceu depois pode não estar no que ele sabe.', ok:true, why:'O treinamento acontece numa fase, com os dados disponíveis até ali. Por isso fatos recentes precisam de conferência.'},
            {t:'O modelo se atualiza sozinho a cada minuto com tudo o que acontece no mundo.', ok:false, why:'O treinamento não é contínuo assim. Algumas ferramentas buscam na internet, mas isso não é garantia.'},
            {t:'Treinamento é o curso que o usuário faz para aprender a usar a IA.', ok:false, why:'Aqui o termo se refere à fase em que a IA aprendeu com exemplos, não ao curso do usuário.'}
          ]}
      ]},
    { id:'1.7', title:'Classificar, prever e gerar: os 3 trabalhos da IA', min:13,
      body:[
        `<div class="card analogy"><h3>🏪 Os três funcionários da loja</h3><p>Numa loja de bairro, um funcionário <b>separa</b> as encomendas por bairro, outro <b>calcula</b> quanto pão assar amanhã olhando as vendas da semana e um terceiro <b>escreve</b> o cartaz da promoção. São três trabalhos diferentes. Quase toda IA que você encontra faz um desses três trabalhos, e cada um erra de um jeito.</p></div>`,
        `<div class="term"><b>Classificar</b> = colocar algo numa categoria (spam ou não spam, compra normal ou suspeita). <b>Prever</b> = estimar um número ou o que vem a seguir (tempo de entrega, vendas do mês, a próxima palavra). <b>Gerar</b> = criar um conteúdo novo (texto, imagem, áudio).</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: que trabalho é esse?</h3><p>Veja cinco situações comuns. Para cada uma, a pergunta é: a IA está separando, estimando ou criando? E o que pode dar errado?</p>
          <div class="tw"><table class="tbl"><tr><th>Situação</th><th>Trabalho</th><th>Como costuma errar</th></tr>
          <tr><td>O banco bloqueia uma compra no cartão</td><td>Classificar (suspeita ou normal)</td><td>Bloqueia uma compra sua de verdade (alarme falso)</td></tr>
          <tr><td>O app de entrega mostra "chega em 35 min"</td><td>Prever</td><td>Chuva e trânsito mudam tudo: é estimativa, não promessa</td></tr>
          <tr><td>O teclado do celular completa a palavra</td><td>Prever (a próxima palavra)</td><td>Completa com a palavra errada</td></tr>
          <tr><td>O desbloqueio do celular reconhece seu rosto</td><td>Classificar (é você ou não)</td><td>Falha com pouca luz ou de óculos escuros</td></tr>
          <tr><td>O chat escreve a legenda do seu post</td><td>Gerar</td><td>Texto genérico ou com informação inventada</td></tr></table></div>
          <p>Curiosidade importante: o chat <b>gera</b> texto <b>prevendo</b> a continuação mais provável, palavra por palavra (lição 1.2). Por isso ele parece criativo e, ao mesmo tempo, pode inventar com toda a naturalidade.</p></div>`,
        `<div class="card"><h3>🧭 O que fazer com cada tipo</h3><ol class="golden"><li><span><b>Classificação:</b> pergunte "o que acontece quando ela erra?" e saiba como corrigir (marcar "não é spam", ligar para o banco).</span></li><li><span><b>Previsão:</b> trate como estimativa com margem. Use como referência e junte com o que você sabe (feriado, chuva, promoção).</span></li><li><span><b>Geração:</b> leia como rascunho e confira fatos, números e nomes antes de usar.</span></li></ol></div>`,
        `<div class="card"><h3>⚠️ Erros comuns</h3><ol class="golden"><li><span><b>Confundir previsão com promessa:</b> "o app disse 35 minutos, então o entregador atrasou de propósito".</span></li><li><span><b>Achar que a categoria é a verdade final:</b> e-mail importante cai no spam e ninguém olha a pasta.</span></li><li><span><b>Achar que toda IA é um chat:</b> a maior parte da IA do seu dia nem conversa, só separa e estima em silêncio.</span></li></ol></div>`,
        `<div class="card"><h3>✋ Agora é sua vez (Quick, Draw!, 5 min)</h3><ol class="golden"><li><span>Abra o Quick, Draw! pelo endereço oficial (quickdraw.withgoogle.com). É gratuito e não pede cadastro.</span></li><li><span>Jogue uma rodada de 6 desenhos. Enquanto desenha, repare que a IA vai "chutando" nomes: ela está <b>classificando</b> o seu rabisco.</span></li><li><span>No fim, anote em quantos ela acertou e abra um que ela errou para ver os exemplos que ela conhecia.</span></li><li><span>Escreva uma frase com suas palavras: qual dos três trabalhos ela fez e por que errou aquele desenho.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> escolha três apps do seu celular e explique a alguém da família se a IA de cada um separa, estima ou cria.</div>`
      ],
      ch:[
        { who:'Cleide, 44 anos, dona de um pet shop', says:'O sistema de vendas disse que vou vender 120 sacos de ração no mês que vem. Já posso comprar exatamente 120?',
          q:'O que é mais sensato para a Cleide?',
          opts:[
            {t:'Comprar exatamente 120, porque a IA calculou com base nas vendas.', ok:false, why:'É uma previsão, não uma garantia. Comprar o número exato ignora a margem de erro e o que ela sabe do próprio negócio.'},
            {t:'Usar os 120 como referência e ajustar com o que ela sabe: feriados, promoções, clientes novos e o estoque que já tem.', ok:true, why:'Previsão é estimativa com margem. Juntar o número com o conhecimento dela é o uso certo.'},
            {t:'Ignorar a previsão, porque previsão de IA sempre erra.', ok:false, why:'Previsões erram, mas costumam ser uma boa referência. Jogar fora a informação também é desperdício.'}
          ]},
        { who:'Anderson, 29 anos, auxiliar administrativo', says:'Um e-mail importante de um fornecedor foi parar no spam e eu perdi o prazo. A IA do e-mail está quebrada?',
          q:'Qual é a melhor explicação e atitude?',
          opts:[
            {t:'Está quebrada: o certo é desligar o filtro de spam.', ok:false, why:'Sem o filtro, ele receberia uma enxurrada de golpes. O filtro acerta muito mais do que erra.'},
            {t:'A IA leu o e-mail e decidiu que o fornecedor não é confiável.', ok:false, why:'O filtro não julga pessoas: ele classifica por padrões, e às vezes um e-mail legítimo parece spam.'},
            {t:'O filtro classifica por padrões e às vezes erra. Ele deve marcar o e-mail como "não é spam" e olhar a pasta de spam de vez em quando.', ok:true, why:'Toda classificação tem alarmes falsos. Saber corrigir e conferir a pasta evita perder mensagens importantes.'}
          ]},
        { who:'Patrícia, 38 anos, professora do fundamental', says:'Quero mostrar para a turma um exemplo de IA que cria algo novo.',
          q:'Qual destes exemplos é de IA gerando conteúdo?',
          opts:[
            {t:'O aplicativo do banco marcando uma compra como suspeita.', ok:false, why:'Isso é classificar: a IA coloca a compra numa categoria (normal ou suspeita).'},
            {t:'Um assistente de IA criando uma lista nova de exercícios sobre frações.', ok:true, why:'Criar um conteúdo que não existia é gerar. E, como todo conteúdo gerado, a professora deve conferir as respostas dos exercícios.'},
            {t:'O app de mapas estimando a hora de chegada.', ok:false, why:'Isso é prever: a IA estima um tempo a partir do trânsito e de viagens anteriores.'}
          ]}
      ]},
    { id:'1.8', title:'Dados bons, IA boa: o que entra é o que sai', min:14,
      body:[
        `<div class="card analogy"><h3>🍞 O aprendiz que só viu pão queimado</h3><p>Se você ensina um aprendiz de padeiro mostrando só pães franceses queimados, ele vai achar que pão francês é escuro e duro. Ele não é burro: aprendeu direitinho com os exemplos <b>errados</b>. A IA é igual: ela fica tão boa quanto os exemplos que recebeu.</p></div>`,
        `<div class="term"><b>Exemplos de treino</b> = os dados mostrados à IA para ela aprender. <b>Dados desequilibrados</b> = muitos exemplos de um tipo e poucos do outro. <b>Atalho</b> = quando a IA aprende um detalhe que não importa (o fundo da foto, a luz) em vez do que importa (o objeto).</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: a cooperativa de reciclagem</h3><p>Mariana quer uma IA que separe <b>garrafa PET</b> de <b>lata</b> pela câmera, para ajudar a cooperativa do bairro.</p>
          <div class="flows">
            <div class="flow old"><h4>1ª tentativa</h4><div class="node">50 fotos de lata e só 8 de garrafa. Todas as latas fotografadas na mesa branca; as garrafas, no chão. Resultado: qualquer coisa no chão vira "garrafa", até uma caneca.</div></div>
            <div class="flow new"><h4>2ª tentativa</h4><div class="node good">Cerca de 40 fotos de cada, nos mesmos lugares, com luz e ângulos variados, inteiras e amassadas. Resultado: acerta muito mais e erra menos quando muda o lugar.</div></div>
          </div>
          <p style="margin-top:14px">Como ela descobriu o problema, perguntando "por quê?" até chegar na causa:</p>
          <div class="why-chain"><div>"A IA chamou a caneca de garrafa."</div><div>Por quê? → "A caneca estava no chão."</div><div>E por que o chão importa? → "No treino, só as garrafas estavam no chão."</div><div class="root">Causa: a IA aprendeu o fundo, não o objeto. O problema estava nos dados, não na IA.</div></div></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><div class="tw"><table class="tbl"><tr><th>Problema nos dados</th><th>Sinal que aparece</th></tr>
          <tr><td>Poucos exemplos</td><td>Só acerta em condições iguais às do treino</td></tr>
          <tr><td>Desequilíbrio</td><td>"Chuta" quase sempre a categoria que tinha mais exemplos</td></tr>
          <tr><td>Atalho (fundo, luz)</td><td>Erra quando muda o ambiente</td></tr>
          <tr><td>Pouca variedade de pessoas e lugares</td><td>Funciona pior com sotaques, tons de pele ou regiões que apareceram pouco: é o <b>viés</b> da lição 1.3 na prática</td></tr></table></div>
          <p>Isso vale também para os chats: assuntos com poucos textos de qualidade, como temas bem locais do Brasil, tendem a ter respostas mais fracas.</p></div>`,
        `<div class="card"><h3>✋ Agora é sua vez (Teachable Machine, 5 min)</h3><ol class="golden"><li><span>Abra teachablemachine.withgoogle.com e crie um "Projeto de imagem" padrão. É gratuito e não pede cadastro.</span></li><li><span>Crie 2 classes com objetos de casa (ex.: caneca e controle remoto) e grave <b>desequilibrado de propósito</b>: umas 40 fotos de um, 5 do outro, cada um num fundo diferente.</span></li><li><span>Treine e teste trocando os objetos de lugar. Anote os erros.</span></li><li><span>Agora equilibre (cerca de 30 de cada, fundos e ângulos variados), treine de novo e compare.</span></li><li><span>Escreva em 2 frases o que mudou e por quê.</span></li></ol><p>🔐 As fotos ficam no seu navegador. Mesmo assim, não filme documentos nem o rosto de outras pessoas sem autorização.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a alguém por que um aprendiz que só viu pão queimado não tem culpa do erro, e o que isso ensina sobre a IA.</div>`
      ],
      ch:[
        { who:'Rodrigo, 51 anos, dono de um hortifrúti', says:'Treinei um app para separar tomate bom de tomate passado, só com fotos tiradas de manhã na bancada. À tarde, com outra luz, ele erra muito.',
          q:'O que explica o problema e como resolver?',
          opts:[
            {t:'A IA cansa ao longo do dia; basta reiniciar o celular à tarde.', ok:false, why:'IA não cansa. Ela erra porque a situação da tarde é diferente dos exemplos que viu.'},
            {t:'Os exemplos eram parecidos demais (mesma luz e lugar). Ele deve incluir fotos com luz e lugares diferentes e treinar de novo.', ok:true, why:'A IA aprendeu com a luz da manhã como parte do padrão. Exemplos variados ensinam o que realmente importa: o tomate.'},
            {t:'Ele precisa comprar um celular com câmera mais cara.', ok:false, why:'Uma câmera melhor pode ajudar um pouco, mas o problema principal está nos exemplos do treino.'}
          ]},
        { who:'Vânia, 46 anos, gerente de RH', says:'A empresa quer usar um sistema que escolhe currículos aprendendo com as contratações antigas. Só que quase todos os contratados nos últimos anos foram homens.',
          q:'Qual é o risco?',
          opts:[
            {t:'Nenhum: máquina é neutra e não tem preconceito.', ok:false, why:'A máquina aprende com os dados. Se o histórico tem um padrão injusto, ela pode repeti-lo sem ninguém perceber.'},
            {t:'Só haveria problema se alguém programasse o sistema para preferir homens.', ok:false, why:'O viés pode vir dos exemplos, sem ninguém pedir. É por isso que ele é perigoso.'},
            {t:'O sistema pode repetir o padrão e favorecer homens. É preciso revisar os dados, testar os resultados e manter decisão humana.', ok:true, why:'Viés nos dados vira viés nas decisões. Revisão humana e dados mais equilibrados reduzem o risco.'}
          ]},
        { who:'Bianca, 17 anos, estudante do ensino técnico', says:'Na Teachable Machine, coloquei 60 fotos de gato e 6 de cachorro. Agora tudo que eu mostro vira gato.',
          q:'Qual ajuste resolve melhor?',
          opts:[
            {t:'Equilibrar: colocar uma quantidade parecida de fotos de cachorro, com fundos e ângulos variados, e treinar de novo.', ok:true, why:'Com dados desequilibrados, a IA aprende que "gato" é o chute mais seguro. Equilibrar corrige isso.'},
            {t:'Clicar em treinar mais vezes, com as mesmas fotos.', ok:false, why:'Treinar de novo com os mesmos exemplos repete o mesmo desequilíbrio.'},
            {t:'Apagar a classe cachorro, já que ela atrapalha.', ok:false, why:'Aí a IA só conhece gato e vai chamar tudo de gato. O problema continua.'}
          ]}
      ]},
    { id:'1.9', title:'Confiança não é certeza: o chute da IA', min:13,
      body:[
        `<div class="card analogy"><h3>🌦️ "70% de chance de chuva"</h3><p>A previsão do tempo diz 70% de chance de chuva. Você leva o guarda-chuva, mas sabe que pode não chover. A porcentagem mostra o tamanho da aposta, <b>não uma garantia</b>. Muitas IAs também trabalham com apostas, e o problema é que nem sempre elas mostram isso.</p></div>`,
        `<div class="term"><b>Confiança</b> = o quanto a IA "aposta" numa resposta, às vezes mostrada em porcentagem. <b>Caso fora do treino</b> = situação diferente de tudo o que a IA viu ao aprender. <b>"Não sei"</b> = resposta que muitas IAs não conseguem dar sozinhas.</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: as barrinhas da Teachable Machine</h3><p>Um modelo foi treinado com duas classes: <b>caneca</b> e <b>celular</b>. Veja o que acontece:</p>
          <div class="tw"><table class="tbl"><tr><th>O que aparece na câmera</th><th>Resultado</th><th>O que significa</th></tr>
          <tr><td>Uma caneca parecida com as do treino</td><td>97% caneca</td><td>Caso conhecido: tende a acertar</td></tr>
          <tr><td>Uma laranja, que ele nunca viu</td><td>88% caneca</td><td>Chute forçado: ele só conhece duas opções e precisa escolher uma</td></tr>
          <tr><td>A parede vazia</td><td>60% celular</td><td>Também é chute: não existe a opção "nada"</td></tr></table></div>
          <p>A laranja recebeu 88% sem ser caneca. O modelo não estava "quase certo": ele <b>não tinha como dizer "não sei"</b>. Nos chats acontece algo parecido: o texto sai fluente e firme mesmo quando a base é fraca, e normalmente nem aparece porcentagem.</p></div>`,
        `<div class="card"><h3>🧭 Como agir</h3><ol class="golden"><li><span>Caso parecido com o que a IA conhece e erro barato: use e confira de vez em quando.</span></li><li><span>Caso diferente do comum, ou resultado dividido (tipo 50% a 50%): olhe você mesmo.</span></li><li><span>Erro caro (dinheiro, saúde, segurança, direitos): sempre confira, não importa a porcentagem ou o tom.</span></li></ol></div>`,
        `<div class="card"><h3>⚠️ Erros comuns</h3><ol class="golden"><li><span><b>Ler 90% como "90% de chance de estar certo no mundo real".</b> É a aposta do modelo entre as opções que ele conhece.</span></li><li><span><b>Perguntar "tem certeza?" ao chat e aceitar o "sim".</b> Ele pode só repetir, ou mudar de ideia só para agradar. Isso não é conferência.</span></li><li><span><b>Esquecer os casos fora do treino.</b> É justamente neles que a IA erra com mais segurança.</span></li></ol></div>`,
        `<div class="card"><h3>✋ Agora é sua vez (Teachable Machine, 4 min)</h3><ol class="golden"><li><span>Use o modelo da lição anterior ou crie outro com 2 objetos de casa.</span></li><li><span>Mostre cada objeto e anote as porcentagens.</span></li><li><span>Mostre um terceiro objeto que ele nunca viu e depois aponte a câmera para a parede. Anote.</span></li><li><span>Responda por escrito: o modelo disse "não sei" alguma vez? Que porcentagem ele deu ao chute?</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a alguém por que uma IA que só conhece caneca e celular chama a laranja de caneca com 88%.</div>`
      ],
      ch:[
        { who:'Fábio, 40 anos, porteiro de condomínio', says:'O sistema da câmera disse 92% de certeza que a pessoa no portão é um morador. Posso abrir sem olhar?',
          q:'Qual é a atitude certa?',
          opts:[
            {t:'Abrir: 92% é praticamente certeza.', ok:false, why:'92% é a aposta do sistema, não uma garantia. Em segurança, os 8% restantes podem ser justamente o problema.'},
            {t:'Usar a indicação como ajuda, mas confirmar do jeito de sempre (interfone, cadastro, olhar a pessoa) antes de liberar.', ok:true, why:'Acesso ao prédio é decisão de segurança: a IA ajuda, a conferência humana decide.'},
            {t:'Desligar o sistema, porque ele pode errar.', ok:false, why:'O sistema pode ser útil como apoio. O ajuste é não deixar a decisão só com ele.'}
          ]},
        { who:'Luciana, 23 anos, estudante de Pedagogia', says:'Treinei a Teachable Machine com maçã e banana. Mostrei um limão e ela disse 85% banana!',
          q:'Por que isso aconteceu?',
          opts:[
            {t:'O modelo está com defeito e precisa ser refeito do zero.', ok:false, why:'Não é defeito: é o comportamento esperado de um modelo que só conhece duas opções.'},
            {t:'O modelo aprendeu sozinho que limão é um tipo de banana.', ok:false, why:'Ele nunca viu limão. Não aprendeu nada sobre limões; só escolheu entre o que conhecia.'},
            {t:'O limão estava fora do treino e o modelo é obrigado a escolher entre maçã e banana; ele não tem a opção "não sei".', ok:true, why:'Casos fora do treino geram chutes, às vezes com porcentagem alta. Por isso porcentagem não é certeza.'}
          ]},
        { who:'Henrique, 34 anos, motorista', says:'Perguntei ao chat o prazo para recorrer de uma multa. Depois perguntei "tem certeza?" e ele respondeu "sim, tenho certeza".',
          q:'O que Henrique deve fazer?',
          opts:[
            {t:'Conferir o prazo na própria notificação da multa e no site oficial do órgão que aplicou a multa.', ok:true, why:'O "sim" do chat não é verificação. Prazo de recurso é coisa séria e está escrito na notificação e no site oficial.'},
            {t:'Confiar, porque o chat confirmou duas vezes.', ok:false, why:'Repetir a mesma resposta não a torna verdadeira. A confirmação precisa vir de outra fonte.'},
            {t:'Perguntar de novo até a resposta mudar e ficar com a última.', ok:false, why:'Mudar de resposta só mostra que ele não tem certeza. A última versão não é mais confiável que a primeira.'}
          ]}
      ]},
    { id:'1.6', title:'Projeto: onde a IA ajuda na minha vida', min:35,
      body:[`<div class="card"><p>Hora de aplicar o módulo na sua realidade. Você vai olhar para a sua rotina e separar, com honestidade, onde a IA pode ajudar e onde ela não deve entrar. Não existe resposta certa única: o que vale é o seu raciocínio.</p></div>`],
      projeto:{
        entrega:'Um mapa pessoal com 5 tarefas da sua rotina, dizendo para cada uma se a IA ajuda, como ajuda e o que você precisa conferir.',
        passos:[
          'Liste 5 tarefas reais da sua semana (trabalho, estudo ou casa).',
          'Para cada tarefa, classifique: a IA ajuda muito, ajuda pouco ou não deve ser usada.',
          'Explique o porquê usando a tabela "faz bem / erra com frequência" da lição 1.3.',
          'Para as tarefas em que a IA ajuda, escreva o que você vai conferir antes de usar o resultado.',
          'Teste a IA em pelo menos 2 dessas tarefas e anote o que deu certo, o que precisou corrigir e qual termo da lição 1.5 apareceu na prática (por exemplo, uma alucinação).'
        ],
        checklist:[
          'As 5 tarefas são reais e da minha rotina, não exemplos genéricos.',
          'Pelo menos 1 tarefa ficou marcada como "não usar IA" ou "conferir muito", com justificativa.',
          'Cada tarefa com IA tem o que conferir (números, datas, nomes, fontes).',
          'Registrei o resultado de 2 testes práticos com a IA.'
        ],
        minimo:400
      }}
  ]},
  { id:2, icon:'🛠️', title:'Mão na massa', sub:'Conhecendo e usando as ferramentas', lessons:[
    { id:'2.1', title:'Assistentes de IA: por onde começar', min:8,
      body:[
        `<div class="card analogy"><h3>💬 Lojas do mesmo shopping</h3><p>Existem várias lojas de IA, cada uma com sua vitrine, mas todas vendem o mesmo tipo de produto: conversar e gerar conteúdo. Se você aprende a usar uma, <b>já aprendeu a maior parte de todas</b>.</p></div>`,
        `<div class="term"><b>Assistente de IA (chatbot)</b> = ferramenta onde você conversa com a IA por texto, voz ou imagem. <b>Plano gratuito</b> = versão sem custo, geralmente com limites de uso. <b>Conta</b> = o seu cadastro na ferramenta, onde ficam suas conversas.</div>`,
        `<div class="card"><h3>Como escolher sem se perder</h3><p>Existem vários assistentes populares, e a maioria tem plano gratuito, como ChatGPT, Gemini, Claude e Copilot. Limites e recursos mudam com frequência, então confira na página oficial de cada um. Para começar:</p>
          <ol class="golden"><li><span>Escolha <b>UMA</b> ferramenta (não precisa testar todas).</span></li><li><span>Crie a conta pelo site ou app oficial.</span></li><li><span>Faça uma pergunta simples do seu dia a dia.</span></li><li><span>Depois de uma semana, teste uma segunda para comparar.</span></li></ol>
          <p>⚠️ Cuidado com "apps de IA" desconhecidos que pedem pagamento ou muitos dados: use sempre o site ou a loja de aplicativos oficial.</p></div>`,
        `<div class="card"><h3>🔐 Antes da primeira pergunta: 4 ajustes</h3><ol class="golden"><li><span><b>Senha forte e verificação em duas etapas</b> na conta, como no seu e-mail.</span></li><li><span><b>Abra as configurações</b> e veja as opções de privacidade e de histórico: algumas ferramentas deixam escolher se as conversas podem ser usadas para melhorar o serviço.</span></li><li><span><b>Desconfie de cobranças</b>: o plano gratuito basta para aprender. Só pague quando sentir falta de algo concreto.</span></li><li><span><b>Salve o link oficial</b> nos favoritos para não cair em páginas falsas que imitam a ferramenta.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que aprender a usar uma ferramenta de IA já ajuda a usar as outras.</div>`
      ],
      ch:[
        { who:'Luana, 27 anos, recepcionista', says:'Vi 12 ferramentas de IA num vídeo. Vou assinar todas hoje para não ficar para trás!',
          q:'Qual é o melhor conselho para a Luana?',
          opts:[
            {t:'Assinar todas, assim ela garante o melhor resultado possível.', ok:false, why:'Assinar tudo gera gasto sem necessidade, e as ferramentas são parecidas. Dá para aprender o essencial com uma só, no plano gratuito.'},
            {t:'Esperar a IA ficar perfeita para só então começar a usar.', ok:false, why:'A IA continua evoluindo. Quem pratica agora já ganha tempo e experiência. Esperar só atrasa.'},
            {t:'Começar com uma ferramenta, no plano gratuito, praticando com tarefas do dia a dia, e só depois comparar com outra.', ok:true, why:'Foco em uma ferramenta acelera o aprendizado e não custa nada. A comparação vem depois, com base na sua experiência.'}
          ]},
        { who:'Seu Raimundo, 61 anos, comerciante em Fortaleza', says:'Recebi no WhatsApp um link de um "app de IA oficial" que pede o número do meu cartão para liberar o acesso grátis.',
          q:'O que Seu Raimundo deve fazer?',
          opts:[
            {t:'Colocar o cartão, porque se é grátis não vai cobrar nada.', ok:false, why:'Pedir cartão para algo "grátis" por link no WhatsApp é sinal clássico de golpe.'},
            {t:'Ignorar o link e acessar a ferramenta só pelo site oficial ou pela loja de aplicativos do celular.', ok:true, why:'Ferramentas confiáveis são baixadas pela loja oficial ou acessadas pelo site oficial. Links recebidos por mensagem merecem desconfiança.'},
            {t:'Repassar o link para os amigos testarem primeiro.', ok:false, why:'Repassar espalha o possível golpe. O certo é não clicar e avisar quem enviou.'}
          ]},
        { who:'Natália, 32 anos, auxiliar de escritório', says:'Criei minha conta na ferramenta de IA com a mesma senha simples que uso em tudo. Tem problema?',
          q:'Qual é a melhor orientação?',
          opts:[
            {t:'Nenhum problema, porque a conta de IA não tem nada importante.', ok:false, why:'O histórico pode guardar textos do trabalho e informações pessoais. E senha repetida, se vazar num site, abre todos os outros.'},
            {t:'Basta trocar a senha uma vez por ano.', ok:false, why:'Trocar de vez em quando não resolve o problema de usar a mesma senha simples em tudo.'},
            {t:'Usar uma senha forte e única, ativar a verificação em duas etapas e olhar as configurações de privacidade.', ok:true, why:'A conta de IA guarda suas conversas. Protegê-la como o e-mail evita que alguém leia ou use seu histórico.'}
          ]}
      ]},
    { id:'2.2', title:'Sua primeira conversa', min:8,
      body:[
        `<div class="card analogy"><h3>✍️ Pedir um café na cafeteria</h3><p>Se você diz só "me vê um café", pode vir qualquer coisa. Se diz "café coado, sem açúcar, copo grande", vem o que você queria. Com a IA é igual: <b>quanto mais claro o pedido, melhor a resposta</b>.</p></div>`,
        `<div class="term"><b>Prompt</b> = o pedido que você escreve para a IA. <b>Contexto</b> = informações sobre a situação, como quem você é, para quem é e para quê. <b>Iteração</b> = melhorar a resposta aos poucos, pedindo ajustes.</div>`,
        `<div class="card"><h3>A fórmula do pedido em 4 partes</h3>
          <ol class="golden"><li><span><b>Papel</b>: quem a IA deve ser ("Você é um professor paciente").</span></li><li><span><b>Tarefa</b>: o que fazer ("explique o que é inflação").</span></li><li><span><b>Contexto</b>: para quem e para quê ("para minha mãe, de 60 anos").</span></li><li><span><b>Formato</b>: como entregar ("em 5 linhas, com um exemplo do mercado").</span></li></ol>
          <div class="flows">
            <div class="flow old"><h4>Antes</h4><div class="node">"Fale de inflação."</div></div>
            <div class="flow new"><h4>Depois</h4><div class="node good">"Você é um professor paciente. Explique o que é inflação para minha mãe, de 60 anos, em 5 linhas, com um exemplo do mercado."</div></div>
          </div>
          <p style="margin-top:14px">Depois da primeira resposta, converse: "Mais simples", "Faça uma lista", "Dê outro exemplo". A conversa é de ida e volta, e cada ajuste melhora o resultado.</p></div>`,
        `<div class="card"><h3>🧩 Como montar o seu pedido (sem copiar pronto)</h3><p>Antes de escrever, responda para si mesmo quatro perguntas rápidas:</p>
          <ol class="golden"><li><span>Quem seria a pessoa ideal para me ajudar nisso? (vira o <b>papel</b>)</span></li><li><span>O que exatamente eu quero receber? (vira a <b>tarefa</b>)</span></li><li><span>Para quem é e por que eu preciso disso? (vira o <b>contexto</b>)</span></li><li><span>Como vou usar: lista, mensagem curta, tabela? (vira o <b>formato</b>)</span></li></ol>
          <p>Erro comum: escrever o pedido perfeito de primeira e desistir se não vier bom. A primeira resposta é um ponto de partida; a segunda e a terceira, com ajustes seus, é que ficam boas.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> peça algo de que você precisa hoje usando as 4 partes. Depois explique a alguém por que ficou melhor do que um pedido solto.</div>`
      ],
      ch:[
        { who:'Bruno, 35 anos, vendedor', says:'Escrevi \'faz um texto de vendas\' e a IA mandou um texto genérico. Essa IA não presta!',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Trocar de IA até achar uma que adivinhe o que ele quer.', ok:false, why:'Qualquer IA responde de forma genérica a um pedido genérico. O ajuste está no pedido, não na ferramenta.'},
            {t:'Detalhar o pedido: dizer o produto, para quem é, o tom e o tamanho do texto.', ok:true, why:'Com papel, tarefa, contexto e formato, a IA tem o que precisa para entregar algo útil. Depois é só ajustar conversando.'},
            {t:'Repetir o mesmo pedido várias vezes até acertar por sorte.', ok:false, why:'Repetir o mesmo pedido vago só gera variações do mesmo texto genérico. Melhorar o pedido é o caminho.'}
          ]},
        { who:'Aline, 29 anos, organiza a festa de 1 ano do filho', says:'Pedi à IA ideias de festa e veio uma lista enorme de coisas caras e longe da minha realidade.',
          q:'Qual parte da fórmula mais faltou no pedido dela?',
          opts:[
            {t:'O contexto: orçamento, número de convidados, idade da criança e onde vai ser a festa.', ok:true, why:'Sem contexto, a IA usa o padrão mais comum. Com orçamento e local, ela ajusta as ideias à vida real da Aline.'},
            {t:'O papel: faltou dizer "você é um robô".', ok:false, why:'O papel ajuda, mas o problema aqui é a IA não saber a realidade da festa. Isso é contexto.'},
            {t:'Nada: a IA deveria saber sozinha quanto ela pode gastar.', ok:false, why:'A IA só sabe o que você conta. Se o orçamento não foi dito, ela não tem como adivinhar.'}
          ]},
        { who:'Hugo, 44 anos, eletricista', says:'A IA me explicou como calcular a potência de um chuveiro, mas usou palavras difíceis demais. Já era, não entendi.',
          q:'O que Hugo deve fazer em seguida?',
          opts:[
            {t:'Fechar a conversa, porque a IA não sabe explicar.', ok:false, why:'Desistir na primeira resposta desperdiça a principal vantagem: a conversa de ida e volta.'},
            {t:'Copiar a resposta e mostrar para um cliente, mesmo sem entender.', ok:false, why:'Usar o que você não entendeu é arriscado, ainda mais em assunto de eletricidade. Primeiro entenda e confira.'},
            {t:'Continuar a conversa pedindo "explique de novo com palavras simples e um exemplo de chuveiro de casa".', ok:true, why:'A iteração resolve: ajustar o formato e o nível da explicação costuma melhorar muito a segunda resposta.'}
          ]}
      ]},
    { id:'2.3', title:'IA além do texto: imagem, voz e arquivos', min:8,
      body:[
        `<div class="card analogy"><h3>🖼️ O canivete suíço</h3><p>Um canivete tem várias lâminas no mesmo cabo. Muitos assistentes de IA também: além de texto, conseguem olhar uma foto, ouvir sua voz, ler um arquivo e criar imagens, <b>dependendo da ferramenta e do plano</b>.</p></div>`,
        `<div class="term"><b>Multimodal</b> = IA que entende mais de um tipo de conteúdo, como texto, imagem e áudio. <b>Transcrição</b> = transformar fala em texto escrito. <b>IA de imagem</b> = IA que cria imagens a partir de uma descrição.</div>`,
        `<div class="card"><h3>4 usos simples para testar</h3>
          <ol class="golden"><li><span><b>Foto → explicação</b>: fotografe uma planta, um aparelho ou uma página de livro e pergunte "o que é isto?" ou "traduza e explique".</span></li><li><span><b>Voz → texto</b>: dite uma ideia e peça para a IA organizar em tópicos.</span></li><li><span><b>Arquivo → resumo</b>: envie um texto seu e peça um resumo em 5 pontos.</span></li><li><span><b>Descrição → imagem</b>: peça uma ilustração para um post ou convite.</span></li></ol>
          <p>⚠️ Atenção: nem toda ferramenta ou plano gratuito oferece tudo, e os limites mudam. Fotos nítidas funcionam melhor. E não envie imagens ou arquivos com dados pessoais de outras pessoas (veremos isso no módulo 3).</p></div>`,
        `<div class="card"><h3>🎯 Dicas para cada tipo</h3><div class="tw"><table class="tbl"><tr><th>Tipo</th><th>O que melhora o resultado</th></tr>
          <tr><td>Foto</td><td>Luz boa, imagem reta, sem cortar partes importantes. Diga o que você quer saber da foto.</td></tr>
          <tr><td>Voz</td><td>Lugar sem barulho e frases completas. Depois revise a transcrição: nomes e números costumam sair errados.</td></tr>
          <tr><td>Arquivo</td><td>Diga o que procurar ("os prazos", "os valores") e peça para citar o trecho de onde tirou.</td></tr>
          <tr><td>Imagem criada</td><td>Descreva estilo, cores e o que não pode aparecer. Textos dentro de imagens geradas costumam sair com erros.</td></tr></table></div></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que significa uma IA "entender uma foto".</div>`
      ],
      ch:[
        { who:'Tânia, 41 anos, professora', says:'Fotografei a página de um livro em inglês. Dá para a IA me explicar o que está escrito?',
          q:'Qual é a melhor resposta?',
          opts:[
            {t:'Dá, em muitas ferramentas: enviar a foto e pedir "traduza e explique em português simples", conferindo se a foto está nítida e se o plano oferece esse recurso.', ok:true, why:'Muitas ferramentas leem imagens. Foto nítida e um pedido claro melhoram o resultado, e vale confirmar se o seu plano inclui o recurso.'},
            {t:'Não dá, a IA só entende texto digitado.', ok:false, why:'Muitos assistentes atuais entendem imagens, voz e arquivos, dependendo da ferramenta e do plano.'},
            {t:'Dá, e o resultado é sempre perfeito, mesmo com a foto tremida.', ok:false, why:'Foto tremida ou cortada atrapalha a leitura e pode gerar erros. Nitidez e conferência continuam importantes.'}
          ]},
        { who:'Gilberto, 50 anos, representante comercial', says:'Ditei para a IA o pedido de um cliente enquanto dirigia para casa. Ela transformou em texto e eu já ia mandar para a fábrica.',
          q:'O que Gilberto deve conferir antes de enviar?',
          opts:[
            {t:'Nada, transcrição de voz é sempre exata.', ok:false, why:'Ruído, sotaque e fala rápida geram erros, principalmente em números e nomes.'},
            {t:'Os números, quantidades, nomes e códigos de produto, que são os pontos onde a transcrição mais erra.', ok:true, why:'A transcrição economiza tempo, mas números e nomes trocados num pedido viram prejuízo. Conferir esses pontos é obrigatório.'},
            {t:'Apenas a pontuação, para o texto ficar bonito.', ok:false, why:'Pontuação é o menor dos problemas. Um "15" que virou "50" é muito mais grave.'}
          ]},
        { who:'Priscila, 28 anos, confeiteira', says:'Pedi à IA uma imagem para o post da minha promoção, com o texto "Bolo de pote R$ 12" escrito na arte. Saiu "Bolo de poté R$ 21".',
          q:'Qual é a melhor saída?',
          opts:[
            {t:'Postar assim mesmo, ninguém repara.', ok:false, why:'Preço errado na arte gera confusão com clientes e pode obrigar a vender pelo valor anunciado.'},
            {t:'Desistir de usar imagens criadas por IA.', ok:false, why:'A imagem pode servir muito bem. O ajuste é colocar o texto de outro jeito, não abandonar o recurso.'},
            {t:'Usar a imagem sem texto e escrever o preço depois num editor simples, conferindo o valor.', ok:true, why:'IAs de imagem costumam errar textos dentro da arte. Gerar só a imagem e colocar o texto você mesma garante o preço certo.'}
          ]}
      ]},
    { id:'2.4', title:'Organizando suas conversas com a IA', min:8,
      body:[
        `<div class="card analogy"><h3>🗂️ Pastas na gaveta do escritório</h3><p>Se você joga todos os papéis na mesma gaveta, uma hora não acha mais nada e mistura conta de luz com contrato. Conversas com a IA são parecidas: <b>um assunto por conversa</b> deixa tudo mais fácil de achar e evita confusão.</p></div>`,
        `<div class="term"><b>Nova conversa</b> = começar um chat do zero, sem o que foi dito antes. <b>Contexto da conversa</b> = tudo o que você e a IA já escreveram naquele chat, que ela usa para responder. <b>Regenerar</b> = pedir outra versão da mesma resposta.</div>`,
        `<div class="card"><h3>Quando continuar e quando começar outra</h3>
          <div class="flows">
            <div class="flow new"><h4>Continue na mesma conversa</h4><div class="node good">Quando está ajustando o mesmo texto ou o mesmo assunto ("agora mais curto", "troque o exemplo").</div></div>
            <div class="flow old"><h4>Abra uma nova</h4><div class="node">Quando muda de assunto, quando a IA começa a confundir detalhes ou quando a conversa ficou longa demais.</div></div>
          </div>
          <p style="margin-top:14px">Em conversas muito longas, a IA pode "esquecer" ou misturar informações do começo. Se isso acontecer, abra uma conversa nova e cole um resumo curto do que importa.</p></div>`,
        `<div class="card"><h3>🧹 Quatro hábitos de organização</h3><ol class="golden"><li><span><b>Dê nome às conversas</b> importantes (muitas ferramentas permitem renomear): "Cardápio da padaria", "Estudo de inglês".</span></li><li><span><b>Edite a sua mensagem</b> em vez de escrever outra por cima quando errou o pedido, se a ferramenta deixar.</span></li><li><span><b>Guarde fora da IA</b> o que for definitivo: copie o texto final para um documento seu.</span></li><li><span><b>Apague conversas</b> com informações que você não quer manter na conta.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que é melhor ter uma pasta para cada matéria da escola, e relacione com as conversas na IA.</div>`
      ],
      ch:[
        { who:'Roberta, 37 anos, assistente de RH', says:'Uso a mesma conversa há dois meses para tudo: currículos, receitas de bolo e dúvidas de inglês. Agora a IA está misturando as coisas.',
          q:'O que resolve o problema?',
          opts:[
            {t:'Abrir conversas separadas por assunto e, se precisar, colar um resumo curto do que importa no começo da nova.', ok:true, why:'Um assunto por conversa reduz a confusão, e o resumo leva só o essencial para o chat novo.'},
            {t:'Escrever em letras maiúsculas para a IA prestar mais atenção.', ok:false, why:'Maiúsculas não organizam nada. O problema é a mistura de assuntos numa conversa longa.'},
            {t:'Trocar de ferramenta, porque esta está com defeito.', ok:false, why:'Qualquer ferramenta se confunde com conversas enormes e misturadas. O ajuste é de organização.'}
          ]},
        { who:'Márcio, 33 anos, técnico de informática', says:'A IA escreveu um texto de divulgação quase bom. Só quero ver outra opção sem perder esta.',
          q:'Qual recurso combina com o que ele quer?',
          opts:[
            {t:'Apagar a conversa e começar tudo de novo.', ok:false, why:'Apagar faz perder o que já estava bom e o contexto que ele construiu.'},
            {t:'Copiar o texto atual para um documento e pedir outra versão (ou usar o botão de regenerar, se a ferramenta tiver).', ok:true, why:'Guardar a versão boa fora da IA e pedir outra permite comparar sem perder nada.'},
            {t:'Aceitar o primeiro texto, porque a IA sempre dá a melhor resposta de primeira.', ok:false, why:'Nem sempre a primeira é a melhor. Pedir outras versões e comparar costuma melhorar o resultado.'}
          ]},
        { who:'Vera, 52 anos, agente de viagens', says:'Usei a IA para montar o roteiro de um cliente com nome, telefone e número do passaporte. A viagem já passou, mas a conversa continua lá.',
          q:'Qual é a atitude mais cuidadosa?',
          opts:[
            {t:'Deixar a conversa guardada, pode ser útil um dia.', ok:false, why:'Guardar dados pessoais sem necessidade aumenta o risco se a conta for invadida.'},
            {t:'Copiar a conversa para as redes sociais como exemplo de trabalho.', ok:false, why:'Isso exporia os dados do cliente publicamente, um problema sério de privacidade.'},
            {t:'Apagar a conversa e, nas próximas, usar dados fictícios como "Cliente A" no lugar dos dados reais.', ok:true, why:'Apagar o que não é mais necessário e não colar dados pessoais desde o início protegem o cliente e a Vera.'}
          ]}
      ]},
    { id:'2.5', title:'IA no celular: no meio da rotina', min:8,
      body:[
        `<div class="card analogy"><h3>📱 A calculadora que mora no bolso</h3><p>Antigamente a calculadora ficava na gaveta do escritório. Hoje ela está no celular e você usa no mercado, na feira e no ponto de ônibus. A IA também cabe no bolso: <b>o aplicativo oficial no celular</b> leva a ajuda para onde a tarefa acontece.</p></div>`,
        `<div class="term"><b>Aplicativo oficial</b> = app publicado pela própria empresa da ferramenta, baixado na loja do celular. <b>Ditado por voz</b> = falar em vez de digitar. <b>Câmera como entrada</b> = mandar uma foto para a IA analisar.</div>`,
        `<div class="card"><h3>Usos rápidos que cabem em 2 minutos</h3>
          <ol class="golden"><li><span><b>No mercado</b>: fotografe o rótulo e peça para explicar os ingredientes em palavras simples (conferindo informações de saúde com profissional).</span></li><li><span><b>No ônibus</b>: dite as ideias de uma mensagem difícil e peça para a IA organizar com educação.</span></li><li><span><b>Na rua</b>: fotografe uma placa em outro idioma e peça a tradução.</span></li><li><span><b>Em casa</b>: fotografe a geladeira e peça ideias de receita com o que tem.</span></li><li><span><b>Antes de uma consulta</b>: dite suas dúvidas e peça uma lista organizada para levar.</span></li></ol></div>`,
        `<div class="card"><h3>🔐 Cuidados específicos do celular</h3><p>O celular fica com você o tempo todo e guarda fotos de tudo. Antes de enviar uma imagem, olhe o fundo: documentos, telas com dados, rostos de outras pessoas e placas de carro podem aparecer sem você perceber. Bloqueie o celular com senha, já que quem pegar o aparelho desbloqueado pode abrir o histórico das suas conversas. Baixe o app apenas pela loja oficial, conferindo o nome da empresa responsável. E lembre que o uso de dados móveis pode pesar no plano: para enviar arquivos grandes, prefira o Wi-Fi de confiança.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que é preciso olhar o fundo da foto antes de enviá-la para qualquer lugar.</div>`
      ],
      ch:[
        { who:'Jurema, 57 anos, diarista', says:'Quero tirar foto da receita do meu remédio e mandar para a IA explicar. A receita tem meu nome completo e o carimbo do médico.',
          q:'Qual é o jeito mais cuidadoso?',
          opts:[
            {t:'Mandar a foto inteira, porque a IA precisa de tudo para explicar.', ok:false, why:'Nome, dados do médico e informações de saúde são dados pessoais. A IA não precisa deles para explicar o nome de um remédio.'},
            {t:'Digitar só o nome do remédio e pedir uma explicação geral, e tirar as dúvidas de dose com o médico ou o farmacêutico.', ok:true, why:'Assim ela entende o básico sem expor dados, e o que importa para a saúde fica com quem é profissional.'},
            {t:'Mandar a foto e seguir a dose que a IA disser.', ok:false, why:'Dose é assunto de consulta e bula. A IA pode errar, e o erro aqui pode ser grave.'}
          ]},
        { who:'Gerson, 41 anos, motoboy', says:'Fotografei a frente da minha casa para pedir à IA ideias de pintura. Na foto aparece a placa da minha moto e o número da casa.',
          q:'O que Gerson pode fazer antes de enviar?',
          opts:[
            {t:'Cortar ou tirar outra foto sem a placa e sem o número da casa.', ok:true, why:'A IA consegue sugerir cores sem esses detalhes. Olhar o fundo da foto evita expor informações sem necessidade.'},
            {t:'Enviar assim, porque placa e número não são informações pessoais.', ok:false, why:'Placa e endereço ajudam a identificar e localizar uma pessoa. Vale evitar quando não são necessários.'},
            {t:'Desistir, porque a IA não entende fotos de casas.', ok:false, why:'Ela entende bem. O ajuste é só a foto, não desistir.'}
          ]},
        { who:'Tamires, 25 anos, atendente de farmácia', says:'Baixei um app de IA com nome parecido com o famoso, mas de outra empresa. Está pedindo acesso aos meus contatos e às minhas mensagens.',
          q:'Qual é o sinal de alerta e o que fazer?',
          opts:[
            {t:'Nenhum alerta: todo app de IA pede acesso a tudo.', ok:false, why:'Um assistente não precisa ler seus contatos e mensagens para conversar. Pedido de acesso excessivo é sinal de alerta.'},
            {t:'Liberar tudo agora e revisar as permissões no ano que vem.', ok:false, why:'Os dados podem ser coletados logo após a liberação. O risco começa na hora.'},
            {t:'Nome imitando o famoso e acesso excessivo são sinais de app falso; desinstalar e baixar o oficial, conferindo a empresa na loja.', ok:true, why:'Apps falsos imitam nomes conhecidos para coletar dados. Conferir o desenvolvedor na loja evita o golpe.'}
          ]}
      ]},
    { id:'2.6', title:'A IA como professora particular', min:8,
      body:[
        `<div class="card analogy"><h3>🧑‍🏫 A professora que nunca perde a paciência</h3><p>Lembra daquela dúvida que você tinha vergonha de perguntar na escola? A IA pode explicar a mesma coisa cinco vezes, de cinco jeitos, sem cara feia. Mas uma boa professora não faz a lição por você: <b>ela explica, dá exemplo e depois pergunta para ver se você entendeu</b>.</p></div>`,
        `<div class="term"><b>Explicação em camadas</b> = começar pelo simples e aprofundar aos poucos. <b>Exemplo do cotidiano</b> = comparação com algo que você já conhece. <b>Pergunta de verificação</b> = pergunta para conferir se você realmente entendeu.</div>`,
        `<div class="card"><h3>O ciclo de aprender com a IA</h3>
          <div class="pipe"><div class="node ink">Explicação simples</div><div class="ar">➜</div><div class="node ink">Exemplo seu</div><div class="ar">➜</div><div class="node yel">Você explica de volta</div><div class="ar">➜</div><div class="node ink">IA corrige</div></div>
          <ol class="golden"><li><span>Peça a explicação <b>no seu nível</b>: diga o que já sabe e o que não sabe.</span></li><li><span>Peça um <b>exemplo da sua realidade</b> (do seu trabalho, da sua cidade, da sua casa).</span></li><li><span><b>Explique com suas palavras</b> e peça que a IA aponte o que ficou errado ou faltando.</span></li><li><span>Peça <b>2 ou 3 perguntas</b> para testar e responda antes de ver a resposta.</span></li></ol></div>`,
        `<div class="card"><h3>⚠️ Quando a professora erra</h3><p>A IA explica com muita segurança, inclusive quando erra. Para assuntos de prova, trabalho ou dinheiro, confira os pontos principais no material do curso, num livro ou em site oficial. Outro erro comum é pedir só a resposta pronta de um exercício: você termina mais rápido, mas não aprende e trava na próxima vez. Use a IA para destravar o raciocínio, pedindo uma dica de cada vez em vez da solução completa. Assim o mérito, e o aprendizado, continuam sendo seus.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> escolha um assunto que você quer entender melhor, explique em voz alta depois de estudar com a IA e veja onde você trava.</div>`
      ],
      ch:[
        { who:'Edvaldo, 48 anos, porteiro, estudando para o supletivo', says:'Pedi à IA para me explicar frações e ela usou palavras que eu nem conheço.',
          q:'Qual pedido funciona melhor?',
          opts:[
            {t:'Dizer o que ele já sabe e pedir uma explicação simples, com exemplo do dia a dia, como dividir uma pizza ou uma conta.', ok:true, why:'Explicação no nível dele e exemplo conhecido fazem o conteúdo fazer sentido.'},
            {t:'Pedir a mesma explicação mais uma vez, igual.', ok:false, why:'Sem dizer o que não entendeu, a IA tende a repetir o mesmo nível de dificuldade.'},
            {t:'Desistir, porque matemática não é para ele.', ok:false, why:'A dificuldade estava na explicação, não nele. Ajustar o pedido costuma resolver.'}
          ]},
        { who:'Laís, 15 anos, estudante do 9º ano', says:'Tenho 10 exercícios de física. Vou pedir para a IA resolver todos e copio no caderno.',
          q:'Qual uso ajuda Laís a aprender de verdade?',
          opts:[
            {t:'Copiar as 10 respostas, já que o importante é entregar.', ok:false, why:'Ela entrega, mas não aprende, e na prova não terá a IA para resolver.'},
            {t:'Tentar cada exercício, pedir uma dica por vez quando travar e conferir a resposta final com o gabarito do livro.', ok:true, why:'Dicas graduais destravam o raciocínio sem tirar o aprendizado, e o gabarito confere o resultado.'},
            {t:'Pedir que a IA resolva com erros de propósito, para parecer dela.', ok:false, why:'Continua sem aprender, e ainda é desonesto com a escola.'}
          ]},
        { who:'Mauro, 35 anos, auxiliar de contabilidade', says:'Estudei com a IA o que é regime de competência. Acho que entendi, mas não tenho certeza.',
          q:'Qual é o melhor jeito de confirmar?',
          opts:[
            {t:'Perguntar à IA "eu entendi?" e confiar no "sim".', ok:false, why:'Uma pergunta assim costuma receber uma resposta gentil. Não comprova o entendimento.'},
            {t:'Ler a mesma explicação mais três vezes.', ok:false, why:'Reler dá sensação de domínio, mas não testa se ele consegue usar o conceito.'},
            {t:'Explicar o conceito com as próprias palavras e um exemplo, pedir que a IA corrija, responder perguntas de teste e conferir no material de contabilidade.', ok:true, why:'Explicar de volta e responder perguntas mostram o que ele entendeu de fato, e o material confirma.'}
          ]}
      ]},
    { id:'2.8', title:'Avaliar a resposta e pedir ajustes certeiros', min:14,
      body:[
        `<div class="card analogy"><h3>🧵 O ajuste na costureira</h3><p>Se você diz para a costureira "não ficou bom", ela não sabe o que mexer. Se diz "sobe a barra dois dedos e aperta um pouco na cintura", em meia hora a calça fica perfeita. Com a IA é igual: <b>o ajuste vago gera outra tentativa no escuro; o ajuste certeiro resolve</b>.</p></div>`,
        `<div class="term"><b>Ajuste certeiro</b> = pedido de mudança que diz o que mudar, onde e como. <b>Critério</b> = o que torna a resposta boa para você (estar certa, servir para quem vai ler, ter o tamanho e o tom certos). <b>Detalhe inventado</b> = informação que você não deu e a IA colocou por conta própria.</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: o aviso do lava-rápido</h3><p>Seu Zé pediu um aviso de reajuste de preço para mandar aos clientes no WhatsApp. A primeira resposta veio longa, com "Prezados clientes, vimos por meio desta...", cheia de emojis, e ainda trazia "a partir de 1º de março", data que ele nunca disse.</p>
          <div class="flows">
            <div class="flow old"><h4>Ajuste vago</h4><div class="node">"Melhora isso aí." A IA reescreve tudo do zero, continua longo e a data inventada continua lá.</div></div>
            <div class="flow new"><h4>Ajuste certeiro</h4><div class="node good">Seu Zé diz o que manter (o agradecimento), o que mudar (no máximo 4 linhas, tom simpático, sem "prezados", só um emoji) e o que tirar (a data, que ele mesmo vai colocar).</div></div>
          </div>
          <p style="margin-top:14px"><b>O roteiro de 3 rodadas</b> que ele usou:</p>
          <ol class="golden"><li><span><b>Avalie</b> com três perguntas: está certo? Serve para quem vai ler? Tem o tamanho e o tom certos?</span></li><li><span><b>Ajuste</b> dizendo o que manter e o que mudar, com no máximo 3 mudanças por vez.</span></li><li><span><b>Confira você</b> os dados (datas, preços, nomes, condições) antes de usar.</span></li></ol></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><div class="tw"><table class="tbl"><tr><th>Erro</th><th>Sinal</th><th>Correção</th></tr>
          <tr><td>Pedido vago ("melhora", "não gostei")</td><td>A nova versão tem os mesmos problemas</td><td>Diga o que mudar e como</td></tr>
          <tr><td>Muitas mudanças de uma vez</td><td>Algumas são ignoradas</td><td>Até 3 por rodada</td></tr>
          <tr><td>Não dizer o que estava bom</td><td>A IA muda justamente o que você gostou</td><td>Diga "mantenha..."</td></tr>
          <tr><td>Aceitar detalhe inventado</td><td>Aparece data, preço ou condição que você não deu</td><td>Mande tirar e confira tudo antes de publicar</td></tr></table></div></div>`,
        `<div class="card"><h3>✋ Agora é sua vez (ChatGPT ou Gemini, 5 min)</h3><ol class="golden"><li><span>Escolha uma mensagem real que você precisa mandar esta semana (um aviso, um convite, um lembrete).</span></li><li><span>Faça o pedido com papel, tarefa, contexto e formato, como na lição 2.2, escrito por você.</span></li><li><span>Antes de pedir ajuste, anote para si: o que está bom e o que precisa mudar.</span></li><li><span>Peça o ajuste numa só mensagem, com até 3 mudanças e o que manter.</span></li><li><span>Confira os dados e marque se a IA inventou algum detalhe.</span></li></ol><p>🔐 Use [NOME] e [VALOR] no lugar de dados reais de outras pessoas.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a alguém a diferença entre dizer "não ficou bom" e dar um ajuste certeiro, usando o exemplo da costureira.</div>`
      ],
      ch:[
        { who:'Kátia, 36 anos, dona de um brechó', says:'A IA fez a legenda do meu post, mas ficou com cara de propaganda de banco. Escrevi "não gostei" e veio outra igualzinha.',
          q:'Qual ajuste funciona melhor?',
          opts:[
            {t:'Escrever "NÃO GOSTEI" em letras maiúsculas para a IA entender que é sério.', ok:false, why:'Maiúsculas não dizem o que mudar. A IA continua sem saber o que a Kátia quer.'},
            {t:'Dizer o que mudar: tom leve e descontraído, como ela fala com as clientes, frases curtas, mantendo o preço e o horário da loja.', ok:true, why:'Ajuste certeiro diz o que mudar e o que manter. Assim a próxima versão chega perto do que ela quer.'},
            {t:'Trocar de ferramenta, porque essa não entende brechó.', ok:false, why:'Qualquer IA responde mal a um ajuste vago. O problema está no pedido de ajuste, não na ferramenta.'}
          ]},
        { who:'Marcos, 42 anos, corretor de seguros', says:'Pedi 12 mudanças de uma vez no meu texto de apresentação. Umas cinco foram simplesmente ignoradas.',
          q:'Como ele deve conduzir a revisão?',
          opts:[
            {t:'Dividir em rodadas com poucas mudanças por vez, conferindo cada rodada antes da próxima.', ok:true, why:'Com até 3 mudanças por vez, a IA atende melhor e fica fácil perceber o que foi feito e o que faltou.'},
            {t:'Repetir as mesmas 12 mudanças até ela fazer todas.', ok:false, why:'A lista longa continua difícil de atender por inteiro. Dividir é mais rápido do que insistir.'},
            {t:'Aceitar o texto assim, porque a IA não consegue fazer revisões.', ok:false, why:'Ela consegue revisar bem; só precisa de pedidos menores e mais claros.'}
          ]},
        { who:'Jefferson, 31 anos, vende peças de bicicleta pela internet', says:'A IA escreveu meu anúncio com "frete grátis acima de R$ 100". Eu nunca ofereci isso, mas ficou tão atraente...',
          q:'O que Jefferson deve fazer?',
          opts:[
            {t:'Manter, porque deixa o anúncio mais vendedor.', ok:false, why:'Anunciar uma condição que ele não oferece pode obrigá-lo a cumprir ou gerar reclamação de clientes.'},
            {t:'Manter, porque se a IA escreveu deve ser comum no mercado.', ok:false, why:'A IA inventa detalhes plausíveis. Ser comum no mercado não quer dizer que vale para a loja dele.'},
            {t:'Pedir para tirar a frase e, a partir de agora, conferir todo preço e condição antes de publicar.', ok:true, why:'Detalhe inventado é um erro típico. Quem responde pelo anúncio é ele, então quem confere é ele.'}
          ]}
      ]},
    { id:'2.9', title:'Resumir textos e documentos sem perder o essencial', min:14,
      body:[
        `<div class="card analogy"><h3>📺 O capítulo da novela que você perdeu</h3><p>Você pede para alguém contar o capítulo que perdeu. A pessoa conta o principal, mas pode esquecer justamente a cena que você queria saber, ou contar errado. Resumo de IA é parecido: <b>economiza muito tempo, mas pode deixar de fora ou trocar o que mais importa para você</b>.</p></div>`,
        `<div class="term"><b>Resumo</b> = versão curta com os pontos principais. <b>Trecho de origem</b> = a parte do texto original de onde saiu cada ponto do resumo. <b>Omissão</b> = algo importante que ficou de fora do resumo.</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: o regulamento da festa junina</h3><p>Regina recebeu da escola do filho um regulamento de 6 páginas da festa junina (um texto público, sem dados pessoais). Ela só quer saber o que os pais precisam fazer.</p>
          <div class="flows">
            <div class="flow old"><h4>Pedido solto</h4><div class="node">"Resume isso." Veio um resumo bonito sobre "a importância da festa para a comunidade", sem a data de entrega das prendas e sem o valor do convite.</div></div>
            <div class="flow new"><h4>Pedido com objetivo</h4><div class="node good">Regina explicou para quem é o resumo (pais), o que procurar (tarefas, datas, valores e prazos), pediu em tópicos, com o trecho de origem de cada item, e que a IA avisasse quando algo não estivesse no texto.</div></div>
          </div>
          <p style="margin-top:14px"><b>Depois do resumo, ela conferiu em 3 passos:</b></p>
          <ol class="golden"><li><span>Procurou no original cada data e valor do resumo (no computador, Ctrl+F ajuda).</span></li><li><span>Perguntou se havia algo sobre cancelamento ou penalidade que ficou de fora.</span></li><li><span>Leu ela mesma a parte de pagamento, porque mexe com dinheiro.</span></li></ol></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><ol class="golden"><li><span><b>Item inventado:</b> o resumo traz algo que não está no texto. Pedir o trecho de origem denuncia isso.</span></li><li><span><b>Exceção esquecida:</b> "entrega até dia 10, <i>exceto para o 1º ano</i>". Releia as regras que afetam você.</span></li><li><span><b>Arquivo lido pela metade:</b> em textos muito longos, algumas ferramentas não leem tudo. Pergunte o que diz a última parte e confira.</span></li><li><span><b>Foto ilegível:</b> papel torto ou com sombra gera leitura errada de números.</span></li><li><span><b>Documento com dados pessoais:</b> contrato com CPF e endereço não vai inteiro. Cubra os dados ou cole só a cláusula que quer entender.</span></li></ol></div>`,
        `<div class="card"><h3>✋ Agora é sua vez (ChatGPT, Gemini ou Copilot, 5 min)</h3><ol class="golden"><li><span>Escolha um texto público e longo: uma notícia, o regulamento de um concurso, o manual de um eletrodoméstico ou um edital.</span></li><li><span>Escreva o seu pedido dizendo para que você precisa do resumo e em que formato.</span></li><li><span>Peça o trecho de origem de cada ponto.</span></li><li><span>Confira 3 pontos no texto original.</span></li><li><span>Pergunte o que ficou de fora e veja se faz sentido.</span></li></ol><p>🔐 Não envie documentos com CPF, endereço ou dados de saúde, seus ou de outras pessoas.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a alguém por que pedir "o trecho de onde você tirou isso" ajuda a pegar erros num resumo.</div>`
      ],
      ch:[
        { who:'Wagner, 27 anos, estuda para concurso', says:'A IA resumiu o edital e disse que a inscrição vai até o dia 20. Vou deixar para fazer no dia 20 mesmo.',
          q:'Qual é a atitude mais segura?',
          opts:[
            {t:'Confiar no resumo, porque a IA leu o edital inteiro.', ok:false, why:'A IA pode trocar números ou ler só parte do arquivo. Prazo de inscrição é o tipo de detalhe que não pode errar.'},
            {t:'Conferir a data no edital original e no site oficial da banca, e não deixar para a última hora.', ok:true, why:'Prazos e datas sempre se conferem na fonte. Um dia errado pode custar a vaga.'},
            {t:'Pedir à IA para resumir de novo e ver se a data se repete.', ok:false, why:'A repetição não confirma nada: ela pode repetir o mesmo erro. A conferência é no edital.'}
          ]},
        { who:'Simone, 33 anos, vendedora', says:'Quero entender meu contrato de aluguel. Vou colar ele inteiro na IA, com meu nome, CPF e endereço e os dados do proprietário.',
          q:'Qual é o jeito mais cuidadoso?',
          opts:[
            {t:'Colar tudo, porque o contrato é dela.', ok:false, why:'O contrato também tem dados do proprietário, e os dela não precisam ir para a IA para explicar uma cláusula.'},
            {t:'Nunca usar IA para entender contratos.', ok:false, why:'A IA pode ajudar a entender termos e cláusulas. O cuidado é com os dados e com decisões jurídicas importantes.'},
            {t:'Trocar os dados por [LOCADOR], [LOCATÁRIA] e [ENDEREÇO], ou colar só as cláusulas que quer entender, e levar dúvidas sérias a um profissional.', ok:true, why:'Anonimizar mantém a utilidade e protege as duas partes. Para decisões com consequência jurídica, vale ouvir quem é da área.'}
          ]},
        { who:'Rogério, 45 anos, encarregado de obra', says:'Pedi um resumo da ata da reunião. O resumo não falou que o prazo da entrega mudou, e isso estava no fim do texto.',
          q:'Como evitar isso da próxima vez?',
          opts:[
            {t:'Pedir um resumo ainda mais curto, para ficar mais fácil de ler.', ok:false, why:'Mais curto aumenta o risco de deixar coisas de fora.'},
            {t:'Pedir o resumo com datas e prazos em destaque e o trecho de origem, perguntar se algo sobre prazos ficou de fora e conferir no original.', ok:true, why:'Dizer o que importa e conferir os pontos críticos é o que evita omissões.'},
            {t:'Nada a fazer: resumos de IA são sempre completos.', ok:false, why:'Resumos podem omitir pontos importantes, principalmente no fim de textos longos.'}
          ]}
      ]},
    { id:'2.10', title:'Mensagens difíceis de trabalho com a IA', min:14,
      body:[
        `<div class="card analogy"><h3>📞 O secretário caprichoso</h3><p>Imagine um secretário que escreve muito bem, mas não sabe o que você decidiu. Se você diz só "responde aquele cliente", ele inventa. Se você dita o recado, ele capricha na forma. Com a IA é assim: <b>você decide o conteúdo; ela ajuda no jeito de dizer</b>.</p></div>`,
        `<div class="term"><b>Fatos</b> = o que aconteceu, sem opinião. <b>Decisão</b> = o que você vai fazer ou oferecer (desconto, nova data, recusa). <b>Tom</b> = o jeito de falar: acolhedor, firme, informal.</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: o bolo que derreteu</h3><p>Uma cliente da Luciene, que faz bolos sob encomenda, reclamou que o bolo chegou com a cobertura derretida.</p>
          <div class="flows">
            <div class="flow old"><h4>Pedido solto</h4><div class="node">"Responde essa cliente brava." A IA escreveu oferecendo "reembolso integral e um bolo grátis", promessa que a Luciene nunca fez.</div></div>
            <div class="flow new"><h4>Fatos + decisão + tom</h4><div class="node good">Luciene contou os fatos (entrega às 14h, dia muito quente), a decisão dela (pedir desculpas, dar 30% de desconto na próxima encomenda e trocar a embalagem) e o tom (acolhedor, sem culpar o entregador, até 5 linhas).</div></div>
          </div>
          <div class="tw" style="margin-top:14px"><table class="tbl"><tr><th>Parte</th><th>Quem decide</th></tr>
          <tr><td>O que aconteceu</td><td>Você conta</td></tr>
          <tr><td>O que vai oferecer ou recusar</td><td>Você decide, antes de abrir a IA</td></tr>
          <tr><td>Palavras, ordem, educação</td><td>A IA sugere, você ajusta</td></tr>
          <tr><td>Enviar</td><td>Você, depois de ler tudo</td></tr></table></div></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><ol class="golden"><li><span><b>Deixar a IA decidir a compensação:</b> aparece reembolso, brinde ou prazo que você não ofereceu.</span></li><li><span><b>Texto robótico:</b> "lamentamos profundamente o ocorrido e reiteramos nosso compromisso". Peça para soar como você fala com os clientes.</span></li><li><span><b>Promessa vaga:</b> "faremos o possível" quando a resposta é não. Recusa clara e educada respeita mais o cliente.</span></li><li><span><b>Colar o print da conversa:</b> leva nome, foto e telefone da cliente. Conte a situação com suas palavras.</span></li></ol></div>`,
        `<div class="card"><h3>✋ Agora é sua vez (Gemini ou ChatGPT, 5 min)</h3><ol class="golden"><li><span>Lembre uma situação real e difícil: atraso, cobrança, reclamação ou um pedido que você precisa recusar.</span></li><li><span>Antes de abrir a IA, escreva para você 3 linhas: fatos, decisão e tom.</span></li><li><span>Peça o rascunho com as suas palavras, usando [CLIENTE] no lugar do nome.</span></li><li><span>Leia em voz alta: soa como você?</span></li><li><span>Ajuste e confira se nada foi prometido além do que você decidiu.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a alguém por que a IA pode escrever a resposta ao cliente, mas não pode decidir o que oferecer.</div>`
      ],
      ch:[
        { who:'Robson, 49 anos, dono de oficina mecânica', says:'Um cliente pediu conserto de câmbio automático, que eu não faço. A IA sugeriu responder "faremos o possível para atender".',
          q:'O que Robson deve fazer com essa sugestão?',
          opts:[
            {t:'Mandar assim, porque é educado.', ok:false, why:'Educado, mas cria a expectativa de um serviço que ele não faz. O cliente perde tempo esperando.'},
            {t:'Trocar por uma recusa clara e gentil e, se quiser, indicar onde o cliente pode encontrar o serviço.', ok:true, why:'A decisão é dele (não faz o serviço). A IA ajuda no tom, mas a mensagem precisa dizer a verdade.'},
            {t:'Não responder, para evitar o desconforto.', ok:false, why:'Ficar sem resposta irrita mais do que uma recusa educada.'}
          ]},
        { who:'Denise, 52 anos, diarista', says:'Uma cliente está há duas semanas sem me pagar. Quero usar a IA para escrever a cobrança.',
          q:'Qual caminho gera a melhor mensagem?',
          opts:[
            {t:'Pedir "uma cobrança bem agressiva para ela ficar com medo".', ok:false, why:'Tom agressivo costuma piorar a relação e pode passar do limite. Firmeza com educação funciona melhor.'},
            {t:'Deixar a IA decidir se cobra juros e qual o novo prazo.', ok:false, why:'Juros e prazo são decisões da Denise. A IA pode inventar valores ou condições.'},
            {t:'Dizer os fatos (dias trabalhados, valor, atraso), a decisão dela (nova data de pagamento) e o tom (educado e firme), colocando a chave Pix ela mesma depois.', ok:true, why:'Fatos e decisão vêm dela; a IA organiza as palavras. E dados de pagamento ela coloca fora da IA.'}
          ]},
        { who:'Sueli, 41 anos, dona de uma loja de roupas no bairro', says:'A IA escreveu: "Prezada cliente, lamentamos profundamente o ocorrido e reiteramos nosso compromisso". Minhas clientes são vizinhas, a gente conversa no WhatsApp como amigas.',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Pedir para soar como conversa de WhatsApp entre conhecidas, com frases curtas, e ajustar à mão as palavras que ela não usaria.', ok:true, why:'O tom precisa combinar com a relação. Ajuste certeiro e um toque pessoal deixam a mensagem com a cara dela.'},
            {t:'Mandar assim, porque formal é sempre mais profissional.', ok:false, why:'Para clientes próximas, um texto formal demais soa frio e estranho.'},
            {t:'Desistir da IA para mensagens a clientes.', ok:false, why:'O problema era só o tom, e isso se ajusta em uma rodada.'}
          ]}
      ]},
    { id:'2.11', title:'Comparar duas IAs na mesma tarefa', min:14,
      body:[
        `<div class="card analogy"><h3>🔧 Dois orçamentos antes de decidir</h3><p>Antes de consertar a geladeira, você pede orçamento em duas assistências e compara preço, prazo e garantia. Com as ferramentas de IA, dá para fazer o mesmo: <b>mesma tarefa, mesmos critérios, e você decide qual usar para aquele tipo de trabalho</b>.</p></div>`,
        `<div class="term"><b>Teste justo</b> = o mesmo pedido, nas duas ferramentas, no mesmo dia. <b>Critério</b> = o que você vai observar em cada resposta. <b>Conferível</b> = tarefa cujo resultado você consegue checar numa fonte.</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: a segunda via da conta de luz</h3><p>Jéssica, auxiliar de escritório, pediu a duas IAs um passo a passo para tirar a segunda via da conta de luz da distribuidora da cidade dela. Depois conferiu no site oficial da distribuidora.</p>
          <div class="tw"><table class="tbl"><tr><th>Critério</th><th>IA A</th><th>IA B</th></tr>
          <tr><td>Entendeu o pedido</td><td>✅</td><td>✅</td></tr>
          <tr><td>Informação correta (conferida no site)</td><td>❌ citou um menu que não existe</td><td>✅</td></tr>
          <tr><td>Clara e fácil de seguir</td><td>✅</td><td>✅</td></tr>
          <tr><td>Tamanho certo</td><td>✅</td><td>❌ longa demais</td></tr>
          <tr><td>Mostrou de onde tirou</td><td>❌</td><td>✅ indicou o site</td></tr></table></div>
          <p>Conclusão da Jéssica: para esse tipo de tarefa, a IA B foi melhor, porque acertou o que importa. Isso <b>não</b> quer dizer que ela é melhor em tudo: numa tarefa de escrever um convite, o resultado pode inverter.</p></div>`,
        `<div class="card"><h3>🧮 Placar da comparação</h3><p>Use durante a prática: marque cada critério que a resposta cumpriu. "Informação correta" pesa mais que os outros.</p>
          <div class="tw"><table class="tbl"><tr><th>Critério</th><th>IA A</th><th>IA B</th></tr>
          <tr><td>Entendeu o pedido</td><td><input type="checkbox" class="pl-a"></td><td><input type="checkbox" class="pl-b"></td></tr>
          <tr><td>Informação correta (conferida)</td><td><input type="checkbox" class="pl-a pl-fa"></td><td><input type="checkbox" class="pl-b pl-fb"></td></tr>
          <tr><td>Clara e fácil de seguir</td><td><input type="checkbox" class="pl-a"></td><td><input type="checkbox" class="pl-b"></td></tr>
          <tr><td>Tamanho certo</td><td><input type="checkbox" class="pl-a"></td><td><input type="checkbox" class="pl-b"></td></tr>
          <tr><td>Mostrou de onde tirou</td><td><input type="checkbox" class="pl-a"></td><td><input type="checkbox" class="pl-b"></td></tr></table></div>
          <div class="res"><div><b id="pl-ra">0 de 5</b><span>IA A</span></div><div><b id="pl-rb">0 de 5</b><span>IA B</span></div><div><b id="pl-rv">-</b><span>melhor nesta tarefa</span></div></div></div>`,
        `<div class="card"><h3>⚠️ Erros comuns</h3><ol class="golden"><li><span><b>Pedidos diferentes:</b> uma recebe pergunta de receita, a outra de imposto. Não dá para comparar.</span></li><li><span><b>Julgar pela aparência:</b> a resposta mais longa ou mais bonita não é, por isso, a mais certa.</span></li><li><span><b>Concluir para sempre com um teste só:</b> as respostas variam e as ferramentas mudam com o tempo. Repita de vez em quando.</span></li><li><span><b>Comparar sem conferir:</b> se as duas erraram o fato, nenhuma ganhou.</span></li></ol></div>`,
        `<div class="card"><h3>✋ Agora é sua vez (ChatGPT e Gemini ou Copilot, 5 min)</h3><ol class="golden"><li><span>Escolha uma tarefa real cuja resposta você consiga conferir.</span></li><li><span>Escreva o seu pedido uma vez e use o mesmo texto nas duas ferramentas.</span></li><li><span>Marque o placar acima.</span></li><li><span>Confira pelo menos 1 fato de cada resposta numa fonte confiável.</span></li><li><span>Anote qual você vai usar para esse tipo de tarefa e por quê.</span></li></ol><p>🔐 Como vai mandar o pedido para duas empresas, capriche ainda mais em não incluir dados pessoais.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a alguém por que comparar duas IAs é como pedir dois orçamentos, e o que torna a comparação justa.</div>`
      ],
      ch:[
        { who:'Gustavo, 30 anos, auxiliar de logística', says:'A resposta do Copilot tinha o dobro do tamanho da do ChatGPT. Então ela é a melhor, né?',
          q:'O que você diria ao Gustavo?',
          opts:[
            {t:'Isso mesmo: mais texto significa mais informação útil.', ok:false, why:'Texto longo pode ter enrolação ou erro. Tamanho não mede qualidade.'},
            {t:'Tamanho não decide: ele deve comparar se a informação está correta, se é clara e se serve para a tarefa.', ok:true, why:'Critérios como exatidão e utilidade dizem qual resposta resolve o problema. O tamanho certo depende da tarefa.'},
            {t:'Ao contrário: a resposta mais curta é sempre a melhor.', ok:false, why:'Curta demais pode deixar de fora o essencial. Também não é critério sozinho.'}
          ]},
        { who:'Eliane, 47 anos, assistente administrativa', says:'Testei o ChatGPT com uma pergunta de receita e o Gemini com uma pergunta de imposto. O Gemini foi pior, então ele é pior.',
          q:'Qual é o problema desse teste?',
          opts:[
            {t:'Nenhum: ela testou as duas ferramentas.', ok:false, why:'Testou, mas com tarefas diferentes. Assim não dá para saber se a diferença veio da ferramenta ou da pergunta.'},
            {t:'O teste não foi justo: para comparar, o pedido precisa ser o mesmo nas duas, e o resultado deve ser conferido.', ok:true, why:'Mesmo pedido e conferência na fonte é o que torna a comparação válida.'},
            {t:'Ela deveria ter testado só uma ferramenta.', ok:false, why:'Comparar é útil; o problema foi o jeito de comparar.'}
          ]},
        { who:'Seu Nelson, 62 anos, aposentado', says:'Perguntei a duas IAs o horário de atendimento de um posto de serviços públicos da minha cidade, e cada uma deu um horário diferente.',
          q:'Qual é a atitude certa?',
          opts:[
            {t:'Ficar com o horário da resposta mais detalhada.', ok:false, why:'Detalhe não é prova. Informação local e que muda é o ponto fraco das duas.'},
            {t:'Perguntar a uma terceira IA e ficar com o horário que aparecer mais.', ok:false, why:'Votação entre IAs não confirma nada: todas podem estar desatualizadas.'},
            {t:'Conferir no site oficial ou no telefone do próprio posto, porque nenhuma das duas decide uma informação local.', ok:true, why:'Quando as IAs discordam sobre algo local, a resposta está na fonte oficial.'}
          ]}
      ]},
    { id:'2.7', title:'Projeto: uma tarefa real resolvida com IA', min:35,
      body:[`<div class="card"><p>Agora você vai usar a fórmula de 4 partes numa tarefa de verdade, conversando com a IA em várias rodadas. O objetivo não é acertar de primeira, e sim mostrar como você conduziu a conversa até chegar num resultado útil.</p></div>`],
      projeto:{
        entrega:'O registro de uma conversa real com a IA: seu primeiro pedido, os ajustes que você fez e o resultado final que vai usar.',
        passos:[
          'Escolha uma tarefa real desta semana (uma mensagem, um plano, uma explicação, um cardápio).',
          'Escreva o primeiro pedido com papel, tarefa, contexto e formato, sem dados pessoais de ninguém.',
          'Faça pelo menos 2 ajustes conversando ("mais curto", "troque o exemplo", "em lista").',
          'Confira o resultado final (números, nomes, datas) e use a IA como professora para entender 1 ponto da resposta que você não dominava, explicando de volta com suas palavras.',
          'Escreva o que mudou entre a primeira resposta e a final, e o que você aprendeu no caminho.'
        ],
        checklist:[
          'Meu primeiro pedido tem as 4 partes (papel, tarefa, contexto, formato).',
          'Fiz pelo menos 2 rodadas de ajuste e descrevi cada uma.',
          'Não usei dados pessoais reais de outras pessoas.',
          'Conferi o resultado final e registrei o ponto que aprendi explicando de volta.'
        ],
        minimo:400
      }}
  ]},
  { id:3, icon:'🛡️', title:'Segurança', sub:'Usando a IA com responsabilidade', lessons:[
    { id:'3.1', title:'O que nunca colar na IA', min:8,
      body:[
        `<div class="card analogy"><h3>🔒 Conversa na cafeteria lotada</h3><p>Você conversa com um amigo numa mesa de café movimentada. Não diria ali a sua senha nem o número do seu cartão, certo? Ao conversar com uma IA online, vale o mesmo cuidado: você está usando o serviço de uma empresa, <b>não um diário trancado</b>.</p></div>`,
        `<div class="term"><b>Dado pessoal</b> = informação que identifica uma pessoa, como nome completo, CPF, endereço, telefone, e-mail e foto. <b>Dado sensível</b> = dado mais delicado, como saúde, religião, posição política e biometria. <b>LGPD</b> = Lei Geral de Proteção de Dados, a lei brasileira que protege os dados das pessoas. <b>Anonimizar</b> = tirar ou trocar o que identifica a pessoa, por exemplo "Cliente A" no lugar do nome.</div>`,
        `<div class="card"><h3>O semáforo da informação</h3>
          <ol class="golden"><li><span>🔴 <b>Nunca cole:</b> senhas, códigos de verificação, número de cartão, CPF e RG, dados de saúde de alguém, segredos da empresa, contratos confidenciais.</span></li><li><span>🟡 <b>Cuidado, anonimize antes:</b> nomes de clientes, e-mails, telefones, valores de propostas.</span></li><li><span>🟢 <b>Pode:</b> textos públicos, ideias gerais, perguntas de estudo, rascunhos com dados fictícios.</span></li></ol>
          <p>Dependendo da ferramenta e das configurações, o que você escreve pode ser guardado e usado para melhorar o serviço. Por isso, confira as configurações de privacidade da sua conta, use dados fictícios sempre que puder e siga as regras de IA da sua empresa, se existirem.</p></div>`,
        `<div class="card"><h3>✂️ Anonimizar na prática</h3><div class="flows">
            <div class="flow old"><h4>Antes</h4><div class="node">"Escreva um e-mail para Carla Mendes, CPF 123..., moradora da Rua das Flores, 45, cobrando R$ 1.850 da parcela 3."</div></div>
            <div class="flow new"><h4>Depois</h4><div class="node good">"Escreva um e-mail para uma cliente cobrando o valor de uma parcela atrasada, tom educado e firme. Use [NOME] e [VALOR] no lugar dos dados."</div></div>
          </div>
          <p style="margin-top:14px">O resultado é o mesmo e quem preenche os dados reais é você, depois, fora da IA. Esse truque dos colchetes resolve a maioria dos casos do dia a dia.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que não se conta um segredo importante a um estranho, e relacione com a IA.</div>`
      ],
      ch:[
        { who:'Paulo, 38 anos, atendente de uma clínica', says:'Vou colar a conversa inteira com o paciente na IA para ela montar um resumo. Tem nome e exame, mas é rapidinho.',
          q:'O que é mais adequado?',
          opts:[
            {t:'Colar tudo, porque é rápido e a IA vai ajudar bastante.', ok:false, why:'Nome e exame são dados pessoais e de saúde. Colar sem cuidado expõe o paciente e pode violar a LGPD.'},
            {t:'Tirar o nome e tudo o que identifica o paciente (anonimizar) e, por ser dado de saúde, só usar IA seguindo as regras da clínica.', ok:true, why:'Anonimizar reduz o risco, e dados de saúde pedem ainda mais cuidado. Seguir as regras da clínica protege o paciente e você.'},
            {t:'Colar só o nome e esconder o exame.', ok:false, why:'O nome já identifica o paciente. O certo é remover o que identifica, não escolher qual parte colar.'}
          ]},
        { who:'Thiago, 31 anos, analista de suporte', says:'A IA está me ajudando a configurar um sistema. Ela pediu um exemplo e eu ia colar o usuário e a senha do servidor da empresa.',
          q:'O que Thiago deve fazer?',
          opts:[
            {t:'Colar a senha, porque a IA precisa dela para ajudar de verdade.', ok:false, why:'Senhas estão no vermelho do semáforo: nunca vão para a IA. Ela consegue ajudar com dados de exemplo.'},
            {t:'Usar valores inventados, como "usuario_exemplo" e "SENHA_AQUI", e colocar os dados reais só no sistema.', ok:true, why:'A IA explica o passo a passo do mesmo jeito com dados fictícios. A senha real nunca sai do lugar certo.'},
            {t:'Colar a senha e trocá-la daqui a um ano.', ok:false, why:'Trocar muito depois não desfaz o risco. Se a senha foi exposta, o problema começa na hora.'}
          ]},
        { who:'Daniela, 40 anos, corretora de imóveis', says:'Quero que a IA melhore a proposta para um comprador. A proposta tem o nome dele, o telefone e o valor que ele ofereceu.',
          q:'Qual é o jeito seguro de usar a IA aqui?',
          opts:[
            {t:'Trocar nome e telefone por [COMPRADOR] e [TELEFONE] e, se o valor for sigiloso, usar [VALOR]; depois preencher os dados reais fora da IA.', ok:true, why:'Anonimizar com colchetes mantém a utilidade da IA e protege o cliente. Os dados reais entram só no documento final.'},
            {t:'Colar tudo, porque o comprador nunca vai saber.', ok:false, why:'O problema não é ele saber, é expor dados sem necessidade. A LGPD protege esses dados mesmo sem reclamação.'},
            {t:'Não usar IA em nenhum documento de trabalho, nunca.', ok:false, why:'Dá para usar com segurança anonimizando. Proibir tudo desperdiça uma ferramenta útil.'}
          ]}
      ]},
    { id:'3.2', title:'Conferir antes de confiar', min:8,
      body:[
        `<div class="card analogy"><h3>🔍 O repórter que confirma com duas fontes</h3><p>Um bom repórter só publica depois de confirmar a notícia com mais de uma fonte. Trate a resposta da IA como a <b>primeira pista</b>, não como a notícia confirmada.</p></div>`,
        `<div class="term"><b>Fonte oficial</b> = site de governo, instituição ou empresa responsável pela informação. <b>Checagem cruzada</b> = conferir a mesma informação em dois ou mais lugares confiáveis. <b>Citação inventada</b> = referência (lei, livro, estudo) que a IA cria e que não existe.</div>`,
        `<div class="card"><h3>O teste dos 3 passos</h3>
          <ol class="golden"><li><span>Pergunte à IA: "De onde vem essa informação? Cite a fonte." Mas desconfie: ela pode inventar.</span></li><li><span>Procure a fonte você mesmo, em um site oficial.</span></li><li><span>Compare números, datas e nomes.</span></li></ol>
          <p><b>Sinais de alerta:</b> muita certeza sobre assunto de nicho; números muito específicos sem fonte; nome de lei, livro ou estudo que você não consegue encontrar. Quanto maior o risco (saúde, dinheiro, lei), mais fontes você confere.</p>
          <p>Exemplo: a IA diz "o artigo 12 da lei X garante isso". Você abre o texto da lei no site oficial e vê o que ela realmente diz.</p></div>`,
        `<div class="card"><h3>📍 Onde conferir no Brasil</h3><div class="tw"><table class="tbl"><tr><th>Assunto</th><th>Onde procurar</th></tr>
          <tr><td>Leis</td><td>Site oficial do Planalto ou da câmara e assembleia correspondentes</td></tr>
          <tr><td>INSS, benefícios, documentos</td><td>Portal gov.br e aplicativos oficiais</td></tr>
          <tr><td>Saúde</td><td>Ministério da Saúde, secretarias e o seu médico</td></tr>
          <tr><td>Regras da cidade</td><td>Site e central de atendimento da prefeitura</td></tr></table></div>
          <p>Na dúvida, prefira endereços que terminam em <b>.gov.br</b> ou o site da própria instituição.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um repórter confere a notícia antes de contar, e como isso vale para a IA.</div>`
      ],
      ch:[
        { who:'Renata, 29 anos, analista de RH', says:'A IA me deu o número de uma lei trabalhista para colocar no meu relatório. O texto estava tão bem escrito que nem desconfiei.',
          q:'Qual é o próximo passo?',
          opts:[
            {t:'Colocar no relatório: texto bem escrito é sinal de acerto.', ok:false, why:'Escrever bem não prova que a informação está certa. A IA pode inventar leis com aparência convincente.'},
            {t:'Perguntar de novo à própria IA e, se ela repetir o mesmo número, considerar confirmado.', ok:false, why:'Repetir não é confirmar: a IA pode repetir o mesmo erro. A conferência precisa vir de outra fonte.'},
            {t:'Procurar a lei no site oficial e conferir o número e o conteúdo antes de usar.', ok:true, why:'Conferir na fonte oficial é o passo que transforma a pista da IA em informação confiável.'}
          ]},
        { who:'Seu Valdir, 64 anos, aposentado', says:'A IA disse que tenho direito a um benefício novo do INSS e me explicou como pedir. Vou já ligar e exigir.',
          q:'O que Seu Valdir deve fazer antes?',
          opts:[
            {t:'Conferir no portal gov.br ou no aplicativo oficial do INSS se o benefício existe e quais são as regras.', ok:true, why:'Benefícios mudam e a IA pode misturar ou inventar regras. A fonte oficial confirma se ele realmente tem direito.'},
            {t:'Ligar e exigir, porque a IA explicou com detalhes.', ok:false, why:'Detalhe não é prova. Ele pode perder tempo ou passar por constrangimento por causa de uma informação inventada.'},
            {t:'Pagar um site que promete liberar o benefício mais rápido.', ok:false, why:'Sites que cobram para "liberar" benefícios costumam ser golpe. Os serviços do INSS estão nos canais oficiais.'}
          ]},
        { who:'Carolina, 22 anos, universitária', says:'A IA me indicou três livros para o meu trabalho de faculdade, com autor e ano. Vou colocar na bibliografia.',
          q:'Qual é o risco e como evitá-lo?',
          opts:[
            {t:'Nenhum risco: livros com autor e ano sempre existem.', ok:false, why:'A IA pode criar títulos, autores e anos que parecem reais. Isso é uma citação inventada.'},
            {t:'O risco é só a formatação estar errada.', ok:false, why:'O problema pode ser bem maior: o livro pode nem existir. Citar algo inexistente compromete o trabalho.'},
            {t:'Os livros podem ser inventados; ela deve procurar cada um em biblioteca ou catálogo confiável antes de citar.', ok:true, why:'Citação inventada é um dos erros mais comuns da IA. Encontrar cada livro de verdade é o que garante a bibliografia.'}
          ]}
      ]},
    { id:'3.3', title:'Seu plano de 7 dias com IA', min:8,
      body:[
        `<div class="card analogy"><h3>🗓️ Academia: o hábito vence o treino gigante</h3><p>Ninguém fica em forma com um treino de 5 horas uma vez só. Faz diferença treinar <b>15 minutos por dia</b>. Com a IA é igual.</p></div>`,
        `<div class="term"><b>Rotina</b> = hábito repetido, de preferência no mesmo horário. <b>Caso de uso</b> = uma tarefa real em que você usa a IA. <b>Registro</b> = anotar o que funcionou e o que não funcionou.</div>`,
        `<div class="card"><h3>15 minutos por dia</h3>
          <div class="tw"><table class="tbl">
          <tr><td><b>Dia 1</b></td><td>Crie a conta e faça 3 perguntas do seu dia a dia.</td></tr>
          <tr><td><b>Dia 2</b></td><td>Peça o resumo de um texto que você já leu.</td></tr>
          <tr><td><b>Dia 3</b></td><td>Use a fórmula de 4 partes (papel, tarefa, contexto, formato) para escrever uma mensagem.</td></tr>
          <tr><td><b>Dia 4</b></td><td>Peça a explicação de um assunto difícil "para uma criança de 10 anos".</td></tr>
          <tr><td><b>Dia 5</b></td><td>Teste uma imagem ou um arquivo, se a sua ferramenta permitir.</td></tr>
          <tr><td><b>Dia 6</b></td><td>Confira uma resposta da IA em fonte oficial.</td></tr>
          <tr><td><b>Dia 7</b></td><td>Anote 3 tarefas em que a IA ajudou e 1 em que errou.</td></tr></table></div>
          <p>No fim da semana você terá o seu <b>primeiro manual pessoal de IA</b>.</p></div>`,
        `<div class="card"><h3>📝 Como registrar sem complicar</h3><p>Use uma nota no celular com três linhas por dia:</p><ol class="golden"><li><span><b>O que pedi</b> (em uma frase).</span></li><li><span><b>Como ficou</b>: ajudou, ajudou com ajustes ou não ajudou.</span></li><li><span><b>O que aprendi</b>: um ajuste que funcionou ou um erro da IA que você pegou.</span></li></ol><p>Depois de uma semana, releia: você vai enxergar padrões, como "para mensagens funciona ótimo" ou "para números preciso conferir sempre".</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, o que você aprendeu nesta semana sobre IA.</div>`
      ],
      ch:[
        { who:'Diego, 33 anos, motorista de aplicativo', says:'Vou dedicar o domingo inteiro a estudar IA, umas 8 horas, e depois deixo de lado.',
          q:'Qual é a melhor estratégia?',
          opts:[
            {t:'Treinar 15 minutos por dia, com tarefas reais do dia a dia, anotando o que funciona.', ok:true, why:'Constância com tarefas reais fixa o aprendizado e faz a IA virar hábito. Os registros mostram o que vale repetir.'},
            {t:'Fazer a maratona de domingo e depois parar.', ok:false, why:'Muita informação de uma vez e depois abandono faz o aprendizado se perder. O hábito diário rende mais.'},
            {t:'Só ler sobre IA, sem testar nada, para evitar erros.', ok:false, why:'Sem prática, o conhecimento não vira habilidade. Errar com tarefas pequenas faz parte do aprendizado.'}
          ]},
        { who:'Elaine, 46 anos, cabeleireira', says:'Fiz o plano de 7 dias, mas não anotei nada. Agora não lembro o que funcionou.',
          q:'O que faltou para o plano render mais?',
          opts:[
            {t:'Usar mais ferramentas diferentes ao mesmo tempo.', ok:false, why:'Mais ferramentas não resolvem a falta de memória do que deu certo. O que faltou foi registrar.'},
            {t:'O registro diário curto: o que pediu, como ficou e o que aprendeu.', ok:true, why:'O registro transforma tentativas soltas em aprendizado. Ao reler, ela enxerga o que vale repetir.'},
            {t:'Passar mais horas por dia na IA.', ok:false, why:'Tempo extra sem registro também se perde. Três linhas por dia bastam.'}
          ]},
        { who:'Otávio, 39 anos, gerente de mercadinho', says:'No dia 6 do plano, a IA me deu um horário de funcionamento do banco errado. Acho que o plano falhou.',
          q:'Como interpretar o que aconteceu?',
          opts:[
            {t:'O plano falhou e ele deve parar de usar IA.', ok:false, why:'Pegar o erro não é falha do plano, é exatamente o que ele queria treinar.'},
            {t:'Foi azar, na próxima a IA acerta.', ok:false, why:'Não é questão de sorte: informação local e que muda é um ponto fraco previsível da IA.'},
            {t:'O plano funcionou: o dia 6 era para conferir respostas, e ele pegou um erro típico de informação local. Vale anotar no registro.', ok:true, why:'Perceber o erro e saber por que ele aconteceu é sinal de que o aprendizado está acontecendo.'}
          ]}
      ]},
    { id:'3.4', title:'Golpes com IA e uso honesto', min:8,
      body:[
        `<div class="card analogy"><h3>🎭 O mesmo martelo que constrói e quebra</h3><p>Um martelo serve para construir uma casa ou para quebrar uma janela. A IA também: as mesmas ferramentas que ajudam você a escrever e criar imagens são usadas por golpistas para <b>imitar vozes, rostos e mensagens</b>. Conhecer o truque é a melhor defesa.</p></div>`,
        `<div class="term"><b>Deepfake</b> = vídeo, foto ou áudio falso criado por IA que imita uma pessoa real. <b>Voz clonada</b> = áudio falso que imita a voz de alguém a partir de gravações. <b>Transparência</b> = deixar claro quando você usou IA num trabalho.</div>`,
        `<div class="card"><h3>🚨 Golpes que já acontecem</h3><ol class="golden"><li><span><b>Áudio do "parente em apuros"</b>: uma voz parecida com a do seu filho pede um Pix urgente.</span></li><li><span><b>Vídeo de famoso</b> recomendando investimento milagroso ou produto.</span></li><li><span><b>Mensagens perfeitas</b> de "banco" ou "loja", sem erros de português, pedindo dados.</span></li></ol>
          <p><b>Defesa simples:</b> desconfie de urgência + dinheiro. Desligue e ligue de volta para o número que você já conhece. Combine com a família uma <b>palavra-chave</b> para emergências.</p></div>`,
        `<div class="card"><h3>🤝 Usar IA com honestidade</h3><div class="tw"><table class="tbl"><tr><th>Situação</th><th>Atitude honesta</th></tr>
          <tr><td>Trabalho de escola ou faculdade</td><td>Siga a regra do professor. Use a IA para entender e revisar, não para entregar texto que você não escreveu.</td></tr>
          <tr><td>Trabalho para clientes</td><td>Revise tudo e assuma a responsabilidade pelo resultado.</td></tr>
          <tr><td>Imagem de pessoa real</td><td>Não crie nem compartilhe imagens falsas de pessoas reais.</td></tr></table></div>
          <p>A IA também pode repetir preconceitos (viés). Se um texto gerado estereotipa pessoas, corrija antes de usar.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que é um deepfake e o que fazer se receber um áudio estranho pedindo dinheiro.</div>`
      ],
      ch:[
        { who:'Dona Lurdes, 67 anos, aposentada em Recife', says:'Recebi um áudio com a voz do meu neto chorando, dizendo que bateu o carro e precisa de um Pix agora. A voz é igualzinha!',
          q:'O que Dona Lurdes deve fazer?',
          opts:[
            {t:'Fazer o Pix rápido, porque a voz é idêntica à do neto.', ok:false, why:'Vozes podem ser clonadas por IA a partir de vídeos e áudios públicos. Voz parecida não prova nada.'},
            {t:'Responder o áudio pedindo mais detalhes ao golpista.', ok:false, why:'Continuar a conversa com o número desconhecido dá chance para o golpista convencer. Melhor sair do canal.'},
            {t:'Desligar e ligar para o número do neto que ela já tem, ou para outro parente, antes de qualquer pagamento.', ok:true, why:'Urgência + dinheiro é sinal de golpe. Confirmar por um canal conhecido desmonta a maioria das fraudes com voz clonada.'}
          ]},
        { who:'Igor, 17 anos, estudante do ensino médio', says:'Pedi para a IA escrever minha redação inteira e vou entregar como se fosse minha. O professor nem vai perceber.',
          q:'Qual é o uso honesto e que mais ajuda o Igor?',
          opts:[
            {t:'Entregar o texto da IA como se fosse dele.', ok:false, why:'Isso engana o professor e, pior, o Igor não aprende a escrever, que é o objetivo da redação.'},
            {t:'Escrever a redação ele mesmo e usar a IA para pedir sugestões de melhoria e explicação dos erros, seguindo a regra da escola.', ok:true, why:'Assim a IA vira professora particular: ele aprende de verdade e não corre o risco de fraude.'},
            {t:'Pedir à IA para escrever com erros de propósito, para parecer dele.', ok:false, why:'Continua sendo entregar um trabalho que não é dele, e ainda com erros. Não resolve o problema de aprendizagem nem de honestidade.'}
          ]},
        { who:'Sabrina, 35 anos, social media de pequenas empresas', says:'Um cliente pediu um post com uma foto criada por IA mostrando um cantor famoso usando o produto dele.',
          q:'Como Sabrina deve responder?',
          opts:[
            {t:'Fazer, porque imagem criada por IA não é foto de verdade.', ok:false, why:'Uma imagem falsa de pessoa real usando o produto engana o público e pode gerar problemas de direito de imagem.'},
            {t:'Recusar a imagem falsa do famoso e propor alternativas honestas, como foto real do produto ou ilustração sem pessoas reais.', ok:true, why:'Não se cria imagem falsa de pessoa real. Oferecer alternativas mantém o cliente bem atendido e a marca protegida.'},
            {t:'Fazer, mas colocar a imagem bem pequena para ninguém reparar.', ok:false, why:'O tamanho não muda o problema: continua sendo uma imagem falsa usando a imagem de alguém sem autorização.'}
          ]}
      ]},
    { id:'3.5', title:'Quando não usar IA', min:8,
      body:[
        `<div class="card analogy"><h3>🚫 A furadeira e o quadro torto</h3><p>Uma furadeira é ótima, mas ninguém a usa para pendurar um ímã na geladeira. Ter uma ferramenta poderosa não significa usá-la em tudo. Saber <b>quando deixar a IA de lado</b> é tão importante quanto saber usá-la.</p></div>`,
        `<div class="term"><b>Decisão de alto risco</b> = escolha em que um erro afeta saúde, dinheiro, direitos ou segurança de alguém. <b>Relação pessoal</b> = conversa em que o valor está em ser você falando. <b>Dependência</b> = deixar de saber fazer algo porque sempre delega.</div>`,
        `<div class="card"><h3>Cinco situações para pensar duas vezes</h3>
          <ol class="golden"><li><span><b>Decisões de alto risco sem profissional</b>: diagnóstico, dose de remédio, ação na justiça, investimento grande.</span></li><li><span><b>Quando você não consegue conferir</b>: se não há como checar a resposta e o erro custa caro, a IA vira um palpite perigoso.</span></li><li><span><b>Conversas que pedem você</b>: condolências, pedido de desculpas a alguém próximo, declaração de carinho. A IA pode ajudar a organizar ideias, mas as palavras precisam ser suas.</span></li><li><span><b>Dados que não podem sair</b>: informações sigilosas da empresa, de pacientes ou de clientes, quando não há ferramenta autorizada.</span></li><li><span><b>Quando o objetivo é aprender</b>: prova, treino, habilidade que você precisa dominar. Delegar tudo tira o aprendizado.</span></li></ol></div>`,
        `<div class="card"><h3>🧭 O teste rápido antes de usar</h3><p>Antes de abrir a IA, responda em segundos: <b>se a resposta vier errada, qual o tamanho do estrago?</b> <b>Consigo conferir?</b> <b>Posso compartilhar estas informações?</b> <b>Eu preciso aprender a fazer isso sozinho?</b> Se o estrago é grande e você não consegue conferir, procure um profissional ou fonte oficial. Se as informações não podem sair, não cole. Se precisa aprender, use a IA como professora, não como substituta. Na maioria das tarefas do dia a dia, o teste libera o uso tranquilamente.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a calculadora ajuda na conta do mercado, mas não deve ser usada na prova de tabuada.</div>`
      ],
      ch:[
        { who:'Alice, 33 anos, perdeu a avó de uma amiga próxima', says:'Não sei o que escrever para minha amiga. Vou pedir para a IA escrever a mensagem e mando igualzinho.',
          q:'Qual é o uso mais adequado?',
          opts:[
            {t:'Mandar o texto da IA sem mudar nada, porque fica mais bonito.', ok:false, why:'Num momento assim, o valor está em ser ela falando. Um texto genérico pode soar frio.'},
            {t:'Usar a IA, se quiser, só para organizar ideias, e escrever a mensagem com as próprias palavras e lembranças.', ok:true, why:'Em conversas pessoais, as palavras precisam ser suas. A IA pode, no máximo, ajudar a começar.'},
            {t:'Não mandar nada para não errar.', ok:false, why:'O silêncio pode magoar mais. Uma mensagem simples e sincera costuma bastar.'}
          ]},
        { who:'Seu Joaquim, 70 anos, aposentado', says:'Recebi uma proposta de investimento e pedi para a IA dizer se devo colocar todas as minhas economias.',
          q:'O que o teste rápido indica?',
          opts:[
            {t:'Estrago grande e difícil de conferir: a IA pode ajudar a listar perguntas, mas a decisão pede consulta a profissional ou instituição confiável.', ok:true, why:'Decisões de alto risco sem conferência são onde a IA não deve decidir. Ela pode apoiar a preparação, não a escolha.'},
            {t:'Seguir a recomendação da IA, porque ela é imparcial.', ok:false, why:'Imparcial não quer dizer correta. Ela não conhece a vida financeira dele e pode estar errada sobre a proposta.'},
            {t:'Colocar tudo se a IA disser que é seguro duas vezes.', ok:false, why:'Repetir não confirma. E propostas de "investimento garantido" são comuns em golpes.'}
          ]},
        { who:'Bruna, 26 anos, analista num escritório de advocacia', says:'Quero usar a IA para resumir o processo de um cliente, mas o escritório ainda não tem regras nem ferramenta autorizada.',
          q:'Qual é a decisão mais responsável?',
          opts:[
            {t:'Usar a ferramenta gratuita pessoal mesmo assim, ninguém vai saber.', ok:false, why:'Processos têm dados sigilosos de clientes. Sem autorização, o risco é do cliente e do escritório.'},
            {t:'Colar só metade do processo para reduzir o risco.', ok:false, why:'Metade continua expondo dados sigilosos. O problema é a falta de autorização.'},
            {t:'Não colar o processo e conversar com a coordenação sobre regras e ferramentas autorizadas.', ok:true, why:'Dados que não podem sair ficam fora da IA até existir uma ferramenta e uma regra adequadas.'}
          ]}
      ]},
    { id:'3.7', title:'Ajustando a privacidade da sua conta', min:13,
      body:[
        `<div class="card analogy"><h3>🪟 A cortina da janela</h3><p>Morar numa casa com janela para a rua não é problema. O problema é nunca ter olhado se a cortina está aberta. A sua conta de IA tem "cortinas": opções que decidem o que fica guardado e como suas conversas podem ser usadas. <b>Quase ninguém abre essas configurações</b>, e leva só cinco minutos.</p></div>`,
        `<div class="term"><b>Histórico</b> = as conversas que ficam salvas na sua conta. <b>Memória</b> = recurso de algumas ferramentas que guarda informações sobre você para usar em conversas futuras. <b>Chat temporário</b> = conversa que não fica no seu histórico (a empresa ainda pode guardá-la por um tempo, conforme a política dela). <b>Uso para treinamento</b> = permissão para a empresa usar suas conversas para melhorar os modelos.</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: a conta da Fabiana</h3><p>Fabiana, vendedora, usa o ChatGPT para textos do trabalho há oito meses. Ao abrir as configurações, encontrou o uso para treinamento ligado, a memória guardando "trabalho na loja tal, meu gerente se chama tal" e dezenas de conversas antigas com nomes de clientes. O que ela fez:</p>
          <ol class="golden"><li><span>Em <b>Configurações › Controles de dados</b>, leu a opção de usar as conversas para melhorar o modelo e decidiu desligá-la.</span></li><li><span>Em <b>Personalização › Memória</b>, leu o que estava salvo e apagou o que não queria que a IA lembrasse.</span></li><li><span>Apagou as conversas antigas que tinham nomes de clientes.</span></li><li><span>Passou a usar o <b>chat temporário</b> para assuntos mais delicados.</span></li></ol>
          <div class="tw"><table class="tbl"><tr><th>Ferramenta</th><th>Onde procurar</th></tr>
          <tr><td>ChatGPT</td><td>Configurações › Controles de dados; Personalização › Memória</td></tr>
          <tr><td>Gemini</td><td>Configurações › Atividade (o nome do menu já mudou algumas vezes)</td></tr>
          <tr><td>Copilot</td><td>Configurações de privacidade do Copilot e da Conta Microsoft</td></tr></table></div>
          <p>Os nomes dos menus mudam com frequência. Se não encontrar, procure palavras como "dados", "privacidade", "memória" ou "atividade".</p></div>`,
        `<div class="card"><h3>⚠️ Erros comuns</h3><ol class="golden"><li><span><b>Achar que desligar o treinamento torna tudo secreto.</b> O que você escreve continua sendo enviado e guardado pela empresa. Senhas, CPFs e documentos seguem proibidos.</span></li><li><span><b>Achar que chat temporário é anônimo.</b> Ele só não fica no seu histórico.</span></li><li><span><b>Esquecer a memória.</b> Um detalhe pessoal dito uma vez pode reaparecer em conversas futuras.</span></li><li><span><b>Deixar a conta aberta</b> em computador do trabalho, da escola ou de lan house. Sempre saia da conta.</span></li></ol></div>`,
        `<div class="card"><h3>✋ Agora é sua vez (ChatGPT: controles de dados, 5 min)</h3><ol class="golden"><li><span>Abra as configurações da ferramenta de IA que você usa.</span></li><li><span>Encontre a opção de uso das conversas para treinamento, leia a explicação e decida se quer deixar ligada.</span></li><li><span>Se houver memória, leia o que está salvo e apague o que não quer manter.</span></li><li><span>Apague pelo menos 1 conversa antiga com informação que não precisa ficar lá.</span></li><li><span>Anote o que mudou e por quê: vai servir para o seu guia de segurança.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a alguém a diferença entre histórico, memória e chat temporário, usando a imagem da cortina.</div>`
      ],
      ch:[
        { who:'Ricardo, 37 anos, analista financeiro', says:'Desliguei a opção de usar minhas conversas para treinar a IA. Agora posso colar a planilha com os CPFs dos clientes, certo?',
          q:'O que Ricardo precisa entender?',
          opts:[
            {t:'Pode colar: com o treinamento desligado, ninguém tem acesso aos dados.', ok:false, why:'Desligar o treinamento reduz um tipo de uso, mas os dados continuam sendo enviados e guardados pela empresa.'},
            {t:'Pode colar, desde que use o chat temporário.', ok:false, why:'O chat temporário só tira a conversa do histórico. CPFs de clientes continuam saindo da empresa sem necessidade.'},
            {t:'Não: desligar o treinamento não muda o fato de que os dados saem da empresa. CPFs continuam no vermelho do semáforo.', ok:true, why:'Configuração de privacidade é uma camada a mais, não uma licença para colar dados pessoais.'}
          ]},
        { who:'Ana, 20 anos, estudante', says:'Usei o computador da biblioteca para entrar na minha conta de IA e fazer um trabalho. Já terminei.',
          q:'O que Ana deve fazer antes de levantar?',
          opts:[
            {t:'Sair da conta (fazer logout) e não deixar a senha salva no navegador.', ok:true, why:'Em computador compartilhado, a próxima pessoa pode abrir sua conta e ler o histórico se você não sair.'},
            {t:'Só fechar a aba: isso já desconecta a conta.', ok:false, why:'Fechar a aba geralmente mantém a sessão aberta. É preciso sair da conta.'},
            {t:'Apagar só a última conversa e deixar a conta aberta.', ok:false, why:'Com a conta aberta, todas as outras conversas continuam acessíveis.'}
          ]},
        { who:'Paula, 44 anos, auxiliar de cozinha', says:'Pedi receitas para a IA e ela lembrou que eu tenho diabetes, coisa que eu falei semanas atrás. Não quero que ela guarde isso.',
          q:'Qual é a solução?',
          opts:[
            {t:'Criar uma conta nova toda semana.', ok:false, why:'Trabalhoso e desnecessário. A ferramenta tem um lugar próprio para controlar o que fica guardado.'},
            {t:'Abrir as configurações de memória, apagar esse item (ou desligar a memória) e evitar contar dados de saúde quando não for preciso.', ok:true, why:'A memória pode ser revista e apagada. E dado de saúde é sensível: só compartilhe quando realmente fizer diferença.'},
            {t:'Nada a fazer: a IA nunca esquece.', ok:false, why:'Nas ferramentas com memória, você pode ver e apagar o que foi guardado.'}
          ]}
      ]},
    { id:'3.8', title:'Lendo as fontes que a IA mostra', min:13,
      body:[
        `<div class="card analogy"><h3>🧾 A nota fiscal da informação</h3><p>Quando um vendedor mostra a nota fiscal, você ainda confere se ela é daquela compra, daquela loja e daquela data. Uma IA que mostra fontes é como o vendedor que mostra a nota: ajuda muito, mas <b>só vale se você abrir e conferir</b>.</p></div>`,
        `<div class="term"><b>Fonte</b> = página ou documento de onde a informação veio. <b>Fonte primária</b> = quem produz a informação (o órgão do governo, o Diário Oficial, a própria empresa). <b>Fonte secundária</b> = quem repassa (notícia, blog, vídeo). <b>Data de publicação</b> = quando a fonte foi escrita.</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido (caso fictício): o boato do Pix</h3><p>Gilson recebeu no grupo do bairro: "A partir do mês que vem, Pix acima de R$ 500 vai pagar taxa." Ele perguntou ao Perplexity, que respondeu citando 3 fontes. Ele abriu cada uma e fez 4 perguntas:</p>
          <div class="tw"><table class="tbl"><tr><th>Pergunta</th><th>Fonte 1</th><th>Fonte 2</th><th>Fonte 3</th></tr>
          <tr><td>Quem publicou?</td><td>Banco Central (primária)</td><td>Jornal conhecido</td><td>Blog sem autor</td></tr>
          <tr><td>Diz mesmo o que a resposta afirma?</td><td>Não fala em taxa</td><td>Fala de um boato desmentido</td><td>Afirma a taxa</td></tr>
          <tr><td>De quando é?</td><td>Atual</td><td>Atual</td><td>Sem data</td></tr>
          <tr><td>É a origem ou repete alguém?</td><td>Origem</td><td>Cita o Banco Central</td><td>Não cita ninguém</td></tr></table></div>
          <p>Conclusão do Gilson: a única fonte que sustentava a taxa era a mais fraca. Ele não repassou o boato e mandou no grupo o link da fonte oficial.</p></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><ol class="golden"><li><span><b>Ver o link e não abrir:</b> a presença da fonte dá sensação de segurança, mas só a leitura confirma.</span></li><li><span><b>Fonte que não diz aquilo:</b> a IA pode resumir errado ou misturar fontes. Procure a frase na página.</span></li><li><span><b>Fonte velha:</b> regra de 2019 pode ter mudado. Olhe a data.</span></li><li><span><b>Muitos sites, uma só origem:</b> cinco sites copiando o mesmo post não somam cinco confirmações.</span></li></ol></div>`,
        `<div class="card"><h3>✋ Agora é sua vez (Perplexity, 5 min)</h3><ol class="golden"><li><span>Escolha uma afirmação que circulou num grupo seu (saúde, dinheiro, benefício, notícia).</span></li><li><span>Pergunte ao Perplexity com as suas palavras se ela é verdadeira.</span></li><li><span>Abra pelo menos 2 fontes e faça as 4 perguntas da tabela.</span></li><li><span>Classifique: confirmada, sem confirmação ou desmentida.</span></li><li><span>Se for repassar, repasse o link da fonte oficial, não o print da IA.</span></li></ol><p>🔐 Não cole a mensagem com nome, foto ou telefone de quem mandou: escreva só a afirmação.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a alguém por que "a IA mostrou o link" não é o mesmo que "a informação está confirmada".</div>`
      ],
      ch:[
        { who:'Marlene, 58 anos, cuidadora de idosos', says:'A IA disse que uma vacina está liberada para todas as idades e citou a página do Ministério da Saúde. Abri a página e ela fala só de alguns grupos.',
          q:'Em que Marlene deve acreditar?',
          opts:[
            {t:'Na resposta da IA, porque ela citou uma fonte oficial.', ok:false, why:'Citar a fonte não garante que a resposta repetiu a fonte corretamente. O que vale é o que está escrito na página.'},
            {t:'No que a página oficial diz: a resposta da IA resumiu errado.', ok:true, why:'Quando resposta e fonte discordam, vale a fonte. Esse é exatamente o erro que abrir o link revela.'},
            {t:'Nas duas, porque cada uma tem um pedaço da verdade.', ok:false, why:'A página oficial é clara sobre os grupos. A versão da IA, nesse ponto, está errada.'}
          ]},
        { who:'Diego, 28 anos, microempreendedor (MEI)', says:'A fonte que a IA mostrou sobre o limite de faturamento do MEI é do site do governo, mas é de 2019.',
          q:'O que Diego deve fazer?',
          opts:[
            {t:'Usar a informação: se é do governo, vale para sempre.', ok:false, why:'Regras mudam. Uma página oficial antiga pode estar desatualizada.'},
            {t:'Ignorar a data, porque o que importa é o site ser oficial.', ok:false, why:'Ser oficial e ser atual são coisas diferentes. Os dois importam.'},
            {t:'Procurar a informação atual no canal oficial do MEI (Portal do Empreendedor, no gov.br) antes de decidir.', ok:true, why:'Para regras que mexem com dinheiro e impostos, a fonte precisa ser oficial e atual.'}
          ]},
        { who:'Tiago, 35 anos, garçom', says:'Achei a mesma notícia em cinco sites diferentes. Todos citam o mesmo post de uma rede social. Então está confirmado.',
          q:'O que está errado nesse raciocínio?',
          opts:[
            {t:'Nada: cinco sites concordando é confirmação suficiente.', ok:false, why:'Eles não concordam de forma independente: todos copiaram a mesma origem.'},
            {t:'Os cinco sites vêm de uma só origem, o post. É preciso encontrar uma fonte primária ou um veículo que tenha apurado por conta própria.', ok:true, why:'Repetição não é confirmação. O que conta é ter fontes independentes e confiáveis.'},
            {t:'Ele deveria ter achado dez sites em vez de cinco.', ok:false, why:'Mais cópias da mesma origem continuam sendo uma única fonte.'}
          ]}
      ]},
    { id:'3.9', title:'Anonimizar de verdade: o que entrega quem é a pessoa', min:13,
      body:[
        `<div class="card analogy"><h3>🕶️ A tarja preta que não esconde nada</h3><p>Uma foto de jornal com tarja preta nos olhos não protege ninguém se a legenda diz "o dono da única padaria da Rua das Acácias". Com a IA é igual: <b>tirar só o nome não basta</b> quando os outros detalhes apontam direto para a pessoa.</p></div>`,
        `<div class="term"><b>Identificação direta</b> = dado que, sozinho, identifica alguém: nome, CPF, telefone, e-mail, endereço, placa, foto do rosto. <b>Identificação indireta</b> = combinação de detalhes que aponta para uma pessoa (cargo único + cidade pequena + data). <b>Rótulo</b> = marcação no lugar do dado, como [FUNCIONÁRIO] ou [CLIENTE 1].</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: o feedback do Leandro</h3><p>Leandro, supervisor de loja, quer ajuda para escrever um feedback a um funcionário que vem chegando atrasado.</p>
          <div class="flows">
            <div class="flow old"><h4>Primeira versão</h4><div class="node">Nome completo do funcionário, "o único caixa da nossa filial de Itabuna", "atrasou 5 vezes em setembro porque cuida da mãe com Alzheimer".</div></div>
            <div class="flow new"><h4>Versão anonimizada</h4><div class="node good">"[FUNCIONÁRIO]", "atrasou várias vezes no último mês por um motivo familiar", pedindo um tom acolhedor, claro sobre a regra de horário e com 2 combinados possíveis.</div></div>
          </div>
          <p style="margin-top:14px"><b>O método de 4 passos que ele usou:</b></p>
          <ol class="golden"><li><span>Tirar a <b>identificação direta</b>: nome, documentos, contatos, endereço.</span></li><li><span>Generalizar os <b>detalhes indiretos</b>: "filial de Itabuna" e "único caixa" viraram "uma loja"; a data exata virou "no último mês".</span></li><li><span>Retirar o <b>dado sensível</b> que não muda a resposta: a doença da mãe virou "motivo familiar".</span></li><li><span>Ler como um <b>estranho</b>: dá para descobrir quem é? Se sim, generalizar mais.</span></li></ol>
          <p>A resposta da IA ficou igualmente útil, e ninguém foi exposto.</p></div>`,
        `<div class="card"><h3>⚠️ Erros comuns</h3><ol class="golden"><li><span><b>Trocar só o nome</b> e manter cargo, local e data que identificam.</span></li><li><span><b>Colar e-mail com assinatura:</b> o rodapé leva telefone, endereço e cargo.</span></li><li><span><b>Print de conversa:</b> mostra foto de perfil, número e nome do contato.</span></li><li><span><b>Planilha ou arquivo com "sobras":</b> colunas escondidas, comentários e o nome do autor no arquivo.</span></li></ol></div>`,
        `<div class="card"><h3>✋ Agora é sua vez (ChatGPT em chat temporário ou outro assistente, 5 min)</h3><ol class="golden"><li><span>Pense numa situação real de trabalho ou estudo que envolve outra pessoa.</span></li><li><span>Escreva o pedido primeiro num bloco de notas, não na IA.</span></li><li><span>Aplique os 4 passos.</span></li><li><span>Releia como um estranho (ou peça a alguém de confiança): dá para descobrir quem é?</span></li><li><span>Só então envie à IA. Os dados reais você coloca depois, fora dela.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a alguém por que "a professora da única escola do bairro" pode identificar uma pessoa tanto quanto o nome dela.</div>`
      ],
      ch:[
        { who:'Sílvia, 39 anos, professora', says:'Quero ajuda da IA para escrever o relatório de um aluno: "o único aluno cadeirante do 7º B da Escola Estadual tal". Troquei o nome por [ALUNO]. Já está anônimo?',
          q:'O que você responderia?',
          opts:[
            {t:'Sim: sem o nome, ninguém sabe quem é.', ok:false, why:'Escola, turma e deficiência juntos apontam para uma única criança. É identificação indireta.'},
            {t:'Basta trocar o nome da escola e manter o resto.', ok:false, why:'Turma e deficiência ainda restringem muito. E a deficiência é dado sensível que talvez nem mude a resposta.'},
            {t:'Ainda não: ela deve generalizar ("um aluno do fundamental") e só manter a deficiência se ela realmente mudar o que precisa ser escrito.', ok:true, why:'Anonimizar é tirar o nome e também os detalhes que, juntos, identificam. Dado sensível só entra se for necessário.'}
          ]},
        { who:'Marcelo, 32 anos, atendente de uma loja online', says:'Colei o e-mail de um cliente para a IA me ajudar a responder. Depois vi que foi junto a assinatura com telefone e endereço dele.',
          q:'O que ele deveria ter feito?',
          opts:[
            {t:'Apagado a assinatura e o cabeçalho antes de colar, conferindo o texto inteiro antes de enviar.', ok:true, why:'Assinaturas e cabeçalhos são o jeito mais comum de vazar dados sem perceber. Conferir antes de colar resolve.'},
            {t:'Nada: o cliente mandou o e-mail para a loja, então pode.', ok:false, why:'O cliente mandou para a loja, não para outro serviço. Repassar dados sem necessidade é o que a LGPD pede para evitar.'},
            {t:'Nada: a IA não presta atenção na assinatura.', ok:false, why:'O problema não é a IA prestar atenção, é o dado ter sido enviado e guardado fora da empresa.'}
          ]},
        { who:'Cláudio, 55 anos, síndico', says:'Quero que a IA me ajude a responder uma reclamação de barulho. Qual destes pedidos está bem anonimizado?',
          q:'Escolha o pedido mais seguro.',
          opts:[
            {t:'"Resuma a reclamação da Dona Fátima, do apartamento 302 do Edifício Primavera."', ok:false, why:'Nome, apartamento e prédio identificam a moradora diretamente.'},
            {t:'"Resuma a reclamação da F., do 302 do Edifício Primavera."', ok:false, why:'Inicial, apartamento e prédio continuam apontando para uma só pessoa.'},
            {t:'"Resuma a reclamação de uma moradora sobre barulho vindo do apartamento de cima."', ok:true, why:'Mantém o que a IA precisa para ajudar (o problema) e tira tudo o que identifica as pessoas.'}
          ]}
      ]},
    { id:'3.6', title:'Projeto: meu guia pessoal de segurança com IA', min:35,
      body:[`<div class="card"><p>Você vai montar um guia curto, do seu jeito, para consultar sempre que for usar IA. Ele vale para você e pode ser compartilhado com a família ou com a equipe.</p></div>`],
      projeto:{
        entrega:'Um guia pessoal de segurança com o seu semáforo de dados, onde você confere informações e como se protege de golpes com IA.',
        passos:[
          'Liste 3 informações da sua vida ou trabalho em cada cor do semáforo (vermelho, amarelo, verde).',
          'Reescreva um pedido real seu usando [COLCHETES] no lugar dos dados pessoais.',
          'Anote 3 assuntos que você costuma pesquisar e a fonte oficial onde vai conferir cada um.',
          'Escreva 2 regras anti-golpe para você e sua família (por exemplo, a palavra-chave de emergência).',
          'Liste 2 situações da sua vida em que você decidiu não usar IA, explicando o resultado do teste rápido da lição 3.5.'
        ],
        checklist:[
          'O semáforo tem exemplos reais da minha rotina nas 3 cores.',
          'Mostrei um pedido anonimizado com colchetes.',
          'Cada assunto tem uma fonte oficial específica para conferir.',
          'Incluí regras anti-golpe e situações em que não uso IA, com justificativa.'
        ],
        minimo:400
      }}
  ]}
];

const MODDONE = {
  1: 'Você já sabe o que a IA é, como ela aprende com exemplos, por que dados ruins geram erros e por que confiança não é certeza. Isso já te coloca à frente de muita gente.',
  2: 'Você já conversa com a IA do jeito certo: pede bem, ajusta com precisão, resume sem perder o essencial e compara ferramentas com critério.',
  3: 'Parabéns, você concluiu o curso IA do Zero! Você sabe pedir, conferir e se proteger, e já pode emitir o certificado do curso. Próximo passo da trilha: o curso "Prompts que Funcionam".'
};

const PROMPTS = {
  1: [
    { title:'Explique como se eu tivesse 10 anos', desc:'Para entender qualquer assunto difícil.' }
  ],
  2: [
    { title:'Pedido em 4 partes', desc:'Para transformar um pedido vago em um pedido claro.' }
  ],
  3: [
    { title:'Checagem de resposta', desc:'Para reduzir o risco de erro.' }
  ]
};

const THEME = { 1:['#22C55E','#14B8A6'], 2:['#14B8A6','#06B6D4'], 3:['#10B981','#22C55E'] };
const LIC = { '1.1':'🤖','1.2':'📚','1.3':'⚖️','1.4':'📺','1.5':'📖','1.6':'🗺️','2.1':'💬','2.2':'✍️','2.3':'🖼️','2.4':'🗂️','2.5':'📱','2.6':'🧑‍🏫','2.7':'🛠️','3.1':'🔒','3.2':'🔍','3.3':'🗓️','3.4':'🎭','3.5':'🚫','3.6':'🛡️',
  '1.7':'🧩','1.8':'🍞','1.9':'🎯','2.8':'🧵','2.9':'📄','2.10':'📨','2.11':'🔬','3.7':'🪟','3.8':'🧾','3.9':'🕶️' };

const PLACAR = {};
function placar(root){
  const cx = [...root.querySelectorAll('.pl-a, .pl-b')], ra = root.querySelector('#pl-ra');
  if (!cx.length || !ra) return;
  if (!ra.dataset.pronto) { cx.forEach((c, i) => { c.checked = !!PLACAR[i]; }); ra.dataset.pronto = '1'; }
  else cx.forEach((c, i) => { PLACAR[i] = c.checked; });
  const conta = sel => root.querySelectorAll(sel + ':checked').length;
  const a = conta('.pl-a'), b = conta('.pl-b'), fa = conta('.pl-fa'), fb = conta('.pl-fb');
  ra.textContent = a + ' de 5';
  root.querySelector('#pl-rb').textContent = b + ' de 5';
  root.querySelector('#pl-rv').textContent = !a && !b ? '-' : !fa && !fb ? 'Nenhuma: confira' : fa && !fb ? 'IA A' : fb && !fa ? 'IA B' : a > b ? 'IA A' : b > a ? 'IA B' : 'Empate';
}

return {
  id: 'ia-do-zero',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  cores: THEME,
  iconesLicao: LIC,
  aoAbrirLicao: { '2.11': placar },
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
