PORTAL.registrarFerramentas({
  'criando-apps-com-ia': {
    1: [
      { nome: 'ChatGPT', url: 'https://chatgpt.com/', icone: '💬', plano: 'Plano gratuito com limite de uso',
        para_que: 'Transformar uma ideia solta no documento de uma página do seu app, com a IA te entrevistando.',
        nivel_exigido: 'Sem programar',
        pratica: ['Conte a ideia do app em 3 frases: para quem é e que problema resolve.', 'Peça que a IA te faça perguntas, uma de cada vez, sobre usuários, telas e o que fica fora da primeira versão.', 'Peça o documento de uma página com problema, público, telas e a menor versão útil.', 'Corte tudo o que não é essencial para a primeira versão.'] },
      { nome: 'draw.io (diagrams.net)', url: 'https://app.diagrams.net/', icone: '🗺️', plano: 'Gratuito e de código aberto, sem cadastro',
        para_que: 'Desenhar as telas e o caminho do usuário, do primeiro clique até o objetivo.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie um diagrama em branco.', 'Desenhe uma caixa para cada tela do seu documento de uma página.', 'Ligue as telas com setas mostrando o caminho principal do usuário.', 'Marque o ponto onde o usuário pode desistir e pense em como simplificar.'] },
      { nome: 'v0', url: 'https://v0.app/', icone: '▲', plano: 'Plano gratuito com créditos limitados',
        para_que: 'Ver um rascunho visual de uma tela do app a partir da sua descrição, antes de construir de verdade.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escolha a tela principal do seu desenho.', 'Descreva com suas palavras o que aparece nela e para quem é.', 'Veja o rascunho gerado e peça 1 ou 2 ajustes.', 'Tire um print e use só como referência: a construção de verdade vem no próximo módulo.'] }
    ],
    2: [
      { nome: 'Cursor', url: 'https://cursor.com/', icone: '🛠️', plano: 'Plano gratuito com limite',
        para_que: 'Editor com agente de IA para construir o app em fatias pequenas, com regras e contexto do projeto.',
        nivel_exigido: 'Programação básica',
        pratica: ['Crie uma pasta para o app e abra no Cursor.', 'Crie um arquivo de regras curto dizendo o que é o app, a linguagem e o que o agente não deve fazer.', 'Peça ao agente só a primeira fatia (ex.: a tela inicial com um botão que funciona).', 'Abra no navegador, teste e só então peça a próxima fatia.'],
        cuidado: 'Leia o que o agente vai rodar no terminal antes de aceitar.' },
      { nome: 'GitHub', url: 'https://github.com/', icone: '🐙', plano: 'Gratuito (repositórios públicos e privados)',
        para_que: 'Guardar o histórico do app em versões, para poder voltar atrás quando algo quebrar.',
        nivel_exigido: 'Programação básica',
        pratica: ['Crie uma conta e um repositório privado para o app.', 'Pelo Cursor, faça o primeiro commit com uma mensagem clara e envie para o GitHub.', 'Faça uma mudança pequena, faça outro commit e veja a diferença no histórico do site.', 'Treine desfazer: volte um arquivo para a versão anterior.'],
        cuidado: 'Nunca envie senhas ou chaves de API para o repositório: use um arquivo .env fora do Git.' }
    ],
    3: [
      { nome: 'Supabase', url: 'https://supabase.com/', icone: '🟢', plano: 'Plano gratuito (projeto pausa se ficar inativo)',
        para_que: 'Banco de dados com login pronto e regras de acesso para cada usuário ver só o que é dele.',
        nivel_exigido: 'Programação básica',
        pratica: ['Crie um projeto e uma tabela simples para o seu app (ex.: tarefas ou pedidos).', 'Ative o login por e-mail e crie 2 usuários de teste.', 'Ligue as regras de acesso (RLS) para cada usuário ler só as próprias linhas; o assistente de IA do painel pode te ajudar a entender as regras.', 'Teste com os 2 usuários e confirme que um não vê os dados do outro.'],
        cuidado: 'A chave secreta (service role) nunca vai no código do navegador.' },
      { nome: 'Vercel', url: 'https://vercel.com/', icone: '🚀', plano: 'Gratuito (plano Hobby, uso não comercial)',
        para_que: 'Publicar o app na internet a partir do GitHub e testar no celular.',
        nivel_exigido: 'Programação básica',
        pratica: ['Entre com a conta do GitHub e importe o repositório do app.', 'Cadastre as variáveis de ambiente (chaves públicas) no painel, não no código.', 'Publique e abra o endereço no seu celular.', 'Faça uma mudança pequena, envie ao GitHub e veja a nova versão subir sozinha.'] },
      { nome: 'PageSpeed Insights', url: 'https://pagespeed.web.dev/', icone: '📱', plano: 'Gratuito (Google), sem cadastro',
        para_que: 'Checar velocidade no celular, acessibilidade e boas práticas do app publicado.',
        nivel_exigido: 'Sem programar',
        pratica: ['Cole o endereço do seu app publicado e rode a análise para celular.', 'Veja as notas de desempenho e de acessibilidade.', 'Escolha os 2 problemas mais simples (ex.: imagem sem texto alternativo, contraste baixo).', 'Peça ao agente do Cursor para corrigir só esses 2, publique e rode a análise de novo.'] }
    ],
    4: [
      { nome: 'Claude', url: 'https://claude.ai/', icone: '🟠', plano: 'Plano gratuito com limite de mensagens',
        para_que: 'Uma segunda opinião para depurar erros, com um relato claro de sintomas, passos e mensagem de erro.',
        nivel_exigido: 'Programação básica',
        pratica: ['Escolha um erro real do seu app (ou provoque um, como apagar uma variável).', 'Escreva o relato: o que você fez, o que esperava, o que aconteceu e a mensagem de erro completa.', 'Peça que a IA explique a causa provável antes de sugerir código.', 'Aplique a correção no Cursor, teste e anote a causa no seu histórico de manutenção.'],
        cuidado: 'Apague chaves, senhas e dados de usuários do trecho antes de colar.' },
      { nome: 'Google AI Studio', url: 'https://aistudio.google.com/', icone: '🧪', plano: 'Gratuito com conta Google (cota limitada; no uso grátis o Google pode usar os dados para melhorar produtos)',
        para_que: 'Testar a função de IA que você quer colocar no app e entender limites de uso e custos antes de programar.',
        nivel_exigido: 'Programação básica',
        pratica: ['Escolha uma função de IA simples para o app (ex.: resumir um texto do usuário ou sugerir uma categoria).', 'Escreva a instrução fixa e teste com 5 entradas fictícias, incluindo uma estranha.', 'Veja na página de cotas quantos pedidos por dia o plano grátis permite.', 'Anote quanto o app usaria por dia e o que fazer quando o limite acabar.'],
        cuidado: 'A chave de API fica só no servidor (ou em função do Supabase), nunca no código do navegador.' }
    ]
  }
});
