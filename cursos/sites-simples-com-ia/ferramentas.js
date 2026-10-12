PORTAL.registrarFerramentas({
  'sites-simples-com-ia': {
    1: [
      { nome: 'Google Maps', url: 'https://www.google.com/maps', icone: '🗺️', plano: 'Gratuito',
        para_que: 'Pesquisar concorrentes locais, ver avaliações e entender o que os clientes da região valorizam.',
        nivel_exigido: 'Sem programar',
        pratica: ['Busque o tipo de negócio do seu cliente (ex.: pet shop) no bairro dele.', 'Abra 3 concorrentes e anote se têm site, horário, fotos e botão de WhatsApp.', 'Leia 5 avaliações de cada e anote os elogios e reclamações que se repetem.', 'Escreva 3 coisas que o site do seu cliente precisa mostrar por causa disso.'] },
      { nome: 'ChatGPT', url: 'https://chatgpt.com/', icone: '💬', plano: 'Plano gratuito com limite de uso',
        para_que: 'Ajudar a escrever os textos de cada seção da página única a partir do briefing.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escreva você o briefing em tópicos: negócio, público, diferencial, serviços e contato.', 'Monte o mapa de seções (topo, serviços, sobre, depoimentos, mapa e contato).', 'Peça um rascunho de texto para cada seção, curto e sem promessas exageradas.', 'Revise: troque tudo o que for genérico por fatos reais do negócio.'],
        cuidado: 'Não invente depoimentos, números nem prêmios; use só o que o cliente confirmar.' }
    ],
    2: [
      { nome: 'Google Sites', url: 'https://sites.google.com/', icone: '🌐', plano: 'Gratuito com conta Google; endereço em sites.google.com (domínio próprio exige comprar o domínio)',
        para_que: 'Montar e publicar um site de 1 página sem programar, arrastando blocos.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie um site novo e monte as seções do seu mapa com os textos já revisados.', 'Adicione um botão de WhatsApp e o mapa do Google com o endereço.', 'Publique com um endereço provisório e abra o link no celular.', 'Anote no relatório o que ficou bom e o que precisa melhorar.'] },
      { nome: 'Ideogram', url: 'https://ideogram.ai/', icone: '🖼️', plano: 'Grátis: 30 créditos por semana, só com login Google, Apple ou Microsoft; tudo o que você gera fica público',
        para_que: 'Gerar imagens e ideias de logotipo com texto legível, como ponto de partida para a identidade visual.',
        nivel_exigido: 'Sem programar',
        pratica: ['Descreva com as suas palavras o estilo da marca: cores, clima e o que ela vende.', 'Gere 2 ou 3 opções de imagem de topo ou ideia de logo.', 'Escolha uma e anote no relatório que foi gerada por IA e em qual ferramenta.', 'Mostre ao cliente como rascunho antes de usar como marca oficial.'],
        cuidado: 'No plano grátis as imagens ficam públicas; não use fotos, nomes ou logos reais de clientes sem autorização.' },
      { nome: 'Perfil da Empresa no Google', url: 'https://business.google.com/br/business-profile/', icone: '📍', plano: 'Gratuito',
        para_que: 'Fazer o negócio aparecer no Google e no Maps, o centro do SEO local.',
        nivel_exigido: 'Sem programar',
        pratica: ['Veja se o negócio do cliente já tem perfil (busque o nome no Google Maps).', 'Liste os campos que precisam estar iguais no site e no perfil: nome, endereço, telefone e horário.', 'Coloque o link do site no perfil, se você tiver acesso autorizado.', 'Anote no relatório o que o dono precisa fazer, como confirmar o perfil.'],
        cuidado: 'O perfil pertence ao dono do negócio; peça para ele te adicionar como administrador em vez de pedir a senha.' }
    ],
    3: [
      { nome: 'PageSpeed Insights', url: 'https://pagespeed.web.dev/', icone: '⚡', plano: 'Gratuito (Google), sem cadastro',
        para_que: 'Medir a velocidade e a qualidade do site no celular, com sugestões do que corrigir.',
        nivel_exigido: 'Sem programar',
        pratica: ['Cole o link do site que você publicou e rode o teste para celular.', 'Anote as notas de desempenho e de acessibilidade.', 'Escolha 2 sugestões que dá para resolver sem programar (ex.: imagens pesadas).', 'Corrija, rode de novo e registre o antes e depois no checklist.'] },
      { nome: 'WAVE', url: 'https://wave.webaim.org/', icone: '♿', plano: 'Gratuito no navegador, sem cadastro',
        para_que: 'Encontrar problemas de acessibilidade, como imagem sem texto alternativo e pouco contraste.',
        nivel_exigido: 'Sem programar',
        pratica: ['Cole o link do site e rode a análise.', 'Veja os erros em vermelho e os alertas de contraste.', 'Corrija pelo menos os textos alternativos e as cores com pouco contraste.', 'Rode de novo e anote no checklist o que melhorou.'] },
      { nome: 'Claude', url: 'https://claude.ai/', icone: '🤝', plano: 'Plano gratuito com limite de mensagens por período',
        para_que: 'Revisar o aviso de privacidade do site e a proposta de manutenção e suporte em linguagem clara.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escreva você um aviso curto: que dados o formulário pede, para quê e como pedir exclusão.', 'Escreva também a proposta de suporte: o que entra na manutenção mensal, prazo de resposta e o que é extra.', 'Peça ao Claude para apontar trechos confusos ou promessas que você não controla.', 'Ajuste e salve as duas versões finais para entregar ao cliente.'],
        cuidado: 'Isso não substitui um advogado; use linguagem simples e honesta e não cole dados de clientes.' }
    ]
  }
});
