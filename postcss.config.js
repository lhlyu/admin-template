module.exports = {
    plugins: [
        require('postcss-hover-media-feature')({
            fallback: true
        }),
        // 配置 Autoprefixer 插件
        require('autoprefixer')({
            // 游览器最近的两个版本
            overrideBrowserslist: ['last 2 versions'],
            grid: 'autoplace'
        })
    ]
}
