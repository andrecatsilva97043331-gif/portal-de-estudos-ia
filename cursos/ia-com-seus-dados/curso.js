/* Curso: IA com os Seus Dados (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'📖', title:'A IA consultando seus documentos', sub:'Por que e como', lessons:[
    { id:'1.1', title:'Por que a IA não conhece o seu negócio', min:6,
      body:[
        `<div class="card analogy"><h3>📖 O consultor brilhante que nunca entrou na sua empresa</h3><p>Ele sabe muito sobre o mundo, mas nada sobre a sua tabela de preços, a sua política de troca ou os seus clientes. Se você perguntar, ele responde com um <b>palpite bem escrito</b>. A IA se comporta assim com os dados que não conhece.</p></div>`,
        `<div class="term"><b>Modelo</b> = a IA já treinada, com o que aprendeu antes. <b>Seus dados</b> = documentos, planilhas e regras da sua empresa. <b>Palpite plausível</b> = resposta que parece certa, mas foi inventada por falta de informação.</div>`,
        `<div class="card"><h3>A IA sabe o que aprendeu, e não o que está no seu Drive</h3><p>O que está nos seus arquivos e sistemas não faz parte do que a IA aprendeu. Ao perguntar sobre a sua política de troca sem fornecer o documento, ela completa com algo comum no mercado. Há dois caminhos:</p>
          <ol class="golden"><li><span><b>Colar o trecho no pedido</b> (serve para pouca coisa).</span></li><li><span><b>Conectar a IA a uma base de documentos</b>, técnica chamada <b>RAG</b>.</span></li></ol>
          <p><b>Hábito útil:</b> pergunte sempre "isso veio dos documentos que eu forneci?"</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um consultor que nunca entrou na sua empresa só consegue dar palpites sobre ela.</div>`
      ],
      ch:{ who:'Sônia, 48 anos, dona de uma loja', says:'Perguntei à IA qual é o prazo de troca da minha loja e ela respondeu 30 dias. A minha política é 7.',
        q:'O que explica o erro?',
        opts:[
          {t:'A IA é defeituosa e não deve ser usada para nada.', ok:false, why:'A IA funciona bem para muitas tarefas. O erro veio da falta da informação certa.'},
          {t:'A IA não conhece a política da loja e completou com um palpite. É preciso fornecer o documento ou ligar a IA à base de documentos.', ok:true, why:'Sem acesso à informação, a IA preenche com o que é comum. Fornecer a fonte resolve.'},
          {t:'A IA errou de propósito para testar a dona da loja.', ok:false, why:'A IA não age por intenção. Ela completa com padrões quando falta dado.'}
        ]}},
    { id:'1.2', title:'O que é RAG: buscar antes de responder', min:7,
      body:[
        `<div class="card analogy"><h3>🔎 A prova com consulta</h3><p>Na prova com consulta, o aluno não decora o livro: ele <b>procura o trecho certo</b> e responde com base nele. O RAG faz a IA agir assim.</p></div>`,
        `<div class="term"><b>RAG (geração com busca)</b> = técnica em que o sistema busca trechos nos seus documentos e os entrega à IA para responder. <b>Trecho</b> = um pedaço de documento. <b>Base de conhecimento</b> = o conjunto de documentos usados nas respostas.</div>`,
        `<div class="card"><h3>Os 4 passos do RAG</h3>
          <ol class="golden"><li><span>A pessoa faz uma <b>pergunta</b>.</span></li><li><span>O sistema <b>busca</b> na base os trechos mais relevantes.</span></li><li><span>Esses trechos são colocados <b>junto da pergunta</b> no pedido à IA.</span></li><li><span>A IA <b>responde com base neles</b> e, de preferência, cita de onde veio.</span></li></ol>
          <div class="pipe"><div class="node ink">Pergunta</div><div class="ar">➜</div><div class="node ink">Busca na base</div><div class="ar">➜</div><div class="node yel">Trechos + pergunta</div><div class="ar">➜</div><div class="node ink">Resposta com fonte</div></div>
          <p><b>Vantagens:</b> as respostas partem do que você tem, e para atualizar basta trocar o documento, sem treinar nada.</p>
          <p><b>Limites:</b> se a busca trouxer o trecho errado, a resposta sai errada, e documento desatualizado gera resposta desatualizada.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos como funciona uma prova com consulta, e como isso ajuda a IA a responder certo.</div>`
      ],
      ch:{ who:'Jorge, 52 anos, coordenador de RH', says:'Quero que a IA responda as dúvidas dos funcionários sobre férias e benefícios com base no nosso manual.',
        q:'Qual é a abordagem mais adequada?',
        opts:[
          {t:'Montar uma busca no manual que entregue à IA os trechos relevantes antes de ela responder (RAG), pedindo que cite o trecho.', ok:true, why:'O RAG faz a resposta partir do manual real e permite conferir a fonte.'},
          {t:'Treinar uma IA do zero com o manual.', ok:false, why:'É caro e demorado, e fica desatualizado a cada mudança. O RAG é mais simples e atualizável.'},
          {t:'Perguntar à IA sem fornecer o manual e confiar na resposta.', ok:false, why:'Sem o manual, a IA responde com palpites genéricos sobre benefícios.'}
        ]}}
  ]},
  { id:2, icon:'🗂️', title:'Preparando os dados', sub:'A base que a IA vai consultar', lessons:[
    { id:'2.1', title:'Documentos organizados valem mais', min:6,
      body:[
        `<div class="card analogy"><h3>🗂️ A biblioteca bem catalogada</h3><p>Um livro na prateleira errada ou sem etiqueta é como se não existisse. Com documentos acontece o mesmo: <b>a IA só ajuda se a base estiver arrumada</b>.</p></div>`,
        `<div class="term"><b>Fonte única de verdade</b> = a versão oficial e atual de cada informação. <b>Versão</b> = cada edição de um documento. <b>Metadados</b> = informações sobre o documento, como título, data e setor.</div>`,
        `<div class="card"><h3>Lixo entra, lixo sai</h3><p>Antes de ligar a IA:</p>
          <ol class="golden"><li><span>Reúna só documentos <b>oficiais e atuais</b>.</span></li><li><span>Retire duplicados e versões antigas, ou marque claramente a <b>versão e a data</b>.</span></li><li><span>Dê <b>nomes claros</b> aos arquivos.</span></li><li><span>Prefira texto bem estruturado, com títulos. PDFs escaneados, que são imagem, precisam de leitura de texto (<b>OCR</b>) para a busca funcionar.</span></li><li><span>Defina <b>quem mantém</b> a base atualizada.</span></li></ol>
          <p>⚠️ A IA não resolve documentos que se contradizem: ela mistura as versões.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma biblioteca precisa de etiquetas e de livros nas prateleiras certas.</div>`
      ],
      ch:{ who:'Cláudio, 55 anos, gerente administrativo', says:'Juntei 8 versões do manual de benefícios, antigas e novas, e joguei tudo na base. A IA às vezes responde com uma regra velha.',
        q:'Qual é a correção certa?',
        opts:[
          {t:'É normal: a IA sorteia uma das versões.', ok:false, why:'Não é sorteio: ela usa o que a busca trouxe, e versões antigas misturadas geram respostas contraditórias.'},
          {t:'Escrever no prompt "use sempre a regra mais nova" e manter tudo na base.', ok:false, why:'A IA pode não saber qual é a mais nova. A solução está na organização da base.'},
          {t:'Manter só a versão oficial atual, ou marcar versão e data, remover duplicados e definir quem atualiza.', ok:true, why:'Uma base limpa e com responsável evita que regras antigas contaminem as respostas.'}
        ]}},
    { id:'2.2', title:'Dividir em trechos e buscar por significado', min:7,
      body:[
        `<div class="card analogy"><h3>🧩 O índice remissivo inteligente</h3><p>Em vez de procurar a palavra exata, ele acha as páginas que falam do assunto, <b>mesmo com outras palavras</b>. É assim que a busca por significado funciona.</p></div>`,
        `<div class="term"><b>Trecho (chunk)</b> = pedaço do documento, de alguns parágrafos. <b>Embedding</b> = representação numérica do significado de um texto, usada para achar textos parecidos. <b>Busca por significado</b> = encontrar trechos pelo sentido, e não só pela palavra exata.</div>`,
        `<div class="card"><h3>Cortar, representar e buscar</h3><p>Os documentos são cortados em trechos: nem tão curtos que percam o contexto, nem tão longos que misturem assuntos. Cada trecho vira um <b>embedding</b> e fica guardado num banco próprio para busca. A pergunta também vira embedding, e o sistema traz os trechos mais parecidos.</p>
          <div class="pipe"><div class="node ink">Documentos</div><div class="ar">➜</div><div class="node ink">Trechos</div><div class="ar">➜</div><div class="node ink">Embeddings</div><div class="ar">➜</div><div class="node yel">Pergunta</div><div class="ar">➜</div><div class="node ink">Trechos parecidos</div></div>
          <p><b>Exemplo:</b> a pergunta "posso dividir as férias?" encontra o trecho "fracionamento do período de descanso".</p>
          <p><b>Dica:</b> teste com 20 perguntas reais e veja se os trechos certos aparecem. Se não aparecerem, ajuste o tamanho dos trechos.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos como um índice inteligente acha a página certa mesmo quando você usa outras palavras.</div>`
      ],
      ch:{ who:'Patrícia, 36 anos, analista', says:'Cortei os documentos em trechos de uma linha. A IA acha a frase, mas responde sem contexto e erra.',
        q:'Qual é o melhor ajuste?',
        opts:[
          {t:'Cortar em trechos ainda menores, de poucas palavras.', ok:false, why:'Trechos menores perdem ainda mais contexto e pioram as respostas.'},
          {t:'Testar trechos maiores, de alguns parágrafos, e conferir com perguntas reais se os trechos certos aparecem.', ok:true, why:'Trechos com contexto suficiente melhoram a resposta, e o teste com perguntas reais mostra o tamanho ideal.'},
          {t:'Trocar de IA sem mudar a forma de cortar.', ok:false, why:'O problema está no corte dos trechos, e a nova IA receberia o mesmo material ruim.'}
        ]}}
  ]},
  { id:3, icon:'✅', title:'Qualidade e segurança', sub:'Confiar e proteger', lessons:[
    { id:'3.1', title:'Respostas com fonte e o "não sei"', min:6,
      body:[
        `<div class="card analogy"><h3>✅ O perito que cita o laudo</h3><p>O perito não opina de cabeça: ele aponta o laudo e a página. Se não há laudo sobre o assunto, ele diz que não há. A IA com base de documentos deve se comportar assim.</p></div>`,
        `<div class="term"><b>Citação</b> = indicar de qual documento e trecho veio a resposta. <b>Resposta "não encontrei"</b> = quando a base não tem a informação, a IA deve dizer isso. <b>Teste de perguntas</b> = lista de perguntas com respostas conhecidas, usada para medir a qualidade.</div>`,
        `<div class="card"><h3>Regras e teste</h3><p>No pedido à IA, escreva:</p>
          <div class="code">Responda somente com base nos trechos fornecidos. Cite o documento e o trecho. Se a resposta não estiver nos trechos, diga "não encontrei nos documentos".</div>
          <p>Depois teste: monte <b>20 perguntas</b> com respostas que você já conhece, sendo <b>5 sem resposta</b> nos documentos. Veja se acertou, se citou certo e se disse "não encontrei" quando devia.</p>
          <p>Mostre a fonte ao usuário para ele conferir. Em assuntos sensíveis, como saúde, jurídico e dinheiro, mantenha <b>revisão humana</b>.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que é melhor dizer "não sei" do que inventar uma resposta.</div>`
      ],
      ch:{ who:'Luciana, 44 anos, líder de atendimento', says:'Quando a resposta não está nos documentos, a IA inventa algo parecido, com cara de certo.',
        q:'Qual é a correção certa?',
        opts:[
          {t:'Aceitar: toda IA inventa quando não sabe.', ok:false, why:'É possível reduzir muito isso com instruções claras e testes.'},
          {t:'Apagar os documentos e usar só o conhecimento geral da IA.', ok:false, why:'Sem os documentos, o risco de invenção aumenta.'},
          {t:'Instruir a IA a responder só com base nos trechos, citar a fonte e dizer "não encontrei" quando faltar, e testar com perguntas sem resposta.', ok:true, why:'Regra clara, citação e teste com perguntas sem resposta reduzem as invenções e mostram se funcionou.'}
        ]}},
    { id:'3.2', title:'Privacidade e permissões: quem pode ver o quê', min:7,
      body:[
        `<div class="card analogy"><h3>🔐 O arquivo com chaves por setor</h3><p>O RH abre a gaveta do RH, o financeiro abre a do financeiro, e ninguém abre a de todos. Uma base de documentos com IA precisa ter a mesma lógica.</p></div>`,
        `<div class="term"><b>Controle de acesso</b> = definir quem pode ver quais documentos. <b>Dado pessoal</b> = informação que identifica uma pessoa. <b>Anonimização</b> = retirar ou trocar o que identifica a pessoa.</div>`,
        `<div class="card"><h3>A IA mostra o que está na base</h3><p>Se um documento está na base, qualquer pessoa com acesso ao chat pode, em tese, perguntar sobre ele. Por isso:</p>
          <ol class="golden"><li><span><b>Separe bases por público</b> (RH, financeiro, clientes).</span></li><li><span>Faça a <b>busca respeitar quem pergunta</b>: só devem ser buscados documentos que aquela pessoa já poderia abrir.</span></li><li><span>Evite colocar dados pessoais e sensíveis sem necessidade, e <b>anonimize</b> quando der.</span></li><li><span>Leia os <b>termos do serviço</b>: onde os dados ficam e se são usados para treinar modelos.</span></li><li><span><b>Registre</b> quem consultou o quê e permita apagar.</span></li></ol>
          <p>Em casos sensíveis, consulte um profissional jurídico (LGPD).</p>
          <p>Próximo passo da trilha: o curso "IA em Produção".</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que cada setor da empresa guarda seus papéis numa gaveta com chave.</div>`
      ],
      ch:{ who:'Fernando, 49 anos, diretor', says:'Coloquei todos os documentos da empresa, inclusive salários e contratos, numa só base e liberei o chat para todos os funcionários.',
        q:'Qual é o ajuste mais importante?',
        opts:[
          {t:'Separar as bases por setor e fazer a busca respeitar quem pergunta, para que cada pessoa acesse só o que já poderia abrir.', ok:true, why:'O controle de acesso impede que informações sensíveis cheguem a quem não deveria vê-las.'},
          {t:'Manter tudo junto, porque todos os funcionários são de confiança.', ok:false, why:'Confiança não substitui controle. Informações como salários exigem acesso restrito.'},
          {t:'Escrever no prompt "não mostre salários" e manter tudo na mesma base.', ok:false, why:'Uma instrução no prompt não é barreira real. O controle precisa estar no acesso aos documentos.'}
        ]}}
  ]}
];

const MODDONE = {
  1: 'Você entende por que a IA não conhece o seu negócio e como o RAG resolve isso, buscando antes de responder.',
  2: 'Você sabe preparar uma base organizada e entende trechos e busca por significado.',
  3: 'Você sabe exigir fonte, aceitar o "não encontrei" e proteger quem pode ver o quê.'
};

const PROMPTS = {
  1: [
    { title:'Pergunta com base nos meus documentos', desc:'Para obrigar a IA a usar só o que você forneceu.' }
  ],
  2: [
    { title:'Auditoria da base', desc:'Para avaliar documentos antes de usar.' }
  ],
  3: [
    { title:'Teste de perguntas', desc:'Para medir a qualidade das respostas.' }
  ]
};

const THEME = { 1:['#EF4444','#EC4899'], 2:['#EC4899','#F43F5E'], 3:['#F43F5E','#EF4444'] };
const LIC = { '1.1':'📖','1.2':'🔎','2.1':'🗂️','2.2':'🧩','3.1':'✅','3.2':'🔐' };

return {
  id: 'ia-com-seus-dados',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
