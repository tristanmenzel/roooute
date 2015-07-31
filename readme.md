#Roooute

Automagically replaces `/:routeParams/` in requests made using the `$http` service with values found in the `routeParams`
object.

##Install

bower install roooute

##Usage

**Reference module**
```js
angular.module('app', ['roooute']);
```

**Attach route interceptor**
```js
angular.module('app')
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('rooouteInterceptor');
});
```

**Make requests - use place holders in the url and provide a routeParams object**
```js
...
$http({
    url: '/api/entity/edit/:id',
    routeParams: {
        id: 123
    },
    method: 'POST',
    data: {}
}).then(...);
...
```