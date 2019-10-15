module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/softlex-page/'
        : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/assets/styles/common.sass"`
            }
        }
    }
}
