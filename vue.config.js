//const debug = process.env.NODE_ENV !== 'production'
module.exports = {
    // //basic path
    // publicPath:'./',
    // //run build files name
    // outputDir:'dist',
    // //static files 
    // assetsDir:'static',
    // //home page
    // indexPath:'index.html',
    // //file name hash
    // filenameHashing:true,
    // lintOnSave: false, // turn on eslint check
    // transpileDependencies: [], // default:babel-loader,ignore:mode_modules
    // productionSourceMap: true, // construct source map
    // configureWebpack: config => {
    //     if (debug) { 
    //         config.devtool = 'cheap-module-eval-source-map'
    //     } else {
    //         config.devtool = 'eval-source-map'
    //     }
        
    // },
    devServer:{
        open: true
    }
}