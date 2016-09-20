angular.module('PU.history', ['PU.factories'])

.controller('HistoryController', function ($scope, $location, Makerpass, $http, $routeParams) {
  //$routeParams.class //name id of the class! 
  new Clipboard('.clipyclip');

  $scope.generationId = 1;
  $scope.pastPairs = [{'partner1': 'Kathryn Hansen', 'partner2': 'Elliot Cheung', 'groupName': 'mks-43', 'generation': '1'},{'partner1': 'Aaron Ventura', 'partner2': 'Chad Griffis', 'groupName': 'mks-43', 'generation': '1'},{'partner1': 'Iliya', 'partner2': 'Ryan Walter', 'groupName': 'mks-43', 'generation': '2'},
  {'partner1': 'Doug', 'partner2': 'Garrett Holmes', 'groupName': 'mks-43', 'generation': '3'},
  {'partner1': 'Rachel', 'partner2': 'Caleb', 'groupName': 'mks-47', 'generation': '1'}];
  
  $scope.generations = [{'title':'abc'}, {'title':'def'},{'title':'ghi'},{'title':'jkl'},{'title':'mno'}];
  $scope.prev=$scope.generations[($scope.generations.length-1)].title
  $scope.nex= $scope.generations[1].title
  $scope.currGen = $scope.generations[0].title
  $scope.maxGen = $scope.generations.length
  $scope.currClass = $routeParams.class
  $scope.getHistory = function(classId, generationId){
    //database function to get all data
    console.log('database function called')
  }
  $scope.setGen = function(generation){
    $scope.currGen = generation.title;
    $scope.generationId = $scope.generations.indexOf(generation)+1
    if($scope.generationId === 1){
      $scope.nex = $scope.generations[$scope.generationId].title
      $scope.prev = $scope.generations[$scope.generations.length-1].title
    }
    else if($scope.generationId === $scope.maxGen){
      $scope.prev = $scope.generations[$scope.generationId-2].title
      $scope.nex = $scope.generations[0].title
    }
    else{
      $scope.prev = $scope.generations[$scope.generationId-2].title
      $scope.nex = $scope.generations[$scope.generationId].title
    }

  }
  $scope.next = function(){
    //database call to get maxGen
 //database call to get maxGen
    if($scope.generationId >= $scope.maxGen){
      $scope.generationId = 1;
      $scope.prev=$scope.generations[($scope.generations.length-1)].title
      $scope.currGen = $scope.generations[($scope.generationId-1)].title
      $scope.nex= $scope.generations[$scope.generationId].title
    }

    else{
      $scope.generationId++;
      $scope.currGen = $scope.generations[($scope.generationId-1)].title
      $scope.prev=$scope.generations[($scope.generationId-2)].title
      if($scope.generationId === $scope.generations.length){
        $scope.nex = $scope.generations[0].title;
      }
      else{
        $scope.nex= $scope.generations[$scope.generationId].title
      }
    }

    $scope.getHistory($routeParams.class, $scope.generationId);
  }
  $scope.previous = function(){
    
    if($scope.generationId>=2){
    $scope.generationId--
    $scope.currGen = $scope.generations[($scope.generationId-1)].title
    $scope.nex= $scope.generations[$scope.generationId].title
      if($scope.generationId === 1){
        $scope.prev = $scope.generations[($scope.maxGen-1)].title
      }
      else{
        $scope.prev=$scope.generations[($scope.generationId-2)].title
      }
    }
    else if($scope.generationId <= 1){
      $scope.generationId = $scope.maxGen
      $scope.currGen = $scope.generations[($scope.generationId-1)].title
      $scope.nex= $scope.generations[0].title
      $scope.prev=$scope.generations[($scope.generations.length-2)].title
    }
    $scope.getHistory($routeParams.class, $scope.generationId);
  }

  $scope.goHome = function(){
    $location.path('/');
  }

  
})