const state = {
  authed: localStorage.getItem("cotepro_authed") === "1",
  route: normalizeRoute(location.pathname),
  tab: "menuiseries",
  activeProjectId: "6a27e513ff83f3666b83eeae",
  activeJoineryId: "6a27e76af36935ac42f0f97c"
};

const projects = [
  {
    id: "6a27e513ff83f3666b83eeae",
    name: "62 Route de Frangy",
    client: "Mathis",
    email: "m.berger@fergyholding.com",
    phone: "",
    address: "62 Route de Frangy, 74960 Meythet, Rhone-Alpes, France",
    type: "Renovation",
    building: "Maison",
    status: "Brouillon",
    priority: "Normale",
    created: "09/06/2026",
    visitDate: "09/06/2026",
    menuisiers: "Mathis",
    completion: 0,
    joineries: 2,
    alerts: 0,
    options: ["Logement occupe", "Travaux electriques", "Finitions interieures"]
  }
];

const joineries = [
  {
    id: "6a27e76af36935ac42f0f97c",
    reference: "F02",
    room: "Cuisine",
    product: "Fenetre",
    material: "PVC",
    colorExterior: "Blanc",
    status: "A verifier",
    score: 76,
    pose: "Applique",
    opening: "Droite tirant",
    openingType: "Oscillo-battant",
    glazing: "Double",
    tapees: "d120",
    airEntry: "Accoustique",
    wallType: "Beton",
    allege: 1000,
    measures: {
      "Largeur haut": 1450,
      "Largeur bas": 1450,
      "Hauteur gauche": 1400,
      "Hauteur centre": 1400,
      "Hauteur droite": 1400,
      "Allege": 1000
    },
    support: ["Doublage fragile"],
    alerts: []
  }
];

const library = {
  poses: [
    {
      title: "Pose en renovation",
      description:
        "Le nouveau dormant vient se poser sur l'ancien dormant existant. Solution rapide qui evite de toucher a la maconnerie. L'ancien dormant doit etre sain et bien fixe.",
      points: [
        "Mesurer l'epaisseur du dormant existant",
        "Verifier l'etat du dormant",
        "Prevoir des tapees si isolation interieure"
      ]
    },
    {
      title: "Pose en depose totale",
      description:
        "L'ancien dormant est entierement retire. Le nouveau dormant vient se fixer directement dans la maconnerie.",
      points: [
        "Prevoir des travaux de maconnerie",
        "Mesurer le tableau brut",
        "Verifier l'etat du support"
      ]
    },
    {
      title: "Pose en tunnel",
      description: "La menuiserie est posee dans l'epaisseur du mur, affleurant les faces interieures ou exterieures.",
      points: ["Mesurer la profondeur du tableau", "Adapter les rejets d'eau", "Prevoir les joints d'etancheite"]
    },
    {
      title: "Pose en applique",
      description: "La menuiserie est posee en applique sur le mur interieur, contre l'isolation.",
      points: ["Mesurer l'epaisseur d'isolation", "Prevoir les equerres", "Adapter les tapees"]
    }
  ],
  mesures: [
    {
      title: "Pourquoi 3 largeurs et 3 hauteurs ?",
      description:
        "Un tableau n'est jamais parfaitement rectangulaire. Prendre haut, milieu, bas puis gauche, centre, droite permet de detecter les irregularites."
    },
    {
      title: "Les diagonales, pourquoi ?",
      description:
        "Les diagonales permettent de verifier l'equerrage du tableau. Un ecart important exige une attention particuliere."
    }
  ],
  erreurs: [
    "Oublier le sens d'ouverture",
    "Confondre cotes tableau et fabrication",
    "Ignorer le coffre volet roulant",
    "Ne pas verifier l'alimentation electrique",
    "Ne pas documenter les obstacles"
  ],
  glossaire: [
    ["Allege", "Partie du mur situee entre le sol et l'appui de fenetre."],
    ["Appui", "Element horizontal en partie basse d'une fenetre."],
    ["Dormant", "Cadre fixe de la menuiserie, scelle dans la maconnerie."],
    ["Ecoincon", "Distance entre le cote du tableau et le mur perpendiculaire adjacent."],
    ["Tapee", "Profile complementaire fixe sur le dormant pour compenser une epaisseur d'isolation."]
  ]
};

