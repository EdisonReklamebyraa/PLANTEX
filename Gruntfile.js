module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        autoprefixer: {
            options: {
                browsers: ['last 8 versions']
            },
            dist: { // Target
                files: {
                    'css/styles.css': 'css/style.css'
                }
            }
        },
        watch: {

            css: {
                files: 'css/style.css',
                tasks: [ 'autoprefixer']
            }
        }

    });
    grunt.registerTask('default', [ 'autoprefixer', 'watch' ]);
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};