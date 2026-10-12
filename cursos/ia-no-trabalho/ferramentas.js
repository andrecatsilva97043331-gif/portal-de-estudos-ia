PORTAL.registrarFerramentas({
  'ia-no-trabalho': {
    1: [
      { nome: 'Microsoft Copilot', url: 'https://copilot.microsoft.com/', icone: '🪁', plano: 'Gratuito com conta Microsoft',
        para_que: 'Escrever e-mails e mensagens de trabalho mais rápido, ajustando o tom para cada situação.',
        nivel_exigido: 'Sem programar',
        pratica: ['Pense em uma mensagem difícil que você precisa mandar (ex.: cobrar um pagamento atrasado ou recusar um pedido).', 'Explique para a IA a situação, quem vai ler e o que você quer que a pessoa faça.', 'Peça duas versões: uma mais firme e uma mais gentil.', 'Escolha uma, ajuste com as suas palavras e confira se nada foi inventado.'],
        cuidado: 'Troque nomes e valores reais por fictícios antes de colar.' },
      { nome: 'Claude', url: 'https://claude.ai/', icone: '🟠', plano: 'Plano gratuito com limite de mensagens',
        para_que: 'Resumir anotações de reunião e revisar textos que você já escreveu.',
        nivel_exigido: 'Sem programar',
        pratica: ['Cole as suas anotações soltas de uma reunião ou um texto seu (sem dados sigilosos).', 'Peça um resumo com decisões, responsáveis e prazos.', 'Depois, peça uma revisão do seu texto que aponte o que mudou e por quê, sem reescrever tudo.', 'Compare com o original e aceite só as mudanças que fazem sentido.'],
        cuidado: 'Não cole atas com dados de clientes, salários ou informações confidenciais da empresa.' },
      { nome: 'Canva', url: 'https://www.canva.com/', icone: '🎨', plano: 'Plano gratuito (recursos de IA com uso limitado)',
        para_que: 'Criar posts e status para divulgar o seu negócio, com modelos prontos e ajuda de IA no texto.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escolha um modelo de post para Instagram ou status de WhatsApp.', 'Escreva o texto do post com a ajuda de uma IA, dizendo o público e a oferta.', 'Troque cores, fotos e logo para combinar com o seu negócio.', 'Baixe a imagem e mostre para uma pessoa conhecida antes de publicar.'] }
    ],
    2: [
      { nome: 'ChatGPT', url: 'https://chatgpt.com/', icone: '💬', plano: 'Plano gratuito com limite de uso',
        para_que: 'Transformar informações bagunçadas em tabela, checklist ou pauta de reunião.',
        nivel_exigido: 'Sem programar',
        pratica: ['Cole uma lista bagunçada (ex.: pedidos anotados no caderno, tarefas soltas ou itens de um evento), com dados fictícios.', 'Peça que a IA organize em tabela, com as colunas que você escolher.', 'Peça também um checklist passo a passo ou uma pauta curta a partir dessa tabela.', 'Confira a tabela linha por linha: some os valores você mesmo e veja se nada sumiu.'],
        cuidado: 'Nunca confie em contas da IA sem conferir; use dados fictícios.' },
      { nome: 'Google Planilhas', url: 'https://sheets.google.com/', icone: '📊', plano: 'Gratuito com conta Google',
        para_que: 'Aplicar na planilha as fórmulas e limpezas que você pediu a um assistente de IA aberto lado a lado.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie uma planilha com 10 linhas fictícias de vendas ou despesas (data, item, valor).', 'Em outra aba do navegador, descreva para um assistente de IA (ChatGPT, Gemini ou Copilot) as colunas e o que você quer calcular.', 'Copie a fórmula sugerida para a planilha e teste com uma conta que você sabe o resultado.', 'Peça também uma forma de limpar dados repetidos ou com espaços sobrando e aplique.'] },
      { nome: 'Trello', url: 'https://trello.com/', icone: '🗂️', plano: 'Plano gratuito com limites',
        para_que: 'Organizar a semana em quadros e cartões, com prioridades e checklists.',
        nivel_exigido: 'Sem programar',
        pratica: ['Peça a uma IA que ajude a separar as suas tarefas da semana entre urgente, importante e pode esperar.', 'Crie um quadro com as colunas A fazer, Fazendo e Feito.', 'Transforme cada tarefa em um cartão, com data e um checklist curto.', 'No fim da semana, veja o que ficou parado e por quê.'] }
    ],
    3: [
      { nome: 'Perplexity', url: 'https://www.perplexity.ai/', icone: '🔎', plano: 'Plano gratuito com limite de buscas avançadas',
        para_que: 'Pesquisar um assunto de trabalho com as fontes de cada resposta à vista.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escolha uma dúvida real do seu trabalho (ex.: uma regra do MEI ou uma tendência do seu setor).', 'Faça a pergunta e veja as fontes citadas.', 'Abra 2 fontes e confira a data e se elas dizem mesmo o que a resposta afirma.', 'Anote o que era verdade, o que estava desatualizado e o que não tinha fonte.'] },
      { nome: 'NotebookLM', url: 'https://notebooklm.google.com/', icone: '📓', plano: 'Gratuito com conta Google (há limites de fontes e de uso)',
        para_que: 'Estudar e entender documentos difíceis: a IA responde só com base no material que você envia.',
        nivel_exigido: 'Sem programar',
        pratica: ['Envie um material de estudo ou um documento difícil e público (ex.: apostila, norma ou manual).', 'Peça uma explicação simples do trecho mais difícil.', 'Gere perguntas de revisão ou cartões de estudo e responda sem olhar o material.', 'Confira nas citações onde estava cada resposta certa.'],
        cuidado: 'Não envie contratos ou documentos com dados pessoais seus ou de clientes.' },
      { nome: 'Google Gemini', url: 'https://gemini.google.com/', icone: '✨', plano: 'Gratuito com conta Google (há limites de uso)',
        para_que: 'Montar um plano de aprendizado e treinar entrevistas e apresentações conversando por voz.',
        nivel_exigido: 'Sem programar',
        pratica: ['Diga qual vaga ou apresentação você vai enfrentar e peça que a IA faça o papel do entrevistador.', 'Responda às perguntas por voz, no celular, como se fosse de verdade.', 'No final, peça um retorno sobre clareza, exemplos e o que faltou.', 'Peça também um plano curto de estudo para melhorar o ponto mais fraco.'] }
    ]
  }
});
