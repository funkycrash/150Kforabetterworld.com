module.exports = {
     dist: {
        files: {
            'assets/css/app.min.css': '_src/scss/index.scss'
        },
        options: {
        	sourcemap: 'auto',
        	style: 'compressed'
        }

    } 
}


