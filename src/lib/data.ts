export const profile = {
  role: "Data Analyst | Data Scientiste",
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
  { value: 10, suffix: "+", label: "Projets data réalisés" },
  { value: 5, suffix: "+", label: "Tableaux de bord mis à jour" },
  { value: 5, suffix: "", label: "SGBD maîtrisés" },
  { value: 3, suffix: "", label: "Certifications obtenues" },
];

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

export const professional = [
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
];

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
    desc: "Conception, requêtage et administration de bases de données relationnelles et cloud.",
    tags: ["SQL Server", "PostgreSQL", "Oracle", "Azure", "MySQL"],
  },
  {
    icon: "brain",
    title: "Intelligence Artificielle",
    desc: "Manipulation de données et modélisation prédictive avec l'écosystème Python data science.",
    tags: ["Pandas", "NumPy", "Seaborn", "Matplotlib", "Scikit-learn"],
  },
  {
    icon: "cloud",
    title: "Cloud & Outils",
    desc: "Versioning, entrepôts de données cloud et automatisation de la préparation des données.",
    tags: ["Git", "Snowflake", "Azure", "Power Query"],
  },
];

export const certifications = [
  {
    image: "/images/cert-powerbi.jpeg",
    title: "Power BI",
    text: "Certification en visualisation de données et création de tableaux de bord interactifs",
    file: "/docs/powerbi-certificate.pdf",
  },
  {
    image: "/images/cert-sql.jpg",
    title: "SQL",
    text: "Certification Udemy en requêtes SQL et gestion de bases de données",
    file: "/docs/sql-certificate.pdf",
  },
  {
    image: "/images/cert-excel.jpg",
    title: "Excel",
    text: "Certification en analyse de données et création de rapports avec Excel",
    file: "/docs/excel-certificate.pdf",
  },
];

export const competitions = [
  { year: "2022-2023", title: "MIDJO-EXPRESS", result: "Projet SEIC - 2ème place" },
  { year: "2023-2024", title: "ECCO", result: "Projet SEIC - 6ème place" },
  { year: "2025-2026", title: "DATA 4 EARLY Hackathon", result: "2ème place" },
  { year: "2025-2026", title: "TOGO IT DAYS", result: "1ère place" },
];

export const projects = [
  {
    image: "/images/project-geo-dashboard.png",
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

export const navLinks = [
  { href: "#home", label: "Accueil" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Portfolio" },
  { href: "#resume", label: "CV" },
  { href: "#contact", label: "Contact" },
];
