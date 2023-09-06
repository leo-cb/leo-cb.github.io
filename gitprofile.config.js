// gitprofile.config.js

const config = {
  github: {
    username: 'leo-cb', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 3, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['calculator_ci'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'leonardo-b-0354b2103',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'SQL',
    'Data Science',
    'Machine Learning',
    'Cloud technologies',
    'MLOps',
    'Azure Databricks',
    'Git',
    'MLFlow',
    'AutoML',
    'Docker',
  ],
  experiences: [
    {
      company: 'Santander Group',
      position: 'Data Scientist',
      from: 'March 2022',
      to: 'June 2023',
      companyLink: '',
    },
    {
      company: 'Millennium BCP',
      position: 'Data Scientist',
      from: 'February 2019',
      to: 'February 2022',
      companyLink: '',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Faculdade de Ciências da Universidade de Lisboa',
      degree: 'Statistics and Operations Research',
      from: '2017',
      to: '2020',
    },
    {
      institution: 'Faculdade de Ciências da Universidade de Lisboa',
      degree: 'Physics',
      from: '2010',
      to: '2014',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Heart Disease Prediction Website',
      description:
        'Flask application that predicts heart disease (and explains the prediction) from a set of relevant patient information, \
        derived from a GBT ML Model. Deployed from "HeartDiseasePrediction_WebApp" repo available in my Git. Technology stack:\
        PySpark\
        MLFlow\
        AutoML\
        Shap for model explainability\
        Flask for rest API and website\
        Docker\
        CI/CD with Github actions\
        NoSQL (MongoDB)',
      imageUrl: 'https://i.ibb.co/f2W9Yz7/homepage.png',
      link: 'http://149.56.100.90:5000',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
