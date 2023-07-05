const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave : false,
    publicPath : './',
    outputDir: './docs',
    pluginOptions: {
        proxy: {
            '/': {
                target: 'http://localhost:8090',
                changeOrigin: true
            }
        }
    }
})
