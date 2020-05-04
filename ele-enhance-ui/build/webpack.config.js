const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const glob = require('glob');
const cssnano = require('cssnano');
const config = require('./config');

let {filename, outDir, entryDir} = config;

const miniExtractCssPlugin = new MiniCssExtractPlugin({
    filename: './styles/'+filename.split('.')[0]+'.css',
    chunkFilename: './styles/chunk-[name]-[contenthash:8].css'
});

const purgeCSSPlugin = new PurgecssPlugin({
    paths: glob.sync(`${config.src}/**/*`, { nodir: true }),
    rejected: true,
    whitelist: config.purgeCssWhiteList,
    whitelistPatterns: config.purgeCssWhiteListPatterns,
    whitelistPatternsChildren: config.purgeCssWhiteListPatternChildren,
    defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
    }
});

const zipCSSAssetsPlugin = new OptimizeCSSAssetsPlugin({
    cssProcessor: cssnano,
    cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
    },
    canPrint: false
});

module.exports = (params)=>{
    let {env} = params;
    let isProd = env === 'prod';
    let mode = isProd?'production':'development';
    let webpackConfig = {
        mode,
        entry: entryDir,
        output: {
            filename,
            libraryTarget: 'umd',
            path: outDir
        },
        module:{
            rules:[
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.s?[ac]ss$/,
                    use: [
                        isProd ? { loader: MiniCssExtractPlugin.loader } : 'vue-style-loader',
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(jpg|jpeg|gif|bmp|png|ico)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            publicPath: config.publicPath,
                            name: './images/[name]-[hash:8].[ext]'
                        }
                    }
                },
                {
                    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|flv)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        publicPath: config.publicPath,
                        name: './media/[name].[hash:8].[ext]'
                    }
                },
                {
                    test: /\.(svg|eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            publicPath: config.publicPath,
                            name: './fonts/[name].[ext]'
                        }
                    }
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            miniExtractCssPlugin
        ],
        externals:{
            "element-ui": "ELEMENT",
            "vue": "Vue",
            "axios": "axios",
            "core-js": "core-js"
        },
        resolve: {
            extensions: [
                '.wasm', '.mjs', '.js', 'jsx', '.json', '.vue'
            ]
        }
    };
    if(!isProd){
        webpackConfig.devtool = 'source-map';
    }else{
        webpackConfig.plugins.push(purgeCSSPlugin);
        webpackConfig.plugins.push(zipCSSAssetsPlugin);
        webpackConfig.optimization = {
            minimize: true,
            minimizer: [new TerserPlugin()],
        }
    }

    return webpackConfig;

};