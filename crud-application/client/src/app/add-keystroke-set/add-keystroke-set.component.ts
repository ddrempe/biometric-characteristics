import { Component, Injector } from '@angular/core';
import { AddKeystrokeSetGenerated } from './add-keystroke-set-generated.component';

@Component({
  selector: 'add-keystroke-set',
  templateUrl: './add-keystroke-set.component.html'
})
export class AddKeystrokeSetComponent extends AddKeystrokeSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
