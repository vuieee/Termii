const icons = {
    discord: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
    linkedin: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
    github: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    gmail: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819v-5.818l-5.454-3.818v9.636h-2.182v-9.636l-5.455 3.818v5.818h-3.818c-.904 0-1.636-.732-1.636-1.636v-13.909c0-.219.046-.432.129-.627l10.91 7.636 10.909-7.636c.083.195.129.409.129.627z"/></svg>`
};

const longLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

const articlesData = [
    { title: "SWITCHING TO LINUX", img: "assets/images/rice1.png", desc: "Why I moved from Windows to Arch.", longText: `MY JOURNEY TO ARCH LINUX\n\n${longLorem}` },
    { title: "ENABLE VRR XORG", img: "assets/images/xorg.png", desc: "Variable Refresh Rate Config.", longText: `XORG VRR GUIDE\n\n${longLorem}` }
];

const reposData = [
    { name: "DUSKY", lang: "CSS", desc: "My saved .dotfiles for my current linux install made by dusky.", date: "2024", url: "https://github.com/vuieee/dusky" },
    { name: "TERMII", lang: "HTML", desc: "A stylized terminal website.", date: "2026", url: "https://github.com/vuieee/Termii" },
    { name: "SPOTIFYGITHUBRP", lang: "JS", desc: "Spotify Rich Presence for Github.", date: "2025", url: "https://github.com/vuieee/SpotifyGithubRP" }
];

function loadRecommendedRepos() {
    const shuffled = [...reposData].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 2);
    const container = document.getElementById('recommended-repos');
    container.innerHTML = '';
    selected.forEach(repo => {
        container.innerHTML += `
            <div class="repo-card">
                <div class="header-text" style="margin-bottom:0.5vh;">${repo.name}</div>
                <div class="body-text text-xs opacity-50">${repo.lang} • <br>${repo.desc}</div>
                <button class="btn-get" onclick="window.open('${repo.url}', '_blank')">GET</button>
            </div>
        `;
    });
}
loadRecommendedRepos();

const socialData = [
    { name: "Discord", icon: icons.discord, link: "https://discord.com", img: "assets/images/discordthumbail.png", desc: "A place to talk, chat, hang out, and stay close with your friends and communities." },
    { name: "LinkedIn", icon: icons.linkedin, link: "https://linkedin.com", img: "assets/images/linkedinthumbnail.png", desc: "Manage your professional identity. Build and engage with your professional network." },
    { name: "Github", icon: icons.github, link: "https://github.com", img: "assets/images/githubthumbnail.png", desc: "My open source repositories." },
    { name: "Gmail", icon: icons.gmail, link: "mailto:user@gmail.com", img: "assets/images/gmailthumbnail.png", desc: "Send me a direct message." }
];

const musieeSongs = [
    { title: "Snowman", artist: "Sia", src: "assets/music/Sia - Snowman.mp3" },
    { title: "undressed", artist: "sombr", src: "assets/music/sombr - undressed.mp3" },
    { title: "Those Eyes", artist: "New West", src: "assets/music/Those Eyes.mp3" },
    { title: "Valentine", artist: "Laufey", src: "assets/music/Valentine.mp3" },
    { title: "Something About You", artist: "Eyedress", src: "assets/music/Something About You.mp3" },
    { title: "falling in love", artist: "JVKE", src: "assets/music/this is what falling in love feels like (Multilingual).mp3" }
];

const biosData = {
    tabs: ['MAIN', 'ADVANCED', 'BOOT', 'EXIT'],
    content: {
        'MAIN': [
            { label: "System Time", value: "19:18:06", type: "info" },
            { label: "System Date", value: "03/26/2026", type: "info" },
            { label: "Memory Size", value: "16384 MB", type: "info" },
            { label: "CPU Type", value: "Intel(R) Core(TM) i5", type: "info" }
        ],
        'ADVANCED': [
            { label: "Virtualization", value: "Enabled", type: "toggle", options: ["Enabled", "Disabled"] },
            { label: "Fast Boot", value: "Disabled", type: "toggle", options: ["Enabled", "Disabled"] },
            { label: "Hyper-Threading", value: "Enabled", type: "toggle", options: ["Enabled", "Disabled"] }
        ],
        'BOOT': [
            { label: "Boot Option #1", value: "TermiiOS", type: "info" },
            { label: "Boot Option #2", value: "Windows Boot Manager", type: "info" },
            { label: "Secure Boot", value: "Disabled", type: "toggle", options: ["Enabled", "Disabled"] }
        ],
        'EXIT': [
            { label: "Save Changes and Exit", type: "action", action: "exit" },
            { label: "Discard Changes and Exit", type: "action", action: "exit" }
        ]
    }
};

