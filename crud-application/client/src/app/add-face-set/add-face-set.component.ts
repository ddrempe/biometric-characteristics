import { Component, Injector } from '@angular/core';
import { AddFaceSetGenerated } from './add-face-set-generated.component';

@Component({
  selector: 'add-face-set',
  templateUrl: './add-face-set.component.html'
})
export class AddFaceSetComponent extends AddFaceSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
