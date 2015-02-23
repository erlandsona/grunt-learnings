'use strict';


module.exports = function (grunt) {

  // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Load the plugin that provides the "jade compile" task.
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Project configuration.
  grunt.initConfig({
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'app/', src: ['**'], dest: 'public/', filter: 'isFile'}
        ]
      }
    },
    jade: {
      compile: {
        files: [{expand: true, cwd: 'app/', src: ['**/*.jade'], dest: 'public/', ext: '.html'}]
      }
    }
  });



  // Default task(s).
  grunt.registerTask('default', []);
};