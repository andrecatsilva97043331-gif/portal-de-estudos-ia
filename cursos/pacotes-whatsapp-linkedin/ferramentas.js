PORTAL.registrarFerramentas({
  'pacotes-whatsapp-linkedin': {
    1: [
      { nome: 'WhatsApp Business', url: 'https://business.whatsapp.com/', icone: '🟢', plano: 'App gratuito (Android e iPhone)',
        para_que: 'Configurar respostas rápidas, mensagem de saudação, mensagem de ausência e etiquetas, exatamente onde o pacote vai ser usado.',
        nivel_exigido: 'Sem programar',
        pratica: ['Em Ferramentas comerciais, crie 3 respostas rápidas com atalhos (ex.: /horario) para o negócio fictício.', 'Configure a mensagem de saudação e a de ausência com as suas palavras.', 'Crie 3 etiquetas para etapas da jornada (novo contato, pedido feito, pós-venda).', 'Teste mandando mensagem de outro número e veja se tudo soa humano.'],
        cuidado: 'Use um número de teste ou o seu; para configurar o de um cliente, peça autorização e nunca exporte a lista de contatos dele.' },
      { nome: 'Claude', url: 'https://claude.ai/', icone: '🗣️', plano: 'Plano gratuito com limite de mensagens por período',
        para_que: 'Revisar se as suas mensagens soam humanas, curtas e no tom do negócio.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escreva você 5 mensagens da jornada de um negócio fictício (boas-vindas, orçamento, confirmação, pós-venda, reativação).', 'Envie as mensagens com uma descrição do tom do negócio e peça para apontar o que parece robótico.', 'Reescreva você as frases apontadas, mantendo os campos como {nome} e {data}.', 'Leia em voz alta: se você não falaria assim, ajuste de novo.'] }
    ],
    2: [
      { nome: 'LinkedIn', url: 'https://www.linkedin.com/', icone: '💼', plano: 'Gratuito; o Premium é pago e não é necessário',
        para_que: 'Rede profissional onde o pacote vai ser publicado: perfil, posts e mensagens de conexão.',
        nivel_exigido: 'Sem programar',
        pratica: ['Revise o título do seu perfil para dizer o que você faz e para quem.', 'Reescreva a seção Sobre em até 5 linhas, com um exemplo de trabalho.', 'Escreva um convite de conexão personalizado para alguém da sua área, sem vender nada.', 'Salve tudo num documento antes de publicar, para revisar com calma.'] },
      { nome: 'Microsoft Copilot', url: 'https://copilot.microsoft.com/', icone: '✍️', plano: 'Gratuito com conta Microsoft (há limites de uso)',
        para_que: 'Ajudar a adaptar a mesma ideia para públicos e tons diferentes no LinkedIn e no e-mail.',
        nivel_exigido: 'Sem programar',
        pratica: ['Escreva você um post curto de LinkedIn sobre um aprendizado do seu trabalho.', 'Peça uma versão mais formal e outra mais leve, mantendo os fatos.', 'Escolha a melhor e faça você os ajustes finais.', 'Escreva também um e-mail de follow-up de 4 linhas e peça só uma revisão de clareza.'] },
      { nome: 'Google Docs', url: 'https://docs.google.com/', icone: '🗂️', plano: 'Gratuito com conta Google',
        para_que: 'Organizar o pacote de mensagens num documento com títulos, índice e guia de uso para o cliente.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie um documento com seções: WhatsApp, LinkedIn e e-mail.', 'Use Título 1 e Título 2 e insira um índice automático no topo.', 'Para cada mensagem, escreva nome, quando usar e campos a preencher.', 'Termine com um guia de uso de meia página, escrito por você.'] }
    ],
    3: [
      { nome: 'Google Gemini', url: 'https://gemini.google.com/', icone: '🛡️', plano: 'Gratuito com conta Google (há limites de uso)',
        para_que: 'Simular objeções e reclamações de clientes para treinar respostas firmes e respeitosas.',
        nivel_exigido: 'Sem programar',
        pratica: ['Peça que o Gemini faça o papel de um cliente que acha o pacote caro.', 'Responda você explicando o valor e oferecendo uma opção menor, sem desconto automático.', 'Repita com um cliente reclamando de atraso e com outro pedindo disparo para uma lista comprada.', 'No último caso, escreva por que você recusa (consentimento, LGPD e regras do WhatsApp).'] },
      { nome: 'Google Formulários', url: 'https://forms.google.com/', icone: '✅', plano: 'Gratuito com conta Google',
        para_que: 'Criar um formulário de cadastro em que o cliente final aceita receber mensagens, o famoso opt-in.',
        nivel_exigido: 'Sem programar',
        pratica: ['Crie um formulário com nome, WhatsApp e uma caixa de aceite para receber novidades.', 'Escreva você o texto do aceite: o que a pessoa vai receber, com que frequência e como sair.', 'Deixe a caixa de aceite como obrigatória e desmarcada.', 'Teste o formulário e veja onde as respostas ficam guardadas.'],
        cuidado: 'Peça só os dados necessários e combine com o cliente quem pode ver a planilha de respostas.' },
      { nome: 'ANPD (gov.br)', url: 'https://www.gov.br/anpd/pt-br', icone: '⚖️', plano: 'Gratuito (site oficial do governo)',
        para_que: 'Fonte oficial sobre a LGPD, com guias para pequenos negócios.',
        nivel_exigido: 'Sem programar',
        pratica: ['Procure no site os guias e orientações para agentes de pequeno porte.', 'Leia a parte sobre bases legais e consentimento.', 'Anote 3 regras que vão entrar no seu guia de uso responsável de 1 página.'] }
    ]
  }
});
