define([
    "jquery",
    "underscore",
    "backbone",
    "backboneLocalStorage",
    "../models/todoModel"
], function ($, _, Backbone, BackboneLocalStorage, Todo) {

    var todoController = Backbone.Collection.extend({

        model: Todo,

        localStorage: new BackboneLocalStorage("chore-thing"),

        //Attemps to sort collection after the models cid attribute
         comparator: function(collection ){

            return( collection.cid );
        }
    });

    return todoController;
});
