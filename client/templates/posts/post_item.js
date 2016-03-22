/**
 * Created by Clayvessel on 3/22/16.
 */

Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});