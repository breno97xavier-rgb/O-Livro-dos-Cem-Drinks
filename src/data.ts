import { Chapter, Benefit, FAQItem, DrinkRecipe } from "./types";

export const chapters: Chapter[] = [
  {
    id: "cap-1",
    roman: "I",
    title: "Gin",
    count: 15,
    featuredDrinks: ["Negroni", "Dry Martini", "Tom Collins", "Clover Club", "Martinez", "Gin & Tonic"],
    description: "Espírito botânico inglês. Do resgate histórico do Dutch Genever à explosão contemporânea do London Dry.",
  },
  {
    id: "cap-2",
    roman: "II",
    title: "Uísque",
    count: 16,
    featuredDrinks: ["Old Fashioned", "Manhattan", "Whiskey Sour", "Boulevardier", "Sazerac", "Rusty Nail"],
    description: "O fogo líquido de grãos macerados. Clássicos turfados escoceses e a robustez doce dos bourbons americanos.",
  },
  {
    id: "cap-3",
    roman: "III",
    title: "Rum",
    count: 14,
    featuredDrinks: ["Mojito", "Daiquiri", "Piña Colada", "Cuba Libre", "Mai Tai", "Dark 'N' Stormy"],
    description: "Alma caribenha destilada do melaço. Misturas lendárias de marinheiros, piratas e o auge da cultura Tiki.",
  },
  {
    id: "cap-4",
    roman: "IV",
    title: "Vodka",
    count: 12,
    featuredDrinks: ["Moscow Mule", "Cosmopolitan", "Espresso Martini", "White Russian", "Bloody Mary", "Black Russian"],
    description: "Pureza glacial e precisão russa. A versatilidade do álcool neutro em clássicos que conquistaram o mundo do design.",
  },
  {
    id: "cap-5",
    roman: "V",
    title: "Tequila & Mezcal",
    count: 11,
    featuredDrinks: ["Margarita", "Paloma", "El Diablo", "Tommy's Margarita", "Tequila Sunrise", "Tequila Sour"],
    description: "O sangue sagrado do agave azul cozido. Sabores defumados, cítricos e terrosos do tesouro mexicano.",
  },
  {
    id: "cap-6",
    roman: "VI",
    title: "Cachaça",
    count: 9,
    featuredDrinks: ["Caipirinha", "Rabo de Galo", "Macunaíma", "Jorge Amado", "Bombeirinho", "Caju Amigo"],
    description: "Identidade líquida do Brasil. O destilado de cana-de-açúcar fresco e suas madeiras nativas de envelhecimento.",
  },
  {
    id: "cap-7",
    roman: "VII",
    title: "Conhaque & Brandy",
    count: 10,
    featuredDrinks: ["Sidecar", "French Connection", "Brandy Alexander", "Vieux Carré", "Sazerac de Cognac", "Metropolitan"],
    description: "A sofisticação do vinho duplo-destilado. Notas profundas de carvalho francês, frutas secas e especiarias de séculos.",
  },
  {
    id: "cap-8",
    roman: "VIII",
    title: "Aperitivos, Vermutes & Espumantes",
    count: 14,
    featuredDrinks: ["Aperol Spritz", "Americano", "Garibaldi", "Hanky Panky", "Bellini", "Mimosa"],
    description: "A doçura dos vinhos fortificados e o amargor lendário de botânicos digestivos europeus no fim da tarde.",
  },
];

export const benefits: Benefit[] = [
  {
    id: "b-1",
    title: "Fichas Técnicas Definitivas",
    description: "Medidas milimetricamente testadas, proporções elegantes em mililitros e as taças ideais recomendadas para cada um dos 101 coquetéis clássicos.",
    badge: "Exclusivo",
  },
  {
    id: "b-2",
    title: "História e Ensaísmo",
    description: "Não apenas misture: saiba por que cada drink existe. Descubra os bares lendários, reis, escritores e bartenders que eternizaram essas receitas.",
  },
  {
    id: "b-3",
    title: "Ilustrações de Alta Linha",
    description: "Mais de 100 layouts com design de página dupla e traços artísticos em dourado que fazem deste livro digital uma verdadeira obra de design gráfico.",
    badge: "Premium",
  },
  {
    id: "b-4",
    title: "Guia de Marcas Brasileiras",
    description: "Como reproduzir com excelência clássicos do mundo todo usando as melhores garrafas e ingredientes disponíveis no mercado nacional de varejo.",
  },
  {
    id: "b-5",
    title: "Variações e Segredos",
    description: "Os toques de mestre do autor para ajustar a acidez, doçura e diluição de acordo com seu paladar, além de desmitificar tabus sobre gelo cristalino.",
  },
  {
    id: "b-6",
    title: "Glossário do Bartender",
    description: "Aprenda as técnicas essenciais de maceração, agitação, coagem dupla, 'throwing' e aromatização para impressionar qualquer convidado.",
    badge: "Essencial",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como vou receber o livro dos 100 Drinks?",
    answer: "O envio é 100% digital e imediato. Logo após a confirmação do pagamento, você receberá um e-mail com os dados de acesso para download direto do arquivo em formato PDF de alta resolução, compatível com celular, tablet, computador ou impressão.",
  },
  {
    id: "faq-2",
    question: "Preciso de um bar caro em casa para aproveitar as receitas?",
    answer: "Absolutamente não. O livro foi planejado tanto para iniciantes quanto entusiastas experientes. Nós ensinamos como estruturar um ótimo 'Home Bar' compacto através do guia de marcas nacionais de excelente custo-benefício, mostrando o que realmente importa comprar.",
  },
  {
    id: "faq-3",
    question: "O livro é recomendado para quem nunca fez um drink?",
    answer: "Sim! O livro conta com um rico 'Glossário do Bartender' e introdução explicativa de técnicas. O passo a passo é extremamente visual, didático e descomplicado para que qualquer pessoa reproduza drinks de nível de alta coquetelaria na sua sala de estar.",
  },
  {
    id: "faq-4",
    question: "O pagamento é único ou assinatura?",
    answer: "É um pagamento único de apenas R$ 47,00. Uma vez adquirido, o arquivo PDF é seu de forma vitalícia para guardar e consultar quantas vezes quiser, livre de mensalidades ou taxas de expiração.",
  },
  {
    id: "faq-5",
    question: "E se eu não gostar, como funciona a garantia?",
    answer: "Confiamos plenamente na qualidade estética e informativa da nossa obra. Se em até 7 dias você sentir que o livro não superou suas expectativas, basta nos enviar um e-mail. Nós devolveremos 100% do seu valor pago de forma integral e incondicional, sem letras miúdas ou complicações.",
  },
];

