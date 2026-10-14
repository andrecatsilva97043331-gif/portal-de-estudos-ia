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
    { id:'1.7', title:'Montando um pedido completo do zero', min:12,
      body:[
        `<div class="card analogy"><h3>🎂 A ficha de encomenda do bolo</h3><p>Quando você encomenda um bolo de aniversário, a confeiteira pergunta: para quantas pessoas, qual sabor, qual recheio, para que dia, qual tema e se alguém tem alergia. Ela não está sendo chata: cada resposta evita um erro. Um pedido completo para a IA é essa ficha de encomenda, <b>preenchida por você antes de enviar</b>.</p></div>`,
        `<div class="term"><b>Peça do pedido</b> = cada informação que compõe o prompt: tarefa, contexto, público, finalidade, formato, limites e exemplo. <b>Rascunho do pedido</b> = a primeira versão, escrita sem pressa de acertar. <b>Revisão do pedido</b> = conferir, antes de enviar, se nada importante ficou de fora.</div>`,
        `<div class="card"><h3>Exemplo resolvido: a promoção da manicure</h3><p>Juliana, manicure em Belo Horizonte, quer divulgar uma promoção de Dia das Mães para as clientes. O primeiro pedido dela foi assim:</p>
          <div class="flows"><div class="flow old"><h4>Pedido fraco</h4><div class="node">"Faz um texto da minha promoção de Dia das Mães."</div></div></div>
          <p style="margin-top:14px"><b>O que está errado:</b> a IA não sabe qual é o serviço, o preço, o prazo, para quem é o texto, onde ele será publicado nem o tom que a Juliana usa com as clientes. O resultado seria um texto genérico, que serviria para qualquer salão do Brasil, e talvez com um preço inventado.</p></div>`,
        `<div class="card"><h3>Montando peça por peça</h3><p>Em vez de tentar escrever o pedido perfeito de uma vez, a Juliana anotou uma linha para cada peça:</p>
          <ol class="golden"><li><span><b>Tarefa:</b> escrever uma mensagem de divulgação.</span></li><li><span><b>Contexto:</b> atende em domicílio no bairro Santa Tereza; pé e mão por R$ 60 (valor fictício do exemplo) de 1 a 10 de maio.</span></li><li><span><b>Público:</b> clientes que já a conhecem, a maioria entre 30 e 60 anos, e filhos que querem presentear a mãe.</span></li><li><span><b>Finalidade e critério:</b> que a cliente responda para agendar; por isso, terminar com uma pergunta simples.</span></li><li><span><b>Formato e limites:</b> lista de transmissão do WhatsApp, até 5 linhas, no máximo 2 emojis, sem a palavra "imperdível".</span></li><li><span><b>Exemplo:</b> uma mensagem antiga que deu certo, dizendo o que ela gosta nela (frases curtas).</span></li><li><span><b>Teste do colega:</b> releu e se perguntou se alguém faria o texto sem perguntar nada.</span></li></ol></div>`,
        `<div class="card"><h3>O pedido melhorado e o resultado esperado</h3>
          <div class="flows"><div class="flow new"><h4>Pedido melhorado</h4><div class="node good">"Você vai me ajudar a divulgar meu trabalho de manicure. Atendo em domicílio em Santa Tereza, BH. De 1 a 10 de maio, pé e mão sai por R$ 60. Escreva uma mensagem para minha lista de transmissão do WhatsApp, para clientes de 30 a 60 anos e para filhos que querem presentear a mãe. Até 5 linhas, tom carinhoso, no máximo 2 emojis, sem a palavra imperdível. Termine com uma pergunta que facilite agendar. Segue uma mensagem minha que deu certo; gosto das frases curtas: [mensagem antiga]."</div></div></div>
          <p style="margin-top:14px"><b>Resultado esperado:</b> uma mensagem curta, no jeito da Juliana, com data, preço e um convite para responder. Se algo vier fora do combinado, ela já sabe qual peça ajustar, sem reescrever tudo.</p>
          <div class="tw"><table class="tbl"><tr><th>Tipo de pedido</th><th>Peças essenciais</th><th>Pode deixar de fora</th></tr>
          <tr><td>Pergunta rápida ("quantos ml tem uma xícara?")</td><td>Tarefa clara</td><td>Quase todo o resto</td></tr>
          <tr><td>Texto para clientes</td><td>Tarefa, contexto, público, finalidade, formato</td><td>Exemplo, se você não tiver</td></tr>
          <tr><td>Texto no seu estilo</td><td>Todas, com exemplo</td><td>Nada</td></tr>
          <tr><td>Explicação de um assunto novo</td><td>Tarefa, nível de quem lê, formato</td><td>Exemplo</td></tr></table></div></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><ol class="golden"><li><span><b>Tudo num parágrafo só:</b> as peças se misturam e a IA ignora alguma, geralmente o limite. Separe em frases curtas, uma peça por linha.</span></li><li><span><b>Esquecer o dado que só você sabe</b> (preço, data, endereço): a IA deixa lacunas como "[inserir preço]" ou inventa um valor. Se aparecer algo que você não informou, faltou contexto.</span></li><li><span><b>Encher de peças que não mudam nada:</b> pedido longo demais também confunde. Use a tabela acima para decidir o que entra.</span></li></ol></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez</h3><p>Use o Claude (ou o DeepSeek), no plano gratuito:</p><ol class="golden"><li><span>Escolha uma mensagem real que você precisa mandar esta semana: um aviso, um convite ou uma divulgação.</span></li><li><span>No papel, escreva uma linha para cada peça: tarefa, contexto, público, finalidade, formato e limites.</span></li><li><span>Junte as linhas num pedido só, com as suas palavras, e envie.</span></li><li><span>Confira a resposta peça por peça: tamanho, tom e final estão como você pediu?</span></li><li><span>Ajuste apenas a peça que falhou e envie de novo.</span></li></ol><p>🔒 Use nomes e telefones fictícios no lugar dos dados reais de clientes.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos como a ficha de encomenda evita que chegue o bolo errado na festa, e o que isso tem a ver com escrever um pedido para a IA.</div>`
      ],
      ch:[
        { who:'Marcelo, 39 anos, dono de um lava-jato em Goiânia', says:'Pedi um texto da promoção de lavagem completa e veio escrito "[inserir preço aqui]" e uma data que eu nunca falei.',
          q:'O que isso mostra sobre o pedido dele?',
          opts:[
            {t:'Que a IA está com defeito e ele precisa trocar de ferramenta.', ok:false, why:'Qualquer IA faria o mesmo. Lacunas e datas inventadas são sinal de pedido sem os dados necessários.'},
            {t:'Que faltou o contexto que só ele sabe, como preço, prazo e serviços incluídos, e a IA preencheu as lacunas como pôde.', ok:true, why:'Quando a IA deixa colchetes ou inventa valores, a peça "contexto" ficou de fora. Informar os dados reais resolve.'},
            {t:'Que o pedido estava curto e precisava de mais adjetivos, como "incrível" e "imperdível".', ok:false, why:'Adjetivos não trazem informação. O que faltava eram fatos: preço, data e o que a promoção inclui.'}
          ]},
        { who:'Priscila, 27 anos, estudante de gastronomia', says:'Só quero saber quantos gramas tem uma colher de sopa de açúcar. Preciso montar papel, público, formato e exemplo?',
          q:'Qual é a melhor orientação para ela?',
          opts:[
            {t:'Sim: todo pedido precisa de todas as peças, senão a IA erra.', ok:false, why:'Encher uma pergunta simples de peças só deixa o pedido mais longo, sem melhorar a resposta.'},
            {t:'Não use IA para perguntas simples, só para textos grandes.', ok:false, why:'A IA pode ajudar com perguntas rápidas. O ponto é não exagerar nas peças.'},
            {t:'Não: para pergunta rápida basta a tarefa clara; as outras peças valem quando o resultado precisa servir a um público ou uso específico.', ok:true, why:'O tamanho do pedido acompanha a complexidade da tarefa. Pergunta simples, pedido simples.'}
          ]},
        { who:'Sérgio, 52 anos, eletricista autônomo', says:'Montei um pedido com tudo: serviço, público, tom, tamanho. Ficou um parágrafo de 15 linhas e a IA ignorou o limite de 4 linhas.',
          q:'Qual ajuste tem mais chance de funcionar?',
          opts:[
            {t:'Reorganizar o pedido em linhas curtas, uma peça por linha, deixando o limite de tamanho bem visível.', ok:true, why:'Pedido organizado facilita para a IA, e para ele, conferir cada peça. O limite deixa de se perder no meio do texto.'},
            {t:'Enviar exatamente o mesmo parágrafo de novo.', ok:false, why:'O mesmo texto embolado tende a gerar o mesmo problema.'},
            {t:'Tirar o limite de tamanho, já que a IA não respeita.', ok:false, why:'O limite é útil. O problema era a organização do pedido, não a regra.'}
          ]}
      ]},
    { id:'1.8', title:'Dar contexto sem expor dados pessoais', min:12,
      body:[
        `<div class="card analogy"><h3>☕ O conselho da tia</h3><p>Quando você pede conselho à sua tia sobre um problema no trabalho, conta a situação: "meu chefe muda as tarefas toda hora e eu me perco". Ela não precisa do nome completo dele, do CPF nem do endereço da empresa para te ajudar. Com a IA é igual: <b>ela precisa da situação, não da identidade das pessoas</b>.</p></div>`,
        `<div class="term"><b>Dado pessoal</b> = informação que identifica uma pessoa: nome completo, CPF, telefone, endereço, e-mail, placa do carro, foto do rosto. <b>Dado sensível</b> = saúde, religião, origem racial, opinião política, vida sexual e biometria; a LGPD (Lei Geral de Proteção de Dados) dá proteção extra a eles. <b>Anonimizar</b> = retirar ou trocar o que identifica alguém, mantendo a situação. <b>Dado fictício</b> = valor inventado no lugar do real, com o mesmo formato.</div>`,
        `<div class="card"><h3>Exemplo resolvido: o feedback do RH</h3><p>Roberta coordena o RH de uma rede de farmácias em Recife e quer ajuda para conduzir uma conversa com um funcionário que vem chegando atrasado.</p>
          <div class="flows"><div class="flow old"><h4>Pedido fraco</h4><div class="node">"Me ajuda a dar feedback ao Carlos Eduardo [sobrenome], da loja da avenida [nome], que chega atrasado porque está tratando depressão. O telefone dele é [número]."</div></div></div>
          <p style="margin-top:14px"><b>O que está errado:</b> nome completo e loja identificam a pessoa; o diagnóstico é dado sensível; o telefone não ajuda em nada a tarefa. Nenhuma dessas informações melhora o roteiro, e todas saem do controle da Roberta assim que ela envia.</p></div>`,
        `<div class="card"><h3>Anonimizando em 4 passos</h3><ol class="golden"><li><span>Liste o que a IA <b>precisa</b> saber para ajudar: a situação, a frequência, o cargo, o tom desejado.</span></li><li><span>Risque o que <b>identifica</b> alguém: nome, CPF, telefone, endereço, a loja específica.</span></li><li><span>Troque por <b>descrição genérica</b> ou nome fictício: "um atendente com 2 anos de casa", "Pedro (nome fictício)".</span></li><li><span>Para dados sensíveis, pergunte: <b>isso muda a resposta?</b> Se mudar, descreva de forma geral; se não mudar, retire.</span></li></ol>
          <div class="flows"><div class="flow new"><h4>Pedido melhorado</h4><div class="node good">"Sou coordenadora de RH. Preciso conduzir uma conversa de feedback com um atendente com 2 anos de casa que chegou atrasado 6 vezes no último mês. Ele está passando por um problema de saúde que já é acompanhado pelo RH. Quero um roteiro respeitoso, em 5 tópicos, que reconheça o bom histórico dele e combine um plano para os horários."</div></div></div>
          <p style="margin-top:14px"><b>Resultado esperado:</b> um roteiro tão útil quanto seria com os dados reais, e ninguém pode ser identificado pelo que foi enviado.</p></div>`,
        `<div class="card"><h3>🔁 Troque assim</h3><div class="tw"><table class="tbl"><tr><th>Em vez de</th><th>Use</th></tr>
          <tr><td>Nome completo de cliente ou colega</td><td>"a cliente", "um colega do financeiro" ou "Ana (nome fictício)"</td></tr>
          <tr><td>CPF, RG, número de conta</td><td>Retire; se o formato importar, use "000.000.000-00"</td></tr>
          <tr><td>Endereço completo</td><td>"bairro residencial de Recife" ou nada</td></tr>
          <tr><td>Salário exato de alguém</td><td>Uma faixa: "entre 2 e 3 salários mínimos"</td></tr>
          <tr><td>Print com nomes e conversas</td><td>Recorte ou cubra antes de enviar</td></tr>
          <tr><td>Planilha real de clientes</td><td>5 linhas inventadas com as mesmas colunas</td></tr></table></div></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><p><b>Achar que só o nome é dado pessoal:</b> telefone, e-mail, placa e foto também identificam. <b>Anonimizar pela metade:</b> tirar o nome mas deixar "a única nutricionista da clínica da rua tal" ainda entrega quem é. <b>Confiar em apagar a conversa depois:</b> o que foi enviado já saiu do seu controle. Alguns planos permitem desligar o uso das conversas para treinar a IA, nas configurações; vale conferir, mas isso não substitui anonimizar. E, no trabalho, siga as regras da empresa sobre quais ferramentas podem ser usadas.</p><p><b>Teste rápido:</b> releia o pedido e pergunte "alguém que conhece essa pessoa saberia de quem estou falando?". Se a resposta for sim, ainda há dado demais.</p></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez</h3><p>Use o Claude ou o DeepSeek:</p><ol class="golden"><li><span>Pense numa situação real, de trabalho ou de casa, que envolva outra pessoa.</span></li><li><span>Escreva no papel tudo o que você contaria sobre ela.</span></li><li><span>Marque o que identifica alguém e troque por descrições ou nomes fictícios.</span></li><li><span>Faça o teste "alguém que conhece saberia quem é?".</span></li><li><span>Envie o pedido anonimizado, com as suas palavras, e veja se a resposta continua útil.</span></li></ol><p>🔒 No DeepSeek, os dados ficam em servidores fora do Brasil: ali a regra vale com mais força ainda.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos como dá para pedir conselho sobre um problema com um colega sem contar quem ele é.</div>`
      ],
      ch:[
        { who:'Kátia, 45 anos, dona de uma clínica de fisioterapia em Curitiba', says:'Quero que a IA escreva uma mensagem de remarcação para um paciente. Vou colar a ficha dele inteira, com o diagnóstico, para ela ter contexto.',
          q:'Qual é o melhor caminho?',
          opts:[
            {t:'Informar só o necessário: tipo de atendimento, nova data e tom da mensagem, sem nome, diagnóstico ou telefone. O nome ela completa na hora de enviar.', ok:true, why:'Para remarcar, a IA não precisa saber quem é o paciente nem do que ele trata. Menos dados, mesmo resultado.'},
            {t:'Colar a ficha completa, porque mais contexto sempre gera resposta melhor.', ok:false, why:'Diagnóstico é dado sensível e não melhora uma mensagem de remarcação. Contexto útil é a situação, não a ficha.'},
            {t:'Desistir de usar IA na clínica, porque nunca é seguro.', ok:false, why:'Dá para usar com segurança tirando os dados pessoais e seguindo as regras da clínica.'}
          ]},
        { who:'Diego, 33 anos, analista financeiro', says:'Tirei todos os nomes. Escrevi só: "o único diretor de 60 anos da filial de Londrina, que ganha R$ 38 mil". Está anonimizado, né?',
          q:'O pedido está anonimizado?',
          opts:[
            {t:'Sim: sem nome, ninguém tem como saber quem é.', ok:false, why:'Cargo único, idade, cidade e salário juntos apontam para uma pessoa só. Anonimizar é não permitir a identificação.'},
            {t:'Não: os detalhes juntos identificam a pessoa. Ele deve generalizar, por exemplo "um diretor" e uma faixa salarial, e só se o salário for necessário.', ok:true, why:'Anonimizar pela metade é um erro comum. O teste "alguém que conhece saberia quem é?" revela o problema.'},
            {t:'Sim, desde que ele apague a conversa depois.', ok:false, why:'Apagar depois não desfaz o envio. O cuidado precisa vir antes.'}
          ]},
        { who:'Luana, 30 anos, professora do 7º ano', says:'Quero que a IA me ajude a planejar o reforço com base nas notas da turma. A planilha tem o nome completo dos alunos.',
          q:'O que ela deve fazer antes de enviar?',
          opts:[
            {t:'Enviar como está, porque nota não é dado importante.', ok:false, why:'Os alunos são menores de idade e as notas ligadas ao nome identificam cada um. Merecem cuidado redobrado.'},
            {t:'Enviar e pedir à IA para ignorar os nomes.', ok:false, why:'Pedir para ignorar não desfaz o envio: os nomes já foram compartilhados.'},
            {t:'Trocar os nomes por códigos (Aluno 1, Aluno 2), guardar a correspondência só com ela e seguir as regras da escola sobre uso de IA.', ok:true, why:'Com códigos, a IA analisa as notas do mesmo jeito, e nenhum aluno fica exposto.'}
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
    { id:'2.8', title:'Peça para a IA dizer quando não sabe', min:12,
      body:[
        `<div class="card analogy"><h3>⛽ O frentista que inventa o caminho</h3><p>Você para no posto e pergunta como chegar a um endereço. Tem frentista que, mesmo sem saber, aponta uma direção com toda a confiança, para não parecer mal-educado. A IA às vezes faz isso: <b>completa o que não sabe com algo que soa certo</b>. Dá para diminuir esse risco pedindo, com todas as letras, que ela diga quando não tem certeza, e conferindo o que importa.</p></div>`,
        `<div class="term"><b>Alucinação</b> = quando a IA inventa uma informação e a apresenta como verdadeira: um número, uma lei, um livro, um link. <b>Grau de certeza</b> = o quanto a IA indica estar segura de cada parte da resposta. <b>Fonte primária</b> = a origem oficial da informação: site do governo, bula, contrato, manual do fabricante.</div>`,
        `<div class="card"><h3>Por que isso acontece</h3><p>A IA gera o texto mais provável para continuar a conversa; ela não consulta uma "tabela da verdade" a cada frase. Quando falta informação, o texto provável continua saindo, com a mesma segurança. Pedidos que pressionam por uma resposta exata ("me diga o número exato", "qual é a lei?") sobre algo que ela não sabe aumentam esse risco. Ferramentas com busca na internet ajudam, mas também podem errar ao resumir uma página.</p></div>`,
        `<div class="card"><h3>Exemplo resolvido: a isenção do pai</h3><p>Adriana, 47 anos, cuida do pai aposentado, que recebeu o diagnóstico de uma doença grave. Ela ouviu falar de isenção de imposto de renda e perguntou:</p>
          <div class="flows"><div class="flow old"><h4>Pedido fraco</h4><div class="node">"Meu pai tem direito a isenção do imposto de renda? Qual é a lei?"</div></div></div>
          <p style="margin-top:14px"><b>O que está errado:</b> pede certeza e o número da lei sem dar contexto e sem permitir um "não sei". A IA pode responder "sim" sem conhecer o caso e citar um artigo errado, e a Adriana tomaria decisões com base nisso.</p>
          <ol class="golden"><li><span>Dê o <b>contexto</b>, sem dados pessoais: aposentado, doença grave, o que ela quer entender.</span></li><li><span><b>Autorize a incerteza:</b> diga que prefere "não sei" a um palpite.</span></li><li><span>Peça para <b>separar</b> o que é regra geral do que depende do caso.</span></li><li><span>Peça <b>onde conferir</b>: qual órgão, qual site oficial, que documento costuma ser pedido.</span></li><li><span><b>Confira você</b> na fonte primária antes de agir.</span></li></ol>
          <div class="flows"><div class="flow new"><h4>Pedido melhorado</h4><div class="node good">"Meu pai é aposentado pelo INSS e recebeu diagnóstico de uma doença grave. Quero entender, em linguagem simples, como funciona a isenção de imposto de renda por doença. Separe o que é regra geral do que depende do caso. Se não tiver certeza de algum ponto, diga claramente. Não invente números de lei: indique em que site oficial eu confirmo e que documentos costumam ser pedidos."</div></div></div>
          <p style="margin-top:14px"><b>Resultado esperado:</b> uma explicação geral, com os pontos duvidosos marcados como "confirme", e o caminho para a fonte oficial, no caso o site da Receita Federal e o órgão que paga a aposentadoria.</p></div>`,
        `<div class="card"><h3>🚨 Sinais de alerta na resposta</h3><div class="tw"><table class="tbl"><tr><th>Sinal</th><th>O que fazer</th></tr>
          <tr><td>Número muito preciso sem fonte ("73,4% dos brasileiros")</td><td>Pergunte de onde vem e confira</td></tr>
          <tr><td>Nome de lei, artigo, livro ou estudo</td><td>Procure no site oficial ou num catálogo</td></tr>
          <tr><td>Link que não abre ou leva a outra página</td><td>Descarte a informação</td></tr>
          <tr><td>A resposta muda quando você pergunta de novo</td><td>Sinal de incerteza: vá à fonte</td></tr>
          <tr><td>Segurança total sobre saúde, dinheiro ou direitos</td><td>Confirme com um profissional</td></tr></table></div></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><ol class="golden"><li><span><b>Achar que a frase mágica resolve:</b> "se não souber, diga" reduz a invenção, mas não elimina. A IA pode errar achando que sabe.</span></li><li><span><b>Perguntar "tem certeza?" e aceitar o "sim":</b> como vimos na lição de autocrítica, a IA pode confirmar o próprio erro.</span></li><li><span><b>Pedir fontes e não abrir:</b> a IA pode inventar referências com aparência séria. Fonte que você não abriu não é fonte.</span></li></ol></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez</h3><p>Use o ChatGPT ou o Gemini:</p><ol class="golden"><li><span>Escolha uma pergunta factual que você consegue conferir num site oficial, como a regra de um serviço público ou o prazo de um documento.</span></li><li><span>Escreva o pedido com contexto e autorizando a IA a dizer que não sabe, com as suas palavras.</span></li><li><span>Peça que ela marque as partes de que tem menos certeza.</span></li><li><span>Confira pelo menos 2 afirmações na fonte oficial.</span></li><li><span>Anote: a IA acertou, errou ou avisou corretamente que não tinha certeza?</span></li></ol><p>🔒 Não informe nome, CPF ou número de benefício para fazer a pergunta.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que é melhor um colega dizer "não sei o caminho" do que apontar uma rua qualquer.</div>`
      ],
      ch:[
        { who:'Rodrigo, 34 anos, motorista de aplicativo', says:'Perguntei à IA o valor de uma multa e ela respondeu um valor com centavos e o número do artigo. Parece certinho, mas não sei se é verdade.',
          q:'Qual é a melhor atitude?',
          opts:[
            {t:'Confiar, porque um valor tão preciso deve estar certo.', ok:false, why:'Precisão não é prova. Números com centavos e artigos são justamente o tipo de detalhe que a IA pode inventar com segurança.'},
            {t:'Perguntar "tem certeza?" e, se ela disser que sim, usar a informação.', ok:false, why:'A IA pode confirmar o próprio erro. A pergunta não traz uma fonte nova.'},
            {t:'Conferir o valor e o artigo numa fonte oficial, como o Código de Trânsito ou o site do Detran, antes de usar.', ok:true, why:'Valores e leis mudam e a IA pode errar. A fonte primária é o que dá segurança.'}
          ]},
        { who:'Fernanda, 38 anos, bibliotecária de uma escola estadual', says:'Pedi 5 livros sobre educação financeira para adolescentes. Fui procurar e 2 deles simplesmente não existem.',
          q:'Qual combinação de pedido e hábito evita isso?',
          opts:[
            {t:'Pedir só livros de que a IA tenha alta certeza, avisando quando não tiver, e conferir cada título num catálogo de livraria ou biblioteca antes de indicar.', ok:true, why:'Autorizar a incerteza reduz invenções, e a conferência no catálogo pega as que ainda escaparem.'},
            {t:'Pedir 20 livros, para que pelo menos alguns sejam reais.', ok:false, why:'Mais títulos significam mais chances de invenção e mais trabalho de conferência.'},
            {t:'Parar de usar IA para indicações, porque ela sempre mente.', ok:false, why:'A IA ajuda a ter ideias. O cuidado é pedir com honestidade sobre a incerteza e conferir.'}
          ]},
        { who:'Igor, 29 anos, técnico de informática', says:'Agora eu sempre escrevo "se não souber, diga que não sabe". Então posso confiar 100% nas respostas, certo?',
          q:'O que Igor precisa entender?',
          opts:[
            {t:'Sim: com essa instrução, a IA não inventa mais nada.', ok:false, why:'A instrução reduz o risco, mas não elimina. A IA pode errar achando que está certa.'},
            {t:'Não: a instrução ajuda, mas fatos importantes continuam precisando de conferência na fonte.', ok:true, why:'Pedir honestidade e conferir são hábitos complementares. Um não substitui o outro.'},
            {t:'Sim, desde que ele escreva a instrução em letras maiúsculas.', ok:false, why:'Maiúsculas não mudam a forma como a IA gera o texto. A conferência continua necessária.'}
          ]}
      ]},
    { id:'2.9', title:'Compare a mesma pergunta em duas IAs', min:12,
      body:[
        `<div class="card analogy"><h3>🔧 O segundo orçamento</h3><p>Antes de consertar o carro, muita gente faz orçamento em duas oficinas. Se as duas dizem a mesma coisa, você fica mais tranquilo; se divergem, é sinal para perguntar mais antes de pagar. Com a IA vale a mesma lógica: <b>a mesma pergunta em duas ferramentas mostra o que é sólido e o que merece atenção</b>.</p></div>`,
        `<div class="term"><b>Segunda opinião</b> = enviar o mesmo pedido a outra IA para comparar. <b>Divergência</b> = ponto em que as respostas discordam. <b>Consenso</b> = ponto em que concordam; ajuda, mas não é prova de que está certo.</div>`,
        `<div class="card"><h3>Quando vale a pena</h3><p>Comparar dá trabalho, então use quando o resultado importa: decisões com dinheiro, textos que vão para muita gente, explicações de um assunto que você não domina ou quando a primeira resposta pareceu estranha. Para uma legenda rápida ou uma pergunta simples, uma IA basta.</p></div>`,
        `<div class="card"><h3>Exemplo resolvido: a promoção da loja de roupas</h3><p>Simone tem uma loja de roupas em Fortaleza e está em dúvida entre dois formatos para a Black Friday: 20% de desconto em tudo ou "compre 2, leve 3". Ela perguntou a uma IA só, de qualquer jeito, e ia decidir pela primeira resposta.</p>
          <div class="flows"><div class="flow old"><h4>Jeito fraco</h4><div class="node">Pergunta solta numa IA só ("qual promoção é melhor?") e decisão pela primeira resposta.</div></div></div>
          <p style="margin-top:14px"><b>O que está errado:</b> sem contexto, a resposta é genérica; e sem comparação, ela não sabe se aquela recomendação é sólida ou só um palpite bem escrito.</p>
          <ol class="golden"><li><span>Escreva o pedido <b>uma vez</b>, completo, com o contexto da loja, e salve o texto.</span></li><li><span>Cole <b>exatamente o mesmo pedido</b> no ChatGPT e no Gemini, em conversas novas.</span></li><li><span>Compare numa tabela: o que <b>concordam</b>, o que <b>divergem</b> e o que <b>só uma trouxe</b>.</span></li><li><span>Leve a divergência de volta: pergunte a uma delas sobre o ponto em que a outra discordou, pedindo prós e contras.</span></li><li><span>Decida com os <b>seus números reais</b>: margem de lucro, estoque, perfil das clientes.</span></li></ol>
          <div class="pipe"><div class="node ink">Mesmo pedido</div><div class="ar">➜</div><div class="node ink">IA 1 e IA 2</div><div class="ar">➜</div><div class="node yel">Tabela de comparação</div><div class="ar">➜</div><div class="node ink">Pergunta sobre a divergência</div><div class="ar">➜</div><div class="node ink">Decisão com dados reais</div></div>
          <div class="tw"><table class="tbl"><tr><th>Ponto</th><th>IA 1</th><th>IA 2</th><th>O que Simone faz</th></tr>
          <tr><td>Margem</td><td>20% pode comer o lucro das peças baratas</td><td>"Leve 3" equivale a cerca de 33% de desconto por peça</td><td>As duas alertam para a margem: faz a conta com os custos reais</td></tr>
          <tr><td>Estoque</td><td>Não comentou</td><td>"Leve 3" ajuda a girar peças paradas</td><td>Ponto novo: confere o estoque antes de decidir</td></tr>
          <tr><td>Clientes</td><td>Desconto simples é mais fácil de entender</td><td>Não comentou</td><td>Pensa em como as clientes dela reagem</td></tr></table></div>
          <p><b>Resultado esperado:</b> em vez de uma resposta para acreditar, Simone tem uma lista de pontos para checar e decide com mais segurança.</p></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><ol class="golden"><li><span><b>Mudar o pedido de uma IA para outra:</b> a comparação fica injusta. Se uma recebeu mais detalhes, é claro que respondeu melhor.</span></li><li><span><b>Achar que consenso é verdade:</b> as duas podem repetir o mesmo erro comum da internet. Fatos e números continuam pedindo fonte oficial.</span></li><li><span><b>Escolher a resposta de que gostou mais:</b> sem critério, você só confirma o que já pensava.</span></li><li><span><b>Esquecer a privacidade:</b> colar dados da empresa em duas ferramentas dobra a exposição. Use dados fictícios.</span></li></ol></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez</h3><p>Use o ChatGPT e o Gemini, nos planos gratuitos:</p><ol class="golden"><li><span>Escolha uma decisão pequena e real: um presente, um roteiro de passeio, a organização da sua semana.</span></li><li><span>Escreva o pedido completo uma vez, com as suas palavras, e guarde o texto.</span></li><li><span>Cole o mesmo texto nas duas IAs, em conversas novas.</span></li><li><span>Monte uma tabela com 3 colunas: concordam, divergem, só uma falou.</span></li><li><span>Faça uma pergunta de acompanhamento sobre a principal divergência e anote o que você decidiu.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que é bom ouvir duas pessoas antes de decidir qual caminho seguir numa trilha.</div>`
      ],
      ch:[
        { who:'Bruno, 31 anos, vendedor de móveis planejados', says:'Perguntei ao ChatGPT de um jeito rápido e ao Gemini com bem mais detalhes. O Gemini respondeu muito melhor.',
          q:'O que dá para concluir?',
          opts:[
            {t:'Que o Gemini é melhor que o ChatGPT para qualquer tarefa.', ok:false, why:'A comparação foi injusta: os pedidos eram diferentes. A diferença pode ter vindo dos detalhes, não da ferramenta.'},
            {t:'Que o ChatGPT é sempre melhor, e o resultado foi sorte.', ok:false, why:'Também não dá para concluir isso. Sem o mesmo pedido, nenhuma conclusão sobre as ferramentas vale.'},
            {t:'Nada sobre as ferramentas: para comparar, ele precisa enviar exatamente o mesmo pedido às duas.', ok:true, why:'Só com o mesmo pedido a diferença nas respostas mostra algo sobre as ferramentas.'}
          ]},
        { who:'Cláudio, 58 anos, aposentado', says:'Perguntei a taxa atual do Tesouro Selic para duas IAs e as duas deram o mesmo número. Então está confirmado.',
          q:'Ele pode usar esse número para investir?',
          opts:[
            {t:'Não: consenso não é prova e taxas mudam com frequência. Ele deve confirmar no site oficial do Tesouro Direto.', ok:true, why:'Duas IAs podem repetir a mesma informação desatualizada. Para dinheiro, a fonte oficial é obrigatória.'},
            {t:'Sim: se duas IAs concordam, a informação está certa.', ok:false, why:'Concordância não garante atualidade nem correção. As duas podem ter aprendido o mesmo dado antigo.'},
            {t:'Sim, mas só se uma terceira IA também concordar.', ok:false, why:'Mais IAs concordando continua não sendo fonte oficial. A taxa precisa ser vista no site do Tesouro.'}
          ]},
        { who:'Larissa, 26 anos, social media de uma academia', says:'Comparei as duas IAs: uma recomenda 3 posts por semana e a outra, um por dia. E agora?',
          q:'Qual é o próximo passo mais útil?',
          opts:[
            {t:'Escolher uma das duas ao acaso.', ok:false, why:'Escolher no sorteio desperdiça a comparação que ela acabou de fazer.'},
            {t:'Perguntar a uma delas sobre a divergência, pedindo prós e contras de cada recomendação, e decidir com os dados do próprio perfil, como o engajamento dos últimos meses.', ok:true, why:'A divergência é uma pista. Explorar os motivos e cruzar com dados reais leva à melhor decisão para aquela academia.'},
            {t:'Perguntar a uma terceira IA e seguir a maioria.', ok:false, why:'Votação entre IAs não substitui entender os motivos nem olhar os dados reais do perfil.'}
          ]}
      ]},
    { id:'2.10', title:'Recomeçar sem perder o fio: o resumo de contexto', min:12,
      body:[
        `<div class="card analogy"><h3>🏥 A passagem de plantão</h3><p>No hospital, a enfermeira que termina o plantão não conta tudo o que aconteceu nas últimas 12 horas. Ela passa um resumo do que importa: como está o paciente, o que já foi feito e o que falta fazer. Quem chega continua o trabalho sem recomeçar do zero. Com a IA, <b>o resumo de contexto é a sua passagem de plantão</b> entre uma conversa e outra.</p></div>`,
        `<div class="term"><b>Resumo de contexto</b> = texto curto com o que importa de uma conversa: objetivo, decisões, informações fixas, pendências e regras. <b>Janela de contexto</b> = a quantidade de texto que a IA consegue considerar de uma vez; em conversas muito longas, o começo pode ser esquecido ou perder peso. <b>Memória da ferramenta</b> = recurso de alguns aplicativos que guarda informações entre conversas; ajuda, mas pode guardar coisas erradas e pode ser desligado nas configurações.</div>`,
        `<div class="card"><h3>Quando vale recomeçar</h3><p>A conversa ficou tão longa que a IA começou a esquecer detalhes (como vimos na lição "Conversar para melhorar"); você mudou de assunto; quer continuar outro dia ou em outra ferramenta; ou a conversa ficou cheia de versões e nem você sabe mais qual é a atual. Nesses casos, uma conversa nova com um bom resumo costuma render mais do que insistir na antiga.</p></div>`,
        `<div class="card"><h3>Exemplo resolvido: o casamento da irmã</h3><p>Rafael, 35 anos, está ajudando a organizar o casamento da irmã em Campinas. Faz duas semanas que ele conversa com a IA sobre buffet, local e orçamento. Hoje abriu uma conversa nova e escreveu:</p>
          <div class="flows"><div class="flow old"><h4>Pedido fraco</h4><div class="node">"Continua de onde paramos com o casamento."</div></div></div>
          <p style="margin-top:14px"><b>O que está errado:</b> cada conversa nova começa praticamente do zero. Mesmo com a memória ativada, a IA não guarda todos os detalhes, e pode guardar decisões antigas. Ela vai chutar ou fazer perguntas que ele já respondeu dez vezes.</p>
          <ol class="golden"><li><span>Na conversa antiga, peça um <b>resumo em campos</b>: objetivo, decisões tomadas, informações fixas, pendências e regras de formato.</span></li><li><span><b>Leia e corrija:</b> a IA pode resumir errado ou deixar algo importante de fora.</span></li><li><span><b>Retire dados pessoais</b> que não precisam seguir adiante, como telefones de fornecedores.</span></li><li><span>Abra a conversa nova, <b>cole o resumo</b> e diga qual é o próximo passo.</span></li><li><span><b>Guarde o resumo</b> num documento, para usar de novo.</span></li></ol>
          <div class="tw"><table class="tbl"><tr><th>Campo</th><th>Resumo do Rafael</th></tr>
          <tr><td>Objetivo</td><td>Casamento para 120 convidados em 14 de novembro</td></tr>
          <tr><td>Decisões</td><td>Buffet escolhido; cerimônia e festa no mesmo salão</td></tr>
          <tr><td>Fixos</td><td>Orçamento total de R$ 45 mil (valor do exemplo); estilo rústico</td></tr>
          <tr><td>Pendências</td><td>Escolher o DJ e o modelo do convite</td></tr>
          <tr><td>Regras</td><td>Respostas em tópicos; valores sempre em reais</td></tr></table></div>
          <div class="flows"><div class="flow new"><h4>Pedido melhorado</h4><div class="node good">[resumo corrigido colado] "Este é o contexto do casamento que estou organizando. Próximo passo: vou colar 3 orçamentos de DJ e quero uma tabela comparando preço, horas incluídas e equipamentos, respeitando o orçamento total."</div></div></div>
          <p style="margin-top:14px"><b>Resultado esperado:</b> a IA continua exatamente do ponto certo, sem perguntar de novo o que já foi decidido.</p></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><p><b>Confiar na memória do aplicativo sem conferir:</b> veja nas configurações o que ela guardou e apague o que estiver errado ou for pessoal demais. <b>Colar a conversa inteira em vez do resumo:</b> o problema da conversa longa volta. <b>Usar o resumo sem ler:</b> se a IA continuar com uma decisão que você já mudou, o resumo estava desatualizado. <b>Sinal de que está na hora de recomeçar:</b> você precisa repetir a mesma informação pela terceira vez.</p></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez</h3><p>Use o ChatGPT ou o Gemini:</p><ol class="golden"><li><span>Abra uma conversa longa que você já tem, ou a da prática deste módulo.</span></li><li><span>Peça, com as suas palavras, um resumo nos 5 campos: objetivo, decisões, fixos, pendências e regras.</span></li><li><span>Corrija o resumo e retire dados pessoais.</span></li><li><span>Abra uma conversa nova, cole o resumo e peça o próximo passo.</span></li><li><span>Compare: a IA continuou bem sem você explicar tudo de novo?</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a enfermeira deixa um bilhete para a colega do próximo turno, em vez de contar o dia inteiro.</div>`
      ],
      ch:[
        { who:'Gustavo, 40 anos, professor de cursinho', says:'Abri uma conversa nova e escrevi "continua o plano de aulas de ontem". A IA começou um plano totalmente diferente.',
          q:'O que ele deveria ter feito?',
          opts:[
            {t:'Colar um resumo do plano de ontem (objetivo, aulas prontas, pendências e regras) e então pedir o próximo passo.', ok:true, why:'Conversa nova não conhece a anterior em detalhes. O resumo é a passagem de plantão que permite continuar do ponto certo.'},
            {t:'Concluir que a IA está com defeito.', ok:false, why:'Não é defeito: cada conversa nova começa praticamente do zero, e a memória, quando existe, é parcial.'},
            {t:'Repetir "continua de ontem" com mais insistência.', ok:false, why:'Insistir não dá à IA as informações que ela não tem.'}
          ]},
        { who:'Helena, 33 anos, analista de RH', says:'Pedi o resumo da conversa e colei direto na nova. A IA continuou usando o orçamento antigo, que eu já tinha mudado.',
          q:'O que faltou?',
          opts:[
            {t:'Nada: a IA deveria adivinhar a mudança.', ok:false, why:'Se o resumo traz o valor antigo, a IA não tem como saber que mudou.'},
            {t:'Ler e corrigir o resumo antes de usar, conferindo se as decisões estavam atualizadas.', ok:true, why:'Resumos feitos pela IA podem manter decisões antigas. A revisão é o passo que evita o erro.'},
            {t:'Colar a conversa inteira em vez do resumo.', ok:false, why:'Isso traz de volta os problemas da conversa longa. O certo é um resumo curto e revisado.'}
          ]},
        { who:'Jéssica, 28 anos, confeiteira', says:'O resumo da minha conversa sobre encomendas tem nome e telefone das clientes. Vou colar assim na conversa nova.',
          q:'O que ela deve fazer antes?',
          opts:[
            {t:'Nada, porque o resumo é dela.', ok:false, why:'Os dados são das clientes. Levar telefones adiante sem necessidade aumenta a exposição.'},
            {t:'Pedir à IA que esqueça os telefones depois.', ok:false, why:'Pedir para esquecer não desfaz o envio.'},
            {t:'Retirar nomes e telefones e manter só o que serve para a tarefa, como datas, quantidades e sabores.', ok:true, why:'O resumo deve levar o necessário para continuar o trabalho, não dados pessoais.'}
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
    { id:'3.7', title:'Prompts para estudar: explicar e testar', min:12,
      body:[
        `<div class="card analogy"><h3>🏋️ Ninguém fica forte vendo o treino dos outros</h3><p>Assistir a alguém levantar peso na academia não deixa você mais forte. Ler um resumo pronto é parecido: dá a sensação de que você entendeu, mas pouco fica na cabeça. Responder perguntas e explicar com as suas palavras é levantar o peso. <b>A IA pode ser sua parceira de treino, não quem treina por você.</b></p></div>`,
        `<div class="term"><b>Recordação ativa</b> = tentar lembrar a resposta sem olhar, em vez de reler o material. <b>Quiz</b> = conjunto curto de perguntas para testar o que você sabe. <b>Explicação em camadas</b> = começar simples e aprofundar aos poucos, conforme você entende.</div>`,
        `<div class="card"><h3>Exemplo resolvido: fotossíntese para o Enem</h3><p>Kauã, 17 anos, de Salvador, está estudando biologia para o Enem. O pedido dele foi:</p>
          <div class="flows"><div class="flow old"><h4>Pedido fraco</h4><div class="node">"Me explica fotossíntese."</div></div></div>
          <p style="margin-top:14px"><b>O que está errado:</b> veio um texto longo e correto; ele leu, achou que entendeu e, uma semana depois, não lembrava quase nada. O pedido não diz o nível dele nem transforma a IA em parceira de treino: ela só explica, e ele só lê.</p>
          <ol class="golden"><li><span><b>Explicar:</b> peça uma explicação curta, para o seu nível, com um exemplo do dia a dia.</span></li><li><span><b>Testar:</b> peça perguntas uma de cada vez, sem a resposta junto.</span></li><li><span><b>Corrigir:</b> peça que ela diga o que ficou certo, o que ficou errado e por quê.</span></li><li><span><b>Explicar de volta:</b> escreva o conceito com as suas palavras e peça que ela aponte o que faltou.</span></li><li><span><b>Revisar depois:</b> em outro dia, peça perguntas novas só sobre o que você errou.</span></li></ol>
          <div class="flows"><div class="flow new"><h4>Pedido melhorado</h4><div class="node good">"Estou estudando para o Enem e tenho dificuldade em biologia. Explique fotossíntese em até 10 linhas, com um exemplo do dia a dia. Depois me faça 5 perguntas, uma de cada vez, esperando a minha resposta. Corrija cada resposta explicando o erro, sem me dar a próxima resposta pronta."</div></div></div>
          <p style="margin-top:14px"><b>Resultado esperado:</b> uma explicação curta, seguida de um treino em que o Kauã precisa puxar a resposta da memória, e uma lista do que ele ainda erra para revisar.</p></div>`,
        `<div class="card"><h3>🎯 Que tipo de pergunta pedir</h3><div class="tw"><table class="tbl"><tr><th>Tipo</th><th>Para quê</th></tr>
          <tr><td>Múltipla escolha</td><td>Reconhecer conceitos, no estilo das provas</td></tr>
          <tr><td>Resposta curta</td><td>Lembrar sem pistas, o treino mais forte</td></tr>
          <tr><td>Aplicação ("por que a planta morre no escuro?")</td><td>Entender, e não só decorar</td></tr>
          <tr><td>Achar o erro numa frase</td><td>Prestar atenção aos detalhes</td></tr></table></div>
          <p>Se você estuda por uma apostila, um edital ou anotações suas, o NotebookLM ajuda: ele responde com base nos documentos que você envia e mostra o trecho de onde tirou cada informação, o que reduz a chance de inventar conteúdo fora do seu material.</p></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><ol class="golden"><li><span><b>Parar no resumo:</b> se você só leu, ainda não treinou. Sinal: você não consegue explicar sem olhar.</span></li><li><span><b>Pergunta com a resposta embaixo:</b> vira cola. Peça uma por vez e responda antes de ver a correção.</span></li><li><span><b>Confiar no gabarito sem conferir:</b> a IA pode errar contas e detalhes. Na dúvida, confira no livro ou na apostila.</span></li><li><span><b>Pedir que a IA faça a tarefa por você:</b> entregar um trabalho escrito pela IA não ensina nada e pode ser considerado plágio. Siga as regras da escola ou do curso.</span></li></ol></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez</h3><p>Use o NotebookLM, gratuito com conta Google:</p><ol class="golden"><li><span>Escolha um material de estudo seu, como um capítulo, uma apostila ou suas anotações, sem dados pessoais.</span></li><li><span>Envie o material como fonte.</span></li><li><span>Peça, com as suas palavras, uma explicação do trecho mais difícil para o seu nível.</span></li><li><span>Peça perguntas uma de cada vez e responda sem olhar o material.</span></li><li><span>Confira as citações e anote os pontos que você errou, para revisar em outro dia.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que brincar de "pergunta e resposta" ajuda mais a lembrar do que ler o caderno de novo.</div>`
      ],
      ch:[
        { who:'Natália, 22 anos, estudante de enfermagem', says:'Na véspera da prova eu leio os resumos que a IA faz. Na hora da prova, esqueço quase tudo.',
          q:'O que mais ajudaria Natália?',
          opts:[
            {t:'Pedir resumos ainda maiores e mais completos.', ok:false, why:'Ler mais não resolve o problema de lembrar. O que falta é treinar a recordação.'},
            {t:'Ler o mesmo resumo três vezes seguidas.', ok:false, why:'Reler dá sensação de domínio, mas fixa pouco. Testar-se funciona melhor.'},
            {t:'Usar o ciclo: explicação curta, perguntas uma de cada vez sem ver a resposta, correção e revisão do que errou em dias diferentes.', ok:true, why:'Puxar a resposta da memória e revisar os erros com intervalo é o que faz o conteúdo ficar.'}
          ]},
        { who:'Edson, 45 anos, estudando para um concurso público', says:'Pedi um quiz e a IA mandou as 10 perguntas com as respostas logo embaixo de cada uma.',
          q:'Qual ajuste no pedido resolve?',
          opts:[
            {t:'Pedir uma pergunta por vez, esperando a resposta dele antes de corrigir e passar para a próxima.', ok:true, why:'Sem ver a resposta antes, ele precisa lembrar de verdade. É isso que treina para a prova.'},
            {t:'Continuar assim, lendo perguntas e respostas juntas.', ok:false, why:'Ler a resposta pronta vira leitura, não treino de recordação.'},
            {t:'Desistir do quiz e voltar só aos resumos.', ok:false, why:'O quiz é uma ótima ferramenta; só precisava de um pedido mais claro sobre como funcionar.'}
          ]},
        { who:'Bianca, 15 anos, aluna do 9º ano', says:'Tenho uma redação para entregar amanhã. Penso em pedir para a IA escrever e eu só copio.',
          q:'Qual uso ajuda Bianca a aprender e respeita a escola?',
          opts:[
            {t:'Entregar o texto da IA como se fosse dela.', ok:false, why:'Além de não aprender, ela estaria apresentando como seu um texto que não escreveu.'},
            {t:'Escrever a redação ela mesma e pedir à IA que aponte problemas de clareza e argumentação, explicando o porquê, sem reescrever por ela, seguindo as regras da escola.', ok:true, why:'Assim a IA vira professora particular: Bianca escreve, entende os erros e melhora o próprio texto.'},
            {t:'Copiar o texto da IA trocando algumas palavras.', ok:false, why:'Trocar palavras não torna o texto dela e continua sem ensinar a escrever.'}
          ]}
      ]},
    { id:'3.8', title:'Tabelas e checklists prontos para usar', min:12,
      body:[
        `<div class="card analogy"><h3>🛒 A lista de compras por corredor</h3><p>Quem organiza a lista de compras pela ordem dos corredores do mercado não precisa ficar indo e voltando: hortifrúti, açougue, mercearia, limpeza. A organização foi feita antes, em casa. Com a IA é igual: <b>pedir a resposta já no formato do lugar onde você vai usar</b> evita refazer tudo depois.</p></div>`,
        `<div class="term"><b>Coluna</b> = cada tipo de informação da tabela, como item, quantidade ou data. <b>Linha</b> = cada registro, como um produto ou uma tarefa. <b>Formato estruturado</b> = resposta com estrutura fixa (tabela, checklist, passos numerados) que dá para copiar e usar direto. <b>CSV</b> = texto em que cada linha é um registro e os campos são separados por vírgula ou ponto e vírgula; as planilhas abrem esse formato.</div>`,
        `<div class="card"><h3>Exemplo resolvido: as compras da marmitaria</h3><p>Edinalva, 50 anos, tem uma marmitaria em Belém e quer organizar as compras da semana numa planilha. O pedido dela foi:</p>
          <div class="flows"><div class="flow old"><h4>Pedido fraco</h4><div class="node">"Faz a lista de compras para o cardápio da semana."</div></div></div>
          <p style="margin-top:14px"><b>O que está errado:</b> veio um texto corrido, com quantidades misturadas às palavras ("uns 3 quilos de frango", "um pouco de cheiro-verde"). Para passar para a planilha, ela teria que redigitar tudo, e não daria para somar nada.</p>
          <ol class="golden"><li><span>Diga <b>onde vai usar</b>: Planilhas Google, Excel, impressão, celular.</span></li><li><span>Defina as <b>colunas</b>, na ordem, com o nome de cada uma.</span></li><li><span>Dê <b>regras por coluna</b>: só número na quantidade, unidade separada, data no formato dia/mês.</span></li><li><span><b>Um item por linha</b>, sem juntar dois produtos na mesma célula.</span></li><li><span>Peça <b>nada de texto fora da tabela</b>, ou as observações só no final.</span></li><li><span><b>Confira</b> quantidades e totais na própria planilha.</span></li></ol>
          <div class="flows"><div class="flow new"><h4>Pedido melhorado</h4><div class="node good">"Monte a lista de compras para 40 marmitas por dia, de segunda a sexta, com base no cardápio que vou colar. Responda só com uma tabela com as colunas: Item, Categoria (hortifrúti, carnes, mercearia), Quantidade (só número), Unidade (kg, unidade ou litro) e Observação. Um item por linha. Não invente preços."</div></div></div>
          <p style="margin-top:14px"><b>Resultado esperado:</b> uma tabela que ela copia e cola na planilha com as colunas já separadas, pronta para filtrar por categoria e somar quantidades.</p></div>`,
        `<div class="card"><h3>📦 Qual formato pedir</h3><div class="tw"><table class="tbl"><tr><th>Formato</th><th>Quando usar</th><th>Como pedir</th></tr>
          <tr><td>Tabela</td><td>Comparar, somar, filtrar</td><td>Colunas nomeadas, um dado por célula</td></tr>
          <tr><td>Checklist</td><td>Tarefas para marcar como feitas</td><td>Um item por linha, verbo no início, caixa para marcar</td></tr>
          <tr><td>Passos numerados</td><td>Processos que seguem uma ordem</td><td>Um verbo por passo, na sequência certa</td></tr>
          <tr><td>CSV</td><td>Quando colar a tabela não separa as colunas</td><td>Campos separados por ponto e vírgula, primeira linha com os nomes das colunas</td></tr></table></div></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><p><b>Número e texto na mesma célula:</b> "2 kg de arroz" impede a soma; separe quantidade e unidade. <b>Tabela grande demais de uma vez:</b> a IA pode cortar linhas ou se perder; peça por partes, como um dia ou uma categoria por vez. <b>Confiar nas contas da IA:</b> use a tabela para organizar e faça os totais com fórmula na planilha. <b>Dados de clientes na tabela:</b> use dados fictícios para montar o modelo. <b>Como perceber:</b> se você precisa apagar texto antes de colar, ou se a soma dá erro, a estrutura não estava clara no pedido.</p></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez</h3><p>Use o Microsoft Copilot e o Google Docs ou o Planilhas Google:</p><ol class="golden"><li><span>Escolha uma lista real: compras, tarefas de uma mudança, materiais de uma festa.</span></li><li><span>Decida as colunas antes de pedir e anote no papel.</span></li><li><span>Escreva o pedido no Copilot, com as suas palavras, informando colunas, unidades e um item por linha.</span></li><li><span>Copie a tabela para o documento ou a planilha e veja se as colunas se separaram.</span></li><li><span>Some uma coluna com fórmula e compare com o que a IA calculou, se ela calculou.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que é mais fácil achar um brinquedo numa caixa com divisórias do que numa caixa onde está tudo misturado.</div>`
      ],
      ch:[
        { who:'Joaquim, 61 anos, dono de um mercadinho em Uberlândia', says:'A IA fez a tabela do pedido ao fornecedor, mas numa célula está escrito "3 caixas de 12 un". A planilha não consegue somar.',
          q:'Qual ajuste resolve?',
          opts:[
            {t:'Pedir colunas separadas para Quantidade (só número) e Unidade, deixando claro que a coluna de quantidade não pode ter texto.', ok:true, why:'Um dado por célula, com número sozinho, é o que permite à planilha somar e filtrar.'},
            {t:'Continuar com a tabela assim e somar tudo à mão.', ok:false, why:'Dá para evitar o retrabalho com uma regra simples no pedido.'},
            {t:'Pedir uma tabela mais colorida e bonita.', ok:false, why:'Aparência não resolve o problema da estrutura dos dados.'}
          ]},
        { who:'Tamires, 29 anos, organizadora de festas infantis', says:'Quero uma lista de montagem da festa para a equipe ir marcando no celular durante o evento.',
          q:'Qual formato faz mais sentido pedir?',
          opts:[
            {t:'Um texto corrido explicando tudo o que precisa ser feito.', ok:false, why:'Texto corrido não deixa marcar o que já foi feito e se perde no celular.'},
            {t:'Uma tabela com 15 colunas de detalhes para cada tarefa.', ok:false, why:'Tabela larga é difícil de ler no celular e excessiva para quem só precisa marcar tarefas.'},
            {t:'Um checklist com um item por linha, verbo no início, agrupado por momento (antes, durante e depois da festa).', ok:true, why:'O checklist foi feito para marcar tarefas, e os grupos por momento ajudam a equipe a seguir a ordem.'}
          ]},
        { who:'Anderson, 37 anos, auxiliar de escritório', says:'A IA montou a tabela de despesas do mês com uma coluna Total no fim. Conferi e o total estava errado.',
          q:'Qual é o uso mais seguro?',
          opts:[
            {t:'Usar o total da IA, porque a diferença é pequena.', ok:false, why:'Diferença pequena num mês vira grande no ano, e não dá para saber onde mais ela errou.'},
            {t:'Usar a IA para organizar os itens e calcular o total com fórmula na planilha, conferindo os valores lançados.', ok:true, why:'A IA organiza bem, mas pode errar contas. A fórmula da planilha calcula com exatidão.'},
            {t:'Pedir para a IA refazer a conta até o número bater com o que ele acha.', ok:false, why:'Ajustar até "bater" não garante que está certo. A planilha é a ferramenta certa para a conta.'}
          ]}
      ]},
    { id:'3.9', title:'Respostas de atendimento para WhatsApp e e-mail', min:12,
      body:[
        `<div class="card analogy"><h3>🎧 O atendente que segue roteiro sem virar robô</h3><p>Numa boa loja, o atendente sabe as regras de troca e os prazos de cor, mas não fala como robô: ele adapta o jeito ao cliente que está na frente dele. Com a IA dá para montar <b>respostas-modelo para as perguntas que chegam sempre</b>, e você ajusta cada envio para a pessoa.</p></div>`,
        `<div class="term"><b>Resposta-modelo</b> = texto base para uma pergunta frequente, com [VARIÁVEIS] para personalizar. <b>Política</b> = regra real do negócio, como prazo, troca e reembolso, que a resposta não pode contrariar. <b>Escalar</b> = passar o caso para uma pessoa responsável quando ele sai do padrão.</div>`,
        `<div class="card"><h3>Cada canal tem seu jeito</h3><div class="tw"><table class="tbl"><tr><th>Canal</th><th>Tamanho</th><th>Tom</th><th>Estrutura</th></tr>
          <tr><td>WhatsApp</td><td>2 a 5 linhas</td><td>Próximo e direto</td><td>Uma ideia por mensagem, pergunta no fim</td></tr>
          <tr><td>E-mail</td><td>Mais completo</td><td>Mais formal</td><td>Assunto claro, saudação, parágrafos curtos, assinatura</td></tr></table></div></div>`,
        `<div class="card"><h3>Exemplo resolvido: o pedido atrasado</h3><p>Cleide tem uma loja online de capinhas de celular em São Paulo. Uma cliente mandou mensagem irritada porque o pedido está atrasado. Cleide colou a conversa e pediu:</p>
          <div class="flows"><div class="flow old"><h4>Pedido fraco</h4><div class="node">"Responde essa cliente: [conversa com nome, número do pedido e endereço]."</div></div></div>
          <p style="margin-top:14px"><b>O que está errado:</b> expôs dados da cliente sem necessidade e não disse a política da loja. A IA respondeu prometendo "entrega amanhã com frete grátis na próxima compra", algo que a Cleide não pode garantir. E o que se promete por escrito pode ser cobrado pela cliente.</p>
          <ol class="golden"><li><span>Informe o <b>contexto e a política real</b>: prazos, o que a loja faz em caso de atraso.</span></li><li><span>Descreva a <b>situação sem dados pessoais</b>: há quanto tempo a cliente espera.</span></li><li><span>Diga o <b>canal e o tom</b>.</span></li><li><span>Diga o <b>objetivo</b>: acalmar, informar o próximo passo, sem prometer o que não pode.</span></li><li><span>Diga o que <b>evitar</b>: culpar a cliente, prometer data sem confirmação.</span></li><li><span><b>Revise e personalize</b> antes de enviar: quem responde é você, não a IA.</span></li></ol>
          <div class="flows"><div class="flow new"><h4>Pedido melhorado</h4><div class="node good">"Tenho uma loja online de capinhas. Política: entrega em até 8 dias úteis; em caso de atraso, abrimos chamado com a transportadora e damos retorno em até 2 dias úteis; se o pedido não chegar, a cliente escolhe entre reenvio e reembolso. Uma cliente espera há 12 dias úteis e está irritada. Escreva uma resposta para WhatsApp, até 5 linhas, tom calmo e respeitoso, que peça desculpas, explique o próximo passo e não prometa data de entrega. Não culpe a cliente nem a transportadora."</div></div></div>
          <p style="margin-top:14px"><b>Resultado esperado:</b> uma resposta curta e humana, que respeita a política da loja. Depois, Cleide troca o que muda por [NOME] e [DIAS DE ATRASO] e guarda como modelo na biblioteca.</p></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><p><b>Deixar a IA inventar a política:</b> se a resposta promete desconto, brinde ou prazo que você não informou, apague. <b>Resposta igual para todos:</b> o cliente percebe o texto de robô; personalize ao menos o nome e o detalhe do caso. <b>Colar conversas com dados pessoais:</b> descreva a situação em vez de colar. <b>Usar modelo em caso grave:</b> reclamação de segurança, dano, saúde ou ameaça de processo deve ir para uma pessoa responsável decidir. <b>Como perceber:</b> leia a resposta em voz alta e pergunte se você assinaria embaixo.</p></div>`,
        `<div class="card"><h3>✍️ Agora é sua vez</h3><p>Use o Microsoft Copilot e guarde o resultado no Google Docs:</p><ol class="golden"><li><span>Escolha 2 perguntas que clientes, ou as pessoas que você atende, fazem sempre.</span></li><li><span>Escreva a regra real de cada uma: prazo, preço, condição.</span></li><li><span>Peça ao Copilot, com as suas palavras, uma versão para WhatsApp e outra para e-mail.</span></li><li><span>Troque o que muda por [VARIÁVEIS] e salve na sua biblioteca de prompts.</span></li><li><span>Leia em voz alta: parece você falando?</span></li></ol><p>🔒 Não cole nomes, telefones nem conversas reais de clientes.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o atendente da loja segue as regras da loja, mas não fala igualzinho com todo mundo.</div>`
      ],
      ch:[
        { who:'Wesley, 32 anos, gerente de uma pizzaria delivery em Natal', says:'A IA escreveu uma resposta para um cliente reclamando do atraso e prometeu "pizza grátis no próximo pedido". A gente não faz isso.',
          q:'O que Wesley deve mudar?',
          opts:[
            {t:'Informar a política real no pedido, dizer o que pode e o que não pode ser prometido e revisar a resposta antes de enviar.', ok:true, why:'Sem a política, a IA inventa compensações. E o que se promete por escrito pode ser cobrado pelo cliente.'},
            {t:'Enviar assim mesmo e cumprir a promessa para não ficar mal.', ok:false, why:'Resolve um caso e cria um problema: outros clientes vão esperar o mesmo, e a pizzaria não oferece isso.'},
            {t:'Pedir que a IA seja ainda mais simpática.', ok:false, why:'Simpatia não era o problema. Faltou a regra do negócio no pedido.'}
          ]},
        { who:'Rita, 49 anos, secretária de uma clínica odontológica', says:'Usei a mesma confirmação de consulta para WhatsApp e e-mail. No WhatsApp ficou enorme, com "Prezado paciente" e assinatura.',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Usar o mesmo texto nos dois canais, para padronizar.', ok:false, why:'Padronizar a informação é bom, mas cada canal pede um tamanho e um tom.'},
            {t:'Pedir duas versões: no WhatsApp, curta, com uma pergunta para confirmar no fim; no e-mail, com assunto, saudação e os detalhes da consulta.', ok:true, why:'A mesma informação, adaptada ao canal, é lida e respondida com mais facilidade.'},
            {t:'Mandar a confirmação só por e-mail.', ok:false, why:'Muitos pacientes respondem mais pelo WhatsApp. O ajuste é adaptar o texto, não abandonar o canal.'}
          ]},
        { who:'Fabrício, 36 anos, dono de uma loja de eletrônicos', says:'Um cliente disse que o carregador que comprou esquentou e queimou parte do sofá, e falou em processo. Vou deixar a IA responder com o modelo de troca.',
          q:'Qual é a atitude correta?',
          opts:[
            {t:'Deixar a IA responder sozinha, já que ela escreve bem.', ok:false, why:'Casos com risco à segurança e possível dano não podem ficar por conta de uma resposta automática.'},
            {t:'Mandar o modelo de troca padrão e encerrar o atendimento.', ok:false, why:'O caso saiu do padrão. Tratar como troca comum pode piorar a situação.'},
            {t:'Escalar: responder com acolhimento, sem admitir nem negar culpa, e levar o caso para quem decide. A IA pode, no máximo, ajudar a rascunhar a primeira mensagem, revisada por ele.', ok:true, why:'Casos graves pedem decisão humana. Modelos servem para as perguntas frequentes, não para situações de risco.'}
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
  1: 'Você já sabe o que torna um pedido claro: contexto, exemplos, limites, formato, papel e público, montados peça por peça e sem expor dados pessoais. Isso muda a qualidade de tudo o que você pedir.',
  2: 'Você aprendeu a refinar, dividir tarefas, deixar a IA te entrevistar, revisar a própria resposta, admitir quando não sabe e comparar duas IAs, além de recomeçar uma conversa com um bom resumo. Agora você conduz a conversa.',
  3: 'Parabéns, você concluiu o curso Prompts que Funcionam! Você tem um kit de modelos testados, prompts para estudar, montar tabelas e responder clientes, e um método para corrigir o que não funciona. Já pode emitir o certificado do curso. Próximo passo da trilha: o curso "IA no Trabalho e no Dia a Dia".'
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
const LIC = { '1.1':'🎯','1.2':'🖼️','1.3':'📏','1.4':'🎙️','1.5':'🧭','1.6':'📝','1.7':'🎂','1.8':'🕶️','2.1':'💬','2.2':'🧩','2.3':'🎤','2.4':'🔁','2.5':'🔀','2.6':'😈','2.7':'🪜','2.8':'🤔','2.9':'⚖️','2.10':'🔄','3.1':'🧰','3.2':'🔧','3.3':'📚','3.4':'📎','3.5':'📷','3.6':'🗃️','3.7':'🎓','3.8':'📊','3.9':'🎧' };

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
