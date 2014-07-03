/* jshint node: true */

module.exports = function(grunt) {
	'use strict';

	//project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			my_target: {
				options: {
					footer: '//koniec'
				},
				files: {
					'server.min.js': ['server.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('ugly', ['uglify']);
};
