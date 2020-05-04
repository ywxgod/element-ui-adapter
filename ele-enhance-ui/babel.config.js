module.exports = (api) => ({
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",
                "debug": true,
                "corejs": "3.6",
                targets: api.caller((caller) => caller && caller.target === 'node')
                ? { node: 'current' }
            : { chrome: '58', ie: '11' }
            }
        ]
    ],
    "plugins": [
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
});