/* Manual do Painel do Master: aberto pelo botão "📖 Manual" e pelos "❓" ao lado de cada seção. */
window.MANUAL_MASTER = [
  { id:'inicio', titulo:'🧭 Como usar o painel', html:`
    <p>O Painel do Master é onde você acompanha os alunos, conversa com eles pelo WhatsApp, cuida dos certificados e prepara a divulgação do portal. Tudo o que aparece aqui vem do banco de dados (Supabase) em tempo real.</p>
    <p>Em cada seção há um botão <b>❓</b> ao lado do título: ele abre a explicação daquela parte neste manual.</p>
    <h4>Rotina sugerida</h4>
    <ul>
      <li><b>Todo dia (5 minutos):</b> confirme os WhatsApps pendentes, aprove os depoimentos novos e veja os números do topo.</li>
      <li><b>Duas vezes por semana:</b> na Central de avisos, mande mensagem para os grupos "Abandono", "Foco" e "Quase lá".</li>
      <li><b>Toda semana:</b> poste nas redes com um link com rastreio novo e veja na Divulgação qual post trouxe mais alunos.</li>
    </ul>`},

  { id:'numeros', titulo:'📊 Números do topo', html:`
    <ul>
      <li><b>👥 Alunos cadastrados:</b> total de pessoas com cadastro. Embaixo: quantos entraram nos últimos 7 dias e quantos já estão liberados (confirmação feita).</li>
      <li><b>⚡ Ativos nos últimos 7 dias:</b> quem abriu o portal na última semana. É o melhor termômetro do engajamento.</li>
      <li><b>📈 Progresso médio:</b> a média de conclusão de todas as matrículas.</li>
      <li><b>🏆 Cursos concluídos:</b> quantas matrículas chegaram a 100% e a taxa de conclusão.</li>
    </ul>`},

  { id:'ferramentas', titulo:'🔎 Busca, filtro, convite e planilha', html:`
    <ul>
      <li><b>Busca:</b> digite nome, e-mail, telefone, estado, profissão ou objetivo. A tabela de alunos, os gráficos e a Central de avisos passam a mostrar só quem combina com a busca.</li>
      <li><b>Filtro de curso:</b> mostra só os alunos de um curso. O gráfico "Funil de lições" passa a ser desse curso.</li>
      <li><b>🔗 Copiar link de convite:</b> copia o link direto de um curso (o do filtro ou o primeiro disponível). Use para mandar a alguém que já sabe qual curso quer. Para posts nas redes, prefira o link com rastreio da seção Divulgação.</li>
      <li><b>⬇️ Exportar planilha:</b> baixa um arquivo que abre no Excel ou Google Planilhas, com os dados e o progresso de cada aluno (respeita a busca e o filtro).</li>
      <li><b>🔄 Atualizar:</b> recarrega os dados sem fechar o painel.</li>
    </ul>`},

  { id:'confirmacoes', titulo:'✅ Confirmações de WhatsApp', html:`
    <p>Aparece só quando há alunos que ainda não confirmaram o WhatsApp.</p>
    <ol>
      <li>No cadastro, o aluno toca em "Enviar confirmação" e manda para o seu WhatsApp uma mensagem com um código de 4 números.</li>
      <li>Aqui aparece o nome, o telefone e o código. Confira se o <b>número de quem mandou</b> e o <b>código</b> batem.</li>
      <li>Clique em <b>✅ Confirmar</b>. Se quiser, use <b>Responder</b> para avisar o aluno que está tudo certo.</li>
    </ol>
    <p>Se o número ou o código não baterem, não confirme: pode ser alguém usando o telefone de outra pessoa.</p>`},

  { id:'graficos', titulo:'📈 Gráficos', html:`
    <ul>
      <li><b>Novos cadastros:</b> quantas pessoas se cadastraram por dia nos últimos 14 dias. Um pico costuma ser efeito de um post ou de um convite.</li>
      <li><b>Funil de lições:</b> quantos alunos concluíram cada lição do curso. Onde a barra cai muito é onde os alunos travam: vale revisar essa lição ou mandar um aviso.</li>
      <li><b>Objetivos dos alunos:</b> o que eles disseram que querem no cadastro (emprego, carreira, negócio...). Ajuda a escolher os temas dos posts.</li>
      <li><b>Situação dos alunos:</b> quem trabalha, estuda, as duas coisas ou nenhuma.</li>
    </ul>`},

  { id:'avisos', titulo:'📲 Central de avisos no WhatsApp', html:`
    <p>Separa os alunos em grupos automáticos e prepara uma mensagem personalizada para cada um.</p>
    <h4>Os grupos</h4>
    <ul>
      <li><b>🚨 Abandono:</b> começou e não volta há 7 dias ou mais.</li>
      <li><b>🎯 Foco:</b> parado há 3 a 6 dias.</li>
      <li><b>🚀 Não começou:</b> inscrito, mas sem nenhuma lição feita.</li>
      <li><b>🏁 Quase lá:</b> já fez 75% ou mais do curso.</li>
      <li><b>💪 Incentivo:</b> ativo e avançando.</li>
      <li><b>🏆 Concluiu:</b> terminou o curso.</li>
      <li><b>⏳ Sem confirmar:</b> falta confirmar e-mail ou WhatsApp.</li>
    </ul>
    <h4>Como mandar</h4>
    <ol>
      <li>Clique no grupo. À esquerda aparece a <b>mensagem modelo</b>; você pode editar o texto, e ele fica salvo neste navegador. <b>↺ Restaurar padrão</b> volta ao texto original.</li>
      <li>As palavras entre chaves são trocadas pelos dados de cada aluno: <code>{nome}</code>, <code>{curso}</code>, <code>{pct}</code> (porcentagem), <code>{proxima}</code> (próxima lição), <code>{dias}</code>, <code>{objetivo}</code>, <code>{ocupacao}</code> e <code>{link}</code>. Se o aluno não tiver o dado, a linha some sozinha.</li>
      <li>À direita aparece cada aluno com a mensagem já pronta. <b>📲 WhatsApp</b> abre a conversa com o texto preenchido: você só confere e aperta enviar (é grátis). <b>Copiar</b> copia o texto.</li>
      <li>Depois de enviado, o aluno ganha o selo <b>✉️ Avisado hoje</b> e vai para o fim da lista, para você não mandar duas vezes.</li>
    </ol>
    <p><b>⚡ Enviar automático</b> manda para o grupo inteiro de uma vez pela API oficial do WhatsApp Business. Só funciona se a API estiver configurada no Supabase e com modelos aprovados pela Meta; se der erro, use o botão 📲 WhatsApp.</p>
    <p>"Sem autorização registrada" aparece em cadastros antigos, feitos antes do campo de autorização de contato: prefira não mandar avisos automáticos para eles.</p>`},

  { id:'alunos', titulo:'👥 Tabela de alunos', html:`
    <ul>
      <li>Cada linha é um aluno: perfil, contato, estado, cursos com a barra de progresso e a última atividade.</li>
      <li><b>Clique no aluno</b> para abrir os detalhes: todos os dados do cadastro, de onde ele veio (link com rastreio), cada lição concluída com data e hora, e os avisos já enviados.</li>
      <li>O telefone é um link: abre a conversa no WhatsApp.</li>
      <li>Selos: <b>✓ Confirmado</b> (e-mail e WhatsApp ok), <b>✓ Liberado</b> (acesso liberado com a confirmação do WhatsApp dispensada), <b>⏳ Falta...</b> (ainda falta confirmar).</li>
    </ul>`},

  { id:'certificados', titulo:'🎓 Certificados emitidos', html:`
    <ul>
      <li>Lista todos os certificados que os alunos emitiram: nome, curso ou trilha, horas, ID da credencial e data.</li>
      <li><b>Clique no ID</b> para abrir a página pública de validação, a mesma que um recrutador vê ao escanear o QR do certificado.</li>
      <li><b>Revogar</b> cancela um certificado (por exemplo, se descobrir fraude). A página de validação passa a mostrar que ele foi cancelado. <b>Restaurar</b> desfaz.</li>
      <li>A linha verde acima da lista confirma quantos cursos emitem certificado. Ela se atualiza sozinha sempre que você abre o painel: por isso, depois de publicar um curso novo ou mudar um curso, abra o painel uma vez.</li>
    </ul>`},

  { id:'divulgacao', titulo:'📣 Divulgação (links com rastreio)', html:`
    <p>Mostra de onde vêm os alunos: qual rede social e qual post trouxe cada cadastro.</p>
    <ol>
      <li>Escolha a <b>rede</b> onde vai postar (Instagram, LinkedIn, WhatsApp...).</li>
      <li>Dê um nome à <b>campanha</b>, ou seja, ao post: por exemplo <code>lancamento</code>, <code>trilhas</code>, <code>depoimento-maria</code>.</li>
      <li>Se quiser que o link abra direto um curso, escolha o curso; senão, fica a página inicial.</li>
      <li>Clique em <b>🔗 Copiar link</b> e use esse link no post (no Instagram, na bio; no LinkedIn e no WhatsApp, no próprio texto).</li>
    </ol>
    <p>A tabela "De onde vieram" mostra quantos alunos cada rede e campanha trouxe e quantos deles já concluíram um curso. "Direto ou sem rastreio" são as pessoas que chegaram sem link de rastreio.</p>
    <p>Use um link diferente em cada post: assim você descobre o que funciona e repete.</p>`},

  { id:'depoimentos', titulo:'💬 Depoimentos', html:`
    <p>Quando um aluno conclui 100% de um curso, ele pode escrever um depoimento e dizer se autoriza a publicação. Os depoimentos chegam aqui.</p>
    <ul>
      <li><b>✅ Aprovar:</b> o depoimento passa a aparecer no site, na seção "Quem já concluiu" da página inicial (só se o aluno autorizou), com o primeiro nome, a inicial do sobrenome e o estado.</li>
      <li><b>🚫 Recusar:</b> o depoimento não aparece em lugar nenhum. Use para textos com erro, ofensa ou propaganda.</li>
      <li>🔒 <b>Não autorizou publicar:</b> você pode ler, mas ele nunca vai para o site nem para as redes.</li>
    </ul>
    <h4>Para postar nas redes (aparece nos depoimentos aprovados e autorizados)</h4>
    <ul>
      <li><b>🖼️ Baixar imagem:</b> baixa uma imagem quadrada (1080×1080) com o depoimento, o nome do aluno e o curso, no visual do portal. É a foto do post: serve para o feed do Instagram e para o LinkedIn.</li>
      <li><b>📋 Legenda Instagram:</b> copia o texto que vai embaixo da foto no Instagram: o depoimento, quem escreveu, um convite para começar e as hashtags. Termina com "Link na bio" porque o Instagram não deixa link clicável na legenda.</li>
      <li><b>📋 Legenda LinkedIn:</b> o mesmo texto, mas já com o link do portal com rastreio (campanha <code>depoimento</code>), porque no LinkedIn o link funciona no próprio post.</li>
    </ul>
    <h4>Passo a passo de um post</h4>
    <ol>
      <li>Clique em 🖼️ Baixar imagem.</li>
      <li>No Instagram ou no LinkedIn, crie um post novo e escolha a imagem baixada.</li>
      <li>Volte aqui, clique em 📋 Legenda da rede e cole no texto do post.</li>
      <li>Publique.</li>
    </ol>
    <p>Enquanto não há depoimento real, aparecem 3 exemplos marcados "EXEMPLOS · SÓ VOCÊ VÊ" para você testar. Nunca publique um exemplo como se fosse de um aluno de verdade.</p>`},

  { id:'cursos', titulo:'📚 Cursos: publicar, liberar e tirar do ar', html:`
    <p>Os cursos são criados e alterados pelo agente no Cursor. A situação de cada curso fica no catálogo:</p>
    <ul>
      <li><b>Disponível:</b> aberto para todos os alunos.</li>
      <li><b>Em breve:</b> aparece na trilha com o selo "Em breve". No site publicado, só você (master logado) consegue abrir, com o selo "PRÉVIA · SÓ MASTER", para conferir antes de liberar.</li>
      <li><b>Rascunho:</b> fora da trilha, só para testes.</li>
      <li><b>Arquivado:</b> tira o curso do ar sem apagar o progresso nem os certificados dos alunos.</li>
    </ul>
    <p>Para liberar ou tirar um curso do ar, peça ao agente. Depois que ele publicar, abra este painel uma vez para atualizar a lista de cursos que emitem certificado.</p>`},

  { id:'duvidas', titulo:'❓ Dúvidas comuns', html:`
    <ul>
      <li><b>O app não mostra uma novidade:</b> feche o app e abra de novo (ou aperte F5 no navegador).</li>
      <li><b>Não vejo o botão Sair no celular, só "Entrar":</b> aquele aparelho ou app não está logado. Toque em Entrar.</li>
      <li><b>O aluno esqueceu a senha:</b> na tela de entrada ele toca em "Esqueci minha senha" e recebe um link por e-mail.</li>
      <li><b>O aluno diz que não consegue abrir o curso:</b> clique nele na tabela e veja os selos. Se estiver "⏳ Falta WhatsApp", confirme em "Confirmações de WhatsApp".</li>
      <li><b>Achei um certificado falso circulando:</b> abra a página de validação com o ID. Se o ID não existir, a página mostra "Não encontramos". Se for um certificado real usado indevidamente, revogue-o.</li>
      <li><b>Mudei algo no Supabase (SQL):</b> o arquivo pode ser rodado de novo sem problema. Não precisa salvar a consulta; é só fechar a aba.</li>
    </ul>`}
];
