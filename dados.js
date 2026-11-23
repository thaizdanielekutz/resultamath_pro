/* ===== CONTEÚDO DA PLATAFORMA — edite só este arquivo para adicionar material ===== */

function slug(t){return t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,50)}

const AULAS=[],QUESTOES=[],FLASHCARDS=[];



/* AULA(módulo, título, link do vídeo, resumo)

Vídeo do YouTube: use o link de incorporar, ex.: https://www.youtube.com/embed/CODIGO

Deixe '' se ainda não tiver o vídeo. */

function AULA(modulo,titulo,video,resumo){AULAS.push({id:slug(titulo),modulo,titulo,video:video||'',resumo:resumo||''})}



AULA('1. Fundamentos da matemática','Conjuntos numéricos','','Os conjuntos se encaixam: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Irracionais (como √2 e π) não podem ser escritos como fração.');

AULA('1. Fundamentos da matemática','Números naturais e inteiros');

AULA('1. Fundamentos da matemática','Números racionais e irracionais');

AULA('2. Operações fundamentais','Adição e subtração');

AULA('2. Operações fundamentais','Multiplicação e divisão');

AULA('2. Operações fundamentais','Potenciação e radiciação','','aᵐ · aⁿ = aᵐ⁺ⁿ. Resolva primeiro potências e raízes, depois × e ÷, por fim + e −.');

AULA('3. Divisibilidade','Critérios de divisibilidade','','Por 3: a soma dos algarismos é divisível por 3. Por 9: a soma é divisível por 9.');

AULA('3. Divisibilidade','Múltiplos e divisores');

AULA('3. Divisibilidade','MMC e MDC');

AULA('4. Frações e números decimais','Operações com frações','','a/b + c/d = (a·d + b·c) / (b·d). Sempre simplifique o resultado.');

AULA('4. Frações e números decimais','Números decimais');

AULA('4. Frações e números decimais','Conversão entre frações e decimais');

AULA('5. Razão, proporção e porcentagem','Razão e proporção');

AULA('5. Razão, proporção e porcentagem','Regra de três');

AULA('5. Razão, proporção e porcentagem','Porcentagem','','x% de N = N · x / 100.');



/* QUESTAO(módulo, enunciado, [alternativas], índice da correta começando em 0, resolução comentada) */

function QUESTAO(modulo,enunciado,alts,certa,resolucao){QUESTOES.push({id:slug(enunciado),modulo,enunciado,alts,certa,resolucao})}

QUESTAO('1. Fundamentos da matemática','Qual destes números é irracional?',['0,5','√2','3/4','7'],1,'√2 = 1,41421… não termina nem repete, então não vira fração. Os outros são racionais.');

QUESTAO('2. Operações fundamentais','Quanto vale 2³ · 2²?',['16','32','64','10'],1,'Mesma base: somam-se os expoentes. 2³ · 2² = 2⁵ = 32.');

QUESTAO('3. Divisibilidade','Qual número é divisível por 3?',['124','231','407','508'],1,'2 + 3 + 1 = 6, e 6 é divisível por 3. Nos outros, a soma não é.');

QUESTAO('3. Divisibilidade','Qual é o MMC de 12 e 18?',['6','36','72','54'],1,'12 = 2²·3 e 18 = 2·3². O MMC usa os maiores expoentes: 2²·3² = 36.');

QUESTAO('4. Frações e números decimais','Quanto vale 1/2 + 1/3?',['2/5','5/6','1/5','2/6'],1,'MMC de 2 e 3 é 6: 3/6 + 2/6 = 5/6.');

QUESTAO('4. Frações e números decimais','Qual é a fração irredutível de 0,75?',['75/10','3/4','7/5','3/5'],1,'0,75 = 75/100. Dividindo por 25 em cima e embaixo, fica 3/4.');

QUESTAO('5. Razão, proporção e porcentagem','Quanto é 20% de 350?',['60','70','75','17,5'],1,'350 · 20/100 = 70.');

QUESTAO('5. Razão, proporção e porcentagem','3 cadernos custam R$ 24. Quanto custam 5 cadernos?',['R$ 36','R$ 40','R$ 45','R$ 30'],1,'Cada caderno custa 24 ÷ 3 = 8. Então 5 cadernos custam R$ 40.');





/* ===== FLASHCARDS ORGANIZADOS POR ÁREA E SEÇÃO ===== */

function FLASH(area, secao, frente, verso) {
  FLASHCARDS.push({
    id: slug(area + '-' + frente),
    area,
    secao,
    frente,
    verso
  });
}

/* 1. FUNDAMENTOS DA MATEMÁTICA */

FLASH(
  'Fundamentos da matemática',
  'Conjuntos numéricos',
  'O que é um número irracional?',
  'Número real que não pode ser escrito como fração (ex.: √2, π).'
);

/* 2. OPERAÇÕES FUNDAMENTAIS */

FLASH(
  'Operações fundamentais',
  'Potenciação',
  'aᵐ · aⁿ',
  'aᵐ⁺ⁿ. Na multiplicação de potências de mesma base, somamos os expoentes.'
);

