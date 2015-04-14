import {bootstrap} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {Component, View} from 'decorators';

class Service {
  greeting() {
    return 'hello';
  }
}

@Component({
  selector: 'cmp',
  injectables: [Service]
})
@View({
  template: '{{greeting}} world!'
})
class Cmp {
  constructor(service) {
    this.greeting = service.greeting();
  }
}
// currently no sugar for this with decorators.
Cmp.parameters = [[Service]];

bootstrap(Cmp);
