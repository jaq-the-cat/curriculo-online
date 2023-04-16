import type { Locale } from "./i18n";

type Translation = {[key: string]: string};

export default {
  en: {
    // Nav
    "nav.aboutme": "About Me",
    "nav.projects": "Projects",

    // About
    "about.summary.title": "Who I Am",
    "about.summary": "My name is Bernardo Melo Roth de Oliveira, born March 8th 2005 ({{age}} years old). I've been studying programming since I was 13 years old, first by watching video courses on Udemy and YouTube and eventually reading books such as The C Programming Language and The Rust Programming Language aswell as Automate the Boring Stuff with Python, Java for Dummies and C: A Software Engineering Approach.",

    "about.education.title": "Education",
    "about.education": "I finished High School with an average score of 85/100 in November 2022, also taking the National High School Exam (ENEM) and scoring very above-average. I also took the entrance exams for PUCRS and Unisinos, passing both and entering Computer Science at Unisinos in January 2023.",

    "about.autism.title": "Autism",
    "about.autism": "It's important to note I have ASD (Autism Spectrum Disorder), with difficulties in socialization and identification of feelings and emotions, but with an advantage in STEM subjects and following instructions and directions. I possess hyperfocuses, as do many other autistic people, which are great interests in some activity or subject that can vary in intensity over time, with the most relevant being my hyperfocus in programming since I was 14 years old.",

    // Projects
    "projects.ezcats": "Cat Provider",
    "projects.ezspend": "Control travel spending in multiple currencies",
    "projects.simple-auth": "JWT-Inspired authentication algorithm made from the ground-up in express.js",
    "projects.ezmd": "CLI Music Downloader",
    "projects.gtk-anim": "(Abandoned) Pivot-like animation software",
    "projects.sharekitten": "JS-less file sharing website",
    "projects.file-crypto-gtk": "Easily and securely encrypt/decrypt files on Linux",
    "projects.eztags": "Library to manage ID3 tags in pure Dart",
    "projects.eznotes": "Tree-based note taking app",
  },
  pt: {
    // Nav
    "nav.aboutme": "Sobre Mim",
    "nav.projects": "Projetos",

    // About
    "about.summary.title": "Resumo",
    "about.summary": "Me chamo Bernardo Melo Roth de Oliveira, nascido em 8 de Março de 2005 ({{age}} anos). Aprendo programação desde os 13 anos, iniciando em cursos online pela plataforma Udemy e YouTube e eventualmente lendo livros como The C Programming Language e The Rust Programming Language e também Automate the Boring Stuff with Python, Java for Dummies e C: A Software Engineering Approach.",

    "about.education.title": "Educação",
    "about.education": "Completei o Ensino Médio com média 8,5 em Novembro de 2022, realizando a prova do ENEM com média final de 784.4 em Matemática e suas Tecnologias e 800 em Redação. Também realizei os vestibulares da PUCRS e Unisinos, passando em ambos e me matriculando na Unisinos em Janeiro de 2023 em Ciências da Computação.",

    "about.autism.title": "Autismo",
    "about.autism": "É importante notar que tenho TEA (Transtorno do Espectro Autista), com dificuldades em socialização e na identificação de emoções e sentimentos, porém com facilidade em exatas e no seguir de instruções e direções. Possuo hiperfocos, como todo autista, que são descritos como o grande interesse em alguma atividade ou assunto que pode flutuar em intensidade ao longo do tempo, com o mais relevante sendo o meu hiperfoco na programação que tenho desde os 14 anos de idade.",


    // Projects
    "projects.ezcats": "Provedor de Gatos",
    "projects.ezspend": "Controle gastos de viagens em diferentes moedas",
    "projects.simple-auth": "Algoritmo de autenticação inspirado em JWT feito do zero em express.js",
    "projects.ezmd": "Downloader de música na linha de comando",
    "projects.gtk-anim": "(Abandonado) Software de animação similar à Pivot",
    "projects.sharekitten": "Website de compartilhamento de arquivos sem JavaScript",
    "projects.file-crypto-gtk": "Criptografia de arquivos fácil e segura",
    "projects.eztags": "Biblioteca para escrever tags ID3 em Dart puro",
    "projects.eznotes": "App de notas baseado em Trees",
  },
} as {[locale in Locale]: Translation}
