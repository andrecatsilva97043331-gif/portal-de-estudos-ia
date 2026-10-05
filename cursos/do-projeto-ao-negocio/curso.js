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
  1: 'Você sabe transformar o que sabe em um serviço claro, validar com clientes reais e mostrar provas honestas.',
  2: 'Você sabe montar uma proposta simples, calcular o preço, organizar pacotes e negociar sem se desvalorizar.',
  3: 'Você sabe combinar por escrito, entregar com método, cuidar dos dados e encerrar bem cada projeto.',
  4: 'Você sabe conseguir clientes com honestidade: portfólio, prospecção sem spam, conversa de diagnóstico e indicações.',
  5: 'Parabéns, você concluiu o curso Do Projeto ao Negócio e já pode emitir o certificado do curso! Agora sabe cuidar dos números, medir o negócio, criar processos e reduzir riscos. Lembre: nenhum curso garante ganhos; o caminho é entregar bem, com honestidade, e ajustar com a experiência.'
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
const LIC = { '1.1':'🎯','1.2':'🧭','1.3':'🍲','1.4':'🔧','1.5':'🛠️','2.1':'📄','2.2':'💲','2.3':'📦','2.4':'🤝','2.5':'🛠️','3.1':'🤝','3.2':'📈','3.3':'✈️','3.4':'🔄','3.5':'🛠️','4.1':'🖼️','4.2':'📣','4.3':'🩺','4.4':'🌱','4.5':'🛠️','5.1':'💵','5.2':'📊','5.3':'⚙️','5.4':'🛡️','5.5':'🛠️' };

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