const icons = {
  login: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="M10 17l5-5-5-5"/><path d="M15 12H3"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 17l5-5-5-5"/><path d="M15 12H3"/><path d="M21 19V5"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.3 3.9 2.6 18a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>'
};

window.addEventListener("popstate", () => {
  state.route = normalizeRoute(location.pathname);
  render();
});

function normalizeRoute(path) {
  if (!path || path === "/index.html") return "/";
  return path;
}

function go(path) {
  history.pushState({}, "", path);
  state.route = normalizeRoute(path);
  render();
}

function render() {
  if (!state.authed && !["/login", "/register", "/forgot-password", "/reset-password"].includes(state.route)) {
    return renderLogin();
  }
  if (state.route === "/login" || !state.authed) return renderLogin();
  document.querySelector("#app").innerHTML = `
    <div class="app-shell">
      ${renderSidebar()}
      <div class="content">
        <div class="mobile-bar">
          <span class="brand-symbol">${icons.home}</span>
          <strong>CotePro</strong>
        </div>
        ${renderRoute()}
      </div>
    </div>
    <div class="toast" id="toast"></div>
  `;
  bindGlobal();
}

function renderLogin() {
  document.querySelector("#app").innerHTML = `
    <main class="login-page">
      <section class="auth-wrap">
        <div class="auth-icon">${icons.login}</div>
        <h1>Bienvenue</h1>
        <p class="subtitle">Connectez-vous a votre compte</p>
        <div class="auth-card">
          <button class="google-button" id="googleLogin" type="button"><span class="google-g">G</span> Continuer avec Google</button>
          <div class="divider">ou</div>
          <form id="loginForm">
            <div class="field-group">
              <label for="email">Email</label>
              <div class="input-shell">${icons.mail}<input id="email" type="email" value="vous@exemple.com" autocomplete="email" /></div>
            </div>
            <div class="field-group">
              <div class="label-line">
                <label for="password">Mot de passe</label>
                <a class="forgot-link" href="/forgot-password">Mot de passe oublie ?</a>
              </div>
              <div class="input-shell">${icons.lock}<input id="password" type="password" value="password" autocomplete="current-password" /></div>
            </div>
            <button class="primary-button full" type="submit">Se connecter</button>
          </form>
        </div>
        <p class="auth-footer">Pas encore de compte ? <a href="/register">Creer un compte</a></p>
      </section>
    </main>
  `;
  document.querySelector("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItem("cotepro_authed", "1");
    state.authed = true;
    go("/projects/6a27e513ff83f3666b83eeae");
  });
  document.querySelector("#googleLogin").addEventListener("click", () => {
    localStorage.setItem("cotepro_authed", "1");
    state.authed = true;
    go("/projects/6a27e513ff83f3666b83eeae");
  });
}

function renderSidebar() {
  const links = [
    ["/", "Tableau de bord", icons.grid],
    ["/projects", "Chantiers", icons.folder],
    ["/projects/new", "Nouveau chantier", icons.plus],
    ["/library", "Bibliotheque", icons.book]
  ];
  return `
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-symbol">${icons.home}</div>
        <div><span class="brand-title">CotePro</span><span class="brand-subtitle">Menuiserie</span></div>
      </div>
      <nav class="nav">
        ${links
          .map(([path, label, icon]) => {
            const active = state.route === path || (path !== "/" && state.route.startsWith(path));
            return `<button class="nav-button ${active ? "active" : ""}" data-route="${path}" type="button">${icon}<span>${label}</span></button>`;
          })
          .join("")}
      </nav>
      <div class="user-box">
        <div class="user-inner">
          <div class="avatar">${icons.user}</div>
          <div><div class="user-name">Utilisateur</div><div class="user-mail">m.berger@fergyholding.com</div></div>
          <button class="logout-button" id="logout" title="Deconnexion" type="button">${icons.logout}</button>
        </div>
      </div>
    </aside>
  `;
}

