
module.exports = {
    // Title of your website
    title: '超立方体',
    head: [
        [
          'link',
          {
            rel: 'icon',
            href: '/icon.png'
          }
        ]
      ],
    // Description of your website
    description: '高维的幻想空间',
    plugins: [
      ['mathjax', {
        target: 'chtml',
        macros: {
          '*': '\\times',
        },
      }],
      ['sitemap', {
        hostname: 'https://hypercube.top'
      }]
    ],
    
    // Language of your website
    locales: {
      '/': {
        lang: 'zh-CN',
      },
    },
  
    // Theme to use
    theme: 'meteorlxy',
  
    // Theme config
    themeConfig: {
      // Language of this theme. See the [Theme Language] section below.
      lang: require('vuepress-theme-meteorlxy/lib/langs/zh-CN'),
  
      // Personal infomation (delete the fields if you don't have / don't want to display)
      personalInfo: {
        // Nickname
        nickname: 'Elliott Zheng',
  
        // Introduction of yourself
        description: '高维的幻想空间',
  
        // Email
        email: 'admin@hypercube.top',
  
        // Your location
        // location: 'Xi\'an City, China',
  
        // Your organization
        organization: 'CopyTranslator',
  
        // Your avatar image
        // Set to external link
        avatar: 'https://s2.ax1x.com/2019/03/07/kx7sdf.png',
        // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
        // avatar: '/img/avatar.jpg',
  
        // Accounts of SNS
        sns: {
          // Github account and link
          github: {
            account: 'elliottzheng',
            link: 'https://github.com/elliottzheng',
          }, 
          // Medium account and link
          medium: {
            account: 'elliottzheng',
            link: 'https://medium.com/@elliottzheng',
          },
        },
      },
  
      // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
      headerBackground: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: 'https://s1.ax1x.com/2018/12/30/FhyfEj.png',
  
        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        // useGeo: true,
      },
  
      // Show the last updated time of your posts
      lastUpdated: true,
  
      // The content of your navbar links
      nav: [
        { text: '首页', link: '/', exact: true },
        { text: '博客', link: '/posts/', exact: false },
        { text: '关于', link: '/about/', exact: false },
        { text: 'CopyTranslator', link: 'https://copytranslator.github.io/', exact: false },
      ],
  
      // Comments config. See the [Posts Comments] section below.
      comments:false
    }
  }