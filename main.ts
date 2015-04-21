/// <reference path="typings/angular2/angular2.d.ts" />

import {bootstrap, Component, View} from 'angular2/angular2';

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
  greeting: string;
  constructor(public service: Service) {
    this.greeting = service.greeting();
  }
}

bootstrap(Cmp);
