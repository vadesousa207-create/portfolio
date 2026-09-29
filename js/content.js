// ============================================================
// DONNÉES DU PORTFOLIO BTS SIO SLAM — VALENTIN DE SOUSA
// ============================================================

// --- 1. COMPÉTENCES ---
const skillsData = [
    {
        category: "Développement Web & Programmation",
        icon: "fa-solid fa-code",
        items: [
            { name: "HTML5 / CSS3", level: "À l'aise", levelClass: "level-aise" },
            { name: "JavaScript (ES6+)", level: "À l'aise", levelClass: "level-aise" }
        ]
    },
    {
        category: "Outils & Environnement",
        icon: "fa-solid fa-toolbox",
        items: [
            { name: "VS Code", level: "À l'aise", levelClass: "level-aise" },
            { name: "Git / GitHub", level: "À l'aise", levelClass: "level-aise" },
            { name: "Windows", level: "À l'aise", levelClass: "level-aise" }
        ]
    },
    {
        category: "Compétences Transversales & Métiers",
        icon: "fa-solid fa-user-gear",
        items: [
            { name: "Gestion e-commerce (Carrefour)", level: "À l'aise", levelClass: "level-aise" },
            { name: "Logique & Rigoureux", level: "À l'aise", levelClass: "level-aise" },
            { name: "Communication & Service Client", level: "À l'aise", levelClass: "level-aise" }
        ]
    }
];

// --- 2. PROJETS ---
const projectsData = [
    {
        title: "[PROJET EN COURS DE DÉVELOPPEMENT]",
        image: "https://via.placeholder.com/400x200/1e293b/ffffff?text=Projet+SLAM+en+cours",
        description: "Mes projets de développement d'applications (AP / E4) sont actuellement en cours de réalisation et seront ajoutés très prochainement.",
        objective: "Concevoir des applications web et logicielles répondant aux besoins du BTS SIO SLAM.",
        technologies: ["HTML", "CSS", "JavaScript"],
        skills: ["C1.1.1 Réaliser un développement applicatif"],
        difficulties: "Structure & Algorithmique",
        solutions: "Mise en place d'une architecture modulaire et apprentissage continu.",
        githubUrl: "",
        demoUrl: ""
    }
];

// --- 3. EXPÉRIENCES & STAGES ---
const experiencesData = [
    {
        company: "Carrefour",
        role: "Assistant E-Commerce",
        date: "2026",
        location: "France-Ormessons sur Marne 94",
        missions: [
            "Gestion et préparation des commandes e-commerce",
            "Suivi des stocks et organisation de la chaîne logistique digitale",
            "Relation client et gestion des retraits de commandes"
        ],
        technologies: ["Outils E-Commerce", "Gestion de stock"]
    },
    {
        company: "Fenwick Linde (SAV)",
        role: "Stagiaire Service Après-Vente & Logistique",
        date: "2024",
        location: "France-Gonesse 95",
        missions: [
            "Aide à la gestion des dossiers de maintenance et du suivi client",
            "Classement et archivage de documents techniques",
            "Préparation de rapports et saisie informatique de données",
            "Soutien administratif auprès des techniciens et du service logistique",
            "Observation du fonctionnement interne d'une entreprise industrielle"
        ],
        technologies: ["Saisie informatique", "Bureautique", "Gestion documentaire"]
    },
    {
        company: "Cultura",
        role: "Stagiaire Conseiller de Vente",
        date: "2022",
        location: "France-Ormessons sur Marne 94",
        missions: [
            "Accueil, écoute et conseil des clients selon leurs besoins",
            "Mise en rayon, étiquetage et organisation des produits",
            "Réception de marchandises et vérification des livraisons",
            "Tenue de caisse et encaissement sécurisé",
            "Fidélisation, gestion des retours et travail en équipe"
        ],
        technologies: ["Gestion de caisse", "Relation client", "Logistique"]
    }
];

// --- 4. VEILLE TECHNOLOGIQUE ---
const techVeilleSubject = {
    title: "La nouvelle génération de batteries de téléphone : La Batterie Tout-Solide",
    explanation: "Analyse des limites des batteries actuelles lithium-ion (risque d'incendie, stockage limité à 200-250 Wh/kg, dégradation rapide, surchauffe et bridage applicatif) et de l'arrivée d'ici 2027 des batteries 'tout-solide' (électrolyte solide, autonomie doublée à 500 Wh/kg, recharge en 15 min, durée de vie de 1500 à 2000 cycles, maintien des performances du processeur).",
    sources: ["Presse Spécialisée Tech", "Constructeurs Mobiles", "Blogs d'Innovation Matérielle"]
};

const techVeilleArticles = [
    {
        date: "Échéance 2027",
        title: "Passage de l'électrolyte liquide à l'électrolyte solide",
        source: "Veille Industrielle & Recherche Tech",
        summary: "Suppression des risques d'incendie et gain d'espace permettant de diviser par deux l'épaisseur des téléphones tout en doublant la densité énergétique (passant de 250 à 500 Wh/kg). Recharge ultra-rapide en 15 minutes sans surchauffe.",
        impact: "Impact Mobilité : Conservation des performances maximales du processeur (aucun bridage thermique) et hausse majeure de la durée de vie de la batterie (5 ans d'utilisation sans baisse majeure). Frein principal : coûts de fabrication élevés et précision d'assemblage microscopique."
    }
];

// --- 5. VEILLE CYBERSÉCURITÉ ---
const cyberVeilleSubject = {
    title: "La Double Authentification (2FA / MFA)",
    context: "Méthode de sécurité exigeant deux preuves distinctes pour confirmer une identité lors de la connexion (Facteur 1 : Mot de passe + Facteur 2 : Élément en votre possession ou biométrie). Elle permet d'empêcher les piratages même en cas de mot de passe compromis et de sécuriser les comptes sensibles.",
    sources: ["ANSSI", "Guides OWASP", "Fournisseurs de solutions d'authentification (Google, Microsoft, Yubico)"]
};

const cyberVeilleArticles = [
    {
        date: "Actualité Cybersécurité",
        title: "Panorama des facteurs d'authentification et méthodes de récupération",
        type: "Sécurité des Accès & Gestion des Identités",
        summary: "Présentation des différents facteurs : SMS/Téléphone (simple mais sensible au SIM-swap), Applications Authenticator TOTP (très sécurisées et hors-ligne), Notifications Push, Clés physiques FIDO2 / YubiKey (haut niveau, incrochetable par phishing) et Biométrie.",
        analysis: "Analyse des procédures d'urgence en cas de perte du facteur 2FA : utilisation obligatoire de codes de secours uniques, appareils secondaires, ou procédures d'identification auprès du support pour éviter le blocage définitif du compte.",
        sourceUrl: ""
    }
];