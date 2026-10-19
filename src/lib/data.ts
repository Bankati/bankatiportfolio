export const profile = {
  role: "Data Analyst | Data Scientiste | Software Developer",
  eyebrow: "Data · Développement · Cloud",
  quote:
    "Avec les données, on peut toujours améliorer l'existant ; il suffit de savoir mieux les analyser.",
  name: "Mabibè Bankati",
  firstName: "Mabibè",
  photo: "/images/profile.jpg",
  email: "mabibe.bankati@lomebs.com",
  linkedin: "https://www.linkedin.com/in/mabib%C3%A8-bankati-56b349379",
  github: "https://github.com/Bankati",
  phone: "+228 70 39 39 24",
};

export const stats = [
  { value: 15, suffix: "+", label: "Projets data réalisés" },
  { value: 5, suffix: "+", label: "Tableaux de bord mis à jour" },
  { value: 5, suffix: "", label: "SGBD maîtrisés" },
  { value: 4, suffix: "", label: "Certifications obtenues" },
];

/* ------------------------------------------------------------------ */
/* Domaines de projets                                                  */
/* Un onglet de filtre n'apparaît que si au moins un projet l'utilise.  */
/* ------------------------------------------------------------------ */

export const domains = [
  { id: "web", label: "Développement Web / Full Stack" },
  { id: "datascience", label: "Data Science" },
  { id: "ml", label: "Machine Learning" },
  { id: "bi", label: "Data Analysis / BI" },
  { id: "dataeng", label: "Data Engineering" },
  { id: "cloud", label: "Cloud / DevOps" },
  { id: "other", label: "Autres projets techniques" },
] as const;

export type DomainId = (typeof domains)[number]["id"];

export type Project = {
  /** Capture d'écran ou visuel du projet. Si absent, une vignette de repli est affichée. */
  image?: string;
  domain: DomainId;
  category: string;
  title: string;
  context: string;
  /** Langage principal (optionnel, affiché en priorité dans la fiche technique) */
  language?: string;
  /** Base de données utilisée (optionnel) */
  database?: string;
  /** Hébergement / déploiement (optionnel) */
  hosting?: string;
  tech: string[];
  result: string;
  /** Code source, rapport ou démonstration principale */
  link: string;
  /** Application déployée (optionnel) */
  demo?: string;
};

