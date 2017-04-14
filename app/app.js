/**
 * Created by ng-graphic on 14-04-2017.
 */
var app = angular.module('app', ['ui.router']);


app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/employeeList');

    $stateProvider


        .state('employeeList', {
            url: '/employeeList',
            templateUrl: './component/EmployeeList/index.html',
            controller: 'employeeList'
        })


        .state('employeeSearch', {

            url: '/employeeSearch',
            templateUrl: './component/EmployeeSearch/index.html',
            controller: 'employeeSearch'

        })
        .state('addEmployee', {

            url: '/addEmployee',
            templateUrl: './component/AddEmployee/index.html',
            controller: 'addEmployee'

        })

});
