/* Curso: Base Profissional (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🔒', title:'Dados e direitos', sub:'O que pode e o que não pode', lessons:[
    { id:'1.1', title:'Dados de clientes: cuidado desde o primeiro dia', min:10,
      body:[
        `<div class="card analogy"><h3>🔒 O caderno do cabeleireiro</h3><p>O cabeleireiro anota o telefone das clientes para marcar horário, mas não mostra o caderno para ninguém nem deixa aberto no balcão. Quando você trabalha para clientes, passa a cuidar de um caderno parecido: nomes, telefones, fotos, pedidos e, às vezes, informações bem pessoais. A diferença é que hoje esse caderno é digital, cabe no celular e pode ser copiado em segundos para qualquer lugar, inclusive para uma ferramenta de IA.</p></div>`,
        `<div class="term"><b>Dado pessoal</b> = informação que identifica uma pessoa, como nome, telefone, e-mail, CPF e foto. <b>LGPD</b> = Lei Geral de Proteção de Dados, a lei brasileira que protege os dados das pessoas. <b>Anonimizar</b> = trocar ou tirar o que identifica a pessoa, como usar "Cliente A" no lugar do nome. <b>Dado sensível</b> = dado sobre saúde, religião, origem racial, vida sexual, biometria ou opinião política, que exige proteção maior.</div>`,
        `<div class="card"><h3>Cinco regras de ouro</h3><ol class="golden"><li><span>Peça só o que for realmente necessário.</span></li><li><span>Não cole dados pessoais em ferramentas de IA sem necessidade: nos testes, use dados fictícios.</span></li><li><span>Guarde com segurança: senha forte e verificação em duas etapas.</span></li><li><span>Não compartilhe com terceiros sem permissão.</span></li><li><span>Apague os dados quando o trabalho acabar, se for o combinado.</span></li></ol>
          <p>Dados sensíveis, como saúde, crianças e finanças, exigem cuidado redobrado e orientação profissional. Quem trabalha com dados de outras pessoas responde por eles.</p></div>`,
        `<div class="card"><h3>Por que isso importa para quem está começando</h3><p>Muita gente acha que a LGPD é coisa de empresa grande. Não é: ela vale para qualquer pessoa ou negócio que trata dados de outras pessoas com finalidade profissional. Se você faz posts para uma clínica, organiza a agenda de um salão ou cria mensagens de cobrança para uma loja, você está lidando com dados de clientes do seu cliente. Um vazamento, mesmo pequeno, pode gerar reclamação, perda do cliente e até responsabilidade legal.</p>
          <p>Ferramentas de IA tornam isso mais delicado. Dependendo da ferramenta e do plano, o texto que você cola pode ser guardado e usado para melhorar o serviço. Por isso, a pergunta certa antes de colar qualquer coisa é: "a IA precisa mesmo saber quem é essa pessoa para fazer a tarefa?". Quase sempre a resposta é não.</p></div>`,
        `<div class="flows"><div class="flow old"><h4>❌ Jeito arriscado</h4><div class="node">Recebe planilha com nome, CPF e telefone</div><div class="node">Cola tudo na IA</div><div class="node">Deixa a planilha no grupo de WhatsApp</div></div><div class="flow new"><h4>✅ Jeito profissional</h4><div class="node">Pede só os campos necessários</div><div class="node">Troca nomes por "Cliente A" ou cria modelo com [NOME]</div><div class="node">Guarda em pasta protegida e apaga ao final</div></div></div>`,
        `<div class="card"><h3>Erros comuns</h3><p><b>Mandar prints com dados de terceiros</b> no portfólio (borre nomes, rostos e telefones). <b>Usar o mesmo e-mail e senha</b> para tudo. <b>Guardar planilhas de clientes no computador compartilhado</b> da família. <b>Pedir CPF sem precisar</b>, só porque "todo mundo pede". Cada um desses erros é fácil de evitar com um pouco de método.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o cabeleireiro não deixa o caderno de telefones aberto para qualquer um ver.</div>`
      ],
      ch:[
        { who:'Sabrina, 26 anos, social media freelancer', says:'O cliente me mandou uma planilha com nome, telefone e CPF de 300 clientes dele. Vou colar tudo na IA para criar as mensagens.',
          q:'Qual é a melhor atitude?',
          opts:[
            {t:'Colar tudo, porque é o jeito mais rápido de personalizar as mensagens.', ok:false, why:'Colar dados de 300 pessoas, incluindo CPF, expõe os dados dessas pessoas e coloca você em risco.'},
            {t:'Pedir só o necessário, usar dados fictícios ou anonimizados ("Cliente A") e criar modelos com campos como [NOME] para o cliente preencher.', ok:true, why:'Os modelos funcionam sem expor ninguém, e os dados reais ficam só com o cliente.'},
            {t:'Colar só metade da planilha, para reduzir o risco.', ok:false, why:'Metade dos dados ainda são dados de pessoas. O cuidado é não precisar deles.'}
          ]},
        { who:'Patrícia, 38 anos, nutricionista', says:'Quero que você monte resumos dos planos alimentares dos meus pacientes com IA. Vou te mandar as fichas completas, com nome, peso, exames e doenças.',
          q:'Como você deve conduzir esse trabalho?',
          opts:[
            {t:'Aceitar as fichas completas e colar na IA, porque a nutricionista autorizou.', ok:false, why:'A autorização da profissional não substitui o cuidado com dados de saúde dos pacientes, que são dados sensíveis.'},
            {t:'Recusar qualquer trabalho com nutricionistas, porque é proibido.', ok:false, why:'Não é proibido. É possível trabalhar com modelos e dados anonimizados, com cuidado e orientação.'},
            {t:'Propor criar modelos de resumo com campos genéricos e testar com casos fictícios, sem receber fichas identificadas, e sugerir que ela busque orientação sobre LGPD para dados de saúde.', ok:true, why:'Dados de saúde são sensíveis. Trabalhar com modelos e casos fictícios entrega o serviço sem expor pacientes.'}
          ]},
        { who:'Marcos, 45 anos, dono de oficina mecânica', says:'Terminou o trabalho das mensagens de revisão. Pode ficar com a lista de clientes aí, vai que eu preciso de novo.',
          q:'O que é mais profissional fazer com a lista?',
          opts:[
            {t:'Combinar por escrito se a lista será apagada ou devolvida e, se não houver motivo para guardar, apagar e avisar o cliente.', ok:true, why:'Guardar dados sem necessidade aumenta o risco. Apagar ao final, com combinado claro, é a prática mais segura.'},
            {t:'Guardar no celular para sempre, já que ele permitiu.', ok:false, why:'Dados guardados sem finalidade ficam expostos a perda, roubo ou vazamento, e a responsabilidade continua sendo sua.'},
            {t:'Usar a lista para oferecer seus serviços aos clientes da oficina.', ok:false, why:'Usar dados para outra finalidade, sem permissão das pessoas, é antiético e contraria a LGPD.'}
          ]}
      ]},
    { id:'1.2', title:'Direitos autorais e uso de conteúdo', min:10,
      body:[
        `<div class="card analogy"><h3>©️ A foto do fotógrafo</h3><p>A foto de um prato tem dono: o fotógrafo. Usar numa campanha sem pedir é como usar o trabalho dele sem pagar. Para usar legalmente, é preciso ter licença. O mesmo vale para músicas, textos, ilustrações, vídeos e fontes de letra: quase tudo o que você encontra na internet foi criado por alguém.</p></div>`,
        `<div class="term"><b>Direito autoral</b> = proteção que a lei dá ao criador de uma obra. <b>Licença</b> = permissão de uso, com regras (por exemplo, uso comercial permitido ou não). <b>Banco de imagens gratuito</b> = site com imagens que podem ser usadas conforme a licença de cada uma. <b>Uso comercial</b> = uso para divulgar ou vender algo, como num post de loja.</div>`,
        `<div class="card"><h3>Na dúvida, não use</h3><ol class="golden"><li><span>Imagem que aparece numa busca não é livre.</span></li><li><span>Use fotos próprias ou bancos com licença que permita uso comercial, e leia as condições (algumas pedem crédito).</span></li><li><span>Conteúdo gerado por IA: leia os termos da ferramenta sobre uso comercial.</span></li><li><span>Não imite marcas, personagens nem o estilo exato de artistas conhecidos.</span></li><li><span>Foto com pessoas: peça autorização de uso de imagem.</span></li><li><span>Cite as fontes dos dados e textos que usar.</span></li></ol>
          <p>As regras sobre IA e direitos autorais estão evoluindo, então, em usos comerciais importantes, consulte um profissional.</p></div>`,
        `<div class="card"><h3>Onde mora o risco no dia a dia</h3><p>Os problemas mais comuns de quem presta serviço para pequenos negócios são simples: usar a música da moda num vídeo de anúncio, pegar a foto de um bolo bonito de outra confeitaria, copiar a legenda de um concorrente ou criar com IA uma imagem com o personagem de um desenho famoso. Em todos esses casos, quem aparece publicamente é o seu cliente, e ele pode receber notificação, ter o post removido ou a conta penalizada. Depois, a pergunta vai chegar até você.</p>
          <p>Redes sociais costumam ter bibliotecas de músicas liberadas para uso em certos tipos de conta. Confira se a conta do cliente é comercial, porque as regras mudam. Para fotos, a melhor opção é sempre a foto real do produto do cliente, que além de segura vende mais, porque mostra o que ele realmente entrega.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Situação</th><th>Pode?</th><th>O que fazer</th></tr><tr><td>Foto achada no buscador</td><td>Não, sem licença</td><td>Use foto própria ou de banco com licença</td></tr><tr><td>Imagem de banco gratuito</td><td>Depende da licença</td><td>Leia se permite uso comercial e se exige crédito</td></tr><tr><td>Imagem criada com IA</td><td>Depende dos termos</td><td>Confira os termos da ferramenta e evite marcas e personagens</td></tr><tr><td>Foto de cliente do salão</td><td>Só com autorização</td><td>Peça autorização por escrito</td></tr></table></div>`,
        `<div class="card"><h3>Hábito profissional</h3><p>Crie uma pasta "licenças" por cliente e guarde ali o link ou print da licença de cada imagem usada. Leva um minuto e, se alguém questionar, você mostra de onde veio.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que não podemos usar a foto de outra pessoa como se fosse nossa.</div>`
      ],
      ch:[
        { who:'Diego, 24 anos, faz posts para restaurantes', says:'Baixei a foto de um prato num site de receitas e vou usar no post do restaurante do cliente.',
          q:'Qual é a melhor atitude?',
          opts:[
            {t:'Usar, porque é só uma foto de comida.', ok:false, why:'A foto tem dono e pode ter proteção. Usar sem permissão pode gerar cobrança ou processo.'},
            {t:'Usar e colocar o nome do site embaixo.', ok:false, why:'Dar crédito não substitui a permissão, a menos que a licença permita.'},
            {t:'Usar foto própria, de banco de imagens com licença que permita uso comercial, ou criada em ferramenta cujos termos permitam, conferindo as condições.', ok:true, why:'Imagens com licença clara permitem o uso sem risco para você e para o cliente.'}
          ]},
        { who:'Carla, 33 anos, dona de pet shop', says:'Quero um vídeo de banho e tosa com aquela música famosa que está tocando em todo lugar. E coloca o cachorro do desenho animado no cartaz da promoção!',
          q:'Como responder à cliente?',
          opts:[
            {t:'Fazer exatamente como ela pediu, porque a responsabilidade é dela.', ok:false, why:'Quem cria o material também participa do problema, e a conta da cliente pode ser penalizada.'},
            {t:'Explicar que música e personagem famosos têm dono e propor música liberada para uso comercial e uma ilustração original ou fotos dos pets atendidos, com autorização dos tutores.', ok:true, why:'Você protege a cliente, entrega algo original e ainda valoriza os clientes reais do pet shop.'},
            {t:'Usar a música só por alguns segundos, porque trechos curtos são sempre liberados.', ok:false, why:'Não existe regra de que trechos curtos sejam livres. O uso depende de licença.'}
          ]},
        { who:'Fernando, 29 anos, cria textos para lojas', says:'A loja de roupas concorrente tem legendas ótimas. Vou copiar e só trocar o nome da loja da minha cliente.',
          q:'Qual é o caminho mais profissional?',
          opts:[
            {t:'Copiar e trocar algumas palavras para não ficar igual.', ok:false, why:'Trocar palavras de um texto alheio continua sendo cópia e deixa a cliente sem identidade própria.'},
            {t:'Copiar, porque legenda de rede social não tem proteção.', ok:false, why:'Textos criativos podem ter proteção, e copiar o concorrente prejudica a imagem da cliente.'},
            {t:'Analisar o que funciona nas legendas (tom, estrutura, chamada) e escrever textos originais com a voz da loja da cliente.', ok:true, why:'Aprender com referências é legítimo; copiar não. Texto original reforça a marca da cliente.'}
          ]}
      ]},
    { id:'1.3', title:'Imagem, voz e deepfake: só com autorização', min:10,
      body:[
        `<div class="card analogy"><h3>🎭 O boneco de cera</h3><p>Imagine alguém fazer um boneco de cera idêntico a você e colocá-lo na porta de uma loja, segurando uma placa de promoção, sem perguntar nada. Você ficaria incomodado, com razão. Com IA, é possível fazer algo parecido em minutos: colocar o rosto ou a voz de uma pessoa num vídeo que ela nunca gravou. A tecnologia é nova, mas o princípio é antigo: a imagem e a voz de uma pessoa pertencem a ela.</p></div>`,
        `<div class="term"><b>Direito de imagem</b> = direito da pessoa de decidir se e como seu rosto e sua aparência são usados. <b>Deepfake</b> = vídeo, foto ou áudio criado ou alterado por IA para parecer que uma pessoa real fez ou disse algo. <b>Clonagem de voz</b> = uso de IA para imitar a voz de alguém. <b>Termo de autorização de uso de imagem</b> = documento em que a pessoa autoriza o uso, dizendo onde, por quanto tempo e para quê.</div>`,
        `<div class="card"><h3>As regras práticas</h3><ol class="golden"><li><span>Nunca crie imagem, vídeo ou áudio que imite uma pessoa real sem autorização clara dela, por escrito.</span></li><li><span>Pessoas famosas também têm direito de imagem: usar o rosto ou a voz de um artista num anúncio é proibido sem contrato.</span></li><li><span>Fotos de clientes, funcionários e crianças só com autorização (de crianças, dos responsáveis).</span></li><li><span>A autorização deve dizer onde será usado (Instagram, site, panfleto), por quanto tempo e se envolve IA.</span></li><li><span>A pessoa pode pedir para retirar: tenha como apagar o material.</span></li></ol></div>`,
        `<div class="card"><h3>Por que isso é sério</h3><p>Deepfakes são usados em golpes (o "parente" que liga pedindo Pix com voz clonada), em notícias falsas e em humilhações públicas. Mesmo quando a intenção é só fazer uma propaganda divertida, usar a imagem de alguém sem permissão pode gerar pedido de indenização e denúncia nas redes. Além disso, as plataformas costumam remover conteúdo que imita pessoas reais de forma enganosa, e a conta do seu cliente pode ser punida.</p>
          <p>Existe uso legítimo: um dono de salão pode autorizar, por escrito, que você crie um avatar dele para vídeos explicativos, ou uma nutricionista pode autorizar a narração com voz sintética parecida com a dela. O ponto é que a pessoa sabe, concorda e pode desistir. E o público não deve ser enganado: se o vídeo é gerado por IA, isso deve ficar claro.</p></div>`,
        `<div class="code">AUTORIZAÇÃO DE USO DE IMAGEM (modelo simples, adapte e, se necessário, consulte um profissional)
Eu, [NOME], autorizo [NOME DO NEGÓCIO] a usar minha imagem em [FOTO/VÍDEO],
nos canais [INSTAGRAM, SITE...], pelo prazo de [X MESES].
( ) Autorizo ( ) Não autorizo edição ou criação com inteligência artificial.
Posso pedir a retirada a qualquer momento pelo contato [TELEFONE].
Data e assinatura.</div>`,
        `<div class="card"><h3>Erros comuns</h3><p><b>"Ela postou no perfil público, então posso usar"</b>: foto pública não é foto liberada. <b>"É só uma brincadeira com o rosto do presidente"</b>: em anúncio comercial, nunca. <b>"A criança é filha da dona"</b>: peça a autorização mesmo assim, por escrito, para registrar o combinado.</p></div>`,
        `<div class="card"><h3>Passo a passo antes de usar a imagem de alguém</h3><ol class="golden"><li><span>Pergunte: essa pessoa sabe e concorda com este uso específico?</span></li><li><span>Peça a autorização por escrito (pode ser mensagem clara, guardada na pasta do cliente).</span></li><li><span>Se envolver IA (avatar, voz, edição do rosto), diga isso na autorização.</span></li><li><span>Avise o público quando o conteúdo for sintético.</span></li><li><span>Anote o prazo e retire o material se a pessoa pedir.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que não é certo fazer um vídeo em que um colega diz algo que ele nunca disse.</div>`
      ],
      ch:[
        { who:'Juliana, 30 anos, cria anúncios com IA', says:'A dona da padaria quer um vídeo com a voz daquele apresentador famoso de TV recomendando o pão de queijo. Dá para fazer com clonagem de voz em 10 minutos.',
          q:'Qual é a melhor atitude?',
          opts:[
            {t:'Fazer o vídeo, porque é só uma brincadeira e ajuda a padaria.', ok:false, why:'Usar a voz de alguém famoso num anúncio, sem autorização, viola o direito dele e engana o público.'},
            {t:'Recusar esse formato, explicar o risco e propor um vídeo com a própria dona ou clientes reais que autorizem, ou uma narração original.', ok:true, why:'Você evita um problema sério para a cliente e ainda entrega algo autêntico, que costuma gerar mais confiança.'},
            {t:'Fazer, mas colocar uma voz um pouco diferente para não ficar idêntica.', ok:false, why:'Se o objetivo é parecer o apresentador, continua sendo imitação para enganar, mesmo com pequenas mudanças.'}
          ]},
        { who:'Renata, 41 anos, dona de salão de beleza', says:'Tenho várias fotos de antes e depois das clientes no meu celular. Faz um carrossel com elas e melhora a pele com IA para ficar mais bonito.',
          q:'O que você deve fazer antes de produzir o carrossel?',
          opts:[
            {t:'Usar as fotos, porque as clientes estavam no salão e sabiam que estavam sendo fotografadas.', ok:false, why:'Saber que foi fotografada não é autorizar a publicação, muito menos edição com IA.'},
            {t:'Usar só as fotos sem rosto aparecendo, e editar à vontade.', ok:false, why:'Ajuda na privacidade, mas editar o resultado com IA engana quem vê o antes e depois.'},
            {t:'Pedir autorização por escrito a cada cliente e não alterar o resultado do serviço com IA, para o antes e depois ser verdadeiro.', ok:true, why:'Autorização protege as clientes e o salão, e não maquiar o resultado mantém a propaganda honesta.'}
          ]},
        { who:'Tiago, 35 anos, dono de academia de bairro', says:'Recebi um áudio do meu sócio pedindo para eu transferir 3 mil reais agora para um fornecedor novo. A voz é igualzinha à dele.',
          q:'Que orientação você dá ao Tiago?',
          opts:[
            {t:'Confirmar o pedido por outro canal, ligando para o sócio no número conhecido ou falando pessoalmente, antes de transferir.', ok:true, why:'Vozes podem ser clonadas por IA. Confirmar por outro canal é a defesa mais simples contra esse golpe.'},
            {t:'Transferir, porque a voz é igual e o sócio é de confiança.', ok:false, why:'Voz igual não prova mais nada: é exatamente assim que funcionam os golpes com voz clonada.'},
            {t:'Responder o áudio pedindo os dados bancários do fornecedor.', ok:false, why:'Se for golpe, você continua conversando com o golpista. A confirmação deve ser por outro canal.'}
          ]}
      ]},
    { id:'1.4', title:'Transparência: contar ao cliente que você usa IA', min:10,
      body:[
        `<div class="card analogy"><h3>🍰 A confeiteira e a batedeira</h3><p>Ninguém acha estranho que a confeiteira use batedeira em vez de bater a massa à mão. O cliente paga pelo bolo gostoso, pela receita, pelo capricho e pela entrega no horário. Mas se ela vendesse o bolo como "artesanal, feito à mão do começo ao fim" e usasse massa pronta de mercado, o cliente se sentiria enganado. Com IA é igual: usar a ferramenta é normal; esconder ou mentir sobre isso é que quebra a confiança.</p></div>`,
        `<div class="term"><b>Transparência</b> = deixar claro como o trabalho é feito, sem esconder o que importa para o cliente. <b>Revisão humana</b> = você lendo, conferindo e ajustando tudo o que a IA produziu. <b>Conteúdo sintético</b> = imagem, voz ou vídeo gerado por IA, que pode precisar de aviso para o público.</div>`,
        `<div class="card"><h3>O que contar e como</h3><p>Você não precisa explicar cada ferramenta que usa, mas o cliente tem o direito de saber o essencial: que você usa IA como apoio, que revisa tudo e o que não coloca na IA (como dados pessoais). Uma frase simples na proposta já resolve:</p>
          <div class="code">"Uso ferramentas de inteligência artificial como apoio na criação dos textos e imagens. Todo o material é revisado por mim antes da entrega, e não insiro dados pessoais dos seus clientes nessas ferramentas."</div>
          <p>Essa frase faz três coisas: mostra que você é moderno, mostra que o responsável pela qualidade é você e mostra que você cuida dos dados.</p></div>`,
        `<div class="card"><h3>Quando a transparência é obrigatória na prática</h3><ol class="golden"><li><span>Quando o cliente pergunta diretamente: nunca negue.</span></li><li><span>Quando o cliente pediu algo "100% autoral" ou feito à mão: combine antes se pode usar IA.</span></li><li><span>Quando a imagem gerada pode ser confundida com foto real do produto: avise o cliente e, se for o caso, o público.</span></li><li><span>Quando há voz ou rosto sintético de pessoa: o público deve saber que é IA.</span></li><li><span>Quando o contrato ou a plataforma exigem identificar conteúdo gerado por IA: siga a regra.</span></li></ol></div>`,
        `<div class="why-chain"><b>Por que vale a pena ser transparente?</b> Porque o cliente vai descobrir cedo ou tarde (textos de IA têm "cara" quando não são revisados). Por que isso importa? Porque descobrir sozinho dá a sensação de ter sido enganado. E daí? Cliente que se sente enganado não volta e não indica. Conclusão: contar antes transforma a IA num diferencial, e não num segredo constrangedor.</div>`,
        `<div class="card"><h3>E o preço?</h3><p>Alguns clientes perguntam: "se a IA faz, por que vou pagar?". Responda com calma: ele paga pelo resultado pronto, pela sua escolha do que funciona, pela revisão, pela adaptação ao negócio dele e pela responsabilidade da entrega. A IA acelera partes do trabalho; o seu julgamento é o que garante que o post não tenha erro, que o tom combine com a marca e que nada ofenda ninguém.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a confeiteira pode usar batedeira, mas não pode mentir dizendo que fez tudo à mão.</div>`
      ],
      ch:[
        { who:'Bruno, 27 anos, faz cardápios e posts para lanchonetes', says:'Uso IA para criar os primeiros rascunhos, mas tenho medo de contar ao cliente e ele achar que não precisa mais de mim.',
          q:'Qual é a postura mais profissional?',
          opts:[
            {t:'Esconder o uso de IA e negar se o cliente perguntar.', ok:false, why:'Mentir destrói a confiança quando o cliente descobre, e ele costuma descobrir.'},
            {t:'Contar que usa IA como apoio, que revisa tudo e adapta ao negócio, e que não insere dados pessoais nas ferramentas.', ok:true, why:'Transparência com foco no seu papel de revisão e responsabilidade mostra o valor do seu trabalho.'},
            {t:'Contar e baixar o preço pela metade, já que a IA faz o trabalho.', ok:false, why:'A IA não faz o trabalho sozinha. O cliente paga pelo resultado revisado e adaptado, não pelo tempo de digitação.'}
          ]},
        { who:'Dona Lúcia, 58 anos, dona de loja de artesanato', says:'Meu diferencial é que tudo aqui é feito à mão. Quero textos e fotos que mostrem isso.',
          q:'Ela pede fotos para o site. Qual é o melhor caminho?',
          opts:[
            {t:'Gerar com IA fotos de peças artesanais lindas, parecidas com as dela, porque ficam mais bonitas.', ok:false, why:'Mostrar peças que não existem engana o cliente final e contradiz justamente o diferencial da loja.'},
            {t:'Gerar as imagens com IA e não comentar nada com ela.', ok:false, why:'Além de enganar o público, você esconde da cliente algo que vai contra o que ela pediu.'},
            {t:'Usar fotos reais das peças dela (pode usar IA para ajudar nos textos, avisando) e combinar que imagens de produto não serão geradas por IA.', ok:true, why:'Respeita o diferencial da loja, mantém a propaganda verdadeira e deixa claro onde a IA entra.'}
          ]},
        { who:'Gustavo, 32 anos, dono de oficina', says:'Você usa aquele tal de ChatGPT nos meus textos? Se usa, então qualquer um faz, né? Por que vou te pagar?',
          q:'Como responder ao Gustavo?',
          opts:[
            {t:'Dizer que não usa nenhuma IA, para evitar a discussão.', ok:false, why:'Negar algo verdadeiro cria um problema bem maior quando ele descobrir.'},
            {t:'Confirmar que usa como apoio e explicar o que ele paga: entender a oficina, escolher o que funciona, revisar informações, adaptar o tom e entregar no prazo.', ok:true, why:'Você é honesto e mostra que o valor está no seu julgamento e na responsabilidade pelo resultado.'},
            {t:'Dizer que, se ele acha fácil, deve fazer sozinho, e encerrar o atendimento.', ok:false, why:'A pergunta é legítima. Responder com explicação educada mantém o cliente e reforça sua imagem.'}
          ]}
      ]},
    { id:'1.5', title:'Termos de uso: o que acontece com o que você cola na IA', min:10,
      body:[
        `<div class="card analogy"><h3>📜 O contrato do aluguel</h3><p>Antes de alugar uma sala para o seu negócio, você lê o contrato: quem paga o conserto, se pode sublocar, o que acontece se sair antes. Ferramentas de IA também têm contrato: os termos de uso e a política de privacidade. Quase ninguém lê, mas é ali que está escrito o que a empresa pode fazer com o texto, as fotos e os arquivos que você envia, e se você pode usar o resultado num trabalho pago.</p></div>`,
        `<div class="term"><b>Termos de uso</b> = regras do contrato entre você e a ferramenta. <b>Política de privacidade</b> = documento que explica quais dados a empresa coleta, para que usa e por quanto tempo guarda. <b>Treinamento</b> = uso das conversas para melhorar os modelos da ferramenta. <b>Uso comercial</b> = usar o resultado num trabalho pago ou para vender algo. <b>Conta corporativa</b> = conta contratada por uma empresa, com regras e controles próprios.</div>`,
        `<div class="card"><h3>O que procurar nos termos</h3><ol class="golden"><li><span>Se as conversas podem ser usadas para treinamento e se existe opção para desligar isso nas configurações.</span></li><li><span>Por quanto tempo o histórico fica guardado e se você consegue apagar.</span></li><li><span>Se o seu plano permite uso comercial do que é gerado.</span></li><li><span>Se há limites para certos conteúdos, como pessoas reais, marcas e temas sensíveis.</span></li><li><span>Se a conta é pessoal ou da empresa, e quem tem acesso a ela.</span></li></ol>
          <p>Os termos mudam com frequência e variam entre plano gratuito, pago e empresarial. Não decore a regra de uma ferramenta: crie o hábito de conferir na página oficial, na data em que for usar, e anote o que leu.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Situação</th><th>Risco</th><th>Atitude profissional</th></tr><tr><td>Colar o contrato do cliente numa conta gratuita</td><td>O texto pode ficar guardado e ser usado conforme os termos</td><td>Tirar nomes e valores, ou usar a ferramenta que o cliente aprovar</td></tr><tr><td>Usar a conta pessoal no trabalho de uma empresa com regras próprias</td><td>Quebrar a política interna do cliente</td><td>Perguntar antes qual ferramenta é permitida</td></tr><tr><td>Vender imagens geradas sem ler os termos</td><td>O plano pode ter restrições de uso comercial</td><td>Conferir a licença e guardar print da página com a data</td></tr><tr><td>Dividir o login com um colega</td><td>Histórico de clientes exposto e quebra dos termos</td><td>Cada pessoa com a sua conta</td></tr></table></div>`,
        `<div class="card"><h3>Conta pessoal ou conta da empresa?</h3><p>Se você presta serviço para uma loja que já tem conta corporativa de IA, o cliente pode exigir que o trabalho seja feito nela, porque ali existem controles de acesso e regras de guarda combinadas. Se você usa a sua conta pessoal, a responsabilidade pelo que cola é sua. A Ana, que faz atendimento para uma imobiliária em Curitiba, pergunta logo no início: "vocês têm alguma ferramenta de IA aprovada ou alguma regra sobre o que posso colar nela?". Uma pergunta simples evita um problema sério.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><p><b>"Paguei, então meus dados estão protegidos"</b>: nem sempre. Pagar pode mudar algumas regras, mas é preciso conferir. <b>"Todo mundo usa, então pode"</b>: o que vale é o termo e o combinado com o cliente. <b>"Apaguei a conversa, então sumiu"</b>: a política pode prever guarda por um período. Ética: você responde pelo que coloca na ferramenta, mesmo quando o cliente não pergunta. Em dúvidas jurídicas, procure orientação profissional.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a um amigo por que ler os termos de uma ferramenta de IA é parecido com ler o contrato antes de alugar uma sala.</div>`
      ],
      ch:[
        { who:'Juliana, 29 anos, assistente virtual de uma clínica odontológica', says:'A clínica pediu um resumo das reclamações dos pacientes. Vou colar as mensagens completas na minha conta gratuita de IA.',
          q:'O que ela deve fazer antes de colar?',
          opts:[
            {t:'Colar tudo, porque conta gratuita e conta paga funcionam do mesmo jeito.', ok:false, why:'Planos diferentes podem ter regras diferentes de guarda e treinamento. E, de qualquer forma, as mensagens têm dados de pacientes.'},
            {t:'Conferir nos termos como as conversas são guardadas e usadas, retirar nomes e dados que identificam os pacientes e perguntar à clínica se há ferramenta aprovada.', ok:true, why:'Ela entende o risco da ferramenta, protege os pacientes e respeita as regras do cliente.'},
            {t:'Colar sem contar à clínica, porque é só um resumo interno.', ok:false, why:'Ser interno não muda o que a ferramenta pode fazer com os dados. Esconder do cliente também quebra a confiança.'}
          ]},
        { who:'Diego, 34 anos, designer em Recife', says:'Gerei ilustrações numa ferramenta de IA e quero vender um pacote delas para uma cafeteria usar no cardápio.',
          q:'Qual é a atitude mais segura?',
          opts:[
            {t:'Conferir nos termos do plano se o uso comercial é permitido e guardar um print da página com a data.', ok:true, why:'Os termos dizem o que pode ser feito com o resultado. O print registra a regra que valia quando ele usou.'},
            {t:'Vender sem conferir, porque tudo o que a IA gera é livre.', ok:false, why:'Não existe essa regra geral. Cada ferramenta e cada plano têm condições próprias.'},
            {t:'Trocar as cores das ilustrações, porque assim viram obra própria e os termos deixam de valer.', ok:false, why:'Mudar detalhes não anula os termos que ele aceitou ao usar a ferramenta.'}
          ]},
        { who:'Renata, 41 anos, social media de uma rede de farmácias de bairro', says:'A empresa tem conta corporativa de IA com regras próprias, mas acho a minha conta pessoal mais prática. Vou usar a minha.',
          q:'O que é mais profissional?',
          opts:[
            {t:'Usar a conta pessoal sem avisar, já que o resultado final é o mesmo.', ok:false, why:'O resultado pode ser parecido, mas os dados da empresa saem do ambiente controlado e a política interna é quebrada.'},
            {t:'Passar o login da conta corporativa para uma amiga que ajuda nos posts.', ok:false, why:'Dividir acesso quebra os termos e as regras da empresa, e expõe o histórico de trabalho.'},
            {t:'Usar a conta da empresa conforme as regras dela ou pedir autorização por escrito antes de usar outra ferramenta.', ok:true, why:'Ela respeita o combinado com o cliente e deixa registrado qualquer exceção.'}
          ]}
      ]},
    { id:'1.6', title:'Projeto: a política de dados do seu serviço', min:30,
      body:[
        `<div class="card"><p>Agora você vai transformar o que aprendeu no módulo em um documento curto, para usar de verdade com seus clientes. Pense no serviço que pretende oferecer (posts, atendimento, textos, imagens, planilhas). Uma política simples de dados mostra profissionalismo e evita conflitos. Você pode usar IA para revisar a clareza, mas escreva o pedido com suas palavras e confira tudo o que ela sugerir.</p></div>`,
        `<div class="card"><h3>Como fica uma boa entrega</h3><p>Uma boa política cabe em uma página e responde, em frases curtas, às perguntas que o cliente faria: "o que você vai pedir de mim?", "onde isso fica guardado?", "quando você apaga?", "você usa IA? qual conta? o que você nunca cola nela?". Por exemplo, para quem faz posts de uma confeitaria: "Peço só fotos dos produtos, logotipo e cardápio. Não preciso de dados dos seus clientes." Evite juridiquês e promessas absolutas como "seus dados estão 100% seguros".</p></div>`
      ],
      projeto: {
        entrega: 'Uma política simples de dados e de uso de imagem, IA e conteúdo para o seu próprio serviço, em linguagem que o cliente entenda.',
        passos: [
          'Escreva qual é o seu serviço e quais dados do cliente você realmente precisa receber (e quais não precisa).',
          'Descreva onde vai guardar esses dados, quem tem acesso e quando vai apagar ao final do trabalho.',
          'Explique como usa IA (como apoio, com revisão), em que conta, depois de conferir os termos, e o que nunca coloca nas ferramentas.',
          'Inclua as regras sobre imagens: licenças, fotos de pessoas só com autorização e nada de imitar pessoas reais.',
          'Releia como se fosse o cliente, corte termos difíceis e peça a alguém de confiança para ler.'
        ],
        checklist: [
          'Lista os dados que peço e justifica cada um.',
          'Diz onde guardo, quem acessa e quando apago.',
          'Explica com transparência como uso IA, em que conta, e que reviso tudo.',
          'Tem regras sobre imagem, voz e licenças de conteúdo.',
          'Está em linguagem simples, sem promessas que eu não possa cumprir.'
        ],
        minimo: 300
      } }
  ]},
  { id:2, icon:'🤝', title:'Combinados e limites', sub:'Trabalhar sem dor de cabeça', lessons:[
    { id:'2.1', title:'Combinado por escrito: escopo, prazo e preço', min:10,
      body:[
        `<div class="card analogy"><h3>📝 O cardápio do restaurante</h3><p>No restaurante, você sabe o que vem no prato e quanto custa antes de pedir. Sem cardápio, cada um imagina uma coisa, e a conta vira discussão. O combinado por escrito é o cardápio do seu serviço: o cliente sabe o que vai receber, quando e por quanto, e você sabe exatamente o que precisa entregar.</p></div>`,
        `<div class="term"><b>Escopo</b> = o que está incluído no serviço. <b>Prazo</b> = quando será entregue. <b>Revisão</b> = ajuste incluído no preço, com limite combinado. <b>Extra</b> = qualquer pedido fora do escopo, que vira novo acordo com novo preço.</div>`,
        `<div class="card"><h3>O combinado mínimo</h3><p>Escreva e peça um "ok" do cliente:</p>
          <ol class="golden"><li><span>O que será feito.</span></li><li><span>O que NÃO está incluído.</span></li><li><span>Prazo.</span></li><li><span>Preço e forma de pagamento.</span></li><li><span>Quantas revisões estão incluídas.</span></li><li><span>O que o cliente precisa enviar (textos, fotos, acessos).</span></li></ol>
          <p>Pode ser um documento simples ou uma mensagem organizada, e guarde as conversas. Para valores altos ou casos sensíveis, procure orientação profissional.</p></div>`,
        `<div class="card"><h3>Por que o "fechei por telefone" dá errado</h3><p>Na conversa, as duas pessoas concordam, mas cada uma guarda uma versão diferente na memória. "Posts do mês" pode significar 8 posts para você e 30 posts com vídeos para o cliente. Ninguém está mentindo: só faltou escrever. O combinado escrito não é desconfiança, é organização. Inclusive, clientes sérios gostam, porque também ficam protegidos.</p>
          <p>O prazo também precisa de cuidado. Diga quando começa a contar: "entrego em 5 dias úteis depois de receber as fotos e o pagamento do sinal". Sem isso, o cliente manda o material com uma semana de atraso e ainda cobra a data original.</p></div>`,
        `<div class="code">Exemplo de combinado por mensagem (salão de beleza):
Serviço: 12 posts para o Instagram (artes + legendas) para o mês de março.
Não inclui: vídeos, anúncios pagos, resposta a comentários.
Prazo: entrego o calendário em 3 dias úteis após receber fotos e informações.
Revisões: até 2 rodadas de ajustes por post.
Valor: R$ [VALOR], 50% no início e 50% na entrega, via Pix.
Você me envia: fotos dos serviços, horários, promoções do mês.
Pode confirmar com um "ok"?</div>`,
        `<div class="card"><h3>Erros comuns</h3><p><b>Esquecer o "não inclui"</b>: é a parte que mais evita brigas. <b>Não definir revisões</b>: vira ajuste infinito. <b>Começar sem sinal</b> em trabalhos maiores. <b>Não guardar o "ok"</b>: tire print ou salve a conversa numa pasta do cliente.</p></div>`,
        `<div class="card"><h3>Sinal e forma de pagamento</h3><p>Em trabalhos pequenos e com clientes conhecidos, muita gente cobra tudo na entrega. Em trabalhos maiores ou com clientes novos, é comum pedir um sinal (por exemplo, metade no início) e o restante na entrega. Escreva no combinado: quanto, quando e por qual meio (Pix, transferência). Se o pagamento for mensal, diga a data de vencimento e o que acontece em caso de atraso, como pausar as entregas até a regularização.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o cardápio mostra o preço antes de você pedir.</div>`
      ],
      ch:[
        { who:'Rafaela, 29 anos, freelancer', says:'Fechei por telefone: \'faço seus posts do mês\'. Agora a cliente quer 40 posts, vídeos e anúncios e diz que estava combinado.',
          q:'O que fazer?',
          opts:[
            {t:'Combinar por escrito, de agora em diante, a quantidade, o que não está incluído e as revisões, e tratar o que passou do combinado como serviço extra.', ok:true, why:'O combinado escrito evita novas confusões, e o extra vira um novo acordo, com novo preço.'},
            {t:'Fazer tudo de graça para não perder a cliente.', ok:false, why:'Fazer de graça cria o hábito de pedir mais e prejudica seu tempo e seu bolso.'},
            {t:'Cancelar tudo e bloquear a cliente.', ok:false, why:'Um acordo bem escrito resolve sem romper a relação.'}
          ]},
        { who:'Seu Antônio, 62 anos, dono de padaria', says:'Combinamos que você entregava os cartazes na sexta. Já é sexta e nada! Mandei as fotos dos pães só ontem, mas isso não importa.',
          q:'O que teria evitado esse conflito?',
          opts:[
            {t:'Ter prometido entregar em qualquer prazo que o cliente quisesse.', ok:false, why:'Aceitar qualquer prazo sem condição só adia o conflito.'},
            {t:'Ter escrito no combinado que o prazo começa a contar depois de receber as fotos e informações.', ok:true, why:'Deixar claro quando o prazo começa protege os dois lados e evita cobranças injustas.'},
            {t:'Ter cobrado mais caro para compensar o atraso do cliente.', ok:false, why:'Preço não resolve falta de clareza. O problema é a condição de início do prazo.'}
          ]},
        { who:'Amanda, 34 anos, dona de loja de roupas', says:'Quero o catálogo da coleção nova. Me manda um orçamento aí.',
          q:'Qual orçamento evita mais problemas?',
          opts:[
            {t:'Responder só com o valor total, para ser rápido.', ok:false, why:'Sem escopo, cada lado imagina uma coisa e o valor vira motivo de discussão depois.'},
            {t:'Mandar o valor e dizer que os detalhes vocês acertam no caminho.', ok:false, why:'Acertar no caminho é exatamente o que gera ajustes infinitos e extras sem pagamento.'},
            {t:'Mandar quantas peças e páginas, o que não está incluído, prazo a partir do envio das fotos, número de revisões, valor e forma de pagamento, pedindo um ok.', ok:true, why:'Um orçamento com escopo completo vira o combinado escrito e evita surpresas.'}
          ]}
      ]},
    { id:'2.2', title:'Prometa só o que você controla', min:10,
      body:[
        `<div class="card analogy"><h3>🎯 O médico honesto</h3><p>O bom médico explica o tratamento e o que depende do paciente, mas não promete cura. Você também controla o seu trabalho, e não o resultado do cliente. Isso não é falta de confiança: é honestidade sobre como o mundo funciona.</p></div>`,
        `<div class="term"><b>Promessa de resultado</b> = garantir algo que depende de muitos fatores, como vendas. <b>Prazo realista</b> = prazo que você consegue cumprir, com folga. <b>Propaganda enganosa</b> = anunciar algo que não é verdade ou que não se pode garantir.</div>`,
        `<div class="card"><h3>Você controla entregas, não resultados</h3><p>Você controla o que entrega, o prazo e a qualidade. Não controla vendas, seguidores nem faturamento do cliente. Prometa o que controla: "entrego 12 posts em 7 dias". Evite: "vou triplicar suas vendas" ou "garanto lucro de X". Dê prazo com folga. Se não souber fazer algo, aprenda antes ou diga que não faz. Anunciar ganhos garantidos pode configurar propaganda enganosa e destrói a confiança.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Você controla</th><th>Você não controla</th></tr><tr><td>Quantidade e qualidade do que entrega</td><td>Quantas pessoas vão comprar</td></tr><tr><td>Prazo de entrega</td><td>O algoritmo das redes sociais</td></tr><tr><td>Revisão de fatos, nomes e números</td><td>O preço e o atendimento do cliente</td></tr><tr><td>Responder mensagens no horário combinado</td><td>A concorrência e a época do ano</td></tr></table></div>`,
        `<div class="card"><h3>Como falar de resultados sem prometer</h3><p>O cliente quer saber se vai valer a pena, e é justo. Você pode falar de forma honesta: mostrar trabalhos anteriores, explicar o que costuma ajudar (constância, fotos reais, oferta clara) e combinar como vão acompanhar (por exemplo, olhar juntos o alcance dos posts depois de um mês). Frases úteis:</p>
          <div class="code">"Eu garanto a entrega de 12 posts revisados por mês, no prazo.
Resultados de vendas dependem também do produto, do preço e do atendimento.
Depois de 30 dias, olhamos juntos os números e ajustamos o que for preciso."</div></div>`,
        `<div class="card"><h3>Prazo com folga</h3><p>Uma regra prática para quem está começando: estime quanto tempo acha que leva e acrescente uma margem (muita gente usa algo entre 30% e 50% a mais). Imprevistos acontecem: internet cai, o cliente demora a responder, a IA gera algo ruim e você precisa refazer. Entregar antes do prazo encanta; atrasar, mesmo um dia, marca.</p></div>`,
        `<div class="card"><h3>Quando você não sabe fazer</h3><p>Às vezes o cliente pede algo que você nunca fez: um vídeo animado, uma loja virtual, um anúncio pago. Prometer "faço sim" e aprender escondido, com o prazo correndo, é receita para atraso e trabalho ruim. Existem três respostas honestas: "isso eu não faço, mas posso indicar alguém"; "nunca fiz, posso testar sem custo extra num prazo maior, se você topar"; ou "faço a parte X, que domino, e a parte Y fica com outro profissional". O cliente confia mais em quem conhece os próprios limites.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um médico honesto não promete que você vai ficar curado.</div>`
      ],
      ch:[
        { who:'Vinícius, 27 anos, quer vender serviços com IA', says:'Vou anunciar \'garanto 10 mil de lucro por mês com meu serviço de IA\', porque assim vendo mais.',
          q:'Qual é a melhor divulgação?',
          opts:[
            {t:'Anunciar a garantia, porque promessas grandes vendem.', ok:false, why:'Ele não controla o lucro do cliente. Promessa que não se cumpre gera reclamação e pode ser propaganda enganosa.'},
            {t:'Falar do que ele entrega ("12 posts por semana, prontos em 48 horas") e mostrar trabalhos reais, sem garantir lucro.', ok:true, why:'Promessas que dependem só dele são honestas e criam confiança.'},
            {t:'Prometer um lucro menor, para parecer mais realista.', ok:false, why:'O problema não é o tamanho do número, e sim garantir algo que não depende dele.'}
          ]},
        { who:'Cláudia, 47 anos, dona de clínica de estética', says:'Se eu contratar seus posts, minha agenda vai lotar em um mês? Preciso dessa garantia.',
          q:'Qual resposta é honesta e ainda ajuda a fechar o serviço?',
          opts:[
            {t:'Garantir que sim, porque ela precisa ouvir isso para contratar.', ok:false, why:'Agenda lotada depende de muitos fatores fora do seu controle. Prometer agora gera frustração depois.'},
            {t:'Dizer que não garante a agenda, mas garante a entrega combinada, mostrar exemplos e propor avaliarem juntos os resultados depois de 30 dias.', ok:true, why:'Você é honesto sobre o que controla e oferece acompanhamento, o que gera confiança.'},
            {t:'Dizer que marketing não funciona para clínicas, para baixar a expectativa.', ok:false, why:'Desvalorizar o próprio serviço não é honestidade, é desistir de explicar o que você realmente entrega.'}
          ]},
        { who:'Leandro, 25 anos, edita vídeos com IA', says:'Um restaurante pediu 20 vídeos para amanhã. Nunca fiz tantos de uma vez, mas vou aceitar o prazo para não perder.',
          q:'O que é mais profissional?',
          opts:[
            {t:'Aceitar e tentar virar a noite, mesmo com risco de atrasar ou entregar com erros.', ok:false, why:'Aceitar prazo impossível costuma terminar em atraso ou qualidade ruim, o que marca mais que um não.'},
            {t:'Recusar o trabalho inteiro sem conversar.', ok:false, why:'Dá para negociar. Recusar sem propor alternativa perde uma oportunidade.'},
            {t:'Propor um prazo realista, com folga, ou entregar parte amanhã e o restante em datas combinadas por escrito.', ok:true, why:'Prazo que você consegue cumprir protege sua reputação e mostra organização ao cliente.'}
          ]}
      ]},
    { id:'2.3', title:'Quanto cobrar: preço com cautela e sem ilusão', min:10,
      body:[
        `<div class="card analogy"><h3>🧮 A conta da costureira</h3><p>Uma costureira de bairro que cobra pouco demais pela barra da calça trabalha o dia inteiro e, no fim do mês, percebe que mal pagou a luz da máquina. Outra, que cobra caro demais para a região, fica com a agenda vazia. O preço certo não nasce de chute nem de vídeo dizendo "cobre X": nasce de fazer as contas e olhar o mercado ao seu redor.</p></div>`,
        `<div class="term"><b>Custo da hora</b> = quanto você precisa ganhar por hora trabalhada para cobrir despesas e viver. <b>Pesquisa de mercado</b> = ver quanto outras pessoas cobram por serviço parecido na sua região e no seu nível. <b>Pacote</b> = conjunto de entregas com preço fechado (ex.: 12 posts por mês). <b>Sinal</b> = parte do pagamento feita antes de começar.</div>`,
        `<div class="card"><h3>Passo a passo para chegar a uma faixa de preço</h3><ol class="golden"><li><span>Some seus custos mensais do trabalho: internet, assinaturas de ferramentas, celular, parte da luz, transporte.</span></li><li><span>Defina quanto precisa ganhar por mês com esse trabalho, de forma realista.</span></li><li><span>Estime quantas horas por mês realmente vai trabalhar para clientes (não conte o tempo de prospecção e organização como hora vendida).</span></li><li><span>Divida (custos + ganho desejado) pelas horas: esse é o seu custo da hora.</span></li><li><span>Calcule quantas horas leva cada entrega, incluindo revisões e conversas.</span></li><li><span>Compare com o que o mercado da sua região cobra e ajuste.</span></li></ol></div>`,
        `<div class="calc"><b>Exemplo fictício:</b> custos de R$ 200 + ganho desejado de R$ 1.800 = R$ 2.000 por mês. Com 80 horas de trabalho para clientes, o custo da hora fica em R$ 25. Um pacote de 12 posts que leva 10 horas (criação, revisão, ajustes e conversas) sairia por volta de R$ 250. <div class="res">Isso é só um exemplo de cálculo, não um preço recomendado: os seus números serão diferentes.</div></div>`,
        `<div class="card"><h3>Faixas como referência, nunca como promessa</h3><p>Valores de serviços como posts, atendimento ou textos variam muito por cidade, experiência, tipo de cliente e qualidade do portfólio. Quem está começando costuma cobrar menos e subir aos poucos, conforme junta resultados e depoimentos. Para ter uma referência, pesquise: pergunte a profissionais da área, veja grupos de freelancers, plataformas de serviços e sites de associações. Use essas faixas como ponto de partida e não como garantia de que alguém vai pagar aquilo.</p>
          <p>E o mais importante: este curso não promete renda. Cobrar bem depende de entregar bem, encontrar clientes e manter constância. Ter preço calculado só garante que, quando você trabalhar, não estará pagando para trabalhar.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><p><b>Cobrar "o que o cliente quiser pagar"</b>. <b>Esquecer o tempo de conversa e revisão</b> no cálculo. <b>Copiar o preço de alguém muito mais experiente</b>. <b>Dar desconto antes de o cliente pedir</b>. <b>Não pensar em impostos</b>: se o trabalho crescer, procure um contador para saber como formalizar (por exemplo, como MEI, se a atividade permitir).</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a costureira precisa saber quanto custa a hora dela antes de dizer o preço da barra.</div>`
      ],
      ch:[
        { who:'Larissa, 22 anos, começando com posts para pequenos negócios', says:'Vi um vídeo dizendo que todo social media cobra no mínimo 2 mil reais por cliente. Vou cobrar isso da lanchonete do meu bairro no meu primeiro trabalho.',
          q:'Qual é o caminho mais sensato?',
          opts:[
            {t:'Cobrar os 2 mil, porque se o vídeo disse, é o preço de mercado.', ok:false, why:'Valores de vídeo não consideram sua região, sua experiência nem o tipo de cliente. É um chute com cara de regra.'},
            {t:'Calcular o custo da hora, estimar as horas do pacote, pesquisar preços na região para quem está começando e definir uma faixa a partir disso.', ok:true, why:'Preço baseado em conta e pesquisa local é mais justo para os dois lados e mais fácil de defender.'},
            {t:'Fazer de graça no primeiro mês para ganhar experiência.', ok:false, why:'Pode ser válido um projeto de teste, mas trabalhar de graça como regra desvaloriza o serviço e não resolve a dúvida de preço.'}
          ]},
        { who:'Roberto, 39 anos, dono de oficina mecânica', says:'Achei caro. Meu sobrinho faz por metade do preço.',
          q:'Como responder de forma profissional?',
          opts:[
            {t:'Baixar imediatamente para metade do preço, para não perder o cliente.', ok:false, why:'Baixar sem critério pode fazer você trabalhar no prejuízo e mostra que o preço inicial era chute.'},
            {t:'Dizer que o sobrinho deve fazer mal feito.', ok:false, why:'Criticar outra pessoa é deselegante e não ajuda o cliente a decidir.'},
            {t:'Explicar o que está incluído (quantidade, revisão, prazo, cuidado com dados) e, se ele quiser gastar menos, oferecer um pacote menor, em vez de cortar o preço do mesmo serviço.', ok:true, why:'Você mantém o valor do seu trabalho e oferece uma alternativa que cabe no orçamento dele.'}
          ]},
        { who:'Mariana, 28 anos, oferece atendimento por WhatsApp com IA', says:'Vou colocar no meu perfil: com meu serviço você vai ganhar 5 mil por mês a mais. E cobro 300 reais.',
          q:'O que há de errado nessa divulgação?',
          opts:[
            {t:'Nada, porque um número concreto chama a atenção.', ok:false, why:'Chamar atenção com uma promessa que você não controla pode configurar propaganda enganosa.'},
            {t:'Ela promete ganho para o cliente, o que não depende só dela. Deve divulgar o que entrega e o preço, sem garantir renda.', ok:true, why:'Preço e entrega são informações honestas; garantia de ganho não é.'},
            {t:'O problema é só o preço baixo: ela deveria cobrar mais caro.', ok:false, why:'O preço pode até ser revisto, mas o erro principal é a promessa de ganho.'}
          ]}
      ]},
    { id:'2.4', title:'Revisões, extras e como dizer não com educação', min:10,
      body:[
        `<div class="card analogy"><h3>🍕 A pizza meia a meia</h3><p>Na pizzaria, você escolhe dois sabores. Se pedir um terceiro, o atendente não fica bravo nem dá de graça: diz, com simpatia, "dá para fazer, mas aí vira outra pizza" ou "esse sabor tem acréscimo". Ninguém se ofende, porque a regra é clara e dita com educação. Revisões e extras funcionam assim no seu serviço.</p></div>`,
        `<div class="term"><b>Rodada de revisão</b> = um conjunto de ajustes pedidos de uma vez, sobre uma entrega. <b>Ajuste</b> = mudança dentro do que foi combinado (trocar uma cor, corrigir uma palavra). <b>Refação</b> = mudar a ideia toda depois de aprovada, o que normalmente é extra. <b>Escopo extra</b> = pedido novo, fora do combinado.</div>`,
        `<div class="card"><h3>Como organizar revisões</h3><ol class="golden"><li><span>Combine quantas rodadas de revisão estão incluídas (por exemplo, duas).</span></li><li><span>Peça que o cliente junte todos os ajustes numa única mensagem por rodada.</span></li><li><span>Diferencie ajuste de mudança de ideia: "trocar a cor" é ajuste; "não quero mais esse tema" depois de aprovado é refação.</span></li><li><span>Avise quando estiver na última rodada incluída.</span></li><li><span>Para o que passar disso, mande o valor do extra antes de fazer.</span></li></ol></div>`,
        `<div class="card"><h3>Dizer não sem perder o cliente</h3><p>Dizer não é parte do trabalho profissional. O segredo é recusar o pedido, e não a pessoa: reconheça a vontade do cliente, lembre o combinado e ofereça um caminho. Veja a estrutura:</p>
          <div class="code">1) Reconheça: "Entendo, a ideia do vídeo ficaria ótima para a promoção."
2) Lembre o combinado: "No nosso pacote estão os 12 posts com até 2 revisões."
3) Ofereça caminho: "Posso fazer o vídeo como extra por R$ [VALOR], entregando até [DATA]. Quer que eu inclua?"</div>
          <p>Repare que não há desculpas exageradas, nem bronca, nem "infelizmente não posso". Há clareza e uma opção.</p></div>`,
        `<div class="card"><h3>Quando o não é definitivo</h3><p>Alguns pedidos você deve recusar mesmo com pagamento: usar imagem de alguém sem autorização, fazer propaganda com promessa falsa, criar avaliações falsas, mandar mensagens em massa para quem não pediu, copiar o material de um concorrente. Nesses casos, explique o motivo em uma frase e proponha uma alternativa honesta. Um cliente que insiste em algo errado pode trazer problemas maiores do que o valor do trabalho.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><p><b>Aceitar ajustes por áudio, um de cada vez</b>, ao longo de dias. <b>Fazer o extra e cobrar depois</b> (o cliente pode se surpreender). <b>Sumir em vez de responder</b>: um não educado é melhor do que silêncio. <b>Ficar com raiva do cliente</b> por pedir: pedir é direito dele; combinar é responsabilidade sua.</p></div>`,
        `<div class="card"><h3>Quando o erro foi seu</h3><p>Se o ajuste existe porque você errou (nome do produto trocado, preço digitado errado, arte cortada), corrija sem contar como rodada de revisão e sem custo. Revisões incluídas servem para preferências do cliente; erro seu é responsabilidade sua. Essa justiça nos dois sentidos deixa o cliente mais tranquilo para aceitar quando você cobra um extra.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos como o atendente da pizzaria diz não ao terceiro sabor sem deixar ninguém chateado.</div>`
      ],
      ch:[
        { who:'Débora, 36 anos, dona de pet shop', says:'Aprovei os posts semana passada, mas agora quero mudar o tema de todos para o Dia dos Animais. É só refazer rapidinho, né?',
          q:'O pacote incluía 2 revisões, já usadas. Qual é a melhor resposta?',
          opts:[
            {t:'Refazer tudo de graça, porque a cliente é simpática.', ok:false, why:'Refazer material aprovado é trabalho novo. Fazer de graça ensina que o combinado não vale.'},
            {t:'Reconhecer que o tema é uma boa ideia, lembrar que os posts foram aprovados e as revisões usadas, e enviar o valor e o prazo para os novos posts como extra.', ok:true, why:'Você valoriza a ideia, mantém o combinado e oferece um caminho claro, sem conflito.'},
            {t:'Responder que não dá e não oferecer alternativa.', ok:false, why:'Um não seco perde a oportunidade de um extra e deixa a cliente frustrada.'}
          ]},
        { who:'Henrique, 44 anos, dono de restaurante', says:'Cria umas 30 avaliações cinco estrelas com IA, com nomes diferentes, para eu colocar no Google. Pago bem.',
          q:'Como responder?',
          opts:[
            {t:'Recusar com educação, explicar em uma frase que avaliações falsas enganam clientes e podem ser punidas pela plataforma, e propor uma ação para pedir avaliações reais aos clientes satisfeitos.', ok:true, why:'É um não definitivo, mas com alternativa honesta que realmente ajuda o restaurante.'},
            {t:'Aceitar, porque ele está pagando e a responsabilidade é dele.', ok:false, why:'Criar avaliações falsas é enganar consumidores, e você participa diretamente disso.'},
            {t:'Aceitar, mas fazer só 10 avaliações para não dar na vista.', ok:false, why:'A quantidade não muda o fato de que é engano.'}
          ]},
        { who:'Priscila, 31 anos, dona de loja de roupas', says:'Te mandei uns áudios com ajustes ontem, hoje de manhã e agora há pouco. Tem mais uns que vou lembrando ao longo do dia.',
          q:'O que organiza melhor as revisões a partir de agora?',
          opts:[
            {t:'Ir ajustando cada áudio assim que chega, para mostrar agilidade.', ok:false, why:'Ajustes picados geram retrabalho, confusão e fazem a revisão nunca terminar.'},
            {t:'Parar de responder até ela terminar de mandar tudo.', ok:false, why:'Sumir causa desconfiança. É melhor orientar com clareza.'},
            {t:'Pedir com gentileza que ela junte todos os ajustes numa única mensagem por rodada e lembrar quantas rodadas estão incluídas.', ok:true, why:'Uma rodada organizada economiza tempo dos dois e mantém o combinado claro.'}
          ]}
      ]},
    { id:'2.5', title:'Comunicação com o cliente: do briefing à entrega', min:10,
      body:[
        `<div class="card analogy"><h3>🚚 O rastreio da encomenda</h3><p>Quando você compra pela internet, fica tranquilo porque recebe avisos: pedido confirmado, enviado, saiu para entrega. Ninguém precisa ligar para a loja perguntando. Com o cliente é igual: avisos curtos e previsíveis evitam ansiedade, cobranças e mal-entendidos. Quem some durante o trabalho, mesmo entregando no prazo, passa a impressão de desorganização.</p></div>`,
        `<div class="term"><b>Briefing</b> = conversa ou formulário inicial em que o cliente explica o que precisa, para quem e com que objetivo. <b>Alinhamento</b> = conferir se os dois entenderam a mesma coisa antes de começar. <b>Status</b> = atualização sobre em que pé está o trabalho. <b>Pendência</b> = algo que depende do cliente para o trabalho andar.</div>`,
        `<div class="card"><h3>As 5 conversas de todo trabalho</h3><ol class="golden"><li><span>Briefing: pergunte sobre público, objetivo, tom, exemplos de que o cliente gosta e de que não gosta.</span></li><li><span>Alinhamento: mande um resumo por escrito do que entendeu e peça um "ok".</span></li><li><span>Atualizações: avise em dias combinados (por exemplo, segunda e quinta), mesmo que seja só "tudo dentro do prazo".</span></li><li><span>Pendências: liste o que falta o cliente enviar, com data.</span></li><li><span>Entrega: diga o que foi entregue, como usar e qual é o próximo passo.</span></li></ol></div>`,
        `<div class="code">Exemplo de atualização de status (pizzaria):
"Oi, Carla! Atualização da semana: 6 de 10 posts prontos e revisados.
Pendência sua: fotos das pizzas novas até quinta, para eu cumprir a entrega de segunda.
Atendo por aqui das 9h às 18h."</div>`,
        `<div class="card"><h3>Cliente que some ou atrasa o material</h3><p>Isso acontece muito com pequenos negócios: o dono está atendendo no balcão e esquece. Não leve para o lado pessoal. Siga uma régua simples: primeiro, um lembrete gentil no dia combinado; depois de dois dias, um segundo lembrete explicando o impacto ("sem as fotos, a entrega passa para a próxima semana"); por fim, um aviso de que o projeto fica pausado até o material chegar e que o prazo volta a contar a partir daí. Tudo por escrito, sem tom de ameaça. Se o combinado já previa isso, basta lembrar a regra.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Situação</th><th>Resposta fraca</th><th>Resposta profissional</th></tr><tr><td>Cliente pergunta "e aí, como está?"</td><td>"Tô vendo"</td><td>Status com número, prazo e pendência</td></tr><tr><td>Material atrasado</td><td>Ficar quieto e entregar atrasado</td><td>Avisar por escrito o impacto no prazo</td></tr><tr><td>Você vai atrasar</td><td>Sumir até ter algo pronto</td><td>Avisar antes, com nova data realista</td></tr></table></div>`,
        `<div class="card"><h3>Erros comuns e ética</h3><p>Responder às 23h e criar a expectativa de atendimento 24 horas. Mandar dez áudios em vez de uma mensagem organizada. Esconder um atraso seu. Usar IA para escrever mensagens e enviar sem revisar: o tom pode soar frio ou prometer algo que você não combinou. A honestidade vale para os dois lados: se o atraso é seu, assuma, peça desculpas e proponha uma solução.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique por que o aviso de rastreio deixa o comprador tranquilo e como a mesma ideia vale para os seus clientes.</div>`
      ],
      ch:[
        { who:'Thiago, 31 anos, editor de vídeos para uma academia em Goiânia', says:'O dono me mandou só "quero vídeos legais pro Insta". Vou começar a editar agora.',
          q:'Qual é o melhor próximo passo?',
          opts:[
            {t:'Editar cinco versões bem diferentes para ele escolher a melhor.', ok:false, why:'Sem briefing, ele multiplica o trabalho e ainda pode errar em todas as versões.'},
            {t:'Copiar o estilo de uma academia famosa, porque deve funcionar para todo mundo.', ok:false, why:'Cada negócio tem público e objetivo próprios, e copiar o estilo de outra marca pode gerar problemas.'},
            {t:'Fazer perguntas de briefing (público, objetivo, duração, exemplos) e mandar um resumo por escrito pedindo o "ok".', ok:true, why:'O briefing e o alinhamento garantem que os dois esperam a mesma coisa antes de gastar horas editando.'}
          ]},
        { who:'Larissa, 27 anos, social media de uma loja de roupas', says:'A dona prometeu as fotos da coleção há uma semana e não responde. A entrega é sexta.',
          q:'Como ela deve conduzir?',
          opts:[
            {t:'Mandar um lembrete gentil explicando o impacto no prazo e, sem resposta, avisar por escrito que o projeto fica pausado e o prazo volta a contar quando as fotos chegarem.', ok:true, why:'Ela é clara, educada e registra por escrito por que a data mudou.'},
            {t:'Usar fotos de outra loja achadas na internet, sem avisar, para cumprir a sexta.', ok:false, why:'Usar fotos sem licença e sem avisar a cliente cria um problema maior do que o atraso.'},
            {t:'Não falar nada e entregar na sexta sem as fotos, cobrando normalmente.', ok:false, why:'Silêncio gera surpresa e conflito. O combinado precisa ser lembrado antes do prazo.'}
          ]},
        { who:'Paulo, 39 anos, faz cardápios digitais para restaurantes', says:'Fiquei doente e vou atrasar dois dias a entrega do cardápio da lanchonete.',
          q:'O que é mais profissional?',
          opts:[
            {t:'Não falar nada e torcer para o cliente não perceber.', ok:false, why:'O cliente vai perceber, e descobrir o atraso sozinho abala a confiança.'},
            {t:'Avisar antes do prazo, contar o que já está pronto e propor uma nova data realista.', ok:true, why:'Avisar cedo, com transparência e solução, preserva a relação mesmo quando o problema é seu.'},
            {t:'Entregar no prazo sem revisar os preços do cardápio.', ok:false, why:'Preço errado no cardápio causa prejuízo e reclamação. É melhor atrasar avisando do que entregar com erro.'}
          ]}
      ]},
    { id:'2.6', title:'Projeto: seu combinado de 1 página', min:30,
      body:[
        `<div class="card"><p>Hora de criar o combinado que você vai mandar de verdade para seus próximos clientes. Use o serviço que pretende oferecer e um cliente imaginário, mas realista (uma padaria, um salão, uma oficina). Você pode pedir à IA para apontar trechos confusos, escrevendo o pedido com suas palavras, mas a decisão de cada regra é sua. Se o valor for alto ou o caso for sensível, mostre a um profissional.</p></div>`,
        `<div class="card"><h3>Como fica uma boa entrega</h3><p>Um bom combinado é lido em dois minutos e não deixa dúvida. Em vez de "posts do mês", ele diz "12 posts (arte + legenda) para Instagram, entregues em duas levas". Em vez de "revisões à vontade", diz "2 rodadas de ajustes, enviados numa única mensagem por rodada". E inclui como você vai se comunicar: em que dias manda o status, em que horário atende e o que acontece se o material atrasar. Teste lendo em voz alta: se alguma frase permite duas interpretações, reescreva.</p></div>`
      ],
      projeto: {
        entrega: 'Um combinado de 1 página para o seu serviço, com escopo, o que não inclui, prazo, preço, revisões, extras e o que o cliente precisa enviar.',
        passos: [
          'Descreva o serviço com números: quantidade, formato e canal (ex.: 12 posts para Instagram por mês).',
          'Liste o que não está incluído e como funcionam os extras (valor ou como será orçado).',
          'Defina prazo, quando ele começa a contar e quantas rodadas de revisão estão incluídas.',
          'Coloque o preço calculado com o custo da hora, a forma de pagamento e se haverá sinal.',
          'Escreva a frase de transparência sobre IA e dados, diga quando dará atualizações e o que acontece se o material atrasar, e releia como se fosse o cliente.'
        ],
        checklist: [
          'Escopo com números e lista do que não está incluído.',
          'Prazo com condição de início e limite de revisões.',
          'Preço baseado em conta, com forma de pagamento.',
          'Regra clara para extras e mudanças de ideia.',
          'Nenhuma promessa de resultado ou de ganho para o cliente.'
        ],
        minimo: 350
      } }
  ]},
  { id:3, icon:'🛡️', title:'Segurança e checagem', sub:'Golpes e checklist', lessons:[
    { id:'3.1', title:'Golpes e spam: como se proteger', min:10,
      body:[
        `<div class="card analogy"><h3>🚨 O porteiro desconfiado</h3><p>O bom porteiro confere quem está na porta antes de abrir, mesmo que a pessoa esteja com pressa ou diga que é conhecida. Com mensagens e pagamentos, vale a mesma desconfiança saudável. Quem começa a vender serviços pela internet vira alvo: golpistas sabem que iniciantes querem muito fechar o primeiro cliente e, por isso, baixam a guarda.</p></div>`,
        `<div class="term"><b>Phishing</b> = mensagem falsa que tenta roubar senhas e dados. <b>Comprovante falso</b> = print de pagamento que não corresponde a dinheiro recebido. <b>Verificação em duas etapas</b> = segunda camada de segurança, como um código, além da senha. <b>Engenharia social</b> = manipulação que usa pressa, medo ou simpatia para fazer você agir sem pensar.</div>`,
        `<div class="card"><h3>Sinais de alerta e hábitos de proteção</h3><p><b>Desconfie de:</b> pressa exagerada, pedido de código de verificação, link estranho, "cliente" que pede para você pagar uma taxa antes, comprovante enviado com pedido de troco ou devolução, proposta boa demais.</p>
          <p><b>Proteja-se:</b></p>
          <ol class="golden"><li><span>Confirme o pagamento no aplicativo do seu banco, e não pelo print.</span></li><li><span>Nunca compartilhe códigos.</span></li><li><span>Ative a verificação em duas etapas.</span></li><li><span>Não clique em links desconhecidos.</span></li><li><span>Nunca pague para "liberar" um trabalho.</span></li></ol>
          <p>E não vire spam: não envie mensagens em massa para quem não pediu.</p></div>`,
        `<div class="card"><h3>Os golpes mais comuns com freelancers</h3><p><b>O pagamento a mais:</b> o "cliente" paga (ou finge pagar) um valor maior e pede que você devolva a diferença. Depois, o pagamento original é cancelado ou nunca existiu. <b>O código do WhatsApp:</b> alguém se passa por plataforma ou cliente e pede "o código que chegou por SMS". Com ele, roubam sua conta e aplicam golpes nos seus contatos. <b>A vaga com taxa:</b> uma "empresa" oferece muitos trabalhos, mas pede uma taxa de cadastro ou curso obrigatório. <b>O arquivo com vírus:</b> um "briefing" em arquivo compactado ou executável que instala programas espiões.</p></div>`,
        `<div class="flows"><div class="flow old"><h4>❌ Reação no impulso</h4><div class="node">Mensagem urgente</div><div class="node">Clica, paga ou manda o código</div><div class="node">Prejuízo e conta roubada</div></div><div class="flow new"><h4>✅ Reação profissional</h4><div class="node">Mensagem urgente</div><div class="node">Para, confere por outro canal e no banco</div><div class="node">Só então decide</div></div></div>`,
        `<div class="card"><h3>Se cair num golpe</h3><p>Aja rápido: avise o banco pelo canal oficial (o Pix tem mecanismo de contestação, que deve ser pedido o quanto antes), troque senhas, recupere contas, avise seus contatos e registre boletim de ocorrência. Ter vergonha atrasa a reação; golpes acontecem com gente experiente também.</p></div>`,
        `<div class="card"><h3>Não vire o spam</h3><p>Proteger-se também inclui não incomodar os outros. Comprar listas de contatos, disparar a mesma mensagem para centenas de números ou adicionar pessoas em grupos sem pedir pode fazer seu número ser bloqueado e queima sua reputação antes do primeiro cliente. Prefira abordagens individuais e respeitosas: mensagem personalizada para negócios que você conhece, com uma oferta clara e a opção de a pessoa dizer que não tem interesse. Se ela pedir para não receber mais, respeite na hora.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o porteiro confere quem é antes de abrir a porta.</div>`
      ],
      ch:[
        { who:'Jéssica, 31 anos, vende serviços de design', says:'Um cliente mandou o comprovante do Pix, mas o dinheiro não apareceu na minha conta. Ele pediu para eu entregar o trabalho agora e disse que cai logo.',
          q:'Qual é a melhor atitude?',
          opts:[
            {t:'Entregar, porque o comprovante prova o pagamento.', ok:false, why:'Print de comprovante pode ser falso. O que vale é o dinheiro na sua conta.'},
            {t:'Entregar, porque o cliente parece educado e pediu com gentileza.', ok:false, why:'Educação não confirma pagamento. Golpistas costumam ser simpáticos.'},
            {t:'Conferir no aplicativo do banco e entregar só depois que o pagamento aparecer na conta.', ok:true, why:'Confirmar no banco protege você de comprovantes falsos.'}
          ]},
        { who:'Wesley, 24 anos, faz artes para hamburguerias', says:'Um cliente novo pagou 800 reais em vez de 300 e pediu para eu devolver os 500 de diferença urgente, porque errou o valor.',
          q:'O que ele deve fazer?',
          opts:[
            {t:'Confirmar no aplicativo do banco se o valor realmente entrou e, em caso de dúvida, orientar o cliente a pedir a devolução pelo próprio banco, sem fazer transferência por conta própria.', ok:true, why:'O golpe do pagamento a mais depende da sua pressa em devolver. Conferir e usar o canal do banco evita o prejuízo.'},
            {t:'Devolver os 500 na hora, para mostrar honestidade.', ok:false, why:'Se o pagamento for falso ou for cancelado depois, você perde os 500 reais.'},
            {t:'Ficar com a diferença como bônus.', ok:false, why:'Além de antiético, se o pagamento for real, o dinheiro não é seu.'}
          ]},
        { who:'Aline, 27 anos, atende clínicas pelo WhatsApp', says:'Chegou mensagem dizendo que é do suporte do WhatsApp e que preciso informar o código de 6 dígitos que mandaram por SMS para não perder a conta.',
          q:'Qual é a melhor atitude?',
          opts:[
            {t:'Informar o código, porque perder a conta prejudicaria os clientes.', ok:false, why:'É exatamente assim que roubam contas: com o código, o golpista assume seu WhatsApp.'},
            {t:'Não informar o código a ninguém, ativar a verificação em duas etapas no aplicativo e ignorar ou denunciar a mensagem.', ok:true, why:'Suporte legítimo não pede código por mensagem. A verificação em duas etapas protege mesmo se o código vazar.'},
            {t:'Mandar só metade do código para testar se é verdade.', ok:false, why:'Não existe teste seguro: qualquer parte do código ajuda o golpista.'}
          ]}
      ]},
    { id:'3.2', title:'Checklist: estou pronto para cobrar?', min:10,
      body:[
        `<div class="card analogy"><h3>✅ A lista de verificação do piloto</h3><p>Antes de decolar, o piloto confere cada item da lista, mesmo tendo milhares de horas de voo. A lista evita esquecimentos que custam caro. Ela não existe porque o piloto é ruim, e sim porque qualquer pessoa, cansada ou com pressa, esquece coisas importantes.</p></div>`,
        `<div class="term"><b>Checklist</b> = lista de itens a conferir antes de uma ação importante. <b>Portfólio</b> = exemplos reais do que você já fez. <b>Revisão humana</b> = você conferindo tudo antes de entregar. <b>Projeto de teste</b> = trabalho feito para um negócio real ou fictício, para treinar e mostrar no portfólio.</div>`,
        `<div class="card"><h3>Os 8 itens antes do primeiro cliente</h3><ol class="golden"><li><span>Sei fazer o serviço e já fiz um projeto de teste (portfólio).</span></li><li><span>Tenho uma oferta clara: escopo, prazo e preço.</span></li><li><span>Tenho o combinado por escrito.</span></li><li><span>Cuido dos dados: só o necessário e dados fictícios nos testes.</span></li><li><span>Uso conteúdo com licença.</span></li><li><span>Não prometo ganhos nem o que não controlo.</span></li><li><span>Reviso tudo antes de entregar: fatos, nomes e números.</span></li><li><span>Confirmo o pagamento no banco.</span></li></ol></div>`,
        `<div class="card"><h3>Como usar o checklist de verdade</h3><p>Leia item por item e responda com sinceridade: "sim", "ainda não" ou "mais ou menos". O que estiver como "ainda não" vira tarefa da semana. Por exemplo: se você ainda não tem portfólio, faça dois projetos de teste para negócios reais do bairro (com autorização para mostrar) ou para negócios fictícios bem descritos. Se ainda não tem preço, refaça a conta do custo da hora. Não precisa estar perfeito: precisa estar seguro o suficiente para não causar problema ao cliente nem a você.</p>
          <p>Uma dica útil é revisar o checklist depois de cada cliente. Sempre aparece algo para acrescentar, como "pedir as fotos antes de começar" ou "combinar horário de atendimento". Assim, a lista cresce com a sua experiência.</p></div>`,
        `<div class="why-chain"><b>Por que não começar logo e ajustar depois?</b> Porque o primeiro cliente é o que mais ensina e o que mais pode dar errado. Por que isso importa? Porque um primeiro trabalho mal combinado pode virar briga, calote ou reclamação pública. E daí? A pessoa desiste antes de aprender. Conclusão: meia hora de checklist protege o começo da sua jornada.</div>`,
        `<div class="card"><h3>Próximos passos</h3><p>Nas próximas lições deste módulo, você vai aprender a revisar o que a IA produz e a organizar arquivos, senhas e entregas. Depois, vê como organizar recibos e o dinheiro do trabalho e, no projeto do módulo, monta o seu checklist pessoal de entrega e segurança, que fecha o curso. Em seguida, escolha um curso de serviço da Trilha Renda com IA (a trilha completa tem um projeto final próprio).</p>
          <p>⚠️ <b>Importante:</b> este curso não garante renda, ele ensina a trabalhar do jeito certo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, por que o piloto usa uma lista antes de decolar, e como isso se parece com o seu checklist.</div>`
      ],
      ch:[
        { who:'Otávio, 23 anos, quer começar a cobrar', says:'Já fiz 2 testes, mas não tenho nada por escrito nem sei exatamente o que vou entregar. Quero começar a cobrar amanhã.',
          q:'Qual é o melhor caminho?',
          opts:[
            {t:'Antes de cobrar, definir a oferta e o combinado por escrito, usar o checklist e revisar o que entrega, e então começar com segurança.', ok:true, why:'Com oferta clara e combinado escrito, ele começa sem riscos desnecessários e com mais confiança do cliente.'},
            {t:'Cobrar já e organizar tudo depois, quando surgir algum problema.', ok:false, why:'Organizar depois costuma sair caro: conflitos e retrabalho aparecem antes da organização.'},
            {t:'Nunca cobrar, porque nunca vai estar 100% pronto.', ok:false, why:'O checklist existe para saber quando se está pronto o bastante, sem esperar a perfeição.'}
          ]},
        { who:'Kelly, 26 anos, quer oferecer posts para salões', says:'Já tenho oferta, combinado e preço calculado. Só não tenho nenhum exemplo para mostrar, porque nunca trabalhei para ninguém.',
          q:'O que ela deve fazer para completar o checklist?',
          opts:[
            {t:'Pegar posts bonitos de outras pessoas e mostrar como se fossem dela.', ok:false, why:'Mostrar trabalho alheio como seu é desonesto e, quando descoberto, acaba com a confiança.'},
            {t:'Fazer dois ou três projetos de teste, para um salão fictício bem descrito ou um salão real que autorize, e usar como portfólio, dizendo que são projetos de teste.', ok:true, why:'Projetos de teste honestos mostram o que ela sabe fazer sem enganar ninguém.'},
            {t:'Esperar alguém contratar sem ver exemplos.', ok:false, why:'É possível, mas muito mais difícil. Portfólio simples aumenta a confiança do cliente.'}
          ]},
        { who:'Sérgio, 52 anos, saiu do emprego e quer prestar serviços com IA', says:'Fiz o checklist e tenho tudo, menos a parte de confirmar pagamento: eu costumo aceitar print porque é mais rápido.',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Manter o print, porque a maioria dos clientes é honesta.', ok:false, why:'Basta um comprovante falso para perder o trabalho inteiro. O hábito existe para o caso raro.'},
            {t:'Pedir que os clientes mandem o print em PDF, que é mais difícil de falsificar.', ok:false, why:'Arquivo também pode ser falsificado. Só a conta bancária confirma o pagamento.'},
            {t:'Adotar como regra conferir no aplicativo do banco antes de entregar, e avisar isso no combinado.', ok:true, why:'Uma regra clara, avisada antes, evita constrangimento e protege contra golpes.'}
          ]}
      ]},
    { id:'3.3', title:'Revisar o que a IA produz: fatos, números e nomes', min:10,
      body:[
        `<div class="card analogy"><h3>🧑‍🍳 O estagiário confiante</h3><p>Imagine um estagiário muito rápido, educado e que escreve bem, mas que, quando não sabe uma resposta, inventa com toda a confiança do mundo. Você não deixaria ele mandar nada ao cliente sem ler antes. A IA generativa é parecida: ajuda muito, mas pode errar com cara de certeza. Quem assina a entrega é você.</p></div>`,
        `<div class="term"><b>Alucinação</b> = quando a IA inventa uma informação (dado, nome, lei, endereço, preço) que parece verdadeira, mas não é. <b>Checagem</b> = conferir cada informação importante numa fonte confiável. <b>Fonte primária</b> = a origem direta da informação, como o próprio cliente, o site oficial ou o documento original.</div>`,
        `<div class="card"><h3>O que sempre conferir</h3><ol class="golden"><li><span><b>Nomes</b>: nome do negócio, dos produtos, das pessoas, grafia correta.</span></li><li><span><b>Números</b>: preços, horários, datas, telefones, porcentagens, quantidades.</span></li><li><span><b>Fatos</b>: "o primeiro do bairro", "aprovado pela Anvisa", "o mais vendido": só com prova.</span></li><li><span><b>Promessas</b>: frases que garantem resultado, cura ou economia.</span></li><li><span><b>Leis e regras</b>: nunca confie em citação de lei feita pela IA sem conferir na fonte oficial.</span></li><li><span><b>Tom e respeito</b>: piadas, estereótipos ou frases que possam ofender alguém.</span></li></ol></div>`,
        `<div class="card"><h3>Um método simples de revisão em 3 leituras</h3><p><b>1ª leitura, conteúdo:</b> leia procurando tudo o que é informação (nomes, números, afirmações) e marque. Confira cada item com a fonte: a mensagem do cliente, o cardápio, o site oficial. <b>2ª leitura, promessas e riscos:</b> procure exageros, garantias e assuntos sensíveis (saúde, dinheiro, crianças). Troque "elimina a dor" por "pode ajudar no alívio, consulte um profissional", por exemplo. <b>3ª leitura, forma:</b> ortografia, clareza e se o texto parece com a voz do cliente, e não com um robô genérico.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>A IA escreveu</th><th>Problema</th><th>Versão revisada</th></tr><tr><td>"Aberto todos os dias das 6h às 22h"</td><td>Horário inventado</td><td>Horário confirmado com o cliente</td></tr><tr><td>"Nosso chá emagrece 5 kg em 1 semana"</td><td>Promessa de saúde falsa</td><td>Retirar a promessa e descrever o produto</td></tr><tr><td>"Pizzaria Bela Napoli" (é Bella Nápoli)</td><td>Nome errado</td><td>Grafia exata do cliente</td></tr><tr><td>"Conforme a Lei 12.345"</td><td>Lei possivelmente inventada</td><td>Conferir na fonte oficial ou retirar</td></tr></table></div>`,
        `<div class="card"><h3>Erros comuns</h3><p><b>Revisar só a ortografia</b> e deixar passar um preço errado. <b>Confiar porque "parece certo"</b>. <b>Não ter fonte</b>: peça ao cliente as informações oficiais (cardápio, tabela de preços, horários) antes de começar, e use isso como base para conferir.</p></div>`,
        `<div class="card"><h3>Use a IA a favor da checagem</h3><p>Você pode pedir à própria ferramenta que liste todas as afirmações e números do texto que ela produziu, para facilitar sua conferência. Também pode pedir que ela marque o que não tem certeza. Isso ajuda, mas não substitui a checagem: a IA pode errar também nessa lista. A conferência final é sempre com a fonte, ou seja, com o cliente, o documento ou o site oficial. Se não conseguir confirmar uma informação, retire do texto.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um colega que inventa respostas com confiança precisa ter o trabalho conferido.</div>`
      ],
      ch:[
        { who:'Natália, 25 anos, faz posts para uma pizzaria', says:'A IA escreveu: promoção de terça, pizza grande por 39,90, entrega grátis em toda a cidade. Ficou ótimo, vou postar!',
          q:'O que ela deve fazer antes de postar?',
          opts:[
            {t:'Postar, porque a IA costuma acertar promoções.', ok:false, why:'A IA não conhece a promoção real. Preço e área de entrega errados geram cobrança e reclamação para a pizzaria.'},
            {t:'Conferir com o dono o valor, o dia e a área de entrega, e só postar depois da confirmação.', ok:true, why:'Preço, data e condições são exatamente o tipo de informação que a IA pode inventar. A fonte é o cliente.'},
            {t:'Trocar só a palavra "grátis" por "com taxa", por segurança.', ok:false, why:'Corrigir um item no chute não resolve. Todos os dados precisam ser conferidos na fonte.'}
          ]},
        { who:'Dr. Paulo, 50 anos, fisioterapeuta', says:'Gostei do texto que a IA fez para o meu site, principalmente a parte que diz que meu tratamento cura hérnia de disco em 10 sessões.',
          q:'Como você deve agir?',
          opts:[
            {t:'Manter, porque o cliente gostou e é ele quem decide.', ok:false, why:'Promessa de cura em saúde pode ser enganosa e contrariar regras profissionais. Você deve alertar.'},
            {t:'Manter e colocar um asterisco com "resultados podem variar".', ok:false, why:'O asterisco não corrige uma promessa de cura que pode ser falsa.'},
            {t:'Alertar que a frase promete cura, sugerir uma versão sem garantia e recomendar que ele confira as regras do conselho profissional dele.', ok:true, why:'Revisar promessas de saúde protege o cliente, os pacientes e você.'}
          ]},
        { who:'Isabela, 29 anos, cria cardápios para lanchonetes', says:'Pedi para a IA montar o cardápio e ela incluiu um "X-Tudo Especial" e um "Suco Detox" que a lanchonete não vende.',
          q:'Qual hábito evita esse problema no futuro?',
          opts:[
            {t:'Começar pedindo ao cliente a lista oficial de produtos e preços, usá-la como base e conferir item por item na revisão.', ok:true, why:'Com uma fonte oficial em mãos, fica fácil achar o que a IA inventou.'},
            {t:'Pedir para a IA tomar mais cuidado e confiar no resultado.', ok:false, why:'Pedir cuidado não impede a IA de inventar. A revisão com fonte é que resolve.'},
            {t:'Deixar os itens inventados, porque podem dar ideias ao dono.', ok:false, why:'Um cardápio com produtos que não existem gera pedidos que não podem ser atendidos.'}
          ]}
      ]},
    { id:'3.4', title:'Arquivos, senhas, backup e entrega organizada', min:10,
      body:[
        `<div class="card analogy"><h3>🗄️ A gaveta da contadora</h3><p>Uma boa contadora encontra o documento de qualquer cliente em segundos: cada um tem sua pasta, tudo tem data e nada fica jogado sobre a mesa. Ela também guarda cópias, porque sabe que um computador pode quebrar no pior dia. Quando você presta serviço, sua organização digital é a sua gaveta: se ela é bagunçada, você perde arquivos, prazos e, às vezes, o cliente.</p></div>`,
        `<div class="term"><b>Backup</b> = cópia de segurança dos arquivos em outro lugar (nuvem, HD externo). <b>Gerenciador de senhas</b> = aplicativo que cria e guarda senhas fortes e diferentes para cada serviço. <b>Acesso compartilhado</b> = permissão que o cliente dá para você usar uma conta sem precisar passar a senha dele. <b>Versão</b> = cada etapa do arquivo, numerada (v1, v2, final).</div>`,
        `<div class="card"><h3>Organização de pastas que funciona</h3><div class="code">Clientes/
  2026-03_Padaria-Sao-Jorge/
    01_briefing (combinado, informações do cliente)
    02_materiais-recebidos (fotos, logo)
    03_producao (rascunhos v1, v2)
    04_entregue (arquivos finais com data)
    05_licencas (prints das licenças de imagens)</div>
          <p>Use nomes de arquivo claros, como "Padaria_post-promocao_v2.png", em vez de "imagem final FINAL agora vai.png". Ao terminar, apague dados pessoais que não precisa guardar, conforme o combinado.</p></div>`,
        `<div class="card"><h3>Senhas e acessos</h3><ol class="golden"><li><span>Uma senha diferente e forte para cada serviço (frases longas são boas senhas).</span></li><li><span>Verificação em duas etapas no e-mail, no WhatsApp, no banco e nas redes.</span></li><li><span>Prefira que o cliente adicione você como colaborador da conta (muitas redes e ferramentas permitem), em vez de passar a senha dele.</span></li><li><span>Se precisar receber senha, guarde num gerenciador de senhas, nunca em bloco de notas ou conversa aberta.</span></li><li><span>Ao final do trabalho, peça para o cliente remover seu acesso ou trocar a senha.</span></li></ol></div>`,
        `<div class="card"><h3>Backup sem complicação</h3><p>Uma regra muito usada é ter pelo menos duas cópias dos arquivos importantes em lugares diferentes, por exemplo, no computador e numa pasta de nuvem sincronizada. Verifique de vez em quando se o backup está funcionando, abrindo um arquivo de lá. Celular também precisa de backup: muita gente perde fotos de clientes e conversas quando o aparelho é roubado.</p></div>`,
        `<div class="card"><h3>A entrega organizada</h3><p>Entregar bem é parte do serviço. Mande os arquivos numa pasta ou link com nomes claros, uma mensagem curta dizendo o que está sendo entregue, e confirme que o cliente conseguiu abrir. Exemplo: "Segue o link com os 12 posts de março (artes e legendas em um arquivo de texto). Os arquivos estão em alta qualidade para Instagram. Pode me confirmar se abriu tudo certinho?". Guarde a confirmação na pasta do cliente.</p></div>`,
        `<div class="card"><h3>Erros comuns</h3><p><b>Deixar tudo na pasta Downloads</b>. <b>Mandar arquivos finais pelo WhatsApp</b>, que reduz a qualidade das imagens. <b>Usar o computador de outra pessoa</b> e esquecer contas abertas. <b>Nunca testar o backup</b> e descobrir, no dia do problema, que ele parou de funcionar há meses.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a contadora guarda uma cópia dos documentos em outro lugar.</div>`
      ],
      ch:[
        { who:'Eduardo, 30 anos, gerencia redes de três clientes', says:'Uso a mesma senha em tudo e anoto as senhas dos clientes no bloco de notas do celular. É mais prático.',
          q:'Qual é a melhor mudança?',
          opts:[
            {t:'Trocar a senha comum por outra mais difícil, mas continuar usando a mesma em tudo.', ok:false, why:'Se uma conta vazar, todas ficam expostas. Cada serviço precisa de senha diferente.'},
            {t:'Continuar assim, porque nunca aconteceu nada.', ok:false, why:'Celular roubado com senhas abertas expõe ele e os três clientes de uma vez.'},
            {t:'Usar senhas diferentes num gerenciador de senhas, ativar verificação em duas etapas e pedir aos clientes acesso como colaborador quando possível.', ok:true, why:'Essas três medidas reduzem muito o risco para ele e para os clientes.'}
          ]},
        { who:'Simone, 43 anos, dona de loja de roupas', says:'Lembra aquele catálogo que você fez em janeiro? Preciso dele agora para mandar a uma revendedora.',
          q:'Que hábito permite atender esse pedido em minutos?',
          opts:[
            {t:'Pastas por cliente com subpastas de entregues, arquivos com nomes e datas claros e backup na nuvem.', ok:true, why:'Com organização e backup, qualquer entrega antiga é encontrada rápido, e isso impressiona o cliente.'},
            {t:'Procurar nas conversas do WhatsApp, onde tudo fica guardado.', ok:false, why:'Conversas se perdem, arquivos comprimem e o celular pode ter sido trocado.'},
            {t:'Refazer o catálogo do zero quando o cliente pedir.', ok:false, why:'Refazer custa horas que você não vai cobrar, e o resultado pode ficar diferente.'}
          ]},
        { who:'Rogério, 37 anos, terminou o trabalho para uma academia', says:'Entreguei os vídeos e encerramos o contrato. Ainda tenho a senha do Instagram da academia e a planilha de alunos.',
          q:'O que fazer ao encerrar?',
          opts:[
            {t:'Guardar a senha, caso a academia volte a contratar.', ok:false, why:'Manter acesso sem trabalho ativo é risco para os dois e pode gerar desconfiança.'},
            {t:'Pedir que a academia troque a senha ou remova seu acesso, apagar a planilha de alunos conforme o combinado e avisar por escrito.', ok:true, why:'Encerrar acessos e dados fecha o trabalho com segurança e profissionalismo.'},
            {t:'Apagar a planilha, mas não falar nada sobre a senha.', ok:false, why:'É meio caminho. O acesso à conta também precisa ser encerrado.'}
          ]}
      ]},
    { id:'3.5', title:'Nota, recibo e organização financeira básica', min:10,
      body:[
        `<div class="card analogy"><h3>🧺 As duas gavetas</h3><p>Imagine guardar o dinheiro da feira e o dinheiro do aluguel na mesma gaveta. No fim do mês, ninguém sabe quanto sobrou de cada um. Misturar o dinheiro pessoal com o do trabalho é igual: parece que entrou muito, mas você não sabe quanto ganhou de verdade nem quanto gastou para trabalhar.</p></div>`,
        `<div class="term"><b>Recibo</b> = documento simples que comprova que você recebeu um valor, de quem e por qual serviço. <b>Nota fiscal</b> = documento oficial, emitido conforme as regras do seu cadastro e da sua cidade. <b>MEI</b> = Microempreendedor Individual, uma forma de formalização com regras próprias de atividades e limites. <b>Contador</b> = profissional que orienta sobre impostos, formalização e obrigações. <b>Fluxo de caixa</b> = registro do que entra e do que sai.</div>`,
        `<div class="card"><h3>Organização em 5 passos</h3><ol class="golden"><li><span>Separe as contas: uma conta só para o trabalho, mesmo que seja uma segunda conta digital gratuita.</span></li><li><span>Registre cada recebimento no mesmo dia: data, cliente, serviço, valor e forma de pagamento.</span></li><li><span>Registre os custos do trabalho: assinaturas de ferramentas, internet, cursos.</span></li><li><span>Emita recibo ou nota quando receber, conforme a sua situação, e guarde uma cópia.</span></li><li><span>Pague a si mesmo um valor fixo por mês, transferindo da conta do trabalho para a pessoal.</span></li></ol></div>`,
        `<div class="code">Exemplo de planilha simples:
Data  | Cliente           | Serviço        | Valor     | Forma  | Comprovante
05/03 | Salão Bella       | 12 posts       | R$ 600    | Pix    | Recibo 001
12/03 | Pizzaria do Zé    | Cardápio       | R$ 350    | Pix    | Recibo 002
15/03 | Assinatura de IA  | Custo          | -R$ 100   | Cartão | Fatura</div>`,
        `<div class="card"><h3>Quando procurar um contador</h3><p>Este curso não dá orientação fiscal: as regras mudam e dependem da sua atividade, da sua cidade e de quanto você fatura. Procure um contador ou o atendimento do Sebrae quando começar a receber com frequência, quando um cliente pedir nota fiscal, quando pensar em se formalizar como MEI ou outro tipo de empresa, ou quando o faturamento crescer. Leve a sua planilha: ela deixa a conversa mais rápida e mais barata.</p></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Hábito</th><th>Por que importa</th></tr><tr><td>Conta separada</td><td>Mostra quanto o trabalho realmente rende</td></tr><tr><td>Registro no mesmo dia</td><td>Evita esquecer recebimentos e discussões sobre pagamento</td></tr><tr><td>Guardar comprovantes</td><td>Ajuda o contador e protege você em caso de dúvida</td></tr><tr><td>Reserva para impostos e meses fracos</td><td>Evita sustos quando a conta chega</td></tr></table></div>`,
        `<div class="card"><h3>Erros comuns e ética</h3><p>Achar que recebimento por Pix "não conta". Gastar o sinal antes de entregar e ficar sem dinheiro para terminar o trabalho. Emitir recibo com valor diferente do recebido a pedido do cliente: isso é errado e pode trazer problemas legais. Seguir dica fiscal de vídeo sem confirmar com um profissional. Organizar o dinheiro não garante que você vai ganhar mais: serve para saber, com números reais, se o seu serviço está valendo a pena.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique por que guardar o dinheiro da feira e o do aluguel em gavetas separadas ajuda uma família a não se perder nas contas.</div>`
      ],
      ch:[
        { who:'Camila, 30 anos, faz artes para docerias em Belo Horizonte', says:'Recebo tudo na minha conta pessoal, junto com o salário do meu marido. No fim do mês não sei quanto ganhei com as artes.',
          q:'O que resolve melhor o problema dela?',
          opts:[
            {t:'Anotar tudo só no fim do ano, quando sobrar tempo.', ok:false, why:'Depois de meses, ela vai esquecer valores e não terá como saber se o serviço compensa.'},
            {t:'Abrir uma conta separada para o trabalho e registrar cada recebimento e custo numa planilha simples.', ok:true, why:'Separar e registrar no dia mostra quanto entra, quanto sai e quanto sobra do trabalho.'},
            {t:'Parar de aceitar Pix para não misturar as contas.', ok:false, why:'O problema não é o Pix, é a falta de separação e de registro.'}
          ]},
        { who:'Rafael, 36 anos, edita vídeos para oficinas mecânicas', says:'Um cliente novo pediu nota fiscal e eu nunca emiti uma.',
          q:'Qual é o caminho mais responsável?',
          opts:[
            {t:'Mandar o print do Pix e dizer que ele vale como nota fiscal.', ok:false, why:'Comprovante de pagamento não substitui nota fiscal. Dizer isso ao cliente é falso.'},
            {t:'Pedir para um amigo que tem empresa emitir a nota no lugar dele.', ok:false, why:'Emitir nota por um serviço que outra pessoa prestou é irregular e pode trazer problemas para os dois.'},
            {t:'Procurar um contador ou o Sebrae para entender a sua situação antes de fechar e explicar ao cliente quando poderá emitir.', ok:true, why:'Ele busca orientação profissional em vez de improvisar e é honesto com o cliente sobre o prazo.'}
          ]},
        { who:'Bianca, 25 anos, social media de uma loja de calçados', says:'O cliente pediu que eu fizesse o recibo com um valor maior do que ele pagou, para ele "ajustar as contas".',
          q:'Como ela deve responder?',
          opts:[
            {t:'Recusar com educação e emitir o recibo com o valor real recebido.', ok:true, why:'Recibo comprova o que aconteceu de verdade. Valor diferente é falso e pode trazer problemas legais para os dois.'},
            {t:'Fazer o recibo, porque é só um favor para um bom cliente.', ok:false, why:'Ser um favor não torna o documento verdadeiro. Ela pode ser responsabilizada.'},
            {t:'Fazer o recibo com o valor maior, mas sem assinar.', ok:false, why:'Sem assinatura, o documento continua falso e o problema continua.'}
          ]}
      ]},
    { id:'3.6', title:'Projeto: seu checklist pessoal de entrega e segurança', min:30,
      body:[
        `<div class="card"><p>Este é o projeto que fecha o curso. O checklist da lição 3.2 é genérico. Agora você vai criar o seu, adaptado ao serviço que pretende oferecer, para usar antes de cada entrega. Ele deve ser curto o suficiente para usar sempre e completo o suficiente para pegar os erros que mais importam. Pode pedir à IA sugestões de itens, escrevendo o pedido com suas palavras, mas escolha e reescreva cada item você mesmo.</p></div>`,
        `<div class="card"><h3>Como fica uma boa entrega</h3><p>Um bom checklist tem de 12 a 20 perguntas de sim ou não, agrupadas em blocos: conteúdo ("conferi nomes, preços e telefones com o cliente?"), segurança ("o pagamento apareceu no aplicativo do banco?"), organização ("os arquivos estão com nome e data?"), financeiro ("registrei o recebimento e emiti o recibo?") e encerramento ("pedi a troca de senha e apaguei os dados combinados?"). Depois de testar num projeto de teste, anote o que mudou e por quê.</p></div>`
      ],
      projeto: {
        entrega: 'Um checklist pessoal com itens de revisão de conteúdo, segurança, organização de arquivos e entrega, adaptado ao seu serviço.',
        passos: [
          'Liste os erros que mais podem acontecer no seu serviço (preço errado, nome errado, imagem sem licença, promessa exagerada).',
          'Transforme cada erro num item de conferência com pergunta de sim ou não.',
          'Inclua os itens de segurança e dinheiro: pagamento confirmado no banco e registrado na planilha, recibo, senhas, acessos e backup.',
          'Inclua os itens de entrega: nomes dos arquivos, mensagem de entrega, confirmação do cliente e apagar dados ao final.',
          'Teste o checklist num projeto de teste e ajuste o que ficou confuso ou faltando.'
        ],
        checklist: [
          'Tem itens de checagem de fatos, números, nomes e promessas.',
          'Tem itens de segurança: pagamento, senhas, acessos e backup.',
          'Tem itens de organização e entrega dos arquivos.',
          'Cada item é uma pergunta clara de sim ou não.',
          'Foi testado em pelo menos um projeto de teste.'
        ],
        minimo: 300
      } }
  ]}
];

const MODDONE = {
  1: 'Você sabe cuidar de dados, de direitos de uso, de imagem e voz, e é transparente sobre o uso de IA. E já tem a sua política de dados.',
  2: 'Você sabe combinar por escrito, prometer só o que controla, calcular preço com cautela e dizer não com educação. E já tem o seu combinado de 1 página.',
  3: 'Parabéns, você concluiu o curso Base Profissional! Seu certificado do curso já está disponível. Você sabe se proteger de golpes, revisar o que a IA produz, organizar arquivos, senhas, entregas e o dinheiro do trabalho, e já tem o seu checklist pessoal. Agora escolha um curso de serviço da Trilha Renda com IA e use essa base desde o primeiro cliente.'
};

const PROMPTS = {
  1: [
    { title:'Dados fictícios para teste', desc:'Para testar sem expor pessoas reais.' }
  ],
  2: [
    { title:'Combinado de uma página', desc:'Para registrar o acordo com o cliente.' }
  ],
  3: [
    { title:'Checklist antes de cobrar', desc:'Para conferir se você está pronto.' }
  ]
};

const THEME = { 1:['#3B82F6','#6366F1'], 2:['#6366F1','#3B82F6'], 3:['#3B82F6','#6366F1'] };
const LIC = { '1.1':'🔒','1.2':'©️','1.3':'🎭','1.4':'🍰','1.5':'📜','1.6':'📄','2.1':'📝','2.2':'🎯','2.3':'🧮','2.4':'🍕','2.5':'💬','2.6':'🤝','3.1':'🚨','3.2':'✅','3.3':'🔎','3.4':'🗄️','3.5':'💰','3.6':'🧾' };

return {
  id: 'base-profissional',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
