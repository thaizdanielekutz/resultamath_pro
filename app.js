const ITENS=[
 ['inicio','⌂','Visão geral'],
 ['biblioteca','▤','Biblioteca de aulas'],
 ['minutada','▶','Matemática Minutada'],
 ['exercicios','✓','Exercícios'],
 ['resolucoes','▣','Resoluções em vídeo'],
 ['simulados','▧','Simulados'],
 ['flashcards','▤','Flashcards'],
 ['erros','↺','Caderno de erros'],
 ['plano','◷','Plano de estudos'],
 ['desempenho','▥','Meu desempenho'],
 ['comunidade','◎','Comunidade'],
 ['configuracoes','⚙','Configurações']
];

let S={
 nome:'',
 feitas:{},
 resp:{},
 erros:[],
 simulados:[],
 videosAulas:{},
 videosQuestoes:{},
 videosMinutados:{},
 videosResolucoes:{}
};

try{Object.assign(S,JSON.parse(localStorage.getItem('resultamath')||'{}'))}catch(e){}
S.videosAulas=S.videosAulas||{};
S.videosQuestoes=S.videosQuestoes||{};
S.videosMinutados=S.videosMinutados||{};
S.videosResolucoes=S.videosResolucoes||{};

function salvar(){
 try{localStorage.setItem('resultamath',JSON.stringify(S))}
 catch(e){alert('Não foi possível salvar neste navegador. Exporte um backup e tente novamente.')}
}

function pct(n,d){return d?Math.round(100*n/d):0}

function barra(p){
 return `<div class="barra" role="img" aria-label="${p}%"><i style="width:${Math.max(0,Math.min(100,p))}%"></i></div>`
}

function proxima(){return AULAS.find(a=>!S.feitas[a.id])}

function modulos(){
 const g={};
 AULAS.forEach(a=>(g[a.modulo]=g[a.modulo]||[]).push(a));
 return Object.keys(g).map(n=>({nome:n,aulas:g[n]}))
}

function videoUrl(url) {
  const raw = String(url || '').trim();
  if (!raw) return '';

  const matchIframe = raw.match(/<iframe[^>]*\ssrc=["']([^"']+)["']/i);
  const candidato = matchIframe ? matchIframe[1] : raw;

  try {
    const u = new URL(candidato);
    let id = '';

    if (u.hostname === 'youtu.be' || u.hostname.endsWith('.youtu.be')) {
      id = u.pathname.split('/').filter(Boolean)[0] || '';
    } else if (u.hostname.includes('youtube.com') || u.hostname.includes('youtube-nocookie.com')) {
      id = u.searchParams.get('v') || '';
      if (!id) {
        const parts = u.pathname.split('/').filter(Boolean);
        if (['embed', 'shorts', 'live'].includes(parts[0])) id = parts[1] || '';
        else if (parts[0] === 'watch') id = u.searchParams.get('v') || '';
      }
    }

    if (id && /^[\w-]{6,}$/.test(id)) {
      return 'https://www.youtube.com/embed/' + id;
    }

    if (u.hostname === 'player.vimeo.com' && u.pathname.startsWith('/video/')) {
      return u.href;
    }
  } catch (e) {}

  return '';
}

function player(url,title){
 const src=videoUrl(url);
 return src
  ?`<div class="video"><iframe src="${src}" title="${String(title||'Vídeo').replace(/["<>]/g,'')}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`
  :`<div class="video-placeholder"><div><b>Vídeo ainda não cadastrado</b><p>Adicione o link em Configurações → Gerenciar vídeos.</p></div></div>`
}

function pagina(ativo){
 document.body.innerHTML=`<div class="layout"><nav class="menu" id="menu"><a class="logo" href="inicio.html">Resultamath</a><div class="nav-label">Sua plataforma</div>${ITENS.map(i=>`<a href="${i[0]}.html"${i[0]===ativo?' class="ativo" aria-current="page"':''}><span>${i[1]}</span>${i[2]}</a>`).join('')}<a href="index.html" class="voltar">← Página institucional</a></nav><div class="conteudo"><header class="topo"><a class="logo" href="inicio.html">Resultamath</a><button class="btn sec" onclick="document.getElementById('menu').classList.toggle('aberto')">☰ Menu</button></header><main id="main"></main></div></div>`;
 return document.getElementById('main')
}
