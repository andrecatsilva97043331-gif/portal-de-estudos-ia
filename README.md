# Portal de Estudos

Portal com vários cursos. O aluno se cadastra (nome, idade, telefone/WhatsApp, país, estado, CEP, profissão, ocupação atual, se trabalha, se estuda e objetivo com o curso), escolhe um curso e começa na hora. Não pedimos CPF, RG nem documentos com foto. O master acompanha todos os alunos em `admin.html`.

## Testar no computador

```
npm run dev
```

Abra http://127.0.0.1:5180 (alunos) e http://127.0.0.1:5180/admin.html (master).
Sem o Supabase configurado, o portal roda em **modo demonstração**: os dados ficam só no navegador e a senha do master é `master`.

## Ligar o banco de dados (Supabase, gratuito)

1. Crie um projeto em https://supabase.com.
2. **SQL Editor > New query**: cole o conteúdo de `supabase/schema.sql` e clique em **Run**.
3. **Authentication > Sign In / Providers**: ative **Allow anonymous sign-ins** (é assim que o aluno entra sem senha).
4. **Authentication > Users > Add user**: crie o seu usuário master com e-mail e senha.
5. No SQL Editor, rode (trocando o e-mail):
   `insert into public.masters (user_id) select id from auth.users where email = 'SEU-EMAIL@exemplo.com';`
6. **Project Settings > API**: copie a **Project URL** e a chave **anon public** para `config.js`.

A chave `anon` pode ficar no site: as regras do banco garantem que cada aluno só vê os próprios dados e só o master vê todos.

## Criar e publicar cursos

Peça ao Cursor ou ao Claude, por exemplo: *"Crie um curso de Excel para Negócios com 3 módulos e 3 lições cada"*. As regras que o agente segue estão em `AGENTS.md`:
o curso nasce como **rascunho** (visível só no seu computador), você testa, aprova, e só então ele vira **publicado**.

`npm run validar` confere se todos os cursos estão no formato certo.

## Limitação atual

O aluno fica conectado no aparelho e navegador em que se cadastrou. Em outro aparelho ele precisaria se cadastrar de novo. Entrar em outro aparelho (por código no WhatsApp ou e-mail) pode ser a próxima etapa.
