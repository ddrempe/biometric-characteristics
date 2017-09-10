import { Component, Injector } from '@angular/core';
import { AddIrisSetGenerated } from './add-iris-set-generated.component';

@Component({
  selector: 'add-iris-set',
  templateUrl: './add-iris-set.component.html'
})
export class AddIrisSetComponent extends AddIrisSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
