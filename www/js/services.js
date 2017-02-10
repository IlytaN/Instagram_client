angular.module('starter.services', [])

.factory('PostsService', function($q,$http) {

  // This is data for local use; it is similar to the data in the server
  var posts_local = [{
    id: 0,
    avatar: "img/adam.jpg",
    username: "Adam Levin",
    picture: "img/adam.jpg",
    like : 100,
    liked: false,
    caption: [],
    commenter: "Ben",
    comment: "You are handsome!!!",
    number_of_comment: 100,
    time_of_comment: 10
  },{
   id: 1,
   avatar: "img/max.png",
   username: "Max",
   picture: "img/max.png",
   like : 65,
   liked: false,
   caption: [],
   commenter: "Hillary",
   comment: "speechless!!!",
   number_of_comment: 90,
   time_of_comment: 5
 }];

  var posts = [];
  return {
    all: function() {
      return $q(function(resolve, reject){
          $http.get("https://boiling-coast-85665.herokuapp.com/posts").then(function(response){
              posts = response.data;
              console.log(posts);
              resolve(posts);
          },function(err){
                  reject();
          });
      });
    },
    showlocalpost: function(){

      return $q(function(resolve, reject){
        resolve(posts_local);
      });
    },
    returnallpost: function(){

      return posts_local;
    },
    showsinglelocalpost: function(id_post){
      return posts_local[id_post];
    },
    solveLike: function(id_post){
      if(posts_local[id_post].liked)
            {
              posts_local[id_post].like+=1;
              posts_local[id_post].liked=true;
            }
            else
            {
              posts_local[id_post].like-=1;
              posts_local[id_post].liked=false;
            }
            posts_local[id_post].liked = !posts_local[id_post].liked;
    },
    solveComment: function(id_post){

    },
    AddNewPost: function (imageUri,caption) {
      return $q(function(resolve, reject) {

        var newPost = {
          id: 10,
          avatar: "img/max.png",
          username: "Max",
          picture: imageUri,
          caption: caption,
          like: 0,
          liked: false,
          commenter: [],
          comment: [],
          number_of_comment: 0,
          time_of_comment: 0
        };

        posts_local.unshift(newPost);
        resolve();
      });
    }
  };
});
