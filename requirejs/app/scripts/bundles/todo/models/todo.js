/*jslint regexp: true, nomen: true, sloppy: true */
/*global requirejs, require, define */

define(["jquery", "underscore", "backbone", "../collections/TodoList"], function ($, _, Backbone, TodoCollection) {

    'use strict';


    var Todo = Backbone.Model.extend({

        // Item structure
        defaults: function () {
            this.todo = new TodoCollection();
            return {
                title: " ",
                done: false,
                date: this.todo.presentDate()
            };
        },

        // Makes sure every item has a title
        initialize: function () {
            if (!this.get("title")) {
                this.set({"title": this.defaults().title});
            }
        }


    });

    return Todo;
});
