import { Component, Injector } from '@angular/core';
import { IrisGenerated } from './iris-generated.component';

@Component({
  selector: 'iris',
  templateUrl: './iris.component.html'
})
export class IrisComponent extends IrisGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
