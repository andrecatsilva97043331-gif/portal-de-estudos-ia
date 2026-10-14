/* Curso: Do Projeto ao Negócio (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🎯', title:'Seu serviço', sub:'Do que você sabe a uma oferta clara', lessons:[
    { id:'1.1', title:'Transformar o que você sabe em um serviço', min:10,
      body:[
        `<div class="card analogy"><h3>🍰 A receita da vovó virando cardápio</h3><p>A receita da vovó é boa, mas só vira negócio quando alguém sabe <b>o que vai receber, quanto custa e quando fica pronto</b>. Seu conhecimento em IA também precisa virar algo que o cliente entenda.</p></div>`,
        `<div class="term"><b>Serviço</b> = algo útil que você faz para outra pessoa em troca de pagamento. <b>Cliente</b> = quem tem o problema e paga pela solução. <b>Resultado</b> = a mudança que o cliente percebe depois do seu trabalho.</div>`,
        `<div class="card"><h3>Problema, cliente e resultado</h3><p>Complete a frase:</p>
          <div class="code">Eu ajudo [TIPO DE CLIENTE] a [RESULTADO] por meio de [O QUE EU FAÇO].</div>
          <p><b>Exemplo:</b> "Eu ajudo pequenas lojas a responder clientes mais rápido, criando um atendimento automático no WhatsApp."</p>
          <p>Clientes compram <b>resultado, e não tecnologia</b>: ninguém quer "um agente de IA", querem perder menos tempo ou vender mais. Teste a frase com 3 pessoas do tipo de cliente e veja se entendem e se têm esse problema.</p></div>`,
        `<div class="card"><h3>De habilidade a serviço: exemplos</h3>
          <div class="tw"><table class="tbl"><tr><th>O que você sabe</th><th>Como o cliente enxerga</th></tr>
          <tr><td>Criar automações sem código</td><td>"Os pedidos do site entram sozinhos na planilha e eu paro de copiar e colar"</td></tr>
          <tr><td>Escrever bons prompts</td><td>"Minha equipe escreve propostas em metade do tempo"</td></tr>
          <tr><td>Montar um assistente com documentos</td><td>"Os novos funcionários tiram dúvidas sem interromper o gerente"</td></tr>
          <tr><td>Criar sites com IA</td><td>"Tenho uma página profissional para mandar aos clientes"</td></tr></table></div>
          <p><b>Erros comuns:</b> descrever ferramentas ("uso tal plataforma") em vez do resultado; oferecer algo que você nunca fez nem para si mesmo; esquecer que o cliente precisa entender a oferta em 10 segundos.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos a diferença entre saber fazer uma receita e ter uma doceria que vende bolo.</div>`
      ],
      ch:[
        { who:'Henrique, 27 anos, aprendeu a criar automações com IA', says:'Vou oferecer \'automações com IA e agentes inteligentes\'. Os donos de loja devem se empolgar com a tecnologia.',
          q:'Qual é o melhor ajuste na oferta?',
          opts:[
            {t:'Manter a frase e explicar melhor a tecnologia para o cliente.', ok:false, why:'Clientes compram a solução do problema deles, e não detalhes da tecnologia.'},
            {t:'Dizer o resultado para o cliente, como "responder clientes no WhatsApp em segundos, sem você ficar o dia todo no celular".', ok:true, why:'Falar do resultado que o cliente quer torna a oferta clara e fácil de comprar.'},
            {t:'Oferecer tudo o que ele sabe, para o cliente escolher.', ok:false, why:'Uma lista enorme confunde. Uma oferta clara é mais fácil de entender e de vender.'},
            {t:'Usar mais termos em inglês, para parecer mais moderno.', ok:false, why:'Jargão afasta quem não é da área. O cliente precisa entender de imediato o que ganha.'}
          ]},
        { who:'Denise, 45 anos, secretária que domina IA no escritório', says:'Sei usar IA para organizar agendas e redigir e-mails, mas acho que isso não vale como serviço.',
          q:'Qual é o melhor raciocínio?',
          opts:[
            {t:'Não vale, porque qualquer um pode fazer.', ok:false, why:'Muita gente não sabe ou não tem tempo. Saber fazer bem é o que tem valor.'},
            {t:'Pode virar serviço se ela identificar quem tem esse problema (por exemplo, profissionais autônomos sem secretária) e descrever o resultado, como "recupere 5 horas por semana de tarefas de escritório".', ok:true, why:'Uma habilidade vira serviço quando encontra um cliente com o problema e uma oferta que mostra o resultado.'},
            {t:'Só vale se ela criar um aplicativo próprio.', ok:false, why:'Serviço não exige produto tecnológico próprio.'},
            {t:'Vale, desde que ela cobre por cada e-mail escrito.', ok:false, why:'A forma de cobrar vem depois. Primeiro é preciso definir cliente e resultado.'}
          ]},
        { who:'Otávio, 33 anos, testou sua frase de oferta com 3 donos de padaria', says:'Dois não entenderam o que eu faço e o terceiro disse que não tem esse problema.',
          q:'O que esse resultado indica?',
          opts:[
            {t:'Que padeiros não entendem de tecnologia; seguir com a mesma frase.', ok:false, why:'Culpar o cliente desperdiça o aprendizado. O teste mostrou que a oferta não comunica.'},
            {t:'Que a frase ou o problema escolhido precisam mudar: reescrever com palavras do cliente e confirmar se o problema existe, testando de novo.', ok:true, why:'O teste existe para isso: ajustar barato, antes de investir em divulgação.'},
            {t:'Que ele deve desistir de empreender.', ok:false, why:'Ajustar a oferta é parte normal do processo.'},
            {t:'Que precisa testar com 300 pessoas para ter certeza.', ok:false, why:'Três respostas tão claras já indicam a necessidade de ajuste. Teste de novo depois.'}
          ]},
        { who:'Mariana, 26 anos, designer', says:'Quero vender "consultoria em IA" para pequenas empresas.',
          q:'Qual versão da oferta é mais clara?',
          opts:[
            {t:'"Consultoria completa em inteligência artificial para transformar seu negócio."', ok:false, why:'Vaga demais: o cliente não sabe o que recebe nem qual problema será resolvido.'},
            {t:'"Ajudo lojas de roupas a criar fotos e descrições de produtos com IA, para publicar a coleção nova em 2 dias em vez de 2 semanas."', ok:true, why:'Cliente definido, resultado concreto e prazo comparável tornam a oferta fácil de entender.'},
            {t:'"Uso as ferramentas mais modernas do mercado."', ok:false, why:'Fala da ferramenta, não do resultado para o cliente.'},
            {t:'"Faço qualquer coisa com IA, é só pedir."', ok:false, why:'Sem foco, o cliente não lembra de você quando tem o problema.'}
          ]}
      ]},
    { id:'1.2', title:'Nicho e oferta clara', min:10,
      body:[
        `<div class="card analogy"><h3>🧭 A loja especializada</h3><p>Quem procura um sapato de dança vai à loja especializada, e não ao vendedor ambulante que vende tudo. <b>Quem se especializa é mais lembrado e indicado.</b></p></div>`,
        `<div class="term"><b>Nicho</b> = um grupo específico de clientes com um problema parecido. <b>Escopo</b> = o que está incluído no serviço e o que não está. <b>Entregável</b> = o que o cliente recebe no fim, de forma concreta.</div>`,
        `<div class="card"><h3>Uma oferta que cabe em um parágrafo</h3><p>Escolha um nicho com 3 perguntas:</p>
          <ol class="golden"><li><span>Conheço esse tipo de cliente?</span></li><li><span>Eles têm um problema claro e frequente?</span></li><li><span>Têm como pagar?</span></li></ol>
          <p>Depois descreva a oferta: o que está incluído (<b>escopo</b>), o que você entrega (<b>entregável</b>), em quanto tempo e o que não está incluído.</p>
          <p><b>Exemplo:</b> "Atendimento automático no WhatsApp para clínicas de estética: respostas a 10 perguntas frequentes e agendamento, entregue em 7 dias, com 1 ajuste incluso."</p>
          <p>⚠️ Não prometa o que não depende de você, como "vai dobrar suas vendas".</p></div>`,
        `<div class="card"><h3>Comparando nichos</h3>
          <div class="tw"><table class="tbl"><tr><th>Nicho</th><th>Conheço?</th><th>Problema frequente?</th><th>Pode pagar?</th></tr>
          <tr><td>Clínicas de estética do meu bairro</td><td>Sim, trabalhei numa</td><td>Sim, muitas mensagens repetidas</td><td>Sim</td></tr>
          <tr><td>"Empresas em geral"</td><td>Não</td><td>Não dá para saber</td><td>Não dá para saber</td></tr>
          <tr><td>Estudantes</td><td>Sim</td><td>Sim</td><td>Pouco</td></tr></table></div>
          <p>Nicho não é prisão: você pode mudar depois. Mas começar focado acelera tudo, porque cada projeto ensina algo útil para o próximo cliente parecido.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que lembramos mais da loja que só vende uma coisa e vende bem.</div>`
      ],
      ch:[
        { who:'Larissa, 31 anos, quer vender serviços com IA', says:'Vou atender qualquer empresa, de qualquer área, com qualquer serviço. Assim aumento minhas chances.',
          q:'Qual é a melhor abordagem?',
          opts:[
            {t:'Escolher um nicho que ela conhece, com um problema claro, e montar uma oferta com escopo, entrega e prazo definidos.', ok:true, why:'Foco facilita a divulgação, a confiança do cliente e a entrega bem-feita.'},
            {t:'Atender todos, porque quanto mais clientes, melhor.', ok:false, why:'Sem foco, o trabalho vira bagunça e a divulgação fica vaga.'},
            {t:'Prometer aumento de vendas para qualquer cliente.', ok:false, why:'Ela não controla as vendas do cliente. Prometer resultado que não depende de você gera frustração.'},
            {t:'Escolher o nicho que paga mais segundo um vídeo da internet, mesmo sem conhecê-lo.', ok:false, why:'Sem conhecer o cliente, fica difícil entender o problema e conquistar confiança.'}
          ]},
        { who:'Wesley, 29 anos, ex-funcionário de oficina mecânica', says:'Estou em dúvida entre oferecer automação para oficinas ou para escritórios de advocacia, que parecem pagar mais.',
          q:'Qual escolha tende a dar mais certo no começo?',
          opts:[
            {t:'Advocacia, porque paga mais, mesmo sem ele conhecer a rotina.', ok:false, why:'Desconhecer a rotina, a linguagem e os riscos (como sigilo) dificulta vender e entregar.'},
            {t:'Oficinas, onde ele conhece a rotina, os problemas e as pessoas, o que facilita conversar, vender e entregar bem.', ok:true, why:'Conhecer o cliente é uma vantagem enorme no início: você fala a língua dele e sabe o que dói.'},
            {t:'Os dois ao mesmo tempo, com a mesma oferta.', ok:false, why:'Ofertas genéricas não conversam bem com nenhum dos dois.'},
            {t:'Nenhum, até ter certeza absoluta.', ok:false, why:'Certeza absoluta não existe. Começar focado e aprender é o caminho.'}
          ]},
        { who:'Paula, 34 anos, montou sua primeira oferta', says:'Minha oferta: "Chatbot para clínicas, com tudo que precisar, no prazo que der".',
          q:'O que falta?',
          opts:[
            {t:'Nada, a oferta é flexível e agrada a todos.', ok:false, why:'"Tudo" e "no prazo que der" geram expectativas diferentes e discussões depois.'},
            {t:'Escopo (o que está e o que não está incluído), entregável concreto e prazo definido.', ok:true, why:'Uma oferta com limites claros é mais fácil de comprar e de entregar sem conflito.'},
            {t:'Um nome mais chamativo para o chatbot.', ok:false, why:'O nome não resolve a falta de clareza.'},
            {t:'Um preço bem baixo para compensar.', ok:false, why:'Preço não substitui clareza de escopo e prazo.'}
          ]},
        { who:'Roberto, 40 anos, quer chamar atenção na divulgação', says:'Vou anunciar: "Com meu atendimento automático, sua clínica vai dobrar o faturamento".',
          q:'Qual é a forma responsável de divulgar?',
          opts:[
            {t:'Manter, porque promessa forte vende.', ok:false, why:'Ele não controla o faturamento da clínica. Promessa que não se cumpre gera conflito e pode ser propaganda enganosa.'},
            {t:'Descrever o que entrega e o efeito esperado no que ele controla, como "respostas em segundos a qualquer hora e agenda organizada", sem garantir faturamento.', ok:true, why:'Falar do que você entrega é honesto e ainda mostra valor real.'},
            {t:'Trocar por "triplicar o faturamento", que é mais chamativo.', ok:false, why:'Piora o problema da promessa sem garantia.'},
            {t:'Prometer e devolver o dinheiro se não acontecer.', ok:false, why:'Continua prometendo algo que não depende dele e pode gerar prejuízo.'}
          ]}
      ]},
    { id:'1.3', title:'Validar antes de construir: conversas com clientes', min:11,
      body:[
        `<div class="card analogy"><h3>🍲 A prova antes do cardápio</h3><p>Antes de colocar um prato novo no cardápio, o cozinheiro serve uma prova para alguns clientes e observa a reação. Ele não gasta com ingredientes para cem pratos sem saber se alguém vai pedir. <b>Validar é servir a prova antes de investir.</b></p></div>`,
        `<div class="term"><b>Validação</b> = confirmar, com clientes reais, que o problema existe e que eles pagariam pela solução. <b>Entrevista de problema</b> = conversa para entender a rotina e as dores do cliente, sem vender. <b>Projeto piloto</b> = primeira entrega, menor e com preço especial combinado, para provar o valor. <b>Sinal de compra</b> = atitude que mostra interesse real: pagar, agendar, apresentar a um sócio.</div>`,
        `<div class="card"><h3>Como conduzir 5 conversas em uma semana</h3>
          <ol class="golden"><li><span>Escolha 5 pessoas do nicho (conhecidos, indicações, comércio do bairro).</span></li><li><span>Peça 15 minutos para <b>aprender</b>, e não para vender.</span></li><li><span>Pergunte sobre o <b>passado</b>, não sobre o futuro.</span></li><li><span>Anote palavras exatas que o cliente usa: elas vão para a sua oferta.</span></li><li><span>No fim, apresente a oferta em uma frase e observe se aparece um <b>sinal de compra</b>.</span></li></ol>
          <div class="tw"><table class="tbl"><tr><th>Pergunta fraca</th><th>Pergunta forte</th></tr>
          <tr><td>"Você usaria um robô no WhatsApp?"</td><td>"Como foi a última vez que você perdeu um cliente por demorar a responder?"</td></tr>
          <tr><td>"Você pagaria por isso?"</td><td>"Quanto tempo por dia você gasta respondendo mensagens? Já tentou resolver de outro jeito?"</td></tr>
          <tr><td>"Gostou da minha ideia?"</td><td>"O que te impediria de testar isso na próxima semana?"</td></tr></table></div>
          <p><b>Erros comuns:</b> entrevistar só amigos que querem agradar; passar a conversa explicando a tecnologia; tomar elogio ("que ideia legal!") como validação; construir por meses antes da primeira conversa.</p></div>`,
        `<div class="card"><h3>📍 Na prática</h3><p>Uma consultora queria vender relatórios automáticos para academias. Nas 5 conversas, descobriu que a dor real era outra: alunos que sumiam sem aviso. Ela ajustou a oferta para lembretes de retorno e fechou o primeiro piloto na semana seguinte, sem ter construído nada antes.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o cozinheiro serve uma prova antes de colocar o prato no cardápio.</div>`
      ],
      ch:[
        { who:'Fábio, 30 anos, quer vender um assistente para restaurantes', says:'Passei 3 meses construindo o assistente. Agora vou procurar o primeiro cliente.',
          q:'O que teria sido mais inteligente?',
          opts:[
            {t:'Construir por mais 3 meses para ficar perfeito.', ok:false, why:'Mais tempo sem falar com clientes aumenta o risco de construir algo que ninguém quer.'},
            {t:'Conversar com donos de restaurante antes, confirmar o problema e a disposição de pagar, e construir uma versão mínima para um piloto.', ok:true, why:'Validar primeiro evita gastar meses na direção errada e já gera os primeiros clientes.'},
            {t:'Fazer uma pesquisa online com 1.000 pessoas quaisquer.', ok:false, why:'Pessoas fora do nicho não representam quem vai pagar.'},
            {t:'Pedir para a IA dizer se a ideia é boa.', ok:false, why:'A IA não substitui a conversa com quem tem o problema e o dinheiro.'}
          ]},
        { who:'Camila, 27 anos, fez 5 entrevistas', says:'Todos disseram que a ideia é ótima e que usariam. Validei!',
          q:'Qual é a avaliação correta?',
          opts:[
            {t:'Está validado: cinco pessoas aprovaram.', ok:false, why:'Elogio e "usaria" não custam nada. Validação exige sinal de compra.'},
            {t:'Ainda não: falta um sinal de compra, como aceitar um piloto pago, agendar a próxima etapa ou apresentar a um sócio.', ok:true, why:'Atitudes com custo (tempo, dinheiro, reputação) mostram interesse real.'},
            {t:'Está validado, se as cinco forem amigas próximas.', ok:false, why:'Amigos tendem a agradar. É um viés, não uma prova.'},
            {t:'Precisa entrevistar 100 pessoas com a mesma pergunta.', ok:false, why:'O problema é o tipo de pergunta e a falta de sinal de compra, não a quantidade.'}
          ]},
        { who:'Igor, 35 anos, preparando uma entrevista', says:'Minha pergunta principal vai ser: "Você pagaria R$ 300 por mês por um assistente com IA?"',
          q:'Qual pergunta revela mais?',
          opts:[
            {t:'Manter a pergunta, porque é direta.', ok:false, why:'Perguntas hipotéticas sobre o futuro geram respostas educadas e pouco confiáveis.'},
            {t:'"Como você resolve isso hoje e quanto isso te custa em tempo ou dinheiro?"', ok:true, why:'Perguntar sobre o presente e o passado revela o tamanho real do problema e o que a pessoa já gasta.'},
            {t:'"Você acha que IA é o futuro?"', ok:false, why:'Opinião geral sobre tecnologia não diz nada sobre o problema dela.'},
            {t:'"Posso te mostrar uma demonstração de 40 minutos?"', ok:false, why:'Antes de mostrar a solução, é preciso entender o problema.'}
          ]},
        { who:'Sueli, 50 anos, recebeu interesse de uma loja', says:'A dona da loja quer testar meu serviço. Penso em fazer um piloto de graça e por tempo indeterminado.',
          q:'Qual é a forma mais saudável de propor o piloto?',
          opts:[
            {t:'De graça e sem prazo, para não perder a cliente.', ok:false, why:'Sem prazo nem critério, o piloto vira trabalho gratuito sem fim.'},
            {t:'Um piloto com escopo pequeno, prazo definido, critério de sucesso combinado e preço especial (ou gratuito em troca de depoimento e estudo de caso autorizado).', ok:true, why:'Limites claros tornam o piloto justo para os dois lados e geram prova para os próximos clientes.'},
            {t:'Cobrar o preço cheio desde o primeiro dia, sem piloto.', ok:false, why:'Pode funcionar, mas o piloto ajuda a reduzir o risco percebido pelo primeiro cliente.'},
            {t:'Fazer o piloto sem nada por escrito, para mostrar confiança.', ok:false, why:'Até o piloto precisa de combinado escrito para evitar mal-entendidos.'}
          ]}
      ]},
    { id:'1.4', title:'Seu diferencial e suas provas', min:11,
      body:[
        `<div class="card analogy"><h3>🔧 O eletricista do bairro</h3><p>Existem dezenas de eletricistas na cidade, mas você chama aquele que o vizinho indicou, que mostrou fotos de serviços parecidos e explicou o problema sem enrolar. Ele não é o único que sabe fazer: é o que <b>dá mais segurança</b> para quem contrata.</p></div>`,
        `<div class="term"><b>Diferencial</b> = o motivo pelo qual o cliente escolhe você e não outra pessoa. <b>Prova</b> = evidência concreta de que você entrega (exemplo, demonstração, depoimento). <b>Demonstração</b> = um exemplo funcionando, com dados fictícios, que o cliente pode ver. <b>Garantia de processo</b> = compromisso com o que você controla (prazo, ajustes, suporte), nunca com o resultado do negócio do cliente.</div>`,
        `<div class="card"><h3>Fontes de diferencial que não dependem de ser "o melhor"</h3>
          <div class="tw"><table class="tbl"><tr><th>Fonte</th><th>Exemplo</th></tr>
          <tr><td>Conhecer o nicho</td><td>"Trabalhei 6 anos em clínica, sei como funciona a agenda"</td></tr>
          <tr><td>Proximidade</td><td>"Atendo presencialmente na sua cidade"</td></tr>
          <tr><td>Rapidez</td><td>"Entrego em 7 dias"</td></tr>
          <tr><td>Cuidado com dados</td><td>"Trabalho com dados fictícios nos testes e explico como seus dados serão tratados"</td></tr>
          <tr><td>Acompanhamento</td><td>"Treino sua equipe e acompanho por 30 dias"</td></tr></table></div></div>`,
        `<div class="card"><h3>Montando provas desde o zero</h3>
          <ol class="golden"><li><span>Faça uma <b>demonstração</b> para um negócio fictício do seu nicho, com dados inventados.</span></li><li><span>Grave um vídeo curto mostrando o antes e o depois.</span></li><li><span>Resolva um problema real seu ou de um conhecido e documente (com autorização).</span></li><li><span>Depois do primeiro piloto, peça um <b>depoimento</b> sincero e autorização para mostrar o trabalho.</span></li><li><span>Ofereça uma <b>garantia de processo</b>: "se não entregar no prazo, o ajuste extra é por minha conta".</span></li></ol>
          <p><b>Erros comuns:</b> inventar números ou depoimentos; mostrar trabalho de cliente sem autorização; usar dados reais de terceiros na demonstração; dizer "sou o mais barato" como único diferencial.</p></div>`,
        `<div class="card"><h3>📍 Na prática</h3><p>Um técnico em informática sem clientes de IA gravou um vídeo de 2 minutos mostrando um assistente para uma pet shop fictícia. Ao mandar o vídeo junto com a primeira mensagem, deixou claro que era uma demonstração. As conversas ficaram mais fáceis, porque o cliente via o resultado em vez de imaginar.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a gente prefere chamar o eletricista que o vizinho indicou.</div>`
      ],
      ch:[
        { who:'Jonas, 25 anos, ainda não tem clientes', says:'Não tenho portfólio, então não tenho como provar nada. Vou esperar o primeiro cliente aparecer.',
          q:'Qual é o melhor caminho?',
          opts:[
            {t:'Esperar, porque sem cliente não há prova.', ok:false, why:'Dá para criar provas antes do primeiro cliente.'},
            {t:'Criar uma demonstração para um negócio fictício do nicho, com dados inventados, e um vídeo curto mostrando o antes e o depois.', ok:true, why:'Uma demonstração concreta mostra o que você sabe fazer e facilita a primeira venda.'},
            {t:'Dizer que já atendeu grandes empresas.', ok:false, why:'Mentir destrói a confiança quando descoberto e pode configurar propaganda enganosa.'},
            {t:'Copiar o portfólio de outra pessoa.', ok:false, why:'É desonesto e viola o direito de quem fez o trabalho.'}
          ]},
        { who:'Aurora, 38 anos, compete com agências maiores', says:'As agências têm mais gente e mais ferramentas. Não tenho como competir.',
          q:'Qual diferencial ela pode usar?',
          opts:[
            {t:'Cobrar sempre metade do preço das agências.', ok:false, why:'Preço baixo como único diferencial atrai clientes difíceis e não paga o trabalho.'},
            {t:'Proximidade, conhecimento do nicho, atendimento direto e rapidez, mostrados com provas concretas.', ok:true, why:'Pequenos prestadores competem bem quando destacam o que as grandes estruturas não oferecem.'},
            {t:'Fingir ser uma agência grande.', ok:false, why:'Fingir gera expectativas que ela não consegue cumprir.'},
            {t:'Desistir desse mercado.', ok:false, why:'Há clientes que preferem justamente atendimento próximo e direto.'}
          ]},
        { who:'Leila, 32 anos, montando a demonstração', says:'Vou usar as conversas reais de WhatsApp da clínica da minha tia na demonstração, ficam mais realistas.',
          q:'O que ela deveria fazer?',
          opts:[
            {t:'Usar as conversas reais, porque é da família.', ok:false, why:'As conversas são dados de pacientes, provavelmente com informações de saúde. Parentesco não autoriza o uso.'},
            {t:'Criar conversas fictícias, inspiradas nos tipos de pergunta reais, sem nenhum dado de pessoas reais.', ok:true, why:'Dados fictícios dão realismo sem expor ninguém e mostram ao cliente que ela cuida de privacidade.'},
            {t:'Usar as reais, mas apagar só os sobrenomes.', ok:false, why:'Nome, telefone e contexto ainda podem identificar as pessoas.'},
            {t:'Usar as reais e pedir para o cliente não divulgar.', ok:false, why:'O problema é o uso sem autorização, não a divulgação.'}
          ]},
        { who:'Tales, 36 anos, quer passar segurança', says:'Vou oferecer garantia: se o cliente não vender mais em 30 dias, devolvo o dinheiro.',
          q:'Qual garantia é mais adequada?',
          opts:[
            {t:'Manter a garantia de vendas, porque mostra confiança.', ok:false, why:'Vendas dependem de muitos fatores fora do controle dele, e a garantia pode gerar prejuízo e conflito.'},
            {t:'Uma garantia de processo, sobre o que ele controla: prazo, ajustes incluídos e suporte por um período.', ok:true, why:'Garantir o que depende de você é honesto e ainda reduz o risco percebido pelo cliente.'},
            {t:'Nenhuma garantia de nada.', ok:false, why:'Uma garantia de processo bem definida ajuda a fechar sem promessas indevidas.'},
            {t:'Garantia de dobrar o número de seguidores.', ok:false, why:'Também é resultado fora do controle dele.'}
          ]}
      ]},
    { id:'1.6', title:'Concorrentes e alternativas: o que o cliente usa hoje', min:18,
      body:[
        `<div class="card analogy"><h3>🥟 A volta na feira antes de montar a barraca</h3><p>Antes de abrir uma barraca de pastel, o feirante esperto dá uma volta na feira: vê quem já vende, quanto cobra, onde tem fila e o que os clientes pedem e não encontram. Ele não copia a receita do vizinho. Ele procura o <b>espaço vazio</b> que combina com o que ele faz bem.</p></div>`,
        `<div class="term"><b>Concorrente direto</b> = quem vende um serviço parecido para o mesmo tipo de cliente. <b>Alternativa</b> = qualquer jeito que o cliente usa hoje para resolver o problema, inclusive planilha, funcionário, o sobrinho que "mexe com computador" ou simplesmente não fazer nada. <b>Faixa de preço de mercado</b> = o intervalo de valores que o cliente já está acostumado a ver; serve de referência, não de cópia (o cálculo do seu preço fica para o Módulo 2). <b>Lacuna</b> = algo que o cliente reclama e que ninguém resolve bem.</div>`,
        `<div class="card"><h3>Exemplo resolvido: o mapa de alternativas da Bruna</h3><p>Bruna, 33 anos, de Belo Horizonte, quer oferecer atendimento automático no WhatsApp para clínicas de fisioterapia. Antes de divulgar, ela montou um mapa com o que essas clínicas usam hoje. Os custos abaixo são exemplos ilustrativos: valores reais variam por cidade e mudam com o tempo.</p>
          <div class="tw"><table class="tbl"><tr><th>Alternativa</th><th>Quanto custa ao cliente</th><th>O que reclamam</th><th>Lacuna</th></tr>
          <tr><td>Recepcionista responde tudo à mão</td><td>2 a 3 horas por dia da recepção</td><td>"À noite e no fim de semana ninguém responde"</td><td>Resposta fora do horário</td></tr>
          <tr><td>Plataforma de chatbot pronta</td><td>Assinatura mensal (varia muito)</td><td>"Configurei, ficou confuso e a equipe largou"</td><td>Configuração e treino da equipe</td></tr>
          <tr><td>Agência de marketing</td><td>Pacote mensal mais caro</td><td>"Não entendem como funciona a agenda de uma clínica"</td><td>Conhecimento da rotina</td></tr>
          <tr><td>Não fazer nada</td><td>Pacientes que desistem por demora</td><td>"Perdi gente que mandou mensagem no sábado"</td><td>A dor existe e custa caro</td></tr></table></div>
          <ol class="golden"><li><span>Listou 4 alternativas, incluindo <b>não fazer nada</b>.</span></li><li><span>Anotou o que cada uma custa ao cliente, em dinheiro <b>ou em tempo</b>, marcando os valores como aproximados.</span></li><li><span>Leu avaliações públicas e comentários em grupos de profissionais, copiando as <b>palavras exatas</b> das reclamações.</span></li><li><span>Marcou a lacuna que combina com o diferencial dela (ela trabalhou 4 anos na recepção de uma clínica).</span></li><li><span>Reescreveu a oferta mirando essa lacuna.</span></li></ol>
          <div class="flows">
            <div class="flow old"><h4>Antes</h4>
              <div class="node">"Chatbot com IA para clínicas"</div><div class="arrow">▼</div>
              <div class="node hot">Igual a dezenas de anúncios<small>o cliente compara só o preço</small></div>
            </div>
            <div class="flow new"><h4>Depois</h4>
              <div class="node">"Configuro o WhatsApp da sua clínica de fisioterapia para responder fora do horário e treino sua recepção em 1 semana"</div><div class="arrow">▼</div>
              <div class="node good">Ataca a lacuna que os clientes citam<small>e usa as palavras deles</small></div>
            </div>
          </div></div>`,
        `<div class="card"><h3>Erros comuns e como detectar</h3>
          <ol class="golden">
            <li><span><b>"Não tenho concorrente."</b> Sinal: você não encontrou nenhuma alternativa. Correção: o concorrente pode ser a planilha ou o "não fazer nada". Se ninguém tenta resolver, confira se o problema dói de verdade.</span></li>
            <li><span><b>Copiar a oferta ou o texto de outro.</b> Sinal: sua página fica parecida com a dele e você não sabe explicar por que é diferente. Correção: use o concorrente para entender o que o cliente já conhece e escreva seu texto destacando a sua lacuna. Copiar texto alheio também pode violar direitos autorais.</span></li>
            <li><span><b>Confiar no preço que a IA "achou".</b> Sinal: número sem fonte, em dólar ou de outro ano. Correção: abra a fonte, confira data, moeda e país, e trate como faixa aproximada.</span></li>
            <li><span><b>Definir a oferta falando mal dos outros.</b> Sinal: seu argumento principal é "eles são ruins". Correção: fale do que você faz e para quem.</span></li>
          </ol></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez</h3><p>Use o <b>Perplexity</b> (plano gratuito) por cerca de 5 minutos:</p>
          <ol class="golden"><li><span>Escolha 1 nicho candidato para o seu serviço.</span></li><li><span>Escreva, com suas palavras, um pedido para descobrir como esse público resolve o problema hoje e quais reclamações aparecem, pedindo as fontes.</span></li><li><span>Abra pelo menos 2 fontes e confira se dizem o que a resposta afirma.</span></li><li><span>Monte a sua tabela com 4 colunas: alternativa, custo para o cliente, reclamação, lacuna.</span></li><li><span>Circule a lacuna que combina com o seu diferencial.</span></li></ol>
          <p>🔒 Pesquise o nicho, não pessoas: não cole nomes de clientes, conversas ou dados de ninguém. E não copie textos de concorrentes para a sua página.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o pasteleiro dá uma volta na feira antes de montar a barraca, e por que copiar a barraca do vizinho não ajuda.</div>`
      ],
      ch:[
        { who:'Gustavo, 31 anos, quer automatizar orçamentos de marcenarias', says:'Pesquisei e ninguém faz isso. Tenho o mercado todo só para mim!',
          q:'Qual é a leitura mais cuidadosa?',
          opts:[
            {t:'Comemorar e investir logo em anúncios, já que não há concorrência.', ok:false, why:'Não achar concorrente direto não significa que o caminho está livre. Pode ser só que ele ainda não olhou as alternativas.'},
            {t:'Desistir, porque se ninguém faz é porque não dá dinheiro.', ok:false, why:'Pode haver uma lacuna real. A conclusão só vem depois de olhar as alternativas e conversar com clientes.'},
            {t:'Mapear como as marcenarias fazem orçamento hoje (caderno, WhatsApp, planilha) e, se ninguém tenta resolver, confirmar nas conversas se o problema dói de verdade.', ok:true, why:'A alternativa mais comum costuma ser o jeito manual ou não fazer nada. Entender isso mostra o tamanho da dor e com o que ele vai competir.'},
            {t:'Registrar a ideia como patente antes de falar com qualquer pessoa.', ok:false, why:'Ideia de serviço não se protege assim, e esperar só atrasa o aprendizado com clientes.'}
          ]},
        { who:'Renata, 29 anos, achou a página de um concorrente', says:'A página dele é ótima. Vou copiar o texto inteiro e só trocar o nome e o telefone.',
          q:'O que ela deveria fazer com essa página?',
          opts:[
            {t:'Usar como referência do que o cliente já conhece e das dúvidas que aparecem, e escrever o próprio texto destacando a lacuna que ela atende.', ok:true, why:'Observar o concorrente ensina; copiar apaga o seu diferencial e pode violar direitos autorais.'},
            {t:'Copiar, porque texto na internet é público e livre.', ok:false, why:'Estar visível não significa estar livre para cópia. O texto tem autor.'},
            {t:'Copiar só metade, para não ficar igual.', ok:false, why:'Continua sendo cópia e continua sem mostrar por que escolher a Renata.'},
            {t:'Ignorar totalmente os concorrentes para não se influenciar.', ok:false, why:'Ignorar o mercado faz perder informação útil sobre o que o cliente já viu e o que falta.'}
          ]},
        { who:'Felipe, 38 anos, pesquisou preços com uma IA', says:'A IA disse que esse serviço custa entre US$ 500 e US$ 2.000. Vou cobrar isso em reais mesmo.',
          q:'Como ele deveria tratar essa informação?',
          opts:[
            {t:'Usar o valor de cima, porque mostra que o serviço é valioso.', ok:false, why:'Um número sem fonte, em outra moeda e de outro mercado não sustenta o preço dele.'},
            {t:'Converter para reais e cobrar o valor convertido.', ok:false, why:'Os mercados são diferentes. Converter a moeda não transforma a referência em preço brasileiro.'},
            {t:'Ignorar toda pesquisa de preço daqui para frente.', ok:false, why:'Referências de mercado ajudam, desde que conferidas e tratadas como faixa aproximada.'},
            {t:'Tratar como pista: conferir a fonte, a data, a moeda e o país, buscar referências brasileiras e confirmar nas conversas quanto o cliente já gasta com o problema.', ok:true, why:'A IA pode errar ou misturar mercados. Conferir e cruzar com o que o cliente diz dá uma referência confiável; o cálculo do preço vem no Módulo 2.'}
          ]},
        { who:'Lúcia, 44 anos, leu avaliações de plataformas de chatbot', says:'Muita gente reclama: "configurei, ficou confuso e a equipe largou". O que faço com isso?',
          q:'Qual é o melhor uso dessa descoberta?',
          opts:[
            {t:'Nada, porque reclamação de outra empresa não é problema dela.', ok:false, why:'Reclamação repetida é a pista mais valiosa de uma lacuna no mercado.'},
            {t:'Incluir na oferta a configuração e o treino da equipe, com acompanhamento por algumas semanas, e usar as palavras dos clientes ao divulgar.', ok:true, why:'Ela transforma a lacuna em diferencial concreto e fala na língua de quem tem o problema.'},
            {t:'Publicar as reclamações marcando a plataforma, para ganhar atenção.', ok:false, why:'Atacar outra empresa desgasta a imagem dela e não mostra o que ela entrega.'},
            {t:'Criar a própria plataforma de chatbot do zero.', ok:false, why:'A dor citada é configuração e adoção, não a falta de mais uma plataforma.'}
          ]}
      ]},
    { id:'1.7', title:'Serviço mínimo: o piloto que cabe em uma semana', min:17,
      body:[
        `<div class="card analogy"><h3>🚚 O food truck antes do restaurante</h3><p>Muito cozinheiro testa a ideia num food truck com 3 pratos antes de abrir um restaurante com 40 itens no cardápio. Se a fila aparece, ele investe. Se não aparece, perdeu pouco e aprendeu muito. <b>No serviço, o food truck é a sua versão mínima.</b></p></div>`,
        `<div class="term"><b>Serviço mínimo</b> (também chamado de MVP de serviço) = a menor versão que já resolve uma parte real do problema e que pode ser entregue e cobrada. <b>Entrega manual por trás</b> = no começo, você faz parte do trabalho à mão em vez de automatizar tudo, para aprender o que realmente importa. <b>Critério de sucesso</b> = um número combinado antes do piloto que diz se ele funcionou. <b>Fase 2</b> = lista do que fica para depois, com escopo e preço próprios.</div>`,
        `<div class="card"><h3>Exemplo resolvido: o assistente do Tiago</h3><p>Tiago, 35 anos, do Recife, queria vender um "assistente completo para imobiliárias". A lista dele tinha 6 itens e levaria meses. Veja como ele cortou:</p>
          <div class="tw"><table class="tbl"><tr><th>Item</th><th>Fica no mínimo?</th><th>Por quê</th></tr>
          <tr><td>Responder leads do site e do WhatsApp em minutos</td><td>✅ Sim</td><td>Era a dor nº 1 nas conversas: lead que espera horas procura outra imobiliária</td></tr>
          <tr><td>Agendar visitas</td><td>✅ Sim, à mão</td><td>O assistente coleta o horário preferido e o corretor confirma</td></tr>
          <tr><td>Integração com o sistema da imobiliária</td><td>❌ Fase 2</td><td>Leva semanas e muda de um cliente para outro</td></tr>
          <tr><td>Gerar contratos</td><td>❌ Fase 2</td><td>Risco jurídico alto e ninguém citou como dor principal</td></tr>
          <tr><td>Relatórios automáticos</td><td>❌ Fase 2</td><td>Uma planilha simples resolve no piloto</td></tr>
          <tr><td>Avaliação de imóveis com IA</td><td>❌ Fora</td><td>Não tem a ver com a dor que ele valida</td></tr></table></div>
          <ol class="golden"><li><span>Escolheu a <b>dor nº 1</b> que apareceu nas conversas.</span></li><li><span>Cortou o resto para a <b>fase 2</b>, sem apagar a lista.</span></li><li><span>Definiu o <b>critério de sucesso</b>: o tempo da primeira resposta ao lead cair de várias horas para menos de 10 minutos, medido por 2 semanas.</span></li><li><span>Ofereceu o piloto a <b>3 imobiliárias</b> com preço especial (no exemplo, R$ 600 cada; valor ilustrativo, o seu cálculo vem no Módulo 2).</span></li><li><span>Combinou por escrito o que acontece depois: preço cheio, ajustes incluídos e o que é fase 2.</span></li></ol>
          <div class="pipe"><div class="node ink">Dor nº 1<small>responder rápido</small></div><div class="ar">➜</div><div class="node yel">Versão mínima<small>1 semana</small></div><div class="ar">➜</div><div class="node ink">3 pilotos pagos<small>medir</small></div><div class="ar">➜</div><div class="node yel">Ajustar<small>e decidir a fase 2</small></div></div>
          <p><b>Por que 3 pilotos?</b> Um cliente pode ser exceção; três já mostram um padrão. E três cabem na agenda de quem está começando.</p></div>`,
        `<div class="card"><h3>Erros comuns e como detectar</h3>
          <ol class="golden">
            <li><span><b>Mínimo demais.</b> Sinal: o cliente não percebe diferença nenhuma na rotina. Correção: corte escopo, nunca a qualidade; o mínimo precisa resolver uma parte real da dor.</span></li>
            <li><span><b>Mínimo que vira máximo.</b> Sinal: a lista de "só mais uma coisinha" cresce toda semana. Correção: anote o pedido na fase 2, com escopo e preço próprios.</span></li>
            <li><span><b>Piloto sem critério de sucesso.</b> Sinal: no fim você só consegue perguntar "e aí, gostou?". Correção: combine um número antes de começar e meça antes e depois.</span></li>
            <li><span><b>Automatizar tudo antes de entender.</b> Sinal: semanas de integração antes do primeiro uso real. Correção: faça parte à mão no piloto e automatize o que se repetir.</span></li>
            <li><span><b>Dados reais sem combinado.</b> Sinal: o cliente manda planilhas com dados de pessoas "para você testar". Correção: combine por escrito quais dados entram, para quê e como serão apagados, em linha com a LGPD; nos testes, use dados fictícios.</span></li>
          </ol></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez</h3><p>Use o <b>ChatGPT</b> (plano gratuito) por cerca de 5 minutos:</p>
          <ol class="golden"><li><span>Escreva a lista completa do que o seu serviço poderia fazer, sem nome de cliente.</span></li><li><span>Peça, com suas palavras, que ele interprete um cliente exigente do seu nicho e questione o que é indispensável na primeira semana.</span></li><li><span>Corte a lista até sobrar a dor nº 1 e o mínimo para resolvê-la.</span></li><li><span>Escreva o seu critério de sucesso com um número e um prazo.</span></li><li><span>Confira: dá para entregar em até 1 semana?</span></li></ol>
          <p>🔒 Não cole dados de clientes, contratos, senhas de sistemas ou planilhas reais. Descreva o cenário de forma genérica.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o cozinheiro começa com um food truck de 3 pratos em vez de abrir logo um restaurante gigante.</div>`
      ],
      ch:[
        { who:'Sandro, 34 anos, quer vender para escolas de idiomas', says:'Vou construir as 6 funções que imaginei, com integração e tudo, e só depois oferecer. Em uns 4 meses fica pronto.',
          q:'Qual é o caminho mais seguro?',
          opts:[
            {t:'Seguir o plano, porque cliente só compra produto completo.', ok:false, why:'Quatro meses sem cliente é o maior risco: ele pode construir funções que ninguém quer.'},
            {t:'Escolher a dor nº 1 que aparece nas conversas, montar a versão mínima que resolve essa dor e oferecer um piloto pago a poucas escolas.', ok:true, why:'A versão mínima valida com dinheiro de verdade e mostra o que vale construir depois.'},
            {t:'Construir só a integração primeiro, porque é a parte mais difícil.', ok:false, why:'Começar pelo mais difícil não garante que seja o mais importante para o cliente.'},
            {t:'Oferecer as 6 funções de graça para ganhar clientes.', ok:false, why:'Grátis e completo é caro para ele e não prova que alguém pagaria.'}
          ]},
        { who:'Patrícia, 28 anos, montou o seu mínimo', says:'Os clientes querem respostas rápidas no WhatsApp. Meu mínimo vai ser um PDF com dicas de como responder mais rápido.',
          q:'O que há de errado nesse mínimo?',
          opts:[
            {t:'Nada: quanto menor, melhor.', ok:false, why:'Mínimo não é o menor possível; é o menor que ainda resolve uma parte real da dor.'},
            {t:'O PDF deveria ter mais páginas.', ok:false, why:'Mais páginas de dicas não respondem nenhum cliente mais rápido.'},
            {t:'Falta um nome comercial para o PDF.', ok:false, why:'O nome não muda o fato de que a entrega não resolve o problema.'},
            {t:'Não resolve a dor: um mínimo melhor seria, por exemplo, respostas automáticas às 5 perguntas mais frequentes, com encaminhamento para a equipe no resto.', ok:true, why:'Cortar escopo é bom; cortar o próprio resultado não. O cliente precisa sentir a diferença.'}
          ]},
        { who:'Diego, 41 anos, no meio de um piloto', says:'O cliente pediu para eu integrar o assistente ao sistema financeiro dele, "já que está tudo aberto mesmo".',
          q:'Como Diego deve responder?',
          opts:[
            {t:'Registrar o pedido como fase 2, com escopo e preço próprios, e terminar o piloto como combinado.', ok:true, why:'Protege o prazo e o critério de sucesso do piloto e transforma o pedido em uma nova venda.'},
            {t:'Fazer de graça, para agradar o cliente.', ok:false, why:'O piloto cresce sem limite, atrasa e mistura o que estava sendo medido.'},
            {t:'Recusar e dizer que nunca vai fazer integrações.', ok:false, why:'O pedido mostra interesse real. Recusar de vez desperdiça uma oportunidade.'},
            {t:'Pedir o acesso e a senha do sistema financeiro por mensagem para avaliar.', ok:false, why:'Compartilhar senha por mensagem é arriscado, e o assunto nem faz parte do piloto.'}
          ]},
        { who:'Elaine, 36 anos, fechou o primeiro piloto', says:'Daqui a duas semanas vou perguntar se a cliente gostou e pronto.',
          q:'Qual é a melhor forma de saber se o piloto funcionou?',
          opts:[
            {t:'Contar quantas mensagens elogiosas a cliente mandou.', ok:false, why:'Elogio é bom de ouvir, mas não mede o resultado combinado.'},
            {t:'Ver se ela usou todas as funções.', ok:false, why:'Uso de função não diz se a dor diminuiu.'},
            {t:'Combinar antes um critério com número e prazo (por exemplo, tempo de resposta ou faltas na agenda), medir antes e depois e comparar.', ok:true, why:'Um critério combinado evita discussão e vira prova concreta para os próximos clientes.'},
            {t:'Perguntar só no fim, para não incomodar.', ok:false, why:'Sem medir o "antes", não há com o que comparar no fim.'}
          ]}
      ]},
    { id:'1.8', title:'Página de oferta e teste de interesse', min:18,
      body:[
        `<div class="card analogy"><h3>🎂 A encomenda com sinal</h3><p>Uma confeiteira que vai abrir a loja pode pendurar um cartaz "em breve" com um caderno para as pessoas deixarem o telefone. Isso mostra curiosidade. Mas quando alguém <b>paga um sinal</b> para encomendar o bolo de aniversário, ela sabe que a venda é real. <b>Deixar contato é interesse; pagar é compromisso.</b></p></div>`,
        `<div class="term"><b>Página de oferta</b> = uma página simples (ou um texto fixado, ou um PDF de uma página) que diz para quem é, qual resultado, o que inclui, prazo, preço ou faixa e qual é o próximo passo. <b>Lista de espera</b> = pessoas que deixam o contato para serem avisadas. <b>Pré-venda</b> = o cliente paga, total ou um sinal, antes de a entrega começar, com data combinada. <b>Política de reembolso</b> = regra escrita, antes da venda, de quando e como você devolve o dinheiro.</div>`,
        `<div class="card"><h3>Exemplo resolvido: o teste da Carla</h3><p>Carla, 30 anos, de Curitiba, oferece organização de agenda e lembretes com IA para psicólogos autônomos. Ela montou uma página com 6 blocos:</p>
          <ol class="golden"><li><span><b>Para quem:</b> psicólogos que atendem sozinhos.</span></li><li><span><b>Resultado:</b> menos faltas sem aviso e menos tempo trocando mensagens para remarcar.</span></li><li><span><b>O que inclui:</b> lembretes automáticos, mensagem de remarcação e 1 ajuste.</span></li><li><span><b>Prazo:</b> pronto em 7 dias.</span></li><li><span><b>Cuidado com dados:</b> o serviço usa só nome, telefone e horário; nada de prontuário ou conteúdo das sessões.</span></li><li><span><b>Próximo passo:</b> agendar uma conversa de 20 minutos.</span></li></ol>
          <p>Ela enviou mensagens individuais (nada de disparo em massa) para 40 psicólogos que conhecia de grupos profissionais. Resultado:</p>
          <div class="tw"><table class="tbl"><tr><th>Sinal</th><th>Quantos</th><th>Força do sinal</th></tr>
          <tr><td>Abriram a página</td><td>25</td><td>Fraco: curiosidade</td></tr>
          <tr><td>Entraram na lista de espera</td><td>12</td><td>Médio: deixaram contato</td></tr>
          <tr><td>Agendaram conversa</td><td>6</td><td>Médio-forte: deram tempo</td></tr>
          <tr><td>Pagaram sinal da pré-venda por PIX</td><td>3</td><td>Forte: deram dinheiro</td></tr></table></div>
          <p>A pré-venda foi do piloto, com sinal de 50% (no exemplo, R$ 300 de R$ 600; valores ilustrativos). Ela recebeu por PIX usando uma chave aleatória, para não expor o CPF, e deixou a política escrita na página:</p>
          <div class="code">Começo até 10/11. Se eu não começar até essa data, devolvo 100% do sinal por PIX em até 2 dias úteis. Se você desistir antes do início, também devolvo 100%. Depois do início, o sinal cobre o trabalho já feito.</div>
          <p>Se você vende para consumidor pela internet, o Código de Defesa do Consumidor prevê direito de arrependimento em 7 dias (art. 49). Se for MEI, confira as regras de nota fiscal para o seu tipo de cliente. Na dúvida, consulte um contador.</p>
          <div class="flows">
            <div class="flow old"><h4>Antes</h4>
              <div class="node">"Assistente com IA para psicólogos. Chama no direct!"</div><div class="arrow">▼</div>
              <div class="node hot">Curtidas e nenhum contato<small>ninguém sabe o que recebe</small></div>
            </div>
            <div class="flow new"><h4>Depois</h4>
              <div class="node">Página com cliente, resultado, prazo, cuidado com dados e próximo passo</div><div class="arrow">▼</div>
              <div class="node good">3 sinais pagos em 2 semanas<small>validação com dinheiro</small></div>
            </div>
          </div></div>`,
        `<div class="card"><h3>Erros comuns e como detectar</h3>
          <ol class="golden">
            <li><span><b>Tratar lista de espera como venda.</b> Sinal: 50 inscritos e ninguém pagou nada. Correção: ofereça a pré-venda de um piloto e conte quem paga.</span></li>
            <li><span><b>Página que fala da ferramenta.</b> Sinal: quem visita pergunta "mas o que você faz?". Correção: reescreva com cliente, resultado e prazo.</span></li>
            <li><span><b>Pré-venda sem data nem reembolso.</b> Sinal: o cliente pergunta "e se não der certo?" e você improvisa. Correção: escreva a política antes de cobrar.</span></li>
            <li><span><b>Pedir dados demais.</b> Sinal: o formulário pede CPF, endereço e faturamento só para avisar alguém. Correção: peça só nome e contato, diga para que vai usar e como sair da lista, como pede a LGPD.</span></li>
            <li><span><b>Disparar em massa em grupos.</b> Sinal: mensagens apagadas, bloqueios, reclamações. Correção: mensagens individuais para quem faz parte do nicho.</span></li>
          </ol></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez</h3><p>Use o <b>Calendly</b> (plano gratuito, 1 tipo de evento) por cerca de 5 minutos:</p>
          <ol class="golden"><li><span>Crie um evento de 20 minutos para conversar sobre o seu piloto.</span></li><li><span>No formulário de agendamento, não acrescente perguntas: nome e e-mail bastam, nada de dados sensíveis.</span></li><li><span>Escreva, com suas palavras, a descrição do evento: para quem é, qual resultado e o que acontece na conversa.</span></li><li><span>Coloque o link como próximo passo da sua página ou mensagem de oferta.</span></li><li><span>Agende um horário você mesmo para testar o caminho do cliente.</span></li></ol>
          <p>🔒 Não peça dados dos clientes do seu cliente (pacientes, alunos, compradores) e não compartilhe a sua lista de contatos com ninguém.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos a diferença entre alguém deixar o telefone no caderno da confeitaria e alguém pagar o sinal do bolo.</div>`
      ],
      ch:[
        { who:'Marcos, 30 anos, publicou a lista de espera', says:'Já tenho 60 pessoas na lista! Vou pedir demissão amanhã e viver do serviço.',
          q:'Qual é o próximo passo mais prudente?',
          opts:[
            {t:'Pedir demissão, porque 60 interessados garantem renda.', ok:false, why:'Deixar contato não custa nada. Lista de espera não garante nenhum pagamento.'},
            {t:'Esperar a lista chegar a 500 pessoas para ter certeza.', ok:false, why:'O problema não é o tamanho da lista, e sim que ela mede um sinal fraco.'},
            {t:'Oferecer uma pré-venda de piloto a essas pessoas, contar quantas pagam e só então pensar em decisões grandes.', ok:true, why:'Pagamento é o sinal forte. Decisões que afetam a renda pedem evidência com dinheiro, não só contatos.'},
            {t:'Mandar a mesma mensagem para todos os grupos de que participa.', ok:false, why:'Disparo em massa vira spam e não aumenta a qualidade do sinal.'}
          ]},
        { who:'Joana, 27 anos, abriu a pré-venda por PIX', says:'Uma cliente perguntou: "E se você não entregar?". Eu não sei o que responder.',
          q:'O que Joana deveria ter preparado?',
          opts:[
            {t:'Uma política de reembolso escrita, com data de início, em que casos devolve o dinheiro e em quanto tempo.', ok:true, why:'Regras claras antes da venda dão segurança ao cliente e evitam improviso e conflito.'},
            {t:'Uma resposta dizendo que reembolso não existe em pré-venda.', ok:false, why:'Isso afasta o cliente e, em venda a consumidor pela internet, pode contrariar o direito de arrependimento do CDC.'},
            {t:'Um desconto maior para a cliente parar de perguntar.', ok:false, why:'Desconto não responde à dúvida sobre risco.'},
            {t:'Uma promessa verbal de que vai dar tudo certo.', ok:false, why:'Promessa verbal não substitui regra escrita.'}
          ]},
        { who:'Rafael, 35 anos, criou o formulário da lista de espera', says:'Pedi CPF, endereço, faturamento da empresa e a lista de clientes de cada interessado, para já ir adiantando.',
          q:'Como o formulário deveria ser?',
          opts:[
            {t:'Manter, porque mais dados ajudam a vender depois.', ok:false, why:'Coletar dados sem necessidade aumenta o risco e contraria o princípio da necessidade da LGPD.'},
            {t:'Manter, mas guardar tudo em uma planilha com senha.', ok:false, why:'Proteger é importante, mas o problema é pedir o que não precisa.'},
            {t:'Tirar só o CPF e manter o resto.', ok:false, why:'A lista de clientes do interessado são dados de terceiros que ele nem deveria receber.'},
            {t:'Pedir só nome e contato, dizer para que serão usados e como a pessoa pode sair da lista.', ok:true, why:'Coletar o mínimo necessário e explicar a finalidade é o que a LGPD pede e ainda passa confiança.'}
          ]},
        { who:'Bianca, 33 anos, publicou a página de oferta', says:'Minha página diz "IA generativa de última geração com os modelos mais avançados". Teve 30 visitas e nenhum contato.',
          q:'Qual é o ajuste mais provável de funcionar?',
          opts:[
            {t:'Colocar mais nomes de modelos e ferramentas para impressionar.', ok:false, why:'Mais jargão piora o problema: o visitante continua sem saber o que ganha.'},
            {t:'Reescrever com para quem é, o resultado, o que inclui, o prazo e um próximo passo claro, como agendar uma conversa.', ok:true, why:'A página precisa responder em segundos "isso é para mim e o que eu ganho?". O próximo passo transforma visita em contato.'},
            {t:'Pagar anúncios para levar 3.000 visitas à mesma página.', ok:false, why:'Mais tráfego para uma página que não comunica só multiplica o desperdício.'},
            {t:'Tirar a página do ar e desistir do nicho.', ok:false, why:'Com 30 visitas e um texto confuso, o primeiro suspeito é a página, não o nicho.'}
          ]}
      ]},
    { id:'1.9', title:'Métricas de validação: seguir, ajustar ou parar', min:17,
      body:[
        `<div class="card analogy"><h3>🎣 O caderno do pescador</h3><p>Um pescador experiente anota quantas vezes jogou a linha em cada ponto e quantos peixes pegou. Se em um ponto nada morde depois de muitas tentativas, ele muda de lugar. Ele não decide pelo "acho que aqui é bom": decide pelo caderno. <b>Validar uma oferta também pede caderno.</b></p></div>`,
        `<div class="term"><b>Funil de validação</b> = as etapas que o cliente percorre: contato, conversa, interesse com custo (pediu proposta ou marcou segunda reunião) e piloto pago. <b>Taxa de conversão</b> = quantos passaram de uma etapa para outra ÷ quantos estavam na etapa anterior × 100. <b>Sinal falso</b> = reação que parece validação mas não custa nada a quem dá (elogio, curtida, "me avisa quando lançar"). <b>Regra de decisão</b> = números escritos <b>antes</b> de olhar os resultados, que dizem se você segue, ajusta ou para.</div>`,
        `<div class="card"><h3>Exemplo resolvido: o caderno da Natália</h3><p>Natália, 37 anos, de Salvador, oferece relatórios mensais automáticos para escritórios de contabilidade. Antes de começar, ela escreveu a regra de decisão (os números são dela, não uma regra universal):</p>
          <div class="code">Seguir: 2 ou mais pilotos pagos a cada 10 conversas. Ajustar a oferta: 1 piloto em 10 conversas. Trocar o problema: 0 pilotos depois de 15 conversas.</div>
          <p>Em 3 semanas, o funil ficou assim:</p>
          <div class="tw"><table class="tbl"><tr><th>Etapa</th><th>Quantos</th><th>Taxa em relação à etapa anterior</th></tr>
          <tr><td>Contatos individuais</td><td>30</td><td>-</td></tr>
          <tr><td>Conversas feitas</td><td>12</td><td>12 ÷ 30 = 40%</td></tr>
          <tr><td>Pediram proposta ou segunda reunião</td><td>5</td><td>5 ÷ 12 ≈ 42%</td></tr>
          <tr><td>Fecharam piloto pago</td><td>2</td><td>2 ÷ 5 = 40%</td></tr></table></div>
          <p>Da conversa ao piloto: 2 ÷ 12 × 100 ≈ 17%, ou seja, cerca de 1,7 piloto a cada 10 conversas. Pela regra dela, ficou entre "seguir" e "ajustar". Ela olhou onde o funil mais perdia gente:</p>
          <div class="why-chain">
            <div>"Três escritórios pediram proposta e não fecharam."</div>
            <div>Por quê? → "Disseram que precisavam pensar."</div>
            <div>Pensar em quê? → "Não sabiam se o relatório funcionaria com o sistema deles."</div>
            <div class="root">Ajuste: incluir na proposta uma demonstração com dados fictícios no formato do sistema que o escritório usa.</div>
          </div>
          <p>Ela não mudou a regra; mudou a oferta e rodou mais 10 conversas.</p></div>`,
        `<div class="card"><h3>Sinal falso ou sinal real?</h3>
          <div class="tw"><table class="tbl"><tr><th>Parece validação, mas não custa nada</th><th>Custa algo, então vale mais</th></tr>
          <tr><td>"Que ideia ótima!"</td><td>Agendou a próxima reunião com data</td></tr>
          <tr><td>200 curtidas no post</td><td>Apresentou você ao sócio ou ao gerente</td></tr>
          <tr><td>"Me avisa quando lançar"</td><td>Pagou o sinal do piloto</td></tr>
          <tr><td>Amigo dizendo que "com certeza usaria"</td><td>Enviou informações do processo para você preparar a proposta</td></tr></table></div></div>`,
        `<div class="card"><h3>Erros comuns e como detectar</h3>
          <ol class="golden">
            <li><span><b>Contar elogios como validação.</b> Sinal: muitas reações positivas e nenhum compromisso. Correção: só conte atitudes que custam tempo, reputação ou dinheiro.</span></li>
            <li><span><b>Mudar a regra depois de ver o resultado.</b> Sinal: "2 em 10 era exigente demais, 1 já está bom". Correção: escreva e date a regra antes; mude só para a próxima rodada, com o motivo anotado.</span></li>
            <li><span><b>Conclusão grande com poucos dados.</b> Sinal: "conversei com 3 e o nicho não funciona". Correção: defina um número mínimo de conversas antes de trocar de nicho.</span></li>
            <li><span><b>Misturar nichos na mesma conta.</b> Sinal: taxas que não explicam nada. Correção: um caderno por nicho e por oferta.</span></li>
            <li><span><b>Olhar só o fim do funil.</b> Sinal: você sabe quantos fecharam, mas não onde os outros pararam. Correção: anote todas as etapas e ataque a que mais perde gente.</span></li>
          </ol></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez</h3><p>Use o <b>ChatGPT</b> (plano gratuito) por cerca de 5 minutos:</p>
          <ol class="golden"><li><span>Peça, com suas palavras, ajuda para montar a estrutura de uma tabela de funil de validação e para entender como calcular cada taxa.</span></li><li><span>Copie a estrutura para uma planilha ou papel e preencha com os seus números (se ainda não conversou com ninguém, use números fictícios e marque isso).</span></li><li><span>Escreva a sua regra de decisão com números para seguir, ajustar e parar.</span></li><li><span>Peça que ele aponte onde a sua regra está vaga ou fácil de "dar um jeitinho".</span></li><li><span>Reescreva a regra e anote a data.</span></li></ol>
          <p>🔒 Use apelidos como "Cliente A" e "Cliente B". Nunca cole nomes, telefones, e-mails ou trechos das conversas reais.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o pescador confia no caderno de anotações e não no palpite de que "aqui deve ter peixe".</div>`
      ],
      ch:[
        { who:'Vinícius, 32 anos, postou sobre o serviço no LinkedIn', says:'O post teve 200 curtidas e 15 comentários "quero!". Considero a oferta validada.',
          q:'Qual é a avaliação correta?',
          opts:[
            {t:'Validada: 15 pessoas disseram que querem.', ok:false, why:'Comentar "quero" não custa nada. É um sinal fraco até virar compromisso.'},
            {t:'Ainda não: são sinais fracos. Ele deve chamar quem comentou para uma conversa, oferecer o piloto e contar quem paga.', ok:true, why:'Curtidas e comentários abrem portas; validação é quando alguém dá tempo, reputação ou dinheiro.'},
            {t:'Validada, se as curtidas forem de pessoas do nicho.', ok:false, why:'Mesmo no nicho, curtir não é comprar.'},
            {t:'Não serve para nada; posts nunca trazem clientes.', ok:false, why:'Posts podem gerar contatos. O erro é tratar o contato como venda.'}
          ]},
        { who:'Tatiane, 39 anos, fez 12 conversas com donos de academia', says:'Todos gostaram da ideia, mas ninguém pediu proposta nem marcou outra reunião.',
          q:'O que esse funil indica?',
          opts:[
            {t:'Que ela precisa de mais contatos, porque o funil começou pequeno.', ok:false, why:'As conversas aconteceram; o funil trava depois delas. Mais contatos repetiriam o mesmo resultado.'},
            {t:'Que o preço está alto demais.', ok:false, why:'Ninguém chegou a pedir proposta, então o preço nem entrou em jogo.'},
            {t:'Que a oferta está validada, já que todos gostaram.', ok:false, why:'Gostar sem nenhum passo seguinte é exatamente o sinal falso.'},
            {t:'Que o problema não dói o bastante ou a oferta não está clara: revisar as palavras anotadas e testar outro problema do mesmo nicho na próxima rodada.', ok:true, why:'Quando o funil para logo após a conversa, o suspeito é o problema ou a forma de apresentá-lo, não a quantidade de contatos.'}
          ]},
        { who:'Rodrigo, 26 anos, definiu a regra antes', says:'Minha regra era 2 pilotos a cada 10 conversas. Consegui 1. Acho que vou baixar a regra para 1 e dizer que validei.',
          q:'O que ele deveria fazer?',
          opts:[
            {t:'Manter a regra desta rodada, ajustar a oferta no ponto em que o funil mais perdeu gente e fazer uma nova rodada; se quiser mudar a regra, que seja antes da próxima, com o motivo anotado.', ok:true, why:'A regra só protege contra o autoengano se não mudar depois de ver o resultado.'},
            {t:'Baixar a regra, porque 1 piloto já é um bom começo.', ok:false, why:'Mudar a regra depois do resultado transforma a métrica em torcida.'},
            {t:'Desistir de vez do nicho.', ok:false, why:'Pela própria regra dele, 1 em 10 indica ajustar, não abandonar.'},
            {t:'Parar de medir, porque números desanimam.', ok:false, why:'Sem medir, ele perde justamente a informação que mostra o que ajustar.'}
          ]},
        { who:'Sílvia, 47 anos, revisando o caderno', says:'Fiz 20 conversas, 8 pediram proposta e 2 fecharam piloto pago.',
          q:'Qual é a taxa de conversão da conversa até o piloto pago?',
          opts:[
            {t:'25%.', ok:false, why:'25% é 2 ÷ 8: a taxa de quem pediu proposta até o piloto, não de conversa até o piloto.'},
            {t:'40%.', ok:false, why:'40% é 8 ÷ 20: a taxa de conversa até pedido de proposta.'},
            {t:'10%.', ok:true, why:'2 ÷ 20 × 100 = 10%, ou seja, 1 piloto a cada 10 conversas.'},
            {t:'2%.', ok:false, why:'2 é a quantidade de pilotos, não a porcentagem.'}
          ]}
      ]},
    { id:'1.5', title:'Projeto: sua oferta validada', min:50,
      body:[
        `<div class="card"><p>Transforme o que você sabe fazer com IA numa oferta real e teste com pessoas do seu nicho. Este curso ensina a pensar o negócio; ele não promete ganhos. O resultado depende do seu mercado, da sua dedicação e de muitos fatores.</p></div>`
      ],
      projeto:{
        entrega:'Uma oferta clara para um nicho escolhido, com escopo, entregável e prazo, e o registro de pelo menos 3 conversas de validação.',
        passos:[
          'Liste 3 nichos possíveis e avalie cada um com as 3 perguntas (conheço? problema frequente? pode pagar?). Escolha um.',
          'Escreva a frase "Eu ajudo [cliente] a [resultado] por meio de [o que faço]".',
          'Descreva a oferta: escopo, o que não está incluído, entregável, prazo e garantia de processo.',
          'Converse com pelo menos 3 pessoas do nicho usando perguntas sobre o passado e anote as palavras exatas que usaram.',
          'Registre os sinais de compra (ou a falta deles) e ajuste a oferta.',
          'Defina seu diferencial e a primeira prova que vai criar (demonstração com dados fictícios).'
        ],
        checklist:[
          'A oferta fala de resultado, não de ferramenta.',
          'Escopo, entregável, prazo e o que não está incluído estão claros.',
          'Fiz pelo menos 3 conversas e registrei o que aprendi.',
          'A oferta não promete faturamento, vendas ou ganhos.',
          'Defini um diferencial real e uma prova honesta, sem dados de terceiros.'
        ],
        minimo:500
      }}
  ]},
  { id:2, icon:'💬', title:'Proposta e preço', sub:'Falar de dinheiro com clareza', lessons:[
    { id:'2.1', title:'Como montar uma proposta simples', min:10,
      body:[
        `<div class="card analogy"><h3>🧱 O orçamento do pedreiro</h3><p>O bom pedreiro diz o que vai fazer, com quais materiais, em quanto tempo, por quanto e <b>o que não está incluído</b>. Com isso, ninguém se surpreende no meio da obra.</p></div>`,
        `<div class="term"><b>Proposta</b> = documento que descreve o que você vai fazer, quando e por quanto. <b>Revisão</b> = ajuste incluído no serviço, com limite combinado. <b>Validade</b> = prazo em que o preço da proposta vale.</div>`,
        `<div class="card"><h3>A proposta de uma página</h3><p>Inclua:</p>
          <ol class="golden"><li><span>O <b>problema do cliente</b>, em palavras dele.</span></li><li><span>O que você vai fazer (<b>escopo</b>) e o que vai entregar.</span></li><li><span>O que <b>não está incluído</b>.</span></li><li><span><b>Prazo</b>.</span></li><li><span><b>Preço</b> e forma de pagamento.</span></li><li><span>Quantas <b>revisões</b> estão incluídas.</span></li><li><span><b>Validade</b> da proposta.</span></li></ol>
          <p>Escreva com clareza e sem termos técnicos. Peça à IA para revisar a proposta e apontar pontos que o cliente poderia entender de outra forma.</p></div>`,
        `<div class="card"><h3>Exemplo de estrutura</h3>
          <div class="code">Problema: "perco clientes porque demoro a responder no WhatsApp"
Escopo: respostas automáticas para 10 perguntas frequentes + agendamento
Não inclui: integração com sistema de pagamento, posts em redes sociais
Prazo: 10 dias úteis após o pagamento do sinal e o envio das informações
Preço: R$ [valor], 50% no início e 50% na entrega
Revisões: 2 rodadas de ajustes
Custos de ferramentas: pagos pelo cliente, na conta dele (estimativa: R$ [valor]/mês)
Validade: 15 dias</div>
          <p><b>Erros comuns:</b> esquecer quem paga as ferramentas de IA; prazo que começa "já", sem depender do envio de informações pelo cliente; proposta de 10 páginas que ninguém lê.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o pedreiro combina o que vai fazer e o que não vai fazer antes de começar a obra.</div>`
      ],
      ch:[
        { who:'Thiago, 29 anos, fez um site para um cliente', says:'Combinamos o site por mensagem. No final, o cliente pediu 5 telas a mais e disse que estava no combinado.',
          q:'O que faltou?',
          opts:[
            {t:'Nada, é assim com todos os clientes.', ok:false, why:'Essa situação é evitável com uma proposta escrita.'},
            {t:'Pedir desculpas e fazer tudo de graça para manter o cliente.', ok:false, why:'Fazer de graça cria o hábito de pedir mais e prejudica seu trabalho e seu bolso.'},
            {t:'Uma proposta escrita com escopo, o que não está incluído e quantas revisões estão no preço.', ok:true, why:'O que está escrito evita discussões e deixa claro o que é extra.'},
            {t:'Um site mais bonito, para o cliente não pedir mudanças.', ok:false, why:'Qualidade não substitui um combinado claro sobre o que está incluído.'}
          ]},
        { who:'Raquel, 33 anos, entregou um assistente com IA', says:'Depois da entrega, chegou a fatura da ferramenta de IA e o cliente achou que eu pagaria para sempre.',
          q:'O que deveria estar na proposta?',
          opts:[
            {t:'Nada, isso se resolve na conversa.', ok:false, why:'Custos recorrentes não combinados viram conflito.'},
            {t:'Quem paga as ferramentas e os serviços de IA, de preferência na conta do próprio cliente, com uma estimativa mensal.', ok:true, why:'Deixar claro quem paga e quanto, com a conta no nome do cliente, evita surpresas e dependência.'},
            {t:'Que os custos são sempre do prestador.', ok:false, why:'Pode inviabilizar o seu negócio, já que o uso cresce com o cliente.'},
            {t:'Que o cliente nunca terá custos mensais.', ok:false, why:'Seria falso se a solução usa serviços pagos.'}
          ]},
        { who:'Lúcio, 41 anos, escreveu a proposta', says:'Prazo: entrego em 7 dias. O cliente demorou 3 semanas para mandar as informações e cobrou o atraso de mim.',
          q:'Como o prazo deveria estar escrito?',
          opts:[
            {t:'"Entrego em 7 dias" está correto, ele que se atrasou.', ok:false, why:'A redação não deixou claro que o prazo depende das informações do cliente.'},
            {t:'"7 dias úteis a partir do recebimento do sinal e de todas as informações listadas", com a lista do que o cliente precisa enviar.', ok:true, why:'Deixar claro quando o prazo começa e o que depende do cliente evita cobranças injustas.'},
            {t:'Não colocar prazo nenhum.', ok:false, why:'Sem prazo, o cliente não consegue planejar e a confiança cai.'},
            {t:'"Entrego quando possível."', ok:false, why:'Vago demais, gera insegurança e conflito.'}
          ]},
        { who:'Nádia, 30 anos, usou IA para revisar a proposta', says:'Pedi para a IA reescrever a proposta e ela colocou termos técnicos e uma cláusula de multa que eu não entendi.',
          q:'O que fazer?',
          opts:[
            {t:'Enviar assim, porque a IA sabe escrever contratos.', ok:false, why:'Ela é responsável pelo que envia. Uma cláusula que não entende pode prejudicá-la ou ao cliente.'},
            {t:'Usar a IA para apontar ambiguidades, mas manter linguagem simples, retirar o que não entende e, em cláusulas jurídicas importantes, consultar um profissional.', ok:true, why:'A IA ajuda a revisar, mas a decisão e a responsabilidade pelo texto continuam sendo dela.'},
            {t:'Deixar a cláusula de multa, porque protege o prestador.', ok:false, why:'Uma cláusula mal escrita ou abusiva pode não ter validade e afastar o cliente.'},
            {t:'Parar de usar IA para qualquer coisa.', ok:false, why:'A IA ajuda na revisão; o cuidado está em conferir.'}
          ]}
      ]},
    { id:'2.2', title:'Como pensar o preço', min:11,
      body:[
        `<div class="card analogy"><h3>🍽️ Precificar um prato</h3><p>O dono do restaurante soma ingredientes, tempo de preparo, aluguel e margem, e olha o preço de pratos parecidos na região. Ele <b>não chuta um número</b> nem copia o vizinho sem pensar.</p></div>`,
        `<div class="term"><b>Custo</b> = o que você gasta para entregar, incluindo o seu tempo. <b>Valor</b> = o que o resultado vale para o cliente. <b>Margem</b> = o que sobra depois de cobrir os custos.</div>`,
        `<div class="card"><h3>Três olhares sobre o preço</h3>
          <div class="tw"><table class="tbl"><tr><th>Olhar</th><th>A pergunta</th></tr>
          <tr><td><b>Custo</b></td><td>Quantas horas você gasta e quanto vale a sua hora, somando ferramentas e imposto.</td></tr>
          <tr><td><b>Valor</b></td><td>Quanto o resultado ajuda o cliente (tempo economizado, clientes atendidos).</td></tr>
          <tr><td><b>Mercado</b></td><td>O que é cobrado por serviços parecidos na sua região.</td></tr></table></div>
          <p>Você pode cobrar <b>por projeto, por hora ou por mensalidade</b> (para serviços contínuos, como manutenção). Comece sem preços muito baixos, porque o preço baixo demais atrai clientes difíceis e não paga seu tempo.</p>
          <p>Não existe um valor mágico, e ninguém pode prometer quanto você vai ganhar. Pesquise o mercado e ajuste com a experiência.</p></div>`,
        `<div class="card"><h3>Calculando o valor da sua hora (exemplo com números fictícios)</h3>
          <div class="code">quanto quero receber por mês (líquido)   R$ 3.000
custos fixos (internet, ferramentas, etc.) R$   400
reserva para impostos e imprevistos (20%)  R$   680
total necessário por mês                   R$ 4.080
horas realmente cobráveis por mês           60 h   (o resto vai para vender, estudar, organizar)
valor mínimo da hora                       R$ 4.080 ÷ 60 = R$ 68</div>
          <p>Um projeto que leva 20 horas, então, não deveria sair por menos de R$ 1.360 nesse exemplo. Se o valor para o cliente for alto, o preço pode ser maior. Os números são só ilustrativos: use os seus e confira os impostos com um contador.</p>
          <p><b>Erros comuns:</b> considerar 160 horas cobráveis por mês, esquecendo o tempo de vender e organizar; esquecer impostos e ferramentas; cobrar o mesmo preço para um projeto simples e um complexo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o dono do restaurante soma tudo o que gasta antes de decidir o preço do prato.</div>`
      ],
      ch:[
        { who:'Bruna, 25 anos, está começando', says:'Vou cobrar o mais barato possível para ganhar clientes. Quase de graça, só para começar.',
          q:'Qual é a melhor estratégia?',
          opts:[
            {t:'Cobrar quase de graça sempre, porque o cliente vai valorizar.', ok:false, why:'Preço muito baixo não paga o seu tempo e costuma atrair clientes difíceis.'},
            {t:'Copiar o preço do concorrente sem pensar nos próprios custos.', ok:false, why:'O concorrente tem custos e valor diferentes dos seus. Copiar sem calcular pode dar prejuízo.'},
            {t:'Calcular o custo da sua hora, considerar o valor para o cliente, olhar o mercado local e definir um preço que pague o seu trabalho, ajustando com a experiência.', ok:true, why:'Considerar custo, valor e mercado leva a um preço justo para você e para o cliente.'},
            {t:'Cobrar o mesmo que agências grandes, para parecer profissional.', ok:false, why:'Preço sem relação com sua estrutura e suas provas pode afastar clientes no início.'}
          ]},
        { who:'Caio, 28 anos, calculou o valor da hora', says:'Quero R$ 4.000 por mês e o mês tem 160 horas de trabalho, então minha hora vale R$ 25.',
          q:'Qual é o erro do cálculo?',
          opts:[
            {t:'Nenhum, a conta está certa.', ok:false, why:'A divisão está certa, mas as premissas estão erradas.'},
            {t:'Ele considerou todas as horas como cobráveis e esqueceu impostos e custos; parte do tempo vai para vender, organizar e estudar.', ok:true, why:'Com menos horas cobráveis e os custos incluídos, o valor mínimo da hora fica bem maior.'},
            {t:'O mês tem 200 horas, então a hora deveria ser R$ 20.', ok:false, why:'Mais horas na conta pioram o erro.'},
            {t:'Ele deveria cobrar por minuto.', ok:false, why:'A unidade não corrige as premissas.'}
          ]},
        { who:'Helena, 37 anos, recebeu dois pedidos', says:'Um cliente quer respostas automáticas simples; o outro quer um assistente com documentos, integração e treinamento. Vou cobrar o mesmo dos dois.',
          q:'Qual é a melhor decisão?',
          opts:[
            {t:'Cobrar o mesmo, para ser justa.', ok:false, why:'Justo é cobrar de acordo com o trabalho e o valor entregue.'},
            {t:'Estimar as horas e a complexidade de cada um e considerar o valor para cada cliente, chegando a preços diferentes.', ok:true, why:'Projetos diferentes têm custos e valores diferentes. O preço deve refletir isso.'},
            {t:'Cobrar mais do cliente que parecer ter mais dinheiro.', ok:false, why:'Preço deve se basear no trabalho e no valor, não na aparência do cliente.'},
            {t:'Cobrar o mesmo e entregar menos no projeto complexo.', ok:false, why:'Entregar menos que o combinado quebra a confiança.'}
          ]},
        { who:'Vanessa, 31 anos, faz manutenção de automações', says:'Todo mês os clientes me chamam para ajustes, e eu cobro cada chamado avulso. Às vezes esqueço de cobrar.',
          q:'Qual forma de cobrança combina melhor com esse trabalho?',
          opts:[
            {t:'Continuar avulso e anotar melhor.', ok:false, why:'Pode funcionar, mas o trabalho é contínuo e previsível, o que combina com mensalidade.'},
            {t:'Uma mensalidade de manutenção com limite claro de horas ou chamados incluídos e valor para o que passar disso.', ok:true, why:'Mensalidade dá previsibilidade para os dois lados, e o limite evita trabalho infinito.'},
            {t:'Parar de cobrar ajustes pequenos.', ok:false, why:'Ajustes pequenos somados são trabalho real.'},
            {t:'Cobrar um valor alto uma única vez, para nunca mais cobrar.', ok:false, why:'Manutenção sem prazo vira obrigação infinita.'}
          ]}
      ]},
    { id:'2.3', title:'Pacotes e recorrência', min:11,
      body:[
        `<div class="card analogy"><h3>📱 Os planos de celular</h3><p>A operadora não pergunta "quantos minutos você quer?" para cada cliente: oferece três planos com o que está incluído em cada um. O cliente escolhe rápido e sabe o que esperar. <b>Pacotes facilitam a decisão</b> e organizam o seu trabalho.</p></div>`,
        `<div class="term"><b>Pacote</b> = combinação fixa de entregas, prazo e preço. <b>Recorrência</b> = serviço pago todo mês, como manutenção e melhorias. <b>Âncora</b> = a opção mais completa, que ajuda o cliente a perceber o valor das outras. <b>Adicional</b> = item extra com preço próprio, fora do pacote.</div>`,
        `<div class="card"><h3>Exemplo de três pacotes (valores ilustrativos)</h3>
          <div class="tw"><table class="tbl"><tr><th></th><th>Essencial</th><th>Completo</th><th>Acompanhado</th></tr>
          <tr><td>Perguntas frequentes no WhatsApp</td><td>10</td><td>25</td><td>25</td></tr>
          <tr><td>Agendamento automático</td><td>Não</td><td>Sim</td><td>Sim</td></tr>
          <tr><td>Treinamento da equipe</td><td>Vídeo gravado</td><td>1 encontro</td><td>2 encontros</td></tr>
          <tr><td>Ajustes após a entrega</td><td>1 rodada</td><td>2 rodadas</td><td>Mensal por 3 meses</td></tr>
          <tr><td>Preço</td><td>R$ A</td><td>R$ B</td><td>R$ C + mensalidade</td></tr></table></div>
          <p>Defina os valores com o cálculo de custo, valor e mercado da lição anterior.</p></div>`,
        `<div class="card"><h3>Recorrência sem armadilha</h3>
          <ol class="golden"><li><span>Diga exatamente o que a mensalidade inclui (horas, ajustes, relatórios, monitoramento).</span></li><li><span>Defina o que acontece com o que passar do limite.</span></li><li><span>Deixe claro como cancelar, com aviso prévio razoável.</span></li><li><span>Mantenha as contas das ferramentas <b>no nome do cliente</b>: se ele cancelar, continua com o que é dele.</span></li><li><span>Mostre o trabalho do mês num resumo curto: o cliente precisa ver o valor.</span></li></ol>
          <p><b>Erros comuns:</b> pacotes demais, que confundem; mensalidade sem limite de trabalho; "prender" o cliente deixando as contas no seu nome; esquecer de reajustar preços com o tempo.</p></div>`,
        `<div class="card"><h3>📍 Na prática</h3><p>Uma prestadora de serviço montava cada orçamento do zero e levava três dias para responder. Ao criar três pacotes com nomes simples e uma tabela de comparação, passou a responder no mesmo dia. A maioria dos clientes escolheu o pacote do meio, e os pedidos fora do padrão viraram adicionais com preço próprio, em vez de trabalho extra sem cobrança.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que é mais fácil escolher entre três planos de celular do que montar um do zero.</div>`
      ],
      ch:[
        { who:'Gustavo, 30 anos, monta cada orçamento do zero', says:'Cada cliente pede algo diferente e eu levo dias para montar cada proposta. Muitos desistem enquanto espero.',
          q:'O que ajudaria mais?',
          opts:[
            {t:'Continuar personalizando tudo, porque cada cliente é único.', ok:false, why:'Personalizar tudo atrasa a resposta e cansa os dois lados.'},
            {t:'Criar três pacotes com entregas, prazos e preços definidos, e adicionais para pedidos fora do padrão.', ok:true, why:'Pacotes agilizam a proposta, facilitam a escolha e organizam a entrega.'},
            {t:'Mandar uma tabela com 20 opções para o cliente montar.', ok:false, why:'Opções demais paralisam a decisão.'},
            {t:'Responder só aos clientes que parecem mais decididos.', ok:false, why:'Perde oportunidades sem resolver a lentidão.'}
          ]},
        { who:'Michele, 35 anos, oferece manutenção mensal', says:'O cliente da mensalidade me pede um projeto novo inteiro e diz que está incluído.',
          q:'O que faltou na oferta de recorrência?',
          opts:[
            {t:'Nada, mensalidade inclui tudo.', ok:false, why:'Sem limite, a mensalidade vira trabalho infinito por preço fixo.'},
            {t:'Definir por escrito o que a mensalidade inclui (por exemplo, até 4 horas de ajustes) e que projetos novos têm proposta própria.', ok:true, why:'Limites claros diferenciam manutenção de projeto novo e evitam conflito.'},
            {t:'Cobrar o dobro da mensalidade daqui para frente, sem conversar.', ok:false, why:'Mudar o preço sem combinado prejudica a relação.'},
            {t:'Fazer o projeto de graça para não perder o cliente.', ok:false, why:'Ensina o cliente a pedir mais sem pagar.'}
          ]},
        { who:'Henrique, 34 anos, cria automações', says:'Vou deixar as contas das ferramentas no meu nome. Assim, se o cliente cancelar, ele perde tudo e pensa duas vezes.',
          q:'Qual é a avaliação correta?',
          opts:[
            {t:'Boa estratégia de retenção.', ok:false, why:'Prender o cliente por dependência é antiético e destrói a confiança e a reputação.'},
            {t:'É melhor deixar as contas no nome do cliente e reter pela qualidade do serviço; se ele sair, leva o que é dele.', ok:true, why:'Transparência sobre propriedade gera confiança e indicações. Cliente preso não indica ninguém.'},
            {t:'Tanto faz em nome de quem estão as contas.', ok:false, why:'Afeta a propriedade, os custos e a segurança dos dados do cliente.'},
            {t:'Deixar no nome dele, mas sem passar as senhas de administração.', ok:false, why:'O cliente deve ter controle sobre as próprias contas.'}
          ]},
        { who:'Cíntia, 29 anos, tem três pacotes', says:'Quase todos escolhem o pacote mais barato, e depois pedem coisas do pacote do meio.',
          q:'Qual ajuste faz mais sentido?',
          opts:[
            {t:'Incluir os pedidos de graça para agradar.', ok:false, why:'Corrói a margem e desvaloriza os outros pacotes.'},
            {t:'Revisar o que cada pacote inclui, descrever melhor a diferença de valor e oferecer os itens extras como adicionais com preço.', ok:true, why:'Se os clientes querem itens do meio, a diferença entre pacotes precisa ficar clara e os extras precisam ter preço.'},
            {t:'Retirar o pacote mais barato sem aviso.', ok:false, why:'Pode funcionar depois de analisar, mas mudar sem entender o motivo é arriscado.'},
            {t:'Proibir pedidos fora do pacote.', ok:false, why:'Os pedidos mostram uma necessidade real; é melhor transformá-los em adicionais.'}
          ]}
      ]},
    { id:'2.4', title:'Negociar sem se desvalorizar', min:11,
      body:[
        `<div class="card analogy"><h3>🪑 O marceneiro e o desconto</h3><p>Quando o cliente pede desconto num móvel sob medida, o bom marceneiro não corta o preço e trabalha de graça: ele pergunta "posso usar outra madeira?" ou "tiramos uma gaveta?". <b>Preço menor significa entrega menor</b>, e os dois lados entendem.</p></div>`,
        `<div class="term"><b>Objeção</b> = dúvida ou resistência do cliente antes de fechar ("está caro", "vou pensar"). <b>Sinal</b> = pagamento inicial para começar o trabalho. <b>Contrapartida</b> = o que o cliente oferece em troca de um ajuste de preço (pagamento à vista, depoimento, prazo maior). <b>Limite</b> = o menor preço que você aceita, calculado antes da conversa.</div>`,
        `<div class="card"><h3>Respondendo às objeções mais comuns</h3>
          <div class="tw"><table class="tbl"><tr><th>Objeção</th><th>Resposta que ajuda</th></tr>
          <tr><td>"Está caro"</td><td>"Comparado a quê? Posso te mostrar o que cada parte resolve, ou montar uma versão menor que caiba no orçamento."</td></tr>
          <tr><td>"Vou pensar"</td><td>"Claro. Ficou alguma dúvida que eu possa esclarecer agora? Posso retornar na quinta?"</td></tr>
          <tr><td>"Fulano faz por menos"</td><td>"Pode ser. Vale comparar o que está incluído: prazo, ajustes, treinamento e cuidado com os dados."</td></tr>
          <tr><td>"Faz de graça e, se gostar, eu pago"</td><td>"Posso propor um piloto pequeno, com prazo e preço especial combinados."</td></tr></table></div></div>`,
        `<div class="card"><h3>Regras para negociar com tranquilidade</h3>
          <ol class="golden"><li><span>Saiba o seu <b>limite</b> antes da conversa.</span></li><li><span>Desconto, só com <b>redução de escopo ou contrapartida</b>.</span></li><li><span>Peça <b>sinal</b> antes de começar (por exemplo, 50%).</span></li><li><span>Confirme tudo o que foi combinado <b>por escrito</b>.</span></li><li><span>Saiba dizer não: alguns clientes não são para você agora.</span></li></ol>
          <p><b>Erros comuns:</b> dar desconto no primeiro "está caro"; começar sem sinal; aceitar pagamento "quando o cliente vender"; prometer resultado para fechar.</p></div>`,
        `<div class="card"><h3>📍 Na prática</h3><p>Um cliente pediu 30% de desconto num assistente com agendamento. Em vez de cortar o preço, o prestador propôs tirar o agendamento por agora e incluí-lo depois, como etapa dois. O cliente aceitou, o projeto coube no orçamento e, dois meses depois, ele mesmo pediu a segunda etapa, pagando o preço cheio.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o marceneiro tira uma gaveta quando o cliente pede um preço menor.</div>`
      ],
      ch:[
        { who:'Rita, 32 anos, recebeu um "está caro"', says:'O cliente disse que está caro. Vou dar 40% de desconto na hora para não perder.',
          q:'Qual é a melhor resposta?',
          opts:[
            {t:'Dar os 40% imediatamente.', ok:false, why:'Desconto imediato sinaliza que o preço era inflado e corrói a margem.'},
            {t:'Entender com o que ele está comparando, mostrar o que cada parte resolve e, se precisar, propor uma versão com escopo menor que caiba no orçamento.', ok:true, why:'Ajustar o escopo mantém o preço coerente com o trabalho e ainda atende o orçamento do cliente.'},
            {t:'Dizer que o preço é justo e encerrar a conversa.', ok:false, why:'Encerrar sem entender a objeção perde uma oportunidade de ajustar a proposta.'},
            {t:'Prometer resultados maiores para justificar o preço.', ok:false, why:'Prometer o que não controla para fechar gera conflito depois.'}
          ]},
        { who:'Eduardo, 27 anos, fechou o primeiro projeto', says:'O cliente pediu para começar já e pagar tudo no final.',
          q:'Qual condição é mais saudável?',
          opts:[
            {t:'Aceitar, para mostrar confiança.', ok:false, why:'Sem sinal, todo o risco fica com o prestador, que pode trabalhar e não receber.'},
            {t:'Pedir um sinal antes de começar (por exemplo, 50%) e o restante na entrega, com tudo por escrito.', ok:true, why:'O sinal divide o risco e mostra compromisso dos dois lados.'},
            {t:'Exigir 100% antes, sem negociação.', ok:false, why:'Pode ser aceitável em alguns casos, mas costuma afastar o primeiro cliente. O sinal é um equilíbrio comum.'},
            {t:'Aceitar receber "quando o cliente vender".', ok:false, why:'O pagamento passa a depender de algo fora do seu controle.'}
          ]},
        { who:'Sabrina, 36 anos, ouviu "outro faz por menos"', says:'Um concorrente cobra metade. Vou igualar o preço.',
          q:'Qual é a melhor abordagem?',
          opts:[
            {t:'Igualar imediatamente.', ok:false, why:'Sem comparar o que está incluído, ela pode trabalhar no prejuízo.'},
            {t:'Comparar com o cliente o que cada proposta inclui (prazo, ajustes, treinamento, cuidado com os dados) e manter o preço se a entrega for diferente.', ok:true, why:'Mostrar a diferença de entrega ajuda o cliente a comparar de forma justa.'},
            {t:'Falar mal do concorrente.', ok:false, why:'Desgasta a imagem dela e não mostra o próprio valor.'},
            {t:'Cobrar menos que o concorrente.', ok:false, why:'Guerra de preço raramente termina bem para quem está começando.'}
          ]},
        { who:'Marcelo, 39 anos, negociando com um cliente difícil', says:'O cliente quer desconto, prazo pela metade, mais funções e pagamento em 6 vezes sem sinal.',
          q:'Qual é a decisão mais sensata?',
          opts:[
            {t:'Aceitar tudo, porque cliente é cliente.', ok:false, why:'Aceitar todas as condições pode levar a prejuízo e desgaste.'},
            {t:'Voltar ao limite calculado antes: propor o que é viável (escopo, prazo e pagamento) e, se não houver acordo, recusar com educação.', ok:true, why:'Saber o próprio limite e dizer não quando necessário protege o negócio.'},
            {t:'Aceitar e entregar com menos qualidade.', ok:false, why:'Prejudica a reputação e o cliente.'},
            {t:'Sumir sem responder.', ok:false, why:'Recusar com educação mantém a reputação.'}
          ]}
      ]},
    { id:'2.6', title:'Preço com custos reais: impostos, taxas e margem', min:18,
      body:[
        `<div class="card analogy"><h3>🧁 A boleira e o preço do bolo</h3><p>A boleira que soma só farinha, ovos e açúcar descobre no fim do mês que trabalhou de graça: esqueceu o gás, a embalagem, a taxa da maquininha e o imposto. Ela não errou na receita, errou na conta. <b>Preço bom é o que sobra dinheiro depois de pagar tudo</b>, inclusive o que é descontado de quem compra.</p></div>`,
        `<div class="term"><b>Custo direto</b> = o que o projeto consome: suas horas e as ferramentas usadas só nele. <b>Percentuais sobre a venda</b> = valores descontados do preço recebido, como imposto sobre a nota e taxa de cartão. <b>Margem</b> = parte do preço reservada para imprevistos e para o negócio crescer; não é o seu salário, que já está no valor da hora. <b>Preço mínimo</b> = o menor valor que cobre tudo isso.</div>`,
        `<div class="card"><h3>Exemplo resolvido: assistente de WhatsApp para uma clínica em Goiânia</h3><p>Larissa calculou, como na lição sobre preço, que a hora dela custa R$ 55 (renda desejada mais custos fixos, divididos pelas horas realmente cobráveis). Todos os números são ilustrativos e mudam com o tempo e com a sua situação.</p>
          <div class="tw"><table class="tbl"><tr><th>Item</th><th>Valor</th><th>Observação</th></tr>
          <tr><td>Horas do projeto</td><td>22 h × R$ 55 = R$ 1.210</td><td>Inclui reuniões, testes e ajustes, não só a construção</td></tr>
          <tr><td>Ferramentas usadas só neste projeto</td><td>R$ 90</td><td>Ex.: um mês de plano pago para testes</td></tr>
          <tr><td><b>Custo direto</b></td><td><b>R$ 1.300</b></td><td></td></tr>
          <tr><td>Imposto sobre a nota</td><td>6% do preço</td><td>Exemplo de alíquota inicial no Simples; depende da atividade e do anexo</td></tr>
          <tr><td>Taxa de cartão parcelado</td><td>5% do preço</td><td>Exemplo; varia por banco, maquininha e número de parcelas</td></tr>
          <tr><td>Margem</td><td>15% do preço</td><td>Colchão para imprevistos e reinvestimento</td></tr></table></div></div>`,
        `<div class="card"><h3>Antes e depois: somar ou dividir?</h3>
          <div class="flows"><div class="flow old"><h4>❌ Antes: somar a porcentagem por cima</h4><div class="node">R$ 1.300 + 26% = R$ 1.638</div><div class="node">Descontos sobre R$ 1.638: 26% = R$ 425,88</div><div class="node">Sobra R$ 1.212,12: faltam quase R$ 90 para cobrir o custo</div></div><div class="flow new"><h4>✅ Depois: dividir pelo que sobra</h4><div class="node">Percentuais somados: 6% + 5% + 15% = 26%</div><div class="node">Preço = R$ 1.300 ÷ (1 − 0,26) = R$ 1.300 ÷ 0,74 ≈ R$ 1.757</div><div class="node">Arredonda para R$ 1.760; descontados os 26%, sobram cerca de R$ 1.302</div></div></div>
          <ol class="golden"><li><span>Some o <b>custo direto</b>: horas do projeto × valor da hora + ferramentas exclusivas.</span></li><li><span>Liste os <b>percentuais que saem do preço</b>: imposto sobre a nota, taxa de cartão ou de boleto, margem.</span></li><li><span>Divida o custo direto por <b>1 menos a soma dos percentuais</b>.</span></li><li><span>Arredonde <b>para cima</b> e compare com o valor para o cliente e com o mercado.</span></li><li><span>Se o resultado ficar acima do que o cliente pode pagar, <b>reduza o escopo</b>, não a margem.</span></li></ol>
          <p><b>E se você é MEI?</b> O MEI paga um valor fixo por mês (o DAS), que não depende de quanto você fatura. Nesse caso, o imposto entra nos custos fixos do valor da hora, e não como porcentagem do preço. Confira no Portal do Empreendedor se a sua atividade é permitida no MEI e qual é o limite anual de faturamento, e converse com um contador antes de mudar de enquadramento. PIX costuma ter taxa menor que cartão (para conta de empresa, alguns bancos cobram), então vale perguntar ao seu banco.</p></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como detectar</h3><ol class="golden"><li><span><b>Somar porcentagens por cima do custo</b> → sinal: no fim do projeto, o que sobra é menor que o planejado → correção: divida o custo por (1 − percentuais).</span></li><li><span><b>Contar só as horas de construção</b> → sinal: projetos "estouram" sempre em reuniões e ajustes → correção: anote as horas reais de 2 ou 3 projetos e use essa média.</span></li><li><span><b>Esquecer a taxa do parcelamento</b> → sinal: quem parcela no cartão rende menos que quem paga no PIX → correção: preço à vista no PIX e acréscimo informado para parcelar.</span></li><li><span><b>Usar a margem como desconto</b> → sinal: qualquer imprevisto vira prejuízo → correção: desconto só com redução de escopo, como na lição de negociação.</span></li><li><span><b>Chutar o imposto</b> → sinal: susto na hora da guia → correção: confirme seu enquadramento e sua alíquota com um contador.</span></li></ol></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (5 min)</h3><p>Use o <b>Google Planilhas</b> para montar a sua calculadora de preço mínimo.</p><ol class="golden"><li><span>Crie linhas para horas do projeto, valor da hora e ferramentas exclusivas, e uma célula com o custo direto.</span></li><li><span>Crie células para imposto, taxa de pagamento e margem, em porcentagem, e some-as.</span></li><li><span>Escreva você mesmo a fórmula que divide o custo direto por 1 menos a soma dos percentuais.</span></li><li><span>Teste dois cenários: pagamento no PIX e no cartão parcelado. Anote a diferença de preço.</span></li></ol><p>🔒 Use números fictícios ou seus, nunca dados de clientes reais (nome, CNPJ, faturamento). Se compartilhar a planilha, dê acesso só de leitura.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a boleira precisa pensar na taxa da maquininha antes de dizer o preço do bolo, e não depois.</div>`
      ],
      ch:[
        { who:'Fábio, 33 anos, cria automações para lojas', says:'Meu custo direto é R$ 2.000. Coloquei 25% por cima e cobrei R$ 2.500. No fim, entre imposto, taxa do cartão e margem, sobrou menos do que eu gastei.',
          q:'O que explica o problema e como corrigir?',
          opts:[
            {t:'Os 25% são calculados sobre o preço, não sobre o custo. Ele deveria dividir: R$ 2.000 ÷ 0,75 ≈ R$ 2.667.', ok:true, why:'Percentuais que saem do preço precisam ser calculados sobre o preço. Dividir por (1 − 0,25) garante que sobram os R$ 2.000.'},
            {t:'Ele deveria somar 50% por cima, para garantir.', ok:false, why:'Somar mais sem entender a conta pode acertar por sorte ou cobrar demais. O método correto é dividir.'},
            {t:'O problema é a taxa do cartão: basta proibir cartão.', ok:false, why:'A taxa é só uma parte. Mesmo no PIX, imposto e margem continuam saindo do preço.'},
            {t:'Não tem como corrigir, prestador de serviço sempre perde um pouco.', ok:false, why:'Com a conta certa, o preço cobre custos, descontos e margem.'}
          ]},
        { who:'Joana, 27 anos, é MEI e faz assistentes com IA', says:'Li que no Simples o imposto começa perto de 6%. Vou colocar 6% de imposto em cada proposta.',
          q:'Qual é a orientação mais correta?',
          opts:[
            {t:'Está certo, todo prestador paga 6% sobre cada nota.', ok:false, why:'O MEI paga um valor fixo mensal, não um percentual por nota.'},
            {t:'Não colocar imposto nenhum, porque MEI não paga imposto.', ok:false, why:'O MEI paga o DAS todo mês. É pouco, mas é custo real.'},
            {t:'Colocar 15%, para ter folga.', ok:false, why:'Inflar o imposto sem base deixa o preço menos competitivo e esconde a conta real.'},
            {t:'Como MEI, ela paga o DAS fixo; esse valor entra nos custos fixos do valor da hora. E deve confirmar se a atividade dela é permitida no MEI.', ok:true, why:'No MEI o imposto é fixo, então vai para os custos do mês. Conferir a atividade evita problemas com o enquadramento.'}
          ]},
        { who:'Otávio, 41 anos, recebe pedidos de parcelamento', says:'Cobro R$ 1.800 e muitos clientes parcelam em 6 vezes no cartão. A taxa come boa parte do que recebo.',
          q:'Qual condição é mais justa e transparente?',
          opts:[
            {t:'Aumentar o preço para todos, sem explicar.', ok:false, why:'Quem paga à vista acaba bancando quem parcela, e o cliente percebe a falta de clareza.'},
            {t:'Recusar qualquer parcelamento.', ok:false, why:'Pode afastar clientes que precisam parcelar. Dá para oferecer com o custo informado.'},
            {t:'Informar o preço à vista no PIX e o valor para parcelar no cartão, já com a taxa embutida, de forma clara na proposta.', ok:true, why:'Cada forma de pagamento mostra o próprio custo, e o cliente escolhe sabendo o valor.'},
            {t:'Parcelar por conta própria em 6 boletos sem custo, para agradar.', ok:false, why:'Ele assume o risco de atraso e as taxas de boleto sem cobrar por isso.'}
          ]},
        { who:'Lívia, 30 anos, chegou a um preço de R$ 3.400', says:'O cliente disse que só tem R$ 2.500. Vou tirar a margem e o imposto da conta para caber.',
          q:'O que ela deveria fazer?',
          opts:[
            {t:'Tirar a margem e o imposto, porque o importante é fechar.', ok:false, why:'O imposto será cobrado de qualquer jeito, e sem margem qualquer imprevisto vira prejuízo.'},
            {t:'Reduzir o escopo até o custo direto caber em R$ 2.500 com imposto, taxas e margem, e oferecer o restante como segunda etapa.', ok:true, why:'Preço menor com entrega menor mantém a conta saudável e ainda atende o orçamento do cliente.'},
            {t:'Aceitar R$ 2.500 e trabalhar menos horas sem avisar.', ok:false, why:'Entregar menos que o combinado quebra a confiança.'},
            {t:'Dizer que o preço é tabelado por lei.', ok:false, why:'Não existe tabela legal para esse tipo de serviço. Seria uma informação falsa.'}
          ]}
      ]},
    { id:'2.7', title:'Custos de IA no preço: franquia de uso e excedente', min:18,
      body:[
        `<div class="card analogy"><h3>💧 A conta de água do condomínio</h3><p>Quando a água é dividida igualmente entre os apartamentos, quem gasta pouco paga por quem lava a calçada todo dia. Com hidrômetro individual, cada um paga o que usa. Serviços de IA funcionam parecido: <b>o custo cresce com o uso</b>, e preço fixo "tudo incluso" costuma deixar a conta com quem não controla o consumo.</p></div>`,
        `<div class="term"><b>API</b> = acesso pago à IA usado dentro de outro sistema, cobrado pelo uso. <b>Custo variável</b> = o que aumenta quando o cliente usa mais (mensagens, conversas, imagens geradas). <b>Franquia</b> = quantidade de uso incluída na mensalidade. <b>Excedente</b> = uso acima da franquia, com preço combinado por bloco. <b>Limite de gasto</b> = teto configurado na plataforma para a conta não disparar.</div>`,
        `<div class="card"><h3>Primeira pergunta: em nome de quem fica a conta?</h3>
          <div class="tw"><table class="tbl"><tr><th>Situação</th><th>Como cobrar</th></tr>
          <tr><td>Conta da IA e da automação no nome do cliente (o caminho preferido)</td><td>O cliente paga direto ao fornecedor. Você informa uma estimativa mensal na proposta e cobra só o seu trabalho.</td></tr>
          <tr><td>Você opera a plataforma para vários clientes (por exemplo, um painel único)</td><td>Mensalidade com franquia de uso, excedente por bloco e limite de gasto configurado.</td></tr>
          <tr><td>Assinaturas que você usa para trabalhar em todos os projetos</td><td>Entram nos custos fixos do valor da hora, não item a item na proposta.</td></tr></table></div>
          <p>Não compartilhe nem "revenda" a sua assinatura pessoal de um chat de IA com clientes: isso costuma violar os termos de uso e mistura dados de clientes diferentes na mesma conta.</p></div>`,
        `<div class="card"><h3>Exemplo resolvido: o assistente da rede de pet shops em Curitiba</h3><p>Rogério opera um assistente de atendimento numa plataforma que ele mesmo administra. Ele estimou, testando, que cada conversa custa em média R$ 0,05 em IA. É um número de exemplo: o preço real depende do modelo, do tamanho das conversas e do dólar.</p>
          <div class="flows"><div class="flow old"><h4>❌ Antes: R$ 300 por mês "tudo incluso"</h4><div class="node">Mês normal: 2.000 conversas = R$ 100 de IA. Tudo bem.</div><div class="node">Mês de campanha de vacinação: 6.000 conversas = R$ 300 de IA</div><div class="node">A mensalidade inteira foi para a IA: Rogério trabalhou de graça</div></div><div class="flow new"><h4>✅ Depois: franquia e excedente</h4><div class="node">R$ 300 por mês com até 2.000 conversas incluídas</div><div class="node">Excedente: R$ 35 por bloco de 500 conversas (custo real do bloco: cerca de R$ 25)</div><div class="node">Campanha: 4.000 a mais = 8 blocos × R$ 35 = R$ 280, avisados antes</div></div></div>
          <div class="pipe"><div class="node ink">Medir o uso real</div><div class="ar">➜</div><div class="node ink">Definir franquia</div><div class="ar">➜</div><div class="node ink">Preço do excedente</div><div class="ar">➜</div><div class="node yel">Alerta em 80%</div><div class="ar">➜</div><div class="node ink">Relatório mensal</div></div>
          <p>Os R$ 10 a mais por bloco cobrem a variação do dólar, impostos sobre compras internacionais e o tempo de acompanhar o consumo. Na proposta, Rogério escreveu: "se o fornecedor da IA mudar os preços, os valores do excedente podem ser revistos, com aviso de 30 dias". E configurou na plataforma um limite de gasto e um alerta quando o uso chega a 80% da franquia, avisando o cliente antes de passar.</p></div>`,
        `<div class="why-chain"><b>Por que avisar antes do excedente?</b> Porque ninguém gosta de surpresa na fatura. → Surpresa vira sensação de cobrança escondida. → Cliente desconfiado cancela ou pede desconto. → Com o aviso em 80%, o cliente decide se quer pausar a campanha ou aceitar o excedente, e a cobrança vira escolha dele.</div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como detectar</h3><ol class="golden"><li><span><b>Mensalidade sem franquia</b> → sinal: a fatura da IA cresce e o seu ganho cai mês a mês → correção: franquia clara e preço por bloco excedente.</span></li><li><span><b>Estimar o custo sem testar</b> → sinal: a primeira fatura real é o dobro da estimativa → correção: rode um piloto de 1 ou 2 semanas e meça o custo médio.</span></li><li><span><b>Ignorar o dólar</b> → sinal: mesmo uso, fatura maior → correção: margem no excedente e cláusula de revisão com aviso.</span></li><li><span><b>Sem limite de gasto</b> → sinal: um erro de automação gera milhares de chamadas numa noite → correção: teto e alertas na plataforma.</span></li><li><span><b>Contas no seu nome sem necessidade</b> → sinal: o cliente não sabe quanto custa nem acessa os próprios dados → correção: prefira contas no nome dele.</span></li></ol></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (5 min)</h3><p>No <b>Google Planilhas</b>, simule a franquia de um serviço seu (ou de um cliente típico).</p><ol class="golden"><li><span>Escreva um custo médio de exemplo por uso (conversa, imagem ou relatório).</span></li><li><span>Defina a franquia mensal e calcule o custo dela.</span></li><li><span>Crie o preço do bloco excedente, com uma folga que você consiga justificar.</span></li><li><span>Teste três meses: fraco, normal e de pico. Veja em qual deles você perderia dinheiro sem franquia.</span></li></ol><p>🔒 Não cole na planilha chaves de API, senhas nem dados de clientes. Chave de API é como senha de banco: se vazar, alguém gasta na sua conta.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que, num prédio, é mais justo cada apartamento ter o próprio relógio de água.</div>`
      ],
      ch:[
        { who:'Sílvia, 34 anos, cobra R$ 250 por mês de uma imobiliária', says:'A imobiliária fez uma campanha e o uso do assistente triplicou. A fatura da IA, que está no meu cartão, quase igualou a mensalidade.',
          q:'O que deveria estar combinado desde o início?',
          opts:[
            {t:'Nada, prestador tem que absorver as variações.', ok:false, why:'Absorver um custo que cresce com o uso do cliente pode inviabilizar o serviço.'},
            {t:'Mensalidade com franquia de uso, preço por bloco excedente, alerta antes de passar e, de preferência, a conta da IA no nome do cliente.', ok:true, why:'Assim o custo variável fica visível e quem decide usar mais sabe quanto vai pagar.'},
            {t:'Desligar o assistente quando passar de um valor, sem avisar.', ok:false, why:'Desligar sem aviso prejudica o atendimento do cliente e a confiança.'},
            {t:'Dobrar a mensalidade de todos os clientes.', ok:false, why:'Clientes de uso baixo pagariam por quem usa muito, sem ligação com o custo real.'}
          ]},
        { who:'Wellington, 26 anos, está começando', says:'Tenho uma assinatura de chat de IA. Vou dar o meu login para três clientes usarem e cobrar uma parte de cada um.',
          q:'Qual é a avaliação correta?',
          opts:[
            {t:'Boa ideia, divide o custo e gera renda.', ok:false, why:'Compartilhar login costuma violar os termos de uso e mistura dados de clientes na mesma conta.'},
            {t:'Tudo bem, desde que cada cliente use em horários diferentes.', ok:false, why:'Os horários não resolvem o problema dos termos de uso nem da privacidade.'},
            {t:'Tudo bem se ele avisar os clientes.', ok:false, why:'Avisar não muda os termos do fornecedor nem protege os dados.'},
            {t:'Não deve compartilhar: cada cliente precisa da própria conta, e a assinatura dele entra nos custos fixos do valor da hora.', ok:true, why:'Respeita os termos de uso, separa os dados de cada cliente e mantém a conta do preço correta.'}
          ]},
        { who:'Kátia, 38 anos, vai propor um assistente novo', says:'Não sei quanto o cliente vai usar. Vou chutar R$ 50 de custo de IA por mês e fechar a franquia em cima disso.',
          q:'Qual é o caminho mais seguro?',
          opts:[
            {t:'Rodar um piloto curto, medir o custo médio real por conversa e só então definir a franquia, com cláusula de revisão.', ok:true, why:'Dados do piloto substituem o chute, e a cláusula de revisão protege os dois lados se o uso mudar.'},
            {t:'Chutar alto, R$ 500, para garantir.', ok:false, why:'Encarece a proposta sem base e pode afastar o cliente.'},
            {t:'Não falar de custo de IA na proposta.', ok:false, why:'Custo recorrente escondido vira conflito na primeira fatura.'},
            {t:'Usar o preço da IA de um vídeo antigo.', ok:false, why:'Preços de IA mudam com frequência. É preciso conferir e medir.'}
          ]},
        { who:'Diego, 31 anos, gerencia a plataforma de 5 clientes', says:'Um erro na minha automação ficou repetindo chamadas para a IA durante a madrugada.',
          q:'Que proteção mais ajudaria a evitar um prejuízo grande?',
          opts:[
            {t:'Olhar a fatura uma vez por mês.', ok:false, why:'Quando a fatura chegar, o prejuízo já aconteceu.'},
            {t:'Trocar de fornecedor de IA.', ok:false, why:'O erro estava na automação; ele se repetiria em outro fornecedor.'},
            {t:'Configurar limite de gasto e alertas de consumo na plataforma, e testar a automação antes de colocar no ar.', ok:true, why:'Teto e alertas param o estrago cedo, e testar evita o erro.'},
            {t:'Cobrar o prejuízo dos clientes como excedente.', ok:false, why:'O erro foi dele. Cobrar o cliente por isso seria injusto.'}
          ]}
      ]},
    { id:'2.8', title:'Condições de pagamento, atraso e reajuste', min:18,
      body:[
        `<div class="card analogy"><h3>🏠 O aluguel bem combinado</h3><p>Um bom contrato de aluguel diz o dia do vencimento, como pagar, o que acontece se atrasar e quando o valor é reajustado. Por isso, quase ninguém briga por causa do reajuste: ele estava escrito desde o começo. <b>Condição de pagamento clara é combinado feito antes do problema</b>.</p></div>`,
        `<div class="term"><b>Sinal</b> = pagamento inicial para começar. <b>Marco</b> = etapa do projeto que libera a próxima parcela. <b>Multa por atraso</b> = valor único cobrado quando o pagamento atrasa. <b>Juros de mora</b> = acréscimo proporcional aos dias de atraso. <b>Reajuste</b> = atualização do preço, normalmente uma vez por ano, por um índice combinado (como o IPCA). <b>Aviso prévio</b> = prazo para comunicar uma mudança antes que ela valha.</div>`,
        `<div class="card"><h3>Exemplo resolvido: o projeto de R$ 3.000 da Natália, em Recife</h3><p>Natália fecha um assistente de agendamento para um estúdio de pilates. Valores e percentuais são exemplos.</p>
          <div class="flows"><div class="flow old"><h4>❌ Antes</h4><div class="node">"50% no início e 50% na entrega"</div><div class="node">Sem data, sem meio de pagamento, sem regra de atraso</div><div class="node">Entrega aprovada; o restante foi pago 47 dias depois, após várias cobranças constrangedoras</div></div><div class="flow new"><h4>✅ Depois</h4><div class="node">40% de sinal (R$ 1.200) no PIX para começar</div><div class="node">30% (R$ 900) na aprovação do protótipo; 30% (R$ 900) até 5 dias após a entrega final</div><div class="node">Atraso: multa de 2% e juros de 1% ao mês, proporcionais aos dias; após 15 dias, suporte pausado com aviso</div></div></div>
          <div class="code">Investimento: R$ 3.000 (à vista no PIX ou boleto)
Pagamento: 40% para iniciar, 30% na aprovação do protótipo, 30% até 5 dias após a entrega
Cartão: em até 6x, com acréscimo da taxa da operadora (valor informado no link)
Nota fiscal: emitida a cada pagamento recebido
Atraso: multa de 2% + juros de 1% ao mês, proporcionais aos dias de atraso
Manutenção mensal: vencimento todo dia 10; reajuste anual pelo IPCA, com aviso de 30 dias
Validade desta proposta: 15 dias</div>
          <p>Em relações com consumidor (pessoa física comprando para uso próprio), o Código de Defesa do Consumidor limita a multa por atraso a 2%. Entre empresas há mais liberdade, mas cláusulas exageradas afastam clientes e podem ser questionadas. Em contratos maiores, peça a revisão de um profissional.</p></div>`,
        `<div class="card"><h3>Escolhendo o meio de pagamento</h3>
          <div class="tw"><table class="tbl"><tr><th>Meio</th><th>Vantagem</th><th>Cuidado</th></tr>
          <tr><td>PIX</td><td>Cai na hora, custo baixo ou zero</td><td>Confirme no extrato do banco, nunca só pelo comprovante enviado (comprovante falso é golpe comum)</td></tr>
          <tr><td>Boleto</td><td>Prático para empresas com setor financeiro</td><td>Costuma ter tarifa por boleto pago e leva dias para compensar</td></tr>
          <tr><td>Cartão (link de pagamento)</td><td>Permite parcelar</td><td>Taxa maior, ainda mais no parcelado; informe o acréscimo</td></tr>
          <tr><td>Cobrança recorrente</td><td>Facilita a mensalidade</td><td>Verifique se seu banco oferece PIX Automático ou débito recorrente e quais são as tarifas</td></tr></table></div></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como detectar</h3><ol class="golden"><li><span><b>"Restante na entrega" sem data</b> → sinal: o cliente aprova e o pagamento some → correção: prazo em dias após a entrega.</span></li><li><span><b>Nenhuma regra de atraso</b> → sinal: você cobra "por favor" várias vezes → correção: multa, juros e consequência (pausa do suporte) escritas desde o início.</span></li><li><span><b>Mensalidade sem reajuste previsto</b> → sinal: depois de 2 anos, o mesmo preço com custos maiores → correção: índice e mês do reajuste no combinado, com aviso prévio.</span></li><li><span><b>Multa exagerada</b> → sinal: o cliente trava a assinatura por causa de uma cláusula → correção: valores razoáveis e linguagem simples.</span></li><li><span><b>Começar antes do sinal cair</b> → sinal: trabalho feito e "o PIX não foi" → correção: só inicie com o valor no extrato.</span></li></ol></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (5 min)</h3><p>No <b>Gamma</b>, monte a seção "Investimento e condições" da sua proposta.</p><ol class="golden"><li><span>Escreva você mesmo, num rascunho, o preço, as parcelas por marco, os meios de pagamento, a regra de atraso e o reajuste.</span></li><li><span>Peça ao Gamma só para organizar esse texto em uma página clara, sem acrescentar cláusulas.</span></li><li><span>Leia como se fosse o cliente: alguma condição dá margem a duas interpretações? Corrija.</span></li><li><span>Apague tudo o que a ferramenta tiver inventado (multas, garantias, prazos).</span></li></ol><p>🔒 Não coloque nome, CPF, CNPJ, chave PIX pessoal nem dados bancários reais no rascunho. Use um cliente fictício.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o dia de pagar o aluguel e o reajuste precisam estar escritos antes de a família se mudar.</div>`
      ],
      ch:[
        { who:'Renan, 29 anos, entregou um site com chatbot', says:'O cliente aprovou tudo há um mês e ainda não pagou os 50% finais. A proposta só dizia "restante na entrega".',
          q:'O que teria evitado essa situação?',
          opts:[
            {t:'Cobrar 100% no início, sempre.', ok:false, why:'Pode afastar clientes. O problema principal era a falta de data e de regra de atraso.'},
            {t:'Não entregar nada até o cliente pagar tudo.', ok:false, why:'Travar a entrega sem combinado prévio gera conflito. Melhor combinar marcos antes.'},
            {t:'Prazo de pagamento em dias após a entrega, multa e juros por atraso e a consequência (como pausa do suporte) escritos na proposta.', ok:true, why:'Com prazo e consequência combinados, a cobrança vira aplicação do combinado, não um favor.'},
            {t:'Esperar, porque cobrar pega mal.', ok:false, why:'Cobrar o combinado é profissional. Sem regra, o atraso tende a se repetir.'}
          ]},
        { who:'Patrícia, 35 anos, atende uma pessoa física', says:'Vou colocar multa de 10% por atraso para ninguém atrasar.',
          q:'Qual é o ajuste correto?',
          opts:[
            {t:'Em relação de consumo, o Código de Defesa do Consumidor limita a multa por atraso a 2%; ela pode somar juros proporcionais e uma consequência clara.', ok:true, why:'Respeita o limite legal para consumidor e ainda desestimula o atraso.'},
            {t:'Manter 10%, porque contrato assinado vale qualquer coisa.', ok:false, why:'Cláusulas acima do limite legal para consumidor podem não valer.'},
            {t:'Não colocar multa, porque é proibido cobrar consumidor.', ok:false, why:'Multa e juros por atraso são permitidos, dentro dos limites.'},
            {t:'Cobrar 10% só de quem atrasar mais de uma vez.', ok:false, why:'O limite continua valendo, independentemente da frequência.'}
          ]},
        { who:'Anderson, 44 anos, tem 6 clientes de manutenção mensal', says:'Cobro o mesmo valor há 3 anos. Agora quero aumentar 30% de uma vez, a partir do mês que vem.',
          q:'Qual caminho é melhor daqui para frente?',
          opts:[
            {t:'Aumentar 30% sem aviso, porque está defasado.', ok:false, why:'Aumento grande e repentino, sem previsão no combinado, costuma gerar cancelamentos.'},
            {t:'Nunca reajustar, para não perder clientes.', ok:false, why:'Os custos sobem todo ano; sem reajuste, a margem desaparece.'},
            {t:'Cobrar o reajuste só dos clientes novos.', ok:false, why:'Os antigos continuariam abaixo do custo, e a diferença tende a gerar desconforto.'},
            {t:'Conversar com cada cliente, propor a atualização com antecedência (podendo ser escalonada) e incluir no combinado um reajuste anual por índice, com aviso de 30 dias.', ok:true, why:'Transparência agora e regra clara para o futuro evitam novos saltos.'}
          ]},
        { who:'Bianca, 28 anos, recebeu um comprovante de PIX', says:'O cliente mandou o print do comprovante do sinal às 23h. Vou começar o projeto agora mesmo.',
          q:'O que ela deve fazer antes de começar?',
          opts:[
            {t:'Começar, porque o print prova o pagamento.', ok:false, why:'Comprovante falso ou agendado e cancelado é golpe comum. O print não é prova.'},
            {t:'Conferir no extrato do banco se o valor entrou e só então iniciar.', ok:true, why:'O extrato é a confirmação real. Começar só com o dinheiro recebido evita trabalhar de graça.'},
            {t:'Pedir que o cliente mande o print de novo.', ok:false, why:'Outro print não confirma nada.'},
            {t:'Recusar PIX e aceitar só dinheiro em espécie.', ok:false, why:'PIX é seguro quando conferido no extrato. Recusar só complica.'}
          ]}
      ]},
    { id:'2.9', title:'Mudança de escopo sem briga: o aditivo', min:18,
      body:[
        `<div class="card analogy"><h3>🍕 A pizza que virou duas</h3><p>Você pede uma pizza grande e, quando o entregador chega, pede para trocar por duas médias e um refrigerante. A pizzaria não diz "não", nem faz de graça: diz "fica R$ 20 a mais e chega em 30 minutos". <b>Mudança aceita, com preço e prazo novos combinados antes</b>.</p></div>`,
        `<div class="term"><b>Escopo</b> = o que foi combinado entregar. <b>Revisão</b> = ajuste do que já estava no escopo (trocar um texto, mudar uma cor). <b>Mudança de escopo</b> = item novo ou maior do que o combinado. <b>Aditivo</b> = registro por escrito da mudança, com o que muda, o preço e o novo prazo, aprovado pelo cliente. <b>Fase 2</b> = segunda etapa, com proposta própria, para o que não entra agora.</div>`,
        `<div class="card"><h3>Revisão ou mudança? Como separar</h3>
          <div class="tw"><table class="tbl"><tr><th>Pedido do cliente</th><th>Tipo</th><th>Motivo</th></tr>
          <tr><td>"Troque a saudação do assistente"</td><td>Revisão</td><td>Ajusta algo que já existe no escopo</td></tr>
          <tr><td>"Inclua mais 3 perguntas frequentes" (de 10 para 13)</td><td>Mudança pequena</td><td>Aumenta a quantidade combinada</td></tr>
          <tr><td>"Integre com o sistema de pagamento"</td><td>Mudança de escopo</td><td>Item novo, que estava em "não inclui"</td></tr>
          <tr><td>"Na verdade, quero para Instagram, não WhatsApp"</td><td>Mudança grande</td><td>Troca a base do projeto: pede nova proposta</td></tr></table></div></div>`,
        `<div class="card"><h3>Exemplo resolvido: a integração pedida no meio do projeto</h3><p>Caetano está no 6º dia de um assistente para uma ótica em Belo Horizonte (R$ 2.800, 10 dias úteis). A dona pede: "dá para ele já mandar o link de pagamento?". Os valores são ilustrativos.</p>
          <div class="pipe"><div class="node ink">Registrar o pedido</div><div class="ar">➜</div><div class="node ink">Medir o impacto</div><div class="ar">➜</div><div class="node ink">Oferecer caminhos</div><div class="ar">➜</div><div class="node yel">Aprovação por escrito</div><div class="ar">➜</div><div class="node ink">Executar</div></div>
          <ol class="golden"><li><span><b>Registrar:</b> "Recebi o pedido de enviar link de pagamento. Vou avaliar e te retorno até amanhã." Ele não diz sim nem não na hora.</span></li><li><span><b>Medir:</b> cerca de 8 horas (8 h × R$ 70 = R$ 560), mais 4 dias úteis e uma conta no serviço de pagamento, no nome da ótica.</span></li><li><span><b>Oferecer 3 caminhos:</b> (a) incluir agora por R$ 560, com entrega 4 dias úteis depois; (b) trocar pelo item "relatório semanal", de tamanho parecido, sem mudar preço nem prazo; (c) deixar para a fase 2, depois da entrega.</span></li><li><span><b>Aprovar por escrito:</b> a cliente escolhe (c) por mensagem: "Aprovo deixar para a fase 2". Caetano anexa a mensagem ao registro do projeto.</span></li><li><span><b>Executar:</b> entrega no prazo original. Três semanas depois, a fase 2 vira uma proposta nova.</span></li></ol>
          <div class="code">ADITIVO 1 — Projeto Assistente Ótica [nome fictício]
Mudança: envio de link de pagamento pelo assistente
Impacto: + R$ 560 | + 4 dias úteis | conta de pagamento no nome do cliente
Opção escolhida: fase 2 (sem alteração de preço e prazo atuais)
Aprovado por: [nome], por mensagem em [data]</div>
          <p>Aprovação por e-mail ou mensagem já cria registro; em projetos maiores, um aditivo assinado ao contrato é mais seguro.</p></div>`,
        `<div class="card"><h3>⚠️ Erros comuns e como detectar</h3><ol class="golden"><li><span><b>Dizer "sim" na hora</b> → sinal: o prazo estoura e você não sabe explicar por quê → correção: "vou avaliar e te retorno", sempre.</span></li><li><span><b>Fazer "favores" sem registro</b> → sinal: no fim, o cliente acha que tudo era incluído → correção: registre até o que for de graça, como "cortesia, valor de R$ X".</span></li><li><span><b>Mudar o preço sem mudar o prazo</b> (ou o contrário) → sinal: entrega atrasada mesmo com o extra pago → correção: todo aditivo diz preço e prazo.</span></li><li><span><b>Aprovação só por telefone</b> → sinal: "eu nunca pedi isso" → correção: confirme por escrito antes de começar.</span></li><li><span><b>Tratar mudança como revisão</b> → sinal: as rodadas de revisão acabam no primeiro dia → correção: use a tabela "revisão ou mudança".</span></li></ol></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (5 min)</h3><p>No <b>Claude</b>, ensaie uma conversa de mudança de escopo.</p><ol class="golden"><li><span>Peça, com as suas palavras, que ele interprete um cliente do seu nicho que pede um item novo no meio do projeto.</span></li><li><span>Responda sem aceitar nem recusar na hora: registre e diga quando retorna.</span></li><li><span>Apresente três caminhos (incluir com preço e prazo, trocar por item equivalente, fase 2).</span></li><li><span>Peça uma avaliação de onde você cedeu demais ou foi pouco claro, e escreva você mesmo o aditivo.</span></li></ol><p>🔒 Use um projeto fictício. Não cole propostas, contratos ou conversas reais com nomes e dados de clientes.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a pizzaria avisa o preço e o tempo novos antes de trocar o pedido, e não depois.</div>`
      ],
      ch:[
        { who:'Mateus, 32 anos, no meio de um projeto', says:'O cliente ligou pedindo para o assistente também responder no Instagram. Falei "claro, sem problema" e agora o prazo vai estourar.',
          q:'Como ele deveria ter respondido?',
          opts:[
            {t:'"Claro", e trabalhar à noite para cumprir o prazo.', ok:false, why:'Absorver mudanças em silêncio gera cansaço e prejuízo, e o cliente nem percebe o custo.'},
            {t:'"Não faço mudanças", e desligar.', ok:false, why:'Recusar sem avaliar perde uma oportunidade de venda e desgasta a relação.'},
            {t:'"Vou avaliar o impacto e te retorno amanhã", e depois oferecer caminhos com preço e prazo, com aprovação por escrito.', ok:true, why:'Registrar, medir e oferecer opções transforma o pedido em decisão do cliente, com custo claro.'},
            {t:'Aceitar e cobrar o dobro no final, sem avisar.', ok:false, why:'Cobrar o que não foi combinado gera conflito e quebra a confiança.'}
          ]},
        { who:'Cristina, 40 anos, dona de uma loja', says:'Pedi para trocar a cor do botão e o prestador mandou um aditivo de R$ 300.',
          q:'Como avaliar o pedido de Cristina?',
          opts:[
            {t:'É uma revisão de algo que já está no escopo: deve entrar nas rodadas de ajuste incluídas, se ainda houver.', ok:true, why:'Trocar a cor de um item existente é ajuste, não item novo. Aditivo é para mudança de escopo.'},
            {t:'Todo pedido depois do início é mudança de escopo.', ok:false, why:'Revisões combinadas fazem parte do serviço. Tratar tudo como mudança irrita o cliente.'},
            {t:'O prestador está certo, porque qualquer mudança custa tempo.', ok:false, why:'O tempo das revisões já foi previsto no preço combinado.'},
            {t:'Ela deveria cancelar o projeto.', ok:false, why:'Uma conversa sobre revisão e escopo resolve.'}
          ]},
        { who:'Leonardo, 27 anos, faz pequenos favores aos clientes', says:'Fiz várias coisas de graça durante o projeto. No final, o cliente disse que esperava tudo isso no próximo também.',
          q:'O que teria ajudado?',
          opts:[
            {t:'Nunca fazer nada fora do escopo.', ok:false, why:'Cortesias podem fortalecer a relação; o problema foi não registrar.'},
            {t:'Cobrar retroativamente todos os favores.', ok:false, why:'Cobrar depois algo que foi oferecido de graça quebra a confiança.'},
            {t:'Parar de atender esse cliente.', ok:false, why:'O problema é de registro, não do cliente.'},
            {t:'Registrar cada favor como cortesia, com o valor que teria, para o cliente saber que é extra e não padrão.', ok:true, why:'O registro mostra o valor da gentileza e evita que ela vire obrigação.'}
          ]},
        { who:'Yasmin, 33 anos, recebeu um pedido grande', says:'No 4º dia de um assistente para WhatsApp, a cliente decidiu que quer outro canal, outro público e um site junto.',
          q:'Qual é a melhor saída?',
          opts:[
            {t:'Fazer um aditivo pequeno e seguir com o mesmo prazo.', ok:false, why:'A mudança troca a base do projeto. Um aditivo pequeno esconde o impacto real.'},
            {t:'Pausar, registrar o que já foi feito e pago, e fazer uma nova proposta com escopo, preço e prazo, aprovada por escrito antes de seguir.', ok:true, why:'Mudança grande pede proposta nova. Registrar o que já foi feito protege os dois lados.'},
            {t:'Ignorar o pedido e entregar o original.', ok:false, why:'Entregar o que a cliente já disse que não quer gera retrabalho e insatisfação.'},
            {t:'Começar tudo de novo sem falar de preço.', ok:false, why:'Sem novo combinado, o trabalho extra fica sem pagamento.'}
          ]}
      ]},
    { id:'2.5', title:'Projeto: proposta e preço do seu serviço', min:50,
      body:[
        `<div class="card"><p>Use a oferta validada no módulo anterior. Os números são seus: pesquise o mercado da sua região e use valores reais ou estimativas honestas. Nenhum valor aqui é recomendação de quanto você vai ganhar.</p></div>`
      ],
      projeto:{
        entrega:'Uma proposta de uma página para um cliente real ou típico do seu nicho, com o cálculo de preço por trás dela e três pacotes.',
        passos:[
          'Calcule o valor mínimo da sua hora com renda desejada, custos, reserva para impostos e horas realmente cobráveis.',
          'Estime as horas do projeto e compare com o valor para o cliente e com pelo menos 2 referências de mercado.',
          'Monte três pacotes com entregas, prazos e preços, e defina 2 adicionais.',
          'Escreva a proposta de uma página: problema, escopo, o que não inclui, prazo (com o que depende do cliente), preço, pagamento com sinal, revisões, custos de ferramentas e validade.',
          'Liste 3 objeções prováveis e como vai responder a cada uma, sem dar desconto sem contrapartida.',
          'Defina seu limite de negociação.'
        ],
        checklist:[
          'O cálculo do preço mostra horas cobráveis realistas, custos e impostos.',
          'A proposta diz quem paga as ferramentas e deixa as contas no nome do cliente.',
          'O prazo começa a partir do sinal e das informações do cliente.',
          'Existe sinal antes de começar e limite de revisões.',
          'A proposta não promete faturamento nem resultados fora do meu controle.'
        ],
        minimo:500
      }}
  ]},
  { id:3, icon:'✅', title:'Entregar e crescer', sub:'Com segurança e responsabilidade', lessons:[
    { id:'3.1', title:'Combinados por escrito e entrega sem dor de cabeça', min:10,
      body:[
        `<div class="card analogy"><h3>🤝 O contrato de aluguel</h3><p>O contrato de aluguel diz valor, prazo, o que cada um faz e o que acontece se algo der errado. <b>Não é falta de confiança</b>: é cuidado para que a relação continue boa.</p></div>`,
        `<div class="term"><b>Contrato</b> = acordo escrito entre as partes, com direitos e deveres. <b>Cláusula</b> = cada regra do contrato. <b>Aceite</b> = a confirmação do cliente de que recebeu e aprovou a entrega.</div>`,
        `<div class="card"><h3>O mínimo para trabalhar tranquilo</h3>
          <ol class="golden"><li><span><b>Escopo, prazo e preço</b> por escrito.</span></li><li><span><b>Forma e datas de pagamento</b>, e o que acontece se atrasar.</span></li><li><span><b>Quem é dono</b> do que foi entregue e se você pode mostrá-lo no seu portfólio.</span></li><li><span>Como serão tratados <b>dados do cliente</b> e de clientes dele (LGPD): use só o necessário e não envie dados desnecessários a ferramentas de IA.</span></li><li><span><b>Aviso de que você usa IA</b> no trabalho, quando isso for relevante para o cliente.</span></li><li><span><b>Aceite por escrito</b> no fim.</span></li></ol>
          <p>Modelos de contrato ajudam, mas para valores altos ou casos sensíveis, consulte um profissional.</p></div>`,
        `<div class="card"><h3>Dados do cliente: o que combinar</h3>
          <div class="tw"><table class="tbl"><tr><th>Tema</th><th>Combinado recomendado</th></tr>
          <tr><td>Testes</td><td>Sempre com dados fictícios</td></tr>
          <tr><td>Acesso</td><td>Só ao que for necessário, com login próprio, nunca com a senha do dono</td></tr>
          <tr><td>Ferramentas de IA</td><td>Quais serão usadas e se usam dados para treino</td></tr>
          <tr><td>Fim do projeto</td><td>Devolver acessos e apagar cópias de dados que ficaram com você</td></tr></table></div>
          <p><b>Erros comuns:</b> combinar tudo por áudio; pedir a senha principal do cliente; guardar planilhas de clientes no computador pessoal depois do projeto.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um acordo escrito evita brigas, mesmo entre amigos.</div>`
      ],
      ch:[
        { who:'Rodolfo, 34 anos, automatizou o atendimento de uma clínica', says:'Usei os contatos e as mensagens dos pacientes da clínica para testar minha automação em ferramentas de IA, sem avisar ninguém.',
          q:'O que está errado?',
          opts:[
            {t:'Nada: era para melhorar o atendimento, então tudo bem.', ok:false, why:'Boa intenção não dispensa cuidado com dados de pessoas, ainda mais dados de saúde.'},
            {t:'Ele deveria ter testado só com dados fictícios, combinado por escrito como os dados seriam tratados e pedido orientação jurídica, por serem dados sensíveis.', ok:true, why:'Dados fictícios nos testes e um combinado claro protegem os pacientes, a clínica e o prestador de serviço.'},
            {t:'O erro foi não cobrar a mais pelo teste.', ok:false, why:'O problema não é o valor cobrado, e sim o uso inadequado de dados de pessoas.'},
            {t:'O erro foi usar ferramentas gratuitas; com pagas estaria tudo certo.', ok:false, why:'Pagar a ferramenta não autoriza o uso de dados sem combinado e sem cuidado.'}
          ]},
        { who:'Diana, 31 anos, entregou um site', says:'Quero mostrar o site no meu portfólio, mas nunca combinamos isso.',
          q:'Qual é a atitude certa?',
          opts:[
            {t:'Mostrar, porque fui eu que fiz.', ok:false, why:'Sem combinado, o cliente pode não querer a divulgação. É preciso pedir.'},
            {t:'Pedir autorização ao cliente e, nos próximos projetos, colocar no contrato se o trabalho pode ir para o portfólio.', ok:true, why:'Pedir autorização respeita o cliente, e o combinado prévio evita a dúvida no futuro.'},
            {t:'Mostrar com o nome do cliente apagado, sem perguntar.', ok:false, why:'O site pode ser reconhecido. Autorização continua necessária.'},
            {t:'Nunca mostrar nenhum trabalho.', ok:false, why:'Portfólio é importante; basta combinar.'}
          ]},
        { who:'Jair, 44 anos, terminou um projeto', says:'Entreguei há 2 meses. O cliente não respondeu se aprovou, mas agora pede mudanças dizendo que nunca aceitou.',
          q:'O que teria evitado isso?',
          opts:[
            {t:'Um aceite por escrito previsto na proposta, com prazo para o cliente aprovar ou apontar ajustes, e aprovação automática depois desse prazo.', ok:true, why:'O aceite com prazo encerra a etapa de entrega e separa ajustes de pedidos novos.'},
            {t:'Mandar mais mensagens até ele responder.', ok:false, why:'Ajuda, mas sem regra combinada a situação se repete.'},
            {t:'Fazer as mudanças de graça.', ok:false, why:'Sem regra, ele vai continuar pedindo.'},
            {t:'Bloquear o cliente.', ok:false, why:'Não resolve e prejudica a reputação.'}
          ]},
        { who:'Telma, 38 anos, vai automatizar uma loja', says:'O dono me passou a senha principal do e-mail e do banco para eu configurar tudo.',
          q:'Qual é a melhor prática?',
          opts:[
            {t:'Usar a senha principal, porque ele confia em mim.', ok:false, why:'Se algo der errado, a responsabilidade cai sobre ela, e o risco para o cliente é enorme.'},
            {t:'Pedir um acesso próprio, só com as permissões necessárias, e recusar senhas de banco; ao final, devolver ou remover os acessos.', ok:true, why:'Acesso mínimo e individual protege o cliente e o prestador.'},
            {t:'Usar a senha e trocá-la por uma que só ela conheça.', ok:false, why:'Tira o controle do dono sobre as próprias contas.'},
            {t:'Anotar a senha num papel para não esquecer.', ok:false, why:'Aumenta o risco de vazamento.'}
          ]}
      ]},
    { id:'3.2', title:'Formalizar, organizar e crescer sem prometer milagres', min:10,
      body:[
        `<div class="card analogy"><h3>🏠 Arrumar a casa antes das visitas</h3><p>Quando a casa está organizada, receber mais gente é tranquilo. Quando está bagunçada, cada visita vira um problema. <b>Seu negócio funciona do mesmo jeito.</b></p></div>`,
        `<div class="term"><b>Formalização</b> = registrar a atividade para trabalhar de forma legal, por exemplo como MEI. <b>Portfólio</b> = exemplos reais do que você já fez. <b>Depoimento</b> = a opinião de um cliente satisfeito, com autorização para publicar. <b>Nota fiscal</b> = documento da venda do serviço, exigido por muitos clientes empresas.</div>`,
        `<div class="card"><h3>Cresça com base firme</h3>
          <ol class="golden"><li><span><b>Formalização</b>: pesquise as regras atuais em fontes oficiais, como o Portal do Empreendedor (gov.br), e converse com um contador, porque limites, atividades permitidas e impostos mudam.</span></li><li><span><b>Separe</b> o dinheiro pessoal do dinheiro do trabalho e anote entradas e saídas.</span></li><li><span>Monte um <b>portfólio</b> com projetos reais, com autorização dos clientes para mostrá-los.</span></li><li><span>Peça <b>depoimentos</b>.</span></li><li><span>Faça a divulgação com <b>honestidade</b>: não prometa ganhos nem resultados garantidos, porque cada cliente e cada projeto são diferentes.</span></li></ol>
          <p>Crescer é consequência de entregar bem, repetidamente.</p></div>`,
        `<div class="card"><h3>Perguntas para levar ao contador</h3>
          <ol class="golden"><li><span>A minha atividade pode ser registrada como MEI ou precisa de outro formato?</span></li><li><span>Quais impostos vou pagar e quando?</span></li><li><span>Qual é o limite de faturamento e o que acontece se eu passar?</span></li><li><span>Como emito nota fiscal de serviço na minha cidade?</span></li><li><span>Posso atender clientes de outros estados ou do exterior?</span></li></ol>
          <p><b>Erros comuns:</b> escolher a atividade do MEI por palpite; misturar a conta pessoal com a do trabalho; deixar para pensar em impostos quando o dinheiro já foi gasto.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a alguém, em 1 minuto, por que organizar a casa antes de receber visitas ajuda a crescer.</div>`
      ],
      ch:[
        { who:'Gabriela, 28 anos, fecha os primeiros clientes', says:'Vou divulgar que quem contratar meu serviço vai faturar 10 mil por mês. Assim chamo mais gente.',
          q:'Qual é a melhor postura na divulgação?',
          opts:[
            {t:'Prometer esse ganho, porque promessas grandes atraem clientes.', ok:false, why:'Ela não controla o faturamento do cliente. Promessa que não se cumpre gera reclamações e pode ser propaganda enganosa.'},
            {t:'Prometer ganhos menores, para parecer mais realista.', ok:false, why:'Qualquer promessa de ganho garantido tem o mesmo problema. O resultado depende de muitos fatores.'},
            {t:'Mostrar projetos reais e depoimentos, explicar o que o serviço entrega e falar com honestidade sobre o que depende do cliente.', ok:true, why:'Provas reais e transparência constroem confiança e evitam promessas que não dá para cumprir.'},
            {t:'Usar prints de faturamento de outras pessoas como exemplo.', ok:false, why:'Resultados de terceiros não dizem nada sobre o próximo cliente e podem enganar.'}
          ]},
        { who:'Leonardo, 30 anos, atende pela conta pessoal', says:'Recebo dos clientes na minha conta pessoal e pago tudo dela. No fim do mês, não sei quanto o trabalho deu.',
          q:'Qual é o primeiro ajuste?',
          opts:[
            {t:'Continuar assim, porque é mais simples.', ok:false, why:'Sem separação, não dá para saber se o negócio dá lucro nem planejar impostos.'},
            {t:'Separar uma conta só para o trabalho e anotar todas as entradas e saídas, mesmo numa planilha simples.', ok:true, why:'Separar e anotar é a base para entender o negócio e tomar decisões.'},
            {t:'Contratar um sistema caro de gestão antes de tudo.', ok:false, why:'Uma planilha e uma conta separada resolvem no início.'},
            {t:'Calcular de cabeça no fim do ano.', ok:false, why:'De cabeça, os números se perdem e os impostos surpreendem.'}
          ]},
        { who:'Carla, 35 anos, quer formalizar', says:'Um amigo disse que a atividade X do MEI serve para o meu serviço. Vou registrar com essa.',
          q:'Qual é o caminho mais seguro?',
          opts:[
            {t:'Seguir o amigo, porque ele já é MEI.', ok:false, why:'A situação dele pode ser diferente e as regras mudam.'},
            {t:'Consultar as regras atuais no Portal do Empreendedor (gov.br) e confirmar com um contador qual formato e atividade servem para o serviço dela.', ok:true, why:'Fontes oficiais e um profissional evitam registro errado, que pode gerar problemas com impostos e notas.'},
            {t:'Não formalizar nunca, para não pagar imposto.', ok:false, why:'A informalidade limita clientes que exigem nota e traz riscos.'},
            {t:'Escolher qualquer atividade e corrigir se der problema.', ok:false, why:'Corrigir depois pode sair caro.'}
          ]},
        { who:'Mateus, 33 anos, recebeu um elogio de cliente', says:'O cliente elogiou por mensagem. Vou publicar o print com o nome e a foto dele.',
          q:'O que fazer antes de publicar?',
          opts:[
            {t:'Publicar logo, porque o elogio é verdadeiro.', ok:false, why:'Nome, foto e conversa são dados do cliente. É preciso autorização.'},
            {t:'Pedir autorização para publicar o depoimento, combinando o texto e se aparece nome e foto.', ok:true, why:'Autorização respeita o cliente e torna o depoimento mais forte.'},
            {t:'Publicar e apagar se ele reclamar.', ok:false, why:'O dano à confiança já estará feito.'},
            {t:'Reescrever o elogio deixando-o mais impressionante.', ok:false, why:'Alterar o depoimento é enganoso.'}
          ]}
      ]},
    { id:'3.3', title:'Processo de entrega: do início ao aceite', min:11,
      body:[
        `<div class="card analogy"><h3>✈️ O piloto e o checklist</h3><p>Mesmo com milhares de horas de voo, o piloto segue um checklist antes de decolar. Não é por falta de experiência: é porque <b>o esquecimento de um item simples</b> pode estragar tudo. Uma entrega de projeto também fica mais segura com roteiro.</p></div>`,
        `<div class="term"><b>Reunião de início</b> = primeira conversa após o fechamento, para alinhar objetivos, prazos e responsáveis. <b>Cronograma</b> = as etapas com datas. <b>Ponto de controle</b> = momento combinado em que o cliente vê o andamento. <b>Pedido de mudança</b> = solicitação nova durante o projeto, avaliada à parte.</div>`,
        `<div class="card"><h3>O roteiro de entrega</h3>
          <ol class="golden"><li><span><b>Início</b>: reunião curta, lista do que o cliente precisa enviar, contatos e canal de comunicação.</span></li><li><span><b>Cronograma</b> com 3 a 5 etapas e datas.</span></li><li><span><b>Atualização semanal</b>: o que foi feito, o que vem, o que depende do cliente.</span></li><li><span><b>Ponto de controle</b> no meio do projeto, para corrigir a rota cedo.</span></li><li><span><b>Testes</b> com casos reais do cliente (dados fictícios) antes da entrega.</span></li><li><span><b>Entrega e treinamento</b>, seguidos de <b>aceite</b> por escrito.</span></li></ol></div>`,
        `<div class="card"><h3>Mensagem de atualização semanal (modelo)</h3>
          <div class="code">Olá, [nome]! Resumo da semana:
✅ Feito: respostas para as 10 perguntas frequentes configuradas
🔜 Próxima semana: agendamento automático
⏳ Preciso de você: lista de horários disponíveis até quarta
📅 Entrega prevista: dia 20 (mantida)</div>
          <p><b>Pedidos de mudança:</b> anote, avalie o impacto em prazo e preço e só execute depois da aprovação por escrito. Uma mudança pequena pode ser absorvida, mas registre mesmo assim.</p>
          <p><b>Erros comuns:</b> sumir durante o projeto e aparecer só na entrega; aceitar mudanças por áudio sem registrar; entregar sem treinar quem vai usar; não testar com perguntas reais do dia a dia do cliente.</p></div>`,
        `<div class="card"><h3>📍 Na prática</h3><p>No ponto de controle do meio do projeto, uma cliente percebeu que o tom das respostas estava formal demais para o público da loja. O ajuste levou uma tarde. Se tivesse aparecido só na entrega, exigiria refazer dezenas de respostas.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que até um piloto experiente usa checklist antes de decolar.</div>`
      ],
      ch:[
        { who:'Bruno, 29 anos, sumiu durante o projeto', says:'Trabalhei 3 semanas sem falar com o cliente. Na entrega, ele disse que esperava algo bem diferente.',
          q:'O que teria evitado isso?',
          opts:[
            {t:'Trabalhar mais rápido.', ok:false, why:'Rapidez não resolve desalinhamento de expectativa.'},
            {t:'Atualizações semanais e um ponto de controle no meio do projeto, para o cliente ver o andamento e corrigir a rota cedo.', ok:true, why:'Mostrar o andamento cedo permite ajustar quando ainda é barato.'},
            {t:'Um contrato mais longo.', ok:false, why:'Contrato ajuda, mas não substitui a comunicação durante o projeto.'},
            {t:'Entregar e deixar o cliente se acostumar.', ok:false, why:'Ignora a insatisfação e prejudica a relação.'}
          ]},
        { who:'Elaine, 34 anos, no meio do projeto', says:'O cliente pediu por áudio para acrescentar integração com o sistema de pagamento. Já comecei a fazer.',
          q:'Qual é o procedimento correto?',
          opts:[
            {t:'Fazer, porque o cliente pediu.', ok:false, why:'Mudança sem avaliação afeta prazo e preço e vira conflito depois.'},
            {t:'Registrar o pedido, avaliar o impacto em prazo e preço, enviar por escrito e só fazer depois da aprovação.', ok:true, why:'Tratar como pedido de mudança mantém o combinado claro e justo.'},
            {t:'Recusar qualquer mudança.', ok:false, why:'Mudanças são normais; precisam apenas ser avaliadas e aprovadas.'},
            {t:'Fazer e cobrar sem avisar no final.', ok:false, why:'Cobrança surpresa destrói a confiança.'}
          ]},
        { who:'Fausto, 40 anos, entregou um assistente', says:'Entreguei e funcionou nos meus testes. Uma semana depois, a equipe do cliente parou de usar porque não entendia como.',
          q:'O que faltou?',
          opts:[
            {t:'Nada, a equipe é que não se esforçou.', ok:false, why:'Uma solução que ninguém usa não entrega valor.'},
            {t:'Treinar quem vai usar, entregar um guia curto e testar com perguntas reais da rotina do cliente antes da entrega.', ok:true, why:'Treinamento e testes com a rotina real garantem que a solução seja usada.'},
            {t:'Um assistente mais avançado.', ok:false, why:'Mais funções não resolvem a falta de treinamento.'},
            {t:'Cobrar mais caro para a equipe valorizar.', ok:false, why:'Preço não ensina ninguém a usar.'}
          ]},
        { who:'Olga, 37 anos, começando um projeto', says:'Fechamos ontem. Vou começar a construir agora mesmo, sem reunião, para ganhar tempo.',
          q:'Qual é o primeiro passo mais útil?',
          opts:[
            {t:'Começar a construir sem falar com o cliente.', ok:false, why:'Sem alinhar objetivos e informações, o retrabalho é quase certo.'},
            {t:'Fazer uma reunião curta de início para alinhar objetivos, cronograma, canal de comunicação e a lista do que o cliente precisa enviar.', ok:true, why:'Meia hora de alinhamento economiza dias de retrabalho.'},
            {t:'Mandar um questionário de 100 perguntas.', ok:false, why:'Excesso de perguntas cansa o cliente e atrasa o início.'},
            {t:'Esperar o cliente mandar tudo sem pedir nada.', ok:false, why:'O cliente não sabe o que você precisa se você não disser.'}
          ]}
      ]},
    { id:'3.4', title:'Suporte, manutenção e encerramento', min:11,
      body:[
        `<div class="card analogy"><h3>🚗 A revisão do carro novo</h3><p>A concessionária entrega o carro com manual, garantia por um período e revisões marcadas. Fica claro o que está coberto e o que é pago à parte. <b>Depois da entrega</b>, o seu serviço também precisa de regras.</p></div>`,
        `<div class="term"><b>Período de suporte</b> = tempo após a entrega em que você corrige problemas sem custo. <b>Manutenção</b> = cuidado contínuo e pago (ajustes, atualizações, monitoramento). <b>Documentação</b> = guia curto de como a solução funciona e como usá-la. <b>Passagem de bastão</b> = entrega organizada de acessos, documentos e responsabilidades ao cliente.</div>`,
        `<div class="card"><h3>O que é suporte e o que é trabalho novo</h3>
          <div class="tw"><table class="tbl"><tr><th>Situação</th><th>É…</th></tr>
          <tr><td>Algo combinado não funciona como deveria</td><td>Suporte (correção sem custo no período combinado)</td></tr>
          <tr><td>O cliente quer uma função nova</td><td>Trabalho novo (proposta)</td></tr>
          <tr><td>O fornecedor de IA mudou o modelo e as respostas pioraram</td><td>Manutenção (contrato mensal ou avulso)</td></tr>
          <tr><td>A equipe do cliente esqueceu como usar</td><td>Suporte básico ou treinamento extra, conforme o combinado</td></tr></table></div></div>`,
        `<div class="card"><h3>Encerrando bem um projeto</h3>
          <ol class="golden"><li><span>Entregue a <b>documentação</b>: o que foi feito, onde fica, como ajustar o básico.</span></li><li><span>Confirme que todas as <b>contas estão no nome do cliente</b> e que ele tem os acessos de administrador.</span></li><li><span><b>Remova os seus acessos</b> ou combine por escrito que vai mantê-los para a manutenção.</span></li><li><span><b>Apague cópias de dados</b> do cliente que ficaram com você.</span></li><li><span>Peça <b>depoimento</b> e autorização para o portfólio.</span></li><li><span>Ofereça a <b>manutenção</b>, sem pressão.</span></li></ol>
          <p><b>Erros comuns:</b> suporte "para sempre" sem combinar; sair do projeto com as senhas do cliente; não avisar que serviços de IA mudam e exigem acompanhamento.</p></div>`,
        `<div class="card"><h3>📍 Na prática</h3><p>Um prestador combinou 30 dias de suporte para correções e ofereceu, no encerramento, uma manutenção mensal com até 3 horas de ajustes. Quando o fornecedor de IA atualizou o modelo e as respostas mudaram, o cliente já sabia que isso entrava na manutenção. Não houve discussão, só um ajuste agendado e um resumo no fim do mês.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o carro novo vem com manual e revisões marcadas.</div>`
      ],
      ch:[
        { who:'Ronaldo, 42 anos, entregou há 8 meses', says:'O cliente me liga toda semana pedindo coisas novas e diz que é "suporte".',
          q:'O que deveria ter sido combinado?',
          opts:[
            {t:'Suporte ilimitado, para manter o cliente feliz.', ok:false, why:'Suporte sem limite vira trabalho de graça.'},
            {t:'Um período de suporte para correções, a diferença entre suporte e trabalho novo, e a oferta de manutenção paga depois disso.', ok:true, why:'Regras claras sobre o pós-entrega protegem o tempo do prestador e dão ao cliente um caminho para continuar.'},
            {t:'Nenhum suporte depois da entrega.', ok:false, why:'Um período de correções é razoável e transmite segurança.'},
            {t:'Parar de atender o telefone.', ok:false, why:'Prejudica a reputação sem resolver.'}
          ]},
        { who:'Fernanda, 33 anos, cuida de um assistente de clientes', says:'O fornecedor de IA atualizou o modelo e o assistente do cliente começou a responder de outro jeito.',
          q:'Como isso deveria estar tratado no combinado?',
          opts:[
            {t:'Como defeito, a ser corrigido de graça para sempre.', ok:false, why:'Mudanças do fornecedor acontecem e exigem trabalho contínuo, que precisa ser previsto.'},
            {t:'Avisando desde a proposta que serviços de IA mudam e que acompanhamento e ajustes entram na manutenção, mensal ou avulsa.', ok:true, why:'Deixar claro esse risco evita a sensação de defeito e mostra profissionalismo.'},
            {t:'Culpando o fornecedor e não fazendo nada.', ok:false, why:'O cliente precisa de solução, não de culpado.'},
            {t:'Escondendo do cliente que usa IA.', ok:false, why:'Falta de transparência piora a relação quando o problema aparece.'}
          ]},
        { who:'Simone, 36 anos, terminou um projeto', says:'Acabou o projeto, mas ainda tenho o acesso de administrador e uma planilha com os clientes da loja no meu computador.',
          q:'O que fazer?',
          opts:[
            {t:'Guardar, pode ser útil no futuro.', ok:false, why:'Guardar dados e acessos sem necessidade aumenta o risco para ela e para o cliente.'},
            {t:'Remover os próprios acessos (ou combinar por escrito se vai mantê-los para manutenção), apagar a planilha e confirmar ao cliente.', ok:true, why:'Encerrar acessos e apagar dados é parte de uma entrega responsável.'},
            {t:'Mandar a planilha para o próprio e-mail, por segurança.', ok:false, why:'Espalha os dados para mais lugares.'},
            {t:'Trocar a senha do administrador para uma que só ela saiba.', ok:false, why:'Tira o controle do cliente sobre o próprio sistema.'}
          ]},
        { who:'Artur, 31 anos, prepara a entrega final', says:'Vou entregar só o link funcionando. Documentação é perda de tempo.',
          q:'Por que vale entregar uma documentação curta?',
          opts:[
            {t:'Não vale; o cliente pode ligar quando precisar.', ok:false, why:'Cria dependência e chamados repetidos.'},
            {t:'Um guia curto (o que foi feito, onde fica, como ajustar o básico) dá autonomia ao cliente, reduz chamados e mostra profissionalismo.', ok:true, why:'Documentação simples é parte do valor entregue e facilita manutenção futura.'},
            {t:'Para cobrar mais caro.', ok:false, why:'O objetivo é dar autonomia e clareza, não justificar preço.'},
            {t:'Porque a lei exige 50 páginas de documentação.', ok:false, why:'Não há essa exigência; um guia curto e útil basta.'}
          ]}
      ]},
    { id:'3.6', title:'Cláusulas essenciais de um contrato de serviço com IA', min:20,
      body:[
        `<div class="card analogy"><h3>🧾 A planta da casa</h3><p>Ninguém constrói uma casa só com a frase "quero uma casa bonita". A planta mostra cômodos, medidas e materiais, e evita a briga do "eu achei que teria uma varanda". <b>O contrato é a planta do seu serviço</b>: cada cláusula responde a uma pergunta que, sem resposta, vira conflito no meio do caminho.</p></div>`,
        `<div class="term"><b>Propriedade intelectual</b> = quem é dono do que foi criado (textos, código, fluxos, imagens) e o que cada parte pode fazer com isso. <b>Confidencialidade</b> = compromisso de não divulgar informações do cliente. <b>Controlador</b> (LGPD) = quem decide para que e como os dados pessoais são usados, normalmente o seu cliente. <b>Operador</b> (LGPD) = quem trata dados pessoais em nome do controlador e segue as instruções dele, normalmente você. <b>Limitação de responsabilidade</b> = teto combinado para o quanto cada parte responde por prejuízos. <b>Rescisão</b> = as regras para encerrar o contrato antes do fim.</div>`,
        `<div class="card"><h3>⚖️ Antes de tudo</h3><p>Esta lição ajuda você a <b>saber o que perguntar e o que escrever em linguagem simples</b>. Ela não é consultoria jurídica. Para valores altos, dados sensíveis (saúde, finanças, crianças) ou clientes grandes, peça a revisão de um advogado. A 3.1 mostrou o mínimo; aqui você aprofunda as cláusulas que mais geram problema em projetos com IA.</p></div>`,
        `<div class="card"><h3>As 7 cláusulas que não podem faltar</h3>
          <div class="tw"><table class="tbl"><tr><th>Cláusula</th><th>Pergunta que ela responde</th><th>Cuidado em projetos com IA</th></tr>
          <tr><td>Escopo</td><td>O que está e o que não está incluído?</td><td>Liste também o que fica de fora (ex.: integração com o sistema de pagamento)</td></tr>
          <tr><td>Prazos</td><td>Quando cada etapa fica pronta?</td><td>Prazo conta a partir do recebimento dos materiais do cliente</td></tr>
          <tr><td>Propriedade intelectual</td><td>De quem é o que foi entregue?</td><td>Separe o que é do cliente (o produto final) do que é seu (modelos e métodos reutilizáveis)</td></tr>
          <tr><td>Confidencialidade</td><td>O que não pode ser divulgado?</td><td>Inclui não colar informações sigilosas em ferramentas de IA sem combinado</td></tr>
          <tr><td>Dados pessoais (LGPD)</td><td>Quem decide e quem executa?</td><td>Cliente como controlador, você como operador; quais ferramentas recebem dados</td></tr>
          <tr><td>Limitação de responsabilidade</td><td>Até quanto cada um responde?</td><td>IA pode errar; combine revisão humana nas respostas críticas</td></tr>
          <tr><td>Rescisão</td><td>Como sair antes do fim?</td><td>Aviso prévio, pagamento do que foi feito e entrega do que existe</td></tr></table></div></div>`,
        `<div class="card"><h3>📍 Exemplo resolvido: o assistente da imobiliária</h3><p>Renata, de Recife, vai criar um assistente de atendimento com IA para uma imobiliária, por R$ 4.500 (valor de exemplo). O primeiro rascunho dela tinha 3 linhas. Veja a transformação.</p></div>`,
        `<div class="flows">
          <div class="flow old"><h4>Antes: combinado vago</h4>
            <div class="node">"Criar um assistente de IA para a imobiliária"</div><div class="arrow">▼</div>
            <div class="node">"Prazo: 30 dias"</div><div class="arrow">▼</div>
            <div class="node hot">"Valor: R$ 4.500"<small>sem dono, sem dados, sem saída</small></div>
          </div>
          <div class="flow new"><h4>Depois: combinado claro</h4>
            <div class="node">Escopo: responder dúvidas sobre imóveis do site e agendar visitas; fora: contratos de locação e cobranças</div><div class="arrow">▼</div>
            <div class="node">Prazo: 30 dias corridos após receber a lista de imóveis e as perguntas frequentes</div><div class="arrow">▼</div>
            <div class="node">Propriedade: o assistente configurado é da imobiliária; os modelos de fluxo da Renata continuam dela</div><div class="arrow">▼</div>
            <div class="node good">Dados: imobiliária é controladora, Renata é operadora; testes só com dados fictícios<small>e mais: sigilo, teto de responsabilidade, rescisão</small></div>
          </div>
        </div>`,
        `<div class="card" style="margin-top:14px"><h3>Como Renata escreveu cada cláusula, passo a passo</h3>
          <ol class="golden"><li><span><b>Escopo</b>: 3 tarefas incluídas e 2 excluídas, com a frase "o que não está listado é pedido de mudança".</span></li><li><span><b>Prazos</b>: 3 etapas (configuração, ponto de controle, entrega) e a regra de que atraso nos materiais do cliente empurra a data na mesma medida.</span></li><li><span><b>Propriedade</b>: após o pagamento integral, o cliente recebe o assistente, os textos e os acessos; Renata pode reutilizar o próprio método, sem os dados nem a marca do cliente; uso no portfólio só com autorização.</span></li><li><span><b>Confidencialidade</b>: nada do que ela vê sobre clientes e imóveis pode ser divulgado, nem durante nem depois do projeto.</span></li><li><span><b>LGPD</b>: a imobiliária define as finalidades; Renata segue as instruções, lista as ferramentas de IA usadas, avisa o cliente sem demora se houver incidente e apaga os dados no encerramento.</span></li><li><span><b>Limitação de responsabilidade</b>: teto igual ao valor do contrato, salvo culpa grave; o assistente encaminha para um corretor humano quando não tem certeza.</span></li><li><span><b>Rescisão</b>: aviso de 15 dias, pagamento proporcional às etapas concluídas e entrega do que já existe.</span></li></ol>
          <p>Resultado: o texto passou de 3 linhas para cerca de uma página, em linguagem que o dono da imobiliária entende. Em relações de consumo (cliente pessoa física), cláusulas que tiram toda a responsabilidade do prestador podem não valer; por isso, o objetivo é equilíbrio, não proteção só para um lado.</p></div>`,
        `<div class="card"><h3>Sobre propriedade de conteúdo feito com IA</h3><p>A proteção de direitos autorais sobre material gerado por IA ainda está em discussão no Brasil e no mundo. Por isso, <b>não prometa exclusividade absoluta</b> sobre textos ou imagens gerados. Prometa o que você controla: entregar tudo ao cliente, não revender o mesmo material a concorrentes e revisar o conteúdo antes da entrega. Confira também os termos de uso da ferramenta de IA, que dizem como o conteúdo gerado pode ser usado comercialmente.</p></div>`,
        `<div class="card"><h3>Erros comuns e como detectar</h3>
          <ol class="golden"><li><span><b>Copiar um modelo pronto da internet sem ler</b> → sinal: o contrato fala de "obra de engenharia" ou cita um serviço que você não presta → correção: reescreva cada cláusula pensando no seu projeto real.</span></li><li><span><b>Esquecer o que fica fora do escopo</b> → sinal: o cliente pede "só mais uma coisinha" e você não tem onde apontar → correção: liste exclusões e a regra de pedido de mudança.</span></li><li><span><b>Não definir os papéis da LGPD</b> → sinal: ninguém sabe dizer quem decide sobre os dados dos clientes finais → correção: escreva quem é controlador, quem é operador e quais ferramentas recebem dados.</span></li><li><span><b>Prometer que a IA nunca erra</b> → sinal: frases como "respostas 100% corretas" → correção: combine revisão humana e um teto de responsabilidade.</span></li><li><span><b>Não prever a saída</b> → sinal: o cliente desiste no meio e não há regra de pagamento → correção: cláusula de rescisão com aviso prévio e pagamento proporcional.</span></li></ol></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (cerca de 5 min)</h3>
          <ol class="golden"><li><span>Escolha um projeto fictício seu (ex.: assistente para uma padaria) e escreva, com suas palavras, uma frase para cada uma das 7 cláusulas.</span></li><li><span>Abra o <b>Google Gemini</b> e peça, com um pedido escrito por você, que ele aponte frases ambíguas ou que um cliente poderia entender de outro jeito.</span></li><li><span>Pergunte que situação comum o seu texto não cobre (ex.: cliente que some no meio do projeto).</span></li><li><span>Reescreva as 2 cláusulas mais fracas e anote 1 dúvida para levar a um advogado.</span></li></ol>
          <p><b>Privacidade:</b> não cole nomes, CNPJs, CPFs nem contratos reais de clientes. A IA ajuda a revisar a clareza, mas não substitui orientação jurídica.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a planta da casa evita brigas entre quem paga e quem constrói, e diga qual cômodo do seu contrato ainda está sem medida.</div>`
      ],
      ch:[
        { who:'Vítor, 36 anos, cria automações com IA para escritórios', says:'Terminei um fluxo para um escritório contábil. Agora o cliente diz que o método que eu uso em todos os projetos passou a ser dele e que não posso usar com outros clientes.',
          q:'Que cláusula teria evitado esse conflito?',
          opts:[
            {t:'Uma cláusula de confidencialidade mais longa.', ok:false, why:'Confidencialidade trata de não divulgar informações, não de quem é dono do que foi criado.'},
            {t:'Uma cláusula de rescisão com multa alta.', ok:false, why:'Rescisão regula a saída do contrato; não define a propriedade do método.'},
            {t:'Uma cláusula de propriedade intelectual separando o que é do cliente (o fluxo configurado, os textos e os dados dele) do que continua de Vítor (métodos e modelos reutilizáveis, sem dados nem marca do cliente).', ok:true, why:'Separar o produto final do conhecimento reutilizável é exatamente o papel da cláusula de propriedade intelectual.'},
            {t:'Nenhuma: tudo o que é entregue passa automaticamente a ser do prestador.', ok:false, why:'Não existe essa regra automática a favor do prestador. Sem combinado, a dúvida vira disputa.'}
          ]},
        { who:'Priscila, 29 anos, faz chatbots para clínicas', says:'Uma clínica quer que o chatbot use a agenda dos pacientes. Ela disse que a responsabilidade pelos dados é toda minha, porque sou eu que configuro.',
          q:'Como ficam os papéis na LGPD, em regra, nesse caso?',
          opts:[
            {t:'A clínica é controladora, porque decide para que os dados dos pacientes são usados; Priscila é operadora, trata os dados seguindo as instruções da clínica e precisa protegê-los.', ok:true, why:'Quem decide as finalidades é o controlador; quem executa em nome dele é o operador. Os dois têm deveres, e dados de saúde pedem cuidado redobrado e orientação jurídica.'},
            {t:'Priscila é controladora, porque é ela quem mexe no sistema.', ok:false, why:'Mexer no sistema não é o mesmo que decidir as finalidades. Em regra, quem decide é a clínica.'},
            {t:'Ninguém é responsável, porque os dados ficam numa ferramenta de terceiros.', ok:false, why:'Usar ferramenta de terceiros não apaga as responsabilidades. A ferramenta vira mais um ponto a combinar.'},
            {t:'A LGPD não se aplica a pequenas clínicas.', ok:false, why:'A LGPD vale para quem trata dados pessoais, inclusive pequenos negócios, mesmo que existam regras simplificadas para alguns deles.'}
          ]},
        { who:'Henrique, 41 anos, montou um assistente para uma loja virtual', says:'O assistente informou um prazo de entrega errado e a loja quer que eu pague todos os pedidos cancelados do mês, um valor 5 vezes maior que o do meu contrato.',
          q:'O que deveria estar no contrato para tornar esse risco mais justo e previsível?',
          opts:[
            {t:'Uma frase dizendo que a IA nunca erra.', ok:false, why:'Promessa impossível. Ela aumenta a responsabilidade em vez de reduzir.'},
            {t:'Uma cláusula dizendo que o prestador não responde por nada, em nenhuma hipótese.', ok:false, why:'Exclusões totais tendem a ser vistas como abusivas e podem não valer, principalmente em relações de consumo.'},
            {t:'Um preço mais baixo para compensar o risco.', ok:false, why:'Preço baixo não define até onde vai a responsabilidade de cada parte.'},
            {t:'Um teto de responsabilidade (por exemplo, o valor do contrato, salvo culpa grave), revisão humana para informações críticas como prazos e preços, e a regra de que o assistente encaminha para uma pessoa quando não tem certeza.', ok:true, why:'Teto equilibrado e controles de qualidade combinados deixam o risco claro para os dois lados.'}
          ]},
        { who:'Larissa, 33 anos, está no meio de um projeto de 3 etapas', says:'O cliente decidiu parar o projeto depois da segunda etapa e não quer pagar nada, porque o assistente não ficou pronto.',
          q:'Qual cláusula resolveria isso de forma justa?',
          opts:[
            {t:'Escopo detalhado.', ok:false, why:'O escopo ajuda, mas não diz o que acontece quando alguém quer encerrar antes do fim.'},
            {t:'Rescisão com aviso prévio, pagamento proporcional às etapas concluídas e entrega ao cliente do que já foi feito.', ok:true, why:'A rescisão define a saída: o cliente paga pelo que recebeu e leva o que existe, e ninguém sai no prejuízo total.'},
            {t:'Confidencialidade.', ok:false, why:'Sigilo não trata de pagamento quando o contrato termina antes da hora.'},
            {t:'Nenhuma: quem desiste sempre perde tudo o que pagou.', ok:false, why:'Essa regra não existe e seria injusta. Sem cláusula, o caminho é negociar ou discutir na Justiça.'}
          ]}
      ]},
    { id:'3.7', title:'Expectativas sobre IA e critérios de aceite que dá para medir', min:19,
      body:[
        `<div class="card analogy"><h3>🌦️ A previsão do tempo</h3><p>A meteorologia não promete "não vai chover". Ela diz "70% de chance de chuva", e você leva o guarda-chuva. Ninguém acha que a previsão é ruim por isso: <b>a incerteza foi combinada</b>. Serviços com IA funcionam igual. A IA acerta muito, mas pode errar, e o cliente precisa saber disso antes, com números, e não descobrir depois.</p></div>`,
        `<div class="term"><b>Critério de aceite</b> = condição objetiva que diz se a entrega está pronta (ex.: "acerta pelo menos 34 de 40 perguntas de teste"). <b>Conjunto de teste</b> = lista fixa de perguntas ou situações reais, com a resposta esperada, usada para medir a solução. <b>Taxa de acerto</b> = acertos divididos pelo total de testes. <b>Alucinação</b> = quando a IA inventa uma informação com cara de verdade. <b>Humano no circuito</b> = etapa em que uma pessoa revisa ou assume os casos difíceis.</div>`,
        `<div class="card"><h3>Por que "o cliente gostou" não basta</h3><p>Na 3.3 você aprendeu a pedir o aceite por escrito. Mas aceite de quê? Se o critério é "ficar bom", cada um imagina uma coisa. Em projetos com IA o risco é maior, porque a mesma pergunta pode ter respostas um pouco diferentes a cada vez. O caminho é <b>combinar, na proposta, como a qualidade será medida</b>, e comunicar as limitações com a mesma clareza com que você mostra os benefícios.</p></div>`,
        `<div class="card"><h3>📍 Exemplo resolvido: o assistente da escola de idiomas</h3><p>Caio, de Curitiba, foi contratado para criar um assistente que tira dúvidas de alunos de uma escola de idiomas no WhatsApp. O dono disse: "quero que responda tudo certinho". Veja como Caio transformou isso em algo que dá para medir.</p>
          <ol class="golden"><li><span><b>Coletou perguntas reais</b>: pediu à secretaria as 40 dúvidas mais comuns do último semestre (sem nomes nem telefones de alunos) e a resposta correta de cada uma.</span></li><li><span><b>Combinou os critérios</b>: pelo menos 34 de 40 respostas corretas (85%); <b>zero</b> valores ou datas inventados; toda pergunta fora do escopo (ex.: reclamação, cancelamento) encaminhada para a secretaria.</span></li><li><span><b>Explicou as limitações</b>: a IA pode errar em perguntas muito diferentes das testadas, e o fornecedor pode mudar o modelo; por isso, haverá revisão mensal na manutenção.</span></li><li><span><b>Mediu em rodadas</b> e mostrou o resultado ao cliente no ponto de controle.</span></li><li><span><b>Pediu o aceite</b> citando o resultado da última rodada, por escrito.</span></li></ol></div>`,
        `<div class="card"><h3>Os números das rodadas de teste</h3>
          <div class="tw"><table class="tbl"><tr><th>Rodada</th><th>Corretas</th><th>Taxa de acerto</th><th>Valores inventados</th><th>Decisão</th></tr>
          <tr><td>1ª (semana 2)</td><td>28 de 40</td><td>70%</td><td>3</td><td>Ajustar: faltava a tabela de preços oficial na base</td></tr>
          <tr><td>2ª (semana 3)</td><td>33 de 40</td><td>82,5%</td><td>1</td><td>Ajustar: regra para dizer "não sei, vou chamar a secretaria"</td></tr>
          <tr><td>3ª (semana 4)</td><td>37 de 40</td><td>92,5%</td><td>0</td><td>Critérios atingidos: pedir aceite</td></tr></table></div>
          <p>Como saber o que ajustar? Caio usou uma cadeia de porquês no erro mais grave da 1ª rodada:</p>
          <div class="why-chain">
            <div>"O assistente disse que a mensalidade era R$ 290." (o valor certo era outro)</div>
            <div>Por quê? → "Ele não tinha a tabela de preços atual."</div>
            <div>Por que não tinha? → "Só recebeu o folheto antigo do site."</div>
            <div class="root">Causa: base de informações desatualizada, e não "IA ruim". Correção: tabela oficial na base e regra para nunca informar valor fora dela.</div>
          </div></div>`,
        `<div class="card"><h3>Como comunicar limitações sem assustar</h3>
          <div class="code">O que o assistente faz bem: dúvidas sobre horários, níveis e matrícula
O que ele NÃO faz: cancelamentos, reclamações e negociação de valores
Como medimos: 40 perguntas reais, meta de 34 corretas e zero valores inventados
Quando ele não souber: avisa o aluno e chama a secretaria
O que pode mudar: atualizações do fornecedor de IA; revisamos todo mês</div>
          <p>Esse resumo vai na proposta e é repetido na entrega. Ele separa o que é defeito (algo combinado que não funciona) do que é limitação conhecida e aceita.</p></div>`,
        `<div class="card"><h3>Erros comuns e como detectar</h3>
          <ol class="golden"><li><span><b>Critério subjetivo</b> → sinal: o aceite depende de "ficar bom" ou "o dono gostar" → correção: número de testes, meta de acerto e erros proibidos.</span></li><li><span><b>Testar com perguntas inventadas por você</b> → sinal: tudo passa no teste, mas a equipe reclama na primeira semana → correção: use perguntas reais da rotina do cliente, sem dados pessoais.</span></li><li><span><b>Esconder que a IA erra</b> → sinal: o cliente trata cada erro como traição → correção: diga as limitações por escrito, desde a proposta.</span></li><li><span><b>Mudar o conjunto de teste no meio</b> → sinal: a taxa de acerto sobe e desce sem explicação → correção: mantenha a mesma lista e acrescente casos novos só com acordo.</span></li><li><span><b>Não prever o humano no circuito</b> → sinal: o assistente responde até reclamações graves → correção: regra clara de encaminhamento para uma pessoa.</span></li></ol></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (cerca de 5 min)</h3>
          <ol class="golden"><li><span>Pense num serviço seu (real ou fictício) e escreva 10 perguntas que um cliente final faria, com a resposta correta de cada uma.</span></li><li><span>Escreva 3 critérios de aceite com números: meta de acerto, erro proibido e regra de encaminhamento.</span></li><li><span>Abra o <b>Google Gemini</b> e peça, com suas palavras, que ele aponte qual critério ainda está vago e que tipo de pergunta está faltando no seu teste.</span></li><li><span>Ajuste os critérios e escreva o resumo de limitações em 5 linhas, no formato que você viu acima.</span></li></ol>
          <p><b>Privacidade:</b> use perguntas genéricas ou fictícias. Não cole conversas reais de clientes, nomes, telefones ou dados de alunos e pacientes.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a previsão do tempo diz "70% de chance" em vez de prometer que não vai chover, e o que isso tem a ver com um assistente de IA.</div>`
      ],
      ch:[
        { who:'Marcelo, 39 anos, dono de uma rede de pet shops', says:'Contratei um assistente com IA. Quero que ele responda tudo perfeitamente, senão não pago.',
          q:'Como o prestador deve conduzir essa expectativa?',
          opts:[
            {t:'Concordar, para não perder o cliente, e torcer para dar certo.', ok:false, why:'Prometer perfeição garante conflito, porque a IA pode errar.'},
            {t:'Explicar que a IA pode errar e propor critérios medidos: um conjunto de perguntas reais, uma meta de acerto, erros proibidos (como preço inventado) e encaminhamento para uma pessoa nos casos difíceis.', ok:true, why:'Transforma "perfeito" em algo combinado e verificável, sem esconder as limitações.'},
            {t:'Dizer que IA é imprevisível e que não dá para prometer nada.', ok:false, why:'É honesto pela metade: dá para medir e garantir critérios objetivos, o que transmite segurança.'},
            {t:'Cobrar o dobro para cobrir o risco de erros.', ok:false, why:'Preço maior não resolve a expectativa desalinhada.'}
          ]},
        { who:'Sabrina, 27 anos, testou um assistente para uma ótica', says:'Escrevi 20 perguntas do meu jeito e o assistente acertou todas. Na primeira semana, os clientes da ótica perguntaram coisas que eu nem imaginava, e ele errou muito.',
          q:'Qual foi a falha principal no teste?',
          opts:[
            {t:'Poucas rodadas de teste.', ok:false, why:'Repetir o mesmo teste inventado não revela as perguntas reais que faltavam.'},
            {t:'Usar uma ferramenta de IA gratuita.', ok:false, why:'O problema não é a ferramenta, e sim um teste que não representa a rotina do cliente.'},
            {t:'O conjunto de teste não veio da rotina real: faltou coletar com a ótica as perguntas mais comuns dos clientes, sem dados pessoais.', ok:true, why:'Teste bom imita o uso real. Perguntas criadas só pelo prestador tendem a ser fáceis para a solução que ele mesmo construiu.'},
            {t:'Os clientes da ótica perguntam errado.', ok:false, why:'A solução precisa atender o jeito real como as pessoas perguntam.'}
          ]},
        { who:'Gustavo, 35 anos, na rodada de testes', says:'Na rodada 2, o assistente acertou 33 de 40, mas inventou um valor de mensalidade. A meta combinada é 34 acertos e zero valores inventados.',
          q:'Qual é a decisão correta?',
          opts:[
            {t:'Pedir o aceite, porque 33 está muito perto de 34.', ok:false, why:'Critério combinado é para ser cumprido. Além disso, houve um erro proibido.'},
            {t:'Trocar a meta para 33, para fechar logo.', ok:false, why:'Mudar a regra sozinho quebra a confiança. Se a meta precisar mudar, isso é conversa com o cliente.'},
            {t:'Esconder o valor inventado no relatório.', ok:false, why:'Esconder um erro grave é antiético e volta como problema maior.'},
            {t:'Investigar a causa do erro (por exemplo, base de preços desatualizada), corrigir, fazer nova rodada com o mesmo conjunto e só pedir o aceite quando os critérios forem atingidos.', ok:true, why:'Causa encontrada, correção feita e medição repetida com a mesma régua: é assim que o aceite fica justo.'}
          ]},
        { who:'Débora, 44 anos, cliente de um assistente de RH', says:'Depois de 3 meses, o assistente começou a responder de um jeito diferente. Achei que estava garantido para sempre.',
          q:'O que o prestador deveria ter comunicado desde a proposta?',
          opts:[
            {t:'Que o fornecedor de IA pode atualizar o modelo e mudar o comportamento, e que por isso existe revisão periódica com o mesmo conjunto de teste, dentro da manutenção.', ok:true, why:'Avisar antes transforma a mudança em algo previsto, com um processo para lidar com ela.'},
            {t:'Nada, porque isso nunca acontece.', ok:false, why:'Mudanças de modelo acontecem e devem ser comunicadas.'},
            {t:'Que a culpa seria sempre do fornecedor.', ok:false, why:'Apontar culpado não resolve o problema do cliente.'},
            {t:'Que o cliente deveria trocar de assistente todo mês.', ok:false, why:'Exagero sem fundamento. O que resolve é acompanhar e ajustar.'}
          ]}
      ]},
    { id:'3.8', title:'Nota fiscal de serviço no MEI e a hora de sair dele', min:20,
      body:[
        `<div class="card analogy"><h3>👟 O tênis que ficou pequeno</h3><p>O tênis infantil é ótimo enquanto serve: leve, barato, prático. Quando o pé cresce, insistir nele machuca. <b>O MEI é assim</b>: um formato simples e barato para começar, com regras e limites. Saber emitir nota direito e perceber quando o negócio cresceu além dele evita surpresas com impostos.</p></div>`,
        `<div class="term"><b>NFS-e</b> = Nota Fiscal de Serviço eletrônica. <b>Emissor Nacional</b> = sistema do governo federal para emitir NFS-e no padrão nacional, obrigatório para o MEI desde setembro de 2023, acessado pelo portal da NFS-e ou pelo aplicativo, com conta gov.br. <b>Tomador</b> = quem contrata e recebe a nota. <b>DAS</b> = guia mensal de valor fixo do MEI, que muda com o salário mínimo. <b>DASN-SIMEI</b> = declaração anual de faturamento do MEI. <b>Desenquadramento</b> = saída do MEI para outro formato de empresa.</div>`,
        `<div class="card"><h3>⚠️ Primeiro: sua atividade pode ser MEI?</h3><p>Nem todo serviço pode ser registrado como MEI. A lista de ocupações permitidas é oficial e muda de tempos em tempos. Várias atividades intelectuais e profissões regulamentadas (as que exigem registro em conselho) costumam ficar de fora. Antes de abrir ou de emitir notas, <b>confira no Portal do Empreendedor se o seu serviço se encaixa</b> em alguma ocupação permitida e confirme com um contador. Não escolha uma ocupação "parecida" só para caber: a nota precisa descrever o serviço que você realmente presta.</p></div>`,
        `<div class="card"><h3>📍 Exemplo resolvido: a primeira nota do Lucas</h3><p>Lucas, de Belo Horizonte, é MEI (atividade conferida com o contador) e fez a configuração de um assistente de agendamento para uma clínica de fisioterapia, que tem CNPJ, por R$ 2.400.</p>
          <ol class="golden"><li><span><b>Confirma se precisa emitir</b>: para cliente empresa (CNPJ), a nota é obrigatória. Para cliente pessoa física, o MEI em geral é dispensado, mas pode emitir se o cliente pedir; confirme com o contador.</span></li><li><span><b>Entra no Emissor Nacional</b> com a conta gov.br (nível exigido pelo sistema) e confere os dados do próprio CNPJ.</span></li><li><span><b>Preenche o tomador</b>: CNPJ da clínica (o sistema costuma puxar razão social e endereço) e e-mail para envio.</span></li><li><span><b>Descreve o serviço com clareza</b>: "Configuração de assistente virtual de agendamento conforme proposta de 02/10, etapa única". Nada de descrição genérica como "serviços diversos".</span></li><li><span><b>Informa o valor</b>: R$ 2.400,00, e confere o código de serviço que o contador indicou para a atividade dele (não escolha por palpite).</span></li><li><span><b>Revisa e emite</b>; envia o PDF ao cliente e guarda o PDF e o XML numa pasta organizada por mês.</span></li><li><span><b>Anota na planilha de faturamento</b>, para acompanhar o limite anual e preencher a declaração anual depois.</span></li></ol></div>`,
        `<div class="card"><h3>Acompanhando o limite: o tênis está apertando?</h3><p>Pelas regras atuais, o limite de faturamento do MEI é <b>R$ 81 mil por ano</b> (média de R$ 6.750 por mês). Há propostas no Congresso para mudar esse valor, então confira sempre no site oficial. No ano de abertura, o limite é proporcional aos meses de atividade.</p>
          <div class="tw"><table class="tbl"><tr><th>Período</th><th>Faturamento do Lucas</th><th>Acumulado</th><th>Leitura</th></tr>
          <tr><td>Jan a mar</td><td>R$ 5.500 por mês</td><td>R$ 16.500</td><td>Dentro da média</td></tr>
          <tr><td>Abr a jun</td><td>R$ 8.500 por mês</td><td>R$ 42.000</td><td>Acima da média de R$ 6.750</td></tr>
          <tr><td>Projeção até dez</td><td>se mantiver R$ 8.500</td><td>R$ 93.000</td><td>Passa do limite em cerca de 15%</td></tr></table></div>
          <p>Em junho, Lucas viu a projeção e marcou conversa com o contador. Pelas regras atuais, quem passa do limite em até 20% (até R$ 97.200) paga imposto extra sobre o excesso e deixa de ser MEI a partir do ano seguinte; quem passa de 20% pode ser desenquadrado com efeito retroativo ao início do ano, o que costuma sair bem mais caro. <b>Perceber em junho, e não em dezembro</b>, deu tempo de planejar.</p></div>`,
        `<div class="flows">
          <div class="flow old"><h4>Ficar no MEI</h4>
            <div class="node">DAS de valor fixo por mês</div><div class="arrow">▼</div>
            <div class="node">Declaração anual simples</div><div class="arrow">▼</div>
            <div class="node hot">Limite de faturamento, só 1 empregado e lista restrita de atividades<small>não pode ser sócio de outra empresa</small></div>
          </div>
          <div class="flow new"><h4>Migrar (ex.: microempresa no Simples Nacional)</h4>
            <div class="node">Imposto em percentual do faturamento, que varia por atividade</div><div class="arrow">▼</div>
            <div class="node">Contador quase sempre necessário</div><div class="arrow">▼</div>
            <div class="node good">Limite maior, mais atividades e espaço para crescer<small>planeje com antecedência</small></div>
          </div>
        </div>`,
        `<div class="card" style="margin-top:14px"><h3>Sinais de que é hora de conversar sobre sair do MEI</h3>
          <ol class="golden"><li><span>A projeção do ano passa do limite.</span></li><li><span>Você quer contratar mais de uma pessoa ou ter um sócio.</span></li><li><span>Seu serviço mudou e não se encaixa mais na ocupação registrada.</span></li><li><span>Clientes grandes exigem outro formato de empresa.</span></li></ol>
          <p>A reforma tributária está em fase de transição desde 2026 e pode mudar detalhes de notas e impostos nos próximos anos. Mais um motivo para acompanhar as fontes oficiais e falar com o contador uma vez por ano, no mínimo.</p></div>`,
        `<div class="card"><h3>Erros comuns e como detectar</h3>
          <ol class="golden"><li><span><b>Emitir nota em sistema errado ou desatualizado</b> → sinal: o cliente diz que a nota não foi reconhecida → correção: use o Emissor Nacional oficial e confirme com o contador.</span></li><li><span><b>Descrição genérica</b> ("serviços diversos") → sinal: o financeiro do cliente devolve a nota → correção: descreva o serviço e cite a proposta.</span></li><li><span><b>Ocupação que não corresponde ao serviço</b> → sinal: você precisa "forçar" a descrição para caber → correção: revise o registro com o contador.</span></li><li><span><b>Não somar o faturamento</b> → sinal: você não sabe dizer quanto faturou no ano → correção: planilha mensal com projeção até dezembro.</span></li><li><span><b>Esquecer DAS e declaração anual</b> → sinal: guias em atraso no portal → correção: lembrete mensal e anual no calendário.</span></li></ol></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (cerca de 5 min)</h3>
          <ol class="golden"><li><span>Abra o <b>Portal do Empreendedor (gov.br)</b> e procure a lista de ocupações permitidas ao MEI.</span></li><li><span>Verifique se o serviço que você quer vender aparece de forma clara. Se não aparecer, anote a dúvida.</span></li><li><span>Anote o limite anual vigente e as obrigações mensais e anuais.</span></li><li><span>Escreva, com suas palavras, a descrição que você colocaria na nota do seu serviço, citando a proposta.</span></li><li><span>Liste 3 perguntas para levar ao contador.</span></li></ol>
          <p><b>Segurança:</b> use só o site oficial e desconfie de sites que cobram para abrir MEI ou emitir guias. Nunca compartilhe a senha gov.br com ninguém.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que um tênis que serviu tão bem pode começar a machucar, e o que isso tem a ver com o MEI.</div>`
      ],
      ch:[
        { who:'Natália, 30 anos, cria conteúdo com IA para pequenas lojas', says:'Fechei com uma loja que tem CNPJ. Eles pediram nota fiscal, mas meu primo disse que MEI não precisa emitir nota nunca.',
          q:'O que está correto, pelas regras atuais?',
          opts:[
            {t:'O primo está certo: MEI nunca emite nota.', ok:false, why:'A dispensa vale, em geral, para vendas a pessoa física. Para empresa com CNPJ, a nota é obrigatória.'},
            {t:'Para cliente com CNPJ, a nota é obrigatória; Natália emite a NFS-e pelo Emissor Nacional, descrevendo o serviço com clareza.', ok:true, why:'O MEI emite NFS-e no padrão nacional, e cliente empresa precisa da nota.'},
            {t:'Ela pode mandar só um recibo escrito à mão.', ok:false, why:'Recibo não substitui a nota fiscal quando ela é obrigatória.'},
            {t:'Ela deve emitir a nota no CPF de um parente que já tem empresa.', ok:false, why:'Emitir nota por outra pessoa ou empresa é irregular e pode gerar problemas sérios.'}
          ]},
        { who:'Otávio, 37 anos, quer abrir MEI', says:'Não achei meu serviço na lista. Vou escolher uma ocupação parecida e descrever tudo de forma genérica nas notas.',
          q:'Qual é o caminho mais seguro?',
          opts:[
            {t:'Escolher a ocupação parecida, porque ninguém confere.', ok:false, why:'A ocupação precisa corresponder ao serviço prestado. O registro errado pode gerar problemas com impostos e notas.'},
            {t:'Abrir uma ocupação qualquer e mudar depois, se der problema.', ok:false, why:'Corrigir depois costuma sair mais caro do que acertar antes.'},
            {t:'Não formalizar e atender só pessoas físicas.', ok:false, why:'Limita o negócio e não resolve a dúvida sobre o formato certo.'},
            {t:'Levar a dúvida a um contador: se o serviço não se encaixa no MEI, avaliar outro formato, como microempresa no Simples Nacional.', ok:true, why:'Algumas atividades não podem ser MEI. Um profissional indica o formato certo para o serviço real.'}
          ]},
        { who:'Beatriz, 32 anos, MEI desde o ano passado', says:'Faturei R$ 48 mil de janeiro a junho, e o ritmo está crescendo.',
          q:'Considerando um limite de R$ 81 mil por ano, o que ela deve fazer agora?',
          opts:[
            {t:'Esperar dezembro para ver o total.', ok:false, why:'Em dezembro já não dá para planejar. Ultrapassar muito o limite pode ter efeito retroativo.'},
            {t:'Parar de emitir notas no segundo semestre para não passar do limite.', ok:false, why:'Deixar de emitir nota obrigatória é irregular.'},
            {t:'Projetar o ano (R$ 48 mil em 6 meses indica cerca de R$ 96 mil ou mais) e conversar já com um contador sobre a migração para outro formato.', ok:true, why:'A projeção mostra que ela deve passar do limite. Agir no meio do ano permite escolher o melhor momento e evitar surpresas.'},
            {t:'Abrir um segundo MEI no nome dela para dividir o faturamento.', ok:false, why:'Cada pessoa só pode ter um MEI, e dividir faturamento artificialmente é irregular.'}
          ]},
        { who:'Wesley, 26 anos, emitiu a primeira nota', says:'Escrevi "serviços diversos" na descrição. O financeiro do cliente devolveu a nota.',
          q:'Como deveria ser a descrição?',
          opts:[
            {t:'Clara e ligada à proposta, por exemplo: "Configuração de assistente virtual de atendimento conforme proposta de 15/09, etapa 1 de 2".', ok:true, why:'Descrição específica mostra o que foi vendido e facilita a conferência do cliente e a sua.'},
            {t:'Ainda mais curta, só "serviço".', ok:false, why:'Mais vaga ainda: o financeiro vai devolver de novo.'},
            {t:'Com todos os dados pessoais dos clientes atendidos pelo assistente.', ok:false, why:'A nota não deve trazer dados pessoais desnecessários de terceiros.'},
            {t:'Com uma ocupação diferente da registrada, para parecer mais profissional.', ok:false, why:'A descrição precisa ser verdadeira e coerente com a atividade registrada.'}
          ]}
      ]},
    { id:'3.9', title:'Cliente difícil e atraso de pagamento', min:18,
      body:[
        `<div class="card analogy"><h3>💡 A conta de luz</h3><p>A distribuidora de energia não corta a luz de surpresa no primeiro dia de atraso. Antes, manda a conta com data de vencimento, depois um aviso, e só então segue o procedimento previsto. Todo mundo conhece as regras antes. <b>A cobrança do seu serviço funciona melhor do mesmo jeito</b>: combinada antes, em etapas, com tom respeitoso e firme.</p></div>`,
        `<div class="term"><b>Entrada</b> (ou sinal) = parte do valor paga antes de começar. <b>Marco de pagamento</b> = parcela ligada a uma etapa concluída. <b>Régua de cobrança</b> = sequência combinada de lembretes e ações antes e depois do vencimento. <b>Pausa do trabalho</b> = interrupção prevista no contrato enquanto há pagamento atrasado. <b>Notificação formal</b> = comunicado por escrito que registra a dívida e o prazo para pagar.</div>`,
        `<div class="card"><h3>📍 Exemplo resolvido: o projeto de R$ 6.000 do Thiago</h3><p>Thiago, de Porto Alegre, fez um projeto de automação para uma distribuidora de bebidas com 100% do pagamento no fim. Entregou, o cliente aprovou e... 45 dias sem pagar. No projeto seguinte, ele mudou a estrutura (valores de exemplo).</p>
          <div class="tw"><table class="tbl"><tr><th>Item</th><th>Antes</th><th>Depois</th></tr>
          <tr><td>Pagamento</td><td>R$ 6.000 no fim</td><td>R$ 3.000 de entrada, R$ 1.800 no ponto de controle e R$ 1.200 no aceite</td></tr>
          <tr><td>Risco máximo de calote</td><td>R$ 6.000 (100%)</td><td>R$ 1.200 (20%)</td></tr>
          <tr><td>Forma de pagamento</td><td>"Depois a gente vê"</td><td>PIX para a chave do CNPJ ou boleto, com vencimento na proposta</td></tr>
          <tr><td>Atraso</td><td>Nada combinado</td><td>Multa e juros pequenos previstos no contrato e pausa do trabalho após 10 dias</td></tr>
          <tr><td>Entrega final</td><td>Tudo liberado antes do pagamento</td><td>Acessos de administrador transferidos após a última parcela</td></tr></table></div>
          <p>Sobre multa e juros: defina valores moderados e confirme com um contador ou advogado. Quando o cliente é consumidor pessoa física, há limites legais para encargos de atraso.</p></div>`,
        `<div class="card"><h3>A régua de cobrança do Thiago</h3>
          <ol class="golden"><li><span><b>2 dias antes</b>: lembrete gentil com valor, vencimento e chave PIX.</span></li><li><span><b>1 dia depois</b>: "Não identifiquei o pagamento; pode ter sido um descuido. Segue a chave novamente."</span></li><li><span><b>5 dias depois</b>: ligação ou áudio curto, seguido de resumo por escrito, perguntando se há algum problema e propondo uma data.</span></li><li><span><b>10 dias depois</b>: aviso de pausa do trabalho, conforme o contrato, e proposta de parcelamento se for o caso.</span></li><li><span><b>30 dias depois</b>: notificação formal por escrito. Persistindo, buscar orientação sobre os caminhos de cobrança, como o Juizado Especial Cível, que atende causas de menor valor.</span></li></ol>
          <div class="code">Olá, [nome]! Tudo bem?
A parcela 2 (R$ 1.800, ponto de controle) venceu ontem, dia 10.
Pode ter sido só um descuido. Chave PIX: [chave do CNPJ]
Se houver algum problema, me avise e combinamos uma data.
Obrigado!</div></div>`,
        `<div class="card"><h3>E o cliente difícil?</h3><p>Nem todo cliente difícil é mal-intencionado. Muitas vezes ele está inseguro, sem tempo ou com expectativa desalinhada. Um caminho que costuma funcionar:</p>
          <div class="why-chain">
            <div>"O cliente reclama de tudo e pede mudanças toda semana."</div>
            <div>Por quê? → "Ele não sabe o que está incluído."</div>
            <div>Por que não sabe? → "O escopo ficou só numa conversa de áudio."</div>
            <div class="root">Causa: combinado frágil. Ação: voltar ao documento por escrito, separar o que é ajuste do que é pedido de mudança e oferecer opções com preço e prazo.</div>
          </div>
          <p>Se houver desrespeito, ameaças ou pressão para fazer algo antiético (como usar dados sem autorização), registre tudo por escrito e use a cláusula de rescisão. Encerrar bem um cliente que não dá certo também é profissionalismo.</p></div>`,
        `<div class="card"><h3>Erros comuns e como detectar</h3>
          <ol class="golden"><li><span><b>100% do pagamento no fim</b> → sinal: você já trabalhou semanas sem receber nada → correção: entrada e marcos por etapa.</span></li><li><span><b>Cobrar com vergonha ou com raiva</b> → sinal: você adia a mensagem ou escreve em tom de ameaça → correção: régua combinada e mensagens neutras, sempre por escrito.</span></li><li><span><b>Continuar trabalhando com atraso grande</b> → sinal: a dívida cresce a cada etapa → correção: pausa prevista no contrato, avisada com antecedência.</span></li><li><span><b>Reter dados ou trocar senhas do cliente como pressão</b> → sinal: você pensa em "bloquear o sistema até pagar" → correção: nunca faça isso; use os caminhos combinados e, se preciso, orientação jurídica.</span></li><li><span><b>Discutir por áudio</b> → sinal: ninguém lembra o que foi dito → correção: resumo por escrito depois de cada conversa.</span></li></ol></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (cerca de 5 min)</h3>
          <ol class="golden"><li><span>No <b>Trello</b>, crie no seu quadro de entregas uma coluna "Pagamentos" com um cartão para um cliente fictício.</span></li><li><span>No cartão, monte uma checklist com a sua régua de cobrança (antes do vencimento, 1, 5, 10 e 30 dias depois).</span></li><li><span>Escreva, com suas palavras, a mensagem do 1º dia de atraso e a do aviso de pausa.</span></li><li><span>Releia em voz alta: o tom é respeitoso e firme? Ajuste o que soar como ameaça.</span></li></ol>
          <p><b>Privacidade:</b> use nomes e valores fictícios. Não coloque chave PIX real, dados bancários, CPF ou CNPJ de clientes em quadros compartilhados.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a companhia de luz avisa antes de cortar, e como isso ajuda você a cobrar sem brigar.</div>`
      ],
      ch:[
        { who:'Rafaela, 31 anos, cria fluxos de atendimento com IA', says:'No último projeto, o cliente pagou só a metade e sumiu depois da entrega. Já tinha liberado tudo.',
          q:'Que mudança de estrutura reduz mais esse risco nos próximos projetos?',
          opts:[
            {t:'Cobrar tudo no fim, mas com um contrato mais bonito.', ok:false, why:'O risco continua sendo 100% do valor no fim.'},
            {t:'Exigir 100% antecipado de qualquer cliente.', ok:false, why:'Funciona para valores pequenos, mas costuma afastar clientes em projetos maiores. Marcos equilibram o risco dos dois lados.'},
            {t:'Entrada antes de começar, parcelas ligadas às etapas e transferência dos acessos de administrador após a última parcela, tudo previsto na proposta.', ok:true, why:'O risco fica limitado à última parcela e as regras são conhecidas desde o início.'},
            {t:'Esconder parte da entrega até o cliente pagar, sem avisar.', ok:false, why:'Surpresas quebram a confiança. A regra precisa estar combinada antes.'}
          ]},
        { who:'Jonas, 38 anos, com uma parcela atrasada há 3 dias', says:'Estou com vergonha de cobrar. Vou esperar ele lembrar sozinho.',
          q:'Qual é a atitude mais profissional?',
          opts:[
            {t:'Esperar, para não parecer chato.', ok:false, why:'O atraso tende a crescer e a conversa fica mais difícil depois.'},
            {t:'Mandar uma mensagem curta e neutra por escrito, com valor, vencimento e chave PIX, perguntando se houve algum problema.', ok:true, why:'Cobrar cedo, com educação, resolve a maioria dos atrasos, que muitas vezes são só esquecimento.'},
            {t:'Publicar nas redes sociais que o cliente é caloteiro.', ok:false, why:'Exposição pública pode gerar problema jurídico e prejudica a sua reputação.'},
            {t:'Mandar áudio irritado para mostrar firmeza.', ok:false, why:'Tom agressivo piora a relação. Firmeza está nas regras combinadas, não no grito.'}
          ]},
        { who:'Cíntia, 34 anos, cliente atrasou 40 dias', says:'Tenho o acesso de administrador do sistema dele. Penso em trocar a senha até ele pagar.',
          q:'O que ela deve fazer?',
          opts:[
            {t:'Trocar a senha, porque é a única forma de pressão.', ok:false, why:'Bloquear o sistema do cliente pode causar prejuízos e gerar responsabilidade para ela, além de destruir a reputação.'},
            {t:'Apagar os dados do cliente para compensar.', ok:false, why:'Apagar dados como retaliação é grave e pode violar a LGPD e o contrato.'},
            {t:'Continuar trabalhando normalmente para não perder o cliente.', ok:false, why:'Trabalhar mais com 40 dias de atraso aumenta a perda.'},
            {t:'Não mexer nos acessos como pressão; seguir a régua combinada: aviso de pausa, notificação formal por escrito e, se necessário, orientação sobre os caminhos de cobrança, como o Juizado Especial Cível.', ok:true, why:'Cobrar pelos caminhos combinados e legais protege Cíntia e mantém a postura profissional.'}
          ]},
        { who:'Eduardo, 42 anos, dono de uma corretora de seguros', says:'Toda semana mando 5 pedidos novos e reclamo que o projeto não anda. O prestador vive dizendo que isso não estava combinado.',
          q:'Do lado do prestador, qual é a melhor resposta?',
          opts:[
            {t:'Aceitar todos os pedidos para manter o cliente feliz.', ok:false, why:'O prazo estoura e o cliente continua insatisfeito, porque o projeto não anda.'},
            {t:'Encerrar o contrato na hora, sem conversa.', ok:false, why:'Rescindir pode ser o caminho no fim, mas antes vale tentar realinhar.'},
            {t:'Marcar uma conversa, voltar ao escopo por escrito, separar ajustes de pedidos de mudança e oferecer opções com preço e prazo, registrando o combinado.', ok:true, why:'A causa costuma ser expectativa desalinhada. Voltar ao documento e dar opções transforma reclamação em decisão do cliente.'},
            {t:'Ignorar os pedidos e entregar só o original, sem explicar.', ok:false, why:'Sem explicação, a relação piora e o conflito aparece na entrega.'}
          ]}
      ]},
    { id:'3.5', title:'Projeto: contrato e roteiro de entrega', min:50,
      body:[
        `<div class="card"><p>Prepare os documentos que vão acompanhar o seu próximo projeto. Este material é um ponto de partida: para valores altos ou dados sensíveis, revise o contrato com um profissional.</p></div>`
      ],
      projeto:{
        entrega:'Um combinado escrito (lista de cláusulas em linguagem simples) e um roteiro de entrega, do início ao encerramento, para o seu serviço.',
        passos:[
          'Liste as cláusulas essenciais: escopo, prazo, preço, pagamento e atraso, propriedade, portfólio, dados e uso de IA, aceite.',
          'Escreva como os dados do cliente serão tratados: testes com dados fictícios, acessos mínimos, ferramentas usadas e o que acontece no fim.',
          'Monte o cronograma típico com 3 a 5 etapas, um ponto de controle e o modelo de atualização semanal.',
          'Descreva como você trata pedidos de mudança.',
          'Defina o período de suporte, a diferença entre suporte e trabalho novo e a oferta de manutenção.',
          'Escreva o checklist de encerramento: documentação, contas no nome do cliente, remoção de acessos e exclusão de dados.'
        ],
        checklist:[
          'O combinado está em linguagem que o cliente entende.',
          'Há regra de aceite com prazo e regra para pedidos de mudança.',
          'Os dados do cliente são protegidos do início ao fim (fictícios nos testes, acessos mínimos, exclusão no fim).',
          'Suporte e manutenção têm limites claros.',
          'O encerramento devolve ao cliente o controle de tudo o que é dele.'
        ],
        minimo:500
      }}
  ]},
  { id:4, icon:'📣', title:'Conseguir clientes', sub:'Divulgar com honestidade e sem spam', lessons:[
    { id:'4.1', title:'Portfólio e estudo de caso', min:11,
      body:[
        `<div class="card analogy"><h3>📸 O álbum do fotógrafo de casamento</h3><p>Ninguém contrata um fotógrafo de casamento sem ver o álbum. E o álbum que convence não é o que tem mais fotos, e sim o que mostra <b>casamentos parecidos com o seu</b>, com a história de cada um. Seu portfólio funciona do mesmo jeito.</p></div>`,
        `<div class="term"><b>Portfólio</b> = coleção dos seus melhores trabalhos. <b>Estudo de caso</b> = história curta de um projeto: situação, o que você fez e o que mudou. <b>Antes e depois</b> = comparação concreta da situação do cliente. <b>Autorização</b> = permissão por escrito do cliente para mostrar o trabalho.</div>`,
        `<div class="card"><h3>A estrutura de um bom estudo de caso</h3>
          <div class="code">Cliente: clínica de estética no centro da cidade (nome com autorização)
Situação: a recepcionista passava 3 horas por dia respondendo as mesmas perguntas
O que fiz: respostas automáticas para 15 perguntas e agendamento pelo WhatsApp
Como: 10 dias, 2 rodadas de ajustes, treinamento da equipe
O que mudou (medido pelo cliente): cerca de 2 horas por dia liberadas
Depoimento: "Agora a recepção cuida de quem está na clínica." (autorizado)</div>
          <p>Use números <b>medidos e confirmados com o cliente</b>, nunca estimativas apresentadas como fatos. Se não houver número, descreva a mudança com palavras do próprio cliente.</p></div>`,
        `<div class="card"><h3>Montando o portfólio</h3>
          <ol class="golden"><li><span>Escolha <b>3 trabalhos</b> do seu nicho (incluindo demonstrações com dados fictícios, identificadas como tal).</span></li><li><span>Escreva um estudo de caso curto para cada um.</span></li><li><span>Mostre imagens ou um vídeo curto, <b>sem dados de pessoas reais</b>.</span></li><li><span>Coloque tudo num lugar fácil de mandar: uma página simples ou um PDF de 2 páginas.</span></li><li><span>Atualize a cada novo projeto.</span></li></ol>
          <p><b>Erros comuns:</b> mostrar prints com nomes e telefones dos clientes do cliente; apresentar demonstração como se fosse cliente real; listar 20 trabalhos de áreas misturadas; aumentar números para impressionar.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o fotógrafo mostra o álbum de casamentos antes de ser contratado.</div>`
      ],
      ch:[
        { who:'Diego, 28 anos, monta o portfólio', says:'Vou colocar prints das conversas reais do chatbot que fiz para a loja, com nomes e telefones dos clientes, para mostrar que funciona.',
          q:'Qual é a forma certa de mostrar o trabalho?',
          opts:[
            {t:'Usar os prints reais, porque são a melhor prova.', ok:false, why:'Expõe dados pessoais dos clientes da loja sem autorização.'},
            {t:'Pedir autorização à loja e mostrar conversas simuladas ou com todos os dados pessoais removidos, explicando o que o chatbot faz.', ok:true, why:'Mostra o trabalho sem expor ninguém e ainda demonstra cuidado com privacidade, o que gera confiança.'},
            {t:'Borrar só os telefones.', ok:false, why:'Nomes e contexto ainda identificam as pessoas.'},
            {t:'Não mostrar nada.', ok:false, why:'Dá para mostrar com cuidado; o portfólio é importante.'}
          ]},
        { who:'Priscila, 31 anos, escreve um estudo de caso', says:'Acho que o cliente economizou umas 20 horas por mês. Vou escrever "economia de 20 horas mensais comprovada".',
          q:'Como apresentar o resultado com honestidade?',
          opts:[
            {t:'Manter, porque é uma estimativa razoável.', ok:false, why:'Estimativa apresentada como comprovada é enganosa.'},
            {t:'Confirmar o número com o cliente ou descrever a mudança com as palavras dele, sem chamar de comprovado o que não foi medido.', ok:true, why:'Números confirmados ou descrições honestas sustentam a confiança a longo prazo.'},
            {t:'Arredondar para 40 horas, para impressionar.', ok:false, why:'Aumentar números é propaganda enganosa.'},
            {t:'Não citar resultado nenhum.', ok:false, why:'É possível citar com honestidade; o resultado ajuda o próximo cliente a entender o valor.'}
          ]},
        { who:'Sérgio, 35 anos, tem 15 trabalhos variados', says:'Vou mostrar todos os 15 no portfólio: site de advogado, logo de pizzaria, automação de oficina...',
          q:'Qual é a melhor estratégia para o nicho de oficinas?',
          opts:[
            {t:'Mostrar todos, porque mostra versatilidade.', ok:false, why:'Trabalhos misturados confundem e diluem a mensagem para o cliente do nicho.'},
            {t:'Destacar os trabalhos mais próximos do nicho de oficinas, com estudo de caso, e deixar os outros em segundo plano.', ok:true, why:'O cliente se identifica com casos parecidos com o dele.'},
            {t:'Mostrar só o trabalho mais bonito, mesmo que seja de outra área.', ok:false, why:'Beleza não substitui identificação com o problema do cliente.'},
            {t:'Inventar trabalhos para oficinas.', ok:false, why:'É desonesto.'}
          ]},
        { who:'Valter, 26 anos, só tem demonstrações', says:'Fiz duas demonstrações com dados fictícios. Vou apresentá-las como clientes reais para passar credibilidade.',
          q:'Qual é a postura correta?',
          opts:[
            {t:'Apresentar como clientes reais, ninguém vai conferir.', ok:false, why:'Mentir quebra a confiança e pode configurar propaganda enganosa.'},
            {t:'Apresentar como demonstrações, explicando o problema simulado e o que a solução faz.', ok:true, why:'Demonstração honesta já prova habilidade e evita o risco de ser descoberto.'},
            {t:'Não mostrar até ter clientes reais.', ok:false, why:'Demonstrações são úteis no início, desde que identificadas.'},
            {t:'Colocar nomes de empresas famosas nas demonstrações.', ok:false, why:'Sugere uma relação que não existe.'}
          ]}
      ]},
    { id:'4.2', title:'Prospecção ativa sem spam', min:11,
      body:[
        `<div class="card analogy"><h3>🚪 Bater na porta certa</h3><p>Um vendedor que toca todas as campainhas da cidade com o mesmo discurso irrita muita gente e vende pouco. Quem escolhe as portas, estuda quem mora ali e chega com algo útil é recebido de outro jeito. <b>Prospectar é escolher a porta e ter algo a oferecer.</b></p></div>`,
        `<div class="term"><b>Prospecção</b> = procurar ativamente possíveis clientes. <b>Spam</b> = mensagem em massa não solicitada. <b>Personalização</b> = mensagem que mostra que você conhece o negócio da pessoa. <b>Descadastro</b> = forma simples de a pessoa pedir para não receber mais contato. <b>Seguimento</b> = nova mensagem educada depois de alguns dias sem resposta.</div>`,
        `<div class="card"><h3>A mensagem de primeiro contato</h3>
          <div class="code">Oi, [nome]! Vi que a [empresa] responde agendamentos pelo Instagram e
pelo WhatsApp. Trabalho com clínicas da região organizando o atendimento
automático para perguntas frequentes. Fiz uma demonstração curta (2 min)
para um caso parecido. Posso te mandar? Se não fizer sentido, é só dizer
que eu não volto a escrever.</div>
          <p>Curta, personalizada, com algo útil, sem promessa de ganho e com saída fácil.</p></div>`,
        `<div class="card"><h3>Regras de uma prospecção respeitosa</h3>
          <ol class="golden"><li><span>Comece pela sua <b>rede</b>: conhecidos, ex-colegas, comércio que você frequenta.</span></li><li><span>Contate empresas pelos <b>canais comerciais</b> que elas divulgam publicamente.</span></li><li><span><b>Nunca compre listas</b> de contatos: além de ineficaz, levanta problemas com a LGPD.</span></li><li><span>Faça no máximo <b>1 ou 2 seguimentos</b>, com intervalo de dias.</span></li><li><span>Respeite o <b>"não"</b> e o pedido de descadastro na hora.</span></li><li><span>Anote cada contato numa planilha: data, resposta, próximo passo.</span></li></ol>
          <p><b>Erros comuns:</b> disparar a mesma mensagem para centenas de números; usar automação para enviar em massa pelo WhatsApp (pode levar ao bloqueio da conta); textos enormes; prometer faturamento.</p></div>`,
        `<div class="card"><h3>📍 Na prática</h3><p>Em vez de disparar mensagens em massa, uma prestadora escolheu 20 clínicas do bairro, olhou o Instagram de cada uma e escreveu mensagens citando algo específico. Conseguiu algumas conversas e nenhum bloqueio.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos a diferença entre tocar todas as campainhas e bater na porta certa com algo útil.</div>`
      ],
      ch:[
        { who:'Rogério, 33 anos, quer clientes rápido', says:'Comprei uma lista com 5 mil números de empresários e vou disparar a mesma mensagem para todos.',
          q:'Qual é a avaliação correta?',
          opts:[
            {t:'Boa estratégia: quanto mais gente, mais clientes.', ok:false, why:'Mensagens em massa para listas compradas irritam, rendem pouco, podem bloquear a conta e levantam problemas com a LGPD.'},
            {t:'Abandonar a lista e fazer contatos personalizados com empresas do nicho, por canais comerciais públicos e pela própria rede.', ok:true, why:'Poucos contatos bem escolhidos e personalizados geram mais conversas e respeitam as pessoas.'},
            {t:'Disparar, mas em horários diferentes.', ok:false, why:'Continua sendo spam para uma lista comprada.'},
            {t:'Disparar com outro número, para não bloquear o principal.', ok:false, why:'Tenta driblar o bloqueio sem resolver o problema.'}
          ]},
        { who:'Tamires, 29 anos, escreveu a primeira mensagem', says:'Minha mensagem tem 3 parágrafos explicando todas as ferramentas que uso e termina com "me chama!".',
          q:'Como melhorar?',
          opts:[
            {t:'Acrescentar a lista de preços.', ok:false, why:'Mais texto piora. O objetivo é abrir uma conversa.'},
            {t:'Encurtar: mostrar que conhece o negócio da pessoa, oferecer algo útil (como uma demonstração curta) e facilitar a resposta, inclusive o "não".', ok:true, why:'Mensagens curtas, personalizadas e úteis têm mais chance de resposta.'},
            {t:'Mandar em áudio de 5 minutos.', ok:false, why:'Áudio longo de quem não se conhece raramente é ouvido.'},
            {t:'Mandar a mesma mensagem 3 vezes no mesmo dia.', ok:false, why:'Insistência excessiva irrita e afasta.'}
          ]},
        { who:'Nelson, 41 anos, recebeu um "não, obrigado"', says:'O dono da loja disse não. Vou mandar mensagem toda semana até ele mudar de ideia.',
          q:'Qual é a atitude certa?',
          opts:[
            {t:'Insistir toda semana.', ok:false, why:'Desrespeita o "não" e prejudica a reputação.'},
            {t:'Agradecer, registrar na planilha que não deseja contato e não voltar a escrever, a não ser que a pessoa procure.', ok:true, why:'Respeitar o "não" mantém a reputação e é a conduta correta com os dados da pessoa.'},
            {t:'Mudar de número e tentar de novo.', ok:false, why:'Driblar a recusa é desrespeitoso.'},
            {t:'Pedir para um amigo insistir por ele.', ok:false, why:'Continua sendo insistência indesejada.'}
          ]},
        { who:'Celina, 37 anos, organiza a prospecção', says:'Mando mensagens quando lembro e não anoto nada. Já mandei duas vezes para a mesma pessoa sem perceber.',
          q:'Qual é a melhoria mais simples?',
          opts:[
            {t:'Comprar um sistema caro de vendas.', ok:false, why:'No começo, uma planilha resolve.'},
            {t:'Uma planilha com nome da empresa, canal, data do contato, resposta e próximo passo, revisada em horário fixo da semana.', ok:true, why:'Registro simples e rotina fixa evitam repetição e esquecimento.'},
            {t:'Parar de prospectar e esperar indicações.', ok:false, why:'Indicação ajuda, mas no início prospectar com método é importante.'},
            {t:'Guardar tudo na memória com mais atenção.', ok:false, why:'Memória falha; registro não.'}
          ]}
      ]},
    { id:'4.3', title:'A conversa de diagnóstico', min:11,
      body:[
        `<div class="card analogy"><h3>🩺 A consulta antes da receita</h3><p>Um bom médico não receita nada antes de perguntar o que você sente, desde quando e o que já tentou. Quem receita sem examinar parece rápido, mas erra muito. <b>Vender um serviço também começa pelo diagnóstico.</b></p></div>`,
        `<div class="term"><b>Conversa de diagnóstico</b> = reunião para entender o problema do cliente antes de propor solução. <b>Dor</b> = o problema que incomoda o cliente de verdade. <b>Critério de decisão</b> = o que o cliente vai considerar para escolher (preço, prazo, confiança). <b>Próximo passo</b> = ação combinada no fim da conversa (proposta, piloto, nova reunião).</div>`,
        `<div class="card"><h3>Roteiro de 30 minutos</h3>
          <div class="tw"><table class="tbl"><tr><th>Etapa</th><th>Tempo</th><th>Perguntas</th></tr>
          <tr><td>Contexto</td><td>5 min</td><td>"Me conta como funciona o atendimento hoje."</td></tr>
          <tr><td>Dor</td><td>10 min</td><td>"O que mais atrapalha? Desde quando? O que já tentaram?"</td></tr>
          <tr><td>Impacto</td><td>5 min</td><td>"Quanto tempo isso toma por semana? O que acontece se nada mudar?"</td></tr>
          <tr><td>Decisão</td><td>5 min</td><td>"Quem mais participa da decisão? O que é importante para escolher?"</td></tr>
          <tr><td>Próximo passo</td><td>5 min</td><td>"Posso te mandar uma proposta até sexta?"</td></tr></table></div></div>`,
        `<div class="card"><h3>Postura durante a conversa</h3>
          <ol class="golden"><li><span><b>Escute mais do que fala</b>: o cliente deve falar a maior parte do tempo.</span></li><li><span>Anote as <b>palavras dele</b>; elas vão para a proposta.</span></li><li><span>Se o problema <b>não se resolve com o seu serviço</b>, diga com honestidade e, se puder, indique outro caminho.</span></li><li><span>Fale de riscos e limites: o que depende do cliente, o que a IA não faz bem.</span></li><li><span>Termine sempre com um <b>próximo passo</b> e data.</span></li></ol>
          <p><b>Erros comuns:</b> fazer uma apresentação de 30 minutos sobre você; propor solução nos primeiros 2 minutos; prometer resultados para fechar; terminar sem combinar nada.</p></div>`,
        `<div class="card"><h3>📍 Na prática</h3><p>Numa conversa de diagnóstico com uma imobiliária, o prestador ouviu mais do que falou e descobriu que o maior incômodo eram visitas marcadas e esquecidas. A proposta foi direto ao ponto, usando as palavras do próprio dono, e foi aprovada sem pedido de desconto.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o médico pergunta tanto antes de receitar.</div>`
      ],
      ch:[
        { who:'Ricardo, 32 anos, fez a primeira reunião', says:'Falei 25 minutos sobre as ferramentas que uso e meus cursos. No fim, o cliente disse que ia pensar e sumiu.',
          q:'O que deveria ter acontecido?',
          opts:[
            {t:'Falar ainda mais, mostrando mais ferramentas.', ok:false, why:'O cliente quer ser entendido, não ouvir uma palestra.'},
            {t:'Deixar o cliente falar a maior parte do tempo sobre a rotina, a dor e o impacto, e terminar combinando um próximo passo com data.', ok:true, why:'Entender o problema permite uma proposta certeira, e o próximo passo evita o sumiço.'},
            {t:'Dar um desconto no fim da reunião.', ok:false, why:'Desconto não resolve a falta de entendimento do problema.'},
            {t:'Mandar a proposta sem conversar mais.', ok:false, why:'Sem entender a dor, a proposta tende a errar o alvo.'}
          ]},
        { who:'Joana, 36 anos, em diagnóstico com uma loja', says:'Percebi que o problema da loja é falta de estoque, não de atendimento. Meu serviço é atendimento automático.',
          q:'Qual é a atitude mais honesta?',
          opts:[
            {t:'Vender o atendimento automático mesmo assim.', ok:false, why:'Vender algo que não resolve o problema gera frustração e má reputação.'},
            {t:'Dizer com honestidade que o serviço dela não resolve o problema principal agora e, se possível, indicar outro caminho.', ok:true, why:'Honestidade gera confiança e indicações, mesmo quando a venda não acontece.'},
            {t:'Prometer que o atendimento vai resolver o estoque.', ok:false, why:'Promessa falsa.'},
            {t:'Encerrar a reunião sem explicar.', ok:false, why:'Perde a chance de deixar uma boa impressão.'}
          ]},
        { who:'Mauro, 39 anos, fechou a reunião', says:'A conversa foi ótima. O dono disse "depois a gente vê" e eu respondi "fechado, qualquer coisa me chama".',
          q:'O que faltou?',
          opts:[
            {t:'Nada, o cliente vai chamar.', ok:false, why:'Sem próximo passo definido, a conversa tende a esfriar.'},
            {t:'Combinar um próximo passo concreto, como "te mando a proposta até sexta e marcamos 15 minutos na segunda para tirar dúvidas".', ok:true, why:'Um próximo passo com data mantém o processo andando.'},
            {t:'Pressionar para fechar na hora.', ok:false, why:'Pressão excessiva afasta.'},
            {t:'Mandar mensagem todo dia até ele responder.', ok:false, why:'Insistência excessiva irrita.'}
          ]},
        { who:'Débora, 30 anos, em diagnóstico com um sócio', says:'O sócio que conversou comigo adorou, mas a decisão final é do outro sócio, que eu nunca vi.',
          q:'Qual pergunta ela deveria ter feito?',
          opts:[
            {t:'"Você gostou da minha apresentação?"', ok:false, why:'Não revela quem decide nem o que importa para decidir.'},
            {t:'"Quem mais participa da decisão e o que é importante para vocês na hora de escolher?"', ok:true, why:'Conhecer quem decide e os critérios permite preparar uma proposta que responda a todos.'},
            {t:'"Quanto vocês faturam?"', ok:false, why:'Não ajuda a entender a decisão e pode parecer invasivo.'},
            {t:'"Você pode decidir sozinho, não pode?"', ok:false, why:'Pressiona e não revela a realidade.'}
          ]}
      ]},
    { id:'4.4', title:'Indicações, conteúdo e parcerias', min:11,
      body:[
        `<div class="card analogy"><h3>🌱 A horta que dá frutos depois</h3><p>Quem planta hoje não colhe amanhã, mas, se cuidar toda semana, terá colheita contínua. Indicações, conteúdo e parcerias são a <b>horta do seu negócio</b>: crescem devagar e depois trazem clientes com menos esforço.</p></div>`,
        `<div class="term"><b>Indicação</b> = quando um cliente satisfeito recomenda você. <b>Conteúdo útil</b> = posts, vídeos ou textos que ensinam algo ao seu público. <b>Parceria</b> = acordo com outro profissional que atende o mesmo cliente com outro serviço (contador, designer, agência). <b>Comissão de indicação</b> = valor pago a quem indica, combinado de forma transparente.</div>`,
        `<div class="card"><h3>Três motores de longo prazo</h3>
          <div class="tw"><table class="tbl"><tr><th>Motor</th><th>Como começar</th><th>Cuidado</th></tr>
          <tr><td>Indicações</td><td>Ao fim de cada projeto bem-sucedido, pedir: "Conhece alguém com um problema parecido?"</td><td>Só pedir depois de entregar bem</td></tr>
          <tr><td>Conteúdo</td><td>1 post por semana resolvendo uma dúvida real do nicho</td><td>Não prometer ganhos; não expor clientes</td></tr>
          <tr><td>Parcerias</td><td>Conversar com 2 profissionais que atendem o mesmo nicho</td><td>Combinar por escrito; ser transparente com o cliente sobre comissões</td></tr></table></div></div>`,
        `<div class="card"><h3>Ideias de conteúdo que ensinam (sem entregar o projeto todo)</h3>
          <ol class="golden"><li><span>"3 perguntas que toda clínica recebe no WhatsApp e como organizar as respostas."</span></li><li><span>"Antes e depois" de uma demonstração com dados fictícios.</span></li><li><span>Erros comuns ao usar IA com dados de clientes.</span></li><li><span>Bastidores: como você testa uma automação antes de entregar.</span></li></ol>
          <p>Constância vale mais que perfeição. Meça o que gera conversas, não só curtidas.</p>
          <p><b>Erros comuns:</b> postar só "contrate-me"; publicar prints de clientes sem autorização; parcerias com comissão escondida do cliente; desistir do conteúdo depois de 3 semanas.</p></div>`,
        `<div class="card"><h3>📍 Na prática</h3><p>Uma prestadora publicou, toda semana durante três meses, uma dica curta para donos de restaurante sobre como organizar pedidos pelo WhatsApp. No começo, quase ninguém comentou. Aos poucos, donos de restaurante passaram a mandar perguntas, e um contador que atende o mesmo público propôs uma parceria transparente de indicações, combinada por escrito.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que quem cuida da horta toda semana colhe mais depois.</div>`
      ],
      ch:[
        { who:'Lívia, 34 anos, terminou um projeto com sucesso', says:'O cliente adorou o resultado. Fico sem graça de pedir indicação.',
          q:'Qual é a melhor atitude?',
          opts:[
            {t:'Não pedir, para não parecer interesseira.', ok:false, why:'Clientes satisfeitos costumam indicar quando lembrados. Não pedir desperdiça a melhor fonte de clientes.'},
            {t:'Pedir de forma simples, depois da entrega bem-sucedida: "Conhece alguém com um problema parecido? Posso te mandar um texto curto para encaminhar."', ok:true, why:'Facilitar a indicação no momento de satisfação aumenta a chance de ela acontecer.'},
            {t:'Exigir 3 indicações como condição para dar suporte.', ok:false, why:'Condicionar o suporte é abusivo.'},
            {t:'Pedir indicação antes de começar o projeto.', ok:false, why:'Indicação vem depois de provar o valor.'}
          ]},
        { who:'Marcos, 31 anos, começou a postar', says:'Posto todo dia "Contrate meus serviços de IA! Preço especial!" e ninguém responde.',
          q:'Como melhorar o conteúdo?',
          opts:[
            {t:'Postar 3 vezes por dia a mesma coisa.', ok:false, why:'Mais anúncios repetidos não geram interesse.'},
            {t:'Publicar conteúdo que resolve dúvidas reais do nicho, com exemplos e demonstrações, e deixar a oferta como complemento.', ok:true, why:'Conteúdo útil atrai o público certo e mostra competência antes da venda.'},
            {t:'Prometer que quem contratar vai lucrar o dobro.', ok:false, why:'Promessa de ganho é enganosa.'},
            {t:'Parar de postar.', ok:false, why:'O problema é o tipo de conteúdo, não postar.'}
          ]},
        { who:'Wanda, 40 anos, quer uma parceria', says:'Um contador quer me indicar clientes em troca de 10% de cada projeto. Ele não vai contar aos clientes.',
          q:'Como estruturar essa parceria?',
          opts:[
            {t:'Aceitar sem combinar nada por escrito.', ok:false, why:'Sem registro, surgem conflitos sobre valores e prazos.'},
            {t:'Combinar por escrito as regras da comissão e ser transparente com o cliente sobre a existência da parceria.', ok:true, why:'Transparência com o cliente e regras claras mantêm a confiança de todos.'},
            {t:'Aumentar o preço em 10% escondido para pagar o contador.', ok:false, why:'Repasse escondido é desonesto com o cliente.'},
            {t:'Recusar qualquer parceria.', ok:false, why:'Parcerias podem ser ótimas quando transparentes.'}
          ]},
        { who:'Rafael, 27 anos, avalia o conteúdo', says:'Meus vídeos têm muitas curtidas de outros profissionais de IA, mas nenhum dono de clínica me procura.',
          q:'O que isso indica?',
          opts:[
            {t:'Que o conteúdo está ótimo, pelas curtidas.', ok:false, why:'Curtidas de colegas não indicam interesse de clientes.'},
            {t:'Que o conteúdo fala com colegas, não com o cliente; ajustar os temas e a linguagem para as dúvidas dos donos de clínica e medir conversas geradas.', ok:true, why:'O conteúdo deve falar a língua do cliente, e a métrica certa é conversa, não curtida.'},
            {t:'Que donos de clínica não usam redes sociais.', ok:false, why:'É uma conclusão apressada; o mais provável é que o conteúdo não fale com eles.'},
            {t:'Que precisa de mais curtidas.', ok:false, why:'Mais curtidas do público errado não ajudam.'}
          ]}
      ]},
    { id:'4.6', title:'Perfil profissional e presença local', min:18,
      body:[
        `<div class="card analogy"><h3>🪟 A vitrine antes da porta</h3><p>Antes de entrar numa loja, a gente olha a vitrine: está arrumada? Tem preço? Parece aberta? Com serviço é igual. Quem recebe a sua mensagem quase sempre <b>dá uma olhada no seu perfil antes de responder</b>. Se a vitrine estiver vazia ou confusa, a conversa nem começa.</p></div>`,
        `<div class="term"><b>Perfil profissional</b> = a página que mostra quem você é, para quem trabalha e o que resolve (no LinkedIn, no Instagram ou numa página simples). <b>Google Perfil da Empresa</b> = ficha gratuita do Google que aparece na Busca e no Maps; quem atende na casa do cliente ou on-line pode cadastrar uma área de atendimento sem mostrar o endereço de casa. <b>WhatsApp Business</b> = aplicativo gratuito com perfil comercial, catálogo, mensagem de saudação, mensagem de ausência, respostas rápidas e etiquetas. <b>Teste dos 30 segundos</b> = um desconhecido olha seu perfil por 30 segundos e consegue dizer o que você faz e para quem.</div>`,
        `<div class="card"><h3>Exemplo resolvido: Camila, de Juiz de Fora</h3><p>Camila, 30 anos, é MEI e organiza o atendimento automático de salões de beleza. Ela mandou 15 mensagens bem personalizadas e recebeu só 1 resposta. Uma dona de salão contou o motivo: "Fui ver seu perfil e não entendi o que você fazia". Veja o antes e o depois.</p></div>`,
        `<div class="flows"><div class="flow old"><b>Título antes</b><div class="node">"Apaixonada por tecnologia | IA | Inovação | Gratidão"</div></div><div class="flow new"><b>Título depois</b><div class="node">"Organizo o atendimento por WhatsApp de salões de beleza em Juiz de Fora: agendamento e respostas para as perguntas de sempre"</div></div></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Canal</th><th>Antes</th><th>Depois</th></tr>
          <tr><td>LinkedIn</td><td>Foto de festa, título genérico, seção Sobre vazia</td><td>Foto de rosto com fundo neutro, título com público e problema, Sobre em 4 frases, estudo de caso em Destaques</td></tr>
          <tr><td>Google Perfil da Empresa</td><td>Não existia</td><td>Ficha com categoria de serviço, área de atendimento (sem endereço de casa), horário e 3 imagens da demonstração</td></tr>
          <tr><td>WhatsApp Business</td><td>Número pessoal, foto do cachorro</td><td>Perfil comercial com descrição curta, catálogo com 2 pacotes (o que inclui e prazo), mensagem de ausência fora do horário</td></tr>
          <tr><td>Prova</td><td>Nenhuma</td><td>1 estudo de caso real com autorização e 1 demonstração identificada como demonstração</td></tr></table></div>`,
        `<div class="card"><h3>Os passos que ela seguiu</h3>
          <ol class="golden"><li><span>Escreveu a oferta numa frase: <b>para quem</b>, <b>qual problema</b> e <b>que mudança</b>, sem prometer faturamento.</span></li><li><span>Usou a <b>mesma frase</b> no LinkedIn, no WhatsApp Business e no Google, para a pessoa reconhecer você em qualquer canal.</span></li><li><span>Colocou no catálogo do WhatsApp os pacotes com o que está incluso e o prazo; preço só quando ela tinha certeza dele.</span></li><li><span>Pediu a 3 conhecidos que fizessem o teste dos 30 segundos e reescreveu o que eles não entenderam.</span></li><li><span>Conferiu tudo no celular, que é onde a maioria vai olhar.</span></li></ol>
          <p>Nas 15 mensagens seguintes, iguais às anteriores, ela recebeu 4 respostas. Não dá para garantir que será sempre assim, mas o perfil deixou de ser um obstáculo.</p></div>`,
        `<div class="why-chain"><b>Por que a mesma frase em todos os canais?</b> Porque a pessoa recebe a mensagem num lugar e confere em outro. Porque, se cada canal diz uma coisa, ela fica em dúvida sobre o que você faz. Porque, na dúvida, ninguém responde a um desconhecido.</div>`,
        `<div class="card"><h3>Erros comuns e como detectar</h3><ul><li><b>Título cheio de palavras da moda.</b> Sinal: o teste dos 30 segundos falha. Correção: público + problema + mudança, em linguagem do cliente.</li><li><b>Endereço de casa exposto no Google.</b> Sinal: a ficha mostra sua rua no mapa. Correção: configure área de atendimento e oculte o endereço.</li><li><b>Número pessoal misturado com o profissional.</b> Sinal: clientes mandando áudio às 23h e você sem saber quem é quem. Correção: WhatsApp Business com horário, mensagem de ausência e etiquetas.</li><li><b>Prints de clientes do cliente no perfil.</b> Sinal: aparecem nomes, rostos ou telefones. Correção: demonstrações com dados fictícios ou material autorizado.</li><li><b>Perfil abandonado.</b> Sinal: última publicação de um ano atrás. Correção: revisar o perfil uma vez por mês, em dia fixo.</li></ul></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (LinkedIn, cerca de 5 min)</h3><ol class="golden"><li><span>Escreva, com suas palavras, a frase da sua oferta: para quem, qual problema e que mudança.</span></li><li><span>Coloque essa frase no título do seu perfil.</span></li><li><span>Reescreva a seção Sobre em até 4 frases: o que você faz, para quem, como trabalha e como falar com você.</span></li><li><span>Adicione em Destaques o estudo de caso da lição 4.1 (real com autorização ou demonstração identificada).</span></li><li><span>Abra o perfil no celular e faça você mesmo o teste dos 30 segundos.</span></li></ol><p>🔒 Não publique telefone pessoal se não quiser receber ligações nele, nem prints com dados de clientes. Se usar uma IA para revisar o texto, cole só o seu texto, nunca dados de terceiros.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a gente olha a vitrine antes de entrar numa loja, e o que a sua "vitrine" na internet precisa mostrar.</div>`
      ],
      ch:[
        { who:'Fábio, 34 anos, faz automações para oficinas', says:'Meu título no LinkedIn é "Entusiasta de IA | Futurista | Disruptivo". Mando boas mensagens, mas quase ninguém responde.',
          q:'Qual é a mudança mais provável de ajudar?',
          opts:[
            {t:'Acrescentar mais palavras da moda para parecer mais atualizado.', ok:false, why:'Mais jargão deixa ainda menos claro o que ele faz.'},
            {t:'Pagar um plano premium para aparecer mais.', ok:false, why:'Aparecer mais com um perfil confuso não resolve; o problema é a mensagem.'},
            {t:'Trocar o título por uma frase com público, problema e mudança, como "Organizo orçamentos e agendamentos de oficinas mecânicas pelo WhatsApp".', ok:true, why:'Quem confere o perfil entende em segundos se aquilo serve para ele, e isso aumenta a chance de resposta.'},
            {t:'Parar de mandar mensagens até ter mais seguidores.', ok:false, why:'Seguidores não são pré-requisito; um perfil claro já ajuda as mensagens a funcionarem.'}
          ]},
        { who:'Sueli, 45 anos, atende pequenos negócios do bairro', says:'Trabalho de casa e vou até o cliente. Quero aparecer no Google Maps, mas não quero minha rua exposta para todo mundo.',
          q:'O que ela pode fazer?',
          opts:[
            {t:'Criar o Google Perfil da Empresa como negócio de área de atendimento, informando os bairros atendidos e ocultando o endereço.', ok:true, why:'A ficha permite atender uma região sem mostrar o endereço residencial, protegendo a segurança dela.'},
            {t:'Cadastrar o endereço de um shopping próximo.', ok:false, why:'Informação falsa engana o cliente e pode levar à suspensão da ficha.'},
            {t:'Desistir do Google, porque é obrigatório mostrar o endereço.', ok:false, why:'Não é obrigatório para quem atende na casa do cliente ou on-line.'},
            {t:'Mostrar o endereço e torcer para não ter problema.', ok:false, why:'Expor o endereço de casa sem necessidade é um risco evitável.'}
          ]},
        { who:'Otávio, 29 anos, usa o próprio WhatsApp para tudo', says:'Recebo mensagens de clientes de madrugada, misturadas com o grupo da família. Já esqueci de responder um orçamento.',
          q:'Qual é a melhor organização para começar, sem gastar?',
          opts:[
            {t:'Responder tudo na hora, a qualquer horário, para não perder cliente.', ok:false, why:'Disponibilidade total leva ao esgotamento e não organiza nada.'},
            {t:'Contratar um sistema pago de atendimento antes de ter clientes.', ok:false, why:'No começo, a ferramenta gratuita resolve; custo fixo cedo pesa no caixa.'},
            {t:'Pedir que os clientes liguem em vez de mandar mensagem.', ok:false, why:'Vai contra o hábito do cliente e não resolve a mistura de assuntos.'},
            {t:'Usar o WhatsApp Business com horário de atendimento, mensagem de ausência, etiquetas por etapa e respostas rápidas.', ok:true, why:'Separa o profissional do pessoal, avisa quando ele vai responder e ajuda a não esquecer orçamentos.'}
          ]},
        { who:'Bianca, 32 anos, montou o catálogo do WhatsApp', says:'No catálogo coloquei "Pacote IA Premium: resultados garantidos" e uma foto bonita de banco de imagens.',
          q:'Como deixar o catálogo honesto e útil?',
          opts:[
            {t:'Manter, porque "garantido" passa segurança.', ok:false, why:'Prometer resultado que depende de fatores fora do controle dela é enganoso.'},
            {t:'Descrever o que está incluso, o prazo e o que depende do cliente, com imagem de uma demonstração real e sem promessa de resultado.', ok:true, why:'O cliente entende o que vai receber, e a expectativa fica alinhada desde o primeiro contato.'},
            {t:'Tirar a descrição e deixar só a foto, para gerar curiosidade.', ok:false, why:'Sem descrição, o cliente não sabe o que está comprando.'},
            {t:'Copiar a descrição de um concorrente famoso.', ok:false, why:'Copiar texto alheio é desonesto e não descreve o serviço dela.'}
          ]}
      ]},
    { id:'4.7', title:'Funil e metas com números', min:18,
      body:[
        `<div class="card analogy"><h3>⛏️ A peneira do garimpeiro</h3><p>O garimpeiro joga muito cascalho na peneira e sobra pouco ouro. Com o tempo, ele aprende: "a cada 10 baldes, sai mais ou menos um grama". Sabendo disso, ele <b>calcula quantos baldes precisa peneirar</b> para chegar ao que quer. Conseguir clientes funciona parecido: muitos contatos, algumas conversas, poucas vendas.</p></div>`,
        `<div class="term"><b>Funil</b> = as etapas pelas quais um possível cliente passa: contato, conversa, proposta, fechamento. <b>Taxa de conversão</b> = quantos passaram para a etapa seguinte divididos por quantos estavam na etapa anterior, vezes 100. <b>Cálculo reverso</b> = partir da meta de fechamentos e voltar etapa por etapa até descobrir quantos contatos precisa fazer. <b>Meta de esforço</b> = o que depende de você (contatos, conversas). <b>Meta de resultado</b> = o que depende também do cliente (fechamentos).</div>`,
        `<div class="pipe"><div class="node ink">Contatos<small>60</small></div><div class="ar">➜</div><div class="node ink">Conversas<small>12 (20%)</small></div><div class="ar">➜</div><div class="node ink">Propostas<small>6 (50%)</small></div><div class="ar">➜</div><div class="node yel">Fechamentos<small>2 (33%)</small></div></div>`,
        `<div class="card"><h3>Exemplo resolvido: Lucas, de Recife</h3><p>Lucas, 27 anos, MEI, organiza o atendimento por WhatsApp de clínicas odontológicas. Ele anotou numa planilha tudo o que fez nos últimos 2 meses: <b>60 contatos</b> personalizados, <b>12 conversas</b> de diagnóstico, <b>6 propostas</b> e <b>2 fechamentos</b>. Agora quer <b>3 clientes por mês</b>.</p>
          <ol class="golden"><li><span><b>Calcule as taxas.</b> Contato para conversa: 12 ÷ 60 = 20%. Conversa para proposta: 6 ÷ 12 = 50%. Proposta para fechamento: 2 ÷ 6 = cerca de 33%.</span></li><li><span><b>Comece pela meta.</b> 3 fechamentos ÷ 0,33 = cerca de 9 propostas.</span></li><li><span><b>Volte uma etapa.</b> 9 propostas ÷ 0,50 = 18 conversas.</span></li><li><span><b>Volte mais uma.</b> 18 conversas ÷ 0,20 = 90 contatos no mês.</span></li><li><span><b>Transforme em rotina.</b> 90 contatos ÷ 4 semanas = cerca de 23 por semana, ou 5 por dia útil.</span></li></ol></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Etapa</th><th>Taxa atual</th><th>Para 3 clientes</th><th>Se melhorar</th></tr>
          <tr><td>Contatos</td><td>-</td><td>90 por mês</td><td>72 por mês</td></tr>
          <tr><td>Conversas</td><td>20%</td><td>18</td><td>18 (taxa sobe para 25%)</td></tr>
          <tr><td>Propostas</td><td>50%</td><td>9</td><td>9</td></tr>
          <tr><td>Fechamentos</td><td>33%</td><td>3</td><td>3</td></tr></table></div>`,
        `<div class="card"><h3>Onde mexer primeiro</h3><p>Se Lucas melhorar a mensagem e o perfil e a taxa de contato para conversa subir de 20% para 25%, ele precisa de 18 ÷ 0,25 = <b>72 contatos</b>, e não 90. Dezoito contatos a menos por mês, com a mesma meta. Por isso olhe a <b>etapa com a taxa mais baixa</b>: muitas conversas e poucas propostas pedem um diagnóstico melhor (lição 4.3); muitas propostas e poucos fechamentos pedem revisar preço, escopo e objeções (lição 4.8).</p>
          <p><b>Cuidado com poucos dados:</b> com 6 propostas, um único fechamento a mais muda a taxa de 33% para 50%. Trate os números como estimativa e recalcule todo mês. Se o ticket médio de Lucas for, por exemplo, R$ 1.500 por projeto, 3 clientes dariam cerca de R$ 4.500 de faturamento no mês, ainda antes de impostos e custos.</p></div>`,
        `<div class="why-chain"><b>Por que metas de esforço?</b> Porque o fechamento depende também do cliente. Porque o número de contatos e conversas depende só de você. Porque cumprindo o esforço com método, o resultado tende a aparecer, e quando não aparece a planilha mostra em qual etapa está o problema.</div>`,
        `<div class="card"><h3>Erros comuns e como detectar</h3><ul><li><b>Meta só de faturamento.</b> Sinal: você não sabe quantos contatos fazer amanhã. Correção: cálculo reverso até a meta diária de contatos.</li><li><b>Não registrar as etapas.</b> Sinal: não consegue calcular nenhuma taxa. Correção: planilha com data, empresa, etapa e próximo passo.</li><li><b>Tirar conclusão com 3 casos.</b> Sinal: a taxa muda muito de uma semana para outra. Correção: junte pelo menos alguns meses antes de mudar tudo.</li><li><b>Aumentar volume com spam.</b> Sinal: a taxa de resposta despenca e chegam bloqueios. Correção: melhorar a taxa da etapa fraca em vez de disparar mais.</li><li><b>Contar curtida como conversa.</b> Sinal: funil cheio e agenda vazia. Correção: só conta como conversa uma troca real sobre o problema do cliente.</li></ul></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (Napkin, cerca de 5 min)</h3><ol class="golden"><li><span>Escreva num texto curto os números do seu funil (reais ou estimados, dizendo que são estimativa).</span></li><li><span>Faça você mesmo o cálculo reverso para a sua meta de clientes do mês.</span></li><li><span>Cole o texto no Napkin e gere 2 opções de diagrama do funil.</span></li><li><span>Escolha a mais clara e confira se os números do desenho batem com as suas contas.</span></li><li><span>Marque no diagrama a etapa com a taxa mais baixa: é onde você vai trabalhar primeiro.</span></li></ol><p>🔒 Use só números totais. Não cole nomes de empresas, pessoas ou telefones da sua lista de prospecção.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos como o garimpeiro descobre quantos baldes de cascalho precisa peneirar para encontrar o ouro que quer.</div>`
      ],
      ch:[
        { who:'Helena, 31 anos, faz chatbots para lojas de roupa', says:'No último mês fiz 50 contatos, tive 10 conversas, mandei 5 propostas e fechei 1 projeto.',
          q:'Quais são as taxas de conversão de cada etapa?',
          opts:[
            {t:'Contato para conversa 10%, conversa para proposta 20%, proposta para fechamento 50%.', ok:false, why:'As contas estão trocadas: 10 ÷ 50 = 20%, 5 ÷ 10 = 50% e 1 ÷ 5 = 20%.'},
            {t:'Contato para conversa 20%, conversa para proposta 50%, proposta para fechamento 20%.', ok:true, why:'Cada taxa divide quem passou pela quantidade da etapa anterior: 10 ÷ 50, 5 ÷ 10 e 1 ÷ 5.'},
            {t:'Uma taxa só de 2%, porque 1 em 50 fechou.', ok:false, why:'Os 2% existem como taxa geral, mas não mostram em qual etapa está o problema.'},
            {t:'Não dá para calcular sem saber o faturamento.', ok:false, why:'As taxas usam só as quantidades de cada etapa.'}
          ]},
        { who:'Igor, 36 anos, quer 4 clientes por mês', says:'Minhas taxas são: contato para conversa 25%, conversa para proposta 50% e proposta para fechamento 50%.',
          q:'Quantos contatos por mês ele precisa fazer, pelo cálculo reverso?',
          opts:[
            {t:'16 contatos.', ok:false, why:'16 é o número de conversas, não de contatos.'},
            {t:'32 contatos.', ok:false, why:'Faltou a última etapa: 32 seria se a taxa de contato para conversa fosse 50%.'},
            {t:'100 contatos.', ok:false, why:'Superestima: as contas levam a 64.'},
            {t:'64 contatos: 4 ÷ 0,5 = 8 propostas; 8 ÷ 0,5 = 16 conversas; 16 ÷ 0,25 = 64 contatos.', ok:true, why:'O cálculo reverso volta da meta até o topo do funil, etapa por etapa.'}
          ]},
        { who:'Patrícia, 28 anos, analisa a planilha', says:'Tenho muitas conversas de diagnóstico, mas só 1 em cada 6 vira proposta. O resto das etapas está razoável.',
          q:'Onde ela deveria trabalhar primeiro?',
          opts:[
            {t:'Na conversa de diagnóstico: entender melhor a dor, quem decide e combinar um próximo passo com data.', ok:true, why:'A etapa mais fraca é conversa para proposta, e é aí que uma melhoria tem mais efeito.'},
            {t:'Dobrar o número de contatos.', ok:false, why:'Mais contatos chegariam ao mesmo gargalo; ela gastaria esforço sem atacar o problema.'},
            {t:'Baixar o preço da proposta.', ok:false, why:'O problema aparece antes da proposta existir; preço não explica a perda nessa etapa.'},
            {t:'Comprar uma lista de contatos para ter mais volume.', ok:false, why:'Lista comprada é ineficaz, levanta problemas com a LGPD e não resolve o gargalo.'}
          ]},
        { who:'Danilo, 25 anos, definiu a meta do mês', says:'Minha meta é faturar R$ 6.000. Vou ver no fim do mês se deu certo.',
          q:'Como transformar essa meta em algo que ele consiga acompanhar todo dia?',
          opts:[
            {t:'Manter a meta e ter mais força de vontade.', ok:false, why:'Sem números de esforço, ele só descobre o problema quando o mês acabou.'},
            {t:'Dividir R$ 6.000 pelo valor médio do projeto para achar os fechamentos, fazer o cálculo reverso com as taxas e chegar a uma meta semanal de contatos e conversas.', ok:true, why:'A meta de faturamento vira metas de esforço que ele controla e acompanha toda semana.'},
            {t:'Trocar a meta por "ter muitos seguidores".', ok:false, why:'Seguidores não pagam contas e não medem o funil de vendas.'},
            {t:'Aumentar o preço até bater a meta com 1 cliente.', ok:false, why:'Preço sem relação com o valor entregue afasta clientes e não organiza o trabalho.'}
          ]}
      ]},
    { id:'4.8', title:'Objeções e follow-up sem ser chato', min:18,
      body:[
        `<div class="card analogy"><h3>👟 "Está apertando um pouco"</h3><p>Na loja de sapatos, quando o cliente diz "está apertando", o bom vendedor não discute nem dá desconto. Ele pergunta <b>onde aperta</b> e traz outro número ou outro modelo. Uma objeção quase sempre é uma <b>pergunta disfarçada</b>: o cliente está dizendo o que ainda falta para ele se sentir seguro.</p></div>`,
        `<div class="term"><b>Objeção</b> = dúvida ou resistência do cliente antes de decidir. <b>Objeção real</b> = um obstáculo de verdade (dinheiro, momento, confiança). <b>Desculpa educada</b> = jeito gentil de dizer "não" sem explicar. <b>Follow-up</b> = mensagem de acompanhamento depois da proposta. <b>Cadência</b> = quantos follow-ups e com que intervalo. <b>Mensagem de porta aberta</b> = último contato, que encerra sem pressão e deixa a pessoa à vontade para voltar.</div>`,
        `<div class="card"><h3>Exemplo resolvido: Tiago, de Goiânia</h3><p>Tiago, 33 anos, MEI, propôs a uma pet shop organizar o atendimento por WhatsApp por R$ 1.600 (valor de exemplo). A dona, Rosângela, respondeu: "Tá caro". Veja duas reações.</p></div>`,
        `<div class="flows"><div class="flow old"><b>Reação que derruba o preço</b><div class="node">"Faço por R$ 1.000, então!" Ela aceitou, pediu mais ajustes no meio do projeto e Tiago trabalhou o dobro por menos.</div></div><div class="flow new"><b>Reação que entende</b><div class="node">"Entendo. Caro comparado com o quê? É o valor total ou o momento do caixa?" Era o caixa. Tiago ofereceu duas opções: o projeto completo em 2 parcelas por PIX, ou uma versão menor (só agendamento) por R$ 900. Ela escolheu a versão menor e depois contratou o resto.</div></div></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Objeção</th><th>O que pode estar por trás</th><th>Pergunta para entender</th><th>Resposta possível</th></tr>
          <tr><td>"Tá caro"</td><td>Caixa apertado, valor pouco claro ou comparação com algo diferente</td><td>"Caro comparado com o quê?"</td><td>Reduzir o escopo mantendo o preço por entrega, parcelar ou mostrar o custo do problema hoje</td></tr>
          <tr><td>"Vou pensar"</td><td>Dúvida não dita, outra pessoa decide ou desinteresse educado</td><td>"Claro. Ficou alguma dúvida sobre prazo, valor ou como funciona?"</td><td>Responder a dúvida e combinar uma data para a conversa seguinte</td></tr>
          <tr><td>"Meu sobrinho faz"</td><td>Custo zero percebido ou confiança na família</td><td>"Que ótimo. O que ele já montou para vocês?"</td><td>Mostrar o que você inclui (testes, suporte, documentação) sem desmerecer o sobrinho; às vezes o cliente certo não é este</td></tr>
          <tr><td>"Agora não"</td><td>Época de muito movimento ou outra prioridade</td><td>"Qual seria um mês melhor para retomar?"</td><td>Anotar a data na planilha e voltar só então</td></tr></table></div>`,
        `<div class="card"><h3>Cadência de follow-up depois da proposta</h3><p>Para quem já conversou com você e recebeu proposta. No primeiro contato frio, continue com no máximo 1 ou 2 seguimentos (lição 4.2).</p>
          <ol class="golden"><li><span><b>Dia 0:</b> envie a proposta e combine quando vão conversar sobre ela.</span></li><li><span><b>Cerca de 3 dias depois:</b> mensagem curta com algo útil, como a resposta a uma dúvida que surgiu na conversa.</span></li><li><span><b>Cerca de 7 a 10 dias:</b> pergunta direta e fácil de responder: "Faz sentido seguir, ajustar a proposta ou deixar para outro momento?"</span></li><li><span><b>Cerca de 3 semanas:</b> mensagem de porta aberta. Depois disso, pare e registre na planilha.</span></li></ol>
          <p>Anote cada follow-up na planilha com a data do próximo contato. Assim você não esquece ninguém e não manda duas vezes a mesma coisa.</p></div>`,
        `<div class="why-chain"><b>Por que não dar desconto logo?</b> Porque desconto na primeira objeção ensina que o preço não era sério. Porque o cliente pode estar com outra dúvida, que o desconto não resolve. Porque reduzir escopo mantém o valor do seu trabalho e ainda cabe no bolso do cliente.</div>`,
        `<div class="card"><h3>Erros comuns e como detectar</h3><ul><li><b>Discutir com o cliente.</b> Sinal: você responde "não está caro!" antes de perguntar. Correção: pergunte o que está por trás da objeção.</li><li><b>Desconto automático.</b> Sinal: seu preço médio cai mês a mês. Correção: troque desconto por versão menor ou parcelamento.</li><li><b>Desmerecer o concorrente ou o sobrinho.</b> Sinal: o cliente fica na defensiva. Correção: fale do que você inclui, não do que o outro deixa de fazer.</li><li><b>Follow-up sem fim.</b> Sinal: mensagens semanais há dois meses sem resposta. Correção: cadência com fim e mensagem de porta aberta.</li><li><b>"Vou pensar" sem data.</b> Sinal: a proposta some. Correção: combine sempre a próxima conversa.</li></ul></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (Canva, cerca de 5 min)</h3><ol class="golden"><li><span>Liste as 3 objeções que você mais ouve ou mais teme ouvir.</span></li><li><span>Para cada uma, escreva com suas palavras uma pergunta para entender e uma resposta honesta.</span></li><li><span>No Canva, monte uma página simples de "Perguntas frequentes da proposta": como funciona, prazo, o que está incluso e o que não está.</span></li><li><span>Confira se nenhuma resposta promete resultado garantido.</span></li><li><span>Exporte em PDF para anexar às próximas propostas.</span></li></ol><p>🔒 Não use nomes, logos ou valores de clientes reais na página sem autorização por escrito. Se pedir ajuda a uma IA, descreva situações genéricas.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos o que o vendedor de sapatos faz quando o cliente diz que está apertando, e por que isso é melhor do que discutir.</div>`
      ],
      ch:[
        { who:'Roberta, 38 anos, dona de uma papelaria', says:'Gostei da proposta, mas R$ 1.200 agora não cabe. Tá caro.',
          q:'Qual é a melhor resposta do prestador?',
          opts:[
            {t:'"Faço por R$ 600, só para você."', ok:false, why:'Cortar o preço pela metade sem mudar o escopo desvaloriza o trabalho e não descobre o real motivo.'},
            {t:'"Caro comparado com o quê? É o valor total ou o momento do caixa?" e, conforme a resposta, oferecer parcelamento ou uma versão menor.', ok:true, why:'Entender a objeção permite uma saída que cabe no bolso do cliente sem desvalorizar o serviço.'},
            {t:'"Não está caro, você é que não entende o valor da IA."', ok:false, why:'Discutir e desmerecer o cliente encerra a conversa.'},
            {t:'Agradecer e encerrar sem perguntar nada.', ok:false, why:'Desiste cedo demais; talvez houvesse uma solução simples.'}
          ]},
        { who:'Wagner, 42 anos, dono de uma auto elétrica', says:'Não preciso, não. Meu sobrinho mexe com computador e faz isso para mim.',
          q:'Qual é a postura mais adequada?',
          opts:[
            {t:'Dizer que sobrinho não é profissional e vai fazer errado.', ok:false, why:'Atacar a família do cliente gera antipatia e fecha a porta.'},
            {t:'Insistir mostrando todos os recursos técnicos que o sobrinho não conhece.', ok:false, why:'Insistência técnica soa como desrespeito e não responde à preocupação do cliente.'},
            {t:'Oferecer fazer de graça para provar que é melhor.', ok:false, why:'Trabalho de graça para vencer a objeção desvaloriza o serviço e raramente vira cliente pagante.'},
            {t:'Perguntar com interesse o que o sobrinho já montou, explicar com calma o que o serviço inclui (testes, suporte, documentação) e deixar a porta aberta.', ok:true, why:'Respeita a escolha do cliente, mostra a diferença sem atacar ninguém e mantém a boa relação para o futuro.'}
          ]},
        { who:'Aline, 30 anos, mandou uma proposta há 5 dias', says:'O cliente disse "vou pensar" e não falou mais nada. Estou pensando em mandar mensagem todo dia até ele responder.',
          q:'Qual é a cadência mais adequada?',
          opts:[
            {t:'Mensagem diária até ele decidir.', ok:false, why:'Insistência diária irrita e prejudica a reputação.'},
            {t:'Não mandar mais nada, porque "vou pensar" é sempre não.', ok:false, why:'Às vezes é uma dúvida não dita; um follow-up respeitoso pode resolver.'},
            {t:'Um follow-up útil agora, uma pergunta direta cerca de uma semana depois e uma mensagem de porta aberta depois de algumas semanas, registrando tudo na planilha.', ok:true, why:'Cadência curta, com fim definido, ajuda a decisão sem pressionar.'},
            {t:'Ligar várias vezes no mesmo dia para mostrar interesse.', ok:false, why:'Pressão excessiva afasta o cliente.'}
          ]},
        { who:'Edson, 35 anos, revisa as últimas propostas', says:'Toda vez que ouço "tá caro", dou 30% de desconto. Fecho bastante, mas trabalho muito e sobra pouco dinheiro.',
          q:'Qual é o diagnóstico correto?',
          opts:[
            {t:'O desconto automático está corroendo a margem; ele deve perguntar o motivo da objeção e trocar desconto por escopo menor ou parcelamento.', ok:true, why:'Mantém o valor por entrega e resolve o problema real do cliente sem sacrificar o próprio sustento.'},
            {t:'Está tudo certo, porque fechar muito é o que importa.', ok:false, why:'Fechar muitos projetos com pouca margem leva ao cansaço e ao prejuízo.'},
            {t:'Ele deveria aumentar o desconto para 50% e fechar ainda mais.', ok:false, why:'Aprofunda o problema da margem.'},
            {t:'Aumentar o preço em 30% escondido para compensar o desconto.', ok:false, why:'Preço inflado para dar desconto falso é desonesto com o cliente.'}
          ]}
      ]},
    { id:'4.9', title:'Primeiros clientes e depoimentos autorizados', min:18,
      body:[
        `<div class="card analogy"><h3>🍲 O restaurante que acabou de abrir</h3><p>Restaurante novo não tem avaliações, e muita gente evita lugar sem avaliação. Um dono esperto convida alguns vizinhos para provar, pede opinião sincera, ajusta o tempero e, a quem gostou, pede licença para contar o que disse. <b>Os primeiros clientes constroem a prova que vai convencer os próximos.</b></p></div>`,
        `<div class="term"><b>Cliente piloto</b> = um dos primeiros projetos, com escopo pequeno, prazo curto e condição combinada por escrito. <b>Linha de base</b> = como a situação estava antes, medida no começo, para comparar depois. <b>Depoimento</b> = relato do cliente, com as palavras dele, sobre a experiência. <b>Autorização de uso</b> = permissão por escrito dizendo o que você pode mostrar (frase, nome, foto, logo) e onde. A pessoa pode pedir para retirar depois, e você retira.</div>`,
        `<div class="card"><h3>Exemplo resolvido: Renata, de Curitiba</h3><p>Renata, 29 anos, acabou de se formalizar como MEI. Ela organiza respostas automáticas e agendamento por WhatsApp. Não tinha nenhum cliente real, só demonstrações. Veja como chegou aos primeiros três.</p>
          <ol class="golden"><li><span><b>Escolheu na própria rede</b> 3 negócios parecidos: a pet shop onde leva o cachorro, a clínica de uma ex-colega e o salão da prima. Com a prima, deixou claro desde o início que era parente.</span></li><li><span><b>Propôs um piloto por escrito:</b> só respostas para as 10 perguntas mais comuns, 2 semanas, preço de piloto de R$ 500 com o valor normal (R$ 900, valor de exemplo) informado na proposta.</span></li><li><span><b>Mediu a linha de base</b> com o cliente: quantas mensagens repetidas por dia e quanto tempo elas tomavam.</span></li><li><span><b>Entregou, emitiu a nota fiscal de serviço</b> (no MEI, pelo emissor nacional da NFS-e) e mediu de novo depois de 3 semanas.</span></li><li><span><b>Pediu feedback antes de pedir depoimento:</b> o que melhorou, o que ainda incomoda, o que diria a um amigo.</span></li><li><span><b>Pediu autorização por escrito</b> para usar a frase, o primeiro nome e o nome do negócio, só em quem ficou satisfeito, sem condicionar nada a isso.</span></li></ol></div>`,
        `<div class="code">Oi, Marta! Que bom que o atendimento melhorou. Posso usar esta frase sua
no meu portfólio e no LinkedIn?
"Paramos de responder as mesmas perguntas o dia inteiro."
Marta, Pet Shop Amigo Fiel, Curitiba
Não vou mostrar telefone, conversas nem dados dos seus clientes.
Se preferir só o primeiro nome, ou mudar de ideia depois, é só me avisar.</div>`,
        `<div class="flows"><div class="flow old"><b>Depoimento fraco</b><div class="node">"Excelente profissional, super recomendo!" (genérico, não diz o que mudou)</div></div><div class="flow new"><b>Depoimento útil</b><div class="node">"Antes, a recepção passava a manhã respondendo horário e preço. Agora isso sai automático e a gente cuida de quem está na loja." (situação, mudança, palavras do cliente)</div></div></div>`,
        `<div class="tw"><table class="tbl"><tr><th>Cliente piloto</th><th>Linha de base</th><th>Depois de 3 semanas</th><th>Uso autorizado</th></tr>
          <tr><td>Pet shop</td><td>Cerca de 40 mensagens repetidas por dia</td><td>Cerca de 12 precisando de resposta humana (medido pela dona)</td><td>Frase, primeiro nome e nome da loja</td></tr>
          <tr><td>Clínica</td><td>Recepção dizia "a manhã toda no WhatsApp"</td><td>"Sobra tempo para ligar confirmando consultas"</td><td>Só a frase, sem nome</td></tr>
          <tr><td>Salão da prima</td><td>Agendamentos anotados em papel</td><td>Agendamento pelo WhatsApp, ainda em ajuste</td><td>Não usado como depoimento (parente)</td></tr></table></div>`,
        `<div class="why-chain"><b>Por que pedir autorização por escrito?</b> Porque o depoimento usa o nome e as palavras de outra pessoa. Porque sem registro, se houver dúvida depois, é a sua palavra contra a dela. Porque uma mensagem clara, guardada, protege o cliente, a sua reputação e respeita a LGPD.</div>`,
        `<div class="card"><h3>Erros comuns e como detectar</h3><ul><li><b>Trabalhar de graça sem combinar nada.</b> Sinal: o "piloto" vira pedidos sem fim. Correção: escopo, prazo e condição por escrito, mesmo com preço reduzido.</li><li><b>Editar o depoimento para dizer mais.</b> Sinal: a frase não parece a fala do cliente. Correção: use as palavras dele; se quiser encurtar, mostre a versão final e peça o ok.</li><li><b>Depoimento como condição de desconto.</b> Sinal: só existem elogios. Correção: peça depoimento depois, só a quem ficou satisfeito, sem troca.</li><li><b>Parente ou amigo apresentado como cliente qualquer.</b> Sinal: quem conhece vocês descobre e a confiança cai. Correção: deixe a relação clara ou não use como depoimento.</li><li><b>Mostrar dados dos clientes do cliente.</b> Sinal: prints com nomes e telefones. Correção: só a frase autorizada e imagens sem dados pessoais.</li></ul></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (Canva, cerca de 5 min)</h3><ol class="golden"><li><span>Escreva um depoimento fictício, com situação antes e mudança depois, e identifique como exemplo.</span></li><li><span>No Canva, monte um card simples com a frase, o primeiro nome e o tipo de negócio.</span></li><li><span>Escreva com suas palavras a mensagem de pedido de autorização que você mandaria a um cliente real.</span></li><li><span>Confira o card: nenhum telefone, conversa ou dado de cliente aparece.</span></li><li><span>Salve o modelo para trocar pela frase real quando tiver autorização.</span></li></ol><p>🔒 Não use nome, foto ou logo de cliente real antes da autorização por escrito, e não envie dados de clientes para ferramentas de IA.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o restaurante novo convida os vizinhos para provar, e por que ele pede licença antes de contar o que eles disseram.</div>`
      ],
      ch:[
        { who:'Gustavo, 26 anos, ainda sem clientes', says:'Vou oferecer meu serviço de graça para qualquer empresa que aceitar, sem combinar nada, só para ganhar experiência.',
          q:'Qual é a forma mais segura de conseguir os primeiros clientes?',
          opts:[
            {t:'Fazer de graça para quem aparecer, quanto mais melhor.', ok:false, why:'Sem escopo nem prazo, o trabalho vira pedidos sem fim e não gera prova útil.'},
            {t:'Esperar ter 5 anos de experiência antes de cobrar.', ok:false, why:'Adiar indefinidamente não gera experiência nem prova.'},
            {t:'Oferecer um piloto para poucos negócios da rede, com escopo pequeno, prazo curto, condição por escrito e linha de base medida no início.', ok:true, why:'Piloto bem combinado gera aprendizado, resultado mensurável e, se o cliente ficar satisfeito, um depoimento honesto.'},
            {t:'Dizer que já atendeu várias empresas para parecer experiente.', ok:false, why:'Mentir sobre experiência é desonesto e destrói a confiança quando descoberto.'}
          ]},
        { who:'Larissa, 33 anos, recebeu um elogio por áudio', says:'A cliente disse num áudio que amou. Vou transcrever, melhorar um pouco o texto e publicar com o nome e a foto dela.',
          q:'O que ela precisa fazer antes de publicar?',
          opts:[
            {t:'Mandar a versão final do texto e pedir autorização por escrito para usar a frase, o nome e a foto, dizendo onde vai aparecer.', ok:true, why:'A cliente aprova as palavras e decide o que mostrar, e a autorização fica registrada.'},
            {t:'Nada, o elogio no áudio já vale como autorização.', ok:false, why:'Elogio não é permissão para publicar nome, foto e texto editado.'},
            {t:'Publicar sem a foto, que aí não precisa pedir.', ok:false, why:'O nome e o texto editado também precisam de autorização.'},
            {t:'Publicar e apagar se a cliente reclamar.', ok:false, why:'Pedir desculpa depois não substitui a permissão antes.'}
          ]},
        { who:'Caio, 30 anos, terminou o primeiro piloto', says:'Quero colocar no portfólio que o cliente economizou muito tempo, mas não medi nada antes de começar.',
          q:'Como ele deve agir agora e no próximo projeto?',
          opts:[
            {t:'Estimar "economia de 30 horas por mês" e publicar.', ok:false, why:'Número não medido apresentado como resultado é enganoso.'},
            {t:'Agora, usar as palavras do cliente sobre o que mudou, com autorização; no próximo, medir a linha de base no início junto com o cliente.', ok:true, why:'Ele não inventa números hoje e passa a ter dados confiáveis nos próximos estudos de caso.'},
            {t:'Não falar do projeto em lugar nenhum.', ok:false, why:'É possível mostrar com honestidade, usando o relato autorizado do cliente.'},
            {t:'Pedir ao cliente que confirme um número qualquer.', ok:false, why:'Pedir para confirmar um número inventado continua sendo enganoso.'}
          ]},
        { who:'Mirela, 27 anos, quer depoimentos rápido', says:'Pensei em dar 20% de desconto para quem deixar um depoimento cinco estrelas.',
          q:'Qual é o problema dessa ideia?',
          opts:[
            {t:'Nenhum, é uma troca justa.', ok:false, why:'Pagar por elogio distorce a prova social e engana quem lê.'},
            {t:'O desconto deveria ser maior para funcionar.', ok:false, why:'O problema não é o tamanho do desconto, e sim condicionar o depoimento positivo.'},
            {t:'Só é problema se alguém descobrir.', ok:false, why:'A honestidade não depende de ser descoberto.'},
            {t:'Condicionar desconto a elogio torna o depoimento comprado; o certo é pedir opinião sincera depois da entrega e usar só o que for autorizado.', ok:true, why:'Depoimento espontâneo e autorizado é o que realmente transmite confiança ao próximo cliente.'}
          ]}
      ]},
    { id:'4.5', title:'Projeto: plano de clientes para 30 dias', min:50,
      body:[
        `<div class="card"><p>Monte um plano realista para conseguir as primeiras conversas com clientes no próximo mês. O objetivo é criar hábito e aprendizado, não prometer número de vendas. Use dados públicos e da sua rede, sem comprar listas.</p></div>`
      ],
      projeto:{
        entrega:'Um plano de 30 dias para conseguir clientes com honestidade: portfólio, lista de contatos, mensagens, roteiro de diagnóstico e ações de indicação e conteúdo.',
        passos:[
          'Escreva 1 estudo de caso (real com autorização ou demonstração identificada como tal).',
          'Liste 20 possíveis clientes do seu nicho vindos da sua rede ou de canais comerciais públicos, numa planilha com próximo passo.',
          'Escreva a mensagem de primeiro contato e a de seguimento, curtas, personalizáveis e com saída fácil.',
          'Monte seu roteiro de conversa de diagnóstico de 30 minutos.',
          'Planeje 4 conteúdos úteis (1 por semana) e 2 possíveis parcerias.',
          'Defina as metas de esforço da semana (contatos, conversas, conteúdos) e como vai registrar o que aprendeu.'
        ],
        checklist:[
          'Nenhum contato vem de lista comprada e todo "não" será respeitado.',
          'As mensagens são curtas, personalizadas e sem promessa de ganho.',
          'O roteiro de diagnóstico prioriza ouvir e termina com próximo passo.',
          'O estudo de caso é honesto e não expõe dados de pessoas.',
          'As metas são de esforço (o que depende de mim), não de faturamento.'
        ],
        minimo:500
      }}
  ]},
  { id:5, icon:'📊', title:'Números e sustentabilidade', sub:'Cuidar do dinheiro, medir e reduzir riscos', lessons:[
    { id:'5.1', title:'Fluxo de caixa, reserva e pró-labore', min:11,
      body:[
        `<div class="card analogy"><h3>🪣 O balde com torneira</h3><p>Imagine um balde: a água entra pela torneira (pagamentos dos clientes) e sai por furos (contas, ferramentas, impostos, seu salário). Se você só olha a torneira, não percebe que o balde está esvaziando. <b>Fluxo de caixa é olhar a entrada e a saída juntas.</b></p></div>`,
        `<div class="term"><b>Fluxo de caixa</b> = registro de todo dinheiro que entra e sai, com datas. <b>Pró-labore</b> = o valor fixo que você tira do negócio para viver, como um salário. <b>Reserva</b> = dinheiro guardado para meses fracos e imprevistos. <b>Custo fixo</b> = gasto que existe todo mês, com ou sem cliente. <b>Custo variável</b> = gasto que depende de cada projeto.</div>`,
        `<div class="card"><h3>Planilha mínima (exemplo com números fictícios)</h3>
          <div class="tw"><table class="tbl"><tr><th>Data</th><th>Descrição</th><th>Entrada</th><th>Saída</th><th>Saldo</th></tr>
          <tr><td>02</td><td>Sinal do projeto da clínica</td><td>R$ 1.000</td><td></td><td>R$ 1.000</td></tr>
          <tr><td>05</td><td>Ferramentas do mês</td><td></td><td>R$ 150</td><td>R$ 850</td></tr>
          <tr><td>10</td><td>Imposto do mês</td><td></td><td>R$ 80</td><td>R$ 770</td></tr>
          <tr><td>20</td><td>Mensalidade de manutenção</td><td>R$ 300</td><td></td><td>R$ 1.070</td></tr>
          <tr><td>30</td><td>Pró-labore</td><td></td><td>R$ 700</td><td>R$ 370</td></tr></table></div></div>`,
        `<div class="card"><h3>Regras simples para não se apertar</h3>
          <ol class="golden"><li><span>Conta separada para o trabalho.</span></li><li><span>Defina um <b>pró-labore fixo</b> e não tire dinheiro "quando precisa".</span></li><li><span>Separe a parte dos <b>impostos</b> assim que receber.</span></li><li><span>Construa uma <b>reserva</b> de alguns meses de custos fixos e pró-labore, aos poucos.</span></li><li><span>Revise a planilha <b>toda semana</b> e olhe os próximos 60 dias: quanto vai entrar e sair.</span></li></ol>
          <p>Renda de serviço costuma oscilar: há meses bons e fracos. A reserva existe para isso. Para dúvidas sobre impostos e formalização, consulte um contador.</p>
          <p><b>Erros comuns:</b> gastar o sinal inteiro antes de entregar o projeto; esquecer impostos; acumular assinaturas de ferramentas que não usa.</p></div>`,
        `<div class="card"><h3>📍 Na prática</h3><p>Um prestador passou a separar 20% de cada pagamento numa conta de reserva. Quando teve dois meses sem projeto novo, manteve o pró-labore sem dívidas.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que é preciso olhar a torneira e os furos do balde ao mesmo tempo.</div>`
      ],
      ch:[
        { who:'Ana, 29 anos, teve um mês ótimo', says:'Recebi 3 projetos de uma vez este mês e gastei quase tudo. No mês seguinte não entrou nada e fiquei no aperto.',
          q:'O que teria evitado o aperto?',
          opts:[
            {t:'Trabalhar mais no mês seguinte.', ok:false, why:'Nem sempre há clientes disponíveis; o problema foi gastar tudo.'},
            {t:'Pró-labore fixo, separar impostos ao receber e guardar o excedente como reserva para meses fracos.', ok:true, why:'Renda de serviço oscila; pró-labore fixo e reserva suavizam os altos e baixos.'},
            {t:'Cobrar mais caro só nos meses fracos.', ok:false, why:'Preço não deve depender do seu caixa.'},
            {t:'Pegar empréstimo sempre que faltar.', ok:false, why:'Endividar-se para cobrir meses fracos é arriscado.'}
          ]},
        { who:'Gilson, 35 anos, olha só as entradas', says:'Entrou R$ 5.000 no mês, então estou ótimo.',
          q:'O que falta para saber se está bem?',
          opts:[
            {t:'Nada, R$ 5.000 é um bom valor.', ok:false, why:'Sem as saídas, não dá para saber o que sobra.'},
            {t:'Registrar as saídas (ferramentas, impostos, custos, pró-labore) e ver o saldo e os próximos 60 dias.', ok:true, why:'Só entrada e saída juntas mostram a saúde do negócio.'},
            {t:'Comparar com o faturamento de colegas.', ok:false, why:'Os custos e a realidade deles são diferentes.'},
            {t:'Esperar o fim do ano para ver.', ok:false, why:'Problemas descobertos tarde são mais difíceis de corrigir.'}
          ]},
        { who:'Lúcia, 32 anos, assina várias ferramentas', says:'Assino 9 ferramentas de IA e design. Uso de verdade umas 3.',
          q:'Qual é a melhor decisão?',
          opts:[
            {t:'Manter todas, vai que precisa.', ok:false, why:'Custos fixos desnecessários pesam todo mês.'},
            {t:'Revisar as assinaturas, cancelar as que não usa e anotar as que ficam como custo fixo na planilha.', ok:true, why:'Cortar o que não usa melhora o caixa sem prejudicar o trabalho.'},
            {t:'Assinar mais ferramentas para ser mais produtiva.', ok:false, why:'Mais ferramentas sem uso só aumentam o custo.'},
            {t:'Repassar o custo de todas para cada cliente.', ok:false, why:'O cliente não deve pagar por ferramentas que não são usadas no projeto dele.'}
          ]},
        { who:'Paulo, 30 anos, recebeu um sinal', says:'Recebi R$ 2.000 de sinal de um projeto que entrego em 30 dias. Vou usar para trocar o celular.',
          q:'Qual é o risco?',
          opts:[
            {t:'Nenhum, o dinheiro já é dele.', ok:false, why:'O sinal está ligado a um trabalho ainda não entregue e a custos e impostos que virão.'},
            {t:'Se o projeto tiver problemas ou custos, ou se houver devolução, ele não terá dinheiro; o ideal é separar impostos e custos do projeto e só usar o que sobra conforme o pró-labore.', ok:true, why:'Tratar o sinal com cuidado evita aperto e problemas se algo der errado.'},
            {t:'O risco é só o celular quebrar.', ok:false, why:'O risco é de caixa e de compromisso com o cliente.'},
            {t:'Nenhum, desde que entregue no prazo.', ok:false, why:'Ainda há impostos e custos a pagar com esse dinheiro.'}
          ]}
      ]},
    { id:'5.2', title:'Métricas do negócio de serviços', min:11,
      body:[
        `<div class="card analogy"><h3>⚖️ A balança de quem treina</h3><p>Quem começa a treinar e só se olha no espelho não sabe se está progredindo. Quem anota peso, medidas e cargas sabe o que funciona e o que ajustar. <b>Seu negócio também precisa de poucas medidas</b>, olhadas com regularidade.</p></div>`,
        `<div class="term"><b>Taxa de conversão</b> = de cada 10 propostas, quantas viram projeto. <b>Ticket médio</b> = valor médio de cada projeto. <b>Receita recorrente</b> = quanto entra todo mês com mensalidades. <b>Horas reais por projeto</b> = tempo de fato gasto, comparado ao estimado. <b>Cancelamento</b> = clientes de mensalidade que saíram no período.</div>`,
        `<div class="card"><h3>O painel do mês (exemplo fictício)</h3>
          <div class="tw"><table class="tbl"><tr><th>Indicador</th><th>Valor</th><th>O que pode indicar</th></tr>
          <tr><td>Contatos feitos</td><td>40</td><td>Esforço de prospecção</td></tr>
          <tr><td>Conversas de diagnóstico</td><td>8</td><td>Qualidade das mensagens</td></tr>
          <tr><td>Propostas enviadas</td><td>5</td><td>Encaixe da oferta</td></tr>
          <tr><td>Projetos fechados</td><td>2 (conversão de 40%)</td><td>Clareza da proposta e preço</td></tr>
          <tr><td>Horas reais / estimadas</td><td>30 / 20</td><td>Estimativa otimista: rever preço ou escopo</td></tr>
          <tr><td>Receita recorrente</td><td>R$ 600</td><td>Base previsível do mês</td></tr></table></div></div>`,
        `<div class="card"><h3>Como usar os números</h3>
          <ol class="golden"><li><span>Escolha <b>5 a 6 indicadores</b>, não 30.</span></li><li><span>Anote <b>toda semana</b>, em 15 minutos.</span></li><li><span>Procure o <b>gargalo</b>: muitos contatos e poucas conversas? Muitas propostas e poucos fechamentos?</span></li><li><span>Mude <b>uma coisa por vez</b> e observe o efeito.</span></li><li><span>Compare as <b>horas reais</b> com as estimadas: é aí que o lucro some sem você perceber.</span></li></ol>
          <p>Os números servem para decidir, não para se comparar com pessoas na internet, que costumam mostrar só os melhores meses.</p>
          <p><b>Erros comuns:</b> medir só o faturamento; não registrar horas; mudar tudo de uma vez e não saber o que funcionou.</p></div>`,
        `<div class="card"><h3>📍 Na prática</h3><p>Ao anotar as horas por quatro semanas, uma prestadora viu que gastava o dobro do previsto nas reuniões de ajuste. Limitou as rodadas de revisão na proposta e o tempo por projeto caiu.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que anotar o treino ajuda mais do que só se olhar no espelho.</div>`
      ],
      ch:[
        { who:'Vera, 33 anos, analisa o mês', says:'Fiz 60 contatos, consegui 12 conversas e mandei 10 propostas. Nenhuma fechou.',
          q:'Onde está o gargalo provável?',
          opts:[
            {t:'Na prospecção: precisa de mais contatos.', ok:false, why:'Os contatos geraram conversas e propostas; o problema aparece depois.'},
            {t:'Na proposta ou no preço: revisar clareza, escopo, preço e próximos passos, e perguntar aos clientes por que não fecharam.', ok:true, why:'Muitas propostas sem fechamento apontam para a etapa da proposta.'},
            {t:'Nas redes sociais: precisa postar mais.', ok:false, why:'Os números não indicam falta de alcance.'},
            {t:'Não há gargalo, é azar.', ok:false, why:'Dez propostas sem fechamento é um padrão a investigar.'}
          ]},
        { who:'Nilton, 38 anos, compara horas', says:'Estimo 20 horas por projeto, mas sempre gasto uns 35. Pelo menos os clientes estão felizes.',
          q:'O que esse número indica?',
          opts:[
            {t:'Nada, cliente feliz é o que importa.', ok:false, why:'Se gasta quase o dobro do estimado, está ganhando bem menos por hora do que planejou.'},
            {t:'A estimativa está otimista: ele deve rever preço, escopo ou processo, com base nas horas reais registradas.', ok:true, why:'Comparar horas reais com estimadas revela onde o lucro está sumindo.'},
            {t:'Precisa trabalhar mais rápido sem mudar nada.', ok:false, why:'Pode ajudar, mas a estimativa precisa refletir a realidade.'},
            {t:'Deve parar de registrar horas.', ok:false, why:'Sem registro, o problema fica invisível.'}
          ]},
        { who:'Keila, 30 anos, acompanha 25 indicadores', says:'Tenho uma planilha com 25 indicadores, mas não consigo atualizar e já nem olho.',
          q:'Qual é o melhor ajuste?',
          opts:[
            {t:'Acrescentar mais indicadores para ter visão completa.', ok:false, why:'Se 25 já não são usados, mais piora.'},
            {t:'Reduzir para 5 ou 6 indicadores ligados às decisões e atualizar em 15 minutos por semana.', ok:true, why:'Poucos indicadores usados com regularidade valem mais que muitos ignorados.'},
            {t:'Parar de medir.', ok:false, why:'Sem medir, as decisões viram palpite.'},
            {t:'Contratar alguém só para a planilha.', ok:false, why:'No começo, simplificar resolve.'}
          ]},
        { who:'Otávio, 34 anos, viu um post', says:'Um influenciador disse que fatura R$ 50 mil por mês com IA. Eu faturei R$ 3 mil e me sinto um fracasso.',
          q:'Qual é a forma saudável de usar os números?',
          opts:[
            {t:'Copiar tudo o que o influenciador faz.', ok:false, why:'A realidade, o momento e a veracidade do número dele são desconhecidos.'},
            {t:'Comparar o seu negócio com ele mesmo ao longo do tempo, usando os seus indicadores para decidir os próximos ajustes.', ok:true, why:'Seu histórico é a referência útil; números de terceiros raramente mostram custos e contexto.'},
            {t:'Desistir, porque está muito atrás.', ok:false, why:'Comparações com números não verificáveis não são base para decisões.'},
            {t:'Divulgar que também fatura R$ 50 mil.', ok:false, why:'Seria falso e enganoso.'}
          ]}
      ]},
    { id:'5.3', title:'Processos repetíveis e IA no seu próprio negócio', min:11,
      body:[
        `<div class="card analogy"><h3>🍔 A cozinha da lanchonete</h3><p>A lanchonete que faz o mesmo lanche igual todos os dias tem receitas escritas, ingredientes no lugar certo e etapas definidas. Assim, atende mais gente com menos erro. <b>Processos escritos</b> fazem o seu serviço crescer sem virar caos.</p></div>`,
        `<div class="term"><b>Processo</b> = sequência de passos repetível para uma tarefa. <b>Modelo (template)</b> = documento pronto para preencher: proposta, contrato, mensagem. <b>Procedimento padrão</b> = instrução escrita de como fazer algo do jeito certo. <b>Produtizar</b> = transformar um serviço sob medida numa oferta padronizada, com etapas e preço fixos.</div>`,
        `<div class="card"><h3>O que padronizar primeiro</h3>
          <div class="tw"><table class="tbl"><tr><th>Tarefa repetida</th><th>Padronização</th><th>Onde a IA ajuda</th></tr>
          <tr><td>Proposta</td><td>Modelo de uma página</td><td>Revisar clareza e ambiguidades</td></tr>
          <tr><td>Início de projeto</td><td>Checklist e lista de informações</td><td>Montar perguntas para o nicho</td></tr>
          <tr><td>Atualização semanal</td><td>Mensagem modelo</td><td>Resumir o andamento a partir das suas anotações</td></tr>
          <tr><td>Testes antes da entrega</td><td>Lista de casos por tipo de projeto</td><td>Sugerir casos difíceis</td></tr>
          <tr><td>Conteúdo</td><td>Calendário mensal</td><td>Gerar ideias que você revisa</td></tr></table></div></div>`,
        `<div class="card"><h3>Usando IA no seu negócio com cuidado</h3>
          <ol class="golden"><li><span>Use IA para <b>rascunhos e revisões</b>; a decisão final é sua.</span></li><li><span><b>Não cole dados pessoais</b> de clientes em ferramentas que não foram combinadas; use exemplos fictícios.</span></li><li><span>Confira o que a IA escreve sobre <b>leis, impostos e contratos</b> com fontes oficiais ou um profissional.</span></li><li><span>Guarde os seus processos num lugar organizado e <b>revise a cada projeto</b>: o que deu errado vira um novo item do checklist.</span></li></ol>
          <p><b>Erros comuns:</b> refazer cada proposta do zero; deixar o processo só na cabeça; colar contratos de clientes com dados pessoais num chat gratuito; produtizar antes de ter feito o serviço algumas vezes.</p></div>`,
        `<div class="card"><h3>📍 Na prática</h3><p>Depois do terceiro projeto parecido, um prestador escreveu o checklist de início e o modelo de proposta. O quarto projeto começou em um dia, em vez de uma semana, e nada foi esquecido.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a lanchonete escreve as receitas dos lanches.</div>`
      ],
      ch:[
        { who:'Cristiano, 36 anos, sempre atrasado', says:'Cada projeto eu faço de um jeito, e sempre esqueço alguma coisa: uma informação do cliente, um teste, o aceite.',
          q:'Qual é a melhor solução?',
          opts:[
            {t:'Trabalhar mais horas para dar conta.', ok:false, why:'Mais horas não resolvem esquecimentos de processo.'},
            {t:'Escrever checklists e modelos para as etapas que se repetem e atualizar a cada projeto com o que deu errado.', ok:true, why:'Processos escritos reduzem esquecimentos e melhoram com o tempo.'},
            {t:'Confiar mais na memória.', ok:false, why:'A memória falha justamente quando há muitos projetos.'},
            {t:'Recusar novos projetos.', ok:false, why:'Organizar resolve sem perder clientes.'}
          ]},
        { who:'Bárbara, 31 anos, usa IA para escrever contratos', says:'Colo o contrato antigo do cliente, com nome, CPF e endereço, num chat de IA gratuito para adaptar ao novo cliente.',
          q:'Qual é o ajuste?',
          opts:[
            {t:'Nenhum, é só um contrato.', ok:false, why:'O contrato contém dados pessoais de um cliente que não autorizou o envio.'},
            {t:'Usar um modelo sem dados pessoais (com campos para preencher), adaptar com a IA e só depois preencher os dados fora da ferramenta, revisando as cláusulas importantes com um profissional.', ok:true, why:'Modelo sem dados protege os clientes, e a revisão garante a qualidade jurídica.'},
            {t:'Usar a versão paga do chat e continuar colando tudo.', ok:false, why:'Pagar não elimina a necessidade de minimizar dados.'},
            {t:'Parar de usar contratos.', ok:false, why:'Contratos são essenciais; o cuidado é com os dados.'}
          ]},
        { who:'Giovana, 29 anos, fez seu primeiro projeto', says:'Fiz um projeto só. Vou criar agora um pacote fixo, com preço e etapas, para vender igual para todos.',
          q:'O que é mais prudente?',
          opts:[
            {t:'Produtizar já, com base num único projeto.', ok:false, why:'Um só projeto não mostra o que se repete nem o tempo real.'},
            {t:'Fazer mais alguns projetos parecidos, registrar etapas e horas e produtizar quando o padrão estiver claro.', ok:true, why:'Produtizar com base em experiência real evita pacotes com preço e prazo errados.'},
            {t:'Nunca produtizar.', ok:false, why:'Padronizar traz ganho quando há repetição.'},
            {t:'Copiar o pacote de outra pessoa.', ok:false, why:'Os custos e o processo dela são diferentes.'}
          ]},
        { who:'Fábio, 40 anos, pediu à IA as regras do MEI', says:'A IA me disse qual é o limite de faturamento do MEI e os impostos. Vou seguir isso.',
          q:'Qual é o cuidado necessário?',
          opts:[
            {t:'Seguir, porque a IA está sempre atualizada.', ok:false, why:'A IA pode estar desatualizada ou errada, e as regras mudam.'},
            {t:'Conferir as informações em fontes oficiais, como o Portal do Empreendedor (gov.br), e confirmar com um contador.', ok:true, why:'Regras fiscais mudam; fontes oficiais e um profissional evitam erros caros.'},
            {t:'Perguntar a outra IA e seguir a que parecer mais convincente.', ok:false, why:'Convicção não é garantia de exatidão.'},
            {t:'Ignorar as regras.', ok:false, why:'Pode gerar problemas fiscais.'}
          ]}
      ]},
    { id:'5.4', title:'Riscos do negócio: dependência, golpes e sobrecarga', min:11,
      body:[
        `<div class="card analogy"><h3>🪑 A mesa de uma perna só</h3><p>Uma mesa com uma perna só cai ao menor esbarrão. Com quatro pernas, aguenta peso e solavancos. Um negócio que depende de <b>um único cliente, uma única ferramenta ou uma única pessoa</b> é uma mesa de uma perna.</p></div>`,
        `<div class="term"><b>Concentração</b> = quando boa parte da receita vem de um só cliente. <b>Dependência de ferramenta</b> = quando o serviço inteiro para se uma ferramenta mudar de preço ou sair do ar. <b>Golpe</b> = fraude, como comprovante de pagamento falso ou pedido de "teste gratuito" sem fim. <b>Sobrecarga</b> = trabalho além da sua capacidade, que derruba a qualidade e a saúde.</div>`,
        `<div class="card"><h3>Mapa de riscos</h3>
          <div class="tw"><table class="tbl"><tr><th>Risco</th><th>Sinal de alerta</th><th>Proteção</th></tr>
          <tr><td>Concentração</td><td>Um cliente responde por mais da metade da receita</td><td>Prospectar sempre, mesmo com agenda cheia</td></tr>
          <tr><td>Ferramenta</td><td>Todo projeto usa a mesma plataforma, sem alternativa</td><td>Conhecer uma alternativa e documentar como migrar</td></tr>
          <tr><td>Golpe de pagamento</td><td>"Já paguei" com comprovante, mas o dinheiro não entrou</td><td>Confirmar no extrato antes de começar ou entregar</td></tr>
          <tr><td>Trabalho grátis</td><td>"Faz um teste completo e, se eu gostar, pago"</td><td>Piloto pequeno, com prazo e preço combinados</td></tr>
          <tr><td>Sobrecarga</td><td>Prazos estourando, noites viradas</td><td>Limite de projetos simultâneos e prazos realistas</td></tr></table></div></div>`,
        `<div class="card"><h3>Hábitos de proteção</h3>
          <ol class="golden"><li><span>Confira <b>pagamentos no extrato</b>, nunca só pelo comprovante.</span></li><li><span>Desconfie de urgência excessiva, valores acima do normal e pedidos para pagar algo antes de receber.</span></li><li><span>Defina quantos projetos consegue tocar <b>ao mesmo tempo</b> com qualidade.</span></li><li><span>Reserve tempo semanal para <b>prospecção</b>, mesmo com agenda cheia.</span></li><li><span>Cuide da saúde: pausas, horário de encerrar e dias de descanso fazem parte do negócio.</span></li></ol>
          <p><b>Erros comuns:</b> parar de prospectar quando um cliente grande chega; aceitar todos os projetos de uma vez; entregar arquivos finais antes de confirmar o pagamento.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que a mesa de quatro pernas é mais firme que a de uma perna só.</div>`
      ],
      ch:[
        { who:'Sílvio, 37 anos, tem um cliente grande', says:'Um cliente responde por 80% da minha renda. Parei de prospectar porque estou sem tempo.',
          q:'Qual é o risco e o que fazer?',
          opts:[
            {t:'Nenhum risco, o cliente está satisfeito.', ok:false, why:'Se esse cliente sair ou cortar custos, quase toda a renda some de uma vez.'},
            {t:'Alta concentração: reservar tempo fixo para prospectar e diversificar a carteira aos poucos, mesmo com agenda cheia.', ok:true, why:'Diversificar reduz o impacto da perda de um cliente.'},
            {t:'Pedir exclusividade ao cliente para garantir.', ok:false, why:'Aumenta a dependência.'},
            {t:'Aumentar o preço do cliente grande.', ok:false, why:'Não resolve a concentração e pode acelerar a perda.'}
          ]},
        { who:'Carina, 28 anos, recebeu um comprovante', says:'O cliente mandou o comprovante do pagamento e pediu os arquivos finais com urgência. O dinheiro ainda não apareceu na conta.',
          q:'Qual é a atitude mais segura?',
          opts:[
            {t:'Mandar os arquivos, porque o comprovante prova o pagamento.', ok:false, why:'Comprovantes podem ser falsos ou de transações canceladas.'},
            {t:'Confirmar no extrato que o dinheiro entrou antes de enviar os arquivos finais, explicando com educação o procedimento.', ok:true, why:'Conferir no extrato é a única confirmação confiável e protege contra golpes.'},
            {t:'Mandar metade dos arquivos.', ok:false, why:'Ainda corre o risco de entregar sem receber.'},
            {t:'Bloquear o cliente imediatamente.', ok:false, why:'Pode ser apenas atraso; o procedimento correto resolve sem ofender.'}
          ]},
        { who:'Heitor, 32 anos, aceitou 6 projetos de uma vez', says:'Aceitei todos para não perder dinheiro. Agora todos estão atrasados e estou dormindo 4 horas por noite.',
          q:'O que deveria ter feito?',
          opts:[
            {t:'Aceitar ainda mais, para compensar.', ok:false, why:'Agrava o problema.'},
            {t:'Definir um limite de projetos simultâneos, negociar prazos realistas ou datas de início futuras e recusar ou adiar o que passasse da capacidade.', ok:true, why:'Respeitar a capacidade preserva a qualidade, a reputação e a saúde.'},
            {t:'Entregar todos com menos qualidade.', ok:false, why:'Prejudica a reputação e os clientes.'},
            {t:'Sumir até conseguir entregar.', ok:false, why:'Comunicação é essencial; sumir destrói a confiança.'}
          ]},
        { who:'Tânia, 35 anos, usa uma única plataforma', says:'Todos os meus projetos usam a mesma plataforma de automação. Ela anunciou aumento de preço de 300%.',
          q:'O que teria reduzido o impacto?',
          opts:[
            {t:'Nada, isso é imprevisível.', ok:false, why:'A mudança é imprevisível, mas o preparo não.'},
            {t:'Conhecer uma alternativa, documentar como migrar, deixar as contas no nome dos clientes e prever na proposta que custos de ferramentas podem mudar.', ok:true, why:'Preparo e transparência reduzem o impacto de mudanças de fornecedor.'},
            {t:'Absorver o aumento sem avisar os clientes.', ok:false, why:'Pode inviabilizar o negócio.'},
            {t:'Cancelar todos os projetos.', ok:false, why:'Há caminhos de migração e renegociação.'}
          ]}
      ]},
    { id:'5.6', title:'MEI na prática: impostos, limite e conta separada', min:19,
      body:[
        `<div class="card analogy"><h3>🧾 O condomínio do prédio</h3><p>Quem mora em apartamento sabe: todo mês chega o boleto do condomínio, uma vez por ano tem a assembleia, e há regras sobre o que pode e o que não pode fazer no prédio. Ninguém deixa de pagar porque "o mês foi fraco". <b>O MEI funciona parecido:</b> um boleto mensal fixo, uma declaração por ano e um teto de faturamento que você precisa acompanhar.</p></div>`,
        `<div class="term"><b>MEI</b> = Microempreendedor Individual, a forma mais simples de ter CNPJ, com imposto fixo mensal. <b>DAS</b> = o boleto mensal do MEI, que reúne INSS e um valor pequeno de ISS (serviços) ou ICMS (comércio); vence todo dia 20 e é pago mesmo nos meses sem faturamento. <b>DASN-SIMEI</b> = a declaração anual do faturamento do ano anterior, entregue até 31 de maio. <b>Limite de faturamento</b> = o teto anual de receita para continuar MEI (hoje R$ 81 mil por ano, ou R$ 6.750 por mês de atividade no ano em que abriu). <b>Desenquadramento</b> = deixar de ser MEI e passar para outro regime, com outros impostos. <b>Conta PJ</b> = conta bancária no nome do CNPJ, separada da sua conta pessoal (PF).</div>`,
        `<div class="card"><h3>Antes de tudo: confira as regras atuais</h3><p>Valores do DAS mudam todo ano (acompanham o salário mínimo), o limite já teve propostas de mudança e a reforma tributária está em transição. Por isso, os números desta lição são <b>exemplos para entender a lógica</b>. Antes de decidir, confira no <b>Portal do Empreendedor (gov.br)</b> e, se tiver dúvida, fale com um contador. Confira também se a sua atividade está na <b>lista de ocupações permitidas ao MEI</b>: várias atividades intelectuais e de consultoria não são permitidas, e quem não se encaixa precisa de outro formato de empresa.</p></div>`,
        `<div class="card"><h3>Exemplo resolvido: o controle mensal da Joana</h3><p>Joana, 31 anos, de Belo Horizonte, é MEI desde antes deste ano, em uma ocupação permitida, e cria materiais visuais com IA para lojas pequenas. Até março ela só olhava o saldo do banco. Em abril montou este controle (números fictícios):</p>
          <div class="tw"><table class="tbl"><tr><th>Mês</th><th>Faturado (notas emitidas)</th><th>Acumulado no ano</th><th>Teto "no ritmo" (R$ 6.750 × meses)</th><th>DAS pago?</th></tr>
          <tr><td>Jan</td><td>R$ 5.200</td><td>R$ 5.200</td><td>R$ 6.750</td><td>Sim</td></tr>
          <tr><td>Fev</td><td>R$ 7.400</td><td>R$ 12.600</td><td>R$ 13.500</td><td>Sim</td></tr>
          <tr><td>Mar</td><td>R$ 9.100</td><td>R$ 21.700</td><td>R$ 20.250</td><td>Sim</td></tr>
          <tr><td>Abr</td><td>R$ 8.500</td><td>R$ 30.200</td><td>R$ 27.000</td><td>Sim</td></tr></table></div>
          <ol class="golden"><li><span><b>Média mensal:</b> R$ 30.200 ÷ 4 = R$ 7.550.</span></li><li><span><b>Projeção do ano:</b> R$ 7.550 × 12 = R$ 90.600, acima dos R$ 81 mil.</span></li><li><span><b>Quanto acima:</b> R$ 9.600, cerca de 12% do limite. Pela regra atual, passar em até 20% faz a pessoa continuar MEI até dezembro, pagar um imposto complementar sobre o excesso e mudar de regime em janeiro. Passar de 20% faz o desenquadramento valer desde janeiro do próprio ano, com impostos sobre o ano todo.</span></li><li><span><b>Decisão em abril, não em dezembro:</b> Joana marcou conversa com um contador para comparar os custos de virar microempresa no ano seguinte com o preço que cobra hoje.</span></li></ol>
          <p>Se Joana descobrisse isso só em dezembro, não teria tempo de ajustar preço, reservar dinheiro para o imposto extra nem planejar a mudança.</p></div>`,
        `<div class="card"><h3>Conta PF e conta PJ: antes e depois</h3>
          <div class="flows">
          <div class="flow old"><h4>Antes: tudo misturado</h4>
            <div class="node">Cliente paga no PIX pessoal</div><div class="arrow">▼</div>
            <div class="node">Mercado, aluguel e ferramentas saem da mesma conta</div><div class="arrow">▼</div>
            <div class="node hot">No fim do mês, ninguém sabe quanto o negócio rendeu<small>nem quanto foi faturado para o limite</small></div>
          </div>
          <div class="flow new"><h4>Depois: contas separadas</h4>
            <div class="node">Cliente paga no PIX do CNPJ, com nota fiscal emitida</div><div class="arrow">▼</div>
            <div class="node">DAS, ferramentas e custos saem da conta PJ</div><div class="arrow">▼</div>
            <div class="node good">Dia 5: transferência fixa do pró-labore para a conta PF<small>o extrato PJ vira o seu relatório</small></div>
          </div>
          </div>
          <p style="margin-top:12px">Desde 2023, o MEI prestador de serviços emite a nota fiscal de serviço pelo emissor nacional (no portal gov.br). Somar as notas emitidas no mês é o jeito mais confiável de preencher a coluna "Faturado" e, depois, a DASN-SIMEI.</p></div>`,
        `<div class="card"><h3>Erros comuns e como detectar</h3>
          <ol class="golden">
            <li><span><b>Erro:</b> deixar o DAS para depois nos meses fracos. <b>Sinal:</b> aparecem guias em atraso no Portal do Empreendedor. <b>Correção:</b> pagar em débito automático ou lembrete fixo no dia 20 e regularizar as pendentes.</span></li>
            <li><span><b>Erro:</b> esquecer a DASN-SIMEI. <b>Sinal:</b> chega junho e você nem sabe quanto faturou no ano anterior. <b>Correção:</b> manter o controle mensal, que deixa a declaração pronta em minutos.</span></li>
            <li><span><b>Erro:</b> só olhar o limite no fim do ano. <b>Sinal:</b> o acumulado está acima do teto "no ritmo" por dois meses seguidos. <b>Correção:</b> projetar o ano todo mês e conversar com um contador cedo.</span></li>
            <li><span><b>Erro:</b> receber de clientes na conta pessoal. <b>Sinal:</b> o extrato PF tem PIX de empresas misturado com gastos de casa. <b>Correção:</b> chave PIX do CNPJ na proposta e pró-labore fixo transferido para a PF.</span></li>
            <li><span><b>Erro:</b> confiar no que a IA disse sobre valores e regras do MEI. <b>Sinal:</b> a resposta não cita fonte oficial nem data. <b>Correção:</b> conferir no Portal do Empreendedor (gov.br).</span></li>
          </ol></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (cerca de 5 min)</h3><p>No <b>Google Planilhas</b>:</p>
          <ol class="golden"><li><span>Crie as colunas da tabela da Joana: mês, faturado, acumulado, teto no ritmo e DAS pago.</span></li><li><span>Preencha com os seus números ou, se ainda não fatura, com números fictícios.</span></li><li><span>Escreva você mesmo a fórmula do acumulado e a da projeção do ano (média × 12).</span></li><li><span>Use formatação condicional para pintar de vermelho quando o acumulado passar do teto no ritmo.</span></li><li><span>Anote numa célula a data em que vai conferir o valor atual do DAS e do limite no Portal do Empreendedor.</span></li></ol>
          <p><b>Privacidade:</b> não coloque nome, CPF ou dados de clientes na planilha; use só valores e um apelido do projeto. Não compartilhe o link da planilha com edição aberta.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o MEI precisa anotar quanto ganhou todo mês, mesmo que o banco já mostre o saldo.</div>`
      ],
      ch:[
        { who:'Renan, 27 anos, MEI há dois anos', says:'Em março e abril quase não tive cliente, então não paguei o DAS. Quando melhorar eu vejo isso.',
          q:'Qual é a orientação correta?',
          opts:[
            {t:'Está certo: sem faturamento no mês, não há DAS a pagar.', ok:false, why:'O DAS do MEI é um valor fixo mensal, devido mesmo nos meses sem faturamento.'},
            {t:'Pagar só o DAS de abril e esquecer março, que já passou.', ok:false, why:'As guias em atraso continuam devidas, com multa e juros, e podem trazer problemas ao CNPJ.'},
            {t:'O DAS é devido todo mês, com ou sem faturamento: ele deve regularizar as guias em atraso no Portal do Empreendedor e criar um lembrete ou débito automático para o dia 20.', ok:true, why:'O DAS é fixo e mensal; regularizar cedo evita juros maiores e pendências que atrapalham benefícios e o próprio CNPJ.'},
            {t:'Fechar o MEI e abrir outro quando voltar a ter clientes.', ok:false, why:'Fechar o CNPJ não apaga as dívidas e cria trabalho desnecessário.'}
          ]},
        { who:'Débora, 34 anos, MEI que monta automações simples', says:'Somei as notas até agosto: R$ 64 mil. Não tinha percebido que estava indo tão rápido.',
          q:'Qual é a melhor leitura e o próximo passo?',
          opts:[
            {t:'Projetar o ano: R$ 64 mil em 8 meses dá cerca de R$ 96 mil em 12, acima do limite; ela deve conferir as regras atuais no Portal do Empreendedor e conversar já com um contador sobre o desenquadramento e a mudança de regime.', ok:true, why:'A projeção mostra o problema com meses de antecedência, quando ainda dá para planejar preço, reserva para imposto e a transição.'},
            {t:'Ainda está abaixo de R$ 81 mil, então não precisa fazer nada até dezembro.', ok:false, why:'No ritmo atual ela passa do limite antes do fim do ano; esperar tira o tempo de planejar.'},
            {t:'Parar de emitir nota fiscal dos próximos projetos para não passar do limite.', ok:false, why:'Deixar de emitir nota é irregular e pode trazer problemas fiscais sérios.'},
            {t:'Pedir para alguns clientes pagarem na conta pessoal do marido.', ok:false, why:'Esconder faturamento é irregular e mistura finanças de outra pessoa no problema.'}
          ]},
        { who:'Marcelo, 29 anos, recebe tudo na conta pessoal', says:'Os clientes me pagam no meu PIX pessoal, e dali sai o mercado, o aluguel e as ferramentas. No fim do mês não sei se o negócio deu lucro.',
          q:'O que resolve o problema dele de forma mais direta?',
          opts:[
            {t:'Anotar tudo num caderno e continuar com uma conta só.', ok:false, why:'Anotar ajuda, mas misturar gastos pessoais e do negócio na mesma conta continua confundindo a leitura.'},
            {t:'Abrir uma conta no CNPJ, receber dos clientes e pagar os custos do negócio por ela, e transferir um pró-labore fixo para a conta pessoal.', ok:true, why:'Com contas separadas, o extrato PJ mostra o resultado do negócio e o pró-labore fixo protege o caixa.'},
            {t:'Usar cartões de crédito diferentes para cada tipo de gasto.', ok:false, why:'Não separa as entradas, que continuam caindo na conta pessoal.'},
            {t:'Pedir para a IA estimar o lucro com base nos gastos que ele lembrar.', ok:false, why:'Estimativa de memória não substitui registro; e o problema de origem continua.'}
          ]},
        { who:'Sueli, 41 anos, vai abrir o MEI', says:'Perguntei a um chat de IA se a minha atividade de consultoria em processos com IA pode ser MEI, e ele disse que sim.',
          q:'Qual é o cuidado antes de abrir o CNPJ?',
          opts:[
            {t:'Abrir logo, já que a IA confirmou.', ok:false, why:'A IA pode errar ou estar desatualizada; atividades de consultoria muitas vezes não são permitidas ao MEI.'},
            {t:'Escolher qualquer ocupação parecida da lista só para conseguir abrir.', ok:false, why:'Registrar uma atividade diferente da que você realmente faz pode gerar problemas fiscais.'},
            {t:'Perguntar a mais duas IAs e seguir a maioria.', ok:false, why:'Várias respostas iguais não substituem a fonte oficial.'},
            {t:'Conferir a lista oficial de ocupações permitidas no Portal do Empreendedor e, se a atividade não estiver lá, conversar com um contador sobre outro formato de empresa.', ok:true, why:'A lista oficial é a referência; se a atividade não cabe no MEI, o contador indica o caminho certo.'}
          ]}
      ]},
    { id:'5.7', title:'Ponto de equilíbrio: o preço que paga as contas', min:18,
      body:[
        `<div class="card analogy"><h3>🚌 A van escolar</h3><p>O dono de uma van escolar tem gastos que chegam todo mês: parcela da van, seguro, manutenção e o salário dele. Se ele precisa de R$ 6 mil para cobrir tudo e cada criança paga R$ 400, precisa de <b>15 crianças</b> só para empatar. A 16ª é a primeira que dá lucro. <b>Ponto de equilíbrio é descobrir quantas "crianças" o seu negócio precisa por mês.</b></p></div>`,
        `<div class="term"><b>Ponto de equilíbrio</b> = quanto você precisa vender por mês para cobrir todos os custos fixos e o pró-labore, sem lucro nem prejuízo. <b>Custo variável</b> = gasto que aparece em cada projeto (créditos de API, um modelo comprado, um freelancer). <b>Margem de contribuição</b> = preço do projeto menos o custo variável dele: é o que sobra para pagar as contas fixas. <b>Horas faturáveis</b> = horas que você cobra de clientes; prospecção, administração e estudo não entram.</div>`,
        `<div class="pipe"><div class="node ink">Custos fixos + pró-labore<small>o que precisa entrar no mês</small></div><div class="ar">➜</div><div class="node yel">÷ margem por projeto<small>preço − custo variável</small></div><div class="ar">➜</div><div class="node ink">Projetos por mês<small>arredonde para cima</small></div></div>`,
        `<div class="card"><h3>Exemplo resolvido: o preço do Marcos</h3><p>Marcos, 33 anos, de Recife, monta atendimento automático com IA para pequenos negócios. Cobrava R$ 50 por hora porque pensou: "trabalho 120 horas por mês, R$ 50 × 120 = R$ 6.000, está ótimo". Mas no fim do mês sobrava pouco. Ele refez a conta (números de exemplo; preços de ferramentas e o DAS mudam):</p>
          <div class="tw"><table class="tbl"><tr><th>Custo fixo mensal</th><th>Valor</th></tr>
          <tr><td>Ferramentas e assinaturas</td><td>R$ 250</td></tr>
          <tr><td>Internet e celular (parte do trabalho)</td><td>R$ 150</td></tr>
          <tr><td>DAS do MEI (aproximado)</td><td>R$ 80</td></tr>
          <tr><td>Reserva para trocar o computador</td><td>R$ 120</td></tr>
          <tr><td><b>Total de custos fixos</b></td><td><b>R$ 600</b></td></tr>
          <tr><td>Pró-labore desejado</td><td>R$ 4.000</td></tr>
          <tr><td>Reserva de 10% para meses fracos</td><td>R$ 460</td></tr>
          <tr><td><b>Precisa entrar no mês</b></td><td><b>R$ 5.060</b></td></tr></table></div>
          <ol class="golden"><li><span><b>Horas faturáveis de verdade:</b> das 120 horas, cerca de metade foi para prospecção, propostas, mensagens e estudo. Sobram <b>60 horas</b> cobráveis.</span></li><li><span><b>Preço mínimo por hora:</b> R$ 5.060 ÷ 60 = R$ 84,33. Abaixo disso, ele paga para trabalhar.</span></li><li><span><b>O que acontecia antes:</b> 60 horas × R$ 50 = R$ 3.000. Faltavam R$ 2.060 todo mês, que saíam do pró-labore e da reserva.</span></li><li><span><b>Em projetos:</b> o pacote padrão custa R$ 1.500, leva cerca de 15 horas e tem R$ 100 de custo variável (créditos de API). Margem: R$ 1.400.</span></li><li><span><b>Ponto de equilíbrio:</b> R$ 4.600 (fixos + pró-labore) ÷ R$ 1.400 = 3,3. Arredondando para cima, <b>4 projetos por mês</b>. Com 4 projetos (60 horas), sobram R$ 1.000 depois dos R$ 4.600, que cobrem a reserva de R$ 460.</span></li></ol></div>`,
        `<div class="card"><h3>Antes e depois da conta</h3>
          <div class="tw"><table class="tbl"><tr><th></th><th>Antes</th><th>Depois</th></tr>
          <tr><td>Base do preço</td><td>Valor que "parecia justo"</td><td>Custos fixos, pró-labore e reserva</td></tr>
          <tr><td>Horas consideradas</td><td>120 (todas)</td><td>60 (só as faturáveis)</td></tr>
          <tr><td>Preço</td><td>R$ 50 por hora</td><td>Pacote de R$ 1.500 (cerca de R$ 93 por hora, já sem o custo variável)</td></tr>
          <tr><td>Meta do mês</td><td>"Pegar o que aparecer"</td><td>4 projetos para empatar; o 5º é lucro</td></tr></table></div>
          <p>Marcos não subiu o preço de quem já era cliente de um dia para o outro: aplicou o novo valor nas propostas novas e avisou os antigos com antecedência. Se o mercado não aceita o preço mínimo, o caminho é reduzir custos, aumentar as horas faturáveis ou mudar a oferta, nunca trabalhar abaixo do custo para sempre.</p></div>`,
        `<div class="card"><h3>Erros comuns e como detectar</h3>
          <ol class="golden">
            <li><span><b>Erro:</b> dividir a meta por todas as horas trabalhadas. <b>Sinal:</b> a agenda está cheia e o dinheiro não fecha. <b>Correção:</b> anotar por um mês quais horas são cobradas e usar só essas na conta.</span></li>
            <li><span><b>Erro:</b> esquecer o pró-labore nos custos. <b>Sinal:</b> o negócio "dá lucro", mas você não consegue pagar as contas de casa. <b>Correção:</b> tratar o pró-labore como custo fixo.</span></li>
            <li><span><b>Erro:</b> ignorar custos variáveis por projeto. <b>Sinal:</b> a fatura de API ou de ferramentas cresce junto com o número de clientes. <b>Correção:</b> registrar o custo variável médio de cada tipo de projeto e descontá-lo do preço.</span></li>
            <li><span><b>Erro:</b> arredondar o ponto de equilíbrio para baixo. <b>Sinal:</b> a conta dá 3,3 projetos e a meta vira 3. <b>Correção:</b> sempre arredondar para cima.</span></li>
          </ol></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (cerca de 5 min)</h3><p>No <b>Google Planilhas</b>:</p>
          <ol class="golden"><li><span>Liste seus custos fixos mensais, um por linha, e some.</span></li><li><span>Acrescente o pró-labore que você precisa e uma reserva (por exemplo, 10%).</span></li><li><span>Estime quantas horas por mês são realmente faturáveis.</span></li><li><span>Escreva você mesmo as fórmulas do preço mínimo por hora e do ponto de equilíbrio em projetos.</span></li><li><span>Compare com o preço que você cobra hoje e anote uma decisão.</span></li></ol>
          <p><b>Segurança:</b> é uma planilha das suas finanças; não inclua senhas de banco, dados de cartão nem informações de clientes.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que o motorista da van precisa saber quantas crianças transportar antes de dizer que está ganhando dinheiro.</div>`
      ],
      ch:[
        { who:'Tatiane, 30 anos, cria conteúdo com IA para lojas', says:'Preciso de R$ 4.500 por mês, contando custos e pró-labore. Trabalho 150 horas, então R$ 30 por hora já basta.',
          q:'Onde está a falha da conta dela?',
          opts:[
            {t:'Nenhuma: R$ 4.500 ÷ 150 = R$ 30, a conta está certa.', ok:false, why:'A divisão está certa, mas a base está errada: nem todas as horas são cobradas de clientes.'},
            {t:'Ela deveria dividir só pelas horas faturáveis; se forem 75, o preço mínimo é R$ 60 por hora.', ok:true, why:'Prospecção, administração e estudo também consomem horas que nenhum cliente paga; o preço precisa cobrir isso.'},
            {t:'Ela deveria cobrar o mesmo que os concorrentes.', ok:false, why:'Os custos e as horas dos concorrentes são diferentes; o preço mínimo vem dos números dela.'},
            {t:'Ela deveria trabalhar 200 horas para manter os R$ 30.', ok:false, why:'Aumentar a jornada esconde o problema e leva à sobrecarga.'}
          ]},
        { who:'Wagner, 38 anos, vende pacotes de automação', says:'Meu pacote custa R$ 2.000 e gasto uns R$ 200 em ferramentas por projeto. Meus custos fixos com pró-labore somam R$ 6.300.',
          q:'Quantos pacotes por mês ele precisa vender para empatar?',
          opts:[
            {t:'3 pacotes, porque R$ 6.300 ÷ R$ 2.000 = 3,15.', ok:false, why:'Usou o preço cheio, sem descontar o custo variável, e ainda arredondou para baixo.'},
            {t:'3 pacotes: margem de R$ 1.800, e R$ 6.300 ÷ R$ 1.800 = 3,5, arredondado para baixo.', ok:false, why:'A margem está certa, mas com 3 pacotes entram só R$ 5.400 de margem, menos que os R$ 6.300; o ponto de equilíbrio sempre arredonda para cima.'},
            {t:'5 pacotes, para ter folga.', ok:false, why:'Ter folga é bom, mas a pergunta é o ponto de equilíbrio, que é calculado, não chutado.'},
            {t:'4 pacotes: margem de R$ 1.800 por pacote, e R$ 6.300 ÷ R$ 1.800 = 3,5, arredondado para cima.', ok:true, why:'O ponto de equilíbrio usa a margem de contribuição (preço menos custo variável) e sempre arredonda para cima.'}
          ]},
        { who:'Helena, 35 anos, fez a conta e se assustou', says:'Meu preço mínimo deu R$ 95 por hora, mas hoje cobro R$ 55 de todos os clientes, inclusive dos antigos.',
          q:'Qual é o caminho mais sensato?',
          opts:[
            {t:'Aplicar R$ 95 para todos amanhã, sem aviso.', ok:false, why:'Mudar de surpresa quebra a confiança e pode fazer perder clientes de uma vez.'},
            {t:'Manter R$ 55, porque os clientes podem não aceitar.', ok:false, why:'Trabalhar abaixo do custo de forma permanente consome a reserva e o pró-labore.'},
            {t:'Usar o novo preço nas propostas novas, avisar os clientes antigos com antecedência sobre o reajuste e, em paralelo, revisar custos e horas faturáveis.', ok:true, why:'Ajusta o preço de forma transparente e gradual, e ataca também os outros lados da conta.'},
            {t:'Cobrar R$ 95 só dos clientes que parecem ter mais dinheiro.', ok:false, why:'Preço baseado em impressão é inconsistente e difícil de justificar.'}
          ]},
        { who:'Igor, 26 anos, ganhou um cliente grande', says:'Fechei um projeto de R$ 3.000, mas ele usa muita API: devo gastar uns R$ 1.200 em créditos.',
          q:'Como ele deve avaliar esse projeto?',
          opts:[
            {t:'A margem real é R$ 1.800; ele deve ver quantas horas o projeto exige, comparar com o preço mínimo por hora e, nos próximos, prever o custo de API na proposta.', ok:true, why:'O que paga os custos fixos e o pró-labore é a margem, não o valor cheio; e custos variáveis altos precisam aparecer no preço.'},
            {t:'É ótimo: R$ 3.000 é o dobro do pacote normal.', ok:false, why:'O valor cheio engana; com R$ 1.200 de custo variável, a margem pode ser menor que a de um projeto comum.'},
            {t:'Deve absorver o custo da API para não parecer caro.', ok:false, why:'Absorver custos variáveis altos pode transformar o projeto em prejuízo.'},
            {t:'Deve usar uma conta pessoal gratuita da API para não pagar.', ok:false, why:'Contas gratuitas têm limites e termos de uso; trocar de conta para fugir do custo é frágil e pode violar regras da ferramenta.'}
          ]}
      ]},
    { id:'5.8', title:'Receita recorrente: MRR, cancelamento e valor do cliente', min:18,
      body:[
        `<div class="card analogy"><h3>🪴 A horta e a feira</h3><p>Quem vive só de feira precisa vender tudo de novo a cada sábado. Quem tem uma horta com cestas por assinatura sabe, no começo do mês, quanto vai entrar. Mas a horta tem um risco próprio: se as cestas chegam murchas, os assinantes vão saindo, um por um. <b>Receita recorrente é a horta: dá previsibilidade, mas precisa de cuidado contínuo.</b></p></div>`,
        `<div class="term"><b>MRR</b> (receita recorrente mensal) = soma das mensalidades ativas no mês. <b>Churn</b> (taxa de cancelamento) = clientes que cancelaram no mês ÷ clientes que havia no início do mês. <b>Tempo médio de permanência</b> = aproximadamente 1 ÷ churn (com 10% ao mês, cerca de 10 meses). <b>LTV</b> (valor do cliente ao longo do tempo) = mensalidade média × tempo médio de permanência; usando a margem em vez da mensalidade, você vê o que de fato sobra.</div>`,
        `<div class="card"><h3>Exemplo resolvido: a carteira da Priscila</h3><p>Priscila, 36 anos, de Curitiba, cuida da manutenção mensal de atendimentos automáticos para clínicas e lojas, a R$ 350 por mês cada (valor de exemplo). Ela acompanhou um trimestre:</p>
          <div class="tw"><table class="tbl"><tr><th>Mês</th><th>Clientes no início</th><th>Entraram</th><th>Cancelaram</th><th>Clientes no fim</th><th>MRR no fim</th><th>Churn</th></tr>
          <tr><td>Jul</td><td>8</td><td>2</td><td>1</td><td>9</td><td>R$ 3.150</td><td>1 ÷ 8 = 12,5%</td></tr>
          <tr><td>Ago</td><td>9</td><td>1</td><td>1</td><td>9</td><td>R$ 3.150</td><td>1 ÷ 9 = 11,1%</td></tr>
          <tr><td>Set</td><td>9</td><td>2</td><td>2</td><td>9</td><td>R$ 3.150</td><td>2 ÷ 9 = 22,2%</td></tr></table></div>
          <ol class="golden"><li><span><b>Leitura rápida:</b> ela conquistou 5 clientes em 3 meses, mas perdeu 4. O MRR ficou parado: a horta está vazando.</span></li><li><span><b>Churn do trimestre:</b> 4 cancelamentos ÷ 26 clientes-mês no início (8 + 9 + 9) ≈ 15% ao mês. Com poucos clientes, um cancelamento muda muito a taxa, por isso ela olha o trimestre, não um mês isolado.</span></li><li><span><b>Permanência média:</b> 1 ÷ 0,15 ≈ 6,7 meses.</span></li><li><span><b>LTV:</b> R$ 350 × 6,7 ≈ R$ 2.345 de receita por cliente. Com margem de 70% (descontando ferramentas e API), sobram cerca de R$ 1.640.</span></li><li><span><b>E se o churn caísse para 5%?</b> Permanência de 20 meses e LTV de R$ 7.000 de receita: <b>o triplo</b>, sem conquistar nenhum cliente a mais.</span></li></ol></div>`,
        `<div class="card"><h3>Investigando por que os clientes saem</h3><p>Priscila ligou para os 4 que cancelaram e perguntou com calma o motivo.</p>
          <div class="why-chain">
            <div>"Cancelamos a manutenção."</div>
            <div>Por quê? → "Não sabíamos o que vocês faziam todo mês."</div>
            <div>Por que não sabiam? → "Só falávamos quando algo quebrava."</div>
            <div class="root">Causa: o valor do serviço era invisível para o cliente.</div>
          </div>
          <p>A correção não foi baixar o preço: ela passou a mandar um resumo mensal curto (o que foi ajustado, quantos atendimentos o robô fez, o que vem no mês seguinte) e uma conversa de 15 minutos a cada trimestre. No trimestre seguinte, perdeu 1 cliente em vez de 4.</p></div>`,
        `<div class="card"><h3>Erros comuns e como detectar</h3>
          <ol class="golden">
            <li><span><b>Erro:</b> comemorar só os clientes novos. <b>Sinal:</b> entram clientes todo mês, mas o MRR não sobe. <b>Correção:</b> registrar entradas e cancelamentos lado a lado.</span></li>
            <li><span><b>Erro:</b> tirar conclusão de um único mês. <b>Sinal:</b> o churn pula de 0% para 25% e você muda tudo. <b>Correção:</b> com poucos clientes, analisar a média do trimestre.</span></li>
            <li><span><b>Erro:</b> calcular o LTV com a mensalidade cheia e decidir gastos com base nele. <b>Sinal:</b> o "valor do cliente" parece alto, mas o caixa não acompanha. <b>Correção:</b> usar a margem (mensalidade menos custos do cliente).</span></li>
            <li><span><b>Erro:</b> responder a cancelamentos com desconto. <b>Sinal:</b> a causa nunca foi perguntada. <b>Correção:</b> perguntar o motivo a quem saiu e atacar a causa.</span></li>
          </ol></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (cerca de 5 min)</h3><p>No <b>Looker Studio</b>, usando uma planilha do Google Planilhas como fonte:</p>
          <ol class="golden"><li><span>Monte na planilha uma tabela parecida com a da Priscila, com 3 a 6 meses (pode usar números fictícios).</span></li><li><span>Conecte a planilha ao Looker Studio.</span></li><li><span>Crie um cartão com o MRR do último mês e um gráfico de clientes que entraram e que cancelaram por mês.</span></li><li><span>Escreva no painel, com suas palavras, qual número vai disparar uma ação (por exemplo, churn do trimestre acima de um valor que você escolher).</span></li></ol>
          <p><b>Privacidade:</b> identifique clientes por código (C01, C02), nunca por nome, CNPJ ou telefone, e não compartilhe o painel publicamente.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que segurar os assinantes da horta pode valer mais do que conseguir assinantes novos.</div>`
      ],
      ch:[
        { who:'Rodrigo, 32 anos, faz manutenção de chatbots', says:'Comecei o mês com 20 clientes de R$ 300. Entraram 3 e saíram 2.',
          q:'Qual é o MRR no fim do mês e o churn do mês?',
          opts:[
            {t:'MRR de R$ 6.900 e churn de 15%.', ok:false, why:'Somou os 3 que entraram sem tirar os 2 que saíram (seriam 21 clientes, não 23), e o churn conta só os cancelamentos, não as entradas.'},
            {t:'MRR de R$ 6.300 e churn de 10%: 21 clientes × R$ 300, e 2 cancelamentos ÷ 20 clientes no início.', ok:true, why:'O MRR soma as mensalidades ativas no fim (21) e o churn divide os cancelamentos pelos clientes do início do mês.'},
            {t:'MRR de R$ 6.000 e churn de 2%.', ok:false, why:'Ignorou a movimentação do mês e confundiu o número de cancelamentos com a taxa.'},
            {t:'MRR de R$ 6.300 e churn de 9,5%.', ok:false, why:'O MRR está certo, mas o churn usa os clientes do início do mês (20), não os do fim (21).'}
          ]},
        { who:'Elaine, 39 anos, oferece relatórios mensais com IA', says:'Minha mensalidade é R$ 500, o churn médio é 10% ao mês e gasto uns R$ 100 por cliente em ferramentas.',
          q:'Qual é o LTV usando a margem?',
          opts:[
            {t:'R$ 5.000, porque R$ 500 × 10 meses.', ok:false, why:'Esse é o LTV de receita; usando a margem, é preciso descontar os R$ 100 de custo por mês.'},
            {t:'R$ 500, porque o cliente paga R$ 500.', ok:false, why:'Isso é uma mensalidade, não o valor ao longo da permanência.'},
            {t:'R$ 4.000: margem de R$ 400 por mês × cerca de 10 meses de permanência (1 ÷ 0,10).', ok:true, why:'Permanência média ≈ 1 ÷ churn; multiplicando pela margem mensal, chega-se ao que realmente sobra por cliente.'},
            {t:'R$ 50.000, porque R$ 500 ÷ 0,01.', ok:false, why:'Usou 1% em vez de 10% e a mensalidade cheia.'}
          ]},
        { who:'Fernanda, 31 anos, perdeu 3 clientes no trimestre', says:'Três clientes cancelaram. Vou dar 30% de desconto para todo mundo, para ninguém mais sair.',
          q:'Qual é a melhor atitude antes de mexer no preço?',
          opts:[
            {t:'Aplicar o desconto: preço menor sempre segura cliente.', ok:false, why:'Se a causa não for preço, o desconto só reduz a margem de todos sem resolver nada.'},
            {t:'Aumentar o preço para compensar a perda.', ok:false, why:'Pode acelerar novos cancelamentos sem resolver a causa.'},
            {t:'Ignorar: cancelamento faz parte.', ok:false, why:'Algum cancelamento é normal, mas 3 no trimestre merecem investigação.'},
            {t:'Perguntar aos 3 por que saíram, procurar o padrão e corrigir a causa, como a falta de relatório ou de resultado visível.', ok:true, why:'Entender a causa direciona a correção; desconto sem diagnóstico corta a margem e pode não reter ninguém.'}
          ]},
        { who:'Jonas, 28 anos, tem 4 clientes de mensalidade', says:'Em março um cliente cancelou e meu churn foi de 25%. Acho que meu serviço é péssimo.',
          q:'Como interpretar esse número?',
          opts:[
            {t:'Com só 4 clientes, um cancelamento já dá 25%; ele deve olhar a média de vários meses e conversar com quem saiu antes de concluir algo.', ok:true, why:'Com carteira pequena a taxa oscila muito; o histórico e o motivo do cancelamento dizem mais que um mês isolado.'},
            {t:'O serviço é ruim mesmo: 25% é um churn altíssimo.', ok:false, why:'A taxa é alta no papel, mas reflete um único cancelamento numa carteira pequena.'},
            {t:'Deve parar de calcular churn até ter 100 clientes.', ok:false, why:'Medir desde cedo ajuda; só é preciso interpretar com cuidado.'},
            {t:'Deve comparar com o churn de grandes empresas de software.', ok:false, why:'Realidades muito diferentes; a referência útil é o próprio histórico.'}
          ]}
      ]},
    { id:'5.9', title:'Planejamento trimestral: contratar, terceirizar ou dizer não', min:19,
      body:[
        `<div class="card analogy"><h3>🧭 A viagem de carro</h3><p>Numa viagem longa, ninguém decide a rota a cada esquina, mas também não segue o mapa de olhos fechados. Você define as paradas, confere o combustível a cada trecho e muda o caminho se a estrada estiver fechada. <b>O plano trimestral é isso:</b> um trecho de 90 dias com destino claro e paradas para conferir.</p></div>`,
        `<div class="term"><b>Plano trimestral</b> = de 1 a 3 metas para os próximos 90 dias, com ações semanais e datas de revisão. <b>Meta de esforço</b> = algo que depende de você (ex.: 2 conversas de diagnóstico por semana), ao contrário de "faturar X", que depende também dos clientes. <b>Capacidade</b> = quantas horas faturáveis você consegue entregar com qualidade por mês. <b>Terceirizar</b> = pagar outra pessoa ou empresa por uma entrega específica. <b>Contratar</b> = ter um empregado, com salário e obrigações trabalhistas.</div>`,
        `<div class="card"><h3>O ritual de 1 hora no fim de cada trimestre</h3>
          <ol class="golden"><li><span><b>Olhe os números</b> do trimestre: caixa, ponto de equilíbrio, MRR, churn, horas reais e conversão.</span></li><li><span><b>Escolha um gargalo</b>, só um: falta de clientes, falta de tempo, margem baixa ou cancelamentos.</span></li><li><span><b>Defina até 3 metas de esforço</b> para atacar esse gargalo.</span></li><li><span><b>Decida a capacidade:</b> manter, recusar, subir preço, terceirizar ou contratar.</span></li><li><span><b>Marque na agenda</b> uma revisão rápida por mês e a próxima revisão trimestral.</span></li></ol></div>`,
        `<div class="card"><h3>Exemplo resolvido: o trimestre do Diego</h3><p>Diego, 35 anos, de Campinas, cria e mantém automações de atendimento para pequenos negócios. No fim de setembro, os números mostravam: 140 horas de trabalho pedidas por mês, capacidade de 100 horas faturáveis, prazos atrasando e 2 propostas recusadas por falta de tempo. Gargalo escolhido: <b>tempo</b>. Ele comparou as opções (valores de exemplo):</p>
          <div class="tw"><table class="tbl"><tr><th>Opção</th><th>Efeito</th><th>Custo ou risco</th></tr>
          <tr><td>Dizer não ou marcar início futuro</td><td>Protege a qualidade agora</td><td>Perde parte dos projetos</td></tr>
          <tr><td>Subir o preço das propostas novas</td><td>Menos projetos, mais margem por hora</td><td>Pode reduzir a conversão</td></tr>
          <tr><td>Terceirizar os testes e a documentação (30 h/mês)</td><td>Libera 30 h para projetos que só ele faz</td><td>R$ 1.200/mês a R$ 40/h, mais tempo de revisão</td></tr>
          <tr><td>Contratar um empregado</td><td>Capacidade fixa maior</td><td>Salário, encargos, férias e 13º todo mês, com ou sem cliente</td></tr></table></div>
          <ol class="golden"><li><span><b>Conta da terceirização:</b> as 30 horas liberadas, faturadas a R$ 90, rendem R$ 2.700. Menos R$ 1.200 do freelancer e 5 horas de revisão dele (R$ 450 que deixa de faturar) = <b>cerca de R$ 1.050 a mais por mês</b>, além de destravar os prazos.</span></li><li><span><b>Por que não contratar já:</b> a demanda extra existe há só um trimestre, e o custo de um empregado é fixo e bem maior que o salário. Ele combinou de rever a ideia se a demanda se mantiver por mais dois trimestres, e de pedir ao contador a conta completa antes.</span></li><li><span><b>Cuidado com dados:</b> o freelancer acessa só dados de teste ou fictícios, assina um acordo de confidencialidade e não recebe senhas pessoais de clientes. Pela LGPD, quem trata dados em seu nome também precisa seguir as regras combinadas.</span></li><li><span><b>Metas de esforço do trimestre:</b> documentar o checklist de testes até a 2ª semana; testar o freelancer em um projeto piloto; aplicar o preço novo em todas as propostas a partir de outubro.</span></li></ol></div>`,
        `<div class="flows">
          <div class="flow old"><h4>Trimestre sem plano</h4>
            <div class="node">Aceita tudo o que chega</div><div class="arrow">▼</div>
            <div class="node">Prazos estouram e a qualidade cai</div><div class="arrow">▼</div>
            <div class="node hot">Decisão no susto: contratar alguém às pressas<small>custo fixo sem saber se a demanda continua</small></div>
          </div>
          <div class="flow new"><h4>Trimestre com plano</h4>
            <div class="node">Números mostram o gargalo: tempo</div><div class="arrow">▼</div>
            <div class="node">Testa terceirizar uma parte, com piloto e revisão</div><div class="arrow">▼</div>
            <div class="node good">Revisão mensal confirma ou corrige<small>contratar só se a demanda se mantiver</small></div>
          </div>
        </div>`,
        `<div class="card" style="margin-top:14px"><h3>Erros comuns e como detectar</h3>
          <ol class="golden">
            <li><span><b>Erro:</b> metas só de faturamento. <b>Sinal:</b> no meio do trimestre você não sabe o que fazer na segunda-feira. <b>Correção:</b> transformar a meta em esforço semanal.</span></li>
            <li><span><b>Erro:</b> atacar todos os problemas ao mesmo tempo. <b>Sinal:</b> 8 metas e nenhuma concluída. <b>Correção:</b> um gargalo por trimestre e até 3 metas.</span></li>
            <li><span><b>Erro:</b> contratar por causa de um mês cheio. <b>Sinal:</b> a demanda alta durou poucas semanas. <b>Correção:</b> terceirizar ou recusar primeiro e contratar só com demanda estável e a conta completa do custo.</span></li>
            <li><span><b>Erro:</b> terceirizar sem processo. <b>Sinal:</b> você refaz o que o terceirizado entregou. <b>Correção:</b> checklist escrito, piloto pequeno e critérios de aceite antes de ampliar.</span></li>
            <li><span><b>Erro:</b> dar ao terceirizado acesso total aos dados dos clientes. <b>Sinal:</b> ele usa o seu login ou recebe planilhas com dados pessoais. <b>Correção:</b> acesso mínimo, dados fictícios e acordo de confidencialidade.</span></li>
          </ol></div>`,
        `<div class="card"><h3>🛠️ Agora é sua vez (cerca de 5 min)</h3><p>Nos <b>Google Gemini: Gems</b>:</p>
          <ol class="golden"><li><span>Crie um Gem para ajudar na sua revisão trimestral.</span></li><li><span>Escreva você mesmo as instruções: que perguntas ele deve fazer sobre os seus números, que ele aponte um único gargalo e que nunca prometa resultados nem dê orientação fiscal como certa.</span></li><li><span>Teste com os números fictícios do Diego e veja se ele chega a um gargalo e a metas de esforço.</span></li><li><span>Ajuste as instruções e anote o que você mudou.</span></li></ol>
          <p><b>Privacidade:</b> não envie nomes de clientes, extratos bancários nem documentos; use números arredondados ou fictícios. Questões fiscais e trabalhistas, confirme com um contador.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a uma criança de 10 anos por que, numa viagem longa, é melhor parar para olhar o mapa de tempos em tempos do que decidir tudo na hora ou nunca olhar.</div>`
      ],
      ch:[
        { who:'Luana, 33 anos, monta seu plano', says:'Minha meta do trimestre é faturar R$ 30 mil. Só isso.',
          q:'Como deixar o plano mais útil?',
          opts:[
            {t:'Aumentar a meta para R$ 50 mil, para se motivar mais.', ok:false, why:'Uma meta maior de resultado continua sem dizer o que fazer na semana.'},
            {t:'Escolher o gargalo pelos números e traduzir em até 3 metas de esforço semanais, como conversas de diagnóstico e propostas enviadas, com revisão mensal.', ok:true, why:'Metas de esforço dependem dela e mostram a ação da semana; o faturamento vira consequência a acompanhar.'},
            {t:'Tirar a meta para não se frustrar.', ok:false, why:'Sem direção, o trimestre vira só reação ao que aparece.'},
            {t:'Copiar o plano de um curso de marketing.', ok:false, why:'O plano precisa sair dos números e do gargalo do negócio dela.'}
          ]},
        { who:'André, 37 anos, teve um mês muito cheio', says:'Em agosto entrou o dobro de pedidos. Vou contratar um assistente com carteira assinada já em setembro.',
          q:'Qual é a decisão mais prudente?',
          opts:[
            {t:'Contratar já, antes que os clientes desistam.', ok:false, why:'Um empregado é custo fixo mensal, com encargos; um mês cheio não prova que a demanda vai continuar.'},
            {t:'Recusar todos os pedidos novos até o fim do ano.', ok:false, why:'Pode ser exagero; há opções intermediárias.'},
            {t:'Trabalhar de madrugada até a demanda passar.', ok:false, why:'Leva à sobrecarga, à queda de qualidade e a erros.'},
            {t:'Absorver o pico com terceirização pontual, início futuro ou preço maior, acompanhar a demanda por alguns meses e só contratar com demanda estável e a conta completa feita com um contador.', ok:true, why:'Testa a demanda sem assumir um custo fixo alto; contratar fica para quando os números sustentarem.'}
          ]},
        { who:'Bianca, 30 anos, vai terceirizar testes', says:'Vou passar ao freelancer meu login nas ferramentas dos clientes e a planilha com os contatos deles, para ele testar mais rápido.',
          q:'Qual é o ajuste necessário?',
          opts:[
            {t:'Criar um ambiente de teste com dados fictícios, dar ao freelancer só o acesso mínimo, sem compartilhar o próprio login, e formalizar um acordo de confidencialidade.', ok:true, why:'Acesso mínimo e dados fictícios reduzem o risco; pela LGPD, ela continua responsável pelos dados que os clientes confiaram a ela.'},
            {t:'Nenhum, se o freelancer for de confiança.', ok:false, why:'Confiança pessoal não substitui controle de acesso nem a proteção dos dados dos clientes.'},
            {t:'Mandar a planilha, mas pedir que ele apague depois.', ok:false, why:'O dado pessoal já foi exposto sem necessidade, e não há como garantir a exclusão.'},
            {t:'Desistir de terceirizar para não correr riscos.', ok:false, why:'É possível terceirizar com segurança usando dados fictícios e acesso restrito.'}
          ]},
        { who:'Caio, 34 anos, compara opções', says:'Posso terceirizar 20 horas por mês de documentação a R$ 45 por hora. Meu preço é R$ 100 por hora e eu tenho projetos esperando. Revisar o trabalho dele me toma 4 horas.',
          q:'Vale a pena, considerando só os números?',
          opts:[
            {t:'Não, porque gastar R$ 900 por mês é caro.', ok:false, why:'Olhar só o custo ignora o que ele passa a faturar com as horas liberadas.'},
            {t:'Sim: ganha R$ 2.000, sem descontar nada.', ok:false, why:'Esqueceu o pagamento ao freelancer e as horas de revisão.'},
            {t:'Sim: as 20 horas liberadas rendem R$ 2.000; menos R$ 900 do freelancer e R$ 400 das 4 horas de revisão, sobram cerca de R$ 700 por mês.', ok:true, why:'A conta completa inclui o custo do terceiro e o tempo de revisão; o resultado ainda é positivo, desde que haja projetos para ocupar as horas.'},
            {t:'Depende só de o freelancer ser mais rápido que ele.', ok:false, why:'A velocidade importa, mas a decisão vem da conta de horas liberadas, custo e revisão.'}
          ]}
      ]},
    { id:'5.5', title:'Projeto: painel do negócio e plano de 90 dias', min:50,
      body:[
        `<div class="card"><p>Organize os números e os riscos do seu negócio de serviços com IA. Se ainda não tem clientes, use estimativas honestas e marque o que é estimativa. Este plano é uma ferramenta de organização, não uma promessa de ganhos.</p></div>`
      ],
      projeto:{
        entrega:'Um painel simples do seu negócio (caixa, indicadores e riscos) e um plano de 90 dias com metas de esforço e processos a criar.',
        passos:[
          'Monte a planilha de fluxo de caixa com custos fixos, impostos estimados, pró-labore e meta de reserva.',
          'Escolha 5 ou 6 indicadores (contatos, conversas, propostas, fechamentos, horas reais, receita recorrente) e como vai anotá-los toda semana.',
          'Liste as 3 tarefas que mais se repetem e crie o modelo ou checklist de uma delas.',
          'Faça o mapa de riscos do seu negócio (concentração, ferramenta, golpes, sobrecarga) com uma proteção para cada um.',
          'Defina o limite de projetos simultâneos e o tempo semanal reservado para prospecção.',
          'Escreva o plano de 90 dias: o que fará em cada mês, quais processos vai criar e quando vai revisar os números.'
        ],
        checklist:[
          'O caixa separa impostos, custos e pró-labore e tem meta de reserva.',
          'Os indicadores são poucos, ligados a decisões, e têm rotina semanal.',
          'Criei pelo menos um modelo ou checklist sem dados pessoais de clientes.',
          'Cada risco do mapa tem uma proteção concreta.',
          'O plano tem metas de esforço e não promete faturamento.'
        ],
        minimo:550
      }}
  ]}
];

const MODDONE = {
  1: 'Você sabe transformar o que sabe em um serviço claro, validar com clientes reais, testar a oferta com um piloto mínimo, medir os sinais de validação e mostrar provas honestas.',
  2: 'Você sabe montar uma proposta simples, calcular o preço com custos reais (impostos, taxas e IA), organizar pacotes, definir condições de pagamento, tratar mudanças de escopo e negociar sem se desvalorizar.',
  3: 'Você sabe combinar por escrito com as cláusulas essenciais, definir critérios de aceite, emitir nota como MEI, lidar com atrasos de pagamento, entregar com método, cuidar dos dados e encerrar bem cada projeto.',
  4: 'Você sabe conseguir clientes com honestidade: presença profissional, portfólio, prospecção sem spam, funil com metas, objeções, conversa de diagnóstico, indicações e depoimentos autorizados.',
  5: 'Parabéns, você concluiu o curso Do Projeto ao Negócio e já pode emitir o certificado do curso! Agora sabe cuidar dos números e das obrigações do MEI, calcular o ponto de equilíbrio e a receita recorrente, planejar o trimestre, medir o negócio, criar processos e reduzir riscos. Lembre: nenhum curso garante ganhos; o caminho é entregar bem, com honestidade, e ajustar com a experiência.'
};

const PROMPTS = {
  1: [
    { title:'Minha oferta em uma frase', desc:'Para definir nicho e oferta.' }
  ],
  2: [
    { title:'Proposta de uma página', desc:'Para montar uma proposta clara.' }
  ],
  3: [
    { title:'Checklist do combinado', desc:'Para revisar antes de começar.' }
  ],
  4: [
    { title:'Mensagem de primeiro contato', desc:'Para escrever, com ajuda da IA, uma abordagem curta, personalizada e sem promessas de ganho.' }
  ],
  5: [
    { title:'Painel do meu negócio', desc:'Para organizar, com ajuda da IA, as entradas, saídas e indicadores do mês, sem enviar dados pessoais de clientes.' }
  ]
};

const THEME = { 1:['#EF4444','#EC4899'], 2:['#EC4899','#F43F5E'], 3:['#F43F5E','#EF4444'], 4:['#EF4444','#F97316'], 5:['#F97316','#EC4899'] };
const LIC = { '1.1':'🎯','1.2':'🧭','1.3':'🍲','1.4':'🔧','1.5':'🛠️','2.1':'📄','2.2':'💲','2.3':'📦','2.4':'🤝','2.5':'🛠️','3.1':'🤝','3.2':'📈','3.3':'✈️','3.4':'🔄','3.5':'🛠️','4.1':'🖼️','4.2':'📣','4.3':'🩺','4.4':'🌱','4.5':'🛠️','5.1':'💵','5.2':'📊','5.3':'⚙️','5.4':'🛡️','5.5':'🛠️','1.6':'🔭','1.7':'🧪','1.8':'📄','1.9':'📏','2.6':'🧾','2.7':'💧','2.8':'📅','2.9':'🔀','3.6':'📜','3.7':'🎯','3.8':'🧾','3.9':'💸','4.6':'🪟','4.7':'⛏️','4.8':'👟','4.9':'🌟','5.6':'🧾','5.7':'⚖️','5.8':'🔁','5.9':'🧭' };

return {
  id: 'do-projeto-ao-negocio',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Mestre'],[900,'Avançado'],[300,'Intermediário'],[0,'Iniciante']]
};
})());
