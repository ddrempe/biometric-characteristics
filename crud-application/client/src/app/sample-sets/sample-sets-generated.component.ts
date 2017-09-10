/*
  This file is automatically generated. Any changes will be overwritten.
  Modify sample-sets.component.ts instead.
*/
import { ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { GridComponent } from '@radzen/angular';

import { BiometricCharacteristicsModelService } from '../biometric-characteristics-model.service';

export class SampleSetsGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild(GridComponent) grid0: GridComponent;

  // Array of messages displayed by the notification component.
  messages = [];

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  _location: Location;

  subscription: Subscription;


  biometricCharacteristicsModel: BiometricCharacteristicsModelService;

  getSampleSetsResult: any;

  getSampleSetsCount: any;

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
    this.biometricCharacteristicsModel.getSampleSets(null, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, this.grid0.allowPaging, `DeviceSet,PersonSet,SampleDatasetSet,SampleTypeSet`)
    .subscribe((result: any) => {
      this.getSampleSetsResult = result.value;

      this.getSampleSetsCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid0LoadData(event: any) {
    this.biometricCharacteristicsModel.getSampleSets(`${event.filter}`, this.grid0.allowPaging ? event.top : null, this.grid0.allowPaging ? event.skip : null, `${event.orderby}`, this.grid0.allowPaging, `DeviceSet,PersonSet,SampleDatasetSet,SampleTypeSet`)
    .subscribe((result: any) => {
      this.getSampleSetsResult = result.value;

      this.getSampleSetsCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid0Delete(event: any) {
    this.biometricCharacteristicsModel.deleteSampleSet(event.Id)
    .subscribe((result: any) => {
      this.messages.push({ severity: "success", summary: `Success`, detail: `SampleSet deleted!` });
    }, (result: any) => {
      this.messages.push({ severity: "error", summary: `Error`, detail: `Unable to delete SampleSet` });
    });
  }

  grid0Add(event: any) {
    if (window.innerWidth >= 500) { 
      this.router.navigate([{ outlets: { popup: ['add-sample-set'] } }]);
    } else {
      this.router.navigate(['add-sample-set']);
    }
  }

  grid0RowSelect(event: any) {
    if (window.innerWidth >= 500) { 
      this.router.navigate([{ outlets: { popup: ['edit-sample-set', event.Id] } }]);
    } else {
      this.router.navigate(['edit-sample-set', event.Id]);
    }
  }
}