/* 3. DIVISIBILIDADE */

FLASH(
  'Divisibilidade',
  'Critérios de divisibilidade',
  'Critério de divisibilidade por 3',
  'A soma dos algarismos é divisível por 3.'
);

FLASH(
  'Divisibilidade',
  'MMC e MDC',
  'MMC',
  'Menor número positivo que é múltiplo de todos os números dados.'
);

FLASH(
  'Divisibilidade',
  'MMC e MDC',
  'MDC',
  'Maior número que divide todos os números dados.'
);

/* 4. OPERAÇÕES BÁSICAS */

FLASH(
  'Operações Básicas',
  'REGRA PRÁTICA',
  'Ordem das Operações',
  'Resolva primeiro o que está entre parênteses, depois potências, em seguida multiplicação e divisão, e por último soma e subtração. Ex.: 10 - 3 x 2 = 10 - 6 = 4. Cuidado: não subtraia 10 - 3 antes de multiplicar; a multiplicação vem primeiro. Macete: decore PEMDAS na ordem: Parênteses, Expoentes, Multiplicação/Divisão, Adição/Subtração.'
);

FLASH(
  'Operações Básicas',
  'ATALHO DE CÁLCULO',
  'Dobro, Triplo e Metade',
  'Dobro multiplica por 2, triplo multiplica por 3, metade divide por 2. Ex.: dobro de 45 = 90; metade de 45 = 22,5. Cuidado: metade não é subtrair um número fixo, é sempre dividir por 2. Macete: "Do-" de dobro lembra "dois": multiplica por dois.'
);

FLASH(
  'Operações Básicas',
  'REGRA PRÁTICA',
  'Terça e Quarta Parte',
  'A terça parte divide por 3 e a quarta parte divide por 4 — o número no nome é o divisor. Ex.: a quarta parte de 60 é 60 ÷ 4 = 15. Cuidado: "terça parte" não significa "3 vezes"; a palavra "parte" já avisa que é divisão. Macete: o número escondido no nome (terça = 3, quarta = 4) vai direto para baixo da divisão.'
);

FLASH(
  'Operações Básicas',
  'REGRA PRÁTICA',
  'Múltiplos de um Número',
  'Um número é múltiplo de outro quando é o resultado de multiplicá-lo por um número inteiro. Ex.: 36 é múltiplo de 9 porque 9 x 4 = 36. Cuidado: múltiplos de um número são sempre maiores ou iguais a ele, nunca menores. Macete: múltiplo é filho da tabuada — se aparece na tabuada do número, é múltiplo dele.'
);

FLASH(
  'Operações Básicas',
  'REGRA PRÁTICA',
  'Divisores de um Número',
  'Um número é divisor de outro quando a divisão entre eles é exata, sem deixar resto. Ex.: 7 é divisor de 56 porque 56 ÷ 7 = 8 exatamente. Cuidado: se sobrar resto na divisão, o número não é divisor. Macete: divisor certo é divisão redonda: resto zero é sinal verde.'
);

FLASH(
  'Operações Básicas',
  'COMPARAÇÃO',
  'Diferença entre Dois Valores',
  'A diferença é sempre o valor maior menos o valor menor. Ex.: a diferença entre 94 e 71 é 94 - 71 = 23. Cuidado: quando o enunciado pedir "diferença", nunca some os dois valores. Macete: diferença é sempre conta de menos: o grande em cima, o pequeno embaixo.'
);

FLASH(
  'Operações Básicas',
  'ATALHO DE CÁLCULO',
  'Estimativa Rápida',
  'Arredonde os números para os valores redondos mais próximos antes de calcular, só para ter uma ideia do resultado. Ex.: 297 + 512 fica perto de 300 + 500 = 800 (o valor exato é 809). Cuidado: estimativa serve para eliminar alternativas absurdas, não para ser a resposta quando o exato é pedido. Macete: arredondar para "dezena ou centena redonda" facilita a conta de cabeça.'
);

FLASH(
  'Operações Básicas',
  'ATALHO DE CÁLCULO',
  'Conferência pela Operação Inversa',
  'Toda operação tem uma inversa que serve para conferir o resultado: soma confere com subtração, multiplicação confere com divisão. Ex.: 63 ÷ 9 = 7; conferindo: 7 x 9 = 63. Cuidado: se a operação inversa não devolve o número original, algo na conta está errado. Macete: toda conta tem um "botão de desfazer" — use-o para checar antes de marcar a resposta.'
);

/* 5. FRAÇÕES */

FLASH(
  'Frações',
  'FÓRMULA',
  'Fração de uma Quantidade',
  'Multiplique a quantidade pelo numerador e divida pelo denominador (ou divida primeiro, se ficar mais simples). Ex.: 2/7 de 140 = 140 ÷ 7 x 2 = 40. Cuidado: o denominador reparte o todo; nunca divida pelo numerador. Macete: de baixo pra cima: primeiro divide pelo de baixo, depois multiplica pelo de cima.'
);

