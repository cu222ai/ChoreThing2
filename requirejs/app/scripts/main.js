(function () {
  'use strict';

  requirejs.config({
    baseUrl: "scripts/",
     paths: {
    "jquery": "vendor/jquery/jquery",
        "underscore": "vendor/underscore-amd/underscore",
            "backbone": "vendor/backbone-amd/backbone",
              "jade": "vendor/jade/jade",
             "backboneLocalStorage": "vendor/backbone.localStorage/backbone.localStorage",
             "text": "vendor/requirejs-text/text"
  }
  });

  require(['app'], function (app) {
    app.initialize();
  });
}());
