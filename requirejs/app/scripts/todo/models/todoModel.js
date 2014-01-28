define(["jquery", "backbone"], function ($, Backbone) {


    var Todo = Backbone.Model.extend({

        // Item structure
        defaults: function () {
            return {
                title: " ",
                done: false,
                date: this.presentDate()
            };
        },

            //Simple converter that makes the Date() format into month followed by year
        presentDate: function () {
    
             var months = ['January','February','March','April','May','June','July',
            'August','September','October','November','December'];
            var today = new Date();
            
            var date = months[today.getMonth()] + " " + today.getDate()+ ", " + today.getFullYear();
    
            return date;
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