FLASH(
  'Frações',
  'FÓRMULA',
  'Soma com Mesmo Denominador',
  'Quando os denominadores já são iguais, some apenas os numeradores e mantenha o denominador. Ex.: 3/9 + 4/9 = 7/9. Cuidado: o denominador nunca entra na soma; ele fica exatamente como estava. Macete: só o número de cima muda de casa; o de baixo é fixo.'
);

FLASH(
  'Frações',
  'FÓRMULA',
  'Soma com Denominadores Diferentes',
  'Transforme as frações para um denominador comum antes de somar os numeradores. Ex.: 1/4 + 1/6 = 3/12 + 2/12 = 5/12. Cuidado: somar numeradores e denominadores separadamente sem igualar antes dá resultado errado. Macete: sem denominador igual não existe soma direta — ache o mínimo múltiplo comum primeiro.'
);

FLASH(
  'Frações',
  'FÓRMULA',
  'Subtração de Frações',
  'Iguale os denominadores e depois subtraia apenas os numeradores. Ex.: 5/6 - 1/3 = 5/6 - 2/6 = 3/6 = 1/2. Cuidado: denominadores diferentes nunca se subtraem direto. Macete: mesma regra da soma: iguala embaixo, resolve em cima.'
);

FLASH(
  'Frações',
  'FÓRMULA',
  'Multiplicação de Frações',
  'Multiplique numerador por numerador e denominador por denominador. Ex.: 3/4 x 2/5 = 6/20 = 3/10. Cuidado: multiplicar frações não exige denominador comum, diferente da soma. Macete: multiplicação anda reto: cima vezes cima, baixo vezes baixo.'
);

FLASH(
  'Frações',
  'FÓRMULA',
  'Divisão de Frações',
  'Mantenha a primeira fração e multiplique pelo inverso da segunda. Ex.: 3/5 ÷ 2/7 = 3/5 x 7/2 = 21/10. Cuidado: é a segunda fração que se inverte, nunca a primeira. Macete: copia, inverte e multiplica — a divisão vira multiplicação na hora.'
);

FLASH(
  'Frações',
  'REGRA PRÁTICA',
  'Frações Equivalentes',
  'Multiplicar ou dividir numerador e denominador pelo mesmo número mantém o valor da fração. Ex.: 2/3 = 4/6 = 10/15. Cuidado: alterar só o numerador ou só o denominador muda o valor da fração. Macete: fazer a mesma coisa em cima e embaixo é multiplicar por 1 — nada muda de verdade.'
);

FLASH(
  'Frações',
  'REGRA PRÁTICA',
  'Simplificação de Frações',
  'Divida numerador e denominador pelo mesmo divisor comum até não haver mais divisor além do 1. Ex.: 18/24 ÷ 6 = 3/4. Cuidado: simplificar é diferente de arredondar; o valor da fração precisa continuar o mesmo. Macete: ache o maior divisor comum de uma vez e corte os dois números juntos.'
);

FLASH(
  'Frações',
  'COMPARAÇÃO',
  'Comparar Frações - Mesmo Denominador',
  'Com denominadores iguais, é maior a fração com o maior numerador. Ex.: 7/10 é maior que 4/10, pois 7 > 4. Cuidado: denominador igual dispensa conta longa — basta olhar o número de cima. Macete: mesma base embaixo: quem tem mais em cima, vence.'
);

FLASH(
  'Frações',
  'COMPARAÇÃO',
  'Comparar Frações - Mesmo Numerador',
  'Com numeradores iguais, é maior a fração com o menor denominador. Ex.: 1/4 é maior que 1/8. Cuidado: denominador maior significa pedaços menores, não maiores. Macete: quanto mais fatias você corta um bolo, menor fica cada pedaço.'
);

FLASH(
  'Frações',
  'REGRA PRÁTICA',
  'Número Misto e Fração Imprópria',
  'Número misto junta um inteiro com uma fração; fração imprópria tem numerador maior que o denominador — os dois representam o mesmo valor. Ex.: 3 1/2 = (3 x 2 + 1)/2 = 7/2. Cuidado: uma fração com numerador maior que o denominador não está "errada", só indica mais de um inteiro. Macete: multiplica o inteiro pelo de baixo, soma o de cima, e mantém o mesmo denominador.'
);

FLASH(
  'Frações',
  'CONVERSÃO',
  'Fração para Decimal',
  'Divida o numerador pelo denominador para obter a forma decimal. Ex.: 5/8 = 5 ÷ 8 = 0,625. Cuidado: algumas frações geram dízimas periódicas em vez de decimais exatos. Macete: a barra de fração é uma divisão disfarçada — sempre que travar, divida.'
);

/* 6. DECIMAIS */

FLASH(
  'Decimais',
  'COMPARAÇÃO',
  'Comparar Decimais',
  'Complete com zeros à direita para igualar as casas decimais e compare como se fossem inteiros. Ex.: 0,7 = 0,70; e 0,70 > 0,65. Cuidado: mais casas decimais não significa número maior. Macete: zero à direita não muda o valor, só ajuda a comparar de igual para igual.'
);

