const productTemplates = {
  "Fenêtre": {
    types: ["Fenêtre 2 vantaux", "Fenêtre 1 vantail", "Oscillo-battant", "Fixe"],
    measures: [
      ["widthTop", "Largeur haut", 1250],
      ["widthMiddle", "Largeur milieu", 1252],
      ["widthBottom", "Largeur bas", 1251],
      ["heightLeft", "Hauteur gauche", 1480],
      ["heightCenter", "Hauteur centre", 1478],
      ["heightRight", "Hauteur droite", 1482],
      ["diagA", "Diagonale \\", 1930],
      ["diagB", "Diagonale /", 1932],
      ["depth", "Profondeur disponible", ""],
      ["sill", "Hauteur d’allège", ""]
    ],
    photos: ["Vue intérieure", "Vue extérieure", "Largeur haut", "Largeur milieu", "Largeur bas", "Hauteur centre"],
    installs: ["Applique", "Tunnel", "Feuillure", "Rénovation", "Dépose totale"],
    openings: ["Poussant droit", "Poussant gauche", "Oscillo-battant", "Fixe"]
  },
  "Porte d’entrée": {
    types: ["Porte pleine", "Porte vitrée", "Porte avec fixe latéral"],
    measures: [
      ["widthTop", "Largeur haut", 980],
      ["widthMiddle", "Largeur milieu", 982],
      ["widthBottom", "Largeur bas", 981],
      ["heightLeft", "Hauteur gauche", 2180],
      ["heightRight", "Hauteur droite", 2177],
      ["threshold", "Seuil existant", ""],
      ["hingeOffset", "Déport paumelles", ""]
    ],
    photos: ["Vue extérieure", "Vue intérieure", "Seuil", "Serrure", "Paumelles", "Interphone"],
    installs: ["Applique", "Tunnel", "Feuillure", "Rénovation", "Dépose totale"],
    openings: ["Poussant droit", "Poussant gauche", "Tirant droit", "Tirant gauche"]
  },
  "Baie coulissante": {
    types: ["Baie 2 rails", "Baie 3 rails", "Coulissant à galandage"],
    measures: [
      ["widthTop", "Largeur haut", 2400],
      ["widthBottom", "Largeur bas", 2396],
      ["heightLeft", "Hauteur gauche", 2150],
      ["heightRight", "Hauteur droite", 2148],
      ["threshold", "Seuil", ""],
      ["floorLevel", "Niveau sol intérieur / extérieur", ""],
      ["refoulement", "Refoulement disponible", ""]
    ],
    photos: ["Vue intérieure", "Vue extérieure", "Seuil", "Rails", "Volet roulant", "Niveau sol"],
    installs: ["Applique", "Tunnel", "Dépose totale", "Seuil encastré"],
    openings: ["Refoulement gauche", "Refoulement droit", "Deux vantaux mobiles"]
  },
  "Volet roulant": {
    types: ["Rénovation", "Traditionnel", "Intégré", "Bloc-baie"],
    measures: [
      ["widthTop", "Largeur tableau", 1250],
      ["heightLeft", "Hauteur tableau", 1480],
      ["boxHeight", "Hauteur coffre", ""],
      ["slideDepth", "Débord coulisses", ""],
      ["powerSide", "Côté moteur", ""],
      ["powerSupply", "Alimentation électrique", ""]
    ],
    photos: ["Vue façade", "Sous linteau", "Coffre", "Coulisse gauche", "Coulisse droite", "Alimentation"],
    installs: ["Sous linteau", "Façade", "Intégré", "Rénovation"],
    openings: ["Moteur gauche", "Moteur droit", "Manuel"]
  },
  "Porte de garage": {
    types: ["Sectionnelle", "Basculante", "Enroulable", "Battante"],
    measures: [
      ["widthTop", "Largeur tableau", 2500],
      ["heightLeft", "Hauteur tableau", 2120],
      ["lintel", "Retombée linteau", ""],
      ["spandrelLeft", "Écoinçon gauche", ""],
      ["spandrelRight", "Écoinçon droit", ""],
      ["garageDepth", "Profondeur garage", ""],
      ["ceiling", "Obstacles plafond", ""]
    ],
    photos: ["Vue extérieure", "Vue intérieure", "Linteau", "Écoinçon gauche", "Écoinçon droit", "Plafond"],
    installs: ["Applique intérieure", "Sous linteau", "Enroulable", "Battante"],
    openings: ["Motorisée", "Manuelle", "Portillon intégré"]
  },
  "Moustiquaire": {
    types: ["Enroulable", "Plissée", "Fixe", "Battante"],
    measures: [
      ["widthTop", "Largeur haut", 780],
      ["widthBottom", "Largeur bas", 779],
      ["heightLeft", "Hauteur gauche", 1180],
      ["heightRight", "Hauteur droite", 1182],
      ["depth", "Profondeur disponible", ""],
      ["handleClearance", "Poignée gênante", ""]
    ],
    photos: ["Vue intérieure", "Vue extérieure", "Profondeur", "Poignée", "Volet existant", "Appui"],
    installs: ["Tableau", "Dormant", "Façade", "Entre coulisses"],
    openings: ["Manœuvre gauche", "Manœuvre droite", "Verticale", "Latérale"]
  }
};

