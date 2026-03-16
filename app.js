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
                    { type: "UE", day: 5, start: "12:30", end: "14:00", room: "1H.021" },
                    { type: "UE", day: 5, start: "16:00", end: "17:30", room: "1H.019" }
                ]
            },
            {
                name: "Programmieren 2 (Garmann)",
                events: [
                    { type: "VL", day: 2, start: "08:15", end: "09:45", room: "1A.102" },
                    { type: "TUT", day: 2, start: "12:30", end: "14:00", room: "1H.246" },
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
                    { type: "UE", day: 3, start: "10:15", end: "11:45", room: "1H.019" },
                    { type: "UE", day: 4, start: "10:15", end: "11:45", room: "1H.207" },
                    { type: "UE", day: 4, start: "12:30", end: "14:00", room: "1H.207" },
                    { type: "UE", day: 5, start: "14:15", end: "15:45", room: "1H.019" },
                    { type: "Z-UE", day: 3, start: "16:00", end: "17:30", room: "Moodle" },
                    { type: "Z-UE", day: 4, start: "16:00", end: "17:30", room: "Moodle" }
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
                    { type: "UE", day: 4, start: "10:15", end: "11:45", room: "1H.238" },
                    { type: "UE", day: 5, start: "08:15", end: "09:45", room: "1H.238" },
                    { type: "UE", day: 5, start: "10:15", end: "11:45", room: "1H.238" }
                ]
            },
            {
                name: "Software-Engineering I (Bruns)",
                events: [
                    { type: "VL", day: 4, start: "10:15", end: "11:45", room: "1H.018" },
                    { type: "UE", day: 4, start: "16:00", end: "17:30", room: "1H.238" },
                    { type: "UE", day: 4, start: "14:15", end: "15:45", room: "1H.238" },
                    { type: "UE", day: 4, start: "16:00", end: "17:30", room: "1H.238" },
                    { type: "UE", day: 5, start: "17:30", end: "19:00", room: "1H.238" }
                ]
            }
        ]
    }
];

const SPECIAL_EVENTS_DB = [
    { date: "2026-03-13", name: "Seminar (Pflicht)", type: "SEM", start: "12:30", end: "13:30", room: "1H.2.62" },
    { date: "2026-04-10", name: "Seminar (Pflicht)", type: "SEM", start: "12:30", end: "17:30", room: "1H.2.62" },
    { date: "2026-04-17", name: "Seminar (Pflicht)", type: "SEM", start: "12:30", end: "17:30", room: "1H.2.07" },
    { date: "2026-05-22", name: "Seminar (Pflicht)", type: "SEM", start: "12:30", end: "18:30", room: "1H.2.07" },
    { date: "2026-05-29", name: "Seminar (Pflicht)", type: "SEM", start: "12:30", end: "18:30", room: "1H.2.07" },
    { date: "2026-06-05", name: "Seminar (Pflicht)", type: "SEM", start: "12:30", end: "18:30", room: "1H.2.07" }
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
    const specialContainer = document.getElementById('special-events-container');
    if (!specialContainer) return; 

    let specialHtml = `
        <div class="special-events-title">
            <i class="fa-solid fa-triangle-exclamation"></i> Wichtige Pflicht-Termine (Seminare)
        </div>
        <div class="se-list">
    `;
    
    SPECIAL_EVENTS_DB.forEach(ev => {
        const dateParts = ev.date.split('-');
        const formattedDate = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;
        
        specialHtml += `
            <div class="se-item">
                <div>
                    <div class="se-date">${formattedDate}</div>
                    <div class="se-time">${ev.start} - ${ev.end} Uhr | Raum: ${ev.room}</div>
                </div>
                <span class="we-badge" style="background:var(--danger); color:#fff;">${ev.type}</span>
            </div>
        `;
    });
    specialHtml += `</div>`;
    specialContainer.innerHTML = specialHtml;

    const weeklyContainer = document.getElementById('weekly-schedule-container');
    if (!weeklyContainer) return;

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

    let weeklyHtml = '';
    days.forEach(dayObj => {
        let dayEvents = allWeeklyEvents
            .filter(e => e.day === dayObj.id)
            .sort((a, b) => a.startMins - b.startMins);

        weeklyHtml += `
            <div class="day-column">
                <div class="day-header">${dayObj.name}</div>
                <div class="day-content">
        `;

        if (dayEvents.length === 0) {
            weeklyHtml += `<div class="free-day">Keine Vorlesungen! 🎉</div>`;
        } else {
            dayEvents.forEach(ev => {
                weeklyHtml += `
                    <div class="weekly-event">
                        <div class="we-time">
                            <span>${ev.start}</span>
                            <span class="we-time-end">${ev.end}</span>
                        </div>
                        <div class="we-info">
                            <div class="we-title">${ev.moduleName}</div>
                            <div class="we-meta">
                                <span><i class="fa-solid fa-location-dot"></i> ${ev.room}</span>
                                <span class="we-badge">${ev.type}</span>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
        weeklyHtml += `</div></div>`;
    });
    weeklyContainer.innerHTML = weeklyHtml;
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
    
    SPECIAL_EVENTS_DB.forEach(ev => {
        if (ev.date === dateStr) {
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
}

/* =========================================================
   5. NAVIGATION & INITIALISIERUNG
   ========================================================= */

function switchTab(tabId, clickedElement) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(tabId).classList.add('active');
    clickedElement.classList.add('active');
}

function init() {
    renderSchedule(); 
    renderGrid();
    renderStudyPlan();
    calculateStats();
    
    updateLiveSystem();
    setInterval(updateLiveSystem, 1000);
}

// Startet den gesamten Motor, sobald die Datei geladen ist
init();