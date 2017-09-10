import { Component, Injector } from '@angular/core';
import { TextSetsGenerated } from './text-sets-generated.component';

@Component({
  selector: 'text-sets',
  templateUrl: './text-sets.component.html'
})
export class TextSetsComponent extends TextSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
