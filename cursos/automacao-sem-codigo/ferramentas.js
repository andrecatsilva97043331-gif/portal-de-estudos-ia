PORTAL.registrarFerramentas({
  'automacao-sem-codigo': {
    1: [
      { nome: 'Claude', url: 'https://claude.ai/', icone: '🟠', plano: 'Plano gratuito com limite de mensagens',
        para_que: 'Conversar sobre um processo manual seu e separar gatilho, condição e ação antes de montar qualquer fluxo.',
        nivel_exigido: 'Sem programar',
        pratica: ['Descreva com suas palavras uma tarefa repetitiva do seu trabalho (ex.: responder orçamentos ou registrar pedidos).', 'Peça que a IA te faça perguntas sobre exceções e casos que dão errado.', 'Peça que ela organize o processo em gatilho, condições e ações, em lista.', 'Corrija o que estiver errado: você conhece o processo melhor que a IA.'],
        cuidado: 'Descreva o processo sem dados reais de clientes.' },
      { nome: 'Excalidraw', url: 'https://excalidraw.com/', icone: '✏️', plano: 'Gratuito, sem cadastro',
        para_que: 'Desenhar o mapa do processo à mão livre, com caixas e setas, antes de automatizar.',
        nivel_exigido: 'Sem programar',
        pratica: ['Desenhe o processo atual em caixas, do gatilho até o resultado final.', 'Pinte de outra cor as etapas que são repetitivas e seguem sempre a mesma regra.', 'Marque com um losango cada decisão (se isso, então aquilo).', 'Exporte a imagem e guarde para o projeto do módulo.'] }
    ],
    2: [
      { nome: 'Make', url: 'https://www.make.com/', icone: '🟣', plano: 'Plano gratuito (1.000 operações/mês)',
        para_que: 'Montar fluxos visuais ligando formulário, planilha e aviso, sem programar.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie um Google Formulário de teste com 3 campos (nome, produto, quantidade).', 'No Make, crie um cenário que leva cada resposta para uma linha do Google Planilhas.', 'Adicione uma etapa que envia um aviso por e-mail para você com os dados do pedido.', 'Envie 2 respostas de teste e confira a planilha e o e-mail.'],
        cuidado: 'Use dados fictícios nos testes e conecte só contas suas.' },
      { nome: 'Zapier', url: 'https://zapier.com/', icone: '⚡', plano: 'Plano gratuito com limite de tarefas',
        para_que: 'Comparar outra ferramenta de automação e usar a IA dela para montar um rascunho de fluxo a partir da sua descrição.',
        nivel_exigido: 'Sem programar',
        pratica: ['Descreva, com suas palavras, o mesmo fluxo que você montou no Make.', 'Deixe a IA do Zapier montar o rascunho e revise cada etapa e cada campo.', 'Teste com um dado fictício e veja o histórico da execução.', 'Anote: qual ferramenta foi mais fácil e qual limite do plano gratuito pesaria no seu caso?'] },
      { nome: 'Webhook.site', url: 'https://webhook.site/', icone: '🪝', plano: 'Gratuito, sem cadastro (endereços temporários)',
        para_que: 'Ver na tela, em tempo real, o que chega em um webhook: campos, formatos e dados entre etapas.',
        nivel_exigido: 'Sem programar',
        pratica: ['Abra o site e copie o endereço único que ele cria para você.', 'No Make ou no Zapier, adicione uma etapa que envia os dados do formulário para esse endereço.', 'Envie uma resposta de teste e veja os campos chegando no Webhook.site.', 'Anote o nome de cada campo e o formato (texto, número, data).'],
        cuidado: 'O endereço é público para quem tiver o link: nunca envie dados reais nem senhas.' }
    ],
    3: [
      { nome: 'Make: tratamento de erros', url: 'https://www.make.com/', icone: '🛟', plano: 'Plano gratuito (1.000 operações/mês)',
        para_que: 'Ver o histórico de execuções, criar rotas de erro e evitar registros duplicados no seu fluxo.',
        nivel_exigido: 'Sem programar',
        pratica: ['Abra o cenário do módulo anterior e provoque um erro de propósito (ex.: um campo obrigatório vazio).', 'Veja no histórico qual etapa falhou e com quais dados.', 'Adicione uma rota de erro que te avisa quando algo falhar.', 'Antes de gravar na planilha, adicione uma busca que confere se o pedido já existe, para não duplicar ao reprocessar.'] },
      { nome: 'Google Gemini', url: 'https://gemini.google.com/', icone: '✨', plano: 'Gratuito com conta Google (há limites de uso)',
        para_que: 'Revisar a documentação do fluxo e gerar casos de teste fictícios, incluindo os que dão errado.',
        nivel_exigido: 'Sem programar',
        pratica: ['Descreva o seu fluxo etapa por etapa, sem chaves nem senhas.', 'Peça uma lista de casos de teste com dados fictícios, incluindo entradas estranhas e repetidas.', 'Peça também uma revisão de riscos de segurança e de custo (ex.: fluxo que roda sem parar).', 'Rode pelo menos 3 desses testes no seu fluxo e anote o resultado.'],
        cuidado: 'Nunca cole chaves de API, tokens ou senhas em uma IA.' },
      { nome: 'Mermaid Live Editor', url: 'https://mermaid.live/', icone: '🧜', plano: 'Gratuito, sem cadastro',
        para_que: 'Documentar o fluxo em um diagrama que outra pessoa entende e que fica fácil de atualizar.',
        nivel_exigido: 'Sem programar',
        pratica: ['Abra um dos exemplos de fluxograma do editor.', 'Troque os textos das caixas pelas etapas do seu fluxo, incluindo a rota de erro.', 'Veja o diagrama se atualizar ao lado enquanto você edita.', 'Exporte a imagem e junte ao documento do fluxo, com dono, data e como reprocessar.'] }
    ],
    4: [
      { nome: 'Google AI Studio', url: 'https://aistudio.google.com/', icone: '🧪', plano: 'Gratuito com conta Google (cota limitada; no uso grátis o Google pode usar os dados para melhorar produtos)',
        para_que: 'Testar a instrução fixa de uma etapa de IA (classificar ou extrair dados) antes de colocá-la no fluxo.',
        nivel_exigido: 'Básico de lógica',
        pratica: ['Escreva 5 mensagens fictícias de clientes (ex.: pedidos, reclamações e dúvidas).', 'Escreva a sua instrução pedindo que a IA extraia os campos que você definiu e devolva sempre no mesmo formato.', 'Rode as 5 mensagens e conte quantas saíram certas.', 'Ajuste a instrução para dizer o que fazer quando faltar informação e rode de novo.'],
        cuidado: 'Use só mensagens fictícias: no plano grátis os dados podem ser usados pelo Google.' },
      { nome: 'n8n', url: 'https://n8n.io/', icone: '🔗', plano: 'Gratuito (self-host) ou teste de 14 dias na nuvem',
        para_que: 'Montar um fluxo com uma etapa de IA e um ponto de revisão humana antes de qualquer ação importante.',
        nivel_exigido: 'Básico de lógica',
        pratica: ['Crie um fluxo que recebe uma mensagem de teste (formulário ou gatilho manual).', 'Adicione uma etapa de IA (ex.: com a chave grátis do Google AI Studio) que classifica a mensagem.', 'Adicione uma condição: casos com dúvida vão para uma planilha de revisão humana, os outros seguem.', 'Teste com 5 mensagens e veja na aba de execuções o caminho de cada uma.'],
        cuidado: 'Guarde chaves de API só nas credenciais do n8n, nunca no texto das etapas.' }
    ]
  }
});