FLASH(
  'Decimais',
  'REGRA PRÁTICA',
  'Soma e Subtração com Vírgula',
  'Alinhe as vírgulas uma embaixo da outra e complete com zeros as casas que faltarem antes de operar. Ex.: 8,3 + 1,75 = 8,30 + 1,75 = 10,05. Cuidado: alinhar pelo último algarismo, e não pela vírgula, é o erro mais comum aqui. Macete: vírgula sob vírgula, sempre — o resto se ajeita sozinho.'
);

FLASH(
  'Decimais',
  'ATALHO DE CÁLCULO',
  'Multiplicar por 10, 100 e 1000',
  'Desloque a vírgula para a direita: uma casa para 10, duas para 100, três para 1000. Ex.: 2,84 x 100 = 284. Cuidado: o número de casas que a vírgula anda é sempre igual ao número de zeros. Macete: conte os zeros do multiplicador e pule essa quantidade de casas para a direita.'
);

FLASH(
  'Decimais',
  'ATALHO DE CÁLCULO',
  'Dividir por 10, 100 e 1000',
  'Desloque a vírgula para a esquerda: uma casa para 10, duas para 100, três para 1000. Ex.: 74 ÷ 100 = 0,74. Cuidado: se faltar casa, complete com zero à esquerda antes da vírgula. Macete: dividir empurra a vírgula para trás, na mesma quantidade de zeros do divisor.'
);

FLASH(
  'Decimais',
  'CONVERSÃO',
  'Decimal para Fração',
  'Escreva o número sobre 10, 100 ou 1000 (conforme as casas decimais) e depois simplifique. Ex.: 0,35 = 35/100 = 7/20. Cuidado: cada casa decimal corresponde a um zero no denominador — não erre a contagem. Macete: uma casa vai para /10, duas para /100, três para /1000.'
);

FLASH(
  'Decimais',
  'REGRA PRÁTICA',
  'Dízimas Periódicas',
  'Quando a divisão de uma fração nunca termina e repete um bloco de algarismos, o resultado é uma dízima periódica. Ex.: 1/3 = 0,333... (o algarismo 3 se repete para sempre). Cuidado: em prova, dízimas costumam ser arredondadas — confira quantas casas o enunciado pede. Macete: se a divisão não fecha e o padrão se repete, é dízima, não erro de conta.'
);

FLASH(
  'Decimais',
  'REGRA PRÁTICA',
  'Arredondamento Decimal',
  'Observe a casa seguinte à que você quer manter: 5 ou mais, arredonda para cima; menos que 5, mantém. Ex.: 6,28 arredondado para uma casa decimal fica 6,3. Cuidado: não arredonde etapas intermediárias de um cálculo, só o resultado final. Macete: o vizinho da direita decide: 5 pra cima empurra, 4 pra baixo mantém.'
);

FLASH(
  'Decimais',
  'REGRA PRÁTICA',
  'Dinheiro e Casas Decimais',
  'Valores em reais sempre usam duas casas decimais, representando os centavos. Ex.: R$ 12,4 deve ser escrito como R$ 12,40. Cuidado: R$ 3,08 é diferente de R$ 3,80 — a posição do zero muda o valor. Macete: reais antes da vírgula, centavos depois, sempre em dupla.'
);

/* 7. PORCENTAGEM */

FLASH(
  'Porcentagem',
  'ATALHO DE CÁLCULO',
  'Como Calcular 1%',
  '1% de um valor é esse valor dividido por 100. Ex.: 1% de 3.500 = 3.500 ÷ 100 = 35. Cuidado: não confunda dividir por 100 com dividir por 10. Macete: 1% corta dois zeros do número (ou anda duas casas com a vírgula).'
);

FLASH(
  'Porcentagem',
  'ATALHO DE CÁLCULO',
  'Como Calcular 10%',
  '10% de um valor é esse valor dividido por 10. Ex.: 10% de 620 = 620 ÷ 10 = 62. Cuidado: depois de achar o percentual, confira se a pergunta quer só esse valor ou o preço já com desconto. Macete: 10% corta um zero (ou anda uma casa com a vírgula).'
);

FLASH(
  'Porcentagem',
  'ATALHO DE CÁLCULO',
  'Como Calcular 20% e 5%',
  '20% é o dobro de 10%; 5% é a metade de 10%. Ex.: de 400: 10% = 40; então 20% = 80 e 5% = 20. Cuidado: esses atalhos só funcionam bem se você já souber calcular 10% de cabeça. Macete: ache os 10% primeiro — o resto é só dobrar ou cortar ao meio.'
);

FLASH(
  'Porcentagem',
  'ATALHO DE CÁLCULO',
  'Como Calcular 25%, 50% e 75%',
  '25% é um quarto (÷4), 50% é metade (÷2) e 75% é três quartos (25% + 50%). Ex.: de 800: 25% = 200, 50% = 400, 75% = 600. Cuidado: esses valores são frações do total, não números fixos para somar. Macete: 25, 50 e 75 são sempre quartos do valor — pense em fatiar em 4 pedaços.'
);