export const projects: Project[] = [
  {
    image: "/images/project-ds-01-sql.png",
    domain: "datascience",
    category: "SQL",
    title: "SQL — Réservations de vols",
    context:
      "Module 1 du Cahier de vacances Machine Learnia 2026. Interrogation d'une base de données de réservations aériennes (passagers, vols, réservations) pour répondre à une vraie question business : quelle destination renforcer avec un vol hebdomadaire supplémentaire ?",
    language: "Python",
    database: "SQLite",
    tech: ["SQL", "Pandas", "Matplotlib"],
    result:
      "Schéma relationnel complet, requêtes de base, agrégations (GROUP BY/HAVING), jointures multi-tables et sous-requêtes, jusqu'à une recommandation chiffrée et illustrée.",
    link: "https://github.com/Bankati/cahier-vacances-01-sql-vols",
  },
  {
    image: "/images/project-ds-02-ml-coupe-du-monde.png",
    domain: "datascience",
    category: "Machine Learning",
    title: "ML — Prédire la Coupe du Monde 2026",
    context:
      "Module 2 du Cahier de vacances Machine Learnia 2026. Construction d'un modèle de Machine Learning supervisé pour prédire l'issue de matchs de football à partir d'un historique de rencontres internationales.",
    language: "Python",
    tech: ["Scikit-learn", "Pandas", "Matplotlib"],
    result:
      "Préparation des données, feature engineering à partir de l'historique des équipes, entraînement d'un modèle de classification et évaluation face à une baseline.",
    link: "https://github.com/Bankati/cahier-vacances-02-ml-coupe-du-monde",
  },
  {
    image: "/images/project-ds-03-clustering-tdf.png",
    domain: "datascience",
    category: "Clustering & algorithmes",
    title: "Clustering & TSP — Tour de France 2027",
    context:
      "Module 3 du Cahier de vacances Machine Learnia 2026. Découpage de 120 villages français en 21 étapes géographiquement cohérentes (apprentissage non supervisé), puis optimisation de l'ordre de passage de chaque étape (problème du voyageur de commerce).",
    language: "Python",
    tech: ["Scikit-learn", "Pandas", "Matplotlib"],
    result:
      "Comparaison K-Means / CAH justifiée par le score de silhouette et une contrainte métier, puis heuristique gloutonne + 2-opt : tracé optimisé à ~4 000 km (contre ~46 800 km non optimisé), un ordre de grandeur cohérent avec un vrai Tour de France.",
    link: "https://github.com/Bankati/cahier-vacances-03-clustering-tour-de-france",
  },
  {
    image: "/images/project-ds-04-rag-hotel.png",
    domain: "datascience",
    category: "RAG & LLM",
    title: "RAG — Assistant virtuel pour un hôtel",
    context:
      "Module 4 du Cahier de vacances Machine Learnia 2026. Assistant conversationnel répondant aux questions des clients d'un hôtel (horaires, services, politique d'annulation…) en s'appuyant exclusivement sur les documents internes de l'établissement, via une architecture RAG (Retrieval-Augmented Generation).",
    language: "Python",
    tech: ["Hugging Face", "Sentence-Transformers", "ChromaDB", "pypdf"],
    result:
      "Extraction PDF, découpage en chunks et embeddings, indexation et recherche vectorielle avec ChromaDB, puis génération de réponse augmentée par le contexte récupéré.",
    link: "https://github.com/Bankati/cahier-vacances-04-rag-hotel",
  },
  {
    image: "/images/project-ds-05-vision-poissons.png",
    domain: "datascience",
    category: "Deep Learning & Vision",
    title: "Deep Learning — Détection de poissons d'aquarium",
    context:
      "Module 5 du Cahier de vacances Machine Learnia 2026. Fine-tuning d'un détecteur d'objets pré-entraîné (Faster R-CNN) pour localiser et identifier 13 espèces de poissons d'aquarium sur une photo, à partir du dataset Kaggle fish-dataset (~8 200 photos annotées).",
    language: "Python",
    tech: ["PyTorch", "Torchvision", "Torchmetrics", "Pandas"],
    result:
      "Dataset/DataLoader personnalisés à partir d'annotations YOLO, transfer learning (backbone gelé, nouvelle tête de classification pour 13 classes), boucle d'entraînement manuelle et inférence sur des photos inédites.",
    link: "https://github.com/Bankati/cahier-vacances-05-vision-poissons",
  },
  {
    image: "/images/project-ds-06-series-temporelles.png",
    domain: "datascience",
    category: "Séries temporelles · en cours",
    title: "Séries temporelles — Prévoir des ventes de glaces",
    context:
      "Module 6 du Cahier de vacances Machine Learnia 2026, en cours de finalisation. Prévision des ventes journalières d'un marchand de glaces à partir de quatre étés d'historique, avec des modèles de la famille ARMA (AutoRegressive Moving Average).",
    language: "Python",
    tech: ["Statsmodels", "Pandas", "NumPy", "Matplotlib"],
    result:
      "Découpage chronologique train/test, diagnostic par autocorrélation (ACF/PACF), modèles MA(q) puis ARMA(p,q) comparés par AIC — travail toujours en cours sur ce module.",
    link: "https://github.com/Bankati/cahier-vacances-06-series-temporelles-glaces",
  },
  {
    image: "/images/project-ds-07-clustering-rfm.png",
    domain: "datascience",
    category: "Clustering & segmentation",
    title: "Segmentation client par analyse RFM",
    context:
      "Dans beaucoup d'entreprises, la base clients est traitée de façon uniforme, sans distinction de comportement d'achat : un client fidèle reçoit le même message qu'un client inactif depuis 8 mois. Ce projet segmente automatiquement 1 000 clients (5 000 transactions) selon leurs habitudes d'achat avec la méthode RFM (Recency, Frequency, Monetary), pour permettre aux équipes marketing de personnaliser leurs stratégies par segment.",
    language: "Python",
    tech: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    result:
      "Pipeline complet : calcul des métriques RFM, scoring par quintile, choix du nombre de clusters par méthode du coude + score de silhouette, clustering K-Means normalisé, et définition de personas métier (Champions, Clients Fidèles…) avec recommandations marketing associées.",
    link: "https://github.com/Bankati/clustering-client-rfm-kmeans",
  },
  {
    image: "/images/project-ds-08-clustering-api.png",
    domain: "datascience",
    category: "Clustering & API",
    title: "Customer Segmentation — Clustering API",
    context:
      "Industrialisation d'une segmentation client par K-Means : passage d'une exploration notebook à une API FastAPI conteneurisée avec Docker. L'API reçoit la fiche brute d'un client et retourne le cluster prédit ainsi que son persona, en appliquant le même pipeline de prétraitement (feature engineering) qu'à l'entraînement, sans risque de décalage entre les deux.",
    language: "Python",
    hosting: "Conteneurisé avec Docker",
    tech: ["FastAPI", "Scikit-learn", "Pandas", "Joblib", "Docker", "Uvicorn"],
    result:
      "API avec endpoints /health et /predict, documentation interactive générée automatiquement (Swagger), modèle et préprocesseur sérialisés (joblib) et rechargés par l'API — architecture prête pour un déploiement en production.",
    link: "https://github.com/Bankati/customer-segmentation-clustering-api",
  },
  {
    image: "/images/project-ds-09-fraud-detection.png",
    domain: "datascience",
    category: "Machine Learning",
    title: "Détection de fraude — PaySim",
    context:
      "Pipeline Machine Learning de bout en bout pour détecter les transactions frauduleuses dans un système de paiement mobile (dataset PaySim, inspiré de transactions M-Pesa) : 6,36 millions de transactions, avec seulement 0,13 % de fraudes. Le système de règles existant du dataset ne détectait que 16 fraudes sur 8 213 réelles (moins de 0,2 %).",
    language: "Python",
    tech: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit", "Joblib"],
    result:
      "Pipeline Scikit-Learn (normalisation + encodage + Régression Logistique à classes pondérées) atteignant 94 % de recall sur les fraudes, contre moins de 0,2 % pour le système existant — soit une amélioration d'environ 500x sur le taux de détection réel. Déployé en application Streamlit pour une prédiction en temps réel.",
    link: "https://github.com/Bankati/fraud-detection-paysim",
  },
  {
    image: "/images/project-warah.png",
    domain: "web",
    category: "SaaS B2B",
    title: "Warah — Gestion locative immobilière",
    context:
      "Développement d'une plateforme SaaS B2B pour un client, dédiée à la gestion locative immobilière au Togo : les propriétaires (y compris la diaspora) gèrent leurs biens, encaissent les loyers en mobile money et génèrent automatiquement leurs quittances. Architecture monorepo avec backend NestJS et frontend Next.js, intégration du paiement mobile money PayDunya, notifications push et emails transactionnels.",
    language: "TypeScript",
    database: "PostgreSQL (Supabase)",
    hosting: "Frontend sur Vercel, backend sur Railway (Docker)",
    tech: ["Next.js", "NestJS", "Prisma", "Supabase", "PayDunya (Mobile Money)", "Resend", "Sentry", "Docker"],
    result:
      "Plateforme en production : les propriétaires suivent leurs biens, leurs baux et leur historique de paiement, et encaissent les loyers via T-Money, Flooz et Mixx by Yas.",
    link: "https://github.com/Bankati/DINAWA",
    demo: "https://www.warahcontact.com",
  },
  {
    domain: "web",
    category: "Site vitrine & back-office",
    title: "École Tinka-Tout",
    context:
      "Développement du site vitrine d'une école primaire avec pré-inscription en ligne et espace d'administration. Le site présente l'établissement, les classes et la vie scolaire, permet aux parents de pré-inscrire leur enfant en quelques minutes, et donne à l'administration un tableau de bord pour suivre les inscriptions et les messages.",
    language: "TypeScript",
    database: "PostgreSQL",
    hosting: "Vercel",
    tech: ["Next.js", "Prisma", "Tailwind CSS", "Zod", "JWT (jose)"],
    result:
      "Site livré avec les pages publiques (accueil, présentation, classes, actualités, galerie, contact) et un back-office complet : inscriptions avec suivi de statut, messages, paramètres.",
    link: "https://github.com/Bankati/tinkattout",
  },
  {
    domain: "web",
    category: "Site vitrine & back-office",
    title: "Lomé Turques Briques",
    context:
      "Développement du site vitrine d'un fabricant de matériaux de construction (briques pleines, briques creuses, pavés, hourdis) basé à Lomé : catalogue produits, présentation de l'entreprise, prise de contact, et espace d'administration pour gérer les avis clients et les messages.",
    language: "TypeScript",
    database: "PostgreSQL (Supabase)",
    hosting: "Vercel",
    tech: ["Next.js", "Prisma", "Tailwind CSS", "Jest"],
    result:
      "Site livré avec catalogue produits par catégorie, back-office de gestion des témoignages et des messages de contact, et suite de tests automatisés (Jest).",
    link: "https://github.com/Bankati/lome_turques_briques",
  },
  {
    image: "/images/project-coronavirus.png",
    domain: "bi",
    category: "Analyse épidémiologique",
    title: "Évolution du paludisme au Togo (2007-2017)",
    context:
      "Mémoire de fin de cycle pour la Licence Professionnelle en Système d'Information à Lomé Business School, réalisé en équipe avec Sibi Ibrahim Khalil et Adom Joslin. À partir d'un jeu de données couvrant l'Afrique de l'Ouest, nous avons nettoyé et structuré les données avec Pandas (suppression des colonnes inutiles, filtrage sur le Togo et les 16 pays de la région), puis analysé l'incidence du paludisme pour 1 000 personnes à risque, les disparités entre zones rurales et urbaines, l'impact de l'accès à l'eau potable et les variations saisonnières.",
    tech: ["Python", "Pandas", "Power BI", "Matplotlib", "Analyse de données", "Épidémiologie"],
    result:
      "Prévalence nettement plus élevée en milieu rural, corrélation forte entre l'accès à l'eau potable et la baisse des cas, et recrudescence marquée pendant la saison des pluies. Le Togo passe d'environ 260 000 cas déclarés en 2007 à plus de 1,5 million en 2017, tout en restant sous la moyenne ouest-africaine. Tableaux de bord Power BI interactifs (cartes, tendances annuelles) pour orienter les politiques de santé publique.",
    link: "/docs/etude-paludisme-togo.pdf",
  },
  {
    image: "/images/project-geo-dashboard.png",
    domain: "bi",
    category: "Visualisation de données",
    title: "Tableau de bord géographique et socio-économique du monde",
    context:
      "Dans ce projet j'ai utilisé des API pour récupérer des données géographiques et météorologiques de tous les pays du monde. Au survol des pays, une info-bulle apparaît montrant des informations comme la superficie, la population, la langue et autres, ainsi que le drapeau du pays en question avec des icônes qui illustrent le climat.",
    tech: ["APIs géographiques et météorologiques", "Visualisation interactive", "Analyse géospatiale"],
    result:
      "Création d'un tableau de bord interactif permettant d'explorer les données géographiques et socio-économiques de tous les pays du monde avec des informations détaillées au survol.",
    link: "https://github.com/Bankati/TABLEAU-DE-BORD-GEOGRAPHIQUE-ET-SOCIO-ECONOMIQUE-DU-MONDE.git",
  },
  {
    image: "/images/project-adidas.png",
    domain: "bi",
    category: "Business Intelligence",
    title: "Analyse des ventes ADIDAS",
    context:
      "Ce projet m'a demandé de partir chercher des données sur les ventes de la grande marque internationale ADIDAS. Les données obtenues grâce au site Kaggle ont été analysées pour voir l'impact de la COVID-19 sur le business de l'entreprise. Le chiffre d'affaires a chuté mais après la levée des restrictions dans certaines régions, il a commencé à augmenter.",
    tech: ["Power BI", "Excel", "Kaggle (source de données)", "Analyse de données"],
    result:
      "Grâce au site web de l'entreprise, les ventes ont pu être réalisées malgré le COVID-19, preuve de l'importance de la vente en ligne. Analyse complète de l'impact de la pandémie sur les performances commerciales.",
    link: "https://github.com/Bankati/ANALYSE-DE-VENTES-ADIDAS.git",
  },
  {
    image: "/images/project-hr-dashboard.png",
    domain: "bi",
    category: "Analyse RH",
    title: "Tableau de bord RH américain",
    context:
      "J'ai fait un tableau de bord qui montre des données RH qui répondent à des questions demandées par mon supérieur. Ces questions sont dans un fichier SQL et à travers ces données j'essaie de répondre à ces questions. Ces questions sont les plus souvent posées par les chargés RH.",
    tech: ["MySQL", "Power BI", "SQL", "Analyse RH"],
    result:
      "Par exemple, la répartition des employés dans l'entreprise par genre afin de promouvoir certains postes à des hommes ou femmes pour équilibrer le nombre. Dashboard complet avec métriques RH et indicateurs de diversité.",
    link: "https://github.com/Bankati/TABLEAU-DASHBOARD-AMERICAIN.git",
  },
  {
    image: "/images/project-coronavirus.png",
    domain: "bi",
    category: "Analyse épidémiologique",
    title: "Étude Coronavirus avec Tableau",
    context:
      "Analyse approfondie de l'évolution de la pandémie COVID-19 à travers le monde. Ce projet utilise Tableau pour créer des visualisations interactives permettant de suivre la propagation du virus, les taux de mortalité et les mesures de prévention par pays.",
    tech: ["Tableau", "Visualisation de données", "Analyse épidémiologique", "Données publiques COVID-19"],
    result:
      "Création d'un tableau de bord interactif montrant l'évolution de la pandémie en temps réel, avec des cartes géographiques, des graphiques temporels et des analyses comparatives entre les différents pays et régions.",
    link: "https://github.com/Bankati/CORONAVIRUS-ETUDE-AVEC-TABLEAU.git",
  },
];

