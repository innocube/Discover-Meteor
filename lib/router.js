/**
 * Created by Clayvessel on 3/23/16.
 */

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
        return Meteor.subscribe('posts');
    }
});

Router.route('/', {name: 'postsList'});