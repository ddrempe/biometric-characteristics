import { Component, Injector } from '@angular/core';
import { EditPersonSetGenerated } from './edit-person-set-generated.component';

@Component({
  selector: 'edit-person-set',
  templateUrl: './edit-person-set.component.html'
})
export class EditPersonSetComponent extends EditPersonSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
