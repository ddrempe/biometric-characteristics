import { Component, Injector } from '@angular/core';
import { PersonSetsGenerated } from './person-sets-generated.component';

@Component({
  selector: 'person-sets',
  templateUrl: './person-sets.component.html'
})
export class PersonSetsComponent extends PersonSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