function renderRoute() {
  if (state.route === "/") return renderDashboard();
  if (state.route === "/projects") return renderProjects();
  if (state.route === "/projects/new") return renderNewProject();
  if (state.route.startsWith("/projects/")) return renderProjectDetail();
  if (state.route.startsWith("/menuiserie/")) return renderJoineryEditor();
  if (state.route === "/library") return renderLibrary();
  return renderDashboard();
}

function renderDashboard() {
  return `
    <main class="page">
      <header class="page-header">
        <div>
          <h1 class="page-title">${icons.grid} Tableau de bord</h1>
          <p class="page-description">Vue d'ensemble de vos chantiers et releves de cotes.</p>
        </div>
        <button class="primary-button" data-route="/projects/new" type="button">Nouveau chantier</button>
      </header>
      <section class="stats-grid">
        ${statCard("Chantiers actifs", "1", icons.folder)}
        ${statCard("Menuiseries", "2", icons.home)}
        ${statCard("Alertes", "0", icons.alert)}
        ${statCard("Score moyen", "76%", icons.grid)}
      </section>
      <section class="section-grid">
        <div class="card card-pad">
          <h2 class="page-title" style="font-size:18px">Chantiers recents</h2>
          <div class="list" style="margin-top:16px">${projects.map(renderProjectCard).join("")}</div>
        </div>
        <aside class="card card-pad">
          <h2 class="page-title" style="font-size:18px">A traiter</h2>
          <div class="alerts-list" style="margin-top:16px">
            <div class="alert-row"><span class="alert-dot ok"></span><div><strong>Aucune alerte critique</strong><p class="empty-note">Le chantier est en brouillon avec une menuiserie a verifier.</p></div></div>
          </div>
        </aside>
      </section>
    </main>
  `;
}

function statCard(label, value, icon) {
  return `<article class="card card-pad stat"><div><p class="stat-label">${label}</p><p class="stat-value">${value}</p></div><div class="stat-icon">${icon}</div></article>`;
}

function renderProjects() {
  return `
    <main class="page">
      <header class="page-header">
        <div>
          <h1 class="page-title">${icons.folder} Chantiers</h1>
          <p class="page-description">Liste des dossiers de prise de cotes menuiserie.</p>
        </div>
        <button class="primary-button" data-route="/projects/new" type="button">Nouveau chantier</button>
      </header>
      <div class="toolbar">
        <input class="search-input" id="search" placeholder="Rechercher un chantier..." />
        <button class="outline-button" type="button">Filtrer</button>
      </div>
      <section class="list" id="projectList">${projects.map(renderProjectCard).join("")}</section>
    </main>
  `;
}

function renderProjectCard(project) {
  return `
    <article class="project-card" data-open-project="${project.id}">
      <div>
        <div class="project-title-line">
          ${icons.folder}
          <h3>${project.name}</h3>
          ${statusBadge(project.status)}
        </div>
        <div class="meta-line">
          <span>${project.client}</span>
          <span>${project.address}</span>
          <span>${project.joineries} menuiseries</span>
          <span>${project.created}</span>
        </div>
      </div>
      <div class="progress-wrap">
        <div class="progress-head"><span>Progression</span><span>${project.completion}%</span></div>
        <div class="progress"><span style="width:${project.completion}%"></span></div>
      </div>
    </article>
  `;
}

