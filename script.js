const icons = {
    discord: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
    linkedin: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
    github: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    gmail: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819v-5.818l-5.454-3.818v9.636h-2.182v-9.636l-5.455 3.818v5.818h-3.818c-.904 0-1.636-.732-1.636-1.636v-13.909c0-.219.046-.432.129-.627l10.91 7.636 10.909-7.636c.083.195.129.409.129.627z"/></svg>`
};

function copyCode(btn) {
    const codeText = btn.previousElementSibling.innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        const originalText = btn.innerText;
        btn.innerText = "COPIED!";
        setTimeout(() => { btn.innerText = originalText; }, 2000);
    });
}

const article1Text = `
<div class="article-subtitle">MY JOURNEY TO ARCH LINUX: BEYOND WINDOWS</div>
For years, Windows was the default. It's what came on the laptop, it's what everyone used, and it's what gaming supposedly required. But eventually, the forced updates, background telemetry, and ever-increasing system bloat became too much to ignore. I needed a system that did exactly what I told it to do. Nothing more, nothing less. Enter Arch Linux.
<div class="article-subtitle">Why Arch?</div>
The appeal of Arch Linux lies in its DIY philosophy. Unlike Ubuntu or Mint which give you a pre-configured desktop, Arch gives you a black terminal screen and a blinking cursor. You build your OS from the ground up.
<div class="article-subtitle">The Installation</div>
The Arch Wiki is the holy grail here. After flashing the ISO to a USB, you boot into the live environment. Here are the core commands that shaped my system:
<table class="article-table">
    <tr><th>Step</th><th>Action</th><th>Command</th></tr>
    <tr><td>1</td><td>Partitioning the drive (using fdisk)</td><td>
        <div class="code-wrapper"><div class="code-content">fdisk /dev/nvme0n1</div><button class="copy-btn" onclick="copyCode(this)">COPY</button></div>
    </td></tr>
    <tr><td>2</td><td>Formatting the partitions</td><td>
        <div class="code-wrapper"><div class="code-content">mkfs.ext4 /dev/nvme0n1p2
mkfs.fat -F 32 /dev/nvme0n1p1</div><button class="copy-btn" onclick="copyCode(this)">COPY</button></div>
    </td></tr>
    <tr><td>3</td><td>Installing the base system</td><td>
        <div class="code-wrapper"><div class="code-content">pacstrap /mnt base linux linux-firmware neovim git</div><button class="copy-btn" onclick="copyCode(this)">COPY</button></div>
    </td></tr>
    <tr><td>4</td><td>Generating the fstab file</td><td>
        <div class="code-wrapper"><div class="code-content">genfstab -U /mnt >> /mnt/etc/fstab</div><button class="copy-btn" onclick="copyCode(this)">COPY</button></div>
    </td></tr>
    <tr><td>5</td><td>Chroot into system</td><td>
        <div class="code-wrapper"><div class="code-content">arch-chroot /mnt</div><button class="copy-btn" onclick="copyCode(this)">COPY</button></div>
    </td></tr>
</table>
<div class="article-subtitle">The Window Manager</div>
I ditched standard Desktop Environments (like GNOME or KDE) for a Window Manager. Tiling WMs completely change how you interact with your computer. No more dragging windows around with a mouse—everything is keyboard-driven and automatically tiles to utilize screen space perfectly.
I settled on Hyprland (for Wayland) because of the buttery smooth animations and dynamic tiling. My package manager pacman became my best friend:
<div class="code-wrapper"><div class="code-content">sudo pacman -S hyprland waybar kitty rofi</div><button class="copy-btn" onclick="copyCode(this)">COPY</button></div>
<div class="article-subtitle">The Verdict</div>
Switching to Linux wasn't just about changing an OS; it was about reclaiming ownership of my hardware. The learning curve is steep, but the view from the top is absolutely worth it.
`;

