/* Curso: IA no Trabalho e no Dia a Dia (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'✉️', title:'Textos e comunicação', sub:'Escrever melhor em menos tempo', lessons:[
    { id:'1.1', title:'E-mails e mensagens em minutos', min:6,
      body:[
        `<div class="card analogy"><h3>✉️ O assistente que prepara o rascunho</h3><p>Um bom assistente deixa o e-mail quase pronto na sua mesa, e você só lê, ajusta e assina. A IA faz esse papel: ela escreve o primeiro rascunho, mas <b>a assinatura e a responsabilidade continuam sendo suas</b>.</p></div>`,
        `<div class="term"><b>Rascunho</b> = primeira versão de um texto, ainda para revisar. <b>Tom</b> = jeito de falar do texto, como formal, amigável ou firme. <b>Revisão</b> = ler, corrigir e ajustar antes de enviar.</div>`,
        `<div class="card"><h3>Do pedido ao envio em 4 passos</h3>
          <ol class="golden"><li><span>Diga a <b>situação e o objetivo</b> ("cobrar um pagamento atrasado de forma educada").</span></li><li><span>Informe <b>para quem é</b> e o <b>tom</b>.</span></li><li><span>Peça <b>2 versões</b>, uma curta e uma completa.</span></li><li><span><b>Leia tudo</b>, confira nomes, valores, datas e prazos, e só então envie.</span></li></ol>
          <p>Exemplo de pedido: <i>"Escreva um e-mail para um cliente com 10 dias de atraso numa fatura, tom educado e firme, até 6 linhas, com pedido de nova data."</i></p>
          <p>⚠️ Atenção: não cole dados sensíveis de clientes; use "Cliente A" e troque pelos dados reais depois.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o assistente prepara o rascunho, mas quem assina é você.</div>`
      ],
      ch:{ who:'Cláudia, 39 anos, auxiliar financeira', says:'A IA escreveu um e-mail de cobrança ótimo. Vou enviar agora mesmo, sem ler, para ganhar tempo.',
        q:'Qual é a melhor atitude?',
        opts:[
          {t:'Enviar direto: se o texto está bem escrito, está correto.', ok:false, why:'Texto bem escrito pode ter valor, data ou nome errados. Quem envia responde pelo conteúdo.'},
          {t:'Ler, conferir valores, datas e nomes, ajustar o tom se precisar, e só então enviar.', ok:true, why:'A IA acelera o rascunho, e a conferência protege você e o cliente de erros.'},
          {t:'Escrever tudo sozinha de novo, porque IA não serve para e-mail.', ok:false, why:'A IA serve muito bem para o primeiro rascunho. O cuidado é revisar, não abandonar a ferramenta.'}
        ]}},
    { id:'1.2', title:'Resumir reuniões e documentos longos', min:7,
      body:[
        `<div class="card analogy"><h3>📝 O colega que foi na reunião por você</h3><p>Imagine um colega que assistiu à reunião inteira e te conta em 2 minutos o que decidiram, quem ficou com o quê e para quando. A IA pode ser esse colega, <b>desde que você dê a ela o material certo</b>.</p></div>`,
        `<div class="term"><b>Resumo</b> = versão curta com o essencial de um texto. <b>Ata</b> = registro do que foi decidido numa reunião. <b>Ação</b> = tarefa com responsável e prazo.</div>`,
        `<div class="card"><h3>Resumo que serve para agir</h3><p>Peça sempre três coisas:</p>
          <ol class="golden"><li><span>As <b>decisões</b> tomadas.</span></li><li><span>As <b>ações</b>, com responsável e prazo.</span></li><li><span>As <b>dúvidas em aberto</b>.</span></li></ol>
          <p>Exemplo: <i>"Com base nestas anotações, liste decisões, ações (quem e quando) e pendências. Se alguma informação estiver faltando, escreva 'não informado' e não invente."</i></p>
          <p>A última frase evita que a IA complete lacunas com palpite.</p>
          <p>⚠️ Cuidado: documentos confidenciais ou com dados pessoais só devem ir para ferramentas permitidas pela sua empresa. Em dúvida, anonimize ou resuma você mesmo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que é uma ata, e por que uma lista de "quem faz o quê e até quando" ajuda um grupo.</div>`
      ],
      ch:{ who:'Rodrigo, 45 anos, coordenador de logística', says:'Colei as anotações da reunião e a IA resumiu, mas incluiu um prazo que ninguém falou.',
        q:'Como evitar isso nas próximas vezes?',
        opts:[
          {t:'Pedir que a IA complete as lacunas com o que for mais provável.', ok:false, why:'Completar com o "mais provável" é exatamente o que gera prazos inventados.'},
          {t:'Parar de resumir reuniões com IA.', ok:false, why:'O resumo continua útil. O ajuste está no pedido e na conferência.'},
          {t:'Pedir "se faltar informação, escreva \'não informado\' e não invente" e conferir o resultado com as anotações.', ok:true, why:'Uma regra clara contra invenção, mais a conferência, mantém o resumo fiel ao que foi dito.'}
        ]}}
  ]},
  { id:2, icon:'📊', title:'Organização', sub:'Planilhas e planejamento', lessons:[
    { id:'2.1', title:'IA para planilhas: fórmulas e limpeza', min:7,
      body:[
        `<div class="card analogy"><h3>🧮 A calculadora que explica o raciocínio</h3><p>Uma calculadora comum só dá o resultado. A IA, além de sugerir a fórmula, <b>explica por que ela funciona</b>, e isso ajuda você a aprender e a conferir.</p></div>`,
        `<div class="term"><b>Fórmula</b> = instrução que calcula algo na planilha, como somar ou procurar um valor. <b>Dados de teste</b> = exemplo pequeno e fictício para checar se a fórmula funciona. <b>Limpeza de dados</b> = corrigir nomes repetidos, espaços sobrando e datas em formatos diferentes.</div>`,
        `<div class="card"><h3>Peça a fórmula e o teste</h3>
          <ol class="golden"><li><span><b>Descreva a planilha</b>: "Coluna A tem nomes, B tem valores, C tem datas."</span></li><li><span><b>Diga o que quer</b>: "somar os valores do mês de maio."</span></li><li><span>Peça a fórmula <b>para o seu programa</b> (Excel ou Google Planilhas) e a explicação em palavras simples.</span></li><li><span><b>Teste com 3 linhas de exemplo</b> antes de aplicar em tudo.</span></li></ol>
          <p>Também serve para sugerir como organizar colunas e limpar listas.</p>
          <p>⚠️ Atenção: a IA pode errar a sintaxe de um programa específico. Sempre teste, e não envie planilhas com dados pessoais de clientes.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que é uma fórmula de planilha, usando uma conta de somar a compra do mercado.</div>`
      ],
      ch:{ who:'Simone, 33 anos, dona de uma loja de roupas', says:'A IA me deu uma fórmula para somar as vendas do mês. Vou aplicar nas 2 mil linhas direto.',
        q:'Qual é o melhor caminho?',
        opts:[
          {t:'Aplicar nas 2 mil linhas, porque a IA explicou direitinho.', ok:false, why:'Uma boa explicação não garante que a fórmula está certa para a sua planilha. Teste primeiro.'},
          {t:'Aplicar e só conferir se algum cliente reclamar.', ok:false, why:'Descobrir o erro depois de afetar clientes é o jeito mais caro de aprender.'},
          {t:'Testar em 3 ou 4 linhas com resultado conhecido e, se bater, aplicar no resto.', ok:true, why:'Testar com poucos dados conhecidos revela erros rápido e barato.'}
        ]}},
    { id:'2.2', title:'Planejar a semana e priorizar tarefas', min:6,
      body:[
        `<div class="card analogy"><h3>🗓️ O despachante da sua semana</h3><p>Um despachante organiza o que sai primeiro, o que pode esperar e o que nem deveria estar na lista. A IA pode sugerir essa ordem, mas <b>só você sabe o que é realmente importante</b> na sua vida.</p></div>`,
        `<div class="term"><b>Prioridade</b> = o que deve ser feito primeiro. <b>Urgente</b> = o que tem prazo curto. <b>Importante</b> = o que traz resultado real, mesmo sem prazo apertado.</div>`,
        `<div class="card"><h3>Despeje, classifique e decida</h3>
          <ol class="golden"><li><span><b>Escreva todas as tarefas</b> soltas, sem ordem.</span></li><li><span>Peça à IA: "Organize em: urgente e importante, importante e não urgente, urgente e pouco importante, e o resto."</span></li><li><span>Informe seus <b>horários livres</b> e peça um plano para a semana, com margem para imprevistos.</span></li><li><span><b>Você ajusta</b>: a IA não conhece seus compromissos familiares nem seu cansaço.</span></li></ol>
          <p>Peça sempre <b>"deixe 20% do tempo livre"</b>. Um plano que não cabe na vida real não funciona.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos a diferença entre o que é urgente e o que é importante, com um exemplo da escola.</div>`
      ],
      ch:{ who:'Mateus, 26 anos, faz faculdade e trabalha', says:'A IA montou um plano com estudo, trabalho e treino sem nenhum intervalo. Vou seguir à risca.',
        q:'O que está faltando?',
        opts:[
          {t:'Margem para imprevistos e a revisão dele, porque ele conhece a própria rotina.', ok:true, why:'Um plano realista tem folga e passa pelo seu ajuste. A IA organiza, mas não vive a sua rotina.'},
          {t:'Nada: quanto mais cheio o plano, melhor o resultado.', ok:false, why:'Planos lotados costumam ser abandonados. Folga faz parte de um bom plano.'},
          {t:'Nada: a IA conhece a rotina dele melhor do que ele.', ok:false, why:'A IA só sabe o que você conta. A sua rotina real é você quem conhece.'}
        ]}}
  ]},
  { id:3, icon:'🔎', title:'Pesquisa e estudo', sub:'Aprender mais rápido', lessons:[
    { id:'3.1', title:'Pesquisar com IA sem cair em armadilhas', min:7,
      body:[
        `<div class="card analogy"><h3>🔎 O bibliotecário que indica por onde começar</h3><p>O bibliotecário aponta as prateleiras, mas o livro é você quem abre e confere. A IA é ótima para te dar <b>um mapa do assunto</b>, e não para ser a fonte final.</p></div>`,
        `<div class="term"><b>Fonte</b> = de onde a informação veio, como um site oficial ou um estudo. <b>Pesquisa exploratória</b> = primeira olhada para entender um assunto. <b>Verificação</b> = conferir a informação em fonte confiável.</div>`,
        `<div class="card"><h3>Mapa primeiro, fonte depois</h3>
          <ol class="golden"><li><span>Peça um <b>panorama</b>: "Explique [assunto] em 5 pontos e liste o que eu devo conferir."</span></li><li><span>Peça <b>palavras-chave e perguntas</b> para buscar.</span></li><li><span>Abra <b>fontes oficiais ou confiáveis</b> e confira o que a IA disse.</span></li><li><span>Se a IA citar link, estudo ou lei, <b>abra e leia</b>: ela pode inventar referências.</span></li></ol>
          <p>Use a IA para entender e organizar, e as fontes para confirmar. Quanto mais sério o tema (saúde, dinheiro, lei), mais fontes.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o bibliotecário aponta o caminho, mas você confere o livro.</div>`
      ],
      ch:{ who:'Helena, 30 anos, analista de compras', says:'A IA me deu o nome de um estudo com números que provam meu argumento. Posso citar na apresentação?',
        q:'Qual é o próximo passo?',
        opts:[
          {t:'Citar agora: se tem nome e números, é confiável.', ok:false, why:'Nomes e números convincentes podem ser inventados. Sem checar, a citação pode derrubar a sua credibilidade.'},
          {t:'Pedir à IA que confirme o próprio estudo e aceitar a resposta.', ok:false, why:'A IA pode confirmar o próprio erro. A checagem precisa vir de fora.'},
          {t:'Procurar o estudo em fonte confiável, ler o que ele diz e só então citar.', ok:true, why:'Encontrar e ler a fonte transforma a pista da IA em informação segura.'}
        ]}},
    { id:'3.2', title:'Estudar com IA: perguntas, cartões e simulados', min:7,
      body:[
        `<div class="card analogy"><h3>🎓 O professor particular paciente</h3><p>Um professor particular explica de novo, de outro jeito, quantas vezes for preciso, e faz perguntas para ver se você entendeu. A IA pode ajudar assim, mas <b>quem precisa lembrar a matéria é você</b>.</p></div>`,
        `<div class="term"><b>Recuperação ativa</b> = estudar tentando lembrar, e não só relendo. <b>Cartão de estudo</b> = pergunta de um lado e resposta do outro. <b>Simulado</b> = conjunto de perguntas para testar o que você aprendeu.</div>`,
        `<div class="card"><h3>Peça perguntas, não só resumos</h3><p>Ler resumo dá sensação de aprender, mas fixar exige tentar lembrar. Use:</p>
          <ol class="golden"><li><span>"Explique [assunto] como se eu tivesse 10 anos."</span></li><li><span>"Faça 10 perguntas sobre [assunto] e só mostre as respostas depois que eu responder."</span></li><li><span>"Aponte onde errei e explique de outro jeito."</span></li><li><span>"Crie 10 cartões de estudo com pergunta e resposta."</span></li></ol>
          <p>Confira as respostas importantes no seu material. Estudar um pouco por dia, revendo o que errou, rende mais do que uma maratona.</p>
          <p>Próximo passo da trilha: o curso <b>"Automação Sem Código"</b>.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que tentar lembrar é melhor para aprender do que só reler.</div>`
      ],
      ch:{ who:'Bianca, 20 anos, estudante de enfermagem', says:'Peço resumos à IA e releio várias vezes, mas na prova esqueço tudo.',
        q:'Qual é o melhor ajuste?',
        opts:[
          {t:'Pedir perguntas e simulados, responder antes de ver o gabarito e revisar os erros, conferindo no material da aula.', ok:true, why:'Tentar lembrar e corrigir erros fixa o conteúdo, e conferir no material evita decorar algo errado.'},
          {t:'Pedir resumos ainda maiores e reler mais vezes.', ok:false, why:'Reler passivamente dá sensação de domínio, mas fixa pouco.'},
          {t:'Parar de estudar com IA.', ok:false, why:'A IA ajuda bastante quando usada para treinar, e não só para resumir.'}
        ]}}
  ]}
];

const MODDONE = {
  1: 'Você já escreve e resume mais rápido, sem abrir mão da revisão. O rascunho é da IA, a responsabilidade é sua.',
  2: 'Você aprendeu a usar a IA para planilhas e para organizar a semana, sempre testando antes de confiar.',
  3: 'Você sabe pesquisar sem cair em armadilhas e estudar de um jeito que realmente fixa. Agora a IA trabalha a seu favor todos os dias.'
};

const PROMPTS = {
  1: [
    { title:'E-mail em 4 passos', desc:'Para escrever e-mails e mensagens profissionais.' }
  ],
  2: [
    { title:'Plano da semana', desc:'Para organizar tarefas e horários.' }
  ],
  3: [
    { title:'Treino de estudo', desc:'Para estudar com perguntas.' }
  ]
};

const THEME = { 1:['#22C55E','#14B8A6'], 2:['#14B8A6','#06B6D4'], 3:['#10B981','#22C55E'] };
const LIC = { '1.1':'✉️','1.2':'📝','2.1':'🧮','2.2':'🗓️','3.1':'🔎','3.2':'🎓' };

return {
  id: 'ia-no-trabalho',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
