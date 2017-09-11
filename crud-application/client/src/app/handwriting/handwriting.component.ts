import { Component, Injector } from '@angular/core';
import { HandwritingGenerated } from './handwriting-generated.component';

@Component({
  selector: 'handwriting',
  templateUrl: './handwriting.component.html'
})
export class HandwritingComponent extends HandwritingGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
