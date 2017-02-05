angular.module('starter.controllers', [])

  .controller('HomeCtrl', function($scope) {
    $scope.posts = [];
    $scope.loadPosts = function(){
      for(var i = 0; i < 100; i++) {
          $scope.posts.push({id: i, avatar: "img/adam.jpg", username: "Adam Levin",
          picture: "img/adam.jpg", like : 100, commenter: "Ben",
          comment: "You are handsome!!!", number_of_comment: 100,
        time_of_comment: 10});
      }
    }
    $scope.click_like = function($scope) {

    }
  })

  .controller('SearchCtrl', function($scope) {
    $scope.images = [];
    $scope.loadImages = function() {
        for(var i = 0; i < 100; i++) {
            $scope.images.push({id: i, src: "img/adam.jpg"});
        }
    }
  })
  .controller('TakepictureCtrl', function($scope,$ionicHistory,$state) {
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
    }

    $scope.gallery = function()
    {
        $scope.tabs.photo = false;
        $scope.tabs.gallery = true;
        // fetch photos
    }
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
