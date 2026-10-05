/* Curso: Primeiros Clientes (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🔎', title:'Encontrar e conversar', sub:'Quem são, como falar com eles e como organizar os contatos', lessons:[
    { id:'1.1', title:'Onde estão os seus primeiros clientes', min:10,
      body:[
        `<div class="card analogy"><h3>🔎 Pescar no lago perto de casa</h3><p>Quem está começando pesca no lago que já conhece, e não no oceano. Ali você sabe onde ficam os peixes, conhece o caminho e as pessoas da margem. Os primeiros clientes costumam estar perto assim: gente que você conhece ou que conhece alguém que você conhece. O oceano (anúncios pagos, desconhecidos, grandes plataformas) fica para depois, quando você já sabe o que funciona.</p></div>`,
        `<div class="term"><b>Rede de contatos</b> = as pessoas que você conhece direta ou indiretamente. <b>Indicação</b> = quando alguém recomenda o seu serviço a outra pessoa. <b>Comunidade</b> = grupo de pessoas com um interesse ou uma profissão em comum. <b>Cliente-piloto</b> = o primeiro cliente, que recebe o serviço em condição especial em troca de retorno sincero e, se gostar, um depoimento.</div>`,
        `<div class="card"><h3>Comece perto e com respeito</h3><ol class="golden"><li><span>Pessoas que você conhece e que têm o problema, ou conhecem alguém que tem.</span></li><li><span>Indicações do seu cliente-piloto.</span></li><li><span>Comunidades do seu nicho em que você ajuda de verdade, respondendo dúvidas, sem spam.</span></li><li><span>Perfil profissional claro (LinkedIn ou Instagram) com sua oferta e exemplos.</span></li><li><span>Parcerias com quem atende o mesmo público, como contadores ou fotógrafos.</span></li></ol>
          <p>Faça uma lista de 20 nomes e fale com 5 por semana, em mensagens pessoais. Não compre listas, não adicione ninguém em grupos sem permissão e respeite quem não quiser receber.</p></div>`,
        `<div class="card"><h3>Como montar a lista de 20 nomes</h3><p>Pegue papel ou uma planilha e passe por quatro "círculos", do mais próximo ao mais distante:</p><ol class="golden"><li><span><b>Círculo 1, conhecidos com o problema:</b> a dona do salão onde você corta o cabelo, o primo que tem uma oficina, a amiga confeiteira que vive sem tempo para responder pedidos.</span></li><li><span><b>Círculo 2, quem conhece muita gente do seu nicho:</b> o contador do bairro, o fornecedor de embalagens, o síndico, a vendedora de produtos de beleza.</span></li><li><span><b>Círculo 3, comunidades:</b> o grupo de empreendedores do bairro, a associação comercial, a feira de artesanato, grupos de profissionais de que você já participa.</span></li><li><span><b>Círculo 4, negócios que você frequenta:</b> a padaria, o pet shop, a clínica. Você é cliente, já existe uma relação.</span></li></ol><p>Para cada nome, anote em uma linha: qual problema essa pessoa provavelmente tem e como você chegou até ela. Se não souber dizer o problema, o nome ainda não entra na lista.</p></div>`,
        `<div class="card"><h3>Erros comuns de quem está começando</h3><ul><li><b>Querer falar com todo mundo:</b> "qualquer negócio" vira nenhum. Escolha um nicho e fale com quem tem aquele problema.</li><li><b>Esperar o cliente aparecer:</b> postar e torcer raramente funciona no início. A conversa individual é o motor.</li><li><b>Ter vergonha de contar o que faz:</b> você não está pedindo favor, está oferecendo uma solução para um problema real.</li><li><b>Desistir na terceira resposta negativa:</b> ouvir "não" faz parte. Muitos "nãos" querem dizer "não agora".</li></ul></div>`,
        `<div class="why-chain"><b>Por que começar perto?</b> Porque quem já conhece você confia mais. Por que confiança importa? Porque o primeiro cliente compra a pessoa antes de comprar o serviço. E por que isso ajuda depois? Porque um cliente satisfeito indica outro, e a rede cresce sozinha.</div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que quem está começando a pescar vai primeiro ao lago perto de casa.</div>`
      ],
      ch:[
        { who:'Priscila, 27 anos, começando a oferecer seu serviço', says:'Vou adicionar todos os meus contatos num grupo de divulgação, sem avisar, e mandar minha oferta.',
          q:'Qual é a melhor abordagem?',
          opts:[
            {t:'Adicionar todos no grupo, porque quanto mais gente, mais chance.', ok:false, why:'Adicionar pessoas sem permissão incomoda, gera saídas e pode causar denúncias.'},
            {t:'Falar com pessoas próximas que têm o problema, uma a uma, com mensagem pessoal, respeitando quem não quiser.', ok:true, why:'A conversa pessoal gera confiança e mais respostas do que um grupo forçado.'},
            {t:'Comprar uma lista de contatos e mandar a oferta para todos.', ok:false, why:'Mensagens para quem não pediu são spam, mal vistas e podem violar regras e a LGPD.'}
          ]},
        { who:'Caio, 24 anos, oferece organização de agenda e atendimento por WhatsApp', says:'Montei minha lista: 20 nomes, mas metade são pessoas famosas do Instagram que eu nunca vi e que nem sei se precisam disso.',
          q:'O que ele deveria ajustar na lista?',
          opts:[
            {t:'Manter os famosos: se um deles responder, ele ganha muita visibilidade.', ok:false, why:'A chance de resposta de um desconhecido famoso é mínima, e ele nem sabe se essa pessoa tem o problema.'},
            {t:'Aumentar a lista para 200 nomes de qualquer tipo, para ter mais chances.', ok:false, why:'Volume sem critério só aumenta o trabalho. O que importa é falar com quem tem o problema.'},
            {t:'Trocar por pessoas próximas que têm o problema, como a manicure que perde clientes por demorar a responder, anotando o problema de cada uma.', ok:true, why:'Uma lista boa tem nomes acessíveis e um problema claro para cada um. Isso torna a conversa natural.'}
          ]},
        { who:'Denise, 41 anos, faz cardápios e posts para restaurantes', says:'Conheço o contador que atende metade dos restaurantes do bairro, mas acho feio pedir ajuda para ele.',
          q:'Como ela pode aproveitar esse contato com ética?',
          opts:[
            {t:'Propor uma parceria: explicar o que faz, perguntar se ele tem clientes com essa dificuldade e oferecer indicar clientes dela para ele também.', ok:true, why:'Parceria com quem atende o mesmo público é uma das fontes mais fortes de primeiros clientes, e a troca de indicações beneficia os dois.'},
            {t:'Pedir que o contador passe a lista de telefones dos clientes dele.', ok:false, why:'Repassar dados de clientes sem autorização fere a confiança e a LGPD. A indicação deve partir dele, com o consentimento do cliente.'},
            {t:'Não falar com ele, para não parecer interesseira.', ok:false, why:'Apresentar o próprio trabalho com clareza e oferecer troca não é interesse feio, é networking honesto.'}
          ]}
      ]},
    { id:'1.2', title:'A primeira conversa: perguntar antes de oferecer', min:10,
      body:[
        `<div class="card analogy"><h3>👂 O médico que escuta antes de receitar</h3><p>O bom médico pergunta, ouve e só depois indica o tratamento. Se receitasse na porta, errava com frequência e o paciente não voltaria. Seu primeiro contato com um cliente funciona assim: primeiro o diagnóstico, depois a proposta.</p></div>`,
        `<div class="term"><b>Diagnóstico</b> = entender o problema do cliente antes de propor algo. <b>Pergunta aberta</b> = pergunta que pede explicação, e não apenas sim ou não. <b>Objeção</b> = dúvida ou resistência do cliente. <b>Resumo espelhado</b> = repetir o que o cliente disse com as palavras dele, para confirmar que você entendeu.</div>`,
        `<div class="card"><h3>Roteiro de 15 minutos</h3><ol class="golden"><li><span>Cumprimento e contexto.</span></li><li><span>Perguntas abertas: "Como você faz isso hoje?", "O que mais incomoda?", "O que já tentou?", "O que seria um bom resultado?"</span></li><li><span>Resuma o que ouviu, com as palavras dele.</span></li><li><span>Só então apresente a oferta, ligada ao problema que ele contou.</span></li><li><span>Combine o próximo passo, como "envio a proposta até quinta".</span></li></ol>
          <p>Ouça mais do que fale. Não prometa resultados: diga o que você entrega. Se o seu serviço não for o certo, diga isso e indique outro caminho: honestidade gera indicações.</p></div>`,
        `<div class="card"><h3>Exemplo real: a dona do pet shop</h3><p>Imagine que você oferece atendimento e agenda online para pequenos negócios e conversa com a Sônia, dona de um pet shop.</p><div class="flows"><div class="flow old"><b>Jeito errado</b><p>"Oi, Sônia! Eu faço agenda online, chatbot, posts, site e planilha. Quer?" Ela responde "vou ver" e some.</p></div><div class="flow new"><b>Jeito certo</b><p>"Como os clientes marcam banho e tosa hoje?" Ela conta que é tudo por WhatsApp e que perde horários porque esquece de responder no meio do atendimento. Você resume: "Então o problema é perder agendamentos quando você está com as mãos ocupadas, certo?" Só então mostra a parte do serviço que resolve isso.</p></div></div></div>`,
        `<div class="card"><h3>Perguntas que ajudam e perguntas que atrapalham</h3><div class="tw"><table class="tbl"><tr><th>Ajudam (abertas)</th><th>Atrapalham (fechadas ou indutoras)</th></tr><tr><td>"Como funciona isso hoje?"</td><td>"Você precisa de um site, né?"</td></tr><tr><td>"O que acontece quando dá errado?"</td><td>"Você gostaria de vender mais?"</td></tr><tr><td>"Quanto tempo isso toma da sua semana?"</td><td>"Posso te mandar meu preço?"</td></tr><tr><td>"O que você já tentou e por que não deu certo?"</td><td>"Você não acha que está atrasado?"</td></tr></table></div><p>Anote as respostas durante a conversa (avise que vai anotar). Essas anotações viram a primeira parte da sua proposta, no módulo 2.</p></div>`,
        `<div class="card"><h3>Quando dizer "não sou a pessoa certa"</h3><p>Às vezes, no meio da conversa, você percebe que o problema é outro: a confeitaria não precisa de posts, precisa de alguém para fazer as contas de custo. Dizer isso e indicar um caminho (um contador, um curso, outro profissional) parece perda de venda, mas cria uma lembrança forte: "essa pessoa foi honesta comigo". É assim que nascem indicações.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o médico faz perguntas antes de dizer qual é o remédio.</div>`
      ],
      ch:[
        { who:'Fábio, 30 anos, faz suas primeiras reuniões com clientes', says:'Quando falo com um possível cliente, já despejo toda a minha lista de serviços nos primeiros 2 minutos.',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Continuar assim: quanto mais opções, mais chance de interessar.', ok:false, why:'Uma lista longa sem entender o problema confunde e parece que você não escutou.'},
            {t:'Falar mais rápido, para dar tempo de apresentar tudo.', ok:false, why:'Velocidade não resolve. O que falta é ouvir o cliente.'},
            {t:'Começar com perguntas sobre o problema, ouvir, resumir e só depois apresentar o serviço que se liga ao que ele disse.', ok:true, why:'O cliente se sente ouvido, e a oferta fica relevante para ele.'}
          ]},
        { who:'Seu Antônio, dono de uma oficina mecânica', says:'Olha, eu não entendo nada dessas coisas de internet. Meu problema é que o pessoal liga, eu estou embaixo do carro e não atendo.',
          q:'Qual é a melhor resposta de quem está fazendo o diagnóstico?',
          opts:[
            {t:'"Então o senhor precisa de um site completo com loja virtual."', ok:false, why:'Ele não falou em vender online. Pular para uma solução grande ignora o problema que ele descreveu.'},
            {t:'"Entendi: o senhor perde clientes porque não consegue atender o telefone durante o serviço. Quantas ligações acha que perde por semana?"', ok:true, why:'Resumir com as palavras dele e aprofundar com uma pergunta aberta mostra escuta e ajuda a medir o tamanho do problema.'},
            {t:'"Isso é fácil, eu resolvo em um dia e o senhor vai dobrar o faturamento."', ok:false, why:'Promessa de resultado sem conhecer a situação é irresponsável e destrói a confiança se não acontecer.'}
          ]},
        { who:'Juliana, 26 anos, faz posts para pequenos negócios', says:'Conversando com uma confeiteira, percebi que o problema dela é não saber o custo dos bolos. Posts não vão resolver isso.',
          q:'O que Juliana deve fazer?',
          opts:[
            {t:'Vender o pacote de posts mesmo assim, porque cliente é cliente.', ok:false, why:'Vender algo que não resolve o problema gera frustração e uma má referência.'},
            {t:'Encerrar a conversa sem dizer nada.', ok:false, why:'Ela perde a chance de ajudar e de deixar uma boa impressão.'},
            {t:'Ser honesta, dizer que o problema principal parece ser de custos, indicar um caminho e se colocar à disposição para os posts quando fizer sentido.', ok:true, why:'Honestidade gera confiança e indicações. A confeiteira vai lembrar dela quando precisar de posts ou quando uma amiga precisar.'}
          ]}
      ]},
    { id:'1.3', title:'Mensagem de primeiro contato que respeita', min:10,
      body:[
        `<div class="card analogy"><h3>🚪 Bater na porta, não arrombar</h3><p>Quando você visita alguém, bate na porta, se apresenta e pergunta se pode entrar. Ninguém gosta de quem entra sem pedir. A mensagem de primeiro contato é essa batida na porta: curta, educada e com espaço para a pessoa dizer "agora não".</p></div>`,
        `<div class="term"><b>Spam</b> = mensagem em massa, não solicitada, enviada para quem não tem relação com você. <b>Opt-out</b> = a opção clara de a pessoa dizer que não quer mais receber mensagens. <b>LGPD</b> = Lei Geral de Proteção de Dados, que regula como dados pessoais (nome, telefone, e-mail) podem ser coletados e usados. <b>Gancho</b> = o motivo real e específico pelo qual você está falando com aquela pessoa.</div>`,
        `<div class="card"><h3>A estrutura de uma boa primeira mensagem</h3><ol class="golden"><li><span><b>Quem você é e de onde vem a conexão:</b> "Oi, Márcia, aqui é o Lucas, amigo da Carla do salão."</span></li><li><span><b>O gancho:</b> algo verdadeiro sobre a pessoa ou o negócio. "Vi que vocês começaram a fazer encomendas de bolo pelo Instagram."</span></li><li><span><b>Uma frase sobre o que você faz:</b> "Eu ajudo confeitarias a organizar os pedidos para não perder encomenda."</span></li><li><span><b>Uma pergunta leve, não uma venda:</b> "Faz sentido conversar 15 minutos essa semana?"</span></li><li><span><b>A porta de saída:</b> "Se não for o momento, sem problema, é só me avisar."</span></li></ol><p>Tudo isso cabe em 4 ou 5 linhas. Mensagem longa no primeiro contato parece propaganda.</p></div>`,
        `<div class="card"><h3>WhatsApp ou LinkedIn?</h3><div class="tw"><table class="tbl"><tr><th>Canal</th><th>Quando usar</th><th>Cuidados</th></tr><tr><td>WhatsApp</td><td>Quando você tem o número por relação direta ou indicação com permissão.</td><td>Não mande áudio longo no primeiro contato; respeite horário comercial; nada de lista de transmissão para desconhecidos.</td></tr><tr><td>LinkedIn</td><td>Para profissionais e empresas, quando há interesse profissional em comum.</td><td>Personalize o convite; não mande a oferta junto com o pedido de conexão.</td></tr><tr><td>Direct do Instagram</td><td>Para negócios que usam o perfil comercial para atender.</td><td>Comente algo real do perfil; não copie e cole a mesma mensagem para cem perfis.</td></tr></table></div></div>`,
        `<div class="card"><h3>LGPD e bom senso, sem juridiquês</h3><p>Você não precisa ser advogado, mas precisa de alguns cuidados: use dados que a pessoa forneceu ou que vieram por indicação com consentimento; não compre nem baixe listas de contatos; não repasse números de clientes para terceiros; guarde só o necessário (nome, contato, o que conversaram); e, se alguém pedir para não receber mais mensagens, apague o contato da sua lista de prospecção e não insista. Em caso de dúvida sobre usos mais complexos de dados, procure orientação profissional.</p></div>`,
        `<div class="card"><h3>Sinais de que a mensagem virou spam</h3><ul><li>É igual para todo mundo, com "Olá, tudo bem?" e um texto enorme.</li><li>Fala só de você, não da pessoa.</li><li>Tem link e preço logo na primeira linha.</li><li>Não tem nenhuma forma de a pessoa recusar.</li><li>Foi enviada às 23h de um domingo.</li></ul><p>Se a mensagem tem dois ou mais desses sinais, reescreva.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos a diferença entre bater na porta do vizinho e entrar na casa dele sem pedir.</div>`
      ],
      ch:[
        { who:'Renato, 33 anos, oferece fotos de produtos para lojas', says:'Escrevi uma mensagem de 15 linhas com meu portfólio, tabela de preços e três links. Vou mandar para 80 lojas do Instagram de uma vez.',
          q:'O que ele deveria mudar?',
          opts:[
            {t:'Nada: quem se interessar responde, e quem não quiser ignora.', ok:false, why:'Mensagem longa e igual para todos é percebida como spam, gera bloqueios e queima a imagem dele no bairro.'},
            {t:'Escrever mensagens curtas e personalizadas, com um gancho real de cada loja, uma pergunta leve e a opção de recusar, enviando poucas por dia.', ok:true, why:'Personalização e respeito aumentam as respostas e evitam que ele seja visto como spammer.'},
            {t:'Mandar a mesma mensagem, mas em áudio, porque é mais pessoal.', ok:false, why:'Áudio longo de desconhecido no primeiro contato incomoda ainda mais e continua sendo uma mensagem em massa.'}
          ]},
        { who:'Tatiane, dona de uma loja de roupas no bairro', says:'Recebi a mensagem de uma moça que faz atendimento online. Respondi "agora não, obrigada". Ela me mandou mais três mensagens na mesma semana.',
          q:'O que a profissional deveria ter feito após o "agora não"?',
          opts:[
            {t:'Agradecer, respeitar a resposta e, se Tatiane permitir, combinar de voltar a falar em alguns meses.', ok:true, why:'Respeitar o "não" preserva a relação. Pedir permissão para um contato futuro mantém a porta aberta sem insistência.'},
            {t:'Insistir até convencer, porque "não" quer dizer "talvez".', ok:false, why:'Insistir após uma recusa clara é desrespeitoso e faz a pessoa bloquear e falar mal do serviço.'},
            {t:'Adicionar Tatiane num grupo de promoções para ela ir conhecendo.', ok:false, why:'Adicionar em grupo sem permissão, depois de uma recusa, é ainda mais invasivo.'}
          ]},
        { who:'Marcos, 29 anos, consultor para clínicas', says:'Achei na internet uma planilha com telefones de 500 clínicas. Posso usar para prospectar?',
          q:'Qual é a orientação mais adequada?',
          opts:[
            {t:'Pode, se ele mandar só uma mensagem para cada clínica.', ok:false, why:'O problema não é a quantidade de mensagens, é a origem dos dados: não se sabe se houve consentimento.'},
            {t:'Pode, desde que apague a planilha depois.', ok:false, why:'Apagar depois não corrige o uso inadequado dos dados no momento do envio.'},
            {t:'Não usar a lista; procurar clínicas por indicação, comunidades e perfis comerciais públicos, com abordagem personalizada e opção de recusa.', ok:true, why:'Listas de origem desconhecida trazem risco com a LGPD e ruim retorno. Contatos por relação e abordagem respeitosa funcionam melhor.'}
          ]}
      ]},
    { id:'1.4', title:'Organizar contatos e follow-up sem insistir', min:10,
      body:[
        `<div class="card analogy"><h3>🌾 A horta com caderninho</h3><p>Quem cuida de uma horta sabe o que plantou, quando regou e quando colher. Sem anotar, uma parte seca e outra apodrece. Contatos são assim: sem registro, você esquece de responder quem pediu proposta e manda mensagem duas vezes para quem já disse não.</p></div>`,
        `<div class="term"><b>Funil</b> = as etapas pelas quais um contato passa até virar cliente. <b>Follow-up</b> = retomar o contato depois de um tempo, de forma combinada e educada. <b>Próxima ação</b> = o que você vai fazer com aquele contato e em que data. <b>CRM</b> = sistema para organizar contatos; no começo, uma planilha resolve.</div>`,
        `<div class="card"><h3>Um funil simples de 5 etapas</h3><div class="pipe"><div class="node">1. Lista</div><div class="node">2. Contatado</div><div class="node">3. Conversou</div><div class="node">4. Proposta enviada</div><div class="node">5. Fechou ou não fechou</div></div><p>Cada contato fica em uma etapa. Toda semana, olhe a planilha e pergunte: quem está parado há muito tempo em uma etapa? Qual é a próxima ação?</p></div>`,
        `<div class="card"><h3>As colunas da sua planilha</h3><div class="tw"><table class="tbl"><tr><th>Coluna</th><th>Exemplo</th></tr><tr><td>Nome e negócio</td><td>Sônia, Pet Shop Patinhas</td></tr><tr><td>Como chegou</td><td>Indicação da Carla</td></tr><tr><td>Problema percebido</td><td>Perde agendamentos de banho e tosa</td></tr><tr><td>Etapa</td><td>Proposta enviada</td></tr><tr><td>Último contato</td><td>02/10</td></tr><tr><td>Próxima ação e data</td><td>Perguntar se ficou dúvida, em 09/10</td></tr><tr><td>Permissão</td><td>Aceitou receber mensagens; pediu contato só à tarde</td></tr></table></div><p>Guarde só o necessário. Se alguém pedir para sair, apague a linha ou marque "não contatar" e respeite.</p></div>`,
        `<div class="card"><h3>Frequência sem insistência</h3><ol class="golden"><li><span><b>Sem resposta à primeira mensagem:</b> uma retomada curta depois de 5 a 7 dias. "Oi, Sônia, imagino que a semana esteja corrida. Fica a oferta de conversa, sem pressa."</span></li><li><span><b>Ainda sem resposta:</b> uma última mensagem gentil depois de mais 2 semanas, fechando o ciclo: "Não vou mais incomodar; se um dia precisar, estou por aqui."</span></li><li><span><b>Depois disso:</b> pare. Só volte se a pessoa procurar você ou se houver um motivo novo e real.</span></li><li><span><b>Se disse "agora não":</b> pergunte se pode voltar em uma data e anote. Volte na data, uma vez.</span></li></ol><p>Duas tentativas após o primeiro contato é um bom limite. Mais que isso costuma incomodar.</p></div>`,
        `<div class="card"><h3>A rotina de 30 minutos por semana</h3><p>Escolha um dia fixo, como segunda de manhã. Abra a planilha, filtre "próxima ação vence esta semana", mande as mensagens combinadas, atualize as etapas e adicione 5 nomes novos à lista. Isso evita o ciclo de "semana cheia de contatos, depois um mês de nada", que é o que mais faz quem começa desistir.</p></div>`,
        `<div class="why-chain"><b>Por que registrar tudo?</b> Porque a memória falha quando os contatos passam de dez. Por que isso importa? Porque esquecer um retorno prometido parece descaso, e mandar mensagem para quem pediu para sair parece desrespeito. E por que a planilha resolve? Porque ela lembra por você e mostra, em um minuto, onde está cada conversa e o que fazer a seguir.</div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que quem cuida de uma horta anota quando regou cada planta.</div>`
      ],
      ch:[
        { who:'Bruna, 31 anos, faz identidade visual para pequenos negócios', says:'Falei com uns 30 contatos no último mês, mas não anotei nada. Agora não sei para quem mandei proposta nem quem pediu para eu voltar a falar.',
          q:'Qual é o primeiro passo para sair dessa bagunça?',
          opts:[
            {t:'Mandar uma nova mensagem igual para os 30, perguntando se ainda têm interesse.', ok:false, why:'Ela pode repetir mensagem para quem já recusou ou já fechou, o que passa desorganização.'},
            {t:'Montar uma planilha simples com nome, etapa, último contato e próxima ação, reconstruindo pelas conversas, antes de mandar qualquer mensagem.', ok:true, why:'Organizar primeiro evita gafes e mostra exatamente quem precisa de retorno e quando.'},
            {t:'Esquecer esses 30 e começar do zero com outros contatos.', ok:false, why:'Ela jogaria fora conversas já iniciadas, que estão mais perto de virar cliente do que contatos novos.'}
          ]},
        { who:'Diego, 27 anos, personal trainer que também oferece consultoria online', says:'Mandei mensagem para a dona de uma academia pequena e ela não respondeu. Vou mandar de novo amanhã, e depois de amanhã, até ela responder.',
          q:'Qual é a frequência de follow-up mais adequada?',
          opts:[
            {t:'Mensagem todo dia, para mostrar interesse.', ok:false, why:'Mensagens diárias sem resposta parecem perseguição e levam ao bloqueio.'},
            {t:'Nunca mais falar: se ela não respondeu, é porque não quer.', ok:false, why:'Muitas vezes a pessoa só não viu ou estava ocupada. Uma retomada educada é aceitável.'},
            {t:'Uma retomada curta depois de 5 a 7 dias e, se não houver resposta, uma última mensagem gentil fechando o ciclo semanas depois.', ok:true, why:'Poucas retomadas espaçadas e educadas dão chance de resposta sem incomodar.'}
          ]},
        { who:'Helena, dona de uma clínica de estética', says:'A moça do atendimento online me ligou de novo, mesmo depois de eu pedir para tirar meu número da lista dela.',
          q:'Como a profissional deveria ter registrado esse pedido?',
          opts:[
            {t:'Marcar "não contatar" ou apagar o contato da lista de prospecção e não procurar mais, a menos que Helena volte a procurá-la.', ok:true, why:'Registrar o opt-out é o que garante que o pedido seja respeitado e evita problemas com a LGPD e com a reputação.'},
            {t:'Manter o número, mas ligar só uma vez por mês.', ok:false, why:'Helena pediu para sair. Qualquer contato de prospecção depois disso desrespeita o pedido.'},
            {t:'Passar o número para um colega tentar com outra abordagem.', ok:false, why:'Repassar o contato de quem pediu para sair é desrespeito duplo e uso indevido de dados.'}
          ]}
      ]},
    { id:'1.5', title:'Presença profissional mínima: perfil, bio e exemplos', min:10,
      body:[
        `<div class="card analogy"><h3>🪧 A fachada da loja</h3><p>Antes de entrar numa loja, você olha a fachada: tem nome, horário, vitrine arrumada? Se a porta está suja e sem placa, você passa reto, mesmo que o produto lá dentro seja ótimo. Quando você manda a primeira mensagem, a pessoa quase sempre abre o seu perfil antes de responder. O perfil é a sua fachada.</p></div>`,
        `<div class="term"><b>Presença profissional mínima</b> = o básico para alguém entender, em 30 segundos, quem você é, o que faz e como contratar. <b>Bio</b> = o texto curto de apresentação do perfil. <b>Portfólio</b> = exemplos do seu trabalho. <b>Prova social</b> = sinais de que outras pessoas confiaram em você, como depoimentos autorizados.</div>`,
        `<div class="card"><h3>O mínimo que precisa existir</h3><ol class="golden"><li><span><b>Um canal principal arrumado:</b> Instagram profissional, LinkedIn ou WhatsApp Business, conforme onde o seu cliente está. Um bem feito vale mais do que cinco abandonados.</span></li><li><span><b>Foto e nome claros:</b> foto sua, com rosto visível, ou a marca, se já existir. Nome que a pessoa consiga achar depois.</span></li><li><span><b>Bio em três partes:</b> para quem você trabalha, que problema resolve e como falar com você.</span></li><li><span><b>Três exemplos de trabalho:</b> mesmo que sejam do cliente-piloto ou um projeto de treino identificado como tal.</span></li><li><span><b>Forma de contato visível:</b> botão de WhatsApp, link ou e-mail, com horário de atendimento.</span></li></ol></div>`,
        `<div class="card"><h3>Bio: antes e depois</h3><div class="flows"><div class="flow old"><b>Bio vaga</b><p>"Apaixonada por marketing ✨ Criativa | Sonhadora | Gratidão 🙏 Faço de tudo um pouco!"</p></div><div class="flow new"><b>Bio clara</b><p>"Ajudo salões e barbearias do bairro a organizar a agenda pelo WhatsApp e parar de perder horários. Atendo de segunda a sexta. Fale comigo pelo botão abaixo."</p></div></div><p>Repare que a segunda diz para quem é, qual problema resolve e qual é o próximo passo. Escreva a sua com as suas palavras, testando em voz alta: soa como você falando?</p></div>`,
        `<div class="card"><h3>E se eu ainda não tenho exemplos?</h3><p>Todo mundo começa sem portfólio. Algumas saídas honestas:</p><ul><li><b>Cliente-piloto:</b> faça o primeiro trabalho em condição especial, em troca de retorno sincero e autorização para mostrar o resultado.</li><li><b>Projeto de demonstração:</b> crie um exemplo para um negócio fictício e deixe claro que é demonstração. Nunca apresente como se fosse cliente real.</li><li><b>Antes e depois:</b> com autorização, mostre como estava e como ficou, sem números que você não pode comprovar.</li></ul><p>Use só imagens e informações que você tem permissão para mostrar. Dados de clientes, conversas e rostos de terceiros precisam de autorização.</p></div>`,
        `<div class="card"><h3>Erros comuns de perfil</h3><div class="tw"><table class="tbl"><tr><th>Erro</th><th>Por que atrapalha</th><th>Ajuste</th></tr><tr><td>Perfil pessoal misturado com o profissional</td><td>O cliente vê festa e política antes do serviço</td><td>Separe ou destaque o trabalho no topo</td></tr><tr><td>Prometer resultado na bio</td><td>Cria expectativa que você não controla</td><td>Diga o que você entrega, não quanto o cliente vai ganhar</td></tr><tr><td>Último post de oito meses atrás</td><td>Parece que você parou</td><td>Poste pouco, mas com regularidade</td></tr><tr><td>Sem forma de contato</td><td>O interessado desiste</td><td>Botão ou link visível</td></tr></table></div></div>`,
        `<div class="why-chain"><b>Por que o perfil importa se a conversa é individual?</b> Porque a pessoa confere quem você é antes de responder. Por que isso decide? Porque um perfil claro confirma o que sua mensagem disse, e um perfil confuso gera dúvida. E por que basta o mínimo? Porque, no começo, o que vende é a conversa; o perfil só precisa não atrapalhar e passar confiança.</div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a gente olha a fachada de uma loja antes de decidir entrar.</div>`
      ],
      ch:[
        { who:'Larissa, 25 anos, faz posts para confeitarias', says:'Minha bio diz "Criativa, sonhadora, apaixonada por design ✨". Mando mensagens para confeitarias, elas abrem o perfil e não respondem.',
          q:'Qual ajuste mais ajuda?',
          opts:[
            {t:'Colocar mais emojis e frases inspiradoras para chamar atenção.', ok:false, why:'Frases inspiradoras não dizem o que ela faz nem para quem. O problema é falta de clareza, não de enfeite.'},
            {t:'Reescrever a bio dizendo para quem trabalha, que problema resolve e como falar com ela, e fixar três exemplos de trabalho.', ok:true, why:'Uma bio clara e exemplos visíveis confirmam o que a mensagem disse e passam confiança para responder.'},
            {t:'Apagar o perfil e mandar mensagens sem perfil nenhum.', ok:false, why:'Sem perfil, a desconfiança aumenta: a pessoa não tem como verificar quem está falando com ela.'}
          ]},
        { who:'Igor, 23 anos, quer oferecer cardápios digitais para lanchonetes', says:'Ainda não tenho nenhum cliente. Pensei em pegar o cardápio de uma hamburgueria famosa, refazer e postar como se fosse trabalho meu para ela.',
          q:'Qual é a forma honesta de montar os primeiros exemplos?',
          opts:[
            {t:'Fazer como planejou, porque todo mundo faz isso no começo.', ok:false, why:'Apresentar como cliente real um negócio que não contratou é enganoso e pode virar problema com a marca.'},
            {t:'Esperar ter clientes para só então criar o perfil.', ok:false, why:'Sem exemplos ele dificilmente consegue o primeiro cliente. Dá para começar com demonstrações honestas.'},
            {t:'Criar cardápios para negócios fictícios, identificados como demonstração, e buscar um cliente-piloto que autorize mostrar o resultado.', ok:true, why:'Demonstrações identificadas e um cliente-piloto autorizado criam portfólio sem enganar ninguém.'}
          ]},
        { who:'Simone, 38 anos, organiza agendas de clínicas de estética', says:'Tenho Instagram, LinkedIn, TikTok, Facebook e um site, mas não consigo atualizar nenhum. O último post é de março.',
          q:'O que faz mais sentido para ela agora?',
          opts:[
            {t:'Escolher o canal onde as donas de clínica realmente estão, deixá-lo completo e atualizado, e manter os outros apenas com um link para ele.', ok:true, why:'Um canal bem cuidado passa mais confiança do que vários abandonados, e cabe na rotina dela.'},
            {t:'Criar mais duas redes para alcançar mais gente.', ok:false, why:'Mais canais aumentam o trabalho e a chance de tudo ficar desatualizado.'},
            {t:'Postar em todas as redes todo dia por uma semana e depois parar.', ok:false, why:'Picos de postagem seguidos de abandono reforçam a imagem de perfil parado.'}
          ]}
      ]},
    { id:'1.6', title:'Projeto: sua lista de 20 contatos e roteiro de conversa', min:30,
      body:[
        `<div class="card"><p>Agora é com você. Neste projeto você monta a base real para conseguir os primeiros clientes: uma presença profissional mínima, uma lista organizada de 20 contatos e o seu próprio roteiro de conversa. Use o que aprendeu sobre círculos de contatos, perfil, mensagem respeitosa, perguntas abertas e follow-up. Escreva com as suas palavras e para o seu nicho: não existe roteiro pronto que sirva para todo mundo.</p></div>`
      ],
      projeto: {
        entrega: 'Uma bio profissional revisada, uma lista de 20 primeiros contatos organizada em funil e um roteiro de primeira conversa escrito por você para o seu nicho.',
        passos: [
          'Revise o seu canal principal: escreva a bio em três partes (para quem, que problema resolve, como falar com você) e escolha três exemplos honestos de trabalho para deixar visíveis.',
          'Liste 20 nomes passando pelos quatro círculos (conhecidos com o problema, quem conhece muita gente do nicho, comunidades e negócios que você frequenta) numa planilha com as colunas nome e negócio, como chegou, problema, etapa, último contato, próxima ação e permissão.',
          'Escreva a sua mensagem de primeiro contato com conexão, gancho, o que você faz, pergunta leve e porta de saída, e adapte-a para 3 contatos diferentes da lista.',
          'Escreva o roteiro da conversa de 15 minutos com pelo menos 6 perguntas abertas, o resumo espelhado e o combinado do próximo passo.',
          'Defina o seu dia fixo da rotina semanal e as regras de follow-up (quando retomar e quando parar).'
        ],
        checklist: [
          'Todos os 20 nomes têm um problema provável anotado, e nenhum veio de lista comprada ou baixada.',
          'A mensagem de primeiro contato tem até 5 linhas e oferece uma forma clara de recusar.',
          'O roteiro tem perguntas abertas e não começa pela oferta nem pelo preço.',
          'As regras de follow-up têm um limite de tentativas e uma forma de registrar quem pediu para sair.',
          'A bio diz para quem você trabalha e como contratar, sem promessa de resultado, e os exemplos são reais ou identificados como demonstração.'
        ],
        minimo: 380
      } }
  ]},
  { id:2, icon:'📄', title:'Propor e negociar', sub:'Com clareza, respeito e combinado escrito', lessons:[
    { id:'2.1', title:'A proposta com três opções', min:10,
      body:[
        `<div class="card analogy"><h3>📄 O cardápio com três tamanhos</h3><p>Pequeno, médio e grande. O cliente escolhe o que cabe no bolso e na necessidade, e você deixa claro o que muda de um para o outro. Ninguém precisa perguntar ao atendente "o que vem no médio?", porque está escrito no cardápio.</p></div>`,
        `<div class="term"><b>Pacote</b> = combinação de itens do serviço com preço fechado. <b>Opção</b> = cada alternativa da proposta. <b>Validade</b> = o prazo em que o preço da proposta vale. <b>Escopo</b> = a lista exata do que está incluído e do que não está.</div>`,
        `<div class="card"><h3>Dê escolha clara</h3><p>Monte uma proposta de 1 página com 2 ou 3 opções (básica, completa e premium). Para cada uma: o que inclui, o que não inclui, prazo, preço e revisões. Acrescente a forma de pagamento e a validade. Comece mostrando o problema do cliente com as palavras dele. Evite mais de 3 opções e preços escondidos. Não é obrigatório ter 3: o ponto é que a escolha seja simples de entender.</p></div>`,
        `<div class="card"><h3>A estrutura da proposta de 1 página</h3><ol class="golden"><li><span><b>O problema, com as palavras do cliente:</b> "Hoje vocês perdem agendamentos de banho e tosa porque não conseguem responder o WhatsApp durante o atendimento."</span></li><li><span><b>O resultado que você busca entregar</b> (sem prometer números): "Organizar a agenda para que os pedidos fiquem registrados e respondidos."</span></li><li><span><b>As opções lado a lado</b>, em tabela.</span></li><li><span><b>O que não está incluído</b>, para evitar mal-entendidos.</span></li><li><span><b>Pagamento, validade e próximo passo:</b> "Para começar, basta responder qual opção prefere."</span></li></ol></div>`,
        `<div class="card"><h3>Exemplo de tabela de opções (pet shop)</h3><div class="tw"><table class="tbl"><tr><th></th><th>Básica</th><th>Completa</th><th>Premium</th></tr><tr><td>O que inclui</td><td>Mensagens automáticas de saudação e horários</td><td>Básica + agenda online integrada</td><td>Completa + lembrete de retorno para clientes</td></tr><tr><td>Prazo</td><td>5 dias</td><td>10 dias</td><td>15 dias</td></tr><tr><td>Revisões</td><td>1</td><td>2</td><td>3</td></tr><tr><td>Suporte após entrega</td><td>7 dias</td><td>15 dias</td><td>30 dias</td></tr></table></div><p>Os preços você define com base no seu custo e no seu tempo. O que importa é que cada coluna seja um passo claro em relação à anterior.</p></div>`,
        `<div class="card"><h3>Erros que derrubam propostas</h3><ul><li><b>Começar pelo seu currículo</b> em vez do problema do cliente.</li><li><b>Usar termos técnicos</b> que o dono da padaria não entende.</li><li><b>Esquecer o que não está incluído</b> e depois brigar por isso.</li><li><b>Não ter validade:</b> o cliente responde seis meses depois e exige o preço antigo.</li><li><b>Mandar sem combinar:</b> a proposta deve ser o próximo passo combinado na conversa, não uma surpresa.</li></ul></div>`,
        `<div class="card"><h3>Antes de enviar, confira</h3><p>Leia a proposta como se fosse o dono do negócio, sem saber nada do assunto. Ele entende em dois minutos qual é a diferença entre as opções? Sabe quanto vai pagar, quando e como? Sabe o que fazer para aceitar? Se alguma resposta for "não", reescreva o trecho. Envie em PDF ou numa mensagem bem organizada e avise que vai retomar o contato numa data combinada.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um cardápio com três tamanhos facilita escolher.</div>`
      ],
      ch:[
        { who:'Mariana, 34 anos, envia sua primeira proposta', says:'Mandei uma proposta com 7 opções, cada uma com 12 detalhes. O cliente sumiu.',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Simplificar para 2 ou 3 opções, com diferenças claras, linguagem simples e prazo de validade.', ok:true, why:'Menos opções e mais clareza ajudam o cliente a decidir.'},
            {t:'Mandar ainda mais detalhes, para ele não ter dúvidas.', ok:false, why:'Mais detalhes aumentam a confusão e atrasam a decisão.'},
            {t:'Baixar o preço de todas as opções.', ok:false, why:'O problema não era o preço, e sim a dificuldade de entender e escolher.'}
          ]},
        { who:'Paulo, dono de uma padaria', says:'Recebi uma proposta que começava com duas páginas sobre a história da empresa do rapaz. Quando cheguei no preço, já tinha desistido.',
          q:'Como a proposta deveria começar?',
          opts:[
            {t:'Com a lista de certificados e cursos do profissional, para passar credibilidade.', ok:false, why:'Credibilidade ajuda, mas o cliente quer primeiro ver que você entendeu o problema dele.'},
            {t:'Com o problema da padaria descrito com as palavras do Paulo, seguido das opções em uma tabela simples.', ok:true, why:'Mostrar o problema dele primeiro prova que houve escuta e torna as opções relevantes.'},
            {t:'Direto com o preço mais alto, para ancorar o valor.', ok:false, why:'Preço sem contexto assusta. O valor precisa estar ligado ao problema que será resolvido.'}
          ]},
        { who:'Carla, 30 anos, faz cardápios digitais para restaurantes', says:'Entreguei o cardápio e o cliente quis que eu também fizesse as fotos dos pratos, dizendo que "estava implícito".',
          q:'O que teria evitado esse conflito?',
          opts:[
            {t:'Fazer as fotos de graça, para manter o cliente feliz.', ok:false, why:'Ceder sempre ao que não foi combinado gera prejuízo e ensina o cliente a pedir mais.'},
            {t:'Não ter mandado proposta escrita, para ficar mais flexível.', ok:false, why:'Sem nada escrito, o conflito seria ainda maior, porque cada um teria a sua lembrança.'},
            {t:'Ter escrito na proposta o que não está incluído, como "fotos dos pratos não incluídas; posso orçar à parte".', ok:true, why:'Deixar claro o que fica fora do escopo evita mal-entendidos e abre espaço para vender o serviço extra.'}
          ]}
      ]},
    { id:'2.2', title:'Negociar com respeito: objeções e descontos', min:10,
      body:[
        `<div class="card analogy"><h3>🤝 A conversa na feira</h3><p>O feirante escuta, explica o que o produto vale e sabe até onde pode ir. Ele não dá o preço pela metade assim que alguém diz "está caro". Se o freguês quer pagar menos, ele oferece a dúzia menor ou a fruta mais madura, mas não entrega a melhor caixa pela metade.</p></div>`,
        `<div class="term"><b>Objeção</b> = o motivo que o cliente dá para hesitar, como "está caro" ou "vou pensar". <b>Desconto condicional</b> = redução em troca de algo, como pagamento à vista ou escopo menor. <b>Limite</b> = o menor preço ou a menor condição que você aceita. <b>Contrapartida</b> = o que o cliente oferece em troca de uma condição melhor.</div>`,
        `<div class="card"><h3>Seis passos quando ouvir "está caro"</h3><ol class="golden"><li><span>Pergunte com o que ele compara e o que esperava.</span></li><li><span>Relembre o que está incluído e o resultado que ele busca.</span></li><li><span>Ofereça alternativas, como escopo menor, parcelamento ou o pacote básico, em vez de só baixar o preço.</span></li><li><span>Dê desconto só com contrapartida (à vista, depoimento, indicação).</span></li><li><span>Saiba o seu limite antes de negociar.</span></li><li><span>Diga "não" com educação se não compensar.</span></li></ol>
          <p>Nunca prometa o que você não entrega só para fechar.</p></div>`,
        `<div class="card"><h3>As objeções mais comuns e o que elas costumam esconder</h3><div class="tw"><table class="tbl"><tr><th>O cliente diz</th><th>Pode significar</th><th>Pergunta que ajuda</th></tr><tr><td>"Está caro."</td><td>Não entendeu o valor, ou o orçamento é menor.</td><td>"Com o que você está comparando?"</td></tr><tr><td>"Meu sobrinho faz isso."</td><td>Dúvida se vale pagar um profissional.</td><td>"O que você espera de diferente do que ele faz?"</td></tr><tr><td>"Não tenho tempo agora."</td><td>Medo de dar trabalho para ele.</td><td>"O que você precisaria fazer da sua parte para isso andar?"</td></tr><tr><td>"Preciso falar com meu sócio."</td><td>Decisão compartilhada, legítima.</td><td>"Quer que eu prepare um resumo para vocês olharem juntos?"</td></tr></table></div></div>`,
        `<div class="card"><h3>Defina seu limite antes da conversa</h3><p>Antes de negociar, escreva três números para cada opção: o preço da proposta, o mínimo que você aceita e o ponto em que é melhor dizer não. O mínimo precisa cobrir seu tempo, seus custos (ferramentas, transporte, impostos) e uma margem. Quem negocia sem limite definido decide na emoção e se arrepende depois.</p><p>Exemplo de troca justa: "Consigo fazer esse valor se o pagamento for à vista" ou "Nesse orçamento, faço a opção básica, sem a agenda online".</p></div>`,
        `<div class="card"><h3>O que não fazer</h3><ul><li>Inventar urgência falsa ("só hoje!") para pressionar.</li><li>Falar mal do concorrente ou do sobrinho.</li><li>Prometer resultado ("você vai dobrar as vendas") para justificar o preço.</li><li>Dar desconto e manter o mesmo escopo, sem contrapartida.</li></ul></div>`,
        `<div class="why-chain"><b>Por que não ceder de imediato?</b> Porque desconto dado sem conversa sinaliza que o preço inicial era inflado. Por que isso prejudica? Porque o cliente passa a desconfiar e a pedir desconto em todo trabalho. E por que a troca resolve? Porque o cliente recebe uma condição melhor e você recebe algo em troca, mantendo o valor do serviço.</div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o feirante não dá o preço pela metade assim que alguém reclama.</div>`
      ],
      ch:[
        { who:'Gustavo, 28 anos, negocia sua primeira proposta', says:'O cliente falou que estava caro e eu, na hora, cortei 50% sem perguntar nada.',
          q:'O que seria melhor?',
          opts:[
            {t:'Cortar o preço pela metade, porque o cliente sempre tem razão.', ok:false, why:'Cortar sem entender gera prejuízo e ensina o cliente a sempre pedir mais.'},
            {t:'Perguntar o que ele esperava, relembrar o que está incluído e oferecer alternativas (escopo menor ou parcelamento), com desconto só em troca de algo.', ok:true, why:'Entender a objeção e oferecer opções preserva o valor do seu trabalho e ajuda o cliente a decidir.'},
            {t:'Ficar ofendido e encerrar a conversa.', ok:false, why:'Objeção de preço é comum. Encerrar a conversa perde um cliente que poderia fechar.'}
          ]},
        { who:'Dona Lourdes, dona de uma loja de artesanato', says:'Gostei da proposta, mas meu sobrinho disse que faz o Instagram da loja de graça.',
          q:'Qual é a resposta mais respeitosa e eficaz?',
          opts:[
            {t:'"Seu sobrinho não é profissional, vai fazer tudo errado."', ok:false, why:'Criticar a família do cliente gera antipatia e encerra a conversa.'},
            {t:'"Então eu faço de graça também, para a senhora conhecer."', ok:false, why:'Trabalhar de graça por pressão desvaloriza o serviço e não resolve a dúvida real dela.'},
            {t:'"Que bom ter essa ajuda! O que a senhora espera de diferente do que ele já faz?"', ok:true, why:'Perguntar revela a necessidade real. Se o sobrinho resolve, ótimo; se não, ela mesma explica o que falta.'}
          ]},
        { who:'Rafael, 35 anos, faz sites para clínicas', says:'Uma clínica pediu 30% de desconto. Eu ainda não sei qual é o mínimo que posso cobrar.',
          q:'O que ele deve fazer antes de responder?',
          opts:[
            {t:'Calcular o mínimo que cobre seu tempo, custos e uma margem, e então propor uma troca, como escopo menor ou pagamento à vista.', ok:true, why:'Conhecer o próprio limite evita fechar no prejuízo. Oferecer troca mantém a negociação justa para os dois lados.'},
            {t:'Aceitar os 30% para garantir o cliente e ver depois se dá lucro.', ok:false, why:'Aceitar sem saber o custo pode significar trabalhar no prejuízo por semanas.'},
            {t:'Responder que não dá desconto nenhum, nunca.', ok:false, why:'Recusar sem conversar fecha portas. Às vezes uma troca justa resolve para os dois.'}
          ]}
      ]},
    { id:'2.3', title:'Lidar com o "vou pensar" e com o silêncio do cliente', min:10,
      body:[
        `<div class="card analogy"><h3>🍞 A encomenda que esfria na vitrine</h3><p>A confeiteira faz um bolo sob encomenda, e o cliente diz "passo para pegar". Se ela não combina dia e hora, o bolo fica na vitrine, esfria e ninguém sabe se ainda vale. Proposta sem prazo e sem próximo passo é esse bolo esfriando.</p></div>`,
        `<div class="term"><b>"Vou pensar"</b> = resposta que pode ser uma dúvida legítima, uma objeção não dita ou um "não" educado. <b>Validade da proposta</b> = data até a qual preço e condições valem. <b>Follow-up combinado</b> = retorno com data acertada com o cliente. <b>Mensagem de encerramento</b> = última mensagem que fecha o ciclo com gentileza.</div>`,
        `<div class="card"><h3>Quando o cliente disser "vou pensar"</h3><ol class="golden"><li><span><b>Agradeça e normalize:</b> "Claro, é uma decisão importante."</span></li><li><span><b>Pergunte com leveza o que pesa:</b> "Ficou alguma dúvida sobre as opções ou o valor?" Muitas vezes aparece a objeção real.</span></li><li><span><b>Combine uma data:</b> "Posso te procurar na quinta para saber o que decidiu?"</span></li><li><span><b>Lembre a validade:</b> "A proposta vale até o dia 15, depois preciso revisar a agenda e os valores."</span></li><li><span><b>Anote na planilha</b> a data combinada e cumpra.</span></li></ol></div>`,
        `<div class="card"><h3>Sequência para o silêncio depois da proposta</h3><div class="tw"><table class="tbl"><tr><th>Quando</th><th>Objetivo</th><th>Exemplo de ideia (escreva com suas palavras)</th></tr><tr><td>2 a 3 dias após enviar</td><td>Confirmar que recebeu</td><td>Perguntar se a proposta chegou e se ficou alguma dúvida.</td></tr><tr><td>Uma semana depois</td><td>Ajudar a decidir</td><td>Oferecer uma conversa rápida para ajustar alguma opção.</td></tr><tr><td>Perto da validade</td><td>Avisar com transparência</td><td>Lembrar a data de validade, sem pressão.</td></tr><tr><td>Depois da validade</td><td>Encerrar com gentileza</td><td>Dizer que vai arquivar a proposta e que fica à disposição no futuro.</td></tr></table></div><p>Depois da mensagem de encerramento, pare. Muitas vezes é exatamente ela que faz o cliente responder.</p></div>`,
        `<div class="card"><h3>Validade não é pressão</h3><div class="flows"><div class="flow old"><b>Pressão falsa</b><p>"Só até hoje à meia-noite! Depois o preço dobra!" quando isso não é verdade. Gera desconfiança e é antiético.</p></div><div class="flow new"><b>Validade honesta</b><p>"A proposta vale por 15 dias, porque minha agenda e meus custos mudam." É verdade, protege você e ajuda o cliente a se organizar.</p></div></div></div>`,
        `<div class="card"><h3>Aceite o "não" como resposta boa</h3><p>Um "não" claro é melhor que um "talvez" eterno: libera sua energia para outros contatos. Quando ouvir não, agradeça, pergunte se pode saber o motivo (isso melhora suas próximas propostas) e peça permissão para voltar a falar em alguns meses. Registre o motivo na planilha: depois de dez "nãos", você terá um retrato do que ajustar na oferta.</p></div>`,
        `<div class="card"><h3>Erros comuns nessa fase</h3><ul><li>Responder "qualquer coisa me chama" e não combinar data nenhuma.</li><li>Mandar várias mensagens no mesmo dia porque bateu ansiedade.</li><li>Baixar o preço sozinho, sem o cliente pedir, só para "destravar".</li><li>Ficar ofendido com a demora e mudar o tom da conversa.</li></ul></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que é importante combinar o dia de buscar o bolo encomendado.</div>`
      ],
      ch:[
        { who:'Vanessa, 28 anos, faz gestão de redes para salões de beleza', says:'A dona do salão disse "vou pensar" e eu respondi "tá bom, qualquer coisa me chama". Já faz um mês.',
          q:'O que Vanessa deveria ter feito na hora do "vou pensar"?',
          opts:[
            {t:'Insistir na hora até a cliente decidir.', ok:false, why:'Pressionar no momento da dúvida costuma virar um "não" definitivo.'},
            {t:'Perguntar se ficou alguma dúvida, combinar uma data para retomar e lembrar a validade da proposta.', ok:true, why:'Com uma pergunta leve e uma data combinada, a conversa não morre, e o retorno passa a ser esperado, não invasivo.'},
            {t:'Baixar o preço imediatamente para ajudar a decidir.', ok:false, why:'Ela nem sabe se o problema é preço. Baixar sem entender só reduz o valor do serviço.'}
          ]},
        { who:'Leandro, 32 anos, oferece manutenção de computadores para escritórios', says:'Mandei a proposta para um escritório de contabilidade há 10 dias. Nenhuma resposta. Penso em mandar "E aí??? Vai fechar ou não???"',
          q:'Qual é a melhor mensagem de retomada?',
          opts:[
            {t:'A mensagem com cobrança direta, para mostrar firmeza.', ok:false, why:'Tom de cobrança antes de qualquer acordo soa agressivo e desrespeitoso.'},
            {t:'Nenhuma: se não respondeu, não quer.', ok:false, why:'Silêncio pode ser só correria. Uma retomada educada é aceitável e muitas vezes bem-vinda.'},
            {t:'Uma mensagem curta perguntando se a proposta chegou bem, se ficou dúvida e oferecendo uma conversa rápida para ajustar.', ok:true, why:'É educada, útil e facilita a resposta, sem pressionar.'}
          ]},
        { who:'Gisele, dona de uma loja de bairro', says:'Recebi uma proposta em março e só respondi em setembro. A profissional disse que o preço tinha mudado e eu fiquei chateada.',
          q:'O que teria evitado esse desconforto?',
          opts:[
            {t:'A proposta ter uma validade clara, informada no envio e lembrada perto do fim do prazo.', ok:true, why:'Com a validade escrita, as duas partes sabem desde o início até quando as condições valem.'},
            {t:'A profissional manter o preço de março para sempre.', ok:false, why:'Custos e agenda mudam. Manter preço indefinidamente pode gerar prejuízo.'},
            {t:'A profissional nunca enviar propostas por escrito.', ok:false, why:'Sem proposta escrita, o desentendimento seria ainda maior.'}
          ]}
      ]},
    { id:'2.4', title:'Fechar com combinado escrito', min:10,
      body:[
        `<div class="card analogy"><h3>📝 A comanda do restaurante</h3><p>No restaurante, o garçom anota o pedido na comanda. Se vier o prato errado, todo mundo olha a comanda e resolve. Sem ela, vira palavra contra palavra. O combinado escrito é a comanda do seu serviço: simples, curta e clara para os dois lados.</p></div>`,
        `<div class="term"><b>Combinado escrito</b> = resumo do acordo enviado por escrito e aceito pelo cliente (mensagem, e-mail ou documento). <b>Sinal</b> = parte do pagamento feita antes de começar. <b>Revisão</b> = rodada de ajustes incluída no preço. <b>Aceite das condições</b> = confirmação explícita do cliente, como "de acordo".</div>`,
        `<div class="card"><h3>O que todo combinado precisa ter</h3><ol class="golden"><li><span><b>Escopo:</b> o que será entregue e o que não está incluído.</span></li><li><span><b>Prazo:</b> data de entrega e o que depende do cliente (por exemplo, "conto a partir do envio das fotos e informações").</span></li><li><span><b>Preço e pagamento:</b> valor total, sinal, quando e como paga o restante, meio rastreável.</span></li><li><span><b>Revisões:</b> quantas rodadas estão incluídas e como são cobradas as extras.</span></li><li><span><b>Mudanças:</b> pedidos novos são orçados à parte, antes de fazer.</span></li><li><span><b>Cancelamento:</b> o que acontece com o sinal se o cliente desistir no meio.</span></li><li><span><b>Aceite:</b> peça que o cliente responda "de acordo" ou assine.</span></li></ol></div>`,
        `<div class="card"><h3>Mensagem, e-mail ou contrato?</h3><div class="tw"><table class="tbl"><tr><th>Situação</th><th>Formato suficiente</th></tr><tr><td>Serviço pequeno e rápido</td><td>Mensagem com o resumo do combinado e o "de acordo" do cliente.</td></tr><tr><td>Serviço médio, várias etapas</td><td>Documento de 1 página em PDF, enviado por e-mail, com aceite por escrito.</td></tr><tr><td>Valor alto, longo prazo ou mensalidade</td><td>Contrato formal; busque orientação jurídica ou contábil para montá-lo.</td></tr></table></div><p>O formato muda, mas a regra é a mesma: nada começa antes do aceite.</p></div>`,
        `<div class="card"><h3>Sobre o sinal</h3><p>O sinal mostra compromisso dos dois lados e cobre parte do seu tempo caso o projeto pare no meio. Combine o percentual e escreva: "o trabalho começa após a confirmação do sinal". Confira o pagamento no extrato do banco, não apenas no comprovante enviado (comprovantes falsos existem). Escreva também o que acontece com o sinal em caso de desistência, para não haver surpresa.</p></div>`,
        `<div class="card"><h3>Erros que viram dor de cabeça</h3><ul><li>Começar "para adiantar" antes do aceite e do sinal.</li><li>Escrever "revisões à vontade".</li><li>Prazo sem dizer o que depende do cliente.</li><li>Combinado espalhado em vinte áudios, sem um resumo.</li><li>Copiar contrato da internet sem entender as cláusulas.</li></ul><p>Dica prática: depois de qualquer conversa por áudio ou ligação, mande um resumo escrito: "Só para confirmar o que combinamos: ...".</p></div>`,
        `<div class="why-chain"><b>Por que escrever, se o cliente é conhecido?</b> Porque mesmo pessoas de boa-fé lembram de forma diferente o que foi combinado. Por que isso vira problema? Porque a diferença só aparece no fim, quando já há trabalho feito e dinheiro em jogo. E por que o combinado escrito ajuda a amizade? Porque tira a discussão do campo pessoal e leva para o que está no papel.</div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos para que serve a comanda que o garçom anota.</div>`
      ],
      ch:[
        { who:'Thiago, 26 anos, edita vídeos para uma academia', says:'Combinei tudo por áudio, comecei a editar e agora o dono diz que eram 10 vídeos, não 5.',
          q:'O que teria evitado esse problema?',
          opts:[
            {t:'Gravar mais áudios para provar o que foi dito.', ok:false, why:'Áudios espalhados são difíceis de conferir e não substituem um resumo claro aceito pelos dois.'},
            {t:'Mandar, antes de começar, um resumo escrito com escopo, prazo, preço, revisões e pedir o "de acordo" do cliente.', ok:true, why:'Com o combinado escrito e aceito, a quantidade de vídeos estaria registrada e não haveria discussão.'},
            {t:'Fazer os 10 vídeos pelo preço de 5, para não perder o cliente.', ok:false, why:'Isso resolve o conflito com prejuízo e ensina o cliente que o combinado não vale.'}
          ]},
        { who:'Aline, 30 anos, faz convites digitais para festas', says:'A cliente pediu a décima revisão do convite. Eu escrevi "revisões à vontade" na proposta.',
          q:'Como Aline deve escrever as revisões nas próximas propostas?',
          opts:[
            {t:'Continuar com "revisões à vontade", porque isso atrai clientes.', ok:false, why:'Sem limite, o trabalho nunca termina e o preço deixa de cobrir o tempo gasto.'},
            {t:'Não oferecer nenhuma revisão.', ok:false, why:'Uma ou duas revisões são esperadas e mostram cuidado com o resultado.'},
            {t:'Definir um número de revisões incluídas, como 2, e informar como são cobradas as revisões extras.', ok:true, why:'O limite claro protege o tempo dela e deixa o cliente ciente desde o início.'}
          ]},
        { who:'Roberto, dono de uma oficina', says:'O rapaz que vai fazer meu site disse que só começa depois do sinal. Achei desconfiança da parte dele.',
          q:'Como o profissional pode explicar o sinal de forma respeitosa?',
          opts:[
            {t:'"O sinal confirma o compromisso dos dois lados e reserva minha agenda para o seu projeto. Está tudo escrito no combinado, inclusive o que acontece se precisar cancelar."', ok:true, why:'Explicar o motivo e mostrar que está tudo por escrito transforma o sinal em sinal de organização, não de desconfiança.'},
            {t:'"É que já levei calote, então não confio em ninguém."', ok:false, why:'Mesmo que seja verdade, a frase soa como acusação ao cliente.'},
            {t:'"Tudo bem, então eu começo sem sinal."', ok:false, why:'Abrir mão do sinal na primeira objeção expõe o profissional a trabalhar sem garantia nenhuma.'}
          ]}
      ]},
    { id:'2.5', title:'Precificar e apresentar a proposta: mensagem, áudio ou reunião', min:10,
      body:[
        `<div class="card analogy"><h3>🧁 A receita da confeiteira</h3><p>A confeiteira que cobra pelo "olhômetro" descobre no fim do mês que vendeu muito e sobrou pouco. A que anota farinha, ovos, gás, embalagem e as horas de trabalho sabe exatamente quanto cada bolo precisa custar. Preço de serviço segue a mesma lógica: primeiro a conta, depois o número.</p></div>`,
        `<div class="term"><b>Custo</b> = o que você gasta para entregar (ferramentas, internet, transporte, impostos). <b>Valor da sua hora</b> = quanto você precisa ganhar por hora trabalhada para que a conta feche. <b>Margem</b> = a folga acima do custo, para imprevistos e crescimento. <b>Apresentação</b> = a forma como a proposta chega ao cliente.</div>`,
        `<div class="card"><h3>Uma conta simples para não cobrar no escuro</h3><ol class="golden"><li><span><b>Estime as horas reais:</b> some conversa, produção, revisões, deslocamento e atendimento. Quem começa costuma esquecer as horas de mensagens e ajustes.</span></li><li><span><b>Defina o valor da sua hora:</b> pense em quanto precisa por mês e em quantas horas realmente consegue trabalhar.</span></li><li><span><b>Some os custos do trabalho:</b> ferramentas pagas, impressão, transporte, taxas do meio de pagamento e impostos.</span></li><li><span><b>Acrescente uma margem</b> para imprevistos.</span></li><li><span><b>Compare com o mercado do seu nicho</b> para ver se está muito fora; se estiver, ajuste o escopo, não só o preço.</span></li></ol><p>Os números dependem da sua realidade e da sua cidade. Para impostos e formalização, confira as regras atualizadas em fontes oficiais e com um contador.</p></div>`,
        `<div class="card"><h3>Mensagem, áudio ou reunião?</h3><div class="tw"><table class="tbl"><tr><th>Formato</th><th>Quando funciona</th><th>Cuidados</th></tr><tr><td>Mensagem escrita ou PDF</td><td>Serviço simples, cliente que prefere ler com calma.</td><td>Organize em tópicos; nunca mande só o preço solto.</td></tr><tr><td>Áudio curto</td><td>Para explicar a proposta já enviada por escrito, em 1 a 2 minutos.</td><td>Áudio não substitui o texto: o combinado precisa ficar escrito.</td></tr><tr><td>Reunião (presencial ou vídeo)</td><td>Serviço maior, várias opções, cliente com muitas dúvidas.</td><td>Envie o resumo escrito logo depois.</td></tr></table></div></div>`,
        `<div class="card"><h3>Como apresentar sem se encolher</h3><div class="flows"><div class="flow old"><b>Apresentação insegura</b><p>"Então... é que eu cobro uns 800, mas se achar caro a gente vê, tá? Pode ser menos também..."</p></div><div class="flow new"><b>Apresentação clara</b><p>"Pelo que você me contou, a opção completa resolve a agenda e os lembretes. Ela custa 800, com entrega em 10 dias e 2 revisões. Se preferir começar menor, a básica resolve só as mensagens automáticas."</p></div></div><p>O valor acima é só ilustração. O ponto é a forma: ligar o preço ao problema, dizer o que inclui e oferecer uma alternativa real, sem pedir desculpas por cobrar.</p></div>`,
        `<div class="card"><h3>Erros comuns de preço</h3><ul><li><b>Copiar o preço de alguém</b> sem saber se cobre os seus custos.</li><li><b>Cobrar barato "para entrar no mercado"</b> e depois não conseguir reajustar.</li><li><b>Esquecer as revisões e o atendimento</b> na estimativa de horas.</li><li><b>Dar o preço antes do diagnóstico:</b> sem entender o problema, qualquer número é chute.</li><li><b>Mandar só "fica 500"</b> no WhatsApp, sem dizer o que está incluído.</li></ul></div>`,
        `<div class="why-chain"><b>Por que fazer a conta antes?</b> Porque sem ela você não sabe qual é o seu limite. Por que o limite importa? Porque é ele que permite negociar com calma, oferecendo trocas em vez de descontos no susto. E por que isso protege a relação? Porque um preço que cobre seu trabalho permite entregar bem, e entregar bem é o que traz o próximo cliente.</div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a confeiteira anota o preço da farinha e dos ovos antes de dizer quanto custa o bolo.</div>`
      ],
      ch:[
        { who:'Natália, 27 anos, faz artes para pet shops', says:'Cobro o mesmo que uma colega que vi no Instagram. No fim do mês, trabalhei muito e quase não sobrou nada.',
          q:'Qual é o melhor caminho para ela?',
          opts:[
            {t:'Calcular as horas reais de cada trabalho, incluindo revisões e mensagens, somar os custos e uma margem, e então comparar com o mercado.', ok:true, why:'Com a conta feita, ela sabe quanto precisa cobrar para o trabalho valer a pena, em vez de depender do preço de outra pessoa.'},
            {t:'Baixar ainda mais o preço para conseguir mais clientes e compensar no volume.', ok:false, why:'Sem saber o custo, mais clientes com preço baixo pode significar mais trabalho e ainda menos sobra.'},
            {t:'Copiar o preço de outra colega, que parece cobrar mais.', ok:false, why:'Trocar de referência sem fazer a própria conta repete o mesmo erro com outro número.'}
          ]},
        { who:'Seu Jorge, dono de uma oficina', says:'Pedi orçamento de um sistema de agendamento e recebi só "fica 900" no WhatsApp. Não entendi o que eu ia receber.',
          q:'Como o profissional deveria ter apresentado o preço?',
          opts:[
            {t:'Mandar um áudio de 8 minutos explicando tudo, sem nada escrito.', ok:false, why:'Áudio longo é difícil de rever e não deixa registro claro do que foi combinado.'},
            {t:'Mandar a proposta organizada por escrito, ligando o preço ao problema, com o que inclui, prazo e revisões, e se oferecer para explicar numa conversa rápida.', ok:true, why:'Texto organizado mostra o valor do serviço e deixa tudo registrado; a conversa tira dúvidas sem substituir o escrito.'},
            {t:'Dar um desconto para compensar a falta de explicação.', ok:false, why:'O problema era clareza, não preço. Desconto não explica o que o cliente vai receber.'}
          ]},
        { who:'Beatriz, 32 anos, faz sites para clínicas de fisioterapia', says:'A dona da clínica perguntou o preço logo na primeira mensagem, antes de me contar qualquer coisa sobre a clínica.',
          q:'Qual é a resposta mais adequada?',
          opts:[
            {t:'Dar um preço qualquer na hora, para não perder o contato.', ok:false, why:'Um preço sem diagnóstico pode ficar muito acima ou muito abaixo do necessário e gerar problemas depois.'},
            {t:'Ignorar a pergunta e mandar o portfólio.', ok:false, why:'Fugir da pergunta passa a impressão de que ela esconde o preço.'},
            {t:'Dar uma faixa aproximada dos trabalhos que costuma fazer e propor uma conversa curta para entender a clínica e montar uma proposta certa.', ok:true, why:'A faixa responde com transparência, e a conversa permite um preço ligado ao que a clínica realmente precisa.'}
          ]}
      ]},
    { id:'2.6', title:'Projeto: proposta com 2 a 3 opções para um cliente do seu nicho', min:30,
      body:[
        `<div class="card"><p>Neste projeto você escreve uma proposta de verdade, para um cliente real da sua lista ou um cliente hipotético bem parecido com quem você quer atender. A ideia não é copiar um modelo: é aplicar o que você aprendeu (problema com as palavras do cliente, opções claras, o que não está incluído, validade, limite de negociação e combinado escrito) ao seu próprio serviço.</p></div>`
      ],
      projeto: {
        entrega: 'Uma proposta de 1 página com 2 ou 3 opções para um cliente do seu nicho, mais o combinado escrito e o seu plano de negociação.',
        passos: [
          'Descreva o cliente e o problema dele com as palavras que ele usou (ou usaria) numa conversa de diagnóstico.',
          'Faça a conta de cada opção (horas reais, valor da hora, custos e margem) e defina o preço da proposta, o seu mínimo e as contrapartidas que aceitaria em troca de desconto.',
          'Monte de 2 a 3 opções em tabela, com o que inclui, o que não inclui, prazo, revisões e preço, e escolha como vai apresentar (mensagem, áudio curto ou reunião) e por quê.',
          'Escreva o resumo do combinado com escopo, prazo, sinal, revisões, mudanças, cancelamento e o pedido de aceite.',
          'Planeje o que fará se ouvir "vou pensar" ou não tiver resposta: datas de retomada, validade e mensagem de encerramento, com suas palavras.'
        ],
        checklist: [
          'A proposta começa pelo problema do cliente, não pelo seu currículo.',
          'Cada opção deixa claro o que não está incluído e quantas revisões tem.',
          'A proposta tem validade honesta e nenhuma promessa de resultado ou ganho.',
          'O combinado só permite começar depois do aceite por escrito e do sinal confirmado no banco.',
          'Cada preço tem a conta por trás (horas, custos e margem) e um limite mínimo definido antes de negociar.'
        ],
        minimo: 380
      } }
  ]},
  { id:3, icon:'✅', title:'Atender', sub:'Entregar, cobrar, cuidar e manter clientes', lessons:[
    { id:'3.1', title:'Entrega, aceite e cobrança educada', min:10,
      body:[
        `<div class="card analogy"><h3>✅ A nota de entrega do motoboy</h3><p>Quem recebe assina, e as duas partes ficam tranquilas. Nada de "eu não recebi" ou "você não entregou". O aceite é a sua assinatura digital.</p></div>`,
        `<div class="term"><b>Aceite</b> = confirmação do cliente de que recebeu e aprovou a entrega. <b>Sinal</b> = parte do pagamento feita antes de começar, combinada por escrito. <b>Cobrança educada</b> = lembrete respeitoso de pagamento, sem constrangimento. <b>Meio rastreável</b> = forma de pagamento que deixa registro, como Pix, transferência ou boleto.</div>`,
        `<div class="card"><h3>Do combinado ao pagamento</h3><ol class="golden"><li><span>Combinado escrito: escopo, prazo, preço e revisões.</span></li><li><span>Sinal: ajuda a formalizar o início, e deve ser combinado por escrito.</span></li><li><span>Entregue com checklist e peça o aceite por escrito, como "recebi e aprovei".</span></li><li><span>Pagamento: confirme no banco e use meios rastreáveis.</span></li><li><span>Cobrança educada: lembrete antes do vencimento, outro no dia e uma mensagem firme e cordial após o atraso, nunca expondo o cliente publicamente.</span></li><li><span>Guarde conversas e comprovantes.</span></li></ol>
          <p>Para valores altos, busque orientação jurídica ou contábil.</p></div>`,
        `<div class="card"><h3>Como fazer uma boa entrega</h3><p>Entregar não é só mandar o arquivo. Uma boa entrega tem três partes:</p><ol class="golden"><li><span><b>O que foi entregue:</b> uma lista conferida com o combinado ("os 5 vídeos, em formato vertical, com legenda").</span></li><li><span><b>Como usar:</b> instruções simples, como onde clicar, como acessar a agenda ou como trocar uma foto.</span></li><li><span><b>O pedido de aceite:</b> "Pode conferir e me responder se está aprovado? Se precisar de ajuste dentro das 2 revisões combinadas, é só me dizer."</span></li></ol><p>Se o cliente não responder, retome depois de alguns dias. Se o combinado previa aceite automático após certo prazo sem resposta, lembre essa regra com gentileza.</p></div>`,
        `<div class="card"><h3>As três etapas da cobrança educada</h3><div class="tw"><table class="tbl"><tr><th>Etapa</th><th>Quando</th><th>Tom</th></tr><tr><td>1. Lembrete</td><td>2 ou 3 dias antes do vencimento</td><td>Leve, informativo: data, valor e forma de pagamento.</td></tr><tr><td>2. No dia</td><td>Data do vencimento</td><td>Cordial: "hoje vence, segue o Pix para facilitar".</td></tr><tr><td>3. Após o atraso</td><td>Alguns dias depois</td><td>Firme e respeitoso: cita o combinado, pergunta se houve algum problema e propõe uma nova data.</td></tr></table></div><p>Se ainda assim não resolver, converse por telefone, proponha parcelar e, em último caso, busque orientação adequada. Exposição pública nunca é caminho.</p></div>`,
        `<div class="card"><h3>Guarde tudo</h3><p>Crie uma pasta por cliente com a proposta, o combinado aceito, os comprovantes, a entrega e o aceite. Leva cinco minutos e evita semanas de dor de cabeça. Se você emite nota fiscal, junte também a nota (o curso de formalização trata disso).</p></div>`,
        `<div class="why-chain"><b>Por que pedir o aceite?</b> Porque sem ele a entrega fica "em aberto" para sempre. Por que isso atrapalha? Porque o cliente pode pedir ajustes indefinidamente ou adiar o pagamento dizendo que não aprovou. E por que o aceite resolve? Porque marca o fim da etapa, libera a cobrança do restante e deixa claro que novos pedidos são outro trabalho.</div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a gente assina quando recebe uma encomenda.</div>`
      ],
      ch:[
        { who:'Rodrigo, 32 anos, tem um cliente que atrasou o pagamento', says:'O cliente atrasou e eu vou postar o nome dele nos stories para ele pagar de vergonha.',
          q:'Qual é a melhor atitude?',
          opts:[
            {t:'Postar nos stories, para pressionar.', ok:false, why:'Expor o cliente publicamente é constrangedor e pode gerar problemas legais para você.'},
            {t:'Esquecer a dívida, para evitar conflito.', ok:false, why:'Trabalho entregue merece pagamento. Esquecer ensina o cliente a não pagar.'},
            {t:'Enviar um lembrete educado, depois uma mensagem firme e cordial citando o combinado, sem expor o cliente e, se não resolver, buscar orientação adequada.', ok:true, why:'A cobrança respeitosa e documentada resolve a maioria dos casos e protege a sua reputação.'}
          ]},
        { who:'Patrícia, 29 anos, monta cardápios digitais', says:'Mandei o arquivo para a lanchonete e pronto. Duas semanas depois, o dono disse que nunca aprovou e não quer pagar o restante.',
          q:'O que faltou na entrega?',
          opts:[
            {t:'Uma entrega com a lista do que foi feito, instruções de uso e um pedido explícito de aceite por escrito.', ok:true, why:'O aceite registrado encerra a etapa de entrega e dá base para cobrar o restante.'},
            {t:'Mandar o arquivo em mais formatos.', ok:false, why:'O formato não era o problema. Faltou a confirmação de que o cliente recebeu e aprovou.'},
            {t:'Esperar o cliente se manifestar, sem perguntar nada.', ok:false, why:'Esperar em silêncio deixa a entrega sem registro e abre espaço para o conflito.'}
          ]},
        { who:'Eduardo, 34 anos, faz manutenção de sites para uma clínica', says:'O pagamento da clínica vence sexta. Nunca sei se mando lembrete antes ou se espero atrasar.',
          q:'Qual é a melhor prática?',
          opts:[
            {t:'Esperar atrasar uma semana e mandar uma cobrança dura.', ok:false, why:'Esperar o atraso e começar já duro cria atrito desnecessário.'},
            {t:'Mandar um lembrete leve dois ou três dias antes, outro no dia do vencimento e só após atraso uma mensagem firme e cordial.', ok:true, why:'A sequência em três etapas ajuda o cliente a se organizar e mantém o tom respeitoso.'},
            {t:'Ligar todo dia da semana até sexta para lembrar.', ok:false, why:'Contatos diários antes do vencimento soam como desconfiança e incomodam.'}
          ]}
      ]},
    { id:'3.2', title:'Pós-venda, indicações e checklist', min:10,
      body:[
        `<div class="card analogy"><h3>🌱 O padeiro que lembra do seu pão</h3><p>O padeiro que lembra do seu nome e do que você gosta faz você voltar e indicar a padaria. O pós-venda cria essa relação.</p></div>`,
        `<div class="term"><b>Pós-venda</b> = o cuidado com o cliente depois da entrega. <b>Indicação</b> = recomendação do seu trabalho a outra pessoa. <b>Cliente recorrente</b> = quem contrata você mais de uma vez. <b>Depoimento</b> = relato do cliente sobre a experiência, publicado só com autorização dele.</div>`,
        `<div class="card"><h3>Depois da entrega</h3><ol class="golden"><li><span>Pergunte, em cerca de 7 dias, se está funcionando e ofereça um pequeno ajuste.</span></li><li><span>Peça um depoimento, com autorização.</span></li><li><span>Peça indicação sem pressão: "conhece alguém que também precisa?"</span></li><li><span>Guarde o contato, com permissão, para lembrar de renovações.</span></li><li><span>Ofereça manutenção ou mensalidade quando fizer sentido.</span></li><li><span>Registre o que aprendeu.</span></li></ol></div>`,
        `<div class="card"><h3>Como pedir um depoimento útil</h3><p>"Pode me dizer o que achou?" gera respostas vagas como "ficou ótimo". Faça perguntas que ajudem o cliente a contar a história:</p><ul><li>Como era antes do serviço?</li><li>O que mudou no dia a dia?</li><li>O que você diria para alguém em dúvida se contrata?</li></ul><p>Peça autorização explícita para publicar, com nome e foto ou de forma anônima, e mostre o texto final antes. Nunca invente depoimento nem "melhore" a fala do cliente com números que ele não disse.</p></div>`,
        `<div class="card"><h3>Como pedir indicação sem constranger</h3><div class="flows"><div class="flow old"><b>Pedido que constrange</b><p>"Me passa o contato de 10 amigos seus?"</p></div><div class="flow new"><b>Pedido que funciona</b><p>"Se você conhecer outro dono de pet shop com a mesma dificuldade, pode passar meu contato para ele? Assim ele me procura se quiser."</p></div></div><p>Repare: quem decide procurar é o indicado. Isso respeita a privacidade e gera contatos mais interessados.</p></div>`,
        `<div class="card"><h3>Registre o que aprendeu</h3><p>Ao fim de cada trabalho, anote em três linhas: o que funcionou, o que deu trabalho a mais e o que você mudaria no próximo combinado. Depois de três ou quatro clientes, essas anotações mostram padrões (por exemplo, "sempre atrasam as fotos") que você corrige na proposta seguinte.</p></div>`,
        `<div class="card"><h3>Checklist "estou pronto para cobrar?"</h3><p>Roteiro de conversa, proposta, combinado escrito, aceite, confirmação de pagamento no banco, cobrança educada, pós-venda e nenhuma promessa de ganho. Se faltar algum item, volte à lição correspondente antes de atender o próximo cliente.</p><p><b>Para fechar o curso:</b> no projeto 3.6 você vai escrever o seu kit de mensagens de atendimento, do aceite ao pós-venda. Concluindo todas as lições e projetos, você recebe o certificado do curso. Guarde também as mensagens e modelos que escreveu nos projetos 1.6 e 2.6: juntos, eles formam o seu processo de atendimento.</p>
          <p><b>Próximo passo:</b> o curso "Formalizando: MEI e Organização Financeira".</p>
          <p>⚠️ Este curso não garante renda: ele ensina a atender com profissionalismo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, por que lembrar do cliente depois da entrega ajuda a ter novos clientes.</div>`
      ],
      ch:[
        { who:'Luana, 29 anos, entregou seu primeiro trabalho', says:'Entreguei, recebi e nunca mais falei com o cliente. Para que insistir?',
          q:'Qual é a melhor prática?',
          opts:[
            {t:'Perguntar alguns dias depois se está funcionando, pedir depoimento e indicação sem pressão e registrar o que aprendeu.', ok:true, why:'O pós-venda mostra cuidado, gera depoimentos e indicações e melhora seus próximos serviços.'},
            {t:'Não falar mais, porque o trabalho já acabou.', ok:false, why:'Sem contato, ela perde depoimentos, indicações e a chance de o cliente voltar.'},
            {t:'Mandar mensagens todos os dias pedindo indicação.', ok:false, why:'Insistir demais incomoda. O pedido deve ser educado e sem pressão.'}
          ]},
        { who:'Fernanda, 33 anos, organiza a agenda online de uma clínica de fisioterapia', says:'A dona da clínica disse "ficou ótimo". Quero publicar como depoimento e acrescentar que ela "dobrou os atendimentos".',
          q:'O que Fernanda deve fazer?',
          opts:[
            {t:'Publicar com o acréscimo, porque deixa o depoimento mais forte.', ok:false, why:'Acrescentar resultados que a cliente não disse é enganoso e pode virar problema sério.'},
            {t:'Fazer perguntas sobre como era antes e o que mudou, montar o texto com as palavras da cliente e publicar só com autorização dela.', ok:true, why:'Depoimento verdadeiro, com autorização, gera confiança e protege as duas partes.'},
            {t:'Publicar "ficou ótimo" sem pedir autorização, já que ela falou isso.', ok:false, why:'Mesmo uma frase curta precisa de autorização para ser publicada com o nome da cliente.'}
          ]},
        { who:'Marcelo, 37 anos, faz sistemas de pedidos para lanchonetes', says:'Quero pedir indicações para um cliente satisfeito, mas não sei como fazer sem parecer que estou implorando.',
          q:'Qual é a forma mais adequada?',
          opts:[
            {t:'Pedir que ele envie a lista de contatos de todos os donos de lanchonete que conhece.', ok:false, why:'Pedir dados de terceiros constrange o cliente e desrespeita a privacidade dessas pessoas.'},
            {t:'Oferecer desconto em troca de 10 contatos de telefone.', ok:false, why:'Trocar desconto por dados de terceiros sem consentimento é inadequado e pode ferir a LGPD.'},
            {t:'Perguntar se ele conhece alguém com a mesma dificuldade e, se sim, pedir que passe o seu contato para que a pessoa procure se quiser.', ok:true, why:'Assim o indicado decide procurar, o cliente não se sente pressionado e a privacidade é respeitada.'}
          ]}
      ]},
    { id:'3.3', title:'Atender bem durante o projeto', min:10,
      body:[
        `<div class="card analogy"><h3>🧱 A obra com placa de andamento</h3><p>Numa obra bem conduzida, o dono sabe o que foi feito na semana, o que vem a seguir e o que mudou. Quando o mestre de obras some, o dono imagina o pior, mesmo que tudo esteja indo bem. Atender durante o projeto é colocar essa placa de andamento: o cliente nunca precisa perguntar "e aí, como está?".</p></div>`,
        `<div class="term"><b>Atualização de status</b> = mensagem curta sobre o que foi feito, o que vem a seguir e o que você precisa do cliente. <b>Mudança de escopo</b> = pedido que não estava no combinado. <b>Aditivo</b> = acréscimo ao combinado, por escrito, com novo preço e prazo. <b>Dependência</b> = algo que o cliente precisa entregar para você continuar.</div>`,
        `<div class="card"><h3>A rotina de comunicação</h3><ol class="golden"><li><span><b>Combine o canal e o ritmo no início:</b> "Vou te mandar uma atualização toda sexta pelo WhatsApp."</span></li><li><span><b>Use sempre o mesmo formato:</b> feito, próximo passo, preciso de você.</span></li><li><span><b>Avise problemas cedo:</b> atraso comunicado antes do prazo é contratempo; comunicado depois é quebra de confiança.</span></li><li><span><b>Combine horários:</b> diga quando você responde, para não virar atendimento 24 horas.</span></li></ol></div>`,
        `<div class="card"><h3>Exemplo de atualização para uma confeitaria</h3><p><b>Feito:</b> cardápio digital com os 20 bolos e preços conferidos. <b>Próximo passo:</b> configurar o link de pedidos até quarta. <b>Preciso de você:</b> fotos dos 5 bolos mais vendidos até segunda; sem elas, a entrega passa para sexta.</p><p>Repare que a dependência e o efeito no prazo ficam escritos. Se as fotos atrasarem, ninguém se surpreende.</p></div>`,
        `<div class="card"><h3>Quando o cliente pede algo novo</h3><div class="flows"><div class="flow old"><b>Jeito que gera prejuízo</b><p>"Ah, tudo bem, faço rapidinho." Repetido cinco vezes, o projeto dobra de tamanho pelo mesmo preço, e o prazo original estoura.</p></div><div class="flow new"><b>Jeito profissional</b><p>"Boa ideia! Isso não estava no combinado. Posso te mandar um orçamento à parte com valor e prazo, e você decide se entra agora ou depois da entrega."</p></div></div><p>Depois que o cliente aprovar, registre o aditivo por escrito: o que entra, quanto custa, como muda o prazo e o "de acordo" dele.</p></div>`,
        `<div class="card"><h3>Pequenos ajustes x mudanças de escopo</h3><div class="tw"><table class="tbl"><tr><th>Pequeno ajuste (dentro das revisões)</th><th>Mudança de escopo (aditivo)</th></tr><tr><td>Trocar uma cor ou uma palavra</td><td>Criar mais 3 páginas no site</td></tr><tr><td>Corrigir um preço no cardápio</td><td>Incluir fotos que não estavam previstas</td></tr><tr><td>Mudar a ordem de dois itens</td><td>Atender mais uma unidade da loja</td></tr></table></div><p>Na dúvida, pergunte: "isso aumenta meu tempo de trabalho de forma relevante?". Se sim, é aditivo.</p></div>`,
        `<div class="why-chain"><b>Por que avisar cedo?</b> Porque o cliente também tem planos que dependem da sua entrega. Por que isso importa? Porque um atraso avisado com antecedência ele consegue contornar; um atraso descoberto no dia, não. E por que isso gera indicações? Porque o cliente lembra menos do contratempo e mais de como você lidou com ele.</div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que é bom que o dono da obra saiba o que foi feito a cada semana.</div>`
      ],
      ch:[
        { who:'Sabrina, 27 anos, faz o site de um pet shop', says:'Estou fazendo o site há três semanas e não mandei notícia. O dono me mandou "desistiu do projeto?".',
          q:'O que teria evitado a desconfiança do cliente?',
          opts:[
            {t:'Combinar no início uma atualização semanal com o que foi feito, o próximo passo e o que ela precisa dele.', ok:true, why:'Atualizações regulares mostram progresso e evitam que o cliente imagine o pior.'},
            {t:'Trabalhar mais rápido para terminar antes de o cliente perguntar.', ok:false, why:'Velocidade ajuda, mas o problema foi o silêncio. Sem notícia, até um projeto adiantado parece parado.'},
            {t:'Responder só quando o cliente perguntar, para não incomodar.', ok:false, why:'Esperar a pergunta deixa o cliente ansioso e passa sensação de descaso.'}
          ]},
        { who:'Ricardo, dono de uma padaria', says:'No meio do projeto do cardápio digital, pedi para incluir também um sistema de encomendas de bolos.',
          q:'Como o profissional deve responder?',
          opts:[
            {t:'Fazer sem cobrar, para agradar o cliente.', ok:false, why:'Absorver um acréscimo grande sem cobrar gera prejuízo e atraso no que já estava combinado.'},
            {t:'Recusar, dizendo que não estava no combinado e encerrar o assunto.', ok:false, why:'Recusar seco perde uma oportunidade de trabalho e passa rigidez.'},
            {t:'Dizer que é uma boa ideia, explicar que fica fora do combinado e enviar um orçamento à parte com valor e prazo para ele decidir.', ok:true, why:'Tratar como aditivo protege o projeto original e transforma o pedido em mais trabalho remunerado.'}
          ]},
        { who:'Bianca, 31 anos, faz a identidade visual de uma loja de roupas', says:'Vou atrasar dois dias a entrega porque fiquei doente. A entrega é amanhã e ainda não avisei a cliente.',
          q:'Qual é a melhor atitude?',
          opts:[
            {t:'Entregar com dois dias de atraso sem avisar e pedir desculpas depois.', ok:false, why:'Atraso não comunicado quebra a confiança muito mais do que o próprio atraso.'},
            {t:'Avisar hoje, explicar o motivo com brevidade, propor a nova data e dizer o que já está pronto.', ok:true, why:'Avisar antes do prazo, com uma nova data, mostra responsabilidade e permite que a cliente se organize.'},
            {t:'Entregar amanhã algo incompleto para cumprir o prazo a qualquer custo.', ok:false, why:'Entregar um trabalho mal feito só para cumprir o prazo prejudica a qualidade e a reputação.'}
          ]}
      ]},
    { id:'3.4', title:'Cliente recorrente e manutenção', min:10,
      body:[
        `<div class="card analogy"><h3>💈 A barbearia do corte a cada 20 dias</h3><p>O bom barbeiro não depende de cliente novo todo dia: boa parte da agenda é de quem volta a cada 20 dias. Ele sabe o corte de cada um e lembra quando está na hora. Cliente recorrente traz previsibilidade, e previsibilidade traz tranquilidade para planejar.</p></div>`,
        `<div class="term"><b>Recorrência</b> = quando o cliente contrata de novo ou de forma contínua. <b>Mensalidade</b> = valor fixo por um serviço contínuo, com escopo definido. <b>Renovação</b> = momento de revisar e continuar o acordo. <b>Cliente que não compensa</b> = aquele cujo custo (tempo, estresse, atrasos) é maior do que o retorno.</div>`,
        `<div class="card"><h3>Quando oferecer manutenção ou mensalidade</h3><p>Ofereça quando o serviço tem continuidade natural: atualizar o cardápio digital quando os preços mudam, publicar posts semanais, manter a agenda online funcionando, fazer relatórios mensais. Ofereça no pós-venda, depois que o cliente viu o resultado da entrega, e nunca como obrigação escondida no meio da proposta.</p></div>`,
        `<div class="card"><h3>O combinado de uma mensalidade</h3><ol class="golden"><li><span><b>O que está incluído por mês</b>, com quantidade: "até 8 posts e 2 atualizações de cardápio".</span></li><li><span><b>O que não está incluído</b> e como é cobrado à parte.</span></li><li><span><b>Prazo de resposta e horários de atendimento.</b></span></li><li><span><b>Data de pagamento e meio rastreável.</b></span></li><li><span><b>Duração e renovação:</b> por exemplo, 3 meses, com conversa de revisão no fim.</span></li><li><span><b>Como cancelar:</b> com quantos dias de aviso, de qualquer lado.</span></li></ol><p>Mensalidade sem limite de quantidade vira trabalho infinito pelo mesmo valor. Para contratos longos ou de valor alto, busque orientação jurídica ou contábil.</p></div>`,
        `<div class="card"><h3>A conversa de renovação</h3><p>Antes de renovar, prepare um resumo honesto do período: o que foi feito, o que funcionou, o que pode melhorar. Pergunte ao cliente o que ele quer para os próximos meses. Se for preciso reajustar o valor, avise com antecedência e explique o motivo (mais volume, custos maiores). Renovação não é automática: é uma nova decisão do cliente, e merece ser tratada assim.</p></div>`,
        `<div class="card"><h3>Saber dizer não</h3><p>Nem todo cliente compensa. Sinais de alerta: atrasa pagamentos com frequência, pede tudo "para ontem", muda o escopo toda semana sem aceitar aditivo, desrespeita seu horário ou sua pessoa. Antes de decidir, tente conversar e reorganizar o combinado. Se nada mudar, encerre com educação: cumpra o que já foi combinado, avise com antecedência, entregue os arquivos e acessos e, se puder, indique outro profissional.</p><div class="why-chain"><b>Por que dizer não ajuda?</b> Porque o tempo gasto com um cliente que não compensa é tempo que falta para quem valoriza seu trabalho. E por que isso importa no começo? Porque é no começo que você está construindo a sua reputação e a sua rotina.</div></div>`,
        `<div class="card"><h3>Cuidado com a dependência</h3><p>Um cliente recorrente grande é ótimo, mas se ele representar quase todo o seu trabalho, você fica vulnerável: se ele cancelar, sua agenda esvazia de uma vez. Mantenha a rotina semanal de novos contatos mesmo quando a agenda estiver cheia.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o barbeiro gosta de clientes que voltam sempre.</div>`
      ],
      ch:[
        { who:'Otávio, 30 anos, entregou um cardápio digital para uma lanchonete', says:'O dono me liga toda semana pedindo para mudar preços. Eu faço de graça, porque ele já é cliente.',
          q:'O que Otávio pode propor?',
          opts:[
            {t:'Continuar de graça, porque cliente antigo não deve pagar por ajustes.', ok:false, why:'Trabalho contínuo sem pagamento consome o tempo dele e não é sustentável.'},
            {t:'Propor uma mensalidade de manutenção com quantidade de atualizações incluídas, prazo de resposta e forma de pagamento definidos.', ok:true, why:'A mensalidade transforma um pedido recorrente em serviço remunerado e organizado para os dois lados.'},
            {t:'Parar de atender o telefone dele sem explicar nada.', ok:false, why:'Sumir sem conversa queima a relação com um cliente que poderia virar recorrente.'}
          ]},
        { who:'Cristina, 36 anos, faz posts mensais para uma clínica odontológica', says:'Meu contrato de 3 meses acaba semana que vem. Vou só continuar mandando a cobrança, a clínica deve renovar.',
          q:'Qual é a melhor forma de conduzir a renovação?',
          opts:[
            {t:'Continuar cobrando automaticamente, sem conversar.', ok:false, why:'Renovar sem conversa pode surpreender o cliente e gerar desconforto ou cancelamento.'},
            {t:'Esperar a clínica perguntar se vai continuar.', ok:false, why:'Deixar a iniciativa com o cliente passa desinteresse e pode resultar no fim do contrato por esquecimento.'},
            {t:'Marcar uma conversa com um resumo do período, ouvir o que a clínica quer a seguir e propor a renovação, avisando com antecedência qualquer reajuste.', ok:true, why:'A renovação é uma nova decisão do cliente. Preparar o resumo e ouvir mostra profissionalismo e aumenta a chance de continuar.'}
          ]},
        { who:'Wagner, 29 anos, atende uma loja de materiais de construção', says:'O cliente atrasa todo mês, muda o pedido toda semana e manda mensagem às 23h. Já tentei conversar duas vezes e nada mudou.',
          q:'O que Wagner pode fazer?',
          opts:[
            {t:'Encerrar com educação: cumprir o que já foi combinado, avisar com antecedência, entregar arquivos e acessos e, se possível, indicar outro profissional.', ok:true, why:'Quando a conversa não resolve, encerrar de forma profissional protege o tempo e a reputação dele.'},
            {t:'Aguentar para sempre, porque perder cliente é ruim.', ok:false, why:'Um cliente que não compensa tira tempo e energia de clientes melhores.'},
            {t:'Parar de responder de repente e reter os arquivos até ele pagar tudo.', ok:false, why:'Sumir e reter o que já foi pago gera conflito e pode trazer problemas legais.'}
          ]}
      ]},
    { id:'3.5', title:'Cliente difícil e reclamações', min:10,
      body:[
        `<div class="card analogy"><h3>🔧 O mecânico e o barulho no carro</h3><p>O cliente volta à oficina bravo: "o barulho continua!". O mau mecânico discute e diz que o carro saiu perfeito. O bom mecânico escuta, dá uma volta com o cliente para ouvir o barulho e só então explica o que é. Às vezes o erro foi da oficina; às vezes é outra peça. Mas a conversa começa ouvindo.</p></div>`,
        `<div class="term"><b>Reclamação</b> = manifestação de insatisfação com o serviço, justa ou não. <b>Escuta ativa</b> = ouvir sem interromper e confirmar que entendeu. <b>Solução proporcional</b> = resposta do tamanho do problema, nem mais nem menos. <b>Limite</b> = o ponto em que um comportamento deixa de ser aceitável, como grosseria ou exigências fora do combinado.</div>`,
        `<div class="card"><h3>Os cinco passos diante de uma reclamação</h3><ol class="golden"><li><span><b>Respire e não responda no impulso.</b> Se a mensagem chegou com raiva, espere alguns minutos antes de escrever.</span></li><li><span><b>Ouça e confirme:</b> "Entendi que o link de pedidos não está aparecendo para os seus clientes, é isso?"</span></li><li><span><b>Verifique os fatos:</b> o combinado escrito, a entrega e o aceite. O problema está no que foi entregue ou é um pedido novo?</span></li><li><span><b>Proponha uma solução e um prazo:</b> se o erro foi seu, assuma e corrija sem custo; se for algo fora do combinado, explique com calma e ofereça orçamento.</span></li><li><span><b>Registre e feche o ciclo:</b> confirme por escrito o que foi feito e pergunte se ficou resolvido.</span></li></ol></div>`,
        `<div class="card"><h3>Erro seu ou pedido novo?</h3><div class="tw"><table class="tbl"><tr><th>Situação</th><th>Como tratar</th></tr><tr><td>O cardápio saiu com preço errado que o cliente tinha enviado certo</td><td>Erro seu: peça desculpas, corrija rápido e sem custo.</td></tr><tr><td>A agenda online parou por falha que você deixou passar</td><td>Erro seu: corrija, explique o que aconteceu e o que fará para não repetir.</td></tr><tr><td>O cliente quer mais páginas que não estavam no combinado</td><td>Pedido novo: reconheça a ideia e ofereça orçamento à parte.</td></tr><tr><td>O cliente esperava "vender o dobro" e isso não aconteceu</td><td>Expectativa fora do combinado: relembre com respeito o que foi entregue e que resultado de vendas nunca foi prometido.</td></tr></table></div><p>Esse último caso mostra por que não prometer resultado é tão importante: a promessa que você não fez é a reclamação que você não recebe.</p></div>`,
        `<div class="card"><h3>Responder bem por escrito</h3><div class="flows"><div class="flow old"><b>Resposta defensiva</b><p>"Eu fiz exatamente o que você pediu. O problema deve ser no seu celular."</p></div><div class="flow new"><b>Resposta profissional</b><p>"Obrigada por avisar. Vou verificar agora e te retorno até as 17h com o que encontrei e como vamos resolver."</p></div></div><p>A segunda resposta não admite culpa antes de verificar, mas mostra que você leva o problema a sério e dá um prazo.</p></div>`,
        `<div class="card"><h3>Quando o cliente passa do limite</h3><p>Reclamar é direito do cliente; humilhar, ameaçar ou ofender, não. Se a conversa ficar agressiva, diga com calma que quer resolver e que vai continuar quando o tom for respeitoso. Nunca responda na mesma moeda, nem exponha o cliente nas redes. Reclamações públicas (por exemplo, um comentário no seu perfil) merecem resposta curta e educada em público, levando os detalhes para o privado. Se a situação envolver valores altos ou ameaças, guarde as conversas e busque orientação jurídica.</p></div>`,
        `<div class="why-chain"><b>Por que tratar bem até a reclamação injusta?</b> Porque outras pessoas observam como você reage. Por que isso importa? Porque uma reclamação bem resolvida costuma gerar mais confiança do que um serviço sem problema nenhum. E por que ouvir primeiro? Porque muitas vezes a raiva vem de um mal-entendido que se desfaz em uma conversa calma.</div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o bom mecânico escuta o barulho do carro antes de discutir com o cliente.</div>`
      ],
      ch:[
        { who:'Kátia, dona de uma confeitaria', says:'O cardápio digital que contratei está com o preço do bolo de pote errado! Meus clientes estão reclamando comigo!',
          q:'Como o profissional deve responder primeiro?',
          opts:[
            {t:'"Você aprovou o cardápio, então o erro é seu."', ok:false, why:'Mesmo que ela tenha aprovado, responder acusando inflama a situação antes de verificar os fatos.'},
            {t:'"Obrigado por avisar. Vou conferir agora o preço que você me enviou e te retorno em uma hora com a correção."', ok:true, why:'Ele acolhe, verifica os fatos e dá um prazo. Se o erro for dele, corrige sem custo; se não, explica com calma.'},
            {t:'Não responder até a cliente se acalmar sozinha.', ok:false, why:'Silêncio diante de um problema que afeta os clientes dela aumenta a irritação e a desconfiança.'}
          ]},
        { who:'Fabrício, 34 anos, fez o perfil profissional de um personal trainer', says:'O cliente reclamou que não ganhou alunos novos em um mês e quer o dinheiro de volta. Eu entreguei tudo o que estava no combinado.',
          q:'Qual é a resposta mais adequada?',
          opts:[
            {t:'Devolver todo o dinheiro para evitar briga.', ok:false, why:'Devolver o valor de um trabalho entregue conforme o combinado gera prejuízo e reforça uma expectativa que nunca foi prometida.'},
            {t:'Bloquear o cliente para encerrar a discussão.', ok:false, why:'Bloquear sem conversa encerra mal a relação e pode virar reclamação pública.'},
            {t:'Ouvir com respeito, relembrar o que foi combinado e entregue, explicar que resultado de alunos nunca foi prometido e, se fizer sentido, sugerir próximos passos possíveis.', ok:true, why:'Ele acolhe a frustração sem assumir uma promessa que não fez, com base no combinado escrito.'}
          ]},
        { who:'Roseli, 40 anos, organiza a agenda de um salão de beleza', says:'A dona do salão começou a me xingar por áudio porque a agenda ficou fora do ar por uma hora.',
          q:'Qual é a melhor atitude de Roseli?',
          opts:[
            {t:'Resolver a falha o quanto antes, informar o que aconteceu e, com calma, dizer que quer continuar ajudando e que a conversa precisa ser respeitosa.', ok:true, why:'Ela resolve o problema real e estabelece um limite sem responder na mesma moeda.'},
            {t:'Mandar um áudio xingando de volta, para se defender.', ok:false, why:'Responder na mesma moeda transforma um problema técnico em uma briga pessoal e pode encerrar a relação de forma ruim.'},
            {t:'Postar o áudio nas redes para mostrar como a cliente é grossa.', ok:false, why:'Expor o cliente publicamente é antiético, pode gerar problemas legais e prejudica a reputação de Roseli.'}
          ]}
      ]},
    { id:'3.6', title:'Projeto: seu kit de mensagens de atendimento', min:30,
      body:[
        `<div class="card"><p>Quem atende bem não improvisa as mensagens importantes a cada cliente. Neste projeto você escreve, com as suas palavras e para o seu nicho, o kit de mensagens que vai usar depois que o cliente fecha: atualização, mudança de escopo, pedido de aceite, cobrança educada em três etapas, resposta a reclamação e pós-venda. Pense em um cliente real ou hipotético para dar contexto a cada mensagem.</p></div>`
      ],
      projeto: {
        entrega: 'Um kit com a mensagem de entrega e pedido de aceite, três mensagens de cobrança educada e a mensagem de pós-venda com pedido de depoimento e indicação.',
        passos: [
          'Escreva a mensagem de entrega com a lista do que foi entregue, instruções de uso e o pedido de aceite por escrito, citando as revisões combinadas.',
          'Escreva as três mensagens de cobrança: lembrete antes do vencimento, mensagem no dia e mensagem firme e cordial após o atraso, citando o combinado.',
          'Escreva a mensagem de pós-venda para cerca de 7 dias depois, com as perguntas de depoimento e o pedido de indicação sem pressão.',
          'Escreva a mensagem de atualização semanal (feito, próximo passo, preciso de você), a resposta para um pedido fora do escopo e a primeira resposta a uma reclamação.',
          'Releia tudo em voz alta e ajuste o tom: deve soar como você conversando, sem ameaças e sem promessas.'
        ],
        checklist: [
          'A mensagem de entrega pede um aceite explícito por escrito.',
          'Nenhuma mensagem de cobrança expõe ou ameaça o cliente, e a terceira cita o combinado e propõe uma nova data.',
          'O pedido de depoimento inclui autorização para publicar, e o pedido de indicação não pede dados de terceiros.',
          'A resposta a pedidos fora do escopo oferece orçamento à parte em vez de aceitar ou recusar sem conversa.',
          'A resposta a reclamação acolhe, promete verificar com prazo e não acusa o cliente nem admite culpa antes de conferir os fatos.'
        ],
        minimo: 380
      } }
  ]}
];

const MODDONE = {
  1: 'Você sabe onde procurar os primeiros clientes, cuidar da sua presença profissional, escrever um primeiro contato respeitoso, conduzir a conversa ouvindo antes de oferecer e organizar o follow-up sem insistir.',
  2: 'Você sabe calcular e apresentar o preço, montar propostas claras, negociar sem perder o valor do seu trabalho, lidar com o "vou pensar" e fechar com combinado escrito.',
  3: 'Parabéns, você concluiu o curso Primeiros Clientes! Você sabe atender durante o projeto, entregar com aceite, cobrar com educação, lidar com reclamações, cuidar do pós-venda e construir clientes recorrentes. Seu certificado do curso já está disponível. Lembre: o curso não garante renda; ele ensina a atender com profissionalismo.'
};

const PROMPTS = {
  1: [
    { title:'Roteiro de primeira conversa', desc:'Para ouvir antes de oferecer.' },
    { title:'Revisão da mensagem de primeiro contato', desc:'Para pedir à IA que aponte sinais de spam e falta de opção de recusa na mensagem que você escreveu.' }
  ],
  2: [
    { title:'Proposta com 3 opções', desc:'Para montar uma proposta clara.' },
    { title:'Simulação de objeções', desc:'Para treinar com a IA respostas às objeções do seu nicho, com você escrevendo as respostas.' }
  ],
  3: [
    { title:'Cobrança educada', desc:'Para lembrar o pagamento com respeito.' },
    { title:'Resposta a mudança de escopo', desc:'Para revisar como você responde a um pedido fora do combinado.' }
  ]
};

const THEME = { 1:['#10B981','#84CC16'], 2:['#84CC16','#10B981'], 3:['#10B981','#84CC16'] };
const LIC = {
  '1.1':'🔎','1.2':'👂','1.3':'🚪','1.4':'🌾','1.5':'🪧','1.6':'📋',
  '2.1':'📄','2.2':'🤝','2.3':'⏳','2.4':'📝','2.5':'🧁','2.6':'🧾',
  '3.1':'✅','3.2':'🌱','3.3':'🧱','3.4':'💈','3.5':'🔧','3.6':'💬'
};

return {
  id: 'primeiros-clientes',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