export const sampleRecipes: DrinkRecipe[] = [
  {
    name: "Negroni",
    category: "Gin & Aperitivo",
    history: "Nascido em Florença em 1919, quando o Conde Camillo Negroni pediu para o bartender Fosco Scarselli substituir a água com gás do seu drink Americano por Gin, criando o maior pilar da história da coquetelaria italiana.",
    ingredients: [
      "30ml de London Dry Gin",
      "30ml de Campari Bitter",
      "30ml de Vermute Tinto Doce",
      "Gelo límpido cristalino",
      "1 fatia ou casca de Laranja Bahia"
    ],
    instructions: [
      "Adicione bastante gelo em um copo baixo (Double Old Fashioned).",
      "Despeje as medidas iguais de Gin, Campari e Vermute Tinto de sua preferência.",
      "Mexa delicadamente com uma colher bailarina para resfriar e diluir por cerca de 15 a 20 segundos.",
      "Aromatize o topo dobrando uma casca de laranja bahia sobre o copo e use-a como guarnição."
    ],
    glassware: "Copo Baixo (Rock / Double Old Fashioned)",
    curiosity: "O segredo do Negroni perfeito é a diluição controlada e a temperatura extrema do gelo. Um drink que equilibra o amargor do Campari, a erval do vermute e o calor cítrico do gin."
  },
  {
    name: "Old Fashioned",
    category: "Uísque / Bourbon",
    history: "Sua história remonta ao início do século XIX, consolidando-se no Pendennis Club em Louisville, Kentucky. Representa a forma original de definir a própria palavra 'Cocktail': destilado, açúcar, água e bitters.",
    ingredients: [
      "60ml de Kentucky Straight Bourbon ou Rye Whiskey",
      "1 cubo de Açúcar (ou 7.5ml de xarope de açúcar simples)",
      "3 dashes de Angostura Cocoa ou Aromatic Bitters",
      "Splash de água com gás (apenas para dissolver o açúcar)",
      "Casca de Laranja Bahia fresca para perfumar"
    ],
    instructions: [
      "No próprio copo baixo, coloque o açúcar, os dashes de Angostura e um splash mínimo de água.",
      "Massa suavemente com um pilão até criar uma pasta homogênea no fundo.",
      "Insira um grande pedaço de gelo cúbico ou esfera no copo.",
      "Adicione o Whiskey Bourbon e mexa vigorosamente por até 30 segundos, permitindo que a diluição integre os sabores.",
      "Esprema o óleo essencial da casca de laranja sobre o copo e posicione-a no topo."
    ],
    glassware: "Copo Baixo Clássico",
    curiosity: "O Old Fashioned não aceita pressa. Beber este cocktail é uma viagem lenta à medida que o gelo vai derretendo de forma gradual e revelando novas nuances do grão do whiskey."
  },
  {
    name: "Caipirinha Clássica",
    category: "Cachaça",
    history: "O único cocktail oficial brasileiro regulamentado pelo I.B.A. Suas origens remontam ao interior paulista por volta de 1918 como remédio caseiro para combater a gripe espanhola antes de se popularizar nacionalmente.",
    ingredients: [
      "60ml de Cachaça Branca Premium de excelente qualidade",
      "1 Limão Taiti de casca fina e uniforme",
      "2 colheres de sobremesa de Açúcar refinado ou cristal",
      "Gelo moído ou em cubos médios com generosidade"
    ],
    instructions: [
      "Corte as duas pontas do limão e retire a espícula branca central (o miolo amargo). Corte-o em gomos longitudinais.",
      "Adicione os gomos de limão com a casca para baixo no fundo do copo.",
      "Polvilhe o açúcar por cima do limão.",
      "Com um macerador de madeira ou inox, exerça pressão vertical constante sobre os gomos para extrair o suco sem triturar a casca verde.",
      "Encha o copo de gelo até o topo, verta a cachaça e mexa bem debaixo para cima com uma colher bailarina."
    ],
    glassware: "Copo Baixo de Vidro Grosso",
    curiosity: "Evite agitar em coqueteleira. A caipirinha verdadeira é montada no copo, ressaltando o frescor da cana de açúcar fresca e os óleos aromáticos da casca do limão taiti."
  }
];
