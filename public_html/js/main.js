require.config({
     baseUrl:"./js",
    
    "paths": {
        "vendor"    : "vendor",
        "data"      : "../data"
    }
});


require(['app'], function( app )
{
    app.init();
    app.start();
});