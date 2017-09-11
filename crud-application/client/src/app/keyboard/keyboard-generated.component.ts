/*
  This file is automatically generated. Any changes will be overwritten.
  Modify keyboard.component.ts instead.
*/
import { ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { GridComponent } from '@radzen/angular';

import { BiometricCharacteristicsModelService } from '../biometric-characteristics-model.service';

export class KeyboardGenerated implements AfterViewInit, OnInit, OnDestroy {
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

  getKeyboardSetsResult: any;

  getKeyboardSetsCount: any;

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
    this.biometricCharacteristicsModel.getKeyboardSets(null, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, this.grid0.allowPaging, null)
    .subscribe((result: any) => {
      this.getKeyboardSetsResult = result.value;

      this.getKeyboardSetsCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid0Add(event: any) {
    if (window.innerWidth >= 500) { 
      this.router.navigate([{ outlets: { popup: ['add-keyboard-set'] } }]);
    } else {
      this.router.navigate(['add-keyboard-set']);
    }
  }

  grid0Delete(event: any) {
    this.biometricCharacteristicsModel.deleteKeyboardSet(event.Id)
    .subscribe((result: any) => {
      this.messages.push({ severity: "success", summary: `Success`, detail: `KeyboardSet deleted!` });
    }, (result: any) => {
      this.messages.push({ severity: "error", summary: `Error`, detail: `Unable to delete KeyboardSet` });
    });
  }

  grid0LoadData(event: any) {
    this.biometricCharacteristicsModel.getKeyboardSets(`${event.filter}`, this.grid0.allowPaging ? event.top : null, this.grid0.allowPaging ? event.skip : null, `${event.orderby}`, this.grid0.allowPaging, ``)
    .subscribe((result: any) => {
      this.getKeyboardSetsResult = result.value;

      this.getKeyboardSetsCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid0RowSelect(event: any) {
    if (window.innerWidth >= 500) { 
      this.router.navigate([{ outlets: { popup: ['edit-keyboard-set', event.Id] } }]);
    } else {
      this.router.navigate(['edit-keyboard-set', event.Id]);
    }
  }
}