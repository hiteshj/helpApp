var app=angular.module('app.controllers', ['ionic'])


  
.controller('homeCtrl', function($scope, $ionicLoading, $rootScope) {
  $scope.user = {};
  $scope.error = {};
  $ionicLoading.hide();

  
  $scope.loginUser = function(){
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    $scope.rememberme = false;
    if (typeof $scope.user.rememberme != "undefined") {
      $scope.rememberme = $scope.user.rememberme;
    }
    
    //we need to add sign API get get response
    
    
  }

})


   
.controller('registrationCtrl', function($scope, $ionicPopup, $state, $rootScope) {

  $scope.showConfirm = function() {
    $scope.testData = {};
    // An elaborate, custom popup
    var myPopup = $ionicPopup.confirm({
      template: '<ion-item class="item-checkbox"><label class="checkbox"><input type="checkbox"  ng-model="testData.disclaimer" name="disclaimer" value="1"></label>I confirm that I have read Help App’s Terms and Conditions and Privacy Policy and accept them by selecting the checkbox.</ion-item>',
      scope:$scope,
      title: ' ',
      subTitle: ' ',
      buttons: [
    {
      text: 'Cancel',
      onTap: function(e) {
        return $state.go('home');
      }
    },
    {
      text: '<ion-item><input type="submit" ng-disabled="testData.disclaimer" class="button" ui-sref="tab.newpost>Next</ion-item>',
      type: 'button-positive',
      onTap: function(e) {
        if ($scope.testData.disclaimer == true){
          // send test data to the server. then respond to next screen
          $rootScope.userDetail = {};
          $rootScope.userDetail.mobile = 9041002826;
          return $state.go('registration2');
        }
        else{
          return false;
        }
      }
    }
      ]
    });
  };


})
   
.controller('registration2Ctrl', function($scope, $state) {
  $scope.reg2 = {};
  $scope.resendCode = function(){
    //code to resend OTP to user
    console.log($scope.reg2);
  }
  
  $scope.checkCode = function(){
    // code to check code is it wrong or write
    $state.go('registration3');
  
  }
  
  

})
   
.controller('registration3Ctrl', function($scope, $ionicPopup, $state) {

  
  $scope.save_payment = function(type){
    if (type == "continue") {
      $scope.showConfirm();
    }
    else{
      console.log("save payment");
      $scope.showConfirm();
    }
  }
  
  $scope.ResendEmail = function(){
    console.log("data");
    $scope.showConfirm();
  }
  
  $scope.showConfirm = function() {
    $scope.data = {};
    // An elaborate, custom popup
    var myPopup = $ionicPopup.confirm({
              template: '<center>Please confirm your email address. The verification email has been sent to: <br> <b> jsmith@email.com</b></center>',
              title: 'Thanks for signing up for Help!',
              subTitle: ' ',
              buttons: [
            {
              text: '<ion-item><input type="submit" class="button">Nexst</ion-item>',
              onTab:function(e){
                console.log("sdsd");
                $scope.ResendEmail();
              }
            },
            {
              text: '<ion-item><input type="submit" class="button" ui-sref="tab.newpost>Next</ion-item>',
              type: 'button-positive',
              onTap: function(e) {
                return $state.go('myAccount.help');
              }
            }
              ]
          });
  };
})
   
.controller('helpCtrl', function($scope) {
    $scope.accountForms = [{id: 'form1'}];
    $scope.paymentForms = [{id: 'form1'}];






$scope.accountInformation=function (account) {

// alert(account.email)

   
  }

 
  $scope.location_form = new Array();
  $scope.location_form[1]=true;
  $scope.addNewAdress = function() {
   var newItemNo = $scope.accountForms.length+1;
   $scope.accountForms.push({'id':'accountForms'+newItemNo});

    if($scope.accountForms.length==newItemNo){
      $scope.location_form[newItemNo]=true;
      for(var i=0;i<$scope.accountForms.length;i++){
                $scope.location_form[i]=false;

      }
    }
    
    

  };

   $scope.locationInformation=function (location) {

alert(location.address_title)

   
  }


  $scope.payment_form = new Array();
  $scope.payment_form[1]=true;
  $scope.addNewCard = function() {

   var newItemNo = $scope.paymentForms.length+1;

   $scope.paymentForms.push({'id':'accountForms'+newItemNo});

    if($scope.paymentForms.length==newItemNo){
      $scope.payment_form[newItemNo]=true;
      for(var i=0;i<$scope.paymentForms.length;i++){
                $scope.payment_form[i]=false;
      }
    }
   };


   $scope.editAccountInformation=function(formIndex){

    $scope.location_form[formIndex] = $scope.location_form[formIndex] === false ? true: false;
      
   }
  $scope.editPaymentInformation=function(formIndex){

    $scope.payment_form[formIndex] = $scope.payment_form[formIndex] === false ? true: false;
      
    }

  /*$(function() {
    var select = $( "#minbeds" );
    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
      min: 1,
      max: 6,
      range: "min",
      value: select[ 0 ].selectedIndex + 1,
      slide: function( event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;
      }
    });
    $( "#minbeds" ).change(function() {
      slider.slider( "value", this.selectedIndex + 1 );
    });
  });
  */

})
   
.controller('help2Ctrl', function($scope) {

})
      
.controller('loginCtrl', function($scope) {

})

app.directive('validPasswordC', function() {
  return {
    require: 'ngModel',
    scope: {

      reference: '=validPasswordC'

    },
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue, $scope) {

        var noMatch = viewValue != scope.reference
        ctrl.$setValidity('noMatch', !noMatch);
        return (noMatch)?noMatch:undefined;
      });

      scope.$watch("reference", function(value) {;
        ctrl.$setValidity('noMatch', value === ctrl.$viewValue);

      });
    }
  }
});
 