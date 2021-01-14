# query-strings

Npm package - The query string commonly includes fields added to a base URL by a Web browser or other client application

## Installation

Installation is easiest through npm:

`npm install query-strings --save`

## Usage

```js
    var $ = require('query-strings');
    //url = 'http://www.google.com',
    //params.test1 = 'hello';
    //params.test2 = 'world';
    var result = $.queryString(url, params);
    console.log(result);
    // http://www.google.com?test1=hello&test2=world    

```


