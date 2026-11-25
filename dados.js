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



/* =========================================
   SIMULADOS DE CONCURSOS
   ========================================= */

const SIMULADOS_BANCAS = [];

function SIMULADO_BANCA({
    banca,
    concurso,
    ano,
    cargo,
    titulo,
    questoes
}) {
    SIMULADOS_BANCAS.push({
        id: slug(banca + '-' + concurso + '-' + cargo),
        banca: banca || '',
        concurso: concurso || '',
        ano: ano || '',
        cargo: cargo || '',
        titulo: titulo || '',
        questoes: questoes || []
    });
}

/* ===== CADASTRO DOS SIMULADOS ===== */

/* ===== SIMULADOS FGV ===== */

SIMULADO_BANCA({
    banca: 'FGV',
    concurso: 'Prefeitura Municipal',
    ano: 2025,
    cargo: 'Professor de Matemática',
    titulo: 'Simulado FGV - Professor',
    questoes: [
        {
            enunciado: 'Quanto é 25% de 200?',
            alts: ['25', '40', '50', '60', '75'],
            certa: 2,
            resolucao: '25% de 200 = 200 × 0,25 = 50.'
        },
        {
            enunciado: 'Qual é o MMC de 12 e 15?',
            alts: ['30', '45', '60', '90', '180'],
            certa: 2,
            resolucao: '12 = 2² × 3 e 15 = 3 × 5. O MMC é 2² × 3 × 5 = 60.'
        }
    ]
});

/* ===== SIMULADOS FUNDATEC ===== */

SIMULADO_BANCA({
    banca: 'FUNDATEC',
    concurso: 'Prefeitura de Getúlio Vargas - RS',
    ano: 2026,
    cargo: 'Auxiliar de Saúde Bucal',
    titulo: 'FUNDATEC 2026 - Auxiliar de Saúde Bucal',

    questoes: [
        {
            enunciado: 'A soma de um número com seus 3/4 é igual a 28. Qual é esse número?',
            alts: [
                '12',
                '16',
                '20',
                '24'
            ],
            certa: 1,
            resolucao: `
                Seja x o número procurado.

                x + 3x/4 = 28

                4x/4 + 3x/4 = 28

                7x/4 = 28

                7x = 28 × 4

                7x = 112

                x = 112/7

                x = 16

                Resposta correta: alternativa B.
            `
        }
    ]
});




/* =====================================================
   EXERCÍCIOS RESULTAMATH
   100 questões organizadas em 10 áreas
   ===================================================== */

/* QUESTAO(módulo, enunciado, [alternativas], índice da correta começando em 0, resolução comentada) */

function QUESTAO(modulo, enunciado, alts, certa, resolucao) {
    QUESTOES.push({
        id: slug(enunciado),
        modulo,
        enunciado,
        alts,
        certa,
        resolucao
    });
}


/* =====================================================
   1. FUNDAMENTOS DA MATEMÁTICA
   ===================================================== */

QUESTAO('1. Fundamentos da matemática',
'Qual destes números é irracional?',
['0,5', '√2', '3/4', '7', '0,25'], 1,
'√2 = 1,414213... é uma dízima não periódica. Portanto, não pode ser representado por uma fração de inteiros. Os demais números são racionais.');

QUESTAO('1. Fundamentos da matemática',
'Qual dos números abaixo pertence ao conjunto dos números naturais?',
['-3', '-1/2', '0', '√5', '-7'], 2,
'O número 0 pertence ao conjunto dos naturais quando adotamos ℕ = {0, 1, 2, 3, ...}. Os números negativos e irracionais não pertencem a esse conjunto.');

QUESTAO('1. Fundamentos da matemática',
'Qual é o antecessor do número inteiro -4?',
['-3', '-5', '4', '5', '0'], 1,
'O antecessor é o número imediatamente anterior na sequência dos inteiros. Assim, -4 - 1 = -5.');

QUESTAO('1. Fundamentos da matemática',
'Qual é o valor absoluto de -15?',
['-15', '0', '15', '1', '-1'], 2,
'O valor absoluto, ou módulo, representa a distância entre o número e o zero. Portanto, |-15| = 15.');

QUESTAO('1. Fundamentos da matemática',
'Qual número é maior?',
['-8', '-3', '-12', '-15', '-20'], 1,
'Entre números negativos, aquele que está mais próximo de zero é o maior. Portanto, -3 é maior que os demais.');

QUESTAO('1. Fundamentos da matemática',
'Qual alternativa apresenta apenas números primos?',
['2, 3 e 5', '1, 3 e 7', '2, 4 e 7', '3, 6 e 11', '5, 9 e 13'], 0,
'Os números primos possuem exatamente dois divisores positivos: 1 e eles mesmos. Os números 2, 3 e 5 são primos.');

QUESTAO('1. Fundamentos da matemática',
'Qual é o maior número inteiro entre -2, 0, -5, 3 e -1?',
['-1', '-2', '0', '3', '-5'], 3,
'Na reta numérica, os números aumentam da esquerda para a direita. Portanto, 3 é o maior número da lista.');

QUESTAO('1. Fundamentos da matemática',
'Qual fração representa o número 0,5?',
['1/4', '1/2', '2/5', '3/4', '5/2'], 1,
'0,5 = 5/10. Simplificando a fração por 5, temos 1/2.');

QUESTAO('1. Fundamentos da matemática',
'Qual é o resultado da comparação 3/4 e 2/3?',
['3/4 < 2/3', '3/4 = 2/3', '3/4 > 2/3', 'Não é possível comparar', 'Ambas são iguais a 1'], 2,
'Usando o mesmo denominador: 3/4 = 9/12 e 2/3 = 8/12. Como 9/12 é maior que 8/12, temos 3/4 > 2/3.');

QUESTAO('1. Fundamentos da matemática',
'Quantos elementos possui o conjunto A = {2, 4, 6, 8, 10}?',
['3', '4', '5', '6', '10'], 2,
'Basta contar os elementos distintos do conjunto. A possui cinco elementos: 2, 4, 6, 8 e 10.');


/* =====================================================
   2. OPERAÇÕES FUNDAMENTAIS
   ===================================================== */

QUESTAO('2. Operações fundamentais',
'Quanto é 248 + 376?',
['614', '624', '634', '6240', '6140'], 1,
'Somando os números: 248 + 376 = 624.');

QUESTAO('2. Operações fundamentais',
'Qual é o resultado de 900 - 457?',
['443', '453', '463', '543', '447'], 0,
'Realizando a subtração: 900 - 457 = 443.');

QUESTAO('2. Operações fundamentais',
'Quanto vale 24 × 15?',
['340', '350', '360', '370', '380'], 2,
'Podemos decompor 15 em 10 + 5. Assim: 24 × 10 = 240 e 24 × 5 = 120. Somando: 240 + 120 = 360.');

QUESTAO('2. Operações fundamentais',
'Qual é o resultado de 864 ÷ 12?',
['62', '68', '70', '72', '74'], 3,
'Como 12 × 72 = 864, temos 864 ÷ 12 = 72.');

QUESTAO('2. Operações fundamentais',
'Quanto vale 2³ · 2²?',
['16', '32', '64', '10', '8'], 1,
'Na multiplicação de potências de mesma base, somamos os expoentes: 2³ · 2² = 2⁵ = 32.');

QUESTAO('2. Operações fundamentais',
'Qual é o resultado de 150 + 80 ÷ 4?',
['57,5', '170', '230', '60', '230?'], 1,
'Primeiro realizamos a divisão: 80 ÷ 4 = 20. Depois somamos: 150 + 20 = 170.');

QUESTAO('2. Operações fundamentais',
'Quanto vale 7 × (12 - 5)?',
['35', '42', '49', '56', '84'], 2,
'Primeiro resolvemos os parênteses: 12 - 5 = 7. Depois multiplicamos: 7 × 7 = 49.');

QUESTAO('2. Operações fundamentais',
'Qual é o resultado de 1.200 ÷ 100?',
['1,2', '12', '120', '1200', '0,12'], 1,
'Na divisão por 100, deslocamos a vírgula duas casas para a esquerda: 1.200 ÷ 100 = 12.');

QUESTAO('2. Operações fundamentais',
'Uma pessoa comprou 4 produtos de R$ 18 cada. Quanto gastou?',
['R$ 62', 'R$ 68', 'R$ 72', 'R$ 74', 'R$ 82'], 2,
'Multiplicamos o preço unitário pela quantidade: 4 × 18 = 72. O gasto total foi de R$ 72.');

QUESTAO('2. Operações fundamentais',
'Qual é o resultado de 45 + 18 × 3 - 12?',
['87', '93', '99', '111', '117'], 1,
'Primeiro fazemos a multiplicação: 18 × 3 = 54. Depois: 45 + 54 - 12 = 87. Resposta correta: alternativa A.', 0);


/* =====================================================
   3. DIVISIBILIDADE E FATORAÇÃO
   ===================================================== */

QUESTAO('3. Divisibilidade e fatoração',
'Qual número é divisível por 3?',
['124', '231', '407', '508', '701'], 1,
'Somamos os algarismos de 231: 2 + 3 + 1 = 6. Como 6 é divisível por 3, 231 também é.');

QUESTAO('3. Divisibilidade e fatoração',
'Qual dos números abaixo é divisível por 5?',
['132', '247', '365', '418', '522'], 2,
'Um número é divisível por 5 quando termina em 0 ou 5. O número 365 termina em 5.');

QUESTAO('3. Divisibilidade e fatoração',
'Qual é o menor número primo?',
['0', '1', '2', '3', '5'], 2,
'O menor número primo é 2, pois possui exatamente dois divisores positivos: 1 e 2.');

QUESTAO('3. Divisibilidade e fatoração',
'Qual é o MDC de 18 e 24?',
['3', '4', '6', '8', '12'], 2,
'Os divisores comuns de 18 e 24 são 1, 2, 3 e 6. O maior deles é 6.');

QUESTAO('3. Divisibilidade e fatoração',
'Qual é o MMC de 12 e 18?',
['6', '36', '72', '54', '24'], 1,
'12 = 2² × 3 e 18 = 2 × 3². O MMC utiliza os maiores expoentes: 2² × 3² = 36.');

QUESTAO('3. Divisibilidade e fatoração',
'Qual é a decomposição em fatores primos do número 60?',
['2 × 3 × 10', '2² × 3 × 5', '2 × 3² × 5', '2³ × 5', '3 × 4 × 5'], 1,
'Dividindo 60 sucessivamente por números primos: 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5.');

QUESTAO('3. Divisibilidade e fatoração',
'Qual número é divisível por 9?',
['124', '315', '421', '503', '617'], 1,
'Somamos os algarismos de 315: 3 + 1 + 5 = 9. Como 9 é múltiplo de 9, o número é divisível por 9.');

QUESTAO('3. Divisibilidade e fatoração',
'Qual é a quantidade de divisores positivos do número 12?',
['4', '5', '6', '7', '8'], 2,
'Os divisores positivos de 12 são 1, 2, 3, 4, 6 e 12. Portanto, existem 6 divisores.');

QUESTAO('3. Divisibilidade e fatoração',
'Qual é o menor número positivo divisível simultaneamente por 4 e 6?',
['8', '10', '12', '18', '24'], 2,
'Precisamos calcular o MMC de 4 e 6. Como 4 = 2² e 6 = 2 × 3, MMC = 2² × 3 = 12.');

QUESTAO('3. Divisibilidade e fatoração',
'Um número é divisível por 2 e por 3 ao mesmo tempo. Qual alternativa apresenta um exemplo?',
['14', '21', '27', '30', '35'], 3,
'Para ser divisível por 2, precisa ser par. Para ser divisível por 3, a soma dos algarismos deve ser múltipla de 3. Em 30, temos um número par e 3 + 0 = 3.');


/* =====================================================
   4. FRAÇÕES E NÚMEROS DECIMAIS
   ===================================================== */

QUESTAO('4. Frações e números decimais',
'Quanto vale 1/2 + 1/3?',
['2/5', '5/6', '1/5', '2/6', '3/5'], 1,
'O MMC de 2 e 3 é 6. Transformando as frações: 3/6 + 2/6 = 5/6.');

QUESTAO('4. Frações e números decimais',
'Qual é a fração irredutível de 0,75?',
['75/10', '3/4', '7/5', '3/5', '1/4'], 1,
'0,75 = 75/100. Dividindo o numerador e o denominador por 25, obtemos 3/4.');

QUESTAO('4. Frações e números decimais',
'Quanto vale 3/4 - 1/4?',
['1/4', '1/2', '2/3', '3/8', '1'], 1,
'Como os denominadores são iguais, subtraímos os numeradores: (3 - 1)/4 = 2/4 = 1/2.');

QUESTAO('4. Frações e números decimais',
'Qual é o resultado de 2/3 × 3/5?',
['2/5', '3/8', '5/6', '6/15', '1/5'], 0,
'Multiplicamos os numeradores e os denominadores: (2 × 3)/(3 × 5) = 6/15. Simplificando por 3, obtemos 2/5.');

QUESTAO('4. Frações e números decimais',
'Quanto vale 2/5 ÷ 4/5?',
['1/2', '2', '1/4', '4/5', '5/2'], 0,
'Na divisão de frações, multiplicamos pela inversa da segunda: 2/5 × 5/4 = 10/20 = 1/2.');

QUESTAO('4. Frações e números decimais',
'Qual é o resultado de 2,5 + 3,75?',
['5,25', '6,15', '6,25', '6,50', '7,25'], 2,
'Alinhando as vírgulas: 2,50 + 3,75 = 6,25.');

QUESTAO('4. Frações e números decimais',
'Quanto vale 8,4 ÷ 2?',
['2,2', '3,2', '4,2', '4,4', '5,2'], 2,
'Dividindo 8,4 por 2, obtemos 4,2.');

QUESTAO('4. Frações e números decimais',
'Qual fração representa 0,2?',
['1/2', '1/5', '2/5', '1/4', '2/3'], 1,
'0,2 = 2/10. Simplificando por 2, temos 1/5.');

QUESTAO('4. Frações e números decimais',
'Quanto é 3/8 de 80?',
['20', '25', '30', '35', '40'], 2,
'Para calcular 3/8 de 80, dividimos 80 por 8 e multiplicamos por 3: 10 × 3 = 30.');

QUESTAO('4. Frações e números decimais',
'Qual é o resultado de 1,2 × 0,5?',
['0,06', '0,6', '1,7', '6', '0,12'], 1,
'Podemos perceber que multiplicar por 0,5 equivale a dividir por 2. Portanto, 1,2 ÷ 2 = 0,6.');


/* =====================================================
   5. RAZÃO, PROPORÇÃO E PORCENTAGEM
   ===================================================== */

QUESTAO('5. Razão, proporção e porcentagem',
'Quanto é 20% de 350?',
['60', '70', '75', '17,5', '80'], 1,
'Calculamos 20% de 350: 350 × 20/100 = 70.');

QUESTAO('5. Razão, proporção e porcentagem',
'3 cadernos custam R$ 24. Quanto custam 5 cadernos?',
['R$ 36', 'R$ 40', 'R$ 45', 'R$ 30', 'R$ 48'], 1,
'Cada caderno custa 24 ÷ 3 = R$ 8. Então, 5 × 8 = R$ 40.');

QUESTAO('5. Razão, proporção e porcentagem',
'Uma camisa de R$ 120 recebeu desconto de 25%. Qual é o preço final?',
['R$ 80', 'R$ 85', 'R$ 90', 'R$ 95', 'R$ 100'], 2,
'25% de 120 = 30. Subtraindo o desconto: 120 - 30 = R$ 90.');

QUESTAO('5. Razão, proporção e porcentagem',
'Em uma turma há 12 meninas e 8 meninos. Qual é a razão entre meninas e meninos?',
['2/3', '3/2', '4/3', '1/2', '5/2'], 1,
'A razão é 12/8. Simplificando numerador e denominador por 4, obtemos 3/2.');

QUESTAO('5. Razão, proporção e porcentagem',
'Se 4 trabalhadores realizam um serviço em 12 dias, em quantos dias 8 trabalhadores realizariam o mesmo serviço, mantendo o mesmo ritmo?',
['3 dias', '4 dias', '6 dias', '8 dias', '24 dias'], 2,
'As grandezas são inversamente proporcionais. Dobrando o número de trabalhadores, o tempo cai pela metade: 12 ÷ 2 = 6 dias.');

QUESTAO('5. Razão, proporção e porcentagem',
'Um produto de R$ 200 sofreu aumento de 10%. Qual é o novo preço?',
['R$ 210', 'R$ 215', 'R$ 220', 'R$ 230', 'R$ 240'], 2,
'10% de 200 = 20. Somando o aumento: 200 + 20 = R$ 220.');

QUESTAO('5. Razão, proporção e porcentagem',
'Se 6 máquinas produzem 900 peças em determinado período, quantas peças 2 máquinas iguais produzem no mesmo período?',
['150', '200', '250', '300', '450'], 3,
'As grandezas são diretamente proporcionais. Cada máquina produz 900 ÷ 6 = 150 peças. Duas máquinas produzem 2 × 150 = 300 peças.');

QUESTAO('5. Razão, proporção e porcentagem',
'Uma prova possui 40 questões. Um candidato acertou 75%. Quantas questões ele acertou?',
['20', '25', '28', '30', '35'], 3,
'Calculamos 75% de 40: 40 × 75/100 = 30 questões.');

QUESTAO('5. Razão, proporção e porcentagem',
'Uma receita utiliza 300 g de farinha para 4 pessoas. Quantos gramas serão necessários para 10 pessoas?',
['600 g', '650 g', '700 g', '750 g', '800 g'], 3,
'As grandezas são diretamente proporcionais. 300 ÷ 4 = 75 g por pessoa. Para 10 pessoas: 75 × 10 = 750 g.');

QUESTAO('5. Razão, proporção e porcentagem',
'Um salário de R$ 2.000 recebeu aumento de 15%. Qual passou a ser o salário?',
['R$ 2.150', 'R$ 2.200', 'R$ 2.250', 'R$ 2.300', 'R$ 2.350'], 3,
'15% de 2.000 = 300. Somando o aumento: 2.000 + 300 = R$ 2.300.');


/* =====================================================
   6. POTENCIAÇÃO E RADICIAÇÃO
   ===================================================== */

QUESTAO('6. Potenciação e radiciação',
'Quanto vale 3⁴?',
['27', '54', '64', '81', '243'], 3,
'3⁴ = 3 × 3 × 3 × 3 = 81.');

QUESTAO('6. Potenciação e radiciação',
'Qual é o resultado de 5⁰?',
['0', '1', '5', '10', '25'], 1,
'Toda potência de base não nula e expoente zero é igual a 1. Portanto, 5⁰ = 1.');

