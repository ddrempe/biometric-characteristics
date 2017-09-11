import { Component, Injector } from '@angular/core';
import { KeystrokeGenerated } from './keystroke-generated.component';

@Component({
  selector: 'keystroke',
  templateUrl: './keystroke.component.html'
})
export class KeystrokeComponent extends KeystrokeGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
