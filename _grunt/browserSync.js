module.exports = {
	files: {
        src : ['/assets/css/*.css']
    },
    options: {
        watchTask: true,
        ghostMode: {
            clicks: true,
            scroll: true,
            links: true,
            forms: true
        },
        server: {
            baseDir: '_site'
        }
    }
}