const article2Text = `
<div class="article-subtitle">ENABLING VARIABLE REFRESH RATE (VRR) ON XORG</div>
Variable Refresh Rate (VRR) — commonly known by its marketing names FreeSync (AMD) or G-Sync (NVIDIA) — is an absolute game-changer. By syncing your monitor's refresh rate to your GPU's framerate, it eliminates screen tearing without the massive input lag penalty of traditional V-Sync. 
However, if you are running an Xorg session (X11) on Linux, enabling VRR isn't always a one-click affair. Wayland handles this natively much better these days, but many of us still rely on X11 for specific workflow compatibilities or older games.
Here is the definitive guide to getting VRR working on Xorg.
<table class="article-table">
    <tr><th>Step</th><th>Instructions</th><th>Command / Code</th></tr>
    <tr>
        <td>1</td>
        <td>Check your Hardware<br><br>Make sure your monitor supports FreeSync/G-Sync and is connected via DisplayPort.</td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>2</td>
        <td>The AMD Configuration<br><br>If using an AMD GPU with open-source amdgpu driver, edit Xorg config.</td>
        <td>
            <div class="code-wrapper"><div class="code-content">sudo nano /etc/X11/xorg.conf.d/20-amdgpu.conf</div><button class="copy-btn" onclick="copyCode(this)">COPY</button></div>
            Add this block:
            <div class="code-wrapper"><div class="code-content">Section "Device"
    Identifier "AMD"
    Driver "amdgpu"
    Option "TearFree" "true"
    Option "VariableRefresh" "true"
EndSection</div><button class="copy-btn" onclick="copyCode(this)">COPY</button></div>
        </td>
    </tr>
    <tr>
        <td>3</td>
        <td>The NVIDIA Configuration<br><br>Generate basic config and use NVIDIA control panel or edit config directly.</td>
        <td>
            <div class="code-wrapper"><div class="code-content">sudo nvidia-xconfig</div><button class="copy-btn" onclick="copyCode(this)">COPY</button></div>
            In /etc/X11/xorg.conf, under "Screen" section:
            <div class="code-wrapper"><div class="code-content">Option "AllowVRR" "1"</div><button class="copy-btn" onclick="copyCode(this)">COPY</button></div>
        </td>
    </tr>
    <tr>
        <td>4</td>
        <td>Verification<br><br>Verify it's working for AMD after reboot. Look for 'vrr_capable: 1'.</td>
        <td>
            <div class="code-wrapper"><div class="code-content">xrandr --props | grep vrr</div><button class="copy-btn" onclick="copyCode(this)">COPY</button></div>
        </td>
    </tr>
</table>
Keep in mind: On Xorg, VRR only works when a single window is fullscreen and uncomposited. Make sure your compositor (like picom or xcompmgr) is set to unredirect fullscreen windows!
`;

const articlesData = [
    { title: "SWITCHING TO LINUX", img: "assets/images/rice1.png", desc: "Why I moved from Windows to Arch, and why Window Managers are superior.", longText: article1Text },
    { title: "ENABLE VRR XORG", img: "assets/images/xorg.png", desc: "Deep dive into Variable Refresh Rate (FreeSync/G-Sync) configuration.", longText: article2Text }
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
    { name: "Github", icon: icons.github, link: "https://github.com/vuieee", img: "assets/images/githubthumbnail.png", desc: "My open source repositories." },
    { name: "Gmail", icon: icons.gmail, link: "mailto:user@gmail.com", img: "assets/images/gmailthumbnail.png", desc: "Send me a direct message." }
];

const certData = [
    { title: "Introduction to Git", img: "assets/images/Introduction to Git.png", desc: "DataCamp Statement of Accomplishment", date: "Mar 29, 2026" },
    { title: "Intermediate Git", img: "assets/images/Intermediate Git.png", desc: "DataCamp Statement of Accomplishment", date: "Mar 29, 2026" },
    { title: "Introduction to SQL", img: "assets/images/Introduction to SQL.png", desc: "DataCamp Statement of Accomplishment", date: "Nov 14, 2025" },
    { title: "Intermediate SQL", img: "assets/images/Intermediate SQL.png", desc: "DataCamp Statement of Accomplishment", date: "Nov 24, 2025" }
];

