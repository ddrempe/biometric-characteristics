import { Component, Injector } from '@angular/core';
import { LanguageGenerated } from './language-generated.component';

@Component({
  selector: 'language',
  templateUrl: './language.component.html'
})
export class LanguageComponent extends LanguageGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
