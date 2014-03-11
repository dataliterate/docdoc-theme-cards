/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-jshint');


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');



  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      docdoc: {
        files: {
          'tmp/docdoc.css' : 'src/styl/docdoc.styl'
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: [
          'src/js/site.js'
          ],
        dest: 'tmp/docdoc.js'
      },
    },
    uglify: {
      all: {
        files: {
          'tmp/docdoc.min.js': ['tmp/docdoc.js']
        }
      }
    },
    copy: {
      'build': {
        files: [
          {src: ['tmp/docdoc.css'], dest: 'theme/_assets/docdoc.css'},
          {src: ['tmp/docdoc.min.js'], dest: 'theme/_assets/docdoc.min.js'},
          // all foundation:
          //{expand: true, cwd: 'src/bower_components/foundation/css', src: ['**/*'], dest: 'theme/_assets/foundation'},
          {src: ['src/bower_components/jquery/jquery.min.js'], dest: 'theme/_assets/jquery.min.js'}
        ]
      }
    },
    /**
    * Live-Reload
    */
    reload: {
      port: 35729, // LR default
      liveReload: {}
    },
    watch: {
      all: {
        files:['src/**/*'],
        tasks:['build'],
        options: {
          livereload: true,
          interrupt: true,
        },
      },
      
      n4ml: {
        files:['src/**/*', 'theme/layout.ejs'],
        tasks:['build:example', 'shell:buildn4ml'],
        options: {
          livereload: true,
        },
      },
      
    },

    shell: {
      buildn4ml: {
        options: {
          stdout: true
        },
        command: 'cd /Users/mschieben/Projects/n4ml-design/docdoc; node _docdoc/generate.js'
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'src/*.js']
    },

    /**
    * gh-pages
    */
    'gh-pages': {
      options: {
        base: 'example'
      },
      src: ['**']
    }
  });

  grunt.registerTask('default', 'build');

  grunt.registerTask('watchtheme', ['build', 'watch:all']);
  grunt.registerTask('watchn4ml', ['build', 'watch:n4ml']);
  grunt.registerTask('build',  ['stylus', 'concat:js', 'uglify', 'copy:build']);

};
