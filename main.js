import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'cmp',
  injectables: [Service]
})
@View({
  template: '{{greeting}} world!'
})
class Cmp {
  constructor(service: Service) {
    this.greeting = service.greeting();
  }
}

class Service {
  greeting() {
    return 'hello';
  }
}

bootstrap(Cmp);