let biosCurrentTabIdx = 0;
let biosCurrentItemIdx = 0;

const bootTrigger = document.getElementById('boot-trigger');
const biosTrigger = document.getElementById('bios-trigger');
const screenTrigger = document.getElementById('screen-trigger');
const navHome = document.getElementById('nav-home');
const navArticles = document.getElementById('nav-articles');
const navRepos = document.getElementById('nav-repos');
const navSocials = document.getElementById('nav-socials');
const lainImg = document.getElementById('lain-img');
const hackOverlay = document.getElementById('hack-overlay');
const biosOverlay = document.getElementById('bios-overlay');
const matrixCanvas = document.getElementById('matrix-canvas');

const articleContainer = document.getElementById('article-overlay-container');
const articlesListOverlay = document.getElementById('articles-list-overlay');
const reposContainer = document.getElementById('repos-overlay-container');
const socialsContainer = document.getElementById('socials-overlay-container');

const mainStage = document.getElementById('main-stage');
const hackOutput = document.getElementById('hack-output');
const hackInputLine = document.getElementById('hack-input-line');
const userInputDisplay = document.getElementById('user-input');

const allImages = [
    "assets/images/lainheader.png", "assets/images/lain.gif", "assets/images/rice1.png", 
    "assets/images/xorg.png", "assets/images/discordthumbail.png", "assets/images/linkedinthumbnail.png",
    "assets/images/githubthumbnail.png", "assets/images/gmailthumbnail.png"
];

let loadedCount = 0;
const totalImages = allImages.length;
const loadingScreen = document.getElementById('loading-screen');
const loadingBar = document.getElementById('loading-bar');
const mainContent = document.getElementById('main-content');

function checkLoad() {
    loadedCount++;
    const pct = Math.floor((loadedCount / totalImages) * 100);
    loadingBar.style.width = pct + "%";
    if (loadedCount >= totalImages) {
        setTimeout(() => {
            loadingScreen.style.opacity = 0;
            mainContent.classList.add('active');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                document.getElementById('lain-img').src = "assets/images/lainheader.png";
                document.querySelectorAll('.article-thumb img').forEach((img, idx) => {
                    if(articlesData[idx]) img.src = articlesData[idx].img;
                });
            }, 500);
        }, 200);
    }
}

allImages.forEach(src => {
    const img = new Image();
    img.onload = checkLoad; img.onerror = checkLoad; img.src = src;
});

let systemState = 'idle'; let userInput = ""; let intervals = []; let closeTimeout = null;

function resetAll() {
    systemState = 'idle'; 
    intervals.forEach(clearInterval); 
    intervals = [];
    hackOverlay.style.display = 'none'; 
    biosOverlay.style.display = 'none';
    matrixCanvas.style.display = 'none'; 
    matrixCanvas.style.opacity = '0';
    
    // Clear canvas rect to ensure memory wipe
    const ctx = matrixCanvas.getContext('2d');
    ctx.clearRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    
    lainImg.style.opacity = '1'; 
    lainImg.src = 'assets/images/lainheader.png';
    bootTrigger.textContent = "BOOT"; bootTrigger.classList.remove('active');
    biosTrigger.textContent = "BIOS"; biosTrigger.classList.remove('active');
    screenTrigger.textContent = "SCREEN"; screenTrigger.classList.remove('active');
    
    hackOutput.innerHTML = ""; 
    userInput = "";
    userInputDisplay.textContent = "";
}

function closeAllOverlays(e, exceptContainer) {
    if(closeTimeout) clearTimeout(closeTimeout);
    const modals = [articleContainer, articlesListOverlay, reposContainer, socialsContainer];
    modals.forEach(modal => {
        if (modal !== exceptContainer && modal.style.display !== 'none') {
            modal.classList.remove('active');
            setTimeout(() => { modal.style.display = 'none'; }, 300);
        }
    });
    if (!exceptContainer) mainStage.classList.remove('blur');
}

