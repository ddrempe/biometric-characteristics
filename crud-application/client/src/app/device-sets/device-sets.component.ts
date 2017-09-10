import { Component, Injector } from '@angular/core';
import { DeviceSetsGenerated } from './device-sets-generated.component';

@Component({
  selector: 'device-sets',
  templateUrl: './device-sets.component.html'
})
export class DeviceSetsComponent extends DeviceSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
