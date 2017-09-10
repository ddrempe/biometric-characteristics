import { Component, Injector } from '@angular/core';
import { EditPalmprintSetGenerated } from './edit-palmprint-set-generated.component';

@Component({
  selector: 'edit-palmprint-set',
  templateUrl: './edit-palmprint-set.component.html'
})
export class EditPalmprintSetComponent extends EditPalmprintSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
