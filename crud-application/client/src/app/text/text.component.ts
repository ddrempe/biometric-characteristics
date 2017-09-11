import { Component, Injector } from '@angular/core';
import { TextGenerated } from './text-generated.component';

@Component({
  selector: 'text',
  templateUrl: './text.component.html'
})
export class TextComponent extends TextGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
