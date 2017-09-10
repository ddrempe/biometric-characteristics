import { Component, Injector } from '@angular/core';
import { EditSpeechSetGenerated } from './edit-speech-set-generated.component';

@Component({
  selector: 'edit-speech-set',
  templateUrl: './edit-speech-set.component.html'
})
export class EditSpeechSetComponent extends EditSpeechSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