function openArticlesList() {
    closeAllOverlays(null, articlesListOverlay);
    const container = document.getElementById('articles-list-content');
    container.innerHTML = '';
    articlesData.forEach((article, index) => {
        const row = document.createElement('div');
        row.className = 'article-row';
        row.onclick = () => openArticle(index);
        row.innerHTML = `
            <div class="article-row-thumb"><div class="scanlines"></div><img src="${article.img}"></div>
            <div class="article-row-info"><div class="article-row-title">${article.title}</div><div class="article-row-desc">${article.desc}</div></div>`;
        container.appendChild(row);
    });
    articlesListOverlay.style.display = 'flex';
    requestAnimationFrame(() => { articlesListOverlay.classList.add('active'); mainStage.classList.add('blur'); });
}

function openArticle(index) {
    closeAllOverlays(null, articleContainer);
    const data = articlesData[index];
    const otherIndex = (index === 0) ? 1 : 0;
    const recData = articlesData[otherIndex];
    document.getElementById('exp-title').textContent = data.title;
    document.getElementById('exp-img').src = data.img;
    document.getElementById('exp-text').textContent = data.longText;
    document.getElementById('rec-card-container').innerHTML = `
        <div class="rec-card" onclick="switchArticle(${otherIndex}); event.stopPropagation();">
            <div class="header-text" style="font-size:0.6rem; margin-bottom:0.5vh;">${recData.title}</div>
            <div class="rec-thumb"><div class="scanlines"></div><img src="${recData.img}"></div>
            <div class="body-text text-xs opacity-50">${recData.desc}</div>
        </div>`;
    articleContainer.style.display = 'flex';
    requestAnimationFrame(() => { articleContainer.classList.add('active'); mainStage.classList.add('blur'); });
}

function switchArticle(index) {
    const content = document.getElementById('article-main-col');
    content.classList.add('switching');
    setTimeout(() => { openArticle(index); content.scrollTop = 0; content.classList.remove('switching'); }, 200);
}

function openRepos() {
    closeAllOverlays(null, reposContainer);
    renderReposModal();
    reposContainer.style.display = 'flex';
    requestAnimationFrame(() => { reposContainer.classList.add('active'); mainStage.classList.add('blur'); });
}

function renderReposModal() {
    const container = document.getElementById('repos-list-content');
    const searchVal = document.getElementById('repo-search').value.toLowerCase();
    const langVal = document.getElementById('repo-lang').value;
    const sortVal = document.getElementById('repo-sort').value;
    container.innerHTML = '';
    let filtered = reposData.filter(repo => {
        const matchesSearch = repo.name.toLowerCase().includes(searchVal) || repo.desc.toLowerCase().includes(searchVal);
        const matchesLang = langVal === 'ALL' || repo.lang.includes(langVal);
        return matchesSearch && matchesLang;
    });
    filtered.sort((a, b) => {
        if (sortVal === 'new') return a.name.localeCompare(b.name);
        if (sortVal === 'old') return b.name.localeCompare(a.name);
        if (sortVal === 'name') return a.name.localeCompare(b.name);
    });
    filtered.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'repo-row-card';
        card.innerHTML = `
            <div class="repo-header"><span class="repo-name">${repo.name}</span></div>
            <button class="repo-get-btn" onclick="window.open('${repo.url}', '_blank')">GET</button>
            <div class="repo-desc-row">${repo.desc}</div>
            <div class="repo-meta"><span>LANG: ${repo.lang}</span></div>`;
        container.appendChild(card);
    });
}
document.getElementById('repo-search').addEventListener('input', renderReposModal);
document.getElementById('repo-lang').addEventListener('change', renderReposModal);
document.getElementById('repo-sort').addEventListener('change', renderReposModal);

