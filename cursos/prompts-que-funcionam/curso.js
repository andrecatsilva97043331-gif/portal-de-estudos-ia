/* Curso: Prompts que Funcionam (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🎯', title:'Pedir com clareza', sub:'O que faz um bom pedido', lessons:[
    { id:'1.1', title:'Por que o jeito de pedir muda tudo', min:5,
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
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que "faz algo de comer" não funciona tão bem quanto uma receita, e como isso vale para a IA.</div>`
      ],
      ch:{ who:'Camila, 31 anos, assistente administrativa', says:'Pedi \'faz um resumo\' e a IA mandou um monte de coisa que não ajudou. O que eu fiz de errado?',
        q:'Qual é o melhor ajuste?',
        opts:[
          {t:'Pedir "um resumo bom" e torcer para a IA acertar desta vez.', ok:false, why:'"Bom" não diz nada para a IA. Sem tamanho, foco e uso do resumo, ela continua adivinhando.'},
          {t:'Dizer o que resumir, para quem é, o tamanho e o que destacar.', ok:true, why:'Com o texto, o público, o tamanho e o foco, a IA deixa de adivinhar e entrega algo útil.'},
          {t:'Colar um texto bem maior para a IA ter mais material.', ok:false, why:'Mais material sem direção não resolve. O problema era a falta de instruções, não de conteúdo.'}
        ]}},
    { id:'1.2', title:'Mostre um exemplo do que você quer', min:7,
      body:[
        `<div class="card analogy"><h3>💇 A foto do corte de cabelo</h3><p>Dizer ao cabeleireiro "quero um corte moderno" é arriscado. Mostrar a foto do corte que você quer elimina a dúvida. Com a IA, <b>um exemplo vale mais que mil explicações</b>.</p></div>`,
        `<div class="term"><b>Exemplo</b> = um modelo do resultado que você espera, escrito por você. <b>Estilo</b> = o jeito de escrever: formal, divertido, curto, técnico. <b>Few-shot</b> = técnica de dar poucos exemplos (1 a 3) dentro do prompt.</div>`,
        `<div class="card"><h3>1 a 3 exemplos já mudam o resultado</h3><p>Quando o texto precisa ter um tom ou formato específico, descreva e mostre:</p>
          <ol class="golden"><li><span>Diga a <b>tarefa</b>.</span></li><li><span>Cole <b>1 a 3 exemplos</b> do que você considera ideal.</span></li><li><span>Peça o novo item <b>no mesmo estilo</b>.</span></li></ol>
          <p><b>Exemplo:</b> "Escreva legendas curtas para minha doceria, no mesmo estilo destes exemplos: 'Hoje tem brigadeiro quentinho 🍫' e 'Sextou com doce na mesa 🎉'. Agora crie 5 para o bolo de cenoura."</p>
          <p>💡 Dica: os exemplos devem ser parecidos entre si e realmente bons, porque a IA copia o padrão, <b>inclusive os defeitos</b>.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que mostrar uma foto ao cabeleireiro funciona melhor do que descrever com palavras, e relacione com dar exemplos à IA.</div>`
      ],
      ch:{ who:'Marcos, 28 anos, dono de uma barbearia', says:'Quero que a IA escreva meus posts no mesmo tom engraçado dos que eu já faço. Como eu peço?',
        q:'Qual é o melhor caminho?',
        opts:[
          {t:'Colar 2 ou 3 posts dele de que ele gosta e pedir novos posts no mesmo estilo.', ok:true, why:'Exemplos reais mostram o tom, o tamanho e o jeito de falar. A IA segue o padrão.'},
          {t:'Pedir "posts engraçados" e aceitar o que vier.', ok:false, why:'"Engraçado" é subjetivo. Sem exemplos, a IA usa o humor mais comum, e não o dele.'},
          {t:'Colar 30 posts de qualquer tipo, até de outros assuntos.', ok:false, why:'Exemplos misturados e demais confundem a IA. Poucos exemplos bons e parecidos funcionam melhor.'}
        ]}},
    { id:'1.3', title:'Limites e formato: o que fazer e o que evitar', min:6,
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
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um arquiteto precisa saber o orçamento antes de desenhar, e como isso se parece com dar limites à IA.</div>`
      ],
      ch:{ who:'Fabiana, 36 anos, professora do ensino fundamental', says:'Pedi um texto sobre o ciclo da água e veio um artigo enorme e cheio de palavras difíceis para meus alunos de 8 anos.',
        q:'Qual é o melhor ajuste?',
        opts:[
          {t:'Pedir de novo o mesmo texto, esperando que a IA acerte a idade dos alunos.', ok:false, why:'Sem dizer a idade e o tamanho, a IA continuará adivinhando.'},
          {t:'Reclamar com a IA e mudar de ferramenta.', ok:false, why:'O problema está no pedido, não na ferramenta. Qualquer IA entrega o mesmo sem limites claros.'},
          {t:'Informar o público, o tamanho e o tom, por exemplo: "texto para crianças de 8 anos, até 120 palavras, linguagem simples, com uma comparação do dia a dia".', ok:true, why:'Público, tamanho e tom dão à IA os limites de que ela precisa para acertar.'}
        ]}}
  ]},
  { id:2, icon:'🔁', title:'Refinar e raciocinar', sub:'Melhorando as respostas', lessons:[
    { id:'2.1', title:'Conversar para melhorar', min:6,
      body:[
        `<div class="card analogy"><h3>✏️ O editor que lapida o texto</h3><p>Um bom texto raramente sai pronto de primeira. O escritor entrega o rascunho e o editor pede ajustes: "corta aqui", "explica melhor ali". <b>A conversa com a IA é essa lapidação.</b></p></div>`,
        `<div class="term"><b>Iteração</b> = melhorar a resposta em rodadas, pedindo ajustes. <b>Feedback</b> = o que você diz sobre o que gostou e o que quer mudar. <b>Versão</b> = cada resposta que a IA entrega ao longo da conversa.</div>`,
        `<div class="card"><h3>Ajuste específico vence "refaz"</h3><p>Em vez de "não gostei, refaz", diga o que mudar: "mantenha a introdução, encurte o segundo parágrafo e troque o tom por mais direto".</p>
          <p>Boas frases de refinamento:</p>
          <ol class="golden"><li><span>"Mais curto e mais simples."</span></li><li><span>"Dê 3 versões diferentes."</span></li><li><span>"O que está faltando nesta resposta?"</span></li><li><span>"Mantenha X e mude só Y."</span></li></ol>
          <p>Peça 3 versões e escolha a melhor: é mais rápido do que tentar acertar de primeira.</p>
          <p>⚠️ Atenção: em conversas muito longas a IA pode perder detalhes do início, então reforce o que for importante.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um escritor mostra o rascunho a um editor antes de publicar, e como isso se parece com conversar com a IA.</div>`
      ],
      ch:{ who:'Eduardo, 40 anos, corretor de imóveis', says:'A IA escreveu o anúncio do apartamento, mas ficou formal demais. Já escrevi \'refaz\' três vezes e nada melhora.',
        q:'O que fazer?',
        opts:[
          {t:'Continuar escrevendo "refaz" até a IA acertar sozinha.', ok:false, why:'"Refaz" não diz o que mudar, então a IA só gera variações parecidas.'},
          {t:'Dizer o que mudar: "mantenha as informações, deixe o tom mais leve e curto, com no máximo 5 linhas".', ok:true, why:'Um ajuste específico mostra à IA exatamente o que corrigir e o que preservar.'},
          {t:'Apagar tudo e escrever o anúncio sozinho, porque a IA não serve.', ok:false, why:'A IA serve, e já entregou um bom rascunho. O que faltou foi orientar o ajuste.'}
        ]}},
    { id:'2.2', title:'Quebrar tarefas grandes em passos', min:7,
      body:[
        `<div class="card analogy"><h3>🪛 Montar um móvel seguindo o manual</h3><p>Ninguém monta um guarda-roupa de uma vez só: o manual divide em etapas, e cada uma só começa quando a anterior termina. <b>Tarefas grandes para a IA funcionam igual.</b></p></div>`,
        `<div class="term"><b>Decomposição</b> = dividir uma tarefa grande em partes menores. <b>Etapa</b> = um passo da tarefa, com começo e fim. <b>Plano</b> = a lista de etapas na ordem em que serão feitas.</div>`,
        `<div class="card"><h3>Peça o plano antes do resultado</h3><p>Pedido grande e único gera resposta rasa: "Crie um plano de negócios completo." Melhor:</p>
          <ol class="golden"><li><span>"Liste as etapas para montar um plano de negócios simples."</span></li><li><span>"Vamos fazer a etapa 1: descrição do produto."</span></li><li><span>Revise e siga para a etapa 2.</span></li></ol>
          <div class="pipe"><div class="node ink">Plano</div><div class="ar">➜</div><div class="node ink">Etapa 1</div><div class="ar">➜</div><div class="node yel">Revisão</div><div class="ar">➜</div><div class="node ink">Etapa 2</div><div class="ar">➜</div><div class="node ink">...</div></div>
          <p>Também ajuda dizer "vá passo a passo e explique o raciocínio de cada etapa", porque isso facilita você conferir onde a IA errou.</p>
          <p><b>Regra prática:</b> se o resultado final tem mais de uma página ou mais de um objetivo, divida.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que se monta um móvel por etapas, e conte como dividir uma tarefa grande ajuda a IA.</div>`
      ],
      ch:{ who:'Patrícia, 34 anos, empreendedora de doces', says:'Pedi à IA um plano de marketing completo para o ano todo em um só pedido e veio algo genérico e raso.',
        q:'Qual é a melhor estratégia?',
        opts:[
          {t:'Repetir o mesmo pedido, só que escrito em letras maiúsculas para a IA se esforçar mais.', ok:false, why:'Letras maiúsculas não mudam a qualidade. O pedido continua grande demais e sem direção.'},
          {t:'Pedir um plano de 12 meses de uma vez, mas com mais palavras bonitas.', ok:false, why:'Mais palavras não resolvem. O problema é o tamanho da tarefa, não o vocabulário.'},
          {t:'Pedir primeiro as etapas do plano e depois fazer uma etapa por vez, revisando cada uma.', ok:true, why:'Dividir deixa cada parte mais completa e permite corrigir o rumo antes de avançar.'}
        ]}},
    { id:'2.3', title:'Deixe a IA te entrevistar', min:6,
      body:[
        `<div class="card analogy"><h3>🩺 O médico que pergunta antes de receitar</h3><p>Um bom médico não receita assim que você entra: pergunta há quanto tempo, onde dói, se tem alergia. Você também pode <b>pedir que a IA faça perguntas antes de responder</b>.</p></div>`,
        `<div class="term"><b>Pergunta de esclarecimento</b> = pergunta que a IA faz para entender melhor o seu pedido. <b>Briefing</b> = conjunto de informações que orienta um trabalho. <b>Lacuna</b> = informação que está faltando no pedido.</div>`,
        `<div class="card"><h3>Quando você não sabe o que pedir</h3><p>Se o assunto é novo ou você não sabe que detalhes importam, use:</p>
          <div class="flows"><div class="flow new"><h4>Prompt de entrevista</h4><div class="node good">"Antes de responder, me faça até 5 perguntas que você precisa saber para fazer isso bem. Espere minhas respostas."</div></div></div>
          <p style="margin-top:14px">Depois responda e peça o resultado final. Isso funciona para planejar uma viagem, montar um cardápio, escrever uma carta ou estruturar um projeto.</p>
          <p>Responda com honestidade, e se não souber alguma resposta, diga "não sei" e peça sugestões.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o médico faz perguntas antes de dar o remédio, e como a IA também pode fazer perguntas para ajudar melhor.</div>`
      ],
      ch:{ who:'Lúcia, 52 anos, quer abrir uma pequena confeitaria', says:'Nem sei o que perguntar à IA sobre abrir meu negócio. Não sei nem por onde começar.',
        q:'Qual é o melhor primeiro pedido?',
        opts:[
          {t:'"Me faça até 5 perguntas sobre meu projeto e, só depois das minhas respostas, monte um primeiro passo a passo."', ok:true, why:'Deixar a IA conduzir com perguntas descobre o que você não sabia que precisava informar.'},
          {t:'"Me conte tudo sobre confeitaria."', ok:false, why:'Pedido amplo demais: a resposta será longa e genérica, sem ligação com a situação dela.'},
          {t:'Desistir até aprender sobre o assunto em outro lugar.', ok:false, why:'A IA justamente ajuda a descobrir o caminho. Pedir que ela pergunte é uma ótima forma de começar.'}
        ]}}
  ]},
  { id:3, icon:'🧰', title:'Seu kit de prompts', sub:'Prompts para o dia a dia', lessons:[
    { id:'3.1', title:'Modelos de prompt para usar sempre', min:7,
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
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que ter ferramentas prontas facilita o trabalho, e como isso se parece com ter modelos de prompt.</div>`
      ],
      ch:{ who:'Gabriel, 22 anos, estagiário', says:'Toda semana preciso resumir relatórios e reescrevo o pedido do zero. Está me tomando tempo.',
        q:'Qual é a melhor solução?',
        opts:[
          {t:'Aceitar que cada resumo exige um prompt inteiramente novo.', ok:false, why:'Tarefas que se repetem pedem um modelo pronto, e não começar do zero.'},
          {t:'Copiar o prompt de outra pessoa sem entender e usar sempre igual, sem adaptar.', ok:false, why:'Um prompt copiado sem adaptação pode não servir ao seu caso. O modelo precisa ser ajustado a você.'},
          {t:'Criar um modelo com variáveis, como "Resuma [TEXTO] em 5 pontos para [PÚBLICO]", e reutilizar.', ok:true, why:'Um modelo com variáveis poupa tempo e mantém a qualidade, trocando só o que muda.'}
        ]}},
    { id:'3.2', title:'Quando o prompt falha: diagnóstico e correção', min:6,
      body:[
        `<div class="card analogy"><h3>🔧 O mecânico que testa uma peça por vez</h3><p>O mecânico não troca o carro todo: ele ouve o barulho, testa uma peça, ajusta, testa de novo. Com prompts, também se <b>muda uma coisa por vez</b> para descobrir o que resolveu.</p></div>`,
        `<div class="term"><b>Diagnóstico</b> = descobrir por que o resultado não ficou bom. <b>Variável de teste</b> = a única coisa que você muda de cada vez. <b>Conferência</b> = checar se a resposta está correta e útil.</div>`,
        `<div class="card"><h3>Os 4 suspeitos de um prompt que falha</h3>
          <ol class="golden"><li><span>Faltou <b>contexto</b>? (quem, para quem, para quê)</span></li><li><span>Faltou <b>formato ou tamanho</b>?</span></li><li><span>Faltou <b>exemplo</b>?</span></li><li><span>O pedido era <b>grande demais</b>?</span></li></ol>
          <p>Mude <b>UMA</b> coisa e compare. Se mudou várias de uma vez, você não saberá o que funcionou.</p>
          <p>⚠️ Se a resposta está bem escrita mas com informação errada, o problema não é o prompt: é a limitação da IA, e é hora de conferir em fonte oficial, como vimos no curso IA do Zero.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o mecânico troca uma peça por vez, e como isso ajuda a consertar um prompt.</div>`
      ],
      ch:{ who:'Tiago, 30 anos, vendedor', says:'Meu prompt não deu certo, então mudei tudo: o tom, o tamanho, o exemplo e o formato. Agora ficou bom, mas não sei o que resolveu.',
        q:'O que ele deveria ter feito?',
        opts:[
          {t:'Mudar uma coisa por vez, comparando o resultado a cada ajuste.', ok:true, why:'Mudar uma variável por vez mostra o que de fato melhora o resultado e vira aprendizado.'},
          {t:'Mudar tudo sempre, assim o resultado melhora mais rápido.', ok:false, why:'Pode até melhorar, mas você não aprende o que funcionou e não consegue repetir.'},
          {t:'Nunca mudar nada e aceitar a primeira resposta.', ok:false, why:'Ajustar faz parte do processo. Aceitar a primeira resposta desperdiça o potencial da ferramenta.'}
        ]}},
    { id:'3.3', title:'Sua biblioteca pessoal de prompts', min:6,
      body:[
        `<div class="card analogy"><h3>📒 O caderno de receitas da família</h3><p>A receita que deu certo vai para o caderno, com nome e observações, para ser repetida. <b>Seus melhores prompts merecem o mesmo cuidado.</b></p></div>`,
        `<div class="term"><b>Biblioteca de prompts</b> = coleção organizada dos seus prompts que funcionam. <b>Versionar</b> = guardar a versão melhorada com data ou número. <b>Categoria</b> = grupo de prompts parecidos, como "estudo" ou "trabalho".</div>`,
        `<div class="card"><h3>Guarde o que funciona</h3><p>Crie um documento ou uma nota no celular com 3 campos por prompt:</p>
          <div class="tw"><table class="tbl"><tr><th>Campo</th><th>Exemplo</th></tr>
          <tr><td><b>Nome claro</b></td><td>"Resumo de relatório"</td></tr>
          <tr><td><b>Texto com [VARIÁVEIS]</b></td><td>"Resuma [TEXTO] em 5 pontos para [PÚBLICO]."</td></tr>
          <tr><td><b>Observação</b></td><td>"Funciona melhor com até 2 páginas."</td></tr></table></div>
          <ol class="golden"><li><span>Organize por <b>categorias</b>: estudo, trabalho, vida pessoal.</span></li><li><span>A cada melhoria, salve como <b>nova versão</b> ("v2").</span></li><li><span>Revise <b>uma vez por mês</b>: apague o que não usa, melhore o que usa muito.</span></li></ol>
          <p>⚠️ Cuidado: nunca guarde senhas, documentos nem dados de outras pessoas dentro dos prompts salvos, como vimos no curso IA do Zero.</p>
          <p>Próximo passo da trilha: o curso "IA no Trabalho e no Dia a Dia".</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, como organizar uma biblioteca com os seus melhores prompts e por quê.</div>`
      ],
      ch:{ who:'Renato, 37 anos, autônomo', says:'Acertei um prompt ótimo hoje, mas semana passada perdi outro que também era bom. Como evito isso?',
        q:'Qual é a melhor prática?',
        opts:[
          {t:'Confiar na memória, porque prompts bons sempre voltam à cabeça.', ok:false, why:'A memória falha, e foi exatamente assim que ele perdeu o anterior.'},
          {t:'Salvar numa biblioteca com nome, texto com variáveis e observações, e melhorar com o tempo.', ok:true, why:'Um acervo organizado evita perder o que funciona e acelera tudo o que você fizer depois.'},
          {t:'Guardar o prompt junto com os dados reais dos clientes, para lembrar o contexto.', ok:false, why:'Dados de clientes não devem ficar em prompts salvos. Use variáveis e dados fictícios.'}
        ]}}
  ]}
];

const MODDONE = {
  1: 'Você já sabe o que torna um pedido claro: contexto, exemplos, limites e formato. Isso muda a qualidade de tudo o que você pedir.',
  2: 'Você aprendeu a refinar, dividir tarefas e deixar a IA te entrevistar. Agora você conduz a conversa.',
  3: 'Você tem um kit de modelos e um método para corrigir o que não funcionou. Está pronto para usar IA no seu trabalho e no seu dia a dia.'
};

const PROMPTS = {
  1: [
    { title:'Pedido completo com exemplo', desc:'Para pedir textos no seu estilo.',
      text:'Você é [PAPEL]. Quero [TAREFA] para [PÚBLICO], com [TAMANHO] e tom [TOM]. Siga o estilo destes exemplos: [EXEMPLO 1] / [EXEMPLO 2]. Não use [O QUE EVITAR].' }
  ],
  2: [
    { title:'IA que entrevista', desc:'Para quando você não sabe por onde começar.',
      text:'Quero [OBJETIVO]. Antes de responder, me faça até 5 perguntas que você precisa saber para me ajudar bem. Espere as minhas respostas e depois entregue [FORMATO DO RESULTADO] em etapas.' }
  ],
  3: [
    { title:'Diagnóstico de prompt', desc:'Para melhorar um prompt que não funcionou.',
      text:'Este foi o meu prompt: [PROMPT]. Este foi o resultado: [RESULTADO]. Diga o que faltou no prompt (contexto, formato, exemplo ou tamanho do pedido) e reescreva uma versão melhor, explicando a mudança principal.' }
  ]
};

const THEME = { 1:['#22C55E','#14B8A6'], 2:['#14B8A6','#06B6D4'], 3:['#10B981','#22C55E'] };
const LIC = { '1.1':'🎯','1.2':'🖼️','1.3':'📏','2.1':'💬','2.2':'🧩','2.3':'🎤','3.1':'🧰','3.2':'🔧','3.3':'📚' };

return {
  id: 'prompts-que-funcionam',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  dicaPrompts: 'Troque o que está entre [COLCHETES] pelos dados do seu caso e cole em qualquer assistente de IA (ChatGPT, Gemini, Claude...).',
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
