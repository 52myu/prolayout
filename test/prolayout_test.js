'use strict';

var grunt = require('grunt');

exports.prolayout = {
  setUp: function(done) {
    done();
  },
  default_options: function(test) {

    var actual = [grunt.file.exists('tmp/a/page/index.ejs'), grunt.file.exists('tmp/a/tpl/b'), grunt.file.exists('tmp/a/static/image')];

    test.equal(actual[0], true, 'should exists');
    test.equal(actual[1], true, 'should exists');
    test.equal(actual[2], true, 'should exists');

    test.done();
  }
};