/* ------------------------------------------------------------------ */
/* Parcours, expériences                                                */
/* ------------------------------------------------------------------ */

export const academics = [
  {
    image: "/images/cck.jpeg",
    title: "Collège Chaminade de Kara",
    text: "J'ai fait mon collège et mon lycée dans cet établissement et j'ai adoré cette période de ma vie.",
  },
  {
    image: "/images/lbs.jpeg",
    title: "Lomé Business School",
    text: "J'ai passé 3 ans dans cette université en système d'information, une formation qui m'a permis de développer mes compétences en analyse de données.",
  },
];

export type Experience = {
  image: string;
  title: string;
  subtitle: string;
  /** ex. "Juin 2025 — Août 2025" : à renseigner quand les dates sont confirmées */
  period?: string;
  items: string[];
  stack?: string[];
};

export const professional: Experience[] = [
  {
    image: "/images/lg.jpeg",
    title: "LOGEX",
    subtitle: "Développement web & Analyse stratégique",
    items: [
      "Développement web",
      "Application de compétences analytiques dans la conception de solutions web simples",
      "Analyse stratégique des réseaux sociaux de l'école avec recommandations concrètes",
      "Réalisation d'affiches promotionnelles et de bannières avec des outils de design accessibles",
    ],
  },
  {
    image: "/images/lbs.jpeg",
    title: "Lomé Business School",
    subtitle: "Gestion de données & Téléconseil",
    items: [
      "Gestion de bases de données sur Excel (suivi et mise à jour des données)",
      "Nettoyage et structuration des données via Power Query et formules Excel avancées",
      "Création de rapports de suivi des performances",
      "Téléconseiller",
    ],
  },
  {
    image: "/images/yas-togo.png",
    title: "Yas Togo",
    subtitle: "Développeur Back-End — Stage",
    period: "Septembre 2025 — Novembre 2025 (3 mois) · Lomé",
    items: [
      "Développement et déploiement d'applications backend avec Node.js et TypeScript",
      "Gestion du cycle de vie complet d'un projet, du développement au déploiement",
      "Tests et validation des API avec Postman",
      "Mise en œuvre de bonnes pratiques de qualité de code via des outils d'analyse statique (SonarQube)",
      "Collaboration en équipe pour concevoir, développer, tester et déployer des solutions technologiques opérationnelles",
    ],
    stack: ["Node.js", "TypeScript", "Postman", "SonarQube"],
  },
  {
    image: "/images/facam-stairway.png",
    title: "FACAM Stairway",
    subtitle: "Data Scientist & Software Engineer",
    period: "Décembre 2025 — Aujourd'hui · Lomé, Baguida (hybride)",
    items: [
      "Conception et déploiement d'une politique de gouvernance des données : conventions de nommage, nomenclature des matières premières et guide des bonnes pratiques, pour rendre fiables les données partagées entre équipes",
      "Collecte de données terrain et recueil des besoins auprès des équipes opérationnelles",
      "Analyse quotidienne des données sous Excel pour produire des indicateurs de suivi et appuyer les décisions",
      "Utilisation de techniques de data science et de business intelligence pour orienter les choix stratégiques",
      "Conception et développement d'applications web full-stack de bout en bout, backend et API compris",
      "Déploiement et gestion d'infrastructure cloud sur AWS, avec une attention à la fiabilité, à la sécurité et à la montée en charge",
      "Participation à tout le cycle de vie des projets, de la conception de l'architecture à la mise en production",
    ],
    stack: ["Next.js", "NestJS", "Docker", "GitHub", "CI/CD", "AWS (S3)", "Supabase", "Postman"],
  },
];

