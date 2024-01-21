import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Brad Carruthers",
  initials: "BC",
  location: "Den Haag, Nederland, CET",
  locationLink: "https://www.google.com/maps/place/denhaag",
  about:
    "Data Engineer",
  summary:
    "Bringing simplicity, automation and optimisation to Data Engineering. I have a diverse background covering finance, teaching and statistics. Passionate about cloud analytics, people and surfing.",
  avatarUrl: "https://media.licdn.com/dms/image/C4D03AQGxJ9BEL1wZYg/profile-displayphoto-shrink_800_800/0/1557851999766?e=1711584000&v=beta&t=RT-ReNPgBQSfK1Dtony2r0vGAZedLHjPBAg0iWm9S4o",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "brad@astrodata.com",
    tel: "+31",
    social: [
      // {
      //   name: "GitHub",
      //   url: "https://github.com/BartoszJarocki",
      //   icon: GitHubIcon,
      // },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/brad-callum-carruthers/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "London School of Economics and Political Science, United Kingdom",
      degree: "Masters in Statistics (Research) with Merit",
      start: "2018",
      end: "2019",
    },
    {
      school: "Stellenbosch University, South Africa",
      degree: "Honours Bachelor of Commerce (Economics) with Distinction",
      start: "2017",
      end: "2017",
    },
    {
      school: "Stellenbosch University, South Africa",
      degree: "Honours Bachelor of Commerce (Statistics) with Distinction",
      start: "2014",
      end: "2014",
    },
  ],
  work: [
    {
      company: "Unilever (Netherlands)",
      link: "https://unilever.com",
      badges: ["Hybrid"],
      title: "Senior Data Engineer",
      // logo: ParabolLogo,
      start: "2022",
      end: "Present",
      description: [
        "• Managed and modernised Azure architecture, reducing pipeline run-time by 40% and Azure costs by 60%",
        "• Implemented automated Databricks data pipelines with full medallion methodology",
        "• Migrated and simplified external Azure tenant with 20+ data products and data flows to internal Unilever Azure tenant, improving stability and efficiency",
        "• Implemented a ”metadata-driven” data framework using flow and contract YAML files to eliminate microman- agement and repetitive Azure Data Factory pipeline building",
        "• Facilitated a data-as-a-platform design to empower ”business engineers” and abstract away from technical man- agement of Azure Data Factory \n• Collaborated with cross-functional teams to develop end-to-end solutions for complex data engineering projects",
        "• Embraced a Light Scrum/minimal distraction organisational and team approach",
        "• Managed CICD Azure DevOps pipelines for code and metadata",
      ]
    },
  ],
  skills: [
    "Azure",
    "Databricks",
    "Python",
    "CICD",
    "Machine Learning",
    "Expert and lay communication",
    "Training and mentoring",
  ],
  projects: [
  //   {
  //     title: "Consultly",
  //     techStack: [
  //       "Side Project",
  //       "TypeScript",
  //       "Next.js",
  //       "Vite",
  //       "GraphQL",
  //       "WebRTC",
  //     ],
  //     description: "A platform to build and grow your online business",
  //     logo: ConsultlyLogo,
  //     link: {
  //       label: "consultly.com",
  //       href: "https://consultly.com/",
  //     },
  //   },
  //   {
  //     title: "Monito",
  //     techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
  //     description:
  //       "Browser extension that records everything happening in a web application",
  //     logo: MonitoLogo,
  //     link: {
  //       label: "monito.dev",
  //       href: "https://monito.dev/",
  //     },
  //   },
  //   {
  //     title: "Jarocki.me",
  //     techStack: ["Side Project", "Next.js", "MDX"],
  //     description:
  //       "My personal website and blog. Built with Next.js and Notion API",
  //     logo: JarockiMeLogo,
  //     link: {
  //       label: "github.com",
  //       href: "https://jarocki.me/",
  //     },
  //   },
  //   {
  //     title: "Minimal",
  //     techStack: ["Side Project", "Next.js", "Puppeteer"],
  //     description:
  //       "Minimalist calendars, habit trackers and planners generator",
  //     logo: Minimal,
  //     link: {
  //       label: "useminimal.com",
  //       href: "https://useminimal.com/",
  //     },
  //   },
  //   {
  //     title: "Barepapers",
  //     techStack: ["Side Project", "Next.js", "Puppeteer"],
  //     description:
  //       "Generates beautiful wallpapers using random shapes and gradients",
  //     logo: BarepapersLogo,
  //     link: {
  //       label: "barepapers.com",
  //       href: "https://barepapers.com/",
  //     },
  //   },
  //   {
  //     title: "Year progress",
  //     techStack: ["Side Project", "TypeScript", "Next.js"],
  //     description: "Tracks current year progress and displays a countdown",
  //     logo: YearProgressLogo,
  //     link: {
  //       label: "getyearprogress.com",
  //       href: "https://getyearprogress.com/",
  //     },
  //   },
  //   {
  //     title: "Parabol",
  //     techStack: [
  //       "Full Stack Developer",
  //       "TypeScript",
  //       "React",
  //       "Node.js",
  //       "GraphQL",
  //     ],
  //     description:
  //       "The Agile meeting co-pilot that delivers better meetings with less effort",
  //     logo: ParabolLogo,
  //     link: {
  //       label: "github.com",
  //       href: "https://parabol.co/",
  //     },
  //   },
  //   {
  //     title: "Evercast",
  //     techStack: [
  //       "Lead Frontend Developer",

  //       "TypeScript",
  //       "React",
  //       "Node.js",
  //       "GraphQL",
  //     ],
  //     description:
  //       "Creative collaboration platform that combines video conferencing and HD media streaming",
  //     logo: EvercastLogo,
  //     link: {
  //       label: "evercast.us",
  //       href: "https://www.evercast.us/",
  //     },
  //   },
  //   {
  //     title: "Mobile Vikings",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application for leading virtual mobile operator in Poland",
  //     logo: MobileVikingsLogo,
  //     link: {
  //       label: "mobilevikings.pl",
  //       href: "https://mobilevikings.pl/",
  //     },
  //   },
  //   {
  //     title: "Howdy",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Howdy is a place for you to join communities you care about",
  //     logo: Howdy,
  //     link: {
  //       label: "play.google.com",
  //       href: "https://howdy.co/",
  //     },
  //   },
  //   {
  //     title: "Tastycloud",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application for managing and displaying restaurant menus in kiosk mode",
  //     logo: TastyCloudLogo,
  //     link: {
  //       label: "tastycloud.fr",
  //       href: "https://www.tastycloud.fr/",
  //     },
  //   },
  //   {
  //     title: "Ambit",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application that helps with sharing your contact details",
  //     logo: AmbitLogo,
  //   },
  //   {
  //     title: "Bim",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application that helps with booking a table in a restaurants",
  //     logo: BimLogo,
  //   },
  //   {
  //     title: "Canal Digital GO",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Video streaming mobile application for Canal Digital subscribers",
  //     logo: CDGOLogo,
  //   },
  ],
} as const;
