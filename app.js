/* Código comum a todas as páginas: progresso salvo, menu e funções úteis */
const ITENS=[['inicio','Início'],['biblioteca','Biblioteca de aulas'],['exercicios','Exercícios'],['simulados','Simulados'],['flashcards','Flashcards'],['erros','Caderno de erros'],['plano','Plano de estudos'],['desempenho','Meu desempenho'],['comunidade','Comunidade'],['configuracoes','Configurações']];
let S={nome:'',feitas:{},resp:{},erros:[],simulados:[]};
try{Object.assign(S,JSON.parse(localStorage.getItem('resultamath')||'{}'))}catch(e){}
function salvar(){try{localStorage.setItem('resultamath',JSON.stringify(S))}catch(e){}}
function pct(n,d){return d?Math.round(100*n/d):0}
function barra(p){return `<div class="barra" role="img" aria-label="${p}%"><i style="width:${p}%"></i></div>`}
function proxima(){return AULAS.find(a=>!S.feitas[a.id])}
function modulos(){const g={};AULAS.forEach(a=>(g[a.modulo]=g[a.modulo]||[]).push(a));return Object.keys(g).map(n=>({nome:n,aulas:g[n]}))}
/* Monta o menu e devolve o elemento <main>. Se não houver login, volta para index.html */
function pagina(ativo){
  document.body.innerHTML=`<div class="layout"><nav class="menu" id="menu" aria-label="Menu principal"><div class="logo">Resultamath</div>${ITENS.map(i=>`<a href="${i[0]}.html"${i[0]==ativo?' class="ativo" aria-current="page"':''}>${i[1]}</a>`).join('')}<a href="index.html" class="voltar">Página inicial do site</a></nav><div><div class="topo"><b class="logo" style="padding:0">Resultamath</b><button class="btn sec" onclick="document.getElementById('menu').classList.toggle('aberto')">Menu</button></div><main id="main"></main></div></div>`;
  return document.getElementById('main');
}
