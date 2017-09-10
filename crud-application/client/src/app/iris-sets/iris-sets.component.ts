import { Component, Injector } from '@angular/core';
import { IrisSetsGenerated } from './iris-sets-generated.component';

@Component({
  selector: 'iris-sets',
  templateUrl: './iris-sets.component.html'
})
export class IrisSetsComponent extends IrisSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
