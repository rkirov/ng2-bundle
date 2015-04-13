var Service = function() {};
Service.prototype.greeting = function() {
  return 'hello';
};

var Cmp = function(service) {
  this.greeting = service.greeting();
}
Cmp.annotations = [
  new angular.Component({
    selector: 'cmp',
    injectables: [Service]
  }),
  new angular.View({
    template: '{{greeting}} world!'
  })
];
Cmp.parameters = [[Service]];

document.addEventListener('DOMContentLoaded', function() {
  angular.bootstrap(Cmp);
});
