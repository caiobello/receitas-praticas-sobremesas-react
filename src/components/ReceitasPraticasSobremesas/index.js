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
    {
      sobremesa: "Torta de Limão",
      ingredientes:
        "1 pacote de biscoito Maizena\n" +
        "100g de manteiga derretida\n" +
        "2 latas de leite condensado\n" +
        "Suco de 5 limões\n" +
        "Raspas de limão a gosto\n" +
        "2 claras de ovo\n" +
        "4 colheres de açúcar",
      modopreparo:
        "Triture os biscoitos Maizena até formar uma farinha fina.\n" +
        "Misture a manteiga derretida com os biscoitos triturados até obter uma massa.\n" +
        "Forre o fundo de uma forma com essa massa, pressionando bem.\n" +
        "Em uma tigela, misture o leite condensado com o suco dos limões até obter um creme.\n" +
        "Despeje o creme sobre a massa da torta.\n" +
        "Bata as claras em neve e adicione o açúcar aos poucos, formando um merengue.\n" +
        "Espalhe o merengue sobre o creme de limão.\n" +
        "Leve a torta ao forno preaquecido a 180°C até dourar o merengue.\n" +
        "Decore com raspas de limão e leve à geladeira antes de servir."
    },
    {
      sobremesa: "Gelato de Morango",
      ingredientes:
        "500g de morangos maduros\n" +
        "1 lata de leite condensado\n" +
        "1 lata de creme de leite\n" +
        "Suco de meio limão",
      modopreparo:
        "Lave e pique os morangos.\n" +
        "Bata os morangos no liquidificador até obter um purê.\n" +
        "Misture o purê de morango com o leite condensado e o creme de leite.\n" +
        "Adicione o suco de limão e misture bem.\n" +
        "Despeje a mistura em um recipiente e leve ao congelador.\n" +
        "A cada 30 minutos, mexa a mistura com um garfo para evitar a formação de cristais de gelo.\n" +
        "Repita o processo por cerca de 4 horas ou até o gelato adquirir a consistência desejada.\n" +
        "Sirva gelado."
    },
    {
      sobremesa: "Brigadeiro",
      ingredientes:
        "2 latas de leite condensado\n" +
        "4 colheres de sopa de chocolate em pó\n" +
        "2 colheres de sopa de manteiga\n" +
        "Chocolate granulado para decorar",
      modopreparo:
        "Em uma panela, misture o leite condensado, o chocolate em pó e a manteiga.\n" +
        "Leve ao fogo baixo e mexa continuamente até a mistura desgrudar do fundo da panela.\n" +
        "Despeje a massa em um prato untado com manteiga e deixe esfriar.\n" +
        "Com as mãos untadas, faça pequenas bolinhas e passe no chocolate granulado.\n" +
        "Coloque as bolinhas em forminhas de papel."
    },
    {
      sobremesa: "Cheesecake de Morango",
      ingredientes:
        "200g de biscoitos tipo Maria\n" +
        "100g de manteiga derretida\n" +
        "300g de cream cheese\n" +
        "1 lata de leite condensado\n" +
        "Suco de 1 limão\n" +
        "200g de morangos frescos",
      modopreparo:
        "Triture os biscoitos até formar uma farinha fina.\n" +
        "Misture a manteiga derretida com os biscoitos triturados e forre o fundo de uma forma de aro removível.\n" +
        "Em uma tigela, bata o cream cheese até ficar cremoso.\n" +
        "Adicione o leite condensado e o suco de limão e continue batendo até obter uma mistura homogênea.\n" +
        "Despeje o creme sobre a base de biscoitos.\n" +
        "Leve à geladeira por algumas horas para firmar.\n" +
        "Decore com morangos frescos antes de servir."
    },
    {
      sobremesa: "Panquecas com Nutella",
      ingredientes:
        "1 xícara de farinha de trigo\n" +
        "2 colheres de açúcar\n" +
        "1 colher de fermento em pó\n" +
        "1 pitada de sal\n" +
        "1 ovo\n" +
        "1 xícara de leite\n" +
        "Nutella para rechear",
      modopreparo:
        "Em uma tigela, misture a farinha, o açúcar, o fermento e o sal.\n" +
        "Em outra tigela, bata o ovo e misture com o leite.\n" +
        "Despeje a mistura líquida na mistura de ingredientes secos e mexa até obter uma massa homogênea.\n" +
        "Aqueça uma frigideira antiaderente e despeje conchas da massa.\n" +
        "Cozinhe até que bolhas se formem na superfície e vire as panquecas para dourar o outro lado.\n" +
        "Espalhe Nutella sobre as panquecas e dobre ao meio.\n" +
        "Sirva quente."
    },
    {
      sobremesa: "Salada de Frutas",
      ingredientes:
        "Frutas variadas (morangos, uvas, kiwis, maçãs, bananas, etc.)\n" +
        "Suco de 1 limão\n" +
        "2 colheres de açúcar",
      modopreparo:
        "Lave, descasque e pique as frutas em pedaços.\n" +
        "Regue as frutas com suco de limão e polvilhe açúcar.\n" +
        "Misture bem e leve à geladeira por algum tempo para que as frutas absorvam o sabor."
    },
    {
      sobremesa: "Beijinho",
      ingredientes:
        "1 lata de leite condensado\n" +
        "2 colheres de sopa de manteiga\n" +
        "100g de coco ralado\n" +
        "Cravos-da-índia para decorar (opcional)",
      modopreparo:
        "Em uma panela, misture o leite condensado, a manteiga e o coco ralado.\n" +
        "Leve ao fogo baixo e mexa continuamente até a mistura desgrudar do fundo da panela.\n" +
        "Deixe esfriar.\n" +
        "Com as mãos untadas, faça pequenas bolinhas e decore com cravos-da-índia, se desejar."
    },
    {
      sobremesa: "Bolo de Milho",
      ingredientes:
        "3 espigas de milho\n" +
        "1/2 xícara de óleo\n" +
        "3 ovos\n" +
        "1 xícara de açúcar\n" +
        "1 xícara de farinha de trigo\n" +
        "1 colher de fermento em pó",
      modopreparo:
        "No liquidificador, bata as espigas de milho, o óleo, os ovos e o açúcar até obter um creme.\n" +
        "Transfira o creme para uma tigela e adicione a farinha de trigo e o fermento, misturando bem.\n" +
        "Despeje a massa em uma forma untada e enfarinhada.\n" +
        "Asse em forno preaquecido a 180°C por cerca de 40 minutos, ou até que um palito saia limpo ao ser inserido no bolo.\n" +
        "Deixe o bolo esfriar antes de servir."
    },
    {
      sobremesa: "Cocada",
      ingredientes:
        "2 xícaras de coco fresco ralado\n" +
        "2 xícaras de açúcar\n" +
        "1 xícara de água",
      modopreparo:
        "Em uma panela, misture o açúcar e a água e leve ao fogo médio até obter uma calda em ponto de fio.\n" +
        "Adicione o coco ralado à calda e continue cozinhando, mexendo sempre, até que a mistura engrosse e comece a se soltar do fundo da panela.\n" +
        "Despeje a cocada em uma superfície untada com óleo e espalhe.\n" +
        "Deixe esfriar e corte em pedaços."
    },
    {
      sobremesa: "Crepe de Nutella e Banana",
      ingredientes:
        "1 xícara de farinha de trigo\n" +
        "1 xícara de leite\n" +
        "2 ovos\n" +
        "2 colheres de sopa de açúcar\n" +
        "2 bananas maduras\n" +
        "Nutella para rechear",
      modopreparo:
        "Em um liquidificador, misture a farinha, o leite, os ovos e o açúcar até obter uma massa líquida.\n" +
        "Aqueça uma frigideira antiaderente e despeje conchas da massa para fazer crepes finos.\n" +
        "Corte as bananas em rodelas.\n" +
        "Espalhe Nutella sobre cada crepe e coloque as rodelas de banana.\n" +
        "Dobre o crepe ao meio e depois em um triângulo.\n" +
        "Sirva quente."
    },
    {
      sobremesa: "Quindim",
      ingredientes: [
        "10 gemas de ovos",
        "2 xícaras de açúcar",
        "1 xícara de suco de limão",
        "1 colher de sopa de margarina",
        "1 xícara de coco ralado"
      ],
      modopreparo: [
        "Bata as gemas e o açúcar no liquidificador até obter um creme homogêneo.",
        "Acrescente o suco de limão, a margarina e o coco ralado à mistura, e bata novamente até incorporar bem.",
        "Unte forminhas individuais com margarina e polvilhe açúcar no fundo.",
        "Despeje a mistura nas forminhas.",
        "Leve as forminhas ao forno pré-aquecido a 180°C em banho-maria por aproximadamente 40 minutos, ou até que estejam dourados.",
        "Deixe esfriar e desenforme com cuidado."
      ],
      dicas: [
        "Para desenformar com facilidade, espere esfriar completamente antes de retirar da forma.",
        "Sirva gelado."
      ]
    },
    {
      sobremesa: "Palha Italiana",
      ingredientes: [
        "1 lata de leite condensado",
        "1 colher de sopa de margarina",
        "3 colheres de sopa de chocolate em pó",
        "1 pacote de biscoito maisena"
      ],
      modopreparo: [
        "Em uma panela, misture o leite condensado, a margarina e o chocolate em pó.",
        "Leve ao fogo baixo, mexendo sempre, até a mistura desgrudar do fundo da panela.",
        "Retire do fogo e misture os biscoitos maisena quebrados em pedaços pequenos.",
        "Despeje a mistura em uma forma untada.",
        "Deixe esfriar e corte em pedaços quadrados."
      ],
      dicas: [
        "Use biscoitos de boa qualidade para obter um resultado mais saboroso.",
        "Você pode adicionar nozes ou amendoim à receita para dar um toque extra."
      ]
    },
    {
      sobremesa: "Churros",
      ingredientes: [
        "1 xícara de água",
        "2 colheres de sopa de açúcar",
        "2 colheres de sopa de margarina",
        "1 pitada de sal",
        "1 xícara de farinha de trigo",
        "2 ovos",
        "Óleo para fritar",
        "Açúcar e canela para polvilhar"
      ],
      modopreparo: [
        "Em uma panela, coloque a água, o açúcar, a margarina e o sal. Leve ao fogo até ferver.",
        "Retire a panela do fogo e adicione a farinha de trigo de uma só vez. Mexa até obter uma massa homogênea.",
        "Acrescente os ovos um a um, misturando bem após cada adição.",
        "Coloque a massa em um saco de confeitar com um bico em formato de estrela.",
        "Aqueça o óleo em uma panela e, com o saco de confeitar, faça tiras de massa diretamente no óleo quente.",
        "Frite até que os churros estejam dourados.",
        "Retire com uma escumadeira e escorra em papel toalha.",
        "Misture açúcar e canela em um prato e passe os churros nessa mistura."
      ],
      dicas: [
        "Sirva os churros ainda quentes para melhor sabor.",
        "Você pode rechear os churros com doce de leite ou chocolate, se desejar."
      ]
    },
    {
      sobremesa: "Pudim de Leite em Pó",
      ingredientes: [
        "1 lata de leite condensado",
        "1 lata de creme de leite",
        "1 lata de leite em pó",
        "3 ovos",
        "Calda de caramelo"
      ],
      modopreparo: [
        "No liquidificador, bata o leite condensado, o creme de leite, o leite em pó e os ovos até obter uma mistura homogênea.",
        "Em uma forma de pudim, coloque a calda de caramelo no fundo.",
        "Despeje a mistura do liquidificador na forma.",
        "Cubra a forma com papel alumínio.",
        "Leve ao forno pré-aquecido a 180°C em banho-maria por cerca de 1 hora.",
        "Após assar, deixe o pudim esfriar e leve à geladeira por algumas horas.",
        "Desenforme o pudim e sirva."
      ],
      dicas: [
        "Prepare a calda de caramelo derretendo açúcar em uma panela até obter a cor desejada.",
        "O pudim estará pronto quando firmar e dourar na superfície."
      ]
    },
    {
      sobremesa: "Petit Gateau",
      ingredientes: [
        "200g de chocolate meio amargo",
        "2 colheres de sopa de manteiga",
        "2 ovos",
        "2 gemas",
        "1/4 de xícara de açúcar",
        "2 colheres de sopa de farinha de trigo"
      ],
      modopreparo: [
        "Derreta o chocolate e a manteiga em banho-maria ou no micro-ondas.",
        "Em uma tigela, bata os ovos, as gemas e o açúcar até obter uma mistura clara.",
        "Misture o chocolate derretido com a mistura de ovos e açúcar.",
        "Acrescente a farinha de trigo e misture até incorporar bem.",
        "Unte forminhas individuais com manteiga e farinha.",
        "Despeje a massa nas forminhas.",
        "Leve ao forno pré-aquecido a 200°C por cerca de 8 minutos.",
        "O petit gateau deve estar firme nas bordas e líquido no centro.",
        "Desenforme imediatamente e sirva com sorvete de sua preferência."
      ],
      dicas: [
        "Não deixe o petit gateau assar demais, pois o interior deve ficar líquido.",
        "Você pode variar o sabor adicionando raspas de laranja ou essência de baunilha à massa."
      ]
    },
    {
      sobremesa: "Bolo de Fubá",
      ingredientes: [
        "2 xícaras de açúcar",
        "3 xícaras de leite",
        "2 xícaras de fubá",
        "1 xícara de óleo",
        "4 ovos",
        "2 colheres de sopa de farinha de trigo",
        "1 colher de sopa de fermento em pó"
      ],
      modopreparo: [
        "Preaqueça o forno a 180°C e unte uma forma.",
        "No liquidificador, bata o açúcar, o leite, o fubá, o óleo e os ovos até obter uma mistura homogênea.",
        "Acrescente a farinha de trigo e o fermento e bata novamente até incorporar.",
        "Despeje a massa na forma e leve ao forno por cerca de 40 minutos, ou até que um palito saia limpo ao ser inserido no bolo.",
        "Deixe o bolo esfriar antes de servir."
      ],
      dicas: [
        "Este bolo é perfeito para o café da tarde.",
        "Pode ser acompanhado por uma xícara de café."
      ]
    },
    {
      sobremesa: "Morangos com Chocolate",
      ingredientes: [
        "Morangos frescos",
        "Chocolate meio amargo derretido"
      ],
      modopreparo: [
        "Lave e seque os morangos.",
        "Mergulhe cada morango no chocolate derretido, cobrindo-o parcialmente.",
        "Deixe escorrer o excesso de chocolate.",
        "Coloque os morangos em uma bandeja forrada com papel manteiga.",
        "Leve à geladeira por alguns minutos para o chocolate endurecer.",
        "Sirva."
      ],
      dicas: [
        "Você pode decorar os morangos com chocolate com raspas de chocolate branco.",
        "Varie usando chocolate branco ou ao leite, conforme sua preferência."
      ]
    },
    {
      sobremesa: "Torta de Maçã",
      ingredientes: [
        "4 maçãs descascadas, descoredadas e fatiadas",
        "1 colher de sopa de canela em pó",
        "2 xícaras de farinha de trigo",
        "1 xícara de açúcar",
        "1/2 xícara de manteiga",
        "1 ovo",
        "1 colher de chá de fermento em pó"
      ],
      modopreparo: [
        "Em uma tigela, misture as maçãs com a canela e reserve.",
        "Em outra tigela, misture a farinha de trigo, o açúcar, a manteiga, o ovo e o fermento até obter uma massa homogênea.",
        "Divida a massa ao meio.",
        "Abra metade da massa com um rolo e forre o fundo de uma forma.",
        "Coloque as maçãs sobre a massa.",
        "Abra a outra metade da massa e cubra as maçãs.",
        "Leve ao forno pré-aquecido a 180°C por cerca de 40 minutos, ou até que a torta esteja dourada.",
        "Deixe esfriar antes de servir."
      ],
      dicas: [
        "Sirva a torta de maçã morna com uma bola de sorvete de baunilha.",
        "Polvilhe açúcar de confeiteiro por cima para decorar."
      ]
    },
    {
      sobremesa: "Canjica",
      ingredientes: [
        "1 xícara de canjica (milho branco para canjica)",
        "1 litro de leite",
        "1 lata de leite condensado",
        "2 paus de canela",
        "Cravos-da-índia a gosto",
        "Coco ralado a gosto"
      ],
      modopreparo: [
        "Deixe a canjica de molho em água por algumas horas ou durante a noite.",
        "Cozinhe a canjica em água até que esteja macia. Escorra a água.",
        "Em outra panela, coloque o leite, o leite condensado, os paus de canela, os cravos e a canjica cozida.",
        "Cozinhe em fogo baixo, mexendo ocasionalmente, até que a canjica esteja bem cozida e o caldo esteja cremoso.",
        "Retire a canela e os cravos.",
        "Sirva quente ou fria, polvilhada com coco ralado."
      ],
      dicas: [
        "Você pode adicionar amendoim torrado por cima para dar crocância.",
        "A canjica é uma sobremesa tradicional de festas juninas no Brasil."
      ]
    },
    {
      sobremesa: "Gelatina com Creme",
      ingredientes: [
        "1 pacote de gelatina em pó (sabor de sua escolha)",
        "1 lata de creme de leite",
        "Água quente"
      ],
      modopreparo: [
        "Prepare a gelatina de acordo com as instruções da embalagem, usando metade da quantidade de água recomendada.",
        "Deixe a gelatina esfriar à temperatura ambiente.",
        "Em outra tigela, misture o creme de leite com a gelatina já fria.",
        "Despeje a mistura em taças individuais ou em um recipiente grande.",
        "Leve à geladeira por algumas horas até firmar."
      ],
      dicas: [
        "Você pode decorar a gelatina com frutas ou calda de sua preferência.",
        "Varie os sabores de gelatina para criar uma sobremesa colorida."
      ]
    },

    {
      sobremesa: "Pavê de Abacaxi",
      ingredientes: [
        "1 abacaxi maduro, descascado e picado em cubos",
        "1 lata de leite condensado",
        "1 lata de creme de leite",
        "1 pacote de biscoito maisena",
        "1 xícara de leite",
        "1/2 xícara de açúcar",
        "1 colher de sopa de amido de milho",
        "1/2 xícara de água"
      ],
      modopreparo: [
        "Em uma panela, leve ao fogo o abacaxi com metade do açúcar até que ele solte seu caldo. Reserve.",
        "Em outra panela, prepare um creme cozinhando o leite condensado, o leite, o amido de milho e o restante do açúcar até engrossar. Desligue o fogo e misture o creme de leite.",
        "Em um refratário, faça camadas alternadas de biscoitos umedecidos no caldo do abacaxi, creme e abacaxi cozido.",
        "Repita as camadas até terminar com o creme.",
        "Leve à geladeira por algumas horas para firmar.",
        "Sirva gelado."
      ],
      dicas: [
        "Você pode adicionar coco ralado por cima para decorar.",
        "Certifique-se de que os biscoitos estejam bem umedecidos no caldo do abacaxi para não ficarem secos no pavê."
      ]
    },
    {
      sobremesa: "Maçã do Amor",
      ingredientes: [
        "4 maçãs vermelhas",
        "2 xícaras de açúcar",
        "1/2 xícara de água",
        "Corante vermelho (opcional)",
        "Paus de sorvete para espetar"
      ],
      modopreparo: [
        "Lave e seque bem as maçãs. Espete um pau de sorvete no centro de cada uma.",
        "Em uma panela, misture o açúcar e a água. Se desejar, adicione corante vermelho para intensificar a cor do caramelo.",
        "Leve ao fogo médio, sem mexer, até obter um caramelo em ponto de bala (aproximadamente 150°C).",
        "Mergulhe as maçãs no caramelo, girando para cobri-las completamente.",
        "Coloque as maçãs em um tapete de silicone ou papel-manteiga para esfriar e endurecer o caramelo."
      ],
      dicas: [
        "Tenha cuidado ao mexer o caramelo, pois ele estará muito quente.",
        "Você pode decorar as maçãs com granulado ou confeitos coloridos antes de o caramelo endurecer completamente."
      ]
    },
    {
      sobremesa: "Bolo de Laranja",
      ingredientes: [
        "3 laranjas",
        "4 ovos",
        "1 xícara de óleo",
        "2 xícaras de açúcar",
        "2 xícaras de farinha de trigo",
        "1 colher de sopa de fermento em pó"
      ],
      modopreparo: [
        "Lave as laranjas e cozinhe-as inteiras em água até que fiquem macias. Após o cozimento, retire as sementes e bata as laranjas inteiras no liquidificador.",
        "Em uma tigela, bata os ovos com o açúcar até obter um creme fofo.",
        "Adicione o suco das laranjas batidas e o óleo à mistura de ovos e açúcar, mexendo bem.",
        "Acrescente a farinha de trigo peneirada com o fermento e misture até obter uma massa homogênea.",
        "Despeje a massa em uma forma untada e enfarinhada.",
        "Leve ao forno pré-aquecido a 180°C por aproximadamente 40 minutos, ou até que um palito saia limpo ao ser inserido no bolo.",
        "Deixe o bolo esfriar antes de desenformar."
      ],
      dicas: [
        "Você pode fazer uma calda de laranja para regar o bolo após desenformar.",
        "Decore com raspas de laranja para realçar o sabor."
      ]
    },
    {
      sobremesa: "Profiteroles",
      ingredientes: [
        "1 xícara de água",
        "1/2 xícara de manteiga",
        "1 pitada de sal",
        "1 xícara de farinha de trigo",
        "4 ovos",
        "1 lata de creme de leite",
        "200g de chocolate meio amargo"
      ],
      modopreparo: [
        "Em uma panela, leve ao fogo a água, a manteiga e o sal até ferver.",
        "Retire a panela do fogo e adicione a farinha de trigo de uma só vez. Mexa rapidamente até a massa se desprender do fundo da panela.",
        "Deixe a massa esfriar um pouco e adicione os ovos um a um, mexendo bem após cada adição.",
        "Coloque a massa em um saco de confeitar com um bico em formato de estrela e faça pequenas porções em uma assadeira forrada com papel-manteiga.",
        "Leve ao forno pré-aquecido a 200°C por cerca de 25 minutos, ou até que os profiteroles estejam dourados e firmes.",
        "Deixe esfriar completamente.",
        "Misture o creme de leite com o chocolate meio amargo derretido para fazer a cobertura dos profiteroles.",
        "Corte os profiteroles ao meio, recheie com o creme e cubra com a cobertura de chocolate."
      ],
      dicas: [
        "Você pode usar chantilly como recheio em vez de creme de leite com chocolate.",
        "Polvilhe açúcar de confeiteiro por cima para decorar antes de servir."
      ]
    },
    {
      sobremesa: "Gelado de Abacaxi",
      ingredientes: [
        "1 abacaxi maduro, descascado e picado",
        "1 lata de leite condensado",
        "1 lata de creme de leite",
        "1 xícara de água",
        "1 envelope de gelatina sem sabor"
      ],
      modopreparo: [
        "No liquidificador, bata o abacaxi com a água.",
        "Leve a mistura de abacaxi ao fogo até ferver e cozinhe por alguns minutos.",
        "Hidrate a gelatina sem sabor em água conforme as instruções da embalagem e adicione à mistura de abacaxi ainda quente. Mexa bem.",
        "Em seguida, acrescente o leite condensado e o creme de leite ao liquidificador e bata até obter um creme homogêneo.",
        "Despeje o creme em um refratário e leve à geladeira até que esteja firme.",
        "Sirva gelado."
      ],
      dicas: [
        "Decore com pedaços de abacaxi e folhas de hortelã para um toque fresco.",
        "Se preferir uma textura mais aerada, bata o creme na batedeira antes de levar à geladeira."
      ]
    },
    {
      sobremesa: "Pamonha",
      ingredientes: [
        "4 espigas de milho verde",
        "1 xícara de açúcar",
        "1/2 xícara de leite de coco",
        "Folhas de bananeira para embrulhar"
      ],
      modopreparo: [
        "Rale as espigas de milho em um ralador fino.",
        "Em um liquidificador, bata o milho ralado com o açúcar e o leite de coco até obter uma massa homogênea.",
        "Em uma panela, cozinhe a massa de milho em fogo médio, mexendo sempre, até que ela desgrude do fundo da panela e atinja a consistência de um creme espesso.",
        "Enxágue as folhas de bananeira e passe rapidamente sobre o fogo para amaciá-las.",
        "Coloque uma porção da massa de milho no centro de cada folha de bananeira, dobre as laterais e amarre com barbante culinário.",
        "Cozinhe as pamonhas em água fervente por cerca de 40 minutos.",
        "Sirva quente ou fria."
      ],
      dicas: [
        "Você pode adicionar queijo ralado à massa de milho antes de cozinhar para uma versão salgada da pamonha.",
        "As folhas de bananeira não são apenas tradicionais, mas também conferem um sabor especial às pamonhas. Se não conseguir encontrá-las, você pode usar papel-alumínio."
      ]
    },
    {
      sobremesa: "Pastel de Belém",
      ingredientes: [
        "500g de massa folhada",
        "250ml de leite",
        "5 gemas de ovo",
        "150g de açúcar",
        "1 colher de sopa de farinha de trigo",
        "Casca de limão",
        "Canela em pó para polvilhar"
      ],
      modopreparo: [
        "Em uma panela, aqueça o leite com a casca de limão até ferver. Retire a casca de limão e reserve.",
        "Em uma tigela, misture as gemas com o açúcar e a farinha de trigo até obter um creme homogêneo.",
        "Adicione o leite quente, aos poucos, mexendo sempre para evitar que as gemas cozinhem.",
        "Leve a mistura de volta à panela e cozinhe em fogo baixo, mexendo continuamente, até engrossar e formar um creme. Deixe esfriar.",
        "Preaqueça o forno a 220°C.",
        "Abra a massa folhada em uma superfície enfarinhada e corte-a em círculos.",
        "Forre forminhas de empada com a massa e preencha com o creme.",
        "Leve ao forno por aproximadamente 15 minutos, ou até que a massa esteja dourada e o recheio firme.",
        "Desenforme e polvilhe com canela em pó."
      ],
      dicas: [
        "Sirva os pastéis de Belém mornos ou em temperatura ambiente.",
        "Polvilhe açúcar de confeiteiro por cima para decorar."
      ]
    },
    {
      sobremesa: "Creme Brûlée",
      ingredientes: [
        "6 gemas de ovo",
        "1/2 xícara de açúcar",
        "2 xícaras de creme de leite",
        "1 fava de baunilha",
        "Açúcar para caramelizar"
      ],
      modopreparo: [
        "Preaqueça o forno a 150°C.",
        "Em uma tigela, misture as gemas de ovo e o açúcar até obter um creme homogêneo.",
        "Em uma panela, aqueça o creme de leite com a fava de baunilha até que comece a ferver. Retire a fava de baunilha.",
        "Adicione o creme de leite quente à mistura de gemas, mexendo constantemente.",
        "Distribua o creme em ramequins.",
        "Leve os ramequins ao forno em banho-maria por cerca de 45 minutos, ou até que o creme esteja firme nas bordas e ligeiramente tremeluzente no centro.",
        "Retire os ramequins do forno e deixe esfriar à temperatura ambiente. Em seguida, leve à geladeira por algumas horas.",
        "Antes de servir, polvilhe açúcar por cima e queime com um maçarico até caramelizar."
      ],
      dicas: [
        "A fava de baunilha pode ser substituída por essência de baunilha.",
        "Cuidado ao caramelizar o açúcar com o maçarico, para não queimar demais."
      ]
    },
    {
      sobremesa: "Bolo de Coco",
      ingredientes: [
        "3 ovos",
        "200ml de leite de coco",
        "200ml de leite",
        "1 colher de sopa de margarina",
        "2 xícaras de açúcar",
        "2 xícaras de farinha de trigo",
        "1 colher de sopa de fermento em pó",
        "100g de coco ralado"
      ],
      modopreparo: [
        "Preaqueça o forno a 180°C e unte uma forma.",
        "No liquidificador, bata os ovos, o leite de coco, o leite, a margarina e o açúcar.",
        "Adicione a farinha de trigo aos poucos, batendo bem após cada adição.",
        "Acrescente o fermento e o coco ralado, misturando delicadamente.",
        "Despeje a massa na forma e leve ao forno por cerca de 40 minutos, ou até que um palito saia limpo ao ser inserido no bolo.",
        "Deixe o bolo esfriar antes de servir."
      ],
      dicas: [
        "Este bolo fica mais saboroso no dia seguinte, quando o sabor do coco está mais acentuado.",
        "Sirva com uma cobertura de leite condensado e coco ralado, se desejar."
      ]
    },
    {
      sobremesa: "Arroz Doce",
      ingredientes: [
        "1 xícara de arroz",
        "2 xícaras de água",
        "4 xícaras de leite",
        "1 xícara de açúcar",
        "1 colher de chá de canela em pó",
        "Casca de limão",
        "Cravo-da-índia a gosto"
      ],
      modopreparo: [
        "Em uma panela, cozinhe o arroz na água até que esteja macio. Escorra e reserve.",
        "Em outra panela, aqueça o leite com o açúcar, a casca de limão e os cravos.",
        "Quando o leite começar a ferver, adicione o arroz cozido e a canela em pó. Cozinhe em fogo baixo, mexendo ocasionalmente, até obter uma consistência cremosa.",
        "Retire a casca de limão e os cravos.",
        "Sirva quente ou frio, polvilhado com mais canela em pó."
      ],
      dicas: [
        "O arroz doce pode ser servido com uma calda de caramelo por cima para um toque a mais de doçura.",
        "Experimente adicionar coco ralado ou passas durante o cozimento para variações no sabor e textura."
      ]
    },

    {
      sobremesa: "Mousse de Maracujá",
      ingredientes: [
        "2 maracujás",
        "1 lata de leite condensado",
        "1 lata de creme de leite",
        "1/2 xícara de suco de maracujá"
      ],
      modopreparo: [
        "Abra os maracujás e retire as sementes. Reserve algumas sementes para decorar.",
        "No liquidificador, bata o suco de maracujá, o leite condensado e o creme de leite até obter um creme homogêneo.",
        "Distribua o mousse em taças individuais e decore com as sementes de maracujá reservadas.",
        "Leve à geladeira por algumas horas antes de servir."
      ],
      dicas: [
        "Sirva bem gelado para um sabor refrescante.",
        "Se preferir, adoce o mousse com açúcar a gosto."
      ]
    },

    {
      sobremesa: "Tiramisu",
      ingredientes: [
        "500g de queijo mascarpone",
        "4 gemas de ovo",
        "150g de açúcar",
        "200ml de café forte",
        "200ml de vinho Marsala",
        "200g de biscoitos tipo ladyfinger (savoiardi)",
        "Cacau em pó para polvilhar"
      ],
      modopreparo: [
        "Prepare o café forte e deixe esfriar. Em seguida, adicione o vinho Marsala.",
        "Em uma tigela, misture as gemas e o açúcar até obter um creme claro.",
        "Adicione o queijo mascarpone à mistura de gemas e açúcar, mexendo bem.",
        "Mergulhe os biscoitos no café com Marsala e coloque uma camada no fundo de uma travessa.",
        "Cubra os biscoitos com metade da mistura de mascarpone.",
        "Repita o processo, fazendo mais uma camada de biscoitos e cobrindo com o restante da mistura de mascarpone.",
        "Leve à geladeira por algumas horas.",
        "Antes de servir, polvilhe cacau em pó por cima."
      ],
      dicas: [
        "O tiramisu fica ainda melhor se preparado de um dia para o outro, permitindo que os sabores se harmonizem.",
        "Evite deixar os biscoitos muito tempo no café, para que não fiquem muito encharcados."
      ]
    },

    {
      sobremesa: "Bananas Flambadas",
      ingredientes: [
        "4 bananas maduras",
        "1/2 xícara de açúcar",
        "1/2 xícara de rum",
        "1/4 de xícara de manteiga",
        "Suco de 1 limão",
        "Sorvete de creme (opcional)"
      ],
      modopreparo: [
        "Descasque as bananas e corte-as ao meio no sentido do comprimento.",
        "Em uma frigideira, derreta a manteiga e adicione o açúcar.",
        "Quando o açúcar começar a caramelizar, adicione as bananas e o suco de limão.",
        "Deixe as bananas dourarem dos dois lados.",
        "Retire a frigideira do fogo, despeje o rum e incline-a ligeiramente para que o rum pegue fogo a partir do fogo. Tenha cuidado ao flambar.",
        "Deixe o fogo apagar naturalmente.",
        "Sirva as bananas flambadas com sorvete de creme, se desejar."
      ],
      dicas: [
        "Tome precauções ao flambar e evite inclinar o rosto sobre a frigideira durante o processo.",
        "O sorvete de creme combina perfeitamente com as bananas flambadas."
      ]
    },

    {
      sobremesa: "Cuscuz Doce",
      ingredientes: [
        "1 xícara de farinha de milho",
        "1/2 xícara de açúcar",
        "1/2 xícara de leite de coco",
        "1/2 xícara de leite",
        "1 colher de sopa de manteiga",
        "1/4 de xícara de coco ralado",
        "Canela em pó para polvilhar"
      ],
      modopreparo: [
        "Em uma panela, misture a farinha de milho, o açúcar, o leite de coco, o leite e a manteiga.",
        "Leve ao fogo médio e mexa constantemente até a mistura engrossar e começar a desgrudar do fundo da panela.",
        "Retire a panela do fogo e misture o coco ralado.",
        "Transfira a mistura para uma forma de pudim untada com manteiga.",
        "Deixe o cuscuz esfriar e, em seguida, leve à geladeira por algumas horas.",
        "Desenforme e polvilhe canela em pó por cima antes de servir."
      ],
      dicas: [
        "Você pode decorar com cravos-da-índia para dar um toque aromático.",
        "Sirva o cuscuz doce gelado para um melhor sabor."
      ]
    },

    {
      sobremesa: "Fondue de Chocolate",
      ingredientes: [
        "200g de chocolate meio amargo",
        "200g de chocolate ao leite",
        "1 xícara de creme de leite",
        "Frutas frescas (morangos, bananas, uvas) para mergulhar",
        "Marshmallows e pedaços de bolo para acompanhar"
      ],
      modopreparo: [
        "Pique os chocolates em pedaços pequenos e reserve.",
        "Em uma panela, aqueça o creme de leite em fogo baixo até começar a borbulhar nas bordas.",
        "Retire do fogo e adicione os chocolates picados ao creme de leite quente. Deixe descansar por um minuto.",
        "Mexa bem até que o chocolate esteja completamente derretido e a mistura esteja homogênea.",
        "Transfira o fondue de chocolate para um rechaud ou panela de fondue e mantenha-o aquecido.",
        "Sirva com frutas frescas, marshmallows e pedaços de bolo para mergulhar no chocolate."
      ],
      dicas: [
        "Cuidado com a temperatura do fondue; não deixe-o ferver para evitar que o chocolate endureça.",
        "Varie as frutas de acordo com sua preferência."
      ]
    },

    {
      sobremesa: "Brownie",
      ingredientes: [
        "200g de chocolate meio amargo",
        "1/2 xícara de manteiga",
        "1 xícara de açúcar",
        "2 ovos",
        "1 colher de chá de essência de baunilha",
        "1/2 xícara de farinha de trigo",
        "1/4 de colher de chá de sal",
        "1/2 xícara de nozes picadas (opcional)"
      ],
      modopreparo: [
        "Pré-aqueça o forno a 180°C e unte uma forma quadrada.",
        "Em uma tigela, derreta o chocolate e a manteiga em banho-maria ou no micro-ondas.",
        "Misture o açúcar, os ovos e a essência de baunilha na mistura de chocolate derretido.",
        "Adicione a farinha de trigo e o sal, misturando bem.",
        "Se desejar, adicione as nozes picadas à massa.",
        "Despeje a massa na forma preparada e leve ao forno por cerca de 25-30 minutos, ou até que um palito saia com migalhas úmidas.",
        "Deixe esfriar antes de cortar em quadrados."
      ],
      dicas: [
        "Não asse demais para garantir que o brownie fique úmido no centro.",
        "Sirva o brownie com sorvete ou calda de chocolate, se preferir."
      ]
    },

    {
      sobremesa: "Manjar de Maracujá",
      ingredientes: [
        "1 lata de leite condensado",
        "1 lata de creme de leite",
        "1 lata de leite (use a lata de leite condensado vazia como medida)",
        "1/2 xícara de suco de maracujá",
        "1 envelope de gelatina sem sabor",
        "4 colheres de sopa de água",
        "Polpa de 2 maracujás"
      ],
      modopreparo: [
        "Hidrate a gelatina na água e dissolva-a em banho-maria ou no micro-ondas.",
        "No liquidificador, bata o leite condensado, o creme de leite, o leite, o suco de maracujá e a gelatina dissolvida.",
        "Despeje a mistura em uma forma de pudim caramelizada ou em tacinhas individuais.",
        "Leve à geladeira por algumas horas até que o manjar esteja firme.",
        "Antes de servir, cubra o manjar com a polpa dos maracujás."
      ],
      dicas: [
        "Para a calda de caramelo, derreta açúcar até dourar e despeje na forma antes de adicionar o manjar.",
        "O contraste entre o doce do manjar e a acidez do maracujá é delicioso."
      ]
    },

    {
      sobremesa: "Gelatina de Morango com Creme",
      ingredientes: [
        "1 pacote de gelatina sabor morango",
        "1 lata de creme de leite",
        "Morangos frescos",
        "Açúcar a gosto"
      ],
      modopreparo: [
        "Prepare a gelatina de acordo com as instruções da embalagem e deixe esfriar.",
        "Em um liquidificador, bata a gelatina já fria com o creme de leite e açúcar a gosto.",
        "Despeje a mistura em taças individuais e leve à geladeira até firmar.",
        "Antes de servir, decore com morangos frescos."
      ],
      dicas: [
        "Você pode variar os sabores de gelatina para criar diferentes combinações de sabores.",
        "A adição de creme de leite deixa a gelatina mais cremosa e suave."
      ]
    },

    {
      sobremesa: "Cocada Cremosa",
      ingredientes: [
        "500g de coco ralado",
        "1 lata de leite condensado",
        "1 lata de leite (use a lata de leite condensado vazia como medida)",
        "2 colheres de sopa de açúcar",
        "1 colher de sopa de manteiga"
      ],
      modopreparo: [
        "Em uma panela, misture o coco ralado, o leite condensado, o leite, o açúcar e a manteiga.",
        "Leve ao fogo médio e mexa constantemente até a mistura engrossar e começar a desgrudar do fundo da panela.",
        "Retire do fogo e transfira para uma travessa ou tacinhas individuais.",
        "Deixe esfriar antes de servir."
      ],
      dicas: [
        "A cocada cremosa pode ser servida quente ou fria, dependendo de sua preferência.",
        "Você pode adicionar cravo ou canela em pau para dar um toque aromático."
      ]
    },

    {
      sobremesa: "Ambrosia",
      ingredientes: [
        "2 xícaras de açúcar",
        "1 xícara de água",
        "Casca de 1 limão",
        "4 ovos",
        "1 litro de leite",
        "Canela em pó para polvilhar"
      ],
      modopreparo: [
        "Em uma panela, misture o açúcar, a água e a casca de limão. Leve ao fogo e deixe ferver até obter uma calda.",
        "Em outra panela, aqueça o leite, sem deixar ferver.",
        "Bata os ovos e acrescente o leite aquecido, mexendo bem.",
        "Adicione a calda de açúcar à mistura de leite e ovos, mexendo bem.",
        "Leve ao fogo baixo e cozinhe até que a ambrosia esteja consistente e os ovos estejam cozidos.",
        "Retire a casca de limão.",
        "Sirva quente ou fria, polvilhada com canela em pó."
      ],
      dicas: [
        "A ambrosia é uma sobremesa versátil que pode ser apreciada de diferentes maneiras.",
        "Você pode adicionar queijo branco ou pedaços de queijo ao servir, criando uma combinação doce e salgada."
      ]
    },
    {
      sobremesa: "Gelato de Creme",
      ingredientes: [
        "2 xícaras de creme de leite fresco",
        "1 xícara de leite",
        "1 vagem de baunilha",
        "5 gemas de ovo",
        "3/4 de xícara de açúcar"
      ],
      modopreparo: [
        "Em uma panela, aqueça o creme de leite, o leite e a vagem de baunilha (cortada ao meio e com as sementes raspadas).",
        "Em outra tigela, bata as gemas com o açúcar até obter uma mistura homogênea.",
        "Retire a vagem de baunilha da mistura de creme.",
        "Adicione a mistura de creme gradualmente às gemas batidas, mexendo constantemente.",
        "Devolva a mistura para a panela e cozinhe em fogo baixo, mexendo continuamente, até engrossar o creme. Não deixe ferver.",
        "Passe o creme por uma peneira fina e deixe esfriar completamente.",
        "Despeje a mistura resfriada em uma máquina de sorvete e siga as instruções do fabricante para congelar.",
        "Se não tiver uma máquina de sorvete, você pode colocar a mistura em um recipiente no freezer e mexer a cada 30 minutos até obter a consistência desejada."
      ],
      dicas: [
        "Sirva o gelato de creme com frutas frescas, uma pitada de cacau em pó ou um fio de mel para um toque extra.",
        "Armazene o gelato em um recipiente hermético no freezer."
      ]
    },
    {
      sobremesa: "Bolo de Chocolate",
      ingredientes: [
        "1 3/4 xícaras de farinha de trigo",
        "2 xícaras de açúcar",
        "3/4 de xícara de cacau em pó",
        "1 1/2 colher de chá de fermento em pó",
        "1 1/2 colher de chá de bicarbonato de sódio",
        "1 colher de chá de sal",
        "2 ovos",
        "1 xícara de leite",
        "1/2 xícara de óleo vegetal",
        "2 colheres de chá de essência de baunilha",
        "1 xícara de água fervente"
      ],
      modopreparo: [
        "Pré-aqueça o forno a 180°C e unte uma forma.",
        "Em uma tigela grande, misture a farinha, o açúcar, o cacau, o fermento, o bicarbonato e o sal.",
        "Adicione os ovos, o leite, o óleo e a baunilha à mistura de ingredientes secos e misture até ficar homogêneo.",
        "Aos poucos, acrescente a água fervente, mexendo até obter uma massa líquida.",
        "Despeje a massa na forma preparada.",
        "Asse no forno preaquecido por 30 a 35 minutos, ou até que um palito inserido no centro do bolo saia limpo.",
        "Deixe o bolo esfriar antes de decorar a gosto."
      ],
      dicas: [
        "Você pode adicionar uma cobertura de ganache de chocolate ou chantilly.",
        "Sirva com sorvete de creme para um deleite ainda mais indulgente."
      ]
    }
