let app=angular.module("myApp",[]);
app.controller('myCtr',function($scope){
    $scope.id=0;
    $scope.show=false;
    $scope.allPosts=[{
      name: "ajay devgan",
      messg:"PM Modi meets Elon Musk, discuss Tesla, Starlink India plans: All you need to know",
      likes:56,
      comments: [{
        content: "30-minute intervals",
        editMode:false},
        {
        content: "disappeared on Sunday",
        editMode: false }]
    },
  {
    name:"deepika padukone",
    messg:"India slams China for blocking proposal to designate 26/11 planner",
    likes:3,
    comments: [{
      content:"Internal US Department",
      editmode:false
      },{
        content:"🔥🔥🔥🔥🔥🔥",
        editmode:false
      },{
        content:"🤣🤣🤣🤣",
        editmode:false
      }
      
      ]
  },
{
  name: "akshay kumar",
  messg: "submarine carrying five crew members disappeared on Sunday, American media is reporting. Internal US Department of Homeland Security memos say the banging sounds could be heard for hours at 30-minute intervals.",
  likes: 10000,
  comments: [{
    content: "🥳🥳🥳🥳🥳🥳🥳🥳",
    editmode:false
  }]
}];
    $scope.count=0;
    $scope.temp;
    $scope.editMode = false;
    $scope.editModes = false;
    $scope.newComment = ''; // Initialize the new comment input
    $scope.showCommentInput = false; // Set initial state to show the comment input field
    $scope.Edit = function() {
      if ($scope.editMode) {
        // Save changes
        $scope.editMode = false;
      } else {
        // Enter edit mode
        $scope.editMode = true;
      }
    };
    $scope.setId = function (singlePost){
      $scope.id=singlePost;
    }
    // adding a new content in feed
    $scope.addToFeed = function() {
        $scope.show=false;
        $scope.allPosts.push({
          name: $scope.userName,
          messg:$scope.story,
          likes:0,
          comments: []
        });
        $scope.story="";
        $scope.userName="";
    };
    //likes
    $scope.incrementLike = function(singlePost){
      let indexx = $scope.allPosts.indexOf(singlePost);
      $scope.allPosts[indexx].likes+=1;
      console.log($scope.allPosts);
    };
    //dislike
    $scope.decrementLike = function(singlePost){
    let indexx = $scope.allPosts.indexOf(singlePost);
      $scope.allPosts[indexx].likes-=1;
      console.log($scope.allPosts);
    };
    $scope.onShow = function () {
      $scope.show = true;
    };
//add comments
  $scope.addComment = function (singlePost) {
    console.log('singlePost: ', singlePost);
    $scope.showCommentInput = false;
    if (singlePost.val !== '') {
    singlePost.comments.push({
        content: singlePost.val,
        editMode: false
      })
      singlePost.val=''; 
    }
  };
  //save changes to edit content feed
  $scope.saveChanges = function () {
    console.log("+++=",$scope.editedContent);
    $scope.allPosts[$scope.id].messg = $scope.editedContent;
    $scope.editMode = false;
  };
  //delete a feed
  $scope.deleteFeed = function(singlePost){
    $scope.allPosts.splice(singlePost, 1);
  }
  //edit comments
  $scope.EditComment = function (singlePost,singleComment) {
    singleComment.editMode=true;
    singleComment.editedComment=singleComment.content;
  };
  //save comments
  $scope.saveComment= function(singlePost,singleComment){
    singleComment.editMode=false;
    singleComment.content = singleComment.editedComment;
  }
  //cancel comments
  $scope.cancelComment = function (){
    singleComment.editMode=false;
  }
  //delete comment
   $scope.deleteComment = function(singlePost,singleComment) {
    var index = $scope.allPosts[singlePost].comments.indexOf(singleComment);
    if (index > -1) {
      $scope.allPosts[singlePost].comments.splice(index, 1); // Remove the comment from the comments array
    }
  };
  $scope.cancelAddComment = function (singlePost) {
    showCommentInput = false;
  }
  //cancel feed
$scope.CancelFeed=()=>{
  $scope.show=false;
  $scope.story="";
  $scope.userName="";
}

  //save comments
  $scope.Update=function(singlePost,singleComment){
    singleComment.editMode=false;
    singleComment.content= singleComment.editedComment;
   
  }
  $scope.Cancel=function(singlePost,singleComment){
    singleComment.editMode=false;
     $scope.story="";
        $scope.userName="";
  //  j.content= j.editedComment;
   
  }

})