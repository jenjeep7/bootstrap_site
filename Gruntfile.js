module.exports = function(grunt) {
  //Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'client/client.js',
        dest: 'views/public/server/assets/scripts/client.min.js'
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: "node_modules/",
        src: [
          "angular/angular.min.js",
          "angular/angular.min.js.map",
          "angular/angular-csp.css",
          "jquery/dist/jquery.min.js",
          "angular-route/angular-route.min.js"
        ],
        "dest": "views/public/server/vendor/"
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //Default task(s)
  grunt.registerTask('default', ['copy', 'uglify']);
};