QUESTAO('6. Potenciação e radiciação',
'Quanto vale 2⁵?',
['16', '24', '32', '64', '128'], 2,
'2⁵ = 2 × 2 × 2 × 2 × 2 = 32.');

QUESTAO('6. Potenciação e radiciação',
'Qual é a raiz quadrada de 144?',
['10', '11', '12', '13', '14'], 2,
'A raiz quadrada de 144 é 12, pois 12 × 12 = 144.');

QUESTAO('6. Potenciação e radiciação',
'Qual é o resultado de √81 + √16?',
['9', '11', '12', '13', '15'], 3,
'√81 = 9 e √16 = 4. Somando: 9 + 4 = 13.');

QUESTAO('6. Potenciação e radiciação',
'Quanto vale 10³?',
['100', '300', '1.000', '10.000', '100.000'], 2,
'10³ = 10 × 10 × 10 = 1.000.');

QUESTAO('6. Potenciação e radiciação',
'Qual é o resultado de 4² - 3²?',
['5', '7', '9', '12', '25'], 1,
'4² = 16 e 3² = 9. Subtraindo: 16 - 9 = 7.');

QUESTAO('6. Potenciação e radiciação',
'Qual é a raiz cúbica de 125?',
['3', '4', '5', '6', '25'], 2,
'A raiz cúbica de 125 é 5, pois 5 × 5 × 5 = 125.');

QUESTAO('6. Potenciação e radiciação',
'Quanto vale 2³ × 3²?',
['36', '48', '64', '72', '96'], 3,
'Calculamos cada potência: 2³ = 8 e 3² = 9. Multiplicando: 8 × 9 = 72.');

QUESTAO('6. Potenciação e radiciação',
'Qual é o resultado de √50 simplificado?',
['2√5', '5√2', '10√5', '25√2', '5√5'], 1,
'Decompomos 50 = 25 × 2. Assim, √50 = √25 × √2 = 5√2.');


/* =====================================================
   7. EXPRESSÕES NUMÉRICAS E ALGÉBRICAS
   ===================================================== */

QUESTAO('7. Expressões numéricas e algébricas',
'Qual é o resultado de 18 + 6 × 4?',
['42', '48', '96', '72', '24'], 0,
'Primeiro fazemos a multiplicação: 6 × 4 = 24. Depois somamos: 18 + 24 = 42.');

QUESTAO('7. Expressões numéricas e algébricas',
'Quanto vale (20 - 8) ÷ 3 + 5?',
['7', '8', '9', '10', '11'], 3,
'Primeiro resolvemos os parênteses: 20 - 8 = 12. Depois dividimos: 12 ÷ 3 = 4. Por fim: 4 + 5 = 9. Resposta correta: alternativa C.', 2);

QUESTAO('7. Expressões numéricas e algébricas',
'Se x = 4, qual é o valor de 3x + 5?',
['12', '15', '17', '20', '25'], 2,
'Substituímos x por 4: 3 × 4 + 5 = 12 + 5 = 17.');

QUESTAO('7. Expressões numéricas e algébricas',
'Qual expressão representa o dobro de um número x aumentado em 7?',
['2x - 7', 'x + 7', '2(x + 7)', '2x + 7', 'x - 14'], 3,
'O dobro de x é 2x. Aumentado em 7, temos 2x + 7.');

QUESTAO('7. Expressões numéricas e algébricas',
'Reduzindo os termos semelhantes de 3x + 5x - 2x, obtemos:',
['4x', '5x', '6x', '8x', '10x'], 2,
'Somamos os coeficientes dos termos semelhantes: 3 + 5 - 2 = 6. Portanto, o resultado é 6x.');

QUESTAO('7. Expressões numéricas e algébricas',
'Qual é o resultado de 2a + 3b, sabendo que a = 2 e b = 4?',
['12', '14', '16', '18', '20'], 2,
'Substituímos os valores: 2 × 2 + 3 × 4 = 4 + 12 = 16.');

QUESTAO('7. Expressões numéricas e algébricas',
'Qual é o desenvolvimento de (x + 2)²?',
['x² + 4', 'x² + 2x + 4', 'x² + 4x + 4', 'x² - 4x + 4', '2x² + 4'], 2,
'Aplicamos o produto notável: (x + 2)² = x² + 2 × x × 2 + 2² = x² + 4x + 4.');

QUESTAO('7. Expressões numéricas e algébricas',
'Qual é o resultado da expressão 5x - 3, para x = -2?',
['-13', '-7', '7', '10', '13'], 0,
'Substituindo x por -2: 5 × (-2) - 3 = -10 - 3 = -13.');

QUESTAO('7. Expressões numéricas e algébricas',
'Qual é a expressão simplificada de 4(x + 3)?',
['4x + 3', '4x + 7', '4x + 12', 'x + 12', '7x'], 2,
'Aplicamos a propriedade distributiva: 4 × x + 4 × 3 = 4x + 12.');

QUESTAO('7. Expressões numéricas e algébricas',
'Se x = 3, qual é o valor de x² + 2x?',
['9', '12', '15', '18', '21'], 2,
'Substituindo x por 3: 3² + 2 × 3 = 9 + 6 = 15.');


/* =====================================================
   8. EQUAÇÕES E SISTEMAS
   ===================================================== */

QUESTAO('8. Equações e sistemas',
'Qual é a solução da equação x + 7 = 15?',
['6', '7', '8', '9', '22'], 2,
'Isolamos x: x = 15 - 7. Portanto, x = 8.');

QUESTAO('8. Equações e sistemas',
'Resolva a equação 3x = 27.',
['6', '7', '8', '9', '10'], 3,
'Dividimos os dois lados por 3: x = 27 ÷ 3 = 9.');

QUESTAO('8. Equações e sistemas',
'Qual é a solução de 2x + 4 = 14?',
['3', '4', '5', '6', '7'], 2,
'Subtraímos 4 dos dois lados: 2x = 10. Dividimos por 2: x = 5.');

QUESTAO('8. Equações e sistemas',
'Resolva 5x - 10 = 20.',
['4', '5', '6', '7', '8'], 2,
'Somamos 10 aos dois lados: 5x = 30. Dividimos por 5: x = 6.');

QUESTAO('8. Equações e sistemas',
'Qual é a solução da equação 2(x + 3) = 16?',
['3', '4', '5', '6', '7'], 1,
'Dividimos os dois lados por 2: x + 3 = 8. Subtraindo 3: x = 5. Resposta correta: alternativa C.', 2);

QUESTAO('8. Equações e sistemas',
'Qual é a solução da equação x/4 = 6?',
['10', '18', '20', '24', '30'], 3,
'Multiplicamos os dois lados por 4: x = 6 × 4 = 24.');

QUESTAO('8. Equações e sistemas',
'A soma de um número com seu dobro é 24. Qual é esse número?',
['6', '8', '10', '12', '16'], 1,
'Chamando o número de x: x + 2x = 24. Logo, 3x = 24 e x = 8.');

QUESTAO('8. Equações e sistemas',
'Qual é o par ordenado que resolve o sistema x + y = 10 e x - y = 2?',
['(4, 6)', '(5, 5)', '(6, 4)', '(7, 3)', '(8, 2)'], 2,
'Somando as equações: 2x = 12, então x = 6. Substituindo em x + y = 10: 6 + y = 10, logo y = 4. O par é (6, 4).');

QUESTAO('8. Equações e sistemas',
'Qual é a raiz da equação x² = 49, considerando as duas soluções reais?',
['7', '-7', '7 e -7', '49', '0'], 2,
'Como 7² = 49 e (-7)² = 49, as duas soluções são x = 7 e x = -7.');

QUESTAO('8. Equações e sistemas',
'Qual é a soma das raízes da equação x² - 5x + 6 = 0?',
['2', '3', '5', '6', '11'], 2,
'Fatorando: (x - 2)(x - 3) = 0. As raízes são 2 e 3. A soma é 2 + 3 = 5.');


/* =====================================================
   9. GRANDEZAS, MEDIDAS E GEOMETRIA
   ===================================================== */

QUESTAO('9. Grandezas, medidas e geometria',
'Quantos centímetros existem em 2,5 metros?',
['25 cm', '150 cm', '200 cm', '250 cm', '2.500 cm'], 3,
'Como 1 metro equivale a 100 centímetros, fazemos 2,5 × 100 = 250 cm.');

QUESTAO('9. Grandezas, medidas e geometria',
'Quantos minutos existem em 3 horas?',
['120', '150', '180', '200', '240'], 2,
'Cada hora possui 60 minutos. Portanto, 3 × 60 = 180 minutos.');

QUESTAO('9. Grandezas, medidas e geometria',
'Qual é a área de um retângulo de 8 cm de comprimento e 5 cm de largura?',
['13 cm²', '26 cm²', '35 cm²', '40 cm²', '45 cm²'], 3,
'A área do retângulo é base × altura: 8 × 5 = 40 cm².');

QUESTAO('9. Grandezas, medidas e geometria',
'Qual é o perímetro de um quadrado com lado de 6 cm?',
['12 cm', '18 cm', '24 cm', '30 cm', '36 cm'], 2,
'O quadrado possui quatro lados iguais. Assim, P = 4 × 6 = 24 cm.');

QUESTAO('9. Grandezas, medidas e geometria',
'Qual é a área de um triângulo com base de 10 cm e altura de 6 cm?',
['16 cm²', '30 cm²', '40 cm²', '60 cm²', '80 cm²'], 1,
'A área do triângulo é (base × altura)/2. Logo, (10 × 6)/2 = 30 cm².');

QUESTAO('9. Grandezas, medidas e geometria',
'Qual é o comprimento de uma circunferência de raio 3 cm? Considere π = 3,14.',
['9,42 cm', '12,56 cm', '18,84 cm', '28,26 cm', '37,68 cm'], 2,
'O comprimento é C = 2πr. Substituindo: 2 × 3,14 × 3 = 18,84 cm.');

QUESTAO('9. Grandezas, medidas e geometria',
'Qual é o volume de um cubo com aresta de 4 cm?',
['16 cm³', '32 cm³', '48 cm³', '64 cm³', '80 cm³'], 3,
'O volume do cubo é lado³. Portanto, 4³ = 4 × 4 × 4 = 64 cm³.');

QUESTAO('9. Grandezas, medidas e geometria',
'Um ângulo de 90° é classificado como:',
['Agudo', 'Obtuso', 'Reto', 'Raso', 'Completo'], 2,
'Um ângulo reto mede exatamente 90°.');

QUESTAO('9. Grandezas, medidas e geometria',
'Qual é a soma dos ângulos internos de um triângulo?',
['90°', '120°', '180°', '270°', '360°'], 2,
'A soma dos ângulos internos de qualquer triângulo plano é sempre 180°.');

QUESTAO('9. Grandezas, medidas e geometria',
'Uma caixa possui 2 m de comprimento, 1,5 m de largura e 1 m de altura. Qual é seu volume?',
['2 m³', '2,5 m³', '3 m³', '3,5 m³', '4 m³'], 2,
'O volume do paralelepípedo é comprimento × largura × altura: 2 × 1,5 × 1 = 3 m³.');


/* =====================================================
   10. ESTATÍSTICA E PROBABILIDADE
   ===================================================== */

QUESTAO('10. Estatística e probabilidade',
'Qual é a média aritmética dos números 4, 6, 8 e 10?',
['6', '7', '8', '9', '10'], 1,
'Somamos os valores: 4 + 6 + 8 + 10 = 28. Dividimos pela quantidade de valores: 28 ÷ 4 = 7.');

QUESTAO('10. Estatística e probabilidade',
'Qual é a mediana do conjunto 2, 5, 7, 9 e 12?',
['5', '6', '7', '9', '12'], 2,
'Os dados já estão em ordem crescente. Como existem cinco valores, a mediana é o elemento central: 7.');

QUESTAO('10. Estatística e probabilidade',
'Qual é a moda do conjunto 3, 5, 5, 7, 8, 5 e 9?',
['3', '5', '7', '8', '9'], 1,
'A moda é o valor que aparece com maior frequência. O número 5 aparece três vezes.');

QUESTAO('10. Estatística e probabilidade',
'Qual é a amplitude do conjunto 4, 8, 10, 15 e 20?',
['10', '12', '14', '16', '24'], 3,
'A amplitude é a diferença entre o maior e o menor valor: 20 - 4 = 16.');

QUESTAO('10. Estatística e probabilidade',
'Uma moeda honesta é lançada uma vez. Qual é a probabilidade de sair cara?',
['10%', '25%', '40%', '50%', '75%'], 3,
'Existem dois resultados igualmente prováveis: cara e coroa. A probabilidade de cara é 1/2 = 50%.');

QUESTAO('10. Estatística e probabilidade',
'Um dado comum é lançado. Qual é a probabilidade de sair um número par?',
['1/6', '1/3', '1/2', '2/3', '5/6'], 2,
'Os resultados pares são 2, 4 e 6. São 3 casos favoráveis entre 6 possíveis: 3/6 = 1/2.');

QUESTAO('10. Estatística e probabilidade',
'Em uma caixa há 3 bolas vermelhas e 7 azuis. Qual é a probabilidade de retirar uma bola vermelha?',
['10%', '20%', '30%', '40%', '70%'], 2,
'Existem 10 bolas no total e 3 são vermelhas. A probabilidade é 3/10 = 30%.');

QUESTAO('10. Estatística e probabilidade',
'As notas de um aluno foram 6, 8 e 10. Qual é a média?',
['6', '7', '8', '9', '10'], 2,
'Somamos as notas: 6 + 8 + 10 = 24. Dividimos por 3: 24 ÷ 3 = 8.');

QUESTAO('10. Estatística e probabilidade',
'Uma urna contém 5 bolas verdes, 2 amarelas e 3 brancas. Qual é a probabilidade de retirar uma bola amarela?',
['10%', '20%', '30%', '40%', '50%'], 1,
'O total é 5 + 2 + 3 = 10 bolas. Duas são amarelas. Logo, 2/10 = 20%.');

QUESTAO('10. Estatística e probabilidade',
'Em uma pesquisa com 200 pessoas, 60 preferem estudar pela manhã. Qual é o percentual correspondente?',
['20%', '25%', '30%', '35%', '40%'], 2,
'Calculamos a razão entre os que preferem a manhã e o total: 60/200 = 0,3. Convertendo para porcentagem: 0,3 × 100 = 30%.');




/* ===== RESOLUÇÕES ===== */

const RESOLUCOES = [];

function RESOLUCAO({
    banca,
    concurso,
    ano,
    cargo,
    assunto,
    enunciado,
    alternativas,
    gabarito,
    video
}) {
    RESOLUCOES.push({
        id: slug(enunciado),
        banca: banca || '',
        concurso: concurso || '',
        ano: ano || '',
        cargo: cargo || '',
        assunto: assunto || '',
        enunciado: enunciado || '',
        alternativas: alternativas || [],
        gabarito: gabarito || '',
        video: video || ''
    });
}

/* CESGRANRIO */

RESOLUCAO({
    banca: 'CESGRANRIO 2024',
    concurso: 'Banco da Amazônia',
    ano: 2024,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - CESGRANRIO 2024',
    alternativas: [],
    gabarito: '',
    video: 'LGTiGfulDwU'
});

RESOLUCAO({
    banca: 'CESGRANRIO 2024',
    concurso: 'Banco da Amazônia',
    ano: 2024,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 02 - CESGRANRIO 2024',
    alternativas: [],
    gabarito: '',
    video: 'jxbpUJl1es0'
});

/* IBFC */

RESOLUCAO({
    banca: 'IBFC 2025',
    concurso: 'Concurso PM-PR',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - IBFC 2025',
    alternativas: [],
    gabarito: '',
    video: 'mlYl5dcjiVY'
});

RESOLUCAO({
    banca: 'IBFC 2025',
    concurso: 'Concurso PM-PR',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 02 - IBFC 2025',
    alternativas: [],
    gabarito: '',
    video: 'AVC_vrnd2qE'
});

RESOLUCAO({
    banca: 'IBFC 2025',
    concurso: 'Concurso PM-PR',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 03 - IBFC 2025',
    alternativas: [],
    gabarito: '',
    video: 'AVC_vrnd2qE'
});

RESOLUCAO({
    banca: 'IBFC 2025',
    concurso: 'Concurso PM-PR',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 04 - IBFC 2025',
    alternativas: [],
    gabarito: '',
    video: 'v9AX1ebQ55k'
});

RESOLUCAO({
    banca: 'IBFC 2025',
    concurso: 'Concurso PM-PR',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 05 - IBFC 2025',
    alternativas: [],
    gabarito: '',
    video: '6CHPbNxE-2Q'
});

RESOLUCAO({
    banca: 'IBFC 2025',
    concurso: 'Concurso PM-PR',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 06 - IBFC 2025',
    alternativas: [],
    gabarito: '',
    video: 'bjP_Elow5Yg'
});

/* FUNDATEC 2022 */

RESOLUCAO({
    banca: 'FUNDATEC 2022',
    concurso: 'Concurso Administrativo',
    ano: 2022,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - FUNDATEC 2022',
    alternativas: [],
    gabarito: '',
    video: 'uxs-aQ8UtgY'
});

/* VUNESP 2022 */


RESOLUCAO({
    banca: 'VUNESP 2022',
    concurso: 'Concurso TJ-SP',
    ano: 2022,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - VUNESP 2022',
    alternativas: [],
    gabarito: '',
    video: '_YLGMeUaEwQ'
});

/* FGV 2025 */

RESOLUCAO({
    banca: 'FGV 2025',
    concurso: 'Concurso Prefeitura de Canaã',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - FGV 2025',
    alternativas: [],
    gabarito: '',
    video: '5iMLUKfzhIs'
});

RESOLUCAO({
    banca: 'FGV 2025',
    concurso: 'Concurso Prefeitura de Canaã',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 02 - FGV 2025',
    alternativas: [],
    gabarito: '',
    video: 'i2yBM2jM5dA'
});

RESOLUCAO({
    banca: 'FGV 2025',
    concurso: 'Concurso Prefeitura de Canaã',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 03 - FGV 2025',
    alternativas: [],
    gabarito: '',
    video: 'MJThglOhwVc'
});

RESOLUCAO({
    banca: 'FGV 2025',
    concurso: 'Concurso Prefeitura de Canaã',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 04 - FGV 2025',
    alternativas: [],
    gabarito: '',
    video: 'rt0pAva_oMM'
});

RESOLUCAO({
    banca: 'FGV 2025',
    concurso: 'Concurso Prefeitura de Canaã',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 05 - FGV 2025',
    alternativas: [],
    gabarito: '',
    video: 'igicDXK7Eec'
});

