module.exports = function(grunt) {

  grunt.initConfig({
    // browserify: {
    //   '../dist/app.js': ['../javascripts/main.js']
    // },//in addition to this being changed, the watch task now has an option set up for hbs. Oh, copy now also has a handlebars option that may or may not work. I'm not sure if handlebars.min.js needs the associated paths within its node_modules directory
    browserify: {
      js: {
        src: ['../javascripts/musicHistorymain.js'],
        dest: '../dist/app.js'
      },
      options: {
        transform: ["hbsfy"],
        browserifyOptions: {
          paths: [
            "./node_modules"
          ]
        }
      }
    },
    jshint: {
      options: {
        predef: [ "document", "console" ],
        esnext: true,
        globalstrict: true,
        globals: {"Global": true},
        browserify: true,
        jquery: true
      },
      files: ['../javascripts/**/*.js']
    },
    copy: {
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist',
        src: ['**'],
        dest: '../dist'
      },
      jquery: {
        expand: true,
        cwd: 'node_modules/jquery/dist',
        src: ['jquery.min.js'],
        dest: '../dist'
      }
      // ,handlebars: {
      //   expand: true,
      //   cwd: 'node_modules/handlebars/dist/',
      //   src: ['handlebars.min.js'],
      //   dest: '../dist'
      // }
    },
    sass: {
      dist: {
        files: {
          '../css/styles.css': '../sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
      ,hbs: {
        files: ['../templates/**/*.hbs'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'copy', 'sass', 'browserify', 'watch']);
};