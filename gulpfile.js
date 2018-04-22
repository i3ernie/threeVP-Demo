/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp');

gulp.task( 'init', function ( done ) {

    var fnc = function( src, dest, req, name, mod )
    {
        fs.readFile( './node_modules/'+src, 'utf8', ( err, content ) => {
            if ( err ) { console.log( src, err ); return; }
            var end = ( typeof mod === "string" )? "\n return " + mod + ';'  : '';
            var ret = ( typeof req === "string" )? 'define('+req+', function('+name+'){\n' + content + end + "\n});" : content;
            fs.writeFile( dest, ret, 'utf8', ( err ) => {
                if ( err ) { console.log( err ); }
            }, ( res ) => {
                console.log( res );
            });
        });
    };
    
    var modules = require( "./node_modules.json" );
    
    _.each(modules, ( el ) =>{
        fnc(el.src, el.dest, el.req , el.name, el.mod);
    });
    
});

gulp.task('default', function () {
    // place code for your default task here
});

