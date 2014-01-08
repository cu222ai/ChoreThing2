define(["jquery", "underscore", "backbone", "../collections/dodoList"], function ($, _, Backbone, TodoCollection) {


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

          validate: function(attr, options){
                  if(!attr.title.match(/^[a-zåäö\s]*$/i)){
                          return "Wrong format"; // TODO: better help-errors
                  }
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
