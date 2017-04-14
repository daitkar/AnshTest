/**
 * Created by ng-graphic on 14-04-2017.
 */
app.filter('hidenumber',function(){

return function(number)
{

    if (isNaN(number)){

        return "Na"
    }else{
        return number;
    }

}

});