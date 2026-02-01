// --- ICONS & DATA ---
const icons = {
    discord: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
    linkedin: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
    github: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    gmail: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819v-5.818l-5.454-3.818v9.636h-2.182v-9.636l-5.455 3.818v5.818h-3.818c-.904 0-1.636-.732-1.636-1.636v-13.909c0-.219.046-.432.129-.627l10.91 7.636 10.909-7.636c.083.195.129.409.129.627z"/></svg>`
};

const longLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`;
const articlesData = [
    { title: "SWITCHING TO LINUX", img: "assets/images/rice1.png", desc: "Why I moved from Windows to Arch.", longText: `MY JOURNEY TO ARCH LINUX\n\n${longLorem}` },
    { title: "ENABLE VRR XORG", img: "assets/images/xorg.png", desc: "Variable Refresh Rate Config.", longText: `XORG VRR GUIDE\n\n${longLorem}` }
];

const reposData = [
    { name: "NVIM-CONFIG", lang: "Lua", desc: "Neovim config.", date: "2025-12-01", url: "#" },
    { name: "ARCH-INSTALL", lang: "Bash", desc: "Arch install script.", date: "2026-01-10", url: "#" }
];

const socialData = [
    { name: "Discord", icon: icons.discord, link: "https://discord.com", img: "assets/images/discordthumbail.png", desc: "A place to talk, chat, hang out." },
    { name: "Github", icon: icons.github, link: "https://github.com", img: "assets/images/githubthumbnail.png", desc: "My open source repositories." }
];

// --- ELEMENTS ---
const bootTrigger = document.getElementById('boot-trigger');
const biosTrigger = document.getElementById('bios-trigger');
const screenTrigger = document.getElementById('screen-trigger');
const navHome = document.getElementById('nav-home');
const navArticles = document.getElementById('nav-articles');
const navRepos = document.getElementById('nav-repos');
const navSocials = document.getElementById('nav-socials');
const navUnix = document.getElementById('nav-unix');
const lainImg = document.getElementById('lain-img');
const hackOverlay = document.getElementById('hack-overlay');
const biosOverlay = document.getElementById('bios-overlay');

// Modals
const articleContainer = document.getElementById('article-overlay-container');
const articlesListOverlay = document.getElementById('articles-list-overlay');
const reposContainer = document.getElementById('repos-overlay-container');
const socialsContainer = document.getElementById('socials-overlay-container');
const unixGalleryOverlay = document.getElementById('unix-gallery-overlay');

const mainStage = document.getElementById('main-stage');
const hackOutput = document.getElementById('hack-output');
const hackInputLine = document.getElementById('hack-input-line');
const userInputDisplay = document.getElementById('user-input');

// --- PRELOADER ---
const allImages = ["assets/images/lainheader.png", "assets/images/lain.gif", "assets/images/rice1.png", "assets/images/xorg.png"];
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
            setTimeout(() => { loadingScreen.style.display = 'none'; document.getElementById('lain-img').src = "assets/images/lainheader.png"; }, 500);
        }, 200);
    }
}
allImages.forEach(src => { const img = new Image(); img.onload = checkLoad; img.src = src; });

// --- SYSTEM VARS ---
let systemState = 'idle'; let userInput = ""; let intervals = [];
const codeSnippets = ["sudo inject --force -p 8080", "decrypting...", "accessing mainframe..."];
const fakeProcesses = [{ cmd: "systemd", pid: 1 }, { cmd: "discord", pid: 4055 }];

function resetAll() {
    systemState = 'idle'; intervals.forEach(clearInterval); intervals = [];
    hackOverlay.style.display = 'none'; biosOverlay.style.display = 'none';
    lainImg.style.opacity = '1'; lainImg.src = 'assets/images/lainheader.png';
    bootTrigger.textContent = "BOOT"; bootTrigger.classList.remove('active');
    biosTrigger.textContent = "BIOS"; biosTrigger.classList.remove('active');
    screenTrigger.textContent = "SCREEN"; screenTrigger.classList.remove('active');
    hackOutput.innerHTML = ""; userInput = "";
}

function closeAllOverlays(e, exceptContainer) {
    const modals = [articleContainer, articlesListOverlay, reposContainer, socialsContainer, unixGalleryOverlay];
    modals.forEach(modal => {
        if (modal !== exceptContainer && modal.style.display !== 'none') {
            modal.classList.remove('active');
            setTimeout(() => { modal.style.display = 'none'; }, 300);
        }
    });
    if (!exceptContainer) mainStage.classList.remove('blur');
}

// --- ARTICLES & REPOS ---
function openArticlesList() {
    closeAllOverlays(null, articlesListOverlay);
    const container = document.getElementById('articles-list-content');
    container.innerHTML = '';
    articlesData.forEach((article, index) => {
        const row = document.createElement('div');
        row.className = 'article-row';
        row.onclick = () => openArticle(index);
        row.innerHTML = `<div class="article-row-thumb"><img src="${article.img}"></div><div class="article-row-info"><div class="article-row-title">${article.title}</div><div class="article-row-desc">${article.desc}</div></div>`;
        container.appendChild(row);
    });
    articlesListOverlay.style.display = 'flex';
    requestAnimationFrame(() => { articlesListOverlay.classList.add('active'); mainStage.classList.add('blur'); });
}

function openArticle(index) {
    closeAllOverlays(null, articleContainer);
    const data = articlesData[index];
    document.getElementById('exp-title').textContent = data.title;
    document.getElementById('exp-img').src = data.img;
    document.getElementById('exp-text').textContent = data.longText;
    articleContainer.style.display = 'flex';
    requestAnimationFrame(() => { articleContainer.classList.add('active'); mainStage.classList.add('blur'); });
}

function openRepos() {
    closeAllOverlays(null, reposContainer);
    const container = document.getElementById('repos-list-content');
    container.innerHTML = '';
    reposData.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'repo-row-card';
        card.innerHTML = `<div class="repo-header"><span class="repo-name">${repo.name}</span></div><button class="repo-get-btn">GET</button><div>${repo.desc}</div>`;
        container.appendChild(card);
    });
    reposContainer.style.display = 'flex';
    requestAnimationFrame(() => { reposContainer.classList.add('active'); mainStage.classList.add('blur'); });
}

// --- UNIX GALLERY LOGIC ---
let currentZoom = 1;
let isDragging = false;
let startX, startY, translateX = 0, translateY = 0;

function openUnix() {
    closeAllOverlays(null, unixGalleryOverlay);
    resetZoom();
    unixGalleryOverlay.style.display = 'flex';
    requestAnimationFrame(() => { unixGalleryOverlay.classList.add('active'); mainStage.classList.add('blur'); });
}

function zoomImage(factor) {
    currentZoom += factor;
    currentZoom = Math.min(Math.max(0.5, currentZoom), 3);
    updateImageTransform();
}

function resetZoom() { currentZoom = 1; translateX = 0; translateY = 0; updateImageTransform(); }

function updateImageTransform() {
    const img = document.getElementById('unix-image');
    img.style.transform = `scale(${currentZoom}) translate(${translateX}px, ${translateY}px)`;
}

function startDrag(e) {
    e.preventDefault();
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}

function drag(e) {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateImageTransform();
}

function stopDrag() { isDragging = false; document.removeEventListener('mousemove', drag); }

// EVENT LISTENERS
navHome.addEventListener('click', () => closeAllOverlays(null, null));
navArticles.addEventListener('click', openArticlesList);
navRepos.addEventListener('click', openRepos);
navSocials.addEventListener('click', () => { socialsContainer.style.display = 'flex'; socialsContainer.classList.add('active'); mainStage.classList.add('blur'); });
navUnix.addEventListener('click', openUnix);
bootTrigger.addEventListener('click', () => startBoot());
biosTrigger.addEventListener('click', () => startBios());

function startBoot() {
    systemState = 'boot_loading'; hackOverlay.style.display = 'flex'; lainImg.style.opacity = '0';
    bootTrigger.textContent = "EXIT"; bootTrigger.classList.add('active');
    let progress = 0;
    const bootInt = setInterval(() => {
        progress++;
        hackOutput.innerHTML = "INITIALIZING...<br>" + "[".padEnd(progress, "|").padEnd(20, ".") + "]";
        if(progress >= 20) { clearInterval(bootInt); hackOutput.innerHTML += "<br>BOOT COMPLETE."; }
    }, 50);
}

function startBios() {
    systemState = 'bios_run'; biosOverlay.style.display = 'flex'; lainImg.style.opacity = '0';
    biosTrigger.textContent = "EXIT"; biosTrigger.classList.add('active');
    const tbody = document.getElementById('proc-list-body');
    fakeProcesses.forEach(proc => { tbody.innerHTML += `<tr><td>${proc.pid}</td><td>root</td><td>0%</td><td>0%</td><td>${proc.cmd}</td></tr>`; });
}