FLASH(
  'Porcentagem',
  'CONVERSÃO',
  'Porcentagem como Fração',
  'Toda porcentagem já é um número sobre 100; basta simplificar a fração resultante. Ex.: 40% = 40/100 = 2/5. Cuidado: o símbolo % é justamente o denominador 100 escondido. Macete: tira o % e bota /100 no lugar — depois é só simplificar.'
);

FLASH(
  'Porcentagem',
  'CONVERSÃO',
  'Porcentagem como Decimal',
  'Para virar decimal, divida a porcentagem por 100, andando duas casas com a vírgula para a esquerda. Ex.: 6% = 0,06 e 32% = 0,32. Cuidado: 6% não é 0,6 — é fácil esquecer o segundo zero. Macete: duas casas para a esquerda, sempre — nem uma a mais, nem a menos.'
);

FLASH(
  'Porcentagem',
  'FÓRMULA',
  'Percentual de um Total',
  'A parte é o total multiplicado pela taxa em forma decimal. Ex.: 15% de 900 = 900 x 0,15 = 135. Cuidado: use sempre a taxa decimal (0,15), nunca o número inteiro (15). Macete: a palavra "de" em porcentagem quase sempre pede multiplicação.'
);

FLASH(
  'Porcentagem',
  'FÓRMULA',
  'Encontrar o Total pela Parte',
  'Quando você sabe a parte e a taxa, o total é a parte dividida pela taxa decimal. Ex.: se 30% de um valor valem 90, o total é 90 ÷ 0,30 = 300. Cuidado: aqui a conta é divisão, não multiplicação — o total está escondido, não a parte. Macete: parte pequena, total escondido: sempre divide pela taxa.'
);

FLASH(
  'Porcentagem',
  'FÓRMULA',
  'Preço Final com Desconto',
  'Multiplique o preço original por (1 menos a taxa decimal) para chegar direto ao valor final. Ex.: 100 com 15% de desconto: 100 x 0,85 = R$ 85. Cuidado: o resultado é o preço a pagar, não o valor do desconto em si. Macete: desconto de x% = pagar (100 - x)% do preço original.'
);

FLASH(
  'Porcentagem',
  'FÓRMULA',
  'Preço Final com Aumento',
  'Multiplique o preço original por (1 mais a taxa decimal) para obter o valor reajustado. Ex.: 250 com aumento de 12%: 250 x 1,12 = R$ 280. Cuidado: o resultado final precisa ser sempre maior que o valor original. Macete: aumento de x% = multiplicar por 1 seguido da taxa em decimal.'
);

FLASH(
  'Porcentagem',
  'FÓRMULA',
  'Variação Percentual',
  'A variação percentual é a diferença dividida pelo valor inicial, multiplicada por 100. Ex.: de 60 para 75: diferença = 15; 15 ÷ 60 x 100 = 25%. Cuidado: a base da divisão é sempre o valor inicial, nunca o final. Macete: quanto mudou dividido por de onde partiu, vezes 100.'
);

FLASH(
  'Porcentagem',
  'REGRA PRÁTICA',
  'Porcentagens Sucessivas',
  'Cada porcentagem aplicada em sequência incide sobre o valor que restou da anterior, não sobre o valor original. Ex.: 200 com dois descontos de 10%: 200 x 0,9 x 0,9 = 162. Cuidado: dois descontos de 10% não equivalem a um único desconto de 20%. Macete: desconto sobre desconto sempre se multiplica, nunca se soma.'
);

FLASH(
  'Porcentagem',
  'ERRO COMUM',
  'Desconto x Preço Final',
  'O desconto é o valor que sai do preço; o preço final é o que realmente sobra para o cliente pagar. Ex.: 30% de 200 = R$ 60 de desconto; preço final = 200 - 60 = R$ 140. Cuidado: releia a pergunta: ela quer o desconto (60) ou o valor final (140)? Macete: desconto é o que some; preço final é o que resta na etiqueta.'
);

FLASH(
  'Porcentagem',
  'ERRO COMUM',
  'Aumento Seguido de Desconto Igual',
  'Um aumento de x% seguido de um desconto de x% não devolve o valor original, porque incidem sobre bases diferentes. Ex.: 120 com aumento de 25% e depois desconto de 25%: 120 x 1,25 x 0,75 = 112,50 (menor que 120). Cuidado: a tentação de achar que os dois se cancelam é a armadilha mais comum de porcentagem. Macete: sempre que um % sobe e o mesmo % desce depois, o resultado final fica menor que o original.'
);

FLASH(
  'Porcentagem',
  'FÓRMULA',
  'Lucro e Margem sobre Custo',
  'Para achar o preço de venda com uma margem sobre o custo, multiplique o custo por (1 + margem decimal). Ex.: custo de R$ 40 com margem de 35%: 40 x 1,35 = R$ 54. Cuidado: margem sobre o custo é diferente de margem sobre o preço de venda — confira a base usada. Macete: margem "sobre o custo" sempre parte do valor que se pagou, não do preço final.'
);

