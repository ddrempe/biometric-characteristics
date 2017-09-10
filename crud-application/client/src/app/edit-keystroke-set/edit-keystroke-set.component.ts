import { Component, Injector } from '@angular/core';
import { EditKeystrokeSetGenerated } from './edit-keystroke-set-generated.component';

@Component({
  selector: 'edit-keystroke-set',
  templateUrl: './edit-keystroke-set.component.html'
})
export class EditKeystrokeSetComponent extends EditKeystrokeSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
