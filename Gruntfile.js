module.exports = function(grunt) {

    grunt.initConfig({
        paths: {
            scss: './scss',
            css: './assets/css'
        },
        buildType: 'Build',
        pkg: grunt.file.readJSON('package.json'),
        archive_name: grunt.option('name') || 'Emilee',

        clean: {
            pre: ['dist/', 'build/'],
            post: ['<%= archive_name %>.zip']
        },

        compress: {
            main: {
                options: {
                    archive: '<%= archive_name %>.zip'
                },
                expand: true,
                cwd: 'build/',
                src: ['**/*'],
                dest: ''
            }
        },

        copy: {
            main: {
                files: [
                    {expand: true, src: ['assets/css/**'], dest: 'build/'},
                    {expand: true, src: ['assets/fonts/**'], dest: 'build/'},
                    {expand: true, src: ['assets/images/**'], dest: 'build/'},
                    {expand: true, src: ['assets/js/**'], dest: 'build/'},
                    {expand: true, src: ['partials/**'], dest: 'build/'},
                    {expand: true, src: ['scss/**'], dest: 'build/'},
                    {expand: true, src: ['*', '!.gitignore', '!.DS_Store'], dest: 'build/'},
                ]
            },
            archive: {
                files: [
                    {expand: true, src: ['<%= archive_name %>.zip'], dest: 'dist/'}
                ]
            }
        },

        sass: {
            admin: {
                options : {
                    // Only enable sourcemaps if you have Sass 3.3 installed.
                    sourcemap: true,
                    //style: 'compressed'
                },
                files: {
                    '<%= paths.css %>/style.css': '<%= paths.scss %>/style.scss',
                    '<%= paths.css %>/ie.css': '<%= paths.scss %>/ie.scss'
                }
            }
        },

        watch: {
            sass: {
                files: './scss/**/*.scss',
                tasks: ['sass:admin'],
                options: {
                    livereload: true,
                }
            },
            templates: {
                files: ['./*.hbs', './partials/**/*.hbs'],
                options: {
                    livereload: true,
                }
            }
        },

        bowercopy: {
            options: {
            },
            modernizr: {
                files: {
                    'scss/_normalize.scss': 'normalize-css/normalize.css'
                }
            }
        },

        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['<%= paths.css %>/*.css']
            },
            lax: {
                options: {
                },
                src: ['<%= paths.css %>/*.css']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-csslint');

    //default task to get from bower, build Sass
    grunt.registerTask('default', ['bowercopy:modernizr', 'sass:admin']);

    //also try 'grunt watch' to build sass and livereload page whenever files change
    
    //used by Travis-CI to build and test
    grunt.registerTask('build', ['bowercopy', 'sass', 'copy:main']);
    grunt.registerTask('test', ['sass']);


    //grunt.registerTask('bundle', ['clean:pre', 'copy:main', 'compress', 'copy:archive', 'clean:post']);
};
