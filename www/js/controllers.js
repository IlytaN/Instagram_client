angular.module('starter.controllers', [])

  .controller('LoginCtrl', function($scope,$state) {
    $scope.goHome = function() {
      $state.go('tab.home');
    }
  })

  .controller('HomeCtrl', function($scope,PostsService,$state) {
    //this can load data from server :)))))
    $scope.$on('$ionicView.enter', function(){
      PostsService.all().then(function(data)
           {
             $scope.theposts = data;
           }
      );
    });

    PostsService.showlocalpost().then(function(data)
         {
           $scope.localposts = data;
         }
    );

    $scope.click_like = function(post_id) {
        console.log(post_id);
        PostsService.solveLike(post_id);
    }

    $scope.click_comment = function(post_id) {
        console.log(post_id);
        $state.go('comment',{ post_id: post_id}, null, {reload:true});
    }

  })

  .controller('CommentCtrl', function($scope,PostsService,$ionicHistory, $state) {
        $scope.confirm_comment = function(post_id) {
            console.log(post_id);
            PostsService.solveComment(post_id);
          }
        $scope.goBack = function()
          {
              $ionicHistory.nextViewOptions({
                  disableBack: true
              });
              $state.go('tab.home');
          }
  })

  .controller('SearchCtrl', function($scope,PostsService) {
    $scope.theposts = PostsService.returnallpost();
  })
  .controller('TakepictureCtrl', function($scope,$rootScope,$ionicHistory,$state,$ionicPlatform,
                                          $cordovaFileTransfer, $cordovaCamera, $http) {

    $scope.tabs = {
        gallery: true,
        photo: false
    }

    $scope.goBack = function()
    {
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('tab.home');
    }

    $scope.photo = function()
    {
        $scope.tabs.photo = true;
        $scope.tabs.gallery = false;
        // activate camera
        var options =  {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA, //show camera
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            saveToPhotoAlbum: true
        };

        $ionicPlatform.ready(function() {
            $cordovaCamera.getPicture(options).then(function(imageData) {
                $rootScope.picture = imageData;
            }, function(err) {
                  // error
            });
        });
    }

    $scope.gallery = function()
    {
        $scope.tabs.photo = false;
        $scope.tabs.gallery = true;
        var options =  {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY, //show library
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE
        };

        $ionicPlatform.ready(function() {
            $cordovaCamera.getPicture(options).then(function(imageData) {
                $rootScope.picture = imageData;
            }, function(err) {
                  // error
            });
        });
    }
    $scope.confirmPost = function() {
      $state.go('addpost');
    }

  })

  .controller('AddpostCtrl',function($scope,$rootScope,$ionicHistory,$state,PostsService){
    $scope.goBack = function()
    {
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('take-picture');
    }
    $scope.tabs = {
        followers: true,
        direct: false
    }

    $scope.direct = function()
    {
        $scope.tabs.direct = true;
        $scope.tabs.followers = false;
        // activate camera
    }

    $scope.followers = function()
    {
        $scope.tabs.direct = false;
        $scope.tabs.followers = true;
        // fetch photos
    }

    $scope.newpost = {
        imageData: $rootScope.picture,
        caption: ""
    }
    console.log($scope.newpost.imageData);

    $scope.Share = function()
    {

          PostsService.AddNewPost($scope.newpost.imageData, $scope.newpost.caption).then(function(){
              $ionicHistory.nextViewOptions({
                  disableBack: true
              });
              $state.go('tab.home',null);
          });
          console.log($scope.newpost.imageData);
    };

  })

  .controller('HeartCtrl', function($scope) {
    $scope.tabs = {
        following: true,
        you: false
    }

    $scope.you = function()
    {
        $scope.tabs.you = true;
        $scope.tabs.following = false;
        // activate camera
    }

    $scope.following = function()
    {
        $scope.tabs.you = false;
        $scope.tabs.following = true;
        // fetch photos
    }
    $scope.followingposts = [];
    $scope.followingPosts = function(){
      for(var i = 0; i < 10; i++) {
          $scope.followingposts.push({id: i, avatar: "img/ben.png", username: "Adam Levin",liker: "Ben"});
      }
    }
    $scope.youposts = [];
    $scope.youPosts = function(){
      for(var i = 0; i < 10; i++) {
          $scope.youposts.push({id: i, avatar: "img/adam.jpg", username: "Ben Big",liker: "Adam"});
      }
    }
  })
  .controller('ProfileCtrl', function($scope) {
    $scope.tabs = {
        grid: true,
        list: false
    }
    $scope.grid = function()
    {
        $scope.tabs.grid = true;
        $scope.tabs.list = false;
        // activate camera
    }

    $scope.list = function()
    {
        $scope.tabs.grid = false;
        $scope.tabs.list = true;
        // fetch photos
    }

    $scope.images = [];
    $scope.loadGridImages = function() {
        for(var i = 0; i < 10; i++) {
            $scope.images.push({id: i, src: "img/adam.jpg"});
        }
    }
    $scope.posts = [];
    $scope.loadListImages = function(){
      for(var i = 0; i < 10; i++) {
          $scope.posts.push({id: i, avatar: "img/adam.jpg", username: "Adam Levin",
          picture: "img/adam.jpg", like : 100, commenter: "Ben",
          comment: "You are handsome!!!", number_of_comment: 100,
        time_of_comment: 10});
      }
    }
  })
;
