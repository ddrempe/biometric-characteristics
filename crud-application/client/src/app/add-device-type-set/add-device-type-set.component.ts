import { Component, Injector } from '@angular/core';
import { AddDeviceTypeSetGenerated } from './add-device-type-set-generated.component';

@Component({
  selector: 'add-device-type-set',
  templateUrl: './add-device-type-set.component.html'
})
export class AddDeviceTypeSetComponent extends AddDeviceTypeSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