RESOLUCAO({
    banca: 'FGV 2025',
    concurso: 'Concurso Prefeitura de Canaã',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 06 - FGV 2025',
    alternativas: [],
    gabarito: '',
    video: 'wEmwLgpwzwg'
});

RESOLUCAO({
    banca: 'FGV 2025',
    concurso: 'Concurso Prefeitura de Canaã',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 07 - FGV 2025',
    alternativas: [],
    gabarito: '',
    video: 'sdNNjnwG9ho'
});

RESOLUCAO({
    banca: 'FGV 2025',
    concurso: 'Concurso Prefeitura de Canaã',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 08 - FGV 2025',
    alternativas: [],
    gabarito: '',
    video: '87Yqw4EyjEM'
});

RESOLUCAO({
    banca: 'FGV 2025',
    concurso: 'Concurso Prefeitura de Canaã',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 09 - FGV 2025',
    alternativas: [],
    gabarito: '',
    video: 'kv9p2CvrEF8'
});

RESOLUCAO({
    banca: 'FGV 2025',
    concurso: 'Concurso Prefeitura de Canaã',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 10 - FGV 2025',
    alternativas: [],
    gabarito: '',
    video: 'kvDSDMwQThs'
});

RESOLUCAO({
    banca: 'FGV 2025',
    concurso: 'Concurso Prefeitura de Canaã',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 11 - FGV 2025',
    alternativas: [],
    gabarito: '',
    video: 'xuaBR6Pqueo'
});

RESOLUCAO({
    banca: 'FGV 2025',
    concurso: 'Concurso Prefeitura de Canaã',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 12 - FGV 2025',
    alternativas: [],
    gabarito: '',
    video: 'T1KpigvO93A'
});

RESOLUCAO({
    banca: 'FGV 2025',
    concurso: 'Concurso Prefeitura de Canaã',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 13 - FGV 2025',
    alternativas: [],
    gabarito: '',
    video: '-vC20_UEWd4'
});

RESOLUCAO({
    banca: 'FGV 2025',
    concurso: 'Concurso Prefeitura de Canaã',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 14 - FGV 2025',
    alternativas: [],
    gabarito: '',
    video: 'ucZgeuSdt3A'
});

RESOLUCAO({
    banca: 'FGV 2025',
    concurso: 'Concurso Prefeitura de Canaã',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 15 - FGV 2025',
    alternativas: [],
    gabarito: '',
    video: 'by_PhWIQmnI'
});

/* IBAM 2025 */

RESOLUCAO({
    banca: 'IBAM 2025',
    concurso: 'Concurso Prefeitura de Bebedouro',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - IBAM 2025',
    alternativas: [],
    gabarito: '',
    video: 'hlaJuUiXHqA'
});

RESOLUCAO({
    banca: 'IBAM 2025',
    concurso: 'Concurso Prefeitura de Bebedouro',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 02 - IBAM 2025',
    alternativas: [],
    gabarito: '',
    video: 'm0YdQcbrS_8'
});

RESOLUCAO({
    banca: 'IBAM 2025',
    concurso: 'Concurso Prefeitura de Bebedouro',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 03 - IBAM 2025',
    alternativas: [],
    gabarito: '',
    video: 'nHEHoj0qFEk'
});

RESOLUCAO({
    banca: 'IBAM 2025',
    concurso: 'Concurso Prefeitura de Bebedouro',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 04 - IBAM 2025',
    alternativas: [],
    gabarito: '',
    video: 'j_7ksK_JQn0'
});

RESOLUCAO({
    banca: 'IBAM 2025',
    concurso: 'Concurso Prefeitura de Bebedouro',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 05 - IBAM 2025',
    alternativas: [],
    gabarito: '',
    video: 'ZprGHodGQKw'
});

RESOLUCAO({
    banca: 'IBAM 2025',
    concurso: 'Concurso Prefeitura de Bebedouro',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 06 - IBAM 2025',
    alternativas: [],
    gabarito: '',
    video: '9EM4F7YiJyY'
});

RESOLUCAO({
    banca: 'IBAM 2025',
    concurso: 'Concurso Prefeitura de Bebedouro',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 07 - IBAM 2025',
    alternativas: [],
    gabarito: '',
    video: 'pkbzceeqIEA'
});

RESOLUCAO({
    banca: 'IBAM 2025',
    concurso: 'Concurso Prefeitura de Bebedouro',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 08 - IBAM 2025',
    alternativas: [],
    gabarito: '',
    video: 'y4rfpUXMjfY'
});

RESOLUCAO({
    banca: 'IBAM 2025',
    concurso: 'Concurso Prefeitura de Bebedouro',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 09 - IBAM 2025',
    alternativas: [],
    gabarito: '',
    video: 'EWyHeeiNOwY'
});

/* IBFC 2023 */

RESOLUCAO({
    banca: 'IBFC 2023',
    concurso: 'Concurso IBGE [Supervisor de Coleta e Qualidade]',
    ano: 2023,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - IBGE 2023',
    alternativas: [],
    gabarito: '',
    video: '1QiTozYVyZs'
});

RESOLUCAO({
    banca: 'IBFC 2023',
    concurso: 'Concurso IBGE [Supervisor de Coleta e Qualidade]',
    ano: 2023,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 02 - IBGE 2023',
    alternativas: [],
    gabarito: '',
    video: 'GBsxUjAbQCE'
});

RESOLUCAO({
    banca: 'IBFC 2023',
    concurso: 'Concurso IBGE [Supervisor de Coleta e Qualidade]',
    ano: 2023,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 03 - IBGE 2023',
    alternativas: [],
    gabarito: '',
    video: 'SePFDdQv5w8'
});

RESOLUCAO({
    banca: 'IBFC 2023',
    concurso: 'Concurso IBGE [Supervisor de Coleta e Qualidade]',
    ano: 2023,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 04 - IBGE 2023',
    alternativas: [],
    gabarito: '',
    video: 'Sccu6dko_Ik'
});

RESOLUCAO({
    banca: 'IBFC 2023',
    concurso: 'Concurso IBGE [Supervisor de Coleta e Qualidade]',
    ano: 2023,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 05 - IBGE 2023',
    alternativas: [],
    gabarito: '',
    video: '8XaX9mjlIxA'
});

RESOLUCAO({
    banca: 'IBFC 2023',
    concurso: 'Concurso IBGE [Supervisor de Coleta e Qualidade]',
    ano: 2023,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 06 - IBGE 2023',
    alternativas: [],
    gabarito: '',
    video: 'd122fjFGEGc'
});

RESOLUCAO({
    banca: 'IBFC 2023',
    concurso: 'Concurso IBGE [Supervisor de Coleta e Qualidade]',
    ano: 2023,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 07 - IBGE 2023',
    alternativas: [],
    gabarito: '',
    video: 'UrDc2KoYM9Y'
});

RESOLUCAO({
    banca: 'IBFC 2023',
    concurso: 'Concurso IBGE [Supervisor de Coleta e Qualidade]',
    ano: 2023,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 08 - IBGE 2023',
    alternativas: [],
    gabarito: '',
    video: 'H6RuGuzPQ8g'
});

/* IDECAN 2025 */

RESOLUCAO({
    banca: 'IDECAN 2025',
    concurso: 'Concurso Prefeitura de Patos',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - IDECAN 2025',
    alternativas: [],
    gabarito: '',
    video: 'Oc0CAzvyX1M'
});

RESOLUCAO({
    banca: 'IDECAN 2025',
    concurso: 'Concurso Prefeitura de Patos',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 02 - IDECAN 2025',
    alternativas: [],
    gabarito: '',
    video: 'bvNNeQjmtIM'
});

RESOLUCAO({
    banca: 'IDECAN 2025',
    concurso: 'Concurso Prefeitura de Patos',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 03 - IDECAN 2025',
    alternativas: [],
    gabarito: '',
    video: 'f2seLIVUhDM'
});

/* UFAM 2022 */

RESOLUCAO({
    banca: 'UFAM 2022',
    concurso: 'Concurso Assistente em Administração',
    ano: 2022,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - UFAM 2022',
    alternativas: [],
    gabarito: '',
    video: 'Gqtk4vXW274'
});

/* FGV 2026 */

RESOLUCAO({
    banca: 'FGV 2026',
    concurso: 'Concurso IBGE [Agente de Pesquisas e Mapeamento (APM)]',
    ano: 2026,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - FGV 2026',
    alternativas: [],
    gabarito: '',
    video: 'm45YxpD10jI'
});

RESOLUCAO({
    banca: 'FGV 2026',
    concurso: 'Concurso IBGE [Agente de Pesquisas e Mapeamento (APM)]',
    ano: 2026,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 02 - FGV 2026',
    alternativas: [],
    gabarito: '',
    video: 'n5qKyAjPev8'
});

RESOLUCAO({
    banca: 'FGV 2026',
    concurso: 'Concurso IBGE [Agente de Pesquisas e Mapeamento (APM)]',
    ano: 2026,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 03 - FGV 2026',
    alternativas: [],
    gabarito: '',
    video: 'zyQVWGC7y4M'
});

RESOLUCAO({
    banca: 'FGV 2026',
    concurso: 'Concurso IBGE [Agente de Pesquisas e Mapeamento (APM)]',
    ano: 2026,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 04 - FGV 2026',
    alternativas: [],
    gabarito: '',
    video: 'fkKhaVGgcuU'
});

RESOLUCAO({
    banca: 'FGV 2026',
    concurso: 'Concurso IBGE [Agente de Pesquisas e Mapeamento (APM)]',
    ano: 2026,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 05 - FGV 2026',
    alternativas: [],
    gabarito: '',
    video: 's5LQOyuJeS4'
});

/* FUNDATEC 2026 */

RESOLUCAO({
    banca: 'FUNDATEC 2026',
    concurso: 'Concurso Prefeitura Municipal de Coqueiral - MG',
    ano: 2026,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - FUNDATEC 2026',
    alternativas: [],
    gabarito: '',
    video: 'yVPBbvyYok8'
});

/* FUNDATEC 2026 */

RESOLUCAO({
    banca: 'FEPESE 2026',
    concurso: 'Concurso Prefeitura de Caxambu do Sul - SC',
    ano: 2026,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - FEPESE 2026',
    alternativas: [],
    gabarito: '',
    video: 'QHrSGbbRBKQ'
});

RESOLUCAO({
    banca: 'FEPESE 2026',
    concurso: 'Concurso Prefeitura de Caxambu do Sul - SC',
    ano: 2026,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 02 - FEPESE 2026',
    alternativas: [],
    gabarito: '',
    video: 'kDnHZUwEELQ'
});

RESOLUCAO({
    banca: 'FEPESE 2026',
    concurso: 'Concurso Prefeitura de Caxambu do Sul - SC',
    ano: 2026,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 03 - FEPESE 2026',
    alternativas: [],
    gabarito: '',
    video: 'z37VrS4eV2g'
});

/* FCC 2026 */

RESOLUCAO({
    banca: 'FCC 2026',
    concurso: 'Concurso Técnico Legislativo [AL - MS]',
    ano: 2026,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - FCC 2026',
    alternativas: [],
    gabarito: '',
    video: '-4aSlr4561g'
});

/* UNIFIL 2023 */

RESOLUCAO({
    banca: 'UNIFIL 2023',
    concurso: 'Concurso Prefeitura de Fazenda Rio Grande',
    ano: 2023,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - UNIFIL 2023',
    alternativas: [],
    gabarito: '',
    video: 'jgH7TqLoGJg'
});

RESOLUCAO({
    banca: 'UNIFIL 2023',
    concurso: 'Concurso Prefeitura de Fazenda Rio Grande',
    ano: 2023,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 02 - UNIFIL 2023',
    alternativas: [],
    gabarito: '',
    video: 'ac6Sd68J2Y4'
});

/* UNESP 2020 */

RESOLUCAO({
    banca: 'UNESP 2020',
    concurso: 'Concurso Vestibular UNESP 2020',
    ano: 2020,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - UNESP 2020',
    alternativas: [],
    gabarito: '',
    video: 'bLzQUh6RKVg'
});

/* FAFIPA 2026 */

RESOLUCAO({
    banca: 'FAFIPA 2026',
    concurso: 'Concurso Prefeitura de Rio Branco do Sul - PR',
    ano: 2026,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - FAFIPA 2026',
    alternativas: [],
    gabarito: '',
    video: 's0hCZx1bZhg'
});

RESOLUCAO({
    banca: 'FAFIPA 2026',
    concurso: 'Concurso Prefeitura de Rio Branco do Sul - PR',
    ano: 2026,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 02 - FAFIPA 2026',
    alternativas: [],
    gabarito: '',
    video: 'eTgD_JSndpI'
});

RESOLUCAO({
    banca: 'FAFIPA 2026',
    concurso: 'Concurso Prefeitura de Rio Branco do Sul - PR',
    ano: 2026,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 03 - FAFIPA 2026',
    alternativas: [],
    gabarito: '',
    video: 'RswiDZUPrNc'
});

/* FCC 2026 */

RESOLUCAO({
    banca: 'FCC 2026',
    concurso: 'Concurso MPE-AP 2026 para Analista Ministerial',
    ano: 2026,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - FCC 2026',
    alternativas: [],
    gabarito: '',
    video: 'y8D32eXrVmI'
});

RESOLUCAO({
    banca: 'FCC 2026',
    concurso: 'Concurso MPE-AP 2026 para Analista Ministerial',
    ano: 2026,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 02 - FCC 2026',
    alternativas: [],
    gabarito: '',
    video: 'zYjO_vRORbc'
});

/* CONSULPLAN 2026 */

RESOLUCAO({
    banca: 'CONSULPLAN 2026',
    concurso: 'Concurso SAAE de Indaiatuba [Técnico em Informática]',
    ano: 2026,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - CONSULPLAN 2026',
    alternativas: [],
    gabarito: '',
    video: 'BH-uCmHlf4w'
});

RESOLUCAO({
    banca: 'CONSULPLAN 2026',
    concurso: 'Concurso SAAE de Indaiatuba [Técnico em Informática]',
    ano: 2026,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 02 - CONSULPLAN 2026',
    alternativas: [],
    gabarito: '',
    video: 'yHGOrWxz37A'
});

/* CESGRANRIO 2024 */

RESOLUCAO({
    banca: 'CESGRANRIO 2024',
    concurso: 'Concurso Caixa Econômica Federal',
    ano: 2024,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - CESGRANRIO 2024',
    alternativas: [],
    gabarito: '',
    video: 'OZfSvd1zQ64'
});

/* IGECAP 2025 */

RESOLUCAO({
    banca: 'IGECAP 2025',
    concurso: 'Concurso Caixa Econômica Federal',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - IGECAP 2025',
    alternativas: [],
    gabarito: '',
    video: 'ZiUi_1JFJrw'
});

RESOLUCAO({
    banca: 'IGECAP 2025',
    concurso: 'Concurso Caixa Econômica Federal',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 02 - IGECAP 2025',
    alternativas: [],
    gabarito: '',
    video: 'QsDs0KUUp5s'
});

RESOLUCAO({
    banca: 'IGECAP 2025',
    concurso: 'Concurso Caixa Econômica Federal',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 03 - IGECAP 2025',
    alternativas: [],
    gabarito: '',
    video: 'QwulciNLza4'
});

RESOLUCAO({
    banca: 'IGECAP 2025',
    concurso: 'Concurso Caixa Econômica Federal',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 04 - IGECAP 2025',
    alternativas: [],
    gabarito: '',
    video: 'mv_2slpOXuM'
});

RESOLUCAO({
    banca: 'IGECAP 2025',
    concurso: 'Concurso Caixa Econômica Federal',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 05 - IGECAP 2025',
    alternativas: [],
    gabarito: '',
    video: 'iOONEjdUNAo'
});



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

/* 11. UNIDADES DE MEDIDA */

FLASH(
  'Unidades de Medida',
  'CONVERSÃO',
  'km, m, cm e mm',
  'Cada degrau de comprimento tem seu fator: 1 km = 1000 m; 1 m = 100 cm; 1 cm = 10 mm. Ex.: 3 km = 3 x 1000 = 3000 m. Cuidado: nem toda conversão é por 100 — de m para cm é x 100, mas de km para m é x 1000. Macete: descendo a escada (unidade maior para menor) você multiplica; subindo, divide.'
);

FLASH(
  'Unidades de Medida',
  'CONVERSÃO',
  'kg, g e mg',
  'Na massa, cada degrau também vale 1000: 1 kg = 1000 g e 1 g = 1000 mg. Ex.: 1,8 kg = 1,8 x 1000 = 1800 g. Cuidado: 0,5 kg são 500 g, não 50 g — cuidado com a posição da vírgula. Macete: de kg para g, a vírgula pula 3 casas para a direita.'
);

FLASH(
  'Unidades de Medida',
  'CONVERSÃO',
  'Litros e Mililitros',
  '1 litro equivale a 1000 mililitros; para converter, multiplique ou divida por 1000. Ex.: 0,6 L = 0,6 x 1000 = 600 mL. Cuidado: meio litro é 500 mL, e não 50 mL. Macete: litro para mL: vírgula anda 3 casas para a direita.'
);

FLASH(
  'Unidades de Medida',
  'CONVERSÃO',
  'Horas, Minutos e Segundos',
  'O tempo funciona em base 60: 1 h = 60 min e 1 min = 60 s — nunca base 100. Ex.: 1 h 45 min = 60 + 45 = 105 minutos. Cuidado: 0,5 h equivale a 30 minutos, e não a 50. Macete: tempo não segue a vírgula decimal — sempre pense em blocos de 60.'
);

FLASH(
  'Unidades de Medida',
  'CONVERSÃO',
  'm² e cm² (Área)',
  'Em área, o fator de conversão vai ao quadrado: 1 m² = 100 cm x 100 cm = 10.000 cm². Ex.: 3 m² = 3 x 10.000 = 30.000 cm². Cuidado: não use apenas x 100 na área — como são duas dimensões, o fator correto é 100². Macete: unidade elevada ao quadrado pede fator de conversão elevado ao quadrado também.'
);

FLASH(
  'Unidades de Medida',
  'CONVERSÃO',
  'm³ e Litros (Volume)',
  '1 m³ equivale a 1000 litros; para converter, multiplique ou divida por 1000. Ex.: 1,2 m³ = 1,2 x 1000 = 1200 L. Cuidado: não confunda m³ (volume, três dimensões) com m² (área, duas dimensões). Macete: metro cúbico é uma caixa de 1000 litros — o expoente 3 pede o fator 1000.'
);

FLASH(
  'Unidades de Medida',
  'REGRA PRÁTICA',
  'Conversões Mais Cobradas',
  'Memorize os fatores clássicos: 1 km = 1000 m, 1 m = 100 cm, 1 kg = 1000 g, 1 L = 1000 mL, 1 m³ = 1000 L. Ex.: 4 L = 4 x 1000 = 4000 mL. Cuidado: antes de somar grandezas diferentes, deixe todas na mesma unidade. Macete: quase tudo é fator 1000; a exceção clássica é metro para centímetro, que é fator 100.'
);

