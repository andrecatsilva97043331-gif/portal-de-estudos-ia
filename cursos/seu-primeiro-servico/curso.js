/* Curso: Seu Primeiro Serviço com IA (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🔍', title:'Descobrir', sub:'O que você pode oferecer', lessons:[
    { id:'1.1', title:'O mapa das suas habilidades e do que as pessoas pagam para resolver', min:6,
      body:[
        `<div class="card analogy"><h3>🔍 O mapa do tesouro</h3><p>Você já tem um baú de habilidades, mas sem um mapa não sabe onde cavar. O mapa liga o que você sabe fazer ao que as pessoas precisam e aceitam pagar.</p></div>`,
        `<div class="term"><b>Habilidade</b> = algo que você sabe fazer, mesmo que tenha aprendido na prática. <b>Problema real</b> = uma dificuldade que as pessoas enfrentam e querem resolver. <b>Serviço</b> = uma solução entregue por você em troca de pagamento.</div>`,
        `<div class="card"><h3>Três listas e um cruzamento</h3><ol class="golden"><li><span>Liste o que você sabe fazer, no trabalho, em casa e em hobbies.</span></li><li><span>Liste problemas que você viu pessoas ou pequenos negócios terem (responder clientes devagar, não saber divulgar, planilhas bagunçadas).</span></li><li><span>Pergunte à IA: "Com estas habilidades, que serviços simples eu poderia oferecer para estes problemas?".</span></li><li><span>Cruze as listas e escolha de 3 a 5 ideias.</span></li></ol>
          <p>Depois confira com pessoas reais se o problema existe e se elas pagariam para resolver. A IA dá ideias, mas só gente de verdade confirma se há demanda.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que, para achar um tesouro, não basta ter uma pá: precisa de um mapa.</div>`
      ],
      ch:{ who:'Vanessa, 30 anos, quer começar a oferecer um serviço', says:'Perguntei à IA que serviço eu devo vender, e ela deu 10 ideias. Vou escolher a que parece mais bonita e começar.',
        q:'Qual é o melhor próximo passo?',
        opts:[
          {t:'Escolher a ideia mais bonita e investir tudo nela.', ok:false, why:'Beleza não prova demanda. Sem conversar com possíveis clientes, ela pode investir numa ideia que ninguém paga.'},
          {t:'Escolher 3 ideias, conversar com pessoas que têm o problema e ver se elas pagariam para resolver.', ok:true, why:'Conversar com possíveis clientes confirma se há demanda antes de investir tempo e dinheiro.'},
          {t:'Pedir mais 100 ideias para a IA, até achar uma perfeita.', ok:false, why:'Mais ideias não substituem o teste com pessoas reais.'}
        ]}},
    { id:'1.2', title:'Escolher um serviço e um nicho', min:7,
      body:[
        `<div class="card analogy"><h3>🎯 A loja especializada</h3><p>Quem precisa de um sapato de dança vai à loja especializada, e não ao vendedor que vende de tudo. Quem se especializa é lembrado e indicado com mais facilidade.</p></div>`,
        `<div class="term"><b>Nicho</b> = um grupo específico de clientes com um problema parecido. <b>Serviço principal</b> = o serviço que você mais vai oferecer no começo. <b>Critério de escolha</b> = o que você usa para decidir entre as opções.</div>`,
        `<div class="card"><h3>Cinco critérios para decidir</h3><p>Dê nota de 1 a 5 a cada ideia:</p>
          <ol class="golden"><li><span>Eu sei fazer (ou aprendo rápido)?</span></li><li><span>Eu gosto de fazer?</span></li><li><span>O cliente tem um problema claro e frequente?</span></li><li><span>O cliente tem como pagar?</span></li><li><span>Consigo atender as primeiras pessoas que conheço?</span></li></ol>
          <p>Some e escolha uma. Escolha também um nicho que você conheça, como "salões de beleza do meu bairro". Teste a frase "Eu ajudo [NICHO] a [RESULTADO]" com 3 pessoas desse nicho. Se não entenderem, reescreva. Comece com uma coisa só. Dá para ampliar depois.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que escolher uma coisa só para fazer bem pode ser melhor do que tentar fazer tudo.</div>`
      ],
      ch:{ who:'Caio, 28 anos, sabe de planilhas, redes sociais e sites', says:'Vou oferecer planilhas, posts, sites, vídeos e tudo o que o cliente quiser, para qualquer tipo de negócio.',
        q:'Qual é a melhor estratégia para começar?',
        opts:[
          {t:'Oferecer tudo a todos, para não perder nenhuma oportunidade.', ok:false, why:'A mensagem fica confusa e o cliente não sabe em que você é bom.'},
          {t:'Não oferecer nada até dominar todas as áreas.', ok:false, why:'Ninguém domina tudo. Começar pequeno e aprender com clientes reais é o caminho.'},
          {t:'Escolher um serviço e um nicho que conhece, e dar notas pelos critérios antes de decidir.', ok:true, why:'Foco e critérios claros tornam a oferta mais fácil de explicar e de vender.'}
        ]}}
  ]},
  { id:2, icon:'📦', title:'Montar a oferta', sub:'Escopo, entrega e preço', lessons:[
    { id:'2.1', title:'Escopo, entregáveis e prazo', min:7,
      body:[
        `<div class="card analogy"><h3>📦 A caixa de bombons com a lista na tampa</h3><p>A lista diz exatamente o que há dentro. Ninguém abre esperando 24 e encontra 12. A oferta deve deixar claro o que o cliente recebe.</p></div>`,
        `<div class="term"><b>Escopo</b> = o que está incluído no serviço e o que não está. <b>Entregável</b> = algo concreto que o cliente recebe, como um documento, uma arte ou um site. <b>Prazo</b> = o tempo combinado para a entrega.</div>`,
        `<div class="card"><h3>A oferta em um parágrafo</h3><p>"Eu ajudo [NICHO] a [RESULTADO]. Entrego [ENTREGÁVEIS] em [PRAZO]. Estão incluídas [N] revisões. Não está incluído [LIMITE]." Exemplo: "Eu ajudo salões a responder clientes mais rápido. Entrego 12 mensagens prontas para WhatsApp, com guia de uso, em 5 dias. Está incluída 1 rodada de ajustes. Não está incluído o envio das mensagens." Quanto mais claro, menos desentendimento. Peça à IA para revisar a oferta e apontar o que pode ser mal entendido. Use palavras simples e fale do resultado que o cliente entende, e não de tecnologia.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a caixa de bombons tem uma lista na tampa.</div>`
      ],
      ch:{ who:'Elaine, 33 anos, está montando sua oferta', says:'Escrevi \'faço o que o cliente precisar\', sem prazo nem lista do que entrego. Assim ele fica livre para pedir.',
        q:'Qual é o problema?',
        opts:[
          {t:'Nenhum: liberdade total agrada ao cliente.', ok:false, why:'Sem limites, o cliente pede cada vez mais e a entrega nunca termina.'},
          {t:'Ela deveria cobrar bem mais caro pela liberdade.', ok:false, why:'O problema não é o preço, e sim a falta de escopo, de prazo e de entrega definidos.'},
          {t:'Falta definir o que entrega, em quanto tempo, quantas revisões e o que não está incluído.', ok:true, why:'Uma oferta com escopo, prazo e limites evita desentendimentos e mostra profissionalismo.'}
        ]}},
    { id:'2.2', title:'Como pensar o preço sem prometer ganhos', min:7,
      body:[
        `<div class="card analogy"><h3>💲 O preço do prato do dia</h3><p>O dono do restaurante soma ingredientes, tempo de cozinha, aluguel e uma margem, e olha o preço de pratos parecidos na região. Ele não chuta nem copia o vizinho sem pensar.</p></div>`,
        `<div class="term"><b>Custo</b> = o que você gasta para entregar, incluindo o seu tempo. <b>Valor</b> = o quanto o resultado vale para o cliente. <b>Margem</b> = o que sobra depois de cobrir os custos.</div>`,
        `<div class="card"><h3>Custo, valor e mercado</h3><ol class="golden"><li><span>Custo: quantas horas você gasta e quanto vale a sua hora, somando ferramentas e impostos.</span></li><li><span>Valor: quanto o resultado ajuda o cliente.</span></li><li><span>Mercado: o que se cobra por serviços parecidos na sua região.</span></li></ol>
          <p>Pode cobrar por projeto, por hora ou por mensalidade, quando o serviço é contínuo. No início, um preço de piloto, mais baixo e combinado com um depoimento em troca, pode ajudar, desde que seja dito claramente que é uma condição especial e temporária. Ninguém pode prometer quanto você vai ganhar: pesquise, teste e ajuste.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o dono do restaurante soma tudo o que gasta antes de decidir o preço do prato.</div>`
      ],
      ch:{ who:'Júlio, 26 anos, está definindo o preço', says:'Vou cobrar o que me der na cabeça, sem fazer nenhuma conta.',
        q:'Qual é a melhor abordagem?',
        opts:[
          {t:'Cobrar sem conta, porque o cliente vai aceitar o que for.', ok:false, why:'Sem conta, ele pode cobrar abaixo do custo e sair no prejuízo.'},
          {t:'Copiar o preço de quem cobra mais caro na internet.', ok:false, why:'Outros profissionais têm outro nível, outro público e outros custos.'},
          {t:'Calcular o custo da sua hora, considerar o valor para o cliente, pesquisar o mercado local e ajustar com a experiência.', ok:true, why:'O preço baseado em custo, valor e mercado é justo para você e para o cliente.'}
        ]}}
  ]},
  { id:3, icon:'🧪', title:'Validar', sub:'Testar com um primeiro cliente', lessons:[
    { id:'3.1', title:'O cliente-piloto', min:7,
      body:[
        `<div class="card analogy"><h3>🧪 O ensaio antes da estreia</h3><p>A peça de teatro faz ensaio geral para um público pequeno antes da estreia. Os erros aparecem, e a equipe corrige antes de a casa lotar. O cliente-piloto é o seu ensaio.</p></div>`,
        `<div class="term"><b>Cliente-piloto</b> = o primeiro cliente, em condição especial, para testar o serviço e aprender. <b>Depoimento</b> = a opinião do cliente sobre o seu trabalho, publicada com autorização. <b>Feedback</b> = o que o cliente achou, com o que funcionou e o que melhorar.</div>`,
        `<div class="card"><h3>Como fazer um piloto honesto</h3><ol class="golden"><li><span>Escolha alguém do seu nicho, que tenha o problema.</span></li><li><span>Combine por escrito: escopo, prazo, preço do piloto e que será uma condição especial.</span></li><li><span>Entregue com cuidado e revise tudo.</span></li><li><span>Peça feedback com 3 perguntas: o que foi mais útil? O que faltou? Você indicaria?</span></li><li><span>Peça um depoimento, com autorização para publicar, e só publique o que for real.</span></li><li><span>Anote o que aprendeu e ajuste a oferta.</span></li></ol>
          <p>Não prometa resultados de vendas: prometa o que você entrega.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma peça de teatro faz um ensaio antes da estreia.</div>`
      ],
      ch:{ who:'Beatriz, 29 anos, fez seu primeiro serviço para uma amiga', says:'Terminei e entreguei. Como ela gostou, vou escrever um depoimento bonito em nome dela para colocar no meu perfil.',
        q:'O que ela deveria fazer?',
        opts:[
          {t:'Escrever o depoimento e publicar, porque a amiga gostou.', ok:false, why:'Escrever em nome de outra pessoa sem autorização é falso e quebra a confiança.'},
          {t:'Não pedir nada, para não incomodar a amiga.', ok:false, why:'Pedir feedback e depoimento é parte normal do processo, e a maioria das pessoas ajuda.'},
          {t:'Pedir feedback, perguntar se a amiga aceita dar um depoimento com as próprias palavras e só publicar com a autorização dela.', ok:true, why:'Depoimento real, nas palavras do cliente e autorizado, constrói credibilidade honesta.'}
        ]}},
    { id:'3.2', title:'Projeto de portfólio e checklist', min:6,
      body:[
        `<div class="card analogy"><h3>📁 O cartão de visitas do seu serviço</h3><p>Uma página que diz quem você ajuda, o que entrega e como falar com você, em um lugar só. Quem recebe entende em um minuto.</p></div>`,
        `<div class="term"><b>Página de oferta</b> = documento de 1 página que apresenta o seu serviço. <b>Caso</b> = a história de um trabalho feito. <b>Checklist</b> = lista de itens a conferir antes de começar a cobrar.</div>`,
        `<div class="card"><h3>Projeto final e checklist</h3><p>Crie a página de oferta de 1 página:</p>
          <ol class="golden"><li><span>Para quem é.</span></li><li><span>O problema que resolve.</span></li><li><span>O que você entrega e em quanto tempo.</span></li><li><span>O que está incluído e o que não está.</span></li><li><span>Preço (ou faixa) e forma de pagamento.</span></li><li><span>Como contratar.</span></li><li><span>Um exemplo do seu trabalho (pode ser um projeto de treino identificado como fictício).</span></li></ol>
          <p><b>Checklist "estou pronto para cobrar?":</b> nicho escolhido, oferta em um parágrafo, preço calculado, piloto feito ou planejado, combinado escrito, nenhuma promessa de ganho e dados de clientes protegidos.</p>
          <p><b>Próximo passo:</b> o curso "Primeiros Clientes".</p>
          <p>⚠️ Este curso não garante renda: ele ensina a oferecer um serviço com clareza.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, quem você quer ajudar e o que você entrega.</div>`
      ],
      ch:{ who:'Rafael, 31 anos, montou a página de oferta', says:'Coloquei na página: \'Aumento suas vendas em 200% em 30 dias, garantido\'. Vai chamar muita atenção.',
        q:'O que ele deveria fazer?',
        opts:[
          {t:'Manter a frase: chama atenção e os clientes vão acreditar.', ok:false, why:'Ele não controla as vendas do cliente. Garantir resultados assim é enganoso.'},
          {t:'Trocar para o que ele de fato entrega e controla, como "entrego 12 mensagens prontas em 5 dias, com guia de uso", sem garantir vendas.', ok:true, why:'Promessas sobre o que depende dele são honestas e cumpríveis, e dão credibilidade.'},
          {t:'Diminuir o número para 100%, para parecer mais realista.', ok:false, why:'O problema não é o tamanho do número, e sim garantir um resultado que não depende dele.'}
        ]}}
  ]}
];

const MODDONE = {
  1: 'Você sabe cruzar suas habilidades com problemas reais e escolher um serviço e um nicho com critério.',
  2: 'Você sabe montar uma oferta clara, com escopo, entrega e prazo, e pensar o preço com custo, valor e mercado.',
  3: 'Você sabe testar com um cliente-piloto e reunir feedback e depoimento reais. Agora o seu primeiro serviço está pronto para ser oferecido.'
};

const PROMPTS = {
  1: [
    { title:'Ideias de serviço', desc:'Para cruzar habilidades e problemas.' }
  ],
  2: [
    { title:'Oferta em um parágrafo', desc:'Para escrever a oferta com clareza.' }
  ],
  3: [
    { title:'Pesquisa de feedback', desc:'Para aprender com o cliente-piloto.' }
  ]
};

const THEME = { 1:['#10B981','#84CC16'], 2:['#84CC16','#10B981'], 3:['#10B981','#84CC16'] };
const LIC = { '1.1':'🔍','1.2':'🎯','2.1':'📦','2.2':'💲','3.1':'🧪','3.2':'📁' };

return {
  id: 'seu-primeiro-servico',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