function populateSocials() {
    const listContainer = document.getElementById('socials-list-container');
    listContainer.innerHTML = '';
    if(socialData.length > 0) {
        document.getElementById('soc-prev-img').src = socialData[0].img;
        document.getElementById('soc-prev-desc').textContent = socialData[0].desc;
    }
    socialData.forEach((item, index) => {
        const capsule = document.createElement('div');
        capsule.className = 'social-capsule';
        const info = document.createElement('div');
        info.className = 'social-info';
        if(index === 0) info.classList.add('active');
        info.innerHTML = `${item.icon} <span class="header-text" style="font-size:0.7rem; margin:0;">${item.name}</span>`;
        info.onclick = () => {
            document.getElementById('soc-prev-img').src = item.img;
            document.getElementById('soc-prev-desc').textContent = item.desc;
            document.querySelectorAll('.social-info').forEach(el => el.classList.remove('active'));
            info.classList.add('active');
        };
        const arrow = document.createElement('div');
        arrow.className = 'social-arrow';
        arrow.innerHTML = '&#8599;'; 
        arrow.onclick = () => window.open(item.link, '_blank');
        capsule.appendChild(info);
        capsule.appendChild(arrow);
        listContainer.appendChild(capsule);
    });
}

function openSocials() {
    closeAllOverlays(null, socialsContainer);
    populateSocials();
    socialsContainer.style.display = 'flex';
    requestAnimationFrame(() => { socialsContainer.classList.add('active'); mainStage.classList.add('blur'); });
}

bootTrigger.addEventListener('click', () => { if (systemState === 'idle') startBoot(); else resetAll(); });
biosTrigger.addEventListener('click', () => { if (systemState === 'idle') startBios(); else resetAll(); });
screenTrigger.addEventListener('click', () => { if (systemState === 'idle') { systemState = 'screen_gif'; lainImg.src = 'assets/images/lain.gif'; screenTrigger.textContent = 'EXIT'; screenTrigger.classList.add('active'); } else { resetAll(); } });

navHome.addEventListener('click', () => closeAllOverlays(null, null));
navArticles.addEventListener('click', openArticlesList);
navRepos.addEventListener('click', openRepos);
navSocials.addEventListener('click', openSocials);

function startBoot() {
    systemState = 'boot_loading'; hackOverlay.style.display = 'flex'; lainImg.style.opacity = '0';
    bootTrigger.textContent = "EXIT"; bootTrigger.classList.add('active');
    hackOutput.innerHTML = "INITIALIZING BIOS..."; hackInputLine.style.display = 'none';
    let progress = 0;
    const bootInt = setInterval(() => {
        progress++; let bar = "["; for(let i=0; i<20; i++) bar += (i < progress) ? "|" : "."; bar += "]";
        hackOutput.innerHTML = "INITIALIZING BIOS...<br>" + bar;
        if(progress >= 20) { clearInterval(bootInt); showLoginPrompt(); }
    }, 50);
    intervals.push(bootInt);
}

function showLoginPrompt() { 
    systemState = 'boot_wait'; 
    hackOutput.innerHTML += "<br><br>SYSTEM BOOT INITIATED...<br>AWAITING COMMAND...<br>Type HELP for a list of commands.<br>"; 
    hackInputLine.style.display = 'block'; 
    hackOutput.scrollTop = hackOutput.scrollHeight;
}

function startSystemBoot() {
    systemState = 'ultrakill_boot';
    hackInputLine.style.display = 'none';
    
    const tasks = [
        { name: "Loading Bootloader", result: "OK", color: "var(--term-green)" },
        { name: "Mounting Virtual FS", result: "OK", color: "var(--term-green)" },
        { name: "Checking CPU Microcode", result: "OK", color: "var(--term-green)" },
        { name: "Allocating Memory Pages", result: "16384M OK", color: "var(--term-green)" },
        { name: "Initializing GPU Drivers", result: "OK", color: "var(--term-green)" },
        { name: "Loading Kernel Modules", result: "OK", color: "var(--term-green)" },
        { name: "Starting System Daemons", result: "OK", color: "var(--term-green)" },
        { name: "Verifying Security Hashes", result: "OK", color: "var(--term-green)" }
    ];

    let taskIdx = 0;

    function doTask() {
        if (taskIdx >= tasks.length) {
            setTimeout(() => {
                hackOutput.innerHTML += "<br>Boot Sequence Complete.<br>Deploying Visual Environment...<br>";
                hackOutput.scrollTop = hackOutput.scrollHeight;
                setTimeout(startMatrix, 800);
            }, 500);
            return;
        }

        const t = tasks[taskIdx];
        const lineId = "task-" + taskIdx;
        hackOutput.innerHTML += `<div id="${lineId}">${t.name}</div>`;
        hackOutput.scrollTop = hackOutput.scrollHeight;
        const el = document.getElementById(lineId);

        let dots = 0;
        const maxDots = 25 - t.name.length > 3 ? 25 - t.name.length : 5; 
        
        const dotInt = setInterval(() => {
            el.innerHTML += ".";
            dots++;
            if (dots >= maxDots) {
                clearInterval(dotInt);
                setTimeout(() => {
                    el.innerHTML += ` <span style="color:${t.color};">[${t.result}]</span>`;
                    hackOutput.scrollTop = hackOutput.scrollHeight;
                    taskIdx++;
                    setTimeout(doTask, Math.random() * 200 + 100); 
                }, Math.random() * 300 + 100);
            }
        }, 20);
    }

    doTask();
}