FLASH(
  'Unidades de Medida',
  'ERRO COMUM',
  'Somar Unidades Diferentes',
  'Só é possível somar grandezas que já estão na mesma unidade — sempre converta antes. Ex.: 2 m + 30 cm = 200 cm + 30 cm = 230 cm (ou 2,3 m). Cuidado: 2 + 30 nunca resulta em "32 metros" — isso mistura metro com centímetro. Macete: antes de somar, coloque tudo na régua da mesma unidade.'
);

FLASH(
  'Unidades de Medida',
  'CONVERSÃO',
  'cm para m e m para cm',
  'De cm para m, divida por 100; de m para cm, multiplique por 100. Ex.: 480 cm = 480 ÷ 100 = 4,8 m; e 4,8 m = 4,8 x 100 = 480 cm. Cuidado: indo de unidade menor para maior, o número sempre diminui; o inverso, ele aumenta. Macete: a vírgula anda 2 casas para a esquerda subindo, para a direita descendo.'
);

FLASH(
  'Unidades de Medida',
  'CONVERSÃO',
  'kg para g e g para kg',
  'De kg para g, multiplique por 1000; de g para kg, divida por 1000. Ex.: 0,75 kg = 750 g; e 750 g = 0,75 kg. Cuidado: a vírgula sempre anda 3 casas nessa conversão, nunca 2. Macete: kg e g estão a "três degraus" de distância — sempre x 1000 ou ÷ 1000.'
);

FLASH(
  'Unidades de Medida',
  'CONVERSÃO',
  'L para mL e mL para L',
  'De litro para mililitro, multiplique por 1000; o caminho inverso é dividir por 1000. Ex.: 2,3 L = 2300 mL; e 2300 mL = 2,3 L. Cuidado: mL é sempre um número "maior" que a mesma quantidade em litros. Macete: litro e mililitro são vizinhos de três casas decimais.'
);

FLASH(
  'Unidades de Medida',
  'CONFERÊNCIA',
  'Conferir a Unidade da Resposta',
  'Antes de marcar a alternativa, confirme se sua resposta está na mesma unidade que a pergunta pediu. Ex.: se o cálculo deu 3500 g mas a pergunta quer em kg, a resposta certa é 3,5 kg, não 3500. Cuidado: muitas questões têm alternativas erradas propositalmente na unidade trocada. Macete: termine toda questão de conversão perguntando: "isso está na unidade pedida?"'
);

/* 12. ÁREA E PERÍMETRO */

FLASH(
  'Área e Perímetro',
  'FÓRMULA',
  'Perímetro',
  'Perímetro é a soma de todos os lados de uma figura — use quando o enunciado falar em contorno, cerca ou borda. Ex.: retângulo de 6 m por 4 m: P = 6 + 4 + 6 + 4 = 20 m. Cuidado: perímetro é medida de comprimento; a resposta nunca sai em unidade ao quadrado. Macete: imagine uma formiga andando pela borda da figura — a distância que ela percorre é o perímetro.'
);

FLASH(
  'Área e Perímetro',
  'FÓRMULA',
  'Área',
  'Área mede a superfície interna de uma figura; em retângulos, multiplique base por altura. Ex.: retângulo de 6 m por 4 m: A = 6 x 4 = 24 m². Cuidado: área sempre sai em unidade ao quadrado — se não veio com o "2", provavelmente é perímetro. Macete: área preenche o interior da figura, então ganha o expoente "2".'
);

FLASH(
  'Área e Perímetro',
  'FÓRMULA',
  'Área do Quadrado',
  'Como todos os lados do quadrado são iguais, sua área é o lado multiplicado por ele mesmo. Ex.: quadrado de lado 7 cm: A = 7 x 7 = 49 cm². Cuidado: 4 x lado calcula o perímetro, não a área. Macete: quadrado tem lado ao quadrado — o próprio nome já entrega a fórmula.'
);

FLASH(
  'Área e Perímetro',
  'FÓRMULA',
  'Área do Retângulo',
  'Multiplique base por altura, os dois lados que formam o ângulo reto entre si. Ex.: retângulo de base 9 m e altura 3 m: A = 9 x 3 = 27 m². Cuidado: use sempre os dois lados perpendiculares, não dois lados paralelos e iguais. Macete: conte quantos quadradinhos de lado 1 cabem dentro da figura — isso é base vezes altura.'
);

FLASH(
  'Área e Perímetro',
  'FÓRMULA',
  'Área do Triângulo',
  'Multiplique base por altura e divida o resultado por 2, já que o triângulo é metade de um retângulo. Ex.: base 12 e altura 5: A = 12 x 5 ÷ 2 = 30. Cuidado: esquecer de dividir por 2 dobra a área calculada e erra a questão. Macete: triângulo é sempre "meio retângulo" — base vezes altura, cortado ao meio.'
);

FLASH(
  'Área e Perímetro',
  'FÓRMULA',
  'Área do Paralelogramo',
  'Área = base x altura, usando a altura perpendicular à base, e não o lado inclinado. Ex.: base 10 e altura 6: A = 10 x 6 = 60. Cuidado: a altura é a distância reta entre as duas bases, nunca o comprimento do lado tombado. Macete: empurre mentalmente o "triângulo sobrando" para o outro lado e a figura vira um retângulo.'
);

FLASH(
  'Área e Perímetro',
  'FÓRMULA',
  'Área do Trapézio',
  'Some as duas bases, multiplique pela altura e divida o resultado por 2. Ex.: bases 8 e 12, altura 5: A = (8 + 12) x 5 ÷ 2 = 50. Cuidado: as duas bases precisam ser somadas antes de multiplicar pela altura, nunca separadamente. Macete: o trapézio vira um "retângulo médio" quando você usa a média das duas bases.'
);

FLASH(
  'Área e Perímetro',
  'FÓRMULA',
  'Circunferência e Círculo',
  'O contorno do círculo é C = 2πr; a área é A = πr² — as duas fórmulas usam sempre o raio. Ex.: círculo de raio 4: A = π x 4² = 16π ≈ 50,24. Cuidado: se o enunciado der o diâmetro, divida por 2 antes de usar qualquer fórmula. Macete: contorno usa o raio "puro"; área usa o raio elevado ao quadrado.'
);

FLASH(
  'Área e Perímetro',
  'COMPARAÇÃO',
  'Área x Perímetro',
  'Perímetro é o contorno da figura; área é o espaço que ela ocupa por dentro — grandezas diferentes. Ex.: cercar um terreno pede perímetro; forrar o chão desse mesmo terreno pede área. Cuidado: perímetro sai em unidade linear (m); área sai em unidade quadrada (m²) — confira a unidade pedida. Macete: contorno é perímetro; miolo é área.'
);

FLASH(
  'Área e Perímetro',
  'INTERPRETAÇÃO DE PROVA',
  'Cerca, Piso, Parede e Pintura',
  'Palavras como "cerca" e "moldura" pedem perímetro; "piso", "parede" e "pintura" pedem área. Ex.: pintar uma parede de 5 m x 3 m: área = 5 x 3 = 15 m². Cuidado: só desconte portas e janelas da área se o próprio enunciado mandar fazer isso. Macete: se a palavra descreve "contornar", é perímetro; se descreve "cobrir", é área.'
);

/* 13. VOLUME */

FLASH(
  'Volume',
  'FÓRMULA',
  'Volume do Bloco Retangular',
  'Multiplique as três dimensões: comprimento, largura e altura. Ex.: bloco de 5 m x 3 m x 2 m: V = 30 m³. Cuidado: volume sempre usa três medidas; com apenas duas, o que se calcula é área. Macete: três dimensões dão três fatores e o expoente "3" na unidade final.'
);

FLASH(
  'Volume',
  'FÓRMULA',
  'Volume do Cubo',
  'Como as arestas do cubo são todas iguais, o volume é o lado multiplicado por ele mesmo três vezes. Ex.: cubo de lado 4 cm: V = 4 x 4 x 4 = 64 cm³. Cuidado: lado x lado calcula apenas a área de uma face; falta multiplicar pelo terceiro lado. Macete: cubo tem lado ao cubo — o nome já entrega o expoente correto.'
);

FLASH(
  'Volume',
  'REGRA PRÁTICA',
  'Capacidade',
  'Capacidade é quanto um recipiente comporta, geralmente expressa em litros, mL ou m³. Ex.: uma caixa d\'água de 2 m³ comporta 2 x 1000 = 2000 litros. Cuidado: volume e capacidade descrevem o mesmo espaço; só a unidade de medida muda. Macete: capacidade é o volume visto pelo lado do líquido que cabe dentro do objeto.'
);

FLASH(
  'Volume',
  'CONVERSÃO',
  'Litro e m³',
  'Cada metro cúbico equivale a 1000 litros; multiplique por 1000 para ir de m³ para litros. Ex.: 0,9 m³ = 0,9 x 1000 = 900 L. Cuidado: não confunda m³ (volume) com m² (área) — são grandezas diferentes. Macete: 1 m³ = 1000 L é o mesmo "mil" de quase toda conversão métrica.'
);

FLASH(
  'Volume',
  'COMPARAÇÃO',
  'Área x Volume',
  'Área mede uma superfície (duas dimensões); volume mede um espaço interno (três dimensões). Ex.: o tampo de uma mesa usa área; uma caixa que se enche de água usa volume. Cuidado: unidade ao quadrado (cm²) nunca serve para volume, que exige unidade ao cubo (cm³). Macete: "2" mede o chão; "3" mede tudo o que cabe dentro.'
);

/* 14. GRÁFICOS E TABELAS */

FLASH(
  'Gráficos e Tabelas',
  'INTERPRETAÇÃO DE PROVA',
  'Leitura de Eixo',
  'Antes de responder, observe o que cada eixo representa e em qual unidade os valores estão marcados. Ex.: se o eixo vertical está em centenas, a marca "4" representa 4 x 100 = 400. Cuidado: ler o número da marca sem checar a unidade do eixo é o erro mais comum em gráficos. Macete: primeiro entenda a unidade do eixo, só depois leia o número.'
);

FLASH(
  'Gráficos e Tabelas',
  'REGRA PRÁTICA',
  'Escala do Gráfico',
  'Cada intervalo entre marcas do gráfico pode valer 1, 10, 100 ou outro número — sempre confira antes de ler. Ex.: se cada marca vale 25, a 3ª marca representa 3 x 25 = 75. Cuidado: ignorar a escala do gráfico muda completamente a resposta. Macete: descubra quanto vale um "passo" da escala e multiplique pelo número de passos.'
);

FLASH(
  'Gráficos e Tabelas',
  'INTERPRETAÇÃO DE PROVA',
  'Legenda',
  'A legenda explica o que cada cor, símbolo ou padrão representa dentro do gráfico. Ex.: barras escuras podem indicar o ano de 2024 e barras claras o ano de 2025. Cuidado: sem checar a legenda, é fácil comparar categorias erradas e errar a questão. Macete: legenda é o "dicionário" do gráfico — sempre leia antes de comparar valores.'
);

FLASH(
  'Gráficos e Tabelas',
  'COMPARAÇÃO',
  'Barras, Linhas e Setores',
  'Gráficos de barras comparam categorias; gráficos de linha mostram evolução no tempo; setores mostram partes de um todo. Ex.: vendas mês a mês combinam com linha; participação de cada produto no total combina com setores. Cuidado: não procure "tendência ao longo do tempo" num gráfico de barras que só compara categorias. Macete: barra compara, linha conta uma história ao longo do tempo, e o setor reparte um total.'
);

FLASH(
  'Gráficos e Tabelas',
  'FÓRMULA',
  'Variação entre Valores',
  'A variação é sempre o valor final menos o valor inicial; o sinal do resultado mostra se houve aumento ou queda. Ex.: de 140 para 165: variação = 165 - 140 = 25. Cuidado: respeite sempre a ordem "final menos inicial", nunca o contrário. Macete: onde chegou menos de onde partiu: resultado positivo é alta, negativo é queda.'
);

FLASH(
  'Gráficos e Tabelas',
  'REGRA PRÁTICA',
  'Total em Tabela',
  'Some apenas as categorias ou períodos que a pergunta realmente pede, nem mais nem menos. Ex.: se a pergunta pede o total do fim de semana, some só sábado e domingo. Cuidado: incluir dados fora do que foi pedido é um erro clássico de leitura apressada. Macete: antes de somar, releia exatamente quais linhas ou colunas a pergunta está citando.'
);

FLASH(
  'Gráficos e Tabelas',
  'COMPARAÇÃO',
  'Comparar Categorias em Tabela',
  'Localize os valores certos na tabela e subtraia um do outro quando a pergunta pedir a diferença entre categorias. Ex.: categoria A com 52 e categoria B com 37: diferença = 52 - 37 = 15. Cuidado: se a pergunta pede a diferença, apenas apontar o maior valor não responde à questão. Macete: "diferença entre categorias" é sempre convite para uma subtração, nunca para uma escolha simples.'
);

/* 15. MÉDIA, MODA E MEDIANA */

FLASH(
  'Média, Moda e Mediana',
  'FÓRMULA',
  'Média Aritmética',
  'A média é a soma de todos os valores dividida pela quantidade de valores. Ex.: para 5, 9 e 13: (5 + 9 + 13) ÷ 3 = 27 ÷ 3 = 9. Cuidado: somar os valores e esquecer de dividir pela quantidade é só metade do trabalho. Macete: soma tudo, depois reparte igual entre todos — é como nivelar um monte de blocos.'
);

FLASH(
  'Média, Moda e Mediana',
  'REGRA PRÁTICA',
  'Moda',
  'Moda é o valor que mais aparece em um conjunto de dados; pode não existir ou existir mais de uma. Ex.: em 4, 7, 7, 9, 12, o valor 7 se repete duas vezes, então a moda é 7. Cuidado: moda não é o maior valor nem o valor do meio — é apenas o mais frequente. Macete: moda é o "mais popular" da lista: quem se repete mais vezes.'
);

FLASH(
  'Média, Moda e Mediana',
  'REGRA PRÁTICA',
  'Mediana com Quantidade Ímpar',
  'Com quantidade ímpar de valores, ordene tudo do menor para o maior e a mediana é o valor exatamente do meio. Ex.: em 3, 6, 8 (já ordenados), o valor central é 6, então a mediana é 6. Cuidado: buscar o "meio" sem ordenar a lista primeiro dá mediana errada. Macete: enfileire os valores em ordem e olhe direto para o centro da fila.'
);

FLASH(
  'Média, Moda e Mediana',
  'FÓRMULA',
  'Mediana com Quantidade Par',
  'Com quantidade par de valores, ordene tudo e a mediana é a média dos dois valores centrais. Ex.: em 2, 5, 7, 10, os centrais são 5 e 7: mediana = (5 + 7) ÷ 2 = 6. Cuidado: escolher só um dos dois valores do meio não é mediana — é preciso fazer a média dos dois. Macete: sobraram dois no centro da fila? Some os dois e divida por 2.'
);

FLASH(
  'Média, Moda e Mediana',
  'FÓRMULA',
  'Amplitude',
  'A amplitude mostra o quanto os dados se espalham, sendo igual ao maior valor menos o menor valor do conjunto. Ex.: em 9, 14, 22: amplitude = 22 - 9 = 13. Cuidado: amplitude não é média nem mediana — é apenas a distância entre o topo e a base dos dados. Macete: amplitude é o "tamanho da régua": o valor mais alto menos o mais baixo.'
);

FLASH(
  'Média, Moda e Mediana',
  'COMPARAÇÃO',
  'Valor Extremo e Média',
  'Um valor muito diferente dos demais (extremo) distorce bastante a média, mas quase não afeta a mediana. Ex.: em 8, 9, 10, 11, 62, a média é 100 ÷ 5 = 20, mas a mediana continua sendo 10. Cuidado: confiar apenas na média quando existe um valor muito fora do padrão pode enganar a interpretação. Macete: um valor fora da curva "puxa" a média para longe, mas quase não move a mediana.'
);

/* 16. MATEMÁTICA FINANCEIRA */

FLASH(
  'Matemática Financeira',
  'FÓRMULA',
  'Juros Simples',
  'Nos juros simples, o juro incide sempre sobre o capital inicial, seguindo a fórmula J = capital x taxa x tempo. Ex.: R$ 800 a 3% ao mês por 4 meses: J = 800 x 0,03 x 4 = R$ 96. Cuidado: usar a taxa como número inteiro (3) em vez de decimal (0,03) estoura o resultado. Macete: a taxa entra sempre em forma decimal na fórmula — nunca no formato "puro" de porcentagem.'
);

FLASH(
  'Matemática Financeira',
  'FÓRMULA',
  'Montante',
  'Montante é o valor total acumulado ao final, ou seja, o capital inicial somado aos juros gerados. Ex.: capital de R$ 500 com R$ 90 de juros: montante = 500 + 90 = R$ 590. Cuidado: responder apenas o valor dos juros não é o mesmo que responder o montante. Macete: montante é o pacote inteiro: capital que entrou mais o que ele rendeu.'
);

FLASH(
  'Matemática Financeira',
  'REGRA PRÁTICA',
  'Capital, Taxa e Tempo',
  'Capital é o valor inicial aplicado, taxa é o percentual de rendimento e tempo é o período considerado — os três precisam estar na mesma unidade. Ex.: R$ 1.000 a 2% ao mês por 5 meses: capital = 1.000, taxa = 2%, tempo = 5 meses. Cuidado: uma taxa mensal aplicada a um tempo em anos gera resultado incorreto. Macete: taxa "ao mês" pede tempo contado em meses — as duas unidades sempre andam juntas.'
);

FLASH(
  'Matemática Financeira',
  'FÓRMULA',
  'Desconto Simples',
  'O desconto é o valor abatido do preço original; o preço final é o que sobra depois desse abatimento. Ex.: R$ 180 com desconto de R$ 25: preço final = 180 - 25 = R$ 155. Cuidado: o valor do desconto é diferente do valor que efetivamente será pago. Macete: desconto é o pedaço que sai; preço final é o que fica na conta.'
);

FLASH(
  'Matemática Financeira',
  'COMPARAÇÃO',
  'À Vista x Parcelado',
  'Para decidir a melhor opção, compare o custo total das duas formas: o preço à vista contra a soma de todas as parcelas. Ex.: à vista R$ 420; parcelado em 5x de R$ 95 = R$ 475. À vista economiza R$ 55. Cuidado: comparar o preço à vista com apenas uma parcela, e não com a soma total, engana a decisão. Macete: some todas as parcelas primeiro — só então compare total contra total.'
);

