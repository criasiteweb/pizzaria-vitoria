/* =========================================================
   Pizzaria Vitória — Cardápio (dados)
   Criasiteweb

   Cardápio digitado do folheto oficial da pizzaria
   (Rua Pedro Ripoli, 104 — Barro Branco — Ribeirão Pires).

   Fica num arquivo só, usado pelo site do cliente (index.html)
   e pela comanda do balcão dentro do painel (painel.html).
   Mudou o preço aqui, muda nos dois lugares.
   ========================================================= */

/* ---------- tamanho ----------
   O folheto trabalha com um tamanho só, a pizza grande, e aceita
   meio a meio cobrando o valor da mais cara. Se a pizzaria passar
   a ter broto ou família, é só acrescentar uma linha aqui com os
   preços correspondentes. */
const TAMANHOS = [
  { id: "grande", n: "Grande", d: "8 fatias", sabores: 2 }
];

/* ---------- borda ----------
   O folheto diz: todas as pizzas com borda de catupiry GRÁTIS. */
const BORDAS = [
  { n: "Borda de catupiry (grátis)", p: 0 },
  { n: "Sem borda recheada",         p: 0 }
];

/* ---------- massa ---------- */
const MASSAS = ["Tradicional", "Fina"];

/* ---------- adicionais ---------- */
const ADD_PIZZA = [
  { n: "Catupiry",    p: 5.00 },
  { n: "Cheddar",     p: 5.00 },
  { n: "Bacon",       p: 6.00 },
  { n: "Mais queijo", p: 5.00 }
];

/* acréscimo dos lanches: o folheto diz R$ 3,00 cada */
const ADD_LANCHE = [
  { n: "Presunto", p: 3.00 },
  { n: "Queijo",   p: 3.00 },
  { n: "Catupiry", p: 3.00 },
  { n: "Cheddar",  p: 3.00 },
  { n: "Bacon",    p: 3.00 }
];

/* ---- grupos do cardápio ---- */
const GRUPOS = [
  { id: "promocoes", rotulo: "Promoção", titulo: "Promoção", nota: "Promoção por tempo indeterminado, direto do folheto da casa." },
  { id: "salgadas",  rotulo: "Salgadas", titulo: "Pizzas salgadas", nota: "66 sabores. Meio a meio entre dois sabores: paga-se o valor do mais caro. Todas com borda de catupiry grátis." },
  { id: "doces",     rotulo: "Doces",    titulo: "Pizzas doces", nota: "29 sabores. Meio a meio também vale entre dois sabores doces." },
  { id: "lanches",   rotulo: "Lanches",  titulo: "Lanches", nota: "Acréscimo extra de R$ 3,00 cada: presunto, queijo, catupiry, cheddar e bacon." },
  { id: "pasteis",   rotulo: "Pastéis",  titulo: "Pastéis", nota: "" },
  { id: "bebidas",   rotulo: "Bebidas",  titulo: "Bebidas", nota: "" }
];

