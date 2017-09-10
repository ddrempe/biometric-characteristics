import { Component, Injector } from '@angular/core';
import { EditTextSetGenerated } from './edit-text-set-generated.component';

@Component({
  selector: 'edit-text-set',
  templateUrl: './edit-text-set.component.html'
})
export class EditTextSetComponent extends EditTextSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