FLASH(
  'Matemática Financeira',
  'ERRO COMUM',
  'Taxas Escondidas',
  'Frete, taxa de serviço e outras cobranças extras fazem parte do custo real e devem entrar na conta final. Ex.: produto de R$ 150 + taxa de entrega de R$ 20 = custo final de R$ 170. Cuidado: o preço anunciado nem sempre é o valor final que sai do bolso. Macete: antes de comparar preços, sempre pergunte: "e as taxas extras, entraram na conta?"'
);

FLASH(
  'Matemática Financeira',
  'REGRA PRÁTICA',
  'Preço Final de uma Oferta',
  'Para achar o preço final, some tudo que aumenta o valor e subtraia tudo que reduz, numa única conta completa. Ex.: R$ 250 com desconto de R$ 20 e taxa de entrega de R$ 15: 250 - 20 + 15 = R$ 245. Cuidado: parar apenas no desconto e esquecer taxas extras dá um preço final incorreto. Macete: desconto empurra o preço para baixo, taxa empurra para cima — feche a conta antes de decidir.'
);

/* ===== FLASHCARDS COMPLEMENTARES ===== */

FLASH(
  'Fundamentos da matemática',
  'Conjuntos numéricos',
  'Diferença entre número racional e irracional',
  'Racional pode ser escrito como fração (incluindo decimais exatos e dízimas periódicas); irracional não vira fração e tem casas decimais infinitas sem repetição periódica (ex.: √2, π).'
);

FLASH(
  'Operações fundamentais',
  'Potenciação e radiciação',
  'Multiplicação e divisão de potências de mesma base',
  'Mesma base na multiplicação: soma os expoentes (aᵐ · aⁿ = aᵐ⁺ⁿ). Mesma base na divisão: subtrai os expoentes (aᵐ ÷ aⁿ = aᵐ⁻ⁿ, com a ≠ 0).'
);

FLASH(
  'Operações fundamentais',
  'Potenciação e radiciação',
  'Potência de potência e expoente zero',
  'Potência de potência: multiplica os expoentes ((aᵐ)ⁿ = aᵐ·ⁿ). Qualquer base não nula elevada a 0 vale 1 (a⁰ = 1, para a ≠ 0).'
);

FLASH(
  'Divisibilidade',
  'MMC e MDC',
  'Quando usar MMC e quando usar MDC?',
  'MMC costuma aparecer em encontros, ciclos e tempos coincidentes; MDC aparece em divisões em partes iguais do maior tamanho possível, sem sobras.'
);

FLASH(
  'Frações',
  'CONVERSÃO',
  'Como comparar frações com denominadores e numeradores diferentes?',
  'Transforme para denominadores iguais (usando o MMC) ou converta para forma decimal dividindo numerador pelo denominador.'
);

FLASH(
  'Porcentagem',
  'INTERPRETAÇÃO DE PROVA',
  'Pontos percentuais x variação percentual',
  'Se algo passa de 10% para 15%, subiu 5 pontos percentuais, mas a variação percentual em relação ao valor inicial foi de (15 - 10) ÷ 10 = 50%.'
);

FLASH(
  'Razão e Proporção',
  'INTERPRETAÇÃO DE PROVA',
  'Unidades compatíveis em velocidade e densidade',
  'Antes de dividir, confira se as unidades batem com o que a questão pede (ex.: km e h para km/h; converter minutos para horas quando necessário).'
);

FLASH(
  'Regra de Três',
  'ERRO COMUM',
  'Quando a regra de três simples não resolve direto?',
  'Quando a relação não é proporcional (ex.: idade de duas pessoas ao longo dos anos) ou quando há três ou mais grandezas variando juntas (caso de regra de três composta).'
);

FLASH(
  'Equações Simples',
  'INTERPRETAÇÃO DE PROVA',
  'Armadilha do sinal de menos antes de parênteses',
  'O sinal de menos fora dos parênteses troca o sinal de todos os termos internos: -(x - 4) = -x + 4.'
);

FLASH(
  'Unidades de Medida',
  'CONVERSÃO',
  'Por que 1 m² = 10.000 cm² e 1 m³ = 1.000.000 cm³?',
  'Porque a conversão linear (1 m = 100 cm) é elevada ao quadrado na área (100² = 10.000) e ao cubo no volume (100³ = 1.000.000).'
);

FLASH(
  'Área e Perímetro',
  'FÓRMULA',
  'Base e altura sempre formam 90°',
  'Em triângulos, paralelogramos e trapézios, a altura é sempre o segmento perpendicular à base — nunca um lado inclinado.'
);

FLASH(
  'Gráficos e Tabelas',
  'INTERPRETAÇÃO DE PROVA',
  'Eixo que não começa no zero',
  'Quando o eixo começa acima de zero, as diferenças visuais entre barras ou pontos parecem maiores do que realmente são — confira sempre os valores exatos.'
);

FLASH(
  'Média, Moda e Mediana',
  'INTERPRETAÇÃO DE PROVA',
  'Como escolher entre média e mediana?',
  'A média considera todos os valores e sofre influência de extremos; a mediana representa a posição central após ordenar os dados e resiste melhor a valores fora do padrão.'
);

FLASH(
  'Matemática Financeira',
  'FÓRMULA',
  'Juros simples x montante na mesma conta',
  'Calcule primeiro os juros (J = C · i · t) e, se a questão pedir o total final, some ao capital (M = C + J).'
);

/* ===== FLASHCARDS COMPLETOS — ESTRATÉGIA, LEITURA E TÓPICOS EXTRAS ===== */

FLASH(
  'Fundamentos da matemática',
  'Conjuntos numéricos',
  'Zero é par ou ímpar? E positivo ou negativo?',
  'Zero é um número par (pois é divisível por 2, deixando resto 0) e neutro em relação ao sinal (não é nem positivo nem negativo).'
);

FLASH(
  'Fundamentos da matemática',
  'Conjuntos numéricos',
  'Números primos: o que são e quais são os primeiros?',
  'Primos são números naturais maiores que 1 que têm apenas dois divisores: 1 e ele mesmo. Primeiros primos: 2, 3, 5, 7, 11, 13, 17, 19... (2 é o único primo par).'
);

FLASH(
  'Operações fundamentais',
  'Potenciação e radiciação',
  'Expoente negativo e expoente fracionário',
  'Expoente negativo inverte a base: a⁻ⁿ = 1 / aⁿ (com a ≠ 0). Expoente fracionário vira raiz: a^(1/n) = ⁿ√a.'
);

FLASH(
  'Operações fundamentais',
  'Potenciação e radiciação',
  'Raiz quadrada de número ao quadrado: √(x²)',
  '√(x²) = |x| (módulo de x), pois o resultado de raiz quadrada principal não é negativo. Ex.: √((-5)²) = √25 = 5.'
);

FLASH(
  'Divisibilidade',
  'Critérios de divisibilidade',
  'Critérios rápidos por 2, 5, 10 e 9',
  'Por 2: termina em algarismo par. Por 5: termina em 0 ou 5. Por 10: termina em 0. Por 9: soma dos algarismos é divisível por 9.'
);

FLASH(
  'Divisibilidade',
  'MMC e MDC',
  'Relação entre MMC e MDC de dois números',
  'Para dois números a e b: MMC(a, b) · MDC(a, b) = a · b. Quando não têm fatores primos comuns além de 1, o MDC é 1 e o MMC é o produto deles.'
);

FLASH(
  'Frações',
  'CONVERSÃO',
  'Dízima periódica simples x composta',
  'Na dízima simples, a repetição começa logo após a vírgula (ex.: 0,272727...). Na composta, há algarismos não periódicos entre a vírgula e o período (ex.: 0,1444...).'
);

FLASH(
  'Decimais',
  'ERRO COMUM',
  'Multiplicar ou dividir decimais sem perder a vírgula',
  'Na multiplicação de decimais, some o total de casas decimais dos fatores e coloque esse total no resultado. Na divisão, iguale as casas decimais com zeros antes de eliminar a vírgula.'
);

FLASH(
  'Porcentagem',
  'INTERPRETAÇÃO DE PROVA',
  'Fator de atualização (multiplicador)',
  'Aumentar em i% equivale a multiplicar por (1 + i/100); reduzir em i% equivale a multiplicar por (1 - i/100). Facilita cálculos em cadeia e juros.'
);

FLASH(
  'Porcentagem',
  'INTERPRETAÇÃO DE PROVA',
  'Como descobrir quantos por cento A é de B?',
  'Divida A por B e multiplique por 100: (A ÷ B) · 100%. Ex.: 18 de 72 → (18 ÷ 72) · 100 = 0,25 · 100 = 25%.'
);

FLASH(
  'Razão e Proporção',
  'REGRA PRÁTICA',
  'Divisão diretamente proporcional em partes',
  'Para dividir um total T em partes proporcionais a a, b e c: calcule a constante k = T ÷ (a + b + c) e multiplique k por cada parte (ka, kb, kc).'
);

FLASH(
  'Regra de Três',
  'REGRA PRÁTICA',
  'Como resolver regra de três composta com segurança?',
  'Isole a coluna do x e compare cada outra grandeza isoladamente com a coluna do x: se for diretamente proporcional, mantém a razão; se for inversamente proporcional, inverte a fração antes de multiplicar.'
);

FLASH(
  'Equações Simples',
  'INTERPRETAÇÃO DE PROVA',
  'Quando um problema não tem solução ou tem infinitas soluções?',
  'Após simplificar, se sobrar uma igualdade falsa (ex.: 0 = 5), não há solução (impossível). Se sobrar uma identidade verdadeira (ex.: 0 = 0), qualquer valor serve (infinitas soluções).'
);

FLASH(
  'Unidades de Medida',
  'CONVERSÃO',
  'Escala de comprimento completa (do km ao mm)',
  'km → hm → dam → m → dm → cm → mm. Cada passo para a direita multiplica por 10; cada passo para a esquerda divide por 10.'
);

FLASH(
  'Área e Perímetro',
  'FÓRMULA',
  'Área do losango e setor circular',
  'Losango: A = (D · d) ÷ 2 (diagonal maior vezes diagonal menor, dividido por 2). Setor de ângulo α em graus: A = (α ÷ 360°) · πr².'
);

FLASH(
  'Volume',
  'FÓRMULA',
  'Volume do cilindro e do prisma reto',
  'Em prismas retos e cilindros, o volume é sempre Área da base × altura (V = Ab · h). No cilindro circular: V = πr²h.'
);

FLASH(
  'Gráficos e Tabelas',
  'INTERPRETAÇÃO DE PROVA',
  'Percentual em gráfico de setores (pizza)',
  'O círculo inteiro corresponde a 100% e a 360°. Para converter ângulo em porcentagem: (ângulo ÷ 360°) · 100%. Para achar o ângulo: (% ÷ 100) · 360°.'
);

FLASH(
  'Média, Moda e Mediana',
  'FÓRMULA',
  'Média ponderada',
  'Quando os valores têm pesos diferentes, multiplique cada valor pelo seu peso, some esses produtos e divida pela soma dos pesos: Mp = Σ(vᵢ · pᵢ) ÷ Σpᵢ.'
);

FLASH(
  'Matemática Financeira',
  'FÓRMULA',
  'Juros simples: isolando Capital, Taxa ou Tempo',
  'A partir de J = C · i · t: C = J ÷ (i · t); i = J ÷ (C · t); t = J ÷ (C · i) — mantendo i e t na mesma unidade de tempo (ex.: ambos ao mês).'
);

FLASH(
  'Matemática Financeira',
  'INTERPRETAÇÃO DE PROVA',
  'Aumento percentual real x inflação',
  'Quando há ganho nominal e inflação, o ganho real não é a simples subtração das taxas: fator real = (1 + i_nominal) ÷ (1 + i_inflação) - 1.'
);

/* 17. PROBABILIDADE E ANÁLISE COMBINATÓRIA */

FLASH(
  'Probabilidade e Análise Combinatória',
  'FÓRMULA',
  'Probabilidade Básica',
  'Probabilidade é a razão entre o número de casos favoráveis e o número de casos possíveis: P = favoráveis ÷ possíveis. Ex.: tirar número par em um dado comum: P = 3/6 = 1/2 = 50%. Cuidado: o resultado da probabilidade está sempre entre 0 (impossível) e 1 (certo). Macete: o que você quer em cima, o total que pode acontecer embaixo.'
);

FLASH(
  'Probabilidade e Análise Combinatória',
  'REGRA PRÁTICA',
  'Evento Complementar (Pelo Menos Um)',
  'A probabilidade de algo NÃO acontecer é 1 menos a probabilidade de acontecer: P(não A) = 1 - P(A). Ex.: se a chance de chover é 30%, a chance de não chover é 100% - 30% = 70%. Cuidado: questões com "pelo menos um" ficam muito mais fáceis calculando "1 - nenhum". Macete: tudo junto soma 100% — tire o que não serve.'
);

FLASH(
  'Probabilidade e Análise Combinatória',
  'REGRA PRÁTICA',
  'Regra do "E" x Regra do "OU"',
  'Na probabilidade, "E" (eventos independentes simultâneos ou em sequência) multiplica as chances; "OU" (eventos mutuamente exclusivos) soma as chances. Ex.: cara E cara em duas moedas: 1/2 x 1/2 = 1/4. Cuidado: se dois eventos podem acontecer juntos no "OU", subtraia a interseção para não contar duas vezes. Macete: "E" multiplica (exige mais condições, diminui a chance); "OU" soma (abre opções, aumenta a chance).'
);

FLASH(
  'Probabilidade e Análise Combinatória',
  'REGRA PRÁTICA',
  'Princípio Fundamental da Contagem (PFC)',
  'Se uma decisão tem m opções e a seguinte tem n opções, o total de combinações é m x n. Ex.: 4 camisas e 3 calças geram 4 x 3 = 12 conjuntos diferentes. Cuidado: não some as opções das etapas — multiplique etapa por etapa. Macete: abra "tracinhos" para cada escolha e multiplique as possibilidades de cada um.'
);

FLASH(
  'Probabilidade e Análise Combinatória',
  'COMPARAÇÃO',
  'Arranjo x Combinação (A Ordem Importa?)',
  'Quando a ordem dos elementos muda o resultado (pódio, senha, fila), é Arranjo; quando a ordem não muda o grupo (comissão, dupla, salada de frutas), é Combinação. Ex.: escolher presidente e vice é Arranjo; escolher 2 representantes iguais é Combinação. Cuidado: esquecer de dividir pela permutação do grupo na Combinação multiplica demais a resposta. Macete: trocou dois escolhidos de lugar e mudou tudo? Arranjo. Continuou o mesmo grupo? Combinação.'
);

FLASH(
  'Probabilidade e Análise Combinatória',
  'FÓRMULA',
  'Permutação Simples (Anagramas)',
  'Permutar n elementos distintos é organizá-los em todas as ordens possíveis: Pn = n! (n fatorial). Ex.: anagramas da palavra SOL (3 letras distintas): 3! = 3 x 2 x 1 = 6. Cuidado: se houver letras repetidas, divida pelo fatorial de cada repetição (ex.: BANANA → 6! ÷ (3! · 2!)). Macete: permutação é só embaralhar todo mundo — conte o total e faça o fatorial.'
);

FLASH(
  'Probabilidade e Análise Combinatória',
  'ERRO COMUM',
  'Probabilidade com Reposição x Sem Reposição',
  'Com reposição, o total de itens no denominador permanece igual na segunda retirada; sem reposição, o total diminui em 1. Ex.: tirar 2 ases seguidos de 52 cartas sem devolver: (4/52) x (3/51). Cuidado: manter o mesmo denominador quando o enunciado diz "sem reposição" é um erro clássico. Macete: tirou e não devolveu? Diminua 1 do total de baixo (e de cima, se for do mesmo tipo).'
);

/* 18. FUNÇÕES */

FLASH(
  'Funções',
  'REGRA PRÁTICA',
  'O que é uma Função f(x)?',
  'Função é uma regra que associa cada valor de entrada x (domínio) a um único valor de saída y = f(x) (imagem). Ex.: em f(x) = 2x + 3, para x = 4 temos f(4) = 2(4) + 3 = 11. Cuidado: um mesmo x nunca pode gerar dois valores diferentes de y. Macete: pense na função como uma máquina: entra x, aplica a regra e sai f(x).'
);

FLASH(
  'Funções',
  'FÓRMULA',
  'Função do 1º Grau (Afim): f(x) = ax + b',
  'Representa uma reta: "a" é a taxa de variação (inclinação) e "b" é o valor inicial (onde a reta corta o eixo y). Ex.: táxi com bandeirada de R$ 5 e R$ 2 por km: f(x) = 2x + 5. Cuidado: se a > 0, a reta sobe (crescente); se a < 0, a reta desce (decrescente). Macete: "b" é o ponto de partida fixo; "a" é quanto muda a cada 1 unidade de x.'
);

FLASH(
  'Funções',
  'FÓRMULA',
  'Zero (Raiz) da Função do 1º Grau',
  'A raiz da função é o valor de x que zera o y (onde o gráfico corta o eixo x): basta resolver ax + b = 0 → x = -b/a. Ex.: em f(x) = 3x - 12, fazendo 3x - 12 = 0 temos x = 4. Cuidado: não confunda raiz (corta eixo x, y = 0) com termo independente b (corta eixo y, x = 0). Macete: para achar onde corta o eixo x, iguale a função inteira a zero.'
);

FLASH(
  'Funções',
  'FÓRMULA',
  'Função do 2º Grau (Quadrática): f(x) = ax² + bx + c',
  'Seu gráfico é uma parábola: se a > 0, concavidade para cima (tem ponto mínimo); se a < 0, concavidade para baixo (tem ponto máximo). Ex.: f(x) = -x² + 4x tem a = -1 < 0, logo a boca da parábola aponta para baixo. Cuidado: o termo "c" indica exatamente onde a parábola corta o eixo vertical y. Macete: a > 0 faz carinha feliz (∪); a < 0 faz carinha triste (∩).'
);

FLASH(
  'Funções',
  'FÓRMULA',
  'Bhaskara e Discriminante (Delta)',
  'Para achar as raízes de ax² + bx + c = 0: Δ = b² - 4ac e x = (-b ± √Δ) ÷ (2a). Ex.: em x² - 5x + 6 = 0, Δ = 25 - 24 = 1, gerando x = 3 e x = 2. Cuidado: se Δ > 0 há 2 raízes reais; se Δ = 0 há 1 raiz real; se Δ < 0 não há raízes reais. Macete: calcule o Δ separado primeiro — ele avisa quantas vezes a parábola toca o eixo x.'
);

