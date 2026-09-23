/* =========================================================
   Pizzaria Vitória — ligação com o servidor de pedidos
   Criasiteweb

   ⚠️ MODELO: estas chaves ainda são de exemplo.
   Cada cliente precisa do SEU PRÓPRIO espaço no servidor,
   criado de graça no Firebase com a conta Google da Criasiteweb.
   Enquanto não for trocado, o site funciona e o pedido chega no
   WhatsApp normalmente, mas o painel do dono não recebe nada.

   As chaves abaixo são públicas por natureza: elas apenas dizem
   ao navegador QUAL projeto procurar. Quem protege os dados são
   as regras do servidor, que só deixam a conta da loja ler os
   pedidos. Qualquer um pode ENVIAR um pedido (é o que o cliente
   faz no site), mas ninguém consegue LER a lista.
   ========================================================= */

export const FIREBASE_CONFIG = {
  apiKey: "TROCAR",
  authDomain: "TROCAR.firebaseapp.com",
  projectId: "TROCAR",
  storageBucket: "TROCAR.firebasestorage.app",
  messagingSenderId: "TROCAR",
  appId: "TROCAR"
};

/* conta usada pelo balcão para entrar no painel */
export const CONTA_LOJA = "loja@nonnarosa.com.br";
