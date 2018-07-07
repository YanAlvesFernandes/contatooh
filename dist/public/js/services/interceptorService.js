app.factory('myInterceptor', function($location, $q) {
    var interceptor = {
        responseError: function(response) {
            if (response.status == 401) {
                $location.path('/auth');
            }
            return $q.reject(response);
        }
    }
    return interceptor;
});
