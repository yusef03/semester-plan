/* =========================================================
   1. DATENBANKEN (MASTER KONFIGURATION)
   ========================================================= */

const SCHEDULE_DB = [
    {
        semester: "2. Semester",
        modules: [
            {
                name: "Statistik (Ahlers)",
                events: [
                    { type: "VL", day: 1, start: "08:15", end: "09:45", room: "1A.102" },
                    { type: "UE", day: 1, start: "14:15", end: "15:45", room: "1H.207" },
                    { type: "UE", day: 1, start: "16:00", end: "17:30", room: "1H.207" },
                    { type: "UE", day: 4, start: "12:30", end: "14:00", room: "1H.021" },
                    { type: "UE", day: 4, start: "16:00", end: "17:30", room: "1H.019" }
                ]
            },
            {
                name: "Programmieren 2 (Garmann)",
                events: [
                    { type: "VL", day: 2, start: "08:15", end: "09:45", room: "1A.102" },
                    { type: "TUT", day: 2, start: "12:30", end: "14:00", room: "1H.238" },
                    { type: "H-UE", day: 2, start: "14:15", end: "15:45", room: "1H.018" },
                    { type: "UE", day: 3, start: "10:15", end: "11:45", room: "1H.246" },
                    { type: "UE", day: 3, start: "12:30", end: "14:00", room: "1H.246" },
                    { type: "UE", day: 4, start: "10:15", end: "11:45", room: "1H.246" },
                    { type: "UE", day: 4, start: "16:00", end: "17:30", room: "1H.246" }
                ]
            },
            {
                name: "Algorithmen & Datenstr. (Ginkel)",
                events: [
                    { type: "VL", day: 4, start: "08:15", end: "09:45", room: "1A.102" },
                    { type: "UE", day: 4, start: "10:15", end: "11:45", room: "1H.207" },
                    { type: "UE", day: 4, start: "12:30", end: "14:00", room: "1H.207" },
                    { type: "UE", day: 5, start: "14:15", end: "15:45", room: "1H.019" },
                    { type: "Z-UE", day: 3, start: "16:00", end: "17:30", room: "Moodle" }
                ]
            }
        ]
    },
    {
        semester: "4. Semester",
        modules: [
            {
                name: "Webtechnologien (Grönniger)",
                events: [
                    { type: "VL", day: 1, start: "10:15", end: "11:45", room: "1A.102" },
                    { type: "UE", day: 1, start: "12:30", end: "14:00", room: "1H.246" },
                    { type: "UE", day: 5, start: "08:15", end: "09:45", room: "1H.238" },
                    { type: "UE", day: 5, start: "10:15", end: "11:45", room: "1H.238" }
                ]
            },
            {
                name: "Software-Engineering I (Bruns)",
                events: [
                    { type: "VL", day: 4, start: "10:15", end: "11:45", room: "1H.018" },
                    { type: "UE", day: 4, start: "14:15", end: "15:45", room: "1H.238" },
                    { type: "UE", day: 4, start: "16:00", end: "17:30", room: "1H.238" },
                    { type: "UE", day: 4, start: "17:30", end: "19:00", room: "1H.238" }
                ]
            }
        ]
    }
];

const SPECIAL_EVENTS_DB = [
    { date: "2026-04-17", name: "Seminar (Besprech.)", type: "SEM", start: "13:00", end: "13:30", room: "1H.2.07" },
    { date: "2026-06-05", name: "Seminar (Vortrag)", type: "SEM", start: "13:15", end: "14:30", room: "1H.2.07" }
];

const DB = [
    {
        sem: 1,
        modules: [
            { id: "s1_prog1", name: "Programmieren 1", ects: 6, status: "passed", grade: 3.0 },
            { id: "s1_gdi", name: "Grundlagen der Informatik", ects: 6, status: "passed", grade: 3.7 },
            { id: "s1_mathe1", name: "Mathematik 1", ects: 6, status: "passed", grade: 1.7 },
            { id: "s1_ti", name: "Theoretische Informatik", ects: 6, status: "passed", grade: 3.3 },
            { id: "s1_start", name: "Startprojekt", ects: 4, status: "passed", grade: "" }, 
            { id: "s1_eng", name: "Englisch", ects: 2, status: "passed", grade: 1.7 }
        ]
    },
    {
        sem: 2,
        modules: [
            { id: "s2_prog2", name: "Programmieren 2", ects: 6, status: "failed" },
            { id: "s2_db1", name: "Datenbanksysteme 1", ects: 6, status: "passed", grade: 4.0 },
            { id: "s2_mathe2", name: "Mathematik 2", ects: 6, status: "passed", grade: 3.7 },
            { id: "s2_stat", name: "Statistik", ects: 6, status: "failed" },
            { id: "s2_algo", name: "Algorithmen und Datenstrukturen", ects: 6, status: "failed" }
        ]
    },
    {
        sem: 3,
        modules: [
            { id: "s3_prog3", name: "Programmieren 3", ects: 6, status: "open" },
            { id: "s3_db2", name: "Datenbanksysteme 2", ects: 6, status: "open" },
            { id: "s3_mathe3", name: "Mathematik 3", ects: 6, status: "open" },
            { id: "s3_bsn1", name: "Betriebssysteme und Netze 1", ects: 6, status: "failed", note: "Note: 5.0" },
            { id: "s3_proj", name: "Programmierprojekt", ects: 4, status: "passed", grade: "" }, 
            { id: "s3_bwl", name: "Betriebswirtschaft", ects: 2, status: "passed", grade: 1.7 }
        ]
    },
    {
        sem: 4,
        modules: [
            { id: "s4_web", name: "Webtechnologien", ects: 6, status: "open" },
            { id: "s4_se1", name: "Software Engineering 1", ects: 6, status: "open" },
            { id: "s4_cg1", name: "Computergrafik 1", ects: 6, status: "open" },
            { id: "s4_bsn2", name: "Betriebssysteme und Netze 2", ects: 6, status: "open" },
            { id: "s4_sem", name: "Seminar", ects: 4, status: "open" },
            { id: "s4_bwl_erg", name: "Erg. Fach BWL", ects: 2, status: "open" }
        ]
    },
    {
        sem: 5,
        modules: [
            { id: "s5_wpf1", name: "Wahlpflichtfach Informatik 1", ects: 6, status: "open" },
            { id: "s5_se2", name: "Software Engineering 2", ects: 6, status: "open" },
            { id: "s5_cg2", name: "Computergrafik 2", ects: 6, status: "open" },
            { id: "s5_praxis1", name: "Praxisprojekt 1", ects: 10, status: "open" },
            { id: "s5_erg1", name: "Ergänzendes Fach 1", ects: 2, status: "open" }
        ]
    },
    {
        sem: 6,
        modules: [
            { id: "s6_wpf2", name: "Wahlpflichtfach Informatik 2", ects: 6, status: "open" },
            { id: "s6_praxis2", name: "Praxisprojekt 2", ects: 10, status: "open" },
            { id: "s6_ba", name: "Bachelor-Arbeit mit Kolloquium", ects: 12, status: "open" },
            { id: "s6_erg2", name: "Ergänzendes Fach 2", ects: 2, status: "open" }
        ]
    }
];

