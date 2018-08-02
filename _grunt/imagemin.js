module.exports = {
    dynamic: {
      files: [{
        expand: true,
        cwd: '_src/img/',
        src: ['**/*.{png,jpg,gif,svg}'],
        dest: 'assets/img/'
      }]
    }
}