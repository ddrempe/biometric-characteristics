import { Component, Injector } from '@angular/core';
import { SpeechSetsGenerated } from './speech-sets-generated.component';

@Component({
  selector: 'speech-sets',
  templateUrl: './speech-sets.component.html'
})
export class SpeechSetsComponent extends SpeechSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
