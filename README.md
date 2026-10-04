# Portal de Estudos

**O maior portal de estudos de desenvolvimento em IA.** Portal com vários cursos. O aluno se cadastra (nome, e-mail, idade, telefone/WhatsApp, país, estado, CEP, profissão, ocupação atual, se trabalha, se estuda e objetivo com o curso), confirma o e-mail e o WhatsApp, escolhe um curso e começa na hora. Não pedimos CPF, RG nem documentos com foto. O master acompanha todos os alunos e envia avisos pelo WhatsApp em `admin.html`.

## Testar no computador

```
npm run dev
```

Abra http://127.0.0.1:5180 (alunos) e http://127.0.0.1:5180/admin.html (master).
Sem o Supabase configurado, o portal roda em **modo demonstração**: os dados ficam só no navegador, a senha do master é `master` e os códigos de confirmação aparecem na própria tela (nada é enviado de verdade).

## Confirmação obrigatória de e-mail e WhatsApp

Sem confirmar os dois, o aluno não conclui a inscrição, não acessa o curso e não se inscreve em outros cursos. A tela deixa isso claro em todas as etapas.

1. O aluno preenche o cadastro e recebe um **código de 6 números no e-mail**.
2. Depois recebe outro **código no WhatsApp**.
3. Com os dois confirmados, o curso é liberado.

Quem já tem cadastro clica em **"Já tenho cadastro"**, digita o e-mail e recebe um código: entra em qualquer aparelho, sem senha, e se inscreve nos outros cursos com o mesmo cadastro. Trocar o telefone exige confirmar o WhatsApp de novo.

A regra também está no banco: matrícula e progresso só são aceitos de quem confirmou os dois, e a marcação "WhatsApp confirmado" só pode ser feita pela função do servidor.

## Avisos no WhatsApp (painel do master)

A **Central de avisos** separa os alunos automaticamente:

| Grupo | Quem entra |
|---|---|
| Abandono | começou e não volta há 7 dias ou mais |
| Foco | parado há 3 a 6 dias |
| Não começou | inscrito, sem nenhuma lição |
| Quase lá | 75% ou mais do curso |
| Incentivo | ativo e avançando |
| Concluiu | terminou o curso |
| Sem confirmar | falta confirmar e-mail ou WhatsApp |

Cada grupo tem uma mensagem modelo editável com variáveis (`{nome}`, `{curso}`, `{pct}`, `{proxima}`, `{dias}`, `{objetivo}`, `{ocupacao}`, `{link}`). São dois jeitos de enviar:

- **Botão WhatsApp (grátis):** abre a conversa com a mensagem pronta e você só confirma o envio. Funciona já, sem configurar nada.
- **Envio automático (API oficial do WhatsApp):** manda para o grupo inteiro de uma vez. Pela regra da Meta, usa o texto dos **modelos aprovados** (veja abaixo), e não o texto editado no painel.

Todo aviso fica registrado: o painel mostra "Avisado há X dias" e o histórico aparece na ficha do aluno.

## Ligar o banco de dados (Supabase, gratuito)

1. Crie um projeto em https://supabase.com.
2. **SQL Editor > New query**: cole o conteúdo de `supabase/schema.sql` e clique em **Run**. Pode rodar de novo sempre que o arquivo mudar.
3. **Authentication > Users > Add user**: crie o seu usuário master com e-mail e senha (marque *Auto Confirm User*).
4. No SQL Editor, rode (trocando o e-mail):
   `insert into public.masters (user_id) select id from auth.users where email = 'SEU-EMAIL@exemplo.com';`
5. **Project Settings > API**: copie a **Project URL** e a chave **anon public** para `config.js`.

A chave `anon` pode ficar no site: as regras do banco garantem que cada aluno só vê os próprios dados e só o master vê todos.

### Código por e-mail

1. **Authentication > Sign In / Providers > Email**: deixe o Email ativo, defina **Email OTP Length = 6** e **Email OTP Expiration = 600** segundos.
2. **Authentication > Email Templates**: nos modelos **Magic Link** e **Confirm signup**, troque o conteúdo para mostrar o código, por exemplo:

   ```html
   <h2>Portal de Estudos</h2>
   <p>Seu código de confirmação é:</p>
   <p style="font-size:28px;font-weight:bold;letter-spacing:6px">{{ .Token }}</p>
   <p>Ele vale por 10 minutos. Se não foi você, ignore este e-mail.</p>
   ```

