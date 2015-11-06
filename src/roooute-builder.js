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
        if (route && model)
            return route.replace(/\/:([^\/]+)/g, replaceComponent);
        return route;
    };

})();