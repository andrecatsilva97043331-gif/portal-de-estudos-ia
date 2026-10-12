PORTAL.registrarFerramentas({
  'base-profissional': {
    1: [
      { nome: 'Claude', url: 'https://claude.ai/', icone: '📝', plano: 'Plano gratuito com limite de mensagens por período',
        para_que: 'Assistente de IA bom para reescrever textos formais em linguagem simples, que o cliente entende de primeira.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escreva você mesmo um rascunho de 5 a 8 linhas da política de dados do seu serviço: que dados pede, onde guarda, quando apaga e como usa IA.', 'Peça ao Claude para deixar o texto mais claro para um cliente leigo, sem inventar regras novas.', 'Peça também que ele aponte o que ficou faltando (ex.: uso de imagem, voz e autorização).', 'Compare com o seu rascunho e decida, você, o que entra na versão final.'],
        cuidado: 'Use um serviço fictício ou o seu; não cole nomes, telefones nem documentos de clientes.' },
      { nome: 'Atividade nos apps Gemini', url: 'https://myactivity.google.com/product/gemini', icone: '🔐', plano: 'Gratuito (configuração da conta Google)',
        para_que: 'Ver e ajustar o que o Google guarda das suas conversas com o Gemini, na prática dos termos de uso da lição 1.5.',
        nivel_exigido: 'Sem programar',
        pratica: ['Entre com a sua conta Google e abra a página de atividade do Gemini.', 'Veja se a atividade está ligada e por quanto tempo as conversas ficam guardadas.', 'Escolha um prazo de exclusão automática que faça sentido para o seu trabalho.', 'Anote numa frase o que você diria a um cliente que pergunta para onde vão os dados que você cola na IA.'] },
      { nome: 'Unsplash', url: 'https://unsplash.com/', icone: '📷', plano: 'Gratuito; fotos com a Licença Unsplash (uso comercial permitido, com restrições)',
        para_que: 'Banco de fotos com licença clara, para treinar a leitura de direitos autorais antes de usar uma imagem no trabalho.',
        nivel_exigido: 'Sem programar',
        pratica: ['Abra a página da licença do Unsplash e leia o que é permitido e o que é proibido.', 'Escolha 3 fotos que serviriam para o post de um negócio fictício.', 'Para cada foto, anote o autor e se ela mostra pessoas ou marcas reconhecíveis.', 'Escreva em 2 frases quando você precisaria pedir autorização extra (ex.: rosto de pessoa em anúncio).'],
        cuidado: 'Foto de banco gratuito não autoriza usar rosto ou marca de alguém como se fosse "garoto-propaganda".' }
    ],
    2: [
      { nome: 'Microsoft Copilot', url: 'https://copilot.microsoft.com/', icone: '🎭', plano: 'Gratuito com conta Microsoft (há limites de uso)',
        para_que: 'Ensaiar conversas difíceis com um "cliente simulado", como pedido de extra fora do combinado.',
        nivel_exigido: 'Sem programar',
        pratica: ['Explique ao Copilot o seu serviço e o que o seu combinado inclui e não inclui.', 'Peça que ele faça o papel de um cliente que quer uma revisão a mais e um extra sem pagar.', 'Responda você mesmo, com educação, dizendo não ou oferecendo o extra com preço.', 'No final, peça um retorno sobre o seu tom: ficou firme e gentil?'] },
      { nome: 'Google Docs', url: 'https://docs.google.com/', icone: '📄', plano: 'Gratuito com conta Google',
        para_que: 'Montar o seu combinado de 1 página e mandar ao cliente por link ou em PDF.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie um documento com os títulos: escopo, o que não inclui, prazo, preço, revisões, extras e o que o cliente envia.', 'Preencha cada parte com as suas palavras, para um serviço seu.', 'Deixe um assistente de IA aberto ao lado e peça só uma revisão de clareza, sem prometer resultados.', 'Exporte em PDF (Arquivo > Fazer download) e veja se cabe em 1 página.'] },
      { nome: 'Google Planilhas', url: 'https://sheets.google.com/', icone: '🧮', plano: 'Gratuito com conta Google',
        para_que: 'Fazer a conta do preço com horas, custos e margem, em vez de chutar.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie colunas para etapa do serviço, horas e valor da sua hora.', 'Some as horas de um pedido típico, incluindo revisão e conversa com o cliente.', 'Acrescente uma linha de custos (internet, ferramentas) e uma de reserva.', 'Compare o total com o preço que você pensava cobrar e anote a diferença.'] }
    ],
    3: [
      { nome: 'NotebookLM', url: 'https://notebooklm.google.com/', icone: '🔍', plano: 'Gratuito com conta Google (há limites de fontes e de uso)',
        para_que: 'IA que responde só com base nas fontes que você envia e mostra de onde tirou cada trecho, ótima para conferir fatos, números e nomes.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie um caderno e envie como fonte um texto público (ex.: uma página oficial ou um artigo) sobre o tema de um serviço seu.', 'Escreva um parágrafo seu com 3 números ou nomes tirados desse texto, com um erro de propósito.', 'Pergunte ao NotebookLM se cada dado do seu parágrafo confere com a fonte.', 'Clique nas citações e confirme, com os seus olhos, se ele achou o erro.'],
        cuidado: 'Envie só materiais públicos ou seus; não envie contratos nem dados de clientes.' },
      { nome: 'Have I Been Pwned', url: 'https://haveibeenpwned.com/', icone: '🚨', plano: 'Gratuito para consultar o seu e-mail',
        para_que: 'Descobrir se o seu e-mail apareceu em vazamentos de dados, o primeiro passo para se proteger de golpes.',
        nivel_exigido: 'Sem programar',
        pratica: ['Digite o e-mail que você usa para trabalhar.', 'Veja em quais vazamentos ele aparece e que tipo de dado vazou.', 'Liste as contas onde você precisa trocar a senha e ligar a verificação em duas etapas.'] },
      { nome: 'Bitwarden', url: 'https://bitwarden.com/', icone: '🗝️', plano: 'Plano gratuito pessoal, sem limite de senhas',
        para_que: 'Gerenciador de senhas para guardar senhas fortes e diferentes para cada conta, inclusive acessos que o cliente te passa.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie a sua conta com uma senha mestra longa que você consiga lembrar.', 'Salve 3 contas de trabalho e gere uma senha nova e forte para uma delas.', 'Crie uma pasta só para acessos de clientes e anote no seu checklist quando apagar esses acessos.'],
        cuidado: 'A senha mestra não tem como ser recuperada pela empresa; guarde-a com cuidado.' }
    ]
  }
});
