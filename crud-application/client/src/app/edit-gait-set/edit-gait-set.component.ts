import { Component, Injector } from '@angular/core';
import { EditGaitSetGenerated } from './edit-gait-set-generated.component';

@Component({
  selector: 'edit-gait-set',
  templateUrl: './edit-gait-set.component.html'
})
export class EditGaitSetComponent extends EditGaitSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