const STUDY_PLAN_DB = [
    {
        semester: 1, totalCP: 30,
        courses: [
            { name: "Programmieren 1", cp: 6 },
            { name: "Grundlagen der Informatik", cp: 6 },
            { name: "Mathematik 1", cp: 6 },
            { name: "Theoretische Informatik", cp: 6 },
            { name: "Startprojekt", cp: 4 },
            { name: "Englisch", cp: 2 }
        ]
    },
    {
        semester: 2, totalCP: 12,
        courses: [
            { name: "Datenbanksysteme 1", cp: 6 },
            { name: "Mathematik 2", cp: 6 }
        ]
    },
    {
        semester: 3, totalCP: 6,
        courses: [
            { name: "Programmierprojekt", cp: 4 },
            { name: "Betriebswirtschaft", cp: 2 }
        ]
    },
    {
        semester: 4, totalCP: 28,
        courses: [
            { name: "Algorithmen und Datenstrukturen", cp: 6 },
            { name: "Programmieren 2", cp: 6 },
            { name: "Statistik", cp: 6 },
            { name: "Software Engineering 1", cp: 6 },
            { name: "Seminar", cp: 4 }
        ]
    },
    {
        semester: 5, totalCP: 26,
        courses: [
            { name: "Programmieren 3", cp: 6 },
            { name: "Datenbanksysteme 2", cp: 6 },
            { name: "Mathematik 3", cp: 6 },
            { name: "Betriebssysteme und Netze 1", cp: 6 },
            { name: "Ergänzendes Fach BWL", cp: 2 }
        ]
    },
    {
        semester: 6, totalCP: 28,
        courses: [
            { name: "Praxisprojekt 1", cp: 10 },
            { name: "Webtechnologien", cp: 6 },
            { name: "Computergrafik 1", cp: 6 },
            { name: "Betriebssysteme und Netze 2", cp: 6 }
        ]
    },
    {
        semester: 7, totalCP: 30,
        courses: [
            { name: "Praxisprojekt 2", cp: 10 },
            { name: "Software Engineering 2", cp: 6 },
            { name: "Computergrafik 2", cp: 6 },
            { name: "Wahlpflichtfach Informatik 1", cp: 6 },
            { name: "Ergänzendes Fach 1", cp: 2 }
        ]
    },
    {
        semester: 8, totalCP: 23,
        courses: [
            { name: "Bachelor-Arbeit mit Kolloquium", cp: 15 },
            { name: "Wahlpflichtfach Informatik 2", cp: 6 },
            { name: "Ergänzendes Fach 2", cp: 2 }
        ]
    }
];

/* =========================================================
   2. RENDER-FUNKTIONEN (OBERFLÄCHE ZEICHNEN)
   ========================================================= */

