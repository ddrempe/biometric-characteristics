import { Component, Injector } from '@angular/core';
import { AddTextSetGenerated } from './add-text-set-generated.component';

@Component({
  selector: 'add-text-set',
  templateUrl: './add-text-set.component.html'
})
export class AddTextSetComponent extends AddTextSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
