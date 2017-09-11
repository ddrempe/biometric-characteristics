import { Component, Injector } from '@angular/core';
import { PersonGenerated } from './person-generated.component';

@Component({
  selector: 'person',
  templateUrl: './person.component.html'
})
export class PersonComponent extends PersonGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
