/**
 * Created by ng-graphic on 14-04-2017.
 */
app.controller('employeeSearch',function ($scope,dataGetService) {

        var data = dataGetService.collectData();

    //collect date from dataGetService  service
        data.then(function (data) {
            $scope.EmpList=[];
            var Emp = data.data;

            for(var i=0; i<Emp.length;i++){
                $scope.EmpList.push(Emp[i]);
            }

        });



//search by city or by name function
    $scope.search = function(item) {
        if (!$scope.query || (item.name.toLowerCase().indexOf($scope.query) != -1) || (item.address.city.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ){
            return true;
        }
        return false;
    };

});