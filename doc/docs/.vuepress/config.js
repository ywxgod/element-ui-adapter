module.exports = {
    title: "element-ui-adapter",
    description: '根据项目需求，基于element-ui的部分组件进行改造，这里是改造后的组件的使用文档',
    displayAllHeaders: true,
    themeConfig: {
        sidebar: [
            {
                title: 'element-ui组件改造',   // 必要的
                path: '/element-ui组件改造/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: [
                    '/element-ui组件改造/ButtonBar'
                ]
            },
            {
                title: 'vuepress相关',   // 必要的
                path: '/vuepress相关/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                // sidebarDepth: 2,
                children: [
                    '/vuepress相关/如何上手'
                ]
            },
        ]
    }
};