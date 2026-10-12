PORTAL.registrarFerramentas({
  'prompts-que-funcionam': {
    1: [
      { nome: 'Claude', url: 'https://claude.ai/', icone: '🟠', plano: 'Plano gratuito com limite de mensagens',
        para_que: 'Assistente de IA da Anthropic, bom para escrever e reescrever textos com o tom e o formato que você pedir.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escolha um pedido vago que você já fez a uma IA (ex.: pedir um texto de aniversário ou um aviso para clientes).', 'Faça esse pedido do jeito antigo e guarde a resposta.', 'Reescreva o pedido com papel, público, para que serve, limites, formato e um exemplo do que você quer.', 'Compare as duas respostas e anote quais partes do novo pedido fizeram mais diferença.'],
        cuidado: 'Não cole nomes, telefones nem dados pessoais de clientes.' },
      { nome: 'DeepSeek', url: 'https://chat.deepseek.com/', icone: '🐋', plano: 'Gratuito, com cadastro',
        para_que: 'Outro assistente de IA, útil para testar se um pedido bem escrito funciona em mais de uma IA.',
        nivel_exigido: 'Sem programar',
        pratica: ['Cole no DeepSeek o mesmo pedido melhorado que você usou no Claude.', 'Veja se ele respeitou o formato e os limites que você definiu.', 'Mude só uma coisa no pedido (ex.: o público que vai ler) e observe o que muda na resposta.', 'Anote em uma frase: o que no seu pedido funciona em qualquer IA?'],
        cuidado: 'Os dados ficam em servidores fora do Brasil: use só textos sem informações pessoais ou da empresa.' }
    ],
    2: [
      { nome: 'ChatGPT', url: 'https://chatgpt.com/', icone: '💬', plano: 'Plano gratuito com limite de uso',
        para_que: 'Praticar a conversa em etapas: deixar a IA te entrevistar, quebrar a tarefa e refinar a resposta.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escolha uma tarefa grande e real (ex.: organizar uma festa, montar um cardápio da semana ou planejar uma mudança).', 'Peça que a IA te faça perguntas, uma de cada vez, antes de propor qualquer coisa.', 'Depois das respostas, peça um plano dividido em etapas e trabalhe só a primeira etapa.', 'Faça pelo menos 2 ajustes na mesma conversa até a etapa ficar boa.'] },
      { nome: 'Google Gemini', url: 'https://gemini.google.com/', icone: '✨', plano: 'Gratuito com conta Google (há limites de uso)',
        para_que: 'Treinar autorrevisão, pedido de opções e a IA como advogada do diabo.',
        nivel_exigido: 'Sem programar',
        pratica: ['Peça 3 opções diferentes para uma decisão sua (ex.: nome para um negócio ou roteiro de viagem) e diga qual critério importa para você.', 'Escolha uma opção e peça que a IA aponte os pontos fracos dela, como advogada do diabo.', 'Peça que a IA revise a própria resposta procurando erros e o que ficou de fora.', 'Anote o que mudou na sua decisão depois da crítica.'] }
    ],
    3: [
      { nome: 'NotebookLM', url: 'https://notebooklm.google.com/', icone: '📓', plano: 'Gratuito com conta Google (há limites de fontes e de uso)',
        para_que: 'IA do Google que responde só com base nos documentos que você envia, mostrando de onde tirou cada trecho.',
        nivel_exigido: 'Sem programar',
        pratica: ['Envie um documento longo e público (ex.: um manual de aparelho, um regulamento ou um edital).', 'Faça 3 perguntas específicas sobre o documento.', 'Clique nas citações e confira se o trecho original diz mesmo o que a resposta afirma.', 'Anote que tipo de pergunta funcionou melhor com texto longo.'],
        cuidado: 'Não envie contratos, exames ou documentos com dados pessoais.' },
      { nome: 'Microsoft Copilot', url: 'https://copilot.microsoft.com/', icone: '🪁', plano: 'Gratuito com conta Microsoft',
        para_que: 'Praticar pedidos com foto e por voz, direto no celular.',
        nivel_exigido: 'Sem programar',
        pratica: ['Tire uma foto de algo do seu dia (ex.: uma conta de luz sem dados pessoais, um rótulo ou uma planta).', 'Envie a foto e diga o que você quer saber e em que formato quer a resposta.', 'Em seguida, faça uma pergunta de acompanhamento por voz.', 'Anote se a IA leu a foto corretamente e o que você precisou corrigir.'],
        cuidado: 'Antes de fotografar documentos, cubra nomes, CPF, endereço e números de conta.' },
      { nome: 'Google Docs', url: 'https://docs.google.com/', icone: '📚', plano: 'Gratuito com conta Google',
        para_que: 'Guardar a sua biblioteca pessoal de modelos de prompt, organizada e fácil de achar.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie um documento chamado Minha biblioteca de prompts.', 'Crie um título para cada uso (ex.: e-mail, resumo, plano) e escreva os seus modelos com lacunas entre colchetes.', 'Para cada modelo, anote quando usar e um erro comum que você já corrigiu.', 'Teste um modelo hoje em uma IA e ajuste o texto guardado se precisar.'] }
    ]
  }
});
