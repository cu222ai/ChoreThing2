  //Starts the router and the application
  requirejs.config({
    baseUrl: "scripts/",
     paths: {
        "jquery": "vendor/jquery/jquery",
        "underscore": "vendor/underscore-amd/underscore",
        "backbone": "vendor/backbone-amd/backbone",
        "jade": "vendor/jade/jade",
        "backboneLocalStorage": "vendor/backbone.localStorage/backbone.localStorage",
        "text": "vendor/requirejs-text/text"
  },
      shim: {
          backbone: {
              deps: ["underscore", "jquery"],
              exports: "backbone"
          },
          backboneLocalStorage: {
              deps: ["backbone"],
              exports: "BackboneLocalStorage"
          }
      }
  });
//Go for it Mr. Router!
 require(['router', "backbone"], function(Router, Backbone) {
  new Router();
});
