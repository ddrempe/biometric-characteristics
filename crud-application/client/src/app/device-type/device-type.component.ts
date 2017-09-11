import { Component, Injector } from '@angular/core';
import { DeviceTypeGenerated } from './device-type-generated.component';

@Component({
  selector: 'device-type',
  templateUrl: './device-type.component.html'
})
export class DeviceTypeComponent extends DeviceTypeGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
