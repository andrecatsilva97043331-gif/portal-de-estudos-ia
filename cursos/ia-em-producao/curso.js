/* Curso: IA em Produção (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'⚖️', title:'Responsabilidade', sub:'Privacidade e direitos', lessons:[
    { id:'1.1', title:'LGPD na prática para projetos com IA', min:7,
      body:[
        `<div class="card analogy"><h3>🔑 Guardar a chave do vizinho</h3><p>Você só guarda a chave se o vizinho pediu, só usa para o que combinaram, devolve quando ele quiser e responde se perder. Cuidar de dados de pessoas segue a mesma <b>lógica de confiança</b>.</p></div>`,
        `<div class="term"><b>LGPD</b> = Lei Geral de Proteção de Dados, a lei brasileira que protege os dados pessoais. <b>Titular</b> = a pessoa a quem os dados pertencem. <b>Finalidade</b> = o motivo pelo qual os dados são usados. <b>Minimização</b> = coletar só o necessário.</div>`,
        `<div class="card"><h3>Cinco princípios simples</h3>
          <ol class="golden"><li><span><b>Finalidade</b>: diga para que vai usar os dados.</span></li><li><span><b>Necessidade</b>: peça só o essencial.</span></li><li><span><b>Transparência</b>: tenha um aviso de privacidade em linguagem simples.</span></li><li><span><b>Direitos</b>: a pessoa pode pedir para ver, corrigir e apagar os dados dela.</span></li><li><span><b>Segurança</b>: proteja os dados e saiba o que fazer em caso de vazamento.</span></li></ol>
          <p>Em projetos com IA, confira se o serviço usa os dados para treinar modelos e onde ficam guardados, evite enviar dados pessoais desnecessários e anonimize quando der.</p>
          <p>⚠️ Este é um guia geral, não consultoria jurídica: em casos sensíveis (saúde, crianças, finanças), consulte um profissional.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que guardar a chave do vizinho exige cuidado, e como isso vale para dados de pessoas.</div>`
      ],
      ch:{ who:'Adriano, 41 anos, dono de uma clínica', says:'Vou mandar os prontuários dos pacientes, com nome e exames, para a IA gerar resumos. É mais rápido.',
        q:'Qual é a atitude mais responsável?',
        opts:[
          {t:'Mandar tudo, porque a IA vai ajudar a economizar tempo.', ok:false, why:'São dados de saúde, que são sensíveis. Enviar sem cuidado expõe os pacientes e pode violar a LGPD.'},
          {t:'Parar e avaliar: são dados de saúde, então é preciso minimizar ou anonimizar, verificar como o serviço trata os dados e buscar orientação jurídica antes de qualquer envio.', ok:true, why:'Dados sensíveis exigem cuidado redobrado. Avaliar antes protege os pacientes e a clínica.'},
          {t:'Mandar só o nome, sem os exames.', ok:false, why:'O nome já identifica o paciente. O cuidado precisa vir antes de qualquer envio.'}
        ]}},
    { id:'1.2', title:'Direitos autorais e transparência', min:6,
      body:[
        `<div class="card analogy"><h3>©️ Citar a fonte do livro</h3><p>Quando você usa a ideia de alguém, diz de onde veio. Ao publicar algo feito com ajuda de uma ferramenta, é honesto dizer isso <b>quando faz diferença para quem recebe</b>.</p></div>`,
        `<div class="term"><b>Direito autoral</b> = proteção dada ao criador de uma obra. <b>Licença</b> = permissão de uso com regras. <b>Transparência</b> = avisar quando um conteúdo foi feito com ajuda de IA.</div>`,
        `<div class="card"><h3>Cinco cuidados</h3>
          <ol class="golden"><li><span>Não presuma que tudo que a IA gera está livre de problemas: ela pode produzir algo muito parecido com uma obra existente. Para uso comercial, <b>revise e adapte</b>.</span></li><li><span>Imagens, músicas e textos de terceiros têm <b>licença</b>: só use com permissão.</span></li><li><span>Leia os <b>termos do serviço</b> de IA, que dizem quem pode usar o que foi gerado.</span></li><li><span>Seja <b>transparente</b> quando fizer sentido (clientes, escola, publicações) e nunca crie conteúdo enganoso nem se passe por outra pessoa.</span></li><li><span>As regras sobre IA e direitos autorais estão em evolução, então <b>consulte um profissional</b> em usos comerciais importantes.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que é importante dizer de onde veio uma ideia ou uma imagem.</div>`
      ],
      ch:{ who:'Mônica, 34 anos, social media', says:'Pedi à IA uma imagem no estilo exato de uma marca famosa para a campanha do cliente e vou usar sem mudar nada.',
        q:'Qual é a melhor atitude?',
        opts:[
          {t:'Usar: se a IA gerou, é livre de problemas.', ok:false, why:'Imitar de perto uma marca ou obra pode gerar problema, mesmo que a imagem tenha sido gerada por IA.'},
          {t:'Usar, desde que escreva "feito com IA" na legenda.', ok:false, why:'Avisar ajuda na transparência, mas não resolve o risco de se parecer demais com a marca.'},
          {t:'Evitar imitar marcas e obras de terceiros, criar algo original, ler os termos do serviço e consultar um profissional em uso comercial importante.', ok:true, why:'Originalidade e cuidado com licenças reduzem o risco jurídico e protegem a reputação do cliente.'}
        ]}}
  ]},
  { id:2, icon:'💰', title:'Custo e desempenho', sub:'O que pesa no bolso e na experiência', lessons:[
    { id:'2.1', title:'Quanto custa usar IA', min:6,
      body:[
        `<div class="card analogy"><h3>💡 A conta de luz</h3><p>Ela depende de quanto você usa, e sem medir a conta assusta. Com IA é igual: <b>usar sem acompanhar</b> pode trazer uma fatura inesperada.</p></div>`,
        `<div class="term"><b>Token</b> = pedacinho de texto que a IA processa e que costuma ser a base da cobrança. <b>Limite de gasto</b> = teto que você define para o uso. <b>Modelo menor</b> = versão mais barata e rápida da IA, boa para tarefas simples.</div>`,
        `<div class="card"><h3>Meça, limite e reduza</h3><p>Os serviços de IA costumam cobrar pela quantidade de texto processado, na entrada e na saída, ou por plano. Os valores mudam, então confira nos sites oficiais. Como controlar:</p>
          <ol class="golden"><li><span><b>Meça</b> quantos pedidos por dia e o tamanho médio.</span></li><li><span>Use o <b>modelo menor</b> nas tarefas simples e o maior só onde precisa.</span></li><li><span>Envie <b>só o texto necessário</b>.</span></li><li><span><b>Guarde respostas repetidas</b> para não pagar duas vezes.</span></li><li><span>Defina <b>limite de gasto e alerta</b>.</span></li><li><span>Calcule o <b>custo por usuário</b> antes de lançar.</span></li></ol>
          <p>⚠️ Um app que cresce com o custo mal calculado pode dar prejuízo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que acompanhar a conta de luz evita susto no fim do mês, e como isso vale para o uso de IA.</div>`
      ],
      ch:{ who:'Rafael, 30 anos, lançou um app de resumos', says:'O app viralizou e a conta de IA do mês veio muito maior que o esperado. Eu não tinha limite nem media nada.',
        q:'O que fazer daqui para frente?',
        opts:[
          {t:'Medir o uso, definir limite de gasto e alertas, usar modelo menor nas tarefas simples e calcular o custo por usuário.', ok:true, why:'Medir e limitar dá previsibilidade, e o modelo menor reduz o custo sem perder qualidade nas tarefas simples.'},
          {t:'Torcer para que o próximo mês seja menor.', ok:false, why:'Esperar não é controle. Com mais usuários, o custo tende a crescer.'},
          {t:'Desligar o app e nunca mais usar IA.', ok:false, why:'O problema foi a falta de medição e de limites, e não o uso de IA.'}
        ]}},
    { id:'2.2', title:'Quando a IA falha: plano B e rapidez', min:6,
      body:[
        `<div class="card analogy"><h3>🛗 O plano B do elevador</h3><p>Se o elevador para, existe a escada e o botão de alarme. Ninguém fica preso sem saída. Um sistema com IA também precisa de <b>saída quando o serviço falha</b>.</p></div>`,
        `<div class="term"><b>Tempo limite (timeout)</b> = o máximo de espera por uma resposta. <b>Plano B (fallback)</b> = alternativa quando algo falha. <b>Mensagem amigável</b> = aviso claro e gentil ao usuário.</div>`,
        `<div class="card"><h3>Falhar com elegância</h3><p>Serviços de IA ficam lentos, caem ou recusam pedidos. Prepare:</p>
          <ol class="golden"><li><span>Defina um <b>tempo limite</b> razoável.</span></li><li><span><b>Tente de novo</b> algumas vezes, com pausa entre elas.</span></li><li><span>Tenha um <b>plano B</b>: uma resposta pronta, outro modelo ou o encaminhamento a uma pessoa.</span></li><li><span>Mostre uma <b>mensagem clara</b>, como "não consegui agora, tente de novo em alguns minutos".</span></li><li><span>Nunca deixe o usuário esperando sem retorno.</span></li><li><span>Acompanhe a <b>taxa de falhas</b>.</span></li></ol>
          <p>Uma boa experiência não é a que nunca falha, e sim a que <b>falha com elegância</b>.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o elevador tem escada e alarme ao lado.</div>`
      ],
      ch:{ who:'Joana, 39 anos, tem um serviço de atendimento com IA', says:'Quando o serviço de IA cai, meu site fica carregando para sempre e o cliente vai embora.',
        q:'Qual é o melhor ajuste?',
        opts:[
          {t:'Esperar o serviço voltar, porque não há o que fazer.', ok:false, why:'Dá para evitar o travamento com tempo limite e alternativa.'},
          {t:'Definir um tempo limite, mostrar uma mensagem amigável e ter um plano B, como encaminhar para um atendente.', ok:true, why:'O cliente recebe retorno rápido e uma saída, mesmo com a IA fora do ar.'},
          {t:'Tirar a IA do site e voltar para o atendimento 100% manual.', ok:false, why:'O problema se resolve com preparo para falhas, sem abrir mão da IA.'}
        ]}}
  ]},
  { id:3, icon:'📈', title:'Qualidade contínua', sub:'Medir e melhorar', lessons:[
    { id:'3.1', title:'Medir a qualidade: testes e avaliação', min:7,
      body:[
        `<div class="card analogy"><h3>🏭 O controle de qualidade da fábrica</h3><p>Antes de sair da fábrica, amostras são testadas. Se uma peça falha, o lote é revisto. Com IA, <b>testar antes de publicar</b> evita levar um erro para todos os clientes.</p></div>`,
        `<div class="term"><b>Conjunto de testes</b> = perguntas reais com as respostas esperadas. <b>Critério</b> = o que significa "bom": correto, útil, seguro, no tom certo. <b>Regressão</b> = quando uma mudança piora algo que antes funcionava.</div>`,
        `<div class="card"><h3>Sem teste, "parece melhor" é só impressão</h3>
          <ol class="golden"><li><span>Escreva uns <b>30 casos reais</b>, inclusive difíceis, com a resposta esperada.</span></li><li><span>Defina <b>critérios</b>: correto, completo, seguro e no tom certo.</span></li><li><span>Rode os testes <b>antes e depois</b> de cada mudança (novo prompt, novo modelo) e compare.</span></li><li><span><b>Guarde</b> os resultados.</span></li><li><span>Acrescente <b>novos casos a cada falha real</b>.</span></li></ol>
          <p>⚠️ Mudar o prompt para corrigir 1 caso pode estragar outros 5.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a fábrica testa algumas peças antes de mandar o lote inteiro.</div>`
      ],
      ch:{ who:'Heitor, 35 anos, ajustou o prompt do atendimento', says:'Mudei o prompt e as 3 respostas que testei ficaram ótimas. Vou publicar para todos.',
        q:'O que ele deveria fazer antes?',
        opts:[
          {t:'Publicar logo, porque 3 respostas boas já provam que melhorou.', ok:false, why:'Três casos não representam o conjunto. A mudança pode ter piorado outros.'},
          {t:'Pedir a opinião de um colega sobre uma única resposta.', ok:false, why:'Uma opinião sobre um caso não mostra o efeito geral.'},
          {t:'Rodar o conjunto de uns 30 casos antes e depois da mudança e comparar, para ver se melhorou sem piorar o resto.', ok:true, why:'Comparar resultados nos mesmos casos mostra o efeito real da mudança e evita regressões.'}
        ]}},
    { id:'3.2', title:'Monitorar, registrar e melhorar', min:6,
      body:[
        `<div class="card analogy"><h3>🚗 O painel do carro</h3><p>Velocidade, combustível e luzes de alerta mostram o que está acontecendo, e o motorista reage a tempo. Um sistema com IA também precisa de <b>painel</b>.</p></div>`,
        `<div class="term"><b>Monitoramento</b> = acompanhar o funcionamento no dia a dia. <b>Feedback do usuário</b> = botões do tipo "útil" e "não útil". <b>Plano de incidente</b> = o que fazer quando algo dá errado.</div>`,
        `<div class="card"><h3>O ciclo de melhoria</h3>
          <ol class="golden"><li><span><b>Registre</b> pedidos, respostas, custos e falhas, sem guardar dados pessoais desnecessários: anonimize e defina por quanto tempo guarda.</span></li><li><span>Coloque o botão <b>"útil / não útil"</b>.</span></li><li><span><b>Revise uma amostra</b> de conversas toda semana.</span></li><li><span>Transforme cada falha em um <b>novo caso de teste</b>.</span></li><li><span>Tenha um <b>plano de incidente</b>: quem desliga, quem avisa o cliente e como corrigir.</span></li><li><span>Revise <b>custos e qualidade</b> todo mês.</span></li></ol>
          <p>Próximo passo da trilha: o curso "Do Projeto ao Negócio".</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, por que um motorista olha o painel do carro durante a viagem.</div>`
      ],
      ch:{ who:'Nelson, 46 anos, tem um assistente com IA no site', says:'Nunca olho as conversas. Se ninguém reclama, deve estar tudo bem.',
        q:'Qual é a melhor prática?',
        opts:[
          {t:'Revisar uma amostra de conversas toda semana, ter um botão "útil / não útil" e transformar as falhas em novos testes.', ok:true, why:'A revisão ativa acha problemas que ninguém reclama, e as falhas viram testes que evitam repetição.'},
          {t:'Esperar as reclamações, porque quem tem problema avisa.', ok:false, why:'A maioria dos clientes insatisfeitos não reclama: simplesmente vai embora.'},
          {t:'Guardar todas as conversas para sempre, com dados completos, para analisar algum dia.', ok:false, why:'Guardar demais aumenta o risco de privacidade. Anonimize e defina um prazo.'}
        ]}}
  ]}
];

const MODDONE = {
  1: 'Você conhece os princípios de privacidade e de direitos autorais para usar IA com responsabilidade.',
  2: 'Você sabe controlar custos e preparar o sistema para quando a IA falhar.',
  3: 'Você sabe medir, monitorar e melhorar com método. IA em produção é um trabalho contínuo, e não um lançamento único.'
};

const PROMPTS = {
  1: [
    { title:'Checklist de privacidade', desc:'Para revisar um projeto antes de lançar.',
      text:'Meu projeto faz [DESCRIÇÃO] e coleta [DADOS]. Liste riscos de privacidade, o que posso evitar coletar, o que preciso informar ao usuário e que perguntas levar a um profissional jurídico. Isto não é consultoria jurídica: aponte apenas pontos de atenção.' }
  ],
  2: [
    { title:'Estimativa de custo', desc:'Para calcular o custo por usuário.',
      text:'Meu app terá [N] usuários por mês, com [N] pedidos por usuário e textos de cerca de [TAMANHO]. Ajude-me a montar uma planilha de estimativa de custo por usuário, com cenários baixo, médio e alto, e sugira formas de reduzir o gasto. Lembre-me de conferir os preços no site do fornecedor.' }
  ],
  3: [
    { title:'Conjunto de testes', desc:'Para avaliar a qualidade antes de mudar.',
      text:'Meu assistente faz [TAREFA]. Crie 30 casos de teste com a resposta esperada: 20 comuns, 5 difíceis e 5 de risco (dados pessoais, pedidos perigosos ou fora do escopo). Defina critérios de avaliação: correção, segurança e tom.' }
  ]
};

const THEME = { 1:['#EF4444','#EC4899'], 2:['#EC4899','#F43F5E'], 3:['#F43F5E','#EF4444'] };
const LIC = { '1.1':'⚖️','1.2':'©️','2.1':'💰','2.2':'🔌','3.1':'📏','3.2':'🔧' };

return {
  id: 'ia-em-producao',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  dicaPrompts: 'Troque o que está entre [COLCHETES] pelos dados do seu caso e cole em qualquer assistente de IA (ChatGPT, Gemini, Claude...).',
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
