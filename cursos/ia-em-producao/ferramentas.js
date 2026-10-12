PORTAL.registrarFerramentas({
  'ia-em-producao': {
    1: [
      { nome: 'draw.io', url: 'https://app.diagrams.net/', icone: '🗺️', plano: 'Gratuito, sem cadastro (salva no seu computador ou na sua nuvem)',
        para_que: 'Desenhar o mapa de dados do seu projeto: o que entra, por onde passa, onde fica e por quanto tempo.',
        nivel_exigido: 'Sem programar',
        pratica: ['Desenhe uma caixa para cada lugar por onde o dado passa: formulário, seu sistema, fornecedor de IA, banco, planilhas.', 'Nas setas, escreva quais dados passam (ex.: nome, e-mail, texto da conversa).', 'Em cada caixa, anote o prazo de guarda e quem tem acesso.', 'Pinte de vermelho os dados pessoais sensíveis e revise se todos são mesmo necessários.'] },
      { nome: 'Claude', url: 'https://claude.ai/', icone: '⚖️', plano: 'Plano gratuito com limite de uso',
        para_que: 'Revisar o seu aviso de privacidade e procurar vieses em uma decisão automatizada sobre pessoas.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escreva você mesmo o rascunho do aviso de privacidade a partir do seu mapa de dados.', 'Peça que ele aponte trechos difíceis para um cliente leigo e itens que a LGPD costuma exigir e estão faltando.', 'Descreva uma decisão do seu sistema que afeta pessoas e peça que ele liste grupos que poderiam ser prejudicados.', 'Reescreva o aviso e anote 1 controle contra viés que você vai adotar.'],
        cuidado: 'Não cole dados reais de clientes; a IA não substitui a revisão de um profissional do direito.' }
    ],
    2: [
      { nome: 'OpenAI Tokenizer', url: 'https://platform.openai.com/tokenizer', icone: '🔢', plano: 'Gratuito no navegador',
        para_que: 'Contar quantos tokens tem um pedido típico do seu sistema, a base de qualquer estimativa de custo.',
        nivel_exigido: 'Sem programar',
        pratica: ['Cole um pedido típico completo do seu sistema: instruções, contexto e mensagem do usuário (sem dados reais).', 'Anote o número de tokens e repita com uma resposta típica.', 'Teste o mesmo texto em português e em inglês e compare.', 'Guarde esses números para o cálculo de custo por usuário do projeto.'] },
      { nome: 'OpenRouter', url: 'https://openrouter.ai/', icone: '🔀', plano: 'Cadastro gratuito; há modelos grátis com limite diário, os demais são pagos por uso',
        para_que: 'Comparar preços de muitos modelos num lugar só e ver como funciona a troca automática para um modelo reserva (plano B).',
        nivel_exigido: 'Sem programar',
        pratica: ['Escolha 3 modelos e anote preço de entrada e de saída por milhão de tokens.', 'Com os tokens do exercício anterior, calcule o custo por pedido e por usuário no mês em cada modelo.', 'Leia na documentação como se define um modelo reserva quando o principal falha.', 'Escreva qual seria o seu modelo principal, o reserva e o limite de gasto mensal.'] },
      { nome: 'Artificial Analysis', url: 'https://artificialanalysis.ai/', icone: '⏱️', plano: 'Gratuito para consultar, sem cadastro',
        para_que: 'Comparar velocidade e tempo até a primeira palavra dos modelos, para decidir sobre streaming e segundo plano.',
        nivel_exigido: 'Sem programar',
        pratica: ['Compare os 3 modelos que você escolheu no OpenRouter.', 'Anote o tempo até o primeiro token e a velocidade de geração de cada um.', 'Calcule quanto tempo levaria uma resposta típica do seu sistema.', 'Decida se precisa de streaming, cache ou processamento em segundo plano, e justifique.'] }
    ],
    3: [
      { nome: 'Promptfoo', url: 'https://www.promptfoo.dev/', icone: '✅', plano: 'Gratuito (código aberto), roda no seu computador',
        para_que: 'Transformar seu conjunto de casos de teste e sua rubrica em uma avaliação automática que roda a cada mudança.',
        nivel_exigido: 'Programação básica (Node.js e chave de API de um modelo)',
        pratica: ['Siga o guia inicial e coloque o prompt do seu sistema no projeto de teste.', 'Cadastre 5 casos de teste com o resultado esperado de cada um.', 'Use a verificação por rubrica para os critérios que não são exatos.', 'Rode, abra o relatório e mude uma palavra do prompt para ver se algum caso quebra.'],
        cuidado: 'Guarde a chave de API em variável de ambiente e use casos fictícios.' },
      { nome: 'NotebookLM', url: 'https://notebooklm.google.com/', icone: '📓', plano: 'Gratuito com conta Google (há limites de fontes e uso)',
        para_que: 'Ver respostas presas às fontes e testar o efeito de uma base de conhecimento desatualizada.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie um caderno com 2 versões de um documento público (ex.: regulamento antigo e o novo).', 'Faça 3 perguntas cuja resposta mudou entre as versões e veja qual fonte ele cita.', 'Remova a versão antiga e repita as perguntas.', 'Anote a regra de atualização que a sua base precisa para evitar esse problema.'],
        cuidado: 'Use documentos públicos ou fictícios.' },
      { nome: 'LMArena', url: 'https://lmarena.ai/', icone: '🥊', plano: 'Gratuito no navegador',
        para_que: 'Comparar respostas de dois modelos às cegas e treinar o olhar para alucinações.',
        nivel_exigido: 'Sem programar',
        pratica: ['Faça uma pergunta factual do seu tema cuja resposta você conhece bem.', 'Compare as duas respostas e marque cada afirmação como certa, errada ou inventada.', 'Vote e só então veja quais modelos eram.', 'Repita com 2 perguntas e anote qual tipo de pergunta mais gerou invenções.'],
        cuidado: 'As conversas podem ser públicas e usadas em pesquisa; não envie nada confidencial.' }
    ],
    4: [
      { nome: 'Gandalf (Lakera)', url: 'https://gandalf.lakera.ai/', icone: '🧙', plano: 'Gratuito no navegador',
        para_que: 'Jogo de injeção de prompt: tentar arrancar uma senha de uma IA e ver por que só instruções não bastam.',
        nivel_exigido: 'Sem programar',
        pratica: ['Jogue até o nível 5.', 'Anote qual defesa cada nível acrescentou e qual ataque passou.', 'Para o seu sistema, escreva 2 controles fora do modelo que impediriam o mesmo ataque.'] },
      { nome: 'Google AI Studio: chaves de API', url: 'https://aistudio.google.com/', icone: '🔑', plano: 'Gratuito com limites de uso',
        para_que: 'Praticar o ciclo de vida de uma chave de API: criar, guardar fora do código, trocar e apagar.',
        nivel_exigido: 'Básico de lógica',
        pratica: ['Crie uma chave de API num projeto de teste.', 'Guarde a chave num gerenciador de senhas ou variável de ambiente, nunca num arquivo do projeto.', 'Crie uma segunda chave, apague a primeira e confira na lista que ela sumiu (isso é a rotação).', 'Escreva o seu procedimento de vazamento: quem apaga a chave, em quanto tempo e o que verifica depois.'],
        cuidado: 'Nunca cole a chave em chats, prints, repositórios ou no código do site.' },
      { nome: 'Supabase: segurança por linha (RLS)', url: 'https://supabase.com/', icone: '🧱', plano: 'Plano gratuito (projeto pausa se ficar inativo)',
        para_que: 'Garantir no banco que cada cliente só enxerga os próprios dados, mesmo que o código ou a IA errem.',
        nivel_exigido: 'Programação básica (SQL simples)',
        pratica: ['Crie uma tabela de documentos fictícios com uma coluna de cliente.', 'Ative a segurança por linha (RLS) e crie uma política que só libera linhas do usuário logado.', 'Crie 2 usuários de teste e confira que cada um só vê as próprias linhas.', 'Anote como isso protege um sistema de IA que busca documentos para responder.'],
        cuidado: 'Use apenas dados inventados e nunca exponha a chave de serviço no navegador.' }
    ],
    5: [
      { nome: 'Langfuse: gestão de prompts', url: 'https://langfuse.com/', icone: '🏷️', plano: 'Plano gratuito na nuvem (Hobby) ou código aberto',
        para_que: 'Versionar prompts com rótulos (ex.: produção e teste) e voltar para a versão anterior em segundos.',
        nivel_exigido: 'Básico de lógica',
        pratica: ['Crie um prompt na área de gestão de prompts e salve a versão 1 com o rótulo de produção.', 'Crie a versão 2 com uma mudança e marque-a só como teste.', 'Compare as duas versões lado a lado.', 'Simule um problema: devolva o rótulo de produção para a versão 1 e anote quanto tempo levou.'] },
      { nome: 'ChatGPT', url: 'https://chatgpt.com/', icone: '📣', plano: 'Plano gratuito com limite de uso',
        para_que: 'Revisar o aviso de IA para o usuário e treinar um relato de incidente sem culpados.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escreva você mesmo o aviso que o usuário vai ver: que é IA, o que ela não faz e como falar com um humano.', 'Peça que ele avalie clareza e tom para um cliente leigo e sugira cortes.', 'Descreva um incidente fictício do seu sistema e peça perguntas que ajudem a achar a causa sem culpar pessoas.', 'Monte o seu roteiro de incidente com o que aprendeu.'],
        cuidado: 'Use um incidente fictício; não cole registros reais nem dados de clientes.' },
      { nome: 'Mermaid Live Editor', url: 'https://mermaid.live/', icone: '🗓️', plano: 'Gratuito no navegador, sem cadastro',
        para_que: 'Desenhar o plano de lançamento gradual e o fluxo de decisão do incidente como diagramas.',
        nivel_exigido: 'Básico de lógica',
        pratica: ['Use um diagrama de Gantt para as fases: equipe interna, piloto com poucos usuários e todos.', 'Acrescente os marcos com os critérios de sucesso de cada fase.', 'Em outro diagrama de fluxo, desenhe o caminho do incidente: detectar, conter, avisar, corrigir e aprender.', 'Exporte as imagens para o projeto do módulo.'] }
    ]
  }
});
