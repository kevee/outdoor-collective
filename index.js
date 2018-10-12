var Metalsmith  = require('metalsmith');
var layouts     = require('metalsmith-layouts');
var markdown    = require('metalsmith-markdown');
var permalinks  = require('metalsmith-permalinks');

Metalsmith(__dirname)
    .source('./src')
    .destination('./build')
    .use(require('contentful-metalsmith')(
    { access_token : '30a7b7d7979c95c6e8665f55397fe44c95fdd2b56f0f0bb376ed5141d41e1bcb',
      space_id : 'c4qbgmrb0ioy'
    })
    )
    .use(layouts())             
    .build(function(err) {
        if (err) throw err;
    });