const musieeSongs = [
    { title: "it's 5a.m and i couldn't sleep", artist: "Local Audio", src: "assets/music/it's 5a.m and i couldn't sleep.mp3" },
    { title: "late night lofi", artist: "Local Audio", src: "assets/music/late night lofi.mp3" }
];

const confData = [
    { name: "lainheader.png", type: "image", src: "assets/images/lainheader.png", size: "1.2 MB", desc: "Main header image for the landing page." },
    { name: "rice1.png", type: "image", src: "assets/images/rice1.png", size: "3.4 MB", desc: "Screenshot of Arch Linux window manager setup." },
    { name: "xorg.png", type: "image", src: "assets/images/xorg.png", size: "840 KB", desc: "Configuration snippet for VRR on X11." },
    { name: "lain.gif", type: "image", src: "assets/images/lain.gif", size: "5.1 MB", desc: "Animated screen feed loop." },
    { name: "sys_config.txt", type: "text", src: "SYSTEM_CFG=1\nVRR_ENABLED=true\nNET_PROXY=10.0.0.1\nPORT_FWD=8080\nDEBUG_MODE=false\n\n# NOTE: DO NOT MODIFY CORE VALUES\n# OVERRIDE AT OWN RISK.", size: "2 KB", desc: "System configuration parameters." }
];

let confCurrentItemIdx = 0;

const bootTrigger = document.getElementById('boot-trigger');
const confTrigger = document.getElementById('conf-trigger');
const screenTrigger = document.getElementById('screen-trigger');
const navHome = document.getElementById('nav-home');
const navArticles = document.getElementById('nav-articles');
const navRepos = document.getElementById('nav-repos');
const navSocials = document.getElementById('nav-socials');
const navCerts = document.getElementById('nav-certs');
const lainImg = document.getElementById('lain-img');
const hackOverlay = document.getElementById('hack-overlay');
const confOverlay = document.getElementById('conf-overlay');
const matrixCanvas = document.getElementById('matrix-canvas');

const iframeOverlay = document.getElementById('iframe-overlay');
const welcomeOverlay = document.getElementById('welcome-overlay');

const articleContainer = document.getElementById('article-overlay-container');
const articlesListOverlay = document.getElementById('articles-list-overlay');
const reposContainer = document.getElementById('repos-overlay-container');
const socialsContainer = document.getElementById('socials-overlay-container');
const certsListOverlay = document.getElementById('certs-list-overlay');
const imageViewerOverlay = document.getElementById('image-viewer-overlay');

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
                
                setTimeout(openWelcome, 500);
                
            }, 500);
        }, 200);
    }
}

allImages.forEach(src => {
    const img = new Image();
    img.onload = checkLoad; img.onerror = checkLoad; img.src = src;
});

let systemState = 'idle'; let userInput = ""; let intervals = []; let closeTimeout = null;

function purgeIframe() {
    const wrapper = document.getElementById('game-wrapper');
    const oldIframe = document.getElementById('game-iframe');
    if (oldIframe) {
        oldIframe.src = 'about:blank';
        oldIframe.remove();
    }
    if (wrapper) {
        const newIframe = document.createElement('iframe');
        newIframe.id = 'game-iframe';
        newIframe.style.cssText = 'border: none; outline: none; width: 100%; height: 100%;';
        wrapper.appendChild(newIframe);
    }
}

