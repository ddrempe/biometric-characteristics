import { Component, Injector } from '@angular/core';
import { EditDeviceTypeSetGenerated } from './edit-device-type-set-generated.component';

@Component({
  selector: 'edit-device-type-set',
  templateUrl: './edit-device-type-set.component.html'
})
export class EditDeviceTypeSetComponent extends EditDeviceTypeSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