function printFastfetch() {
    const logo = `
████████╗███████╗██████╗ ███╗   ███╗██╗██╗
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║██║
   ██║   █████╗  ██████╔╝██╔████╔██║██║██║
   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝`.substring(1);

    const info = `
<span style="color:var(--term-teal);font-weight:bold;">root@termii</span>
-------------
<span style="color:var(--term-teal);font-weight:bold;">OS:</span> TermiiOS Web
<span style="color:var(--term-teal);font-weight:bold;">Host:</span> Browser Environment
<span style="color:var(--term-teal);font-weight:bold;">Kernel:</span> JS/HTML5
<span style="color:var(--term-teal);font-weight:bold;">Uptime:</span> System Active
<span style="color:var(--term-teal);font-weight:bold;">Packages:</span> 42 (npm)
<span style="color:var(--term-teal);font-weight:bold;">Shell:</span> termii-bash
<span style="color:var(--term-teal);font-weight:bold;">Resolution:</span> ${window.innerWidth}x${window.innerHeight}
<span style="color:var(--term-teal);font-weight:bold;">WM:</span> CSS Grid
<span style="color:var(--term-teal);font-weight:bold;">Theme:</span> Dusky [Dark]
<span style="color:var(--term-teal);font-weight:bold;">Terminal:</span> tty1
<span style="color:var(--term-teal);font-weight:bold;">CPU:</span> WebAssembly JIT
<span style="color:var(--term-teal);font-weight:bold;">Memory:</span> Allocated`.substring(1);

    const ffHtml = `
<div style="display:flex; gap:20px; align-items:center; margin:15px 0;">
<div style="font-size:0.55rem; line-height:1.2; color:var(--term-teal); white-space:pre;">${logo}</div>
<div style="font-size:0.65rem; line-height:1.4; white-space:pre;">${info}</div>
</div>
    `;
    hackOutput.innerHTML += ffHtml;
    hackOutput.scrollTop = hackOutput.scrollHeight;
}

function startMatrix() {
    systemState = 'matrix_run';
    hackOutput.innerHTML = "";
    matrixCanvas.style.display = 'block';
    setTimeout(() => { matrixCanvas.style.opacity = '1'; }, 50);
    
    const ctx = matrixCanvas.getContext('2d');
    matrixCanvas.width = matrixCanvas.parentElement.clientWidth;
    matrixCanvas.height = matrixCanvas.parentElement.clientHeight;
    
    // Mix of Latin and Katakana for the true Matrix aesthetic
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ".split('');
    const fontSize = 16; 
    const columns = matrixCanvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    const matrixInt = setInterval(() => {
        // Fade effect to create trails
        ctx.fillStyle = "rgba(0, 0, 0, 0.08)"; 
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        
        ctx.font = fontSize + "px 'Fira Code', monospace";
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            
            // Draw current leading character in white
            ctx.fillStyle = "#FFF";
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            // Overwrite the previous character with teal to create the fading trail
            ctx.fillStyle = "#50fff7";
            ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, (drops[i] - 1) * fontSize);
            
            // Reset drop randomly after it crosses the screen
            if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }, 33);
    intervals.push(matrixInt);
}

function startBios() {
    systemState = 'bios_run'; 
    biosOverlay.style.display = 'flex'; 
    lainImg.style.opacity = '0';
    biosTrigger.textContent = "EXIT"; 
    biosTrigger.classList.add('active');
    
    biosCurrentTabIdx = 0;
    biosCurrentItemIdx = 0;
    renderBios();
}

