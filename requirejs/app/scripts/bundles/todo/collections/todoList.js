/*jslint regexp: true, nomen: true, sloppy: true */
/*global requirejs, require, define */
define([
    "jquery",
    "underscore",
    "backbone",
    "backboneLocalStorage",
    "../models/todo"
], function ($, _, Backbone, BackboneLocalStorage, Todo) {

    'use strict';

    var TodoList = Backbone.Collection.extend({


        model: Todo,


        localStorage: new BackboneLocalStorage("chore-thing"),

            //Simple converter that makes the Date() format into month followed by year
            presentDate: function () {

                 var months = ['January','February','March','April','May','June','July',
                'August','September','October','November','December'];
                var tomorrow = new Date();
                tomorrow.setTime(tomorrow.getTime() + (1000*3600*24));
                var date = months[tomorrow.getMonth()] + " " + tomorrow.getDate()+ ", " + tomorrow.getFullYear();

                return date;
            },

        // Sort Collection by title
        comparator: function (todo) {
                return todo.get('title');
        }

    });

    return TodoList;
});
