'use strict';


module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    clean: ['public'],
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'app/', src: ['**', '!**/*.jade', '!**/*.{sass,scss}'], dest: 'public/', filter: 'isFile'}
        ]
      }
    },
    jade: {
      compile: {
        files: [{expand: true, cwd: 'app/', src: ['**/*.jade', '!**/_*.jade'], dest: 'public/', ext: '.html'}]
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'public/css/main.css': 'app/styles/main.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      build: {
        src: 'public/css/**/*.css', // -> src/css/file1.css, src/css/file2.css
      }
    },
    watch: {
      other: {
        files: ['app/**', '!app/**/*.jade', '!app/**/*.{sass,scss}'],
        tasks: ['copy']
      },
      jade: {
        files: ['app/**/*.jade'],
        tasks: ['jade']
      },
      sass: {
        files: ['app/styles/*.{sass,scss}'],
        tasks: ['sass', 'autoprefixer']
      }
    }
  });

  // Default task(s).
  grunt.registerTask('build', ['clean', 'copy', 'jade', 'sass', 'autoprefixer']);
  grunt.registerTask('see', ['build', 'watch']);
  grunt.registerTask('default', []);
};
