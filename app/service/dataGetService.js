/**
 * Created by ng-graphic on 14-04-2017.
 */
app.service('dataGetService',function($q,$http){

    var data = this;
    data.collectData = function () {
        console.log("check the service is working ");
        var defer = $q.defer();
        $http.get('../assets/database.json').then(
            function (data) {
                console.log("_this", data);

                defer.resolve(data);

            }
            , function () {
                defer.reject('could not find someFile.json');
            });
        return defer.promise;
    };

});
