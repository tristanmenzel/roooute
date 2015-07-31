(function () {
    'use strict';

    angular.module('roooute')
        .factory('rooouteInterceptor', HttpRouteInterceptor);

    function HttpRouteInterceptor(rooouteBuilder) {
        return {
            request: function (config) {
                config.url = rooouteBuilder.buildRoute(config.url, config.routeParams);
                return config;
            }
        };
    }

})();