const joineries = [
  { id: "F01", product: "Fenêtre", room: "Cuisine", status: "En cours" },
  { id: "F02", product: "Fenêtre", room: "Salon", status: "À vérifier" },
  { id: "PF03", product: "Baie coulissante", room: "Séjour", status: "À vérifier" },
  { id: "P01", product: "Porte d’entrée", room: "Entrée", status: "En cours" },
  { id: "VR01", product: "Volet roulant", room: "Chambre", status: "Non commandable" },
  { id: "PG01", product: "Porte de garage", room: "Garage", status: "En cours" },
  { id: "M01", product: "Moustiquaire", room: "Salle de bain", status: "En cours" }
];

let activeIndex = 0;
let state = createState(joineries[activeIndex]);

const els = {
  joineryList: document.querySelector("#joineryList"),
  itemTitle: document.querySelector("#itemTitle"),
  itemStatus: document.querySelector("#itemStatus"),
  productType: document.querySelector("#productType"),
  material: document.querySelector("#material"),
  color: document.querySelector("#color"),
  room: document.querySelector("#room"),
  floor: document.querySelector("#floor"),
  measureFields: document.querySelector("#measureFields"),
  installChoices: document.querySelector("#installChoices"),
  openingChoices: document.querySelector("#openingChoices"),
  requiredCount: document.querySelector("#requiredCount"),
  scoreValue: document.querySelector("#scoreValue"),
  scoreRing: document.querySelector(".score-ring"),
  fieldSummary: document.querySelector("#fieldSummary"),
  alertCount: document.querySelector("#alertCount"),
  alertsList: document.querySelector("#alertsList"),
  photoList: document.querySelector("#photoList"),
  photoCount: document.querySelector("#photoCount"),
  infoList: document.querySelector("#infoList"),
  notes: document.querySelector("#notes"),
  diagramTitle: document.querySelector("#diagramTitle"),
  diagramWidthTop: document.querySelector("#diagramWidthTop"),
  diagramWidthBottom: document.querySelector("#diagramWidthBottom"),
  diagramHeightLeft: document.querySelector("#diagramHeightLeft"),
  diagramHeightRight: document.querySelector("#diagramHeightRight"),
  saveStatus: document.querySelector("#saveStatus"),
  toast: document.querySelector("#toast")
};

function createState(joinery) {
  const template = productTemplates[joinery.product];
  return {
    ...joinery,
    type: template.types[0],
    material: "Aluminium",
    color: "Gris anthracite",
    floor: "RDC",
    install: template.installs[0],
    opening: template.openings[0],
    notes: "",
    measures: Object.fromEntries(template.measures.map(([key, , value]) => [key, value])),
    photos: Object.fromEntries(template.photos.map((photo, index) => [photo, index < 4]))
  };
}

function render() {
  renderJoineryList();
  renderHeader();
  renderProductOptions();
  renderMeasures();
  renderChoices();
  renderPhotos();
  renderAudit();
  renderInfo();
  syncDiagram();
}