function resetAll() {
    systemState = 'idle'; 
    intervals.forEach(clearInterval); 
    intervals = [];
    hackOverlay.style.display = 'none'; 
    confOverlay.style.display = 'none';
    matrixCanvas.style.display = 'none'; 
    matrixCanvas.style.opacity = '0';
    
    if (iframeOverlay) iframeOverlay.style.display = 'none';
    purgeIframe();
    
    const ctx = matrixCanvas.getContext('2d');
    ctx.clearRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    
    lainImg.style.opacity = '1'; 
    lainImg.src = 'assets/images/lainheader.png';
    bootTrigger.textContent = "TERMINAL"; bootTrigger.classList.remove('active');
    confTrigger.textContent = "CONF"; confTrigger.classList.remove('active');
    screenTrigger.textContent = "FEED"; screenTrigger.classList.remove('active');
    
    hackOutput.innerHTML = ""; 
    userInput = "";
    userInputDisplay.textContent = "";
    hideMobileTermInput();
}

function openWelcome() {
    welcomeOverlay.style.display = 'flex';
    requestAnimationFrame(() => { 
        welcomeOverlay.classList.add('active'); 
    });
}

function closeWelcome(e) {
    if(e) e.stopPropagation();
    welcomeOverlay.classList.remove('active');
    setTimeout(() => { 
        welcomeOverlay.style.display = 'none'; 
    }, 500);
}

function closeGame(e) {
    if(e) e.stopPropagation();
    iframeOverlay.classList.remove('active');
    setTimeout(() => {
        iframeOverlay.style.display = 'none';
        purgeIframe();
        if (systemState === 'game_run') {
            hackOverlay.style.display = 'flex';
            systemState = 'boot_wait';
            userInput = "";
            userInputDisplay.textContent = "";
            hackOutput.innerHTML += "> ULTRAKILL ENGINE TERMINATED.<br>AWAITING COMMAND...<br>";
            hackOutput.scrollTop = hackOutput.scrollHeight;
        }
    }, 400);
}

function closeAllOverlays(e, exceptContainer) {
    if(closeTimeout) clearTimeout(closeTimeout);
    const modals = [articleContainer, articlesListOverlay, reposContainer, socialsContainer, certsListOverlay, imageViewerOverlay, welcomeOverlay, iframeOverlay];
    
    modals.forEach(modal => {
        if (modal !== exceptContainer && modal.style.display !== 'none') {
            modal.classList.remove('active');
            setTimeout(() => { modal.style.display = 'none'; }, 300);
            
            if (modal === iframeOverlay) {
                setTimeout(() => {
                    purgeIframe();
                    if (systemState === 'game_run') {
                        hackOverlay.style.display = 'flex';
                        systemState = 'boot_wait';
                        hackOutput.innerHTML += "> ULTRAKILL ENGINE TERMINATED.<br>AWAITING COMMAND...<br>";
                        hackOutput.scrollTop = hackOutput.scrollHeight;
                    }
                }, 300);
            }
        }
    });
    
    if (!exceptContainer) {
        mainStage.classList.remove('blur');
    }
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
    requestAnimationFrame(() => { 
        articlesListOverlay.classList.add('active'); 
        mainStage.classList.add('blur'); 
    });
}

function openArticle(index) {
    closeAllOverlays(null, articleContainer);
    const data = articlesData[index];
    const otherIndex = (index === 0) ? 1 : 0;
    const recData = articlesData[otherIndex];
    document.getElementById('exp-title').textContent = data.title;
    document.getElementById('exp-img').src = data.img;
    document.getElementById('exp-text').innerHTML = data.longText;
    document.getElementById('rec-card-container').innerHTML = `
        <div class="rec-card" onclick="switchArticle(${otherIndex}); event.stopPropagation();">
            <div class="header-text" style="font-size:0.6rem; margin-bottom:0.5vh;">${recData.title}</div>
            <div class="rec-thumb"><div class="scanlines"></div><img src="${recData.img}"></div>
            <div class="body-text text-xs opacity-50">${recData.desc}</div>
        </div>`;
    articleContainer.style.display = 'flex';
    requestAnimationFrame(() => { 
        articleContainer.classList.add('active'); 
        mainStage.classList.add('blur'); 
    });
}

