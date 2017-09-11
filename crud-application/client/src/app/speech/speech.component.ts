import { Component, Injector } from '@angular/core';
import { SpeechGenerated } from './speech-generated.component';

@Component({
  selector: 'speech',
  templateUrl: './speech.component.html'
})
export class SpeechComponent extends SpeechGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
