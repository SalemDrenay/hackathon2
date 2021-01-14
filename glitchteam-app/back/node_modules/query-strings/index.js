'use strict';

var $ = require('check-valid-url');
/**
 * add a query string parameter to the url
 * @param   {url}           parameter to check
 * @param   {params}        object
 * @returns {url}           url with parameter
 */
module.exports.queryString = function (url, params) {
    var uri = url.trim() || '';

    if ($.isUrl(uri)) {

        for (var key in params) {
            uri = queryStringUrl(uri, key, params[key]);
        }

        return uri;
    } else {
        return new Error('Invalid URL!');
    }
    
};

function queryStringUrl (uri, key, value) {

    var separator = uri.indexOf('?') !== -1 ? '&' : '?';

    return uri + separator + key.trim() + '=' + value.trim();

}