function renderJoineryList() {
  els.joineryList.innerHTML = "";
  joineries.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `joinery-row ${index === activeIndex ? "active" : ""}`;
    button.innerHTML = `
      <span class="mini-window" aria-hidden="true"><span></span><span></span></span>
      <span><strong>${item.id} ${item.product}</strong><small>${item.room}</small></span>
      <span class="${item.status === "Non commandable" ? "todo-dot" : "done-dot"}" aria-hidden="true"></span>
    `;
    button.addEventListener("click", () => {
      activeIndex = index;
      state = createState(joineries[activeIndex]);
      render();
    });
    els.joineryList.appendChild(button);
  });
}

function renderHeader() {
  els.itemTitle.textContent = `${state.id} ${state.product} ${state.room.toLowerCase()}`;
  els.itemStatus.textContent = state.status;
  els.material.value = state.material;
  els.color.value = state.color;
  els.room.value = state.room;
  els.floor.value = state.floor;
  els.notes.value = state.notes;
}

function renderProductOptions() {
  const template = productTemplates[state.product];
  els.productType.innerHTML = template.types.map((type) => `<option>${type}</option>`).join("");
  els.productType.value = state.type;
}

function renderMeasures() {
  const template = productTemplates[state.product];
  els.measureFields.innerHTML = "";

  template.measures.forEach(([key, label]) => {
    const value = state.measures[key] ?? "";
    const row = document.createElement("label");
    row.className = "measure-row";
    row.innerHTML = `
      <span>${label}</span>
      <input inputmode="decimal" data-measure="${key}" value="${value}" aria-label="${label}" />
      <span class="measure-unit">mm</span>
      <span class="${value === "" ? "state-empty" : getMeasureWarning(key) ? "state-warn" : "state-ok"}">${value === "" ? "" : getMeasureWarning(key) ? "!" : "✓"}</span>
    `;
    els.measureFields.appendChild(row);
  });

  els.measureFields.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", (event) => {
      state.measures[event.target.dataset.measure] = event.target.value.trim();
      markDirty();
      renderMeasures();
      renderAudit();
      syncDiagram();
    });
  });
}

function renderChoices() {
  renderSegments(els.installChoices, productTemplates[state.product].installs, state.install, (value) => {
    state.install = value;
    markDirty();
    renderChoices();
    renderAudit();
  });

  renderSegments(els.openingChoices, productTemplates[state.product].openings, state.opening, (value) => {
    state.opening = value;
    markDirty();
    renderChoices();
    renderAudit();
  });
}

function renderSegments(container, values, active, onSelect) {
  container.innerHTML = "";
  values.forEach((value) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `segment ${value === active ? "active" : ""}`;
    button.textContent = value;
    button.addEventListener("click", () => onSelect(value));
    container.appendChild(button);
  });
}

function renderPhotos() {
  const photos = productTemplates[state.product].photos;
  const done = photos.filter((photo) => state.photos[photo]).length;
  els.photoCount.textContent = `${done} / ${photos.length}`;
  els.photoList.innerHTML = "";

  photos.forEach((photo) => {
    const tile = document.createElement("article");
    const isDone = Boolean(state.photos[photo]);
    tile.className = `photo-tile ${isDone ? "done" : "missing"}`;
    tile.innerHTML = `
      <div class="photo-preview" aria-hidden="true"></div>
      <strong>${photo}</strong>
      <button type="button">${isDone ? "Photo prise" : "À ajouter"}</button>
    `;
    tile.querySelector("button").addEventListener("click", () => {
      state.photos[photo] = !state.photos[photo];
      markDirty();
      renderPhotos();
      renderAudit();
    });
    els.photoList.appendChild(tile);
  });
}

