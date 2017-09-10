import { Component, Injector } from '@angular/core';
import { AddPersonSetGenerated } from './add-person-set-generated.component';

@Component({
  selector: 'add-person-set',
  templateUrl: './add-person-set.component.html'
})
export class AddPersonSetComponent extends AddPersonSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
