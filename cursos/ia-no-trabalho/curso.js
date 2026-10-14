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
    { id:'1.7', title:'Respostas prontas para o atendimento no WhatsApp', min:12,
      body:[
        `<div class="card analogy"><h3>🗂️ A pasta de respostas do balcão</h3><p>Na farmácia do bairro, o atendente ouve a mesma pergunta vinte vezes por dia: "abre domingo?", "aceita Pix?", "entrega em casa?". Quem tem as respostas na ponta da língua atende rápido, sem esquecer nenhum detalhe. A IA ajuda você a montar essa <b>pasta de respostas</b> para o WhatsApp do seu negócio, mas as informações dentro dela precisam ser as verdadeiras.</p></div>`,
        `<div class="term"><b>Resposta rápida</b> = mensagem salva no WhatsApp Business que você chama com um atalho, digitando "/" e o nome dela. <b>Mensagem de ausência</b> = resposta automática enviada fora do horário de atendimento. <b>Perguntas frequentes</b> = dúvidas que os clientes repetem toda semana.</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: a oficina de bicicletas</h3><p>Seu Antônio tem uma oficina de bicicletas em Recife e passa boa parte do dia respondendo as mesmas perguntas no WhatsApp.</p>
          <div class="flows">
            <div class="flow old"><h4>Pedido fraco</h4><div class="node">Ele pediu só "faça respostas automáticas para a minha oficina". Veio um texto bonito, mas com horário de sábado que ele não tem, parcelamento em 12 vezes que ele não oferece e um tom de banco.</div></div>
            <div class="flow new"><h4>Pedido melhorado</h4><div class="node good">Ele listou as 6 perguntas mais comuns e escreveu, do jeito dele, a resposta verdadeira de cada uma: horário, formas de pagamento, prazo de revisão, se busca a bicicleta em casa. Pediu que a IA deixasse cada resposta com até 3 linhas, tom simpático, e usasse [NOME] e [DATA] onde muda de cliente para cliente.</div></div>
          </div>
          <p style="margin-top:14px">O que estava errado no primeiro pedido: a IA não sabia nada da oficina, então preencheu com o que é comum em outras empresas. O resultado do segundo: 6 respostas curtas, que Seu Antônio leu, ajustou duas palavras e salvou como respostas rápidas.</p>
          <div class="tw"><table class="tbl"><tr><th>Pergunta comum</th><th>Atalho salvo</th><th>O que conferir</th></tr>
          <tr><td>Qual o horário?</td><td>/horario</td><td>Dias e horários reais, inclusive feriados</td></tr>
          <tr><td>Aceita Pix?</td><td>/pagamento</td><td>Formas aceitas e se há taxa no cartão</td></tr>
          <tr><td>Quanto tempo leva a revisão?</td><td>/prazo</td><td>Prazo que ele consegue cumprir na semana cheia</td></tr></table></div></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><ol class="golden"><li><span><b>Informação inventada</b>: se a resposta cita algo que você não disse (horário, desconto, garantia), a IA completou por conta própria. Corte.</span></li><li><span><b>Resposta que não responde</b>: leia como se fosse o cliente. Depois de ler, ele sabe o que fazer? Se não, falta o próximo passo.</span></li><li><span><b>Mensagem de ausência que promete demais</b>: "respondemos em 5 minutos" fora do horário gera frustração. Prometa o que cumpre, como "respondemos a partir das 8h".</span></li><li><span><b>Respostas esquecidas</b>: preço e horário mudam. Marque no calendário uma revisão das respostas salvas a cada mês.</span></li></ol></div>`,
        `<div class="card"><h3>🧭 Agora é sua vez</h3><p>Use o Microsoft Copilot ou o Claude, nas versões gratuitas, por uns 10 minutos.</p>
          <ol class="golden"><li><span>Anote as 5 perguntas que mais chegam no seu WhatsApp (do seu negócio ou de onde você trabalha).</span></li><li><span>Escreva, com as suas palavras, a resposta verdadeira de cada uma.</span></li><li><span>Escreva o seu próprio pedido para a IA deixar as respostas curtas, no seu tom e com [VARIÁVEIS] no lugar de dados de clientes.</span></li><li><span>Leia cada resposta como se fosse o cliente e corte tudo o que você não disse.</span></li><li><span>Se usar o WhatsApp Business, salve pelo menos 2 como respostas rápidas.</span></li></ol>
          <p>🔒 Não cole conversas reais com nomes e telefones de clientes. Pela LGPD, esses dados só devem ser usados para a finalidade que o cliente espera.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a resposta pronta só ajuda se a informação dentro dela for verdadeira.</div>`
      ],
      ch:[
        { who:'Rosângela, 47 anos, dona de um pet shop em Belo Horizonte', says:'Pedi à IA uma mensagem de ausência e ela escreveu que respondemos "em até 10 minutos, 24 horas por dia". Eu atendo sozinha, das 9h às 18h.',
          q:'O que Rosângela deve fazer?',
          opts:[
            {t:'Usar assim, porque passa uma imagem profissional.', ok:false, why:'Prometer o que não cumpre frustra o cliente e passa a imagem oposta quando ninguém responde.'},
            {t:'Trocar pela informação real, como "respondemos a partir das 9h", e dizer à IA o horário verdadeiro na próxima vez.', ok:true, why:'A mensagem de ausência precisa refletir o horário real. Sem essa informação, a IA inventa um padrão.'},
            {t:'Desligar a mensagem de ausência.', ok:false, why:'A mensagem é útil para o cliente saber quando terá resposta. Basta deixá-la verdadeira.'}
          ]},
        { who:'Thiago, 32 anos, atendente de uma loja de celulares', says:'Quero colar as últimas 200 conversas do WhatsApp da loja na IA para ela descobrir as perguntas mais comuns.',
          q:'Qual é o caminho mais cuidadoso?',
          opts:[
            {t:'Colar tudo, porque assim a lista fica mais completa.', ok:false, why:'As conversas têm nomes, telefones e às vezes endereços. Não precisam ir para a IA.'},
            {t:'Colar só os números de telefone, sem as mensagens.', ok:false, why:'Telefone é dado pessoal e não ajuda em nada a descobrir as perguntas.'},
            {t:'Anotar ele mesmo as perguntas que se repetem, sem dados de clientes, e pedir à IA ajuda para escrever as respostas.', ok:true, why:'Ele conhece as perguntas do dia a dia. A IA ajuda na redação sem receber dados de ninguém.'}
          ]},
        { who:'Dona Cida, 58 anos, vende bolos caseiros em Goiânia', says:'Montei minhas respostas rápidas há seis meses. Um cliente reclamou que pagou o preço antigo que estava na mensagem.',
          q:'O que faltou no processo dela?',
          opts:[
            {t:'Revisar as respostas salvas sempre que preço, horário ou condição mudam, por exemplo uma vez por mês.', ok:true, why:'Resposta pronta desatualizada vira promessa errada. Uma revisão periódica evita o problema.'},
            {t:'Pedir à IA respostas mais longas.', ok:false, why:'O tamanho não era o problema. O preço estava desatualizado.'},
            {t:'Nunca colocar preço em resposta pronta.', ok:false, why:'Preço na resposta ajuda o cliente. Só precisa estar atualizado.'}
          ]}
      ]},
    { id:'1.8', title:'Linguagem simples: avisos que todo mundo entende', min:12,
      body:[
        `<div class="card analogy"><h3>🪧 A placa da estrada</h3><p>Uma placa de trânsito precisa ser entendida em dois segundos, por qualquer pessoa, a 80 km/h. Ninguém escreve numa placa "Prezado condutor, informamos que, em virtude de obras, faz-se necessário reduzir a velocidade". Escreve "Obras. Reduza a velocidade". Avisos de trabalho deveriam seguir a mesma ideia: <b>quem lê precisa entender de primeira</b>. A IA é uma boa ajudante para simplificar.</p></div>`,
        `<div class="term"><b>Linguagem simples</b> = jeito de escrever para que a pessoa encontre, entenda e use a informação na primeira leitura. <b>Jargão</b> = palavra técnica de uma profissão, como "SLA" ou "protocolo de atendimento". <b>Público</b> = quem vai ler, com o que essa pessoa já sabe e o que não sabe.</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: o aviso da clínica</h3><p>Luana trabalha na recepção de uma clínica de fisioterapia e precisa avisar os pacientes sobre a nova regra de faltas.</p>
          <div class="flows">
            <div class="flow old"><h4>Antes</h4><div class="node">"Informamos que, conforme deliberação da diretoria, a ausência injustificada às sessões previamente agendadas, sem comunicação prévia com antecedência mínima de 24 horas, ensejará a perda da respectiva sessão."</div></div>
            <div class="flow new"><h4>Depois</h4><div class="node good">"Não vai poder vir? Avise até 24 horas antes pelo WhatsApp da clínica. Se não avisar, a sessão é contada como feita."</div></div>
          </div>
          <p style="margin-top:14px">Como ela chegou lá com a IA:</p>
          <ol class="golden"><li><span>Disse <b>quem lê</b>: pacientes de várias idades, muitos idosos, que leem no celular.</span></li><li><span>Pediu para trocar palavras difíceis por palavras do dia a dia e usar frases curtas.</span></li><li><span>Pediu que a ação viesse primeiro ("avise até 24 horas antes") e a consequência depois.</span></li><li><span>Conferiu se a regra continuava igual: prazo, canal e consequência. Simplificar não pode mudar o sentido.</span></li></ol>
          <div class="tw"><table class="tbl"><tr><th>Em vez de</th><th>Prefira</th></tr>
          <tr><td>Em virtude de</td><td>Por causa de</td></tr>
          <tr><td>Efetuar o pagamento</td><td>Pagar</td></tr>
          <tr><td>Antecedência mínima de 24 horas</td><td>Até 24 horas antes</td></tr></table></div></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><ol class="golden"><li><span><b>Simplificar demais e perder a regra</b>: a IA pode cortar uma exceção importante. Compare item por item com o original.</span></li><li><span><b>Tom infantil</b>: linguagem simples não é falar como se o leitor fosse criança. Se soar condescendente, peça tom respeitoso.</span></li><li><span><b>Aviso sem ação</b>: se a pessoa termina de ler e não sabe o que fazer, falta o pedido claro.</span></li><li><span><b>Teste que ninguém faz</b>: o melhor teste é mostrar a uma pessoa do público e pedir que ela explique o aviso com as palavras dela.</span></li></ol></div>`,
        `<div class="card"><h3>🧭 Agora é sua vez</h3><p>Use o Claude ou o Microsoft Copilot, nas versões gratuitas, por cerca de 10 minutos.</p>
          <ol class="golden"><li><span>Escolha um aviso, regra ou instrução difícil do seu trabalho (ou um texto público, como uma regra do condomínio).</span></li><li><span>Retire nomes e dados internos que não podem sair da empresa.</span></li><li><span>Escreva o seu próprio pedido dizendo quem vai ler, onde vai ler e o que a pessoa precisa fazer.</span></li><li><span>Compare a nova versão com a original, regra por regra.</span></li><li><span>Mostre a uma pessoa e veja se ela entende de primeira.</span></li></ol></div>`,
        `<div class="card"><h3>💡 Quatro perguntas antes de enviar um aviso</h3><p>Antes de publicar qualquer aviso, responda: <b>quem lê?</b> (idade, familiaridade com o assunto, se lê no celular); <b>o que a pessoa precisa fazer?</b> (a ação vem primeiro); <b>até quando?</b> (data clara, de preferência com o dia da semana); <b>e se não fizer?</b> (a consequência, sem tom de ameaça). Se o aviso responde às quatro, está quase pronto. Vale também pedir à IA que aponte as palavras que alguém de fora da área poderia não entender e, para quem prefere ouvir, gravar você mesmo um áudio curto com o mesmo conteúdo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que uma placa de "cuidado, piso molhado" funciona melhor do que um parágrafo inteiro sobre o chão.</div>`
      ],
      ch:[
        { who:'Edson, 51 anos, síndico de um prédio em Curitiba', says:'Pedi à IA para simplificar a regra da garagem. Ficou ótima, mas sumiu a parte que diz que moto não pode ocupar vaga de visitante.',
          q:'O que isso mostra?',
          opts:[
            {t:'Que a versão simples está certa, porque ficou mais curta.', ok:false, why:'Curto não é o mesmo que correto. Uma regra perdida gera conflito entre moradores.'},
            {t:'Que simplificar não pode mudar a regra: é preciso comparar com o original e devolver o que foi cortado.', ok:true, why:'Linguagem simples muda o jeito de dizer, não o conteúdo. A conferência item por item pega esse corte.'},
            {t:'Que regras de condomínio não podem ser simplificadas.', ok:false, why:'Podem e devem. Só precisam continuar completas.'}
          ]},
        { who:'Cristiane, 44 anos, agente comunitária de saúde', says:'Preciso explicar a campanha de vacinação para famílias do bairro. A IA escreveu um texto simples, mas cheio de "você consegue, campeão!" e emojis.',
          q:'Qual ajuste faz sentido?',
          opts:[
            {t:'Pedir tom respeitoso e direto, para adultos de todas as idades, mantendo frases curtas e as informações de data, local e documentos.', ok:true, why:'Linguagem simples é clara e respeitosa. Tom infantil pode soar desrespeitoso para os adultos.'},
            {t:'Voltar ao texto técnico do ministério, para parecer sério.', ok:false, why:'O texto técnico era justamente o que dificultava o entendimento.'},
            {t:'Enviar assim, emojis sempre chamam atenção.', ok:false, why:'O problema não é chamar atenção, é o tom que pode afastar quem lê.'}
          ]},
        { who:'Fábio, 36 anos, supervisor de uma transportadora', says:'Reescrevi com a IA o procedimento de entrega para os motoristas. Achei claríssimo. Já posso mandar?',
          q:'Qual é o melhor teste antes de enviar?',
          opts:[
            {t:'Pedir à IA que confirme se está claro.', ok:false, why:'A IA tende a aprovar o próprio texto. Quem precisa entender é o motorista.'},
            {t:'Ler de novo ele mesmo, com mais atenção.', ok:false, why:'Quem escreveu já sabe o que quis dizer e não percebe o que está confuso.'},
            {t:'Mostrar a um ou dois motoristas e pedir que expliquem o procedimento com as próprias palavras.', ok:true, why:'Se o público explica certo, o texto funciona. Se não, aparece exatamente onde ajustar.'}
          ]}
      ]},
    { id:'1.9', title:'Traduzir e adaptar mensagens para outro idioma', min:12,
      body:[
        `<div class="card analogy"><h3>🌎 O primo que mora fora</h3><p>Quando você precisa falar com alguém de outro país, ajuda muito ter um primo que mora lá: ele não troca só as palavras, ele sabe <b>como as pessoas de lá falam</b>. A IA traduz bem e pode adaptar o jeito de dizer, mas ela não conhece o seu negócio, e um número trocado numa tradução pode virar prejuízo.</p></div>`,
        `<div class="term"><b>Tradução</b> = passar o texto de uma língua para outra. <b>Adaptação</b> = ajustar exemplos, formatos e tom à cultura de quem lê. <b>Falso cognato</b> = palavra parecida com o português, mas com outro sentido, como "pretend" (fingir, e não pretender) ou "exquisito" em espanhol (delicioso, e não esquisito).</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: a pousada e o casal americano</h3><p>Gabriela cuida das reservas de uma pousada em Florianópolis e recebeu um pedido de reserva em inglês, de um casal dos Estados Unidos.</p>
          <div class="flows">
            <div class="flow old"><h4>Antes</h4><div class="node">Ela colou a resposta em português num tradutor e enviou sem ler. O texto saiu com a data "02/03", que o casal leu como 3 de fevereiro em vez de 2 de março, o preço sem dizer a moeda e sem explicar que o Pix não funciona para quem não tem conta no Brasil.</div></div>
            <div class="flow new"><h4>Depois</h4><div class="node good">Ela pediu à IA a tradução para o inglês, com a data por extenso ("March 2"), o valor em reais com a observação de que é em reais, e uma frase explicando as formas de pagamento para estrangeiros. Depois, pediu que a IA traduzisse de volta para o português, para conferir.</div></div>
          </div>
          <p style="margin-top:14px">A técnica da <b>tradução de volta</b> é simples: se o texto que volta para o português disser algo diferente do original, há um problema na tradução.</p>
          <div class="pipe"><div class="node ink">Texto em português</div><div class="ar">➜</div><div class="node yel">Tradução adaptada</div><div class="ar">➜</div><div class="node ink">Volta para o português</div><div class="ar">➜</div><div class="node ink">Comparação</div></div></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><ol class="golden"><li><span><b>Números e datas trocados</b>: nos Estados Unidos, a data vem com o mês primeiro, e o separador de milhar é a vírgula. Escreva datas por extenso e confira valores um a um.</span></li><li><span><b>Tom errado para a cultura</b>: um e-mail informal demais pode soar desrespeitoso para um fornecedor estrangeiro. Diga quem lê e o grau de formalidade.</span></li><li><span><b>Documento oficial traduzido por IA</b>: contratos e documentos para órgãos públicos de outro país costumam exigir tradução juramentada ou revisão profissional.</span></li><li><span><b>Gíria que não viaja</b>: "tá tranquilo, favorável" não tem tradução. Prefira frases neutras.</span></li></ol></div>`,
        `<div class="card"><h3>🧭 Agora é sua vez</h3><p>Use o Microsoft Copilot ou o Claude, nas versões gratuitas, por cerca de 10 minutos.</p>
          <ol class="golden"><li><span>Escolha uma mensagem curta do seu trabalho que poderia ir para um cliente ou fornecedor estrangeiro.</span></li><li><span>Troque nomes e valores reais por fictícios.</span></li><li><span>Escreva o seu próprio pedido de tradução, dizendo o idioma, quem lê e o tom.</span></li><li><span>Peça a tradução de volta para o português e compare com o original.</span></li><li><span>Marque datas, números e prazos e confira cada um.</span></li></ol></div>`,
        `<div class="card"><h3>💡 Tradutor ou assistente de IA?</h3><p>Tradutores como o Google Tradutor e o DeepL são rápidos para entender uma mensagem que você recebeu. Assistentes de IA, como o Copilot e o Claude, ajudam mais quando você precisa adaptar o tom, explicar um contexto ou escrever uma resposta do zero. Nos dois casos vale a mesma regra: tudo o que envolve valor, data, prazo ou compromisso é conferido por você. Se você conversa sempre com o mesmo cliente ou fornecedor estrangeiro, guarde as frases que já deram certo numa pequena lista de respostas no idioma dele e reutilize.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que traduzir uma piada palavra por palavra quase nunca tem graça.</div>`
      ],
      ch:[
        { who:'Wellington, 39 anos, compra peças de um fornecedor da China', says:'Traduzi meu pedido para o inglês com IA. Escrevi "5.000 unidades" e a tradução saiu "5.000 units". Está certo?',
          q:'Qual é o risco e como evitar?',
          opts:[
            {t:'Nenhum risco, número é igual em qualquer língua.', ok:false, why:'Em inglês, o ponto separa decimais. "5.000" pode ser lido como cinco unidades.'},
            {t:'Trocar por "5,000 units" ou escrever "five thousand units", e conferir todos os números do pedido.', ok:true, why:'Separadores de milhar e decimal mudam entre países. Escrever no padrão do leitor, ou por extenso, evita um pedido errado.'},
            {t:'Mandar em português, o fornecedor que traduza.', ok:false, why:'Isso transfere o risco para o fornecedor e aumenta a chance de erro.'}
          ]},
        { who:'Juliana, 27 anos, guia de turismo em Salvador', says:'Vou mandar o roteiro em inglês para um grupo. Como sei se a tradução da IA não mudou nada importante?',
          q:'Qual técnica ajuda Juliana a conferir?',
          opts:[
            {t:'Perguntar à IA se a tradução está perfeita.', ok:false, why:'A IA tende a confirmar o próprio trabalho. A conferência precisa comparar com o original.'},
            {t:'Confiar, porque a IA é melhor em inglês do que ela.', ok:false, why:'Mesmo boa, a IA pode trocar horários, locais ou valores. O roteiro é responsabilidade dela.'},
            {t:'Pedir a tradução de volta para o português, comparar com o original e conferir horários, locais e valores.', ok:true, why:'A tradução de volta mostra mudanças de sentido, e os dados críticos ela confere um por um.'}
          ]},
        { who:'Seu Akira, 63 anos, aposentado que vai tirar a cidadania japonesa', says:'Vou traduzir minha certidão de nascimento com IA para entregar no consulado. Fica mais barato.',
          q:'O que ele deve verificar antes?',
          opts:[
            {t:'Se o consulado exige tradução juramentada ou feita por profissional, consultando o site oficial.', ok:true, why:'Documentos oficiais costumam ter exigências próprias. A regra do órgão vale mais do que a economia.'},
            {t:'Nada, qualquer tradução serve.', ok:false, why:'Se a tradução não for aceita, ele perde tempo e pode atrasar o processo.'},
            {t:'Só se a IA traduziu os nomes corretamente.', ok:false, why:'Os nomes importam, mas a primeira pergunta é se esse tipo de tradução é aceito.'}
          ]}
      ]},
    { id:'1.10', title:'Relatório curto de resultados para chefe ou cliente', min:12,
      body:[
        `<div class="card analogy"><h3>⚽ O resumo do jogo</h3><p>Quem perdeu o jogo não quer ouvir os 90 minutos lance por lance. Quer saber o placar, quem fez os gols e se o time se classificou. Um relatório de trabalho é igual: <b>quem lê quer primeiro o resultado, depois o que precisa decidir</b>. A IA ajuda a sair da lista de tudo o que você fez para o resumo que importa.</p></div>`,
        `<div class="term"><b>Relatório curto</b> = texto de meia página, ou menos, que conta o andamento de um trabalho. <b>Resultado</b> = o que mudou de fato, de preferência com número. <b>Pedido de decisão</b> = o que você precisa que a pessoa aprove, escolha ou responda.</div>`,
        `<div class="card"><h3>A ordem que funciona</h3><ol class="golden"><li><span><b>Resultado principal</b> em uma frase, com número quando tiver.</span></li><li><span><b>O que foi feito</b>, em 2 ou 3 tópicos.</span></li><li><span><b>Problemas ou riscos</b>, sem esconder.</span></li><li><span><b>Próximos passos</b>, com prazo.</span></li><li><span><b>O que você precisa</b> de quem lê.</span></li></ol></div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: o mês da padaria</h3><p>Renata é gerente de uma padaria em Goiânia e precisa mandar ao dono o resumo do mês. Ela tinha anotações soltas: testou entrega por aplicativo, um forno quebrou por 3 dias, as vendas de salgados subiram, falta decidir o horário de domingo.</p>
          <div class="flows">
            <div class="flow old"><h4>Antes</h4><div class="node">Colou as anotações na IA e pediu "faz um relatório". Veio uma página e meia, com títulos como "Introdução" e "Considerações finais", e o pedido sobre o domingo escondido no último parágrafo. O dono não leu até o fim.</div></div>
            <div class="flow new"><h4>Depois</h4><div class="node good">Ela disse à IA quem lê (o dono, que lê pelo celular), o tamanho (até 10 linhas), a ordem (resultado, feito, problemas, próximos passos, decisão) e pediu que a decisão sobre o domingo viesse destacada logo no começo. Depois conferiu cada número nas anotações.</div></div>
          </div>
          <p style="margin-top:14px"><b>Resultado esperado:</b> uma mensagem que o dono lê em 1 minuto e responde no mesmo dia: "Vendas de salgados subiram 15% (valor do exemplo). Preciso da sua decisão sobre abrir domingo até 14h ou 18h."</p></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><ol class="golden"><li><span><b>A IA arredonda ou inventa números:</b> "cerca de 20%" quando era 15%. Confira cada número com a sua anotação.</span></li><li><span><b>Esconder o problema:</b> pedir para "deixar positivo" pode apagar o forno quebrado. Quem lê descobre depois e perde a confiança.</span></li><li><span><b>Relatório de atividades em vez de resultados:</b> "fiz 12 reuniões" diz pouco; "fechamos 2 contratos" diz o que mudou.</span></li><li><span><b>Pedido de decisão no fim:</b> se a pessoa precisa responder algo, isso vai no começo.</span></li></ol></div>`,
        `<div class="card"><h3>🧭 Agora é sua vez</h3><p>Use o Claude ou o Microsoft Copilot, nas versões gratuitas, por cerca de 10 minutos.</p>
          <ol class="golden"><li><span>Escreva anotações soltas sobre uma semana ou um mês do seu trabalho, com números fictícios.</span></li><li><span>Escreva o seu próprio pedido dizendo quem lê, onde lê, o tamanho e a ordem dos 5 blocos.</span></li><li><span>Confira cada número da resposta com as suas anotações.</span></li><li><span>Veja se o problema aparece com honestidade e se o pedido de decisão está no começo.</span></li><li><span>Corte o que quem lê não precisa saber.</span></li></ol><p>🔒 Não cole faturamento real, salários nem nomes de clientes; use valores fictícios.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que, ao contar como foi a escola, o melhor é começar por "tirei 9 na prova" e não pela hora em que acordou.</div>`
      ],
      ch:[
        { who:'Cristiano, 37 anos, supervisor de uma equipe de vendas', says:'Mandei para a diretora um relatório de 2 páginas feito com IA. Ela respondeu: "qual é o resumo?". Eu precisava que ela aprovasse a contratação de mais um vendedor.',
          q:'Como ele deveria ter pedido o relatório?',
          opts:[
            {t:'Pedir um texto ainda mais completo, para mostrar todo o trabalho.', ok:false, why:'O problema foi justamente o tamanho. Mais texto esconde ainda mais o pedido.'},
            {t:'Dizer à IA quem lê, limitar o tamanho e pedir o resultado e o pedido de aprovação logo no começo.', ok:true, why:'Quem decide precisa ver primeiro o resultado e o que deve aprovar. O resto vem em seguida, curto.'},
            {t:'Mandar só "preciso contratar mais um vendedor", sem relatório.', ok:false, why:'Sem resultado nem motivo, a diretora não tem base para aprovar.'}
          ]},
        { who:'Priscila, 31 anos, social media freelancer', says:'Minhas anotações diziam que o perfil da cliente cresceu 8% no mês. O relatório da IA dizia "crescimento de quase 10%".',
          q:'O que ela deve fazer?',
          opts:[
            {t:'Manter, porque "quase 10%" soa melhor e é parecido.', ok:false, why:'É um número errado. Se a cliente conferir, a confiança no trabalho cai.'},
            {t:'Corrigir para 8% e conferir todos os outros números do relatório com as anotações.', ok:true, why:'Se a IA arredondou um número, pode ter mexido em outros. Conferir tudo é parte do trabalho.'},
            {t:'Pedir à IA para conferir os próprios números.', ok:false, why:'A IA pode confirmar o próprio erro. A conferência é com a anotação original.'}
          ]},
        { who:'Valéria, 44 anos, coordenadora de um projeto de reforma', says:'A obra atrasou uma semana por falta de material. Pensei em pedir para a IA "deixar o relatório positivo" e nem citar o atraso.',
          q:'Qual é a melhor escolha?',
          opts:[
            {t:'Esconder o atraso para o cliente não ficar preocupado.', ok:false, why:'O cliente vai perceber o atraso. Descobrir depois é pior do que saber agora.'},
            {t:'Citar o atraso só se o cliente perguntar.', ok:false, why:'Esperar a pergunta passa a impressão de esconder. O relatório é o lugar certo para avisar.'},
            {t:'Informar o atraso com clareza, a causa e o novo prazo, junto com o que já foi feito.', ok:true, why:'Contar o problema com o plano de solução mantém a confiança e evita surpresas.'}
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
    { id:'2.8', title:'Controle de caixa: entradas e saídas sem susto', min:12,
      body:[
        `<div class="card analogy"><h3>🐷 O cofrinho com tampa de vidro</h3><p>Um cofrinho fechado não diz quanto tem dentro: você só descobre quando quebra. Um cofrinho com tampa de vidro mostra o dinheiro entrando e saindo. O controle de caixa é essa <b>tampa de vidro do seu negócio</b>. A IA ajuda a montar a planilha e a entender os números, mas quem anota e confere é você.</p></div>`,
        `<div class="term"><b>Entrada</b> = dinheiro que chega (vendas, Pix recebido). <b>Saída</b> = dinheiro que sai (fornecedor, aluguel, taxa da maquininha). <b>Saldo</b> = entradas menos saídas. <b>Fluxo de caixa</b> = registro dessas entradas e saídas ao longo dos dias, para prever se vai faltar dinheiro.</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: a manicure que não sabia quanto ganhava</h3><p>Tatiane é manicure e MEI em São Paulo. Recebe por Pix, dinheiro e cartão, compra material toda semana e, no fim do mês, nunca sabe se teve lucro.</p>
          <div class="flows">
            <div class="flow old"><h4>Antes</h4><div class="node">Ela perguntou à IA "quanto eu lucrei este mês?" e colou o extrato do banco. A IA respondeu um valor, mas misturou uma transferência da irmã com venda e esqueceu a taxa do cartão. Além disso, o extrato tinha nomes e CPFs de clientes.</div></div>
            <div class="flow new"><h4>Depois</h4><div class="node good">Ela pediu à IA só a <b>estrutura</b>: quais colunas usar e quais fórmulas somam entradas e saídas por mês. Montou a planilha no Google Planilhas e passou a anotar cada movimento, separando dinheiro pessoal do dinheiro do negócio. As somas são feitas pela planilha.</div></div>
          </div>
          <div class="tw"><table class="tbl"><tr><th>Data</th><th>Descrição</th><th>Tipo</th><th>Categoria</th><th>Valor</th></tr>
          <tr><td>03/03</td><td>Pé e mão</td><td>Entrada</td><td>Serviço</td><td>R$ 60</td></tr>
          <tr><td>04/03</td><td>Esmaltes e algodão</td><td>Saída</td><td>Material</td><td>R$ 85</td></tr>
          <tr><td>05/03</td><td>Taxa da maquininha</td><td>Saída</td><td>Taxas</td><td>R$ 3</td></tr></table></div>
          <p>Com a planilha pronta, ela pede à IA ajuda para <b>interpretar</b>: "quais categorias de saída mais cresceram?" e "que perguntas eu deveria fazer sobre esses números?". As contas continuam na planilha. Para o MEI, ela também guarda as notas e preenche o relatório mensal de receitas, conferindo as regras no Portal do Empreendedor ou com o contador.</p></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><ol class="golden"><li><span><b>Misturar dinheiro pessoal e do negócio</b>: o Pix do aluguel de casa entra na conta e o lucro parece maior. Use uma categoria "pessoal" ou, melhor, contas separadas.</span></li><li><span><b>Pedir a conta à IA</b>: ela pode errar somas. Se o total da IA não bate com a planilha, vale a planilha.</span></li><li><span><b>Esquecer pequenas saídas</b>: taxas, gás, transporte. Somadas, elas fazem diferença.</span></li><li><span><b>Colar o extrato inteiro</b>: extrato tem dados pessoais de clientes e seus. Não precisa ir para a IA.</span></li></ol></div>`,
        `<div class="card"><h3>🧭 Agora é sua vez</h3><p>Use o Google Planilhas com um assistente de IA (ChatGPT, Gemini ou Copilot) aberto ao lado, por cerca de 15 minutos.</p>
          <ol class="golden"><li><span>Escreva o seu próprio pedido descrevendo o seu negócio (ou a sua casa) e pedindo as colunas de um controle de caixa simples.</span></li><li><span>Crie a planilha com 10 movimentos fictícios, incluindo pelo menos uma taxa.</span></li><li><span>Peça a fórmula de soma por tipo e aplique.</span></li><li><span>Some 3 linhas na calculadora e veja se bate com a planilha.</span></li><li><span>Pergunte à IA o que observar nesses números, sem colar dados reais.</span></li></ol></div>`,
        `<div class="card"><h3>💡 Prever, e não só registrar</h3><p>Com algumas semanas de registro, o controle de caixa mostra padrões: a semana do mês em que entra menos dinheiro, as contas que vencem juntas, o mês de movimento fraco. Peça à IA ajuda para montar uma aba de previsão com as contas fixas do próximo mês (aluguel, DAS do MEI, internet) e compare com a média de entradas. Se a previsão mostra que vai faltar, você descobre com antecedência e consegue negociar prazo ou guardar uma reserva. A decisão continua sua: a planilha só acende a luz amarela antes.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que é preciso anotar também o dinheiro que sai, e não só o que entra.</div>`
      ],
      ch:[
        { who:'Reginaldo, 41 anos, dono de um food truck em Fortaleza', says:'A IA me disse que meu lucro de março foi R$ 4.200. Na minha planilha, deu R$ 3.650.',
          q:'Em qual número ele deve confiar?',
          opts:[
            {t:'No da IA, porque ela calcula mais rápido.', ok:false, why:'Rapidez não é precisão. A IA pode errar somas ou ter lido dados errados.'},
            {t:'Na média dos dois.', ok:false, why:'Média de um número certo com um errado continua errada.'},
            {t:'No da planilha, depois de conferir algumas linhas, e usar a IA só para entender os números, não para calcular.', ok:true, why:'Contas ficam na planilha. A IA ajuda a montar a estrutura e a interpretar.'}
          ]},
        { who:'Michele, 33 anos, costureira e MEI', says:'O Pix da pensão do meu filho cai na mesma conta das clientes. Meu controle diz que o ateliê fatura mais do que fatura de verdade.',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Separar o que é pessoal do que é do negócio, com categoria própria ou conta separada.', ok:true, why:'Misturar dinheiro pessoal infla o faturamento e atrapalha decisões e obrigações do MEI.'},
            {t:'Deixar como está, dinheiro é tudo igual.', ok:false, why:'Para saber se o ateliê dá lucro, é preciso olhar só o dinheiro do ateliê.'},
            {t:'Pedir à IA para adivinhar quais Pix são de clientes.', ok:false, why:'A IA não sabe a origem de cada Pix. Seria chute, e exigiria expor dados pessoais.'}
          ]},
        { who:'Osvaldo, 55 anos, tem uma pequena loja de material de construção', says:'Quero que a IA analise meu caixa. Vou colar o extrato do banco do mês inteiro, com nome de quem pagou.',
          q:'Qual é o jeito mais seguro?',
          opts:[
            {t:'Colar o extrato, a IA precisa dos detalhes.', ok:false, why:'Nomes e dados bancários de clientes não são necessários para a análise e não devem ir para a IA.'},
            {t:'Não analisar o caixa.', ok:false, why:'Entender o caixa é importante. Dá para fazer isso sem expor ninguém.'},
            {t:'Resumir o mês por categoria na planilha, sem nomes, e pedir à IA perguntas e observações sobre esse resumo.', ok:true, why:'O resumo por categoria basta para a análise e mantém os dados pessoais protegidos.'}
          ]}
      ]},
    { id:'2.9', title:'E-mails e arquivos em ordem', min:12,
      body:[
        `<div class="card analogy"><h3>🗄️ A gaveta de documentos da família</h3><p>Toda casa tem aquela gaveta onde vai tudo: conta de luz, receita médica, garantia da geladeira. Quando precisa de um papel, perde-se meia hora. Com pastas etiquetadas, leva um minuto. No computador e no e-mail acontece o mesmo. A IA ajuda a <b>desenhar o sistema de pastas e regras</b>; quem cria e mantém é você.</p></div>`,
        `<div class="term"><b>Padrão de nomes</b> = jeito fixo de nomear arquivos, como "2026-03-15_ClienteA_orcamento". <b>Marcador ou pasta</b> = etiqueta que agrupa e-mails do mesmo assunto. <b>Filtro ou regra</b> = instrução que o Gmail ou o Outlook segue sozinho, como mover todo e-mail de um fornecedor para uma pasta.</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: o escritório de contabilidade</h3><p>Renato trabalha num pequeno escritório de contabilidade e recebe mais de 80 e-mails por dia. Os arquivos chamam "documento final", "documento final 2" e "agora sim".</p>
          <div class="flows">
            <div class="flow old"><h4>Antes</h4><div class="node">Caixa de entrada com 3 mil e-mails não lidos, notas fiscais misturadas com propaganda e arquivos sem data. Para achar a nota de um cliente, ele usava a busca e torcia.</div></div>
            <div class="flow new"><h4>Depois</h4><div class="node good">Ele descreveu à IA os tipos de e-mail que recebe (notas, dúvidas de clientes, boletos, propaganda) e pediu uma estrutura de pastas e um padrão de nomes. Ajustou à realidade do escritório, criou 5 marcadores e 3 filtros, e passou a nomear arquivos com data no começo.</div></div>
          </div>
          <ol class="golden"><li><span>Data no começo do nome, no formato ano-mês-dia: assim os arquivos ficam em ordem sozinhos.</span></li><li><span>Poucas pastas: 5 a 8 bem usadas valem mais que 40 esquecidas.</span></li><li><span>Filtros só para o que é previsível, como e-mails de um mesmo remetente.</span></li><li><span>15 minutos por semana para esvaziar a caixa de entrada.</span></li></ol>
          <p>A IA também ajuda a explicar o passo a passo de criar um filtro no Gmail ou no Outlook. Se o menu que ela descreve não existir, confira na ajuda oficial do programa: as telas mudam com o tempo.</p></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><ol class="golden"><li><span><b>Sistema complicado demais</b>: se você precisa pensar em qual pasta vai cada arquivo, há pastas demais.</span></li><li><span><b>Filtro que esconde o importante</b>: um filtro que manda tudo para uma pasta pode esconder a cobrança urgente. Teste e confira a pasta nos primeiros dias.</span></li><li><span><b>Colar e-mails de clientes na IA</b>: para desenhar o sistema, ela só precisa dos tipos de e-mail, não do conteúdo.</span></li><li><span><b>Apagar sem pensar</b>: notas fiscais e documentos de clientes podem ter prazo de guarda. Arquive em vez de apagar.</span></li></ol></div>`,
        `<div class="card"><h3>🧭 Agora é sua vez</h3><p>Use o ChatGPT (gratuito) e o seu próprio e-mail ou pasta de arquivos, por cerca de 15 minutos.</p>
          <ol class="golden"><li><span>Liste os 5 tipos de e-mail ou arquivo que você mais recebe, sem nomes de pessoas.</span></li><li><span>Escreva o seu próprio pedido para a IA sugerir pastas e um padrão de nomes.</span></li><li><span>Corte o que não serve para você e crie as pastas.</span></li><li><span>Renomeie 5 arquivos no novo padrão ou crie 1 filtro de e-mail.</span></li><li><span>Marque no calendário 15 minutos semanais de arrumação.</span></li></ol></div>`,
        `<div class="card"><h3>💡 Nuvem, cópia de segurança e acessos</h3><p>Organizar não adianta se o arquivo some quando o celular quebra. Guarde os documentos de trabalho num serviço de nuvem, como Google Drive ou OneDrive, ou no lugar indicado pela empresa, e ative a cópia de segurança das conversas do WhatsApp Business. Pergunte à IA quais documentos do seu ramo costumam ter prazo de guarda e confirme com o contador ou com a empresa: notas fiscais e documentos trabalhistas, por exemplo, não devem ser apagados por conta própria. Compartilhe pastas só com quem precisa e revise esses acessos quando alguém sair da equipe.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que é mais fácil achar um brinquedo quando cada caixa tem uma etiqueta.</div>`
      ],
      ch:[
        { who:'Aline, 30 anos, assistente de uma imobiliária', says:'A IA sugeriu 35 pastas para organizar os e-mails da imobiliária. Criei todas e, uma semana depois, voltei a deixar tudo na caixa de entrada.',
          q:'O que deu errado?',
          opts:[
            {t:'O sistema tinha pastas demais para a rotina dela; poucas pastas bem usadas funcionam melhor.', ok:true, why:'Quando decidir onde guardar dá trabalho, a pessoa desiste. Simplicidade é o que mantém o hábito.'},
            {t:'Faltaram mais pastas, para cada assunto ter a sua.', ok:false, why:'Mais pastas aumentariam o esforço de decidir, que foi o que a fez desistir.'},
            {t:'Organizar e-mail não funciona em imobiliária.', ok:false, why:'Funciona, desde que o sistema seja simples e caiba na rotina.'}
          ]},
        { who:'Paulo, 46 anos, comprador de uma rede de supermercados', says:'Criei um filtro que joga todos os e-mails dos fornecedores numa pasta. Na semana passada, perdi o prazo de um pedido urgente que foi parar lá.',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Apagar todos os filtros.', ok:false, why:'Filtros economizam tempo. O problema foi não acompanhar a pasta.'},
            {t:'Revisar o filtro para não esconder o que é urgente e conferir a pasta todos os dias nos primeiros tempos.', ok:true, why:'Filtro bom organiza sem esconder. Testar e acompanhar evita perder mensagens importantes.'},
            {t:'Pedir aos fornecedores que não mandem mais e-mails.', ok:false, why:'O e-mail é o canal de trabalho. O ajuste é no filtro.'}
          ]},
        { who:'Denise, 38 anos, secretária de uma escola particular', says:'Vou colar na IA os e-mails dos pais dos alunos para ela me dizer como organizar a caixa de entrada.',
          q:'O que ela precisa mandar para a IA?',
          opts:[
            {t:'Os e-mails completos, com nomes dos pais e dos alunos.', ok:false, why:'São dados pessoais, inclusive de crianças, que pedem cuidado redobrado pela LGPD. Não são necessários.'},
            {t:'Só a lista de tipos de e-mail (matrícula, boletos, recados, eventos) e a quantidade aproximada de cada um.', ok:true, why:'Para sugerir pastas e filtros, a IA só precisa saber os tipos de mensagem, não o conteúdo.'},
            {t:'Os e-mails sem os nomes, mas com as notas dos alunos.', ok:false, why:'Notas também são dados pessoais e não ajudam a organizar a caixa.'}
          ]}
      ]},
    { id:'2.10', title:'Cronograma de trás para frente: do prazo ao primeiro passo', min:12,
      body:[
        `<div class="card analogy"><h3>✈️ A hora de sair de casa</h3><p>Se o voo sai às 10h, você não pensa "vou acordar e ver no que dá". Você conta de trás para frente: embarque às 9h20, chegar ao aeroporto às 8h30, uma hora de trânsito, então sair às 7h30 e acordar às 6h30. <b>Partir do prazo e voltar até hoje</b> mostra se ainda dá tempo e quando cada coisa precisa começar.</p></div>`,
        `<div class="term"><b>Cronograma reverso</b> = planejamento que começa pela data final e volta, etapa por etapa, até hoje. <b>Dependência</b> = etapa que só pode começar quando outra termina. <b>Folga</b> = dias de reserva para imprevistos.</div>`,
        `<div class="card"><h3>Como montar com a IA</h3><ol class="golden"><li><span>Diga a <b>entrega e a data final</b>.</span></li><li><span>Liste as <b>etapas</b> que você conhece e peça que a IA aponte as que faltam.</span></li><li><span>Informe <b>quanto tempo</b> cada etapa leva na sua realidade e o que depende do quê.</span></li><li><span>Peça as datas de trás para frente, <b>com folga</b>, e só dias em que você trabalha.</span></li><li><span><b>Confira as datas no calendário</b>: feriados e fins de semana costumam escapar.</span></li></ol></div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: a festa junina da escola</h3><p>Elaine é coordenadora de uma escola em Recife e a festa junina é dia 27 de junho, um sábado. Faltam 5 semanas.</p>
          <div class="flows">
            <div class="flow old"><h4>Antes</h4><div class="node">Ela pediu "um cronograma para a festa junina". A IA devolveu uma lista genérica de 8 semanas, começando no passado, com "contratar banda" que a escola não faz, e sem lembrar que as bandeirinhas dependem das turmas, que só ensaiam às terças.</div></div>
            <div class="flow new"><h4>Depois</h4><div class="node good">Ela informou a data da festa, a data de hoje, as etapas que já conhecia (convite aos pais, doações, decoração com as turmas, ensaio da quadrilha), que as turmas só ajudam às terças e que o convite precisa sair 3 semanas antes. Pediu as datas de trás para frente, com 3 dias de folga antes da festa.</div></div>
          </div>
          <div class="tw"><table class="tbl"><tr><th>Etapa</th><th>Depende de</th><th>Prazo</th></tr>
          <tr><td>Montagem da quadra</td><td>Decoração pronta</td><td>Sexta, véspera da festa</td></tr>
          <tr><td>Decoração com as turmas</td><td>Material doado</td><td>Terças até 23 de junho</td></tr>
          <tr><td>Arrecadar doações</td><td>Convite enviado</td><td>Até 16 de junho</td></tr>
          <tr><td>Convite aos pais</td><td>Data confirmada</td><td>Até 5 de junho</td></tr></table></div>
          <p><b>Resultado esperado:</b> Elaine descobre que o convite precisa sair nesta semana, não daqui a quinze dias, e confere cada data no calendário antes de passar à equipe.</p></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><ol class="golden"><li><span><b>Não dizer a data de hoje:</b> a IA não sabe quando você está e pode montar etapas que começariam no passado.</span></li><li><span><b>Datas erradas no calendário:</b> a IA pode errar o dia da semana ou cair num feriado. Confira cada data.</span></li><li><span><b>Prazos otimistas:</b> se a gráfica leva uma semana, não aceite "2 dias". Use o tempo da sua realidade.</span></li><li><span><b>Esquecer a folga:</b> sem reserva, um atraso pequeno estraga a data final.</span></li><li><span><b>Sinal de alerta:</b> se a primeira etapa já está atrasada, avise quem decide agora: talvez seja preciso cortar algo ou mudar a data.</span></li></ol></div>`,
        `<div class="card"><h3>🧭 Agora é sua vez</h3><p>Use o ChatGPT para montar o cronograma e o Trello para acompanhar, nos planos gratuitos, por cerca de 10 minutos.</p>
          <ol class="golden"><li><span>Escolha uma entrega real com data: um evento, um pedido grande, uma mudança.</span></li><li><span>Escreva o seu próprio pedido com a data final, a data de hoje, as etapas que você conhece e o tempo real de cada uma.</span></li><li><span>Peça que a IA aponte etapas esquecidas e dependências, com folga.</span></li><li><span>Confira cada data no calendário e corrija o que cair em feriado ou fim de semana.</span></li><li><span>Crie no Trello um cartão por etapa, com o prazo conferido.</span></li></ol><p>🔒 Não informe nomes, telefones ou endereços de clientes, alunos ou fornecedores.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que, para chegar na escola às 7h, é preciso saber primeiro quanto tempo leva o caminho.</div>`
      ],
      ch:[
        { who:'Reginaldo, 48 anos, dono de uma gráfica rápida', says:'Um cliente quer 500 convites de casamento para daqui a 20 dias. A IA montou um cronograma, mas colocou a impressão num domingo, e a gráfica não abre.',
          q:'O que ele deve fazer?',
          opts:[
            {t:'Seguir o cronograma e abrir no domingo.', ok:false, why:'O problema é o cronograma, não a gráfica. Basta informar os dias de trabalho.'},
            {t:'Informar à IA os dias em que a gráfica funciona, pedir o cronograma de novo e conferir cada data no calendário.', ok:true, why:'A IA não sabe a rotina dele e pode errar o dia da semana. Com a informação certa e a conferência, as datas ficam reais.'},
            {t:'Descartar o cronograma e fazer tudo de cabeça.', ok:false, why:'O cronograma é útil. Precisa só do ajuste e da conferência.'}
          ]},
        { who:'Michele, 34 anos, analista de compras', says:'Pedi um cronograma para a compra de uniformes. A IA deu 2 dias para o fornecedor entregar, mas ele sempre leva 10.',
          q:'Qual é o ajuste certo?',
          opts:[
            {t:'Aceitar os 2 dias e cobrar o fornecedor.', ok:false, why:'Cobrar não muda o prazo real. O cronograma vai estourar.'},
            {t:'Informar o prazo real de 10 dias, refazer as datas de trás para frente e manter uma folga.', ok:true, why:'O cronograma só funciona com os tempos reais de cada etapa, mais uma reserva para imprevistos.'},
            {t:'Tirar a etapa da entrega do cronograma.', ok:false, why:'É justamente a etapa que define quando a compra precisa ser feita.'}
          ]},
        { who:'Rafaela, 29 anos, organiza a convenção anual de uma associação', says:'Fiz o cronograma de trás para frente e vi que a reserva do auditório já devia ter sido feita há uma semana.',
          q:'Qual é a melhor reação?',
          opts:[
            {t:'Ignorar e seguir as próximas etapas como se nada tivesse acontecido.', ok:false, why:'O atraso continua lá e pode derrubar a data do evento.'},
            {t:'Esconder o atraso da diretoria até ter certeza.', ok:false, why:'Quanto mais tarde a diretoria souber, menos opções terá para resolver.'},
            {t:'Resolver a reserva agora e avisar a diretoria, com opções: outro local, outra data ou cortar uma etapa.', ok:true, why:'É para isso que o cronograma reverso serve: descobrir o problema cedo, enquanto ainda há o que fazer.'}
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
    { id:'3.7', title:'Golpes, boatos e conteúdo falso: como checar', min:12,
      body:[
        `<div class="card analogy"><h3>🕵️ O porteiro desconfiado</h3><p>Um bom porteiro não deixa ninguém subir só porque a pessoa disse "sou do gás". Ele pergunta, confere o crachá e liga para o morador. Com mensagens, áudios e vídeos é igual: antes de acreditar, pagar ou repassar, <b>confira por outro caminho</b>. Hoje, com IA, é fácil imitar voz, rosto e comprovante.</p></div>`,
        `<div class="term"><b>Golpe de falsa identidade</b> = alguém se passa por parente, chefe ou empresa para pedir dinheiro ou dados. <b>Deepfake</b> = vídeo ou áudio falso feito com IA, imitando uma pessoa real. <b>Agência de checagem</b> = equipe de jornalistas que verifica boatos, como Lupa, Aos Fatos, Estadão Verifica e Fato ou Fake.</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: o áudio do "chefe"</h3><p>Sueli é assistente financeira numa distribuidora em Campinas. Numa sexta à tarde, chegou um áudio de um número novo, com a voz parecida com a do diretor: "Sueli, estou numa reunião, preciso que você faça um Pix urgente para este fornecedor, depois eu explico".</p>
          <div class="why-chain"><div>"A voz é igualzinha à dele."</div><div>Por que desconfiar? → "Número novo, pressa, pedido de dinheiro e 'depois eu explico'."</div><div>O que confirma? → "Ligar para o número que já está salvo e seguir o processo de pagamento da empresa."</div><div class="root">Resultado: o diretor não sabia de nada. Era um golpe com voz imitada. Sueli não pagou porque conferiu por outro canal.</div></div>
          <div class="flows">
            <div class="flow old"><h4>Reação de risco</h4><div class="node">Acreditar na voz, pagar rápido para não incomodar o chefe e só perguntar depois.</div></div>
            <div class="flow new"><h4>Reação segura</h4><div class="node good">Parar, confirmar pelo contato antigo ou pessoalmente, e seguir o processo de aprovação. Pedido verdadeiro aguenta 10 minutos de conferência.</div></div>
          </div>
          <p>A IA pode ajudar na checagem: você descreve a mensagem, sem dados pessoais, e pede os <b>sinais de alerta</b> e as perguntas que deveria fazer. Para boatos, pergunte a uma ferramenta com fontes, como o Perplexity, e abra as fontes. Mas atenção: ferramentas que dizem "detectar IA" em imagens e áudios erram muito. A conferência por outro canal vale mais.</p></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><ol class="golden"><li><span><b>Confiar no comprovante</b>: comprovante de Pix pode ser montado. Confira se o dinheiro entrou no extrato do banco.</span></li><li><span><b>Confiar na voz ou no rosto</b>: com IA, os dois podem ser imitados. Desconfie de pressa e segredo.</span></li><li><span><b>Repassar "por via das dúvidas"</b>: boato repassado ganha credibilidade. Na dúvida, não repasse.</span></li><li><span><b>Perguntar à IA "isso é verdade?" e aceitar</b>: ela pode não saber de fatos recentes. Peça fontes e abra-as.</span></li></ol></div>`,
        `<div class="card"><h3>🧭 Agora é sua vez</h3><p>Use o Perplexity, na versão gratuita, por cerca de 10 minutos.</p>
          <ol class="golden"><li><span>Escolha uma notícia ou corrente que chegou num grupo de WhatsApp recentemente.</span></li><li><span>Escreva a sua própria pergunta, pedindo o que se sabe sobre o assunto e quais fontes confirmam.</span></li><li><span>Abra pelo menos 2 fontes e veja a data e quem publicou.</span></li><li><span>Procure o assunto no site de uma agência de checagem.</span></li><li><span>Anote sua conclusão: verdadeiro, falso, enganoso ou sem confirmação.</span></li></ol>
          <p>🔒 Não cole prints com nomes e telefones de pessoas do grupo.</p></div>`,
        `<div class="card"><h3>💡 Se você caiu, ou quase caiu</h3><p>Cair em golpe não é falta de inteligência: os golpistas usam pressa, medo e a confiança em pessoas conhecidas. Se você fez um Pix para um golpista, avise o seu banco imediatamente pelo canal oficial e peça a contestação pelo MED, o Mecanismo Especial de Devolução do Pix. Registre também um boletim de ocorrência, que em muitos estados pode ser feito pela internet. No trabalho, avise logo o responsável: esconder só aumenta o prejuízo. E combine com a equipe uma regra simples, como "pedido de pagamento fora do processo nunca é atendido", para ninguém decidir sozinho sob pressão.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que, se um estranho diz que a mãe dela mandou buscá-la, o certo é ligar para a mãe antes.</div>`
      ],
      ch:[
        { who:'Jorge, 52 anos, dono de uma loja de autopeças em Ribeirão Preto', says:'Um cliente mandou o comprovante do Pix e já quer levar a peça. O comprovante parece certinho.',
          q:'O que Jorge deve fazer antes de entregar?',
          opts:[
            {t:'Entregar, comprovante é prova de pagamento.', ok:false, why:'Comprovantes falsos são comuns e fáceis de montar. A prova é o dinheiro na conta.'},
            {t:'Pedir à IA para analisar a imagem do comprovante.', ok:false, why:'A IA não tem acesso à conta dele e pode errar. A conferência é no extrato.'},
            {t:'Conferir no aplicativo do banco se o valor realmente entrou na conta.', ok:true, why:'Só o extrato confirma o pagamento. Leva segundos e evita prejuízo.'}
          ]},
        { who:'Neide, 66 anos, aposentada e vendedora de cosméticos por catálogo', says:'Recebi um vídeo de um famoso indicando um investimento que rende 5% ao dia. Vou mandar para as minhas clientes.',
          q:'Qual é a atitude mais segura?',
          opts:[
            {t:'Não repassar, desconfiar da promessa e procurar o assunto em agências de checagem e fontes confiáveis.', ok:true, why:'Rendimento garantido muito alto é sinal clássico de golpe, e vídeos de famosos podem ser deepfakes.'},
            {t:'Repassar, já que foi um famoso que falou.', ok:false, why:'Vídeos podem ser falsos e feitos com IA. Repassar espalha o golpe para as clientes dela.'},
            {t:'Repassar com a frase "não sei se é verdade".', ok:false, why:'Mesmo com o aviso, o golpe chega a mais pessoas e alguém pode cair.'}
          ]},
        { who:'Caio, 29 anos, analista de RH', says:'Uso uma ferramenta que diz se o áudio foi feito por IA. Ela disse que o áudio do suposto diretor é verdadeiro, então vou fazer a transferência.',
          q:'O que está errado nesse raciocínio?',
          opts:[
            {t:'Nada, a ferramenta foi feita para isso.', ok:false, why:'Detectores de IA erram com frequência, para os dois lados. Não servem como prova.'},
            {t:'Ele deveria usar dois detectores diferentes.', ok:false, why:'Dois detectores imprecisos continuam imprecisos. O que resolve é conferir com a pessoa.'},
            {t:'Detectores de IA não são confiáveis; ele deve confirmar com o diretor pelo contato conhecido e seguir o processo de aprovação.', ok:true, why:'A conferência por outro canal e o processo da empresa protegem mais do que qualquer detector.'}
          ]}
      ]},
    { id:'3.8', title:'Aprender com vídeos, podcasts e áudios', min:12,
      body:[
        `<div class="card analogy"><h3>🎧 O caderno do colega caprichoso</h3><p>Na escola, sempre tinha um colega com o caderno impecável: tudo anotado, com títulos e resumos. Pegar emprestado ajudava, mas quem só copiava esquecia rápido. A IA pode transformar um vídeo de uma hora num caderno organizado. O aprendizado, porém, acontece quando <b>você usa esse caderno para pensar e praticar</b>.</p></div>`,
        `<div class="term"><b>Transcrição</b> = o texto de tudo o que foi falado num vídeo ou áudio. <b>Marcação de tempo</b> = o minuto em que algo foi dito, para você voltar ao trecho. <b>Fonte</b> = no NotebookLM, cada material que você envia, como um link de vídeo do YouTube com legenda, um PDF ou um áudio.</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: o treinamento de atendimento</h3><p>Rafael, 25 anos, vendedor de uma loja de eletrodomésticos em Manaus, recebeu da empresa um vídeo de treinamento de 50 minutos sobre o novo sistema de vendas e não tinha tempo de ver de uma vez.</p>
          <div class="flows">
            <div class="flow old"><h4>Antes</h4><div class="node">Ele pediu "resuma esse vídeo" a uma IA e leu um resumo de 5 linhas. Na semana seguinte, travou na hora de cadastrar uma venda com troca, porque o resumo não falava disso.</div></div>
            <div class="flow new"><h4>Depois</h4><div class="node good">Ele colocou o vídeo como fonte no NotebookLM e pediu: os passos do sistema em ordem, com o minuto de cada um; as dúvidas que um vendedor novo costuma ter; e 5 perguntas para testar se entendeu. Assistiu só os trechos mais difíceis e treinou as perguntas sem olhar.</div></div>
          </div>
          <ol class="golden"><li><span>Peça a <b>estrutura</b> do conteúdo com marcação de tempo.</span></li><li><span>Assista os <b>trechos mais importantes</b> por inteiro.</span></li><li><span>Peça <b>perguntas</b> e responda sem consultar.</span></li><li><span>Confira as respostas no trecho original.</span></li></ol>
          <p>Áudios do WhatsApp com orientações longas de trabalho também podem ser transcritos, desde que não tenham dados de terceiros e que a ferramenta seja permitida pela empresa.</p></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><ol class="golden"><li><span><b>Só ler o resumo</b>: dá sensação de que aprendeu, mas o detalhe que você vai precisar costuma estar fora dele.</span></li><li><span><b>Transcrição com erro</b>: nomes, números e termos técnicos podem sair trocados. Volte ao minuto indicado e confira.</span></li><li><span><b>Vídeo sem legenda</b>: algumas ferramentas só leem vídeos com legenda. Se não funcionar, use outro material.</span></li><li><span><b>Conteúdo sem fonte confiável</b>: um vídeo bem resumido continua sendo a opinião de quem gravou. Para temas sérios, confira em fontes oficiais.</span></li></ol></div>`,
        `<div class="card"><h3>🧭 Agora é sua vez</h3><p>Use o NotebookLM, gratuito com conta Google, por cerca de 15 minutos.</p>
          <ol class="golden"><li><span>Escolha um vídeo público com legenda sobre um assunto do seu trabalho (uma aula, uma palestra, um tutorial).</span></li><li><span>Adicione o link como fonte.</span></li><li><span>Escreva o seu próprio pedido para ter a estrutura do vídeo com os minutos de cada parte.</span></li><li><span>Assista o trecho que parecer mais importante.</span></li><li><span>Peça perguntas de revisão, responda sem olhar e confira nas citações.</span></li></ol></div>`,
        `<div class="card"><h3>💡 Áudio também ensina</h3><p>Podcasts e áudios são ótimos para o trajeto no ônibus ou no metrô, mas é fácil ouvir sem prestar atenção. Depois de ouvir, tente dizer em voz alta as três ideias principais antes de pedir qualquer resumo. Em seguida, peça o resumo à IA e compare: o que você lembrou e o que escapou? Essa comparação mostra onde você se distraiu. Para estudos mais longos, crie no NotebookLM um caderno por assunto e vá adicionando as fontes; assim, as perguntas de revisão juntam tudo o que você já estudou sobre aquele tema.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que ler o resumo do filme não é o mesmo que saber contar a história.</div>`
      ],
      ch:[
        { who:'Vanessa, 34 anos, técnica de enfermagem', says:'Assisti só ao resumo de uma aula sobre um novo protocolo do hospital. No plantão, não lembrei de um detalhe importante.',
          q:'Como ela deve estudar a próxima aula?',
          opts:[
            {t:'Pedir um resumo ainda mais curto.', ok:false, why:'Resumo mais curto corta ainda mais detalhes.'},
            {t:'Usar a IA para ter a estrutura com os minutos, assistir os trechos importantes, treinar com perguntas e conferir no protocolo oficial do hospital.', ok:true, why:'Estrutura, trechos completos, prática e conferência na fonte oficial fixam o que importa no plantão.'},
            {t:'Deixar de lado as aulas em vídeo.', ok:false, why:'O vídeo é útil. O que faltou foi estudar de forma ativa.'}
          ]},
        { who:'Leandro, 42 anos, representante comercial', says:'A transcrição da palestra diz que a meta de vendas do setor é de "15 milhões". Vou usar esse número na minha apresentação.',
          q:'O que ele deve fazer antes?',
          opts:[
            {t:'Usar o número, porque está escrito na transcrição.', ok:false, why:'Transcrições erram números com frequência. Um número errado numa apresentação compromete a credibilidade.'},
            {t:'Arredondar para 20 milhões, para impressionar.', ok:false, why:'Alterar o número de propósito é pior do que errar sem querer.'},
            {t:'Voltar ao minuto indicado, ouvir o trecho e, se possível, confirmar numa fonte escrita.', ok:true, why:'A marcação de tempo existe para conferir. Número importante merece fonte confirmada.'}
          ]},
        { who:'Sabrina, 28 anos, coordenadora de uma ONG', says:'Quero transcrever com IA os áudios de WhatsApp dos atendimentos às famílias para montar um relatório.',
          q:'Qual é o cuidado principal?',
          opts:[
            {t:'Verificar se pode usar esses áudios, retirar ou evitar dados pessoais e usar só ferramentas autorizadas pela ONG.', ok:true, why:'Áudios de atendimento têm dados pessoais e às vezes sensíveis. A LGPD exige cuidado com a finalidade e com quem recebe esses dados.'},
            {t:'Nenhum, o relatório é para uso interno.', ok:false, why:'Uso interno não autoriza mandar dados das famílias para qualquer ferramenta.'},
            {t:'Só cuidar para a transcrição sair sem erros de português.', ok:false, why:'A ortografia importa, mas o risco maior é expor dados das famílias.'}
          ]}
      ]},
    { id:'3.9', title:'Usar IA com ética: autoria, transparência e limites', min:12,
      body:[
        `<div class="card analogy"><h3>🧑‍🍳 O bolo de mistura pronta</h3><p>Usar mistura pronta para fazer bolo não é crime. Mas se você entra num concurso de "receita da avó" com bolo de caixinha, ou vende como caseiro o que é industrializado, aí há um problema. Com a IA é parecido: <b>usar não é errado; esconder, quando importa, e entregar sem revisar, é</b>.</p></div>`,
        `<div class="term"><b>Autoria</b> = quem criou e responde por um trabalho. <b>Transparência</b> = deixar claro como a IA foi usada, quando isso importa para quem recebe. <b>Política de uso</b> = regras da empresa, escola ou conselho profissional sobre quais ferramentas e dados podem ser usados.</div>`,
        `<div class="card"><h3>📝 Exemplo resolvido: o relatório da estagiária</h3><p>Isabela, estagiária de marketing em Porto Alegre, precisava entregar um relatório sobre a concorrência.</p>
          <div class="flows">
            <div class="flow old"><h4>Antes</h4><div class="node">Ela pediu tudo à IA e entregou sem ler. O relatório citava uma pesquisa que não existia e um concorrente que fechou em 2024. Na reunião, não soube explicar de onde vinham os números.</div></div>
            <div class="flow new"><h4>Depois</h4><div class="node good">Ela usou a IA para organizar os tópicos e revisar o texto, levantou os dados ela mesma em fontes conferidas e incluiu no final uma linha: "Texto revisado com apoio de IA; dados levantados e conferidos pela autora". O gestor elogiou a clareza e confiou nos números.</div></div>
          </div>
          <div class="tw"><table class="tbl"><tr><th>Situação</th><th>Pergunta para decidir</th></tr>
          <tr><td>Trabalho de faculdade ou curso</td><td>O que a regra da instituição permite? O professor espera que o texto seja seu?</td></tr>
          <tr><td>Relatório no trabalho</td><td>Eu consigo explicar e defender cada número e conclusão?</td></tr>
          <tr><td>Imagem ou texto para cliente</td><td>O cliente seria enganado se não soubesse que foi feito com IA?</td></tr>
          <tr><td>Dados de clientes ou da empresa</td><td>A ferramenta é autorizada? A LGPD permite usar esses dados para isso?</td></tr></table></div></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como perceber</h3><ol class="golden"><li><span><b>Assinar o que não entende</b>: se você não sabe explicar um trecho, ainda não é seu. Estude ou corte.</span></li><li><span><b>Ignorar a regra local</b>: empresas, escolas e conselhos profissionais têm regras diferentes. Na dúvida, pergunte antes.</span></li><li><span><b>Exagerar no aviso</b>: não é preciso avisar que usou o corretor ortográfico. Avise quando o uso muda o que a pessoa pensa sobre o trabalho.</span></li><li><span><b>Imitar alguém sem permissão</b>: usar a voz, o rosto ou o estilo de uma pessoa real sem autorização pode ferir direitos e enganar.</span></li></ol></div>`,
        `<div class="card"><h3>🧭 Agora é sua vez</h3><p>Use o Google Gemini, gratuito com conta Google, por cerca de 10 minutos.</p>
          <ol class="golden"><li><span>Pense em um uso real que você faz ou quer fazer da IA no trabalho ou no estudo.</span></li><li><span>Escreva o seu próprio pedido para a IA listar os riscos éticos e de privacidade desse uso.</span></li><li><span>Compare com as regras da sua empresa ou escola, se existirem.</span></li><li><span>Escreva, com as suas palavras, 3 regras pessoais de uso da IA.</span></li></ol></div>`,
        `<div class="card"><h3>💡 Três regras que cabem em qualquer profissão</h3><p>Quem usa IA no dia a dia com segurança costuma seguir três regras simples: não colar dados pessoais ou sigilosos em ferramentas não autorizadas; não entregar nada que não consiga explicar; e contar como usou a IA sempre que essa informação mudaria a opinião de quem recebe. Essas regras evitam a maior parte dos problemas. Elas não substituem as regras da sua empresa, escola ou conselho profissional, que podem ser mais rígidas. Escreva as suas regras e deixe num lugar visível, como um bilhete perto da tela.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos a diferença entre pedir ajuda para fazer o dever de casa e pedir que alguém faça o dever no seu lugar.</div>`
      ],
      ch:[
        { who:'Henrique, 22 anos, estudante de administração', says:'Meu professor proibiu IA no trabalho final. Vou usar mesmo assim, ninguém vai perceber.',
          q:'Qual é a atitude correta?',
          opts:[
            {t:'Usar escondido, já que ninguém vai perceber.', ok:false, why:'Descumprir a regra é desonesto, pode reprovar e tira dele a chance de aprender.'},
            {t:'Seguir a regra e, se tiver dúvida sobre o que é permitido (como corrigir ortografia), perguntar ao professor.', ok:true, why:'Cada instituição define suas regras. Perguntar resolve a dúvida sem arriscar a nota nem a integridade.'},
            {t:'Usar e reescrever as frases para disfarçar.', ok:false, why:'Disfarçar continua sendo descumprir a regra.'}
          ]},
        { who:'Bruna, 37 anos, designer autônoma', says:'Fiz a logo de um cliente com ajuda de um gerador de imagens. Preciso contar a ele?',
          q:'Qual é o caminho mais honesto?',
          opts:[
            {t:'Não contar, o que importa é o resultado.', ok:false, why:'Uma logo precisa ser exclusiva e registrável. Esconder o uso pode trazer problemas ao cliente depois.'},
            {t:'Dizer que fez tudo à mão, para valorizar o trabalho.', ok:false, why:'Mentir sobre o processo quebra a confiança e pode gerar problema se o cliente descobrir.'},
            {t:'Contar como usou a IA, revisar os termos de uso da ferramenta e garantir que o resultado final foi trabalhado por ela.', ok:true, why:'Numa logo, o cliente precisa saber como foi feita para decidir sobre registro e exclusividade. Transparência protege os dois.'}
          ]},
        { who:'Gilberto, 48 anos, contador', says:'Um colega usou um áudio com a voz de um cliente, criado por IA, para "agilizar" uma autorização por telefone.',
          q:'Como avaliar essa atitude?',
          opts:[
            {t:'Ok, desde que a intenção fosse boa.', ok:false, why:'Boa intenção não autoriza imitar alguém. A autorização precisa vir da própria pessoa.'},
            {t:'É grave: imitar a voz de uma pessoa sem consentimento engana terceiros e pode configurar fraude.', ok:true, why:'Usar a voz de alguém sem autorização fere direitos e confiança, e pode ter consequências legais.'},
            {t:'Só seria problema se o cliente descobrisse.', ok:false, why:'O erro está no ato, não em ser descoberto.'}
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
  1: 'Você já escreve, ajusta o tom, resume, simplifica avisos, monta respostas prontas e traduz mais rápido, sem abrir mão da revisão. O rascunho é da IA, a responsabilidade é sua.',
  2: 'Você aprendeu a usar a IA para planilhas, planos, checklists, orçamentos, controle de caixa e organização de e-mails e arquivos, sempre testando e conferindo os números.',
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
const LIC = { '1.1':'✉️','1.2':'📝','1.3':'🌡️','1.4':'🪞','1.5':'📲','1.7':'🗂️','1.8':'🪧','1.9':'🌎','1.10':'📋','1.6':'📣','2.1':'🧮','2.2':'🗓️','2.3':'✅','2.4':'🧾','2.5':'🧱','2.6':'🤝','2.8':'🐷','2.9':'🗄️','2.10':'⏳','2.7':'🗂️','3.1':'🔎','3.2':'🎓','3.3':'🧗','3.4':'🎭','3.5':'📜','3.7':'🕵️','3.8':'🎧','3.9':'⚖️','3.6':'📈' };

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
