import { Component, Injector } from '@angular/core';
import { AddSpeechSetGenerated } from './add-speech-set-generated.component';

@Component({
  selector: 'add-speech-set',
  templateUrl: './add-speech-set.component.html'
})
export class AddSpeechSetComponent extends AddSpeechSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
