let components = [
    'EhButtonBar', // 这里不需要带上上级路径, 而是相对上级的路径
    'EhRemoteSelect',
    './base/EhSelect',
    './base/EhItemRenderer'
].sort();

module.exports = {
    title: "Sculpting in Life",
    description: '你看天上那白云，聚了又散，散了又聚，人生离合，亦复如斯',
    base: '/doc/',
    markdown: {
        lineNumbers: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': './assets'
            }
        }
    },
    displayAllHeaders: true,
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Coding',
                items: [
                    { text: 'en-ui', title: 'Enhancement of EleUI', link: '/eh-ui/' },
                    { text: 'v-mec', title: '', link: '/v-mec/' },
                    { text: 'processing', title: '', link: '/processing/' },
                    { text: 'typescript' , title: '', link: '/typescript/'},
                    { text: 'deno', title: '', link: '/deno/' }
                ]
            },
            {
                text: '其他',
                items: [
                    { text: 'E文翻译', title: '', link: '/translations/' },
                    { text: '中学数理化', title: '', link: '/pcm/' }
                ]
            },
            {
                text: 'About',
                items: [
                    { text: 'Profile', link: '/profile/' },
                    { text: 'Blog', link: 'https://ywxgod.github.io/blog/', target:'_blank' }
                ]
            },
        ],
        sidebar: {
            '/eh-ui/': [
                {
                    title: 'Enhancement-UI',
                    path: '',
                    children: components
                }
            ],
            '/v-mec/': [
                {
                    title: 'v-mec'
                }
            ],
            '/processing/': [
                {
                    title: 'processing'
                }
            ],
            '/typescript/': [
                {
                    title: 'typescript'
                }
            ],
            '/deno/': [
                {
                    title: 'deno'
                }
            ],
            '/translations/': [
                {
                    title: 'E文翻译',
                    path: '',
                    children: []
                }
            ],
            '/pcm/': [
                {
                    title: '中学数理化',
                    path: '',
                    children: []
                }
            ],
            '/profile/': [
                {
                    title: '简介'
                }
            ]
        }
    }
};