function renderBios() {
    const tabContainer = document.getElementById('bios-tabs');
    const menuContainer = document.getElementById('bios-menu');
    
    tabContainer.innerHTML = '';
    biosData.tabs.forEach((tab, index) => {
        const tabEl = document.createElement('div');
        tabEl.className = 'bios-tab' + (index === biosCurrentTabIdx ? ' active' : '');
        tabEl.innerText = tab;
        tabContainer.appendChild(tabEl);
    });

    menuContainer.innerHTML = '';
    const currentTabName = biosData.tabs[biosCurrentTabIdx];
    const items = biosData.content[currentTabName];
    
    items.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = 'bios-item-row' + (index === biosCurrentItemIdx ? ' selected' : '');
        
        const label = document.createElement('span');
        label.innerText = item.label;
        row.appendChild(label);
        
        if (item.value !== undefined) {
            const val = document.createElement('span');
            val.innerText = item.type === 'toggle' ? `[${item.value}]` : item.value;
            row.appendChild(val);
        }
        
        menuContainer.appendChild(row);
    });
}


let mCurrentIndex = 0;
let mIsPlaying = false;
const audioEl = document.getElementById("audio-element");
const mTitle = document.getElementById("m-title");
const mArtist = document.getElementById("m-artist");
const mIndex = document.getElementById("m-index");
const mTime = document.getElementById("m-time");
const visContainer = document.getElementById("m-vis");
const visBase = document.getElementById("m-vis-base");
const playlistBox = document.getElementById("m-playlist");

musieeSongs.forEach((song, idx) => {
    const div = document.createElement("div");
    div.className = "playlist-item";
    div.tabIndex = 0; // Allow keyboard focus
    div.innerHTML = `&nbsp;&nbsp;${idx + 1}&nbsp;&nbsp;&nbsp;${song.title} - ${song.artist}`;
    
    div.onclick = () => { 
        if (mCurrentIndex === idx) {
            togglePlay(); // Toggle if clicking the active one
        } else {
            mCurrentIndex = idx;
            loadSong(mCurrentIndex); 
            playSong(); 
        }
    };

    div.onkeydown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (mCurrentIndex === idx) {
                togglePlay();
            } else {
                mCurrentIndex = idx;
                loadSong(mCurrentIndex); 
                playSong(); 
            }
        }
    };

    playlistBox.appendChild(div);
});

for(let i=0; i<25; i++) {
    const bar = document.createElement("div");
    bar.className = "vis-bar";
    bar.style.height = "5px";
    visContainer.appendChild(bar);
    
    const baseSym = document.createElement("span");
    baseSym.innerText = "=";
    visBase.appendChild(baseSym);
}

function updateVisualizer() {
    const bars = document.querySelectorAll(".vis-bar");
    if(mIsPlaying) {
        bars.forEach(bar => {
            const height = Math.random() * 30 + 5;
            bar.style.height = height + "px";
        });
    } else {
        bars.forEach(bar => {
            bar.style.height = "5px";
        });
    }
}
setInterval(updateVisualizer, 150);

function loadSong(index) {
    audioEl.src = musieeSongs[index].src;
    mTitle.innerText = musieeSongs[index].title;
    mArtist.innerText = musieeSongs[index].artist;
    mIndex.innerText = `${index + 1} / ${musieeSongs.length}`;
    
    const items = playlistBox.querySelectorAll('.playlist-item');
    items.forEach((el, i) => {
        if (i === index) {
            el.classList.add("active");
            el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            el.classList.remove("active");
        }
    });

    updateTimeDisplay(0, 1);
}

function playSong() {
    mIsPlaying = true;
    audioEl.play().catch(e => console.log("Audio play prevented:", e));
}

function pauseSong() {
    mIsPlaying = false;
    audioEl.pause();
}

function togglePlay() {
    if (mIsPlaying) pauseSong();
    else playSong();
}

function prevSong() {
    mCurrentIndex = (mCurrentIndex - 1 + musieeSongs.length) % musieeSongs.length;
    loadSong(mCurrentIndex);
    if (mIsPlaying) playSong();
}

function nextSong() {
    mCurrentIndex = (mCurrentIndex + 1) % musieeSongs.length;
    loadSong(mCurrentIndex);
    if (mIsPlaying) playSong();
}

