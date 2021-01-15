'use strict';

var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    $ = require('../index.js'),
    url = 'http://www.google.com',
    params = {};

params.test1 = 'hello';
params.test2 = 'world';



describe('##### Query String #####', function() {

    it ('Success', function () {
        var result = $.queryString(url, params);
        result.should.be.a('string');
    });


});
