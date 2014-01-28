define([
    "backbone",
    "todo/views/main",
    "todo/collections/todoController"
    ], function (Backbone, MainView, TodoCollection) {

     // Basic router
    var Router = Backbone.Router.extend({


       initialize: function(){
                        var root = $("[data-main][data-root]").data("root");
                        root = root ? root : '/';
                        this.todoCollection = new TodoCollection();
                        this.mainView = new MainView();
                           Backbone.history.start({
                                pushState: true,
                                root: root
                             });

        }
    });

    return Router;
});
