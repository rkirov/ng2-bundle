import {bootstrap} from 'angular2/angular2';
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
  greeting: string;
  constructor(public service: Service) {
    this.greeting = service.greeting();
  }
}

// will be internal to angular2
Cmp.parameters = Reflect.getMetadata('design:paramtypes', Cmp).map((p) => [p]);

bootstrap(Cmp);