,    {
  sobremesa: "Torta de Limão com Merengue",
  ingredientes: [
    "1 1/2 xícaras de farinha de trigo",
    "1/2 xícara de açúcar",
    "1/2 colher de chá de sal",
    "1/2 xícara de manteiga gelada (cortada em cubos)",
    "1 gema de ovo",
    "2 colheres de sopa de água gelada",
    "4 gemas de ovo",
    "1 lata de leite condensado",
    "1/2 xícara de suco de limão",
    "4 claras de ovo",
    "1 xícara de açúcar"
  ],
  modopreparo: [
    "Modo de Preparo da Massa:",
    "Em uma tigela, misture a farinha, o açúcar e o sal.",
    "Adicione os cubos de manteiga e misture até a mistura parecer uma farofa.",
    "Em seguida, adicione a gema de ovo e a água gelada. Misture até a massa ficar homogênea.",
    "Forme um disco com a massa, cubra com filme plástico e leve à geladeira por 30 minutos.",
    "Preaqueça o forno a 190°C.",
    "Abra a massa e forre uma forma de torta. Faça furos no fundo com um garfo.",
    "Asse no forno preaquecido por 15-20 minutos ou até que a massa esteja dourada. Deixe esfriar.",
    "Ingredientes do Recheio:",
    "Em uma tigela, misture as gemas, o leite condensado e o suco de limão.",
    "Despeje o recheio sobre a massa de torta já resfriada.",
    "Ingredientes do Merengue:",
    "Em uma tigela, bata as claras de ovo até formar picos suaves.",
    "Adicione o açúcar gradualmente, batendo até obter picos firmes.",
    "Espalhe o merengue sobre o recheio de limão, garantindo que ele encoste nas bordas da massa.",
    "Leve ao forno preaquecido a 180°C por cerca de 10 minutos, ou até o merengue dourar levemente."
  ],
  dicas: [
    "Deixe a torta esfriar completamente antes de servir.",
    "Para um toque decorativo, você pode usar um maçarico de cozinha para dourar o merengue."
  ]
},
{
  sobremesa: "Crepe Suzette",
  ingredientes: [
    "Massa do Crepe:",
    "1 xícara de farinha de trigo",
    "2 ovos",
    "1/2 xícara de leite",
    "1/2 xícara de água",
    "2 colheres de sopa de manteiga derretida",
    "1 pitada de sal",
    "Molho de Laranja:",
    "Suco de 3 laranjas",
    "1/2 xícara de açúcar",
    "1/4 de xícara de licor de laranja (Grand Marnier, Cointreau)",
    "Casca ralada de 1 laranja (opcional)",
    "1/4 de xícara de conhaque (para flambar)"
  ],
  modopreparo: [
    "Modo de Preparo:",
    "Em uma tigela, misture a farinha, os ovos, o leite, a água, a manteiga derretida e o sal. Bata até obter uma massa homogênea.",
    "Aqueça uma frigideira antiaderente e unte-a com um pouco de manteiga.",
    "Despeje uma concha pequena de massa na frigideira e gire para espalhar uniformemente.",
    "Cozinhe até dourar dos dois lados e, em seguida, dobre o crepe ao meio e depois novamente em forma de triângulo. Reserve.",
    "Molho de Laranja:",
    "Em uma frigideira grande, misture o suco de laranja, o açúcar, o licor de laranja e a casca ralada (se estiver usando).",
    "Leve ao fogo e deixe ferver até reduzir e engrossar ligeiramente.",
    "Adicione o conhaque e incline levemente a frigideira para flambar o molho (cuidado ao fazer isso).",
    "Despeje o molho sobre os crepes dobrados."
  ],
  dicas: [
    "Sirva imediatamente, regando os crepes com o molho quente.",
    "Esta sobremesa é frequentemente preparada na frente dos convidados, criando um espetáculo com o flambar."
  ]
}
,
{
  sobremesa: "Arroz com Leite",
  ingredientes: [
    "1 xícara de arroz",
    "4 xícaras de leite",
    "1 xícara de açúcar",
    "1 pau de canela",
    "Cascas de limão",
    "1 pitada de sal",
    "Canela em pó (para polvilhar)"
  ],
  modopreparo: [
    "Em uma panela grande, misture o arroz, o leite, o açúcar, o pau de canela, as cascas de limão e o sal.",
    "Leve ao fogo médio e cozinhe, mexendo regularmente.",
    "Cozinhe até que o arroz tenha absorvido o líquido e a mistura tenha engrossado (cerca de 25-30 minutos).",
    "Remova o pau de canela e as cascas de limão.",
    "Sirva quente, polvilhado com canela em pó."
  ],
  dicas: [
    "Você pode adicionar passas ou pedaços de canela em pau durante o cozimento, se desejar.",
    "O arroz com leite é delicioso tanto quente quanto frio."
  ]
}
,
{
  sobremesa: "Frutas Grelhadas",
  ingredientes: [
    "Variedade de frutas (como abacaxi, pêssego, banana)",
    "Açúcar mascavo (opcional)",
    "Canela em pó (opcional)",
    "Sorvete (opcional)"
  ],
  modopreparo: [
    "Corte as frutas em fatias ou pedaços, removendo sementes ou caroços.",
    "Pré-aqueça uma grelha ou frigideira.",
    "Se desejar, polvilhe as frutas com um pouco de açúcar mascavo e canela em pó.",
    "Grelhe as frutas até que fiquem douradas e caramelizadas, virando-as conforme necessário.",
    "Sirva quente."
  ],
  dicas: [
    "As frutas grelhadas são deliciosas por si só, mas também ficam ótimas acompanhadas de sorvete ou iogurte.",
    "Experimente diferentes combinações de frutas."
  ]
},
{
  sobremesa: "Bolo de Tapioca",
  ingredientes: [
    "500g de tapioca granulada",
    "200ml de leite de coco",
    "1 lata de leite condensado",
    "100g de coco ralado",
    "1 pitada de sal",
    "Coco ralado (para decorar)"
  ],
  modopreparo: [
    "Em uma tigela, misture a tapioca granulada e o leite de coco.",
    "Adicione o leite condensado, o coco ralado e o sal. Misture bem.",
    "Transfira a mistura para uma forma untada com manteiga e polvilhada com coco ralado.",
    "Alise a superfície do bolo com as costas de uma colher e decore com mais coco ralado por cima.",
    "Leve à geladeira por algumas horas até que o bolo de tapioca esteja firme.",
    "Corte em pedaços e sirva."
  ],
  dicas: [
    "Sirva o bolo de tapioca gelado para um melhor sabor e textura.",
    "Você pode adicionar calda de chocolate ou leite condensado por cima, se desejar."
  ]
},
{
  sobremesa: "Pudim de Tapioca",
  ingredientes: [
    "1 xícara de tapioca granulada",
    "2 xícaras de leite de coco",
    "1/2 xícara de leite condensado",
    "1/2 xícara de coco ralado",
    "1 pitada de sal",
    "Coco ralado (para decorar)"
  ],
  modopreparo: [
    "Em uma tigela, misture a tapioca granulada e o leite de coco.",
    "Adicione o leite condensado, o coco ralado e o sal. Misture bem.",
    "Transfira a mistura para uma forma de pudim caramelizada.",
    "Deixe o pudim de tapioca descansar na geladeira por algumas horas até que ele esteja firme.",
    "Desenforme o pudim e decore com coco ralado."
  ],
  dicas: [
    "Para a calda de caramelo, derreta açúcar até dourar e despeje na forma antes de adicionar a mistura de tapioca.",
    "A textura da tapioca torna esse pudim único e delicioso."
  ]
}
,
{
  sobremesa: "Creme de Papaia com Cassis",
  ingredientes: [
    "2 mamões papaia maduros",
    "1/2 xícara de licor de cassis",
    "4 bolas de sorvete de creme"
  ],
  modopreparo: [
    "Descasque e retire as sementes dos mamões.",
    "Corte o mamão em pedaços e coloque no liquidificador.",
    "Adicione o licor de cassis e as bolas de sorvete de creme.",
    "Bata até obter um creme suave.",
    "Despeje o creme de papaia em tacinhas individuais.",
    "Sirva imediatamente."
  ],
  dicas: [
    "Você pode decorar com folhas de hortelã ou um toque de cassis adicional.",
    "Este creme é uma sobremesa refrescante e fácil de preparar."
  ]
}
,{
  sobremesa: "Bolo de Iogurte",
  ingredientes: [
    "2 xícaras de farinha de trigo",
    "1 xícara de açúcar",
    "1 xícara de iogurte natural",
    "1/2 xícara de óleo vegetal",
    "3 ovos",
    "1 colher de sopa de fermento em pó",
    "1 colher de chá de essência de baunilha"
  ],
  modopreparo: [
    "Pré-aqueça o forno a 180°C e unte uma forma de bolo.",
    "Em uma tigela, misture a farinha, o açúcar e o fermento em pó.",
    "Em outra tigela, bata os ovos, o iogurte, o óleo e a essência de baunilha até obter uma mistura homogênea.",
    "Gradualmente, adicione a mistura de ingredientes secos à mistura de ingredientes úmidos, mexendo até ficar homogêneo.",
    "Despeje a massa na forma preparada.",
    "Asse no forno preaquecido por cerca de 30-35 minutos ou até que um palito inserido no centro do bolo saia limpo.",
    "Deixe o bolo esfriar antes de servir."
  ],
  dicas: [
    "Você pode adicionar frutas frescas, como morangos ou mirtilos, à massa antes de assar.",
    "Polvilhe açúcar de confeiteiro por cima do bolo antes de servir para uma apresentação mais bonita."
  ]
}
,


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
        <p>Ingredientes: <br /> {currentQuote.ingredientes}</p>
        <br />
        <p>Modo de Preparo: <br />{currentQuote.modopreparo}</p>
        <br />
        <p>{currentQuote.dicas}</p>

      </blockquote>
      <button onClick={generateNewQuote}>Nova Receita</button>
    </div>
  );
};

export default ReceitasPraticasSobremesas;
