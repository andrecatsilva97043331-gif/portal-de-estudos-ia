/* Curso: Criando Apps com IA (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'💡', title:'Da ideia ao plano', sub:'Antes de pedir qualquer código', lessons:[
    { id:'1.1', title:'Ideia pequena, problema real', min:6,
      body:[
        `<div class="card analogy"><h3>💡 O rascunho da planta</h3><p>Antes de construir uma casa, o arquiteto faz o rascunho. Errar no papel custa quase nada, errar na obra custa caro. Com apps é igual: <b>pensar bem a ideia antes economiza semanas</b>.</p></div>`,
        `<div class="term"><b>MVP (versão mínima útil)</b> = a menor versão do app que já resolve um problema real. <b>Usuário</b> = a pessoa que vai usar o app. <b>Problema</b> = a dor que o app precisa resolver.</div>`,
        `<div class="card"><h3>Uma frase, um problema, três funções</h3><p>Complete: <b>"Meu app ajuda [QUEM] a [FAZER O QUÊ] para [RESULTADO]."</b></p>
          <p>Exemplo: <i>"ajuda donos de salão a lembrar clientes dos horários, para reduzir faltas."</i></p>
          <ol class="golden"><li><span>Comece com <b>1 problema</b>, <b>1 tipo de usuário</b> e no máximo <b>3 funções</b>.</span></li><li><span>Antes de construir, <b>converse com 3 pessoas</b> que têm esse problema e pergunte como resolvem hoje.</span></li><li><span>Tudo que não for essencial vai para uma lista <b>"depois"</b>.</span></li></ol>
          <p>Apps grandes começam pequenos.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o arquiteto faz um rascunho antes de construir a casa, e como isso vale para um app.</div>`
      ],
      ch:{ who:'Elisa, 42 anos, dona de uma escola de dança', says:'Quero um app com agenda, pagamento, chat, loja, vídeos e ranking de alunos, tudo na primeira versão.',
        q:'Qual é o melhor caminho?',
        opts:[
          {t:'Construir tudo de uma vez, para o app já nascer completo.', ok:false, why:'Muitas funções ao mesmo tempo atrasam, encarecem e dificultam descobrir o que realmente importa.'},
          {t:'Desistir, porque a ideia é grande demais.', ok:false, why:'A ideia não é o problema. O problema é querer tudo de uma vez.'},
          {t:'Começar pela função principal, como agenda e lembrete de aulas, e deixar o resto numa lista "depois".', ok:true, why:'Uma versão pequena e útil é construída rápido, testada com gente real e cresce com segurança.'}
        ]}},
    { id:'1.2', title:'Descrevendo o app para a IA', min:7,
      body:[
        `<div class="card analogy"><h3>📝 A encomenda de bolo</h3><p>Quem encomenda um bolo diz o sabor, o tamanho, a data e o que a pessoa não pode comer. Sem isso, o confeiteiro adivinha. <b>A IA também precisa da encomenda bem feita.</b></p></div>`,
        `<div class="term"><b>Requisito</b> = algo que o app precisa fazer. <b>Tela</b> = cada página que o usuário vê. <b>Regra de negócio</b> = regra do seu negócio que o app deve respeitar, como "cancelar até 24 horas antes".</div>`,
        `<div class="card"><h3>O documento de uma página</h3><p>Escreva:</p>
          <ol class="golden"><li><span><b>Objetivo</b> do app.</span></li><li><span><b>Quem usa</b>.</span></li><li><span>As <b>telas</b>, em lista.</span></li><li><span>Os <b>dados</b> que serão guardados (nome, e-mail, horário).</span></li><li><span>As <b>regras do negócio</b>.</span></li><li><span>O que <b>NÃO</b> terá na primeira versão.</span></li><li><span>O <b>visual</b> desejado (cores, estilo).</span></li></ol>
          <p>Depois peça à IA: <i>"Revise este documento e aponte o que está faltando ou confuso."</i> Esse documento será a base do seu pedido ao Cursor.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a encomenda do bolo precisa ter todos os detalhes, e como isso vale para pedir um app à IA.</div>`
      ],
      ch:{ who:'Rogério, 47 anos, dono de uma academia', says:'Escrevi só "quero um app de academia" e o resultado veio uma bagunça.',
        q:'Qual é o melhor ajuste?',
        opts:[
          {t:'Pedir de novo a mesma frase, esperando um resultado melhor.', ok:false, why:'O mesmo pedido vago gera outra bagunça. O ajuste está no pedido.'},
          {t:'Escrever o objetivo, as telas, os dados e as regras (como "cancelar aula até 2 horas antes") e pedir à IA que revise o que falta.', ok:true, why:'Com a encomenda detalhada, a IA deixa de adivinhar e o resultado fica próximo do que você imaginou.'},
          {t:'Trocar de ferramenta até uma delas adivinhar.', ok:false, why:'Nenhuma ferramenta adivinha. O que muda o resultado é a qualidade da descrição.'}
        ]}}
  ]},
  { id:2, icon:'🛠️', title:'Construindo com o Cursor', sub:'Mestre de obras e pedreiro', lessons:[
    { id:'2.1', title:'O Cursor e o agente de IA', min:6,
      body:[
        `<div class="card analogy"><h3>🤖 O mestre de obras e o pedreiro</h3><p>O mestre de obras decide o que construir e confere o resultado. O pedreiro executa rápido. No Cursor, <b>você é o mestre de obras</b> e o agente de IA é o pedreiro: ele faz, e você confere.</p></div>`,
        `<div class="term"><b>Cursor</b> = editor de programação com IA, que cria e altera arquivos do projeto. <b>Agente</b> = modo em que a IA executa várias tarefas e edita arquivos a partir do seu pedido. <b>Projeto</b> = a pasta com todos os arquivos do app.</div>`,
        `<div class="card"><h3>Você comanda, a IA constrói</h3><p>No Cursor você abre uma pasta, descreve o que quer e o agente cria e altera arquivos. Você não precisa saber programar tudo, mas precisa:</p>
          <ol class="golden"><li><span><b>Pedir com clareza</b>, usando o documento da lição anterior.</span></li><li><span>Pedir ao agente: <b>"Explique em linguagem simples o que você fez."</b></span></li><li><span><b>Testar no navegador.</b></span></li></ol>
          <p>Recursos e planos do Cursor mudam, então confira no site oficial.</p>
          <p>⚠️ Cuidado: a IA pode quebrar algo que já funcionava, e por isso <b>nunca aceite sem testar</b>.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que faz o mestre de obras e o que faz o pedreiro, e quem é quem quando você usa o Cursor.</div>`
      ],
      ch:{ who:'Tadeu, 34 anos, comerciante', says:'O Cursor criou 20 arquivos de uma vez e eu não entendi nada. Aceitei tudo e segui em frente.',
        q:'O que ele deveria ter feito?',
        opts:[
          {t:'Pedir ao agente que explique em linguagem simples o que criou, testar no navegador e só então seguir.', ok:true, why:'Entender e testar o que foi feito é o papel do mestre de obras. Isso evita acumular erros escondidos.'},
          {t:'Continuar aceitando tudo sem testar, porque a IA sabe mais do que ele.', ok:false, why:'A IA pode errar ou quebrar algo. Sem testes, o problema aparece quando já é difícil de achar.'},
          {t:'Apagar tudo e desistir do app.', ok:false, why:'Não entender de primeira é normal. Pedir uma explicação resolve.'}
        ]}},
    { id:'2.2', title:'Construir em fatias pequenas e testar', min:7,
      body:[
        `<div class="card analogy"><h3>🧱 Construir cômodo por cômodo</h3><p>Termina-se a cozinha, confere-se a pia e a luz, e só depois se começa o quarto. Se você levanta a casa inteira de uma vez, <b>não sabe onde está o vazamento</b>.</p></div>`,
        `<div class="term"><b>Fatia</b> = uma parte pequena do app, como a tela de login. <b>Teste</b> = usar o app para ver se funciona. <b>Ponto de salvamento (commit)</b> = uma "foto" do projeto num momento bom, para poder voltar se algo quebrar.</div>`,
        `<div class="card"><h3>O ciclo de cada fatia</h3>
          <div class="pipe"><div class="node ink">Pedir 1 fatia</div><div class="ar">➜</div><div class="node ink">Testar</div><div class="ar">➜</div><div class="node yel">Salvar (commit)</div><div class="ar">➜</div><div class="node ink">Próxima fatia</div></div>
          <ol class="golden"><li><span><b>Peça uma fatia.</b></span></li><li><span><b>Teste</b> no navegador e no celular.</span></li><li><span>Se estiver bom, crie um <b>ponto de salvamento</b> (o Git guarda essas versões).</span></li><li><span>Só então peça a <b>próxima</b>.</span></li></ol>
          <p>Use a frase: <i>"Altere somente esta parte e não mexa no que já funciona."</i> Se algo quebrar, volte ao último ponto bom. Pedidos pequenos geram menos erros e erros mais fáceis de achar.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que se constrói e confere um cômodo de cada vez, e como isso vale para criar um app.</div>`
      ],
      ch:{ who:'Marina, 28 anos, confeiteira', says:'Pedi 10 mudanças de uma vez e agora o app não abre mais. Não sei qual quebrou.',
        q:'Qual é o melhor caminho?',
        opts:[
          {t:'Pedir mais 10 mudanças para tentar consertar.', ok:false, why:'Mais mudanças em cima do erro tornam tudo mais confuso.'},
          {t:'Culpar a IA e abandonar o projeto.', ok:false, why:'O problema foi o tamanho do pedido, não o abandono do projeto. Dá para recuperar.'},
          {t:'Voltar ao último ponto salvo e refazer as mudanças em fatias pequenas, testando cada uma.', ok:true, why:'Voltar a um ponto bom e avançar em passos testados isola o erro e recupera o trabalho.'}
        ]}}
  ]},
  { id:3, icon:'🚀', title:'No ar com segurança', sub:'Dados, publicação e feedback', lessons:[
    { id:'3.1', title:'Banco de dados e login sem expor dados', min:7,
      body:[
        `<div class="card analogy"><h3>🔐 O prédio com portaria</h3><p>Cada morador entra no próprio apartamento e não no do vizinho. A portaria confere quem é e abre só a porta certa. Num app com dados de pessoas, <b>o login e as regras de acesso fazem esse papel</b>.</p></div>`,
        `<div class="term"><b>Banco de dados</b> = o lugar onde o app guarda as informações. <b>Autenticação (login)</b> = comprovar quem é a pessoa. <b>Regras de acesso</b> = definem quem pode ler e alterar cada informação. <b>Chave secreta</b> = senha de servidor que nunca pode ir para um código público.</div>`,
        `<div class="card"><h3>Cinco cuidados</h3>
          <ol class="golden"><li><span>Use <b>login</b> para qualquer dado de pessoas.</span></li><li><span>Configure <b>regras para que cada usuário veja só o que é dele</b> (as plataformas de banco de dados têm recursos de regras de acesso).</span></li><li><span><b>Chaves secretas</b> ficam em arquivo de ambiente (<code>.env</code>), fora do código e fora do GitHub. Existem chaves públicas, feitas para o navegador, e secretas, que não são: peça à IA para explicar qual é qual na sua plataforma e confira na documentação.</span></li><li><span><b>Teste</b>: entre com duas contas e tente ver os dados da outra.</span></li><li><span><b>Colete só os dados necessários</b> e avise para que serão usados (LGPD).</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a portaria do prédio só deixa cada morador entrar no próprio apartamento, e como isso vale para um app.</div>`
      ],
      ch:{ who:'Wagner, 40 anos, faz apps para clientes', says:'Coloquei a chave secreta do banco direto no código e subi para o GitHub público. Dá problema?',
        q:'Qual é a resposta correta?',
        opts:[
          {t:'Dá: qualquer pessoa pode ver a chave. Apagar o arquivo não basta, então é preciso gerar uma chave nova e guardá-la em arquivo de ambiente, fora do código.', ok:true, why:'Mesmo apagada, a chave fica no histórico e pode ter sido copiada. Trocar a chave e guardá-la fora do código resolve de verdade.'},
          {t:'Não dá, porque só ele conhece o endereço do repositório.', ok:false, why:'Repositórios públicos podem ser encontrados, inclusive por robôs que procuram chaves expostas.'},
          {t:'Só dá problema se o app tiver muitos usuários.', ok:false, why:'O risco existe desde o primeiro dia, não importa o tamanho do app.'}
        ]}},
    { id:'3.2', title:'Publicar, testar no celular e melhorar', min:6,
      body:[
        `<div class="card analogy"><h3>🚀 A inauguração com convidados</h3><p>Antes de abrir a loja para a cidade, o dono chama alguns amigos para ver o que não funciona. <b>Corrigir com 5 pessoas olhando é muito mais fácil do que com 800.</b></p></div>`,
        `<div class="term"><b>Publicar (deploy)</b> = colocar o app no ar, com um endereço na internet. <b>Teste com usuários</b> = pedir a pessoas reais que usem e contem onde travaram. <b>Feedback</b> = opinião e sugestões de quem usou.</div>`,
        `<div class="card"><h3>Do localhost ao público</h3>
          <ol class="golden"><li><span>Existem <b>hospedagens gratuitas ou de baixo custo</b> para sites e apps simples. As condições mudam, então confira.</span></li><li><span><b>Teste no celular</b>, em pelo menos dois aparelhos.</span></li><li><span>Convide de <b>3 a 5 pessoas</b> do seu público real, observe sem explicar nada e anote onde elas travam.</span></li><li><span><b>Corrija uma coisa por vez.</b></span></li><li><span>Tenha um <b>backup</b> e um jeito de voltar à versão anterior.</span></li><li><span>Só <b>divulgue amplamente</b> depois desse teste.</span></li></ol>
          <p>Próximo passo da trilha: o curso <b>"Agentes de IA"</b>.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, por que é melhor testar com poucas pessoas antes de lançar para todo mundo.</div>`
      ],
      ch:{ who:'Carolina, 33 anos, criou um app de agendamento', says:'Quero lançar para todos os meus 800 clientes amanhã, sem ninguém testar antes.',
        q:'Qual é a melhor estratégia?',
        opts:[
          {t:'Lançar para todos de uma vez, para aproveitar o entusiasmo.', ok:false, why:'Se houver um erro, 800 pessoas serão afetadas e a confiança pode ser perdida.'},
          {t:'Lançar para 3 a 5 clientes, observar onde travam, corrigir e só então ampliar.', ok:true, why:'Um teste pequeno revela os problemas reais com baixo risco, e a correção chega antes do lançamento amplo.'},
          {t:'Testar só no próprio computador e considerar pronto.', ok:false, why:'O seu uso não representa o dos clientes. Outras pessoas travam em lugares em que você não trava.'}
        ]}}
  ]}
];

const MODDONE = {
  1: 'Você tem uma ideia pequena, uma frase clara e um documento que explica o app sem deixar dúvida.',
  2: 'Você sabe conduzir o Cursor como mestre de obras: pede com clareza, confere e avança em fatias.',
  3: 'Seu app protege os dados e vai ao ar do jeito certo: testado com poucos antes de chegar a muitos.'
};

const PROMPTS = {
  1: [
    { title:'Documento de uma página', desc:'Para descrever o app antes de pedir ao Cursor.' }
  ],
  2: [
    { title:'Pedido em fatia', desc:'Para pedir uma parte do app ao agente.' }
  ],
  3: [
    { title:'Checagem de segurança', desc:'Para revisar o app antes de publicar.' }
  ]
};

const THEME = { 1:['#F59E0B','#F97316'], 2:['#F97316','#FB923C'], 3:['#EA580C','#F59E0B'] };
const LIC = { '1.1':'💡','1.2':'📝','2.1':'🤖','2.2':'🧱','3.1':'🔐','3.2':'🚀' };

return {
  id: 'criando-apps-com-ia',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
