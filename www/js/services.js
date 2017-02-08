angular.module('starter.services', [])

.factory('PostsService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var posts = [{
    id: 0,
    avatar: "img/adam.jpg",
    username: "Adam Levin",
    picture: "img/adam.jpg",
    like : 100,
    commenter: "Ben",
    comment: "You are handsome!!!",
    number_of_comment: 100,
    time_of_comment: 10
  }, {
    id: 1,
    avatar: "img/adam.jpg",
    username: "Adam Levin",
    picture: "img/adam.jpg",
    like : 30,
    commenter: "Ben",
    comment: "You are ugly!!!",
    number_of_comment: 50,
    time_of_comment: 4
  }, {
    id: 2,
    avatar: "img/trump.jpg",
    username: "Trump",
    picture: "img/trump.jpg",
    like : 65,
    commenter: "Hillary",
    comment: "speechless!!!",
    number_of_comment: 90,
    time_of_comment: 5
  }, {
    id: 3,
    avatar: "img/adam.jpg",
    username: "Obama",
    picture: "img/adam.jpg",
    like : 100000,
    commenter: "Ben",
    comment: "You are handsome!!!",
    number_of_comment: 80,
    time_of_comment: 3
  }, {
    id: 4,
    avatar: "img/adam.jpg",
    username: "Katy Perry",
    picture: "img/adam.jpg",
    like : 77,
    commenter: "Ben",
    comment: "You are handsome!!!",
    number_of_comment: 99,
    time_of_comment: 8
  }, {
    id: 5,
    avatar: "img/adam.jpg",
    username: "Adam Levin",
    picture: "img/adam.jpg",
    like : 100,
    commenter: "Ben",
    comment: "You are handsome!!!",
    number_of_comment: 100,
    time_of_comment: 10
  }, {
    id: 6,
    avatar: "img/adam.jpg",
    username: "Adam Levin",
    picture: "img/adam.jpg",
    like : 30,
    commenter: "Ben",
    comment: "You are ugly!!!",
    number_of_comment: 50,
    time_of_comment: 4
  }, {
    id: 7,
    avatar: "img/trump.jpg",
    username: "Trump",
    picture: "img/trump.jpg",
    like : 65,
    commenter: "Hillary",
    comment: "speechless!!!",
    number_of_comment: 90,
    time_of_comment: 5
  }, {
    id: 8,
    avatar: "img/adam.jpg",
    username: "Obama",
    picture: "img/adam.jpg",
    like : 100000,
    commenter: "Ben",
    comment: "You are handsome!!!",
    number_of_comment: 80,
    time_of_comment: 3
  }, {
    id: 9,
    avatar: "img/adam.jpg",
    username: "Katy Perry",
    picture: "img/adam.jpg",
    like : 77,
    commenter: "Ben",
    comment: "You are handsome!!!",
    number_of_comment: 99,
    time_of_comment: 8
}];

  return {
    all: function() {
      return posts;
    },
    singleuser: function(id){
      for(i=0;i<posts.length;i++){
				if(users[i].id == id){
					return posts[i];
				}}
    },
    showpictures: function(){
      return posts[picture];
    }
  };
});