function renderSchedule() {
    const todayContainer = document.getElementById('schedule-today-container');
    const upcomingContainer = document.getElementById('schedule-upcoming-container');
    if (!todayContainer || !upcomingContainer) return;

    const now = new Date();
    const todayDay = now.getDay() === 0 ? 7 : now.getDay(); 
    const todayStr = now.toISOString().split('T')[0];

    let todayHtml = '';
    let upcomingHtml = '';

    // 1. DATEN QUELLEN (Beachtet jetzt die Blacklist!)
    let hiddenSys = JSON.parse(localStorage.getItem('hidden_system_events')) || [];
    
    const validSpecials = SPECIAL_EVENTS_DB.filter(ev => {
        let sysId = `sys-${ev.date}-${ev.name}`;
        return ev.date >= todayStr && !hiddenSys.includes(sysId);
    });
    
    const savedUniversalEvents = JSON.parse(localStorage.getItem('my_universal_events')) || [];
    const validUserEvents = savedUniversalEvents.filter(ex => ex.date >= todayStr);

    // 2. EVENTS FÜR HEUTE
    let weeklyToday = [];
    SCHEDULE_DB.forEach(sem => {
        sem.modules.forEach(mod => {
            mod.events.forEach(ev => {
                if (ev.day === todayDay) weeklyToday.push({ ...ev, moduleName: mod.name, isSpecial: false, isUserEvent: false });
            });
        });
    });

    const todayAll = [
        ...weeklyToday,
        ...validSpecials.filter(ev => ev.date === todayStr).map(ev => ({ ...ev, moduleName: ev.name, isSpecial: true, isUserEvent: false })),
        ...validUserEvents.filter(ex => ex.date === todayStr).map(ex => ({ ...ex, moduleName: ex.name, isSpecial: false, isUserEvent: true, start: ex.time }))
    ].sort((a, b) => getMinutes(a.start || a.time) - getMinutes(b.start || b.time));

    // RENDERN HEUTE
    if (todayAll.length > 0) {
        todayAll.forEach(ev => {
            let borderColor = 'var(--primary)';
            let badgeText = ev.type || 'TERMIN';
            let bgStyle = '';

            if (ev.isSpecial) {
                borderColor = 'var(--danger)';
            } else if (ev.isUserEvent) {
                if (ev.type === 'exam') { borderColor = '#ff0000'; badgeText = 'KLAUSUR'; bgStyle = 'background: rgba(255,0,0,0.05);'; }
                if (ev.type === 'deadline') { borderColor = 'var(--primary)'; badgeText = 'ABGABE'; }
                if (ev.type === 'other') { borderColor = 'var(--success)'; badgeText = 'TERMIN'; }
            }

            todayHtml += `
                <div class="timeline-card" style="border-left-color: ${borderColor}; ${bgStyle}">
                    <div class="timeline-time-box">
                        <div style="color: ${borderColor}; font-weight: bold; font-size: 1.1rem;">${ev.start || ev.time}</div>
                        <div style="font-size: 0.7rem; color: var(--text-muted);">${ev.end || 'ENDE'}</div>
                    </div>
                    <div class="timeline-content">
                        <div class="timeline-title">${ev.moduleName}</div>
                        <div class="timeline-meta">
                            <span><i class="fa-solid fa-location-dot"></i> ${ev.room}</span>
                            <span class="timeline-badge">${badgeText}</span>
                        </div>
                    </div>
                </div>`;
        });
    } else {
        todayHtml = `<div style="text-align: center; color: var(--text-muted); padding: 30px; border: 1px dashed var(--border); border-radius: 12px;">Keine Missionen für heute.</div>`;
    }

    // 3. KOMMENDE TERMINE (Seminare & Eigene Termine gemischt)
    const upcomingAll = [
        ...validSpecials.filter(ev => ev.date > todayStr).map(ev => ({ ...ev, isUserEvent: false })),
        ...validUserEvents.filter(ex => ex.date > todayStr).map(ex => ({ ...ex, isUserEvent: true }))
    ].sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 8);

    if (upcomingAll.length > 0) {
        upcomingAll.forEach(ev => {
            const dateParts = ev.date.split('-');
            const diff = Math.ceil((new Date(ev.date) - now) / 86400000);
            
            let color = '#444';
            let badgeText = ev.type || 'SEM';
            if (ev.isUserEvent) {
                if (ev.type === 'exam') { color = '#ff0000'; badgeText = 'KLAUSUR'; }
                if (ev.type === 'deadline') { color = 'var(--primary)'; badgeText = 'ABGABE'; }
                if (ev.type === 'other') { color = 'var(--success)'; badgeText = 'TERMIN'; }
            }

            upcomingHtml += `
                <div class="timeline-card" style="border-left-color: ${color}; opacity: 0.9; padding: 12px;">
                    <div style="min-width: 60px; font-weight: bold; color: #fff; border-right: 1px solid var(--border); margin-right: 15px;">
                        ${dateParts[2]}.${dateParts[1]}.
                    </div>
                    <div class="timeline-content" style="padding-left: 0;">
                        <div style="font-size: 0.9rem; color: #fff; font-weight: ${(ev.isUserEvent && ev.type === 'exam') ? 'bold' : 'normal'};">${ev.name}</div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">
                            ${ev.start || ev.time} Uhr | ${(ev.isUserEvent && ev.type === 'exam') ? `<span style="color:var(--danger)">Noch ${diff} Tage</span>` : `Raum: ${ev.room}`}
                        </div>
                    </div>
                    <span class="timeline-badge">${badgeText}</span>
                </div>`;
        });
    } else {
        upcomingHtml = `<div style="color: var(--text-muted); font-size: 0.85rem; padding-left: 5px;">Der Radar ist leer. Keine kommenden Termine.</div>`;
    }

    todayContainer.innerHTML = todayHtml;
    upcomingContainer.innerHTML = upcomingHtml;
}

function renderWeeklySchedule() {
    const container = document.getElementById('weekly-schedule-container');
    if (!container) return;

    const days = [
        { id: 1, name: "Montag" },
        { id: 2, name: "Dienstag" },
        { id: 3, name: "Mittwoch" },
        { id: 4, name: "Donnerstag" },
        { id: 5, name: "Freitag" }
    ];

    let allWeeklyEvents = [];
    SCHEDULE_DB.forEach(sem => {
        sem.modules.forEach(mod => {
            mod.events.forEach(ev => {
                allWeeklyEvents.push({
                    moduleName: mod.name,
                    type: ev.type,
                    day: ev.day,
                    start: ev.start,
                    end: ev.end,
                    room: ev.room,
                    startMins: getMinutes(ev.start) 
                });
            });
        });
    });

    let html = '';
    days.forEach(dayObj => {
        let dayEvents = allWeeklyEvents
            .filter(e => e.day === dayObj.id)
            .sort((a, b) => a.startMins - b.startMins);

html += `
            <div class="weekly-day-card">
                <div style="background: rgba(255,255,255,0.03); padding: 12px; text-align: center; font-weight: bold; border-bottom: 1px solid var(--border); color: var(--primary); letter-spacing: 1px; text-transform: uppercase; font-size: 0.85rem;">
                    ${dayObj.name}
                </div>
                <div style="padding: 12px; display: flex; flex-direction: column; gap: 10px;">
        `;

        if (dayEvents.length === 0) {
            html += `<div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 20px 0; font-style: italic;">Keine Vorlesungen 🎉</div>`;
        } else {
            dayEvents.forEach(ev => {
                html += `
                    <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 8px; padding: 12px;">
                        <div style="color: var(--primary); font-weight: bold; font-size: 0.85rem; margin-bottom: 6px;">
                            <i class="fa-regular fa-clock"></i> ${ev.start} - ${ev.end}
                        </div>
                        <div style="color: #fff; font-size: 0.85rem; font-weight: 600; margin-bottom: 8px; line-height: 1.3;">
                            ${ev.moduleName}
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.7rem; color: var(--text-muted);">
                            <span><i class="fa-solid fa-location-dot"></i> ${ev.room}</span>
                            <span style="background: rgba(255,255,255,0.1); padding: 3px 6px; border-radius: 4px; font-weight: bold;">${ev.type}</span>
                        </div>
                    </div>
                `;
            });
        }
        html += `</div></div>`;
    });
    container.innerHTML = html;
}