FLASH(
  'Porcentagem',
  'REGRA PRÁTICA',
  'Reajuste em Cascata com Bases Diferentes',
  'Quando o enunciado avisa "sobre o novo valor", cada percentual seguinte usa o resultado anterior como base, não o valor inicial. Ex.: 300 com alta de 10% e, sobre o novo valor, alta de 5%: 300 x 1,10 x 1,05 = 346,50. Cuidado: aplicar as duas taxas direto sobre o valor original (300 x 1,15) dá resposta errada. Macete: "sobre o novo valor" avisa que a base mudou — sempre multiplique em cadeia.'
);

/* 8. RAZÃO E PROPORÇÃO */

FLASH(
  'Razão e Proporção',
  'REGRA PRÁTICA',
  'Razão entre Grandezas',
  'Razão é a comparação entre duas grandezas feita por divisão. Ex.: 30 alunos em 6 salas = 30 ÷ 6 = 5 alunos por sala. Cuidado: a ordem importa: razão de a para b é a ÷ b, e não o inverso. Macete: razão sempre responde "quantos de um para cada um do outro".'
);

FLASH(
  'Razão e Proporção',
  'REGRA PRÁTICA',
  'Proporção',
  'Proporção é a igualdade entre duas razões que representam a mesma relação. Ex.: 3/5 = 6/10, porque as duas razões valem o mesmo. Cuidado: duas razões só formam proporção se descreverem exatamente a mesma relação entre as grandezas. Macete: proporção é uma fração igual à outra — duas razões, um só valor.'
);

FLASH(
  'Razão e Proporção',
  'FÓRMULA',
  'Produto Cruzado',
  'Numa proporção a/b = c/d, o produto dos extremos é igual ao produto dos meios: a x d = b x c. Ex.: 4/6 = 10/15 porque 4 x 15 = 6 x 10 = 60. Cuidado: o produto cruzado só vale quando os dois lados já formam de fato uma proporção. Macete: multiplica em X, cruzando de cima com baixo.'
);

FLASH(
  'Razão e Proporção',
  'CONVERSÃO',
  'Escala',
  'Escala compara a medida do desenho com a medida real, na forma desenho:real. Ex.: escala 1:200 significa que 1 cm no desenho vale 200 cm na realidade. Cuidado: converta as unidades antes de dar a resposta final. Macete: o número depois dos dois-pontos mostra quantas vezes a medida real é maior.'
);

FLASH(
  'Razão e Proporção',
  'ATALHO DE CÁLCULO',
  'Preço por Unidade',
  'Preço por unidade é o preço total dividido pela quantidade — ótimo para comparar ofertas. Ex.: R$ 18 por 3 unidades = 18 ÷ 3 = R$ 6 por unidade. Cuidado: o pacote com mais itens nem sempre é o mais barato por unidade. Macete: para comparar preços, reduza sempre ao valor de "1 unidade".'
);

FLASH(
  'Razão e Proporção',
  'FÓRMULA',
  'Velocidade Média',
  'Velocidade média é a distância percorrida dividida pelo tempo gasto. Ex.: 240 km em 4 h = 240 ÷ 4 = 60 km/h. Cuidado: as unidades de distância e tempo precisam ser compatíveis entre si. Macete: velocidade é sempre "distância em cima, tempo embaixo".'
);

FLASH(
  'Razão e Proporção',
  'FÓRMULA',
  'Rendimento',
  'Rendimento é o resultado obtido dividido pelo recurso gasto para obtê-lo, como km por litro de combustível. Ex.: 210 km com 14 L = 210 ÷ 14 = 15 km/L. Cuidado: confira se a pergunta pede km/L ou L/km — são inversos um do outro. Macete: rendimento é sempre "o que você ganhou dividido pelo que você gastou".'
);

FLASH(
  'Razão e Proporção',
  'COMPARAÇÃO',
  'Comparação Proporcional',
  'Para comparar grandezas de forma justa, reduza tudo à mesma base: por 1 pessoa, 1 hora, 1 litro etc. Ex.: 40 páginas em 5 h = 40 ÷ 5 = 8 páginas por hora. Cuidado: comparar totais brutos sem igualar a base antes engana quem está lendo rápido. Macete: só compare depois de igualar as unidades — nunca antes.'
);

/* 9. REGRA DE TRÊS */

FLASH(
  'Regra de Três',
  'REGRA PRÁTICA',
  'Regra de Três Direta',
  'Quando as duas grandezas crescem juntas, monte a proporção e resolva pelo produto cruzado. Ex.: 3 cadernos custam R$ 24. Quanto custam 5? 3/5 = 24/x → x = 5 x 24 ÷ 3 = R$ 40. Cuidado: antes de multiplicar cruzado, confirme que as duas grandezas realmente sobem juntas. Macete: se uma dobra e a outra também dobra, a regra é direta.'
);

