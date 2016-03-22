/**
 * Created by Clayvessel on 3/22/16.
 */

Meteor.publish('posts', function() {
    return Posts.find();
});