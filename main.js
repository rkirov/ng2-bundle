var Service = function() {};
Service.prototype.greeting = function() {
  return 'hello';
};

var HelloCmp = function(service) {
  this.greeting = service.greeting();
};
HelloCmp.parameters = [[Service]];
HelloCmp.annotations = [
  new angular.ComponentAnnotation({
    selector: 'hello',
    injectables: [Service]
  }),
  new angular.ViewAnnotation({
    template: '<router-outlet></router-outlet>',
    directives: [angular.router.RouterOutlet]
  })
];

var Cmp = function() {};
Cmp.annotations = [
  new angular.ComponentAnnotation({
    selector: 'cmp'
  }),
  new angular.ViewAnnotation({
    template: '<router-outlet></router-outlet>',
    directives: [angular.router.RouterOutlet]
  }),
  new angular.router.RouteConfigAnnotation([
    {path: '/', component: HelloCmp}
  ])
];


document.addEventListener('DOMContentLoaded', function() {
    angular.bootstrap(Cmp, angular.router.routerInjectables);
});
