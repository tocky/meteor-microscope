Template.postsList.helpers({
  posts: function() {
    // return Posts.find();
    return Posts.find({author: 'bob-smith', category: 'JavaScript'});
  }
});