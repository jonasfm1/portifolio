// server/api/send-email.post.ts
export default defineEventHandler(async (event) => {
  // 1. Captura os dados enviados pelo seu formulário
  const body = await readBody(event);
  
  // 2. Pega o ID do ambiente (que está seguro no servidor)
  const config = useRuntimeConfig();
  const formspreeId = config.formspreeId; 

  try {
    // 3. O servidor do Nuxt faz a requisição para o Formspree
    const response = await $fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      body: body,
    });

    return { success: true, data: response };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Erro ao enviar e-mail pelo servidor.',
    });
  }
});