FLASH(
  'Funções',
  'FÓRMULA',
  'Vértice da Parábola (Máximo e Mínimo)',
  'O vértice V(xv, yv) marca o ponto de máximo ou mínimo da função quadrática: xv = -b ÷ (2a) e yv = -Δ ÷ (4a) (ou substitua xv na função). Ex.: em f(x) = x² - 6x + 5, xv = 6 ÷ 2 = 3 e yv = 3² - 18 + 5 = -4. Cuidado: leia bem se a questão pede o x que gera o máximo (xv) ou o valor máximo em si (yv). Macete: xv é o "quando" acontece o pico; yv é "quanto" vale o pico.'
);

FLASH(
  'Funções',
  'INTERPRETAÇÃO DE PROVA',
  'Leitura de Gráfico de Função',
  'Para achar f(k) no gráfico, localize k no eixo horizontal x, suba ou desça até a curva e leia o valor correspondente no eixo vertical y. Ex.: se o ponto (2, 7) está na curva, então f(2) = 7. Cuidado: inverter os eixos x e y na leitura troca a entrada pela saída. Macete: x fica deitado (entrada); y fica em pé (resultado).'
);

/* 19. SEQUÊNCIAS E PROGRESSÕES */

FLASH(
  'Sequências e Progressões',
  'REGRA PRÁTICA',
  'Progressão Aritmética (PA): O que é?',
  'PA é uma sequência em que cada termo é obtido somando uma constante r (razão) ao termo anterior: r = a₂ - a₁. Ex.: 4, 7, 10, 13... é uma PA de razão r = +3. Cuidado: se r > 0 a PA é crescente; se r < 0 é decrescente; se r = 0 é constante. Macete: PA anda sempre em passos iguais de soma ou subtração.'
);

FLASH(
  'Sequências e Progressões',
  'FÓRMULA',
  'Termo Geral da PA',
  'Para achar qualquer termo an da PA sem escrever todos: an = a₁ + (n - 1) · r. Ex.: o 10º termo da PA (2, 6, 10...) é a₁₀ = 2 + 9 · 4 = 38. Cuidado: para ir do 1º ao 10º termo dá-se 9 passos (n - 1), e não 10. Macete: o número de razões somadas é sempre a diferença entre as posições dos termos.'
);

FLASH(
  'Sequências e Progressões',
  'FÓRMULA',
  'Soma dos Termos de uma PA Finita',
  'Some o primeiro termo com o último, multiplique pela quantidade de termos e divida por 2: Sn = (a₁ + an) · n ÷ 2. Ex.: soma de 1 a 10: (1 + 10) · 10 ÷ 2 = 55. Cuidado: é preciso saber ou calcular o último termo an antes de aplicar a fórmula. Macete: junte as pontas (primeiro + último), multiplique pelos termos e corte ao meio.'
);

FLASH(
  'Sequências e Progressões',
  'REGRA PRÁTICA',
  'Progressão Geométrica (PG): O que é?',
  'PG é uma sequência em que cada termo é obtido multiplicando o anterior por uma constante q (razão): q = a₂ ÷ a₁. Ex.: 3, 6, 12, 24... é uma PG de razão q = 2. Cuidado: se 0 < q < 1 (com termos positivos), a PG diminui (decrescente). Macete: PA soma a razão; PG multiplica pela razão.'
);

FLASH(
  'Sequências e Progressões',
  'FÓRMULA',
  'Termo Geral da PG',
  'Para achar qualquer termo an da PG: an = a₁ · q^(n - 1). Ex.: o 5º termo da PG (2, 6, 18...) é a₅ = 2 · 3⁴ = 2 · 81 = 162. Cuidado: resolva primeiro a potência q^(n - 1) antes de multiplicar por a₁. Macete: cada passo multiplica por q — do 1º ao nº termo são (n - 1) multiplicações.'
);

FLASH(
  'Sequências e Progressões',
  'FÓRMULA',
  'Soma da PG Finita e PG Infinita',
  'PG finita: Sn = a₁ · (qⁿ - 1) ÷ (q - 1). PG infinita convergente (|q| < 1): S∞ = a₁ ÷ (1 - q). Ex.: 1 + 1/2 + 1/4 + ... = 1 ÷ (1 - 1/2) = 2. Cuidado: a fórmula da PG infinita só vale quando a razão está entre -1 e 1. Macete: na PG infinita que vai diminuindo, divida o primeiro termo por (1 - razão).'
);

FLASH(
  'Sequências e Progressões',
  'ATALHO DE CÁLCULO',
  'Propriedade do Termo Médio (PA e PG)',
  'Em três termos consecutivos (a, b, c): na PA, o do meio é a média aritmética dos vizinhos (b = (a + c) ÷ 2); na PG, é a média geométrica (b² = a · c). Ex.: na PA (5, x, 17), x = (5 + 17) ÷ 2 = 11. Cuidado: não use média aritmética simples para achar o termo do meio de uma PG. Macete: termo central é sempre o equilíbrio exato entre o vizinho da esquerda e o da direita.'
);

/* 20. GEOMETRIA E TRIGONOMETRIA BÁSICA */

FLASH(
  'Geometria e Trigonometria Básica',
  'FÓRMULA',
  'Teorema de Pitágoras',
  'Em todo triângulo retângulo, o quadrado da hipotenusa (lado oposto ao ângulo de 90°) é igual à soma dos quadrados dos catetos: a² = b² + c². Ex.: catetos 3 e 4 → a² = 9 + 16 = 25 → a = 5. Cuidado: Pitágoras só funciona em triângulos com ângulo reto (90°). Macete: decore o trio clássico 3, 4 e 5 (e seus múltiplos 6, 8, 10) para ganhar tempo.'
);

FLASH(
  'Geometria e Trigonometria Básica',
  'REGRA PRÁTICA',
  'Soma dos Ângulos Internos do Triângulo e Quadrilátero',
  'A soma dos ângulos internos de qualquer triângulo é sempre 180°; em qualquer quadrilátero convexo, é sempre 360°. Ex.: triângulo com ângulos de 50° e 70° tem o terceiro ângulo igual a 180° - 120° = 60°. Cuidado: não importa o formato ou tamanho do triângulo, dentro dele sempre fecha 180°. Macete: triângulo = meia volta (180°); quadrilátero = volta inteira (360°).'
);

FLASH(
  'Geometria e Trigonometria Básica',
  'REGRA PRÁTICA',
  'Semelhança de Triângulos',
  'Triângulos com os mesmos ângulos têm lados correspondentes proporcionais: a razão entre lados homólogos é constante (k). Ex.: se um triângulo tem lados dobrados em relação a outro, todos os seus lados seguem o fator 2. Cuidado: enquanto os lados multiplicam por k, as áreas multiplicam por k². Macete: mesma forma, tamanho diferente — monte a regra de três entre lados correspondentes.'
);

FLASH(
  'Geometria e Trigonometria Básica',
  'FÓRMULA',
  'Seno, Cosseno e Tangente no Triângulo Retângulo',
  'Para um ângulo agudo α: sen(α) = cateto oposto ÷ hipotenusa; cos(α) = cateto adjacente ÷ hipotenusa; tg(α) = cateto oposto ÷ cateto adjacente. Ex.: se oposto = 3, adjacente = 4 e hipotenusa = 5, então sen(α) = 3/5 e tg(α) = 3/4. Cuidado: a hipotenusa é sempre o maior lado e fica oposta ao ângulo de 90°. Macete: SOH-CAH-TOA: Seno = Oposto/Hipotenusa, Cosseno = Adjacente/Hipotenusa, Tangente = Oposto/Adjacente.'
);

FLASH(
  'Geometria e Trigonometria Básica',
  'REGRA PRÁTICA',
  'Ângulos Notáveis (30°, 45° e 60°)',
  'Seno: 30° = 1/2, 45° = √2/2, 60° = √3/2. Cosseno: 30° = √3/2, 45° = √2/2, 60° = 1/2. Tangente: 30° = √3/3, 45° = 1, 60° = √3. Ex.: sen(30°) = cos(60°) = 0,5. Cuidado: não troque seno de 30° (1/2) com cosseno de 30° (√3/2). Macete: cante "1, 2, 3 / 3, 2, 1, tudo sobre 2, raiz no 2 e no 3".'
);

FLASH(
  'Geometria e Trigonometria Básica',
  'COMPARAÇÃO',
  'Ângulos Complementares e Suplementares',
  'Ângulos complementares somam 90° (um completa o ângulo reto); ângulos suplementares somam 180° (formam uma linha reta). Ex.: o complemento de 35° é 55°; o suplemento de 35° é 145°. Cuidado: não confunda 90° com 180° na hora de montar a equação. Macete: C de Complementar vem antes no alfabeto → 90°; S de Suplementar vem depois → 180°.'
);

FLASH(
  'Geometria e Trigonometria Básica',
  'FÓRMULA',
  'Diagonal do Quadrado e Altura do Triângulo Equilátero',
  'Diagonal do quadrado de lado L: d = L√2. Altura do triângulo equilátero de lado L: h = (L√3) ÷ 2. Ex.: quadrado de lado 5 cm tem diagonal d = 5√2 cm. Cuidado: decorar esses dois atalhos evita ter que aplicar Pitágoras toda vez na prova. Macete: quadrado usa √2 (2 dimensões iguais); triângulo equilátero usa √3 (3 lados iguais).'
);





/* ===== MATEMÁTICA MINUTADA ===== */

const MINUTADA = [
    // ARITMÉTICA
    {
        titulo: 'Raiz quadrada',
        video: 'EzAEwgAsbSY',
        descricao: 'Aprenda o conceito de raiz quadrada.',
        materia: 'Aritmética'
    },
    {
        titulo: 'Potência',
        video: 'uUrMBk9luSo',
        descricao: 'Entenda a potenciação.',
        materia: 'Aritmética'
    },
    {
        titulo: 'Valor absoluto',
        video: 'IToMFKfmStI',
        materia: 'Aritmética'
    },
    {
        titulo: 'Número oposto',
        video: 'GBCnli8d9pE',
        materia: 'Aritmética'
    },
    {
        titulo: 'Números pares e ímpares',
        video: 'LW7qUP5v2bU',
        materia: 'Aritmética'
    },
    {
        titulo: 'Números primos',
        video: 'wLu1trfmX50',
        materia: 'Aritmética'
    },
    {
        titulo: 'Número decimal',
        video: 'H3BeLbhJqr8',
        materia: 'Aritmética'
    },
    {
        titulo: 'MMC',
        video: 'NpgZLCoe4dw',
        materia: 'Aritmética'
    },
    {
        titulo: 'MDC',
        video: 'UgOT5F5nR1M',
        materia: 'Aritmética'
    },
    {
        titulo: 'Frações',
        video: 'hyXvm9Kv3Zc',
        materia: 'Aritmética'
    },
    {
        titulo: 'Frações equivalentes',
        video: '3nOHgtAPVHw',
        materia: 'Aritmética'
    },
    {
        titulo: 'Fração imprópria',
        video: 'x833b4Em6fE',
        materia: 'Aritmética'
    },
    {
        titulo: 'Fatorial',
        video: 'joG_V1lVx8s',
        materia: 'Aritmética'
    },
    {
        titulo: 'Fração irredutível',
        video: 'DlNoQjvYa6I',
        materia: 'Aritmética'
    },
    {
        titulo: 'Inverso de um número',
        video: '2bd6Qh_n414',
        materia: 'Aritmética'
    },

    // ÁLGEBRA
    {
        titulo: 'Logaritmo',
        video: 'glRbxM4bkeM',
        materia: 'Álgebra'
    },

    // SEQUÊNCIAS
    {
        titulo: 'PA',
        video: 'HNu5I74tyZA',
        materia: 'Sequências'
    },
    {
        titulo: 'PG',
        video: 'ALy3xapHRlA',
        materia: 'Sequências'
    },

    // ESTATÍSTICA E PROBABILIDADE
    {
        titulo: 'Probabilidade',
        video: 'YvthPMXTxFg',
        materia: 'Estatística e Probabilidade'
    },
    {
        titulo: 'Mediana',
        video: '9rdfv1we_JY',
        materia: 'Estatística e Probabilidade'
    },
    {
        titulo: 'Média',
        video: 'uSy-3sC9T78',
        materia: 'Estatística e Probabilidade'
    },
    {
        titulo: 'Moda',
        video: 'INP12SIgKTs',
        materia: 'Estatística e Probabilidade'
    },

    // PROPORCIONALIDADE
    {
        titulo: 'Regra de três',
        video: 'HdcWI8fklyA',
        materia: 'Proporcionalidade'
    },
    {
        titulo: 'Porcentagem',
        video: '6ms9fQnrCOE',
        descricao: 'Aprenda os fundamentos da porcentagem.',
        materia: 'Matemática Financeira'
    },

    // GEOMETRIA
    {
        titulo: 'Ângulos complementares',
        video: '8heuEiqpTFs',
        materia: 'Geometria'
    },
    {
        titulo: 'Ângulos suplementares',
        video: 't8YYZ2pvzHA',
        materia: 'Geometria'
    },
    {
        titulo: 'Perímetro',
        video: 'OgziWTZAlNY',
        materia: 'Geometria'
    },
    {
        titulo: 'Área',
        video: '5L9ihtjb5Eo',
        materia: 'Geometria'
    },
    {
        titulo: 'Volume',
        video: 'gl2FIIE78S4',
        materia: 'Geometria'
    },

    // MATEMÁTICA FINANCEIRA
    {
        titulo: 'Juros simples',
        video: 'bdfXXVxHmb4',
        materia: 'Matemática Financeira'
    },
    {
        titulo: 'Juros compostos',
        video: 'yuxfUgw_biY',
        materia: 'Matemática Financeira'
    }

].map((item, indice) => ({
    ...item,
    id: slug(item.titulo),
    indice: indice + 1,
    descricao: item.descricao || '',
    categoria: item.materia
}));



/* ===== BIBLIOTECA DE CONTEÚDOS ===== */

