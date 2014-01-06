/*jslint regexp: true, nomen: true, sloppy: true */
/*global requirejs, require, define */

define([
    'jquery',
    'underscore',
    'backbone',
    'backboneLocalStorage',
    'router'
], function ($, _, Backbone, BackboneLocalStorage, router) {

    'use strict';

    // Custom module loading folder
    router.route("/*", "home", function () {
        this.loadModule("bundles/todo/main");
    });

    var root = $("[data-main][data-root]").data("root");
    root = root ? root : '/';

    return {
        initialize: function () {
            Backbone.history.start({
                pushState: true,
                root: root
            });
        }
    };
});
