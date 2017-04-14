/**
 * Created by ng-graphic on 14-04-2017.
 */
app.controller('employeeList',function ($scope,dataGetService) {

    var data = dataGetService.collectData();

    //collect date from dataGetService  service
    data.then(function (data) {
        $scope.EmpList=[];
        var Emp = data.data;

        for(var i=0; i<Emp.length;i++){
            $scope.EmpList.push(Emp[i]);
        }

    });

});