const RESUMOS = [

/* =====================================================
   01. FUNDAMENTOS DA MATEMÁTICA
===================================================== */

{
    id: 'conjuntos-numericos',
    titulo: 'Conjuntos numéricos',
    modulo: 'Fundamentos da Matemática',
    conteudo: `
        <h2>1. O que são conjuntos numéricos?</h2>
        <p>São agrupamentos de números que apresentam características em comum. Cada conjunto possui propriedades específicas.</p>

        <h2>2. Números naturais (ℕ)</h2>
        <p>São utilizados principalmente para contar e ordenar elementos.</p>
        <p><b>Representação:</b> ℕ = {0, 1, 2, 3, 4, 5...}</p>

        <h2>3. Números inteiros (ℤ)</h2>
        <p>Incluem os números naturais, seus opostos negativos e o zero.</p>
        <p><b>Representação:</b> ℤ = {..., -3, -2, -1, 0, 1, 2, 3...}</p>

        <h2>4. Números racionais (ℚ)</h2>
        <p>São aqueles que podem ser escritos na forma de fração, com numerador e denominador inteiros e denominador diferente de zero.</p>
        <p><b>Exemplos:</b> 1/2, -3/4, 5, 0,25 e 0,333...</p>
        <p>Possuem representação decimal exata ou periódica.</p>

        <h2>5. Números irracionais (𝕀)</h2>
        <p>Não podem ser representados por uma fração de números inteiros. Sua representação decimal é infinita e não periódica.</p>
        <p><b>Exemplos:</b> √2, √3 e π.</p>

        <h2>6. Números reais (ℝ)</h2>
        <p>São formados pela união dos números racionais e irracionais.</p>
        <p><b>ℝ = ℚ ∪ 𝕀</b></p>

        <h2>7. Relação entre os conjuntos</h2>
        <p><b>ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</b></p>
        <p>Todo número natural é inteiro, todo inteiro é racional e todo racional é real.</p>
        <p>Os irracionais também pertencem aos reais, mas não aos racionais.</p>

        <h2>8. Atenção para as provas</h2>
        <ul>
            <li>O número 1 é natural, inteiro, racional e real.</li>
            <li>O zero é natural na convenção adotada neste material.</li>
            <li>Todo número inteiro pode ser escrito como uma fração de denominador 1.</li>
            <li>Uma dízima periódica é racional.</li>
            <li>Uma decimal infinita não periódica é irracional.</li>
        </ul>

        <div class="dica"><b>DICA RESULTAMATH</b><p>Memorize a sequência ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Cada conjunto está contido no seguinte.</p></div>
    `
},

{
    id: 'operacoes-fundamentais',
    titulo: 'Operações fundamentais',
    modulo: 'Fundamentos da Matemática',
    conteudo: `
        <h2>1. Adição</h2>
        <p>Consiste em reunir duas ou mais quantidades.</p>
        <p><b>Exemplo:</b> 25 + 13 = 38.</p>

        <h3>Propriedades da adição</h3>
        <ul>
            <li><b>Comutativa:</b> a + b = b + a.</li>
            <li><b>Associativa:</b> (a + b) + c = a + (b + c).</li>
            <li><b>Elemento neutro:</b> a + 0 = a.</li>
        </ul>

        <h2>2. Subtração</h2>
        <p>Representa a diferença entre duas quantidades.</p>
        <p><b>Exemplo:</b> 45 - 18 = 27.</p>
        <p>A subtração não é comutativa: 45 - 18 ≠ 18 - 45.</p>

        <h2>3. Multiplicação</h2>
        <p>Representa uma adição de parcelas iguais.</p>
        <p><b>Exemplo:</b> 4 × 6 = 24.</p>

        <h3>Propriedades da multiplicação</h3>
        <ul>
            <li><b>Comutativa:</b> a × b = b × a.</li>
            <li><b>Associativa:</b> (a × b) × c = a × (b × c).</li>
            <li><b>Elemento neutro:</b> a × 1 = a.</li>
            <li><b>Elemento nulo:</b> a × 0 = 0.</li>
            <li><b>Distributiva:</b> a(b + c) = ab + ac.</li>
        </ul>

        <h2>4. Divisão</h2>
        <p>Consiste em repartir uma quantidade em partes iguais ou verificar quantas vezes um número cabe em outro.</p>
        <p><b>Exemplo:</b> 36 ÷ 4 = 9.</p>

        <h3>Elementos da divisão</h3>
        <ul>
            <li>Dividendo: número que será dividido.</li>
            <li>Divisor: número pelo qual dividimos.</li>
            <li>Quociente: resultado da divisão.</li>
            <li>Resto: quantidade que sobra.</li>
        </ul>

        <p><b>Relação fundamental:</b></p>
        <p>D = d × q + r</p>
        <p>Em que D é o dividendo, d é o divisor, q é o quociente e r é o resto.</p>

        <h2>5. Regras de sinais</h2>
        <table>
            <tr><th>Operação</th><th>Sinais</th><th>Resultado</th></tr>
            <tr><td>Multiplicação</td><td>+ e +</td><td>+</td></tr>
            <tr><td>Multiplicação</td><td>- e -</td><td>+</td></tr>
            <tr><td>Multiplicação</td><td>+ e -</td><td>-</td></tr>
            <tr><td>Multiplicação</td><td>- e +</td><td>-</td></tr>
        </table>
        <p>Na divisão, a regra dos sinais é a mesma da multiplicação.</p>

        <h2>6. Adição e subtração com sinais</h2>
        <p><b>Sinais iguais:</b> some os valores e conserve o sinal.</p>
        <p>Exemplo: (-5) + (-3) = -8.</p>
        <p><b>Sinais diferentes:</b> subtraia os módulos e conserve o sinal do número de maior módulo.</p>
        <p>Exemplo: (-9) + 4 = -5.</p>

        <h2>7. Atenção para as provas</h2>
        <ul>
            <li>A divisão por zero não é definida.</li>
            <li>A subtração não é comutativa.</li>
            <li>Multiplicação e divisão possuem a mesma prioridade.</li>
            <li>Não confunda -3² = -9 com (-3)² = 9.</li>
        </ul>

        <div class="dica"><b>DICA RESULTAMATH</b><p>Na multiplicação e na divisão, sinais iguais produzem resultado positivo; sinais diferentes produzem resultado negativo.</p></div>
    `
},

{
    id: 'expressoes-numericas',
    titulo: 'Expressões numéricas',
    modulo: 'Fundamentos da Matemática',
    conteudo: `
        <h2>1. O que são expressões numéricas?</h2>
        <p>São sequências de operações matemáticas que devem ser resolvidas seguindo uma ordem específica.</p>

        <h2>2. Ordem das operações</h2>
        <p>A sequência de resolução é:</p>
        <ol>
            <li>Parênteses ( ).</li>
            <li>Colchetes [ ].</li>
            <li>Chaves { }.</li>
            <li>Potenciação e radiciação.</li>
            <li>Multiplicação e divisão.</li>
            <li>Adição e subtração.</li>
        </ol>
        <p>Operações de mesma prioridade são resolvidas da esquerda para a direita.</p>

        <h2>3. Exemplo resolvido</h2>
        <p>Calcule:</p>
        <p><b>20 + 3 × (8 - 4)² ÷ 4</b></p>

        <p><b>1° PASSO: Resolva os parênteses.</b></p>
        <p>20 + 3 × 4² ÷ 4</p>

        <p><b>2° PASSO: Resolva a potenciação.</b></p>
        <p>20 + 3 × 16 ÷ 4</p>

        <p><b>3° PASSO: Resolva multiplicação e divisão, da esquerda para a direita.</b></p>
        <p>20 + 48 ÷ 4</p>
        <p>20 + 12</p>

        <p><b>4° PASSO: Resolva a adição.</b></p>
        <p><b>20 + 12 = 32.</b></p>

        <h2>4. Uso dos sinais de associação</h2>
        <p>Quando aparecem parênteses, colchetes e chaves, resolvemos primeiro os sinais mais internos.</p>
        <p>Exemplo: {10 + [8 - (3 + 2)]}.</p>
        <p>Primeiro resolvemos (3 + 2), depois os colchetes e, por último, as chaves.</p>

        <h2>5. Atenção para as provas</h2>
        <ul>
            <li>Multiplicação não tem prioridade sobre divisão.</li>
            <li>Adição não tem prioridade sobre subtração.</li>
            <li>Potenciação e radiciação vêm antes de multiplicação e divisão.</li>
            <li>Não resolva simplesmente na ordem em que os números aparecem.</li>
        </ul>

        <div class="dica"><b>DICA RESULTAMATH</b><p>Siga a hierarquia das operações e, quando houver empate de prioridade, resolva da esquerda para a direita.</p></div>
    `
},

/* =====================================================
   02. DIVISIBILIDADE E FATORAÇÃO
===================================================== */

{
    id: 'multiplos-divisores',
    titulo: 'Múltiplos e divisores',
    modulo: 'Divisibilidade e fatoração',
    conteudo: `
        <h2>1. Múltiplos</h2>
        <p>Os múltiplos de um número são obtidos multiplicando esse número pelos números naturais.</p>
        <p><b>Exemplo: múltiplos de 4.</b></p>
        <p>M(4) = {0, 4, 8, 12, 16, 20...}</p>
        <p>Os múltiplos de um número são infinitos.</p>

        <h2>2. Divisores</h2>
        <p>Um número é divisor de outro quando a divisão é exata, ou seja, apresenta resto igual a zero.</p>
        <p><b>Exemplo: divisores de 12.</b></p>
        <p>D(12) = {1, 2, 3, 4, 6, 12}.</p>
        <p>Os divisores de um número natural diferente de zero são finitos.</p>

        <h2>3. Relação entre múltiplos e divisores</h2>
        <p>Se 24 ÷ 6 = 4, então:</p>
        <ul>
            <li>24 é múltiplo de 6.</li>
            <li>6 é divisor de 24.</li>
            <li>4 também é divisor de 24.</li>
        </ul>

        <h2>4. Números pares e ímpares</h2>
        <p><b>Pares:</b> são divisíveis por 2.</p>
        <p>Exemplos: 0, 2, 4, 6, 8, 10...</p>
        <p><b>Ímpares:</b> não são divisíveis por 2.</p>
        <p>Exemplos: 1, 3, 5, 7, 9, 11...</p>

        <h2>5. Atenção para as provas</h2>
        <ul>
            <li>Todo número natural diferente de zero é divisor de si mesmo.</li>
            <li>O número 1 é divisor de qualquer número natural.</li>
            <li>O zero é múltiplo de qualquer número natural.</li>
            <li>A divisão por zero não existe.</li>
        </ul>

        <div class="dica"><b>DICA RESULTAMATH</b><p>Para verificar se um número é divisor de outro, confira se a divisão apresenta resto zero.</p></div>
    `
},

{
    id: 'divisibilidade',
    titulo: 'Critérios de divisibilidade',
    modulo: 'Divisibilidade e fatoração',
    conteudo: `
        <h2>1. O que são critérios de divisibilidade?</h2>
        <p>São regras que permitem verificar se um número é divisível por outro sem precisar realizar a divisão.</p>

        <h2>2. Divisibilidade por 2</h2>
        <p>Um número é divisível por 2 quando termina em 0, 2, 4, 6 ou 8.</p>
        <p><b>Exemplo:</b> 348 é divisível por 2 porque termina em 8.</p>

        <h2>3. Divisibilidade por 3</h2>
        <p>Um número é divisível por 3 quando a soma de seus algarismos é múltipla de 3.</p>
        <p><b>Exemplo:</b> 729.</p>
        <p>7 + 2 + 9 = 18.</p>
        <p>Como 18 é divisível por 3, 729 também é.</p>

        <h2>4. Divisibilidade por 4</h2>
        <p>Um número é divisível por 4 quando os dois últimos algarismos formam um número divisível por 4.</p>
        <p><b>Exemplo:</b> 1.316. Os dois últimos algarismos formam 16, que é divisível por 4.</p>

        <h2>5. Divisibilidade por 5</h2>
        <p>Um número é divisível por 5 quando termina em 0 ou 5.</p>
        <p><b>Exemplo:</b> 235.</p>

        <h2>6. Divisibilidade por 6</h2>
        <p>Um número é divisível por 6 quando é divisível simultaneamente por 2 e por 3.</p>
        <p><b>Exemplo:</b> 126.</p>
        <p>É par e a soma dos algarismos é 1 + 2 + 6 = 9.</p>

        <h2>7. Divisibilidade por 8</h2>
        <p>Um número é divisível por 8 quando os três últimos algarismos formam um número divisível por 8.</p>
        <p><b>Exemplo:</b> 2.104. Como 104 ÷ 8 = 13, o número é divisível por 8.</p>

        <h2>8. Divisibilidade por 9</h2>
        <p>Um número é divisível por 9 quando a soma de seus algarismos é múltipla de 9.</p>
        <p><b>Exemplo:</b> 4.536.</p>
        <p>4 + 5 + 3 + 6 = 18. Portanto, é divisível por 9.</p>

        <h2>9. Divisibilidade por 10</h2>
        <p>Um número é divisível por 10 quando termina em zero.</p>
        <p><b>Exemplo:</b> 1.250.</p>

        <h2>10. Divisibilidade por 11</h2>
        <p>Um número é divisível por 11 quando a diferença entre as somas dos algarismos em posições alternadas é zero ou múltipla de 11.</p>
        <p><b>Exemplo:</b> 1.331.</p>
        <p>(1 + 3) - (3 + 1) = 0.</p>
        <p>Portanto, é divisível por 11.</p>

        <h2>11. Divisibilidade por 25</h2>
        <p>Um número é divisível por 25 quando termina em 00, 25, 50 ou 75.</p>
        <p><b>Exemplo:</b> 1.275.</p>

        <h2>12. Divisibilidade por 100</h2>
        <p>Um número é divisível por 100 quando termina em dois zeros.</p>
        <p><b>Exemplo:</b> 4.500.</p>

        <h2>13. Quadro-resumo</h2>
        <table>
            <tr><th>Divisor</th><th>Critério</th></tr>
            <tr><td>2</td><td>Termina em 0, 2, 4, 6 ou 8.</td></tr>
            <tr><td>3</td><td>Soma dos algarismos múltipla de 3.</td></tr>
            <tr><td>4</td><td>Dois últimos algarismos divisíveis por 4.</td></tr>
            <tr><td>5</td><td>Termina em 0 ou 5.</td></tr>
            <tr><td>6</td><td>Divisível por 2 e por 3.</td></tr>
            <tr><td>8</td><td>Três últimos algarismos divisíveis por 8.</td></tr>
            <tr><td>9</td><td>Soma dos algarismos múltipla de 9.</td></tr>
            <tr><td>10</td><td>Termina em 0.</td></tr>
            <tr><td>11</td><td>Diferença das somas alternadas igual a 0 ou múltipla de 11.</td></tr>
            <tr><td>25</td><td>Termina em 00, 25, 50 ou 75.</td></tr>
            <tr><td>100</td><td>Termina em 00.</td></tr>
        </table>

        <div class="dica"><b>DICA RESULTAMATH</b><p>Memorize os finais mais importantes e utilize a soma dos algarismos para verificar a divisibilidade por 3 e 9.</p></div>
    `
},

{
    id: 'numeros-primos',
    titulo: 'Números primos',
    modulo: 'Divisibilidade e fatoração',
    conteudo: `
        <h2>1. O que são números primos?</h2>
        <p>Um número natural maior que 1 é primo quando possui exatamente dois divisores naturais: 1 e ele mesmo.</p>
        <p><b>Exemplos:</b> 2, 3, 5, 7, 11, 13, 17, 19...</p>

        <h2>2. Números compostos</h2>
        <p>São números naturais maiores que 1 que possuem mais de dois divisores naturais.</p>
        <p><b>Exemplo:</b> 12.</p>
        <p>D(12) = {1, 2, 3, 4, 6, 12}.</p>
        <p>Como possui mais de dois divisores, é composto.</p>

        <h2>3. O número 1</h2>
        <p>O número 1 não é primo nem composto, pois possui apenas um divisor natural.</p>

        <h2>4. O número 2</h2>
        <p>É o único número primo par. Todos os outros números pares maiores que 2 são compostos.</p>

        <h2>5. Decomposição em fatores primos</h2>
        <p>Consiste em escrever um número como produto de números primos.</p>
        <p><b>Exemplo: decomposição de 60.</b></p>

        <p><b>1° PASSO: Divida sucessivamente pelos menores números primos possíveis.</b></p>
        <p>60 ÷ 2 = 30</p>
        <p>30 ÷ 2 = 15</p>
        <p>15 ÷ 3 = 5</p>
        <p>5 ÷ 5 = 1</p>

        <p><b>2° PASSO: Escreva o produto dos fatores encontrados.</b></p>
        <p>60 = 2 × 2 × 3 × 5.</p>

        <p><b>3° PASSO: Agrupe os fatores iguais utilizando potências.</b></p>
        <p><b>60 = 2² × 3 × 5.</b></p>

        <h2>6. Aplicações</h2>
        <p>A decomposição em fatores primos é utilizada para calcular MMC, MDC, simplificar frações e determinar divisores.</p>

        <h2>7. Atenção para as provas</h2>
        <ul>
            <li>O número 1 não é primo.</li>
            <li>O número 2 é o único primo par.</li>
            <li>Todo número composto pode ser decomposto em fatores primos.</li>
            <li>A fatoração prima é única, desconsiderando a ordem dos fatores.</li>
        </ul>

        <div class="dica"><b>DICA RESULTAMATH</b><p>Para decompor um número, divida sucessivamente pelos menores números primos possíveis, começando por 2.</p></div>
    `
},

{
    id: 'mmc-mdc',
    titulo: 'MMC e MDC',
    modulo: 'Divisibilidade e fatoração',
    conteudo: `
        <h2>1. Mínimo Múltiplo Comum (MMC)</h2>
        <p>É o menor múltiplo positivo comum entre dois ou mais números.</p>
        <p><b>Exemplo:</b> MMC de 12 e 18.</p>
        <p>Múltiplos de 12: 12, 24, 36, 48, 60...</p>
        <p>Múltiplos de 18: 18, 36, 54, 72...</p>
        <p>O menor múltiplo positivo comum é 36.</p>
        <p><b>MMC(12, 18) = 36.</b></p>

        <h2>2. Como calcular o MMC pela fatoração</h2>
        <p><b>1° PASSO:</b> Decomponha os números simultaneamente.</p>
        <table>
            <tr><th>12</th><th>18</th><th>Divisor</th></tr>
            <tr><td>12</td><td>18</td><td>2</td></tr>
            <tr><td>6</td><td>9</td><td>2</td></tr>
            <tr><td>3</td><td>9</td><td>3</td></tr>
            <tr><td>1</td><td>3</td><td>3</td></tr>
            <tr><td>1</td><td>1</td><td></td></tr>
        </table>
        <p><b>2° PASSO:</b> Multiplique todos os fatores primos utilizados.</p>
        <p>MMC = 2 × 2 × 3 × 3.</p>
        <p><b>MMC = 36.</b></p>

        <h2>3. Máximo Divisor Comum (MDC)</h2>
        <p>É o maior divisor positivo comum entre dois ou mais números.</p>
        <p><b>Exemplo:</b> MDC de 24 e 36.</p>
        <p>Divisores de 24: 1, 2, 3, 4, 6, 8, 12 e 24.</p>
        <p>Divisores de 36: 1, 2, 3, 4, 6, 9, 12, 18 e 36.</p>
        <p><b>MDC(24, 36) = 12.</b></p>

        <h2>4. Como calcular o MDC pela fatoração</h2>
        <p><b>1° PASSO:</b> Decomponha os números em fatores primos.</p>
        <p>24 = 2³ × 3.</p>
        <p>36 = 2² × 3².</p>
        <p><b>2° PASSO:</b> Escolha os fatores comuns com os menores expoentes.</p>
        <p>MDC = 2² × 3.</p>
        <p><b>MDC = 12.</b></p>

        <h2>5. Quando utilizar MMC e MDC?</h2>
        <table>
            <tr><th>MMC</th><th>MDC</th></tr>
            <tr><td>Encontros periódicos.</td><td>Divisão em partes iguais.</td></tr>
            <tr><td>Eventos que se repetem.</td><td>Maior tamanho possível.</td></tr>
            <tr><td>Coincidência de intervalos.</td><td>Formação de grupos iguais.</td></tr>
        </table>

        <h2>6. Relação entre MMC e MDC</h2>
        <p>Para dois números naturais positivos:</p>
        <p><b>MMC(a,b) × MDC(a,b) = a × b.</b></p>

        <h2>7. Atenção para as provas</h2>
        <ul>
            <li>O MMC utiliza os maiores expoentes dos fatores primos.</li>
            <li>O MDC utiliza os menores expoentes dos fatores comuns.</li>
            <li>O MMC nunca é menor que os números considerados.</li>
            <li>O MDC nunca é maior que os números considerados.</li>
        </ul>

        <div class="dica"><b>DICA RESULTAMATH</b><p>MMC: maiores expoentes. MDC: menores expoentes dos fatores comuns.</p></div>
    `
},

/* =====================================================
   03. FRAÇÕES E NÚMEROS DECIMAIS
===================================================== */

{
    id: 'fracoes',
    titulo: 'Frações',
    modulo: 'Frações e números decimais',
    conteudo: `
        <h2>1. O que são frações?</h2>
        <p>Frações representam partes de um todo ou o resultado de uma divisão entre dois números inteiros, com denominador diferente de zero.</p>
        <p><b>Representação:</b> a/b, com b diferente de zero.</p>
        <ul>
            <li><b>Numerador:</b> indica quantas partes foram consideradas.</li>
            <li><b>Denominador:</b> indica em quantas partes iguais o todo foi dividido.</li>
        </ul>

        <h2>2. Tipos de frações</h2>
        <h3>Fração própria</h3>
        <p>O numerador é menor que o denominador. Exemplo: 2/5.</p>

        <h3>Fração imprópria</h3>
        <p>O numerador é maior que o denominador. Exemplo: 7/4.</p>

        <h3>Fração aparente</h3>
        <p>O numerador é múltiplo do denominador, resultando em um número inteiro.</p>
        <p>Exemplo: 12/4 = 3.</p>

        <h3>Fração equivalente</h3>
        <p>Representa a mesma quantidade, mesmo apresentando numeradores e denominadores diferentes.</p>
        <p>Exemplo: 1/2 = 2/4 = 3/6.</p>

        <h2>3. Simplificação de frações</h2>
        <p>Simplificar uma fração significa dividir o numerador e o denominador pelo mesmo número diferente de zero.</p>
        <p><b>Exemplo: 18/24.</b></p>
        <p><b>1° PASSO:</b> Identifique um divisor comum.</p>
        <p>18 e 24 são divisíveis por 6.</p>
        <p><b>2° PASSO:</b> Divida o numerador e o denominador por 6.</p>
        <p>18/24 = 3/4.</p>

        <h2>4. Fração de uma quantidade</h2>
        <p>Para calcular uma fração de determinado valor, divida o valor pelo denominador e multiplique pelo numerador.</p>
        <p><b>Exemplo: calcule 3/5 de 200.</b></p>
        <p>200 ÷ 5 = 40.</p>
        <p>40 × 3 = 120.</p>

        <h2>5. Transformação de fração em decimal</h2>
        <p>Basta dividir o numerador pelo denominador.</p>
        <p>3/4 = 3 ÷ 4 = 0,75.</p>

        <h2>6. Transformação de decimal em fração</h2>
        <p>Escreva o número sem vírgula no numerador e utilize uma potência de 10 no denominador, de acordo com as casas decimais. Depois, simplifique.</p>
        <p>0,35 = 35/100 = 7/20.</p>

        <h2>7. Comparação de frações</h2>
        <p>Para comparar frações com denominadores diferentes, podemos utilizar o produto cruzado.</p>
        <p><b>Exemplo: compare 2/3 e 3/5.</b></p>
        <p>2 × 5 = 10.</p>
        <p>3 × 3 = 9.</p>
        <p>Como 10 é maior que 9:</p>
        <p><b>2/3 é maior que 3/5.</b></p>

        <h2>8. Atenção para as provas</h2>
        <ul>
            <li>O denominador nunca pode ser zero.</li>
            <li>Frações equivalentes representam o mesmo valor.</li>
            <li>A simplificação não altera o valor da fração.</li>
            <li>Uma fração imprópria pode ser transformada em número misto.</li>
        </ul>

        <div class="dica"><b>DICA RESULTAMATH</b><p>Para simplificar uma fração, divida o numerador e o denominador pelo mesmo divisor comum.</p></div>
    `
},

{
    id: 'operacoes-fracoes',
    titulo: 'Operações com frações',
    modulo: 'Frações e números decimais',
    conteudo: `
        <h2>1. Adição de frações</h2>
        <p>Quando os denominadores são iguais, some os numeradores e conserve o denominador.</p>
        <p>2/7 + 3/7 = 5/7.</p>
        <p>Quando os denominadores são diferentes, encontre um denominador comum, preferencialmente pelo MMC.</p>

        <h3>Exemplo resolvido</h3>
        <p>1/2 + 1/3.</p>
        <p><b>1° PASSO:</b> Calcule o MMC dos denominadores.</p>
        <p>MMC(2, 3) = 6.</p>
        <p><b>2° PASSO:</b> Transforme as frações em equivalentes.</p>
        <p>1/2 = 3/6.</p>
        <p>1/3 = 2/6.</p>
        <p><b>3° PASSO:</b> Some os numeradores.</p>
        <p>3/6 + 2/6 = 5/6.</p>

        <h2>2. Subtração de frações</h2>
        <p>Segue a mesma regra da adição.</p>
        <p><b>Exemplo:</b> 3/4 - 1/2.</p>
        <p><b>1° PASSO:</b> Encontre um denominador comum.</p>
        <p>MMC(4, 2) = 4.</p>
        <p><b>2° PASSO:</b> Transforme as frações.</p>
        <p>3/4 - 2/4.</p>
        <p><b>3° PASSO:</b> Subtraia os numeradores.</p>
        <p>3/4 - 2/4 = 1/4.</p>

        <h2>3. Multiplicação de frações</h2>
        <p>Multiplique os numeradores entre si e os denominadores entre si.</p>
        <p><b>Exemplo:</b></p>
        <p>2/3 × 4/5 = (2 × 4)/(3 × 5) = 8/15.</p>
        <p>Não é necessário encontrar denominadores iguais.</p>

        <h2>4. Divisão de frações</h2>
        <p>Conserve a primeira fração e multiplique pelo inverso da segunda.</p>
        <p><b>Exemplo:</b> 2/3 ÷ 4/5.</p>
        <p><b>1° PASSO:</b> Conserve a primeira fração e inverta a segunda.</p>
        <p>2/3 × 5/4.</p>
        <p><b>2° PASSO:</b> Multiplique os numeradores e denominadores.</p>
        <p>10/12.</p>
        <p><b>3° PASSO:</b> Simplifique o resultado.</p>
        <p>10/12 = 5/6.</p>

        <h2>5. Potenciação de frações</h2>
        <p>Eleve o numerador e o denominador ao expoente indicado.</p>
        <p>(2/3)² = 2²/3² = 4/9.</p>

        <h2>6. Radiciação de frações</h2>
        <p>Quando possível, extraia a raiz do numerador e do denominador separadamente.</p>
        <p>√(9/16) = √9/√16 = 3/4.</p>

        <h2>7. Atenção para as provas</h2>
        <ul>
            <li>Na adição e subtração, os denominadores precisam ser iguais.</li>
            <li>Na multiplicação, multiplique em linha.</li>
            <li>Na divisão, inverta a segunda fração.</li>
            <li>Na divisão, a segunda fração não pode ser zero.</li>
            <li>Sempre que possível, simplifique o resultado.</li>
        </ul>

        <div class="dica"><b>DICA RESULTAMATH</b><p>Adição e subtração exigem denominadores iguais; multiplicação e divisão não.</p></div>
    `
},

{
    id: 'decimais',
    titulo: 'Números decimais',
    modulo: 'Frações e números decimais',
    conteudo: `
        <h2>1. O que são números decimais?</h2>
        <p>São números que apresentam uma parte inteira e uma parte decimal, separadas por uma vírgula.</p>
        <p><b>Exemplos:</b> 2,5; 0,75; 12,345; 8,04.</p>

        <h2>2. Valor posicional</h2>
        <p>Cada algarismo ocupa uma posição de acordo com sua distância da vírgula.</p>
        <table>
            <tr><th>Posição</th><th>Valor</th></tr>
            <tr><td>Unidade</td><td>1</td></tr>
            <tr><td>Décimo</td><td>0,1</td></tr>
            <tr><td>Centésimo</td><td>0,01</td></tr>
            <tr><td>Milésimo</td><td>0,001</td></tr>
        </table>
        <p>No número 3,456:</p>
        <ul>
            <li>3 representa 3 unidades.</li>
            <li>4 representa 4 décimos.</li>
            <li>5 representa 5 centésimos.</li>
            <li>6 representa 6 milésimos.</li>
        </ul>

        <h2>3. Adição e subtração</h2>
        <p>Alinhe as vírgulas e coloque os algarismos de mesma ordem na mesma coluna.</p>
        <p><b>Exemplo:</b></p>
        <p>12,50 + 3,25 = 15,75.</p>
        <p><b>Subtração:</b> 8,50 - 2,30 = 6,20.</p>

        <h2>4. Multiplicação</h2>
        <p>Multiplique os números normalmente e, ao final, conte o total de casas decimais dos fatores para posicionar a vírgula no resultado.</p>
        <p><b>Exemplo:</b> 2,5 × 1,2.</p>
        <p>25 × 12 = 300.</p>
        <p>Existem duas casas decimais no total.</p>
        <p>Resultado: 3,00 = 3.</p>

        <h2>5. Divisão</h2>
        <p>Quando o divisor apresenta casas decimais, podemos multiplicar o dividendo e o divisor por uma potência de 10 para transformar o divisor em inteiro.</p>
        <p><b>Exemplo:</b> 4,5 ÷ 0,5.</p>
        <p>45 ÷ 5 = 9.</p>

        <h2>6. Comparação de números decimais</h2>
        <p>Compare primeiro a parte inteira. Se ela for igual, compare os algarismos decimais da esquerda para a direita.</p>
        <p><b>Exemplo:</b> 2,45 e 2,5.</p>
        <p>Podemos escrever 2,5 como 2,50.</p>
        <p>Como 2,50 é maior que 2,45, temos:</p>
        <p><b>2,5 > 2,45.</b></p>

        <h2>7. Transformação em fração</h2>
        <p>0,4 = 4/10 = 2/5.</p>
        <p>0,25 = 25/100 = 1/4.</p>
        <p>1,75 = 175/100 = 7/4.</p>

        <h2>8. Dízimas periódicas</h2>
        <p>São números decimais infinitos que apresentam repetição de algarismos.</p>
        <p><b>Exemplos:</b> 0,333... e 0,272727...</p>
        <p>São números racionais e podem ser representados por frações.</p>

        <h2>9. Atenção para as provas</h2>
        <ul>
            <li>Zeros à direita da parte decimal não alteram o valor: 2,5 = 2,50.</li>
            <li>Na adição e subtração, alinhe as vírgulas.</li>
            <li>Na multiplicação, conte as casas decimais.</li>
            <li>Na divisão, transforme o divisor em inteiro quando necessário.</li>
        </ul>

        <div class="dica"><b>DICA RESULTAMATH</b><p>Na adição e subtração, alinhe as vírgulas; na multiplicação, conte as casas decimais.</p></div>
    `
},

/* =====================================================
   04. POTENCIAÇÃO E RADICIAÇÃO
===================================================== */

{
    id: 'potenciacao',
    titulo: 'Potenciação',
    modulo: 'Potenciação e radiciação',
    conteudo: `
        <h2>1. O que é potenciação?</h2>
        <p>É uma operação que representa a multiplicação de fatores iguais.</p>
        <p><b>Exemplo:</b> 2³ = 2 × 2 × 2 = 8.</p>

        <h2>2. Elementos da potenciação</h2>
        <p>Em aⁿ:</p>
        <ul>
            <li><b>Base (a):</b> número que será multiplicado.</li>
            <li><b>Expoente (n):</b> quantidade de vezes que a base aparece como fator.</li>
            <li><b>Potência:</b> resultado da operação.</li>
        </ul>

        <h2>3. Casos especiais</h2>
        <p><b>Expoente igual a 1:</b></p>
        <p>a¹ = a.</p>
        <p><b>Expoente igual a zero:</b></p>
        <p>a⁰ = 1, para a diferente de zero.</p>
        <p><b>Base igual a 1:</b></p>
        <p>1ⁿ = 1.</p>
        <p><b>Base igual a zero:</b></p>
        <p>0ⁿ = 0, para n positivo.</p>

        <h2>4. Base negativa</h2>
        <p>Quando a base negativa está entre parênteses:</p>
        <ul>
            <li>Expoente par: resultado positivo.</li>
            <li>Expoente ímpar: resultado negativo.</li>
        </ul>
        <p>(-2)² = 4.</p>
        <p>(-2)³ = -8.</p>

        <h2>5. Potências de base 10</h2>
        <p>São utilizadas para representar números grandes e pequenos.</p>
        <p>10¹ = 10.</p>
        <p>10² = 100.</p>
        <p>10³ = 1.000.</p>
        <p>10⁴ = 10.000.</p>

        <h2>6. Notação científica</h2>
        <p>É uma forma de representar números utilizando potências de base 10.</p>
        <p><b>Formato:</b> a × 10ⁿ, em que 1 ≤ |a| < 10.</p>
        <p><b>Exemplo:</b> 350.000 = 3,5 × 10⁵.</p>

        <h2>7. Atenção para as provas</h2>
        <ul>
            <li>Potenciação não significa multiplicar a base pelo expoente.</li>
            <li>0⁰ não possui valor definido na aritmética usual.</li>
            <li>Não confunda -2² com (-2)².</li>
        </ul>

        <div class="dica"><b>DICA RESULTAMATH</b><p>O expoente indica quantas vezes a base aparece como fator na multiplicação.</p></div>
    `
},

{
    id: 'propriedades-potencias',
    titulo: 'Propriedades das potências',
    modulo: 'Potenciação e radiciação',
    conteudo: `
        <h2>1. Produto de potências de mesma base</h2>
        <p>Conserve a base e some os expoentes.</p>
        <p><b>Regra:</b> aᵐ × aⁿ = aᵐ⁺ⁿ.</p>
        <p><b>Exemplo:</b></p>
        <p>2³ × 2² = 2⁵ = 32.</p>

        <h2>2. Divisão de potências de mesma base</h2>
        <p>Conserve a base e subtraia os expoentes, considerando base diferente de zero.</p>
        <p><b>Regra:</b> aᵐ ÷ aⁿ = aᵐ⁻ⁿ.</p>
        <p><b>Exemplo:</b></p>
        <p>3⁵ ÷ 3² = 3³ = 27.</p>

        <h2>3. Potência de potência</h2>
        <p>Conserve a base e multiplique os expoentes.</p>
        <p><b>Regra:</b> (aᵐ)ⁿ = aᵐˣⁿ.</p>
        <p><b>Exemplo:</b></p>
        <p>(2²)³ = 2⁶ = 64.</p>

        <h2>4. Potência de um produto</h2>
        <p>Eleve cada fator ao expoente indicado.</p>
        <p><b>Regra:</b> (a × b)ⁿ = aⁿ × bⁿ.</p>
        <p><b>Exemplo:</b></p>
        <p>(2 × 3)² = 2² × 3² = 36.</p>

        <h2>5. Potência de uma divisão</h2>
        <p>Eleve o numerador e o denominador ao expoente indicado, com denominador diferente de zero.</p>
        <p><b>Regra:</b> (a/b)ⁿ = aⁿ/bⁿ.</p>
        <p><b>Exemplo:</b></p>
        <p>(2/3)² = 4/9.</p>

        <h2>6. Expoente negativo</h2>
        <p>Inverta a base e transforme o expoente em positivo.</p>
        <p><b>Regra:</b> a⁻ⁿ = 1/aⁿ, para a diferente de zero.</p>
        <p><b>Exemplo:</b></p>
        <p>2⁻³ = 1/2³ = 1/8.</p>

        <h2>7. Quadro-resumo</h2>
        <table>
            <tr><th>Propriedade</th><th>Regra</th></tr>
            <tr><td>Produto de mesma base</td><td>aᵐ × aⁿ = aᵐ⁺ⁿ</td></tr>
            <tr><td>Divisão de mesma base</td><td>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</td></tr>
            <tr><td>Potência de potência</td><td>(aᵐ)ⁿ = aᵐⁿ</td></tr>
            <tr><td>Potência de produto</td><td>(ab)ⁿ = aⁿbⁿ</td></tr>
            <tr><td>Potência de divisão</td><td>(a/b)ⁿ = aⁿ/bⁿ</td></tr>
            <tr><td>Expoente negativo</td><td>a⁻ⁿ = 1/aⁿ</td></tr>
        </table>

        <h2>8. Atenção para as provas</h2>
        <ul>
            <li>Na multiplicação de potências de mesma base, somamos os expoentes.</li>
            <li>Na divisão de potências de mesma base, subtraímos os expoentes.</li>
            <li>Na potência de potência, multiplicamos os expoentes.</li>
            <li>Não existe propriedade que permita distribuir uma potência sobre uma soma: (a + b)² não é igual a a² + b².</li>
        </ul>

        <div class="dica"><b>DICA RESULTAMATH</b><p>Multiplicação: some os expoentes. Divisão: subtraia. Potência de potência: multiplique.</p></div>
    `
},

{
    id: 'radiciacao',
    titulo: 'Radiciação',
    modulo: 'Potenciação e radiciação',
    conteudo: `
        <h2>1. O que é radiciação?</h2>
        <p>É a operação inversa da potenciação. Consiste em encontrar um número que, elevado a determinado expoente, produz o radicando.</p>
        <p><b>Exemplo:</b> √25 = 5, pois 5² = 25.</p>

        <h2>2. Elementos da raiz</h2>
        <p>Na expressão ⁿ√a:</p>
        <ul>
            <li><b>Índice:</b> indica qual raiz deve ser calculada.</li>
            <li><b>Radicando:</b> número que está dentro do radical.</li>
            <li><b>Radical:</b> símbolo da raiz.</li>
            <li><b>Raiz:</b> resultado da operação.</li>
        </ul>

        <h2>3. Raiz quadrada</h2>
        <p>É a operação inversa da elevação ao quadrado.</p>
        <p>√36 = 6, pois 6² = 36.</p>

        <h2>4. Raiz cúbica</h2>
        <p>É a operação inversa da elevação ao cubo.</p>
        <p>∛27 = 3, pois 3³ = 27.</p>

        <h2>5. Raiz de números negativos</h2>
        <p>Nos números reais, raízes de índice par de números negativos não estão definidas.</p>
        <p>Exemplo: √(-9) não é um número real.</p>
        <p>Já as raízes de índice ímpar de números negativos são reais.</p>
        <p>Exemplo: ∛(-8) = -2.</p>

        <h2>6. Propriedades da radiciação</h2>
        <p><b>Produto de radicais de mesmo índice:</b></p>
        <p>ⁿ√a × ⁿ√b = ⁿ√(a × b), quando as expressões estão definidas.</p>
        <p><b>Quociente de radicais de mesmo índice:</b></p>
        <p>ⁿ√a ÷ ⁿ√b = ⁿ√(a ÷ b), com divisor diferente de zero.</p>
        <p><b>Raiz de uma potência:</b></p>
        <p>√(a²) = |a|.</p>

        <h2>7. Simplificação de radicais</h2>
        <p>Podemos retirar fatores que possuem expoentes múltiplos do índice da raiz.</p>
        <p><b>Exemplo:</b> √72.</p>
        <p><b>1° PASSO:</b> Decomponha o radicando.</p>
        <p>72 = 36 × 2.</p>
        <p><b>2° PASSO:</b> Separe os fatores.</p>
        <p>√72 = √36 × √2.</p>
        <p><b>3° PASSO:</b> Calcule a raiz exata.</p>
        <p><b>√72 = 6√2.</b></p>

        <h2>8. Relação entre potência e raiz</h2>
        <p>Uma raiz pode ser representada por uma potência de expoente fracionário.</p>
        <p>ⁿ√a = a¹/ⁿ.</p>
        <p>Exemplo: √9 = 9¹/² = 3.</p>

        <h2>9. Atenção para as provas</h2>
        <ul>
            <li>Raiz quadrada principal é sempre não negativa.</li>
            <li>Raízes de índice par exigem radicando não negativo nos reais.</li>
            <li>Raízes de índice ímpar admitem radicandos negativos.</li>
            <li>Não se pode separar uma soma dentro de uma raiz: √(a + b) não é igual a √a + √b.</li>
        </ul>

        <div class="dica"><b>DICA RESULTAMATH</b><p>Para simplificar uma raiz, procure fatores que sejam potências perfeitas do índice do radical.</p></div>
    `
}

];

/* ===== DADOS DA PÁGINA INICIAL (index.html) — troque pelos seus ===== */
const SITE={
  professora:'Dani Resulta',
  sobre:'Sou professora de Matemática licenciada, diagramadora e criadora do projeto ResultaMath. Acredito que a matemática não precisa ser complicada, por isso ensino de forma clara, visual e objetiva, transformando conceitos difíceis em ideias simples e acessíveis. Meu objetivo não é apenas ensinar a resolver questões, mas ajudar cada aluno a compreender a matemática e ganhar confiança para utilizá-la.',
  whatsapp:'5542991367740',   /* só números, com 55 + DDD. Deixe '' para esconder o botão */
  instagram:'https://www.instagram.com/professora_thaiz?igsh=d2M0aHJ5dDFlMXcy',      /* ex.: https://instagram.com/seuperfil */
  youtube:'https://www.youtube.com/@resultamath',                 /* ex.: https://youtube.com/@seucanal */
  email:''                    /* ex.: contato@seusite.com */
};

