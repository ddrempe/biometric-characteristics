import { Component, Injector } from '@angular/core';
import { AddHandwritingSetGenerated } from './add-handwriting-set-generated.component';

@Component({
  selector: 'add-handwriting-set',
  templateUrl: './add-handwriting-set.component.html'
})
export class AddHandwritingSetComponent extends AddHandwritingSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