function switchArticle(index) {
    const content = document.getElementById('article-main-col');
    content.classList.add('switching');
    setTimeout(() => { openArticle(index); content.scrollTop = 0; content.classList.remove('switching'); }, 200);
}

let viewerScale = 1;
let isDraggingViewer = false;
let startX, startY, translateX = 0, translateY = 0;

const viewerImg = document.getElementById('viewer-img');

function openImageViewer(src) {
    viewerImg.src = src;
    viewerScale = 1;
    translateX = 0;
    translateY = 0;
    updateViewerTransform();
    imageViewerOverlay.style.display = 'flex';
    requestAnimationFrame(() => { 
        imageViewerOverlay.classList.add('active'); 
    });
}

function closeImageViewer(e) {
    e.stopPropagation();
    imageViewerOverlay.classList.remove('active');
    setTimeout(() => {
        imageViewerOverlay.style.display = 'none';
        viewerImg.src = '';
    }, 300);
}

viewerImg.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomSensitivity = 0.15;
    if (e.deltaY < 0) viewerScale += zoomSensitivity;
    else viewerScale -= zoomSensitivity;
    viewerScale = Math.max(0.5, Math.min(viewerScale, 5)); 
    updateViewerTransform();
});

viewerImg.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDraggingViewer = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
});

window.addEventListener('mousemove', (e) => {
    if (!isDraggingViewer) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateViewerTransform();
});

window.addEventListener('mouseup', () => {
    isDraggingViewer = false;
});

