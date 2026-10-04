/* Preencha com os dados do seu projeto Supabase (Project Settings > API).
   Enquanto ficar vazio, o portal roda em modo demonstração: tudo é salvo só neste navegador. */
window.PORTAL_CONFIG = {
  supabaseUrl: 'https://kpqzyvvbocmcyohjyqmr.supabase.co',
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwcXp5dnZib2NtY3lvaGp5cW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEwNjkyOTUsImV4cCI6MjEwNjY0NTI5NX0.rZhwvSL4Re7Fz9glZAs9aeLX26YAGds-Ebz9EwARZJU',
  senhaMasterDemo: 'master',
  // true quando houver SMTP próprio configurado no Supabase: o aluno confirma o e-mail com código de 6 números.
  // false: o aluno cria uma senha no cadastro e entra com e-mail e senha.
  confirmarEmailPorCodigo: false,
  // Só vale no modo demonstração. No Supabase quem decide é a tabela config_portal (exigir_whatsapp).
  exigirWhatsappDemo: false
};
