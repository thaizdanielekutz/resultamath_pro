
/* ===== MENU DA PLATAFORMA ===== */

const ITENS = [
    ['inicio', '⌂', 'Visão geral'],
    ['biblioteca', '▤', 'Biblioteca de aulas'],
    ['minutada', '▶', 'Matemática Minutada'],
    ['exercicios', '✓', 'Exercícios'],
    ['resolucoes', '▣', 'Resoluções em vídeo'],
    ['simulados', '▧', 'Simulados'],
    ['flashcards', '▤', 'Flashcards'],
    ['erros', '↺', 'Caderno de erros'],
    ['plano', '◷', 'Plano de estudos'],
    ['desempenho', '▥', 'Meu desempenho'],
    ['comunidade', '◎', 'Comunidade'],
    ['configuracoes', '⚙', 'Configurações']
];


/* ===== ARMAZENAMENTO DOS DADOS ===== */

let S = {
    nome: '',
    feitas: {},
    resp: {},
    erros: [],
    simulados: [],
    videosAulas: {},
    videosQuestoes: {},
    videosMinutados: {}
};

try {
    Object.assign(
        S,
        JSON.parse(localStorage.getItem('resultamath') || '{}')
    );
} catch (e) {}

S.videosAulas = S.videosAulas || {};
S.videosQuestoes = S.videosQuestoes || {};
S.videosMinutados = S.videosMinutados || {};


/* ===== SALVAR PROGRESSO ===== */

function salvar() {
    try {
        localStorage.setItem('resultamath', JSON.stringify(S));
    } catch (e) {
        alert('Não foi possível salvar neste navegador. Exporte um backup e tente novamente.');
    }
}


/* ===== FUNÇÕES GERAIS ===== */

function pct(n, d) {
    return d ? Math.round(100 * n / d) : 0;
}

function barra(p) {
    return `
        <div class="barra" role="img" aria-label="${p}%">
            <i style="width:${Math.max(0, Math.min(100, p))}%"></i>
        </div>
    `;
}

function proxima() {
    return AULAS.find(a => !S.feitas[a.id]);
}

function modulos() {
    const g = {};

    AULAS.forEach(a => {
        (g[a.modulo] = g[a.modulo] || []).push(a);
    });

    return Object.keys(g).map(n => ({
        nome: n,
        aulas: g[n]
    }));
}


/* ===== CONVERSÃO DE LINKS DE VÍDEO ===== */

function videoUrl(url) {
    try {
        const u = new URL(String(url || '').trim());
        let id = '';

        // Links curtos do YouTube
        if (u.hostname === 'youtu.be') {
            id = u.pathname.split('/').filter(Boolean)[0] || '';
        }

        // Links tradicionais e de incorporação
        else if (
            u.hostname.includes('youtube.com') ||
            u.hostname.includes('youtube-nocookie.com')
        ) {
            id = u.searchParams.get('v') || '';

            if (!id) {
                const parts = u.pathname.split('/').filter(Boolean);

                if (['embed', 'shorts', 'live'].includes(parts[0])) {
                    id = parts[1] || '';
                }
            }
        }

        // Retorna o endereço padrão de incorporação
        if (id && /^[\w-]{11}$/.test(id)) {
            return 'https://www.youtube.com/embed/' + id;
        }

        // Suporte ao Vimeo
        if (
            u.hostname === 'player.vimeo.com' &&
            u.pathname.startsWith('/video/')
        ) {
            return u.href;
        }

    } catch (e) {}

    return '';
}


/* ===== PLAYER DE VÍDEO ===== */

function player(url, title) {
    const src = videoUrl(url);

    if (src) {
        return `
            <div class="video">
                <iframe
                    src="${src}?rel=0"
                    title="${String(title || 'Vídeo').replace(/["<>]/g, '')}"
                    loading="lazy"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
        `;
    }

    return `
        <div class="video-placeholder">
            <div>
                <b>Vídeo ainda não cadastrado</b>
                <p>
                    Adicione o link em
                    Configurações → Gerenciar vídeos.
                </p>
            </div>
        </div>
    `;
}


/* ===== ESTRUTURA PRINCIPAL DA PLATAFORMA ===== */

function pagina(ativo) {

    document.body.innerHTML = `
        <div class="layout">

            <nav class="menu" id="menu">

                <a class="logo" href="inicio.html">
                    Resultamath
                </a>

                <div class="nav-label">
                    Sua plataforma
                </div>

                ${ITENS.map(i => `
                    <a
                        href="${i[0]}.html"
                        ${i[0] === ativo
                            ? 'class="ativo" aria-current="page"'
                            : ''}
                    >
                        <span>${i[1]}</span>
                        ${i[2]}
                    </a>
                `).join('')}

                <a href="index.html" class="voltar">
                    ← Página institucional
                </a>

            </nav>

            <div class="conteudo">

                <header class="topo">

                    <a class="logo" href="inicio.html">
                        Resultamath
                    </a>

                    <button
                        class="btn sec"
                        onclick="document.getElementById('menu').classList.toggle('aberto')"
                    >
                        ☰ Menu
                    </button>

                </header>

                <main id="main"></main>

            </div>

        </div>
    `;

    return document.getElementById('main');
}
