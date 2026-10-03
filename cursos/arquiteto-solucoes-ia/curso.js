/* Curso: Arquiteto de Soluções com IA (formato descrito em AGENTS.md) */
PORTAL.registrarCurso((function(){
const MODULES = [
  { id:1, icon:'🩺', title:'Diagnóstico da Dor', sub:'Mapear o problema', lessons:[
    { id:'1.1', title:'A dor real do cliente', min:6,
      body:[
        `<div class="card analogy"><h3>🩺 Pense como um médico</h3><p>O paciente chega dizendo: <b>"preciso do remédio X"</b>. Quem diagnostica é o médico. O cliente também chega pedindo a solução (<i>"quero um app!"</i>), mas o que ele tem é um <b>sintoma</b> (<i>"perco 3 horas por dia refazendo planilha"</i>).</p></div>`,
        `<div class="term"><b>Requisitos</b> = a lista do que o sistema precisa fazer. <b>Engenharia de requisitos</b> = descobrir essa lista conversando, antes de qualquer código.</div>`,
        `<div class="card"><h3>Ferramenta 1: os 5 Porquês</h3><p>Pergunte "por quê?" até chegar na causa, não no sintoma.</p>
          <div class="why-chain">
            <div>"Quero um dashboard."</div>
            <div>Por quê? → "Meu chefe cobra relatório."</div>
            <div>Por que demora? → "Junto dados de 3 sistemas na mão."</div>
            <div class="root">Dor real: dados espalhados, sem integração.</div>
          </div></div>`,
        `<div class="card"><h3>Ferramenta 2: as 3 perguntas de ouro</h3>
          <ol class="golden"><li><span>Como você faz isso hoje, passo a passo?</span></li><li><span>Quanto tempo (e quantas vezes por semana) isso consome?</span></li><li><span>O que acontece se der errado?</span></li></ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a dor do cliente em 1 frase que uma criança de 10 anos entenderia. Se não conseguir, ainda não entendeu a dor.</div>`
      ],
      ch:{ who:'Dono de uma empresa de manutenção', says:'Preciso de um aplicativo para meus técnicos. Eles vivem esquecendo de preencher o relatório e eu fico louco no fim do mês.',
        q:'Qual é o seu melhor primeiro passo como Arquiteto?',
        opts:[
          {t:'Abrir o Cursor e já desenhar as telas do app de relatório.', ok:false, why:'Isso é prescrever o remédio sem examinar o paciente. Você pode construir um app lindo para um problema que nem é de app (pode ser prazo, processo ou incentivo).'},
          {t:'Perguntar como o relatório é feito hoje, quando e onde o técnico preenche, e o que acontece quando ele esquece.', ok:true, why:'É exatamente o diagnóstico: processo atual, momento do esquecimento e consequência. As 3 perguntas de ouro vêm antes de qualquer solução.'},
          {t:'Concluir que os técnicos precisam de treinamento e propor uma capacitação.', ok:false, why:'Isso é suposição. Você ainda não sabe se o problema é falta de treino, formulário confuso ou ausência de sinal no campo.'}
        ]}},
    { id:'1.2', title:'Processo atual vs. automatizado', min:7,
      body:[
        `<div class="card analogy"><h3>🗺️ Pense num GPS</h3><p>Antes de buscar um atalho, o GPS precisa saber onde você está. Desenhar o <b>processo atual</b> é marcar o ponto de partida. Só depois você traça a <b>rota nova</b> (o processo automatizado).</p></div>`,
        `<div class="term"><b>Gargalo</b> = o ponto onde o processo trava ou perde tempo, como o gargalo de uma garrafa que limita a vazão da água.</div>`,
        `<div class="flows">
          <div class="flow old"><h4>Processo atual</h4>
            <div class="node">Técnico anota no papel</div><div class="arrow">▼</div>
            <div class="node">Tira foto e manda no WhatsApp</div><div class="arrow">▼</div>
            <div class="node hot">Secretária digita na planilha<small>40 min por dia, com erros</small></div><div class="arrow">▼</div>
            <div class="node">Gestor confere e cobra correções</div><div class="arrow">▼</div>
            <div class="node">Relatório mensal montado à mão</div>
          </div>
          <div class="flow new"><h4>Processo automatizado</h4>
            <div class="node">Técnico preenche no app (funciona offline)</div><div class="arrow">▼</div>
            <div class="node good">Dados caem direto no Firebase<small>sem digitação</small></div><div class="arrow">▼</div>
            <div class="node">PDF do relatório gerado sozinho</div><div class="arrow">▼</div>
            <div class="node">Painel do gestor atualiza em tempo real</div>
          </div>
        </div>`,
        `<div class="card" style="margin-top:14px"><h3>Como desenhar o seu</h3><p>Escreva cada passo como <b>quem faz → o quê → em qual ferramenta → quanto tempo leva</b>. Marque em vermelho o passo mais lento ou repetitivo: é o seu gargalo candidato.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte o fluxo acima como uma historinha de 4 frases, sem usar a palavra "sistema".</div>`
      ],
      ch:{ who:'Gestora de operações da mesma empresa', says:'Quero começar pelo painel bonito com todos os números do mês. Esse é o que o diretor vê!',
        q:'Olhando o processo atual acima, o que você automatiza primeiro?',
        opts:[
          {t:'O painel mensal, porque é a parte mais visível para o diretor.', ok:false, why:'Um painel bonito em cima de dados digitados à mão e com erros só mostra erro mais rápido. Ataque a origem do dado antes da vitrine.'},
          {t:'Trocar o WhatsApp por e-mail, para organizar melhor as fotos.', ok:false, why:'Trocar o canal não elimina o retrabalho. A secretária continuaria digitando tudo na planilha.'},
          {t:'A digitação manual na planilha: o técnico passa a registrar direto no app e o dado nasce certo.', ok:true, why:'Esse é o gargalo: 40 min por dia, repetição e erro. Resolvendo na origem, o PDF e o painel passam a ser consequência natural.'}
        ]}},
    { id:'1.3', title:'ROI: quanto isso vale em horas', min:7,
      body:[
        `<div class="card analogy"><h3>🏠 Pense em reforma de casa</h3><p>Ninguém troca o telhado sem perguntar: <b>quanto custa</b> e <b>em quanto tempo a economia paga</b>? O ROI faz essa pergunta para a sua automação.</p></div>`,
        `<div class="term"><b>ROI</b> (Retorno sobre o Investimento) = quanto você ganha comparado ao quanto gastou. <b>Payback</b> = em quantos meses o ganho cobre o custo.</div>`,
        `<div class="card"><h3>A conta em 3 passos</h3>
          <ol class="golden">
            <li><span><b>Horas/mês</b> = pessoas × horas por dia × dias por semana × 4,33</span></li>
            <li><span><b>Economia/mês</b> = horas/mês × valor da hora</span></li>
            <li><span><b>Payback</b> = custo do projeto ÷ economia/mês</span></li>
          </ol></div>`,
        `<div class="card"><h3>🧮 Simulador: mexa nos números</h3>
          <div class="calc">
            <div><label>Pessoas no processo: <output id="o-p"></output><input type="range" id="c-p" min="1" max="10" value="1"></label></div>
            <div><label>Horas por dia gastas: <output id="o-h"></output><input type="range" id="c-h" min="0.5" max="8" step="0.5" value="2"></label></div>
            <div><label>Dias por semana: <output id="o-d"></output><input type="range" id="c-d" min="1" max="7" value="5"></label></div>
            <div><label>Valor da hora (R$): <output id="o-v"></output><input type="range" id="c-v" min="10" max="200" step="5" value="30"></label></div>
            <div style="grid-column:1/-1"><label>Custo do projeto (R$): <output id="o-k"></output><input type="range" id="c-k" min="500" max="30000" step="500" value="4000"></label></div>
          </div>
          <div class="res">
            <div><b id="r-h">-</b><span>horas salvas por mês</span></div>
            <div><b id="r-e">-</b><span>economia por mês</span></div>
            <div><b id="r-p">-</b><span>payback</span></div>
          </div></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> convença um dono de empresa, em 2 frases e sem jargão, de que o projeto se paga sozinho.</div>`
      ],
      ch:{ who:'Dono da empresa de manutenção', says:'Uma secretária gasta 2 horas por dia, 5 dias por semana, só digitando relatórios. A hora dela custa R$ 30. Sua automação custa R$ 4.000. Isso compensa?',
        q:'Use o simulador (valores já preenchidos). Em quanto tempo o projeto se paga?',
        opts:[
          {t:'Cerca de 3 meses.', ok:true, why:'2 h × 5 dias × 4,33 = 43,3 horas/mês. Vezes R$ 30 = cerca de R$ 1.300/mês. R$ 4.000 ÷ R$ 1.300 ≈ 3,1 meses. Depois disso, é economia líquida.'},
          {t:'Cerca de 1 mês.', ok:false, why:'Para se pagar em 1 mês a economia teria de ser de R$ 4.000/mês. Aqui ela é de cerca de R$ 1.300/mês.'},
          {t:'Cerca de 1 ano.', ok:false, why:'Seria o caso se a economia fosse de uns R$ 330/mês. Refaça: 43,3 horas/mês × R$ 30 dá cerca de R$ 1.300/mês.'}
        ]}}
  ]},
  { id:2, icon:'🗄️', title:'Bancos de Dados', sub:'Onde os dados nascem e moram', lessons:[
    { id:'2.1', title:'O que é um banco de dados', min:6,
      body:[
        `<div class="card analogy"><h3>🗃️ Pense no arquivo de uma empresa</h3><p>Imagine duas situações: uma <b>pilha de papéis</b> soltos em cima da mesa, ou um <b>arquivo organizado</b> com gavetas, etiquetas e um índice. O banco de dados é o arquivo organizado do seu app: guarda as informações para que não se percam quando o app é fechado.</p></div>`,
        `<div class="card"><h3>Uma tabela é uma planilha com regras</h3>
          <div class="tw"><table class="tbl"><tr><th>id</th><th>cliente</th><th>tecnico</th><th>status</th></tr>
          <tr><td>101</td><td>Mercado Sol</td><td>Carlos</td><td>aberta</td></tr>
          <tr><td>102</td><td>Clínica Vida</td><td>Marina</td><td>concluida</td></tr></table></div>
          <p>Cada <b>linha</b> é um <b>registro</b> (uma ordem de serviço). Cada <b>coluna</b> é um <b>campo</b> (uma informação sobre ela).</p></div>`,
        `<div class="term"><b>CRUD</b> = as 4 coisas que todo app faz com dados: <b>C</b>riar, <b>R</b>ler, <b>A</b>tualizar (Update) e <b>D</b>eletar. Quando você pede um "cadastro" ao Cursor, é CRUD.</div>`,
        `<div class="card"><h3>Por que não deixar tudo em planilhas?</h3><p>Planilha vive no computador de quem criou. Com 3 pessoas editando, surgem 3 versões da verdade. O banco central resolve isso: <b>todo mundo lê e escreve no mesmo lugar</b>, ao mesmo tempo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique para um colega o que é "registro" e "campo" usando o exemplo de uma agenda de telefones.</div>`
      ],
      ch:{ who:'Gestor de uma empresa de serviços', says:'Cada atendente tem sua planilha no próprio computador. Toda semana os números não batem e eu perco horas descobrindo qual está certa.',
        q:'Qual é o principal ganho de levar esses dados para um banco de dados central?',
        opts:[
          {t:'O sistema fica visualmente mais bonito.', ok:false, why:'Aparência é papel da interface. O banco de dados cuida de onde e como a informação é guardada.'},
          {t:'Uma única fonte da verdade: todos leem e escrevem no mesmo lugar, em tempo real.', ok:true, why:'Acabam as versões divergentes. Esse é o ganho central: um dado, um lugar, todos enxergando o mesmo.'},
          {t:'Não será mais preciso fazer backup.', ok:false, why:'Backup continua sendo necessário. Um banco central também pode ser apagado por engano ou corrompido.'}
        ]}},
    { id:'2.2', title:'Firebase vs. Supabase', min:8,
      body:[
        `<div class="card analogy"><h3>📁 Pastas soltas vs. planilhas ligadas</h3><p><b>Firebase (Firestore)</b> funciona como <b>pastas suspensas</b>: cada documento é uma ficha completa, com os campos que precisar, guardada dentro de uma coleção.<br><b>Supabase</b> funciona como <b>planilhas ligadas por códigos</b>: tabelas rígidas que se relacionam entre si (ex.: a tabela de contratos aponta para a tabela de clientes).</p></div>`,
        `<div class="term"><b>Relacional (SQL)</b> = tabelas ligadas por códigos, ótimo para cruzar dados. <b>Não-relacional (NoSQL)</b> = documentos flexíveis, ótimo para velocidade e mudanças de formato. <b>Chave estrangeira</b> = o código que liga uma tabela a outra.</div>`,
        `<div class="tw"><table class="tbl"><tr><th></th><th>Firebase (Firestore)</th><th>Supabase</th></tr>
          <tr><td><b>Modelo</b></td><td>Documentos em coleções</td><td>Tabelas relacionais (Postgres)</td></tr>
          <tr><td><b>Brilha em</b></td><td>Apps móveis, tempo real, uso offline pronto no celular</td><td>Relatórios cruzados, muitas relações, somas e filtros complexos</td></tr>
          <tr><td><b>Consultas</b></td><td>Simples e rápidas; cruzamentos complexos exigem mais planejamento</td><td>SQL completo, juntando tabelas à vontade</td></tr>
          <tr><td><b>Atenção</b></td><td>Custo cresce com leituras e escritas; desenhe bem as consultas</td><td>Exige pensar a estrutura das tabelas desde o início</td></tr></table></div>`,
        `<div class="card"><h3>Regra de bolso</h3><p>Não escolha pelo status da tecnologia. Escolha pelo <b>requisito do cliente</b>: precisa funcionar sem internet? Precisa cruzar muita informação em relatórios? A resposta aponta o caminho.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a diferença entre os dois usando pastas suspensas e planilhas, sem citar "SQL".</div>`
      ],
      ch:{ who:'Dono de uma empresa de manutenção', says:'Meus técnicos trabalham em locais sem sinal de celular e precisam registrar a ordem de serviço lá mesmo. Quando voltar o sinal, tudo deve subir sozinho.',
        q:'Qual caminho de banco de dados você recomenda?',
        opts:[
          {t:'Planilha em nuvem compartilhada, porque todo mundo já sabe usar.', ok:false, why:'Planilha em nuvem depende de internet para editar e não sincroniza bem o que foi feito offline.'},
          {t:'Supabase, porque SQL é mais profissional.', ok:false, why:'"Mais profissional" não é requisito. Poderia funcionar, mas o modo offline exigiria bem mais trabalho de sua parte.'},
          {t:'Firebase (Firestore), que já traz sincronização offline pronta nos apps de celular.', ok:true, why:'O requisito decisivo é trabalhar sem sinal e sincronizar depois. O Firestore guarda os dados no aparelho e sobe tudo quando a conexão volta.'}
        ]}},
    { id:'2.3', title:'Desenhando coleções para o Cursor', min:8,
      body:[
        `<div class="card analogy"><h3>📐 Planta baixa antes da obra</h3><p>Nenhum engenheiro manda levantar parede sem planta. Do mesmo jeito, antes de pedir o backend ao Cursor, você entrega a <b>planta dos dados</b>. Escopo claro gera código certo; escopo vago gera retrabalho.</p></div>`,
        `<div class="card"><h3>Método em 4 passos</h3>
          <ol class="golden">
            <li><span><b>Liste os "substantivos"</b> do negócio: cliente, técnico, ordem de serviço, relatório.</span></li>
            <li><span><b>Defina os campos</b> de cada um (nome, tipo, obrigatório ou não).</span></li>
            <li><span><b>Ligue por ID</b>: uma OS guarda o <b>ID</b> do técnico, não o nome digitado.</span></li>
            <li><span><b>Defina quem acessa o quê</b>: o técnico só vê as próprias OS.</span></li>
          </ol></div>`,
        `<div class="card"><h3>Exemplo de documento</h3><pre class="code">ordens_servico / os_101
{
  clienteId: "cli_55",
  tecnicoId: "tec_08",
  status: "aberta",
  criadaEm: 2026-10-02,
  descricao: "Troca de compressor"
}</pre><div class="term" style="margin:8px 0 0"><b>ID</b> = código único e imutável de um registro. Nomes mudam e têm erro de grafia, IDs não.</div></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique por que guardar o ID do técnico é melhor do que guardar o nome.</div>`
      ],
      ch:{ who:'Você, escrevendo o escopo para o Cursor', says:'Preciso registrar qual técnico atendeu cada ordem de serviço e depois listar todas as OS de um técnico.',
        q:'Como a ordem de serviço deve guardar a informação do técnico?',
        opts:[
          {t:'Guardar o tecnicoId, que aponta para a coleção de técnicos.', ok:true, why:'O ID é único e estável. Se o técnico mudar de nome, você altera em um só lugar e todas as OS continuam corretas.'},
          {t:'Digitar o nome do técnico em cada OS.', ok:false, why:'Nome digitado gera duplicação e erro de grafia ("Carlos" vs "Carlos S."). Listar as OS de um técnico viraria uma caça a variações.'},
          {t:'Colocar tudo em um campo de texto gigante chamado "dados".', ok:false, why:'Sem campos separados você não consegue filtrar, ordenar nem validar. O Cursor também perde a precisão do escopo.'}
        ]}}
  ]},
  { id:3, icon:'🔌', title:'APIs e Webhooks', sub:'Como os sistemas conversam', lessons:[
    { id:'3.1', title:'APIs: o garçom do restaurante', min:7,
      body:[
        `<div class="card analogy"><h3>🍽️ Pense num restaurante</h3><p>Você (o app) não entra na cozinha (o sistema). Você faz o pedido ao <b>garçom</b> (a <b>API</b>), que leva até a cozinha e traz o prato pronto. A API é o intermediário com regras claras do que pode ser pedido.</p></div>`,
        `<div class="pipe"><div class="node ink">App<small>faz o pedido</small></div><div class="ar">➜</div><div class="node yel">API<small>o garçom</small></div><div class="ar">➜</div><div class="node ink">Sistema<small>a cozinha</small></div></div>`,
        `<div class="card"><h3>Vocabulário em linguagem de gente</h3>
          <ol class="golden">
            <li><span><b>Requisição (HTTP)</b>: o pedido que o app faz.</span></li>
            <li><span><b>Endpoint</b>: o endereço específico do pedido, como a mesa 12.</span></li>
            <li><span><b>Método</b>: GET para buscar, POST para enviar algo novo, PUT/PATCH para alterar, DELETE para apagar.</span></li>
            <li><span><b>JSON</b>: o formato do "prato": texto organizado em chaves e valores.</span></li>
            <li><span><b>Chave de API / token</b>: o crachá que prova que você pode pedir.</span></li>
          </ol></div>`,
        `<div class="card"><h3>Um pedido real</h3><pre class="code">GET /ordens/101
Authorization: Bearer SEU_TOKEN

Resposta 200 OK:
{ "id": 101, "cliente": "Mercado Sol", "status": "aberta" }</pre>
          <p><b>Códigos de resposta:</b> 200 = deu certo · 401 = crachá ausente ou inválido · 404 = endereço não existe · 500 = a cozinha pegou fogo (erro no servidor).</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique o que é uma API usando só o restaurante, sem falar "programa".</div>`
      ],
      ch:{ who:'Seu app chamando o sistema do cliente', says:'A integração com o ERP começou a devolver o erro 401 ontem à noite. Ontem funcionava normalmente.',
        q:'O que o erro 401 indica e por onde você começa a investigar?',
        opts:[
          {t:'O servidor do ERP caiu; é só esperar voltar.', ok:false, why:'Servidor fora do ar costuma aparecer como erro 5xx (500, 502, 503), não como 401.'},
          {t:'Falha de autenticação: o token ou chave está ausente, errado ou expirou. Começo conferindo a credencial.', ok:true, why:'401 significa "não autorizado". Credenciais vencem e são trocadas, então conferir a chave é o primeiro passo.'},
          {t:'O endpoint não existe mais; preciso procurar o novo endereço.', ok:false, why:'Endereço inexistente é o 404. O 401 diz que o endereço existe, mas você não provou quem é.'}
        ]}},
    { id:'3.2', title:'Webhooks: a campainha', min:6,
      body:[
        `<div class="card analogy"><h3>🔔 Campainha vs. espiar pela janela</h3><p>Esperando uma encomenda, você pode ir à porta a cada 5 minutos (isso se chama <b>polling</b>) ou esperar a <b>campainha</b> tocar. O <b>webhook</b> é a campainha: o outro sistema avisa na hora em que algo acontece.</p></div>`,
        `<div class="pipe"><div class="node ink">Evento<small>pagamento aprovado</small></div><div class="ar">➜</div><div class="node yel">Webhook<small>a campainha</small></div><div class="ar">➜</div><div class="node ink">Seu sistema<small>libera o acesso</small></div></div>`,
        `<div class="term"><b>Payload</b> = o conteúdo da mensagem que chega no webhook (o "bilhete" que o entregador deixa). <b>URL de destino</b> = o endereço da sua campainha, onde o aviso deve bater.</div>`,
        `<div class="card"><h3>3 cuidados de quem constrói</h3>
          <ol class="golden">
            <li><span><b>Valide a assinatura</b>: confirme que o aviso veio de quem diz ser. Qualquer um pode bater na sua campainha.</span></li>
            <li><span><b>Responda rápido</b> com 200 e processe depois, senão o remetente acha que falhou e reenvia.</span></li>
            <li><span><b>Aceite repetição</b>: o mesmo aviso pode chegar duas vezes. Seu sistema não pode cobrar ou criar duas vezes.</span></li>
          </ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a diferença entre polling e webhook com a história da encomenda.</div>`
      ],
      ch:{ who:'Dono de uma loja de cursos online', says:'Quero que o aluno receba o acesso segundos depois de pagar, sem ninguém precisar liberar na mão.',
        q:'Como você faz o sistema ser avisado do pagamento?',
        opts:[
          {t:'Configurar um webhook no gateway de pagamento apontando para o meu fluxo.', ok:true, why:'Webhook entrega o aviso no instante do evento, sem gastar consultas e sem atraso.'},
          {t:'Pedir ao aluno que envie o comprovante por e-mail.', ok:false, why:'Isso devolve o trabalho manual ao processo e atrasa a liberação.'},
          {t:'Consultar a API do gateway de minuto em minuto.', ok:false, why:'Funciona, mas é polling: gasta consultas à toa e o aluno espera até um minuto. O webhook resolve melhor.'}
        ]}},
    { id:'3.3', title:'WhatsApp Business com botões', min:8,
      body:[
        `<div class="card analogy"><h3>🛎️ A recepção digital</h3><p>Pense na recepção de uma clínica: ela confirma a consulta e oferece opções ("confirmar, remarcar, cancelar"). A <b>API Oficial do WhatsApp Business</b> (da Meta) permite que o seu sistema faça essa recepção, com botões clicáveis no lugar de digitar.</p></div>`,
        `<div class="card"><h3>As peças principais</h3>
          <ol class="golden">
            <li><span><b>Janela de 24 horas</b>: depois que o cliente fala com você, é possível responder livremente por 24 h.</span></li>
            <li><span><b>Template (modelo) aprovado</b>: para <i>iniciar</i> uma conversa fora da janela, você usa uma mensagem pré-aprovada pela Meta.</span></li>
            <li><span><b>Mensagens interativas</b>: botões de resposta (até 3) e listas de opções (até 10 itens).</span></li>
            <li><span><b>Webhook de retorno</b>: quando o cliente toca num botão, o WhatsApp avisa seu sistema por webhook.</span></li>
          </ol></div>`,
        `<div class="card"><h3>Integrando um sistema antigo (legado)</h3><p>O sistema legado muitas vezes não "fala" com o WhatsApp. A ponte é um orquestrador (como o n8n, que você verá no próximo módulo):</p>
          <div class="pipe"><div class="node">Sistema legado<small>agenda a visita</small></div><div class="ar">➜</div><div class="node yel">Orquestrador<small>n8n</small></div><div class="ar">➜</div><div class="node ink">API do WhatsApp<small>envia botões</small></div></div>
          <div class="pipe"><div class="node ink">Cliente toca "Confirmar"</div><div class="ar">➜</div><div class="node yel">Webhook</div><div class="ar">➜</div><div class="node">Atualiza o legado</div></div></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique por que um botão é melhor que pedir ao cliente "digite 1 para confirmar".</div>`
      ],
      ch:{ who:'Gerente de uma empresa de manutenção', says:'Quero avisar amanhã de manhã o cliente sobre a visita técnica e pedir confirmação. Ele não fala com a gente no WhatsApp há semanas.',
        q:'O que você usa para iniciar essa conversa?',
        opts:[
          {t:'Um template de mensagem aprovado pela Meta, com botões Confirmar e Reagendar.', ok:true, why:'Fora da janela de 24 h, só é possível iniciar a conversa com template aprovado. Os botões de resposta rápida facilitam a confirmação.'},
          {t:'Uma mensagem de texto livre pela API.', ok:false, why:'Texto livre só é permitido dentro da janela de 24 h após o cliente falar com você. Fora dela, a Meta bloqueia o envio.'},
          {t:'Um robô não oficial ligado ao WhatsApp pessoal do técnico.', ok:false, why:'Automação não oficial viola as regras e pode banir o número. Em empresa, use sempre a API Oficial.'}
        ]}}
  ]},
  { id:4, icon:'⚙️', title:'Orquestração com n8n', sub:'Automatizar sem código', lessons:[
    { id:'4.1', title:'n8n: a linha de montagem', min:7,
      body:[
        `<div class="card analogy"><h3>🏭 Pense numa linha de montagem</h3><p>Uma fábrica tem uma esteira com estações: cada uma faz uma tarefa e passa o resultado adiante. O <b>n8n</b> é isso para dados: você liga <b>nós</b> (as estações) e o dado anda de um para o outro, sozinho.</p></div>`,
        `<div class="pipe"><div class="node yel">Gatilho<small>quando começa</small></div><div class="ar">➜</div><div class="node ink">Nó: busca dados</div><div class="ar">➜</div><div class="node ink">Nó: decide (IF)</div><div class="ar">➜</div><div class="node ink">Nó: envia</div></div>`,
        `<div class="term"><b>Nó (node)</b> = uma estação com uma tarefa. <b>Gatilho (trigger)</b> = o nó que dá a partida (um horário, um webhook, uma mensagem). <b>Fluxo (workflow)</b> = a linha inteira. <b>Execução</b> = cada vez que a esteira roda.</div>`,
        `<div class="card"><h3>Onde o n8n roda?</h3>
          <p><b>Nuvem do n8n:</b> pronto para usar, você paga mensalidade.<br><b>Servidor próprio (self-hosted):</b> você instala em uma máquina sua ou alugada, com mais controle sobre os dados e custo, mas assume manutenção e segurança.</p>
          <p><b>Credenciais</b> (senhas e tokens) ficam guardadas em um cofre do próprio n8n, nunca escritas dentro do fluxo.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> descreva um fluxo do seu dia a dia como uma esteira de fábrica: gatilho, estações e resultado.</div>`
      ],
      ch:{ who:'Diretor de uma empresa de serviços', says:'Quero receber todo dia, às 7h da manhã, um resumo das ordens de serviço abertas, sem ninguém precisar montar.',
        q:'Qual gatilho inicia esse fluxo?',
        opts:[
          {t:'Gatilho manual: eu clico no botão todo dia.', ok:false, why:'Isso mantém a tarefa dependente de alguém lembrar de clicar. O objetivo era eliminar isso.'},
          {t:'Gatilho de webhook, esperando um aviso externo.', ok:false, why:'Webhook espera um evento de fora. Aqui o motivo da partida é o relógio, não um evento.'},
          {t:'Gatilho de agendamento (Schedule), configurado para 7h todos os dias.', ok:true, why:'O Schedule Trigger dispara por horário. É o gatilho certo para rotinas diárias, semanais ou mensais.'}
        ]}},
    { id:'4.2', title:'Agentes de IA com memória e ferramentas', min:8,
      body:[
        `<div class="card analogy"><h3>🧑‍💼 Um estagiário esperto</h3><p>Um agente de IA é como um estagiário muito rápido: tem um <b>cérebro</b> (o modelo de linguagem), um <b>caderno</b> (a memória) e <b>ferramentas</b> (consultar o sistema, calcular, enviar mensagem). Sem ferramentas, ele só conversa. Com ferramentas, ele age.</p></div>`,
        `<div class="term"><b>LLM</b> = o modelo de IA que entende e escreve texto. <b>Prompt de sistema</b> = a descrição do cargo do estagiário. <b>Memória</b> = o que ele lembra da conversa. <b>Tool (ferramenta)</b> = uma ação que ele pode chamar. <b>Alucinação</b> = quando ele inventa uma resposta que parece certa.</div>`,
        `<div class="card"><h3>As peças do nó AI Agent no n8n</h3>
          <div class="pipe"><div class="node yel">AI Agent</div></div>
          <ol class="golden">
            <li><span><b>Chat Model</b>: o cérebro (você escolhe o modelo e conecta a credencial).</span></li>
            <li><span><b>Memory</b>: guarda as últimas mensagens para ele não "esquecer" o assunto.</span></li>
            <li><span><b>Tools</b>: ferramentas como consultar uma API, buscar no banco ou chamar outro fluxo seu (Custom Tool).</span></li>
          </ol></div>`,
        `<div class="card"><h3>Regra de ouro contra invenção</h3><p>Nunca deixe o agente "adivinhar" dados do negócio. Dê a ele uma <b>ferramenta</b> que busca o dado real e instrua no prompt de sistema: <i>"responda apenas com o que a ferramenta retornar; se não encontrar, diga que não sabe e encaminhe a um humano"</i>.</p></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique a diferença entre um chatbot só com cérebro e um agente com cérebro e ferramentas.</div>`
      ],
      ch:{ who:'Gerente de atendimento', says:'Nosso agente respondeu a um cliente que a ordem de serviço dele estava "em rota", mas essa OS nem existe no sistema. Ele inventou.',
        q:'Qual é a correção mais segura?',
        opts:[
          {t:'Pedir no prompt que ele seja mais criativo e confiante.', ok:false, why:'Mais criatividade aumenta a chance de invenção. É o oposto do que você precisa.'},
          {t:'Dar a ele uma ferramenta que consulta a OS real e instruí-lo a responder só com o que ela devolver.', ok:true, why:'O dado passa a vir do sistema, não da "imaginação" do modelo. E, se a ferramenta não achar a OS, o agente deve dizer que não encontrou.'},
          {t:'Apenas trocar por um modelo de IA maior.', ok:false, why:'Modelo maior pode errar menos, mas sem acesso ao dado real continua podendo inventar. O problema é falta de ferramenta e de regra.'}
        ]}},
    { id:'4.3', title:'Rotinas de segundo plano', min:8,
      body:[
        `<div class="card analogy"><h3>🧹 O zelador noturno</h3><p>Enquanto todos dormem, o zelador limpa, confere portas e guarda tudo no lugar. As <b>rotinas em segundo plano</b> fazem o mesmo com os seus dados: backups, relatórios e conferências, sem ninguém pedir.</p></div>`,
        `<div class="card"><h3>Receita: backup diário compactado</h3>
          <div class="pipe"><div class="node yel">Schedule<small>todo dia às 2h</small></div><div class="ar">➜</div><div class="node ink">Lê os dados<small>banco ou API</small></div><div class="ar">➜</div><div class="node ink">Compacta<small>arquivo .zip</small></div><div class="ar">➜</div><div class="node ink">Guarda<small>Drive ou nuvem</small></div></div></div>`,
        `<div class="card"><h3>Receita: relatório automático</h3>
          <div class="pipe"><div class="node yel">Schedule<small>7h, dias úteis</small></div><div class="ar">➜</div><div class="node ink">Busca OS abertas</div><div class="ar">➜</div><div class="node ink">Monta o resumo</div><div class="ar">➜</div><div class="node ink">Envia por e-mail ou WhatsApp</div></div></div>`,
        `<div class="card"><h3>O que separa rotina amadora de profissional</h3>
          <ol class="golden">
            <li><span><b>Aviso de falha</b>: um fluxo de erro que te alerta quando algo quebra.</span></li>
            <li><span><b>Teste antes de agendar</b>: rode manualmente e confira o resultado.</span></li>
            <li><span><b>Nome com data</b>: backup_2026-10-02.zip, para achar o arquivo certo depois.</span></li>
            <li><span><b>Teste de restauração</b>: um backup só vale se você já provou que consegue restaurar.</span></li>
          </ol></div>`,
        `<div class="feyn"><b>🧒 Técnica Feynman:</b> explique por que um backup que nunca foi testado é só uma esperança.</div>`
      ],
      ch:{ who:'Dono de uma empresa', says:'O backup noturno falhou por 3 dias seguidos e ninguém percebeu. Só descobrimos quando precisamos restaurar um arquivo.',
        q:'O que você adiciona ao fluxo para isso não se repetir?',
        opts:[
          {t:'Um fluxo de erro (Error Trigger) que avisa por WhatsApp ou e-mail sempre que o backup falhar.', ok:true, why:'Falhas silenciosas são o maior risco de rotinas automáticas. O alerta transforma o erro em um aviso imediato.'},
          {t:'Rodar o backup 3 vezes mais por dia.', ok:false, why:'Mais execuções não resolvem se ninguém é avisado quando elas falham.'},
          {t:'Desligar o backup automático e voltar a fazer manualmente.', ok:false, why:'Manual depende de memória e disciplina. O correto é manter a automação e adicionar monitoramento.'}
        ]}}
  ]}
];

const MODDONE = {
  1:'Você já sabe extrair a dor real, desenhar o fluxo e provar o ROI.',
  2:'Você já sabe escolher entre Firebase e Supabase e desenhar a planta dos dados para o Cursor.',
  3:'Você já entende APIs, webhooks e como ligar um sistema antigo ao WhatsApp Business.',
  4:'Curso completo! Você já sabe orquestrar fluxos, criar agentes de IA com ferramentas e manter rotinas confiáveis.'
};

const REGRA = 'Regra de execução: particione o trabalho em etapas pequenas e isoladas; não modifique, não refatore e não reformate nenhuma parte já validada do projeto; ao final, liste exatamente quais arquivos foram criados ou alterados.';

const PROMPTS = {
  1: [
    { title:'Template de diagnóstico do cliente', desc:'Cria o documento padrão para registrar dor real, processo atual e resultado esperado.',
      text:[
'Atue como Engenheiro de Software Sênior.',
'',
'Contexto: estou levantando requisitos para um cliente do setor [SETOR]. A dor informada por ele é: "[DOR DECLARADA PELO CLIENTE]".',
'',
'Objetivo: criar o arquivo docs/DIAGNOSTICO.md como template reutilizável de diagnóstico, com as seções:',
'1. Dor declarada vs. dor real (técnica dos 5 Porquês)',
'2. Processo atual passo a passo (quem, o quê, ferramenta, tempo gasto)',
'3. Frequência e volume (vezes por semana)',
'4. Impacto quando dá errado',
'5. Resultado esperado e mensurável',
'6. Premissas e riscos',
'7. Critérios de aceite',
'',
'Requisitos: português objetivo; tabelas Markdown onde fizer sentido; campos em branco marcados com [PREENCHER]; não criar código e não alterar outros arquivos.',
'',
REGRA].join('\n') },
    { title:'Fluxos Atual vs. Automatizado (Mermaid)', desc:'Gera os dois fluxogramas lado a lado para apresentar ao cliente.',
      text:[
'Atue como Engenheiro de Software Sênior e analista de processos.',
'',
'Contexto: o processo atual do cliente é o seguinte: [DESCREVER PASSOS ATUAIS, UM POR LINHA, COM TEMPO GASTO].',
'',
'Objetivo: criar o arquivo docs/FLUXOS.md contendo dois diagramas em Mermaid (flowchart TD):',
'1. Processo atual (AS-IS), destacando em vermelho o gargalo principal.',
'2. Processo automatizado proposto (TO-BE), destacando em verde as etapas eliminadas ou automatizadas.',
'',
'Ao final do arquivo, inclua uma tabela comparando: número de etapas, tempo estimado por ciclo e pontos de falha, antes e depois.',
'',
'Restrições: não criar código de aplicação e não alterar outros arquivos.',
'',
REGRA].join('\n') },
    { title:'Calculadora de ROI no app', desc:'Escopo para uma tela de cálculo de horas economizadas e payback.',
      text:[
'Atue como Engenheiro de Software Full-Stack Sênior.',
'',
'Contexto: projeto em [STACK DO PROJETO, ex.: Flutter]. Preciso de uma ferramenta interna para demonstrar o ROI de uma automação a clientes.',
'',
'Objetivo: implementar a tela "Calculadora de ROI" com os campos: número de pessoas, horas por dia, dias por semana, valor da hora (R$) e custo do projeto (R$).',
'',
'Regras de cálculo (isoladas em uma função pura e testável):',
'- horasMes = pessoas x horasDia x diasSemana x 4,33',
'- economiaMes = horasMes x valorHora',
'- paybackMeses = custoProjeto / economiaMes (tratar divisão por zero)',
'',
'Saída em tempo real: horas salvas por mês, economia mensal em R$ e payback em meses. Formatar valores no padrão pt-BR.',
'',
'Critérios de aceite: função de cálculo coberta por testes unitários (caso base: 1 pessoa, 2 h/dia, 5 dias, R$ 30/h, projeto de R$ 4.000 resulta em payback aproximado de 3,1 meses); sem alterar telas ou módulos existentes.',
'',
REGRA].join('\n') }
  ],
  2: [
    { title:'Modelo de dados do Firestore', desc:'Gera a planta dos dados (coleções, campos e relações) antes de qualquer código.',
      text:[
'Atue como Arquiteto de Dados Sênior, especialista em Firebase Firestore.',
'',
'Contexto: o sistema atende [DESCREVER O NEGÓCIO EM 2 FRASES]. As entidades principais são: [LISTAR: ex. clientes, técnicos, ordens de serviço, relatórios].',
'',
'Objetivo: criar o arquivo docs/MODELO_DADOS.md com o modelo completo, contendo para cada coleção:',
'1. Nome da coleção e finalidade',
'2. Tabela de campos (nome, tipo, obrigatório, descrição, exemplo)',
'3. Relações entre coleções, sempre por ID (nunca por nome digitado)',
'4. Consultas mais frequentes e índices necessários',
'5. Um documento de exemplo em JSON',
'',
'Restrições: não escrever código de aplicação, não criar regras de segurança nesta etapa e não alterar outros arquivos.',
'',
REGRA].join('\n') },
    { title:'Regras de segurança do Firestore', desc:'Define quem pode ler e escrever em cada coleção, por perfil de usuário.',
      text:[
'Atue como Engenheiro de Segurança Sênior, com foco em Firebase.',
'',
'Contexto: o modelo de dados está documentado em docs/MODELO_DADOS.md. Os perfis de usuário são: [ex. admin, gestor, técnico de campo].',
'',
'Objetivo: propor o arquivo firestore.rules aplicando o princípio do menor privilégio:',
'- Nenhum acesso para usuários não autenticados.',
'- [PERFIL TÉCNICO]: lê e escreve apenas documentos em que o campo tecnicoId seja igual ao seu uid.',
'- [PERFIL ADMIN]: leitura e escrita completas.',
'- Validação dos campos obrigatórios e dos tipos nas escritas.',
'',
'Entregáveis: o arquivo de regras, comentários explicando cada bloco e uma lista de casos de teste (permitido e negado) para validar no emulador. Não publicar (deploy) nada.',
'',
REGRA].join('\n') },
    { title:'Camada de acesso a dados (CRUD)', desc:'Cria a classe que cria, lê, atualiza e apaga registros de uma coleção.',
      text:[
'Atue como Engenheiro de Software Sênior em [STACK DO PROJETO, ex.: Flutter + Firebase].',
'',
'Objetivo: implementar um repositório para a coleção [NOME DA COLEÇÃO] seguindo o modelo em docs/MODELO_DADOS.md, com os métodos: criar, buscarPorId, listarPorStatus, atualizar e remover.',
'',
'Requisitos:',
'- Modelo tipado com conversão de e para o formato do Firestore.',
'- Tratamento de erros com mensagens claras e sem expor detalhes internos.',
'- Testes unitários usando um banco falso ou mock, cobrindo o caminho feliz e um caso de erro por método.',
'- Nenhuma alteração de interface nem de outros repositórios.',
'',
REGRA].join('\n') }
  ],
  3: [
    { title:'Cliente de API (HTTP) robusto', desc:'Camada única para chamar APIs externas com autenticação e tratamento de erros.',
      text:[
'Atue como Engenheiro de Software Sênior em [STACK DO PROJETO].',
'',
'Contexto: preciso integrar com a API [NOME DO SISTEMA] cuja documentação está em [URL DA DOCUMENTAÇÃO].',
'',
'Objetivo: criar um serviço de API (ApiClient) com:',
'- URL base e token lidos de variáveis de ambiente (nunca fixos no código).',
'- Timeout e nova tentativa limitada para falhas temporárias.',
'- Tratamento explícito: 401 (credencial inválida), 404 (não encontrado), 429 (limite de uso) e 5xx (erro do servidor), cada um com mensagem e tipo de erro próprios.',
'- Conversão da resposta JSON para modelos tipados.',
'- Testes com respostas simuladas para cada código de status acima.',
'',
REGRA].join('\n') },
    { title:'Receptor seguro de webhook', desc:'Endpoint que recebe avisos de outros sistemas com validação e proteção contra duplicidade.',
      text:[
'Atue como Engenheiro de Backend Sênior.',
'',
'Contexto: o serviço [NOME DO SISTEMA EXTERNO] enviará webhooks para o nosso sistema quando o evento [EVENTO] ocorrer.',
'',
'Objetivo: criar o endpoint receptor (ex.: Cloud Function) que:',
'1. Valida a assinatura do webhook usando um segredo guardado em variável de ambiente.',
'2. Responde 200 imediatamente e delega o processamento.',
'3. Garante idempotência: o mesmo evento recebido duas vezes não pode gerar duas ações (usar o ID do evento).',
'4. Registra log de cada evento recebido, sem gravar dados sensíveis.',
'5. Rejeita com 401 qualquer requisição com assinatura inválida.',
'',
'Entregar também testes para: assinatura válida, assinatura inválida e evento duplicado.',
'',
REGRA].join('\n') },
    { title:'Especificação do fluxo WhatsApp com botões', desc:'Documento de escopo do fluxo de confirmação com templates e mensagens interativas.',
      text:[
'Atue como Arquiteto de Soluções Sênior, especialista em WhatsApp Business Platform (API Oficial da Meta).',
'',
'Contexto: queremos que o sistema [NOME DO SISTEMA] avise o cliente sobre [EVENTO, ex.: visita técnica agendada] e receba a resposta por botões.',
'',
'Objetivo: criar o arquivo docs/FLUXO_WHATSAPP.md contendo:',
'1. Texto do template de abertura (para conversas fora da janela de 24 h) e seus botões de resposta rápida: [BOTÕES, máximo 3].',
'2. Mensagens de resposta dentro da janela de 24 h para cada botão tocado.',
'3. Formato esperado do webhook de retorno e quais campos serão lidos.',
'4. Máquina de estados (diagrama Mermaid): pendente, confirmada, reagendar, cancelada, sem resposta.',
'5. Regras de exceção: cliente não responde, número inválido, opt-out.',
'',
'Restrições: apenas documentação; não escrever código nesta etapa.',
'',
REGRA].join('\n') }
  ],
  4: [
    { title:'Especificação de fluxo n8n', desc:'Documento que descreve cada nó do fluxo antes de montá-lo no n8n.',
      text:[
'Atue como Arquiteto de Automações Sênior, especialista em n8n.',
'',
'Contexto: preciso automatizar o processo [DESCREVER O PROCESSO].',
'',
'Objetivo: criar o arquivo docs/N8N_FLUXOS.md especificando o fluxo, nó a nó, em uma tabela com as colunas: ordem, tipo de nó, finalidade, entrada, saída, credencial necessária e tratamento de erro.',
'',
'Incluir: o gatilho (Schedule ou Webhook) com justificativa, um diagrama Mermaid do fluxo, um fluxo secundário com Error Trigger para alertas de falha, e um checklist de teste com execução manual antes de agendar.',
'',
'Restrições: não colocar senhas ou tokens no documento; apenas nomes das credenciais.',
'',
REGRA].join('\n') },
    { title:'Prompt de sistema do agente de IA', desc:'Redige as instruções do agente de atendimento com regras anti-invenção.',
      text:[
'Atue como Engenheiro de Prompts Sênior.',
'',
'Contexto: o agente de IA atenderá clientes da empresa [NOME] pelo canal [WHATSAPP/SITE], usando o n8n com as ferramentas: [LISTAR: ex. consultar_os, abrir_chamado].',
'',
'Objetivo: escrever o prompt de sistema em docs/PROMPT_AGENTE.md contendo:',
'1. Papel, tom de voz e idioma do agente.',
'2. Regra obrigatória: responder dados do negócio somente com o retorno das ferramentas; se a ferramenta não encontrar, dizer que não localizou, sem inventar.',
'3. Quando e como encaminhar a um atendente humano.',
'4. Limites: o que o agente nunca deve fazer (ex.: prometer prazos, informar valores não consultados).',
'5. Cinco exemplos de conversa (dois casos de sucesso, dois de não encontrado e um de encaminhamento).',
'',
REGRA].join('\n') },
    { title:'Rotina de backup e relatório diário', desc:'Escopo de uma rotina agendada que exporta dados, compacta, guarda e avisa.',
      text:[
'Atue como Engenheiro de Confiabilidade (SRE) Sênior.',
'',
'Contexto: precisamos de uma rotina diária para a base [NOME DO BANCO OU API].',
'',
'Objetivo: especificar e implementar a rotina com as etapas: (1) exportar as coleções [LISTAR] em JSON, (2) compactar em arquivo nomeado com a data (backup_AAAA-MM-DD.zip), (3) enviar para [DESTINO, ex.: Google Drive], (4) manter apenas os últimos [N] dias, (5) enviar um resumo diário por [CANAL].',
'',
'Requisitos: credenciais somente por variáveis de ambiente; alerta imediato em caso de falha em qualquer etapa; log de cada execução; e um procedimento documentado de restauração com teste.',
'',
REGRA].join('\n') }
  ]
};

const THEME = { 1:['#ff5a5f','#ff9a3c'], 2:['#22d3ee','#3b82f6'], 3:['#c084fc','#ec4899'], 4:['#4ade80','#a3e635'] };
const LIC = { '1.1':'🩺','1.2':'🗺️','1.3':'💰','2.1':'🗃️','2.2':'⚖️','2.3':'📐','3.1':'🍽️','3.2':'🔔','3.3':'💬','4.1':'🏭','4.2':'🤖','4.3':'🌙' };

function calc(root){
  const $ = id => root.querySelector('#' + id);
  const g = id => parseFloat($(id).value);
  const p=g('c-p'), h=g('c-h'), dd=g('c-d'), v=g('c-v'), k=g('c-k');
  const brl = n => n.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0});
  $('o-p').textContent = p; $('o-h').textContent = String(h).replace('.',','); $('o-d').textContent = dd;
  $('o-v').textContent = brl(v); $('o-k').textContent = brl(k);
  const hm = p*h*dd*4.33, eco = hm*v, pay = eco>0 ? k/eco : 0;
  $('r-h').textContent = hm.toLocaleString('pt-BR',{maximumFractionDigits:0}) + ' h';
  $('r-e').textContent = brl(eco);
  $('r-p').textContent = pay.toLocaleString('pt-BR',{maximumFractionDigits:1}) + ' meses';
}

return {
  id: 'arquiteto-solucoes-ia',
  modulos: MODULES,
  conclusaoModulo: MODDONE,
  prompts: PROMPTS,
  cores: THEME,
  iconesLicao: LIC,
  niveis: [[1500,'Arquiteto'],[900,'Projetista'],[300,'Analista'],[0,'Aprendiz']],
  acerto: 'Acertou, Arquiteto!',
  aoAbrirLicao: { '1.3': calc }
};
})());
