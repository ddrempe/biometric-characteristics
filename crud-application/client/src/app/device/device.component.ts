import { Component, Injector } from '@angular/core';
import { DeviceGenerated } from './device-generated.component';

@Component({
  selector: 'device',
  templateUrl: './device.component.html'
})
export class DeviceComponent extends DeviceGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
