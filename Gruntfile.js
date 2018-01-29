module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    postcss: {
      options: {
        processors: [
          require('postcss-import'),
          require('autoprefixer'),
          require('postcss-custom-media'),
          require('postcss-custom-properties'),
          require('postcss-nesting')
        ]
      },
      dist: {
        src: 'ckanext/unhcr/src/css/theme.css',
        dest: 'ckanext/unhcr/fanstatic/theme.css'
      }
    },

    watch: {
      css: {
        files: 'ckanext/unhcr/src/css/*.css',
        tasks: ['postcss']
      }
    }

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['watch']);

};
