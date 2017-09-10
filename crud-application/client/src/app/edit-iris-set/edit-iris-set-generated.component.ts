/*
  This file is automatically generated. Any changes will be overwritten.
  Modify edit-iris-set.component.ts instead.
*/
import { ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { FormComponent } from '@radzen/angular';

import { BiometricCharacteristicsModelService } from '../biometric-characteristics-model.service';

export class EditIrisSetGenerated implements AfterViewInit, OnInit, OnDestroy {
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

  irisset: any;

  getSampleSetsResult: any;

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
    this.biometricCharacteristicsModel.getIrisSetById(this.parameters.Id)
    .subscribe((result: any) => {
      this.irisset = result;
    }, (result: any) => {

    });

    this.biometricCharacteristicsModel.getSampleSets(null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.getSampleSetsResult = result.value;
    }, (result: any) => {

    });
  }

  form0Cancel(event: any) {
    this._location.back();
  }

  form0Submit(event: any) {
    this.biometricCharacteristicsModel.updateIrisSet(this.parameters.Id, event)
    .subscribe((result: any) => {
      this.router.navigate([{ outlets: { popup: null } }]).then(() => this.router.navigate(['iris-sets']));
    }, (result: any) => {
      this.messages.push({ severity: "error", summary: `Error`, detail: `Unable to update IrisSet` });
    });
  }
}