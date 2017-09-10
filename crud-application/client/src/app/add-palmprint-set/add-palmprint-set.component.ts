import { Component, Injector } from '@angular/core';
import { AddPalmprintSetGenerated } from './add-palmprint-set-generated.component';

@Component({
  selector: 'add-palmprint-set',
  templateUrl: './add-palmprint-set.component.html'
})
export class AddPalmprintSetComponent extends AddPalmprintSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
