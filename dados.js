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

/* FLASH(frente, verso) */
function FLASH(frente,verso){FLASHCARDS.push({frente,verso})}
FLASH('O que é um número irracional?','Número real que não pode ser escrito como fração (ex.: √2, π).');
FLASH('Critério de divisibilidade por 3','A soma dos algarismos é divisível por 3.');
FLASH('MMC','Menor número positivo que é múltiplo de todos os números dados.');
FLASH('MDC','Maior número que divide todos os números dados.');
FLASH('aᵐ · aⁿ','aᵐ⁺ⁿ (soma os expoentes).');
FLASH('x% de N','N · x / 100');

/* ===== DADOS DA PÁGINA INICIAL (index.html) — troque pelos seus ===== */
const SITE={
  professora:'Dani Resulta',
  sobre:'Sou professora de Matemática licenciada, diagramadora e criadora do projeto ResultaMath. Acredito que a matemática não precisa ser complicada, por isso ensino de forma clara, visual e objetiva, transformando conceitos difíceis em ideias simples e acessíveis. Meu objetivo não é apenas ensinar a resolver questões, mas ajudar cada aluno a compreender a matemática e ganhar confiança para utilizá-la.',
  whatsapp:'5543999999999',   /* só números, com 55 + DDD. Deixe '' para esconder o botão */
  instagram:'',               /* ex.: https://instagram.com/seuperfil */
  youtube:'',                 /* ex.: https://youtube.com/@seucanal */
  email:''                    /* ex.: contato@seusite.com */
};

/* TRILHA MATEMÁTICA MINUTADA — cadastre os links em Configurações. */
const MINUTADA = [
  'Raiz quadrada','Potência','Porcentagem','PA','PG','Probabilidade','Mediana','Média','Moda','Regra de três','Logaritmo','Módulo de um número','Número oposto','Números pares e ímpares','Números primos','MMC','MDC','Frações','Frações equivalentes','Fração imprópria','Fatorial','Fração irredutível','Número decimal','Valor absoluto','Inverso de um número','Ângulos complementares','Ângulos suplementares','Perímetro','Área','Volume','Juros simples','Juros compostos'
].map((titulo, indice) => ({ id: slug(titulo), titulo, indice: indice + 1 }));
