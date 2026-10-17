# Portal de Estudos IA: instruções para agentes (Cursor, Claude)

Site estático (HTML, CSS e JavaScript puro, sem build). Os alunos usam `index.html`; o master usa `admin.html`.
Dados de alunos ficam no Supabase (`assets/dados.js`); sem `config.js` preenchido, roda em modo demonstração (localStorage).

## Regras de trabalho

- Trabalhe somente dentro desta pasta. Não leia nem altere outros projetos do usuário.
- Particione: uma etapa pequena por vez, testada antes da próxima. Não refatore nem reformate o que já foi validado.
- Ao final, liste exatamente os arquivos criados ou alterados.
- Nunca publique (push para `main`) sem o usuário dizer explicitamente que aprovou.
- Ao publicar mudanças no painel do master, troque o `?v=` dos arquivos em `admin.html` (ex.: `?v=20261006b` → data do dia + letra), para o navegador não usar a cópia antiga.


## Cursos

- Para criar ou editar cursos (`cursos/`), siga `.cursor/rules/cursos.mdc` (fluxo, catálogo, formato do `curso.js`, ferramentas, certificados).
- Nunca mude o `id` de um curso ou de uma lição já publicada: o progresso dos alunos está gravado por esses ids.
- O curso `arquiteto-solucoes-ia` não deve ser alterado sem pedido explícito.
