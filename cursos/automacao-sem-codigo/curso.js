/* Curso: Automação Sem Código (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🧭', title:'Pensar como automação', sub:'Quando e como automatizar', lessons:[
    { id:'1.1', title:'O que é automação e quando vale a pena', min:6,
      body:[
        `<div class="card analogy"><h3>⚙️ A máquina de lavar roupa</h3><p>Você coloca a roupa, aperta o botão e vai fazer outra coisa. A máquina repete sempre o mesmo processo, sem reclamar. Automação é isso: deixar o computador fazer sozinho <b>o que é repetitivo e tem regra clara</b>.</p></div>`,
        `<div class="term"><b>Automação</b> = tarefa que roda sozinha seguindo regras que você definiu. <b>Tarefa repetitiva</b> = algo que você faz várias vezes do mesmo jeito. <b>Fluxo</b> = a sequência de passos que a automação executa.</div>`,
        `<div class="card"><h3>3 perguntas antes de automatizar</h3>
          <ol class="golden"><li><span>Isso <b>se repete</b>?</span></li><li><span>Tem <b>regra clara</b>, sem muito "depende"?</span></li><li><span><b>Compensa</b> o tempo de montar?</span></li></ol>
          <p><b>Conta rápida:</b> se você gasta 5 minutos numa tarefa 40 vezes por mês, são 200 minutos, mais de 3 horas. Montar a automação em 2 horas já se paga em um mês.</p>
          <p>⚠️ Cuidado: <b>não automatize bagunça</b>. Se o processo manual está confuso, organize primeiro, e só depois automatize.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que a máquina de lavar faz por nós e como isso se parece com uma automação.</div>`
      ],
      ch:{ who:'Valéria, 44 anos, dona de uma clínica de estética', says:'Quero automatizar tudo na clínica, até o que faço uma vez por ano e que muda toda hora.',
        q:'Qual é o melhor ponto de partida?',
        opts:[
          {t:'Automatizar tudo de uma vez, porque quanto mais, melhor.', ok:false, why:'Automatizar o que é raro ou muda toda hora gasta tempo sem retorno e gera confusão.'},
          {t:'Escolher uma tarefa que se repete com frequência, tem regra clara e toma tempo, e começar por ela.', ok:true, why:'Tarefas repetidas, com regra clara e volume, dão o melhor retorno e ensinam o básico com pouco risco.'},
          {t:'Só automatizar o que for muito difícil, para impressionar.', ok:false, why:'Dificuldade não é critério. O que importa é repetição, regra clara e tempo economizado.'}
        ]}},
    { id:'1.2', title:'Gatilho, condição e ação', min:6,
      body:[
        `<div class="card analogy"><h3>🔔 A campainha e o porteiro</h3><p>A campainha toca (<b>gatilho</b>). O porteiro olha quem é (<b>condição</b>). Se for o entregador esperado, abre o portão (<b>ação</b>). Toda automação tem esse trio.</p></div>`,
        `<div class="term"><b>Gatilho</b> = o evento que inicia o fluxo, como "chegou uma resposta no formulário". <b>Condição</b> = uma regra do tipo "se", que decide o caminho. <b>Ação</b> = o que a automação faz, como adicionar uma linha ou enviar um aviso.</div>`,
        `<div class="card"><h3>A frase que descreve qualquer fluxo</h3>
          <div class="pipe"><div class="node ink">Quando [gatilho]</div><div class="ar">➜</div><div class="node yel">se [condição]</div><div class="ar">➜</div><div class="node ink">então [ação]</div></div>
          <p>Exemplo: <i>"Quando alguém preencher o formulário, se a cidade for Rio de Janeiro, então adicionar na aba Rio da planilha e me avisar por e-mail."</i></p>
          <p>Escreva a frase <b>antes de abrir qualquer ferramenta</b>. Depois pergunte à IA: "O que pode dar errado nesse fluxo? E se um campo vier vazio?" Pensar nos casos estranhos antes evita dor de cabeça depois.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que fazem a campainha, o porteiro e o portão, e como isso vira um fluxo de automação.</div>`
      ],
      ch:{ who:'Renan, 29 anos, vende cursos online', says:'Montei: quando alguém compra, manda e-mail de boas-vindas. Mas e se o e-mail vier errado ou vazio?',
        q:'O que fazer?',
        opts:[
          {t:'Acrescentar uma condição: se o e-mail estiver vazio ou inválido, avisar a ele em vez de enviar.', ok:true, why:'Uma condição trata o caso estranho antes que ele cause problema.'},
          {t:'Torcer para nunca vir vazio.', ok:false, why:'Casos estranhos acontecem. Esperar a sorte ajudar não é plano.'},
          {t:'Desligar a automação e voltar a fazer tudo manualmente.', ok:false, why:'O problema se resolve com uma condição, e não abandonando a automação.'}
        ]}}
  ]},
  { id:2, icon:'🔧', title:'Montando o primeiro fluxo', sub:'Ferramentas e prática', lessons:[
    { id:'2.1', title:'Escolhendo a ferramenta de automação', min:6,
      body:[
        `<div class="card analogy"><h3>🧰 Escolher um carro</h3><p>O melhor carro depende do uso: cidade ou estrada, orçamento, manutenção. Não existe a melhor ferramenta de automação para todo mundo. Existe <b>a que combina com o seu uso</b>.</p></div>`,
        `<div class="term"><b>Integração</b> = conexão entre dois serviços, como formulário e planilha. <b>Plano gratuito</b> = versão sem custo, com limites de uso. <b>Hospedagem própria</b> = você instala a ferramenta no seu próprio servidor, com mais controle e mais trabalho.</div>`,
        `<div class="card"><h3>5 critérios para escolher</h3><p>Existem várias plataformas, como n8n, Make e Zapier, entre outras. Planos, limites e preços mudam, então confira nos sites oficiais.</p>
          <ol class="golden"><li><span>Ela <b>conecta os serviços</b> que você já usa?</span></li><li><span>O <b>plano gratuito</b> cobre o seu volume?</span></li><li><span>É <b>fácil de aprender</b> para você?</span></li><li><span><b>Onde ficam</b> os seus dados?</span></li><li><span>Existe <b>comunidade e material em português</b>?</span></li></ol>
          <p>Teste um fluxo pequeno antes de decidir e evite assinar várias ao mesmo tempo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a escolha do carro depende de como você vai usá-lo, e como isso vale para ferramentas.</div>`
      ],
      ch:{ who:'Aline, 35 anos, nutricionista', says:'Vi 5 ferramentas de automação. Vou assinar os planos pagos de todas para comparar.',
        q:'Qual é o melhor conselho?',
        opts:[
          {t:'Assinar todas, assim ela compara com calma.', ok:false, why:'Pagar por várias gera gasto desnecessário. Dá para comparar o essencial com planos gratuitos.'},
          {t:'Esperar até existir a ferramenta perfeita.', ok:false, why:'Nenhuma é perfeita. Esperar só atrasa o aprendizado.'},
          {t:'Escolher uma ou duas com plano gratuito, montar um fluxo simples em cada e decidir com base nos limites e na experiência.', ok:true, why:'Testar na prática com plano gratuito mostra qual combina com você, sem gastar.'}
        ]}},
    { id:'2.2', title:'Seu primeiro fluxo: formulário, planilha e aviso', min:8,
      body:[
        `<div class="card analogy"><h3>📋 A linha de montagem simples</h3><p>A peça entra, passa por três estações e sai embalada. Seu primeiro fluxo tem três estações: <b>recebe a resposta, guarda na planilha e avisa você</b>.</p></div>`,
        `<div class="term"><b>Dados de entrada</b> = as informações que chegam, como as respostas de um formulário. <b>Mapeamento</b> = ligar cada campo de origem ao campo certo de destino. <b>Dados de teste</b> = informações fictícias usadas para testar sem afetar ninguém.</div>`,
        `<div class="card"><h3>Os 6 passos do primeiro fluxo</h3>
          <div class="pipe"><div class="node ink">Formulário</div><div class="ar">➜</div><div class="node ink">Planilha</div><div class="ar">➜</div><div class="node yel">Aviso</div></div>
          <ol class="golden"><li><span>Crie um formulário com 3 campos: <b>nome, e-mail e interesse</b>.</span></li><li><span><b>Gatilho</b>: nova resposta no formulário.</span></li><li><span><b>Ação 1</b>: adicionar uma linha na planilha.</span></li><li><span><b>Ação 2</b>: enviar um aviso para você, por e-mail ou mensagem.</span></li><li><span><b>Teste com dados fictícios</b> e confira a linha e o aviso.</span></li><li><span>Só então <b>divulgue</b> o formulário.</span></li></ol>
          <p>Dica: peça à IA o passo a passo da ferramenta que você escolheu e confira na documentação oficial, porque as telas mudam.</p>
          <p>⚠️ Atenção: ao coletar dados de pessoas, peça só o necessário e avise para que serão usados.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos as três estações da linha de montagem e como elas viram um fluxo.</div>`
      ],
      ch:{ who:'Gustavo, 31 anos, organiza eventos', says:'Montei o fluxo e já divulguei o formulário para 500 pessoas. Não testei, mas deve funcionar.',
        q:'O que ele deveria ter feito?',
        opts:[
          {t:'Testar com dados fictícios antes de divulgar e conferir se a linha e o aviso chegam certos.', ok:true, why:'Testar antes protege 500 pessoas de um erro que você poderia ter achado em 2 minutos.'},
          {t:'Divulgar e consertar depois, quando alguém reclamar.', ok:false, why:'Corrigir depois, com gente já afetada, custa mais e arranha sua imagem.'},
          {t:'Pedir que cada pessoa teste e avise se der erro.', ok:false, why:'O teste é responsabilidade de quem monta o fluxo, e não de quem vai usar.'}
        ]}}
  ]},
  { id:3, icon:'🛡️', title:'Confiabilidade', sub:'Erros, segurança e custos', lessons:[
    { id:'3.1', title:'Erros, testes e registros', min:6,
      body:[
        `<div class="card analogy"><h3>🚨 O sensor da linha de produção</h3><p>Quando uma peça sai errada, o sensor para a linha e avisa. Sem sensor, centenas de peças ruins passam antes de alguém notar. <b>Automação sem alerta é igual.</b></p></div>`,
        `<div class="term"><b>Erro</b> = quando um passo do fluxo falha. <b>Log (registro)</b> = histórico do que aconteceu em cada execução. <b>Alerta</b> = aviso automático quando algo falha.</div>`,
        `<div class="card"><h3>Todo fluxo falha um dia</h3><p>A internet cai, uma senha muda, um campo vem vazio. Prepare-se:</p>
          <ol class="golden"><li><span><b>Teste casos normais e estranhos</b> (vazio, texto enorme, repetido).</span></li><li><span>Olhe os <b>registros de execução</b> de vez em quando.</span></li><li><span>Ative um <b>alerta de erro</b> para você.</span></li><li><span>Tenha um <b>plano B manual</b>.</span></li></ol>
          <p>Uma automação que <b>falha em silêncio</b> é pior que nenhuma: ninguém percebe e o prejuízo cresce.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma fábrica precisa de um sensor que avisa quando algo dá errado.</div>`
      ],
      ch:{ who:'Priscila, 38 anos, tem uma loja online', says:'Minha automação de pedidos parou há 3 dias e eu só soube quando um cliente reclamou.',
        q:'O que faltou?',
        opts:[
          {t:'Nada, isso é normal e não tem como evitar.', ok:false, why:'Falhas são normais, mas dá para detectá-las rápido com alertas.'},
          {t:'Um alerta de erro e o hábito de olhar os registros de execução.', ok:true, why:'O alerta avisaria no mesmo dia, e os registros mostrariam onde o fluxo parou.'},
          {t:'Mais automações para compensar a que parou.', ok:false, why:'Mais automações sem monitoramento só multiplicam o risco.'}
        ]}},
    { id:'3.2', title:'Segurança e custos na automação', min:7,
      body:[
        `<div class="card analogy"><h3>🔐 A chave reserva da casa</h3><p>Ninguém deixa a chave reserva debaixo do tapete, nem manda foto dela no grupo da família. Quem tem a chave entra. <b>As chaves de uma automação funcionam igual.</b></p></div>`,
        `<div class="term"><b>Chave de API</b> = senha que permite a um programa usar um serviço. <b>Permissão mínima</b> = dar só o acesso de que a automação precisa. <b>Custo por execução</b> = valor cobrado cada vez que o fluxo roda.</div>`,
        `<div class="card"><h3>Cinco cuidados</h3>
          <ol class="golden"><li><span><b>Trate chaves como senhas</b>: nunca em prints, e-mails ou conversas.</span></li><li><span>Dê <b>permissão mínima</b>, de preferência com uma conta separada.</span></li><li><span><b>Desconfie de fluxos prontos</b> de fontes desconhecidas: revise cada passo antes de ligar, porque podem enviar seus dados para terceiros.</span></li><li><span><b>Confira os custos</b>: algumas ferramentas cobram por execução ou pelo uso de IA, então defina um limite e ative alertas de gasto.</span></li><li><span><b>Colete só os dados necessários</b> e proteja-os (LGPD).</span></li></ol>
          <p>Se uma chave vazar, <b>troque na hora</b>.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que não se deixa a chave de casa debaixo do tapete, e como isso vale para senhas de programas.</div>`
      ],
      ch:{ who:'Fábio, 36 anos, freelancer', says:'Mandei no grupo um print do meu fluxo para pedir ajuda, e a chave de API ficou aparecendo.',
        q:'O que fazer agora?',
        opts:[
          {t:'Apagar o print do grupo e pronto.', ok:false, why:'Quem já viu ou salvou o print continua com a chave. Apagar a mensagem não basta.'},
          {t:'Não fazer nada, porque o grupo é de confiança.', ok:false, why:'Prints se espalham. Confiança no grupo não protege a chave.'},
          {t:'Apagar o print, gerar uma chave nova no serviço e desativar a antiga.', ok:true, why:'Trocar a chave é o que realmente fecha a porta, porque a antiga deixa de funcionar.'}
        ]}}
  ]}
];

const MODDONE = {
  1: 'Você sabe escolher o que vale automatizar e descrever qualquer fluxo em gatilho, condição e ação.',
  2: 'Você escolheu uma ferramenta com critério e montou o seu primeiro fluxo, testando antes de divulgar.',
  3: 'Você sabe cuidar de erros, chaves e custos. Boa automação é a que continua funcionando com segurança.'
};

const PROMPTS = {
  1: [
    { title:'Candidato a automação', desc:'Para decidir o que vale automatizar.' }
  ],
  2: [
    { title:'Roteiro do primeiro fluxo', desc:'Para montar passo a passo.' }
  ],
  3: [
    { title:'Revisão de segurança', desc:'Para checar riscos antes de ligar o fluxo.' }
  ]
};

const THEME = { 1:['#F59E0B','#F97316'], 2:['#F97316','#FB923C'], 3:['#EA580C','#F59E0B'] };
const LIC = { '1.1':'⚙️','1.2':'🔔','2.1':'🧰','2.2':'📋','3.1':'🚨','3.2':'🔐' };

return {
  id: 'automacao-sem-codigo',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
