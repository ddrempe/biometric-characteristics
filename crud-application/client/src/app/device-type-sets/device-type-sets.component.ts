import { Component, Injector } from '@angular/core';
import { DeviceTypeSetsGenerated } from './device-type-sets-generated.component';

@Component({
  selector: 'device-type-sets',
  templateUrl: './device-type-sets.component.html'
})
export class DeviceTypeSetsComponent extends DeviceTypeSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
