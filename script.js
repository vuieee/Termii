// --- NEW WINDOWS PROCESS DATA ---
const fakeProcesses = [
    { pid: 0,    name: "System Idle Process", user: "SYSTEM" },
    { pid: 4,    name: "System",              user: "SYSTEM" },
    { pid: 96,   name: "Registry",            user: "SYSTEM" },
    { pid: 420,  name: "smss.exe",            user: "SYSTEM" },
    { pid: 568,  name: "csrss.exe",           user: "SYSTEM" },
    { pid: 644,  name: "wininit.exe",         user: "SYSTEM" },
    { pid: 720,  name: "services.exe",        user: "SYSTEM" },
    { pid: 728,  name: "lsass.exe",           user: "SYSTEM" },
    { pid: 836,  name: "svchost.exe",         user: "SYSTEM" },
    { pid: 900,  name: "svchost.exe",         user: "NETWORK" },
    { pid: 1024, name: "dwm.exe",             user: "DWM-1" },
    { pid: 3452, name: "explorer.exe",        user: "Joshua" },
    { pid: 4100, name: "spoolsv.exe",         user: "SYSTEM" },
    { pid: 5230, name: "Taskmgr.exe",         user: "Joshua" },
    { pid: 6602, name: "chrome.exe",          user: "Joshua" },
    { pid: 7100, name: "code.exe",            user: "Joshua" },
    { pid: 8820, name: "Discord.exe",         user: "Joshua" },
    { pid: 9200, name: "Spotify.exe",         user: "Joshua" }
];

// --- BIOS / BTOP LOGIC ---
function startBios() {
    systemState = 'bios_run';
    biosOverlay.style.display = 'flex';
    lainImg.style.opacity = '0'; // Hide Lain
    biosTrigger.textContent = "EXIT";
    biosTrigger.classList.add('active');

    // 1. Setup Graph Bars (Create 40 bars for history)
    const graphContainer = document.getElementById('cpu-graph');
    graphContainer.innerHTML = '';
    for(let i=0; i<40; i++) {
        let bar = document.createElement('div');
        bar.className = 'cpu-bar';
        bar.style.height = '5%';
        graphContainer.appendChild(bar);
    }

    // 2. Setup Process List
    const tbody = document.getElementById('proc-list-body');
    tbody.innerHTML = '';
    fakeProcesses.forEach(proc => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td class="proc-pid">${proc.pid}</td>
            <td class="proc-name">${proc.name}</td>
            <td class="proc-cpu">0.0%</td>
            <td class="proc-mem">0.0%</td>
            <td class="proc-user">${proc.user}</td>
        `;
        tbody.appendChild(row);
    });

    // 3. Start Update Loop
    if(intervals.length > 0) intervals.forEach(clearInterval); // clear old
    const biosInt = setInterval(updateBiosStats, 1000); 
    intervals.push(biosInt); 
    updateBiosStats(); // Run once immediately
}

function updateBiosStats() {
    const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Update CPU Total Text
    const totalCpu = rnd(5, 45);
    document.getElementById('cpu-total-val').innerText = totalCpu + "%";

    // Update RAM
    const ram = rnd(30, 45);
    document.getElementById('ram-val').innerText = ram + "%";
    document.getElementById('ram-bar').style.width = ram + "%";

    // Update SWAP
    const swap = rnd(5, 10);
    document.getElementById('swap-val').innerText = swap + "%";
    document.getElementById('swap-bar').style.width = swap + "%";

    // Update CPU Graph (Shift bars left, add new one)
    const bars = document.querySelectorAll('.cpu-bar');
    bars.forEach(bar => {
        // Randomly jitter height for "live" feel
        let h = parseInt(bar.style.height || 10);
        let newH = h + rnd(-10, 10);
        if(newH < 5) newH = 5;
        if(newH > 100) newH = 100;
        bar.style.height = newH + "%";
    });

    // Update Processes (Randomize CPU/Mem slightly)
    const procRows = document.querySelectorAll('#proc-list-body tr');
    procRows.forEach(row => {
        const cpuCell = row.querySelector('.proc-cpu');
        const memCell = row.querySelector('.proc-mem');
        
        // Random CPU spikes for realistic feel
        let cpu = (Math.random() * 5).toFixed(1);
        if(Math.random() > 0.9) cpu = (Math.random() * 20).toFixed(1); // Occasional spike
        
        // Steady memory
        let mem = (Math.random() * 2).toFixed(1);

        cpuCell.innerText = cpu + "%";
        memCell.innerText = mem + "%";
        
        // Highlight high usage
        cpuCell.style.color = cpu > 10 ? 'var(--term-red)' : 'var(--term-green)';
    });
}
