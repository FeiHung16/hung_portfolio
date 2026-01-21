import ridingCities from "./../assets/img/Riding_cities.webp";
import booki from "./../assets/img/booki.webp";
import ohMyFood from "./../assets/img/ohMyFood.webp";
import printIt from "./../assets/img/print_it.webp";
import kasa from "./../assets/img/kasa.webp";
import events724 from "./../assets/img/724events.webp";
import nina from "./../assets/img/nina.webp";
import argentBank from "./../assets/img/ArgentBank.webp";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  cover: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Riding Cities",
    description:
      "Ce projet a pour but de me familiariser avec les bases du HTML à travers la mise à jour d’une page web existante. Il consiste à intégrer une nouvelle section, un titre et des boutons en respectant des maquettes fournies. Ce travail me permet de comprendre la structuration d’une page HTML, l’utilisation d’un CSS existant et la prise en main d’outils essentiels comme Figma, Visual Studio Code et Copilot.",
    technologies: ["HTML", "CSS", "Figma", "Visual Studio Code", "Copilot"],
    cover: ridingCities
  },
  {
    id: 2,
    title: "Booki",
    description:
      "Ce projet m’a permis de travailler sur l’intégration d’une page d’accueil responsive pour une agence de voyage en HTML et CSS. J’ai appris à respecter des maquettes Figma (mobile, tablette et desktop), à structurer le contenu en HTML et à le styliser avec CSS. Ce travail m’a aidé à mieux comprendre le design responsive et les bases du développement front-end.",
    technologies: ["HTML", "CSS", "Figma"],
    cover: booki
  },
  {
    id: 3,
    title: "Oh My Food",
    description:
      "Ce projet m’a permis de travailler sur l’amélioration de l’interface mobile d’un site en adoptant une approche mobile-first. J’ai intégré une maquette à partir de Figma, utilisé Sass pour organiser et optimiser le CSS, et mis en place des animations CSS afin d’améliorer l’expérience utilisateur. J’ai également appris à versionner mon projet avec Git et GitHub, des outils essentiels en développement front-end.",
    technologies: ["HTML", "SCSS", "Figma"],
    cover: ohMyFood
  },
  {
    id: 4,
    title: "Print It",
    description:
      "Ce projet m’a permis de faire mes premiers pas en JavaScript en rendant un site web statique plus dynamique. J’ai travaillé sur les fondamentaux du langage et ajouté un carrousel interactif à un site existant. J’ai appris à faire interagir JavaScript avec le HTML et le CSS afin de créer des fonctionnalités interactives, tout en utilisant Visual Studio Code et GitHub pour gérer et versionner mon code.",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    cover: printIt
  },
  {
    id: 5,
    title: "Kasa",
    description:
      "Ce projet m’a permis de créer une page web dynamique en JavaScript pour le site d’une architecte d’intérieur. J’ai travaillé sur la manipulation du DOM, la gestion des événements utilisateurs et la création de fonctionnalités interactives comme une page de connexion administrateur et une modale d’upload de médias. J’ai également appris à communiquer avec une API, une compétence essentielle pour les applications web modernes, tout en utilisant Figma, Visual Studio Code et GitHub.",
    technologies: ["HTML", "CSS", "React", "React-Router", "TypeScript"],
    cover: kasa
  },
  {
    id: 6,
    title: "Nina Carducci Portfolio",
    description:
      "Ce projet m’a permis de travailler sur l’optimisation du référencement, des performances et de l’accessibilité d’un site de photographe. J’ai analysé les problèmes de chargement et de SEO à l’aide d’outils comme Lighthouse et Wave, puis proposé et appliqué des améliorations directement dans le code. J’ai également réalisé un rapport avant/après pour mesurer l’impact des optimisations sur la performance, l’accessibilité et le référencement du site.",
    technologies: ["HTML", "CSS", "JavaScript", "Lighthouse", "Wave"],
    cover: nina
  },
  {
    id: 7,
    title: "724events",
    description:
      "Ce projet m’a permis de débugger et finaliser un site one-page pour une agence d’événementiel. J’ai analysé le code existant à l’aide des Chrome DevTools et des React Developer Tools afin d’identifier et corriger les bugs. J’ai également rédigé un cahier de recette comprenant des tests unitaires et fonctionnels pour garantir le bon fonctionnement du site. Ce projet m’a permis de renforcer mes compétences en débogage, en JavaScript, ainsi qu’en utilisation d’outils comme Node.js, Yarn et GitHub.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React Developer Tools",
      "npm",
      "Node.js"
    ],
    cover: events724
  },
  {
    id: 8,
    title: "Argent Bank",
    description:
      "Ce projet m’a permis de développer une application web sécurisée pour une banque en ligne en utilisant React et Redux. J’ai implémenté des fonctionnalités d’authentification, de gestion de profil utilisateur et de consultation de comptes bancaires en communiquant avec une API REST. J’ai également veillé à la sécurité des données et à la gestion des erreurs pour offrir une expérience utilisateur fiable. Ce projet m’a aidé à approfondir mes compétences en React, Redux, TypeScript et en développement d’applications web sécurisées.",
    technologies: ["React", "Redux", "TypeScript", "API REST", "JWT"],
    cover: argentBank
  }
];