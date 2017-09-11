import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { PageTitleComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { AddDeviceSetComponent } from './add-device-set/add-device-set.component';
import { EditDeviceSetComponent } from './edit-device-set/edit-device-set.component';
import { DeviceTypeComponent } from './device-type/device-type.component';
import { AddDeviceTypeSetComponent } from './add-device-type-set/add-device-type-set.component';
import { EditDeviceTypeSetComponent } from './edit-device-type-set/edit-device-type-set.component';
import { FaceComponent } from './face/face.component';
import { AddFaceSetComponent } from './add-face-set/add-face-set.component';
import { EditFaceSetComponent } from './edit-face-set/edit-face-set.component';
import { FingerprintComponent } from './fingerprint/fingerprint.component';
import { AddFingerprintSetComponent } from './add-fingerprint-set/add-fingerprint-set.component';
import { EditFingerprintSetComponent } from './edit-fingerprint-set/edit-fingerprint-set.component';
import { GaitComponent } from './gait/gait.component';
import { AddGaitSetComponent } from './add-gait-set/add-gait-set.component';
import { EditGaitSetComponent } from './edit-gait-set/edit-gait-set.component';
import { HandwritingComponent } from './handwriting/handwriting.component';
import { AddHandwritingSetComponent } from './add-handwriting-set/add-handwriting-set.component';
import { EditHandwritingSetComponent } from './edit-handwriting-set/edit-handwriting-set.component';
import { IrisComponent } from './iris/iris.component';
import { AddIrisSetComponent } from './add-iris-set/add-iris-set.component';
import { EditIrisSetComponent } from './edit-iris-set/edit-iris-set.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { AddKeyboardSetComponent } from './add-keyboard-set/add-keyboard-set.component';
import { EditKeyboardSetComponent } from './edit-keyboard-set/edit-keyboard-set.component';
import { KeystrokeDatasetComponent } from './keystroke-dataset/keystroke-dataset.component';
import { AddKeystrokeDatasetSetComponent } from './add-keystroke-dataset-set/add-keystroke-dataset-set.component';
import { EditKeystrokeDatasetSetComponent } from './edit-keystroke-dataset-set/edit-keystroke-dataset-set.component';
import { KeystrokeComponent } from './keystroke/keystroke.component';
import { AddKeystrokeSetComponent } from './add-keystroke-set/add-keystroke-set.component';
import { EditKeystrokeSetComponent } from './edit-keystroke-set/edit-keystroke-set.component';
import { LanguageComponent } from './language/language.component';
import { AddLanguageSetComponent } from './add-language-set/add-language-set.component';
import { EditLanguageSetComponent } from './edit-language-set/edit-language-set.component';
import { PalmprintComponent } from './palmprint/palmprint.component';
import { AddPalmprintSetComponent } from './add-palmprint-set/add-palmprint-set.component';
import { EditPalmprintSetComponent } from './edit-palmprint-set/edit-palmprint-set.component';
import { PersonComponent } from './person/person.component';
import { AddPersonSetComponent } from './add-person-set/add-person-set.component';
import { EditPersonSetComponent } from './edit-person-set/edit-person-set.component';
import { SampleDatasetComponent } from './sample-dataset/sample-dataset.component';
import { AddSampleDatasetSetComponent } from './add-sample-dataset-set/add-sample-dataset-set.component';
import { EditSampleDatasetSetComponent } from './edit-sample-dataset-set/edit-sample-dataset-set.component';
import { SampleComponent } from './sample/sample.component';
import { AddSampleSetComponent } from './add-sample-set/add-sample-set.component';
import { EditSampleSetComponent } from './edit-sample-set/edit-sample-set.component';
import { SampleTypeComponent } from './sample-type/sample-type.component';
import { AddSampleTypeSetComponent } from './add-sample-type-set/add-sample-type-set.component';
import { EditSampleTypeSetComponent } from './edit-sample-type-set/edit-sample-type-set.component';
import { SignatureComponent } from './signature/signature.component';
import { AddSignatureSetComponent } from './add-signature-set/add-signature-set.component';
import { EditSignatureSetComponent } from './edit-signature-set/edit-signature-set.component';
import { SpeechComponent } from './speech/speech.component';
import { AddSpeechSetComponent } from './add-speech-set/add-speech-set.component';
import { EditSpeechSetComponent } from './edit-speech-set/edit-speech-set.component';
import { TextComponent } from './text/text.component';
import { AddTextSetComponent } from './add-text-set/add-text-set.component';
import { EditTextSetComponent } from './edit-text-set/edit-text-set.component';


export const routes: Routes = [
  {
    path: 'device',
    children: [
      {
        path: '',
        component: DeviceComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Device'
        }
      }
    ]
  },
  {
    path: 'device',
    component: DeviceComponent,
    outlet: 'popup',
    data: {
      title: 'Device'
    }
  },
  {
    path: 'add-device-set',
    children: [
      {
        path: '',
        component: AddDeviceSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Device Set'
        }
      }
    ]
  },
  {
    path: 'add-device-set',
    component: AddDeviceSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Device Set'
    }
  },
  {
    path: 'edit-device-set',
    children: [
      {
        path: ':Id',
        component: EditDeviceSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Device Set'
        }
      }
    ]
  },
  {
    path: 'edit-device-set/:Id',
    component: EditDeviceSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Device Set'
    }
  },
  {
    path: 'device-type',
    children: [
      {
        path: '',
        component: DeviceTypeComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'DeviceType'
        }
      }
    ]
  },
  {
    path: 'device-type',
    component: DeviceTypeComponent,
    outlet: 'popup',
    data: {
      title: 'DeviceType'
    }
  },
  {
    path: 'add-device-type-set',
    children: [
      {
        path: '',
        component: AddDeviceTypeSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Device Type Set'
        }
      }
    ]
  },
  {
    path: 'add-device-type-set',
    component: AddDeviceTypeSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Device Type Set'
    }
  },
  {
    path: 'edit-device-type-set',
    children: [
      {
        path: ':Id',
        component: EditDeviceTypeSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Device Type Set'
        }
      }
    ]
  },
  {
    path: 'edit-device-type-set/:Id',
    component: EditDeviceTypeSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Device Type Set'
    }
  },
  {
    path: 'face',
    children: [
      {
        path: '',
        component: FaceComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Face'
        }
      }
    ]
  },
  {
    path: 'face',
    component: FaceComponent,
    outlet: 'popup',
    data: {
      title: 'Face'
    }
  },
  {
    path: 'add-face-set',
    children: [
      {
        path: '',
        component: AddFaceSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Face Set'
        }
      }
    ]
  },
  {
    path: 'add-face-set',
    component: AddFaceSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Face Set'
    }
  },
  {
    path: 'edit-face-set',
    children: [
      {
        path: ':Id',
        component: EditFaceSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Face Set'
        }
      }
    ]
  },
  {
    path: 'edit-face-set/:Id',
    component: EditFaceSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Face Set'
    }
  },
  {
    path: 'fingerprint',
    children: [
      {
        path: '',
        component: FingerprintComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Fingerprint'
        }
      }
    ]
  },
  {
    path: 'fingerprint',
    component: FingerprintComponent,
    outlet: 'popup',
    data: {
      title: 'Fingerprint'
    }
  },
  {
    path: 'add-fingerprint-set',
    children: [
      {
        path: '',
        component: AddFingerprintSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Fingerprint Set'
        }
      }
    ]
  },
  {
    path: 'add-fingerprint-set',
    component: AddFingerprintSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Fingerprint Set'
    }
  },
  {
    path: 'edit-fingerprint-set',
    children: [
      {
        path: ':Id',
        component: EditFingerprintSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Fingerprint Set'
        }
      }
    ]
  },
  {
    path: 'edit-fingerprint-set/:Id',
    component: EditFingerprintSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Fingerprint Set'
    }
  },
  {
    path: 'gait',
    children: [
      {
        path: '',
        component: GaitComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Gait'
        }
      }
    ]
  },
  {
    path: 'gait',
    component: GaitComponent,
    outlet: 'popup',
    data: {
      title: 'Gait'
    }
  },
  {
    path: 'add-gait-set',
    children: [
      {
        path: '',
        component: AddGaitSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Gait Set'
        }
      }
    ]
  },
  {
    path: 'add-gait-set',
    component: AddGaitSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Gait Set'
    }
  },
  {
    path: 'edit-gait-set',
    children: [
      {
        path: ':Id',
        component: EditGaitSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Gait Set'
        }
      }
    ]
  },
  {
    path: 'edit-gait-set/:Id',
    component: EditGaitSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Gait Set'
    }
  },
  {
    path: 'handwriting',
    children: [
      {
        path: '',
        component: HandwritingComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Handwriting'
        }
      }
    ]
  },
  {
    path: 'handwriting',
    component: HandwritingComponent,
    outlet: 'popup',
    data: {
      title: 'Handwriting'
    }
  },
  {
    path: 'add-handwriting-set',
    children: [
      {
        path: '',
        component: AddHandwritingSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Handwriting Set'
        }
      }
    ]
  },
  {
    path: 'add-handwriting-set',
    component: AddHandwritingSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Handwriting Set'
    }
  },
  {
    path: 'edit-handwriting-set',
    children: [
      {
        path: ':Id',
        component: EditHandwritingSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Handwriting Set'
        }
      }
    ]
  },
  {
    path: 'edit-handwriting-set/:Id',
    component: EditHandwritingSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Handwriting Set'
    }
  },
  {
    path: 'iris',
    children: [
      {
        path: '',
        component: IrisComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Iris'
        }
      }
    ]
  },
  {
    path: 'iris',
    component: IrisComponent,
    outlet: 'popup',
    data: {
      title: 'Iris'
    }
  },
  {
    path: 'add-iris-set',
    children: [
      {
        path: '',
        component: AddIrisSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Iris Set'
        }
      }
    ]
  },
  {
    path: 'add-iris-set',
    component: AddIrisSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Iris Set'
    }
  },
  {
    path: 'edit-iris-set',
    children: [
      {
        path: ':Id',
        component: EditIrisSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Iris Set'
        }
      }
    ]
  },
  {
    path: 'edit-iris-set/:Id',
    component: EditIrisSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Iris Set'
    }
  },
  {
    path: 'keyboard',
    children: [
      {
        path: '',
        component: KeyboardComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Keyboard'
        }
      }
    ]
  },
  {
    path: 'keyboard',
    component: KeyboardComponent,
    outlet: 'popup',
    data: {
      title: 'Keyboard'
    }
  },
  {
    path: 'add-keyboard-set',
    children: [
      {
        path: '',
        component: AddKeyboardSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Keyboard Set'
        }
      }
    ]
  },
  {
    path: 'add-keyboard-set',
    component: AddKeyboardSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Keyboard Set'
    }
  },
  {
    path: 'edit-keyboard-set',
    children: [
      {
        path: ':Id',
        component: EditKeyboardSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Keyboard Set'
        }
      }
    ]
  },
  {
    path: 'edit-keyboard-set/:Id',
    component: EditKeyboardSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Keyboard Set'
    }
  },
  {
    path: 'keystroke-dataset',
    children: [
      {
        path: '',
        component: KeystrokeDatasetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'KeystrokeDataset'
        }
      }
    ]
  },
  {
    path: 'keystroke-dataset',
    component: KeystrokeDatasetComponent,
    outlet: 'popup',
    data: {
      title: 'KeystrokeDataset'
    }
  },
  {
    path: 'add-keystroke-dataset-set',
    children: [
      {
        path: '',
        component: AddKeystrokeDatasetSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Keystroke Dataset Set'
        }
      }
    ]
  },
  {
    path: 'add-keystroke-dataset-set',
    component: AddKeystrokeDatasetSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Keystroke Dataset Set'
    }
  },
  {
    path: 'edit-keystroke-dataset-set',
    children: [
      {
        path: ':Id',
        component: EditKeystrokeDatasetSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Keystroke Dataset Set'
        }
      }
    ]
  },
  {
    path: 'edit-keystroke-dataset-set/:Id',
    component: EditKeystrokeDatasetSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Keystroke Dataset Set'
    }
  },
  {
    path: 'keystroke',
    children: [
      {
        path: '',
        component: KeystrokeComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Keystroke'
        }
      }
    ]
  },
  {
    path: 'keystroke',
    component: KeystrokeComponent,
    outlet: 'popup',
    data: {
      title: 'Keystroke'
    }
  },
  {
    path: 'add-keystroke-set',
    children: [
      {
        path: '',
        component: AddKeystrokeSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Keystroke Set'
        }
      }
    ]
  },
  {
    path: 'add-keystroke-set',
    component: AddKeystrokeSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Keystroke Set'
    }
  },
  {
    path: 'edit-keystroke-set',
    children: [
      {
        path: ':Id',
        component: EditKeystrokeSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Keystroke Set'
        }
      }
    ]
  },
  {
    path: 'edit-keystroke-set/:Id',
    component: EditKeystrokeSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Keystroke Set'
    }
  },
  {
    path: 'language',
    children: [
      {
        path: '',
        component: LanguageComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Language'
        }
      }
    ]
  },
  {
    path: 'language',
    component: LanguageComponent,
    outlet: 'popup',
    data: {
      title: 'Language'
    }
  },
  {
    path: 'add-language-set',
    children: [
      {
        path: '',
        component: AddLanguageSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Language Set'
        }
      }
    ]
  },
  {
    path: 'add-language-set',
    component: AddLanguageSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Language Set'
    }
  },
  {
    path: 'edit-language-set',
    children: [
      {
        path: ':Id',
        component: EditLanguageSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Language Set'
        }
      }
    ]
  },
  {
    path: 'edit-language-set/:Id',
    component: EditLanguageSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Language Set'
    }
  },
  {
    path: 'palmprint',
    children: [
      {
        path: '',
        component: PalmprintComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Palmprint'
        }
      }
    ]
  },
  {
    path: 'palmprint',
    component: PalmprintComponent,
    outlet: 'popup',
    data: {
      title: 'Palmprint'
    }
  },
  {
    path: 'add-palmprint-set',
    children: [
      {
        path: '',
        component: AddPalmprintSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Palmprint Set'
        }
      }
    ]
  },
  {
    path: 'add-palmprint-set',
    component: AddPalmprintSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Palmprint Set'
    }
  },
  {
    path: 'edit-palmprint-set',
    children: [
      {
        path: ':Id',
        component: EditPalmprintSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Palmprint Set'
        }
      }
    ]
  },
  {
    path: 'edit-palmprint-set/:Id',
    component: EditPalmprintSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Palmprint Set'
    }
  },
  {
    path: 'person',
    children: [
      {
        path: '',
        component: PersonComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Person'
        }
      }
    ]
  },
  {
    path: 'person',
    component: PersonComponent,
    outlet: 'popup',
    data: {
      title: 'Person'
    }
  },
  {
    path: 'add-person-set',
    children: [
      {
        path: '',
        component: AddPersonSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Person Set'
        }
      }
    ]
  },
  {
    path: 'add-person-set',
    component: AddPersonSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Person Set'
    }
  },
  {
    path: 'edit-person-set',
    children: [
      {
        path: ':Id',
        component: EditPersonSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Person Set'
        }
      }
    ]
  },
  {
    path: 'edit-person-set/:Id',
    component: EditPersonSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Person Set'
    }
  },
  {
    path: 'sample-dataset',
    children: [
      {
        path: '',
        component: SampleDatasetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'SampleDataset'
        }
      }
    ]
  },
  {
    path: 'sample-dataset',
    component: SampleDatasetComponent,
    outlet: 'popup',
    data: {
      title: 'SampleDataset'
    }
  },
  {
    path: 'add-sample-dataset-set',
    children: [
      {
        path: '',
        component: AddSampleDatasetSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Sample Dataset Set'
        }
      }
    ]
  },
  {
    path: 'add-sample-dataset-set',
    component: AddSampleDatasetSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Sample Dataset Set'
    }
  },
  {
    path: 'edit-sample-dataset-set',
    children: [
      {
        path: ':Id',
        component: EditSampleDatasetSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Sample Dataset Set'
        }
      }
    ]
  },
  {
    path: 'edit-sample-dataset-set/:Id',
    component: EditSampleDatasetSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Sample Dataset Set'
    }
  },
  {
    path: 'sample',
    children: [
      {
        path: '',
        component: SampleComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Sample'
        }
      }
    ]
  },
  {
    path: 'sample',
    component: SampleComponent,
    outlet: 'popup',
    data: {
      title: 'Sample'
    }
  },
  {
    path: 'add-sample-set',
    children: [
      {
        path: '',
        component: AddSampleSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Sample Set'
        }
      }
    ]
  },
  {
    path: 'add-sample-set',
    component: AddSampleSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Sample Set'
    }
  },
  {
    path: 'edit-sample-set',
    children: [
      {
        path: ':Id',
        component: EditSampleSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Sample Set'
        }
      }
    ]
  },
  {
    path: 'edit-sample-set/:Id',
    component: EditSampleSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Sample Set'
    }
  },
  {
    path: 'sample-type',
    children: [
      {
        path: '',
        component: SampleTypeComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'SampleType'
        }
      }
    ]
  },
  {
    path: 'sample-type',
    component: SampleTypeComponent,
    outlet: 'popup',
    data: {
      title: 'SampleType'
    }
  },
  {
    path: 'add-sample-type-set',
    children: [
      {
        path: '',
        component: AddSampleTypeSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Sample Type Set'
        }
      }
    ]
  },
  {
    path: 'add-sample-type-set',
    component: AddSampleTypeSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Sample Type Set'
    }
  },
  {
    path: 'edit-sample-type-set',
    children: [
      {
        path: ':Id',
        component: EditSampleTypeSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Sample Type Set'
        }
      }
    ]
  },
  {
    path: 'edit-sample-type-set/:Id',
    component: EditSampleTypeSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Sample Type Set'
    }
  },
  {
    path: 'signature',
    children: [
      {
        path: '',
        component: SignatureComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Signature'
        }
      }
    ]
  },
  {
    path: 'signature',
    component: SignatureComponent,
    outlet: 'popup',
    data: {
      title: 'Signature'
    }
  },
  {
    path: 'add-signature-set',
    children: [
      {
        path: '',
        component: AddSignatureSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Signature Set'
        }
      }
    ]
  },
  {
    path: 'add-signature-set',
    component: AddSignatureSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Signature Set'
    }
  },
  {
    path: 'edit-signature-set',
    children: [
      {
        path: ':Id',
        component: EditSignatureSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Signature Set'
        }
      }
    ]
  },
  {
    path: 'edit-signature-set/:Id',
    component: EditSignatureSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Signature Set'
    }
  },
  {
    path: 'speech',
    children: [
      {
        path: '',
        component: SpeechComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Speech'
        }
      }
    ]
  },
  {
    path: 'speech',
    component: SpeechComponent,
    outlet: 'popup',
    data: {
      title: 'Speech'
    }
  },
  {
    path: 'add-speech-set',
    children: [
      {
        path: '',
        component: AddSpeechSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Speech Set'
        }
      }
    ]
  },
  {
    path: 'add-speech-set',
    component: AddSpeechSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Speech Set'
    }
  },
  {
    path: 'edit-speech-set',
    children: [
      {
        path: ':Id',
        component: EditSpeechSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Speech Set'
        }
      }
    ]
  },
  {
    path: 'edit-speech-set/:Id',
    component: EditSpeechSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Speech Set'
    }
  },
  {
    path: 'text',
    children: [
      {
        path: '',
        component: TextComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Text'
        }
      }
    ]
  },
  {
    path: 'text',
    component: TextComponent,
    outlet: 'popup',
    data: {
      title: 'Text'
    }
  },
  {
    path: 'add-text-set',
    children: [
      {
        path: '',
        component: AddTextSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Add Text Set'
        }
      }
    ]
  },
  {
    path: 'add-text-set',
    component: AddTextSetComponent,
    outlet: 'popup',
    data: {
      title: 'Add Text Set'
    }
  },
  {
    path: 'edit-text-set',
    children: [
      {
        path: ':Id',
        component: EditTextSetComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Edit Text Set'
        }
      }
    ]
  },
  {
    path: 'edit-text-set/:Id',
    component: EditTextSetComponent,
    outlet: 'popup',
    data: {
      title: 'Edit Text Set'
    }
  },
  { path: '', redirectTo: '/sample', pathMatch: 'full' }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