function renderGrid() {
    const grid = document.getElementById('module-grid');
    if (!grid) return;
    grid.innerHTML = '';

    DB.forEach(semester => {
        const box = document.createElement('div');
        box.className = 'semester-box';
        const semTotal = semester.modules.reduce((acc, m) => acc + m.ects, 0);

        let html = `
            <div class="semester-header">
                <span class="sem-title">Semester ${semester.sem}</span>
                <span class="sem-credits">${semTotal} ECTS</span>
            </div>
            <div class="module-list">
        `;

        semester.modules.forEach(mod => {
            let badge = '';
            let extraClass = '';
            
            let savedGrade = localStorage.getItem('grade_' + mod.id);
            let finalGrade = savedGrade !== null ? savedGrade : mod.grade;
            
            let isPassed = localStorage.getItem(mod.id) === 'true' || (mod.status === 'passed' && localStorage.getItem(mod.id) !== 'false');

            if (isPassed) {
                if (finalGrade && finalGrade !== "") {
                    badge = `<span class="status-badge" style="color:var(--success); border:1px solid var(--success)">Note: ${parseFloat(finalGrade).toFixed(1)}</span>`;
                } else {
                    badge = `<span class="status-badge" style="color:var(--success); border:1px solid var(--success)">BE</span>`;
                }
                extraClass = 'passed';
            } else if (mod.status === 'failed') {
                badge = `<span class="status-badge" style="color:var(--danger); border:1px solid var(--danger)">5.0</span>`;
                extraClass = 'failed';
            } else if (mod.status === 'pending') {
                badge = `<span class="status-badge" style="color:orange; border:1px solid orange">ANGEMELDET</span>`;
                extraClass = 'pending';
            }

            if (mod.note && mod.status !== 'failed' && !isPassed) {
                badge += `<span class="status-badge" style="color:#aaa; border:1px solid #555">${mod.note}</span>`;
            }

            html += `
                <div class="module-item ${extraClass}" 
                     id="card_${mod.id}" 
                     onclick="toggleModule('${mod.id}', ${mod.ects})">
                    <div class="module-check"></div>
                    <div class="module-info">
                        <span class="module-name">${mod.name} ${badge}</span>
                        <span class="module-ects"><i class="fa-solid fa-coins"></i> ${mod.ects} ECTS</span>
                    </div>
                </div>
            `;
        });
        html += `</div>`;
        box.innerHTML = html;
        grid.appendChild(box);
    });
}

function renderStudyPlan() {
    const container = document.getElementById('study-plan-container');
    if (!container) return;
    let html = '';

    STUDY_PLAN_DB.forEach(sem => {
        let coursesHtml = '';
        sem.courses.forEach(course => {
            coursesHtml += `
                <li class="sp-item">
                    <span>${course.name}</span>
                    <span class="sp-cp">${course.cp} CP</span>
                </li>
            `;
        });

        html += `
            <div class="study-plan-card">
                <div class="sp-header">
                    <span class="sp-title">${sem.semester}. Semester</span>
                    <span class="sp-total">${sem.totalCP} CP</span>
                </div>
                <ul class="sp-list">
                    ${coursesHtml}
                </ul>
            </div>
        `;
    });
    container.innerHTML = html;
}

/* =========================================================
   3. NOTEN & STATISTIK LOGIK
   ========================================================= */

let currentSelectedModuleId = null;

function toggleModule(id, ects) {
    currentSelectedModuleId = id;
    
    let modName = "Modul";
    DB.forEach(sem => sem.modules.forEach(m => { if(m.id === id) modName = m.name; }));
    
    document.getElementById('modal-module-name').innerText = modName;
    
    let savedGrade = localStorage.getItem('grade_' + id);
    if(savedGrade) {
        document.getElementById('modal-grade-input').value = savedGrade;
    } else {
        document.getElementById('modal-grade-input').value = '';
    }

    document.getElementById('grade-modal').style.display = 'flex';
}

function closeGradeModal() {
    document.getElementById('grade-modal').style.display = 'none';
    currentSelectedModuleId = null;
}

function saveGrade() {
    if(!currentSelectedModuleId) return;
    
    let gradeValue = document.getElementById('modal-grade-input').value;
    
    if (gradeValue !== '') {
        localStorage.setItem('grade_' + currentSelectedModuleId, parseFloat(gradeValue).toFixed(1));
        localStorage.setItem(currentSelectedModuleId, 'true'); 
    } else {
        localStorage.removeItem('grade_' + currentSelectedModuleId);
        localStorage.setItem(currentSelectedModuleId, 'false');
    }
    
    closeGradeModal();
    renderGrid(); 
    calculateStats(); 
}