function updateViewerTransform() {
    viewerImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${viewerScale})`;
}

function openCertsList() {
    closeAllOverlays(null, certsListOverlay);
    const container = document.getElementById('certs-list-content');
    container.innerHTML = '';
    certData.forEach((cert) => {
        const row = document.createElement('div');
        row.className = 'article-row'; 
        row.onclick = () => openImageViewer(cert.img); 
        row.innerHTML = `
            <div class="article-row-thumb"><div class="scanlines"></div><img src="${cert.img}"></div>
            <div class="article-row-info">
                <div class="article-row-title">${cert.title}</div>
                <div class="article-row-desc">${cert.desc}</div>
                <div class="article-row-desc" style="margin-top: 5px; color: var(--term-teal); opacity: 1;">${cert.date}</div>
            </div>`;
        container.appendChild(row);
    });
    certsListOverlay.style.display = 'flex';
    requestAnimationFrame(() => { 
        certsListOverlay.classList.add('active'); 
        mainStage.classList.add('blur'); 
    });
}

function openRepos() {
    closeAllOverlays(null, reposContainer);
    renderReposModal();
    reposContainer.style.display = 'flex';
    requestAnimationFrame(() => { 
        reposContainer.classList.add('active'); 
        mainStage.classList.add('blur'); 
    });
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
    requestAnimationFrame(() => { 
        socialsContainer.classList.add('active'); 
        mainStage.classList.add('blur'); 
    });
}

bootTrigger.addEventListener('click', () => { if (systemState === 'idle') startBoot(); else resetAll(); });
confTrigger.addEventListener('click', () => { if (systemState === 'idle') startConf(); else resetAll(); });
screenTrigger.addEventListener('click', () => { if (systemState === 'idle') { systemState = 'screen_gif'; lainImg.src = 'assets/images/lain.gif'; screenTrigger.textContent = 'EXIT'; screenTrigger.classList.add('active'); } else { resetAll(); } });

navHome.addEventListener('click', () => { closeAllOverlays(null, null); closeMobileNav(); });
navArticles.addEventListener('click', () => { openArticlesList(); closeMobileNav(); });
navRepos.addEventListener('click', () => { openRepos(); closeMobileNav(); });
navSocials.addEventListener('click', () => { openSocials(); closeMobileNav(); });
navCerts.addEventListener('click', () => { openCertsList(); closeMobileNav(); });

/* ---- Hamburger Menu ---- */
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const mainNav = document.getElementById('main-nav');

function closeMobileNav() {
    if (mainNav) mainNav.classList.remove('open');
}

if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open');
    });
}

function startBoot() {
    systemState = 'boot_loading'; hackOverlay.style.display = 'flex'; lainImg.style.opacity = '0';
    bootTrigger.textContent = "EXIT"; bootTrigger.classList.add('active');
    hackOutput.innerHTML = "INITIALIZING KERNEL..."; hackInputLine.style.display = 'none';
    let progress = 0;
    const bootInt = setInterval(() => {
        progress++; let bar = "["; for(let i=0; i<20; i++) bar += (i < progress) ? "|" : "."; bar += "]";
        hackOutput.innerHTML = "INITIALIZING KERNEL...<br>" + bar;
        if(progress >= 20) { clearInterval(bootInt); showLoginPrompt(); }
    }, 50);
    intervals.push(bootInt);
}

function showLoginPrompt() { 
    systemState = 'boot_wait'; 
    hackOutput.innerHTML += "<br><br>SYSTEM BOOT INITIATED...<br>AWAITING COMMAND...<br>Type HELP for a list of commands.<br>"; 
    hackInputLine.style.display = 'block'; 
    hackOutput.scrollTop = hackOutput.scrollHeight;
    showMobileTermInput();
}

/* ---- Mobile Terminal Input ---- */
const mobileTermRow = document.getElementById('mobile-term-row');
const mobileTermInput = document.getElementById('mobile-term-input');
const mobileTermSubmit = document.getElementById('mobile-term-submit');

function showMobileTermInput() {
    if (mobileTermRow) mobileTermRow.style.display = 'flex';
    if (mobileTermInput) { mobileTermInput.value = ''; mobileTermInput.focus(); }
}

function hideMobileTermInput() {
    if (mobileTermRow) mobileTermRow.style.display = 'none';
}

function processMobileTermCommand(cmd) {
    if (!cmd) return;
    const upper = cmd.toUpperCase();
    if (upper === 'START') {
        hackOutput.innerHTML += `> START<br>ACCESS GRANTED.<br>----------------<br>`;
        hideMobileTermInput();
        startSystemBoot();
    } else if (upper === 'FASTFETCH') {
        hackOutput.innerHTML += `> FASTFETCH<br>`;
        printFastfetch();
    } else if (upper === 'CLEAR') {
        hackOutput.innerHTML = '';
    } else if (upper === 'ULTRAKILL') {
        hackOutput.innerHTML += `> ULTRAKILL<br>ALLOCATING MEMORY...<br>LAUNCHING ENGINE...<br>`;
        hackOutput.scrollTop = hackOutput.scrollHeight;
        hideMobileTermInput();
        setTimeout(startUltrakillGame, 800);
    } else if (upper === 'HELP') {
        hackOutput.innerHTML += `> HELP<br>
