import { Component, Injector } from '@angular/core';
import { EditDeviceSetGenerated } from './edit-device-set-generated.component';

@Component({
  selector: 'edit-device-set',
  templateUrl: './edit-device-set.component.html'
})
export class EditDeviceSetComponent extends EditDeviceSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
