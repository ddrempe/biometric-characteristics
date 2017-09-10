import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { PageTitleComponent } from './app.component';
import { DeviceSetsComponent } from './device-sets/device-sets.component';
import { AddDeviceSetComponent } from './add-device-set/add-device-set.component';
import { EditDeviceSetComponent } from './edit-device-set/edit-device-set.component';
import { DeviceTypeSetsComponent } from './device-type-sets/device-type-sets.component';
import { AddDeviceTypeSetComponent } from './add-device-type-set/add-device-type-set.component';
import { EditDeviceTypeSetComponent } from './edit-device-type-set/edit-device-type-set.component';
import { FaceSetsComponent } from './face-sets/face-sets.component';
import { AddFaceSetComponent } from './add-face-set/add-face-set.component';
import { EditFaceSetComponent } from './edit-face-set/edit-face-set.component';
import { FingerprintSetsComponent } from './fingerprint-sets/fingerprint-sets.component';
import { AddFingerprintSetComponent } from './add-fingerprint-set/add-fingerprint-set.component';
import { EditFingerprintSetComponent } from './edit-fingerprint-set/edit-fingerprint-set.component';
import { GaitSetsComponent } from './gait-sets/gait-sets.component';
import { AddGaitSetComponent } from './add-gait-set/add-gait-set.component';
import { EditGaitSetComponent } from './edit-gait-set/edit-gait-set.component';
import { HandwritingSetsComponent } from './handwriting-sets/handwriting-sets.component';
import { AddHandwritingSetComponent } from './add-handwriting-set/add-handwriting-set.component';
import { EditHandwritingSetComponent } from './edit-handwriting-set/edit-handwriting-set.component';
import { IrisSetsComponent } from './iris-sets/iris-sets.component';
import { AddIrisSetComponent } from './add-iris-set/add-iris-set.component';
import { EditIrisSetComponent } from './edit-iris-set/edit-iris-set.component';
import { KeyboardSetsComponent } from './keyboard-sets/keyboard-sets.component';
import { AddKeyboardSetComponent } from './add-keyboard-set/add-keyboard-set.component';
import { EditKeyboardSetComponent } from './edit-keyboard-set/edit-keyboard-set.component';
import { KeystrokeDatasetSetsComponent } from './keystroke-dataset-sets/keystroke-dataset-sets.component';
import { AddKeystrokeDatasetSetComponent } from './add-keystroke-dataset-set/add-keystroke-dataset-set.component';
import { EditKeystrokeDatasetSetComponent } from './edit-keystroke-dataset-set/edit-keystroke-dataset-set.component';
import { KeystrokeSetsComponent } from './keystroke-sets/keystroke-sets.component';
import { AddKeystrokeSetComponent } from './add-keystroke-set/add-keystroke-set.component';
import { EditKeystrokeSetComponent } from './edit-keystroke-set/edit-keystroke-set.component';
import { LanguageSetsComponent } from './language-sets/language-sets.component';
import { AddLanguageSetComponent } from './add-language-set/add-language-set.component';
import { EditLanguageSetComponent } from './edit-language-set/edit-language-set.component';
import { PalmprintSetsComponent } from './palmprint-sets/palmprint-sets.component';
import { AddPalmprintSetComponent } from './add-palmprint-set/add-palmprint-set.component';
import { EditPalmprintSetComponent } from './edit-palmprint-set/edit-palmprint-set.component';
import { PersonSetsComponent } from './person-sets/person-sets.component';
import { AddPersonSetComponent } from './add-person-set/add-person-set.component';
import { EditPersonSetComponent } from './edit-person-set/edit-person-set.component';
import { SampleDatasetSetsComponent } from './sample-dataset-sets/sample-dataset-sets.component';
import { AddSampleDatasetSetComponent } from './add-sample-dataset-set/add-sample-dataset-set.component';
import { EditSampleDatasetSetComponent } from './edit-sample-dataset-set/edit-sample-dataset-set.component';
import { SampleSetsComponent } from './sample-sets/sample-sets.component';
import { AddSampleSetComponent } from './add-sample-set/add-sample-set.component';
import { EditSampleSetComponent } from './edit-sample-set/edit-sample-set.component';
import { SampleTypeSetsComponent } from './sample-type-sets/sample-type-sets.component';
import { AddSampleTypeSetComponent } from './add-sample-type-set/add-sample-type-set.component';
import { EditSampleTypeSetComponent } from './edit-sample-type-set/edit-sample-type-set.component';
import { SignatureSetsComponent } from './signature-sets/signature-sets.component';
import { AddSignatureSetComponent } from './add-signature-set/add-signature-set.component';
import { EditSignatureSetComponent } from './edit-signature-set/edit-signature-set.component';
import { SpeechSetsComponent } from './speech-sets/speech-sets.component';
import { AddSpeechSetComponent } from './add-speech-set/add-speech-set.component';
import { EditSpeechSetComponent } from './edit-speech-set/edit-speech-set.component';
import { TextSetsComponent } from './text-sets/text-sets.component';
import { AddTextSetComponent } from './add-text-set/add-text-set.component';
import { EditTextSetComponent } from './edit-text-set/edit-text-set.component';


