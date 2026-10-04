/* Curso: IA do Zero (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🧠', title:'Entendendo a IA', sub:'O que ela é e como funciona', lessons:[
    { id:'1.1', title:'Afinal, o que é IA?', min:5,
      body:[
        `<div class="card analogy"><h3>🤖 O estagiário que leu a biblioteca inteira</h3><p>Imagine um estagiário que leu milhões de livros, sites e conversas, mas <b>nunca saiu da sala</b>. Ele fala sobre quase tudo e responde rápido, mas não viveu nada: tudo o que sabe veio do que leu. A IA que você usa hoje funciona parecido.</p></div>`,
        `<div class="term"><b>Inteligência Artificial (IA)</b> = programa de computador que faz tarefas que antes exigiam inteligência humana, como entender texto, reconhecer imagens ou conversar. <b>Modelo</b> = o "cérebro" da IA, o programa já treinado. <b>Ferramenta</b> = o app ou site onde você conversa com o modelo, como um chat.</div>`,
        `<div class="card"><h3>IA não é um robô nem uma pessoa</h3><p>A IA que conversa com você é um programa treinado com uma enorme quantidade de textos. Ela não pensa como gente nem tem opinião própria: produz respostas que combinam com o que aprendeu.</p>
          <p>Você já usa IA sem perceber: sugestão de texto no celular, filtro de spam no e-mail, recomendação de vídeos, tradutor. O que mudou nos últimos anos foi a <b>IA generativa</b>, aquela que cria texto, imagem, áudio e código a partir de um pedido seu.</p>
          <p>Três ideias para guardar:</p>
          <ol class="golden"><li><span>IA é uma <b>ferramenta</b>, não uma pessoa.</span></li><li><span>Ela é ótima com <b>linguagem e padrões</b>.</span></li><li><span>Ela precisa de <b>você</b> para dar direção e conferir o resultado.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique em voz alta, como se falasse com uma criança de 10 anos: "O que é IA e por que ela não é um robô que pensa?" Se travar, volte à analogia do estagiário.</div>`
      ],
      ch:{ who:'Dona Marta, 58 anos, dona de uma padaria', says:'Meu neto disse que a IA já pensa e sente como a gente. Então posso deixar ela decidir o preço de tudo na padaria, né?',
        q:'Qual é a melhor resposta para Dona Marta?',
        opts:[
          {t:'A IA sente e pensa como uma pessoa, então pode decidir tudo sozinha.', ok:false, why:'A IA não sente nem pensa como uma pessoa: ela gera respostas a partir de padrões que aprendeu. As decisões do negócio continuam sendo suas.'},
          {t:'A IA é uma ferramenta que ajuda e sugere, mas quem decide o preço, conhecendo a padaria, é a Dona Marta.', ok:true, why:'Exato. A IA pode calcular, comparar e sugerir, mas não conhece sua clientela, seus custos reais nem seu bairro. A decisão final é humana.'},
          {t:'A IA só serve para empresas grandes, então a padaria não tem como usar.', ok:false, why:'Qualquer pessoa pode usar IA, inclusive com ferramentas gratuitas, por exemplo para criar cardápio ou responder clientes. O erro é achar que ela é só para gigantes.'}
        ]}},
    { id:'1.2', title:'Como a IA aprende', min:7,
      body:[
        `<div class="card analogy"><h3>📚 Reconhecer a letra da vovó</h3><p>Depois de ver centenas de bilhetes da vovó, você reconhece a letra dela até num bilhete novo, sem que ninguém tenha te ensinado regra nenhuma. Você <b>aprendeu por exemplos</b>. A IA aprende assim também: vendo uma quantidade enorme de exemplos.</p></div>`,
        `<div class="term"><b>Treinamento</b> = etapa em que a IA vê muitos exemplos e se ajusta para acertar mais. <b>Dados</b> = os exemplos usados no treino, como textos, imagens e áudios. <b>Padrão</b> = algo que se repete e que a IA aprende a reconhecer. <b>Prompt</b> = o pedido ou a pergunta que você escreve para a IA.</div>`,
        `<div class="card"><h3>Exemplos + padrões = respostas</h3><p>Os modelos de linguagem, os "cérebros" dos chats, foram treinados com bilhões de textos. Aprenderam quais palavras costumam vir depois de quais. Ao responder, o modelo monta o texto palavra por palavra, escolhendo continuações prováveis e coerentes com o seu pedido. Por isso:</p>
          <ol class="golden"><li><span>Se há muito exemplo bom sobre o assunto, a IA tende a ir bem.</span></li><li><span>Se o assunto é recente, muito local ou raro (como a lei do seu município), ela pode errar.</span></li><li><span>Ela não "consulta a verdade": produz o que parece <b>plausível</b>. Algumas ferramentas conseguem buscar na internet, mas o princípio é o mesmo: confira.</span></li></ol>
          <p>O caminho completo:</p>
          <div class="pipe"><div class="node ink">Dados</div><div class="ar">➜</div><div class="node ink">Treinamento</div><div class="ar">➜</div><div class="node ink">Modelo</div><div class="ar">➜</div><div class="node yel">Seu prompt</div><div class="ar">➜</div><div class="node ink">Resposta</div></div></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos: "Como a IA aprendeu a escrever textos?" Use um exemplo seu, como aprender a reconhecer a letra de alguém.</div>`
      ],
      ch:{ who:'Rafael, 24 anos, estudante de Administração', says:'Perguntei para a IA sobre uma lei que mudou mês passado e ela respondeu com toda a confiança. Então deve estar certo, né?',
        q:'O que explica o risco nessa situação?',
        opts:[
          {t:'A IA sempre pesquisa na internet em tempo real, então a resposta é sempre atualizada.', ok:false, why:'Nem toda ferramenta pesquisa na internet, e mesmo as que pesquisam podem errar. Não dá para assumir que a resposta está atualizada.'},
          {t:'Como a resposta veio longa e bem escrita, é sinal de que está correta.', ok:false, why:'Texto bem escrito não prova que está certo. A IA escreve bem mesmo quando erra.'},
          {t:'A IA aprende com exemplos do passado e produz respostas plausíveis, então pode errar em assuntos recentes e ainda assim soar segura.', ok:true, why:'É isso. Por isso, em assuntos recentes ou importantes, você confere em fonte oficial.'}
        ]}},
    { id:'1.3', title:'O que a IA faz bem e onde ela erra', min:7,
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
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a IA, mesmo escrevendo bem, às vezes inventa coisas. Use a analogia do GPS.</div>`
      ],
      ch:{ who:'Seu Jorge, 45 anos, dono de uma oficina mecânica', says:'Pedi para a IA montar o orçamento de um cliente e ela somou tudo rapidinho. Posso mandar direto sem olhar?',
        q:'Qual é a atitude mais segura?',
        opts:[
          {t:'Usar a IA para organizar e redigir o orçamento, mas conferir os valores e a soma antes de enviar.', ok:true, why:'A IA ajuda muito na organização e na redação, mas pode errar contas. Conferir os números é o que protege você e o cliente.'},
          {t:'Mandar direto: se a IA escreveu com segurança, a conta está certa.', ok:false, why:'Segurança no tom não é garantia de acerto. Contas e números exatos estão entre os pontos onde a IA mais erra.'},
          {t:'Nunca mais usar IA, porque ela erra contas.', ok:false, why:'A IA continua útil para organizar e escrever. O risco se resolve com conferência, não abandonando a ferramenta.'}
        ]}}
  ]},
  { id:2, icon:'🛠️', title:'Mão na massa', sub:'Conhecendo e usando as ferramentas', lessons:[
    { id:'2.1', title:'Assistentes de IA: por onde começar', min:6,
      body:[
        `<div class="card analogy"><h3>💬 Lojas do mesmo shopping</h3><p>Existem várias lojas de IA, cada uma com sua vitrine, mas todas vendem o mesmo tipo de produto: conversar e gerar conteúdo. Se você aprende a usar uma, <b>já aprendeu a maior parte de todas</b>.</p></div>`,
        `<div class="term"><b>Assistente de IA (chatbot)</b> = ferramenta onde você conversa com a IA por texto, voz ou imagem. <b>Plano gratuito</b> = versão sem custo, geralmente com limites de uso. <b>Conta</b> = o seu cadastro na ferramenta, onde ficam suas conversas.</div>`,
        `<div class="card"><h3>Como escolher sem se perder</h3><p>Existem vários assistentes populares, e a maioria tem plano gratuito, como ChatGPT, Gemini, Claude e Copilot. Limites e recursos mudam com frequência, então confira na página oficial de cada um. Para começar:</p>
          <ol class="golden"><li><span>Escolha <b>UMA</b> ferramenta (não precisa testar todas).</span></li><li><span>Crie a conta pelo site ou app oficial.</span></li><li><span>Faça uma pergunta simples do seu dia a dia.</span></li><li><span>Depois de uma semana, teste uma segunda para comparar.</span></li></ol>
          <p>⚠️ Cuidado com "apps de IA" desconhecidos que pedem pagamento ou muitos dados: use sempre o site ou a loja de aplicativos oficial.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que aprender a usar uma ferramenta de IA já ajuda a usar as outras.</div>`
      ],
      ch:{ who:'Luana, 27 anos, recepcionista', says:'Vi 12 ferramentas de IA num vídeo. Vou assinar todas hoje para não ficar para trás!',
        q:'Qual é o melhor conselho para a Luana?',
        opts:[
          {t:'Assinar todas, assim ela garante o melhor resultado possível.', ok:false, why:'Assinar tudo gera gasto sem necessidade, e as ferramentas são parecidas. Dá para aprender o essencial com uma só, no plano gratuito.'},
          {t:'Esperar a IA ficar perfeita para só então começar a usar.', ok:false, why:'A IA continua evoluindo. Quem pratica agora já ganha tempo e experiência. Esperar só atrasa.'},
          {t:'Começar com uma ferramenta, no plano gratuito, praticando com tarefas do dia a dia, e só depois comparar com outra.', ok:true, why:'Foco em uma ferramenta acelera o aprendizado e não custa nada. A comparação vem depois, com base na sua experiência.'}
        ]}},
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
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> peça algo de que você precisa hoje usando as 4 partes. Depois explique a alguém por que ficou melhor do que um pedido solto.</div>`
      ],
      ch:{ who:'Bruno, 35 anos, vendedor', says:'Escrevi \'faz um texto de vendas\' e a IA mandou um texto genérico. Essa IA não presta!',
        q:'Qual é o melhor ajuste?',
        opts:[
          {t:'Trocar de IA até achar uma que adivinhe o que ele quer.', ok:false, why:'Qualquer IA responde de forma genérica a um pedido genérico. O ajuste está no pedido, não na ferramenta.'},
          {t:'Detalhar o pedido: dizer o produto, para quem é, o tom e o tamanho do texto.', ok:true, why:'Com papel, tarefa, contexto e formato, a IA tem o que precisa para entregar algo útil. Depois é só ajustar conversando.'},
          {t:'Repetir o mesmo pedido várias vezes até acertar por sorte.', ok:false, why:'Repetir o mesmo pedido vago só gera variações do mesmo texto genérico. Melhorar o pedido é o caminho.'}
        ]}},
    { id:'2.3', title:'IA além do texto: imagem, voz e arquivos', min:6,
      body:[
        `<div class="card analogy"><h3>🖼️ O canivete suíço</h3><p>Um canivete tem várias lâminas no mesmo cabo. Muitos assistentes de IA também: além de texto, conseguem olhar uma foto, ouvir sua voz, ler um arquivo e criar imagens, <b>dependendo da ferramenta e do plano</b>.</p></div>`,
        `<div class="term"><b>Multimodal</b> = IA que entende mais de um tipo de conteúdo, como texto, imagem e áudio. <b>Transcrição</b> = transformar fala em texto escrito. <b>IA de imagem</b> = IA que cria imagens a partir de uma descrição.</div>`,
        `<div class="card"><h3>4 usos simples para testar</h3>
          <ol class="golden"><li><span><b>Foto → explicação</b>: fotografe uma planta, um aparelho ou uma página de livro e pergunte "o que é isto?" ou "traduza e explique".</span></li><li><span><b>Voz → texto</b>: dite uma ideia e peça para a IA organizar em tópicos.</span></li><li><span><b>Arquivo → resumo</b>: envie um texto seu e peça um resumo em 5 pontos.</span></li><li><span><b>Descrição → imagem</b>: peça uma ilustração para um post ou convite.</span></li></ol>
          <p>⚠️ Atenção: nem toda ferramenta ou plano gratuito oferece tudo, e os limites mudam. Fotos nítidas funcionam melhor. E não envie imagens ou arquivos com dados pessoais de outras pessoas (veremos isso no módulo 3).</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que significa uma IA "entender uma foto".</div>`
      ],
      ch:{ who:'Tânia, 41 anos, professora', says:'Fotografei a página de um livro em inglês. Dá para a IA me explicar o que está escrito?',
        q:'Qual é a melhor resposta?',
        opts:[
          {t:'Dá, em muitas ferramentas: enviar a foto e pedir "traduza e explique em português simples", conferindo se a foto está nítida e se o plano oferece esse recurso.', ok:true, why:'Muitas ferramentas leem imagens. Foto nítida e um pedido claro melhoram o resultado, e vale confirmar se o seu plano inclui o recurso.'},
          {t:'Não dá, a IA só entende texto digitado.', ok:false, why:'Muitos assistentes atuais entendem imagens, voz e arquivos, dependendo da ferramenta e do plano.'},
          {t:'Dá, e o resultado é sempre perfeito, mesmo com a foto tremida.', ok:false, why:'Foto tremida ou cortada atrapalha a leitura e pode gerar erros. Nitidez e conferência continuam importantes.'}
        ]}}
  ]},
  { id:3, icon:'🛡️', title:'Segurança', sub:'Usando a IA com responsabilidade', lessons:[
    { id:'3.1', title:'O que nunca colar na IA', min:6,
      body:[
        `<div class="card analogy"><h3>🔒 Conversa na cafeteria lotada</h3><p>Você conversa com um amigo numa mesa de café movimentada. Não diria ali a sua senha nem o número do seu cartão, certo? Ao conversar com uma IA online, vale o mesmo cuidado: você está usando o serviço de uma empresa, <b>não um diário trancado</b>.</p></div>`,
        `<div class="term"><b>Dado pessoal</b> = informação que identifica uma pessoa, como nome completo, CPF, endereço, telefone, e-mail e foto. <b>Dado sensível</b> = dado mais delicado, como saúde, religião, posição política e biometria. <b>LGPD</b> = Lei Geral de Proteção de Dados, a lei brasileira que protege os dados das pessoas. <b>Anonimizar</b> = tirar ou trocar o que identifica a pessoa, por exemplo "Cliente A" no lugar do nome.</div>`,
        `<div class="card"><h3>O semáforo da informação</h3>
          <ol class="golden"><li><span>🔴 <b>Nunca cole:</b> senhas, códigos de verificação, número de cartão, CPF e RG, dados de saúde de alguém, segredos da empresa, contratos confidenciais.</span></li><li><span>🟡 <b>Cuidado, anonimize antes:</b> nomes de clientes, e-mails, telefones, valores de propostas.</span></li><li><span>🟢 <b>Pode:</b> textos públicos, ideias gerais, perguntas de estudo, rascunhos com dados fictícios.</span></li></ol>
          <p>Dependendo da ferramenta e das configurações, o que você escreve pode ser guardado e usado para melhorar o serviço. Por isso, confira as configurações de privacidade da sua conta, use dados fictícios sempre que puder e siga as regras de IA da sua empresa, se existirem.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que não se conta um segredo importante a um estranho, e relacione com a IA.</div>`
      ],
      ch:{ who:'Paulo, 38 anos, atendente de uma clínica', says:'Vou colar a conversa inteira com o paciente na IA para ela montar um resumo. Tem nome e exame, mas é rapidinho.',
        q:'O que é mais adequado?',
        opts:[
          {t:'Colar tudo, porque é rápido e a IA vai ajudar bastante.', ok:false, why:'Nome e exame são dados pessoais e de saúde. Colar sem cuidado expõe o paciente e pode violar a LGPD.'},
          {t:'Tirar o nome e tudo o que identifica o paciente (anonimizar) e, por ser dado de saúde, só usar IA seguindo as regras da clínica.', ok:true, why:'Anonimizar reduz o risco, e dados de saúde pedem ainda mais cuidado. Seguir as regras da clínica protege o paciente e você.'},
          {t:'Colar só o nome e esconder o exame.', ok:false, why:'O nome já identifica o paciente. O certo é remover o que identifica, não escolher qual parte colar.'}
        ]}},
    { id:'3.2', title:'Conferir antes de confiar', min:7,
      body:[
        `<div class="card analogy"><h3>🔍 O repórter que confirma com duas fontes</h3><p>Um bom repórter só publica depois de confirmar a notícia com mais de uma fonte. Trate a resposta da IA como a <b>primeira pista</b>, não como a notícia confirmada.</p></div>`,
        `<div class="term"><b>Fonte oficial</b> = site de governo, instituição ou empresa responsável pela informação. <b>Checagem cruzada</b> = conferir a mesma informação em dois ou mais lugares confiáveis. <b>Citação inventada</b> = referência (lei, livro, estudo) que a IA cria e que não existe.</div>`,
        `<div class="card"><h3>O teste dos 3 passos</h3>
          <ol class="golden"><li><span>Pergunte à IA: "De onde vem essa informação? Cite a fonte." Mas desconfie: ela pode inventar.</span></li><li><span>Procure a fonte você mesmo, em um site oficial.</span></li><li><span>Compare números, datas e nomes.</span></li></ol>
          <p><b>Sinais de alerta:</b> muita certeza sobre assunto de nicho; números muito específicos sem fonte; nome de lei, livro ou estudo que você não consegue encontrar. Quanto maior o risco (saúde, dinheiro, lei), mais fontes você confere.</p>
          <p>Exemplo: a IA diz "o artigo 12 da lei X garante isso". Você abre o texto da lei no site oficial e vê o que ela realmente diz.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um repórter confere a notícia antes de contar, e como isso vale para a IA.</div>`
      ],
      ch:{ who:'Renata, 29 anos, analista de RH', says:'A IA me deu o número de uma lei trabalhista para colocar no meu relatório. O texto estava tão bem escrito que nem desconfiei.',
        q:'Qual é o próximo passo?',
        opts:[
          {t:'Colocar no relatório: texto bem escrito é sinal de acerto.', ok:false, why:'Escrever bem não prova que a informação está certa. A IA pode inventar leis com aparência convincente.'},
          {t:'Perguntar de novo à própria IA e, se ela repetir o mesmo número, considerar confirmado.', ok:false, why:'Repetir não é confirmar: a IA pode repetir o mesmo erro. A conferência precisa vir de outra fonte.'},
          {t:'Procurar a lei no site oficial e conferir o número e o conteúdo antes de usar.', ok:true, why:'Conferir na fonte oficial é o passo que transforma a pista da IA em informação confiável.'}
        ]}},
    { id:'3.3', title:'Seu plano de 7 dias com IA', min:6,
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
          <p>No fim da semana você terá o seu <b>primeiro manual pessoal de IA</b>. Próximo passo da trilha: o curso "Prompts que Funcionam".</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, o que você aprendeu nesta semana sobre IA.</div>`
      ],
      ch:{ who:'Diego, 33 anos, motorista de aplicativo', says:'Vou dedicar o domingo inteiro a estudar IA, umas 8 horas, e depois deixo de lado.',
        q:'Qual é a melhor estratégia?',
        opts:[
          {t:'Treinar 15 minutos por dia, com tarefas reais do dia a dia, anotando o que funciona.', ok:true, why:'Constância com tarefas reais fixa o aprendizado e faz a IA virar hábito. Os registros mostram o que vale repetir.'},
          {t:'Fazer a maratona de domingo e depois parar.', ok:false, why:'Muita informação de uma vez e depois abandono faz o aprendizado se perder. O hábito diário rende mais.'},
          {t:'Só ler sobre IA, sem testar nada, para evitar erros.', ok:false, why:'Sem prática, o conhecimento não vira habilidade. Errar com tarefas pequenas faz parte do aprendizado.'}
        ]}}
  ]}
];

const MODDONE = {
  1: 'Você já sabe o que a IA é, como ela aprendeu e onde costuma errar. Isso já te coloca à frente de muita gente.',
  2: 'Você já conversou com a IA do jeito certo. Pedir bem é metade do resultado.',
  3: 'Você aprendeu a usar IA protegendo dados e conferindo respostas. É isso que separa quem usa IA de quem usa bem.'
};

const PROMPTS = {
  1: [
    { title:'Explique como se eu tivesse 10 anos', desc:'Para entender qualquer assunto difícil.',
      text:'Explique [ASSUNTO] como se eu tivesse 10 anos. Use uma analogia do dia a dia e termine com 3 perguntas para eu testar se entendi.' }
  ],
  2: [
    { title:'Pedido em 4 partes', desc:'Para transformar um pedido vago em um pedido claro.',
      text:'Você é [PAPEL]. Quero que você [TAREFA]. O contexto é: [QUEM SOU, PARA QUEM É, PARA QUÊ]. Entregue em [FORMATO: tamanho, tom, lista ou texto]. Se faltar informação, me faça até 3 perguntas antes de responder.' }
  ],
  3: [
    { title:'Checagem de resposta', desc:'Para reduzir o risco de erro.',
      text:'Releia sua resposta anterior. Liste o que você tem certeza, o que pode estar desatualizado e o que eu devo conferir em fonte oficial. Não invente fontes: se não souber, diga "não sei".' }
  ]
};

const THEME = { 1:['#22C55E','#14B8A6'], 2:['#14B8A6','#06B6D4'], 3:['#10B981','#22C55E'] };
const LIC = { '1.1':'🤖','1.2':'📚','1.3':'⚖️','2.1':'💬','2.2':'✍️','2.3':'🖼️','3.1':'🔒','3.2':'🔍','3.3':'🗓️' };

return {
  id: 'ia-do-zero',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  dicaPrompts: 'Troque o que está entre [COLCHETES] pelos dados do seu caso e cole em qualquer assistente de IA (ChatGPT, Gemini, Claude...).',
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