FLASH(
  'Regra de Três',
  'REGRA PRÁTICA',
  'Regra de Três Inversa',
  'Quando uma grandeza aumenta e a outra diminui, multiplique na horizontal, sem cruzar. Ex.: 5 máquinas fazem um trabalho em 8 dias. Com 10 máquinas: 5 x 8 = 10 x x → x = 40 ÷ 10 = 4 dias. Cuidado: montar como direta quando o tempo cai ao aumentar a outra grandeza dá resposta errada. Macete: uma sobe, a outra desce: multiplique reto, nunca em cruz.'
);

FLASH(
  'Regra de Três',
  'REGRA PRÁTICA',
  'Como Montar a Tabela',
  'Coloque cada grandeza em uma coluna e cada situação em uma linha, identificando onde está o x. Ex.: Lápis | Preço: linha 1 = 4 | 32; linha 2 = 7 | x. Resolve-se 4/7 = 32/x. Cuidado: nunca misture unidades diferentes na mesma coluna. Macete: cada coluna fala de uma única grandeza — sem trocar de assunto no meio.'
);

FLASH(
  'Regra de Três',
  'COMPARAÇÃO',
  'Grandezas Diretamente Proporcionais',
  'Duas grandezas são diretamente proporcionais quando sobem ou descem juntas, mantendo a mesma razão entre elas. Ex.: se 3 m de fio custam R$ 15, 9 m custam R$ 45 (a razão preço/metro é sempre 5). Cuidado: "mais de uma, mais de outra" sugere direta, mas é preciso confirmar que a razão se mantém. Macete: sobem de mãos dadas — se uma triplica, a outra também triplica.'
);

FLASH(
  'Regra de Três',
  'COMPARAÇÃO',
  'Grandezas Inversamente Proporcionais',
  'São inversamente proporcionais quando uma sobe e a outra desce, mantendo constante o produto entre elas. Ex.: 3 torneiras enchem um tanque em 8 h; 6 torneiras enchem em 4 h (3 x 8 = 6 x 4 = 24). Cuidado: a tarefa total precisa continuar sendo a mesma para essa relação valer. Macete: uma sobe, a outra desce, mas o produto das duas nunca muda.'
);

FLASH(
  'Regra de Três',
  'ERRO COMUM',
  'Inverter Coluna',
  'Cada coluna representa uma grandeza fixa; trocar a posição dos valores faz a conta perder o sentido. Ex.: trabalhadores embaixo de trabalhadores, horas embaixo de horas — nunca misturados na mesma coluna. Cuidado: colocar uma grandeza numa linha e outra diferente na mesma coluna gera número sem significado. Macete: grandeza com grandeza, situação com situação — colunas nunca se misturam.'
);

FLASH(
  'Regra de Três',
  'REGRA PRÁTICA',
  'Produtividade',
  'Produtividade relaciona quantidade produzida, número de pessoas e tempo — mais pessoas no mesmo tempo produzem mais. Ex.: 3 pessoas produzem 60 peças em 1 dia; 6 pessoas produzem 120 peças no mesmo dia. Cuidado: se o tempo também mudar junto, a situação vira uma regra de três composta. Macete: dobrou a equipe com o mesmo prazo? A produção também dobra.'
);

FLASH(
  'Regra de Três',
  'REGRA PRÁTICA',
  'Tempo e Quantidade',
  'Mantido o mesmo ritmo de trabalho, mais tempo disponível gera mais produção, de forma diretamente proporcional. Ex.: em 2 h produzem-se 50 peças; em 4 h produzem-se 100 peças. Cuidado: se o número de trabalhadores mudar junto, é preciso refazer toda a relação. Macete: mesmo ritmo: a produção segue o relógio na mesma proporção.'
);

FLASH(
  'Regra de Três',
  'REGRA PRÁTICA',
  'Consumo Proporcional',
  'O consumo costuma variar de forma direta com o tempo, a distância ou a quantidade de pessoas envolvidas. Ex.: um carro consome 10 L em 150 km; em 75 km, consome 10 ÷ 2 = 5 L. Cuidado: padronize as unidades de distância antes de montar a proporção. Macete: metade do percurso, metade do consumo — a lógica é sempre direta.'
);

FLASH(
  'Regra de Três',
  'CONVERSÃO',
  'Converter Antes de Montar a Regra de Três',
  'Deixe todas as grandezas na mesma unidade antes de montar a proporção. Ex.: 2,5 h viram 150 min antes de comparar com um valor já dado em minutos. Cuidado: unidades misturadas numa regra de três quase sempre levam à resposta errada. Macete: primeiro padroniza a unidade, só depois monta a proporção.'
);

/* 10. EQUAÇÕES SIMPLES */

FLASH(
  'Equações Simples',
  'REGRA PRÁTICA',
  'O que é a Incógnita',
  'A incógnita é o valor desconhecido da equação, geralmente representado por x; resolver é descobrir quanto ele vale. Ex.: em x + 6 = 15, o x é o número que somado a 6 dá 15, ou seja, 9. Cuidado: o x sozinho ao lado de um número não indica multiplicação — ele é só o valor que falta descobrir. Macete: x é a pergunta escondida da equação: "que número faz essa conta fechar?"'
);