/* ------------------------------------------------------------------ */
/* Compétences                                                          */
/* ------------------------------------------------------------------ */

export const skills = [
  {
    icon: "chart",
    title: "Analyse de données",
    desc: "Exploration, nettoyage et visualisation de données pour en tirer des insights actionnables.",
    tags: ["SQL", "Power BI", "Excel", "Python", "Tableau"],
  },
  {
    icon: "database",
    title: "Bases de données",
    desc: "Conception, requêtage et administration de bases de données relationnelles et NoSQL.",
    tags: ["SQL Server", "PostgreSQL", "Oracle", "Azure", "MySQL", "MongoDB"],
  },
  {
    icon: "brain",
    title: "Intelligence Artificielle",
    desc: "Manipulation de données et modélisation prédictive avec l'écosystème Python data science.",
    tags: ["Pandas", "NumPy", "Seaborn", "Matplotlib", "Scikit-learn"],
  },
  {
    icon: "code",
    title: "Développement Web / Backend",
    desc: "Conception d'applications et d'API avec l'écosystème JavaScript/TypeScript.",
    tags: ["Node.js", "Next.js", "NestJS"],
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    desc: "Conteneurisation, intégration continue et déploiement cloud, avec un suivi du produit en production.",
    tags: ["Git", "AWS", "Docker", "CI/CD", "PostHog", "Snowflake", "Power Query"],
  },
];

