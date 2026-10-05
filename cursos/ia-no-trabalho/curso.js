/* Curso: IA no Trabalho e no Dia a Dia (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'✉️', title:'Textos e comunicação', sub:'Escrever melhor em menos tempo', lessons:[
    { id:'1.1', title:'E-mails e mensagens em minutos', min:8,
      body:[
        `<div class="card analogy"><h3>✉️ O assistente que prepara o rascunho</h3><p>Um bom assistente deixa o e-mail quase pronto na sua mesa, e você só lê, ajusta e assina. A IA faz esse papel: ela escreve o primeiro rascunho, mas <b>a assinatura e a responsabilidade continuam sendo suas</b>.</p></div>`,
        `<div class="term"><b>Rascunho</b> = primeira versão de um texto, ainda para revisar. <b>Tom</b> = jeito de falar do texto, como formal, amigável ou firme. <b>Revisão</b> = ler, corrigir e ajustar antes de enviar.</div>`,
        `<div class="card"><h3>Do pedido ao envio em 4 passos</h3>
          <ol class="golden"><li><span>Diga a <b>situação e o objetivo</b> ("cobrar um pagamento atrasado de forma educada").</span></li><li><span>Informe <b>para quem é</b> e o <b>tom</b>.</span></li><li><span>Peça <b>2 versões</b>, uma curta e uma completa.</span></li><li><span><b>Leia tudo</b>, confira nomes, valores, datas e prazos, e só então envie.</span></li></ol>
          <p>Exemplo de situação bem descrita: um cliente com 10 dias de atraso numa fatura, tom educado e firme, até 6 linhas, pedindo uma nova data de pagamento.</p>
          <p>⚠️ Atenção: não cole dados sensíveis de clientes; use "Cliente A" e troque pelos dados reais depois.</p></div>`,
        `<div class="card"><h3>📱 E-mail não é WhatsApp</h3><div class="tw"><table class="tbl"><tr><th>Canal</th><th>O que pedir à IA</th></tr>
          <tr><td>E-mail</td><td>Assunto claro, saudação, 1 ideia por parágrafo, pedido explícito no final.</td></tr>
          <tr><td>WhatsApp</td><td>Mensagem curta, frases de 1 linha, sem formalidade excessiva, pergunta direta.</td></tr>
          <tr><td>Mensagem interna</td><td>Direto ao ponto: o que precisa, até quando e quem responde.</td></tr></table></div>
          <p>Diga o canal no pedido. Um e-mail formal colado no WhatsApp parece frio; uma mensagem de WhatsApp num e-mail para a diretoria parece descuidada.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o assistente prepara o rascunho, mas quem assina é você.</div>`
      ],
      ch:[
        { who:'Cláudia, 39 anos, auxiliar financeira', says:'A IA escreveu um e-mail de cobrança ótimo. Vou enviar agora mesmo, sem ler, para ganhar tempo.',
          q:'Qual é a melhor atitude?',
          opts:[
            {t:'Enviar direto: se o texto está bem escrito, está correto.', ok:false, why:'Texto bem escrito pode ter valor, data ou nome errados. Quem envia responde pelo conteúdo.'},
            {t:'Ler, conferir valores, datas e nomes, ajustar o tom se precisar, e só então enviar.', ok:true, why:'A IA acelera o rascunho, e a conferência protege você e o cliente de erros.'},
            {t:'Escrever tudo sozinha de novo, porque IA não serve para e-mail.', ok:false, why:'A IA serve muito bem para o primeiro rascunho. O cuidado é revisar, não abandonar a ferramenta.'}
          ]},
        { who:'Anderson, 34 anos, técnico de manutenção de ar-condicionado', says:'Pedi à IA uma mensagem para confirmar a visita do cliente e veio um e-mail enorme, com "Prezado Senhor" e tudo. É para mandar no WhatsApp.',
          q:'O que faltou no pedido?',
          opts:[
            {t:'Dizer o canal e o tamanho: mensagem curta de WhatsApp, tom simpático, com data, horário e pedido de confirmação.', ok:true, why:'Sem o canal, a IA escolhe um formato padrão. Dizendo que é WhatsApp, ela ajusta tamanho e tom.'},
            {t:'Pedir um texto ainda mais formal, para passar seriedade.', ok:false, why:'No WhatsApp, formalidade excessiva soa estranha. O problema foi justamente o formato errado.'},
            {t:'Nada: o cliente deve se acostumar com mensagens longas.', ok:false, why:'Mensagem longa no WhatsApp costuma não ser lida. Ajustar ao canal aumenta a chance de resposta.'}
          ]},
        { who:'Priscila, 30 anos, secretária de uma clínica odontológica', says:'Quero que a IA escreva o lembrete de consulta. Vou colar a agenda do dia com nomes e telefones dos pacientes.',
          q:'Qual é o jeito seguro de fazer?',
          opts:[
            {t:'Colar a agenda inteira, para a IA personalizar cada lembrete.', ok:false, why:'Nomes e telefones de pacientes são dados pessoais ligados à saúde. Não precisam ir para a IA.'},
            {t:'Pedir um modelo de lembrete com [NOME], [DATA] e [HORÁRIO] e preencher os dados reais fora da IA.', ok:true, why:'O modelo com variáveis resolve a tarefa sem expor nenhum paciente.'},
            {t:'Colar só os telefones, sem os nomes.', ok:false, why:'Telefone também identifica a pessoa. O certo é não enviar dados pessoais.'}
          ]}
      ]},
    { id:'1.2', title:'Resumir reuniões e documentos longos', min:8,
      body:[
        `<div class="card analogy"><h3>📝 O colega que foi na reunião por você</h3><p>Imagine um colega que assistiu à reunião inteira e te conta em 2 minutos o que decidiram, quem ficou com o quê e para quando. A IA pode ser esse colega, <b>desde que você dê a ela o material certo</b>.</p></div>`,
        `<div class="term"><b>Resumo</b> = versão curta com o essencial de um texto. <b>Ata</b> = registro do que foi decidido numa reunião. <b>Ação</b> = tarefa com responsável e prazo.</div>`,
        `<div class="card"><h3>Resumo que serve para agir</h3><p>Peça sempre três coisas:</p>
          <ol class="golden"><li><span>As <b>decisões</b> tomadas.</span></li><li><span>As <b>ações</b>, com responsável e prazo.</span></li><li><span>As <b>dúvidas em aberto</b>.</span></li></ol>
          <p>E inclua uma regra de fidelidade: se alguma informação estiver faltando, a IA deve escrever "não informado" em vez de inventar.</p>
          <p>Essa regra evita que a IA complete lacunas com palpite.</p>
          <p>⚠️ Cuidado: documentos confidenciais ou com dados pessoais só devem ir para ferramentas permitidas pela sua empresa. Em dúvida, anonimize ou resuma você mesmo.</p></div>`,
        `<div class="card"><h3>🗒️ Boas anotações, bom resumo</h3><p>A IA só resume o que recebe. Durante a reunião, anote de forma simples: <b>assunto</b>, <b>o que foi decidido</b>, <b>quem fica com o quê</b> e <b>datas citadas</b>. Mesmo anotações bagunçadas servem, desde que tenham esses pontos. Depois, compare o resumo com as anotações: tudo o que aparece no resumo precisa estar nas anotações. O que não estiver, corte.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que é uma ata, e por que uma lista de "quem faz o quê e até quando" ajuda um grupo.</div>`
      ],
      ch:[
        { who:'Rodrigo, 45 anos, coordenador de logística', says:'Colei as anotações da reunião e a IA resumiu, mas incluiu um prazo que ninguém falou.',
          q:'Como evitar isso nas próximas vezes?',
          opts:[
            {t:'Pedir que a IA complete as lacunas com o que for mais provável.', ok:false, why:'Completar com o "mais provável" é exatamente o que gera prazos inventados.'},
            {t:'Parar de resumir reuniões com IA.', ok:false, why:'O resumo continua útil. O ajuste está no pedido e na conferência.'},
            {t:'Pedir "se faltar informação, escreva \'não informado\' e não invente" e conferir o resultado com as anotações.', ok:true, why:'Uma regra clara contra invenção, mais a conferência, mantém o resumo fiel ao que foi dito.'}
          ]},
        { who:'Larissa, 28 anos, analista de projetos', says:'A IA fez um resumo bonito da reunião, mas não dá para saber quem ficou responsável por cada tarefa.',
          q:'O que ela deve pedir na próxima vez?',
          opts:[
            {t:'Um resumo mais longo e detalhado.', ok:false, why:'Mais texto não garante responsáveis. O que falta é o formato orientado a ações.'},
            {t:'Separar decisões, ações com responsável e prazo, e pendências, de preferência em tabela.', ok:true, why:'Um resumo que serve para agir mostra quem faz o quê e até quando, não só o que foi conversado.'},
            {t:'Que a IA escolha os responsáveis que achar melhor.', ok:false, why:'A IA não sabe quem assumiu cada tarefa. Ela inventaria, o que é pior que deixar em branco.'}
          ]},
        { who:'Seu Nelson, 59 anos, presidente de uma associação de moradores', says:'Quero mandar o resumo da assembleia para todos os moradores, mas o documento tem reclamações com nome e número do apartamento.',
          q:'Qual é a atitude mais cuidadosa?',
          opts:[
            {t:'Mandar o resumo como saiu, já que todos estavam na assembleia.', ok:false, why:'Nem todos estavam, e expor nomes em reclamações pode gerar conflito e problema de privacidade.'},
            {t:'Retirar nomes e números de apartamento antes de usar a IA e manter no resumo só decisões e encaminhamentos.', ok:true, why:'Anonimizar protege os moradores, e o resumo continua útil com decisões e próximos passos.'},
            {t:'Não fazer resumo nenhum.', ok:false, why:'O resumo ajuda a associação. Basta cuidar dos dados pessoais.'}
          ]}
      ]},
    { id:'1.3', title:'Tom certo em situações difíceis', min:8,
      body:[
        `<div class="card analogy"><h3>🌡️ O termômetro da conversa</h3><p>Responder a um cliente irritado é como lidar com uma panela fervendo: se você joga mais fogo, transborda. Se abaixa o fogo, a situação se acalma. A IA ajuda a encontrar as palavras para <b>abaixar a temperatura</b> sem perder a firmeza.</p></div>`,
        `<div class="term"><b>Empatia</b> = mostrar que entendeu o sentimento da outra pessoa. <b>Firmeza</b> = manter o que é justo, sem ser grosseiro. <b>Encaminhamento</b> = o próximo passo concreto que você oferece.</div>`,
        `<div class="card"><h3>A estrutura da resposta difícil</h3>
          <ol class="golden"><li><span><b>Reconheça</b> o problema ou o sentimento ("entendo o transtorno").</span></li><li><span><b>Explique</b> o que aconteceu em poucas palavras, sem culpar o cliente.</span></li><li><span><b>Ofereça</b> uma solução ou um próximo passo com prazo.</span></li><li><span><b>Feche</b> com disponibilidade, sem promessas que você não pode cumprir.</span></li></ol>
          <p>Ao pedir para a IA, conte a situação, o que você pode e o que não pode oferecer (troca, desconto, prazo) e o tom desejado: calmo, respeitoso e firme.</p></div>`,
        `<div class="card"><h3>⚠️ Armadilhas comuns</h3><ol class="golden"><li><span><b>Promessas que você não autorizou</b>: a IA pode oferecer reembolso ou desconto por conta própria. Corte o que não pode cumprir.</span></li><li><span><b>Desculpas em excesso</b>: dez pedidos de desculpa soam falsos. Um, sincero, basta.</span></li><li><span><b>Texto de robô</b>: respostas muito genéricas irritam mais. Inclua o detalhe do caso (o pedido, o dia, o produto).</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos como acalmar um amigo bravo sem brigar e sem fazer tudo o que ele quer.</div>`
      ],
      ch:[
        { who:'Jéssica, 31 anos, atende o Instagram de uma loja de calçados', says:'Uma cliente escreveu xingando porque a entrega atrasou 5 dias. Minha vontade é responder no mesmo tom.',
          q:'Qual pedido à IA ajuda mais?',
          opts:[
            {t:'Pedir uma resposta que reconheça o atraso, explique brevemente, informe o novo prazo de entrega e ofereça um canal para acompanhar, em tom calmo e respeitoso.', ok:true, why:'Reconhecer, explicar, oferecer solução e fechar com disponibilidade abaixa a temperatura e resolve o caso.'},
            {t:'Pedir uma resposta firme dizendo que a culpa é dos Correios e não da loja.', ok:false, why:'Transferir a culpa irrita mais a cliente e não resolve o problema dela.'},
            {t:'Não responder até ela se acalmar sozinha.', ok:false, why:'O silêncio costuma piorar a situação, ainda mais em rede social, onde outras pessoas veem.'}
          ]},
        { who:'Marcelo, 46 anos, dono de uma pequena gráfica', says:'A IA escreveu uma resposta ótima para um cliente insatisfeito, mas ofereceu 30% de desconto na próxima compra. Eu não posso dar isso.',
          q:'O que Marcelo deve fazer?',
          opts:[
            {t:'Enviar assim mesmo e depois explicar que foi a IA.', ok:false, why:'Quem assina é ele. Prometer o que não pode cumprir piora a relação com o cliente.'},
            {t:'Retirar o desconto, ajustar para o que ele pode oferecer e, na próxima vez, dizer à IA o que pode e o que não pode prometer.', ok:true, why:'A IA não conhece os limites do negócio. Dizer o que é permitido evita promessas indevidas.'},
            {t:'Desistir de usar IA no atendimento.', ok:false, why:'A resposta estava boa. O ajuste é informar os limites e revisar antes de enviar.'}
          ]},
        { who:'Fernanda, 38 anos, gerente de uma unidade de academia', says:'Preciso avisar os alunos que a mensalidade vai aumentar. Pedi à IA e veio uma mensagem cheia de desculpas, parecendo que fizemos algo errado.',
          q:'Qual ajuste deixa a mensagem melhor?',
          opts:[
            {t:'Pedir ainda mais desculpas, para ninguém reclamar.', ok:false, why:'Desculpas em excesso soam falsas e passam a ideia de que algo errado foi feito.'},
            {t:'Esconder o aumento no meio de um texto longo.', ok:false, why:'Esconder a informação gera desconfiança quando os alunos descobrirem.'},
            {t:'Pedir tom respeitoso e transparente: o novo valor, a partir de quando, um motivo breve e o que continua incluído, com no máximo um agradecimento.', ok:true, why:'Clareza e respeito funcionam melhor que excesso de desculpas. O aluno entende e se sente bem tratado.'}
          ]}
      ]},
    { id:'1.4', title:'Revisar e melhorar textos que você já escreveu', min:8,
      body:[
        `<div class="card analogy"><h3>🪞 O espelho antes de sair de casa</h3><p>Você se arruma, mas dá uma última olhada no espelho e percebe a etiqueta da camisa para fora. A IA pode ser esse espelho para os seus textos: <b>o texto é seu</b>, ela só ajuda a ver o que passou despercebido.</p></div>`,
        `<div class="term"><b>Revisão ortográfica</b> = corrigir erros de escrita e pontuação. <b>Revisão de clareza</b> = deixar o texto mais fácil de entender. <b>Preservar o sentido</b> = melhorar sem mudar o que você quis dizer.</div>`,
        `<div class="card"><h3>Três níveis de revisão</h3>
          <div class="tw"><table class="tbl"><tr><th>Nível</th><th>Quando usar</th><th>O que pedir</th></tr>
          <tr><td>Leve</td><td>O texto está bom, só quer evitar erros</td><td>Corrigir ortografia e pontuação, sem mudar palavras</td></tr>
          <tr><td>Médio</td><td>Está confuso ou longo</td><td>Deixar mais claro e curto, mantendo o sentido e o seu jeito de falar</td></tr>
          <tr><td>Profundo</td><td>Precisa convencer ou é importante</td><td>Apontar problemas primeiro, depois sugerir uma versão</td></tr></table></div>
          <p>Diga qual nível você quer. Sem isso, a IA pode reescrever tudo e o texto deixa de parecer seu.</p></div>`,
        `<div class="card"><h3>✅ Peça para ver as mudanças</h3><p>Peça que a IA <b>liste o que mudou e por quê</b>. Assim você aprende com os próprios erros (vírgula antes de "mas", frases longas demais) e decide o que aceitar. Com o tempo, você passa a escrever melhor sozinho, que é o objetivo. Para textos com dados de clientes ou documentos internos, lembre-se de anonimizar antes.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos a diferença entre corrigir a redação de alguém e escrever a redação no lugar dela.</div>`
      ],
      ch:[
        { who:'Edna, 53 anos, cozinheira que vende marmitas', says:'Escrevi o texto de divulgação das minhas marmitas do meu jeito. Pedi para a IA melhorar e ela mudou tudo, ficou parecendo propaganda de banco.',
          q:'O que Edna deveria ter pedido?',
          opts:[
            {t:'Uma revisão leve ou média: corrigir erros e deixar mais claro, mantendo o jeito dela de falar e o sentido do texto.', ok:true, why:'Dizer o nível de revisão e pedir para preservar o estilo evita que o texto perca a cara da Edna.'},
            {t:'Uma reescrita completa, porque texto profissional vende mais.', ok:false, why:'O jeito simples e próximo dela é parte do charme. Reescrever tudo apagou isso.'},
            {t:'Nada: a IA sempre sabe o que é melhor para o texto.', ok:false, why:'A IA não conhece as clientes da Edna. O estilo dela é uma escolha que só ela pode fazer.'}
          ]},
        { who:'Vinícius, 24 anos, auxiliar administrativo', says:'A IA corrigiu meu relatório, mas eu não sei o que ela mudou. Na próxima vou cometer os mesmos erros.',
          q:'Qual pedido ajuda Vinícius a aprender?',
          opts:[
            {t:'Pedir que a IA corrija sem mostrar nada, para ser mais rápido.', ok:false, why:'É rápido agora, mas ele continua errando sempre e depende da IA para tudo.'},
            {t:'Pedir que ela escreva os próximos relatórios inteiros.', ok:false, why:'Ele deixaria de aprender e passaria a assinar textos que não domina.'},
            {t:'Pedir a lista das mudanças com o motivo de cada uma, e revisar quais aceitar.', ok:true, why:'Ver o que mudou e por quê transforma a revisão numa aula particular sobre os próprios erros.'}
          ]},
        { who:'Sílvia, 41 anos, coordenadora de RH', says:'Tenho um comunicado sobre mudança de horário que vai para 200 funcionários. Quero o máximo de cuidado.',
          q:'Qual nível de revisão combina com esse caso?',
          opts:[
            {t:'Só correção ortográfica, sem olhar mais nada.', ok:false, why:'Num comunicado importante, clareza e possíveis mal-entendidos importam tanto quanto a ortografia.'},
            {t:'Revisão profunda: pedir primeiro que a IA aponte trechos ambíguos e dúvidas que os funcionários podem ter, e depois ajustar.', ok:true, why:'Para textos importantes, apontar problemas antes de reescrever ajuda a prevenir dúvidas e conflitos.'},
            {t:'Mandar como está, porque revisão demora.', ok:false, why:'Um mal-entendido com 200 pessoas custa muito mais tempo do que a revisão.'}
          ]}
      ]},
    { id:'1.5', title:'Divulgação do negócio: posts e status', min:8,
      body:[
        `<div class="card analogy"><h3>📲 A vitrine que muda todo dia</h3><p>A vitrine de uma loja de rua é arrumada para chamar quem passa. Hoje, para muitos negócios, a vitrine é o status do WhatsApp e o perfil nas redes. A IA ajuda a <b>manter essa vitrine viva sem gastar horas</b>, desde que o conteúdo continue verdadeiro e com a sua cara.</p></div>`,
        `<div class="term"><b>Legenda</b> = texto que acompanha a foto ou o vídeo. <b>Chamada para ação</b> = convite claro ao que a pessoa deve fazer, como "chame no WhatsApp". <b>Calendário de conteúdo</b> = lista do que postar em cada dia.</div>`,
        `<div class="card"><h3>Do produto ao post em 4 passos</h3>
          <ol class="golden"><li><span><b>Conte o que você vende</b>, para quem e o que tem de diferente (entrega rápida, receita da avó, atendimento no bairro).</span></li><li><span>Peça <b>ideias de assunto</b> para a semana: bastidores, dúvida de cliente, promoção, depoimento autorizado.</span></li><li><span>Peça <b>legendas curtas</b> no seu tom, com chamada para ação, mostrando 1 ou 2 posts seus como exemplo.</span></li><li><span><b>Revise preços, datas e promessas</b> e use fotos reais do seu produto.</span></li></ol>
          <p>Peça um calendário simples de 1 semana, com o assunto de cada dia, para não travar na hora de postar.</p></div>`,
        `<div class="card"><h3>⚠️ O que não pode faltar (e o que não pode ter)</h3><p>Promoção precisa de regras claras: validade, quantidade e condições, senão vira problema com cliente. Não publique depoimentos ou fotos de clientes sem autorização. Evite prometer resultados que você não garante ("emagreça 10 kg", "cura"), o que pode até violar regras de publicidade. Imagens geradas por IA não devem enganar sobre como o produto é de verdade. E lembre: a constância conta mais que a perfeição. Três posts simples por semana, com a sua voz, rendem mais do que um post perfeito por mês.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a vitrine da loja precisa mostrar o que realmente tem lá dentro.</div>`
      ],
      ch:[
        { who:'Marlene, 49 anos, vende salgados congelados em Campinas', says:'Pedi à IA posts para a semana e vieram textos de "a melhor coxinha do Brasil, aprovada por chefs". Não tenho nada disso.',
          q:'O que Marlene deve fazer?',
          opts:[
            {t:'Postar assim, todo mundo exagera na propaganda.', ok:false, why:'Promessas falsas quebram a confiança dos clientes e podem violar regras de publicidade.'},
            {t:'Cortar o que não é verdade e pedir textos com os diferenciais reais dela, como receita caseira e entrega no bairro, no tom que ela usa.', ok:true, why:'A IA precisa dos diferenciais verdadeiros. Conteúdo honesto e com a cara dela gera clientes fiéis.'},
            {t:'Parar de postar.', ok:false, why:'A divulgação ajuda as vendas. O ajuste é dar informações reais à IA e revisar.'}
          ]},
        { who:'Igor, 33 anos, dono de uma barbearia', says:'Quero postar a foto de um cliente com o corte novo e o elogio que ele mandou no WhatsApp. A IA já escreveu a legenda.',
          q:'O que falta antes de publicar?',
          opts:[
            {t:'Nada, a foto é do trabalho dele.', ok:false, why:'A foto mostra o rosto do cliente e o elogio é dele. Publicar exige autorização.'},
            {t:'Pedir autorização ao cliente para usar a foto e o depoimento.', ok:true, why:'Imagem e palavras do cliente só vão para a rede com permissão. Isso protege a relação e evita problemas.'},
            {t:'Publicar e apagar se o cliente reclamar.', ok:false, why:'Quando ele reclamar, o dano já aconteceu. A autorização vem antes.'}
          ]},
        { who:'Kátia, 36 anos, dona de uma loja de presentes', says:'Vou fazer uma promoção relâmpago. A IA escreveu "tudo pela metade do preço!" e mais nada.',
          q:'O que precisa ser acrescentado?',
          opts:[
            {t:'Mais emojis para chamar atenção.', ok:false, why:'Emojis não resolvem a falta de regras, que é o que gera confusão com cliente.'},
            {t:'Nada, quanto mais simples melhor.', ok:false, why:'Simples é bom, mas sem regras a loja pode ser cobrada a vender tudo pela metade, sem limite.'},
            {t:'As regras: quais produtos, validade, quantidade e condições, além de uma chamada para ação clara.', ok:true, why:'Regras claras evitam conflito com clientes, e a chamada para ação diz o que fazer para aproveitar.'}
          ]}
      ]},
    { id:'1.6', title:'Projeto: minha comunicação da semana com IA', min:35,
      body:[`<div class="card"><p>Você vai usar a IA em comunicações reais da sua semana, do rascunho à revisão, sem perder o seu jeito de falar e sem expor dados de ninguém.</p></div>`],
      projeto:{
        entrega:'Quatro comunicações reais (por exemplo, um e-mail, uma mensagem difícil, um resumo e um post) feitas com IA, com o pedido, os ajustes e a versão final revisada por você.',
        passos:[
          'Escolha 4 comunicações reais desta semana: pelo menos 1 situação delicada ou 1 resumo de reunião, e 1 post ou status de divulgação (seu ou de onde você trabalha).',
          'Para cada uma, descreva a situação, o público, o canal e o tom, usando [VARIÁVEIS] no lugar de dados pessoais.',
          'Peça o rascunho, faça pelo menos 1 ajuste e confira nomes, valores, datas e promessas.',
          'Em 1 texto escrito por você, peça uma revisão com nível definido e a lista das mudanças.',
          'Anote o tempo que você levaria sem IA e quanto levou com ela.'
        ],
        checklist:[
          'As 4 comunicações são reais e de canais ou situações diferentes, incluindo 1 de divulgação.',
          'Nenhum dado pessoal real foi colado na IA e não usei imagem ou depoimento de cliente sem autorização.',
          'Conferi fatos e cortei promessas que eu não posso cumprir.',
          'Registrei o que mudou na revisão e o tempo economizado.'
        ],
        minimo:400
      }}
  ]},
  { id:2, icon:'📊', title:'Organização', sub:'Planilhas e planejamento', lessons:[
    { id:'2.1', title:'IA para planilhas: fórmulas e limpeza', min:8,
      body:[
        `<div class="card analogy"><h3>🧮 A calculadora que explica o raciocínio</h3><p>Uma calculadora comum só dá o resultado. A IA, além de sugerir a fórmula, <b>explica por que ela funciona</b>, e isso ajuda você a aprender e a conferir.</p></div>`,
        `<div class="term"><b>Fórmula</b> = instrução que calcula algo na planilha, como somar ou procurar um valor. <b>Dados de teste</b> = exemplo pequeno e fictício para checar se a fórmula funciona. <b>Limpeza de dados</b> = corrigir nomes repetidos, espaços sobrando e datas em formatos diferentes.</div>`,
        `<div class="card"><h3>Peça a fórmula e o teste</h3>
          <ol class="golden"><li><span><b>Descreva a planilha</b>: "Coluna A tem nomes, B tem valores, C tem datas."</span></li><li><span><b>Diga o que quer</b>: "somar os valores do mês de maio."</span></li><li><span>Peça a fórmula <b>para o seu programa</b> (Excel ou Google Planilhas) e a explicação em palavras simples.</span></li><li><span><b>Teste com 3 linhas de exemplo</b> antes de aplicar em tudo.</span></li></ol>
          <p>Também serve para sugerir como organizar colunas e limpar listas.</p>
          <p>⚠️ Atenção: a IA pode errar a sintaxe de um programa específico. Sempre teste, e não envie planilhas com dados pessoais de clientes.</p></div>`,
        `<div class="card"><h3>🇧🇷 Detalhe que confunde: vírgula ou ponto e vírgula</h3><p>Em planilhas configuradas em português, as fórmulas costumam separar as partes com <b>ponto e vírgula</b> e os nomes das funções podem estar em português (SOMA, SE, PROCV). Muitas respostas da IA vêm no padrão em inglês, com vírgula. Se a fórmula der erro, diga à IA o idioma do seu programa e peça a versão adaptada. E lembre: copiar a fórmula sem entender impede você de consertá-la depois.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que é uma fórmula de planilha, usando uma conta de somar a compra do mercado.</div>`
      ],
      ch:[
        { who:'Simone, 33 anos, dona de uma loja de roupas', says:'A IA me deu uma fórmula para somar as vendas do mês. Vou aplicar nas 2 mil linhas direto.',
          q:'Qual é o melhor caminho?',
          opts:[
            {t:'Aplicar nas 2 mil linhas, porque a IA explicou direitinho.', ok:false, why:'Uma boa explicação não garante que a fórmula está certa para a sua planilha. Teste primeiro.'},
            {t:'Aplicar e só conferir se algum cliente reclamar.', ok:false, why:'Descobrir o erro depois de afetar clientes é o jeito mais caro de aprender.'},
            {t:'Testar em 3 ou 4 linhas com resultado conhecido e, se bater, aplicar no resto.', ok:true, why:'Testar com poucos dados conhecidos revela erros rápido e barato.'}
          ]},
        { who:'Rafaela, 29 anos, assistente de compras', says:'Copiei a fórmula que a IA sugeriu e a planilha deu erro. Ela usou vírgulas e funções em inglês.',
          q:'Qual é o ajuste mais provável?',
          opts:[
            {t:'Informar à IA que a planilha está em português e pedir a fórmula adaptada, com ponto e vírgula e nomes das funções em português.', ok:true, why:'Diferença de idioma e separador é uma causa comum desse erro. Avisando a configuração, a IA adapta.'},
            {t:'Concluir que a IA não sabe fazer fórmulas.', ok:false, why:'Ela sabe, mas não sabia a configuração do programa da Rafaela.'},
            {t:'Mudar a fórmula por tentativa e erro, sem entender.', ok:false, why:'Chutar gasta tempo e não ensina nada. Melhor dar a informação que faltou.'}
          ]},
        { who:'Cássio, 37 anos, gerente de uma distribuidora de bebidas', says:'Minha lista de clientes tem nomes repetidos, uns com letra maiúscula, outros com espaço sobrando. Quero limpar com IA.',
          q:'Qual é o caminho mais seguro?',
          opts:[
            {t:'Colar a lista inteira com telefones e endereços na IA para ela limpar.', ok:false, why:'São dados pessoais de clientes. Não precisam sair da planilha para resolver o problema.'},
            {t:'Apagar os repetidos à mão, linha por linha, em 5 mil registros.', ok:false, why:'Dá muito trabalho e aumenta a chance de erro. A IA pode ensinar um jeito mais eficiente.'},
            {t:'Descrever a estrutura com 3 linhas de exemplo fictícias e pedir as funções ou passos para limpar dentro da própria planilha.', ok:true, why:'Com exemplos fictícios, a IA ensina o método e os dados reais nunca saem da planilha.'}
          ]}
      ]},
    { id:'2.2', title:'Planejar a semana e priorizar tarefas', min:8,
      body:[
        `<div class="card analogy"><h3>🗓️ O despachante da sua semana</h3><p>Um despachante organiza o que sai primeiro, o que pode esperar e o que nem deveria estar na lista. A IA pode sugerir essa ordem, mas <b>só você sabe o que é realmente importante</b> na sua vida.</p></div>`,
        `<div class="term"><b>Prioridade</b> = o que deve ser feito primeiro. <b>Urgente</b> = o que tem prazo curto. <b>Importante</b> = o que traz resultado real, mesmo sem prazo apertado.</div>`,
        `<div class="card"><h3>Despeje, classifique e decida</h3>
          <ol class="golden"><li><span><b>Escreva todas as tarefas</b> soltas, sem ordem.</span></li><li><span>Peça à IA que organize em quatro grupos: urgente e importante, importante e não urgente, urgente e pouco importante, e o resto.</span></li><li><span>Informe seus <b>horários livres</b> e peça um plano para a semana, com margem para imprevistos.</span></li><li><span><b>Você ajusta</b>: a IA não conhece seus compromissos familiares nem seu cansaço.</span></li></ol>
          <p>Peça sempre que cerca de <b>20% do tempo fique livre</b>. Um plano que não cabe na vida real não funciona.</p></div>`,
        `<div class="card"><h3>🔄 O plano é vivo</h3><p>No meio da semana, algo vai mudar: um cliente atrasa, um filho fica doente. Em vez de abandonar o plano, volte à mesma conversa e diga o que mudou, pedindo que a IA reorganize o restante da semana mantendo as prioridades. Na sexta, faça uma revisão de 5 minutos: o que foi feito, o que ficou, por quê. Esse aprendizado deixa o plano da próxima semana mais realista.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos a diferença entre o que é urgente e o que é importante, com um exemplo da escola.</div>`
      ],
      ch:[
        { who:'Mateus, 26 anos, faz faculdade e trabalha', says:'A IA montou um plano com estudo, trabalho e treino sem nenhum intervalo. Vou seguir à risca.',
          q:'O que está faltando?',
          opts:[
            {t:'Margem para imprevistos e a revisão dele, porque ele conhece a própria rotina.', ok:true, why:'Um plano realista tem folga e passa pelo seu ajuste. A IA organiza, mas não vive a sua rotina.'},
            {t:'Nada: quanto mais cheio o plano, melhor o resultado.', ok:false, why:'Planos lotados costumam ser abandonados. Folga faz parte de um bom plano.'},
            {t:'Nada: a IA conhece a rotina dele melhor do que ele.', ok:false, why:'A IA só sabe o que você conta. A sua rotina real é você quem conhece.'}
          ]},
        { who:'Adriana, 42 anos, corretora de seguros e mãe de três', says:'Meu plano da semana foi por água abaixo na quarta: meu filho ficou doente e perdi dois dias. Acho que planejar não funciona para mim.',
          q:'Qual é a melhor reação?',
          opts:[
            {t:'Abandonar o planejamento, porque imprevistos sempre acontecem.', ok:false, why:'Imprevistos são normais. O problema não é planejar, é não replanejar.'},
            {t:'Tentar fazer tudo o que estava previsto à noite, sem dormir.', ok:false, why:'Compensar com exaustão compromete a saúde e a próxima semana.'},
            {t:'Contar à IA o que mudou e pedir que reorganize o resto da semana mantendo as prioridades, adiando o que pode esperar.', ok:true, why:'O plano é vivo: replanejar com as prioridades em mente salva o que importa sem culpa.'}
          ]},
        { who:'Gustavo, 35 anos, dono de uma loja de informática', says:'Listei 25 tarefas para a semana e pedi à IA para priorizar. Ela colocou "atualizar o Instagram" acima de "pagar o fornecedor que vence amanhã".',
          q:'O que Gustavo deve fazer?',
          opts:[
            {t:'Seguir a ordem da IA, porque ela é imparcial.', ok:false, why:'A IA pode não ter percebido o prazo ou a consequência de atrasar o pagamento.'},
            {t:'Corrigir a ordem e, na próxima vez, informar prazos e consequências de cada tarefa ao pedir a priorização.', ok:true, why:'A IA prioriza com base no que sabe. Com prazos e consequências, a sugestão melhora, mas a decisão final é dele.'},
            {t:'Parar de listar tarefas.', ok:false, why:'A lista é o ponto de partida. O ajuste é dar mais contexto e revisar.'}
          ]}
      ]},
    { id:'2.3', title:'Checklists e passo a passo do trabalho', min:8,
      body:[
        `<div class="card analogy"><h3>✈️ O checklist do piloto</h3><p>Até pilotos com milhares de horas de voo seguem um checklist antes de decolar. Não é falta de experiência: é que a memória falha justamente no dia corrido. Um passo a passo escrito <b>protege o trabalho dos esquecimentos</b>, e a IA ajuda a montá-lo rápido.</p></div>`,
        `<div class="term"><b>Checklist</b> = lista de itens para conferir antes ou depois de uma tarefa. <b>Procedimento (passo a passo)</b> = sequência de etapas para fazer uma tarefa sempre do mesmo jeito. <b>Ponto crítico</b> = etapa em que um erro causa mais prejuízo.</div>`,
        `<div class="card"><h3>Do jeito que você faz para o papel</h3>
          <ol class="golden"><li><span><b>Conte à IA como você faz</b> a tarefa hoje, mesmo de forma bagunçada (por exemplo, abrir o caixa da loja).</span></li><li><span>Peça que ela organize em <b>passos numerados</b>, com verbo no início ("conferir", "registrar").</span></li><li><span>Peça que ela aponte os <b>pontos críticos</b> e o que costuma ser esquecido.</span></li><li><span><b>Teste</b> o passo a passo na prática, de preferência com outra pessoa, e corrija o que não ficou claro.</span></li></ol></div>`,
        `<div class="card"><h3>⚠️ Cuidado com passos inventados</h3><p>A IA pode incluir etapas que não existem no seu trabalho ou que contrariam regras da empresa, de segurança ou da vigilância sanitária. Para tarefas com risco (alimentos, eletricidade, saúde, dinheiro), confira o passo a passo com as normas oficiais e com quem é responsável. O checklist bom é <b>curto</b>: só o que realmente importa.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma lista do que levar na mochila ajuda a não esquecer o material da escola.</div>`
      ],
      ch:[
        { who:'Raquel, 36 anos, dona de uma lanchonete', says:'Cada funcionário fecha a lanchonete de um jeito. Às vezes esquecem de desligar a chapa ou de guardar os frios.',
          q:'Como a IA pode ajudar melhor?',
          opts:[
            {t:'Pedir à IA um checklist genérico de fechamento de restaurante e imprimir sem ler.', ok:false, why:'Um checklist genérico pode ter itens que não existem ali e esquecer os pontos críticos da lanchonete dela.'},
            {t:'Descrever como o fechamento é feito, pedir passos numerados com os pontos críticos destacados e testar com a equipe antes de adotar.', ok:true, why:'Partir da realidade dela e testar com quem faz garante um checklist útil e que a equipe entende.'},
            {t:'Confiar que os funcionários vão lembrar com o tempo.', ok:false, why:'A memória falha nos dias corridos, exatamente quando o esquecimento é mais perigoso.'}
          ]},
        { who:'Diego, 40 anos, eletricista com dois ajudantes', says:'A IA montou um passo a passo para instalação de chuveiro. Tem um passo sobre a fiação que eu não faria daquele jeito.',
          q:'O que Diego deve fazer?',
          opts:[
            {t:'Seguir o passo da IA, porque ela leu muitos manuais.', ok:false, why:'Em eletricidade, um erro pode causar acidente. A experiência dele e as normas valem mais que o texto da IA.'},
            {t:'Corrigir o passo com base nas normas técnicas e na experiência dele antes de passar aos ajudantes.', ok:true, why:'Tarefas com risco exigem conferência com normas e com quem é responsável. A IA organiza, o profissional valida.'},
            {t:'Jogar fora o passo a passo todo.', ok:false, why:'A estrutura pode ser útil. Basta corrigir o que está errado.'}
          ]},
        { who:'Beatriz, 27 anos, nova assistente de uma imobiliária', says:'Meu chefe me pediu para criar o checklist de entrega de chaves. A IA mandou uma lista com 45 itens.',
          q:'Qual é o próximo passo?',
          opts:[
            {t:'Usar os 45 itens, porque mais é mais seguro.', ok:false, why:'Checklist longo demais vira papel ignorado. Ninguém confere 45 itens com atenção.'},
            {t:'Pedir que a IA reduza aos itens essenciais e aos pontos críticos e validar com o chefe o que não pode faltar.', ok:true, why:'O checklist bom é curto e focado no que causa problema se esquecido, e a validação garante que nada essencial saiu.'},
            {t:'Escolher 10 itens ao acaso.', ok:false, why:'Escolher sem critério pode tirar justamente os itens mais importantes.'}
          ]}
      ]},
    { id:'2.4', title:'Orçamentos e contas sem errar com a IA', min:8,
      body:[
        `<div class="card analogy"><h3>🧾 O redator e a calculadora</h3><p>Num escritório, um colega escreve bem as propostas e outro cuida das contas com a calculadora. Com a IA, use cada ferramenta no que ela faz de melhor: <b>a IA organiza e redige; a planilha ou a calculadora calcula</b>.</p></div>`,
        `<div class="term"><b>Orçamento</b> = documento com itens, quantidades, preços e condições. <b>Margem</b> = parte do preço que sobra depois dos custos. <b>Conferência numérica</b> = refazer as contas numa ferramenta de cálculo.</div>`,
        `<div class="card"><h3>Divisão de tarefas que funciona</h3>
          <div class="tw"><table class="tbl"><tr><th>Peça à IA</th><th>Faça na planilha ou calculadora</th></tr>
          <tr><td>Estrutura do orçamento: itens, descrição, condições de pagamento e prazo</td><td>Somas, multiplicações e totais</td></tr>
          <tr><td>Lista de custos que você pode estar esquecendo (transporte, embalagem, taxas)</td><td>Valor de cada custo e da margem</td></tr>
          <tr><td>Texto educado para apresentar a proposta</td><td>Conferir se o total do texto bate com a planilha</td></tr></table></div></div>`,
        `<div class="card"><h3>💡 Pergunte o que você esqueceu</h3><p>Um dos melhores usos é pedir que a IA aponte custos que costumam ser esquecidos no seu tipo de serviço: deslocamento, horas de atendimento ao cliente, retrabalho, taxa da maquininha, impostos. Ela não sabe seus valores, mas ajuda a lembrar das categorias. Para impostos e regras fiscais, confirme com o contador ou com fontes oficiais.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que, numa venda de limonada, é preciso contar o preço do limão, do açúcar e do copo antes de decidir o preço final.</div>`
      ],
      ch:[
        { who:'Roberto, 44 anos, pintor de paredes', says:'Pedi à IA o orçamento completo de uma pintura, com total. O total veio R$ 400 a menos do que a soma dos itens.',
          q:'Qual é o jeito certo de usar a IA nesse caso?',
          opts:[
            {t:'Usar a IA para estruturar itens e texto, e fazer as contas numa planilha ou calculadora, conferindo o total final.', ok:true, why:'A IA organiza bem, mas pode errar contas. Calcular em ferramenta própria evita prejuízo.'},
            {t:'Mandar assim mesmo, R$ 400 não faz diferença.', ok:false, why:'Faz diferença no bolso dele, e erro de conta passa imagem de descuido ao cliente.'},
            {t:'Pedir à IA para refazer a conta até dar o valor que ele acha certo.', ok:false, why:'Ficar pedindo nova conta não garante acerto. A conferência precisa ser em ferramenta de cálculo.'}
          ]},
        { who:'Karina, 31 anos, faz bolos de festa por encomenda', says:'Sinto que cobro pouco nos bolos, mas não sei o que estou esquecendo no preço.',
          q:'Qual pedido à IA ajuda mais?',
          opts:[
            {t:'Pedir que a IA diga o preço certo do bolo dela.', ok:false, why:'A IA não conhece os custos, a região nem as clientes da Karina. Um preço pronto seria um chute.'},
            {t:'Pedir a lista de custos que confeiteiras costumam esquecer (gás, embalagem, horas de trabalho, entrega, taxas) e calcular os valores dela numa planilha.', ok:true, why:'A IA ajuda a lembrar categorias; os valores reais e a conta são da Karina.'},
            {t:'Copiar o preço de uma confeitaria famosa.', ok:false, why:'Custos e público são diferentes. Copiar preço sem saber os próprios custos pode dar prejuízo.'}
          ]},
        { who:'Leonardo, 38 anos, prestador de serviços de jardinagem', says:'A IA disse que o imposto do meu MEI este ano é um valor específico. Vou já colocar no meu planejamento.',
          q:'O que Leonardo deve fazer antes?',
          opts:[
            {t:'Usar o valor da IA, porque ela foi bem específica.', ok:false, why:'Valores de imposto mudam e a IA pode estar desatualizada. Ser específico não é ser correto.'},
            {t:'Ignorar impostos no planejamento.', ok:false, why:'Impostos fazem parte dos custos. Ignorar compromete o planejamento.'},
            {t:'Conferir o valor atualizado no portal oficial do MEI ou com o contador.', ok:true, why:'Regras fiscais mudam. A fonte oficial garante o valor correto para o planejamento.'}
          ]}
      ]},
    { id:'2.5', title:'Da bagunça à tabela: organizando informações', min:8,
      body:[
        `<div class="card analogy"><h3>🧱 A caixa de peças de Lego</h3><p>Quando as peças estão todas misturadas numa caixa, montar qualquer coisa demora. Separadas por cor e tamanho, tudo fica rápido. Muitas informações do trabalho estão "misturadas na caixa": anotações soltas, áudios, listas no caderno. A IA ajuda a <b>separar e organizar em colunas</b>.</p></div>`,
        `<div class="term"><b>Informação estruturada</b> = dados organizados em campos fixos, como numa tabela. <b>Coluna</b> = o tipo de informação (data, cliente, valor). <b>Padronizar</b> = escrever do mesmo jeito, como todas as datas em dia/mês/ano.</div>`,
        `<div class="card"><h3>Como transformar anotações em tabela</h3>
          <ol class="golden"><li><span><b>Junte o material</b>: anotações, lista de pedidos, transcrição de áudio, já sem dados pessoais desnecessários.</span></li><li><span><b>Diga as colunas</b> que você quer, por exemplo: data, item, quantidade, status.</span></li><li><span>Peça uma regra para lacunas: o que estiver faltando deve aparecer como "não informado", sem invenção.</span></li><li><span>Peça a tabela num formato fácil de colar na planilha e <b>confira linha por linha</b> com o original.</span></li></ol>
          <div class="pipe"><div class="node ink">Anotações soltas</div><div class="ar">➜</div><div class="node yel">Colunas definidas</div><div class="ar">➜</div><div class="node ink">Tabela</div><div class="ar">➜</div><div class="node ink">Conferência</div></div></div>`,
        `<div class="card"><h3>💡 Depois da tabela</h3><p>Com as informações organizadas, você pode pedir à IA ideias de análise ("o que mais vende?", "quais pedidos estão atrasados?"), mas faça as contas na planilha, que é onde os números ficam seguros. Um erro comum é colar textos enormes de uma vez: a IA pode pular linhas. Trabalhe em lotes menores e confira se a quantidade de linhas bate com o original. Se a lista tiver dados de clientes, troque nomes por códigos antes de enviar.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que guardar os brinquedos em caixas separadas ajuda a achar tudo depois.</div>`
      ],
      ch:[
        { who:'Sandro, 42 anos, dono de uma distribuidora de água mineral', says:'Anoto os pedidos num caderno e em áudios no WhatsApp. No fim do mês não sei quanto vendi para cada bairro.',
          q:'Qual é o melhor uso da IA aqui?',
          opts:[
            {t:'Pedir que a IA adivinhe quanto ele vendeu por bairro.', ok:false, why:'A IA não tem os dados. Qualquer número seria inventado.'},
            {t:'Transcrever as anotações, pedir uma tabela com data, bairro, quantidade e valor, conferir com o original e fazer as somas na planilha.', ok:true, why:'A IA organiza a bagunça em colunas; a conferência e as contas na planilha garantem números confiáveis.'},
            {t:'Continuar no caderno e tentar lembrar no fim do mês.', ok:false, why:'É exatamente o que está falhando. Organizar em tabela resolve.'}
          ]},
        { who:'Luciana, 31 anos, secretária de uma escola de idiomas', says:'Colei 300 linhas de anotações para a IA virar tabela. A tabela veio com 260 linhas.',
          q:'O que ela deve fazer?',
          opts:[
            {t:'Usar a tabela, 40 linhas a menos não fazem diferença.', ok:false, why:'São 40 registros perdidos, que podem ser alunos ou pagamentos esquecidos.'},
            {t:'Pedir de novo tudo de uma vez até vir certo.', ok:false, why:'Textos grandes tendem a ter o mesmo problema. Melhor mudar o método.'},
            {t:'Dividir em lotes menores, conferir se a quantidade de linhas bate em cada lote e juntar depois.', ok:true, why:'Lotes menores reduzem o risco de a IA pular linhas, e contar as linhas é uma conferência simples e eficaz.'}
          ]},
        { who:'Hélio, 58 anos, síndico de um condomínio', says:'Organizei com a IA a lista de manutenções do prédio. Algumas linhas vieram com datas que não estavam nas minhas anotações.',
          q:'Que instrução teria evitado isso?',
          opts:[
            {t:'Pedir que, quando faltar informação, a IA escreva "não informado" e não invente.', ok:true, why:'Sem essa regra, a IA tende a preencher lacunas com palpites, como datas inventadas.'},
            {t:'Pedir que a IA complete com as datas mais prováveis.', ok:false, why:'Datas "prováveis" são justamente as inventadas que causaram o problema.'},
            {t:'Pedir a tabela em letras maiúsculas.', ok:false, why:'A formatação não muda o comportamento de inventar.'}
          ]}
      ]},
    { id:'2.6', title:'Reuniões mais curtas: pauta e preparo', min:8,
      body:[
        `<div class="card analogy"><h3>🤝 A lista de compras antes do mercado</h3><p>Quem vai ao mercado sem lista passa uma hora nos corredores e ainda esquece o principal. Reunião sem pauta é igual: todo mundo fala, ninguém decide e marca-se outra reunião. A IA ajuda a <b>preparar a lista antes de entrar na sala</b>.</p></div>`,
        `<div class="term"><b>Pauta</b> = lista de assuntos da reunião, em ordem, com tempo para cada um. <b>Objetivo da reunião</b> = o que precisa estar decidido ao final. <b>Pré-leitura</b> = material curto enviado antes, para todos chegarem informados.</div>`,
        `<div class="card"><h3>Preparando com a IA</h3>
          <ol class="golden"><li><span>Diga o <b>objetivo</b>: "ao final, precisamos escolher o fornecedor de embalagens".</span></li><li><span>Liste os <b>assuntos</b>, quem participa e o tempo total.</span></li><li><span>Peça uma <b>pauta com tempo por item</b>, deixando os assuntos de decisão no começo.</span></li><li><span>Peça uma <b>pré-leitura</b> de até meia página e as <b>perguntas</b> que precisam de resposta.</span></li><li><span>Depois da reunião, use a lição 1.2 para o resumo com decisões e ações.</span></li></ol></div>`,
        `<div class="card"><h3>⚠️ Pontos de atenção</h3><p>A IA não sabe a política da sua empresa nem quem tem autoridade para decidir: confira se a pauta faz sentido para o seu ambiente. Pautas com assuntos demais para o tempo disponível são o erro mais comum; peça que ela sugira o que pode virar e-mail em vez de reunião. Se a reunião envolve dados sigilosos, prepare a pauta com descrições gerais, sem colar números ou nomes de clientes. E às vezes a melhor conclusão é: esta reunião não precisa existir.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que combinar antes as regras do jogo deixa a brincadeira mais divertida e rápida.</div>`
      ],
      ch:[
        { who:'Clara, 37 anos, gerente de uma loja de departamentos', says:'Nossas reuniões semanais duram duas horas e ninguém sai com nada decidido.',
          q:'Como a IA pode ajudar Clara?',
          opts:[
            {t:'Pedir uma pauta com o objetivo da reunião, assuntos de decisão no começo e tempo por item, e o que pode virar recado por escrito.', ok:true, why:'Objetivo claro e tempo por item mantêm o foco, e tirar o que não precisa de reunião economiza tempo de todos.'},
            {t:'Pedir que a IA tome as decisões no lugar da equipe.', ok:false, why:'A IA não tem o contexto nem a autoridade para decidir pela loja.'},
            {t:'Marcar reuniões mais longas.', ok:false, why:'Mais tempo sem pauta só aumenta a dispersão.'}
          ]},
        { who:'Fabrício, 29 anos, analista de compras', says:'Pedi à IA uma pauta para uma reunião de 30 minutos e veio com 12 assuntos.',
          q:'Qual ajuste faz sentido?',
          opts:[
            {t:'Tentar tratar os 12 assuntos falando bem rápido.', ok:false, why:'Assuntos demais para o tempo levam a discussões rasas e decisões adiadas.'},
            {t:'Pedir que a IA priorize os 2 ou 3 assuntos que precisam de decisão e sugira enviar o resto por escrito.', ok:true, why:'Priorizar adequa a pauta ao tempo e resolve o que realmente precisa de conversa.'},
            {t:'Aumentar a reunião para 3 horas.', ok:false, why:'Ampliar o tempo sem priorizar só espalha a dispersão.'}
          ]},
        { who:'Mirian, 45 anos, coordenadora financeira', says:'Quero que a IA prepare a pré-leitura da reunião de orçamento. Vou colar a planilha com salários e contratos.',
          q:'Qual é o jeito mais seguro?',
          opts:[
            {t:'Colar tudo, é só para uso interno.', ok:false, why:'Salários e contratos são dados sigilosos. Uso interno não autoriza mandar para qualquer ferramenta.'},
            {t:'Não fazer pré-leitura nenhuma.', ok:false, why:'A pré-leitura ajuda muito. Dá para fazê-la sem expor dados.'},
            {t:'Pedir a estrutura da pré-leitura com descrições gerais e preencher os números sigilosos ela mesma, fora da IA, ou usar só ferramenta autorizada pela empresa.', ok:true, why:'A IA organiza o formato; os dados sensíveis ficam onde devem ficar.'}
          ]}
      ]},
    { id:'2.7', title:'Projeto: organizando uma rotina de trabalho', min:35,
      body:[`<div class="card"><p>Escolha uma área da sua rotina que hoje vive na memória ou na correria e organize com a ajuda da IA: um plano semanal, um checklist ou um orçamento. O importante é que seja algo que você vai realmente usar.</p></div>`],
      projeto:{
        entrega:'Duas ferramentas de organização prontas para uso (por exemplo, plano semanal, checklist, modelo de orçamento, tabela organizada ou pauta de reunião) criadas com IA, testadas e ajustadas por você.',
        passos:[
          'Escolha duas rotinas reais que costumam dar problema (esquecimentos, atrasos, contas erradas, informações bagunçadas, reuniões longas).',
          'Descreva para a IA como você faz hoje, sem dados pessoais, e peça uma primeira versão organizada.',
          'Ajuste a versão: corte o que não existe na sua realidade e inclua os pontos críticos.',
          'Se houver números, faça as contas numa planilha ou calculadora e confira; se houver regras, confira em fonte oficial.',
          'Use a ferramenta por pelo menos alguns dias (ou simule um uso) e registre o que melhorou.'
        ],
        checklist:[
          'As duas ferramentas resolvem problemas reais da minha rotina.',
          'Cortei o que era genérico e incluí os pontos críticos do meu trabalho.',
          'Números foram conferidos fora da IA e regras em fonte oficial.',
          'Registrei o uso e o que pretendo ajustar.'
        ],
        minimo:400
      }}
  ]},
  { id:3, icon:'🔎', title:'Pesquisa e estudo', sub:'Aprender mais rápido', lessons:[
    { id:'3.1', title:'Pesquisar com IA sem cair em armadilhas', min:8,
      body:[
        `<div class="card analogy"><h3>🔎 O bibliotecário que indica por onde começar</h3><p>O bibliotecário aponta as prateleiras, mas o livro é você quem abre e confere. A IA é ótima para te dar <b>um mapa do assunto</b>, e não para ser a fonte final.</p></div>`,
        `<div class="term"><b>Fonte</b> = de onde a informação veio, como um site oficial ou um estudo. <b>Pesquisa exploratória</b> = primeira olhada para entender um assunto. <b>Verificação</b> = conferir a informação em fonte confiável.</div>`,
        `<div class="card"><h3>Mapa primeiro, fonte depois</h3>
          <ol class="golden"><li><span>Peça um <b>panorama</b> do assunto em poucos pontos e a lista do que você deve conferir.</span></li><li><span>Peça <b>palavras-chave e perguntas</b> para buscar.</span></li><li><span>Abra <b>fontes oficiais ou confiáveis</b> e confira o que a IA disse.</span></li><li><span>Se a IA citar link, estudo ou lei, <b>abra e leia</b>: ela pode inventar referências.</span></li></ol>
          <p>Use a IA para entender e organizar, e as fontes para confirmar. Quanto mais sério o tema (saúde, dinheiro, lei), mais fontes.</p></div>`,
        `<div class="card"><h3>🧭 Pesquisa para decidir</h3><p>Antes de decidir algo no trabalho (trocar de fornecedor, comprar um equipamento), use a IA para montar os <b>critérios</b> da comparação: preço, garantia, prazo de entrega, assistência técnica. Depois, preencha os dados você mesmo, com informações dos sites e orçamentos reais. Assim a IA ajuda a pensar, e a decisão se baseia em dados verificados, não em palpites dela.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o bibliotecário aponta o caminho, mas você confere o livro.</div>`
      ],
      ch:[
        { who:'Helena, 30 anos, analista de compras', says:'A IA me deu o nome de um estudo com números que provam meu argumento. Posso citar na apresentação?',
          q:'Qual é o próximo passo?',
          opts:[
            {t:'Citar agora: se tem nome e números, é confiável.', ok:false, why:'Nomes e números convincentes podem ser inventados. Sem checar, a citação pode derrubar a sua credibilidade.'},
            {t:'Pedir à IA que confirme o próprio estudo e aceitar a resposta.', ok:false, why:'A IA pode confirmar o próprio erro. A checagem precisa vir de fora.'},
            {t:'Procurar o estudo em fonte confiável, ler o que ele diz e só então citar.', ok:true, why:'Encontrar e ler a fonte transforma a pista da IA em informação segura.'}
          ]},
        { who:'Sérgio, 49 anos, dono de uma padaria', says:'Quero trocar o forno. A IA me disse qual marca é a melhor e o preço médio. Vou comprar essa.',
          q:'Como Sérgio deve usar a IA nessa decisão?',
          opts:[
            {t:'Comprar a marca indicada, porque a IA comparou tudo.', ok:false, why:'A IA pode ter informações desatualizadas ou inventadas sobre preços e modelos.'},
            {t:'Pedir à IA os critérios de comparação (consumo, capacidade, assistência na região, garantia) e preencher com dados reais de orçamentos e sites dos fabricantes.', ok:true, why:'A IA ajuda a pensar nos critérios; a decisão se apoia em dados verificados por ele.'},
            {t:'Ignorar a IA e comprar o mais barato.', ok:false, why:'O mais barato pode sair caro. Usar a IA para organizar critérios é um bom apoio.'}
          ]},
        { who:'Tereza, 35 anos, auxiliar de enfermagem', says:'Pesquisei com a IA sobre uma nova regra para registro de medicamentos no meu trabalho. Ela respondeu com segurança, mas não deu fonte.',
          q:'Qual é a atitude correta?',
          opts:[
            {t:'Aplicar a regra no plantão de hoje.', ok:false, why:'Regras de saúde aplicadas sem confirmação podem causar erros graves com pacientes.'},
            {t:'Perguntar de novo até a IA citar uma fonte e aceitar a primeira que aparecer.', ok:false, why:'A IA pode inventar a fonte. Ela precisa abrir e conferir.'},
            {t:'Usar a resposta como pista, buscar a norma no site do órgão responsável e confirmar com a coordenação.', ok:true, why:'Em saúde, regras precisam vir de fonte oficial e da coordenação. A IA só aponta o caminho.'}
          ]}
      ]},
    { id:'3.2', title:'Estudar com IA: perguntas, cartões e simulados', min:8,
      body:[
        `<div class="card analogy"><h3>🎓 O professor particular paciente</h3><p>Um professor particular explica de novo, de outro jeito, quantas vezes for preciso, e faz perguntas para ver se você entendeu. A IA pode ajudar assim, mas <b>quem precisa lembrar a matéria é você</b>.</p></div>`,
        `<div class="term"><b>Recuperação ativa</b> = estudar tentando lembrar, e não só relendo. <b>Cartão de estudo</b> = pergunta de um lado e resposta do outro. <b>Simulado</b> = conjunto de perguntas para testar o que você aprendeu.</div>`,
        `<div class="card"><h3>Peça perguntas, não só resumos</h3><p>Ler resumo dá sensação de aprender, mas fixar exige tentar lembrar. Use a IA para:</p>
          <ol class="golden"><li><span>Explicar o assunto de forma simples, como para uma criança de 10 anos.</span></li><li><span>Fazer perguntas sobre o assunto e só mostrar as respostas depois que você responder.</span></li><li><span>Apontar onde você errou e explicar de outro jeito.</span></li><li><span>Criar cartões de estudo com pergunta e resposta.</span></li></ol>
          <p>Confira as respostas importantes no seu material. Estudar um pouco por dia, revendo o que errou, rende mais do que uma maratona.</p></div>`,
        `<div class="card"><h3>📅 Revisão espaçada</h3><p>Rever a matéria em intervalos crescentes ajuda a memória: no dia seguinte, depois de 3 dias, depois de uma semana. Peça à IA um calendário de revisão para o que você estudou e, em cada revisão, um mini simulado só com o que você errou da última vez. Assim o estudo foca no que ainda não está firme.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que tentar lembrar é melhor para aprender do que só reler.</div>`
      ],
      ch:[
        { who:'Bianca, 20 anos, estudante de enfermagem', says:'Peço resumos à IA e releio várias vezes, mas na prova esqueço tudo.',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Pedir perguntas e simulados, responder antes de ver o gabarito e revisar os erros, conferindo no material da aula.', ok:true, why:'Tentar lembrar e corrigir erros fixa o conteúdo, e conferir no material evita decorar algo errado.'},
            {t:'Pedir resumos ainda maiores e reler mais vezes.', ok:false, why:'Reler passivamente dá sensação de domínio, mas fixa pouco.'},
            {t:'Parar de estudar com IA.', ok:false, why:'A IA ajuda bastante quando usada para treinar, e não só para resumir.'}
          ]},
        { who:'Roberval, 52 anos, estudando para concurso público', says:'Estudei Direito Administrativo na segunda-feira. Na sexta, já não lembrava quase nada.',
          q:'Qual estratégia ajuda mais?',
          opts:[
            {t:'Estudar tudo de novo do zero na sexta.', ok:false, why:'Recomeçar do zero gasta tempo. Revisões curtas e espaçadas mantêm o conteúdo vivo.'},
            {t:'Pedir à IA um calendário de revisão espaçada (dia seguinte, 3 dias, 1 semana) com mini simulados focados nos erros, conferindo no edital e no material oficial.', ok:true, why:'Revisão espaçada e foco nos erros combatem o esquecimento, e a conferência no material evita aprender algo errado.'},
            {t:'Estudar só na véspera da prova.', ok:false, why:'Maratona de véspera fixa pouco e aumenta o cansaço.'}
          ]},
        { who:'Mariana, 16 anos, estudante do ensino médio', says:'Pedi à IA 10 questões de biologia. Ela me deu as perguntas já com as respostas embaixo e eu acabei lendo tudo.',
          q:'Como ajustar o pedido?',
          opts:[
            {t:'Pedir que a IA mostre as respostas ainda mais destacadas.', ok:false, why:'Ver as respostas antes acaba com o treino de tentar lembrar.'},
            {t:'Desistir de estudar com perguntas.', ok:false, why:'Perguntas são um dos melhores jeitos de estudar. Só faltou ajustar o pedido.'},
            {t:'Pedir uma pergunta de cada vez e que a resposta só apareça depois que ela responder.', ok:true, why:'Responder antes de ver o gabarito é o que faz a memória trabalhar.'}
          ]}
      ]},
    { id:'3.3', title:'Aprender uma habilidade nova com um plano', min:8,
      body:[
        `<div class="card analogy"><h3>🧗 A trilha com placas</h3><p>Subir uma montanha sem trilha é cansativo e perigoso. Com uma trilha marcada, você sabe o próximo passo e vê o quanto já andou. A IA ajuda a <b>desenhar a trilha</b> para aprender algo novo, como Excel, inglês para atendimento ou atendimento ao cliente.</p></div>`,
        `<div class="term"><b>Objetivo de aprendizagem</b> = o que você quer conseguir fazer ao final. <b>Etapa</b> = um pedaço do caminho, com prática própria. <b>Prática deliberada</b> = treinar de propósito o que você ainda não domina.</div>`,
        `<div class="card"><h3>Montando o plano com a IA</h3>
          <ol class="golden"><li><span><b>Diga o objetivo concreto</b>: em vez de "aprender Excel", algo como "montar sozinho uma planilha de controle de vendas".</span></li><li><span><b>Conte o seu ponto de partida</b> e o tempo disponível por dia.</span></li><li><span>Peça um plano com <b>etapas semanais</b>, cada uma com uma prática real.</span></li><li><span>Peça que a IA indique como saber se você <b>dominou cada etapa</b>.</span></li></ol>
          <div class="pipe"><div class="node ink">Objetivo</div><div class="ar">➜</div><div class="node ink">Etapas</div><div class="ar">➜</div><div class="node yel">Prática</div><div class="ar">➜</div><div class="node ink">Teste</div><div class="ar">➜</div><div class="node ink">Próxima etapa</div></div></div>`,
        `<div class="card"><h3>⚠️ Cuidados com o plano</h3><p>Planos da IA costumam ser otimistas demais. Se você tem 20 minutos por dia, diga isso e cobre um plano que caiba nesse tempo. Prefira cursos, vídeos e materiais de fontes conhecidas; a IA pode indicar materiais que não existem. E lembre: o plano só funciona se tiver prática com tarefas reais do seu trabalho.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que aprender a andar de bicicleta é melhor por partes: equilíbrio, pedalar, frear.</div>`
      ],
      ch:[
        { who:'Valéria, 34 anos, recepcionista de hotel', says:'Quero aprender inglês com a IA. Pedi "me ensine inglês" e veio uma lista de gramática enorme.',
          q:'Qual pedido funciona melhor?',
          opts:[
            {t:'Definir o objetivo concreto (atender hóspedes estrangeiros no check-in), o nível atual e o tempo por dia, e pedir um plano por etapas com prática de diálogos.', ok:true, why:'Objetivo concreto e ponto de partida deixam o plano focado no que ela realmente vai usar no trabalho.'},
            {t:'Pedir a mesma coisa de novo, esperando outra lista.', ok:false, why:'O pedido vago vai gerar outra lista genérica.'},
            {t:'Decorar toda a lista de gramática antes de praticar.', ok:false, why:'Gramática sem prática real demora e desanima. O plano precisa estar ligado ao uso no trabalho.'}
          ]},
        { who:'Jonas, 28 anos, vendedor numa loja de móveis', says:'A IA me passou um plano para aprender Excel em 30 dias com 3 horas por dia. Eu só tenho 20 minutos depois do expediente.',
          q:'O que Jonas deve fazer?',
          opts:[
            {t:'Seguir o plano de 3 horas, custe o que custar.', ok:false, why:'Um plano que não cabe na rotina é abandonado em poucos dias.'},
            {t:'Desistir de aprender Excel.', ok:false, why:'Dá para aprender com pouco tempo, com um plano adaptado.'},
            {t:'Informar à IA o tempo real disponível e pedir um plano mais longo, com práticas de 20 minutos.', ok:true, why:'Um plano realista, mesmo que mais longo, é o que leva ao objetivo.'}
          ]},
        { who:'Patrícia, 45 anos, quer aprender a fazer artes para o Instagram do seu salão', says:'A IA me indicou um curso gratuito com nome e link. Cliquei e a página não existe.',
          q:'O que isso ensina?',
          opts:[
            {t:'Que todos os cursos gratuitos são golpe.', ok:false, why:'Há muitos cursos gratuitos bons. O problema é que a IA pode inventar indicações.'},
            {t:'Que a IA pode indicar materiais que não existem; é melhor buscar cursos em plataformas e instituições conhecidas e conferir antes.', ok:true, why:'Referências inventadas acontecem. Verificar a existência e a origem do material evita perder tempo.'},
            {t:'Que ela deve pedir à IA para criar o link de novo.', ok:false, why:'A IA pode inventar outro link. A busca precisa ser feita em fontes reais.'}
          ]}
      ]},
    { id:'3.4', title:'Treinar entrevistas e apresentações com IA', min:8,
      body:[
        `<div class="card analogy"><h3>🎭 O ensaio antes da estreia</h3><p>Nenhum ator estreia uma peça sem ensaiar. Uma entrevista de emprego, uma reunião com cliente ou uma apresentação para a equipe também merecem ensaio. A IA pode fazer o papel do <b>entrevistador, do cliente ou da plateia</b>, quantas vezes você quiser.</p></div>`,
        `<div class="term"><b>Simulação</b> = treino que imita a situação real. <b>Pergunta difícil</b> = aquela que você teme receber. <b>Feedback</b> = comentário sobre o que foi bem e o que melhorar.</div>`,
        `<div class="card"><h3>Como montar o ensaio</h3>
          <ol class="golden"><li><span><b>Defina o cenário</b>: a vaga, a empresa ou o tipo de cliente, e o papel que a IA vai fazer.</span></li><li><span>Peça que ela faça <b>uma pergunta por vez</b> e espere a sua resposta.</span></li><li><span>Peça perguntas <b>difíceis também</b>, não só as fáceis.</span></li><li><span>No fim, peça <b>feedback</b>: o que foi claro, o que ficou vago, o que faltou mostrar.</span></li></ol>
          <p>Responda como responderia de verdade, de preferência falando em voz alta ou usando o recurso de voz.</p></div>`,
        `<div class="card"><h3>✋ O que a IA não substitui</h3><p>Ela não vê sua postura, seu tom de voz nem seu nervosismo. Complete o treino ensaiando em frente ao espelho ou com alguém de confiança. E nunca decore respostas prontas da IA: entrevistadores percebem. Use o treino para <b>organizar suas próprias histórias</b> e falar delas com naturalidade.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que ensaiar a apresentação da escola antes ajuda a ficar menos nervoso.</div>`
      ],
      ch:[
        { who:'Lucas, 23 anos, vai fazer a primeira entrevista de emprego', says:'Pedi à IA respostas perfeitas para as perguntas de entrevista e vou decorar todas.',
          q:'Qual é o melhor uso da IA aqui?',
          opts:[
            {t:'Decorar as respostas da IA, palavra por palavra.', ok:false, why:'Respostas decoradas soam artificiais e não mostram quem ele é. Entrevistadores percebem.'},
            {t:'Simular a entrevista: a IA pergunta uma de cada vez, ele responde com as próprias experiências e pede feedback para melhorar.', ok:true, why:'O ensaio ajuda a organizar as próprias histórias e ganhar segurança, sem soar decorado.'},
            {t:'Não se preparar, para parecer espontâneo.', ok:false, why:'Preparação não tira a espontaneidade; ela reduz o nervosismo e melhora as respostas.'}
          ]},
        { who:'Mônica, 39 anos, consultora de vendas de planos de saúde', says:'Amanhã apresento uma proposta para uma empresa. Meu medo são as perguntas sobre preço.',
          q:'Como a IA pode ajudar Mônica a se preparar?',
          opts:[
            {t:'Pedir que a IA faça o papel do cliente desconfiado e faça perguntas difíceis sobre preço, uma de cada vez, com feedback no final.', ok:true, why:'Treinar exatamente as perguntas temidas deixa Mônica mais segura para responder com calma no dia.'},
            {t:'Pedir só perguntas fáceis, para ganhar confiança.', ok:false, why:'Treinar só o fácil deixa o ponto fraco exposto justamente na hora da apresentação.'},
            {t:'Pedir que a IA invente descontos para oferecer.', ok:false, why:'Descontos dependem das regras da empresa dela. A IA não pode decidir isso.'}
          ]},
        { who:'Otávio, 31 anos, técnico de TI que vai apresentar um projeto para a diretoria', says:'Treinei com a IA e as respostas ficaram ótimas no texto. Acho que estou pronto.',
          q:'O que ainda falta no preparo dele?',
          opts:[
            {t:'Nada: se o texto está bom, a apresentação vai ser boa.', ok:false, why:'Na hora, contam também voz, postura, tempo e nervosismo, que a IA não avalia.'},
            {t:'Treinar com mais 50 perguntas escritas.', ok:false, why:'Mais perguntas escritas não treinam a fala em voz alta nem a postura.'},
            {t:'Ensaiar em voz alta, cronometrar e, se possível, apresentar para um colega de confiança.', ok:true, why:'A IA prepara o conteúdo; o ensaio falado e com plateia prepara a apresentação real.'}
          ]}
      ]},
    { id:'3.5', title:'Entender documentos difíceis', min:8,
      body:[
        `<div class="card analogy"><h3>📜 O tradutor do "juridiquês"</h3><p>Contrato de aluguel, edital de concurso, regulamento do plano de saúde: muitos documentos parecem escritos em outra língua. A IA pode ser um <b>tradutor para o português do dia a dia</b>, ajudando você a entender o que está assinando. Mas tradutor não é advogado: quem decide e assina continua sendo você.</p></div>`,
        `<div class="term"><b>Cláusula</b> = cada regra de um contrato. <b>Obrigação</b> = o que você precisa fazer. <b>Prazo e multa</b> = até quando e quanto custa não cumprir. <b>Edital</b> = documento com as regras de um concurso ou seleção.</div>`,
        `<div class="card"><h3>Lendo com a IA, passo a passo</h3>
          <ol class="golden"><li><span><b>Retire dados pessoais</b> (nomes, CPF, endereço) e copie só as partes que interessam.</span></li><li><span>Peça uma <b>explicação em linguagem simples</b>, parte por parte.</span></li><li><span>Peça uma lista de <b>obrigações, prazos, multas e direitos</b>, indicando o trecho de onde tirou cada item.</span></li><li><span>Peça as <b>perguntas que você deveria fazer</b> antes de assinar ou se inscrever.</span></li><li><span><b>Confira</b> cada ponto importante no texto original.</span></li></ol></div>`,
        `<div class="card"><h3>⚠️ Até onde a IA vai</h3><p>A IA pode errar a interpretação, misturar regras de outro documento parecido ou não conhecer leis e normas recentes. Use a explicação para entender e para preparar perguntas, não como parecer final. Em contratos de valor alto, conflitos ou dúvidas sobre direitos, procure um profissional ou órgãos de defesa do consumidor. Em editais, a regra que vale é a do texto oficial publicado, inclusive retificações posteriores. Desconfie de qualquer resposta que diga "pode assinar tranquilo" sem mostrar o trecho que sustenta essa conclusão.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que é preciso ler as regras de um jogo antes de concordar em jogar valendo alguma coisa.</div>`
      ],
      ch:[
        { who:'Danilo, 27 anos, vai alugar o primeiro apartamento', says:'O contrato tem 12 páginas e não entendo metade. Pedi à IA e ela disse que está tudo normal.',
          q:'Como Danilo deve usar a IA aqui?',
          opts:[
            {t:'Assinar, porque a IA disse que está normal.', ok:false, why:'"Normal" sem trechos que sustentem é só uma opinião genérica. A IA pode ter deixado passar algo importante.'},
            {t:'Pedir a lista de obrigações, prazos, multas e direitos com o trecho de cada um, conferir no original e levar as dúvidas ao proprietário ou a um profissional.', ok:true, why:'A lista com trechos permite conferir, e as dúvidas preparadas ajudam a negociar antes de assinar.'},
            {t:'Não ler o contrato, porque é difícil demais.', ok:false, why:'É justamente o que a IA ajuda a evitar: entender antes de assinar.'}
          ]},
        { who:'Patrícia, 34 anos, vai prestar concurso para agente administrativo', says:'A IA resumiu o edital e disse que a inscrição vai até dia 20. Vou deixar para o dia 19.',
          q:'O que ela deve conferir?',
          opts:[
            {t:'Nada, o resumo da IA basta.', ok:false, why:'A IA pode errar datas ou não saber de retificações. Prazo de inscrição perdido não tem volta.'},
            {t:'Só se a IA mantém a mesma data quando perguntada de novo.', ok:false, why:'Repetir a pergunta à IA não confirma nada. A conferência é no documento oficial.'},
            {t:'A data no edital oficial e em eventuais retificações publicadas pelo órgão, de preferência sem deixar para a véspera.', ok:true, why:'Vale o texto oficial e suas retificações. Conferir na fonte e se inscrever com folga evita perder o concurso.'}
          ]},
        { who:'Seu Wilson, 62 anos, aposentado', says:'Quero entender o regulamento do meu plano de saúde. Posso mandar a carteirinha e meus exames junto para a IA ter contexto?',
          q:'Qual é o caminho adequado?',
          opts:[
            {t:'Mandar só os trechos do regulamento, sem carteirinha nem exames, e pedir explicação simples das regras com o trecho de origem.', ok:true, why:'Para entender as regras, a IA não precisa de dados pessoais nem de saúde. O trecho de origem permite conferir.'},
            {t:'Mandar tudo, para a explicação ficar personalizada.', ok:false, why:'Carteirinha e exames são dados pessoais e de saúde. Não são necessários para explicar o regulamento.'},
            {t:'Não usar IA e assinar o que o plano mandar.', ok:false, why:'A IA pode ajudar bastante a entender, com os cuidados certos.'}
          ]}
      ]},
    { id:'3.6', title:'Projeto: meu plano de aprendizado com IA', min:35,
      body:[`<div class="card"><p>Escolha algo que você precisa aprender ou preparar para o trabalho (uma habilidade, uma prova, uma entrevista, uma apresentação) e use a IA como mapa, treinadora e parceira de ensaio, sempre conferindo nas fontes.</p></div>`],
      projeto:{
        entrega:'Um plano de aprendizado ou preparação com objetivo concreto, etapas, fontes conferidas e o registro de pelo menos uma sessão de treino com a IA.',
        passos:[
          'Defina o objetivo concreto, seu ponto de partida e o tempo real disponível por dia.',
          'Peça à IA um plano em etapas e ajuste para caber na sua rotina.',
          'Liste pelo menos 2 fontes confiáveis que você conferiu (material oficial, edital, curso conhecido, apostila) e use a IA para entender o trecho mais difícil de uma delas, conferindo no original.',
          'Faça uma sessão de treino: perguntas uma de cada vez, simulado ou ensaio de entrevista, e registre o feedback.',
          'Defina as datas de revisão espaçada e o que vai treinar em cada uma.'
        ],
        checklist:[
          'O objetivo é concreto e ligado à minha realidade.',
          'O plano cabe no tempo que eu realmente tenho.',
          'As fontes foram conferidas por mim, não só indicadas pela IA, e o trecho difícil foi conferido no original.',
          'Registrei uma sessão de treino real e as datas de revisão.'
        ],
        minimo:400
      }}
  ]}
];

const MODDONE = {
  1: 'Você já escreve, ajusta o tom e resume mais rápido, sem abrir mão da revisão. O rascunho é da IA, a responsabilidade é sua.',
  2: 'Você aprendeu a usar a IA para planilhas, planos, checklists e orçamentos, sempre testando e conferindo os números.',
  3: 'Parabéns, você concluiu o curso IA no Trabalho e no Dia a Dia! A IA agora trabalha a seu favor na comunicação, na organização e no estudo, com você no comando, e você já pode emitir o certificado do curso. Próximo passo da trilha: o curso "Automação Sem Código".'
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
const LIC = { '1.1':'✉️','1.2':'📝','1.3':'🌡️','1.4':'🪞','1.5':'📲','1.6':'📣','2.1':'🧮','2.2':'🗓️','2.3':'✅','2.4':'🧾','2.5':'🧱','2.6':'🤝','2.7':'🗂️','3.1':'🔎','3.2':'🎓','3.3':'🧗','3.4':'🎭','3.5':'📜','3.6':'📈' };

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
