/*jslint regexp: true, nomen: true, sloppy: true */
/*global requirejs, require, define */

define([ "./views/main"], function (MainView) {

    'use strict';

    return function () {

        var mainView = new MainView();
    };

});
