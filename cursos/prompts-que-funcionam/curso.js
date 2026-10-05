/* Curso: Prompts que Funcionam (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🎯', title:'Pedir com clareza', sub:'O que faz um bom pedido', lessons:[
    { id:'1.1', title:'Por que o jeito de pedir muda tudo', min:8,
      body:[
        `<div class="card analogy"><h3>👨‍🍳 A receita para o cozinheiro</h3><p>Se você diz ao cozinheiro "faz algo de comer", pode vir qualquer prato. Se entrega a receita com ingredientes, quantidade e modo de preparo, vem o prato que você queria. A IA é esse cozinheiro: <b>ela só consegue acertar o que você consegue explicar</b>.</p></div>`,
        `<div class="term"><b>Pedido vago</b> = pedido sem detalhes, que deixa a IA adivinhar. <b>Pedido específico</b> = pedido que informa o que, para quem, para quê e como. <b>Ambiguidade</b> = quando o pedido pode ser entendido de mais de um jeito.</div>`,
        `<div class="card"><h3>Clareza vale mais que tamanho</h3><p>Um pedido bom não é o mais comprido, é o que <b>não deixa dúvida</b>. A IA não lê sua mente nem sabe o que você tem em mente: ela completa as lacunas com o que é mais comum. Por isso, pedidos vagos geram respostas "médias".</p>
          <p>Relembre a fórmula do curso IA do Zero: <b>Papel, Tarefa, Contexto e Formato</b>.</p>
          <div class="flows">
            <div class="flow old"><h4>Antes</h4><div class="node">"Me ajuda com meu currículo."</div></div>
            <div class="flow new"><h4>Depois</h4><div class="node good">"Você é um recrutador. Revise meu currículo para vaga de auxiliar administrativo, aponte 3 melhorias e reescreva o resumo profissional em 4 linhas."</div></div>
          </div>
          <p style="margin-top:14px"><b>Teste simples:</b> se um colega recebesse o seu pedido, ele saberia o que fazer sem te perguntar nada?</p></div>`,
        `<div class="card"><h3>🕵️ Caçando a ambiguidade</h3><p>Antes de enviar, procure no seu pedido palavras que cada pessoa entende de um jeito:</p>
          <div class="tw"><table class="tbl"><tr><th>Palavra vaga</th><th>Troque por</th></tr>
          <tr><td>"curto"</td><td>"até 5 linhas" ou "até 80 palavras"</td></tr>
          <tr><td>"profissional"</td><td>"formal, sem gírias, tratando por senhor"</td></tr>
          <tr><td>"bonito", "bom"</td><td>o que exatamente você quer: claro, animado, convincente</td></tr>
          <tr><td>"para o pessoal"</td><td>"para clientes de 40 a 60 anos que compram pelo WhatsApp"</td></tr></table></div>
          <p>Cada troca dessas tira um palpite da IA e coloca uma decisão sua no lugar.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que "faz algo de comer" não funciona tão bem quanto uma receita, e como isso vale para a IA.</div>`
      ],
      ch:[
        { who:'Camila, 31 anos, assistente administrativa', says:'Pedi \'faz um resumo\' e a IA mandou um monte de coisa que não ajudou. O que eu fiz de errado?',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Pedir "um resumo bom" e torcer para a IA acertar desta vez.', ok:false, why:'"Bom" não diz nada para a IA. Sem tamanho, foco e uso do resumo, ela continua adivinhando.'},
            {t:'Dizer o que resumir, para quem é, o tamanho e o que destacar.', ok:true, why:'Com o texto, o público, o tamanho e o foco, a IA deixa de adivinhar e entrega algo útil.'},
            {t:'Colar um texto bem maior para a IA ter mais material.', ok:false, why:'Mais material sem direção não resolve. O problema era a falta de instruções, não de conteúdo.'}
          ]},
        { who:'Jefferson, 29 anos, dono de uma loja de celulares', says:'Pedi "um texto profissional para o Instagram" e veio algo engessado, parecendo comunicado de banco.',
          q:'O que causou o problema?',
          opts:[
            {t:'A palavra "profissional" é ambígua: a IA entendeu formal demais. Faltou dizer o tom desejado, por exemplo "próximo, animado, sem gírias pesadas".', ok:true, why:'Palavras vagas viram palpite. Trocar "profissional" por uma descrição concreta do tom resolve.'},
            {t:'O Instagram não combina com textos feitos por IA.', ok:false, why:'A rede social não é o problema. Com o tom bem descrito, a IA escreve bem para qualquer canal.'},
            {t:'Ele deveria ter escrito o pedido em inglês.', ok:false, why:'O idioma não muda a ambiguidade. O que falta é dizer o tom com clareza.'}
          ]},
        { who:'Rosana, 48 anos, coordenadora de uma escola', says:'Vou mandar para a IA: "faça um comunicado sobre a reunião". Acho que está claro.',
          q:'Aplicando o "teste do colega", o que falta no pedido?',
          opts:[
            {t:'Nada: qualquer colega saberia o que fazer.', ok:false, why:'Um colega perguntaria: para quem, qual reunião, quando, onde e em que tom. Se ele precisaria perguntar, a IA também.'},
            {t:'Só faltou pedir para caprichar.', ok:false, why:'"Capriche" não dá informação nova. O que falta são os dados da reunião e do público.'},
            {t:'Para quem é (pais, professores), data, horário, local, assunto e o tom do comunicado.', ok:true, why:'Essas são as perguntas que um colega faria. Respondê-las no pedido evita um comunicado genérico.'}
          ]}
      ]},
    { id:'1.2', title:'Mostre um exemplo do que você quer', min:8,
      body:[
        `<div class="card analogy"><h3>💇 A foto do corte de cabelo</h3><p>Dizer ao cabeleireiro "quero um corte moderno" é arriscado. Mostrar a foto do corte que você quer elimina a dúvida. Com a IA, <b>um exemplo vale mais que mil explicações</b>.</p></div>`,
        `<div class="term"><b>Exemplo</b> = um modelo do resultado que você espera, escrito por você. <b>Estilo</b> = o jeito de escrever: formal, divertido, curto, técnico. <b>Few-shot</b> = técnica de dar poucos exemplos (1 a 3) dentro do prompt.</div>`,
        `<div class="card"><h3>1 a 3 exemplos já mudam o resultado</h3><p>Quando o texto precisa ter um tom ou formato específico, descreva e mostre:</p>
          <ol class="golden"><li><span>Diga a <b>tarefa</b>.</span></li><li><span>Cole <b>1 a 3 exemplos</b> do que você considera ideal.</span></li><li><span>Peça o novo item <b>no mesmo estilo</b>.</span></li></ol>
          <p><b>Exemplo:</b> "Escreva legendas curtas para minha doceria, no mesmo estilo destes exemplos: 'Hoje tem brigadeiro quentinho 🍫' e 'Sextou com doce na mesa 🎉'. Agora crie 5 para o bolo de cenoura."</p>
          <p>💡 Dica: os exemplos devem ser parecidos entre si e realmente bons, porque a IA copia o padrão, <b>inclusive os defeitos</b>.</p></div>`,
        `<div class="card"><h3>⚠️ Três armadilhas dos exemplos</h3><ol class="golden"><li><span><b>Copiar demais:</b> se você mostra um exemplo sobre bolo de chocolate, a IA pode repetir as mesmas palavras. Peça "mesmo estilo, palavras diferentes".</span></li><li><span><b>Exemplo de outra marca:</b> colar o texto de um concorrente faz a IA imitar a voz dele, não a sua.</span></li><li><span><b>Exemplo sem explicação:</b> diga o que você gosta nele ("frases curtas", "um emoji no fim"), para a IA saber o que copiar e o que não.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que mostrar uma foto ao cabeleireiro funciona melhor do que descrever com palavras, e relacione com dar exemplos à IA.</div>`
      ],
      ch:[
        { who:'Marcos, 28 anos, dono de uma barbearia', says:'Quero que a IA escreva meus posts no mesmo tom engraçado dos que eu já faço. Como eu peço?',
          q:'Qual é o melhor caminho?',
          opts:[
            {t:'Colar 2 ou 3 posts dele de que ele gosta e pedir novos posts no mesmo estilo.', ok:true, why:'Exemplos reais mostram o tom, o tamanho e o jeito de falar. A IA segue o padrão.'},
            {t:'Pedir "posts engraçados" e aceitar o que vier.', ok:false, why:'"Engraçado" é subjetivo. Sem exemplos, a IA usa o humor mais comum, e não o dele.'},
            {t:'Colar 30 posts de qualquer tipo, até de outros assuntos.', ok:false, why:'Exemplos misturados e demais confundem a IA. Poucos exemplos bons e parecidos funcionam melhor.'}
          ]},
        { who:'Viviane, 33 anos, nutricionista', says:'Dei um exemplo de post sobre salada e pedi outros sobre lanches. Vieram todos com as mesmas frases do exemplo, só trocando a comida.',
          q:'Qual ajuste resolve?',
          opts:[
            {t:'Parar de usar exemplos, porque eles sempre atrapalham.', ok:false, why:'Exemplos ajudam muito. O problema foi a IA copiar demais, e isso se corrige com uma instrução.'},
            {t:'Explicar o que copiar ("frases curtas, uma pergunta no início") e pedir "mesmo estilo, palavras e ideias diferentes".', ok:true, why:'Dizer o que você gosta no exemplo e pedir variação faz a IA imitar o estilo sem repetir o conteúdo.'},
            {t:'Colar o mesmo exemplo cinco vezes para a IA entender melhor.', ok:false, why:'Repetir o mesmo exemplo reforça ainda mais a cópia. O que falta é dizer o que manter e o que variar.'}
          ]},
        { who:'André, 41 anos, contador autônomo', says:'Quero lembretes mensais para clientes sobre o prazo do DAS. Vou colar como exemplo o lembrete de um escritório grande que eu achei bonito.',
          q:'Qual é o risco dessa escolha?',
          opts:[
            {t:'Nenhum: quanto mais famoso o exemplo, melhor o resultado.', ok:false, why:'Famoso não quer dizer adequado. A IA vai imitar a voz do outro escritório, não a do André.'},
            {t:'A IA não aceita exemplos de outras empresas.', ok:false, why:'Ela aceita, e é exatamente por isso que vai copiar o estilo do outro.'},
            {t:'Os lembretes vão sair com a voz do outro escritório; melhor usar 1 ou 2 mensagens que ele mesmo já mandou e gostou.', ok:true, why:'Exemplos próprios ensinam a IA a escrever como você fala com os seus clientes.'}
          ]}
      ]},
    { id:'1.3', title:'Limites e formato: o que fazer e o que evitar', min:8,
      body:[
        `<div class="card analogy"><h3>📐 O briefing do arquiteto</h3><p>Quem contrata um arquiteto diz o tamanho do terreno, o orçamento e o que não quer na casa. Sem limites, sai um projeto bonito e impossível de construir. Com a IA, <b>limites e formato evitam respostas fora do que você precisa</b>.</p></div>`,
        `<div class="term"><b>Restrição</b> = regra que limita a resposta, como tamanho, linguagem ou o que evitar. <b>Formato</b> = como a resposta vem organizada: lista, tabela, passos, e-mail. <b>Tom</b> = jeito de falar: formal, amigável, direto.</div>`,
        `<div class="card"><h3>Diga também o que NÃO quer</h3><p>Acrescente ao pedido:</p>
          <div class="tw"><table class="tbl"><tr><th>O quê</th><th>Exemplo</th></tr>
          <tr><td><b>Tamanho</b></td><td>"até 100 palavras"</td></tr>
          <tr><td><b>Tom</b></td><td>"amigável, sem gírias"</td></tr>
          <tr><td><b>Formato</b></td><td>"em tabela com 3 colunas"</td></tr>
          <tr><td><b>Proibições</b></td><td>"sem termos técnicos", "não invente números"</td></tr></table></div>
          <div class="flows">
            <div class="flow old"><h4>Antes</h4><div class="node">"Explique o que é MEI."</div></div>
            <div class="flow new"><h4>Depois</h4><div class="node good">"Explique o que é MEI em até 6 linhas, em linguagem simples, sem termos jurídicos, e termine com uma lista de 3 dúvidas comuns."</div></div>
          </div>
          <p style="margin-top:14px">⚠️ Cuidado: muitas regras que se contradizem confundem. Prefira poucas, claras e fáceis de conferir.</p></div>`,
        `<div class="card"><h3>📦 Escolha o formato pelo uso</h3><p>Pense onde a resposta vai parar e peça o formato que já serve ali:</p><ol class="golden"><li><span>Vai para o <b>WhatsApp</b>? Peça mensagem curta, parágrafos de 1 a 2 linhas.</span></li><li><span>Vai para uma <b>planilha</b>? Peça tabela com colunas nomeadas.</span></li><li><span>Vai virar <b>tarefa</b>? Peça passos numerados com verbo no início.</span></li><li><span>Vai ser <b>falado</b> numa reunião? Peça tópicos curtos para você explicar com suas palavras.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um arquiteto precisa saber o orçamento antes de desenhar, e como isso se parece com dar limites à IA.</div>`
      ],
      ch:[
        { who:'Fabiana, 36 anos, professora do ensino fundamental', says:'Pedi um texto sobre o ciclo da água e veio um artigo enorme e cheio de palavras difíceis para meus alunos de 8 anos.',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Pedir de novo o mesmo texto, esperando que a IA acerte a idade dos alunos.', ok:false, why:'Sem dizer a idade e o tamanho, a IA continuará adivinhando.'},
            {t:'Reclamar com a IA e mudar de ferramenta.', ok:false, why:'O problema está no pedido, não na ferramenta. Qualquer IA entrega o mesmo sem limites claros.'},
            {t:'Informar o público, o tamanho e o tom, por exemplo: "texto para crianças de 8 anos, até 120 palavras, linguagem simples, com uma comparação do dia a dia".', ok:true, why:'Público, tamanho e tom dão à IA os limites de que ela precisa para acertar.'}
          ]},
        { who:'Leandro, 38 anos, gerente de uma loja de material de construção', says:'Pedi a lista de produtos mais vendidos para levar à reunião e a IA me mandou três parágrafos corridos. Tive que reorganizar tudo na mão.',
          q:'O que ele deveria ter pedido?',
          opts:[
            {t:'Um texto mais bonito e bem escrito.', ok:false, why:'O problema não era a escrita, e sim o formato que não servia para o uso dele.'},
            {t:'O formato certo para o uso: "tabela com colunas produto, quantidade e observação" ou "tópicos curtos para apresentar".', ok:true, why:'Pedir o formato de acordo com onde a resposta vai ser usada economiza o retrabalho.'},
            {t:'Nada: reorganizar à mão é parte do trabalho com IA.', ok:false, why:'Dá para evitar esse retrabalho pedindo o formato desde o início.'}
          ]},
        { who:'Mirela, 27 anos, assistente de marketing', says:'Coloquei no pedido: "texto bem detalhado, mas com no máximo 3 linhas, formal e descontraído ao mesmo tempo". A IA se enrolou toda.',
          q:'Por que a resposta saiu confusa?',
          opts:[
            {t:'As regras se contradizem: detalhado em 3 linhas e formal ao mesmo tempo que descontraído. É preciso escolher prioridades.', ok:true, why:'Restrições contraditórias forçam a IA a escolher sozinha. Poucas regras claras e compatíveis funcionam melhor.'},
            {t:'A IA não entende pedidos com mais de uma regra.', ok:false, why:'Ela lida bem com várias regras, desde que não briguem entre si.'},
            {t:'Faltaram ainda mais regras para equilibrar.', ok:false, why:'Mais regras pioram a confusão. O caminho é remover as contradições.'}
          ]}
      ]},
    { id:'1.4', title:'Papel e público: quem fala e quem lê', min:8,
      body:[
        `<div class="card analogy"><h3>🎙️ O mesmo assunto, três palestrantes</h3><p>Imagine o tema "como economizar na conta de luz" explicado por um engenheiro para outros engenheiros, por uma professora para crianças e por um vendedor para clientes. O assunto é o mesmo, mas o vocabulário, os exemplos e o tamanho mudam. <b>Definir quem fala e quem lê</b> muda tudo na resposta da IA.</p></div>`,
        `<div class="term"><b>Papel</b> = a "função" que você pede para a IA assumir, como professor, revisor ou atendente. <b>Público</b> = quem vai ler ou ouvir o resultado. <b>Nível</b> = o quanto o público já sabe do assunto.</div>`,
        `<div class="card"><h3>Combine papel com público</h3>
          <div class="tw"><table class="tbl"><tr><th>Papel</th><th>Público</th><th>Resultado esperado</th></tr>
          <tr><td>Professor paciente</td><td>Adulto que nunca estudou o tema</td><td>Explicação com exemplos do cotidiano</td></tr>
          <tr><td>Revisor exigente</td><td>Você mesmo</td><td>Lista de problemas do seu texto</td></tr>
          <tr><td>Atendente simpático</td><td>Cliente irritado</td><td>Resposta calma e com solução</td></tr></table></div>
          <p>O papel define o <b>jeito de pensar</b>; o público define o <b>jeito de falar</b>. Um sem o outro deixa a resposta pela metade.</p></div>`,
        `<div class="card"><h3>🚫 Erros comuns com papéis</h3><ol class="golden"><li><span><b>Papel exagerado</b>: "você é o maior especialista do mundo" não deixa a IA mais correta. Um papel simples e claro basta.</span></li><li><span><b>Esquecer o público</b>: "você é um advogado" sem dizer quem lê gera texto cheio de juridiquês.</span></li><li><span><b>Achar que o papel dá garantia</b>: pedir "você é médico" não transforma a resposta em consulta médica. A conferência continua sendo sua.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a professora fala de um jeito com a turma e de outro jeito na reunião com os pais.</div>`
      ],
      ch:[
        { who:'Cristiane, 44 anos, agente comunitária de saúde', says:'Pedi para a IA explicar a importância da vacina para as famílias que eu visito, e veio um texto cheio de termos técnicos.',
          q:'Qual ajuste mais ajuda?',
          opts:[
            {t:'Pedir para a IA agir como "o maior cientista do mundo".', ok:false, why:'Um papel mais "importante" tende a deixar o texto ainda mais técnico. O que falta é o público.'},
            {t:'Definir papel e público: "você é uma agente de saúde conversando com famílias que têm pouco tempo de estudo; use palavras simples e um exemplo do dia a dia".', ok:true, why:'Papel e público juntos ajustam o vocabulário e os exemplos ao jeito de falar com aquelas famílias.'},
            {t:'Copiar o texto técnico e ler para as famílias como está.', ok:false, why:'Texto que o público não entende não cumpre o objetivo, por melhor que seja.'}
          ]},
        { who:'Ricardo, 35 anos, analista de compras', says:'Escrevi um e-mail importante para um fornecedor e quero que a IA aponte o que pode dar errado nele.',
          q:'Qual papel faz mais sentido pedir?',
          opts:[
            {t:'"Você é um revisor exigente. Aponte trechos ambíguos, riscos de mal-entendido e o que falta no e-mail."', ok:true, why:'O papel de revisor exigente direciona a IA para criticar, que é o que ele precisa, em vez de só elogiar ou reescrever.'},
            {t:'"Você é meu amigo. Diga se o e-mail ficou legal."', ok:false, why:'Um papel de amigo tende a respostas gentis e vagas. Ele precisa de crítica específica.'},
            {t:'Nenhum papel: papéis nunca fazem diferença.', ok:false, why:'O papel muda o foco da resposta. Para revisar, pedir um revisor crítico ajuda bastante.'}
          ]},
        { who:'Gisele, 30 anos, mãe de um menino de 9 anos', says:'Pedi: "você é um médico, diga se a mancha na pele do meu filho é grave". A IA respondeu com toda a calma.',
          q:'O que Gisele precisa entender sobre papéis?',
          opts:[
            {t:'Que, se a IA respondeu como médica, já vale como consulta.', ok:false, why:'O papel muda o jeito de escrever, não dá formação nem exame à IA. Não substitui consulta.'},
            {t:'Que ela deveria ter pedido "o melhor médico do mundo" para ter certeza.', ok:false, why:'Um papel mais pomposo não torna a resposta mais segura. Continua sendo uma IA sem examinar a criança.'},
            {t:'Que o papel não dá garantia: a IA pode ajudar a organizar perguntas para o pediatra, mas a avaliação é de um profissional.', ok:true, why:'Em saúde, a IA pode apoiar a preparação para a consulta, mas a resposta segura vem de quem examina.'}
          ]}
      ]},
    { id:'1.5', title:'Diga para que serve a resposta', min:8,
      body:[
        `<div class="card analogy"><h3>🧭 O taxista que sabe o motivo da viagem</h3><p>Se você diz ao taxista "me leve ao centro", ele escolhe qualquer caminho. Se diz "tenho uma entrevista às 9h no centro e não posso me atrasar", ele evita o trânsito e te deixa na porta certa. Contar <b>para que você precisa da resposta</b> faz a IA escolher o melhor caminho.</p></div>`,
        `<div class="term"><b>Finalidade</b> = o uso que você vai dar à resposta. <b>Critério de sucesso</b> = como você vai saber que a resposta serviu. <b>Próximo passo</b> = o que você fará com o resultado logo depois.</div>`,
        `<div class="card"><h3>A mesma tarefa, finalidades diferentes</h3>
          <div class="tw"><table class="tbl"><tr><th>Pedido</th><th>Finalidade informada</th><th>O que muda na resposta</th></tr>
          <tr><td>Resumo de um artigo</td><td>Vou estudar para uma prova</td><td>Conceitos e definições em destaque</td></tr>
          <tr><td>Resumo de um artigo</td><td>Vou comentar numa reunião de 5 minutos</td><td>3 pontos principais e uma opinião para discutir</td></tr>
          <tr><td>Resumo de um artigo</td><td>Vou decidir se vale ler inteiro</td><td>Do que trata, para quem serve e o que traz de novo</td></tr></table></div>
          <p>Sem a finalidade, a IA entrega o resumo "médio", que não serve muito bem a nenhum dos três casos.</p></div>`,
        `<div class="card"><h3>🎯 Diga também como vai saber que deu certo</h3><p>Além do "para quê", ajuda contar o <b>critério de sucesso</b>: "quero que o cliente responda marcando o horário", "quero que minha mãe consiga seguir sozinha", "quero caber num slide". Esses critérios orientam a IA e servem para você conferir a resposta depois. Um erro comum é esconder a finalidade por achar que "não é da conta" da IA. Não se trata de contar segredos: basta dizer o uso, sem dados pessoais. Outra dica: se a finalidade mudar no meio da conversa, avise, senão a IA continua otimizando para o objetivo antigo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que contar ao taxista que você está atrasado muda o caminho que ele escolhe.</div>`
      ],
      ch:[
        { who:'Daniel, 30 anos, técnico de enfermagem', says:'Pedi um resumo de um protocolo e veio algo longo, cheio de história do assunto. Eu só precisava revisar os passos antes do plantão.',
          q:'O que faltou dizer?',
          opts:[
            {t:'A finalidade: revisar os passos antes do plantão, em lista curta, para conferir com o protocolo oficial.', ok:true, why:'Com a finalidade, a IA foca nos passos e corta o que não serve para aquele uso.'},
            {t:'Que o resumo precisa ser bonito.', ok:false, why:'Beleza não era o problema. A IA não sabia o uso que ele daria ao resumo.'},
            {t:'Nada: resumos sempre começam pela história do assunto.', ok:false, why:'Não precisam. O conteúdo do resumo depende da finalidade.'}
          ]},
        { who:'Sabrina, 37 anos, dona de uma loja de artesanato', says:'Pedi à IA uma mensagem para clientes antigos. Ficou bonita, mas ninguém respondeu.',
          q:'Qual critério de sucesso ajudaria a IA?',
          opts:[
            {t:'"Quero uma mensagem com muitos emojis."', ok:false, why:'Emojis podem ajudar no tom, mas não dizem qual resultado ela espera do cliente.'},
            {t:'"Quero uma mensagem mais longa."', ok:false, why:'Tamanho não é critério de sucesso. Mensagens longas costumam ter menos respostas.'},
            {t:'"Quero que o cliente responda dizendo qual peça nova quer ver, então termine com uma pergunta simples."', ok:true, why:'Dizer o resultado esperado faz a IA construir a mensagem para provocar a resposta.'}
          ]},
        { who:'Flávio, 44 anos, vendedor de autopeças', says:'Comecei pedindo à IA um texto para o site e, no meio da conversa, decidi usar no WhatsApp. O texto continuou longo e formal.',
          q:'O que ele deveria ter feito?',
          opts:[
            {t:'Avisar que a finalidade mudou: agora é mensagem de WhatsApp, curta e direta.', ok:true, why:'Se o uso muda e você não avisa, a IA continua otimizando para o objetivo antigo.'},
            {t:'Esperar que a IA percebesse sozinha.', ok:false, why:'A IA não tem como saber da mudança se ele não contar.'},
            {t:'Usar o texto do site no WhatsApp assim mesmo.', ok:false, why:'Texto longo e formal não combina com o canal e tende a ser ignorado.'}
          ]}
      ]},
    { id:'1.6', title:'Projeto: reescrevendo 3 pedidos meus', min:35,
      body:[`<div class="card"><p>Você vai pegar pedidos que já fez (ou faria) à IA e transformá-los em pedidos claros, usando tudo do módulo: clareza, exemplos, limites, formato, papel e público. O valor está em comparar o antes e o depois com a resposta real da IA.</p></div>`],
      projeto:{
        entrega:'Três pedidos reais seus em versão "antes" e "depois", com o que mudou e como a resposta da IA melhorou.',
        passos:[
          'Escolha 3 pedidos reais (de trabalho, estudo ou casa) que você fez de forma vaga.',
          'Reescreva cada um com papel, público, tarefa, contexto, formato, finalidade, critério de sucesso e pelo menos 1 limite.',
          'Em pelo menos 1 deles, inclua um exemplo seu do resultado esperado.',
          'Teste as duas versões na IA e compare as respostas.',
          'Anote, para cada pedido, a mudança que mais fez diferença.'
        ],
        checklist:[
          'Os 3 pedidos são reais, não exemplos do curso.',
          'Cada versão "depois" tem papel, público, formato, finalidade e pelo menos 1 limite.',
          'Pelo menos 1 pedido usa exemplo próprio.',
          'Comparei as respostas usando o critério de sucesso e expliquei o que melhorou.'
        ],
        minimo:400
      }}
  ]},
  { id:2, icon:'🔁', title:'Refinar e raciocinar', sub:'Melhorando as respostas', lessons:[
    { id:'2.1', title:'Conversar para melhorar', min:8,
      body:[
        `<div class="card analogy"><h3>✏️ O editor que lapida o texto</h3><p>Um bom texto raramente sai pronto de primeira. O escritor entrega o rascunho e o editor pede ajustes: "corta aqui", "explica melhor ali". <b>A conversa com a IA é essa lapidação.</b></p></div>`,
        `<div class="term"><b>Iteração</b> = melhorar a resposta em rodadas, pedindo ajustes. <b>Feedback</b> = o que você diz sobre o que gostou e o que quer mudar. <b>Versão</b> = cada resposta que a IA entrega ao longo da conversa.</div>`,
        `<div class="card"><h3>Ajuste específico vence "refaz"</h3><p>Em vez de "não gostei, refaz", diga o que mudar: "mantenha a introdução, encurte o segundo parágrafo e troque o tom por mais direto".</p>
          <p>Boas frases de refinamento:</p>
          <ol class="golden"><li><span>"Mais curto e mais simples."</span></li><li><span>"Dê 3 versões diferentes."</span></li><li><span>"O que está faltando nesta resposta?"</span></li><li><span>"Mantenha X e mude só Y."</span></li></ol>
          <p>Peça 3 versões e escolha a melhor: é mais rápido do que tentar acertar de primeira.</p>
          <p>⚠️ Atenção: em conversas muito longas a IA pode perder detalhes do início, então reforce o que for importante.</p></div>`,
        `<div class="card"><h3>🧭 O feedback em 3 partes</h3><div class="flows">
            <div class="flow old"><h4>Feedback vago</h4><div class="node">"Ficou ruim, melhora."</div></div>
            <div class="flow new"><h4>Feedback útil</h4><div class="node good">"Gostei da abertura (manter). O meio está longo (cortar pela metade). O final está frio (deixar mais acolhedor)."</div></div>
          </div><p style="margin-top:14px">Diga <b>o que manter</b>, <b>o que mudar</b> e <b>como deve ficar</b>. É o mesmo feedback que você daria a um colega de trabalho.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um escritor mostra o rascunho a um editor antes de publicar, e como isso se parece com conversar com a IA.</div>`
      ],
      ch:[
        { who:'Eduardo, 40 anos, corretor de imóveis', says:'A IA escreveu o anúncio do apartamento, mas ficou formal demais. Já escrevi \'refaz\' três vezes e nada melhora.',
          q:'O que fazer?',
          opts:[
            {t:'Continuar escrevendo "refaz" até a IA acertar sozinha.', ok:false, why:'"Refaz" não diz o que mudar, então a IA só gera variações parecidas.'},
            {t:'Dizer o que mudar: "mantenha as informações, deixe o tom mais leve e curto, com no máximo 5 linhas".', ok:true, why:'Um ajuste específico mostra à IA exatamente o que corrigir e o que preservar.'},
            {t:'Apagar tudo e escrever o anúncio sozinho, porque a IA não serve.', ok:false, why:'A IA serve, e já entregou um bom rascunho. O que faltou foi orientar o ajuste.'}
          ]},
        { who:'Tatiane, 26 anos, atendente de uma ótica', says:'A IA escreveu uma mensagem para clientes com óculos prontos. O começo ficou ótimo, mas o resto está comprido.',
          q:'Qual é o melhor feedback?',
          opts:[
            {t:'"Não gostei, faz outra."', ok:false, why:'Pedir outra do zero pode perder justamente o começo que estava bom.'},
            {t:'"Mantenha a primeira frase, resuma o resto em 2 linhas e termine convidando para retirar na loja."', ok:true, why:'Feedback com o que manter, o que mudar e como deve ficar leva a IA direto ao resultado.'},
            {t:'"Melhore."', ok:false, why:'"Melhore" não diz o que está errado. A IA vai mudar coisas aleatórias.'}
          ]},
        { who:'Osvaldo, 57 anos, síndico', says:'Faz uma hora que estou ajustando o comunicado do condomínio na mesma conversa. Agora a IA esqueceu que a reunião era no salão de festas.',
          q:'O que ajuda nessa situação?',
          opts:[
            {t:'Reforçar as informações importantes ou abrir uma nova conversa com um resumo curto do que precisa constar.', ok:true, why:'Em conversas longas a IA pode perder detalhes do início. Reforçar ou recomeçar com um resumo devolve o controle.'},
            {t:'Continuar ajustando sem mencionar o local, a IA vai lembrar sozinha.', ok:false, why:'Se ela já esqueceu, dificilmente vai lembrar sem você reforçar.'},
            {t:'Concluir que a IA não serve para textos longos.', ok:false, why:'Serve, sim. Basta organizar a conversa e reforçar o que é importante.'}
          ]}
      ]},
    { id:'2.2', title:'Quebrar tarefas grandes em passos', min:8,
      body:[
        `<div class="card analogy"><h3>🪛 Montar um móvel seguindo o manual</h3><p>Ninguém monta um guarda-roupa de uma vez só: o manual divide em etapas, e cada uma só começa quando a anterior termina. <b>Tarefas grandes para a IA funcionam igual.</b></p></div>`,
        `<div class="term"><b>Decomposição</b> = dividir uma tarefa grande em partes menores. <b>Etapa</b> = um passo da tarefa, com começo e fim. <b>Plano</b> = a lista de etapas na ordem em que serão feitas.</div>`,
        `<div class="card"><h3>Peça o plano antes do resultado</h3><p>Pedido grande e único gera resposta rasa: "Crie um plano de negócios completo." Melhor:</p>
          <ol class="golden"><li><span>"Liste as etapas para montar um plano de negócios simples."</span></li><li><span>"Vamos fazer a etapa 1: descrição do produto."</span></li><li><span>Revise e siga para a etapa 2.</span></li></ol>
          <div class="pipe"><div class="node ink">Plano</div><div class="ar">➜</div><div class="node ink">Etapa 1</div><div class="ar">➜</div><div class="node yel">Revisão</div><div class="ar">➜</div><div class="node ink">Etapa 2</div><div class="ar">➜</div><div class="node ink">...</div></div>
          <p>Também ajuda dizer "vá passo a passo e explique o raciocínio de cada etapa", porque isso facilita você conferir onde a IA errou.</p>
          <p><b>Regra prática:</b> se o resultado final tem mais de uma página ou mais de um objetivo, divida.</p></div>`,
        `<div class="card"><h3>🔍 Por que pedir o raciocínio ajuda</h3><p>Quando a IA mostra os passos de uma conta ou de uma decisão, você consegue ver <b>onde</b> ela errou, em vez de receber só um resultado final que parece certo. Exemplo: ao calcular o preço de um bolo, peça "mostre o custo de cada ingrediente, depois a soma, depois a margem". Se o custo do ovo estiver errado, você corrige só aquele passo. E continue conferindo as contas com calculadora ou planilha.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que se monta um móvel por etapas, e conte como dividir uma tarefa grande ajuda a IA.</div>`
      ],
      ch:[
        { who:'Patrícia, 34 anos, empreendedora de doces', says:'Pedi à IA um plano de marketing completo para o ano todo em um só pedido e veio algo genérico e raso.',
          q:'Qual é a melhor estratégia?',
          opts:[
            {t:'Repetir o mesmo pedido, só que escrito em letras maiúsculas para a IA se esforçar mais.', ok:false, why:'Letras maiúsculas não mudam a qualidade. O pedido continua grande demais e sem direção.'},
            {t:'Pedir um plano de 12 meses de uma vez, mas com mais palavras bonitas.', ok:false, why:'Mais palavras não resolvem. O problema é o tamanho da tarefa, não o vocabulário.'},
            {t:'Pedir primeiro as etapas do plano e depois fazer uma etapa por vez, revisando cada uma.', ok:true, why:'Dividir deixa cada parte mais completa e permite corrigir o rumo antes de avançar.'}
          ]},
        { who:'Denise, 39 anos, dona de um ateliê de costura', says:'A IA calculou o preço de um vestido e deu um valor final que me pareceu baixo, mas não sei onde está o erro.',
          q:'Como Denise pode descobrir o problema?',
          opts:[
            {t:'Aceitar o valor, porque a IA calcula melhor que ela.', ok:false, why:'A IA pode errar contas. Um valor estranho merece investigação, não aceitação.'},
            {t:'Pedir que a IA mostre o cálculo passo a passo (tecido, aviamentos, horas de trabalho, margem) e conferir cada parte na calculadora.', ok:true, why:'Com o raciocínio exposto, ela encontra o passo errado, por exemplo horas de trabalho esquecidas, e corrige só ele.'},
            {t:'Pedir um valor mais alto sem entender por quê.', ok:false, why:'Chutar outro valor não resolve. Ela precisa saber de onde vem o preço para defender o valor com o cliente.'}
          ]},
        { who:'Fábio, 31 anos, organizando um curso online gratuito para a igreja', says:'Quero que a IA monte o curso inteiro: módulos, aulas, textos, exercícios e divulgação. Tudo num pedido só.',
          q:'Qual é o primeiro passo mais inteligente?',
          opts:[
            {t:'Pedir primeiro só a estrutura (módulos e aulas), revisar e depois desenvolver uma aula por vez.', ok:true, why:'Começar pelo plano permite ajustar o rumo cedo. Cada aula desenvolvida depois sai mais completa.'},
            {t:'Fazer o pedido único e corrigir tudo no final.', ok:false, why:'Um pedido gigante gera tudo raso, e corrigir no final dá muito mais trabalho.'},
            {t:'Começar pela divulgação, antes de saber o conteúdo.', ok:false, why:'Divulgar antes de ter a estrutura inverte a ordem e pode prometer o que o curso não terá.'}
          ]}
      ]},
    { id:'2.3', title:'Deixe a IA te entrevistar', min:8,
      body:[
        `<div class="card analogy"><h3>🩺 O médico que pergunta antes de receitar</h3><p>Um bom médico não receita assim que você entra: pergunta há quanto tempo, onde dói, se tem alergia. Você também pode <b>pedir que a IA faça perguntas antes de responder</b>.</p></div>`,
        `<div class="term"><b>Pergunta de esclarecimento</b> = pergunta que a IA faz para entender melhor o seu pedido. <b>Briefing</b> = conjunto de informações que orienta um trabalho. <b>Lacuna</b> = informação que está faltando no pedido.</div>`,
        `<div class="card"><h3>Quando você não sabe o que pedir</h3><p>Se o assunto é novo ou você não sabe que detalhes importam, peça à IA que, <b>antes de responder</b>, faça algumas perguntas sobre o que ela precisa saber e espere suas respostas. Escreva esse pedido com as suas palavras.</p>
          <p>Depois responda e peça o resultado final. Isso funciona para planejar uma viagem, montar um cardápio, escrever uma carta ou estruturar um projeto.</p>
          <p>Responda com honestidade, e se não souber alguma resposta, diga "não sei" e peça sugestões.</p></div>`,
        `<div class="card"><h3>🎛️ Controlando a entrevista</h3><ol class="golden"><li><span><b>Limite o número</b> de perguntas (por exemplo, até 5), senão vira questionário sem fim.</span></li><li><span><b>Peça uma de cada vez</b> se o assunto for delicado ou você quiser pensar com calma.</span></li><li><span><b>Peça sugestões de resposta</b> quando não souber: "me dê 3 opções para eu escolher".</span></li><li><span><b>Revise o resumo</b>: antes do resultado, peça que a IA resuma o que entendeu, para você corrigir.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o médico faz perguntas antes de dar o remédio, e como a IA também pode fazer perguntas para ajudar melhor.</div>`
      ],
      ch:[
        { who:'Lúcia, 52 anos, quer abrir uma pequena confeitaria', says:'Nem sei o que perguntar à IA sobre abrir meu negócio. Não sei nem por onde começar.',
          q:'Qual é o melhor primeiro pedido?',
          opts:[
            {t:'"Me faça até 5 perguntas sobre meu projeto e, só depois das minhas respostas, monte um primeiro passo a passo."', ok:true, why:'Deixar a IA conduzir com perguntas descobre o que você não sabia que precisava informar.'},
            {t:'"Me conte tudo sobre confeitaria."', ok:false, why:'Pedido amplo demais: a resposta será longa e genérica, sem ligação com a situação dela.'},
            {t:'Desistir até aprender sobre o assunto em outro lugar.', ok:false, why:'A IA justamente ajuda a descobrir o caminho. Pedir que ela pergunte é uma ótima forma de começar.'}
          ]},
        { who:'Wagner, 45 anos, planejando a primeira viagem de avião da família', says:'Pedi para a IA me entrevistar e ela mandou 25 perguntas de uma vez. Desanimei.',
          q:'Como ajustar a entrevista?',
          opts:[
            {t:'Responder as 25 de qualquer jeito para acabar logo.', ok:false, why:'Respostas apressadas geram um plano ruim. Melhor ajustar o tamanho da entrevista.'},
            {t:'Desistir da técnica, porque ela não funciona.', ok:false, why:'A técnica funciona; só faltou um limite de perguntas.'},
            {t:'Pedir que ela escolha as 5 perguntas mais importantes e faça uma de cada vez.', ok:true, why:'Limitar e espaçar as perguntas mantém o foco no essencial e deixa a conversa leve.'}
          ]},
        { who:'Joana, 34 anos, vai escrever uma carta de recomendação para uma ex-funcionária', says:'A IA me entrevistou, eu respondi tudo, mas tenho medo de que ela tenha entendido algo errado antes de escrever.',
          q:'Qual passo evita esse problema?',
          opts:[
            {t:'Pedir que a IA resuma o que entendeu das respostas antes de escrever a carta, para Joana corrigir.', ok:true, why:'O resumo funciona como conferência do briefing: erros aparecem antes de virarem texto.'},
            {t:'Mandar a carta sem ler, porque ela já respondeu as perguntas.', ok:false, why:'Responder não garante que a IA entendeu certo. Ler e conferir continua sendo essencial.'},
            {t:'Repetir todas as respostas de novo, em letras maiúsculas.', ok:false, why:'Repetir tudo não mostra o que a IA entendeu. O resumo dela é que revela os mal-entendidos.'}
          ]}
      ]},
    { id:'2.4', title:'Peça para a IA revisar a própria resposta', min:8,
      body:[
        `<div class="card analogy"><h3>🔁 Reler a prova antes de entregar</h3><p>Todo professor recomenda: termine a prova e releia antes de entregar. Muitos erros aparecem na segunda leitura. Com a IA dá para fazer o mesmo: depois da primeira resposta, <b>peça que ela critique e melhore o que escreveu</b>.</p></div>`,
        `<div class="term"><b>Autocrítica</b> = pedir que a IA aponte falhas na própria resposta. <b>Critério</b> = regra usada para avaliar, como clareza, tamanho ou correção. <b>Checklist</b> = lista de itens que a resposta precisa cumprir.</div>`,
        `<div class="card"><h3>Três jeitos de pedir revisão</h3>
          <ol class="golden"><li><span><b>Fraquezas</b>: peça que ela aponte os pontos fracos da resposta, como um avaliador exigente faria.</span></li><li><span><b>Checklist</b>: liste seus critérios (até 80 palavras, tom amigável, com chamada para ação) e peça que ela confira item por item e corrija o que faltar.</span></li><li><span><b>Ponto de vista do leitor</b>: peça que ela leia como o cliente leria e diga o que ficou confuso.</span></li></ol>
          <div class="pipe"><div class="node ink">1ª resposta</div><div class="ar">➜</div><div class="node yel">Crítica</div><div class="ar">➜</div><div class="node ink">Versão melhorada</div><div class="ar">➜</div><div class="node yel">Sua conferência</div></div></div>`,
        `<div class="card"><h3>⚠️ O limite da autocrítica</h3><p>A autocrítica melhora <b>clareza, tom e formato</b>. Mas, se a IA inventou um dado, ela pode "confirmar" o próprio erro com toda a calma. Para fatos, números, leis e datas, a conferência continua sendo em fonte externa. Use a revisão da IA como um segundo olhar sobre o texto, não como prova de que a informação é verdadeira.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que reler a prova ajuda a achar erros, e por que mesmo assim a professora corrige depois.</div>`
      ],
      ch:[
        { who:'Sueli, 50 anos, dona de uma pousada em Paraty', says:'A IA escreveu a descrição da pousada para o site. Está boa, mas sinto que dá para melhorar e não sei o quê.',
          q:'Qual pedido de revisão mais ajuda?',
          opts:[
            {t:'Pedir que a IA leia como um turista que nunca foi a Paraty e aponte o que ficou confuso ou faltou para ele decidir reservar.', ok:true, why:'O ponto de vista do leitor revela lacunas que quem escreve não vê, como preço, localização ou café da manhã.'},
            {t:'Perguntar "está bom?" e aceitar o "sim".', ok:false, why:'Uma pergunta assim costuma receber uma resposta gentil e vaga. Ela não ajuda a melhorar.'},
            {t:'Pedir a mesma descrição de novo, sem dizer nada.', ok:false, why:'Uma nova versão sem critério pode ser só diferente, não melhor.'}
          ]},
        { who:'Caio, 28 anos, analista de marketing', says:'Tenho regras fixas para posts: até 60 palavras, um emoji, chamada para o link na bio. A IA sempre esquece alguma.',
          q:'Qual técnica resolve melhor?',
          opts:[
            {t:'Desistir das regras, porque a IA não consegue segui-las.', ok:false, why:'Ela consegue, principalmente quando confere as regras de forma explícita.'},
            {t:'Pedir que a IA confira o post contra a checklist das 3 regras, item por item, e corrija o que faltar.', ok:true, why:'A checklist transforma regras soltas em conferência objetiva, e a IA corrige o que escapou.'},
            {t:'Escrever as regras só uma vez no primeiro dia e nunca mais lembrar.', ok:false, why:'Em conversas longas ou novas, a IA pode esquecer. Conferir com a checklist evita o problema.'}
          ]},
        { who:'Marta, 42 anos, assistente jurídica', says:'A IA citou um artigo de lei. Pedi para ela revisar a resposta e ela disse que estava tudo correto. Então posso usar?',
          q:'Qual é a conclusão correta?',
          opts:[
            {t:'Sim: se a IA revisou e confirmou, está garantido.', ok:false, why:'A IA pode confirmar o próprio erro. A revisão interna não verifica fatos.'},
            {t:'Sim, desde que ela peça a revisão três vezes seguidas.', ok:false, why:'Repetir a revisão não traz uma fonte nova. O erro pode se repetir três vezes.'},
            {t:'Não: a autocrítica ajuda no texto, mas o artigo de lei precisa ser conferido no site oficial.', ok:true, why:'Fatos e leis exigem fonte externa. A revisão da IA serve para clareza e formato, não como prova.'}
          ]}
      ]},
    { id:'2.5', title:'Peça opções e escolha com critério', min:8,
      body:[
        `<div class="card analogy"><h3>🔀 Provar antes de escolher o sabor</h3><p>Na sorveteria, você prova dois ou três sabores antes de decidir. Escolher entre opções é mais fácil do que imaginar o sabor perfeito do nada. Com a IA, <b>pedir alternativas e comparar</b> costuma dar resultado melhor do que esperar a resposta ideal de primeira.</p></div>`,
        `<div class="term"><b>Alternativas</b> = versões diferentes para o mesmo objetivo. <b>Critério de escolha</b> = o que você vai usar para decidir, como clareza, custo ou tom. <b>Combinação</b> = juntar o melhor de duas ou mais versões.</div>`,
        `<div class="card"><h3>Como pedir opções que valem a pena</h3>
          <ol class="golden"><li><span>Peça <b>3 opções realmente diferentes</b>, não três variações da mesma ideia: por exemplo, uma direta, uma emocional e uma divertida.</span></li><li><span>Diga seus <b>critérios</b> e peça uma tabela comparando as opções por eles.</span></li><li><span><b>Escolha você</b>, ou peça para combinar partes ("a abertura da 1 com o final da 3").</span></li><li><span>Refine a escolhida com feedback específico.</span></li></ol>
          <div class="pipe"><div class="node ink">3 opções</div><div class="ar">➜</div><div class="node yel">Critérios</div><div class="ar">➜</div><div class="node ink">Escolha ou combinação</div><div class="ar">➜</div><div class="node ink">Refinamento</div></div></div>`,
        `<div class="card"><h3>⚠️ Armadilhas</h3><p>Pedir opções demais (20 nomes, 15 títulos) cansa e dificulta a decisão; de 3 a 5 costuma bastar. Outra armadilha é deixar a IA decidir sozinha qual é a melhor: ela não conhece seus clientes, seu bolso nem seu gosto. Use a comparação dela como apoio e decida com base no que você sabe. Para decisões com dinheiro envolvido, confira preços e condições reais antes de escolher.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que é mais fácil escolher entre três camisetas do que desenhar a camiseta perfeita.</div>`
      ],
      ch:[
        { who:'Thaís, 29 anos, vai abrir uma loja de bolsas online', says:'Pedi um nome para a loja e a IA deu um só. Não gostei, pedi outro, também não. Já são dez rodadas.',
          q:'Qual estratégia economiza tempo?',
          opts:[
            {t:'Pedir 5 nomes de estilos diferentes, dizer seus critérios (fácil de falar, combina com o público, sem nome de outra marca) e comparar.', ok:true, why:'Várias opções com critérios claros aceleram a escolha e mostram à IA o que funciona para ela.'},
            {t:'Continuar pedindo um nome por vez até gostar.', ok:false, why:'Uma opção por rodada é lento e não ensina à IA o que ela procura.'},
            {t:'Pedir 100 nomes de uma vez.', ok:false, why:'Opções demais cansam e dificultam a decisão. De 3 a 5, com critérios, rende mais.'}
          ]},
        { who:'Wellington, 36 anos, organiza a confraternização da firma', says:'A IA me deu três opções de cardápio e disse que a segunda é a melhor. Vou fechar com ela.',
          q:'O que ele deve considerar antes?',
          opts:[
            {t:'Fechar sem pensar, a IA já analisou tudo.', ok:false, why:'A IA não sabe o orçamento real, as restrições alimentares da equipe nem os preços da região.'},
            {t:'Conferir as opções com os critérios dele (orçamento, restrições alimentares, número de pessoas) e com preços reais antes de decidir.', ok:true, why:'A comparação da IA é apoio. A decisão depende de informações que só ele tem.'},
            {t:'Escolher a primeira opção, só para contrariar.', ok:false, why:'Escolher sem critério não é melhor do que aceitar sem pensar.'}
          ]},
        { who:'Cíntia, 41 anos, professora de inglês particular', says:'Pedi três textos de divulgação. Gostei da abertura do primeiro e da chamada final do terceiro.',
          q:'Qual é o próximo passo mais eficiente?',
          opts:[
            {t:'Escolher um deles inteiro e abrir mão do resto.', ok:false, why:'Ela perderia partes de que gostou. Dá para combinar.'},
            {t:'Pedir três novos textos do zero.', ok:false, why:'Recomeçar descarta o que já estava bom.'},
            {t:'Pedir para combinar a abertura do primeiro com a chamada final do terceiro e ajustar o meio.', ok:true, why:'Combinar o melhor das opções aproveita o trabalho feito e chega rápido ao resultado.'}
          ]}
      ]},
    { id:'2.6', title:'Use a IA como advogada do diabo', min:8,
      body:[
        `<div class="card analogy"><h3>😈 O amigo que faz as perguntas chatas</h3><p>Todo mundo tem aquele amigo que, quando você conta um plano, pergunta: "e se der errado?", "quem vai pagar isso?". Na hora incomoda, mas ele evita muita dor de cabeça. A IA pode fazer esse papel: <b>procurar furos na sua ideia antes que a realidade encontre</b>.</p></div>`,
        `<div class="term"><b>Advogado do diabo</b> = quem argumenta contra uma ideia de propósito, para testá-la. <b>Risco</b> = algo que pode dar errado. <b>Objeção</b> = argumento que alguém usaria para dizer não.</div>`,
        `<div class="card"><h3>Três jeitos de testar uma ideia</h3>
          <div class="tw"><table class="tbl"><tr><th>Técnica</th><th>Como pedir</th><th>Serve para</th></tr>
          <tr><td>Riscos</td><td>Peça os principais riscos do plano e como reduzir cada um</td><td>Planos e projetos</td></tr>
          <tr><td>Objeções</td><td>Peça as objeções que um cliente desconfiado faria</td><td>Vendas e propostas</td></tr>
          <tr><td>Pontos de vista</td><td>Peça a opinião de quem seria contra (o sócio cauteloso, o cliente exigente)</td><td>Decisões com várias pessoas</td></tr></table></div>
          <p>Depois, use a lista para fortalecer o plano: prepare respostas para as objeções e ações para os riscos mais prováveis.</p></div>`,
        `<div class="card"><h3>⚖️ Equilíbrio</h3><p>A IA tende a concordar com quem pergunta. Se você só pergunta "minha ideia é boa?", ela provavelmente vai elogiar. Por isso peça a crítica de forma explícita. Mas não exagere para o outro lado: nem todo risco listado é provável, e a IA pode inventar problemas. Separe os riscos em <b>prováveis e graves</b>, <b>prováveis e leves</b> e <b>improváveis</b>, e foque nos primeiros. A decisão final continua sendo sua, com informações reais.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que é bom perguntar "e se chover?" antes de marcar um piquenique.</div>`
      ],
      ch:[
        { who:'Nilton, 50 anos, quer abrir um food truck', says:'Perguntei à IA se minha ideia de food truck é boa e ela disse que é excelente. Estou animado!',
          q:'Qual é o próximo pedido mais útil?',
          opts:[
            {t:'Perguntar de novo se a ideia é boa, para ter certeza.', ok:false, why:'A IA tende a concordar com quem pergunta. Repetir a pergunta traz o mesmo elogio.'},
            {t:'Pedir explicitamente os principais riscos do negócio e as objeções de um sócio cauteloso, com sugestões para reduzir cada um.', ok:true, why:'Pedir crítica de forma explícita revela furos que o elogio esconde, e ajuda a fortalecer o plano.'},
            {t:'Investir tudo logo, já que a IA aprovou.', ok:false, why:'A aprovação da IA não vale como análise. Riscos e números reais precisam ser avaliados.'}
          ]},
        { who:'Regina, 38 anos, representante de produtos de limpeza', says:'Amanhã visito um mercado grande para oferecer meus produtos. Tenho medo de travar quando o comprador disser não.',
          q:'Como a técnica ajuda Regina?',
          opts:[
            {t:'Pedir que a IA liste as objeções mais comuns de um comprador de mercado e, para cada uma, montar ela mesma uma resposta com os dados reais dos produtos.', ok:true, why:'Conhecer as objeções antes e preparar respostas com dados reais dá segurança na visita.'},
            {t:'Pedir que a IA prometa descontos para qualquer objeção.', ok:false, why:'Descontos dependem das condições da empresa dela, não da IA.'},
            {t:'Não se preparar para não ficar nervosa.', ok:false, why:'Preparação reduz o nervosismo. Improvisar diante de objeções é mais arriscado.'}
          ]},
        { who:'Artur, 27 anos, analista de sistemas', says:'Pedi os riscos do meu projeto e a IA listou 30. Agora acho que nada vai dar certo.',
          q:'Como Artur deve usar essa lista?',
          opts:[
            {t:'Desistir do projeto, porque são riscos demais.', ok:false, why:'Muitos riscos listados são improváveis ou leves. Desistir sem classificar é exagero.'},
            {t:'Ignorar a lista inteira.', ok:false, why:'Entre os 30 pode haver riscos reais e graves que merecem atenção.'},
            {t:'Classificar os riscos em prováveis e graves, prováveis e leves e improváveis, e planejar ações para os primeiros.', ok:true, why:'Priorizar transforma uma lista assustadora num plano de ação viável.'}
          ]}
      ]},
    { id:'2.7', title:'Projeto: uma tarefa grande em etapas', min:35,
      body:[`<div class="card"><p>Escolha algo grande da sua vida real, que normalmente você pediria num único prompt, e conduza a IA por etapas, com entrevista, ajustes e revisão. O que vale aqui é o processo que você seguiu.</p></div>`],
      projeto:{
        entrega:'O registro de uma tarefa grande feita em etapas com a IA: o plano, as etapas executadas, os ajustes e a revisão final.',
        passos:[
          'Escolha uma tarefa grande e real (um evento, um plano de estudos, um cardápio da semana, uma apresentação).',
          'Peça que a IA faça algumas perguntas antes de começar e responda com informações da sua situação.',
          'Peça o plano em etapas e execute pelo menos 2 etapas, uma de cada vez.',
          'Em cada etapa, dê pelo menos 1 feedback específico (manter, mudar, como deve ficar).',
          'No final, peça à IA os principais riscos do resultado (advogada do diabo), revise com checklist e confira você mesmo os fatos e números.'
        ],
        checklist:[
          'A tarefa é real e grande o bastante para precisar de etapas.',
          'Registrei as perguntas da entrevista e as minhas respostas (sem dados pessoais de terceiros).',
          'Mostrei pelo menos 2 etapas com feedback específico em cada uma.',
          'Listei os riscos prováveis e graves e o que fiz com eles.',
          'Fiz a revisão com checklist e a minha própria conferência final.'
        ],
        minimo:400
      }}
  ]},
  { id:3, icon:'🧰', title:'Seu kit de prompts', sub:'Prompts para o dia a dia', lessons:[
    { id:'3.1', title:'Modelos de prompt para usar sempre', min:8,
      body:[
        `<div class="card analogy"><h3>🧰 A caixa de ferramentas</h3><p>Quem tem uma caixa de ferramentas não inventa um martelo a cada prego. Os modelos de prompt são suas ferramentas prontas: <b>você só troca os detalhes</b>.</p></div>`,
        `<div class="term"><b>Modelo de prompt (template)</b> = um prompt pronto com espaços para preencher. <b>Variável</b> = o espaço que você troca, escrito entre colchetes, como [ASSUNTO]. <b>Reuso</b> = usar o mesmo modelo várias vezes.</div>`,
        `<div class="card"><h3>5 modelos que servem para quase tudo</h3>
          <div class="tw"><table class="tbl"><tr><th>Para</th><th>Modelo</th></tr>
          <tr><td><b>Resumir</b></td><td>"Resuma [TEXTO] em [N] pontos para [PÚBLICO]."</td></tr>
          <tr><td><b>Explicar</b></td><td>"Explique [ASSUNTO] como se eu tivesse 10 anos, com um exemplo do dia a dia."</td></tr>
          <tr><td><b>Revisar</b></td><td>"Revise este texto, corrija erros e deixe mais claro, sem mudar o sentido: [TEXTO]."</td></tr>
          <tr><td><b>Planejar</b></td><td>"Monte um plano de [OBJETIVO] em [PRAZO], com etapas e prazos realistas."</td></tr>
          <tr><td><b>Comparar</b></td><td>"Compare [A] e [B] em tabela, com vantagens, desvantagens e quando usar cada um."</td></tr></table></div>
          <p>Troque os colchetes, aplique e ajuste. Quanto mais você usa, mais refina o modelo.</p></div>`,
        `<div class="card"><h3>🛠️ Como criar o seu próprio modelo</h3><ol class="golden"><li><span>Pegue um prompt que <b>funcionou bem</b> numa tarefa que se repete.</span></li><li><span>Marque o que <b>muda</b> de uma vez para outra (cliente, produto, data) e troque por [VARIÁVEIS].</span></li><li><span>Deixe fixo o que <b>sempre vale</b>: tom, formato, limites.</span></li><li><span>Teste com 2 ou 3 situações diferentes antes de considerar pronto.</span></li></ol><p>Um modelo seu, ajustado à sua rotina, vale mais do que dezenas de prompts copiados da internet.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que ter ferramentas prontas facilita o trabalho, e como isso se parece com ter modelos de prompt.</div>`
      ],
      ch:[
        { who:'Gabriel, 22 anos, estagiário', says:'Toda semana preciso resumir relatórios e reescrevo o pedido do zero. Está me tomando tempo.',
          q:'Qual é a melhor solução?',
          opts:[
            {t:'Aceitar que cada resumo exige um prompt inteiramente novo.', ok:false, why:'Tarefas que se repetem pedem um modelo pronto, e não começar do zero.'},
            {t:'Copiar o prompt de outra pessoa sem entender e usar sempre igual, sem adaptar.', ok:false, why:'Um prompt copiado sem adaptação pode não servir ao seu caso. O modelo precisa ser ajustado a você.'},
            {t:'Criar um modelo com variáveis, como "Resuma [TEXTO] em 5 pontos para [PÚBLICO]", e reutilizar.', ok:true, why:'Um modelo com variáveis poupa tempo e mantém a qualidade, trocando só o que muda.'}
          ]},
        { who:'Elisa, 36 anos, dona de um pet shop', says:'Toda semana escrevo mensagens de lembrete de banho e tosa. O que deve virar variável no meu modelo?',
          q:'Qual divisão entre fixo e variável faz mais sentido?',
          opts:[
            {t:'Tudo variável, inclusive o tom e o tamanho, para ter liberdade total.', ok:false, why:'Se tudo muda, não é modelo. Tom e tamanho costumam ser fixos para manter a identidade das mensagens.'},
            {t:'Variáveis: [NOME DO PET], [DATA], [HORÁRIO], [SERVIÇO]. Fixo: tom carinhoso, até 3 linhas e o pedido de confirmação.', ok:true, why:'O que muda de cliente para cliente vira variável; o que define o jeito do pet shop fica fixo.'},
            {t:'Nada variável: a mesma mensagem idêntica para todos.', ok:false, why:'Sem variáveis, a mensagem não serve para cada cliente e horário diferentes.'}
          ]},
        { who:'Luciano, 25 anos, auxiliar de logística', says:'Achei na internet uma lista com "100 prompts milagrosos". Vou usar todos do jeito que estão.',
          q:'Qual é o melhor uso dessa lista?',
          opts:[
            {t:'Usar todos sem mudar nada, porque já foram testados.', ok:false, why:'Foram testados em outras situações. Sem adaptar, muitos não vão servir para a rotina dele.'},
            {t:'Ignorar qualquer prompt feito por outras pessoas.', ok:false, why:'Ideias de fora podem inspirar. O problema é usar sem entender nem adaptar.'},
            {t:'Escolher poucos que combinam com tarefas reais dele, adaptar com variáveis e testar antes de guardar.', ok:true, why:'Poucos modelos adaptados e testados valem mais do que muitos copiados sem critério.'}
          ]}
      ]},
    { id:'3.2', title:'Quando o prompt falha: diagnóstico e correção', min:8,
      body:[
        `<div class="card analogy"><h3>🔧 O mecânico que testa uma peça por vez</h3><p>O mecânico não troca o carro todo: ele ouve o barulho, testa uma peça, ajusta, testa de novo. Com prompts, também se <b>muda uma coisa por vez</b> para descobrir o que resolveu.</p></div>`,
        `<div class="term"><b>Diagnóstico</b> = descobrir por que o resultado não ficou bom. <b>Variável de teste</b> = a única coisa que você muda de cada vez. <b>Conferência</b> = checar se a resposta está correta e útil.</div>`,
        `<div class="card"><h3>Os 4 suspeitos de um prompt que falha</h3>
          <ol class="golden"><li><span>Faltou <b>contexto</b>? (quem, para quem, para quê)</span></li><li><span>Faltou <b>formato ou tamanho</b>?</span></li><li><span>Faltou <b>exemplo</b>?</span></li><li><span>O pedido era <b>grande demais</b>?</span></li></ol>
          <p>Mude <b>UMA</b> coisa e compare. Se mudou várias de uma vez, você não saberá o que funcionou.</p>
          <p>⚠️ Se a resposta está bem escrita mas com informação errada, o problema não é o prompt: é a limitação da IA, e é hora de conferir em fonte oficial, como vimos no curso IA do Zero.</p></div>`,
        `<div class="card"><h3>🩺 Do sintoma ao suspeito</h3><div class="tw"><table class="tbl"><tr><th>Sintoma</th><th>Suspeito provável</th></tr>
          <tr><td>Resposta genérica, serve para qualquer um</td><td>Faltou contexto</td></tr>
          <tr><td>Tamanho ou organização errados</td><td>Faltou formato ou limite</td></tr>
          <tr><td>Tom diferente do seu jeito</td><td>Faltou exemplo</td></tr>
          <tr><td>Tudo raso, nada aprofundado</td><td>Pedido grande demais: divida</td></tr>
          <tr><td>Bem escrito, mas com dado falso</td><td>Limitação da IA: confira em fonte</td></tr></table></div></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o mecânico troca uma peça por vez, e como isso ajuda a consertar um prompt.</div>`
      ],
      ch:[
        { who:'Tiago, 30 anos, vendedor', says:'Meu prompt não deu certo, então mudei tudo: o tom, o tamanho, o exemplo e o formato. Agora ficou bom, mas não sei o que resolveu.',
          q:'O que ele deveria ter feito?',
          opts:[
            {t:'Mudar uma coisa por vez, comparando o resultado a cada ajuste.', ok:true, why:'Mudar uma variável por vez mostra o que de fato melhora o resultado e vira aprendizado.'},
            {t:'Mudar tudo sempre, assim o resultado melhora mais rápido.', ok:false, why:'Pode até melhorar, mas você não aprende o que funcionou e não consegue repetir.'},
            {t:'Nunca mudar nada e aceitar a primeira resposta.', ok:false, why:'Ajustar faz parte do processo. Aceitar a primeira resposta desperdiça o potencial da ferramenta.'}
          ]},
        { who:'Bárbara, 32 anos, dona de uma loja de cosméticos naturais', says:'Pedi descrições para meus sabonetes e todas ficaram tão genéricas que serviriam para qualquer loja do Brasil.',
          q:'Qual é o suspeito mais provável?',
          opts:[
            {t:'Faltou contexto: o que torna os sabonetes dela diferentes, quem compra e onde ela vende.', ok:true, why:'Resposta genérica é o sintoma clássico de falta de contexto. Com os diferenciais da loja, a IA personaliza.'},
            {t:'O pedido era curto demais em número de palavras.', ok:false, why:'Não é o tamanho do pedido, é a falta de informação específica. Um pedido curto com contexto funciona.'},
            {t:'A IA não sabe escrever sobre cosméticos.', ok:false, why:'Ela sabe escrever sobre o tema. O que ela não sabe são os detalhes da loja da Bárbara.'}
          ]},
        { who:'Henrique, 47 anos, professor de matemática', says:'A IA criou exercícios ótimos, bem formatados, mas duas respostas do gabarito estão erradas. Vou melhorar o prompt.',
          q:'Qual é o diagnóstico correto?',
          opts:[
            {t:'O problema é o formato: precisa pedir em tabela.', ok:false, why:'O formato estava bom. O erro está no conteúdo, nos cálculos.'},
            {t:'Não é falha do prompt, é limitação da IA com contas: ele precisa conferir e corrigir o gabarito ele mesmo.', ok:true, why:'Texto bom com informação errada aponta para a limitação da IA. A conferência é a solução, não mais ajustes no pedido.'},
            {t:'Faltou um exemplo de exercício.', ok:false, why:'Exemplo ajuda no estilo, mas não impede erro de cálculo. Conferir o gabarito é indispensável.'}
          ]}
      ]},
    { id:'3.3', title:'Sua biblioteca pessoal de prompts', min:8,
      body:[
        `<div class="card analogy"><h3>📒 O caderno de receitas da família</h3><p>A receita que deu certo vai para o caderno, com nome e observações, para ser repetida. <b>Seus melhores prompts merecem o mesmo cuidado.</b></p></div>`,
        `<div class="term"><b>Biblioteca de prompts</b> = coleção organizada dos seus prompts que funcionam. <b>Versionar</b> = guardar a versão melhorada com data ou número. <b>Categoria</b> = grupo de prompts parecidos, como "estudo" ou "trabalho".</div>`,
        `<div class="card"><h3>Guarde o que funciona</h3><p>Crie um documento ou uma nota no celular com 3 campos por prompt:</p>
          <div class="tw"><table class="tbl"><tr><th>Campo</th><th>Exemplo</th></tr>
          <tr><td><b>Nome claro</b></td><td>"Resumo de relatório"</td></tr>
          <tr><td><b>Texto com [VARIÁVEIS]</b></td><td>"Resuma [TEXTO] em 5 pontos para [PÚBLICO]."</td></tr>
          <tr><td><b>Observação</b></td><td>"Funciona melhor com até 2 páginas."</td></tr></table></div>
          <ol class="golden"><li><span>Organize por <b>categorias</b>: estudo, trabalho, vida pessoal.</span></li><li><span>A cada melhoria, salve como <b>nova versão</b> ("v2").</span></li><li><span>Revise <b>uma vez por mês</b>: apague o que não usa, melhore o que usa muito.</span></li></ol>
          <p>⚠️ Cuidado: nunca guarde senhas, documentos nem dados de outras pessoas dentro dos prompts salvos, como vimos no curso IA do Zero.</p></div>`,
        `<div class="card"><h3>📌 Onde guardar</h3><p>Use o que você já abre todo dia: bloco de notas do celular, um documento na nuvem ou uma planilha simples com colunas nome, categoria, texto, observação e versão. O melhor lugar é o que você <b>encontra em 10 segundos</b> na hora de usar. Se precisar compartilhar com a equipe, combine um nome padrão para os modelos e quem pode alterar.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, como organizar uma biblioteca com os seus melhores prompts e por quê.</div>`
      ],
      ch:[
        { who:'Renato, 37 anos, autônomo', says:'Acertei um prompt ótimo hoje, mas semana passada perdi outro que também era bom. Como evito isso?',
          q:'Qual é a melhor prática?',
          opts:[
            {t:'Confiar na memória, porque prompts bons sempre voltam à cabeça.', ok:false, why:'A memória falha, e foi exatamente assim que ele perdeu o anterior.'},
            {t:'Salvar numa biblioteca com nome, texto com variáveis e observações, e melhorar com o tempo.', ok:true, why:'Um acervo organizado evita perder o que funciona e acelera tudo o que você fizer depois.'},
            {t:'Guardar o prompt junto com os dados reais dos clientes, para lembrar o contexto.', ok:false, why:'Dados de clientes não devem ficar em prompts salvos. Use variáveis e dados fictícios.'}
          ]},
        { who:'Débora, 40 anos, supervisora de uma equipe de atendimento', says:'Cada atendente guarda os prompts do seu jeito e ninguém acha nada. Quero organizar para a equipe toda.',
          q:'Qual é a melhor organização?',
          opts:[
            {t:'Cada um continua do seu jeito, para ter liberdade.', ok:false, why:'É exatamente o que causa a bagunça. Para equipe, um padrão comum ajuda todos.'},
            {t:'Um lugar compartilhado, com categorias, nome padrão, observações e um responsável por aprovar mudanças.', ok:true, why:'Padrão e responsável evitam versões duplicadas e mantêm os melhores modelos acessíveis para todos.'},
            {t:'Mandar todos os prompts num grupo de mensagens.', ok:false, why:'Num grupo, os prompts se perdem no meio das conversas e ninguém sabe qual é a versão atual.'}
          ]},
        { who:'Paulo Henrique, 29 anos, freelancer de design', says:'Minha biblioteca tem 80 prompts, mas uso uns 6. Fica difícil achar o que preciso.',
          q:'O que a revisão mensal recomenda?',
          opts:[
            {t:'Apagar ou arquivar os que não usa e melhorar os 6 mais usados, salvando novas versões.', ok:true, why:'Biblioteca boa é enxuta. Cortar o que não usa e refinar o que usa muito economiza tempo de verdade.'},
            {t:'Adicionar mais 80 para ter opções.', ok:false, why:'Mais prompts sem uso pioram a busca. Quantidade não é qualidade.'},
            {t:'Apagar tudo e recomeçar do zero.', ok:false, why:'Ele perderia os 6 que funcionam. A revisão é seletiva, não total.'}
          ]}
      ]},
    { id:'3.4', title:'Prompts com textos longos e documentos', min:8,
      body:[
        `<div class="card analogy"><h3>📎 O post-it no documento</h3><p>Quando você entrega um contrato a um colega, cola um post-it: "veja só a cláusula de prazo". Sem o post-it, ele lê tudo e comenta o que achar mais importante. Com a IA é igual: ao enviar um texto longo, <b>diga onde ele começa, onde termina e o que procurar</b>.</p></div>`,
        `<div class="term"><b>Delimitador</b> = marca que separa suas instruções do texto colado, como três aspas ou a palavra TEXTO: antes e FIM depois. <b>Trecho de origem</b> = a parte exata do documento de onde a resposta saiu. <b>Responder só com base no texto</b> = pedir que a IA não complete com conhecimento de fora.</div>`,
        `<div class="card"><h3>A estrutura em 4 blocos</h3>
          <ol class="golden"><li><span><b>Instrução</b>: o que fazer com o texto (resumir, achar prazos, comparar).</span></li><li><span><b>Delimitação</b>: marque claramente onde o texto começa e termina.</span></li><li><span><b>Regra de fidelidade</b>: responda só com base no texto; se não estiver lá, diga que não encontrou.</span></li><li><span><b>Prova</b>: peça que ela indique o trecho de onde tirou cada informação.</span></li></ol>
          <p>Com o trecho indicado, você confere em segundos se a IA leu certo.</p></div>`,
        `<div class="card"><h3>⚠️ Cuidados com documentos</h3><p>Textos muito longos podem ser cortados ou lidos pela metade, dependendo da ferramenta. Se o documento é grande, divida em partes e trabalhe uma por vez. E lembre do semáforo: contratos, laudos e documentos com dados pessoais só entram anonimizados e em ferramentas permitidas. Na dúvida, copie apenas o trecho necessário.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um post-it dizendo "leia esta parte" ajuda alguém a encontrar a informação certa num livro grosso.</div>`
      ],
      ch:[
        { who:'Neusa, 58 anos, aposentada', says:'Colei o regulamento do condomínio na IA e perguntei sobre animais. Ela respondeu uma regra que eu não encontro no regulamento.',
          q:'Qual ajuste no pedido evita isso?',
          opts:[
            {t:'Pedir "responda só com base no texto, indique o trecho de onde tirou e, se não houver nada, diga que não encontrou".', ok:true, why:'A regra de fidelidade e o pedido do trecho impedem que a IA complete com regras genéricas de outros condomínios.'},
            {t:'Perguntar de novo com mais educação.', ok:false, why:'A educação não muda o problema. Faltou dizer que a resposta deve vir só do regulamento.'},
            {t:'Colar o regulamento duas vezes para reforçar.', ok:false, why:'Repetir o texto não impede a IA de completar com conhecimento de fora.'}
          ]},
        { who:'Rogério, 43 anos, gerente comercial', says:'Colei um relatório de 60 páginas e pedi o resumo. A IA falou muito do começo e quase nada do final.',
          q:'O que provavelmente aconteceu e como resolver?',
          opts:[
            {t:'O relatório é ruim no final; não há o que fazer.', ok:false, why:'Não dá para concluir isso. É mais provável que a IA tenha lido pela metade.'},
            {t:'O texto pode ter sido longo demais para a ferramenta; ele deve dividir em partes, resumir cada uma e depois juntar.', ok:true, why:'Ferramentas têm limite de leitura. Dividir garante que todas as partes sejam consideradas.'},
            {t:'Pedir o resumo em letras maiúsculas.', ok:false, why:'Maiúsculas não aumentam o quanto a IA consegue ler de uma vez.'}
          ]},
        { who:'Yasmin, 27 anos, assistente de uma imobiliária', says:'Quero que a IA encontre os prazos num contrato de aluguel. O contrato tem nome, CPF e endereço dos inquilinos.',
          q:'Qual é o caminho mais seguro?',
          opts:[
            {t:'Colar o contrato inteiro com todos os dados, para a IA ter contexto completo.', ok:false, why:'CPF e endereço estão no vermelho do semáforo. A IA não precisa deles para achar prazos.'},
            {t:'Desistir, porque contratos nunca podem passar por IA.', ok:false, why:'Dá para usar com cuidado, retirando os dados pessoais e seguindo as regras da empresa.'},
            {t:'Copiar só as cláusulas de prazo, sem dados pessoais, delimitar o texto e pedir os prazos com o trecho de origem, se a imobiliária permitir o uso de IA.', ok:true, why:'Enviar só o necessário, anonimizado, protege os inquilinos e ainda resolve a tarefa.'}
          ]}
      ]},
    { id:'3.5', title:'Prompts com fotos e voz', min:8,
      body:[
        `<div class="card analogy"><h3>📷 Mostrar o defeito ao técnico</h3><p>Explicar por telefone o barulho estranho da máquina de lavar é difícil. Mandar um vídeo ou uma foto do defeito ajuda muito o técnico, mas só se você disser o que quer: "o que pode ser?", "quanto custa?", "consigo resolver sozinho?". Com a IA vale o mesmo: <b>a imagem ou o áudio não substituem o pedido claro</b>.</p></div>`,
        `<div class="term"><b>Entrada por imagem</b> = foto ou captura de tela enviada para a IA analisar. <b>Entrada por voz</b> = falar o pedido em vez de digitar. <b>Foco da análise</b> = a parte da imagem ou do assunto em que a IA deve prestar atenção.</div>`,
        `<div class="card"><h3>A fórmula também vale para fotos</h3>
          <div class="flows">
            <div class="flow old"><h4>Antes</h4><div class="node">[foto da planilha] "O que acha?"</div></div>
            <div class="flow new"><h4>Depois</h4><div class="node good">[foto da planilha] "Sou dono de uma loja pequena. Olhe só a coluna de vendas de março e me diga, em 3 tópicos, o que chama atenção. Não tente ler os nomes dos clientes."</div></div>
          </div>
          <p style="margin-top:14px">Diga <b>o que é a imagem</b>, <b>onde focar</b>, <b>o que você quer saber</b> e <b>o formato</b>. Para voz, organize a fala: primeiro o contexto, depois o pedido, por fim o formato.</p></div>`,
        `<div class="card"><h3>⚠️ Cuidados próprios</h3><p>A IA pode <b>ler errado</b> números, letras pequenas e gráficos: confira os valores na fonte original. Capturas de tela costumam mostrar mais do que você imagina, como notificações, nomes e e-mails no canto da tela; corte antes de enviar. No áudio, nomes próprios e números são os campeões de erro de transcrição, então leia o texto que a IA entendeu antes de seguir. E não envie fotos de documentos pessoais ou de outras pessoas sem necessidade e sem permissão.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que, ao mostrar um desenho para alguém, ajuda dizer "olha só esta parte aqui".</div>`
      ],
      ch:[
        { who:'Valdemar, 55 anos, dono de uma oficina de bicicletas', says:'Mandei para a IA a foto de uma peça quebrada e escrevi só "e aí?". Ela descreveu a foto, mas não me ajudou.',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Dizer o que é a peça, o modelo da bicicleta e o que ele quer saber: o nome da peça para comprar ou se dá para consertar.', ok:true, why:'A imagem mostra, mas o pedido diz o que fazer com ela. Com contexto e pergunta clara, a resposta fica útil.'},
            {t:'Mandar a mesma foto de novo, com mais zoom.', ok:false, why:'Zoom pode ajudar na nitidez, mas sem dizer o que quer, a IA continua só descrevendo.'},
            {t:'Concluir que a IA não entende fotos.', ok:false, why:'Ela entendeu a foto. Faltou o pedido.'}
          ]},
        { who:'Aline, 32 anos, auxiliar financeira', says:'Tirei print da tela do sistema para a IA explicar um relatório. No canto apareceram notificações com nomes e valores de clientes.',
          q:'O que Aline deveria ter feito?',
          opts:[
            {t:'Nada, notificações não contam como dados.', ok:false, why:'Nomes e valores de clientes são dados pessoais e sigilosos, mesmo num cantinho da tela.'},
            {t:'Cortar a imagem deixando só a parte do relatório necessária e conferir se não sobrou nenhum dado pessoal.', ok:true, why:'Recortar o print elimina informações que a IA não precisa e protege os clientes.'},
            {t:'Enviar e pedir à IA para ignorar as notificações.', ok:false, why:'Pedir para ignorar não desfaz o envio. Os dados já foram compartilhados.'}
          ]},
        { who:'Ronaldo, 46 anos, mestre de obras', says:'Ditei para a IA uma lista de materiais da obra. Ela entendeu "50 sacos de cimento", mas eu falei "15".',
          q:'Que hábito evita esse problema?',
          opts:[
            {t:'Falar mais alto da próxima vez e confiar no resultado.', ok:false, why:'Falar alto não elimina erros de transcrição em números.'},
            {t:'Parar de usar a voz para qualquer coisa.', ok:false, why:'A voz economiza tempo. O ajuste é conferir, não abandonar.'},
            {t:'Ler o texto transcrito antes de usar, conferindo números, quantidades e nomes.', ok:true, why:'Números e nomes são os pontos que mais erram na transcrição. Conferir evita compra errada.'}
          ]}
      ]},
    { id:'3.6', title:'Projeto: minha biblioteca com 5 modelos', min:35,
      body:[`<div class="card"><p>Agora você vai montar o começo da sua biblioteca pessoal, com modelos criados e testados por você para tarefas que se repetem na sua rotina. Nada de copiar listas prontas: cada modelo nasce de uma necessidade sua.</p></div>`],
      projeto:{
        entrega:'Uma biblioteca com 5 modelos de prompt seus, cada um com nome, categoria, texto com [VARIÁVEIS], observação e resultado do teste.',
        passos:[
          'Liste 5 tarefas que se repetem na sua semana e em que a IA pode ajudar.',
          'Para cada uma, escreva um modelo com partes fixas (tom, formato, limites) e [VARIÁVEIS].',
          'Teste cada modelo em pelo menos 2 situações diferentes.',
          'Use o diagnóstico dos 4 suspeitos para corrigir pelo menos 1 modelo que não funcionou bem, mudando uma coisa por vez.',
          'Organize tudo por categoria, com observações e versão, e inclua pelo menos 1 modelo para texto longo (com delimitação e trecho de origem) ou para foto ou voz.'
        ],
        checklist:[
          'Os 5 modelos atendem tarefas reais e repetidas da minha rotina.',
          'Cada modelo tem nome, categoria, variáveis e observação.',
          'Testei cada modelo em 2 situações e registrei o resultado.',
          'Nenhum modelo guarda dados pessoais reais ou senhas.'
        ],
        minimo:400
      }}
  ]}
];

const MODDONE = {
  1: 'Você já sabe o que torna um pedido claro: contexto, exemplos, limites, formato, papel e público. Isso muda a qualidade de tudo o que você pedir.',
  2: 'Você aprendeu a refinar, dividir tarefas, deixar a IA te entrevistar e revisar a própria resposta. Agora você conduz a conversa.',
  3: 'Parabéns, você concluiu o curso Prompts que Funcionam! Você tem um kit de modelos testados e um método para corrigir o que não funciona, e já pode emitir o certificado do curso. Próximo passo da trilha: o curso "IA no Trabalho e no Dia a Dia".'
};

const PROMPTS = {
  1: [
    { title:'Pedido completo com exemplo', desc:'Para pedir textos no seu estilo.' }
  ],
  2: [
    { title:'IA que entrevista', desc:'Para quando você não sabe por onde começar.' }
  ],
  3: [
    { title:'Diagnóstico de prompt', desc:'Para melhorar um prompt que não funcionou.' }
  ]
};

const THEME = { 1:['#22C55E','#14B8A6'], 2:['#14B8A6','#06B6D4'], 3:['#10B981','#22C55E'] };
const LIC = { '1.1':'🎯','1.2':'🖼️','1.3':'📏','1.4':'🎙️','1.5':'🧭','1.6':'📝','2.1':'💬','2.2':'🧩','2.3':'🎤','2.4':'🔁','2.5':'🔀','2.6':'😈','2.7':'🪜','3.1':'🧰','3.2':'🔧','3.3':'📚','3.4':'📎','3.5':'📷','3.6':'🗃️' };

return {
  id: 'prompts-que-funcionam',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
