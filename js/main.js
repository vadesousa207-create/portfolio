// ============================================================
// SCRIPT DE GESTION DE L'INTERACTION ET RENDU DYNAMIQUE
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Mise à jour de l'année au footer
    document.getElementById("current-year").textContent = new Date().getFullYear();

    // 2. Gestion du Thème Sombre / Clair
    const themeToggleBtn = document.getElementById("theme-toggle");
    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        themeToggleBtn.innerHTML = newTheme === "dark" 
            ? '<i class="fa-solid fa-moon"></i>' 
            : '<i class="fa-solid fa-sun"></i>';
    });

    // 3. Navigation Responsive Mobile
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Fermer le menu mobile au clic sur un lien
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

    // 4. Bouton Retour en Haut & Navigation Active au Scroll
    const backToTopBtn = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "flex";
        } else {
            backToTopBtn.style.display = "none";
        }

        // Indication de section active dans la nav
        const sections = document.querySelectorAll("section");
        const scrollPos = window.scrollY + 100;

        sections.forEach(sec => {
            if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
                const id = sec.getAttribute("id");
                document.querySelectorAll(".nav-link").forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 5. Génération Dynamique des Contenus
    renderSkills();
    renderProjects();
    renderExperiences();
    renderVeilles();
});

// --- FONCTIONS DE RENDU DYNAMIQUE ---

function renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container || typeof skillsData === "undefined") return;

    container.innerHTML = skillsData.map(cat => `
        <div class="card skill-card">
            <h3 class="skill-category-title"><i class="${cat.icon}"></i> ${cat.category}</h3>
            ${cat.items.map(item => `
                <div class="skill-item">
                    <div class="skill-info">
                        <span>${item.name}</span>
                        <span class="skill-level-badge ${item.levelClass}">${item.level}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById("projects-container");
    if (!container || typeof projectsData === "undefined") return;

    container.innerHTML = projectsData.map(p => `
        <div class="card project-card">
            <div class="project-img">
                <img src="${p.image}" alt="${p.title}" onerror="this.src='https://via.placeholder.com/400x200/1e293b/ffffff?text=Capture+Projet'">
            </div>
            <div class="project-body">
                <h3 class="project-title">${p.title}</h3>
                <p class="project-description">${p.description}</p>
                
                <div class="project-details">
                    <p><strong>Objectif :</strong> ${p.objective}</p>
                    <p><strong>Difficultés :</strong> ${p.difficulties}</p>
                    <p><strong>Solutions :</strong> ${p.solutions}</p>
                </div>

                <div class="badges-list">
                    ${p.technologies.map(tech => `<span class="badge"><i class="fa-solid fa-code-commit"></i> ${tech}</span>`).join('')}
                </div>
            </div>

            <div class="project-links">
                ${p.githubUrl ? `<a href="${p.githubUrl}" class="btn btn-sm btn-outline" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Code</a>` : ''}
                ${p.demoUrl ? `<a href="${p.demoUrl}" class="btn btn-sm btn-primary" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>` : ''}
            </div>
        </div>
    `).join('');
}

function renderExperiences() {
    const container = document.getElementById("experiences-container");
    if (!container || typeof experiencesData === "undefined") return;

    container.innerHTML = experiencesData.map(exp => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">${exp.date} — ${exp.location}</div>
            <div class="timeline-content card">
                <h4>${exp.role}</h4>
                <h5><i class="fa-solid fa-building"></i> ${exp.company}</h5>
                <ul style="margin: 0.8rem 0; padding-left: 1.2rem; list-style: disc;">
                    ${exp.missions.map(m => `<li>${m}</li>`).join('')}
                </ul>
                <div class="badges-list">
                    ${exp.technologies.map(t => `<span class="badge">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderVeilles() {
    // Veille Tech
    const techHeader = document.getElementById("tech-subject-container");
    const techArticles = document.getElementById("tech-articles-container");

    if (techHeader && typeof techVeilleSubject !== "undefined") {
        techHeader.innerHTML = `
            <h3>Sujet principal : ${techVeilleSubject.title}</h3>
            <p style="margin: 0.5rem 0;">${techVeilleSubject.explanation}</p>
            <div class="badges-list">
                <strong style="align-self: center; font-size: 0.9rem;">Sources suivies :</strong>
                ${techVeilleSubject.sources.map(s => `<span class="badge"><i class="fa-solid fa-rss"></i> ${s}</span>`).join('')}
            </div>
        `;
    }

    if (techArticles && typeof techVeilleArticles !== "undefined") {
        techArticles.innerHTML = techVeilleArticles.map(art => `
            <div class="card article-card">
                <div class="article-meta">
                    <span>${art.source}</span>
                    <span>${art.date}</span>
                </div>
                <h4 class="article-title">${art.title}</h4>
                <p class="article-summary">${art.summary}</p>
                <div class="article-impact">${art.impact}</div>
            </div>
        `).join('');
    }

    // Veille Cyber
    const cyberHeader = document.getElementById("cyber-subject-container");
    const cyberArticles = document.getElementById("cyber-articles-container");

    if (cyberHeader && typeof cyberVeilleSubject !== "undefined") {
        cyberHeader.innerHTML = `
            <h3>Thématique : ${cyberVeilleSubject.title}</h3>
            <p style="margin: 0.5rem 0;">${cyberVeilleSubject.context}</p>
            <div class="badges-list">
                <strong style="align-self: center; font-size: 0.9rem;">Organismes & Sources :</strong>
                ${cyberVeilleSubject.sources.map(s => `<span class="badge"><i class="fa-solid fa-user-shield"></i> ${s}</span>`).join('')}
            </div>
        `;
    }

    if (cyberArticles && typeof cyberVeilleArticles !== "undefined") {
        cyberArticles.innerHTML = cyberVeilleArticles.map(art => `
            <div class="card article-card">
                <div class="article-meta">
                    <span>${art.type}</span>
                    <span>${art.date}</span>
                </div>
                <h4 class="article-title">${art.title}</h4>
                <p class="article-summary">${art.summary}</p>
                <div class="article-impact">${art.analysis}</div>
                ${art.sourceUrl ? `<a href="${art.sourceUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-outline" style="align-self: flex-start;"><i class="fa-solid fa-link"></i> Consulter la source</a>` : ''}
            </div>
        `).join('');
    }
}