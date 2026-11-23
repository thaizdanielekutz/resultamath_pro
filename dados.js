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

RESOLUCAO({
    banca: 'FUNDATEC 2022',
    concurso: 'Concurso Administrativo',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - FUNDATEC 2022',
    alternativas: [],
    gabarito: '',
    video: 'uxs-aQ8UtgY'
});

RESOLUCAO({
    banca: 'VUNESP 2022',
    concurso: 'Concurso TJ-SP',
    ano: 2025,
    cargo: '',
    assunto: 'Matemática',
    enunciado: 'Questão 01 - VUNESP 2022',
    alternativas: [],
    gabarito: '',
    video: '_YLGMeUaEwQ'
});

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



/* ===== DADOS DA PÁGINA INICIAL (index.html) — troque pelos seus ===== */
const SITE={
  professora:'Dani Resulta',
  sobre:'Sou professora de Matemática licenciada, diagramadora e criadora do projeto ResultaMath. Acredito que a matemática não precisa ser complicada, por isso ensino de forma clara, visual e objetiva, transformando conceitos difíceis em ideias simples e acessíveis. Meu objetivo não é apenas ensinar a resolver questões, mas ajudar cada aluno a compreender a matemática e ganhar confiança para utilizá-la.',
  whatsapp:'5542991367740',   /* só números, com 55 + DDD. Deixe '' para esconder o botão */
  instagram:'',               /* ex.: https://instagram.com/seuperfil */
  youtube:'',                 /* ex.: https://youtube.com/@seucanal */
  email:''                    /* ex.: contato@seusite.com */
};



/* ===== MATEMÁTICA MINUTADA ===== */

const MINUTADA = [
    {
        titulo: 'Raiz quadrada',
        video: 'LGTiGfulDwU',
        descricao: 'Aprenda o conceito de raiz quadrada.',
        categoria: 'Aritmética'
    },
    {
        titulo: 'Potência',
        video: 'ID_DO_VIDEO',
        descricao: 'Entenda a potenciação.',
        categoria: 'Aritmética'
    },
    {
        titulo: 'Porcentagem',
        video: 'ID_DO_VIDEO',
        descricao: 'Aprenda os fundamentos da porcentagem.',
        categoria: 'Aritmética'
    },
    { titulo: 'PA', video: '', categoria: 'Sequências' },
    { titulo: 'PG', video: '', categoria: 'Sequências' },
    { titulo: 'Probabilidade', video: '', categoria: 'Estatística' },
    { titulo: 'Mediana', video: '', categoria: 'Estatística' },
    { titulo: 'Média', video: '', categoria: 'Estatística' },
    { titulo: 'Moda', video: '', categoria: 'Estatística' },
    { titulo: 'Regra de três', video: '', categoria: 'Proporcionalidade' },
    { titulo: 'Logaritmo', video: '', categoria: 'Álgebra' },
    { titulo: 'Módulo de um número', video: '', categoria: 'Números' },
    { titulo: 'Número oposto', video: '', categoria: 'Números' },
    { titulo: 'Números pares e ímpares', video: '', categoria: 'Números' },
    { titulo: 'Números primos', video: '', categoria: 'Números' },
    { titulo: 'MMC', video: '', categoria: 'Divisibilidade' },
    { titulo: 'MDC', video: '', categoria: 'Divisibilidade' },
    { titulo: 'Frações', video: '', categoria: 'Aritmética' },
    { titulo: 'Frações equivalentes', video: '', categoria: 'Aritmética' },
    { titulo: 'Fração imprópria', video: '', categoria: 'Aritmética' },
    { titulo: 'Fatorial', video: '', categoria: 'Aritmética' },
    { titulo: 'Fração irredutível', video: '', categoria: 'Aritmética' },
    { titulo: 'Número decimal', video: '', categoria: 'Aritmética' },
    { titulo: 'Valor absoluto', video: '', categoria: 'Números' },
    { titulo: 'Inverso de um número', video: '', categoria: 'Números' },
    { titulo: 'Ângulos complementares', video: '', categoria: 'Geometria' },
    { titulo: 'Ângulos suplementares', video: '', categoria: 'Geometria' },
    { titulo: 'Perímetro', video: '', categoria: 'Geometria' },
    { titulo: 'Área', video: '', categoria: 'Geometria' },
    { titulo: 'Volume', video: '', categoria: 'Geometria' },
    { titulo: 'Juros simples', video: '', categoria: 'Matemática financeira' },
    { titulo: 'Juros compostos', video: '', categoria: 'Matemática financeira' }

].map((item, indice) => ({
    ...item,
    id: slug(item.titulo),
    indice: indice + 1,
    descricao: item.descricao || ''
}));