/* ---- itens ----
   pz: true   -> é pizza (abre meio a meio, borda e massa)
   t:         -> preço por tamanho
   p:         -> preço fixo (lanches, pastéis, bebidas, promoção)
   f:         -> nome do arquivo da foto em assets/img/fotos/
*/
const CARDAPIO = [
  /* ================= PROMOÇÃO ================= */
  { id:"c1", g:"promocoes", n:"Pizza Grande por R$ 50,00", d:"Escolha entre Baiana, Brócolis, Calabresa, Mussarela, Presuntão e Princesa I. Meio a meio entre esses sabores também vale, e a borda de catupiry continua grátis.", p:50.00, pzcombo:"grande", sabores:["s11","s14","s17","s44","s51","s52"], tag:"Promoção", f:"promo-50" },

  /* ================= PIZZAS SALGADAS ================= */
  { id:"s1",  g:"salgadas", n:"01 · Alho", d:"Mussarela, alho frito e orégano.", pz:true, t:{grande:51.00}, add:"pizza", f:"mussarela" },
  { id:"s2",  g:"salgadas", n:"02 · Aliche", d:"Mussarela e aliche.", pz:true, t:{grande:52.00}, add:"pizza", f:"catupiry" },
  { id:"s3",  g:"salgadas", n:"03 · A Moda da Casa", d:"Escarola, presunto, palmito, ervilha, bacon, parmesão e mussarela.", pz:true, t:{grande:57.00}, add:"pizza", f:"meioameio" },
  { id:"s4",  g:"salgadas", n:"04 · A Moda do Chefe", d:"Calabresa, presunto, ervilha, bacon, mussarela e palmito.", pz:true, t:{grande:57.00}, add:"pizza", f:"meioameio" },
  { id:"s5",  g:"salgadas", n:"05 · A Moda do Freguês", d:"A pizza mais completa da casa. Peça pelo WhatsApp que a gente conta o que vai nela.", pz:true, t:{grande:62.00}, add:"pizza", f:"meioameio" },
  { id:"s6",  g:"salgadas", n:"06 · A Moda do Jack", d:"Escarola, bacon, parmesão, gorgonzola, alho e manjericão.", pz:true, t:{grande:54.00}, add:"pizza", f:"queijos" },
  { id:"s7",  g:"salgadas", n:"07 · Atum I", d:"Atum, salsa e cebola.", pz:true, t:{grande:54.00}, add:"pizza", f:"catupiry" },
  { id:"s8",  g:"salgadas", n:"08 · Atum II", d:"Atum, cebola e mussarela.", pz:true, t:{grande:56.00}, add:"pizza", f:"mussarela" },
  { id:"s9",  g:"salgadas", n:"09 · Bacon", d:"Mussarela, bacon e cebola.", pz:true, t:{grande:54.00}, add:"pizza", f:"carne" },
  { id:"s10", g:"salgadas", n:"10 · Baiacatu", d:"Calabresa moída, cebola, pimenta e catupiry.", pz:true, t:{grande:52.00}, add:"pizza", f:"calabresa" },
  { id:"s11", g:"salgadas", n:"11 · Baiana", d:"Calabresa moída, ovos e pimenta.", pz:true, t:{grande:50.00}, add:"pizza", tag:"Promoção", f:"calabresa" },
  { id:"s12", g:"salgadas", n:"12 · Batata I", d:"Presunto picado, batata frita, cheddar e parmesão.", pz:true, t:{grande:58.00}, add:"pizza", f:"batata" },
  { id:"s13", g:"salgadas", n:"13 · Batata II", d:"Batata, bacon, parmesão e requeijão.", pz:true, t:{grande:60.00}, add:"pizza", f:"batata-palha" },
  { id:"s14", g:"salgadas", n:"14 · Brócolis", d:"Brócolis refogado, bacon e mussarela.", pz:true, t:{grande:50.00}, add:"pizza", tag:"Promoção", f:"queijos" },
  { id:"s15", g:"salgadas", n:"15 · Brócolis Cremoso", d:"Brócolis, bacon e requeijão.", pz:true, t:{grande:56.00}, add:"pizza", f:"queijos" },
  { id:"s16", g:"salgadas", n:"16 · Caipira", d:"Frango, bacon, milho e mussarela.", pz:true, t:{grande:57.00}, add:"pizza", f:"frango" },
  { id:"s17", g:"salgadas", n:"17 · Calabresa", d:"Calabresa fatiada e cebola.", pz:true, t:{grande:50.00}, add:"pizza", tag:"Mais pedida", f:"calabresa" },
  { id:"s18", g:"salgadas", n:"18 · Calacatu", d:"Calabresa, cebola e catupiry.", pz:true, t:{grande:52.00}, add:"pizza", f:"calabresa" },
  { id:"s19", g:"salgadas", n:"19 · Calamussa", d:"Calabresa com mussarela e cebola.", pz:true, t:{grande:52.00}, add:"pizza", f:"calabresa" },
  { id:"s20", g:"salgadas", n:"20 · Carne Seca I", d:"Carne seca, milho e catupiry.", pz:true, t:{grande:60.00}, add:"pizza", f:"carne-seca" },
  { id:"s21", g:"salgadas", n:"21 · Carne Seca II", d:"Carne seca, milho e mussarela.", pz:true, t:{grande:60.00}, add:"pizza", f:"carne-seca" },
  { id:"s22", g:"salgadas", n:"22 · Costela", d:"Costela, barbecue, bacon e mussarela.", pz:true, t:{grande:60.00}, add:"pizza", f:"carne" },
  { id:"s23", g:"salgadas", n:"23 · Dogão", d:"Mussarela, salsicha, milho, ervilha, batata palha, cheddar e catupiry.", pz:true, t:{grande:58.00}, add:"pizza", f:"batata" },
  { id:"s24", g:"salgadas", n:"24 · Doritos I", d:"Carne moída, cheddar e doritos.", pz:true, t:{grande:55.00}, add:"pizza", f:"carne" },
  { id:"s25", g:"salgadas", n:"25 · Doritos II", d:"Carne moída, cheddar, doritos e pimenta.", pz:true, t:{grande:55.00}, add:"pizza", f:"carne" },
  { id:"s26", g:"salgadas", n:"26 · Frango Crocante", d:"Frango desfiado, cheddar e batata palha.", pz:true, t:{grande:55.00}, add:"pizza", f:"batata-palha" },
  { id:"s27", g:"salgadas", n:"27 · Frango I", d:"Frango desfiado, cebola e catupiry.", pz:true, t:{grande:51.00}, add:"pizza", tag:"Campeã", f:"frango" },
  { id:"s28", g:"salgadas", n:"28 · Frango II", d:"Frango desfiado, cebola e mussarela.", pz:true, t:{grande:51.00}, add:"pizza", f:"frango" },
  { id:"s29", g:"salgadas", n:"29 · Frango III", d:"Frango desfiado, cebola, catupiry e mussarela.", pz:true, t:{grande:52.00}, add:"pizza", f:"frango" },
  { id:"s30", g:"salgadas", n:"30 · Frango IV", d:"Frango, cebola e requeijão.", pz:true, t:{grande:60.00}, add:"pizza", f:"frango" },
  { id:"s31", g:"salgadas", n:"31 · Francesa", d:"Presunto, champignon e mussarela.", pz:true, t:{grande:52.00}, add:"pizza", f:"catupiry" },
  { id:"s32", g:"salgadas", n:"32 · Florença", d:"Carne moída à bolonhesa e catupiry.", pz:true, t:{grande:52.00}, add:"pizza", f:"carne" },
  { id:"s33", g:"salgadas", n:"33 · Gorgonzola", d:"Mussarela e gorgonzola.", pz:true, t:{grande:54.00}, add:"pizza", f:"queijos" },
  { id:"s34", g:"salgadas", n:"34 · Italiana", d:"Calabresa, cebola, mussarela e bacon.", pz:true, t:{grande:54.00}, add:"pizza", f:"calabresa" },
  { id:"s35", g:"salgadas", n:"35 · Japonesa", d:"Atum, aliche, cebola e mussarela.", pz:true, t:{grande:57.00}, add:"pizza", f:"mussarela" },
  { id:"s36", g:"salgadas", n:"36 · Jardim", d:"Palmito, cebola e mussarela.", pz:true, t:{grande:56.00}, add:"pizza", f:"catupiry" },
  { id:"s37", g:"salgadas", n:"37 · Lasanha", d:"Presunto, carne moída à bolonhesa, milho e mussarela.", pz:true, t:{grande:57.00}, add:"pizza", f:"carne" },
  { id:"s38", g:"salgadas", n:"38 · Lombo I", d:"Lombo, cebola e catupiry.", pz:true, t:{grande:56.00}, add:"pizza", f:"carne-seca" },
  { id:"s39", g:"salgadas", n:"39 · Lombo II", d:"Lombo, cebola e mussarela.", pz:true, t:{grande:56.00}, add:"pizza", f:"carne-seca" },
  { id:"s40", g:"salgadas", n:"40 · Mista", d:"Presunto, calabresa, cebola e mussarela.", pz:true, t:{grande:56.00}, add:"pizza", f:"meioameio" },
  { id:"s41", g:"salgadas", n:"41 · Margherita", d:"Mussarela, tomate, molho e manjericão.", pz:true, t:{grande:51.00}, add:"pizza", f:"mussarela" },
  { id:"s42", g:"salgadas", n:"42 · Milho I", d:"Milho e catupiry.", pz:true, t:{grande:55.00}, add:"pizza", f:"catupiry" },
  { id:"s43", g:"salgadas", n:"43 · Milho II", d:"Milho e mussarela.", pz:true, t:{grande:55.00}, add:"pizza", f:"mussarela" },
  { id:"s44", g:"salgadas", n:"44 · Mussarela", d:"Mussarela, orégano e azeitona.", pz:true, t:{grande:50.00}, add:"pizza", tag:"Clássica", f:"mussarela" },
  { id:"s45", g:"salgadas", n:"45 · Mussarela Crocante", d:"Batata palha, bacon e mussarela.", pz:true, t:{grande:56.00}, add:"pizza", f:"batata-palha" },
  { id:"s46", g:"salgadas", n:"46 · Namorados", d:"Mussarela, palmito, champignon e catupiry.", pz:true, t:{grande:56.00}, add:"pizza", f:"queijos" },
  { id:"s47", g:"salgadas", n:"47 · Napolitana", d:"Mussarela, tomate, molho e parmesão.", pz:true, t:{grande:52.00}, add:"pizza", f:"mussarela" },
  { id:"s48", g:"salgadas", n:"48 · Pepperoni", d:"Mussarela e pepperoni.", pz:true, t:{grande:60.00}, add:"pizza", f:"calabresa" },
  { id:"s49", g:"salgadas", n:"49 · Peruana", d:"Atum, cebola, ervilha e mussarela.", pz:true, t:{grande:57.00}, add:"pizza", f:"catupiry" },
  { id:"s50", g:"salgadas", n:"50 · Pipinela", d:"Mussarela, lombo, champignon e bacon.", pz:true, t:{grande:57.00}, add:"pizza", f:"carne-seca" },
  { id:"s51", g:"salgadas", n:"51 · Presuntão", d:"Presunto picado com mussarela.", pz:true, t:{grande:50.00}, add:"pizza", tag:"Promoção", f:"mussarela" },
  { id:"s52", g:"salgadas", n:"52 · Princesa I", d:"Escarola, bacon e catupiry.", pz:true, t:{grande:50.00}, add:"pizza", tag:"Promoção", f:"catupiry" },
  { id:"s53", g:"salgadas", n:"53 · Princesa II", d:"Escarola, bacon, aliche e mussarela.", pz:true, t:{grande:51.00}, add:"pizza", f:"queijos" },
  { id:"s54", g:"salgadas", n:"54 · Ponto Chic", d:"Presunto, tomate e mussarela.", pz:true, t:{grande:52.00}, add:"pizza", f:"mussarela" },
  { id:"s55", g:"salgadas", n:"55 · Portuguesa", d:"Presunto, ervilha, ovo, milho, cebola e mussarela.", pz:true, t:{grande:52.00}, add:"pizza", f:"meioameio" },
  { id:"s56", g:"salgadas", n:"56 · 2 Queijos", d:"Mussarela e catupiry.", pz:true, t:{grande:52.00}, add:"pizza", f:"catupiry" },
  { id:"s57", g:"salgadas", n:"57 · 3 Queijos", d:"Mussarela, parmesão e provolone.", pz:true, t:{grande:53.00}, add:"pizza", f:"queijos" },
  { id:"s58", g:"salgadas", n:"58 · 4 Queijos", d:"Mussarela, parmesão, provolone e catupiry.", pz:true, t:{grande:54.00}, add:"pizza", f:"queijos" },
  { id:"s59", g:"salgadas", n:"59 · 5 Queijos", d:"Mussarela, parmesão, provolone, catupiry e gorgonzola.", pz:true, t:{grande:55.00}, add:"pizza", f:"queijos" },
  { id:"s60", g:"salgadas", n:"60 · Rúcula", d:"Rúcula, mussarela e tomate seco.", pz:true, t:{grande:54.00}, add:"pizza", f:"mussarela" },
  { id:"s61", g:"salgadas", n:"61 · Toscana", d:"Calabresa, tomate e mussarela.", pz:true, t:{grande:52.00}, add:"pizza", f:"calabresa" },
  { id:"s62", g:"salgadas", n:"62 · Troiana", d:"Mussarela, lombo, bacon, parmesão e catupiry.", pz:true, t:{grande:56.00}, add:"pizza", f:"carne-seca" },
  { id:"s63", g:"salgadas", n:"63 · Vegetariana", d:"Escarola, milho, ervilha, champignon e mussarela.", pz:true, t:{grande:53.00}, add:"pizza", f:"queijos" },
  { id:"s64", g:"salgadas", n:"64 · Veneza", d:"Presunto picado, milho, palmito, bacon e mussarela.", pz:true, t:{grande:53.00}, add:"pizza", f:"meioameio" },
  { id:"s65", g:"salgadas", n:"65 · Vitória", d:"Mussarela, lombo, champignon, bacon, milho e catupiry.", pz:true, t:{grande:57.00}, add:"pizza", tag:"Da casa", f:"frango" },
  { id:"s66", g:"salgadas", n:"66 · Volkolver", d:"Presunto, milho, bacon, cheddar, frango, batata palha e mussarela.", pz:true, t:{grande:60.00}, add:"pizza", f:"batata" },

  /* ================= PIZZAS DOCES ================= */
  { id:"d1",  g:"doces", n:"01 · Abacaxi 1", d:"Abacaxi, leite condensado e canela.", pz:true, t:{grande:53.00}, f:"doce-branco" },
  { id:"d2",  g:"doces", n:"02 · Abacaxi 2", d:"Abacaxi e doce de leite.", pz:true, t:{grande:53.00}, f:"doce-branco" },
  { id:"d3",  g:"doces", n:"03 · Banana", d:"Catupiry, banana, canela e leite condensado.", pz:true, t:{grande:47.00}, f:"doce-branco" },
  { id:"d4",  g:"doces", n:"04 · Banoff", d:"Banana, doce de leite e marshmallow.", pz:true, t:{grande:49.00}, f:"doce-branco" },
  { id:"d5",  g:"doces", n:"05 · Beijinho", d:"Leite condensado e coco.", pz:true, t:{grande:48.00}, f:"doce-branco" },
  { id:"d6",  g:"doces", n:"06 · Brigadeiro", d:"Chocolate com granulado.", pz:true, t:{grande:50.00}, f:"doce-chocolate" },
  { id:"d7",  g:"doces", n:"07 · Chocobol I", d:"Chocolate ao leite.", pz:true, t:{grande:50.00}, f:"doce-chocolate" },
  { id:"d8",  g:"doces", n:"08 · Chocobol II", d:"Chocolate branco.", pz:true, t:{grande:53.00}, f:"doce-branco" },
  { id:"d9",  g:"doces", n:"09 · Chocolate", d:"Chocolate ao leite derretido.", pz:true, t:{grande:48.00}, f:"doce-chocolate" },
  { id:"d10", g:"doces", n:"10 · Chocolate Branco", d:"Chocolate branco derretido.", pz:true, t:{grande:53.00}, f:"doce-branco" },
  { id:"d11", g:"doces", n:"11 · Confete I", d:"Chocolate ao leite com confete.", pz:true, t:{grande:50.00}, f:"doce-chocolate" },
  { id:"d12", g:"doces", n:"12 · Confete II", d:"Chocolate branco com confete.", pz:true, t:{grande:53.00}, f:"doce-branco" },
  { id:"d13", g:"doces", n:"13 · Creme de Avelã", d:"Creme de avelã.", pz:true, t:{grande:50.00}, tag:"Mais pedida", f:"doce-chocolate" },
  { id:"d14", g:"doces", n:"14 · Floresta Negra", d:"Chocolate granulado e cereja.", pz:true, t:{grande:52.00}, f:"doce-chocolate" },
  { id:"d15", g:"doces", n:"15 · Kit Kat", d:"Chocolate com Kit Kat.", pz:true, t:{grande:55.00}, f:"doce-chocolate" },
  { id:"d16", g:"doces", n:"16 · Maracujá", d:"Chocolate branco e maracujá.", pz:true, t:{grande:57.00}, f:"doce-branco" },
  { id:"d17", g:"doces", n:"17 · Mineira", d:"Doce de leite e mussarela.", pz:true, t:{grande:48.00}, f:"doce-branco" },
  { id:"d18", g:"doces", n:"18 · Morango", d:"Morango e chocolate.", pz:true, t:{grande:54.00}, tag:"Campeã", f:"doce-chocolate" },
  { id:"d19", g:"doces", n:"19 · Ouro Branco I", d:"Chocolate ao leite e Ouro Branco.", pz:true, t:{grande:53.00}, f:"doce-chocolate" },
  { id:"d20", g:"doces", n:"20 · Ouro Branco II", d:"Chocolate branco e Ouro Branco.", pz:true, t:{grande:55.00}, f:"doce-branco" },
  { id:"d21", g:"doces", n:"21 · Ovomaltine", d:"Chocolate e Ovomaltine.", pz:true, t:{grande:49.00}, f:"doce-chocolate" },
  { id:"d22", g:"doces", n:"22 · Paçoca I", d:"Doce de leite e paçoca.", pz:true, t:{grande:49.00}, f:"doce-branco" },
  { id:"d23", g:"doces", n:"23 · Paçoca II", d:"Chocolate e paçoca.", pz:true, t:{grande:52.00}, f:"doce-chocolate" },
  { id:"d24", g:"doces", n:"24 · Prestígio", d:"Chocolate com coco.", pz:true, t:{grande:50.00}, f:"doce-chocolate" },
  { id:"d25", g:"doces", n:"25 · Romeu e Julieta", d:"Goiabada e mussarela.", pz:true, t:{grande:47.00}, f:"doce-branco" },
  { id:"d26", g:"doces", n:"26 · Sedução", d:"Banana e chocolate.", pz:true, t:{grande:47.00}, f:"doce-chocolate" },
  { id:"d27", g:"doces", n:"27 · Sonho de Valsa I", d:"Chocolate ao leite com Sonho de Valsa.", pz:true, t:{grande:53.00}, f:"doce-chocolate" },
  { id:"d28", g:"doces", n:"28 · Sonho de Valsa II", d:"Chocolate branco com Sonho de Valsa.", pz:true, t:{grande:55.00}, f:"doce-branco" },
  { id:"d29", g:"doces", n:"29 · Uva", d:"Chocolate e uva.", pz:true, t:{grande:55.00}, f:"doce-chocolate" },

  /* ================= LANCHES ================= */
  { id:"l1",  g:"lanches", n:"Hambúrguer", d:"Hambúrguer, cebola, maionese, ketchup e mostarda.", p:16.50, add:"lanche", f:"lanche-hamburguer" },
  { id:"l2",  g:"lanches", n:"X-Burguer", d:"Hambúrguer, queijo, cebola, maionese, ketchup e mostarda.", p:17.50, add:"lanche", f:"lanche-burguer" },
  { id:"l3",  g:"lanches", n:"X-Salada", d:"Hambúrguer, queijo, alface, tomate, cebola, maionese, ketchup e mostarda.", p:19.50, add:"lanche", f:"lanche-salada" },
  { id:"l4",  g:"lanches", n:"X-Egg", d:"Hambúrguer, ovo, queijo, cebola, maionese, ketchup e mostarda.", p:19.50, add:"lanche", f:"lanche-egg" },
  { id:"l5",  g:"lanches", n:"X-Bacon", d:"Hambúrguer, queijo, bacon, cebola, maionese, ketchup e mostarda.", p:19.50, add:"lanche", f:"lanche-bacon" },
  { id:"l6",  g:"lanches", n:"X-Egg Bacon", d:"Hambúrguer, ovo, bacon, cebola, maionese, ketchup e mostarda.", p:20.50, add:"lanche", f:"lanche-egg-bacon" },
  { id:"l7",  g:"lanches", n:"X-Egg Salada", d:"Hambúrguer, ovo, queijo, alface, tomate, cebola, maionese, ketchup e mostarda.", p:20.50, add:"lanche", f:"lanche-salada" },
  { id:"l8",  g:"lanches", n:"X-Bacon Salada", d:"Hambúrguer, bacon, queijo, alface, tomate, cebola, maionese, ketchup e mostarda.", p:20.50, add:"lanche", f:"lanche-bacon" },
  { id:"l9",  g:"lanches", n:"X-Bacon Egg Salada", d:"Hambúrguer, ovo, bacon, queijo, alface, tomate, cebola, maionese, ketchup e mostarda.", p:22.00, add:"lanche", f:"lanche-egg-bacon" },
  { id:"l10", g:"lanches", n:"X-Tudo", d:"Hambúrguer, bacon, ovo, presunto, queijo, alface, tomate, cebola, maionese, ketchup e mostarda.", p:23.50, add:"lanche", tag:"O maior", f:"lanche-tudo" },

  /* ================= PASTÉIS ================= */
  { id:"p1", g:"pasteis", n:"Pastel de Carne", d:"", p:11.00, f:"pastel" },
  { id:"p2", g:"pasteis", n:"Pastel de Queijo", d:"", p:11.00, f:"pastel" },
  { id:"p3", g:"pasteis", n:"Pastel de Frango", d:"", p:11.00, f:"pastel" },
  { id:"p4", g:"pasteis", n:"Pastel de Calabresa", d:"", p:11.00, f:"pastel" },
  { id:"p5", g:"pasteis", n:"Pastel de Bauru", d:"", p:11.00, f:"pastel" },
  { id:"p6", g:"pasteis", n:"Pastel de Pizza", d:"", p:11.00, f:"pastel" },
  { id:"p7", g:"pasteis", n:"Pastel de Carne, Queijo e Ovo", d:"", p:13.00, f:"pastel" },
  { id:"p8", g:"pasteis", n:"Pastel Portuguesa", d:"Presunto, ovo, milho, ervilha e mussarela.", p:15.00, f:"pastel" },
  { id:"p9",  g:"pasteis", n:"Pastel Doce de Chocolate", d:"", p:12.00, f:"pastel-doce" },
  { id:"p10", g:"pasteis", n:"Pastel Doce de Creme de Avelã", d:"", p:12.00, f:"pastel-doce" },
  { id:"p11", g:"pasteis", n:"Pastel Doce de Sonho de Valsa", d:"", p:13.00, f:"pastel-doce" },
  { id:"p12", g:"pasteis", n:"Pastel Doce de Ouro Branco", d:"", p:13.00, f:"pastel-doce" },

  /* ================= BEBIDAS =================
     Mesma lista de bebidas do outro sistema da Criasiteweb.
     [CONFIRMAR com o dono quais ele tem e por quanto vende.] */
  { id:"b1",  g:"bebidas", n:"Vinho", d:"Garrafa de vinho da casa.", p:34.00, f:"vinho" },
  { id:"b2",  g:"bebidas", n:"Coca-Cola 2,5 litros", d:"", p:17.90, f:"coca-25" },
  { id:"b3",  g:"bebidas", n:"Coca-Cola 1 litro", d:"", p:11.90, f:"coca-1l" },
  { id:"b4",  g:"bebidas", n:"Sprite 2 litros", d:"", p:15.90, f:"sprite" },
  { id:"b5",  g:"bebidas", n:"Fanta laranja ou uva", d:"", p:15.90, f:"fanta" },
  { id:"b6",  g:"bebidas", n:"Kuat 2 litros", d:"", p:11.90, f:"kuat" },
  { id:"b7",  g:"bebidas", n:"Sukita 2 litros", d:"", p:11.90, f:"sukita" },
  { id:"b8",  g:"bebidas", n:"Pepsi 1,5 litros", d:"", p:11.90, f:"pet15" },
  { id:"b9",  g:"bebidas", n:"Dolly 2 litros", d:"", p:8.90, f:"dolly" },
  { id:"b10", g:"bebidas", n:"Refrigerante 600 ml", d:"", p:9.90, f:"refri600" },
  { id:"b11", g:"bebidas", n:"Lata 350 ml", d:"", p:5.90, f:"lata350" },
  { id:"b12", g:"bebidas", n:"Sufresh lata", d:"", p:5.00, f:"sufresh" },
  { id:"b13", g:"bebidas", n:"Dollynho", d:"", p:3.50, f:"dollynho" },
  { id:"b14", g:"bebidas", n:"Suco de caixa 1 litro", d:"", p:9.00, f:"suco" },
  { id:"b15", g:"bebidas", n:"Heineken 330 ml", d:"", p:11.90, f:"heineken" },
  { id:"b16", g:"bebidas", n:"Cerveja 269 ml", d:"", p:5.00, f:"cerveja" }
];