function renderNewProject() {
  return `
    <main class="page compact">
      <header class="page-header">
        <div>
          <h1 class="page-title">${icons.plus} Nouveau chantier</h1>
          <p class="page-description">Creez un dossier client avant d'ajouter les menuiseries.</p>
        </div>
      </header>
      <section class="card card-pad">
        <div class="form-grid">
          ${field("Nom du chantier", "Chantier Durand")}
          ${field("Client", "Sophie Durand")}
          ${field("Adresse", "24 route de Lyon, Annecy", "wide")}
          ${field("Telephone", "06 00 00 00 00")}
          ${field("Email", "client@example.com")}
          ${selectField("Type de projet", ["Renovation", "Neuf", "Extension", "Depannage"])}
          ${selectField("Urgence", ["Normale", "Haute", "Basse"])}
          <div class="simple-field wide"><label>Acces chantier</label><textarea rows="4">Maison individuelle, stationnement possible devant le portail.</textarea></div>
        </div>
        <button class="primary-button" id="createProject" type="button" style="margin-top:18px">Creer le chantier</button>
      </section>
    </main>
  `;
}

function renderProjectDetail() {
  const project = projects.find((item) => item.id === state.activeProjectId) || projects[0];
  return `
    <main class="page">
      <header class="page-header">
        <div>
          <h1 class="page-title">${icons.folder} ${project.name}</h1>
          <p class="page-description">${project.address}</p>
        </div>
        <button class="primary-button" type="button" id="exportPdf">Exporter PDF</button>
      </header>
      <section class="detail-hero">
        <article class="card detail-card">
          <h2 class="detail-title">${project.client}</h2>
          <div class="meta-line">
            <span>${project.type}</span>
            <span>${project.menuisiers}</span>
            <span>${project.created}</span>
            <span>${project.joineries} menuiseries</span>
            ${statusBadge(project.status)}
          </div>
        </article>
        <article class="card score-card">
          <div class="score-ring" style="--value:${project.completion}"><strong>${project.completion}%</strong></div>
          <p class="stat-label" style="margin-top:12px">Score releve</p>
        </article>
      </section>
      <div class="tabs">
        ${tabButton("menuiseries", "Menuiseries")}
        ${tabButton("alerts", "Alertes")}
        ${tabButton("client", "Client")}
      </div>
      ${renderProjectTab(project)}
    </main>
  `;
}

function tabButton(id, label) {
  return `<button class="tab ${state.tab === id ? "active" : ""}" data-tab="${id}" type="button">${label}</button>`;
}

function renderProjectTab(project) {
  if (state.tab === "alerts") {
    const alertRows = joineries.flatMap((j) => j.alerts.map((a) => `<div class="alert-row"><span class="alert-dot">!</span><div><strong>${joineryLabel(j)} ${j.room}</strong><p class="empty-note">${a}</p></div></div>`));
    return `<section class="card card-pad"><div class="alerts-list">${alertRows.length ? alertRows.join("") : '<p class="empty-note">Aucune alerte critique pour ce chantier.</p>'}</div></section>`;
  }
  if (state.tab === "client") {
    return `<section class="card card-pad"><div class="form-grid">${field("Client", project.client)}${field("Email", project.email)}${field("Adresse", project.address, "wide")}${field("Metreur", project.menuisiers)}${field("Projet", project.type)}${field("Batiment", project.building)}<div class="simple-field wide"><label>Options</label><textarea rows="5">${project.options.join("\\n")}</textarea></div></div></section>`;
  }
  return `<section class="joinery-grid">${joineries.map(renderJoineryCard).join("")}</section>`;
}

function joineryLabel(item) {
  return item.reference || item.id;
}

function renderJoineryCard(item) {
  const rows = Object.entries(item.measures).slice(0, 6);
  return `
    <article class="joinery-card">
      <div class="joinery-head">
        <div><h3>${joineryLabel(item)} ${item.product}</h3><p class="empty-note">${item.room}  ${item.pose}</p></div>
        ${statusBadge(item.status)}
      </div>
      <div class="measure-grid">
        ${rows.map(([label, value]) => `<div class="measure-cell"><span>${label}</span><strong>${value || "-"} mm</strong></div>`).join("")}
      </div>
      <div class="progress-wrap" style="margin-bottom:12px">
        <div class="progress-head"><span>Score</span><span>${item.score}%</span></div>
        <div class="progress"><span style="width:${item.score}%"></span></div>
      </div>
      <button class="outline-button" data-open-joinery="${item.id}" type="button">Modifier</button>
    </article>
  `;
}

