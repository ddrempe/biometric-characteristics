import { Component, Injector } from '@angular/core';
import { EditFaceSetGenerated } from './edit-face-set-generated.component';

@Component({
  selector: 'edit-face-set',
  templateUrl: './edit-face-set.component.html'
})
export class EditFaceSetComponent extends EditFaceSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
