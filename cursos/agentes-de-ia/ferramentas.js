PORTAL.registrarFerramentas({
  'agentes-de-ia': {
    1: [
      { nome: 'Google AI Studio', url: 'https://aistudio.google.com/', icone: '🧪', plano: 'Gratuito com limites de uso',
        para_que: 'Testar o prompt do sistema de um agente no navegador e ver como as instruções mudam o comportamento do modelo.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escolha o processo do seu projeto do módulo (ex.: triagem de pedidos de suporte).', 'No campo "System instructions", escreva o prompt do sistema com papel, objetivo, limites e formato de resposta.', 'Teste 3 mensagens: um caso comum, um caso fora do escopo e um pedido que exige perguntar antes de agir.', 'Ajuste as instruções até o agente recusar ou pedir esclarecimento quando deve, e anote o que mudou.'],
        cuidado: 'Use casos fictícios; não cole dados de clientes nem documentos internos.' },
      { nome: 'Excalidraw', url: 'https://excalidraw.com/', icone: '✏️', plano: 'Gratuito no navegador, sem cadastro',
        para_que: 'Desenhar a arquitetura do seu agente: as 4 peças e o ciclo pensar, agir e observar.',
        nivel_exigido: 'Sem programar',
        pratica: ['Desenhe o processo escolhido primeiro como fluxo fixo (passos sempre na mesma ordem).', 'Ao lado, desenhe a versão com agente: modelo, instruções, ferramentas e memória, com as setas do ciclo.', 'Marque em vermelho os pontos em que o agente decide sozinho.', 'Escreva embaixo qual padrão de arquitetura você escolheu e por quê, e exporte a imagem para o seu projeto.'] }
    ],
    2: [
      { nome: 'n8n', url: 'https://n8n.io/', icone: '🔗', plano: 'Gratuito (self-host) ou teste de 14 dias na nuvem',
        para_que: 'Montar um agente de verdade com o nó AI Agent, uma ferramenta e memória, e ver cada chamada acontecendo.',
        nivel_exigido: 'Básico de lógica',
        pratica: ['Crie um fluxo com o gatilho de chat e o nó AI Agent ligado a um modelo de IA.', 'Conecte uma memória simples (janela de mensagens) e uma ferramenta, como uma calculadora ou uma planilha de teste.', 'Converse com o agente e abra o registro da execução para ver quando ele escolheu usar a ferramenta.', 'Mude o tamanho da janela de memória e anote o que ele esquece.'],
        cuidado: 'Conecte só contas e planilhas de teste; nunca dê acesso a dados reais de clientes neste exercício.' },
      { nome: 'Google AI Studio: chamada de funções', url: 'https://aistudio.google.com/', icone: '🧰', plano: 'Gratuito com limites de uso',
        para_que: 'Declarar uma ferramenta com contrato (nome, descrição e parâmetros) e ver o modelo decidir chamá-la.',
        nivel_exigido: 'Básico de lógica',
        pratica: ['Nas ferramentas do chat, ative "Function calling" e declare uma função do seu catálogo, com parâmetros e tipos.', 'Mande uma mensagem que precisa da função e veja o pedido de chamada que o modelo monta.', 'Mande uma mensagem com dado faltando e observe se ele pergunta ou inventa o parâmetro.', 'Melhore a descrição da função e compare o resultado.'] },
      { nome: 'MCP Inspector', url: 'https://modelcontextprotocol.io/docs/tools/inspector', icone: '🔌', plano: 'Gratuito (código aberto)',
        para_que: 'Abrir um servidor MCP e ver exatamente quais ferramentas, parâmetros e respostas ele expõe para um agente.',
        nivel_exigido: 'Programação básica (Node.js instalado)',
        pratica: ['Siga a página oficial para rodar o Inspector com um servidor MCP de exemplo (ex.: o de sistema de arquivos, numa pasta de teste).', 'Liste as ferramentas do servidor e leia o contrato de cada uma.', 'Execute uma ferramenta com parâmetros válidos e depois com um parâmetro inválido, e compare as respostas.', 'Anote quais ferramentas você deixaria fora do seu agente por darem poder demais.'],
        cuidado: 'Aponte o servidor só para uma pasta de teste, nunca para pastas com documentos pessoais.' }
    ],
    3: [
      { nome: 'Gandalf (Lakera)', url: 'https://gandalf.lakera.ai/', icone: '🧙', plano: 'Gratuito no navegador',
        para_que: 'Jogo em que você tenta convencer uma IA a revelar uma senha, para sentir na prática como funciona a injeção de prompt.',
        nivel_exigido: 'Sem programar',
        pratica: ['Jogue os primeiros 4 níveis.', 'Anote, em cada nível, qual defesa o jogo acrescentou e qual estratégia sua passou ou falhou.', 'Relacione cada defesa com o que o módulo ensina: o que é controle dentro do modelo e o que deveria ficar fora dele.'] },
      { nome: 'Promptfoo', url: 'https://www.promptfoo.dev/', icone: '🎯', plano: 'Gratuito (código aberto), roda no seu computador',
        para_que: 'Criar testes automáticos e ataques de red team contra o prompt do seu agente antes de liberar.',
        nivel_exigido: 'Programação básica (Node.js e chave de API de um modelo)',
        pratica: ['Siga o guia inicial para criar um projeto de teste com o prompt do sistema do seu agente.', 'Escreva 5 casos: 3 de uso normal e 2 de ataque (pedido fora do escopo e tentativa de extrair instruções).', 'Rode a avaliação e abra o relatório no navegador.', 'Corrija o prompt ou um controle externo para o caso que falhou e rode de novo.'],
        cuidado: 'Guarde a chave de API em variável de ambiente, nunca dentro do arquivo de teste.' }
    ],
    4: [
      { nome: 'Langfuse', url: 'https://langfuse.com/', icone: '🔍', plano: 'Plano gratuito na nuvem (Hobby) ou código aberto',
        para_que: 'Rastrear cada passo do agente: chamadas ao modelo, ferramentas usadas, tokens, custo e tempo.',
        nivel_exigido: 'Programação básica',
        pratica: ['Crie um projeto e conecte um exemplo do guia inicial (ou a integração do n8n/Flowise, se já usa).', 'Rode o agente 5 vezes com perguntas diferentes.', 'Abra um rastro e identifique o passo mais lento e o mais caro.', 'Dê uma nota a 2 execuções e anote qual delas viraria um caso de teste.'],
        cuidado: 'Os rastros guardam as mensagens; use dados fictícios ou mascare dados pessoais.' },
      { nome: 'Artificial Analysis', url: 'https://artificialanalysis.ai/', icone: '⏱️', plano: 'Gratuito para consultar, sem cadastro',
        para_que: 'Comparar modelos por qualidade, preço por milhão de tokens e velocidade, para ver se o agente cabe no orçamento.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escolha 3 modelos que você usaria no seu agente.', 'Anote preço de entrada, preço de saída, tempo até o primeiro token e velocidade de cada um.', 'Estime o custo de uma execução típica do seu agente (quantas chamadas e tokens por tarefa) em cada modelo.', 'Decida qual modelo usar em cada passo e justifique em 3 linhas.'] }
    ],
    5: [
      { nome: 'Langflow', url: 'https://www.langflow.org/', icone: '🕸️', plano: 'Gratuito (código aberto, instalação local)',
        para_que: 'Montar visualmente um sistema com mais de um agente para comparar com a versão de agente único.',
        nivel_exigido: 'Básico de lógica (instalar com Python ou o app de desktop)',
        pratica: ['Crie um fluxo a partir de um modelo pronto com agentes.', 'Divida a tarefa em 2 agentes com papéis claros (ex.: um pesquisa, o outro revisa).', 'Rode a mesma tarefa com 1 agente e com 2, e compare qualidade, tempo e número de chamadas.', 'Anote se dividir valeu a pena para o seu caso.'],
        cuidado: 'Use só dados de teste e não deixe chaves de API em fluxos exportados.' },
      { nome: 'Claude', url: 'https://claude.ai/', icone: '🧭', plano: 'Plano gratuito com limite de uso',
        para_que: 'Pedir uma segunda opinião crítica sobre o seu plano de implantação e a ficha de governança.',
        nivel_exigido: 'Sem programar',
        pratica: ['Cole uma versão resumida e sem dados pessoais do seu plano (sombra, piloto e escala).', 'Peça que ele aponte riscos de LGPD, critérios de reversão faltando e responsáveis indefinidos.', 'Decida quais apontamentos fazem sentido e atualize o plano.', 'Registre o que você rejeitou e por quê.'],
        cuidado: 'Não cole nomes de clientes, contratos nem dados internos da empresa.' },
      { nome: 'Mermaid Live Editor', url: 'https://mermaid.live/', icone: '🗓️', plano: 'Gratuito no navegador, sem cadastro',
        para_que: 'Desenhar o cronograma da implantação gradual em texto e gerar o diagrama na hora.',
        nivel_exigido: 'Básico de lógica',
        pratica: ['Abra o exemplo de diagrama de Gantt.', 'Troque as tarefas pelas fases do seu plano: modo sombra, piloto e escala, com datas.', 'Acrescente os marcos de decisão (avançar ou reverter) entre as fases.', 'Exporte a imagem e anexe ao seu projeto do módulo.'] }
    ]
  }
});
