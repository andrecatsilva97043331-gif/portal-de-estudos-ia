PORTAL.registrarCurso({
  id: 'projeto-final-ia',
  habilidades: ['Diagnóstico de problemas', 'Prompts e automação', 'Apps e agentes de IA', 'IA em produção', 'Do projeto ao negócio'],
  modulos: [
    { id: 1, icon: '🏁', title: 'Projeto final da Trilha de IA', sub: 'Uma solução de IA de ponta a ponta, do problema ao resultado', lessons: [
      { id: '1.1', title: 'Escolha o problema e desenhe a solução', min: 60,
        body: [
          `<div class="card analogy"><h3>🏗️ Hora de juntar tudo</h3><p>Nos 10 cursos você aprendeu cada peça separada: entender a IA, escrever bons pedidos, automatizar, criar apps, desenhar soluções, montar agentes, usar os próprios dados, colocar em produção e transformar em negócio. O projeto final é a obra inteira: <b>um problema real resolvido de ponta a ponta</b>, com as peças que fizerem sentido.</p></div>`,
          `<div class="card"><h3>Como escolher um bom problema</h3><ol class="golden"><li><span><b>Real:</b> de uma pessoa ou negócio que você conhece (pode ser o seu trabalho), não um exemplo inventado.</span></li><li><span><b>Frequente:</b> acontece toda semana e consome tempo ou gera erro.</span></li><li><span><b>Do tamanho certo:</b> dá para entregar uma primeira versão em poucos dias, não em meses.</span></li><li><span><b>Mensurável:</b> você consegue dizer quanto tempo, dinheiro ou erro havia antes e depois.</span></li></ol></div>`,
          `<div class="card"><h3>O que o desenho precisa mostrar</h3><p>Antes de construir, descreva a solução em uma página: qual a dor, como é feito hoje, quanto custa, o que a IA vai fazer e o que continua com uma pessoa. Diga quais peças da trilha entram (prompts, automação, app, agente, base de documentos) e por quê. Inclua os riscos: dados pessoais (LGPD), custo por uso, o que acontece se a IA errar e qual é o plano B.</p></div>`,
          `<div class="feyn"><b>🧒 Técnica Feynman:</b> se você não consegue explicar a sua solução para uma criança de 10 anos em três frases, o desenho ainda está confuso. Simplifique antes de construir.</div>`
        ],
        projeto: {
          entrega: 'O desenho da sua solução: problema real, processo atual, ROI estimado, arquitetura com as peças da trilha e riscos com plano B.',
          passos: [
            'Escolha um problema real e frequente de uma pessoa ou negócio que você conhece e escreva a dor em 1 frase.',
            'Descreva o processo atual passo a passo (quem, o quê, ferramenta, tempo) e marque o gargalo.',
            'Estime o ROI com números conservadores: horas por mês, valor da hora, custos da solução e payback.',
            'Desenhe a solução: o que a IA faz, o que fica com uma pessoa e quais peças da trilha você vai usar (e por quê).',
            'Liste os riscos (dados pessoais, custo, erro da IA) e o plano B de cada um.'
          ],
          checklist: [
            'A dor está escrita como problema do cliente, não como solução',
            'O ROI mostra a conta, não só o resultado',
            'Fica claro o que a IA faz e o que continua com uma pessoa',
            'Cada risco tem um plano B concreto'
          ],
          minimo: 600
        } },
      { id: '1.2', title: 'Construa e teste a primeira versão', min: 120,
        body: [
          `<div class="card"><h3>Construir pequeno, testar de verdade</h3><p>Construa a <b>menor versão que resolve a dor principal</b>. Pode ser um fluxo de automação, um app simples, um agente com uma ferramenta ou uma base de documentos consultada pela IA. O importante é que funcione com dados de verdade (ou fictícios realistas, se houver dados pessoais).</p></div>`,
          `<div class="card"><h3>Teste como em produção</h3><ol class="golden"><li><span>Monte pelo menos <b>10 casos de teste</b>: casos comuns, casos difíceis e tentativas de uso indevido.</span></li><li><span>Para cada caso, anote o que esperava e o que aconteceu.</span></li><li><span>Corrija o que falhou e rode de novo.</span></li><li><span>Estime o custo por uso e confira se o plano B funciona quando a IA falha.</span></li></ol></div>`,
          `<div class="feyn"><b>🧒 Técnica Feynman:</b> uma solução que só funciona no caso fácil é uma demonstração, não uma solução. O teste com casos difíceis é o que separa as duas.</div>`
        ],
        projeto: {
          entrega: 'O relatório da construção: o que você construiu, como funciona, os 10 casos de teste com resultados, as correções, o custo por uso e o plano B testado.',
          passos: [
            'Construa a menor versão da solução que resolve a dor principal, usando as ferramentas da trilha.',
            'Descreva como ela funciona passo a passo (entrada, o que a IA faz, saída, onde uma pessoa revisa).',
            'Rode 10 casos de teste (comuns, difíceis e de uso indevido) e registre esperado x obtido.',
            'Corrija o que falhou e registre o que mudou.',
            'Calcule o custo estimado por uso e teste o plano B simulando uma falha da IA.'
          ],
          checklist: [
            'A solução funciona com dados reais ou fictícios realistas (sem expor dados pessoais)',
            'Há pelo menos 10 casos de teste com resultado registrado',
            'Os erros encontrados foram corrigidos e testados de novo',
            'O custo por uso e o plano B estão descritos'
          ],
          minimo: 800
        } },
      { id: '1.3', title: 'Meça o resultado e apresente o caso', min: 60,
        body: [
          `<div class="card"><h3>O resultado é o que convence</h3><p>Quem contrata ou promove alguém quer ver <b>antes e depois</b>. Meça o que mudou: tempo, erros, custo, satisfação. Se ainda não houve uso real suficiente, mostre o resultado dos testes e o que vai medir nas próximas semanas, sem inventar números.</p></div>`,
          `<div class="card"><h3>Estudo de caso em uma página</h3><ol class="golden"><li><span><b>Problema:</b> a dor em 1 frase e quanto ela custava.</span></li><li><span><b>Solução:</b> o que você construiu, em linguagem simples.</span></li><li><span><b>Resultado:</b> números medidos ou resultados dos testes.</span></li><li><span><b>Aprendizados e próximos passos:</b> o que faria diferente e o que vem depois.</span></li></ol></div>`,
          `<div class="feyn"><b>🧒 Técnica Feynman:</b> conte a história como se fosse para um amigo: "eles perdiam X horas com isso; eu fiz Y; agora leva Z". Se ficou claro, o seu estudo de caso está pronto.</div>`
        ],
        projeto: {
          entrega: 'Um estudo de caso de uma página (problema, solução, resultado e próximos passos) e um post curto para o seu portfólio ou LinkedIn.',
          passos: [
            'Meça o antes e o depois (ou use os resultados dos testes, deixando claro que são testes).',
            'Escreva o estudo de caso: problema, solução, resultado e próximos passos.',
            'Peça autorização antes de citar o nome do cliente ou mostrar telas com dados.',
            'Escreva um post curto contando o caso, sem exageros e sem números inventados.'
          ],
          checklist: [
            'O estudo de caso tem problema, solução, resultado e próximos passos',
            'Os números são medidos ou estão marcados como resultado de teste',
            'Nenhum dado pessoal ou nome de cliente aparece sem autorização'
          ],
          minimo: 600
        } }
    ] }
  ],
  conclusaoModulo: { 1: 'Você concluiu o projeto final e toda a Trilha de IA. Emita agora o certificado da trilha completa: ele mostra a carga horária de todos os cursos e o seu projeto final.' },
  cores: { 1: ['#22d3ee', '#c084fc'] },
  iconesLicao: { '1.1': '🧭', '1.2': '🛠️', '1.3': '📈' }
});
