const config= {
    lintOnSave: true,

    chainWebpack: config => {
        config.plugins.delete('prefetch');
        config.plugins.delete('preload');
    },
    
    devServer: {
        port: 8686,
        // proxy: {
        // },
        // overlay: {
        //     warnings: false,
        //     errors: false,
        // },
        // before(app) {
        //     apiMocker(app, path.resolve(__dirname, '../../mocker/index.js'));
        // },
        disableHostCheck: true,
    },
};
module.exports = config;