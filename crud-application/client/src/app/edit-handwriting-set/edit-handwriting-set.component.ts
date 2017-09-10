import { Component, Injector } from '@angular/core';
import { EditHandwritingSetGenerated } from './edit-handwriting-set-generated.component';

@Component({
  selector: 'edit-handwriting-set',
  templateUrl: './edit-handwriting-set.component.html'
})
export class EditHandwritingSetComponent extends EditHandwritingSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