export const routes: Routes = [
  {
    path: 'device-sets',
    children: [
      {
        path: '',
        component: DeviceSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Device Sets'
        }
      }
    ]
  },
  {
    path: 'device-sets',
    component: DeviceSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Device Sets'
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
    path: 'device-type-sets',
    children: [
      {
        path: '',
        component: DeviceTypeSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Device Type Sets'
        }
      }
    ]
  },
  {
    path: 'device-type-sets',
    component: DeviceTypeSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Device Type Sets'
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
    path: 'face-sets',
    children: [
      {
        path: '',
        component: FaceSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Face Sets'
        }
      }
    ]
  },
  {
    path: 'face-sets',
    component: FaceSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Face Sets'
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
    path: 'fingerprint-sets',
    children: [
      {
        path: '',
        component: FingerprintSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Fingerprint Sets'
        }
      }
    ]
  },
  {
    path: 'fingerprint-sets',
    component: FingerprintSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Fingerprint Sets'
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
    path: 'gait-sets',
    children: [
      {
        path: '',
        component: GaitSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Gait Sets'
        }
      }
    ]
  },
  {
    path: 'gait-sets',
    component: GaitSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Gait Sets'
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
    path: 'handwriting-sets',
    children: [
      {
        path: '',
        component: HandwritingSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Handwriting Sets'
        }
      }
    ]
  },
  {
    path: 'handwriting-sets',
    component: HandwritingSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Handwriting Sets'
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
    path: 'iris-sets',
    children: [
      {
        path: '',
        component: IrisSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Iris Sets'
        }
      }
    ]
  },
  {
    path: 'iris-sets',
    component: IrisSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Iris Sets'
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
    path: 'keyboard-sets',
    children: [
      {
        path: '',
        component: KeyboardSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Keyboard Sets'
        }
      }
    ]
  },
  {
    path: 'keyboard-sets',
    component: KeyboardSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Keyboard Sets'
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
    path: 'keystroke-dataset-sets',
    children: [
      {
        path: '',
        component: KeystrokeDatasetSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Keystroke Dataset Sets'
        }
      }
    ]
  },
  {
    path: 'keystroke-dataset-sets',
    component: KeystrokeDatasetSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Keystroke Dataset Sets'
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
    path: 'keystroke-sets',
    children: [
      {
        path: '',
        component: KeystrokeSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Keystroke Sets'
        }
      }
    ]
  },
  {
    path: 'keystroke-sets',
    component: KeystrokeSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Keystroke Sets'
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
    path: 'language-sets',
    children: [
      {
        path: '',
        component: LanguageSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Language Sets'
        }
      }
    ]
  },
  {
    path: 'language-sets',
    component: LanguageSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Language Sets'
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
    path: 'palmprint-sets',
    children: [
      {
        path: '',
        component: PalmprintSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Palmprint Sets'
        }
      }
    ]
  },
  {
    path: 'palmprint-sets',
    component: PalmprintSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Palmprint Sets'
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
    path: 'person-sets',
    children: [
      {
        path: '',
        component: PersonSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Person Sets'
        }
      }
    ]
  },
  {
    path: 'person-sets',
    component: PersonSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Person Sets'
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
    path: 'sample-dataset-sets',
    children: [
      {
        path: '',
        component: SampleDatasetSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Sample Dataset Sets'
        }
      }
    ]
  },
  {
    path: 'sample-dataset-sets',
    component: SampleDatasetSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Sample Dataset Sets'
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
    path: 'sample-sets',
    children: [
      {
        path: '',
        component: SampleSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Sample Sets'
        }
      }
    ]
  },
  {
    path: 'sample-sets',
    component: SampleSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Sample Sets'
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
    path: 'sample-type-sets',
    children: [
      {
        path: '',
        component: SampleTypeSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Sample Type Sets'
        }
      }
    ]
  },
  {
    path: 'sample-type-sets',
    component: SampleTypeSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Sample Type Sets'
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
    path: 'signature-sets',
    children: [
      {
        path: '',
        component: SignatureSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Signature Sets'
        }
      }
    ]
  },
  {
    path: 'signature-sets',
    component: SignatureSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Signature Sets'
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
    path: 'speech-sets',
    children: [
      {
        path: '',
        component: SpeechSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Speech Sets'
        }
      }
    ]
  },
  {
    path: 'speech-sets',
    component: SpeechSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Speech Sets'
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
    path: 'text-sets',
    children: [
      {
        path: '',
        component: TextSetsComponent
      },
      {
        path: '',
        component: PageTitleComponent,
        outlet: 'title',
        data: {
          title: 'Text Sets'
        }
      }
    ]
  },
  {
    path: 'text-sets',
    component: TextSetsComponent,
    outlet: 'popup',
    data: {
      title: 'Text Sets'
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
  { path: '', redirectTo: '/device-sets', pathMatch: 'full' }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
