const siteMetadata = {
  title: 'Saleem Hadad | Software Engineer',
  author: 'Saleem Hadad',
  headerTitle: 'Saleem Hadad',
  description: 'Software engineer with a product mindset and endless passion for technology.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://saleem.dev',
  siteRepo: 'https://github.com/saleem-hadad/saleemdev',
  siteLogo: '/static/images/coffee-beans.png',
  image: '/static/images/saleem.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'contact@saleem.dev',
  github: 'https://github.com/saleem-hadad',
  twitter: 'https://twitter.com/salee2m1',
  linkedin: 'https://www.linkedin.com/in/saleem-hadad',
  locale: 'en-US',
  analytics: {
    googleAnalyticsId: 'UA-160984022-1',
  },
  newsletter: {
    // Please add your .env file and modify it according to your selection
    provider: 'convertkit',
  },
  comment: {
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'utterances', // supported providers: giscus, utterances, disqus
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: 'saleem-hadad/saleemdev',
      issueTerm: 'url', // supported options: pathname, url, title
      label: 'Comment 💬', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: 'github-light',
      // theme when dark mode
      darkTheme: 'github-dark',
    },
  },
}

module.exports = siteMetadata
