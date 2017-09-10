/*
  This file is automatically generated. Any changes will be overwritten.
  Modify edit-handwriting-set.component.ts instead.
*/
import { ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { FormComponent } from '@radzen/angular';

import { BiometricCharacteristicsModelService } from '../biometric-characteristics-model.service';

export class EditHandwritingSetGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild(FormComponent) form0: FormComponent;

  // Array of messages displayed by the notification component.
  messages = [];

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  _location: Location;

  subscription: Subscription;


  biometricCharacteristicsModel: BiometricCharacteristicsModelService;

  handwritingset: any;

  getSampleSetsResult: any;

  getTextSetsResult: any;

  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.biometricCharacteristicsModel = this.injector.get(BiometricCharacteristicsModelService);
  }

  ngAfterViewInit() {
    this.subscription = this.route.params.subscribe(parameters => {
      this.parameters = parameters;
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  load() {
    this.biometricCharacteristicsModel.getHandwritingSetById(this.parameters.Id)
    .subscribe((result: any) => {
      this.handwritingset = result;
    }, (result: any) => {

    });

    this.biometricCharacteristicsModel.getSampleSets(null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.getSampleSetsResult = result.value;
    }, (result: any) => {

    });

    this.biometricCharacteristicsModel.getTextSets(null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.getTextSetsResult = result.value;
    }, (result: any) => {

    });
  }

  form0Cancel(event: any) {
    this._location.back();
  }

  form0Submit(event: any) {
    this.biometricCharacteristicsModel.updateHandwritingSet(this.parameters.Id, event)
    .subscribe((result: any) => {
      this.router.navigate([{ outlets: { popup: null } }]).then(() => this.router.navigate(['handwriting-sets']));
    }, (result: any) => {
      this.messages.push({ severity: "error", summary: `Error`, detail: `Unable to update HandwritingSet` });
    });
  }
}
