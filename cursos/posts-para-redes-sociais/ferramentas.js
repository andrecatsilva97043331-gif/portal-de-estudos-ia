PORTAL.registrarFerramentas({
  'posts-para-redes-sociais': {
    1: [
      { nome: 'ChatGPT', url: 'https://chatgpt.com/', icone: '💬', plano: 'Plano gratuito com limite de uso',
        para_que: 'Assistente de IA para organizar o briefing e transformar pilares de conteúdo em ideias de posts.',
        nivel_exigido: 'Sem programar',
        pratica: ['Descreva um negócio fictício (ex.: uma confeitaria de bairro): público, o que vende e o tom da marca.', 'Peça que ele te faça perguntas de briefing, uma por vez, e responda como se fosse o dono.', 'Defina você 3 ou 4 pilares e peça ideias de posts para cada um, com formato sugerido.', 'Descarte as ideias genéricas e fique com 10 que tenham a cara do negócio.'],
        cuidado: 'Use um negócio fictício ou peça autorização ao dono; não cole dados de clientes.' },
      { nome: 'Google Gemini', url: 'https://gemini.google.com/', icone: '✨', plano: 'Gratuito com conta Google (há limites de uso)',
        para_que: 'Analisar prints de um perfil para fazer o diagnóstico rápido e estudar referências sem copiar.',
        nivel_exigido: 'Sem programar',
        pratica: ['Tire um print da grade de um perfil público de um negócio local.', 'Envie o print e peça uma análise de constância, variedade de formatos e clareza da bio.', 'Faça o mesmo com um perfil de referência que você admira e peça o que cada um faz bem.', 'Escreva 3 aprendizados com as suas palavras, sem copiar textos nem artes da referência.'] },
      { nome: 'Google Planilhas', url: 'https://sheets.google.com/', icone: '📅', plano: 'Gratuito com conta Google',
        para_que: 'Montar o calendário de conteúdo em tabela, fácil de compartilhar com o cliente.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie as colunas: data, pilar, ideia, formato, chamada para ação e status.', 'Preencha 2 semanas com as ideias que você escolheu, alternando pilares e formatos.', 'Use cores diferentes para cada pilar e confira se nenhum ficou esquecido.', 'Compartilhe o link só com permissão de comentário, como faria com um cliente.'] }
    ],
    2: [
      { nome: 'Canva', url: 'https://www.canva.com/', icone: '🎨', plano: 'Gratuito; modelos e elementos com coroa são do plano Pro, e o Magic Studio tem uso limitado no grátis',
        para_que: 'Criar artes e carrosséis com modelos prontos e recursos de IA para imagem e texto.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie um carrossel de 5 telas para o negócio fictício, com um tema que ensina algo ao público.', 'Use as cores e a fonte da marca em todas as telas.', 'Escreva você os textos: gancho na tela 1, conteúdo nas telas 2 a 4 e chamada para ação na 5.', 'Exporte em PNG e confira se dá para ler tudo na tela do celular.'],
        cuidado: 'Antes de entregar a um cliente, confira se usou só elementos gratuitos ou com licença; marcas e rostos de terceiros só com autorização.' },
      { nome: 'CapCut', url: 'https://www.capcut.com/', icone: '🎬', plano: 'Plano gratuito com edição básica; vários efeitos, modelos e recursos de IA são do plano Pro',
        para_que: 'Editar vídeos curtos e gerar legendas automáticas, importantes para acessibilidade.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escreva um roteiro de 20 a 30 segundos com gancho, 2 dicas e chamada para ação.', 'Grave com o celular (pode ser só a sua mão mostrando um produto) e importe no CapCut.', 'Gere as legendas automáticas e corrija cada palavra errada.', 'Exporte e assista sem som: a mensagem continua clara?'],
        cuidado: 'Músicas e efeitos podem ter regras próprias para uso comercial; confira antes de publicar para um cliente.' },
      { nome: 'Claude', url: 'https://claude.ai/', icone: '♿', plano: 'Plano gratuito com limite de mensagens por período',
        para_que: 'Revisar legendas na voz da marca e ajudar a escrever o texto alternativo das imagens.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escreva você uma legenda para o carrossel que criou no Canva.', 'Envie a legenda e uma descrição da voz da marca e peça sugestões para ficar mais natural, sem exageros.', 'Envie a imagem da primeira tela e peça uma proposta de texto alternativo curto.', 'Ajuste o texto alternativo para descrever o que importa e salve tudo junto com o post.'] }
    ],
    3: [
      { nome: 'Meta Business Suite', url: 'https://business.facebook.com/', icone: '📊', plano: 'Gratuito para páginas do Facebook e contas profissionais do Instagram',
        para_que: 'Agendar posts, ver métricas básicas e responder comentários e mensagens num lugar só.',
        nivel_exigido: 'Sem programar',
        pratica: ['Conecte uma página ou conta profissional sua (ou de teste).', 'Agende um post para a próxima semana pelo Planejador.', 'Abra a área de Insights e anote alcance, interações e o post que foi melhor no período.', 'Monte com esses números 3 linhas do seu relatório mensal simples.'],
        cuidado: 'Só acesse a conta de um cliente com autorização dele e de preferência como parceiro, sem pedir a senha.' },
      { nome: 'Napkin AI', url: 'https://www.napkin.ai/', icone: '📈', plano: 'Plano gratuito com 500 créditos de IA por semana; visuais com a marca do Napkin',
        para_que: 'Transformar um texto curto em gráfico ou esquema visual, bom para deixar o relatório mais fácil de ler.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escreva um parágrafo com os números do mês do negócio fictício (alcance, seguidores, mensagens).', 'Cole no Napkin e gere um visual para esse trecho.', 'Teste 2 estilos e escolha o mais claro.', 'Exporte e coloque no relatório de 1 página.'] },
      { nome: 'Microsoft Copilot', url: 'https://copilot.microsoft.com/', icone: '🧯', plano: 'Gratuito com conta Microsoft (há limites de uso)',
        para_que: 'Treinar respostas a comentários negativos e pequenas crises antes que aconteçam de verdade.',
        nivel_exigido: 'Sem programar',
        pratica: ['Peça ao Copilot 3 comentários negativos realistas para o negócio fictício (atraso, preço, produto com defeito).', 'Escreva você a resposta pública de cada um, com calma e chamando para o privado quando precisar.', 'Peça uma avaliação do seu tom e ajuste o que soar defensivo.', 'Anote quais casos precisam de aprovação do dono antes de responder.'] }
    ]
  }
});
