/* jshint node: true */

module.exports = function(grunt) {
	'use strict';

	//project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		nodemon: {
		  dev: {
			script: 'server.js'
		  }
		},
		less: {
			dev: {
				files:[{
					expand: true,
					ext: '.css',
					cwd: 'src/less',
					src: ['**/*.less'],
					dest: 'app/libs/css'
				}]
			}
		},
		watch: {
			less: {
				files: 'src/less/**/*.less',
				tasks: ['lessc'],
			}
		},
		concurrent: {
			target: {
				tasks: ['watch', 'nodemon'],
				options: {
					logConcurrentOutput: true
				}
			}
		}

	});
	// plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');

	// tasks
	grunt.registerTask('lessc', ['less:dev']);
	grunt.registerTask('default',['concurrent']);
	grunt.registerTask('watcher', ['watch']);
};
