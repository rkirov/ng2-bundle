import {Component, Template, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'cmp',
  services: [Service]
})
@Template({
  inline: '{{greeting}} world!'
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
