/* =========================================================
   Pizzaria Vitória — ligação com o servidor de pedidos
   Criasiteweb

   Estas chaves são públicas por natureza: elas apenas dizem
   ao navegador QUAL projeto procurar. Quem protege os dados
   são as regras do servidor, que só deixam a conta da loja
   ler os pedidos. Qualquer um pode ENVIAR um pedido (é o que
   o cliente faz no site), mas ninguém consegue LER a lista.
   ========================================================= */

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDfwb6i5aR5DXR_LcCMC3iyjbMenBikNLA",
  authDomain: "pizzaria-vitoria-pedidos.firebaseapp.com",
  projectId: "pizzaria-vitoria-pedidos",
  storageBucket: "pizzaria-vitoria-pedidos.firebasestorage.app",
  messagingSenderId: "382352705974",
  appId: "1:382352705974:web:67078de2ca53662a8dd917"
};

/* conta usada pelo balcão para entrar no painel */
export const CONTA_LOJA = "criasite.site@gmail.com";