FLASH(
  'Equações Simples',
  'REGRA PRÁTICA',
  'Isolar o x',
  'Para isolar o x, aplique a operação inversa do que está ao lado dele, repetindo a ação nos dois lados da igualdade. Ex.: x + 9 = 22. Tirando 9 dos dois lados: x = 22 - 9 = 13. Cuidado: o que se faz de um lado da igualdade tem que se repetir do outro, sem exceção. Macete: para libertar o x, jogue o número do outro lado trocando o sinal.'
);

FLASH(
  'Equações Simples',
  'REGRA PRÁTICA',
  'Operação Inversa na Equação',
  'Cada operação se desfaz pela sua contrária: soma desfaz com subtração, multiplicação desfaz com divisão. Ex.: 7x = 56. Como o 7 multiplica, divida: x = 56 ÷ 7 = 8. Cuidado: não confunda a inversa da soma (subtração) com a da multiplicação (divisão). Macete: atravessou a igualdade, vira o oposto: soma vira subtração, multiplicação vira divisão.'
);

FLASH(
  'Equações Simples',
  'FÓRMULA',
  'Equação x + a = b',
  'Em x + a = b, o valor de x é sempre b menos a. Ex.: x + 18 = 45, então x = 45 - 18 = 27. Cuidado: não some o valor de "a" de novo — ele precisa ser subtraído, nunca somado outra vez. Macete: o que estava somado de um lado, sai subtraindo do outro: x = b - a.'
);

FLASH(
  'Equações Simples',
  'FÓRMULA',
  'Equação a · x = b',
  'Em a · x = b, o valor de x é sempre b dividido por a. Ex.: 6x = 54, então x = 54 ÷ 6 = 9. Cuidado: divida pelo número que multiplica o x, nunca pelo próprio x. Macete: número colado no x se resolve sempre dividindo: x = b ÷ a.'
);

FLASH(
  'Equações Simples',
  'FÓRMULA',
  'Equação ax + b = c',
  'Primeiro elimine o termo somado (b), depois divida pelo número que multiplica o x. Ex.: 4x + 7 = 31. Tirando o 7: 4x = 24. Dividindo por 4: x = 6. Cuidado: nunca divida c pelo coeficiente a antes de eliminar o termo somado. Macete: primeiro resolve o que está "mais longe" do x (a soma), depois o que está "colado" nele.'
);

FLASH(
  'Equações Simples',
  'INTERPRETAÇÃO DE PROVA',
  'Montar Equação a Partir do Texto',
  'Traduza o enunciado em símbolos matemáticos, palavra por palavra, na ordem em que aparecem. Ex.: "O triplo de um número menos 4 é igual a 20" vira 3x - 4 = 20 (logo x = 8). Cuidado: a ordem das palavras muda o significado: "triplo de x menos 4" não é "triplo de (x - 4)". Macete: leia devagar e substitua cada expressão por um símbolo, sem pular etapas.'
);

FLASH(
  'Equações Simples',
  'CONFERÊNCIA',
  'Conferir Substituindo o Valor',
  'Para conferir a resposta, coloque o valor encontrado no lugar do x e veja se os dois lados da igualdade ficam iguais. Ex.: x = 6 em 4x + 7 = 31: 4 x 6 + 7 = 24 + 7 = 31. Confere. Cuidado: se os dois lados não baterem, revise a montagem da equação, não só a conta final. Macete: achou o x? Devolva ele para a equação original — se os dois lados fecham, está certo.'
);




/* ===== DADOS DA PÁGINA INICIAL (index.html) — troque pelos seus ===== */
const SITE={
  professora:'Dani Resulta',
  sobre:'Sou professora de Matemática licenciada, diagramadora e criadora do projeto ResultaMath. Acredito que a matemática não precisa ser complicada, por isso ensino de forma clara, visual e objetiva, transformando conceitos difíceis em ideias simples e acessíveis. Meu objetivo não é apenas ensinar a resolver questões, mas ajudar cada aluno a compreender a matemática e ganhar confiança para utilizá-la.',
  whatsapp:'5542991367740',   /* só números, com 55 + DDD. Deixe '' para esconder o botão */
  instagram:'',               /* ex.: https://instagram.com/seuperfil */
  youtube:'',                 /* ex.: https://youtube.com/@seucanal */
  email:''                    /* ex.: contato@seusite.com */
};

/* TRILHA MATEMÁTICA MINUTADA — cadastre os links em Configurações. */
const MINUTADA = [
  'Raiz quadrada','Potência','Porcentagem','PA','PG','Probabilidade','Mediana','Média','Moda','Regra de três','Logaritmo','Módulo de um número','Número oposto','Números pares e ímpares','Números primos','MMC','MDC','Frações','Frações equivalentes','Fração imprópria','Fatorial','Fração irredutível','Número decimal','Valor absoluto','Inverso de um número','Ângulos complementares','Ângulos suplementares','Perímetro','Área','Volume','Juros simples','Juros compostos'
].map((titulo, indice) => ({ id: slug(titulo), titulo, indice: indice + 1 }));