/* ------------------------------------------------------------------ */
/* Certifications                                                       */
/* ------------------------------------------------------------------ */

export type Certification = {
  /** Capture d'écran du certificat. Si absente, une vignette de repli est affichée. */
  image?: string;
  title: string;
  /** Intitulé exact de la formation, tel qu'il figure sur le certificat */
  course?: string;
  text: string;
  file: string;
  issuer?: string;
  instructors?: string;
  /** ex. "25 juillet 2025" */
  date?: string;
  /** ex. "48,5 h" */
  duration?: string;
  /** Lien de vérification en ligne */
  verifyUrl?: string;
  /** Technologies couvertes par la formation */
  topics?: string[];
};

export const certifications: Certification[] = [
  {
    image: "/images/cert-powerbi.jpeg",
    title: "Power BI",
    course: "Devenir un expert de Power BI - La formation complète 2025",
    text: "Visualisation de données et création de tableaux de bord interactifs",
    file: "/docs/powerbi-certificate.pdf",
    issuer: "Udemy",
    instructors: "Sébastien Daviot",
    date: "25 juillet 2025",
    duration: "48,5 h",
    verifyUrl: "https://ude.my/UC-a770a754-1b03-442b-98da-d93f565e3399",
  },
  {
    image: "/images/cert-sql.jpg",
    title: "SQL",
    course: "SQL pour la Data (Analyst, Scientist, Engineer) 2024",
    text: "Requêtes SQL et gestion de bases de données pour l'analyse de données",
    file: "/docs/sql-certificate.pdf",
    issuer: "Udemy",
    instructors: "Christophe Hoarau, Adam Alloul",
    date: "26 août 2024",
    duration: "5,5 h",
    verifyUrl: "https://ude.my/UC-9988d221-febc-4b11-9b79-fcf7246d29f0",
  },
  {
    image: "/images/cert-excel.jpg",
    title: "Excel",
    course: "Maîtrisez Excel de A à Z : le cours ULTIME (VBA inclus)",
    text: "Analyse de données et création de rapports avec Excel, VBA inclus",
    file: "/docs/excel-certificate.pdf",
    issuer: "Udemy",
    instructors: "Sébastien Daviot",
    date: "12 août 2024",
    duration: "18,5 h",
    verifyUrl: "https://ude.my/UC-db922a04-26e1-407f-a886-e7adaf792da8",
  },
  {
    // Photo : salle serveurs de BalticServers.com (CC BY-SA 3.0, via Wikimedia Commons)
    // https://commons.wikimedia.org/wiki/File:BalticServers_data_center.jpg
    image: "/images/cert-database.jpg",
    title: "Bases de données",
    course: "Le Pack ULTIME sur les bases de données (22 cours en 1) 47h",
    text: "Panorama complet des SGBD relationnels et NoSQL : conception, requêtage et administration.",
    file: "/docs/database-certificate.pdf",
    issuer: "Udemy",
    instructors: "ELOA Formation",
    date: "17 juin 2025",
    duration: "47 h",
    verifyUrl: "https://ude.my/UC-101b59bb-076e-4a1f-87f5-c634906a46f7",
    topics: ["SQL Server", "PostgreSQL", "Oracle", "Azure", "MongoDB", "Python"],
  },
];