/* =========================================================
   CUPONS DE DESCONTO
   Tipos: "percentual" (valor = %), "valor" (desconto em reais),
   "frete" (zera a taxa de entrega).
   ========================================================= */
const CUPONS = [
  { codigo: "VITORIA10",     tipo: "percentual", valor: 10, minimo: 100, texto: "10% de desconto em pedidos a partir de R$ 100,00" },
  { codigo: "PRIMEIRA",      tipo: "valor",      valor: 5,  minimo: 50,  texto: "R$ 5,00 de desconto na primeira compra" },
  { codigo: "ENTREGAGRATIS", tipo: "frete",      valor: 0,  minimo: 120, texto: "Entrega grátis em pedidos a partir de R$ 120,00" }
];

/* =========================================================
   CARTÃO FIDELIDADE (selo por pedido)
   ========================================================= */
const FIDELIDADE = {
  ativa: true,
  meta: 8,
  premio: "uma pizza grande grátis",
  regra: "Válido para pedidos feitos pelo site. O selo fica guardado no aparelho do cliente e é conferido pela loja no painel."
};

/* =========================================================
   O balcão e o editor do dono trabalham com um preço só por
   item. Para as pizzas, é o preço do tamanho grande.
   ========================================================= */
CARDAPIO.forEach(i => { if (i.pz && i.t && typeof i.p !== "number") i.p = i.t.grande; });