function renderJoineryEditor() {
  const item = joineries.find((joinery) => joinery.id === state.activeJoineryId) || joineries[0];
  return `
    <main class="page">
      <header class="page-header">
        <div>
          <h1 class="page-title">${icons.home} ${joineryLabel(item)} ${item.product} ${item.room}</h1>
          <p class="page-description">Mesures obligatoires, photos guidees et controles anti-erreur.</p>
        </div>
        <button class="primary-button" id="saveJoinery" type="button">Enregistrer</button>
      </header>
      <section class="editor-grid">
        <div class="card card-pad">
          <div class="form-grid" style="margin-bottom:18px">
            ${selectField("Type de pose", ["Renovation", "Depose totale", "Tunnel", "Applique", "Feuillure"], item.pose)}
            ${selectField("Sens d'ouverture", ["Droite tirant", "Gauche tirant", "Oscillo-battant", "Fixe"], item.opening)}
            ${selectField("Matiere", ["PVC", "Aluminium", "Bois", "Mixte"], item.material)}
            ${selectField("Vitrage", ["Double", "Triple", "Simple"], item.glazing)}
            ${field("Tapees", item.tapees)}
            ${field("Entree d'air", item.airEntry)}
          </div>
          <h2 class="page-title" style="font-size:18px;margin-bottom:14px">Mesures obligatoires</h2>
          <div class="measurement-editor">
            ${Object.entries(item.measures).map(([label, value]) => `<label class="measurement-row"><span>${label}</span><input value="${value}" /><span class="unit">mm</span></label>`).join("")}
          </div>
        </div>
        <aside class="card card-pad">
          <h2 class="page-title" style="font-size:18px;margin-bottom:14px">Score releve</h2>
          <div class="score-card" style="box-shadow:none;border:0;padding:0 0 18px"><div class="score-ring" style="--value:${item.score}"><strong>${item.score}%</strong></div></div>
          <div class="alerts-list">${item.alerts.length ? item.alerts.map((alert) => `<div class="alert-row"><span class="alert-dot">!</span><div><strong>A verifier</strong><p class="empty-note">${alert}</p></div></div>`).join("") : '<p class="empty-note">Aucune alerte critique.</p>'}</div>
        </aside>
      </section>
      <section class="section-grid" style="margin-top:18px">
        <div class="card card-pad">
          <h2 class="page-title" style="font-size:18px;margin-bottom:14px">Croquis assiste</h2>
          <div class="sketch">${windowSketch()}</div>
        </div>
        <div class="card card-pad">
          <h2 class="page-title" style="font-size:18px;margin-bottom:14px">Photos guidees</h2>
          <div class="photo-grid">${["Vue interieure", "Vue exterieure", "Appui", "Dormant", "Obstacle", "Volet"].map((p) => `<div class="photo-tile">${p}</div>`).join("")}</div>
        </div>
      </section>
    </main>
  `;
}

function renderLibrary() {
  return `
    <main class="page compact">
      <header class="page-header">
        <div>
          <h1 class="page-title">${icons.book} Bibliotheque technique</h1>
          <p class="page-description">Rappels, conseils et references pour la prise de cotes menuiserie.</p>
        </div>
      </header>
      <div class="tabs">
        ${tabButton("poses", "Types de pose")}
        ${tabButton("mesures", "Conseils mesures")}
        ${tabButton("erreurs", "Erreurs frequentes")}
        ${tabButton("glossaire", "Glossaire")}
      </div>
      <section class="library-section">${renderLibraryTab()}</section>
    </main>
  `;
}

