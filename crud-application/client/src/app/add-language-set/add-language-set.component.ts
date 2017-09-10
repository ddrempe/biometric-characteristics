import { Component, Injector } from '@angular/core';
import { AddLanguageSetGenerated } from './add-language-set-generated.component';

@Component({
  selector: 'add-language-set',
  templateUrl: './add-language-set.component.html'
})
export class AddLanguageSetComponent extends AddLanguageSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
