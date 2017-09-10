import { Component, Injector } from '@angular/core';
import { LanguageSetsGenerated } from './language-sets-generated.component';

@Component({
  selector: 'language-sets',
  templateUrl: './language-sets.component.html'
})
export class LanguageSetsComponent extends LanguageSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