function renderLibraryTab() {
  const tab = ["poses", "mesures", "erreurs", "glossaire"].includes(state.tab) ? state.tab : "poses";
  if (tab === "erreurs") {
    return library.erreurs.map((item) => `<article class="card accordion-card"><h3>${item}</h3><p>Point de vigilance a controler avant commande.</p></article>`).join("");
  }
  if (tab === "glossaire") {
    return library.glossaire.map(([term, def]) => `<article class="card accordion-card"><h3>${term}</h3><p>${def}</p></article>`).join("");
  }
  return library[tab]
    .map(
      (item) => `<article class="card accordion-card"><h3>${item.title}</h3><p>${item.description}</p>${item.points ? `<ul>${item.points.map((p) => `<li>${p}</li>`).join("")}</ul>` : ""}</article>`
    )
    .join("");
}

function field(label, value, extra = "") {
  return `<div class="simple-field ${extra}"><label>${label}</label><input value="${value}" /></div>`;
}

function selectField(label, values, selected = values[0]) {
  return `<div class="simple-field"><label>${label}</label><select>${values.map((value) => `<option ${value === selected ? "selected" : ""}>${value}</option>`).join("")}</select></div>`;
}

function statusBadge(status) {
  const className = status === "Complet" ? "green" : status === "Non commandable" ? "red" : status === "A verifier" ? "amber" : status === "Brouillon" ? "amber" : "blue";
  return `<span class="badge ${className}">${status}</span>`;
}

function windowSketch() {
  return `
    <svg viewBox="0 0 560 360" role="img" aria-label="Croquis fenetre">
      <rect x="112" y="45" width="336" height="245" rx="8" fill="#fff" stroke="#94a3b8" stroke-width="8"/>
      <rect x="136" y="72" width="126" height="190" rx="5" fill="#e8f1f5" stroke="#64748b" stroke-width="4"/>
      <rect x="298" y="72" width="126" height="190" rx="5" fill="#e8f1f5" stroke="#64748b" stroke-width="4"/>
      <line x1="280" y1="50" x2="280" y2="286" stroke="#64748b" stroke-width="6"/>
      <line x1="136" y1="72" x2="262" y2="262" stroke="#225ba3" stroke-width="3" stroke-dasharray="8 7"/>
      <line x1="262" y1="72" x2="136" y2="262" stroke="#225ba3" stroke-width="3" stroke-dasharray="8 7"/>
      <line x1="298" y1="72" x2="424" y2="262" stroke="#225ba3" stroke-width="3" stroke-dasharray="8 7"/>
      <line x1="424" y1="72" x2="298" y2="262" stroke="#225ba3" stroke-width="3" stroke-dasharray="8 7"/>
      <line x1="95" y1="35" x2="465" y2="35" stroke="#225ba3" stroke-width="2" stroke-dasharray="7 8"/>
      <line x1="95" y1="305" x2="465" y2="305" stroke="#225ba3" stroke-width="2" stroke-dasharray="7 8"/>
      <text x="242" y="24" fill="#647184" font-size="13">Largeur haut</text>
      <text x="238" y="330" fill="#647184" font-size="13">Largeur bas</text>
    </svg>
  `;
}

function bindGlobal() {
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => go(button.dataset.route));
  });
  document.querySelectorAll("[data-open-project]").forEach((card) => {
    card.addEventListener("click", () => {
      state.activeProjectId = card.dataset.openProject;
      go(`/projects/${state.activeProjectId}`);
    });
  });
  document.querySelectorAll("[data-open-joinery]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      state.activeJoineryId = button.dataset.openJoinery;
      go(`/menuiserie/${state.activeJoineryId}`);
    });
  });
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.tab = button.dataset.tab;
      render();
    });
  });
  document.querySelector("#logout")?.addEventListener("click", () => {
    localStorage.removeItem("cotepro_authed");
    state.authed = false;
    go("/login");
  });
  document.querySelector("#exportPdf")?.addEventListener("click", () => showToast("Export PDF genere."));
  document.querySelector("#createProject")?.addEventListener("click", () => showToast("Chantier cree dans le brouillon."));
  document.querySelector("#saveJoinery")?.addEventListener("click", () => showToast("Menuiserie enregistree."));
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

render();
