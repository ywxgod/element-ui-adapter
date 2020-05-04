const path = require('path');
module.exports = {
    filename: 'ele-enhance-ui.js',
    outDir: path.join(__dirname, '../dist'),
    entryDir: path.join(__dirname, '../'),
    publicPath: '/',
    purgeCssWhiteList: [],
    purgeCssWhiteListPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/, /data-v-.*/],
    purgeCssWhiteListPatternChildren: [],
}