function renderAudit() {
  const template = productTemplates[state.product];
  const required = template.measures.map(([key]) => key);
  const completed = required.filter((key) => `${state.measures[key] ?? ""}`.trim() !== "").length;
  const photos = template.photos;
  const completedPhotos = photos.filter((photo) => state.photos[photo]).length;
  const allRequired = required.length + photos.length + 2;
  const allCompleted = completed + completedPhotos + (state.install ? 1 : 0) + (state.opening ? 1 : 0);
  const score = Math.round((allCompleted / allRequired) * 100);
  const alerts = buildAlerts();

  els.requiredCount.textContent = `${completed} / ${required.length}`;
  els.scoreValue.textContent = `${score}%`;
  els.scoreRing.style.setProperty("--score", score);
  els.fieldSummary.textContent = `${allCompleted} / ${allRequired}`;
  els.alertCount.textContent = alerts.length;
  els.alertsList.innerHTML = alerts.length ? "" : `<p class="empty-copy">Aucune alerte critique pour cette menuiserie.</p>`;

  alerts.forEach((alert) => {
    const item = document.createElement("article");
    item.className = `alert-item ${alert.level}`;
    item.innerHTML = `
      <span class="alert-icon" aria-hidden="true">!</span>
      <div>
        <strong>${alert.title}</strong>
        <p>${alert.body}</p>
        <button type="button">${alert.action}</button>
      </div>
    `;
    item.querySelector("button").addEventListener("click", () => showToast(alert.toast));
    els.alertsList.appendChild(item);
  });
}

function buildAlerts() {
  const alerts = [];
  const widthSpread = spread(["widthTop", "widthMiddle", "widthBottom"]);
  const heightSpread = spread(["heightLeft", "heightCenter", "heightRight"]);
  const diagSpread = spread(["diagA", "diagB"]);

  if (widthSpread > 4) {
    alerts.push({
      level: "warn",
      title: "Largeurs incohérentes",
      body: `Écart supérieur à 4 mm entre les largeurs relevées (${widthSpread} mm).`,
      action: "Revoir les mesures",
      toast: "Contrôlez haut, milieu et bas avec le même repère."
    });
  }

  if (heightSpread > 4) {
    alerts.push({
      level: "danger",
      title: "Hauteurs à vérifier",
      body: `Écart supérieur à 4 mm entre les hauteurs relevées (${heightSpread} mm).`,
      action: "Voir le détail",
      toast: "Vérifiez l’équerrage et le niveau de l’appui."
    });
  }

  if (diagSpread > 5) {
    alerts.push({
      level: "warn",
      title: "Équerrage incertain",
      body: `Les diagonales diffèrent de ${diagSpread} mm. Le tableau peut être hors équerre.`,
      action: "Contrôler",
      toast: "Prenez une photo de détail et notez la cote la plus défavorable."
    });
  }

  if (state.install === "Rénovation" && !state.measures.depth) {
    alerts.push({
      level: "danger",
      title: "Dormant existant non mesuré",
      body: "La pose rénovation exige la profondeur et l’épaisseur du dormant existant.",
      action: "Ajouter la cote",
      toast: "Champ profondeur disponible à compléter."
    });
  }

  if (state.product === "Volet roulant" && !state.measures.powerSupply) {
    alerts.push({
      level: "danger",
      title: "Alimentation non renseignée",
      body: "Motorisation prévue ou possible sans alimentation électrique validée.",
      action: "Qualifier",
      toast: "Ajoutez côté moteur, arrivée électrique et commande."
    });
  }

  if (state.product === "Porte de garage" && !state.measures.lintel) {
    alerts.push({
      level: "info",
      title: "Retombée de linteau manquante",
      body: "La compatibilité sectionnelle dépend fortement de cette mesure.",
      action: "Compléter",
      toast: "Mesurez linteau, écoinçons et profondeur garage."
    });
  }

  const missingPhotos = Object.entries(state.photos).filter(([, done]) => !done);
  if (missingPhotos.length) {
    alerts.push({
      level: "info",
      title: "Photos guidées incomplètes",
      body: `${missingPhotos.length} photo(s) restent à ajouter au dossier.`,
      action: "Ouvrir photos",
      toast: "Utilisez les tuiles photos en bas de l’écran."
    });
  }

  return alerts;
}

function renderInfo() {
  const lines = [
    ["Type de pose", state.install],
    ["Sens d’ouverture", state.opening],
    ["Matériau", state.material],
    ["Coloris", state.color],
    ["Localisation", state.room],
    ["Niveau", state.floor]
  ];
  els.infoList.innerHTML = lines.map(([key, value]) => `<dt>${key}</dt><dd>${value || "-"}</dd>`).join("");
}

