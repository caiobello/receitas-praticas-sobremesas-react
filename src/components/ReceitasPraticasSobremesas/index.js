import React, { useState } from 'react';
import './style.css';

const ReceitasPraticasSobremesas = () => {
  const quotes = [
    {
      sobremesa: "Pudim de Leite Condensado",
      ingredientes: "- 1 lata de leite condensado\n- 2 latas de leite (use a lata de leite condensado vazia para medir)\n- 3 ovos\n- 1 xícara de açúcar (para a calda)",
      modopreparo: "1. Comece preparando a calda:\n- Em uma panela, derreta o açúcar em fogo médio até obter um caramelo dourado.\n- Despeje o caramelo em uma forma para pudim, espalhando-o pela superfície da forma.\n2. No liquidificador, coloque o leite condensado, o leite e os ovos. Bata bem até obter uma mistura homogênea.\n3. Despeje essa mistura na forma caramelizada.\n4. Cubra a forma com papel alumínio e leve ao forno pré-aquecido a 180°C em banho-maria. Asse por aproximadamente 1 hora.\n5. Após assar, deixe o pudim esfriar e leve à geladeira por algumas horas ou durante a noite.\n6. Desenforme o pudim em um prato e sirva."
    },
    
    {
      sobremesa: "Mousse de Chocolate",
      ingredientes: "- 200g de chocolate meio amargo\n- 1 lata de creme de leite\n- 3 claras de ovo\n- 3 colheres de açúcar\n- 1 colher de sopa de manteiga",
      modopreparo: "1. Derreta o chocolate em banho-maria ou no micro-ondas com cuidado para não queimar.\n2. Misture a manteiga derretida ao chocolate derretido e mexa bem até incorporar.\n3. Acrescente o creme de leite e misture até obter uma mistura homogênea.\n4. Bata as claras de ovo em neve, adicionando o açúcar aos poucos.\n5. Incorpore as claras em neve à mistura de chocolate delicadamente, fazendo movimentos de baixo para cima para manter a textura leve da mousse.\n6. Coloque a mousse em taças individuais ou em um recipiente grande.\n7. Leve à geladeira por algumas horas até firmar.\n8. Sirva a mousse de chocolate com raspas de chocolate ou frutas, se desejar."
    },
    {
      sobremesa: "Pavê de Bolacha",
      ingredientes: "- 1 pacote de bolachas (tipo maisena ou de sua escolha)\n- 1 lata de leite condensado\n- 2 latas de leite (use a lata de leite condensado vazia para medir)\n- 2 gemas de ovo\n- 2 colheres de sopa de amido de milho\n- 1 colher de chá de essência de baunilha\n- Chocolate em pó ou cacau em pó para polvilhar",
      modopreparo: "1. Em uma panela, misture o leite condensado, as gemas, o amido de milho e o leite.\n2. Leve ao fogo médio, mexendo constantemente, até obter um creme espesso.\n3. Adicione a essência de baunilha e mexa bem.\n4. Em um refratário, faça camadas alternadas de creme e bolachas. Comece com uma camada de creme.\n5. Repita as camadas até acabar os ingredientes, terminando com o creme.\n6. Leve à geladeira por algumas horas para que as bolachas absorvam o creme.\n7. Polvilhe chocolate em pó ou cacau sobre o pavê antes de servir."
    },
    {
      sobremesa: "Gelatina Colorida",
      ingredientes: "- 4 pacotes de gelatina de cores e sabores variados\n- Água fervente",
      modopreparo: "1. Prepare cada pacote de gelatina separadamente de acordo com as instruções da embalagem, usando metade da quantidade de água recomendada.\n2. Despeje cada gelatina já preparada em recipientes separados.\n3. Leve à geladeira e deixe endurecer por algumas horas.\n4. Corte as gelatinas endurecidas em cubos ou formatos desejados e sirva."
    },
    {
      sobremesa: "Bolo de Cenoura",
      ingredientes: "- 3 cenouras médias raladas\n- 4 ovos\n- 1 xícara de óleo\n- 2 xícaras de açúcar\n- 2 xícaras de farinha de trigo\n- 1 colher de sopa de fermento em pó",
      modopreparo: "1. No liquidificador, bata as cenouras, os ovos e o óleo até obter uma mistura homogênea.\n2. Transfira essa mistura para uma tigela e adicione o açúcar, a farinha de trigo e o fermento. Misture bem.\n3. Despeje a massa em uma forma untada e enfarinhada.\n4. Asse em forno pré-aquecido a 180°C por cerca de 40 minutos, ou até que um palito saia limpo ao ser inserido no bolo.\n5. Deixe o bolo esfriar antes de servir."
    },
    {
      sobremesa: "Frutas com Chantilly",
      ingredientes: "- Frutas frescas (morangos, uvas, kiwis, etc.)\n- Creme de chantilly pronto ou feito em casa\n- Açúcar (opcional)",
      modopreparo: "1. Lave e corte as frutas em pedaços.\n2. Se desejar, polvilhe açúcar sobre as frutas e misture bem.\n3. Coloque as frutas em taças individuais e cubra com chantilly.\n4. Sirva imediatamente."
    },
    {
      sobremesa: "Sorvete com Calda de Chocolate",
      ingredientes: "- Sorvete de sua preferência\n- Chocolate meio amargo derretido",
      modopreparo: "1. Aqueça o chocolate meio amargo no micro-ondas ou em banho-maria até que esteja completamente derretido.\n2. Sirva o sorvete em taças individuais e regue com a calda de chocolate quente.\n3. A calda irá endurecer sobre o sorvete, criando uma casquinha crocante.\n4. Sirva imediatamente."
    },
    {
      sobremesa: "Tapioca com Coco e Leite Condensado",
      ingredientes: "- Goma de tapioca\n- Coco ralado\n- Leite condensado",
      modopreparo: "1. Aqueça uma frigideira antiaderente em fogo médio.\n2. Espalhe uma camada fina de goma de tapioca na frigideira quente.\n3. Deixe cozinhar até que a tapioca fique firme e comece a desgrudar.\n4. Retire a tapioca da frigideira, recheie com coco ralado e regue com leite condensado a gosto.\n5. Dobre a tapioca ao meio, como se fosse um crepe, e sirva."
    },
    {
      sobremesa: "Manjar de Coco",
      ingredientes: "- 1 litro de leite\n- 1 vidro de leite de coco\n- 1 xícara de açúcar\n- 1/2 xícara de amido de milho\n- Coco ralado para polvilhar\n- Calda de ameixa (opcional)",
      modopreparo: "1. Em uma panela, dissolva o amido de milho em um pouco de leite.\n2. Acrescente o restante do leite, o leite de coco e o açúcar.\n3. Leve ao fogo médio, mexendo sempre, até engrossar.\n4. Despeje a mistura em uma forma de pudim previamente molhada.\n5. Deixe esfriar e leve à geladeira até que o manjar esteja firme.\n6. Desenforme o manjar, polvilhe coco ralado por cima e sirva com calda de ameixa, se desejar."
    },
    {
      sobremesa: "Bolo de Caneca",
      ingredientes: "- 1 ovo\n- 4 colheres de sopa de açúcar\n- 4 colheres de sopa de leite\n- 3 colheres de sopa de óleo\n- 2 colheres de sopa de chocolate em pó\n- 4 colheres de sopa de farinha de trigo\n- 1 colher de café de fermento em pó\n- 1 pitada de sal\n- Gotas de chocolate (opcional)",
      modopreparo: "1. Em uma caneca, bata o ovo com um garfo.\n2. Adicione o açúcar, o leite e o óleo, e misture bem.\n3. Acrescente o chocolate em pó, a farinha de trigo, o fermento e o sal, e misture até obter uma massa homogênea.\n4. Se desejar, adicione algumas gotas de chocolate na massa.\n5. Leve a caneca ao micro-ondas e cozinhe por cerca de 2 minutos em potência alta (o tempo pode variar dependendo do micro-ondas).\n6. O bolo deve crescer e firmar. Espere esfriar um pouco e sirva direto na caneca."
    },
    
    
  ];

  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  // Função para obter uma citação aleatória
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  // Função para atualizar a citação exibida
  function generateNewQuote() {
    setCurrentQuote(getRandomQuote());
  }

  return (
    <div className="poet-quote-generator">
      <h2>Sobremesa Prática do Dia</h2>
      <h3>{currentQuote.sobremesa}</h3>
      <blockquote>
        <p>Ingredientes: <br/> {currentQuote.ingredientes}</p>
        <br/>
        <p>Modo de Preparo: <br/>{currentQuote.modopreparo}</p>
      </blockquote>
      <button onClick={generateNewQuote}>Nova Receita</button>
    </div>
  );
};

export default ReceitasPraticasSobremesas;
