PORTAL.registrarFerramentas({
  'arquiteto-solucoes-ia': {
    1: [
      { nome: 'ChatGPT', url: 'https://chatgpt.com/', icone: '💬', plano: 'Plano gratuito com limite de uso',
        para_que: 'Treinar a entrevista de diagnóstico com a IA fazendo o papel de um cliente.',
        nivel_exigido: 'Sem programar',
        pratica: ['Peça que a IA interprete o dono de um pequeno negócio (ex.: clínica ou oficina) com uma dor que você não conhece.', 'Faça as perguntas de diagnóstico do módulo até achar a dor real, não só o pedido.', 'Pergunte quantas vezes a tarefa acontece e quanto tempo leva, para calcular o ROI.', 'No fim, peça uma avaliação das suas perguntas: o que faltou investigar?'] },
      { nome: 'Mermaid Live Editor', url: 'https://mermaid.live/', icone: '🧜', plano: 'Gratuito, sem cadastro',
        para_que: 'Desenhar os fluxos do processo atual e do automatizado lado a lado para mostrar ao cliente.',
        nivel_exigido: 'Básico de lógica',
        pratica: ['Abra um exemplo de fluxograma do editor.', 'Monte o fluxo atual do cliente da entrevista, com todas as etapas manuais.', 'Copie e monte o fluxo automatizado, destacando o que some e o que fica com uma pessoa.', 'Exporte as duas imagens para o diagnóstico.'] },
      { nome: 'Google Planilhas', url: 'https://sheets.google.com/', icone: '📊', plano: 'Gratuito com conta Google',
        para_que: 'Calcular o ROI em horas e montar a matriz impacto × esforço das dores do cliente.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie colunas para tarefa, vezes por mês, minutos por vez e custo da hora.', 'Calcule horas e reais economizados por mês e o tempo para o projeto se pagar.', 'Em outra aba, dê notas de 1 a 5 de impacto e esforço para cada dor.', 'Ordene e marque qual dor você atacaria primeiro.'] }
    ],
    2: [
      { nome: 'Supabase', url: 'https://supabase.com/', icone: '🟢', plano: 'Plano gratuito (projeto pausa se ficar inativo)',
        para_que: 'Banco de dados Postgres com painel visual, login e regras de acesso por linha.',
        nivel_exigido: 'Básico de lógica',
        pratica: ['Crie um projeto e as tabelas da planta de dados de um cliente (ex.: clientes, agendamentos).', 'Ligue as duas tabelas por um campo de relação.', 'Ative as regras de acesso (RLS) e crie uma política para cada perfil; o assistente de IA do painel explica o que cada regra faz.', 'Insira linhas fictícias e confira quem consegue ler o quê.'],
        cuidado: 'Use só dados fictícios e nunca exponha a chave secreta (service role).' },
      { nome: 'Firebase', url: 'https://firebase.google.com/', icone: '🔥', plano: 'Plano Spark gratuito, sem cartão (com cotas)',
        para_que: 'Comparar com o Supabase: banco em coleções e documentos (Firestore) e regras de segurança.',
        nivel_exigido: 'Básico de lógica',
        pratica: ['Crie um projeto e um banco Firestore em modo de produção.', 'Monte as mesmas informações do Supabase em coleções e documentos.', 'Escreva uma regra em que cada usuário só lê os próprios documentos.', 'Teste a regra no simulador do painel com um usuário permitido e um não permitido.'] }
    ],
    3: [
      { nome: 'Hoppscotch', url: 'https://hoppscotch.io/', icone: '🛸', plano: 'Gratuito e de código aberto, sem cadastro',
        para_que: 'Fazer chamadas de API no navegador e ver o pedido e a resposta, como o garçom levando e trazendo o prato.',
        nivel_exigido: 'Básico de lógica',
        pratica: ['Faça um GET em uma API pública brasileira de CEP (ex.: ViaCEP) com um CEP qualquer.', 'Identifique na resposta o código de status e os campos que vieram.', 'Teste um CEP inválido e veja como a API avisa o erro.', 'Faça um POST para o endereço do Webhook.site e confira se chegou.'] },
      { nome: 'Webhook.site', url: 'https://webhook.site/', icone: '🪝', plano: 'Gratuito, sem cadastro (endereços temporários)',
        para_que: 'Ver na tela o que um sistema manda quando a campainha do webhook toca.',
        nivel_exigido: 'Básico de lógica',
        pratica: ['Abra o site e copie o endereço único criado para você.', 'Envie para ele um POST pelo Hoppscotch com um JSON de pedido fictício.', 'Veja cabeçalhos e corpo que chegaram.', 'Envie o mesmo pedido 2 vezes e pense em como o seu sistema evitaria duplicar.'],
        cuidado: 'O endereço é público para quem tiver o link: nunca envie dados reais.' },
      { nome: 'NotebookLM', url: 'https://notebooklm.google.com/', icone: '📓', plano: 'Gratuito com conta Google (há limites de fontes e de uso)',
        para_que: 'Ler a documentação de uma API com ajuda da IA, sempre com o trecho original citado.',
        nivel_exigido: 'Básico de lógica',
        pratica: ['Adicione como fonte as páginas de introdução da API do WhatsApp Cloud (Meta for Developers).', 'Pergunte sobre autenticação, envio de mensagem com botões, limites, webhooks e número de teste.', 'Abra as citações e confira cada resposta no texto da Meta.', 'Preencha o roteiro de leitura da lição com o que encontrou.'] }
    ],
    4: [
      { nome: 'n8n', url: 'https://n8n.io/', icone: '🔗', plano: 'Gratuito (self-host) ou teste de 14 dias na nuvem',
        para_que: 'Orquestrar fluxos visuais com gatilhos, agentes de IA, rotinas agendadas e histórico de execuções.',
        nivel_exigido: 'Básico de lógica',
        pratica: ['Crie uma rotina com gatilho agendado que busca dados de uma API pública e grava o resultado.', 'Crie outro fluxo com o nó de agente de IA, memória da conversa e uma ferramenta simples (ex.: consultar uma planilha fictícia).', 'Provoque um erro e abra a aba de execuções para ver entrada, saída e mensagem do nó.', 'Corrija e rode de novo com os mesmos dados.'],
        cuidado: 'Guarde chaves só nas credenciais do n8n; nunca cole no texto dos nós.' },
      { nome: 'Google AI Studio', url: 'https://aistudio.google.com/', icone: '🧪', plano: 'Gratuito com conta Google (cota limitada; no uso grátis o Google pode usar os dados para melhorar produtos)',
        para_que: 'Gerar uma chave grátis do Gemini para o agente do n8n e testar as instruções de sistema antes.',
        nivel_exigido: 'Básico de lógica',
        pratica: ['Escreva as instruções de sistema do agente de atendimento, com regras para não inventar.', 'Teste com 5 perguntas fictícias, incluindo uma que o agente não deveria responder.', 'Ajuste as instruções até o agente admitir quando não sabe.', 'Gere a chave de API e cadastre como credencial no n8n.'],
        cuidado: 'No plano grátis os dados podem ser usados pelo Google: só dados fictícios.' }
    ],
    5: [
      { nome: 'Claude', url: 'https://claude.ai/', icone: '🟠', plano: 'Plano gratuito com limite de mensagens',
        para_que: 'Revisar a proposta como um cliente exigente e levantar riscos de LGPD e segurança.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escreva a sua proposta com MVP, fase 2, critérios de aceite e custos recorrentes.', 'Peça que a IA leia como um cliente desconfiado e liste as dúvidas que ele teria.', 'Peça também a lista de dados pessoais coletados, para que servem e onde ficam.', 'Ajuste a proposta e deixe claro o que não está incluído.'],
        cuidado: 'Troque nome do cliente, valores e dados reais antes de colar.' },
      { nome: 'Gamma', url: 'https://gamma.app/', icone: '🖼️', plano: 'Plano gratuito com créditos de IA limitados',
        para_que: 'Transformar a proposta em apresentação para o cliente em poucos minutos.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie uma apresentação a partir do seu texto de proposta.', 'Deixe em no máximo 7 slides: dor, solução, MVP, prazos, custos, critérios de aceite e próximos passos.', 'Revise número por número: a IA pode mudar valores.', 'Exporte ou compartilhe o link para treinar a apresentação.'],
        cuidado: 'Links compartilhados podem ser abertos por quem os receber: não inclua dados sensíveis.' },
      { nome: 'Bitwarden', url: 'https://bitwarden.com/', icone: '🔐', plano: 'Plano gratuito para uso pessoal',
        para_que: 'Guardar e organizar as credenciais de cada projeto em um cofre, em vez de planilhas ou mensagens.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie o cofre e uma pasta para um projeto de cliente fictício.', 'Cadastre as contas do projeto (banco, n8n, hospedagem) com senhas geradas pelo próprio app.', 'Anote em cada item quem é o dono da conta e quem tem acesso.', 'Use essa lista no manual de entrega: o que passa para o cliente no fim do projeto.'] }
    ]
  }
});