function syncDiagram() {
  els.diagramTitle.textContent = `Schéma ${state.product.toLowerCase()}`;
  els.diagramWidthTop.textContent = state.measures.widthTop || "-";
  els.diagramWidthBottom.textContent = state.measures.widthBottom || "-";
  els.diagramHeightLeft.textContent = state.measures.heightLeft || "-";
  els.diagramHeightRight.textContent = state.measures.heightRight || "-";
}

function getMeasureWarning(key) {
  if (["widthTop", "widthMiddle", "widthBottom"].includes(key)) {
    return spread(["widthTop", "widthMiddle", "widthBottom"]) > 4;
  }
  if (["heightLeft", "heightCenter", "heightRight"].includes(key)) {
    return spread(["heightLeft", "heightCenter", "heightRight"]) > 4;
  }
  if (["diagA", "diagB"].includes(key)) {
    return spread(["diagA", "diagB"]) > 5;
  }
  return false;
}

function spread(keys) {
  const values = keys.map((key) => Number(state.measures[key])).filter((value) => Number.isFinite(value) && value > 0);
  if (values.length < 2) return 0;
  return Math.max(...values) - Math.min(...values);
}

function markDirty() {
  els.saveStatus.textContent = "Modifications non enregistrées";
  els.saveStatus.style.color = "var(--warn)";
}

function save() {
  els.saveStatus.textContent = "Enregistré";
  els.saveStatus.style.color = "var(--muted)";
  showToast("Dossier chantier enregistré localement.");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 2400);
}

els.material.addEventListener("change", (event) => {
  state.material = event.target.value;
  markDirty();
  renderInfo();
});

els.color.addEventListener("change", (event) => {
  state.color = event.target.value;
  markDirty();
  renderInfo();
});

els.room.addEventListener("input", (event) => {
  state.room = event.target.value;
  joineries[activeIndex].room = event.target.value;
  markDirty();
  renderJoineryList();
  renderHeader();
  renderInfo();
});

els.floor.addEventListener("change", (event) => {
  state.floor = event.target.value;
  markDirty();
  renderInfo();
});

els.productType.addEventListener("change", (event) => {
  state.type = event.target.value;
  markDirty();
});

els.notes.addEventListener("input", (event) => {
  state.notes = event.target.value;
  markDirty();
});

document.querySelector("#saveProject").addEventListener("click", save);
document.querySelector("#exportPdf").addEventListener("click", () => showToast("Export PDF prêt pour le MVP."));
document.querySelector("#duplicateItem").addEventListener("click", () => showToast("Menuiserie dupliquée dans le brouillon."));
document.querySelector("#shareProject").addEventListener("click", () => showToast("Lien de partage préparé."));
document.querySelector("#validateItem").addEventListener("click", () => {
  const alerts = buildAlerts();
  if (alerts.some((alert) => alert.level === "danger")) {
    showToast("Validation bloquée : corrigez ou justifiez les alertes critiques.");
    return;
  }
  state.status = "Complet";
  joineries[activeIndex].status = "Complet";
  save();
  render();
  showToast("Menuiserie validée.");
});

document.querySelector("#resetMeasures").addEventListener("click", () => {
  state = createState(joineries[activeIndex]);
  markDirty();
  render();
});

document.querySelector("#addJoinery").addEventListener("click", () => {
  const nextNumber = joineries.length + 1;
  joineries.push({ id: `F${String(nextNumber).padStart(2, "0")}`, product: "Fenêtre", room: "Nouvelle pièce", status: "En cours" });
  activeIndex = joineries.length - 1;
  state = createState(joineries[activeIndex]);
  markDirty();
  render();
  showToast("Nouvelle menuiserie ajoutée.");
});

document.querySelector("#searchInput").addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();
  document.querySelectorAll(".project").forEach((project) => {
    project.style.display = project.textContent.toLowerCase().includes(query) ? "flex" : "none";
  });
});

render();
