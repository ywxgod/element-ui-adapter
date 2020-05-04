import 'element-ui/lib/theme-chalk/index.css';
import 'ele-enhance-ui/dist/styles/ele-enhance-ui.css';
import ElementUI from 'element-ui';
import enui from 'ele-enhance-ui';

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData, // 站点元数据
    isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
    Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

    Object.keys(enui).forEach(i => {
        Vue.use(enui[i]);
    })
}