audioEl.addEventListener("timeupdate", () => {
    const current = audioEl.currentTime;
    const duration = audioEl.duration || 1;
    updateTimeDisplay(current, duration);
});

audioEl.addEventListener("ended", () => {
    nextSong();
});

function updateTimeDisplay(current, total) {
    const pct = Math.floor((current / total) * 100);
    mTime.innerText = formatTime(current) + " / " + formatTime(total) + " (" + pct + "%) Vol:100%";
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00:00";
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return (hrs < 10 ? "0" : "") + hrs + ":" + 
           (mins < 10 ? "0" : "") + mins + ":" + 
           (secs < 10 ? "0" : "") + secs;
}

loadSong(mCurrentIndex);

document.addEventListener('keydown', (e) => {
    if (systemState === 'bios_run') {
        e.preventDefault();
        const currentTabName = biosData.tabs[biosCurrentTabIdx];
        const items = biosData.content[currentTabName];
        
        if (e.key === "ArrowRight") {
            biosCurrentTabIdx = (biosCurrentTabIdx + 1) % biosData.tabs.length;
            biosCurrentItemIdx = 0;
            renderBios();
        } else if (e.key === "ArrowLeft") {
            biosCurrentTabIdx = (biosCurrentTabIdx - 1 + biosData.tabs.length) % biosData.tabs.length;
            biosCurrentItemIdx = 0;
            renderBios();
        } else if (e.key === "ArrowDown") {
            biosCurrentItemIdx = (biosCurrentItemIdx + 1) % items.length;
            renderBios();
        } else if (e.key === "ArrowUp") {
            biosCurrentItemIdx = (biosCurrentItemIdx - 1 + items.length) % items.length;
            renderBios();
        } else if (e.key === "Enter") {
            const selectedItem = items[biosCurrentItemIdx];
            if (selectedItem.type === 'toggle') {
                const currentOptIdx = selectedItem.options.indexOf(selectedItem.value);
                selectedItem.value = selectedItem.options[(currentOptIdx + 1) % selectedItem.options.length];
                renderBios();
            } else if (selectedItem.type === 'action' && selectedItem.action === 'exit') {
                resetAll();
            }
        } else if (e.key === "Escape") {
            resetAll();
        }
        return; 
    }
    
    if (systemState === 'boot_wait') {
        if (e.key === "Backspace") {
            userInput = userInput.slice(0, -1);
        } else if (e.key === "Enter") {
            if (userInput.toUpperCase() === "START") { 
                hackOutput.innerHTML += "> START<br>ACCESS GRANTED.<br>----------------<br>"; 
                startSystemBoot(); 
            } else if (userInput.toUpperCase() === "FASTFETCH") {
                hackOutput.innerHTML += `> FASTFETCH<br>`;
                printFastfetch();
                userInput = "";
            } else if (userInput.toUpperCase() === "CLEAR") {
                hackOutput.innerHTML = "";
                userInput = "";
            } else if (userInput.toUpperCase() === "HELP") {
                hackOutput.innerHTML += `> HELP<br>
AVAILABLE COMMANDS:<br>
<span style="color:var(--term-teal)">START</span>     - Initiates the system boot sequence.<br>
<span style="color:var(--term-teal)">FASTFETCH</span> - Displays system information and ASCII logo.<br>
<span style="color:var(--term-teal)">CLEAR</span>     - Clears the terminal output.<br>
<span style="color:var(--term-teal)">HELP</span>      - Displays this help message.<br>`;
                hackOutput.scrollTop = hackOutput.scrollHeight;
                userInput = "";
            } else { 
                hackOutput.innerHTML += `> ${userInput}<br>INVALID COMMAND.<br>`; 
                hackOutput.scrollTop = hackOutput.scrollHeight;
                userInput = ""; 
            }
        } else if (e.key.length === 1) {
            userInput += e.key;
        }
        userInputDisplay.textContent = userInput;
        return; 
    }
    
    if(document.activeElement.tagName === "INPUT" || document.activeElement.classList.contains("playlist-item")) return;
    
    if (e.key.toLowerCase() === "p") {
        prevSong();
    } else if (e.key.toLowerCase() === "n") {
        nextSong();
    } else if (e.key === " ") {
        e.preventDefault();
        togglePlay();
    }
});