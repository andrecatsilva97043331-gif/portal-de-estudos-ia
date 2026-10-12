PORTAL.registrarFerramentas({
  'ia-com-seus-dados': {
    1: [
      { nome: 'NotebookLM', url: 'https://notebooklm.google.com/', icone: '📓', plano: 'Gratuito com conta Google (há limites de fontes e uso)',
        para_que: 'Ver um RAG pronto funcionando: a IA responde só com base nas fontes que você enviou e mostra de onde tirou cada trecho.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie um caderno com 3 documentos públicos do seu tema (ex.: manual de um produto, regulamento, FAQ).', 'Faça 5 perguntas do seu mapa de caso de uso e clique nas citações para conferir o trecho de origem.', 'Faça 2 perguntas cuja resposta não está nas fontes e veja se ele admite que não sabe.', 'Classifique cada pergunta: RAG resolve, precisa de consulta a banco ou nenhum dos dois.'],
        cuidado: 'Use documentos fictícios ou públicos; não envie dados pessoais de clientes.' },
      { nome: 'Google AI Studio', url: 'https://aistudio.google.com/', icone: '🧪', plano: 'Gratuito com limites de uso',
        para_que: 'Comparar na prática "colar tudo no pedido" com buscar só o trecho certo, olhando a contagem de tokens.',
        nivel_exigido: 'Sem programar',
        pratica: ['Cole um documento público longo inteiro e faça uma pergunta; anote os tokens usados mostrados na tela.', 'Agora cole só o parágrafo que responde à pergunta e repita; anote de novo.', 'Compare tokens, tempo e qualidade das duas respostas.', 'Escreva em 3 linhas quando colar tudo basta e quando vale montar um RAG.'],
        cuidado: 'Use documentos públicos; não envie contratos nem dados de clientes.' }
    ],
    2: [
      { nome: 'Docling', url: 'https://github.com/docling-project/docling', icone: '📄', plano: 'Gratuito (código aberto), roda no seu computador',
        para_que: 'Extrair texto e tabelas de PDFs e documentos do Office em formato limpo, pronto para dividir em trechos.',
        nivel_exigido: 'Programação básica (Python instalado)',
        pratica: ['Instale seguindo o guia do repositório.', 'Converta um PDF público com tabela (ex.: um relatório de prefeitura) para Markdown.', 'Compare o resultado com copiar e colar o texto direto do PDF: a tabela sobreviveu?', 'Anote no seu plano de ingestão quais tipos de documento precisam desse cuidado.'],
        cuidado: 'Processa tudo localmente; mesmo assim, teste com documentos públicos.' },
      { nome: 'Hugging Face: ranking MTEB', url: 'https://huggingface.co/spaces/mteb/leaderboard', icone: '🏆', plano: 'Gratuito para consultar, sem cadastro',
        para_que: 'Comparar modelos de embeddings por qualidade de busca, tamanho e suporte a idiomas.',
        nivel_exigido: 'Sem programar',
        pratica: ['Filtre o ranking pela tarefa de busca (retrieval) e, se houver, por português ou multilíngue.', 'Escolha 3 modelos e anote nota, tamanho do vetor e se são abertos ou pagos.', 'Decida qual usaria na sua base e justifique pensando em custo, idioma e onde os dados podem ficar.'] },
      { nome: 'Google Colab', url: 'https://colab.research.google.com/', icone: '🧮', plano: 'Gratuito com conta Google (há limites de uso)',
        para_que: 'Gerar embeddings no navegador e ver a busca por significado encontrando frases parecidas sem as mesmas palavras.',
        nivel_exigido: 'Programação básica',
        pratica: ['Crie um caderno e instale a biblioteca sentence-transformers com um modelo multilíngue aberto.', 'Escreva 10 frases curtas do seu tema e gere os embeddings.', 'Faça 3 perguntas com palavras diferentes das frases e liste as 3 mais parecidas de cada uma.', 'Anote um acerto surpreendente e um erro, e o que isso diz sobre o tamanho dos trechos.'] }
    ],
    3: [
      { nome: 'Perplexity', url: 'https://www.perplexity.ai/', icone: '🔎', plano: 'Plano gratuito com limite de buscas avançadas',
        para_que: 'Treinar a verificação de citações: conferir se a fonte citada diz mesmo o que a resposta afirma.',
        nivel_exigido: 'Sem programar',
        pratica: ['Faça 3 perguntas técnicas do seu tema.', 'Para cada afirmação importante, abra a fonte citada e marque: apoiada, parcialmente apoiada ou não apoiada.', 'Calcule a porcentagem de afirmações apoiadas.', 'Transforme esse método em um critério do seu conjunto de avaliação.'] },
      { nome: 'Google AI Studio: injeção por documento', url: 'https://aistudio.google.com/', icone: '🛡️', plano: 'Gratuito com limites de uso',
        para_que: 'Ver como uma instrução escondida dentro de um documento pode desviar a IA, e testar defesas.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escreva um documento fictício curto (ex.: política de trocas) e insira no meio uma frase que tenta dar uma ordem à IA.', 'Nas instruções do sistema, diga para responder só com base no documento e dizer "não sei" quando faltar informação.', 'Faça perguntas normais e veja se a instrução escondida foi obedecida.', 'Reforce as instruções, repita o teste e anote o que funcionou e o que só um filtro fora do modelo resolveria.'],
        cuidado: 'Use apenas documentos inventados por você.' }
    ],
    4: [
      { nome: 'Dify', url: 'https://dify.ai/', icone: '🗃️', plano: 'Plano Sandbox gratuito na nuvem (créditos e base de conhecimento limitados) ou código aberto',
        para_que: 'Criar uma base de conhecimento e comparar busca por significado, por palavra-chave e híbrida, com e sem reordenação.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie uma base de conhecimento com 3 a 5 documentos públicos do seu tema.', 'Use o teste de recuperação com 5 perguntas, primeiro só com busca vetorial.', 'Troque para busca híbrida (e ative reordenação, se disponível no seu plano) e repita as perguntas.', 'Anote, pergunta por pergunta, se o trecho certo apareceu no topo e qual configuração venceu.'],
        cuidado: 'Use documentos públicos ou fictícios; não envie dados de clientes.' },
      { nome: 'Supabase', url: 'https://supabase.com/', icone: '🗄️', plano: 'Plano gratuito (projeto pausa se ficar inativo)',
        para_que: 'Ver quando a pergunta precisa virar consulta a uma tabela, e não busca em texto.',
        nivel_exigido: 'Básico de lógica (SQL simples)',
        pratica: ['Crie um projeto e uma tabela de pedidos fictícios com 15 linhas (data, produto, valor, status).', 'Escolha 3 perguntas de contagem, soma ou filtro por data e escreva a consulta no editor SQL (pode usar o assistente de IA do editor).', 'Confira os números à mão em 1 das perguntas.', 'Explique em 2 linhas por que um RAG em texto erraria essas perguntas.'],
        cuidado: 'Use apenas dados inventados.' }
    ],
    5: [
      { nome: 'OpenRouter', url: 'https://openrouter.ai/', icone: '💲', plano: 'Cadastro gratuito; há modelos grátis com limite diário, os demais são pagos por uso',
        para_que: 'Comparar preço e tamanho de contexto de vários modelos para estimar o custo mensal do seu sistema.',
        nivel_exigido: 'Sem programar',
        pratica: ['Na lista de modelos, escolha 3 candidatos e anote preço de entrada e de saída por milhão de tokens.', 'Estime os tokens de uma consulta típica (pergunta + trechos recuperados + resposta).', 'Multiplique pelo volume de perguntas por mês e compare o custo dos 3.', 'Teste 1 modelo grátis no chat e anote se a qualidade bastaria.'] },
      { nome: 'Langfuse', url: 'https://langfuse.com/', icone: '📈', plano: 'Plano gratuito na nuvem (Hobby) ou código aberto',
        para_que: 'Registrar cada consulta do RAG com os trechos recuperados, o custo e a avaliação do usuário.',
        nivel_exigido: 'Programação básica',
        pratica: ['Conecte um exemplo de RAG do guia inicial (ou uma integração pronta) ao seu projeto.', 'Rode 10 perguntas e registre uma nota (positiva ou negativa) em cada uma, como se fosse o usuário.', 'Filtre as notas negativas e veja, no rastro, se o problema foi na busca ou na resposta.', 'Anote 2 itens que entrariam no seu painel de monitoramento.'],
        cuidado: 'Os rastros guardam perguntas e trechos; use dados fictícios ou mascarados.' },
      { nome: 'n8n', url: 'https://n8n.io/', icone: '🔗', plano: 'Gratuito (self-host) ou teste de 14 dias na nuvem',
        para_que: 'Montar um agente que decide quando buscar na base e pode buscar mais de uma vez antes de responder.',
        nivel_exigido: 'Básico de lógica',
        pratica: ['Crie um fluxo com gatilho de chat e o nó AI Agent.', 'Ligue uma base vetorial simples (em memória) como ferramenta e carregue 2 documentos públicos.', 'Faça uma pergunta que precisa de 2 buscas e confira no registro quantas vezes o agente buscou.', 'Compare com uma pergunta simples e anote o custo extra das várias etapas.'],
        cuidado: 'Use documentos públicos ou fictícios.' }
    ]
  }
});