AVAILABLE COMMANDS:<br>
<span style="color:var(--term-teal)">START</span>     - Initiates the system boot sequence.<br>
<span style="color:var(--term-teal)">FASTFETCH</span> - Displays system information and ASCII logo.<br>
<span style="color:var(--term-teal)">ULTRAKILL</span> - Load Unofficial Web Port into memory.<br>
<span style="color:var(--term-teal)">CLEAR</span>     - Clears the terminal output.<br>
<span style="color:var(--term-teal)">HELP</span>      - Displays this help message.<br>`;
    } else {
        hackOutput.innerHTML += `> ${cmd}<br>INVALID COMMAND.<br>`;
    }
    hackOutput.scrollTop = hackOutput.scrollHeight;
}

if (mobileTermSubmit) {
    mobileTermSubmit.addEventListener('click', () => {
        const val = mobileTermInput ? mobileTermInput.value.trim() : '';
        processMobileTermCommand(val);
        if (mobileTermInput) mobileTermInput.value = '';
    });
}
if (mobileTermInput) {
    mobileTermInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const val = mobileTermInput.value.trim();
            processMobileTermCommand(val);
            mobileTermInput.value = '';
        }
    });
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
<span style="color:var(--term-teal);font-weight:bold;">System:</span> Termii Web Environment
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

function resizeIframe() {
    const overlay = document.getElementById('iframe-overlay');
    const wrapper = document.getElementById('game-wrapper');
    if(!overlay || overlay.style.display === 'none' || !wrapper) return;
    
    const w = overlay.clientWidth * 0.95;
    const h = overlay.clientHeight * 0.95;
    
    const gameW = 1280;
    const gameH = 720;
    
    const scale = Math.min(w / gameW, h / gameH);
    
    wrapper.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', resizeIframe);

function startUltrakillGame() {
    systemState = 'game_run';
    hackOverlay.style.display = 'none';
    
    const iframeOverlay = document.getElementById('iframe-overlay');
    iframeOverlay.style.display = 'flex';
    
    const gameIframe = document.getElementById('game-iframe');
    if(gameIframe) gameIframe.src = "assets/webport/Ultrakill.html";
    
    resizeIframe(); 
    
    setTimeout(() => {
        const currentIframe = document.getElementById('game-iframe');
        if(currentIframe) currentIframe.focus();
    }, 100);
}

function startMatrix() {
    systemState = 'matrix_run';
    hackOutput.innerHTML = "";
    matrixCanvas.style.display = 'block';
    setTimeout(() => { matrixCanvas.style.opacity = '1'; }, 50);
    
    const ctx = matrixCanvas.getContext('2d');
    matrixCanvas.width = matrixCanvas.parentElement.clientWidth;
    matrixCanvas.height = matrixCanvas.parentElement.clientHeight;
    
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ".split('');
    const fontSize = 16; 
    const columns = Math.ceil(matrixCanvas.width / fontSize);
    const drops = Array(columns).fill(1);
    
    const matrixInt = setInterval(() => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.08)"; 
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        
        ctx.font = fontSize + "px 'Fira Code', monospace";
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            
            ctx.fillStyle = "#FFF";
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            ctx.fillStyle = "#50fff7";
            ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, (drops[i] - 1) * fontSize);
            
            if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }, 33);
    intervals.push(matrixInt);
}

function startConf() {
    systemState = 'conf_run'; 
    confOverlay.style.display = 'flex'; 
    lainImg.style.opacity = '0';
    confTrigger.textContent = "EXIT"; 
    confTrigger.classList.add('active');
    
    confCurrentItemIdx = 0;
    renderConf();
}

function renderConf() {
    const menuContainer = document.getElementById('conf-menu');
    const previewBox = document.getElementById('conf-preview-box');
    const previewMeta = document.getElementById('conf-preview-meta');
    
    menuContainer.innerHTML = '';
    confData.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = 'conf-item' + (index === confCurrentItemIdx ? ' selected' : '');
        row.innerText = item.name;
        menuContainer.appendChild(row);
    });

    const currentItem = confData[confCurrentItemIdx];
    if (currentItem.type === 'image') {
        previewBox.innerHTML = `<img src="${currentItem.src}" alt="${currentItem.name}">`;
    } else if (currentItem.type === 'text') {
        previewBox.innerHTML = `<div class="text-preview">${currentItem.src}</div>`;
    }
    
    previewMeta.innerHTML = `
        <span style="color:var(--term-teal); font-weight:bold;">${currentItem.name}</span><br>
        <span style="opacity:0.5;">Size:</span> ${currentItem.size}<br><br>
        ${currentItem.desc}
    `;
    
    const selectedEl = menuContainer.querySelector('.selected');
    if(selectedEl) {
        selectedEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

let mCurrentIndex = 0;
let mIsPlaying = false;
const audioEl = document.getElementById("audio-element");
const mTitle = document.getElementById("m-title");
const mArtist = document.getElementById("m-artist");
const mIndex = document.getElementById("m-index");
const mTime = document.getElementById("m-time");
const mVolumeSlider = document.getElementById("m-volume");
const visContainer = document.getElementById("m-vis");
const visBase = document.getElementById("m-vis-base");
const playlistBox = document.getElementById("m-playlist");

mVolumeSlider.addEventListener('input', (e) => {
    audioEl.volume = e.target.value;
});

musieeSongs.forEach((song, idx) => {
    const div = document.createElement("div");
    div.className = "playlist-item";
    div.tabIndex = 0; 
    
    div.innerHTML = `
        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${song.title}</span>
    `;
    
    div.onclick = () => { 
        if (mCurrentIndex === idx) {
            togglePlay(); 
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

const cachedVisBars = document.querySelectorAll(".vis-bar");

function updateVisualizer() {
    if(mIsPlaying) {
        cachedVisBars.forEach(bar => {
            const height = Math.random() * 30 + 5;
            bar.style.height = height + "px";
        });
    } else {
        cachedVisBars.forEach(bar => {
            bar.style.height = "5px";
        });
    }
}
setInterval(updateVisualizer, 150);

function loadSong(index) {
    audioEl.src = encodeURI(musieeSongs[index].src);
    audioEl.load();
    mTitle.innerText = musieeSongs[index].title;
    mArtist.innerText = musieeSongs[index].artist;
    mIndex.innerText = `${index + 1} / ${musieeSongs.length}`;
    
    const items = playlistBox.children;
    for (let i = 0; i < items.length; i++) {
        if (i === index) {
            items[i].classList.add("active");
            items[i].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            items[i].classList.remove("active");
        }
    }

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
    mTime.innerText = formatTime(current) + " / " + formatTime(total) + " (" + pct + "%)";
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

window.addEventListener('keydown', (e) => {
    if (systemState === 'game_run') return;

    const isInput = document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA");
    const isTerminal = systemState === 'boot_wait';

    if (e.key === " " && !isInput) {
        e.preventDefault();
        togglePlay();
        return;
    }

    if (!isInput && !isTerminal) {
        if (e.key.toLowerCase() === "p") {
            prevSong();
            return;
        } else if (e.key.toLowerCase() === "n") {
            nextSong();
            return;
        }
    }

    if (systemState === 'conf_run') {
        e.preventDefault();
        
        if (e.key === "ArrowDown") {
            confCurrentItemIdx = (confCurrentItemIdx + 1) % confData.length;
            renderConf();
        } else if (e.key === "ArrowUp") {
            confCurrentItemIdx = (confCurrentItemIdx - 1 + confData.length) % confData.length;
            renderConf();
        } else if (e.key === "Enter") {
            const currentItem = confData[confCurrentItemIdx];
            if (currentItem.type === 'image') {
                openImageViewer(currentItem.src);
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
            } else if (userInput.toUpperCase() === "ULTRAKILL") {
                hackOutput.innerHTML += `> ULTRAKILL<br>ALLOCATING MEMORY...<br>LAUNCHING ENGINE...<br>`;
                hackOutput.scrollTop = hackOutput.scrollHeight;
                setTimeout(startUltrakillGame, 800);
                userInput = "";
            } else if (userInput.toUpperCase() === "HELP") {
                hackOutput.innerHTML += `> HELP<br>
AVAILABLE COMMANDS:<br>
<span style="color:var(--term-teal)">START</span>     - Initiates the system boot sequence.<br>
<span style="color:var(--term-teal)">FASTFETCH</span> - Displays system information and ASCII logo.<br>
<span style="color:var(--term-teal)">ULTRAKILL</span> - Load Unofficial Web Port into memory.<br>
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
});