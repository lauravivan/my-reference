type StoreType = {
  category: string;
  subCategories: Array<{
    subCategory: string;
    references: Array<{
      name: string;
      link?: string;
      img?: string;
    }>;
  }>;
};

const store: StoreType[] = [
  {
    category: "Books",
    subCategories: [
      {
        subCategory: "Programming",
        references: [
          {
            name: "Typescript in 50 lessons by Stefan Baumgartner",
            link: "https://typescript-book.com/",
            img: "typescript-in-50-lessons.jpg",
          },
          {
            name: "Grokking Algorithms by Aditya Y Bhargava",
          },
        ],
      },
      {
        subCategory: "Design",
        references: [
          {
            name: "Don't make me think by Steve Krug",
          },
          {
            name: "The Non-Designer's Design Book by Robin Williams",
          },
          {
            name: "The Design of Everyday Things by Don Norman",
          },
          {
            name: "29 Dicas para Design de Interfaces por Maiane Gabriele",
          },
        ],
      },
      {
        subCategory: "Network",
        references: [
          {
            name: "Redes de Computadores para quem está começando por Nattane Luíza da Costa",
          },
        ],
      },
      {
        subCategory: "Reading",
        references: [
          {
            name: "Casa do código",
            link: "https://www.casadocodigo.com.br/",
          },
          {
            name: "ZLIB",
            link: "https://singlelogin.re/",
          },
        ],
      },
      {
        subCategory: "Software Engineer",
        references: [
          {
            name: "Engenharia de Software moderna",
            link: "https://engsoftmoderna.info/",
          },
        ],
      },
      {
        subCategory: "Handbook",
        references: [
          {
            name: "Frontend interview handbook",
            link: "https://www.frontendinterviewhandbook.com/introduction",
          },
          {
            name: "Tech interview handbook",
            link: "https://www.techinterviewhandbook.org/",
          },
        ],
      },
    ],
  },
  {
    category: "Dev Docs",
    subCategories: [
      {
        subCategory: "Tools official docs",
        references: [
          {
            name: "React official docs",
            link: "https://react.dev/",
          },
          {
            name: "React router official docs",
            link: "https://reactrouter.com/en/main",
          },
          {
            name: "Flowbite react official docs",
            link: "https://flowbite-react.com/docs/getting-started/introduction",
          },
          {
            name: "SASS official docs",
            link: "https://sass-lang.com/",
          },
          {
            name: "TailwindCSS official docs",
            link: "https://tailwindcss.com/",
          },
          {
            name: "Open web",
            link: "http://ref.openweb.io/CSS/",
          },
          {
            name: "Web design resources",
            link: "https://www.vakoshvili.com/resources",
          },
          {
            name: "Web design resources",
            link: "https://www.vakoshvili.com/resources",
          },
          {
            name: "W3Schools",
            link: "https://www.w3schools.com/",
          },
          {
            name: "MDN",
            link: "https://developer.mozilla.org/en-US/",
          },
          {
            name: "Vue.js",
            link: "https://vuejs.org/",
          },
          {
            name: "GRAPHQL",
            link: "https://graphql.org/",
          },
          {
            name: "NPM",
            link: "https://www.npmjs.com/",
          },
          {
            name: "Apollo",
            link: "https://www.apollographql.com/",
          },
          {
            name: "Lodash",
            link: "https://lodash.com/docs/4.17.15",
          },
          {
            name: "Markdown",
            link: "https://www.markdownguide.org/",
          },
          {
            name: "SWC",
            link: "https://swc.rs/",
          },
          {
            name: "KNEX.js",
            link: "https://knexjs.org/",
          },
          {
            name: "Vite",
            link: "https://vitejs.dev/config/",
          },
          {
            name: "Webpack",
            link: "https://webpack.js.org/",
          },
          {
            name: "Rollup",
            link: "https://rollupjs.org/",
          },
          {
            name: "Prettier",
            link: "https://prettier.io/",
          },
          {
            name: "Eslint",
            link: "https://eslint.org/",
          },
          {
            name: "ESDOC",
            link: "https://esdoc.org/",
          },
          {
            name: "Babel",
            link: "https://babeljs.io/",
          },
          {
            name: "JSDOC",
            link: "https://jsdoc.app/about-getting-started",
          },
          {
            name: "Next.js",
            link: "https://nextjs.org/",
          },
          {
            name: "Nextauth.js",
            link: "https://next-auth.js.org/",
          },
          {
            name: "Vitest",
            link: "https://vitest.dev/",
          },
          {
            name: "Cypress",
            link: "https://docs.cypress.io/guides/overview/why-cypress",
          },
          {
            name: "Testing Library",
            link: "https://testing-library.com/docs/",
          },
          {
            name: "Express.js",
            link: "https://expressjs.com/",
          },
          {
            name: "Node.js",
            link: "https://nodejs.org/docs/latest/api/",
          },
          {
            name: "JWT",
            link: "https://jwt.io/",
          },
          {
            name: "BUN",
            link: "https://bun.sh/",
          },
          {
            name: "Pug.js",
            link: "https://pugjs.org/api/getting-started.html",
          },
          {
            name: "Imagekit",
            link: "https://imagekit.io/",
          },
        ],
      },
      {
        subCategory: "Windows",
        references: [
          {
            name: "Commands",
            link: "https://ss64.com/nt/",
          },
        ],
      },
      {
        subCategory: "Programming Language",
        references: [
          {
            name: "Type hints (TS)",
            link: "https://typehints.org/",
          },
        ],
      },
    ],
  },
  {
    category: "Channels",
    subCategories: [
      {
        subCategory: "Tech",
        references: [
          {
            name: "Web Dev Simplified",
            link: "https://www.youtube.com/@WebDevSimplified",
          },
        ],
      },
    ],
  },
  {
    category: "Articles",
    subCategories: [
      {
        subCategory: "Articles",
        references: [
          {
            name: "Top React UI Component Libraries",
            link: "https://kinsta.com/blog/react-components-library/",
          },
          {
            name: "HTTP headers",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",
          },
          {
            name: "How to check for undefined in JavaScript",
            link: "https://ui.dev/check-for-undefined-javascript",
          },
          {
            name: "O processo de software",
            link: "https://www.macoratti.net/proc_sw1.htm",
          },
          {
            name: "Tabela de verbos irregulares em inglês",
            link: "https://www.wizard.com.br/idiomas/tabela-de-verbos-irregulares-em-ingles/",
          },
          {
            name: "Guia de unidades no CSS",
            link: "https://www.alura.com.br/artigos/guia-de-unidades-no-css?gclid=Cj0KCQjwvaeJBhCvARIsABgTDM6Sg80J1nN0s9rF4UD2-DLAI6Ffl88ES_ICPJRrEKj7SDJ4LBaodI4aAkfmEALw_wcB",
          },
          {
            name: "Adaptive Photo Layout with Flexbox",
            link: "https://css-tricks.com/adaptive-photo-layout-with-flexbox/",
          },
          {
            name: "Tabela de cores html",
            link: "https://celke.com.br/artigo/tabela-de-cores-html-nome-hexadecimal-rgb",
          },
          {
            name: "Regex: o guia essencial das expressões regulares",
            link: "https://blog.dp6.com.br/regex-o-guia-essencial-das-express%C3%B5es-regulares-2fc1df38a481",
          },
          {
            name: "Como instalar o xampp no linux",
            link: "https://www.edivaldobrito.com.br/como-instalar-o-xampp-no-linux/",
          },
          {
            name: "Support for password authentication was removed on August 13, 2021. Please use a personal access token instead",
            link: "https://bobbyhadz.com/blog/support-for-password-authentication-was-removed-on-august",
          },
          {
            name: "Percent-encoding",
            link: "https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding",
          },
        ],
      },
      {
        subCategory: "Blogs",
        references: [
          {
            name: "CSS TRICKS",
            link: "https://css-tricks.com/",
          },
          {
            name: "WEB DEV",
            link: "https://web.dev/",
          },
          {
            name: "DEVTO",
            link: "https://dev.to/",
          },
          {
            name: "Medium",
            link: "https://medium.com/",
          },
          {
            name: "Tech Journal",
            link: "https://www.insight.com/en_US/content-and-resources/tech-journal.html",
          },
          {
            name: "Daniel Castro",
            link: "https://danieldcs.com/",
          },
          {
            name: "Practice Languages Online",
            link: "https://practicelanguagesonline.com/",
          },
          {
            name: "mairovergara",
            link: "https://www.mairovergara.com/",
          },
          {
            name: "Aprender inglês de verdade",
            link: "https://aprenderinglesdeverdade.blogspot.com/",
          },
          {
            name: "CSS e Padrões Web",
            link: "https://www.maujor.com/",
          },
          {
            name: "Web dev simplified",
            link: "https://blog.webdevsimplified.com/",
          },
        ],
      },
    ],
  },
  {
    category: "Podcasts",
    subCategories: [
      {
        subCategory: "Tech",
        references: [
          {
            name: "DEV SHOW",
            link: "https://devshow.com.br/",
          },
        ],
      },
    ],
  },
  {
    category: "Tools",
    subCategories: [
      {
        subCategory: "Image",
        references: [
          {
            name: "TINYPNG",
            link: "https://tinypng.com/",
          },
          {
            name: "GRATISPNG",
            link: "https://www.gratispng.com/",
          },
          {
            name: "Shopify stock photos",
            link: "https://www.shopify.com/stock-photos",
          },
          {
            name: "removebg",
            link: "https://www.remove.bg/pt-br/upload",
          },
          {
            name: "removal.ai",
            link: "https://removal.ai/upload/",
          },
          {
            name: "Image color picker",
            link: "https://imagecolorpicker.com/",
          },
          {
            name: "Giphy",
            link: "https://giphy.com",
          },
          {
            name: "SVG Repo",
            link: "https://www.svgrepo.com/",
          },
          {
            name: "GIFER",
            link: "https://gifer.com/en",
          },
          {
            name: "SVG Silh",
            link: "https://svgsilh.com/",
          },
          {
            name: "Boxy SVG",
            link: "https://boxy-svg.com/",
          },
          {
            name: "I Love IMG",
            link: "https://www.iloveimg.com/",
          },
        ],
      },
      {
        subCategory: "Colors",
        references: [
          {
            name: "Flat Ui Colors",
            link: "https://flatuicolors.com/",
          },
          {
            name: "WebFX Color Picker",
            link: "https://www.webfx.com/web-design/color-picker/",
          },
          {
            name: "Color Hunt",
            link: "https://colorhunt.co/",
          },
          {
            name: "Encycolorpedia",
            link: "https://encycolorpedia.pt/",
          },
          {
            name: "Color Wheel",
            link: "https://color.adobe.com/pt/create/color-wheel",
          },
          {
            name: "Trending Color Palettes",
            link: "https://coolors.co/palettes/trending",
          },
          {
            name: "Color Contrast Checker",
            link: "https://codepen.io/alvaromontoro/pen/YgpWZG",
          },
        ],
      },
      {
        subCategory: "Icons",
        references: [
          {
            name: "Icons DB",
            link: "https://www.iconsdb.com/",
          },
          {
            name: "FlatIcon",
            link: "https://www.flaticon.com/",
          },
          {
            name: "Ionicons",
            link: "https://ionic.io/ionicons",
          },
        ],
      },
      {
        subCategory: "Fonts",
        references: [
          {
            name: "Google fonts",
            link: "https://fonts.google.com/",
          },
        ],
      },
      {
        subCategory: "Audiovisual",
        references: [
          {
            name: "Online video cutter",
            link: "https://online-video-cutter.com/pt/",
          },
          {
            name: "Clipchamp",
            link: "https://app.clipchamp.com/",
          },
        ],
      },
      {
        subCategory: "Web design",
        references: [
          {
            name: "Wireframe",
            link: "https://wireframe.cc/",
          },
        ],
      },
      {
        subCategory: "Converters",
        references: [
          {
            name: "SVG to CSS",
            link: "https://www.svgbackgrounds.com/tools/svg-to-css/",
          },
          {
            name: "I Love PDF",
            link: "https://www.ilovepdf.com/pt",
          },
          {
            name: "Unminify",
            link: "https://unminify.com/",
          },
          {
            name: "readme",
            link: "https://readme.so/editor",
          },
          {
            name: "Adobe express GIF conversion",
            link: "https://new.express.adobe.com/tools/convert-to-gif",
          },
          {
            name: "SVG to JSX",
            link: "https://svg2jsx.com/",
          },
          {
            name: "JS to TS",
            link: "https://www.codeconvert.ai/javascript-to-typescript-converter",
          },
          {
            name: "Pug.js to HTML",
            link: "https://pughtml.com/",
          },
        ],
      },
      {
        subCategory: "Performance",
        references: [
          {
            name: "Page speed",
            link: "https://pagespeed.web.dev/",
          },
          {
            name: "BrowserStack",
            link: "https://www.browserstack.com/",
          },
          {
            name: "Can I use",
            link: "https://caniuse.com/",
          },
          {
            name: "ES6 Compatibility",
            link: "https://compat-table.github.io/compat-table/es6/",
          },
        ],
      },
    ],
  },
  {
    category: "APIs",
    subCategories: [
      {
        subCategory: "APIs",
        references: [
          {
            name: "The CAT API",
            link: "https://thecatapi.com/",
          },
          {
            name: "Pokemon",
            link: "https://pokeapi.co/",
          },
          {
            name: "Github",
            link: "https://api.github.com/",
          },
          {
            name: "Brasil aberto",
            link: "https://brasilaberto.com/",
          },
        ],
      },
    ],
  },
  {
    category: "Nice stuff",
    subCategories: [
      {
        subCategory: "Nice stuff",
        references: [
          {
            name: "DRIVEN AND LISTEN",
            link: "https://driveandlisten.herokuapp.com/",
          },
          {
            name: "LETMEGOOGLETHAT",
            link: "https://letmegooglethat.com/",
          },
          {
            name: "EMOJIPEDIA",
            link: "https://emojipedia.org/",
          },
          {
            name: "BADGES",
            link: "https://badges.pages.dev/",
          },
          {
            name: "D3.JS GRAPH GALLERY",
            link: "https://d3-graph-gallery.com/",
          },
          {
            name: "ANIMISTA",
            link: "https://animista.net/",
          },
          {
            name: "LINGSCARS",
            link: "https://www.lingscars.com/",
          },
          {
            name: "WolframAlpha",
            link: "https://www.wolframalpha.com/",
          },
          {
            name: "Flexbox Defense",
            link: "http://www.flexboxdefense.com/",
          },
          {
            name: "Flexbox Froggy",
            link: "https://flexboxfroggy.com/",
          },
          {
            name: "Grid Garden",
            link: "https://cssgridgarden.com/",
          },
          {
            name: "Uppbeat",
            link: "https://uppbeat.io/browse/music/sunny-beats",
          },
          {
            name: "Fluent in 3 months",
            link: "https://www.fluentin3months.com/",
          },
          {
            name: "Brain facts",
            link: "https://www.brainfacts.org/",
          },
          {
            name: "Starship",
            link: "https://starship.rs/",
          },
          {
            name: "diatv",
            link: "https://diaestudio.com/",
          },
          {
            name: "regex101",
            link: "https://regex101.com/",
          },
          {
            name: "Excalidraw",
            link: "https://excalidraw.com/",
          },
        ],
      },
    ],
  },
  {
    category: "Courses",
    subCategories: [
      {
        subCategory: "Courses",
        references: [
          {
            name: "dio",
            link: "https://www.dio.me/en",
          },
          {
            name: "speakerdeck/jessilyneh",
            link: "https://speakerdeck.com/jessilyneh",
          },
          {
            name: "Udemy",
            link: "https://www.udemy.com/personal/home",
          },
          {
            name: "Cambly",
            link: "https://cambly.com/",
          },
          {
            name: "Khanacademy",
            link: "https://www.khanacademy.org/",
          },
        ],
      },
    ],
  },
  {
    category: "Exercises",
    subCategories: [
      {
        subCategory: "Challenges",
        references: [
          {
            name: "DevChallenge",
            link: "https://www.devchallenge.com.br/",
          },
          {
            name: "edabit JS Challenges",
            link: "https://edabit.com/challenges/javascript",
          },
        ],
      },
      {
        subCategory: "Practice",
        references: [
          {
            name: "exercism",
            link: "https://exercism.org/",
          },
          {
            name: "Hackerrank",
            link: "https://www.hackerrank.com/dashboard",
          },
        ],
      },
    ],
  },
  {
    category: "Roadmaps",
    subCategories: [
      {
        subCategory: "Roadmaps",
        references: [
          {
            name: "Full stack developer",
            link: "https://roadmap.sh/full-stack",
          },
          {
            name: "Frontend developer",
            link: "https://roadmap.sh/frontend",
          },
          {
            name: "JavaScript",
            link: "https://roadmap.sh/javascript",
          },
          {
            name: "Node.js",
            link: "https://roadmap.sh/nodejs",
          },
          {
            name: "React.js",
            link: "https://roadmap.sh/react",
          },
          {
            name: "Design system",
            link: "https://roadmap.sh/design-system",
          },
        ],
      },
    ],
  },
];

export default store;