3. **Recomendado:** o envio de e-mail embutido do Supabase permite poucos e-mails por hora. Para uso real, configure um SMTP próprio em **Project Settings > Authentication > SMTP Settings** (Resend, Brevo, Amazon SES etc.; todos têm plano gratuito para começar).

### Código e avisos por WhatsApp (API oficial da Meta)

1. Crie uma conta no [Meta Business](https://business.facebook.com) e um app em [Meta for Developers](https://developers.facebook.com) do tipo **Business**, com o produto **WhatsApp**.
2. Adicione e verifique o número que vai enviar as mensagens. Anote o **Phone number ID**.
3. Gere um **token permanente**: Business Settings > System users > crie um usuário de sistema com a permissão `whatsapp_business_messaging` e gere o token.
4. Em **WhatsApp Manager > Message templates**, crie os modelos (idioma Português (BR)):
   - `codigo_verificacao`, categoria **Authentication**, com botão **Copiar código**. A Meta monta o texto: "*{{1}} é seu código de verificação*".
   - Modelos dos avisos, categoria **Marketing** (ou **Utility**, se a Meta aceitar). As variáveis precisam seguir esta ordem:

   | Modelo | Variáveis | Exemplo de texto |
   |---|---|---|
   | `aviso_abandono` | {{1}} nome, {{2}} curso, {{3}} %, {{4}} próxima lição | Oi, {{1}}! Sentimos sua falta no curso {{2}}. Você parou em {{3}}% e a próxima lição é "{{4}}". Bora retomar? |
   | `aviso_foco` | {{1}} nome, {{2}} dias, {{3}} curso, {{4}} próxima lição | Oi, {{1}}! Faz {{2}} dias desde sua última lição em {{3}}. Reserve 15 minutos hoje para "{{4}}". |
   | `aviso_sem_comecar` | {{1}} nome, {{2}} curso | Oi, {{1}}! Seu curso {{2}} já está liberado. A primeira lição é curta: que tal começar hoje? |
   | `aviso_quase` | {{1}} nome, {{2}} %, {{3}} curso, {{4}} próxima lição | {{1}}, você já fez {{2}}% do curso {{3}}! Faltam poucas lições. Próxima: "{{4}}". |
   | `aviso_incentivo` | {{1}} nome, {{2}} %, {{3}} curso, {{4}} próxima lição | Mandou bem, {{1}}! Você está com {{2}}% no curso {{3}}. A próxima é "{{4}}". |
   | `aviso_concluiu` | {{1}} nome, {{2}} curso | Parabéns, {{1}}! Você concluiu o curso {{2}}. Veja os outros cursos do portal! |

5. Publique a função do servidor (no terminal, dentro desta pasta):

   ```
   npx supabase login
   npx supabase link --project-ref SEU-PROJECT-REF
   npx supabase secrets set WHATSAPP_TOKEN=SEU-TOKEN WHATSAPP_PHONE_ID=SEU-PHONE-NUMBER-ID
   npx supabase functions deploy whatsapp
   ```

   Opcionais: `WHATSAPP_TEMPLATE_CODIGO` (padrão `codigo_verificacao`), `WHATSAPP_IDIOMA` (padrão `pt_BR`), `WHATSAPP_CODIGO_BOTAO` (`1` se o modelo do código tiver botão de copiar, `0` se não tiver) e `WHATSAPP_PREFIXO_AVISO` (padrão `aviso_`).

Proteções da função: o código vale 10 minutos, só é guardado como hash, admite no máximo 5 tentativas, um reenvio por minuto e 5 códigos por hora. Avisos automáticos só vão para alunos com WhatsApp confirmado e autorização de contato.

### Custos

- **Supabase:** o plano gratuito atende bem o começo.
- **E-mail:** os SMTPs citados têm plano gratuito com algumas centenas ou milhares de e-mails por mês.
- **WhatsApp pelo botão (wa.me):** grátis.
- **WhatsApp pela API:** a Meta cobra por mensagem entregue, conforme a categoria. *Authentication* (códigos) é a mais barata e *Marketing* a mais cara, normalmente centavos de real por mensagem no Brasil. Os valores mudam: consulte a tabela oficial em https://developers.facebook.com/docs/whatsapp/pricing.

## Criar e publicar cursos

Peça ao Cursor ou ao Claude, por exemplo: *"Crie um curso de Excel para Negócios com 3 módulos e 3 lições cada"*. As regras que o agente segue estão em `AGENTS.md`:
o curso nasce como **rascunho** (visível só no seu computador), você testa, aprova, e só então ele vira **publicado**.

`npm run validar` confere se todos os cursos estão no formato certo.
