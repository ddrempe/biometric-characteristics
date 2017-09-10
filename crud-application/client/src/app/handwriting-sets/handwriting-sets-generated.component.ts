/*
  This file is automatically generated. Any changes will be overwritten.
  Modify handwriting-sets.component.ts instead.
*/
import { ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { GridComponent } from '@radzen/angular';

import { BiometricCharacteristicsModelService } from '../biometric-characteristics-model.service';

export class HandwritingSetsGenerated implements AfterViewInit, OnInit, OnDestroy {
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

  getHandwritingSetsResult: any;

  getHandwritingSetsCount: any;

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
    this.biometricCharacteristicsModel.getHandwritingSets(null, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, this.grid0.allowPaging, `SampleSet,TextSet`)
    .subscribe((result: any) => {
      this.getHandwritingSetsResult = result.value;

      this.getHandwritingSetsCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid0LoadData(event: any) {
    this.biometricCharacteristicsModel.getHandwritingSets(`${event.filter}`, this.grid0.allowPaging ? event.top : null, this.grid0.allowPaging ? event.skip : null, `${event.orderby}`, this.grid0.allowPaging, `SampleSet,TextSet`)
    .subscribe((result: any) => {
      this.getHandwritingSetsResult = result.value;

      this.getHandwritingSetsCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid0Delete(event: any) {
    this.biometricCharacteristicsModel.deleteHandwritingSet(event.Id)
    .subscribe((result: any) => {
      this.messages.push({ severity: "success", summary: `Success`, detail: `HandwritingSet deleted!` });
    }, (result: any) => {
      this.messages.push({ severity: "error", summary: `Error`, detail: `Unable to delete HandwritingSet` });
    });
  }

  grid0Add(event: any) {
    if (window.innerWidth >= 500) { 
      this.router.navigate([{ outlets: { popup: ['add-handwriting-set'] } }]);
    } else {
      this.router.navigate(['add-handwriting-set']);
    }
  }

  grid0RowSelect(event: any) {
    if (window.innerWidth >= 500) { 
      this.router.navigate([{ outlets: { popup: ['edit-handwriting-set', event.Id] } }]);
    } else {
      this.router.navigate(['edit-handwriting-set', event.Id]);
    }
  }
}
