/* Curso: Automação Sem Código (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🧭', title:'Pensar como automação', sub:'Quando e como automatizar', lessons:[
    { id:'1.1', title:'O que é automação e quando vale a pena', min:10,
      body:[
        `<div class="card analogy"><h3>⚙️ A máquina de lavar roupa</h3><p>Você coloca a roupa, aperta o botão e vai fazer outra coisa. A máquina repete sempre o mesmo processo, sem reclamar. Automação é isso: deixar o computador fazer sozinho <b>o que é repetitivo e tem regra clara</b>.</p></div>`,
        `<div class="term"><b>Automação</b> = tarefa que roda sozinha seguindo regras que você definiu. <b>Tarefa repetitiva</b> = algo que você faz várias vezes do mesmo jeito. <b>Fluxo</b> = a sequência de passos que a automação executa.</div>`,
        `<div class="card"><h3>3 perguntas antes de automatizar</h3>
          <ol class="golden"><li><span>Isso <b>se repete</b>?</span></li><li><span>Tem <b>regra clara</b>, sem muito "depende"?</span></li><li><span><b>Compensa</b> o tempo de montar?</span></li></ol>
          <p><b>Conta rápida:</b> se você gasta 5 minutos numa tarefa 40 vezes por mês, são 200 minutos, mais de 3 horas. Montar a automação em 2 horas já se paga em um mês.</p>
          <p>⚠️ Cuidado: <b>não automatize bagunça</b>. Se o processo manual está confuso, organize primeiro, e só depois automatize.</p></div>`,
        `<div class="card"><h3>Vale ou não vale? Exemplos do dia a dia</h3>
          <div class="tw"><table class="tbl"><tr><th>Tarefa</th><th>Se repete?</th><th>Regra clara?</th><th>Veredito</th></tr>
          <tr><td>Copiar respostas de formulário para a planilha</td><td>Toda hora</td><td>Sim</td><td>✅ Ótima candidata</td></tr>
          <tr><td>Lembrete de consulta um dia antes</td><td>Todo dia</td><td>Sim</td><td>✅ Ótima candidata</td></tr>
          <tr><td>Negociar desconto com um cliente insatisfeito</td><td>Às vezes</td><td>Não, cada caso é um caso</td><td>❌ Fica com você</td></tr>
          <tr><td>Organizar a festa de fim de ano</td><td>Uma vez por ano</td><td>Muda sempre</td><td>❌ Não compensa</td></tr></table></div>
          <p>Repare: o que fica com você é o que exige <b>conversa, julgamento ou criatividade</b>. A automação libera tempo justamente para isso.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que a máquina de lavar faz por nós e como isso se parece com uma automação.</div>`
      ],
      ch:[
        { who:'Valéria, 44 anos, dona de uma clínica de estética', says:'Quero automatizar tudo na clínica, até o que faço uma vez por ano e que muda toda hora.',
          q:'Qual é o melhor ponto de partida?',
          opts:[
            {t:'Automatizar tudo de uma vez, porque quanto mais, melhor.', ok:false, why:'Automatizar o que é raro ou muda toda hora gasta tempo sem retorno e gera confusão.'},
            {t:'Escolher uma tarefa que se repete com frequência, tem regra clara e toma tempo, e começar por ela.', ok:true, why:'Tarefas repetidas, com regra clara e volume, dão o melhor retorno e ensinam o básico com pouco risco.'},
            {t:'Só automatizar o que for muito difícil, para impressionar.', ok:false, why:'Dificuldade não é critério. O que importa é repetição, regra clara e tempo economizado.'}
          ]},
        { who:'Seu Joaquim, 61 anos, dono de uma padaria em Belo Horizonte', says:'Todo dia copio uns 30 pedidos de encomenda para um caderno. Levo uns 10 minutos. Isso é pouco, nem vale a pena mexer.',
          q:'Fazendo a conta, o que dá para dizer a ele?',
          opts:[
            {t:'Ele tem razão: 10 minutos por dia não fazem diferença.', ok:false, why:'10 minutos por dia viram cerca de 5 horas por mês. Tempo pequeno e diário soma muito.'},
            {t:'São cerca de 5 horas por mês numa tarefa repetida e com regra clara. Se montar o fluxo levar 2 ou 3 horas, ele se paga no primeiro mês.', ok:true, why:'A conta tempo por vez vezes frequência mostra o tamanho real do ganho e ajuda a decidir sem achismo.'},
            {t:'Só vale a pena se a ferramenta for gratuita para sempre.', ok:false, why:'O custo importa, mas o critério principal é o tempo economizado comparado ao tempo e ao custo de montar e manter.'}
          ]},
        { who:'Larissa, 27 anos, analista de RH em Recife', says:'Cada pessoa do RH faz a admissão de um jeito: uns pedem documentos por e-mail, outros pelo WhatsApp. Quero automatizar isso já.',
          q:'Qual é o primeiro passo mais sensato?',
          opts:[
            {t:'Automatizar do jeito que está, com um fluxo para cada pessoa.', ok:false, why:'Automatizar a bagunça só faz a bagunça acontecer mais rápido, e com vários fluxos para manter.'},
            {t:'Combinar com a equipe um único jeito de fazer a admissão, testar manualmente por alguns dias e só então automatizar.', ok:true, why:'Primeiro organiza, depois automatiza. Um processo padronizado tem regra clara, que é o que a automação precisa.'},
            {t:'Comprar a ferramenta mais cara, porque ela resolve a desorganização sozinha.', ok:false, why:'Nenhuma ferramenta decide como sua equipe deve trabalhar. Isso é uma decisão humana que vem antes.'}
          ]},
        { who:'Marcos, 39 anos, contador em Curitiba', says:'Tem um relatório que faço uma vez por ano, e as regras mudam toda vez. Quero que ele seja minha primeira automação.',
          q:'O que você recomenda?',
          opts:[
            {t:'Manter esse relatório manual, com um checklist atualizado, e escolher para a primeira automação uma tarefa semanal ou diária.', ok:true, why:'Tarefa anual e com regras que mudam não compensa automatizar. Um checklist resolve, e a primeira automação deve ser frequente e estável.'},
            {t:'Automatizar mesmo assim e refazer o fluxo a cada ano.', ok:false, why:'Refazer o fluxo todo ano costuma dar mais trabalho do que fazer o relatório à mão.'},
            {t:'Esperar as regras pararem de mudar para começar a automatizar qualquer coisa.', ok:false, why:'Ele não precisa esperar: há outras tarefas frequentes e estáveis que já podem ser automatizadas.'}
          ]}
      ]},
    { id:'1.2', title:'Gatilho, condição e ação', min:10,
      body:[
        `<div class="card analogy"><h3>🔔 A campainha e o porteiro</h3><p>A campainha toca (<b>gatilho</b>). O porteiro olha quem é (<b>condição</b>). Se for o entregador esperado, abre o portão (<b>ação</b>). Toda automação tem esse trio.</p></div>`,
        `<div class="term"><b>Gatilho</b> = o evento que inicia o fluxo, como "chegou uma resposta no formulário". <b>Condição</b> = uma regra do tipo "se", que decide o caminho. <b>Ação</b> = o que a automação faz, como adicionar uma linha ou enviar um aviso.</div>`,
        `<div class="card"><h3>A frase que descreve qualquer fluxo</h3>
          <div class="pipe"><div class="node ink">Quando [gatilho]</div><div class="ar">➜</div><div class="node yel">se [condição]</div><div class="ar">➜</div><div class="node ink">então [ação]</div></div>
          <p>Exemplo: <i>"Quando alguém preencher o formulário, se a cidade for Rio de Janeiro, então adicionar na aba Rio da planilha e me avisar por e-mail."</i></p>
          <p>Escreva a frase <b>antes de abrir qualquer ferramenta</b>. Depois pergunte à IA: "O que pode dar errado nesse fluxo? E se um campo vier vazio?" Pensar nos casos estranhos antes evita dor de cabeça depois.</p></div>`,
        `<div class="card"><h3>Três tipos de gatilho</h3>
          <div class="tw"><table class="tbl"><tr><th>Tipo</th><th>Quando dispara</th><th>Exemplo</th></tr>
          <tr><td><b>Evento</b></td><td>Algo acontece num serviço</td><td>Chegou um e-mail, alguém comprou, nova linha na planilha</td></tr>
          <tr><td><b>Agendamento</b></td><td>Num dia e horário fixos</td><td>Toda segunda às 8h, todo dia às 18h</td></tr>
          <tr><td><b>Manual</b></td><td>Quando você aperta um botão</td><td>Gerar o relatório do mês quando você quiser</td></tr></table></div>
          <p>Um fluxo pode ter <b>várias condições e várias ações</b>, mas tem <b>um gatilho só</b>. Se você precisa de dois gatilhos, provavelmente são dois fluxos.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que fazem a campainha, o porteiro e o portão, e como isso vira um fluxo de automação.</div>`
      ],
      ch:[
        { who:'Renan, 29 anos, vende cursos online', says:'Montei: quando alguém compra, manda e-mail de boas-vindas. Mas e se o e-mail vier errado ou vazio?',
          q:'O que fazer?',
          opts:[
            {t:'Acrescentar uma condição: se o e-mail estiver vazio ou inválido, avisar a ele em vez de enviar.', ok:true, why:'Uma condição trata o caso estranho antes que ele cause problema.'},
            {t:'Torcer para nunca vir vazio.', ok:false, why:'Casos estranhos acontecem. Esperar a sorte ajudar não é plano.'},
            {t:'Desligar a automação e voltar a fazer tudo manualmente.', ok:false, why:'O problema se resolve com uma condição, e não abandonando a automação.'}
          ]},
        { who:'Juliana, 33 anos, professora particular em Salvador', says:'Meu fluxo é: quando um aluno pagar pelo Pix, se o valor for o da mensalidade, marcar como pago na planilha e mandar um obrigado.',
          q:'Nesse fluxo, qual é o gatilho?',
          opts:[
            {t:'Marcar como pago na planilha.', ok:false, why:'Isso é uma ação, algo que o fluxo faz depois de começar.'},
            {t:'O valor ser igual ao da mensalidade.', ok:false, why:'Isso é a condição, que decide se o fluxo segue por esse caminho.'},
            {t:'Chegar um pagamento pelo Pix.', ok:true, why:'O gatilho é o evento que dá a partida. Sem pagamento, nada acontece.'},
            {t:'Mandar a mensagem de obrigado.', ok:false, why:'Também é uma ação, a segunda do fluxo.'}
          ]},
        { who:'Diego, 36 anos, loja de roupas em Porto Alegre', says:'Quero mandar um cupom especial só para quem já gastou mais de R$ 500 na loja quando fizer uma nova compra.',
          q:'Onde entra o "gastou mais de R$ 500" no fluxo?',
          opts:[
            {t:'É o gatilho, porque é o que importa.', ok:false, why:'O gatilho é a nova compra. Gastar mais de R$ 500 não é um evento, é uma regra que se confere.'},
            {t:'É uma condição: quando houver nova compra, se o total do cliente passar de R$ 500, então enviar o cupom.', ok:true, why:'Regras do tipo "se" são condições. Elas separam quem recebe o cupom de quem não recebe.'},
            {t:'É uma ação, porque o cupom é enviado.', ok:false, why:'A ação é enviar o cupom. O valor gasto é o critério que decide se a ação acontece.'}
          ]},
        { who:'Patrícia, 50 anos, síndica de um prédio em Campinas', says:'Quero que toda segunda-feira às 8h saia um lembrete no grupo do prédio sobre o dia da coleta seletiva. Mas não tem nenhum "evento" acontecendo.',
          q:'Como resolver o gatilho desse fluxo?',
          opts:[
            {t:'Não dá para automatizar sem um evento externo.', ok:false, why:'Dá sim: o próprio relógio pode ser o gatilho.'},
            {t:'Usar um gatilho de agendamento, que dispara toda segunda às 8h.', ok:true, why:'Gatilhos de agendamento existem justamente para tarefas que acontecem em dia e horário fixos.'},
            {t:'Pedir para um morador mandar uma mensagem toda segunda para disparar o fluxo.', ok:false, why:'Isso cria dependência de uma pessoa e tira o sentido de automatizar.'}
          ]}
      ]},
    { id:'1.3', title:'Mapeando o processo antes de automatizar', min:12,
      body:[
        `<div class="card analogy"><h3>🗺️ A receita da avó</h3><p>A avó faz o bolo de olho fechado, mas quando alguém pede a receita ela percebe que pula passos: "uma pitada", "até dar o ponto". Para outra pessoa conseguir repetir, a receita precisa ser <b>escrita passo a passo, com quantidades</b>. A automação é essa outra pessoa: ela só repete o que estiver escrito.</p></div>`,
        `<div class="term"><b>Processo</b> = conjunto de etapas para chegar a um resultado, como "atender um pedido". <b>Etapa</b> = uma ação concreta, descrita com um verbo. <b>Gargalo</b> = a etapa que mais atrasa ou mais toma tempo. <b>Exceção</b> = o caso que foge da regra, como um pedido sem endereço.</div>`,
        `<div class="card"><h3>Como mapear em 5 passos</h3>
          <ol class="golden"><li><span>Escolha <b>um processo</b> e defina onde ele começa e onde termina.</span></li><li><span>Liste <b>cada etapa com um verbo</b>: "receber", "copiar", "conferir", "enviar".</span></li><li><span>Para cada etapa, anote <b>quem faz, em qual ferramenta e quanto tempo leva</b>.</span></li><li><span>Marque as <b>exceções</b> e as <b>decisões humanas</b> (onde alguém precisa pensar).</span></li><li><span>Circule o <b>trecho mais repetitivo e com regra clara</b>: ele é o candidato a automação.</span></li></ol>
          <p>Faça isso no papel ou numa planilha. Não precisa ser bonito, precisa ser <b>honesto</b>: descreva como o processo acontece de verdade, e não como deveria acontecer.</p></div>`,
        `<div class="card"><h3>Exemplo: orçamentos de uma pequena gráfica</h3>
          <div class="tw"><table class="tbl"><tr><th>Etapa</th><th>Quem</th><th>Onde</th><th>Tempo</th><th>Automatizável?</th></tr>
          <tr><td>Receber pedido de orçamento</td><td>Atendente</td><td>WhatsApp e e-mail</td><td>2 min</td><td>Sim, com formulário</td></tr>
          <tr><td>Copiar dados para a planilha</td><td>Atendente</td><td>Planilha</td><td>4 min</td><td>✅ Sim</td></tr>
          <tr><td>Calcular o preço</td><td>Dono</td><td>Calculadora</td><td>5 min</td><td>Em parte (tabela de preços)</td></tr>
          <tr><td>Decidir desconto para cliente antigo</td><td>Dono</td><td>Cabeça dele</td><td>1 min</td><td>❌ Decisão humana</td></tr>
          <tr><td>Enviar o orçamento e lembrar depois de 3 dias</td><td>Atendente</td><td>WhatsApp</td><td>3 min</td><td>✅ Sim</td></tr></table></div>
          <p>Só de olhar a tabela, a gráfica descobre que copiar dados e lembrar o cliente somam 7 minutos por orçamento. Com 80 orçamentos por mês, são mais de 9 horas.</p></div>`,
        `<div class="card"><h3>A conta do retorno</h3><p>Para comparar candidatos, use: <b>minutos por vez × vezes por mês = minutos economizados por mês</b>. Depois compare com o tempo de montar e com a manutenção mensal (conferir registros, ajustar quando algo muda).</p>
          <div class="tw"><table class="tbl"><tr><th>Candidato</th><th>Economia por mês</th><th>Montar</th><th>Prioridade</th></tr>
          <tr><td>Copiar pedidos para a planilha</td><td>320 min</td><td>2 h</td><td>1ª</td></tr>
          <tr><td>Lembrete de orçamento sem resposta</td><td>240 min</td><td>3 h</td><td>2ª</td></tr>
          <tr><td>Relatório anual de vendas</td><td>10 min</td><td>5 h</td><td>Não compensa</td></tr></table></div></div>`,
        `<div class="card"><h3>⚠️ Erros comuns no mapeamento</h3><ul><li><b>Pular etapas "óbvias"</b>, como conferir se o cliente já existe. São justamente elas que quebram o fluxo.</li><li><b>Esquecer as exceções.</b> Pergunte sempre: e se faltar um dado? E se vier repetido?</li><li><b>Mapear sozinho.</b> Converse com quem executa a tarefa: ela conhece os atalhos e os problemas que você não vê.</li></ul></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a receita da avó precisa ser escrita passo a passo para outra pessoa conseguir fazer o bolo.</div>`
      ],
      ch:[
        { who:'Sandra, 46 anos, dona de uma floricultura em Goiânia', says:'Meu processo é: "o cliente pede e a gente entrega". Já posso automatizar?',
          q:'O que falta antes de automatizar?',
          opts:[
            {t:'Nada, a frase já resume tudo.', ok:false, why:'Uma frase tão geral esconde as etapas, os tempos e as exceções, que são o que a automação precisa conhecer.'},
            {t:'Detalhar cada etapa com um verbo (receber, anotar, confirmar pagamento, montar, entregar), quem faz, onde e quanto tempo leva.', ok:true, why:'Com o processo mapeado, ela enxerga onde está a repetição e o que pode ir para a automação.'},
            {t:'Escolher a ferramenta primeiro e descobrir as etapas enquanto monta.', ok:false, why:'Começar pela ferramenta sem mapa leva a fluxos remendados. O mapa vem antes.'}
          ]},
        { who:'Thiago, 31 anos, gerente de uma oficina mecânica em Fortaleza', says:'Mapeei o processo e uma etapa é "decidir se vale a pena consertar ou trocar a peça". Coloco isso na automação?',
          q:'Como tratar essa etapa?',
          opts:[
            {t:'Automatizar com uma regra fixa de preço, sempre trocar acima de certo valor.', ok:false, why:'Essa decisão depende de avaliação técnica e conversa com o cliente. Uma regra fixa vai errar em muitos casos.'},
            {t:'Marcar como decisão humana e automatizar as etapas em volta, como registrar o diagnóstico e avisar o cliente quando o orçamento estiver pronto.', ok:true, why:'A automação cuida do repetitivo e deixa o julgamento técnico com quem entende. É a divisão certa de trabalho.'},
            {t:'Tirar essa etapa do mapa, porque ela atrapalha.', ok:false, why:'Apagar a etapa deixa o mapa falso. Ele precisa mostrar o processo real, inclusive as decisões humanas.'}
          ]},
        { who:'Camila, 29 anos, social media freelancer em Florianópolis', says:'Tenho três candidatos: postar relatório semanal para clientes (20 min, 4 vezes por mês), responder comentários (cada um é diferente) e organizar o arquivo de fotos uma vez por ano.',
          q:'Qual deve ser a primeira automação?',
          opts:[
            {t:'Responder comentários, porque é o que ela mais faz.', ok:false, why:'Cada comentário exige leitura e julgamento. Não há regra clara para automatizar a resposta inteira.'},
            {t:'Organizar o arquivo anual, porque é o mais chato.', ok:false, why:'Ser chato não basta. Uma vez por ano dá pouco retorno para o tempo de montar.'},
            {t:'O relatório semanal: repetido, com regra clara e cerca de 80 minutos por mês para cada cliente.', ok:true, why:'É frequente, previsível e o ganho se multiplica pelo número de clientes.'}
          ]},
        { who:'Roberto, 55 anos, dono de uma distribuidora em Manaus', says:'No mapa ficou assim: "Receber pedido. Copiar para a planilha. Enviar para o estoque." Mas às vezes o pedido chega sem endereço e a gente liga para o cliente.',
          q:'O que fazer com esse "às vezes"?',
          opts:[
            {t:'Ignorar, porque é raro.', ok:false, why:'Casos raros acontecem toda semana quando o volume é alto. Se o fluxo não souber tratar, vai travar ou enviar pedido incompleto.'},
            {t:'Registrar como exceção no mapa e prever no fluxo: se faltar endereço, avisar o atendente para ligar, em vez de enviar ao estoque.', ok:true, why:'Exceções mapeadas viram condições no fluxo. Assim o caso estranho tem um caminho definido.'},
            {t:'Proibir pedidos sem endereço e descartar os que chegarem assim.', ok:false, why:'Descartar pedido é perder venda. O melhor é tratar a exceção com uma pessoa.'}
          ]}
      ]},
    { id:'1.4', title:'Padrões de automação do dia a dia', min:10,
      body:[
        `<div class="card analogy"><h3>🧩 As receitas básicas da cozinha</h3><p>Quem cozinha bem não inventa tudo do zero: conhece algumas receitas-base (arroz, molho, massa) e combina. Na automação também existem <b>padrões que se repetem</b> em quase todo negócio. Reconhecê-los faz você enxergar oportunidades e montar fluxos mais rápido.</p></div>`,
        `<div class="term"><b>Padrão de automação</b> = um tipo de fluxo que aparece em muitos negócios, com a mesma estrutura. <b>Sincronizar</b> = manter a mesma informação igual em dois lugares. <b>Lote</b> = juntar vários itens e processar de uma vez, em vez de um por um.</div>`,
        `<div class="card"><h3>Os 6 padrões mais comuns</h3>
          <div class="tw"><table class="tbl"><tr><th>Padrão</th><th>Estrutura</th><th>Exemplo</th></tr>
          <tr><td><b>Coleta</b></td><td>Formulário ou mensagem → registro organizado</td><td>Inscrições de um evento indo para a planilha</td></tr>
          <tr><td><b>Aviso</b></td><td>Algo acontece → alguém é avisado</td><td>Pedido acima de R$ 1.000 avisa o gerente</td></tr>
          <tr><td><b>Lembrete</b></td><td>Data se aproxima → mensagem</td><td>Consulta amanhã, boleto vence em 3 dias</td></tr>
          <tr><td><b>Sincronização</b></td><td>Mudou num lugar → atualiza no outro</td><td>Cliente novo na loja virtual entra na lista de e-mails</td></tr>
          <tr><td><b>Relatório</b></td><td>Agendamento → junta dados → envia resumo</td><td>Toda segunda, vendas da semana por e-mail</td></tr>
          <tr><td><b>Acompanhamento</b></td><td>Sem resposta depois de X dias → novo contato</td><td>Orçamento enviado e sem retorno em 3 dias</td></tr></table></div></div>`,
        `<div class="card"><h3>Como usar os padrões</h3><ol class="golden"><li><span>Pegue o mapa do seu processo e pergunte, etapa por etapa: <b>isso é coleta, aviso, lembrete, sincronização, relatório ou acompanhamento?</b></span></li><li><span>Comece pelos padrões mais simples: <b>coleta e aviso</b>.</span></li><li><span>Combine padrões aos poucos: coleta + aviso hoje, acompanhamento no mês que vem.</span></li><li><span>Procure na sua ferramenta <b>modelos prontos</b> do padrão, mas revise cada etapa antes de ligar.</span></li></ol>
          <p>⚠️ <b>Lembretes e acompanhamentos falam com clientes.</b> Controle a frequência: ninguém gosta de receber cinco mensagens de cobrança por semana. E sempre ofereça um jeito de a pessoa parar de receber.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos como um cozinheiro usa receitas-base para fazer pratos diferentes, e como isso vale para automações.</div>`
      ],
      ch:[
        { who:'Rose, 48 anos, dona de uma loja de cortinas em Londrina', says:'Mando orçamentos e muitos clientes somem. Às vezes eu lembro de chamar de novo, às vezes não.',
          q:'Qual padrão resolve esse problema?',
          opts:[
            {t:'Relatório semanal de vendas.', ok:false, why:'O relatório mostra números, mas não chama o cliente de volta.'},
            {t:'Acompanhamento: se o orçamento não tiver resposta em alguns dias, enviar um contato ou avisar a Rose para ligar.', ok:true, why:'É exatamente o padrão para "sem resposta depois de X dias". Nenhum orçamento fica esquecido.'},
            {t:'Coleta de inscrições.', ok:false, why:'Coleta organiza dados que chegam. O problema dela é o que acontece depois do envio.'}
          ]},
        { who:'Ivan, 35 anos, gerente de uma loja virtual de suplementos em Campinas', says:'Toda vez que entra um cliente novo na loja, copio o e-mail para a ferramenta de newsletter.',
          q:'Que padrão é esse?',
          opts:[
            {t:'Sincronização: cliente novo num lugar é criado automaticamente no outro.', ok:true, why:'Manter duas ferramentas com a mesma informação é o padrão de sincronização.'},
            {t:'Lembrete.', ok:false, why:'Não há data se aproximando. É uma informação que precisa ir de um sistema para outro.'},
            {t:'Relatório.', ok:false, why:'Relatório junta dados para um resumo. Aqui cada cliente precisa ser copiado.'}
          ]},
        { who:'Cecília, 42 anos, administradora de um condomínio em Santos', says:'Montei um lembrete de taxa atrasada que manda mensagem todo dia até o morador pagar.',
          q:'Qual é o risco desse fluxo?',
          opts:[
            {t:'Nenhum, quanto mais lembrete, mais rápido pagam.', ok:false, why:'Mensagem diária irrita, pode parecer cobrança abusiva e prejudica a relação com os moradores.'},
            {t:'Exagerar na frequência: o ideal é poucos lembretes espaçados e, depois disso, contato de uma pessoa.', ok:true, why:'Lembretes falam com pessoas. Frequência controlada e passagem para um humano mantêm o respeito e funcionam melhor.'},
            {t:'O risco é a ferramenta cobrar caro.', ok:false, why:'O custo existe, mas o problema principal é a experiência do morador.'}
          ]},
        { who:'Felipe, 31 anos, dono de uma agência de marketing em Recife', says:'Quero começar com um fluxo que coleta pedidos, avisa a equipe, sincroniza com o financeiro, manda relatório e faz acompanhamento, tudo junto.',
          q:'O que você recomenda?',
          opts:[
            {t:'Montar tudo de uma vez, já que os padrões são conhecidos.', ok:false, why:'Muitos padrões juntos num primeiro fluxo aumentam a chance de erro e dificultam achar a falha.'},
            {t:'Começar com coleta e aviso, testar e só depois acrescentar os outros padrões, um de cada vez.', ok:true, why:'Combinar padrões aos poucos mantém cada parte testada e fácil de corrigir.'},
            {t:'Desistir, porque é complicado demais.', ok:false, why:'Não é complicado se for feito em partes.'}
          ]}
      ]},
    { id:'1.5', title:'Projeto: o mapa da sua primeira automação', min:40,
      body:[`<div class="card"><p>Agora é com você. Escolha um processo <b>real</b> do seu trabalho ou da sua vida (atendimento, cobrança, agenda, estoque, inscrições) e prepare o terreno para automatizá-lo. Não abra nenhuma ferramenta ainda: o objetivo é pensar antes de montar.</p></div>`],
      projeto:{
        entrega:'Um mapa do seu processo com etapas, tempos e exceções, a conta do retorno e a frase "quando, se, então" da automação escolhida.',
        passos:[
          'Escolha um processo real e escreva onde ele começa e onde termina.',
          'Liste cada etapa com um verbo, quem faz, onde e quanto tempo leva.',
          'Marque as exceções e as decisões humanas.',
          'Calcule os minutos economizados por mês de pelo menos dois candidatos e escolha um.',
          'Escreva a frase do fluxo no formato "Quando [gatilho], se [condição], então [ação]" e liste dois casos estranhos que ele precisa tratar.',
          'Identifique o padrão (coleta, aviso, lembrete, sincronização, relatório ou acompanhamento) e peça a uma IA outros casos estranhos que você não previu, anotando quais vai tratar.'
        ],
        checklist:[
          'Meu mapa tem pelo menos 4 etapas descritas com verbos, com tempo de cada uma.',
          'Marquei pelo menos uma exceção e uma decisão humana (ou expliquei por que não há).',
          'Fiz a conta do retorno com números reais, e não com chute.',
          'A frase do fluxo tem um único gatilho, pelo menos uma condição e pelo menos uma ação.'
        ],
        minimo:400
      }}
  ]},
  { id:2, icon:'🔧', title:'Montando o primeiro fluxo', sub:'Ferramentas e prática', lessons:[
    { id:'2.1', title:'Escolhendo a ferramenta de automação', min:10,
      body:[
        `<div class="card analogy"><h3>🧰 Escolher um carro</h3><p>O melhor carro depende do uso: cidade ou estrada, orçamento, manutenção. Não existe a melhor ferramenta de automação para todo mundo. Existe <b>a que combina com o seu uso</b>.</p></div>`,
        `<div class="term"><b>Integração</b> = conexão entre dois serviços, como formulário e planilha. <b>Plano gratuito</b> = versão sem custo, com limites de uso. <b>Hospedagem própria</b> = você instala a ferramenta no seu próprio servidor, com mais controle e mais trabalho.</div>`,
        `<div class="card"><h3>5 critérios para escolher</h3><p>Existem várias plataformas, como n8n, Make e Zapier, entre outras. Planos, limites e preços mudam, então confira nos sites oficiais.</p>
          <ol class="golden"><li><span>Ela <b>conecta os serviços</b> que você já usa?</span></li><li><span>O <b>plano gratuito</b> cobre o seu volume?</span></li><li><span>É <b>fácil de aprender</b> para você?</span></li><li><span><b>Onde ficam</b> os seus dados?</span></li><li><span>Existe <b>comunidade e material em português</b>?</span></li></ol>
          <p>Teste um fluxo pequeno antes de decidir e evite assinar várias ao mesmo tempo.</p></div>`,
        `<div class="card"><h3>O que pesa mais em cada situação</h3>
          <div class="tw"><table class="tbl"><tr><th>Sua situação</th><th>Priorize</th></tr>
          <tr><td>Nunca automatizou nada</td><td>Facilidade de aprender, modelos prontos e material em português</td></tr>
          <tr><td>Volume alto (milhares de execuções por mês)</td><td>Como a ferramenta cobra (por execução, por etapa ou fixo) e os limites do plano</td></tr>
          <tr><td>Dados sensíveis de clientes</td><td>Onde os dados ficam, controle de acesso e possibilidade de hospedagem própria</td></tr>
          <tr><td>Usa sistemas pouco conhecidos</td><td>Se existe integração pronta ou um jeito genérico de conectar (por exemplo, webhook)</td></tr></table></div>
          <p><b>Webhook</b> é um endereço que recebe avisos de outro sistema: quando algo acontece lá, ele "chama" o seu fluxo. É o plano B quando não há integração pronta.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a escolha do carro depende de como você vai usá-lo, e como isso vale para ferramentas.</div>`
      ],
      ch:[
        { who:'Aline, 35 anos, nutricionista', says:'Vi 5 ferramentas de automação. Vou assinar os planos pagos de todas para comparar.',
          q:'Qual é o melhor conselho?',
          opts:[
            {t:'Assinar todas, assim ela compara com calma.', ok:false, why:'Pagar por várias gera gasto desnecessário. Dá para comparar o essencial com planos gratuitos.'},
            {t:'Esperar até existir a ferramenta perfeita.', ok:false, why:'Nenhuma é perfeita. Esperar só atrasa o aprendizado.'},
            {t:'Escolher uma ou duas com plano gratuito, montar um fluxo simples em cada e decidir com base nos limites e na experiência.', ok:true, why:'Testar na prática com plano gratuito mostra qual combina com você, sem gastar.'}
          ]},
        { who:'Eduardo, 42 anos, dono de uma escola de idiomas em São Paulo', says:'Achei uma ferramenta linda, mas ela não conecta com o sistema de matrículas que a escola usa.',
          q:'O que ele deve verificar antes de descartar ou adotar a ferramenta?',
          opts:[
            {t:'Se o sistema de matrículas ou a ferramenta oferecem outro jeito de conversar, como webhook, e testar com um fluxo pequeno.', ok:true, why:'Sem integração pronta, um webhook pode resolver. Testar confirma se funciona antes de decidir.'},
            {t:'Adotar mesmo assim e copiar as matrículas à mão para dentro dela.', ok:false, why:'Copiar à mão justamente o que deveria ser automático anula o ganho.'},
            {t:'Trocar o sistema de matrículas inteiro para caber na ferramenta.', ok:false, why:'Trocar o sistema principal da escola por causa de uma ferramenta auxiliar é inverter as prioridades.'}
          ]},
        { who:'Dra. Helena, 48 anos, dentista em Belém', says:'Vou automatizar lembretes de consulta com nome, telefone e procedimento dos pacientes. Escolhi a ferramenta só pelo preço.',
          q:'Qual critério ela deixou de lado?',
          opts:[
            {t:'Se a ferramenta tem muitas cores no painel.', ok:false, why:'Visual não é critério importante para essa decisão.'},
            {t:'Onde os dados ficam guardados e quem tem acesso a eles, já que são dados de saúde.', ok:true, why:'Dados de saúde são sensíveis pela LGPD. Saber onde ficam e quem acessa é tão importante quanto o preço.'},
            {t:'Quantas pessoas famosas usam a ferramenta.', ok:false, why:'Popularidade não garante que a ferramenta cuida bem dos seus dados.'}
          ]},
        { who:'Bruno, 26 anos, gerencia um e-commerce em Joinville', says:'O plano gratuito dá 1.000 execuções por mês. Minha loja recebe uns 2.500 pedidos por mês e cada pedido dispara o fluxo.',
          q:'O que ele precisa fazer antes de colocar o fluxo no ar?',
          opts:[
            {t:'Nada, o plano gratuito sempre dá um jeito.', ok:false, why:'Ao passar do limite, o fluxo para ou passa a cobrar. Ignorar isso é pedir para falhar no meio do mês.'},
            {t:'Calcular o volume real, comparar com os limites e o preço dos planos e escolher um que cubra o mês com folga.', ok:true, why:'Volume é critério de escolha. Fazer a conta antes evita parada surpresa e conta inesperada.'},
            {t:'Desligar o fluxo nos dias de muito pedido.', ok:false, why:'Desligar justo nos dias de maior volume tira o benefício da automação quando ele mais importa.'}
          ]}
      ]},
    { id:'2.2', title:'Seu primeiro fluxo: formulário, planilha e aviso', min:10,
      body:[
        `<div class="card analogy"><h3>📋 A linha de montagem simples</h3><p>A peça entra, passa por três estações e sai embalada. Seu primeiro fluxo tem três estações: <b>recebe a resposta, guarda na planilha e avisa você</b>.</p></div>`,
        `<div class="term"><b>Dados de entrada</b> = as informações que chegam, como as respostas de um formulário. <b>Mapeamento</b> = ligar cada campo de origem ao campo certo de destino. <b>Dados de teste</b> = informações fictícias usadas para testar sem afetar ninguém.</div>`,
        `<div class="card"><h3>Os 6 passos do primeiro fluxo</h3>
          <div class="pipe"><div class="node ink">Formulário</div><div class="ar">➜</div><div class="node ink">Planilha</div><div class="ar">➜</div><div class="node yel">Aviso</div></div>
          <ol class="golden"><li><span>Crie um formulário com 3 campos: <b>nome, e-mail e interesse</b>.</span></li><li><span><b>Gatilho</b>: nova resposta no formulário.</span></li><li><span><b>Ação 1</b>: adicionar uma linha na planilha.</span></li><li><span><b>Ação 2</b>: enviar um aviso para você, por e-mail ou mensagem.</span></li><li><span><b>Teste com dados fictícios</b> e confira a linha e o aviso.</span></li><li><span>Só então <b>divulgue</b> o formulário.</span></li></ol>
          <p>Dica: peça à IA o passo a passo da ferramenta que você escolheu e confira na documentação oficial, porque as telas mudam.</p>
          <p>⚠️ Atenção: ao coletar dados de pessoas, peça só o necessário e avise para que serão usados.</p></div>`,
        `<div class="card"><h3>Roteiro de teste antes de divulgar</h3>
          <div class="tw"><table class="tbl"><tr><th>Teste</th><th>O que enviar</th><th>O que deve acontecer</th></tr>
          <tr><td>Caso normal</td><td>"Ana Teste", ana@teste.com, "Curso de inglês"</td><td>Linha completa na planilha e aviso chegando</td></tr>
          <tr><td>Campo vazio</td><td>Sem o interesse</td><td>Linha com o campo vazio, sem travar o fluxo</td></tr>
          <tr><td>Texto longo e acentos</td><td>Nome com acento e interesse com 3 linhas</td><td>Acentos corretos e texto inteiro na planilha</td></tr>
          <tr><td>Resposta repetida</td><td>O mesmo envio duas vezes</td><td>Você decide: duas linhas ou aviso de duplicidade</td></tr></table></div>
          <p>Depois dos testes, <b>apague as linhas fictícias</b> da planilha para não misturar com dados reais.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos as três estações da linha de montagem e como elas viram um fluxo.</div>`
      ],
      ch:[
        { who:'Gustavo, 31 anos, organiza eventos', says:'Montei o fluxo e já divulguei o formulário para 500 pessoas. Não testei, mas deve funcionar.',
          q:'O que ele deveria ter feito?',
          opts:[
            {t:'Testar com dados fictícios antes de divulgar e conferir se a linha e o aviso chegam certos.', ok:true, why:'Testar antes protege 500 pessoas de um erro que você poderia ter achado em 2 minutos.'},
            {t:'Divulgar e consertar depois, quando alguém reclamar.', ok:false, why:'Corrigir depois, com gente já afetada, custa mais e arranha sua imagem.'},
            {t:'Pedir que cada pessoa teste e avise se der erro.', ok:false, why:'O teste é responsabilidade de quem monta o fluxo, e não de quem vai usar.'}
          ]},
        { who:'Fernanda, 34 anos, psicóloga em Belo Horizonte', says:'Testei e a linha apareceu na planilha, mas o e-mail da pessoa ficou na coluna "Nome" e o nome na coluna "E-mail".',
          q:'Onde está o problema?',
          opts:[
            {t:'No formulário, que precisa ser refeito do zero.', ok:false, why:'O formulário coletou certo. O erro está na ligação entre os campos.'},
            {t:'No mapeamento: os campos de origem foram ligados às colunas erradas. É só corrigir a ligação e testar de novo.', ok:true, why:'Mapeamento é ligar cada campo ao destino certo. Trocou a ligação, troca o resultado.'},
            {t:'Na planilha, que deve ser apagada.', ok:false, why:'A planilha só recebeu o que o fluxo mandou. O ajuste é no fluxo.'}
          ]},
        { who:'Otávio, 38 anos, corretor de imóveis em Natal', says:'Meu formulário pede nome, e-mail, CPF, RG, renda, profissão e estado civil, só para o cliente receber uma lista de imóveis.',
          q:'O que você recomenda?',
          opts:[
            {t:'Manter tudo, porque quanto mais dados, melhor.', ok:false, why:'Pedir dados demais afasta clientes e aumenta o risco e a responsabilidade com dados pessoais.'},
            {t:'Pedir só o necessário para enviar a lista (nome, contato, região e faixa de preço) e explicar para que os dados serão usados.', ok:true, why:'Coletar o mínimo necessário é boa prática e exigência da LGPD, e aumenta as respostas.'},
            {t:'Esconder no rodapé que os dados serão vendidos.', ok:false, why:'Isso é antiético e ilegal. O uso dos dados deve ser claro e legítimo.'}
          ]},
        { who:'Rafaela, 24 anos, assistente administrativa em Vitória', says:'Fiz os testes com dados fictícios e deu tudo certo. Vou divulgar agora.',
          q:'O que ela ainda deveria fazer antes de divulgar?',
          opts:[
            {t:'Apagar as linhas de teste da planilha e conferir se o aviso vai para o destino certo, não para o endereço de teste.', ok:true, why:'Limpar os testes evita misturar dados falsos com reais, e conferir o destino garante que os avisos cheguem a quem precisa.'},
            {t:'Fazer mais 50 testes iguais.', ok:false, why:'Repetir o mesmo teste não traz informação nova. O que importa é variar os casos.'},
            {t:'Nada, testes que deram certo uma vez nunca mais falham.', ok:false, why:'O fluxo pode falhar no futuro, mas o ponto aqui é deixar tudo limpo e apontado para o destino real antes de divulgar.'}
          ]}
      ]},
    { id:'2.3', title:'Dados entre etapas: campos, formatos e filtros', min:11,
      body:[
        `<div class="card analogy"><h3>📮 O envelope com CEP</h3><p>Uma carta com o CEP no lugar do número da casa não chega. Os Correios dependem de cada informação no <b>campo certo e no formato certo</b>. Entre as etapas de uma automação acontece o mesmo: um dado no lugar errado ou no formato errado faz o fluxo travar ou, pior, seguir com informação errada.</p></div>`,
        `<div class="term"><b>Campo</b> = uma informação com nome, como "telefone". <b>Formato</b> = o jeito como o dado está escrito, como 04/10/2026 ou 2026-10-04. <b>Filtro</b> = regra que deixa passar só o que interessa. <b>Duplicidade</b> = o mesmo registro aparecendo duas vezes.</div>`,
        `<div class="card"><h3>Mapeie campo por campo</h3><p>Antes de ligar as etapas, faça uma tabela de "de onde vem, para onde vai":</p>
          <div class="tw"><table class="tbl"><tr><th>Campo no formulário</th><th>Coluna na planilha</th><th>Cuidado</th></tr>
          <tr><td>Nome completo</td><td>Nome</td><td>Tirar espaços sobrando no começo e no fim</td></tr>
          <tr><td>WhatsApp</td><td>Telefone</td><td>Padronizar com DDD e só números</td></tr>
          <tr><td>Data desejada</td><td>Data</td><td>Usar sempre o mesmo formato</td></tr>
          <tr><td>Valor do orçamento</td><td>Valor</td><td>Vírgula ou ponto decimal, conforme a planilha</td></tr></table></div></div>`,
        `<div class="card"><h3>Os formatos que mais quebram fluxos</h3><ol class="golden"><li><span><b>Datas</b>: 04/10/2026 pode virar 10 de abril num sistema configurado em inglês. Confira o formato em cada etapa.</span></li><li><span><b>Dinheiro</b>: "R$ 1.234,56" é texto; muitas ferramentas esperam 1234.56. Sem converter, a soma dá errado.</span></li><li><span><b>Telefones</b>: "(11) 98888-7777", "11988887777" e "+55 11 98888-7777" são o mesmo número em três formatos.</span></li><li><span><b>Campos vazios</b>: decida o que fazer, seja pular, preencher com "não informado" ou avisar alguém.</span></li><li><span><b>Maiúsculas e espaços</b>: "Maria@Email.com " e "maria@email.com" parecem diferentes para o computador.</span></li></ol>
          <p>A maioria das ferramentas tem funções de <b>formatar texto, número e data</b>. Se não souber usar, descreva o problema para a IA e peça a explicação para a sua ferramenta, conferindo na documentação.</p></div>`,
        `<div class="card"><h3>Filtros e caminhos</h3>
          <div class="flows"><div class="flow old"><h4>Sem filtro</h4><div class="node">Todo pedido</div><div class="arrow">▼</div><div class="node">Avisa o gerente</div><div class="arrow">▼</div><div class="node">Gerente recebe 200 avisos por dia e passa a ignorar</div></div>
          <div class="flow new"><h4>Com filtro e caminhos</h4><div class="node">Todo pedido</div><div class="arrow">▼</div><div class="node">Se valor acima de R$ 2.000: avisa o gerente</div><div class="arrow">▼</div><div class="node">Senão: só registra na planilha</div></div></div>
          <p>Filtros evitam avisos inúteis. Caminhos (também chamados de ramificações ou roteadores) mandam cada caso para a ação certa.</p></div>`,
        `<div class="card"><h3>⚠️ Erros comuns</h3><ul><li><b>Confiar que "o sistema entende".</b> Não entende: ele segue o formato que recebe.</li><li><b>Não tratar duplicidade.</b> Clique duplo no botão de enviar vira cliente cadastrado duas vezes. Uma condição "se o e-mail já existe, atualizar em vez de criar" resolve.</li><li><b>Testar só com dados perfeitos.</b> Teste com acentos, espaços, campos vazios e valores grandes.</li></ul></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a carta não chega se o CEP estiver no lugar do número da casa.</div>`
      ],
      ch:[
        { who:'Vanessa, 37 anos, financeiro de uma ONG em São Luís', says:'Meu fluxo soma as doações da semana, mas o total está dando muito errado. Na planilha aparece "R$ 1.250,00" em cada linha.',
          q:'Qual é a causa mais provável?',
          opts:[
            {t:'Os valores estão como texto, com "R$" e vírgula, e a ferramenta não consegue somar. É preciso converter para número antes.', ok:true, why:'"R$ 1.250,00" é texto para muitas ferramentas. Convertido para 1250.00, a soma funciona.'},
            {t:'A ferramenta não sabe fazer contas.', ok:false, why:'Ela sabe somar números. O problema é que recebeu texto.'},
            {t:'As doações estão erradas no banco.', ok:false, why:'Os valores estão certos. O que está errado é o formato em que chegam.'}
          ]},
        { who:'Leandro, 30 anos, recepcionista de uma clínica veterinária em Ribeirão Preto', says:'Os lembretes de vacina estão saindo em datas trocadas: uma consulta de 03/11 recebeu lembrete em março.',
          q:'O que conferir primeiro?',
          opts:[
            {t:'Se o celular dos clientes está com a data errada.', ok:false, why:'O lembrete é calculado pelo fluxo, não pelo celular do cliente.'},
            {t:'O formato da data em cada etapa: alguma está lendo dia/mês como mês/dia.', ok:true, why:'03/11 lido no padrão americano vira 11 de março. Padronizar o formato resolve.'},
            {t:'Se a ferramenta está com defeito e precisa ser trocada.', ok:false, why:'Trocar de ferramenta não resolve: o formato continuaria errado na outra.'}
          ]},
        { who:'Cristina, 52 anos, gerente comercial em Uberlândia', says:'Recebo um aviso no celular a cada pedido, uns 150 por dia. Já nem olho mais.',
          q:'Qual ajuste resolve melhor?',
          opts:[
            {t:'Desligar todos os avisos.', ok:false, why:'Ela perderia também os pedidos importantes, que precisam de atenção.'},
            {t:'Colocar um filtro: avisar só pedidos acima de certo valor ou com problema, e mandar um resumo diário do resto.', ok:true, why:'Filtro reduz o barulho. Aviso que chega toda hora vira paisagem, e o importante se perde.'},
            {t:'Contratar alguém para ler os avisos por ela.', ok:false, why:'Isso transfere o problema em vez de resolver a causa, que é a falta de filtro.'}
          ]},
        { who:'Pedro, 28 anos, organiza corridas de rua em Brasília', says:'Muitos inscritos aparecem duas vezes na planilha porque clicam duas vezes em enviar.',
          q:'Como o fluxo deveria tratar isso?',
          opts:[
            {t:'Apagar a planilha toda semana e começar de novo.', ok:false, why:'Apagar tudo perde dados reais e não impede novas duplicidades.'},
            {t:'Antes de criar a linha, conferir se o e-mail ou o CPF já existe; se existir, atualizar em vez de criar outra.', ok:true, why:'Uma condição de duplicidade usa um campo único para reconhecer quem já está inscrito.'},
            {t:'Pedir aos inscritos que cliquem uma vez só.', ok:false, why:'Pedir ajuda ao usuário não garante nada. O fluxo precisa se proteger sozinho.'}
          ]}
      ]},
    { id:'2.4', title:'Webhooks: quando não há integração pronta', min:10,
      body:[
        `<div class="card analogy"><h3>📞 O número de telefone para avisos</h3><p>Você deixa seu telefone na farmácia: "quando o remédio chegar, me liga". Você não precisa ir lá todo dia perguntar. <b>Um webhook é esse número de telefone</b>: um endereço que você entrega a outro sistema para ele avisar o seu fluxo quando algo acontecer.</p></div>`,
        `<div class="term"><b>Webhook</b> = endereço na internet que recebe avisos automáticos de outro sistema. <b>Requisição</b> = cada aviso enviado para esse endereço, com os dados do evento. <b>Consultar periodicamente</b> = o contrário do webhook: seu fluxo pergunta de tempos em tempos se há novidade.</div>`,
        `<div class="card"><h3>Avisar ou perguntar?</h3>
          <div class="tw"><table class="tbl"><tr><th></th><th>Webhook (o sistema avisa)</th><th>Consulta periódica (o fluxo pergunta)</th></tr>
          <tr><td><b>Rapidez</b></td><td>Quase na hora</td><td>Depende do intervalo (a cada 15 min, por exemplo)</td></tr>
          <tr><td><b>Consumo</b></td><td>Só roda quando há evento</td><td>Roda mesmo sem novidade, gastando execuções</td></tr>
          <tr><td><b>Quando usar</b></td><td>Pagamentos, pedidos, formulários</td><td>Sistemas que não oferecem webhook</td></tr></table></div></div>`,
        `<div class="card"><h3>Montando com segurança, passo a passo</h3><ol class="golden"><li><span>Na sua ferramenta de automação, crie um gatilho do tipo <b>webhook</b>: ela gera um endereço.</span></li><li><span>No outro sistema, procure a área de <b>webhooks ou notificações</b> e cole o endereço.</span></li><li><span>Dispare um <b>evento de teste</b> e veja na ferramenta quais dados chegaram.</span></li><li><span>Mapeie os campos recebidos para as próximas etapas.</span></li><li><span>Proteja: trate o endereço como <b>segredo</b> (quem tiver pode enviar dados falsos) e, se o sistema oferecer, ative a <b>verificação de assinatura</b> ou um código secreto.</span></li></ol>
          <p>Se não souber onde fica cada opção, peça à IA o caminho na sua ferramenta e confira na documentação oficial.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que é melhor deixar o telefone na farmácia do que ir lá todo dia perguntar se o remédio chegou.</div>`
      ],
      ch:[
        { who:'Josiane, 37 anos, vende bolos por encomenda em Porto Alegre', says:'Meu sistema de pagamentos não aparece na lista de integrações da ferramenta. Então não dá para automatizar?',
          q:'Qual é o caminho mais provável?',
          opts:[
            {t:'Verificar se o sistema de pagamentos envia webhooks e usar um gatilho de webhook na ferramenta de automação.', ok:true, why:'Webhook é o plano B universal quando não há integração pronta. Muitos sistemas de pagamento oferecem.'},
            {t:'Desistir e copiar os pagamentos à mão.', ok:false, why:'Antes de desistir, vale verificar o webhook, que resolve a maioria desses casos.'},
            {t:'Trocar de sistema de pagamento só por isso.', ok:false, why:'Trocar o sistema principal é drástico. Primeiro se testa a conexão por webhook.'}
          ]},
        { who:'Anderson, 40 anos, dono de uma loja de peças em Joinville', says:'Meu fluxo consulta a loja virtual a cada minuto para ver se há pedido novo. A cota do mês acabou na primeira semana.',
          q:'Qual ajuste resolve?',
          opts:[
            {t:'Usar webhook, para o fluxo rodar só quando houver pedido de verdade.', ok:true, why:'A consulta a cada minuto gasta execuções mesmo sem pedidos. Com webhook, só há execução quando há evento.'},
            {t:'Consultar a cada 10 segundos para ser mais rápido.', ok:false, why:'Isso gastaria a cota ainda mais rápido.'},
            {t:'Comprar o plano mais caro e manter assim.', ok:false, why:'Resolve com dinheiro um problema que tem solução gratuita.'}
          ]},
        { who:'Priscila, 29 anos, analista de uma escola online em Belo Horizonte', says:'Colei o endereço do webhook no grupo da equipe, para todos terem.',
          q:'Qual é o risco?',
          opts:[
            {t:'Nenhum, é só um endereço.', ok:false, why:'Quem tem o endereço pode enviar dados falsos para o fluxo, como matrículas inexistentes.'},
            {t:'Qualquer pessoa com o endereço pode disparar o fluxo com dados falsos. Ele deve ser tratado como segredo e, se possível, protegido com verificação.', ok:true, why:'O endereço do webhook é uma porta de entrada. Divulgá-lo é como espalhar a chave.'},
            {t:'O endereço pode parar de funcionar se muita gente olhar.', ok:false, why:'Olhar não quebra nada. O risco é alguém usar o endereço para enviar dados.'}
          ]},
        { who:'Hugo, 33 anos, criando um fluxo para o estúdio de pilates em Curitiba', says:'Liguei o webhook, mas não sei quais campos chegam para mapear na planilha.',
          q:'O que fazer?',
          opts:[
            {t:'Disparar um evento de teste no sistema de origem e ver na ferramenta os dados que chegaram, campo por campo.', ok:true, why:'O evento de teste mostra a estrutura real dos dados, que é a base para mapear.'},
            {t:'Adivinhar os nomes dos campos.', ok:false, why:'Adivinhar gera mapeamentos errados e fluxos que falham com dados reais.'},
            {t:'Esperar o primeiro cliente real para ver.', ok:false, why:'Testar com cliente real arrisca afetar alguém. O evento de teste existe para isso.'}
          ]}
      ]},
    { id:'2.5', title:'Relatórios e resumos automáticos', min:10,
      body:[
        `<div class="card analogy"><h3>📰 O jornal na porta</h3><p>Antigamente o jornal chegava toda manhã na porta, com o resumo do que importava. Ninguém precisava sair para buscar notícia. <b>Um relatório automático é o seu jornal do negócio</b>: chega no dia e hora certos, com os números que você precisa para decidir.</p></div>`,
        `<div class="term"><b>Relatório automático</b> = resumo gerado e enviado sozinho, num agendamento. <b>Indicador</b> = número que mostra como algo está indo, como "pedidos da semana". <b>Período</b> = o intervalo de tempo que o relatório cobre.</div>`,
        `<div class="card"><h3>Montando o relatório em 5 passos</h3><ol class="golden"><li><span>Escolha <b>3 a 5 indicadores</b> que mudam suas decisões. Se um número não muda nada, tire.</span></li><li><span>Defina o <b>período</b> e o <b>agendamento</b>: vendas da semana, toda segunda às 8h.</span></li><li><span>No fluxo: gatilho de agendamento → buscar as linhas do período → <b>somar e contar</b> → montar a mensagem.</span></li><li><span>Escolha o <b>canal</b>: e-mail para quem lê com calma, mensagem curta para quem precisa só do número.</span></li><li><span><b>Compare</b> com o período anterior: "32 pedidos (semana passada: 25)" diz muito mais que "32 pedidos".</span></li></ol></div>`,
        `<div class="card"><h3>Bom relatório × relatório que ninguém lê</h3>
          <div class="tw"><table class="tbl"><tr><th>Ninguém lê</th><th>Ajuda a decidir</th></tr>
          <tr><td>Planilha inteira anexada</td><td>3 números no corpo da mensagem</td></tr>
          <tr><td>Números soltos</td><td>Números com comparação e um alerta: "cancelamentos subiram 40%"</td></tr>
          <tr><td>Enviado para todo mundo</td><td>Cada pessoa recebe o que é dela</td></tr>
          <tr><td>Todo dia, por hábito</td><td>Na frequência em que alguém age sobre ele</td></tr></table></div>
          <p>Se for usar IA para escrever o resumo em texto, faça as <b>contas no fluxo</b> e deixe a IA só redigir. IA pode errar somas.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um jornal resumido na porta de casa é mais útil do que ter que procurar cada notícia.</div>`
      ],
      ch:[
        { who:'Gilson, 51 anos, dono de duas lanchonetes em Uberaba', says:'Recebo todo dia um relatório com 40 números. Nunca leio.',
          q:'Como melhorar?',
          opts:[
            {t:'Reduzir para os 3 a 5 indicadores que mudam decisões, com comparação ao período anterior.', ok:true, why:'Menos números, com comparação, viram informação. Relatório que ninguém lê não serve para nada.'},
            {t:'Acrescentar mais números para ficar completo.', ok:false, why:'Ele já não lê com 40. Com mais, lê menos ainda.'},
            {t:'Desligar o relatório.', ok:false, why:'O relatório pode ser útil. O problema é o excesso de informação.'}
          ]},
        { who:'Lorena, 34 anos, coordenadora de vendas em Fortaleza', says:'O relatório diz "Vendas: R$ 48.000". Não sei se isso é bom ou ruim.',
          q:'O que falta?',
          opts:[
            {t:'Um número maior.', ok:false, why:'O valor em si não é o problema. Falta referência.'},
            {t:'Comparação com o período anterior ou com a meta, por exemplo "R$ 48.000 (mês passado: R$ 41.000; meta: R$ 50.000)".', ok:true, why:'Comparação transforma um número solto em sinal de direção: subiu, caiu, está perto da meta.'},
            {t:'Um gráfico colorido.', ok:false, why:'Gráfico ajuda na leitura, mas sem referência continua difícil interpretar.'}
          ]},
        { who:'Mauro, 39 anos, gerente de uma distribuidora em Campo Grande', says:'Pedi para a IA somar as vendas da semana e escrever o relatório. Às vezes o total vem diferente do sistema.',
          q:'Qual ajuste?',
          opts:[
            {t:'Fazer a soma numa etapa do fluxo e passar o resultado pronto para a IA só redigir o texto.', ok:true, why:'Contas ficam com o fluxo, que é exato. A IA cuida da redação, onde ela é boa.'},
            {t:'Pedir para a IA conferir a soma duas vezes.', ok:false, why:'Pode reduzir erros, mas não garante exatidão. Contas não são o forte da IA.'},
            {t:'Aceitar a diferença, porque é pequena.', ok:false, why:'Número errado em relatório leva a decisões erradas.'}
          ]},
        { who:'Beatriz, 28 anos, analista em Manaus', says:'O relatório de estoque vai para toda a empresa, 60 pessoas. A maioria reclama que é spam.',
          q:'O que fazer?',
          opts:[
            {t:'Enviar só para quem decide sobre o estoque e, se outras áreas precisarem, mandar a elas só o que lhes interessa.', ok:true, why:'Relatório certo para a pessoa certa é lido. Enviado para todos, vira ruído.'},
            {t:'Enviar duas vezes por dia para ninguém esquecer.', ok:false, why:'Mais envios aumentam a sensação de spam.'},
            {t:'Colocar "IMPORTANTE" no assunto.', ok:false, why:'Se o conteúdo não interessa à pessoa, o assunto não muda isso.'}
          ]}
      ]},
    { id:'2.6', title:'Projeto: seu primeiro fluxo funcionando', min:45,
      body:[`<div class="card"><p>Hora de montar de verdade. Use a ferramenta que você escolheu (no plano gratuito) e construa um fluxo simples a partir do mapa do projeto anterior, ou de um caso novo do seu dia a dia. Teste antes de usar com pessoas reais.</p></div>`],
      projeto:{
        entrega:'Um relato do seu primeiro fluxo montado: gatilho, etapas, mapeamento de campos, testes feitos e o que você ajustou.',
        passos:[
          'Escreva a frase "quando, se, então" do fluxo e escolha a ferramenta, justificando com pelo menos dois critérios.',
          'Monte a tabela de mapeamento: cada campo de origem, o destino e o cuidado com o formato.',
          'Monte o fluxo com pelo menos um gatilho, uma condição ou filtro e duas ações.',
          'Teste com dados fictícios: caso normal, campo vazio, acentos e resposta repetida.',
          'Anote o que deu errado, como corrigiu e apague os dados de teste.',
          'Rode o fluxo com pelo menos 3 envios reais de pessoas próximas e confira cada execução nos registros.'
        ],
        checklist:[
          'O fluxo tem gatilho, pelo menos uma condição ou filtro e pelo menos duas ações.',
          'Testei pelo menos quatro casos diferentes, incluindo um campo vazio.',
          'Registrei pelo menos um problema encontrado nos testes e como corrigi.',
          'Coletei só os dados necessários e apaguei os dados de teste.'
        ],
        minimo:450
      }}
  ]},
  { id:3, icon:'🛡️', title:'Confiabilidade', sub:'Erros, segurança e custos', lessons:[
    { id:'3.1', title:'Erros, testes e registros', min:10,
      body:[
        `<div class="card analogy"><h3>🚨 O sensor da linha de produção</h3><p>Quando uma peça sai errada, o sensor para a linha e avisa. Sem sensor, centenas de peças ruins passam antes de alguém notar. <b>Automação sem alerta é igual.</b></p></div>`,
        `<div class="term"><b>Erro</b> = quando um passo do fluxo falha. <b>Log (registro)</b> = histórico do que aconteceu em cada execução. <b>Alerta</b> = aviso automático quando algo falha.</div>`,
        `<div class="card"><h3>Todo fluxo falha um dia</h3><p>A internet cai, uma senha muda, um campo vem vazio. Prepare-se:</p>
          <ol class="golden"><li><span><b>Teste casos normais e estranhos</b> (vazio, texto enorme, repetido).</span></li><li><span>Olhe os <b>registros de execução</b> de vez em quando.</span></li><li><span>Ative um <b>alerta de erro</b> para você.</span></li><li><span>Tenha um <b>plano B manual</b>.</span></li></ol>
          <p>Uma automação que <b>falha em silêncio</b> é pior que nenhuma: ninguém percebe e o prejuízo cresce.</p></div>`,
        `<div class="card"><h3>Como ler um registro de execução</h3><p>Quase toda ferramenta mostra uma lista de execuções com data, status (sucesso ou erro) e o que entrou e saiu em cada etapa. Quando algo falha:</p>
          <ol class="golden"><li><span>Abra a execução com erro e veja <b>em qual etapa</b> parou.</span></li><li><span>Leia a <b>mensagem de erro</b> e os dados que chegaram naquela etapa.</span></li><li><span>Se não entender, copie a mensagem (sem senhas nem chaves) e peça à IA para explicar em linguagem simples.</span></li><li><span>Corrija, rode de novo com o mesmo dado e confirme o sucesso.</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma fábrica precisa de um sensor que avisa quando algo dá errado.</div>`
      ],
      ch:[
        { who:'Priscila, 38 anos, tem uma loja online', says:'Minha automação de pedidos parou há 3 dias e eu só soube quando um cliente reclamou.',
          q:'O que faltou?',
          opts:[
            {t:'Nada, isso é normal e não tem como evitar.', ok:false, why:'Falhas são normais, mas dá para detectá-las rápido com alertas.'},
            {t:'Um alerta de erro e o hábito de olhar os registros de execução.', ok:true, why:'O alerta avisaria no mesmo dia, e os registros mostrariam onde o fluxo parou.'},
            {t:'Mais automações para compensar a que parou.', ok:false, why:'Mais automações sem monitoramento só multiplicam o risco.'}
          ]},
        { who:'Márcio, 45 anos, dono de uma imobiliária em Londrina', says:'Abri o registro e a execução falhou na etapa "Enviar e-mail", com a mensagem "autenticação inválida". As outras etapas deram certo.',
          q:'Qual é a hipótese mais provável?',
          opts:[
            {t:'O formulário está com defeito.', ok:false, why:'As etapas anteriores funcionaram. O problema está na etapa de e-mail.'},
            {t:'A conexão com o serviço de e-mail perdeu a autorização, por exemplo porque a senha mudou. É preciso reconectar a conta.', ok:true, why:'"Autenticação inválida" indica que a ferramenta não conseguiu provar quem é ao serviço. Reconectar resolve.'},
            {t:'A internet do cliente caiu.', ok:false, why:'O envio é feito pela ferramenta, não pelo cliente.'}
          ]},
        { who:'Simone, 41 anos, coordenadora de uma escola em Teresina', says:'O fluxo de matrícula vai ficar fora do ar por uma tarde para ajustes. E agora?',
          q:'O que deveria existir para esse momento?',
          opts:[
            {t:'Um plano B manual combinado: as matrículas são anotadas numa planilha e entram no sistema quando o fluxo voltar.', ok:true, why:'O plano B mantém o atendimento funcionando enquanto a automação está parada.'},
            {t:'Fechar a secretaria até o fluxo voltar.', ok:false, why:'Parar o atendimento por causa da automação é inverter as prioridades.'},
            {t:'Recusar matrículas nesse período.', ok:false, why:'Perder alunos por falta de plano B é um prejuízo evitável.'}
          ]},
        { who:'Caio, 33 anos, analista de marketing em Porto Alegre', says:'Vou mandar o print do erro para a IA explicar. No print aparecem a mensagem de erro e a chave de API da conexão.',
          q:'Como ele deveria fazer?',
          opts:[
            {t:'Mandar o print inteiro, porque a IA precisa de todo o contexto.', ok:false, why:'A chave de API é uma senha. Mandá-la para qualquer lugar é risco de vazamento.'},
            {t:'Copiar só a mensagem de erro e a etapa onde parou, sem chaves, senhas ou dados de clientes.', ok:true, why:'A IA entende o erro pela mensagem e pelo contexto. Informações secretas não ajudam no diagnóstico e só aumentam o risco.'},
            {t:'Não pedir ajuda a ninguém, para evitar riscos.', ok:false, why:'Pedir ajuda é ótimo. O cuidado é só tirar as informações sensíveis antes.'}
          ]}
      ]},
    { id:'3.2', title:'Segurança e custos na automação', min:10,
      body:[
        `<div class="card analogy"><h3>🔐 A chave reserva da casa</h3><p>Ninguém deixa a chave reserva debaixo do tapete, nem manda foto dela no grupo da família. Quem tem a chave entra. <b>As chaves de uma automação funcionam igual.</b></p></div>`,
        `<div class="term"><b>Chave de API</b> = senha que permite a um programa usar um serviço. <b>Permissão mínima</b> = dar só o acesso de que a automação precisa. <b>Custo por execução</b> = valor cobrado cada vez que o fluxo roda.</div>`,
        `<div class="card"><h3>Cinco cuidados</h3>
          <ol class="golden"><li><span><b>Trate chaves como senhas</b>: nunca em prints, e-mails ou conversas.</span></li><li><span>Dê <b>permissão mínima</b>, de preferência com uma conta separada.</span></li><li><span><b>Desconfie de fluxos prontos</b> de fontes desconhecidas: revise cada passo antes de ligar, porque podem enviar seus dados para terceiros.</span></li><li><span><b>Confira os custos</b>: algumas ferramentas cobram por execução ou pelo uso de IA, então defina um limite e ative alertas de gasto.</span></li><li><span><b>Colete só os dados necessários</b> e proteja-os (LGPD).</span></li></ol>
          <p>Se uma chave vazar, <b>troque na hora</b>.</p></div>`,
        `<div class="card"><h3>O fluxo em loop: o susto mais comum</h3><p>Imagine: "quando uma linha for alterada na planilha, atualizar a mesma planilha". A atualização é uma alteração, que dispara o fluxo de novo, que altera de novo... Em minutos, milhares de execuções e a cota do mês acaba. Para evitar:</p><ul><li>Nunca faça a ação disparar o <b>próprio gatilho</b>.</li><li>Teste fluxos novos olhando o <b>contador de execuções</b>.</li><li>Configure um <b>limite de gasto</b> e alertas quando ele estiver perto.</li></ul></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que não se deixa a chave de casa debaixo do tapete, e como isso vale para senhas de programas.</div>`
      ],
      ch:[
        { who:'Fábio, 36 anos, freelancer', says:'Mandei no grupo um print do meu fluxo para pedir ajuda, e a chave de API ficou aparecendo.',
          q:'O que fazer agora?',
          opts:[
            {t:'Apagar o print do grupo e pronto.', ok:false, why:'Quem já viu ou salvou o print continua com a chave. Apagar a mensagem não basta.'},
            {t:'Não fazer nada, porque o grupo é de confiança.', ok:false, why:'Prints se espalham. Confiança no grupo não protege a chave.'},
            {t:'Apagar o print, gerar uma chave nova no serviço e desativar a antiga.', ok:true, why:'Trocar a chave é o que realmente fecha a porta, porque a antiga deixa de funcionar.'}
          ]},
        { who:'Luciana, 39 anos, gerente de uma rede de farmácias em Salvador', says:'Para o fluxo só ler os pedidos, conectei a conta de administrador, que pode apagar tudo no sistema.',
          q:'Qual é o problema?',
          opts:[
            {t:'Nenhum, conta de administrador funciona melhor.', ok:false, why:'Funcionar não é o ponto. Se a conexão vazar ou o fluxo errar, quem tiver acesso pode apagar tudo.'},
            {t:'Ela deu mais acesso do que o necessário. O certo é uma conta ou permissão só de leitura para esse fluxo.', ok:true, why:'Permissão mínima limita o estrago em caso de erro ou vazamento.'},
            {t:'O problema é usar automação numa farmácia.', ok:false, why:'Farmácias podem automatizar, desde que com cuidado de acesso e dados.'}
          ]},
        { who:'André, 27 anos, estudante em Campina Grande', says:'Achei num fórum um fluxo pronto que "faz tudo sozinho". Vou importar e ligar com minhas contas agora.',
          q:'O que ele deve fazer antes de ligar?',
          opts:[
            {t:'Revisar cada etapa, conferir para onde os dados são enviados e testar com uma conta de teste.', ok:true, why:'Fluxos prontos podem enviar seus dados para terceiros. Revisar e testar isolado evita surpresas.'},
            {t:'Ligar logo, porque se está no fórum é seguro.', ok:false, why:'Estar publicado não garante segurança. Qualquer pessoa pode postar um fluxo.'},
            {t:'Ligar e ver o que acontece.', ok:false, why:'Ligar com contas reais sem revisar é arriscar dados e dinheiro.'}
          ]},
        { who:'Mônica, 43 anos, dona de uma agência de turismo em Recife', says:'Fiz um fluxo que, quando uma linha muda na planilha, atualiza a coluna "Status" da mesma planilha. A ferramenta avisou que gastei toda a cota do mês em uma hora.',
          q:'O que aconteceu?',
          opts:[
            {t:'A ferramenta está cobrando errado.', ok:false, why:'A cobrança está certa: o fluxo realmente rodou milhares de vezes.'},
            {t:'O fluxo entrou em loop: a atualização da coluna é uma alteração, que dispara o fluxo de novo, sem parar.', ok:true, why:'Quando a ação dispara o próprio gatilho, o fluxo roda sem fim. É preciso mudar o gatilho ou acrescentar uma condição que impeça a repetição.'},
            {t:'Muitos clientes fizeram reservas ao mesmo tempo.', ok:false, why:'O volume de reservas não explica milhares de execuções em uma hora sobre a mesma planilha.'}
          ]}
      ]},
    { id:'3.3', title:'Documentar e manter seus fluxos', min:11,
      body:[
        `<div class="card analogy"><h3>📒 O caderninho de revisão do carro</h3><p>Todo carro bem cuidado tem um registro: quando trocou o óleo, que peça foi trocada, quem fez. Quando aparece um barulho, o mecânico olha o caderno e acha a causa mais rápido. <b>Seus fluxos precisam do mesmo caderninho</b>, porque daqui a seis meses nem você vai lembrar como montou.</p></div>`,
        `<div class="term"><b>Documentação</b> = o registro escrito do que o fluxo faz e como. <b>Responsável</b> = a pessoa que cuida do fluxo e é avisada quando ele falha. <b>Versão</b> = cada mudança importante, com data e motivo. <b>Revisão periódica</b> = a conferida de rotina para ver se tudo continua certo.</div>`,
        `<div class="card"><h3>A ficha de cada fluxo</h3><p>Para cada automação, mantenha uma ficha curta (pode ser uma página num documento compartilhado):</p>
          <ol class="golden"><li><span><b>Nome claro</b> e objetivo em uma frase.</span></li><li><span><b>Gatilho, condições e ações</b>, na frase "quando, se, então".</span></li><li><span><b>Serviços conectados</b> e qual conta é usada em cada um (sem colocar senhas na ficha).</span></li><li><span><b>Responsável</b> e quem substitui nas férias.</span></li><li><span><b>O que fazer se falhar</b>: plano B manual e como reprocessar.</span></li><li><span><b>Histórico de mudanças</b>: data, o que mudou e por quê.</span></li></ol></div>`,
        `<div class="card"><h3>Nomes que se explicam</h3>
          <div class="tw"><table class="tbl"><tr><th>Nome ruim</th><th>Nome bom</th></tr>
          <tr><td>Fluxo 1</td><td>Formulário de orçamento → planilha + aviso ao vendedor</td></tr>
          <tr><td>Teste novo final 2</td><td>Lembrete de consulta 24 h antes (WhatsApp)</td></tr>
          <tr><td>Automação Maria</td><td>Cobrança: aviso 3 dias antes do vencimento</td></tr></table></div>
          <p>Com 10 fluxos, nomes ruins viram um labirinto. Com nomes bons, qualquer pessoa da equipe entende o que cada um faz.</p></div>`,
        `<div class="card"><h3>Rotina mensal de 15 minutos</h3><ul><li>Olhe os <b>registros</b> do mês: houve erros? Repetiram?</li><li>Confira se as <b>conexões</b> estão ativas e se alguma senha vai expirar.</li><li>Veja o <b>consumo</b> comparado ao limite do plano.</li><li>Pergunte a quem usa: <b>o fluxo ainda faz sentido?</b> O processo mudou?</li><li>Atualize a <b>ficha</b> se algo mudou.</li></ul></div>`,
        `<div class="card"><h3>Quando desligar um fluxo</h3><p>Automação também envelhece. Desligue (e registre na ficha) quando o processo mudou e o fluxo não acompanha, quando ninguém usa mais o resultado ou quando ele gera mais correção manual do que economia. Antes de apagar, <b>exporte ou guarde uma cópia</b>: pode servir de base para o próximo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o mecânico gosta quando o carro tem o caderninho de revisão em dia.</div>`
      ],
      ch:[
        { who:'Gilberto, 58 anos, dono de uma loja de materiais de construção em Maringá', says:'O sobrinho montou 8 fluxos para a loja e foi fazer intercâmbio. Um deles parou e ninguém sabe o que ele fazia.',
          q:'O que teria evitado essa situação?',
          opts:[
            {t:'Uma ficha de cada fluxo, com objetivo, contas conectadas, responsável substituto e o que fazer se falhar.', ok:true, why:'Com a documentação, outra pessoa consegue entender e consertar sem depender de quem montou.'},
            {t:'Proibir o sobrinho de viajar.', ok:false, why:'O problema não é a viagem, é o conhecimento estar só na cabeça de uma pessoa.'},
            {t:'Não usar automações.', ok:false, why:'As automações trazem ganho. O que faltou foi registrar como funcionam.'}
          ]},
        { who:'Tatiane, 32 anos, coordenadora de eventos em Belo Horizonte', says:'Tenho fluxos chamados "Teste", "Teste 2", "Novo" e "Final final". Preciso alterar o lembrete de inscrição e não sei qual é.',
          q:'Qual é a melhor prática daqui para frente?',
          opts:[
            {t:'Abrir um por um sempre que precisar.', ok:false, why:'Funciona, mas desperdiça tempo toda vez e aumenta a chance de mexer no fluxo errado.'},
            {t:'Renomear cada fluxo dizendo o que faz, por exemplo "Inscrição → planilha + lembrete 2 dias antes", e apagar os testes que não são usados.', ok:true, why:'Nomes que explicam a função tornam a manutenção rápida e segura.'},
            {t:'Criar um fluxo novo e deixar os antigos ligados.', ok:false, why:'Fluxos antigos ligados podem duplicar mensagens e confundir ainda mais.'}
          ]},
        { who:'Rodrigo, 40 anos, gerente de um restaurante em Florianópolis', says:'O fluxo de reservas manda mensagem para o antigo telefone do restaurante. Mudamos de número há dois meses e ninguém atualizou.',
          q:'Que hábito teria pegado isso antes?',
          opts:[
            {t:'Uma revisão mensal conferindo se o fluxo ainda reflete o processo atual, incluindo contatos e contas.', ok:true, why:'A rotina mensal existe para pegar mudanças do negócio que o fluxo não acompanhou.'},
            {t:'Trocar de ferramenta a cada seis meses.', ok:false, why:'Trocar de ferramenta não atualiza o número. O problema é falta de revisão.'},
            {t:'Esperar os clientes reclamarem.', ok:false, why:'Esperar reclamação significa perder reservas antes de perceber.'}
          ]},
        { who:'Elaine, 47 anos, contadora em Juiz de Fora', says:'Tenho um fluxo que gera um relatório que ninguém abre há meses, e todo mês preciso corrigir algum erro nele.',
          q:'O que fazer?',
          opts:[
            {t:'Continuar corrigindo, porque um dia alguém pode precisar.', ok:false, why:'Manter algo que ninguém usa custa tempo e dinheiro sem retorno.'},
            {t:'Confirmar com a equipe que ninguém usa, guardar uma cópia do fluxo, desligá-lo e registrar isso na ficha.', ok:true, why:'Fluxo que dá mais trabalho do que economiza deve ser desligado, com cópia guardada caso precise voltar.'},
            {t:'Apagar sem avisar ninguém.', ok:false, why:'Apagar sem confirmar e sem cópia pode surpreender alguém que dependia dele.'}
          ]}
      ]},
    { id:'3.4', title:'Reprocessar sem duplicar', min:10,
      body:[
        `<div class="card analogy"><h3>📦 A entrega que voltou</h3><p>O entregador não achou o endereço e a encomenda voltou. Na nova tentativa, a loja precisa mandar <b>a mesma encomenda</b>, e não uma segunda. Quando um fluxo falha no meio, acontece algo parecido: ao rodar de novo, você quer completar o que faltou <b>sem repetir o que já foi feito</b>.</p></div>`,
        `<div class="term"><b>Reprocessar</b> = rodar de novo uma execução que falhou. <b>Execução parcial</b> = quando algumas etapas deram certo e outras não. <b>Identificador único</b> = um código que diferencia cada registro, como número do pedido. <b>Fila de pendências</b> = lista dos itens que falharam e esperam nova tentativa.</div>`,
        `<div class="card"><h3>O problema da execução parcial</h3>
          <div class="flows"><div class="flow old"><h4>Reprocessar sem cuidado</h4><div class="node">Etapa 1: cobrança criada ✅</div><div class="arrow">▼</div><div class="node">Etapa 2: e-mail falhou ❌</div><div class="arrow">▼</div><div class="node">Roda tudo de novo: cliente recebe duas cobranças</div></div>
          <div class="flow new"><h4>Reprocessar com cuidado</h4><div class="node">Antes de criar, confere pelo número do pedido se já existe</div><div class="arrow">▼</div><div class="node">Já existe: pula a etapa 1</div><div class="arrow">▼</div><div class="node">Refaz só o e-mail</div></div></div></div>`,
        `<div class="card"><h3>Quatro cuidados para reprocessar com segurança</h3><ol class="golden"><li><span>Use um <b>identificador único</b> em cada registro (número do pedido, e-mail, código da inscrição).</span></li><li><span>Antes de <b>criar</b> algo, confira se já existe com aquele identificador; se existir, <b>atualize</b>.</span></li><li><span>Marque o <b>status</b> de cada item (recebido, processado, avisado) para saber onde parou.</span></li><li><span>Mantenha uma <b>fila de pendências</b> (pode ser uma aba da planilha) com os itens que falharam e reprocesse a partir dela.</span></li></ol>
          <p>Muitas ferramentas permitem reexecutar uma execução com erro. Antes de apertar o botão, olhe <b>quais etapas já tinham dado certo</b>.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a loja manda a mesma encomenda de novo, e não uma segunda, quando a entrega volta.</div>`
      ],
      ch:[
        { who:'Tânia, 44 anos, financeiro de uma escola de inglês em Goiânia', says:'O fluxo criou a cobrança, mas falhou ao enviar o e-mail. Apertei "reexecutar" e o aluno recebeu duas cobranças.',
          q:'O que teria evitado isso?',
          opts:[
            {t:'Conferir, antes de criar a cobrança, se já existe uma para aquele aluno e mês, e só refazer as etapas que falharam.', ok:true, why:'Com a checagem pelo identificador, a etapa já feita é pulada e só o e-mail é refeito.'},
            {t:'Nunca reexecutar fluxos.', ok:false, why:'Reexecutar é útil. O cuidado é não repetir o que já deu certo.'},
            {t:'Pedir ao aluno que pague só uma das cobranças.', ok:false, why:'Isso joga o problema no aluno e prejudica a confiança.'}
          ]},
        { who:'Vítor, 30 anos, operações de um e-commerce em São Paulo', says:'Ontem a ferramenta ficou fora do ar por duas horas e uns 40 pedidos não foram processados. Não sei quais.',
          q:'Que prática teria ajudado?',
          opts:[
            {t:'Marcar o status de cada pedido e manter uma fila de pendências com os que falharam.', ok:true, why:'Com status e fila, ele saberia exatamente quais pedidos reprocessar.'},
            {t:'Processar de novo todos os pedidos do dia.', ok:false, why:'Repetir todos geraria duplicidade nos pedidos que já tinham dado certo.'},
            {t:'Esperar os clientes reclamarem.', ok:false, why:'Esperar reclamação é descobrir o problema tarde e com clientes já prejudicados.'}
          ]},
        { who:'Rebeca, 26 anos, organiza um congresso em Belém', says:'Os inscritos não têm nenhum código, só nome. Dois "João Silva" se inscreveram e o fluxo achou que era a mesma pessoa.',
          q:'Qual é o ajuste?',
          opts:[
            {t:'Usar um identificador único, como e-mail ou CPF, ou gerar um código de inscrição para cada pessoa.', ok:true, why:'Nome se repete. Identificador único separa pessoas diferentes e reconhece a mesma pessoa.'},
            {t:'Pedir que pessoas com nomes iguais usem apelidos.', ok:false, why:'Isso depende das pessoas e não resolve o problema no fluxo.'},
            {t:'Aceitar só uma pessoa com cada nome.', ok:false, why:'Recusar inscrições por causa do nome é absurdo e perde participantes.'}
          ]},
        { who:'Osvaldo, 57 anos, dono de uma papelaria em Juiz de Fora', says:'Uma execução falhou na última etapa. Vou apertar "reexecutar" agora mesmo.',
          q:'O que conferir antes?',
          opts:[
            {t:'Quais etapas já tinham dado certo e se repeti-las causa duplicidade, como mensagem ou cobrança em dobro.', ok:true, why:'Reexecutar repete etapas. Saber o que já foi feito evita que o cliente receba algo duas vezes.'},
            {t:'Nada, reexecutar sempre é seguro.', ok:false, why:'Só é seguro se o fluxo estiver preparado para não duplicar.'},
            {t:'Se o computador está ligado na tomada.', ok:false, why:'A execução roda na ferramenta, não depende do computador dele.'}
          ]}
      ]},
    { id:'3.5', title:'Projeto: plano de confiabilidade do seu fluxo', min:40,
      body:[`<div class="card"><p>Pegue o fluxo que você montou no módulo anterior (ou outro que você use) e deixe-o pronto para funcionar sem sustos: com alerta, plano B, segurança e documentação.</p></div>`],
      projeto:{
        entrega:'A ficha completa do seu fluxo com alerta de erro, plano B manual, revisão de segurança e custos, e rotina de manutenção.',
        passos:[
          'Dê ao fluxo um nome que explique o que ele faz e escreva o objetivo em uma frase.',
          'Ative um alerta de erro e descreva para quem ele vai e o que a pessoa faz ao recebê-lo.',
          'Escreva o plano B manual para quando o fluxo estiver parado.',
          'Revise a segurança: contas usadas, permissões, onde estão as chaves e quais dados pessoais passam pelo fluxo.',
          'Estime o consumo mensal e compare com o limite do plano; defina sua rotina mensal de revisão.',
          'Simule uma falha (desconecte uma conta ou envie um dado inválido), confira se o alerta chega e reprocesse sem duplicar.'
        ],
        checklist:[
          'O fluxo tem nome claro, responsável e substituto definidos.',
          'Existe um alerta de erro ativo e um plano B manual escrito.',
          'Conferi que nenhuma chave aparece em prints, documentos ou conversas e que as permissões são as mínimas.',
          'Comparei o consumo estimado com o limite do plano e verifiquei que o fluxo não dispara o próprio gatilho.'
        ],
        minimo:400
      }}
  ]},
  { id:4, icon:'🤖', title:'IA dentro dos fluxos', sub:'Classificar, extrair e revisar com segurança', lessons:[
    { id:'4.1', title:'A IA como etapa do fluxo', min:11,
      body:[
        `<div class="card analogy"><h3>📬 O estagiário que separa as cartas</h3><p>Num escritório chegam cartas de todo tipo: reclamações, pedidos, convites. Um estagiário atento lê cada uma e coloca na pilha certa. Ele não decide o que fazer com a reclamação, só separa. <b>Uma etapa de IA dentro do fluxo pode fazer esse papel</b>: ler textos livres e organizá-los para as próximas etapas.</p></div>`,
        `<div class="term"><b>Etapa de IA</b> = um passo do fluxo que envia um texto para um modelo de IA e recebe uma resposta. <b>Classificar</b> = escolher uma categoria entre opções definidas. <b>Resumir</b> = reduzir um texto longo ao essencial. <b>Instrução do fluxo</b> = o pedido fixo que você escreve para a IA, usado em toda execução.</div>`,
        `<div class="card"><h3>Regra fixa ou IA?</h3>
          <div class="tw"><table class="tbl"><tr><th>Tarefa</th><th>Regra fixa resolve?</th><th>IA ajuda?</th></tr>
          <tr><td>Separar pedidos acima de R$ 500</td><td>✅ Sim, é uma comparação de número</td><td>Desnecessária</td></tr>
          <tr><td>Saber se um e-mail é reclamação, dúvida ou elogio</td><td>Mal: palavras-chave erram muito</td><td>✅ Sim, entende o sentido</td></tr>
          <tr><td>Resumir uma conversa longa de atendimento</td><td>❌ Não</td><td>✅ Sim</td></tr>
          <tr><td>Calcular imposto</td><td>✅ Sim, com a fórmula certa</td><td>❌ Arriscado: pode errar contas</td></tr></table></div>
          <p>Regra de bolso: se dá para resolver com uma condição simples, <b>use a condição</b>. Ela é grátis, previsível e não erra. Use IA quando a tarefa exige <b>entender linguagem</b>.</p></div>`,
        `<div class="card"><h3>Anatomia de uma boa instrução de fluxo</h3><p>Diferente de uma conversa, a instrução do fluxo roda sozinha centenas de vezes. Ela precisa deixar pouco espaço para improviso:</p>
          <ol class="golden"><li><span><b>Papel e contexto</b>: que tipo de negócio é e quem escreve as mensagens.</span></li><li><span><b>Tarefa única</b>: classificar, ou resumir, ou extrair. Uma por etapa.</span></li><li><span><b>Opções fechadas</b>: a lista exata de categorias permitidas.</span></li><li><span><b>Formato da resposta</b>: só o nome da categoria, sem explicação, para a próxima etapa conseguir usar.</span></li><li><span><b>O que fazer na dúvida</b>: uma categoria de escape, como "outros", que manda para uma pessoa.</span></li></ol></div>`,
        `<div class="card"><h3>Um exemplo de fluxo</h3>
          <div class="pipe"><div class="node ink">E-mail chega</div><div class="ar">➜</div><div class="node yel">IA classifica</div><div class="ar">➜</div><div class="node ink">Caminho por categoria</div><div class="ar">➜</div><div class="node ink">Registro na planilha</div></div>
          <p>Reclamações vão para o gerente com prioridade, dúvidas recebem uma resposta padrão revisada, "outros" vão para a caixa da recepção. A IA só separa; o que acontece depois é regra sua.</p></div>`,
        `<div class="card"><h3>⚠️ Erros comuns</h3><ul><li><b>Pedir várias coisas numa etapa</b> ("classifique, resuma e responda"): a saída fica bagunçada e difícil de usar.</li><li><b>Categorias abertas</b>: sem lista fechada, a IA inventa nomes novos e o caminho seguinte quebra.</li><li><b>Esquecer o custo</b>: cada execução com IA costuma ser cobrada. Estime o volume e ative limites.</li></ul></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que faz o estagiário que separa as cartas e por que ele não decide sozinho o que responder.</div>`
      ],
      ch:[
        { who:'Jéssica, 30 anos, atendimento de uma loja de cosméticos em Curitiba', says:'Quero usar IA para separar pedidos com valor acima de R$ 300 dos outros.',
          q:'O que você recomenda?',
          opts:[
            {t:'Usar uma condição simples de valor, sem IA.', ok:true, why:'Comparar números é tarefa de regra fixa: grátis, previsível e sem erro. IA aqui só adiciona custo e risco.'},
            {t:'Usar IA, porque é mais moderno.', ok:false, why:'Ser moderno não é critério. A IA pode errar algo que uma condição acerta sempre.'},
            {t:'Fazer à mão, porque automação não serve para isso.', ok:false, why:'Serve, e muito bem, com uma condição simples.'}
          ]},
        { who:'Wellington, 44 anos, dono de uma empresa de internet em Caruaru', says:'Recebo 300 mensagens por dia no suporte. Quero que um fluxo separe as que são "sem conexão", "cobrança" e "mudança de plano".',
          q:'Por que aqui uma etapa de IA faz sentido?',
          opts:[
            {t:'Porque a IA resolve os problemas técnicos dos clientes sozinha.', ok:false, why:'Classificar não é resolver. A IA só organiza para a equipe certa atender.'},
            {t:'Porque os clientes escrevem de mil jeitos diferentes, e entender o sentido do texto é algo que regras de palavras-chave fazem mal.', ok:true, why:'"Tá caindo direto", "sem sinal", "net não funciona" são o mesmo problema. A IA entende linguagem livre; uma regra fixa não.'},
            {t:'Porque a IA é gratuita para qualquer volume.', ok:false, why:'Uso de IA costuma ter custo por execução. É preciso estimar o volume.'}
          ]},
        { who:'Aurora, 36 anos, analista de uma cooperativa em Chapecó', says:'Minha instrução pede para a IA classificar a mensagem, mas às vezes ela responde "Parece ser uma reclamação, mas também pode ser uma dúvida". O próximo passo quebra.',
          q:'Qual ajuste resolve?',
          opts:[
            {t:'Definir na instrução as categorias exatas, pedir para responder só com o nome de uma delas e incluir "outros" para os casos de dúvida.', ok:true, why:'Opções fechadas, formato fixo e uma categoria de escape tornam a saída previsível para a próxima etapa.'},
            {t:'Trocar de IA até achar uma que responda certo.', ok:false, why:'O problema é a instrução aberta. Outra IA com a mesma instrução tende a fazer o mesmo.'},
            {t:'Tirar a IA e ler tudo à mão.', ok:false, why:'Um ajuste na instrução resolve sem perder a automação.'}
          ]},
        { who:'Heitor, 29 anos, analista de dados em São José dos Campos', says:'Coloquei uma etapa de IA para calcular o valor do frete a partir do CEP e do peso. Às vezes vem um valor estranho.',
          q:'O que está errado na escolha?',
          opts:[
            {t:'Nada, é só aceitar alguns erros.', ok:false, why:'Frete errado é prejuízo ou cliente cobrado a mais. Não dá para aceitar.'},
            {t:'Cálculo com fórmula ou tabela definida é tarefa de regra fixa ou de uma integração com a transportadora, não de IA, que pode errar contas.', ok:true, why:'IA brilha com linguagem, não com cálculos exatos. Para contas, use fórmula, tabela ou a integração oficial.'},
            {t:'Ele deveria pedir para a IA "pensar com mais calma".', ok:false, why:'Pode até melhorar um pouco, mas não garante precisão. A ferramenta certa é a regra fixa.'}
          ]}
      ]},
    { id:'4.2', title:'Extrair dados de textos com IA', min:11,
      body:[
        `<div class="card analogy"><h3>🧾 A secretária que preenche a ficha</h3><p>Um cliente manda uma mensagem longa: "Oi, aqui é a Carla, quero agendar limpeza de pele pro dia 15, de manhã, meu número é esse mesmo". A secretária lê e preenche a ficha: nome, serviço, data, período. <b>Extrair dados é transformar texto livre em campos organizados</b>, e a IA faz isso bem, desde que alguém confira.</p></div>`,
        `<div class="term"><b>Extração</b> = tirar de um texto as informações que interessam, campo por campo. <b>Resposta estruturada</b> = a saída sempre no mesmo formato, com os mesmos campos. <b>Validação</b> = conferir se cada campo extraído faz sentido antes de usar.</div>`,
        `<div class="card"><h3>Do texto aos campos</h3>
          <div class="tw"><table class="tbl"><tr><th>Mensagem recebida</th><th>Nome</th><th>Serviço</th><th>Data</th><th>Período</th></tr>
          <tr><td>"Aqui é a Carla, quero limpeza de pele dia 15 de manhã"</td><td>Carla</td><td>Limpeza de pele</td><td>15</td><td>Manhã</td></tr>
          <tr><td>"Boa tarde! Tem horário pra sobrancelha sábado?"</td><td>(vazio)</td><td>Sobrancelha</td><td>Sábado</td><td>(vazio)</td></tr></table></div>
          <p>Repare na segunda linha: a mensagem não diz o nome nem o período. O certo é a IA <b>deixar vazio</b>, e não inventar.</p></div>`,
        `<div class="card"><h3>Passo a passo de uma extração confiável</h3><ol class="golden"><li><span><b>Liste os campos</b> que você precisa e o formato de cada um (data como dia/mês/ano, telefone só números).</span></li><li><span>Na instrução, peça a resposta <b>sempre com os mesmos campos</b>, na mesma ordem. Muitas ferramentas têm opção de saída estruturada; use se existir.</span></li><li><span>Diga com todas as letras: <b>se a informação não estiver no texto, deixe o campo vazio</b>.</span></li><li><span>Depois da IA, coloque <b>etapas de validação</b>: a data é uma data válida? O e-mail tem @? O valor é número?</span></li><li><span>Se algo falhar na validação, mande para <b>uma pessoa revisar</b> em vez de seguir.</span></li></ol></div>`,
        `<div class="card"><h3>⚠️ O risco da invenção</h3><p>Modelos de IA às vezes <b>preenchem lacunas com algo plausível</b>: um sobrenome, um horário, um valor. Isso se chama alucinação. Num fluxo automático é perigoso, porque ninguém está olhando. Por isso a combinação é sempre: instrução que proíbe inventar, validação automática e revisão humana para o que não passar.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos como a secretária transforma uma mensagem bagunçada numa ficha arrumada, e por que ela não deve inventar o que o cliente não disse.</div>`
      ],
      ch:[
        { who:'Kátia, 38 anos, dona de um salão de beleza em Aracaju', says:'A IA extraiu "Kátia Souza" como nome de uma cliente que só assinou "Kátia". O sobrenome foi inventado.',
          q:'Como evitar isso?',
          opts:[
            {t:'Deixar como está, sobrenome inventado não faz mal.', ok:false, why:'Dado inventado vira cadastro errado, mensagem errada e, às vezes, cliente confundido com outra pessoa.'},
            {t:'Instruir a IA a extrair só o que está escrito e deixar vazio o que não aparece, e validar antes de gravar.', ok:true, why:'Proibir a invenção na instrução e validar depois reduz muito as alucinações que passam.'},
            {t:'Pedir para a IA adivinhar melhor.', ok:false, why:'Adivinhar é justamente o problema. O certo é não adivinhar.'}
          ]},
        { who:'Mateus, 34 anos, compras de um supermercado em Uberaba', says:'Os fornecedores mandam pedidos por e-mail cada um de um jeito. Quero que a IA tire produto, quantidade e prazo e jogue na planilha.',
          q:'Qual etapa é essencial depois da IA?',
          opts:[
            {t:'Nenhuma, a IA já entrega pronto.', ok:false, why:'A IA pode errar ou deixar campos vazios. Sem conferência, o erro vai direto para a planilha de compras.'},
            {t:'Uma validação: quantidade é número, prazo é data válida, e o que falhar vai para uma pessoa revisar.', ok:true, why:'A validação pega erros automáticos e a revisão humana resolve os casos duvidosos.'},
            {t:'Mandar o e-mail de volta para o fornecedor sempre.', ok:false, why:'Devolver tudo cria trabalho para os dois lados. Só os casos com problema precisam de revisão.'}
          ]},
        { who:'Priscila, 25 anos, estagiária de marketing em Belém', says:'Cada vez a IA devolve os dados de um jeito: uma hora "Nome: Ana", outra hora "a cliente se chama Ana". A planilha fica uma bagunça.',
          q:'O que falta na instrução?',
          opts:[
            {t:'Pedir uma resposta estruturada: sempre os mesmos campos, na mesma ordem e no mesmo formato, usando a opção de saída estruturada da ferramenta se houver.', ok:true, why:'Formato fixo permite que a próxima etapa leia cada campo sem confusão.'},
            {t:'Usar letras maiúsculas na instrução.', ok:false, why:'Escrever em maiúsculas não define formato. O que resolve é especificar os campos.'},
            {t:'Corrigir a planilha à mão toda semana.', ok:false, why:'Isso desfaz o ganho da automação. A causa é a falta de formato fixo.'}
          ]},
        { who:'Sérgio, 50 anos, advogado em Cuiabá', says:'Quero que a IA leia contratos e extraia os prazos de vencimento, e que o fluxo marque na agenda sem ninguém conferir.',
          q:'Qual é o ajuste mais responsável?',
          opts:[
            {t:'Está ótimo assim, contrato é texto claro.', ok:false, why:'Contratos têm prazos condicionais e exceções. Um prazo errado na agenda pode causar perda de prazo legal.'},
            {t:'Deixar a IA extrair e marcar como rascunho, com uma pessoa confirmando cada prazo antes de virar compromisso.', ok:true, why:'Em tarefas de alto impacto, a IA acelera e a pessoa confere. O erro custaria caro demais.'},
            {t:'Não usar IA em escritório de advocacia.', ok:false, why:'A IA pode ajudar bastante, desde que com revisão humana nas decisões importantes.'}
          ]}
      ]},
    { id:'4.3', title:'Humano no circuito: revisão, limites e LGPD', min:11,
      body:[
        `<div class="card analogy"><h3>✈️ O piloto automático</h3><p>Aviões voam boa parte do tempo no piloto automático, mas o piloto continua na cabine, monitorando, e assume nas decolagens, pousos e emergências. <b>Automação com IA funciona melhor do mesmo jeito</b>: ela faz o volume, e uma pessoa fica atenta e decide nos momentos críticos.</p></div>`,
        `<div class="term"><b>Humano no circuito</b> = uma etapa em que uma pessoa aprova, corrige ou rejeita antes de o fluxo seguir. <b>Rascunho</b> = resultado da IA que ainda não foi enviado. <b>Dado sensível</b> = informação de saúde, religião, origem racial, biometria e outras que a LGPD protege com mais rigor.</div>`,
        `<div class="card"><h3>O semáforo do risco</h3>
          <div class="tw"><table class="tbl"><tr><th>Sinal</th><th>Quando</th><th>Exemplos</th><th>Como montar</th></tr>
          <tr><td>🟢 Verde</td><td>Erro barato e fácil de corrigir</td><td>Classificar e-mails internos, resumir reuniões para a equipe</td><td>IA faz sozinha, você confere por amostragem</td></tr>
          <tr><td>🟡 Amarelo</td><td>Fala com cliente ou afeta a imagem</td><td>Resposta a cliente, post nas redes, proposta comercial</td><td>IA faz rascunho, pessoa aprova antes de enviar</td></tr>
          <tr><td>🔴 Vermelho</td><td>Afeta dinheiro, saúde, direitos ou emprego</td><td>Aprovar crédito, orientar tratamento, demitir, cobrar judicialmente</td><td>IA não decide; no máximo organiza informação para a pessoa</td></tr></table></div></div>`,
        `<div class="card"><h3>Como colocar a pessoa no circuito</h3><ol class="golden"><li><span>A IA gera o resultado e o fluxo <b>guarda como rascunho</b> (numa planilha, num canal da equipe ou numa caixa de aprovação).</span></li><li><span>A pessoa recebe um <b>aviso com o rascunho</b> e as informações originais lado a lado.</span></li><li><span>Ela <b>aprova, edita ou rejeita</b>. Só o aprovado segue para envio.</span></li><li><span>Registre as correções: se a mesma correção aparece muito, <b>ajuste a instrução</b>.</span></li></ol></div>`,
        `<div class="card"><h3>IA, dados pessoais e LGPD</h3><ul><li><b>Envie só o necessário</b> para a IA: para classificar o assunto de um e-mail, ela não precisa do CPF.</li><li><b>Evite dados sensíveis</b> sempre que puder, e confira nos termos do provedor de IA como os dados são usados e guardados.</li><li><b>Seja transparente</b>: avise os clientes quando um atendimento usa IA.</li><li><b>Garanta revisão humana</b> em decisões que afetam a pessoa: a LGPD dá direito de pedir revisão de decisões automatizadas.</li></ul>
          <p>Termos e regras mudam: na dúvida sobre um caso específico, consulte quem cuida da parte jurídica do seu negócio.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o piloto continua na cabine mesmo com o piloto automático ligado.</div>`
      ],
      ch:[
        { who:'Daniela, 35 anos, gerente de uma loja de móveis em Campinas', says:'Quero que a IA responda sozinha e envie na hora todas as reclamações de clientes no Instagram.',
          q:'Em que sinal do semáforo isso cai, e como montar?',
          opts:[
            {t:'Verde: pode enviar sozinha, sem ninguém olhar.', ok:false, why:'Resposta pública a reclamação afeta a imagem da loja. Um erro fica exposto para todos.'},
            {t:'Amarelo: a IA prepara o rascunho e uma pessoa aprova ou edita antes de publicar.', ok:true, why:'A IA economiza tempo escrevendo, e a pessoa garante o tom e a informação certa antes de ir a público.'},
            {t:'Vermelho: nunca usar IA em redes sociais.', ok:false, why:'Não é proibido. Com aprovação humana, a IA ajuda bastante.'}
          ]},
        { who:'Fabiano, 41 anos, gerente de uma financeira em Goiânia', says:'Quero que a IA analise os pedidos de empréstimo e aprove ou negue automaticamente.',
          q:'Qual é o caminho responsável?',
          opts:[
            {t:'Deixar a IA aprovar e negar, porque é mais rápido.', ok:false, why:'Decisão de crédito afeta a vida das pessoas e pode trazer viés. Sem revisão humana, há risco legal e ético.'},
            {t:'Usar a IA no máximo para organizar e resumir as informações do pedido, e deixar a decisão com um analista.', ok:true, why:'Decisões de alto impacto ficam com pessoas. A IA ajuda a preparar, não a decidir.'},
            {t:'Aprovar automaticamente só quem a IA gostar mais.', ok:false, why:'Isso continua sendo decisão automática, só com outro nome.'}
          ]},
        { who:'Lívia, 33 anos, recepcionista de uma clínica em Teresina', says:'Para a IA classificar se a mensagem é agendamento ou dúvida, estou mandando junto o prontuário completo do paciente.',
          q:'O que mudar?',
          opts:[
            {t:'Mandar só o texto da mensagem, sem prontuário, porque a classificação não precisa desses dados.', ok:true, why:'Dados de saúde são sensíveis. Enviar só o necessário é o que a LGPD pede e reduz o risco.'},
            {t:'Nada, quanto mais informação, melhor a IA classifica.', ok:false, why:'O prontuário não ajuda a saber se a mensagem é agendamento, e expõe dados sensíveis sem necessidade.'},
            {t:'Mandar o prontuário, mas pedir para a IA esquecer depois.', ok:false, why:'Pedir para esquecer não controla o que acontece com os dados. O certo é não enviar.'}
          ]},
        { who:'Nelson, 46 anos, dono de uma escola de cursos livres em Sorocaba', says:'A equipe aprova os rascunhos de resposta da IA, mas toda vez corrige a mesma coisa: a IA diz que as aulas são online, e elas são presenciais.',
          q:'Qual é o próximo passo?',
          opts:[
            {t:'Continuar corrigindo manualmente para sempre.', ok:false, why:'Correção repetida é um sinal claro de que a instrução precisa melhorar.'},
            {t:'Ajustar a instrução incluindo que as aulas são presenciais, testar com mensagens antigas e manter a aprovação humana.', ok:true, why:'As correções da equipe mostram o que falta na instrução. Ajustar reduz o retrabalho sem tirar a segurança.'},
            {t:'Tirar a aprovação humana, já que o erro é sempre o mesmo.', ok:false, why:'Sem revisão, o erro iria direto para os clientes. Primeiro se corrige a instrução.'}
          ]}
      ]},
    { id:'4.4', title:'Testar e medir a etapa de IA', min:10,
      body:[
        `<div class="card analogy"><h3>🎯 O treino de pênaltis</h3><p>Um técnico não descobre se o batedor é bom num único chute. Ele faz o jogador bater 20 pênaltis e conta quantos entraram. <b>Com a etapa de IA é igual</b>: um teste que deu certo não prova nada. Você precisa de um conjunto de exemplos e de uma contagem de acertos.</p></div>`,
        `<div class="term"><b>Conjunto de testes</b> = uma lista fixa de exemplos reais com a resposta certa já anotada. <b>Taxa de acerto</b> = quantos exemplos a IA acertou, dividido pelo total. <b>Regressão</b> = quando uma mudança na instrução conserta um caso e estraga outro.</div>`,
        `<div class="card"><h3>Montando o conjunto de testes</h3><ol class="golden"><li><span>Junte de <b>20 a 30 textos reais</b> (sem dados pessoais), incluindo casos fáceis, difíceis e estranhos.</span></li><li><span>Anote ao lado a <b>resposta certa</b> de cada um, decidida por você.</span></li><li><span>Rode a etapa de IA em todos e compare: <b>acertou ou errou?</b></span></li><li><span>Calcule a <b>taxa de acerto</b> e olhe os erros: há um padrão?</span></li><li><span>Ajuste a instrução e <b>rode o conjunto inteiro de novo</b>, para não haver regressão.</span></li></ol></div>`,
        `<div class="card"><h3>Quanto acerto é suficiente?</h3>
          <div class="tw"><table class="tbl"><tr><th>Situação</th><th>Referência</th></tr>
          <tr><td>🟢 Erro barato (organizar e-mails internos)</td><td>Acerto alto já basta, com conferência por amostragem</td></tr>
          <tr><td>🟡 Fala com cliente</td><td>Mesmo com acerto alto, mantenha aprovação humana</td></tr>
          <tr><td>🔴 Alto impacto</td><td>Nenhuma taxa dispensa a decisão de uma pessoa</td></tr></table></div>
          <p><b>Custo:</b> multiplique as execuções por mês pelo custo aproximado de cada chamada de IA (veja a tabela de preços do provedor, que muda). Compare com o tempo economizado e ative um <b>limite de gasto</b>.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o técnico faz o jogador bater muitos pênaltis antes de escolher quem vai bater no jogo.</div>`
      ],
      ch:[
        { who:'Alan, 32 anos, suporte de uma empresa de software em Florianópolis', says:'Testei a classificação com 2 e-mails e acertou os dois. Posso ligar para todos os clientes?',
          q:'O que você recomenda?',
          opts:[
            {t:'Sim, 100% de acerto.', ok:false, why:'Dois exemplos não mostram como a IA se comporta com a variedade real de mensagens.'},
            {t:'Montar um conjunto de 20 a 30 e-mails reais com a resposta certa anotada, medir a taxa de acerto e analisar os erros antes de ligar.', ok:true, why:'Um conjunto variado mostra o desempenho real e revela os casos em que a instrução falha.'},
            {t:'Ligar e ver como fica.', ok:false, why:'Testar com clientes reais é arriscar a experiência deles.'}
          ]},
        { who:'Denise, 45 anos, gerente de atendimento em Salvador', says:'Ajustei a instrução para acertar as mensagens de cobrança. Agora as de cancelamento passaram a errar.',
          q:'O que aconteceu e como evitar?',
          opts:[
            {t:'Uma regressão: a mudança consertou um caso e estragou outro. Rodar o conjunto inteiro a cada ajuste evita surpresas.', ok:true, why:'Testar tudo depois de cada mudança mostra se algo que funcionava deixou de funcionar.'},
            {t:'A IA ficou cansada.', ok:false, why:'A IA não se cansa. A instrução nova mudou o comportamento.'},
            {t:'É só voltar a instrução antiga e nunca mais mexer.', ok:false, why:'Voltar é possível, mas o certo é ajustar com o conjunto de testes como rede de proteção.'}
          ]},
        { who:'Ronaldo, 38 anos, dono de uma loja de eletrônicos em Belém', says:'A IA acerta quase todas as categorias, mas vou usá-la para decidir quais clientes têm direito a reembolso.',
          q:'A taxa de acerto alta resolve?',
          opts:[
            {t:'Sim, acerto alto dispensa revisão.', ok:false, why:'Reembolso envolve dinheiro e direitos do consumidor. Os poucos erros podem gerar prejuízo e reclamações.'},
            {t:'Não: em decisões de alto impacto, a IA pode organizar as informações, mas uma pessoa decide.', ok:true, why:'No sinal vermelho do semáforo, nenhuma taxa de acerto dispensa a decisão humana.'},
            {t:'Só se o cliente não perceber.', ok:false, why:'Isso não é critério. A questão é responsabilidade pela decisão.'}
          ]},
        { who:'Gisele, 31 anos, analista de marketing em Curitiba', says:'Meu fluxo com IA vai rodar umas 6.000 vezes por mês. Não pensei no custo.',
          q:'O que fazer antes de ligar?',
          opts:[
            {t:'Estimar o custo multiplicando as execuções pelo custo aproximado de cada chamada, comparar com o tempo economizado e ativar um limite de gasto.', ok:true, why:'A conta mostra se o fluxo compensa, e o limite evita surpresa na fatura.'},
            {t:'Ligar e ver a fatura no fim do mês.', ok:false, why:'Descobrir o custo na fatura pode ser caro demais.'},
            {t:'Não se preocupar, IA é sempre barata.', ok:false, why:'Pouco por chamada vezes milhares de execuções pode virar muito.'}
          ]}
      ]},
    { id:'4.5', title:'Projeto: um fluxo com IA e revisão humana', min:45,
      body:[`<div class="card"><p>Agora você vai acrescentar inteligência a uma automação: um fluxo em que a IA classifica, resume ou extrai informações de textos reais do seu dia a dia, com validação e uma pessoa no circuito quando o risco pedir.</p></div>`],
      projeto:{
        entrega:'O desenho e o teste de um fluxo com etapa de IA: a tarefa da IA, a estrutura da instrução, a validação, o sinal do semáforo e os resultados de pelo menos 5 testes.',
        passos:[
          'Escolha um texto que chega com frequência (e-mails, mensagens, pedidos) e explique por que uma regra fixa não resolve.',
          'Defina a tarefa única da IA (classificar, resumir ou extrair) e as categorias ou campos permitidos.',
          'Escreva com suas palavras a estrutura da instrução: contexto, tarefa, opções fechadas, formato da resposta e o que fazer na dúvida.',
          'Classifique o fluxo no semáforo de risco e desenhe onde entra a validação e a revisão humana.',
          'Monte um conjunto de pelo menos 15 textos reais (sem dados sensíveis) com a resposta certa anotada, rode a etapa de IA e calcule a taxa de acerto.',
          'Ajuste a instrução com base nos erros, rode o conjunto inteiro de novo e decida se o fluxo pode ir para o ar.'
        ],
        checklist:[
          'A etapa de IA faz uma única tarefa, com opções ou campos fechados e uma saída de escape para a dúvida.',
          'Existe validação depois da IA e revisão humana proporcional ao risco.',
          'Não envio para a IA dados pessoais ou sensíveis que a tarefa não exige.',
          'Testei com pelo menos 15 textos, calculei a taxa de acerto e ajustei a instrução sem causar regressão.',
          'Estimei o volume mensal e o custo das execuções com IA.'
        ],
        minimo:450
      }}
  ]},
];

const MODDONE = {
  1: 'Você sabe escolher o que vale automatizar, mapear um processo real e descrever qualquer fluxo em gatilho, condição e ação.',
  2: 'Você escolheu uma ferramenta com critério e montou o seu primeiro fluxo, cuidando de formatos e testando antes de divulgar.',
  3: 'Você sabe cuidar de erros, chaves, custos e documentação. Boa automação é a que continua funcionando com segurança.',
  4: 'Parabéns, você concluiu o curso Automação Sem Código! Você sabe mapear, montar, proteger e manter fluxos, inclusive com IA e uma pessoa no comando. Seu certificado do curso já está disponível.'
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
  ],
  4: [
    { title:'Instrução para etapa de IA', desc:'Para escrever o pedido fixo que classifica, resume ou extrai dentro do fluxo.' }
  ]
};

const THEME = { 1:['#F59E0B','#F97316'], 2:['#F97316','#FB923C'], 3:['#EA580C','#F59E0B'], 4:['#F59E0B','#EAB308'] };
const LIC = { '1.1':'⚙️','1.2':'🔔','1.3':'🗺️','1.4':'🧩','1.5':'🛠️','2.1':'🧰','2.2':'📋','2.3':'📮','2.4':'📞','2.5':'📰','2.6':'🛠️','3.1':'🚨','3.2':'🔐','3.3':'📒','3.4':'📦','3.5':'🛠️','4.1':'📬','4.2':'🧾','4.3':'✈️','4.4':'🎯','4.5':'🛠️' };

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
