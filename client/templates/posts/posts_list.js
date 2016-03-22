/**
 * Created by Clayvessel on 3/22/16.
 */

Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});