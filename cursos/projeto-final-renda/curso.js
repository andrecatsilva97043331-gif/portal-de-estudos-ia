PORTAL.registrarCurso({
  id: 'projeto-final-renda',
  habilidades: ['Base profissional', 'Serviços com IA', 'Atendimento ao cliente', 'Primeiros clientes', 'Organização financeira'],
  modulos: [
    { id: 1, icon: '🏁', title: 'Projeto final da Renda com IA', sub: 'Um serviço com IA oferecido e entregue do jeito certo', lessons: [
      { id: '1.1', title: 'Monte a sua oferta profissional', min: 60,
        body: [
          `<div class="card analogy"><h3>🧩 Hora de juntar tudo</h3><p>Nos 7 cursos você aprendeu a trabalhar com segurança, criar posts, mensagens e sites com IA, montar uma oferta, conquistar clientes e se organizar. O projeto final é colocar tudo isso em prática em <b>um serviço de verdade</b>, do combinado à entrega.</p></div>`,
          `<div class="card"><h3>Uma oferta clara tem</h3><ol class="golden"><li><span><b>Serviço e nicho:</b> o que você entrega e para quem.</span></li><li><span><b>Pacote:</b> o que está incluso, quantas revisões e o prazo.</span></li><li><span><b>Preço:</b> com a conta de horas e custos que você aprendeu, sem chute.</span></li><li><span><b>Combinados por escrito:</b> uso de dados, direitos de uso do que for gerado com IA, prazos e pagamento.</span></li></ol></div>`,
          `<div class="card"><h3>⚖️ Sem promessas de ganho</h3><p>A oferta promete o que você controla: prazo, qualidade, revisões e atendimento. Nunca prometa resultado de vendas ou faturamento para o cliente, nem para você.</p></div>`
        ],
        projeto: {
          entrega: 'A sua oferta profissional: serviço, nicho, pacote, preço justificado e os combinados por escrito (dados, direitos de uso, prazos e pagamento).',
          passos: [
            'Escolha um serviço dos cursos (posts, mensagens, site ou outro) e o nicho de cliente.',
            'Monte o pacote: o que entra, número de revisões e prazo.',
            'Calcule o preço com horas, custos de ferramentas e margem, mostrando a conta.',
            'Escreva os combinados: uso de dados do cliente, direitos de uso do material gerado com IA, prazos e forma de pagamento.'
          ],
          checklist: [
            'O pacote diz exatamente o que está incluso e o que não está',
            'O preço tem a conta por trás, não é chute',
            'Os combinados falam de dados, direitos de uso, prazo e pagamento',
            'A oferta não promete resultado de vendas nem ganhos'
          ],
          minimo: 600
        } },
      { id: '1.2', title: 'Entregue o serviço para um cliente', min: 120,
        body: [
          `<div class="card"><h3>Cliente real ou piloto combinado</h3><p>Entregue o serviço para <b>um cliente real</b>. Se ainda não tiver, faça um <b>piloto</b> com um negócio conhecido, combinado por escrito (pode ser gratuito ou com desconto), com autorização para usar o resultado como exemplo.</p></div>`,
          `<div class="card"><h3>O ciclo completo</h3><ol class="golden"><li><span><b>Briefing:</b> entenda o negócio, o público e o tom antes de abrir a IA.</span></li><li><span><b>Produção com IA e revisão humana:</b> a IA ajuda, você revisa fatos, tom e erros.</span></li><li><span><b>Entrega e revisões:</b> dentro do prazo e do número de revisões combinado.</span></li><li><span><b>Aprovação:</b> registre o "aprovado" do cliente por escrito.</span></li></ol></div>`,
          `<div class="feyn"><b>🧒 Técnica Feynman:</b> se o cliente precisasse explicar para alguém o que você entregou, ele conseguiria em uma frase? Se sim, a entrega está clara.</div>`
        ],
        projeto: {
          entrega: 'O relatório da entrega: briefing, o que foi produzido com IA e o que você revisou, as revisões pedidas e a aprovação do cliente.',
          passos: [
            'Combine o trabalho por escrito com um cliente real ou um piloto autorizado.',
            'Faça o briefing e registre as respostas principais.',
            'Produza com IA, revise fatos, tom e erros, e anote o que você mudou na revisão.',
            'Entregue no prazo, faça as revisões combinadas e registre a aprovação.',
            'Anote o que deu certo e o que você faria diferente.'
          ],
          checklist: [
            'Há um combinado por escrito com o cliente ou piloto',
            'O relatório mostra o que a IA fez e o que você revisou',
            'Prazo e número de revisões combinados foram respeitados',
            'A aprovação do cliente está registrada'
          ],
          minimo: 800
        } },
      { id: '1.3', title: 'Feche o ciclo: cobrança, organização e portfólio', min: 60,
        body: [
          `<div class="card"><h3>Um serviço só termina quando fecha o ciclo</h3><p>Depois da aprovação vêm a cobrança, o registro financeiro e o aprendizado. É isso que transforma um trabalho isolado em um serviço que você consegue repetir.</p></div>`,
          `<div class="card"><h3>Checklist do fechamento</h3><ol class="golden"><li><span><b>Cobrança e recibo:</b> envie com educação e registre o recebimento.</span></li><li><span><b>Organização:</b> lance a entrada na sua planilha e separe o dinheiro do negócio do pessoal.</span></li><li><span><b>Depoimento:</b> peça um depoimento sincero e autorização para mostrar o trabalho.</span></li><li><span><b>Formalização:</b> se fizer sentido, confira as regras do MEI no gov.br e com um contador.</span></li></ol></div>`,
          `<div class="card"><h3>⚖️ Sem promessas de ganho</h3><p>O resultado de cada pessoa depende de muitos fatores. O seu estudo de caso deve mostrar o trabalho feito, sem prometer ganhos a quem ler.</p></div>`
        ],
        projeto: {
          entrega: 'O fechamento do serviço: cobrança e registro financeiro, depoimento (ou o pedido feito), estudo de caso curto e os seus próximos passos.',
          passos: [
            'Envie a cobrança (ou registre o acordo do piloto) e emita o recibo, se houver pagamento.',
            'Lance a entrada na planilha do negócio e anote as horas gastas, comparando com o previsto.',
            'Peça um depoimento e a autorização para usar o trabalho como exemplo.',
            'Escreva um estudo de caso curto (cliente, problema, entrega, resultado) e os próximos passos do seu serviço.'
          ],
          checklist: [
            'A cobrança ou o acordo do piloto estão registrados',
            'As horas reais foram comparadas com as previstas no preço',
            'O estudo de caso não expõe dados do cliente sem autorização',
            'Não há promessa de ganhos no estudo de caso'
          ],
          minimo: 600
        } }
    ] }
  ],
  conclusaoModulo: { 1: 'Você concluiu o projeto final e toda a Trilha Renda com IA. Emita agora o certificado da trilha completa: ele mostra a carga horária de todos os cursos e o seu projeto final.' },
  cores: { 1: ['#10B981', '#3B82F6'] },
  iconesLicao: { '1.1': '🧩', '1.2': '🤝', '1.3': '📒' }
});