/* ------------------------------------------------------------------ */
/* Compétitions                                                         */
/* Pour ajouter des photos : les déposer dans public/images/competitions */
/* puis les lister dans `photos` ({ src, caption }).                    */
/* ------------------------------------------------------------------ */

export type Competition = {
  /** Classement obtenu (1 = 1ère place) */
  rank: number;
  title: string;
  result: string;
  year?: string;
  /** Rôle joué dans l'équipe */
  role?: string;
  photos?: { src: string; caption: string }[];
};

export const competitions: Competition[] = [
  { rank: 1, year: "2025-2026", title: "TOGO IT DAYS", result: "1ère place" },
  { rank: 2, title: "Hackathon du Cap-Vert", result: "2ème place", role: "Chef de projet" },
  { rank: 2, year: "2022-2023", title: "MIDJO-EXPRESS", result: "Projet SEIC - 2ème place" },
  { rank: 2, year: "2025-2026", title: "DATA 4 EARLY Hackathon", result: "2ème place" },
  { rank: 6, year: "2023-2024", title: "ECCO", result: "Projet SEIC - 6ème place" },
];

export const navLinks = [
  { href: "#about", label: "Parcours" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Technologies" },
  { href: "#experience", label: "Expériences" },
  { href: "#competitions", label: "Compétitions" },
  { href: "#certifications", label: "Certifications" },
];
