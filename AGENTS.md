# Portal de Estudos IA: instruções para agentes (Cursor, Claude)

Site estático (HTML, CSS e JavaScript puro, sem build). Os alunos usam `index.html`; o master usa `admin.html`.
Dados de alunos ficam no Supabase (`assets/dados.js`); sem `config.js` preenchido, roda em modo demonstração (localStorage).

## Regras de trabalho

- Trabalhe somente dentro desta pasta. Não leia nem altere outros projetos do usuário.
- Particione: uma etapa pequena por vez, testada antes da próxima. Não refatore nem reformate o que já foi validado.
- Ao final, liste exatamente os arquivos criados ou alterados.
- Nunca publique (push para `main`) sem o usuário dizer explicitamente que aprovou.

## Fluxo para criar um curso

1. Crie `cursos/<id-do-curso>/curso.js` (id em minúsculas com hífens, ex.: `excel-para-negocios`). Se o curso já está na Trilha de IA como `"em_breve"`, use o mesmo id do catálogo.
2. Se ainda não existir, adicione a entrada em `cursos/catalogo.json` com `"status": "em_breve"` (aparece na trilha com selo "Em breve", sem abrir) ou `"rascunho"` (fora da trilha, só na prévia).
3. Rode `npm run validar` e corrija tudo o que aparecer.
4. Rode `npm run dev` e teste em http://127.0.0.1:5180 (cursos `em_breve` com `curso.js` e rascunhos só abrem no localhost ou com `?previa` na URL): abra o curso, erre e acerte desafios, conclua um módulo.
5. Mostre ao usuário e aguarde a aprovação.
6. Aprovado: mude o status para `"disponivel"`, aumente `versao` se o curso já existia, rode `npm run validar` de novo, faça commit e push.

Status: `disponivel` (aberto a todos; `publicado` é o nome antigo e equivale), `em_breve`, `rascunho` e `arquivado`. Para tirar um curso do ar sem apagar o histórico dos alunos, use `"status": "arquivado"`. Nunca mude o `id` de um curso ou de uma lição já publicada: o progresso dos alunos está gravado por esses ids. O curso `arquiteto-solucoes-ia` não deve ser alterado sem pedido explícito.

## Entrada no catálogo (`cursos/catalogo.json`)

```json
{
  "id": "excel-para-negocios",
  "titulo": "Excel para Negócios",
  "descricao": "Uma frase sobre o que o aluno vai conseguir fazer ao final.",
  "icone": "📊",
  "cores": ["#4ade80", "#22d3ee"],
  "nivel": "iniciante",
  "ordem": 11,
  "status": "em_breve",
  "versao": 1
}
```

- `nivel`: `iniciante` (verde), `intermediario` (amarelo/laranja) ou `avancado` (vermelho/rosa). Sem `nivel`, o curso aparece em "Outros cursos", fora da trilha.
- `ordem`: posição na Trilha de IA (1, 2, 3...), sem repetir.

## Formato do `curso.js`

```js
PORTAL.registrarCurso({
  id: 'excel-para-negocios',             // igual ao do catálogo
  modulos: [
    { id: 1, icon: '📥', title: 'Organizando dados', sub: 'Subtítulo curto', lessons: [
      { id: '1.1', title: 'Tabelas de verdade', min: 6,
        body: [
          `<div class="card analogy"><h3>🗃️ Analogia</h3><p>...</p></div>`,
          `<div class="term"><b>Termo</b> = definição simples.</div>`,
          `<div class="card"><h3>Conceito</h3><p>...</p></div>`,
          `<div class="feyn"><b>🧒 Técnica Feynman:</b> ...</div>`
        ],
        ch: { who: 'Quem apresenta o caso', says: 'A fala da pessoa.', q: 'A pergunta do desafio?',
          opts: [
            { t: 'Alternativa', ok: false, why: 'Por que está errada.' },
            { t: 'Alternativa certa', ok: true, why: 'Por que está certa.' },
            { t: 'Alternativa', ok: false, why: 'Por que está errada.' }
          ] } }
    ] }
  ],
  conclusaoModulo: { 1: 'Mensagem ao concluir o módulo 1.' },   // opcional
  prompts: { 1: [ { title: 'Título', desc: 'Para que serve', text: 'Texto do prompt' } ] }, // opcional: libera o Code Toolbox
  cores: { 1: ['#ff5a5f', '#ff9a3c'] },                          // opcional: cor de cada módulo
  iconesLicao: { '1.1': '🗃️' },                                  // opcional
  niveis: [[1500, 'Mestre'], [900, 'Avançado'], [300, 'Intermediário'], [0, 'Iniciante']], // opcional
  acerto: 'Acertou!',                                             // opcional
  aoAbrirLicao: { '1.1': root => { /* interatividade da lição, ex.: simulador */ } } // opcional
});
```

- Módulos numerados 1, 2, 3...; lições com id `"<módulo>.<n>"`; cada desafio com exatamente uma alternativa certa.
- Classes visuais disponíveis no `body`: `card`, `card analogy`, `term`, `feyn`, `why-chain`, `golden` (lista numerada), `flows`/`flow old`/`flow new`/`node`, `pipe`, `tw` + `tbl` (tabela), `code`, `calc`/`res` (simuladores). Veja o exemplo completo em `cursos/arquiteto-solucoes-ia/curso.js`.
- Uma lição ainda sem conteúdo pode usar `soon: true, teaser: 'texto'`.
