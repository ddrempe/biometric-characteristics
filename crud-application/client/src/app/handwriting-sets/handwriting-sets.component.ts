import { Component, Injector } from '@angular/core';
import { HandwritingSetsGenerated } from './handwriting-sets-generated.component';

@Component({
  selector: 'handwriting-sets',
  templateUrl: './handwriting-sets.component.html'
})
export class HandwritingSetsComponent extends HandwritingSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
