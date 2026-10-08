import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export interface Skill {
  name: string;
  icon?: string;
}

export const DATA = {
  name: "Cherif Mohamed Abraham",
  pseudo: "Moimed",
  initials: "CMA",
  url: "https://moimed.dev",
  githubUsername: "MirinkaU1",
  location: "Abidjan, Côte d'Ivoire",
  locationLink: "https://www.google.com/maps/place/Adjame",
  description:
    "Développeur frontend & mobile spécialisé en React, Next.js et React Native. Je conçois des interfaces web, mobiles et desktop soignées et centrées sur l'expérience utilisateur.",
  summary:
    "Je suis développeur frontend et mobile, formé à l'[ENSIT](/#education) et à [GoMyCode](/#education). Aujourd'hui chez **DothanGroup**, je développe les interfaces web et mobile de **Kacy**, une plateforme d'assistants IA pour les commerces, ainsi que l'application desktop de **PharmaConnect**, un logiciel de caisse pour pharmacies. J'aime construire des interfaces responsives et agréables à utiliser, avec React, Next.js, React Native et Electron.",
  avatarUrl: "/img/avatar/me.jpg",
  skills: [
    { name: "React", icon: "/svg/reactjs-icon.svg" },
    { name: "Next.js", icon: "/svg/nextjs-icon.svg" },
    { name: "Typescript", icon: "/svg/typescriptlang-icon.svg" },
    { name: "TailwindCSS", icon: "/svg/tailwindcss-icon.svg" },
    { name: "React Native", icon: "/svg/reactjs-icon.svg" },
    { name: "Expo", icon: "/svg/expo-icon.svg" },
    { name: "Electron", icon: "/svg/electron-icon.svg" },
    { name: "Vue.js", icon: "/svg/vuejs-icon.svg" },
    { name: "Figma", icon: "/svg/figma-icon.svg" },
    { name: "Node.js", icon: "/svg/nodejs-icon.svg" },
    { name: "Express", icon: "/svg/expressjs-icon.svg" },
    { name: "Supabase", icon: "/svg/supabase-icon.svg" },
    { name: "MongoDB", icon: "/svg/mongodb-icon.svg" },
  ] as Skill[],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "cherifmohamedabraham@gmail.com",
    tel: "+2250505900008",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/moimed-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/moimed-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/moimed-twitter",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "DothanGroup",
      href: "",
      badges: [],
      title: "Développeur Frontend & Mobile",
      logoUrl: "/img/work/dothangroup.png",
      start: "Février 2026",
      end: "Présent",
      description:
        "**Kacy** — plateforme SaaS d'assistants IA pour commerces et restaurants\n- Développement du **dashboard web** et du **back-office d'administration** (React, TypeScript, Tailwind, shadcn/ui), en **mode clair et sombre**.\n- Développement de l'**application mobile iOS et Android** (Expo / React Native), publiée sur l'**App Store** et **Google Play**.\n- **Connexion aux API** et parcours de configuration des canaux **WhatsApp, Telegram, Instagram et Messenger**.\n- Participation au **backend Node.js**.\n\n**PharmaConnect** — logiciel de caisse et de gestion de pharmacie\n- Développement de l'**application desktop** (Electron, React, Redux).\n- **Mode hors ligne** avec **synchronisation** des ventes au retour de la connexion.\n- Intégration de l'**impression de tickets** et de l'**afficheur client**.",
    },
    {
      company: "MyHotellerie",
      href: "",
      badges: [],
      title: "Développeur Frontend",
      logoUrl: "/img/work/myhotellerie.png",
      start: "Avril 2025",
      end: "Novembre 2025",
      description:
        "- **Développement du frontend de trois plateformes d'administration** (back-office **Admin Hôtel** et **Super Admin**).\n- **Intégration des maquettes** en **responsive design**.\n- **Connexion aux API** de l'équipe client.",
    },
    {
      company: "ChezBlos",
      href: "",
      badges: [],
      title: "Développeur Full Stack",
      logoUrl: "/img/work/chezblos.png",
      start: "Mai 2025",
      end: "Septembre 2025",
      description:
        "- Développement des **interfaces frontend** des back-offices **Admin** et **Interne**.\n- **Participation à l'interfaçage back-end** du système global.\n- Intégration responsive et **gestion complète des connexions API**.",
    },
    {
      company: "Great",
      href: "https://greeet.netlify.app/",
      badges: [],
      location: "Remote",
      title: "Développeur Front-end",
      logoUrl: "/img/work/great.png",
      start: "Novembre 2024",
      end: "Présent",
      description:
        "Plateforme qui réunit **talents, mentors et entreprises** pour créer des opportunités de croissance professionnelle et d'innovation.\n- Contribution à la **refonte de l'interface utilisateur** avec **Vue.js** et **Vuetify**.\n- Amélioration de l'**expérience utilisateur** de la plateforme.",
    },
  ],
  education: [
    {
      school: "GoMyCode",
      href: "https://gomycode.com/ic/",
      degree: "Software Developer Certification",
      logoUrl: "/img/education/gomycode.jpg",
      start: "2024",
      end: "2024",
    },
    {
      school: "Ecole Nouvelle Supérieure d'Ingénieurs et de Technologie",
      href: "https://ensit.ci/",
      degree: "Cycle Ingénieur en Informatique",
      logoUrl: "/img/education/ensit.jpg",
      start: "2021",
      end: "2023",
    },
    {
      school: "Collège Adventiste Bouaké",
      href: "",
      degree: "Baccaleauréat D",
      logoUrl: "/img/education/adventiste.jpg",
      start: "2020",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Kacy — Plateforme web",
      href: "https://app.kacyai.co/fr/login",
      dates: "Juin 2026 - Présent",
      active: true,
      category: "website",
      description:
        "Landing page et dashboard de Kacy, une plateforme SaaS d'assistants IA pour les commerces et restaurants. Les établissements y configurent leur agent, suivent leurs conversations WhatsApp, Telegram, Instagram et Messenger, leurs commandes et réservations, avec mode clair et sombre.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      links: [
        {
          type: "Website",
          href: "https://app.kacyai.co/fr/login",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      images: [
        "/img/projects/kacy/web_01.jpg",
        "/img/projects/kacy/web_02.jpg",
        "/img/projects/kacy/web_03.jpg",
      ],
      darkImages: [
        "/img/projects/kacy/web_01_dark.jpg",
        "/img/projects/kacy/web_02_dark.jpg",
        "/img/projects/kacy/web_03_dark.jpg",
      ],
      video: "",
    },
    {
      title: "corner-shape Generator",
      href: "https://corner-shape-generator.vercel.app/",
      dates: "Dec 2025",
      active: true,
      category: "website",
      description:
        "Un petit projet perso conçu pour explorer et manipuler la nouvelle propriété CSS corner-shape. Cet outil interactif permet aux développeurs de visualiser et de générer en un clic le code nécessaire pour créer des coins biseautés (bevel) ou arrondis (round), offrant une alternative moderne et native aux clip-path complexes.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://corner-shape-generator.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MirinkaU1/corner-shape_generator.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      images: ["/img/projects/corner-shape.png"],
      video: "",
    },
    {
      title: "Stephane & Carole",
      href: "https://couple-sarr.wedlyup.com/",
      dates: "Mai 2025 - Juin 2025",
      active: true,
      category: "website",
      description:
        "Un site de mariage pour Stephane et Carole. Le site présente des informations sur les mariés, les détails de l'événement, et une galerie de photos. ",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://couple-sarr.wedlyup.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      images: [
        "/img/projects/weeding-site.jpeg",
        "/img/projects/weeding-site-2.png",
      ],
      video: "",
    },
    {
      title: "MyHotellerie",
      href: "",
      dates: "Avril 2025 - Novembre 2025",
      active: true,
      category: "website",
      description:
        "Solution de gestion de la relation client pour les hôtels : demandes de service, boutique, commandes, staff et chat. J'ai développé le frontend de trois plateformes d'administration (back-office Admin Hôtel et Super Admin) et leur connexion aux API.",
      technologies: ["Back-office", "Responsive design", "API REST"],
      links: [],
      images: ["/img/projects/myhotellerie/web_01.jpg"],
      video: "",
    },
    {
      title: "Kacy AI",
      href: "",
      dates: "Juin 2026 - Présent",
      active: true,
      category: "mobile",
      description:
        "Application mobile de Kacy : les commerçants suivent l'activité de leur agent IA, répondent aux clients et reprennent la main sur les conversations, gèrent plusieurs établissements et reçoivent des notifications en temps réel.",
      technologies: ["React Native", "Expo", "TypeScript", "Expo Router"],
      links: [
        {
          type: "App Store",
          href: "https://apps.apple.com/us/app/kacy-ai/id6793906967",
          icon: <Icons.download className="size-3" />,
        },
        {
          type: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.dothangroup.kacy",
          icon: <Icons.download className="size-3" />,
        },
      ],
      images: [
        "/img/projects/kacy/kacy_01.jpg",
        "/img/projects/kacy/kacy_02.jpg",
        "/img/projects/kacy/kacy_03.jpg",
        "/img/projects/kacy/kacy_04.jpg",
        "/img/projects/kacy/kacy_05.jpg",
      ],
      video: "",
      mobileStyles: {
        gradientFrom: "#3F7D3A",
        gradientVia: "#2D5A29",
        gradientTo: "#3F7D3A",
      },
    },
    {
      title: "AdhanApp v0.1.0",
      href: "",
      dates: "Jan 2025",
      active: true,
      category: "mobile",
      description:
        "Application mobile de rappel des heures de prière islamiques avec notifications personnalisables. Affiche les horaires de prière basés sur la localisation, avec un design minimaliste et intuitif.",
      technologies: ["React Native", "JavaScript", "API Adhan", "Nativewind"],
      links: [
        {
          type: "Télécharger",
          href: "https://www.dropbox.com/scl/fi/nft7fykq1m1ob84v4elck/AdhanApp_v0.1.0.apk?rlkey=zwz3cd09otnvytohz9aoyiuq6&st=jzjytxdo&dl=0",
          icon: <Icons.download className="size-3" />,
        },
      ],
      images: [
        "/img/projects/adhanapp/adhanapp_01.jpg",
        "/img/projects/adhanapp/adhanapp_02.jpg",
        "/img/projects/adhanapp/adhanapp_03.jpg",
        "/img/projects/adhanapp/adhanapp_04.jpg",
        "/img/projects/adhanapp/adhanapp_05.jpg",
        "/img/projects/adhanapp/adhanapp_06.jpg",
        "/img/projects/adhanapp/adhanapp_07.jpg",
      ],
      darkImages: [
        "/img/projects/adhanapp/adhanapp_01_dark.jpg",
        "/img/projects/adhanapp/adhanapp_02_dark.jpg",
        "/img/projects/adhanapp/adhanapp_03_dark.jpg",
        "/img/projects/adhanapp/adhanapp_04_dark.jpg",
        "/img/projects/adhanapp/adhanapp_05_dark.jpg",
        "/img/projects/adhanapp/adhanapp_06_dark.jpg",
        "/img/projects/adhanapp/adhanapp_07_dark.jpg",
      ],
      video: "",
      mobileStyles: {
        gradientFrom: "#115E59",
        gradientVia: "#0d4542",
        gradientTo: "#115E59",
      },
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
