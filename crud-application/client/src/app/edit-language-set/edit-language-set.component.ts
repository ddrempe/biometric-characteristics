import { Component, Injector } from '@angular/core';
import { EditLanguageSetGenerated } from './edit-language-set-generated.component';

@Component({
  selector: 'edit-language-set',
  templateUrl: './edit-language-set.component.html'
})
export class EditLanguageSetComponent extends EditLanguageSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
