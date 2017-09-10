import { Component, Injector } from '@angular/core';
import { AddDeviceSetGenerated } from './add-device-set-generated.component';

@Component({
  selector: 'add-device-set',
  templateUrl: './add-device-set.component.html'
})
export class AddDeviceSetComponent extends AddDeviceSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
