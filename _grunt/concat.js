module.exports = {
    options: { 
      separator: ';',
    },
    dist: {
      src: [
	        '_src/js/lib/reveal.js', 
	        '_src/js/main.js'
        	],
      dest: '_src/js/app.js',
    },
}