function calculateStats() {
    let currentECTS = 0;
    let totalWeightedGrades = 0;
    let totalGradedECTS = 0;
    const totalECTS = 180;

    DB.forEach(sem => {
        sem.modules.forEach(mod => {
            let isPassed = localStorage.getItem(mod.id) === 'true' || (mod.status === 'passed' && localStorage.getItem(mod.id) !== 'false');
            
            if (isPassed) {
                currentECTS += mod.ects;
                
                let savedGrade = localStorage.getItem('grade_' + mod.id);
                let finalGrade = savedGrade !== null ? parseFloat(savedGrade) : parseFloat(mod.grade);
                
                if (!isNaN(finalGrade)) {
                    totalWeightedGrades += (finalGrade * mod.ects);
                    totalGradedECTS += mod.ects;
                }
            }
        });
    });

    const displayEctsElem = document.getElementById('display-ects');
    const displayLeftElem = document.getElementById('display-left');
    const displayGpaElem = document.getElementById('display-gpa');
    const progressBarElem = document.getElementById('progress-bar');

    if (displayEctsElem) displayEctsElem.innerText = `${currentECTS} / ${totalECTS}`;
    if (displayLeftElem) displayLeftElem.innerText = totalECTS - currentECTS;
    
    let gpa = 0.0;
    if (totalGradedECTS > 0) {
        // Exakte Hochschul-Logik: Abschneiden nach der ersten Nachkommastelle (nicht runden)
        let rawGpa = totalWeightedGrades / totalGradedECTS;
        gpa = (Math.floor(rawGpa * 10) / 10).toFixed(1);
    }
    if (displayGpaElem) displayGpaElem.innerText = gpa > 0 ? gpa : "--";
    
    if (progressBarElem) {
        const percent = Math.round((currentECTS / totalECTS) * 100);
        progressBarElem.style.width = percent + '%';
        
        if(percent < 30) progressBarElem.style.background = 'var(--danger)';
        else if(percent < 70) progressBarElem.style.background = 'var(--primary)';
        else progressBarElem.style.background = 'var(--success)';
    }
}

/* =========================================================
   4. HIGH SYSTEM ENGINE (LIVE DASHBOARD)
   ========================================================= */

function getMinutes(timeStr) {
    if(!timeStr) return 0;
    const parts = timeStr.split(':');
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}

function getEventsForDate(d) {
    let dayOfWeek = d.getDay();
    if (dayOfWeek === 0) dayOfWeek = 7; 
    
    let dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    
    let evs = [];
    
    // 1. Blacklist laden (Damit ausgeblendete Seminare nicht im Dashboard nerven)
    let hiddenSys = JSON.parse(localStorage.getItem('hidden_system_events')) || [];
    
    // 2. Vorlesungen laden
    SCHEDULE_DB.forEach(sem => {
        sem.modules.forEach(mod => {
            mod.events.forEach(ev => {
                if(ev.day === dayOfWeek) {
                    evs.push({
                        moduleName: mod.name,
                        type: ev.type,
                        start: ev.start,
                        end: ev.end,
                        room: ev.room,
                        startMins: getMinutes(ev.start),
                        endMins: getMinutes(ev.end)
                    });
                }
            });
        });
    });
    
    // 3. System Seminare laden (Wenn sie NICHT ausgeblendet sind)
    SPECIAL_EVENTS_DB.forEach(ev => {
        let sysId = `sys-${ev.date}-${ev.name}`; 
        if (ev.date === dateStr && !hiddenSys.includes(sysId)) { 
            evs.push({
                moduleName: ev.name,
                type: ev.type,
                start: ev.start,
                end: ev.end,
                room: ev.room,
                startMins: getMinutes(ev.start),
                endMins: getMinutes(ev.end)
            });
        }
    });

    // 4. Eigene Termine laden (Klausuren, Abgaben, etc.) in den Dashboard-Radar
    let userEvents = JSON.parse(localStorage.getItem('my_universal_events')) || [];
    userEvents.forEach(ev => {
        if (ev.date === dateStr) {
            let startM = getMinutes(ev.time);
            let endM = startM + 90; // Standard 90 Minuten blocken für Custom-Events
            let endStr = `${String(Math.floor(endM/60)).padStart(2,'0')}:${String(endM%60).padStart(2,'0')}`;
            let tBadge = ev.type === 'exam' ? 'KLAUSUR' : (ev.type === 'deadline' ? 'ABGABE' : 'TERMIN');
            
            evs.push({
                moduleName: ev.name,
                type: tBadge,
                start: ev.time,
                end: endStr,
                room: ev.room,
                startMins: startM,
                endMins: endM
            });
        }
    });
    
    return evs.sort((a,b) => a.startMins - b.startMins);
}

