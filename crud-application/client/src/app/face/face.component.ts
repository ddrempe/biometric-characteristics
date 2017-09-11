import { Component, Injector } from '@angular/core';
import { FaceGenerated } from './face-generated.component';

@Component({
  selector: 'face',
  templateUrl: './face.component.html'
})
export class FaceComponent extends FaceGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
