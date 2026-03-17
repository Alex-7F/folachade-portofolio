export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "area",
    title: "AREA - Automation Platform",
    description: "Plateforme d'automatisation de tâches type IFTTT/Zapier avec client mobile React Native.",
    longDescription: "Plateforme complète d'automatisation permettant de créer des workflows entre différents services. Développement intégral du client Mobile avec React Native, implémentation des flux OAuth2 pour Google et GitHub, et intégration d'API tierces pour la synchronisation des triggers (Actions/Réactions).",
    technologies: ["React Native", "Django", "OAuth2", "Docker", "PostgreSQL", "REST API"],
    category: "Fullstack Web & Mobile",
    github: "https://github.com/Alex-7F/AREA_PROJECT",
    demo: "https://area-ber-bra-mes-ale-evr.vercel.app/",
    featured: true,
  },
  {
    id: "my-torch",
    title: "My_Torch - Neural Network from Scratch",
    description: "Bibliothèque de Deep Learning conçue from scratch sans PyTorch/TensorFlow.",
    longDescription: "Création d'un moteur de réseau de neurones complet gérant la rétropropagation, entraînement d'un modèle pour l'analyse d'états d'un échiquier (Chessboard Analyzer), et optimisation des hyperparamètres pour éviter l'overfitting. Projet démontrant une maîtrise approfondie des mathématiques du Deep Learning.",
    technologies: ["Python", "Mathematics", "Supervised Learning", "Neural Networks", "Backpropagation"],
    category: "AI & Algorithms",
    github: "https://github.com/Alex-7F/Neuronal-network",
    featured: true,
  },
  {
    id: "chisel-burp",
    title: "Chisel & Burp - Pentesting Challenges",
    description: "Challenges Boot2Root et audits de sécurité applicative (Top 10 OWASP).",
    longDescription: "Exploitation de failles critiques du Top 10 OWASP (Injections SQL, XSS, SSRF, SSTI). Mise en place de pivots réseau complexes via SSH Tunneling et Reverse Port Forwarding. Escalade de privilèges (PrivEsc) sur des environnements Linux compromis avec rédaction de rapports de remédiation détaillés.",
    technologies: ["TryHackMe", "Burp Suite", "SQLmap", "SSH Tunneling", "OWASP", "Linux"],
    category: "Cybersecurity",
    github: "https://github.com/Alex-7F/Challenge-Chiesel-Cybersecurity",
    featured: true,
  },
  {
    id: "whanos",
    title: "Whanos - DevOps & CI/CD",
    description: "Infrastructure de déploiement automatique type 'Snap' avec orchestration Kubernetes.",
    longDescription: "Plateforme CI/CD capable d'auto-détecter les technologies des projets. Orchestration de clusters Kubernetes pour le déploiement dynamique d'images conteneurisées. Automatisation de la configuration via Jenkins Configuration as Code (JCasC) avec support multi-langages.",
    technologies: ["Jenkins", "Kubernetes", "Docker", "Ansible", "Groovy", "JCasC"],
    category: "DevOps & Cloud",
    github: "https://github.com/Alex-7F/whanos_project",
    featured: true,
  },
  {
    id: "arcade",
    title: "Arcade - Gaming Platform",
    description: "Plateforme de jeux rétro utilisant le chargement dynamique de bibliothèques.",
    longDescription: "Développement de jeux (Snake et Nibbler) en utilisant plusieurs interfaces graphiques. Implémentation de wrappers pour ncurses et SFML chargés au runtime via dlopen/dlsym. Architecture modulaire permettant l'ajout de jeux sans recompiler le noyau avec système de plugins dynamiques.",
    technologies: ["C++", "ncurses", "SFML", "Dynamic Libraries", "dlopen", "Design Patterns"],
    category: "System & C++",
    github: "https://github.com/Alex-7F/arcade_game",
    featured: false,
  },
  {
    id: "r-type",
    title: "R-Type - Multiplayer Game Engine",
    description: "Moteur de jeu Shoot'em up multijoueur en réseau avec architecture ECS.",
    longDescription: "Lead Gameplay Developer : Architecture ECS (Entity Component System) pour la gestion des entités. Développement d'un protocole binaire customisé sur UDP pour la synchronisation temps-réel. Gestion du mouvement latéral et de la prédiction côté client (Client-Side Prediction) pour une expérience multijoueur fluide.",
    technologies: ["C++", "UDP/TCP Sockets", "ECS Architecture", "Network Programming", "Game Engine"],
    category: "System & Networking",
    github: "https://github.com/Alex-7F/RTYPE_ENGINE",
    featured: false,
  },
  {
    id: "my-pgp",
    title: "My_PGP - Cryptography CLI",
    description: "Outil de chiffrement hybride mimant les fonctionnalités de PGP.",
    longDescription: "Implémentation des algorithmes RSA (asymétrique) et AES/XOR (symétrique). Gestion précise de l'arithmétique sur grands nombres pour la génération de clés sécurisées avec la bibliothèque GMP. Conception d'une interface CLI pour le chiffrement/déchiffrement de flux de données avec support des opérations cryptographiques avancées.",
    technologies: ["C++", "GMP Library", "RSA", "AES", "Cryptography", "CLI"],
    category: "Cybersecurity",
    github: "https://github.com/Alex-7F/PGP-Cryptographie-",
    featured: false,
  },
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category: string) => projects.filter(p => p.category === category);