function updateLiveSystem() {
    const clockElem = document.getElementById('system-clock');
    if (!clockElem) return; // Verhindert Fehler, falls HTML noch lädt

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentMins = now.getHours() * 60 + now.getMinutes();
    
    clockElem.innerText = `${hours}:${minutes}:${seconds}`;

    let displayEvents = [];
    let isShowingFuture = false;
    let viewDateName = "Heute";
    
    let todayEvents = getEventsForDate(now);
    let remainingToday = todayEvents.filter(e => e.endMins > currentMins);

    if (remainingToday.length > 0 || (todayEvents.length > 0 && currentMins < todayEvents[todayEvents.length-1].endMins)) {
        displayEvents = todayEvents;
    } else {
        isShowingFuture = true;
        for (let i = 1; i <= 14; i++) {
            let futureDate = new Date(now);
            futureDate.setDate(futureDate.getDate() + i);
            let futureEvents = getEventsForDate(futureDate);
            
            if (futureEvents.length > 0) {
                displayEvents = futureEvents;
                const dayNames = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
                viewDateName = dayNames[futureDate.getDay()];
                if (i === 1) viewDateName = "Morgen (" + viewDateName + ")";
                break;
            }
        }
    }

    let activeEvent = null;
    let nextEvent = null;

    if (!isShowingFuture) {
        for (let ev of displayEvents) {
            if (ev.startMins <= currentMins && ev.endMins > currentMins) {
                activeEvent = ev;
            } else if (ev.startMins > currentMins && !nextEvent) {
                nextEvent = ev;
            }
        }
    } else {
        if (displayEvents.length > 0) nextEvent = displayEvents[0];
    }

    const dot = document.getElementById('live-indicator-dot');
    const statusText = document.getElementById('live-status-text');
    const upNextBox = document.getElementById('up-next-box');
    const upNextKicker = document.getElementById('up-next-kicker');
    const upNextTitle = document.getElementById('up-next-title');
    const upNextMeta = document.getElementById('up-next-meta');
    const previewHeader = document.getElementById('day-preview-header');
    const previewList = document.getElementById('day-preview-list');

    if (activeEvent) {
        dot.classList.remove('idle');
        statusText.innerText = "LIVE: " + activeEvent.moduleName;
    } else {
        dot.classList.add('idle');
        statusText.innerText = "SYSTEM STANDBY";
    }

    upNextBox.style.display = 'block';
    if (activeEvent) {
        upNextKicker.innerText = "JETZT GERADE LÄUFT";
        upNextTitle.innerText = activeEvent.moduleName;
        upNextMeta.innerHTML = `<span><i class="fa-regular fa-clock"></i> ${activeEvent.start} - ${activeEvent.end}</span>
                                <span><i class="fa-solid fa-location-dot"></i> ${activeEvent.room} <span style="background:var(--primary);color:#000;padding:2px 5px;border-radius:4px;font-size:0.8em;margin-left:5px;">${activeEvent.type}</span></span>`;
    } else if (nextEvent) {
        upNextKicker.innerText = isShowingFuture ? `NÄCHSTER VORLESUNGSTAG STARTET MIT` : "ALS NÄCHSTES";
        upNextTitle.innerText = nextEvent.moduleName;
        upNextMeta.innerHTML = `<span><i class="fa-regular fa-clock"></i> ${nextEvent.start} - ${nextEvent.end}</span>
                                <span><i class="fa-solid fa-location-dot"></i> ${nextEvent.room} <span style="background:var(--primary);color:#000;padding:2px 5px;border-radius:4px;font-size:0.8em;margin-left:5px;">${nextEvent.type}</span></span>`;
    } else {
        upNextBox.style.display = 'none'; 
    }

    if (isShowingFuture) {
        previewHeader.innerText = "Fahrplan für " + viewDateName + ":";
    } else {
        previewHeader.innerText = "Dein restlicher Tag:";
    }

    previewList.innerHTML = '';
    displayEvents.forEach(ev => {
        let isActive = activeEvent && activeEvent === ev;
        if (isShowingFuture || ev.endMins > currentMins) {
            previewList.innerHTML += `
                <div class="day-preview-item ${isActive ? 'active' : ''}">
                    <div class="preview-time">${ev.start} - ${ev.end}</div>
                    <div class="preview-info">
                        <span class="preview-name">${ev.moduleName} <span class="event-type" style="font-size:0.65rem; padding:2px 5px; margin-left:5px;">${ev.type}</span></span>
                        <span class="preview-room">Raum: ${ev.room}</span>
                    </div>
                </div>
            `;
        }
    });

    if(previewList.innerHTML === '') {
         previewList.innerHTML = '<div class="preview-empty">Alle Vorlesungen für heute sind geschafft! Gönn dir was!</div>';
    }

    // --- ROUTINE-CHECK FÜR DAS DASHBOARD ---
    const existingBanner = document.getElementById('today-routine-banner');
    if (existingBanner) {
        existingBanner.remove();
    }

    const savedRoutine = JSON.parse(localStorage.getItem('my_weekly_routine')) || {};
    const todayIndex = now.getDay() === 0 ? 6 : now.getDay() - 1; 
    const todayRoutine = savedRoutine[todayIndex];

    if (todayRoutine) {
        const routineInfo = `
            <div id="today-routine-banner" style="background: rgba(232, 93, 4, 0.1); border: 1px solid rgba(232, 93, 4, 0.2); border-radius: 8px; padding: 12px; margin-bottom: 20px;">
                <div style="font-size: 0.7rem; color: var(--primary); font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Heutiger Lern-Fokus</div>
                <div style="font-size: 1rem; color: #fff; margin-top: 4px; font-weight: 600;">${todayRoutine.start} - ${todayRoutine.end} Uhr</div>
                <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 8px;">
                    ${todayRoutine.modules.map(m => `<span style="background: var(--primary); color: #000; font-size: 0.65rem; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${m}</span>`).join('')}
                </div>
            </div>
        `;
        previewHeader.insertAdjacentHTML('beforebegin', routineInfo);
    }
}

/* =========================================================
   5. NAVIGATION & CORE SYSTEM
   ========================================================= */

function switchTab(tabId, clickedElement) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    
    const targetTab = document.getElementById(tabId);
    if(targetTab) targetTab.classList.add('active');
    if(clickedElement) clickedElement.classList.add('active');

    // WICHTIG: Hier wurden die Funktionen synchronisiert!
    if(tabId === 'tab-routine') renderRoutineCards();
    if(tabId === 'tab-focus') renderUniversalEvents();
    if(tabId === 'tab-schedule') renderSchedule();
}

/* =========================================================
   6. ROUTINE SYSTEM (SMART PILLS & BOTTOM SHEET)
   ========================================================= */

const DAYS_OF_WEEK = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
let selectedPills = []; 
let currentEditingDay = null;

function renderRoutineCards() {
    const container = document.getElementById('routine-cards-container');
    if (!container) return;

    const savedRoutine = JSON.parse(localStorage.getItem('my_weekly_routine')) || {};
    let html = '';

    DAYS_OF_WEEK.forEach((day, index) => {
        const data = savedRoutine[index];
        const hasData = data && data.modules.length > 0;

        html += `
            <div class="routine-card" onclick="openRoutineEditor(${index})">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                        <div style="font-weight: bold; color: var(--text-main); font-size: 1.1rem;">${day}</div>
                        <div style="color: var(--text-muted); font-size: 0.85rem; margin-top: 4px;">
                            ${hasData ? `<i class="fa-regular fa-clock"></i> ${data.start} - ${data.end}` : 'Kein Fokus geplant'}
                        </div>
                    </div>
                    ${hasData ? '<i class="fa-solid fa-circle-check" style="color: var(--success);"></i>' : '<i class="fa-solid fa-circle-plus" style="color: var(--border);"></i>'}
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px;">
                    ${hasData ? data.modules.map(m => `<span style="background:rgba(232,93,4,0.1); color:var(--primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; border:1px solid rgba(232,93,4,0.2);">${m}</span>`).join('') : ''}
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function openRoutineEditor(dayIndex) {
    currentEditingDay = dayIndex;
    selectedPills = [];
    
    document.getElementById('routine-modal-day').innerText = DAYS_OF_WEEK[dayIndex];
    const modal = document.getElementById('routine-modal');
    modal.style.display = 'flex';

    const savedRoutine = JSON.parse(localStorage.getItem('my_weekly_routine')) || {};
    const data = savedRoutine[dayIndex];
    
    if(data) {
        document.getElementById('routine-time-start').value = data.start;
        document.getElementById('routine-time-end').value = data.end;
        selectedPills = [...data.modules];
    } else {
        document.getElementById('routine-time-start').value = "";
        document.getElementById('routine-time-end').value = "";
    }

    renderPills();
}

function renderPills() {
    const container = document.getElementById('routine-pills-container');
    container.innerHTML = '';

    DB.forEach(sem => {
        sem.modules.forEach(mod => {
            let isPassed = localStorage.getItem(mod.id) === 'true' || (mod.status === 'passed' && localStorage.getItem(mod.id) !== 'false');
            if (!isPassed) {
                const isActive = selectedPills.includes(mod.name);
                const pill = document.createElement('div');
                pill.className = `module-pill ${isActive ? 'active' : ''}`;
                pill.innerText = mod.name;
                pill.onclick = () => togglePill(mod.name);
                container.appendChild(pill);
            }
        });
    });
}

function togglePill(moduleName) {
    if (selectedPills.includes(moduleName)) {
        selectedPills = selectedPills.filter(name => name !== moduleName);
    } else {
        selectedPills.push(moduleName);
    }
    renderPills();
}

function saveRoutine() {
    const start = document.getElementById('routine-time-start').value;
    const end = document.getElementById('routine-time-end').value;

    if(!start || !end || selectedPills.length === 0) {
        alert("Bitte Zeit und mindestens ein Modul wählen!");
        return;
    }

    let savedRoutine = JSON.parse(localStorage.getItem('my_weekly_routine')) || {};
    savedRoutine[currentEditingDay] = {
        start: start,
        end: end,
        modules: selectedPills
    };

    localStorage.setItem('my_weekly_routine', JSON.stringify(savedRoutine));
    document.getElementById('routine-modal').style.display = 'none';
    renderRoutineCards();
    updateLiveSystem(); 
}

function clearRoutineDay() {
    if(!confirm("Diesen Tag wirklich leeren?")) return;
    let savedRoutine = JSON.parse(localStorage.getItem('my_weekly_routine')) || {};
    delete savedRoutine[currentEditingDay];
    localStorage.setItem('my_weekly_routine', JSON.stringify(savedRoutine));
    document.getElementById('routine-modal').style.display = 'none';
    renderRoutineCards();
    updateLiveSystem();
}

/* =========================================================
   7. UNIVERSAL MISSION HUB (EVENTS & EXAMS)
   ========================================================= */

let currentEventType = 'exam'; 
let missionFilter = 'all'; 
let editingEventId = null; 

function setEventType(type, btn) {
    currentEventType = type;
    document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function filterMissionList(filter, btn) {
    missionFilter = filter;
    btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderUniversalEvents();
}

function saveUniversalEvent() {
    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const time = document.getElementById('event-time').value;
    const loc = document.getElementById('event-location').value;

    if (!title || !date || !time) { 
        alert("Mission fehlgeschlagen: Titel, Datum und Zeit sind Pflicht!"); 
        return; 
    }

    let events = JSON.parse(localStorage.getItem('my_universal_events')) || [];
    
    // Bearbeiten-Logik (User überschreibt alten Termin)
    if (editingEventId) {
        let index = events.findIndex(e => e.id === editingEventId);
        if (index > -1) {
            events[index].name = title;
            events[index].date = date;
            events[index].time = time;
            events[index].room = loc || "TBA";
            events[index].type = currentEventType;
        }
        editingEventId = null; 
        document.querySelector('#tab-focus .btn-save').innerText = "In Zeitplan aufnehmen";
    } else {
        // Neuer Termin
        events.push({ id: Date.now(), type: currentEventType, name: title, date: date, time: time, room: loc || "TBA" });
    }

    localStorage.setItem('my_universal_events', JSON.stringify(events));
    
    document.getElementById('event-title').value = "";
    document.getElementById('event-location').value = "";
    
    renderUniversalEvents(); 
    if(typeof renderSchedule === 'function') renderSchedule(); 
    if(typeof updateLiveSystem === 'function') updateLiveSystem();
}

function editUserEvent(id) {
    let events = JSON.parse(localStorage.getItem('my_universal_events')) || [];
    let ev = events.find(e => e.id === id);
    if(!ev) return;

    document.getElementById('event-title').value = ev.name;
    document.getElementById('event-date').value = ev.date;
    document.getElementById('event-time').value = ev.time;
    document.getElementById('event-location').value = ev.room;

    document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
    let btnId = ev.type === 'exam' ? 'type-exam' : (ev.type === 'deadline' ? 'type-deadline' : 'type-other');
    let btn = document.getElementById(btnId);
    if(btn) btn.classList.add('active');
    currentEventType = ev.type;

    editingEventId = id;
    document.querySelector('#tab-focus .btn-save').innerText = "Änderungen speichern";
    window.scrollTo(0, 0); 
}

function renderUniversalEvents() {
    const container = document.getElementById('universal-events-container');
    if (!container) return;

    let userEvents = JSON.parse(localStorage.getItem('my_universal_events')) || [];
    let hiddenSys = JSON.parse(localStorage.getItem('hidden_system_events')) || [];
    
    let systemEvents = SPECIAL_EVENTS_DB.map(se => {
        let sysId = `sys-${se.date}-${se.name}`;
        return { id: sysId, type: 'special', name: se.name, date: se.date, time: se.start, room: se.room, isSystem: true, isHidden: hiddenSys.includes(sysId) };
    });

    let allMissions = [...userEvents, ...systemEvents];
    if (missionFilter !== 'all') allMissions = allMissions.filter(m => m.type === missionFilter);
    allMissions.sort((a, b) => new Date(a.date) - new Date(b.date));

    let html = '';
    const today = new Date().toISOString().split('T')[0];

    allMissions.forEach(m => {
        const isPast = m.date < today;
        let icon = 'calendar-day'; let color = 'var(--text-muted)';
        if(m.type === 'exam') { icon = 'graduation-cap'; color = 'var(--danger)'; }
        if(m.type === 'deadline') { icon = 'clock'; color = 'var(--primary)'; }
        if(m.type === 'special') { icon = 'university'; color = 'var(--success)'; }
        if(m.type === 'other') { icon = 'star'; color = 'var(--secondary)'; }
        
        let opacity = (isPast || m.isHidden) ? '0.4' : '1';

        html += `
            <div style="background: ${isPast ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.03)'}; border: 1px solid ${isPast ? '#222' : 'var(--border)'}; border-radius: 12px; padding: 12px 15px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; opacity: ${opacity}; transition: all 0.3s ease;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="color: ${color}; font-size: 1.1rem; width: 25px; text-align: center;"><i class="fa-solid fa-${icon}"></i></div>
                    <div>
                        <div style="font-weight: bold; color: ${isPast ? 'var(--text-muted)' : '#fff'}; font-size: 0.9rem;">
                            ${m.name} ${m.isSystem ? '<small style="color:#555;">(Uni)</small>' : ''} ${m.isHidden ? '<small style="color:var(--danger); margin-left:5px;">(Ausgeblendet)</small>' : ''}
                        </div>
                        <div style="font-size: 0.7rem; color: var(--text-muted);">${m.date.split('-').reverse().join('.')} | ${m.time} Uhr | ${m.room}</div>
                    </div>
                </div>
                <div style="display: flex; gap: 15px; align-items: center;">
                    ${m.isSystem ? 
                        (m.isHidden ? 
                            `<i class="fa-solid fa-eye" style="color: var(--success); cursor: pointer; padding: 10px;" onclick="toggleSystemEvent('${m.id}')" title="Wieder einblenden"></i>` : 
                            `<i class="fa-solid fa-eye-slash" style="color: #444; cursor: pointer; padding: 10px;" onclick="toggleSystemEvent('${m.id}')" title="Ausblenden"></i>`
                        ) : 
                        `
                        <i class="fa-solid fa-pen" style="color: var(--primary); cursor: pointer; padding: 10px;" onclick="editUserEvent(${m.id})" title="Bearbeiten"></i>
                        <i class="fa-solid fa-trash-can" style="color: var(--danger); cursor: pointer; padding: 10px;" onclick="deleteUserEvent(${m.id})" title="Löschen"></i>
                        `
                    }
                </div>
            </div>`;
    });
    container.innerHTML = html || '<div style="text-align:center; padding:20px; color:var(--text-muted);">Keine Einträge gefunden.</div>';
}

function toggleSystemEvent(id) {
    let hiddenSys = JSON.parse(localStorage.getItem('hidden_system_events')) || [];
    if (hiddenSys.includes(id)) {
        hiddenSys = hiddenSys.filter(item => item !== id); 
    } else {
        if(!confirm("Uni-Seminar wirklich ausblenden? Es verschwindet dann aus dem Radar.")) return;
        hiddenSys.push(id); 
    }
    localStorage.setItem('hidden_system_events', JSON.stringify(hiddenSys));
    renderUniversalEvents(); 
    if(typeof renderSchedule === 'function') renderSchedule(); 
    if(typeof updateLiveSystem === 'function') updateLiveSystem();
}

function deleteUserEvent(id) {
    if(!confirm("Ereignis wirklich löschen?")) return;
    let events = JSON.parse(localStorage.getItem('my_universal_events')) || [];
    localStorage.setItem('my_universal_events', JSON.stringify(events.filter(e => e.id !== id)));
    renderUniversalEvents(); 
    if(typeof renderSchedule === 'function') renderSchedule(); 
    if(typeof updateLiveSystem === 'function') updateLiveSystem();
}

/* =========================================================
   8. INITIALISIERUNG
   ========================================================= */

function init() {
    // Diese Funktionen bauen das Interface beim Start auf
    renderSchedule();
    renderWeeklySchedule();
    renderGrid();
    renderStudyPlan();
    calculateStats();
    
    // Die Mission-Hub Liste zeichnen
    renderUniversalEvents();
    
    // Dashboard starten
    updateLiveSystem();
    setInterval(updateLiveSystem, 1000);
}

// Startet den gesamten Motor, sobald die Datei geladen ist
init();
