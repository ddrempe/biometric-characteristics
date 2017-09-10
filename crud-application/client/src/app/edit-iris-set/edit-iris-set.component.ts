import { Component, Injector } from '@angular/core';
import { EditIrisSetGenerated } from './edit-iris-set-generated.component';

@Component({
  selector: 'edit-iris-set',
  templateUrl: './edit-iris-set.component.html'
})
export class EditIrisSetComponent extends EditIrisSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
