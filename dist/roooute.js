(function () {
    'use strict';

    angular.module('roooute', []);

})();
(function () {
    'use strict';

    angular.module('roooute')
        .service('rooouteBuilder', RooouteBuilder);

    function RooouteBuilder() {
        this.routes = {};
    }

    RooouteBuilder.prototype.buildRoute = function (route, model) {
        var replaceComponent = function () {
            if (!model.hasOwnProperty(arguments[1]))
                throw "Could not find replacement for route componenet ':" + arguments[1] + "'";
            return '/' + encodeURIComponent(model[arguments[1]]);
        };
        return route.replace(/\/:([^\/]+)/g, replaceComponent);
    };

})();
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
    HttpRouteInterceptor.$inject = ["rooouteBuilder"];

})();