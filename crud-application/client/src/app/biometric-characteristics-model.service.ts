import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, QueryEncoder } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { environment } from '../environments/environment';
import { PlusQueryEncoder } from './plus-query-encoder';
import * as models from './biometric-characteristics-model.model';


@Injectable()
export class BiometricCharacteristicsModelService {
  cache: { [resource: string]: { state: string, result: BehaviorSubject<any> } } = {};
  basePath = environment.biometricCharacteristicsModel;

  constructor(private http: Http) {
  }

  getDeviceSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['DeviceSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/DeviceSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['DeviceSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createDeviceSet(deviceSet: models.DeviceSet | null) {
    const cache = this.cache['DeviceSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (deviceSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', deviceSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/DeviceSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(deviceSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deleteDeviceSet(id: number | null) {
    const cache = this.cache['DeviceSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/DeviceSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getDeviceSetById(id: number | null) {
    const cache = this.cache['DeviceSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/DeviceSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updateDeviceSet(id: number | null, deviceSet: models.DeviceSet | null) {
    const cache = this.cache['DeviceSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (deviceSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', deviceSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/DeviceSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(deviceSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], deviceSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return deviceSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getDeviceTypeSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['DeviceTypeSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/DeviceTypeSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['DeviceTypeSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createDeviceTypeSet(deviceTypeSet: models.DeviceTypeSet | null) {
    const cache = this.cache['DeviceTypeSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (deviceTypeSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', deviceTypeSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/DeviceTypeSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(deviceTypeSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deleteDeviceTypeSet(id: number | null) {
    const cache = this.cache['DeviceTypeSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/DeviceTypeSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getDeviceTypeSetById(id: number | null) {
    const cache = this.cache['DeviceTypeSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/DeviceTypeSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updateDeviceTypeSet(id: number | null, deviceTypeSet: models.DeviceTypeSet | null) {
    const cache = this.cache['DeviceTypeSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (deviceTypeSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', deviceTypeSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/DeviceTypeSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(deviceTypeSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], deviceTypeSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return deviceTypeSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getFaceSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['FaceSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/FaceSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['FaceSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createFaceSet(faceSet: models.FaceSet | null) {
    const cache = this.cache['FaceSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (faceSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', faceSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/FaceSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(faceSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deleteFaceSet(id: number | null) {
    const cache = this.cache['FaceSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/FaceSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getFaceSetById(id: number | null) {
    const cache = this.cache['FaceSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/FaceSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updateFaceSet(id: number | null, faceSet: models.FaceSet | null) {
    const cache = this.cache['FaceSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (faceSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', faceSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/FaceSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(faceSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], faceSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return faceSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getFingerprintSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['FingerprintSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/FingerprintSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['FingerprintSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createFingerprintSet(fingerprintSet: models.FingerprintSet | null) {
    const cache = this.cache['FingerprintSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (fingerprintSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', fingerprintSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/FingerprintSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(fingerprintSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deleteFingerprintSet(id: number | null) {
    const cache = this.cache['FingerprintSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/FingerprintSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getFingerprintSetById(id: number | null) {
    const cache = this.cache['FingerprintSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/FingerprintSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updateFingerprintSet(id: number | null, fingerprintSet: models.FingerprintSet | null) {
    const cache = this.cache['FingerprintSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (fingerprintSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', fingerprintSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/FingerprintSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(fingerprintSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], fingerprintSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return fingerprintSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getGaitSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['GaitSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/GaitSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['GaitSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createGaitSet(gaitSet: models.GaitSet | null) {
    const cache = this.cache['GaitSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (gaitSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', gaitSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/GaitSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(gaitSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deleteGaitSet(id: number | null) {
    const cache = this.cache['GaitSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/GaitSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getGaitSetById(id: number | null) {
    const cache = this.cache['GaitSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/GaitSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updateGaitSet(id: number | null, gaitSet: models.GaitSet | null) {
    const cache = this.cache['GaitSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (gaitSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', gaitSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/GaitSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(gaitSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], gaitSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return gaitSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getHandwritingSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['HandwritingSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/HandwritingSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['HandwritingSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createHandwritingSet(handwritingSet: models.HandwritingSet | null) {
    const cache = this.cache['HandwritingSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (handwritingSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', handwritingSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/HandwritingSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(handwritingSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deleteHandwritingSet(id: number | null) {
    const cache = this.cache['HandwritingSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/HandwritingSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getHandwritingSetById(id: number | null) {
    const cache = this.cache['HandwritingSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/HandwritingSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updateHandwritingSet(id: number | null, handwritingSet: models.HandwritingSet | null) {
    const cache = this.cache['HandwritingSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (handwritingSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', handwritingSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/HandwritingSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(handwritingSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], handwritingSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return handwritingSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getIrisSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['IrisSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/IrisSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['IrisSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createIrisSet(irisSet: models.IrisSet | null) {
    const cache = this.cache['IrisSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (irisSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', irisSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/IrisSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(irisSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deleteIrisSet(id: number | null) {
    const cache = this.cache['IrisSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/IrisSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getIrisSetById(id: number | null) {
    const cache = this.cache['IrisSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/IrisSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updateIrisSet(id: number | null, irisSet: models.IrisSet | null) {
    const cache = this.cache['IrisSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (irisSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', irisSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/IrisSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(irisSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], irisSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return irisSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getKeyboardSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['KeyboardSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/KeyboardSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['KeyboardSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createKeyboardSet(keyboardSet: models.KeyboardSet | null) {
    const cache = this.cache['KeyboardSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (keyboardSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', keyboardSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/KeyboardSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(keyboardSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deleteKeyboardSet(id: number | null) {
    const cache = this.cache['KeyboardSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/KeyboardSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getKeyboardSetById(id: number | null) {
    const cache = this.cache['KeyboardSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/KeyboardSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updateKeyboardSet(id: number | null, keyboardSet: models.KeyboardSet | null) {
    const cache = this.cache['KeyboardSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (keyboardSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', keyboardSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/KeyboardSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(keyboardSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], keyboardSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return keyboardSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getKeystrokeDatasetSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['KeystrokeDatasetSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/KeystrokeDatasetSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['KeystrokeDatasetSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createKeystrokeDatasetSet(keystrokeDatasetSet: models.KeystrokeDatasetSet | null) {
    const cache = this.cache['KeystrokeDatasetSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (keystrokeDatasetSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', keystrokeDatasetSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/KeystrokeDatasetSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(keystrokeDatasetSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deleteKeystrokeDatasetSet(id: number | null) {
    const cache = this.cache['KeystrokeDatasetSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/KeystrokeDatasetSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getKeystrokeDatasetSetById(id: number | null) {
    const cache = this.cache['KeystrokeDatasetSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/KeystrokeDatasetSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updateKeystrokeDatasetSet(id: number | null, keystrokeDatasetSet: models.KeystrokeDatasetSet | null) {
    const cache = this.cache['KeystrokeDatasetSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (keystrokeDatasetSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', keystrokeDatasetSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/KeystrokeDatasetSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(keystrokeDatasetSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], keystrokeDatasetSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return keystrokeDatasetSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getKeystrokeSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['KeystrokeSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/KeystrokeSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['KeystrokeSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createKeystrokeSet(keystrokeSet: models.KeystrokeSet | null) {
    const cache = this.cache['KeystrokeSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (keystrokeSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', keystrokeSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/KeystrokeSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(keystrokeSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deleteKeystrokeSet(id: number | null) {
    const cache = this.cache['KeystrokeSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/KeystrokeSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getKeystrokeSetById(id: number | null) {
    const cache = this.cache['KeystrokeSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/KeystrokeSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updateKeystrokeSet(id: number | null, keystrokeSet: models.KeystrokeSet | null) {
    const cache = this.cache['KeystrokeSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (keystrokeSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', keystrokeSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/KeystrokeSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(keystrokeSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], keystrokeSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return keystrokeSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getLanguageSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['LanguageSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/LanguageSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['LanguageSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createLanguageSet(languageSet: models.LanguageSet | null) {
    const cache = this.cache['LanguageSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (languageSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', languageSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/LanguageSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(languageSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deleteLanguageSet(id: number | null) {
    const cache = this.cache['LanguageSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/LanguageSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getLanguageSetById(id: number | null) {
    const cache = this.cache['LanguageSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/LanguageSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updateLanguageSet(id: number | null, languageSet: models.LanguageSet | null) {
    const cache = this.cache['LanguageSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (languageSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', languageSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/LanguageSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(languageSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], languageSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return languageSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getPalmprintSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['PalmprintSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/PalmprintSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['PalmprintSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createPalmprintSet(palmprintSet: models.PalmprintSet | null) {
    const cache = this.cache['PalmprintSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (palmprintSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', palmprintSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/PalmprintSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(palmprintSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deletePalmprintSet(id: number | null) {
    const cache = this.cache['PalmprintSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/PalmprintSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getPalmprintSetById(id: number | null) {
    const cache = this.cache['PalmprintSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/PalmprintSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updatePalmprintSet(id: number | null, palmprintSet: models.PalmprintSet | null) {
    const cache = this.cache['PalmprintSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (palmprintSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', palmprintSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/PalmprintSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(palmprintSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], palmprintSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return palmprintSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getPersonSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['PersonSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/PersonSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['PersonSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createPersonSet(personSet: models.PersonSet | null) {
    const cache = this.cache['PersonSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (personSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', personSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/PersonSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(personSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deletePersonSet(id: number | null) {
    const cache = this.cache['PersonSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/PersonSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getPersonSetById(id: number | null) {
    const cache = this.cache['PersonSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/PersonSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updatePersonSet(id: number | null, personSet: models.PersonSet | null) {
    const cache = this.cache['PersonSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (personSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', personSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/PersonSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(personSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], personSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return personSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getSampleDatasetSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['SampleDatasetSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SampleDatasetSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['SampleDatasetSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createSampleDatasetSet(sampleDatasetSet: models.SampleDatasetSet | null) {
    const cache = this.cache['SampleDatasetSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (sampleDatasetSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', sampleDatasetSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SampleDatasetSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(sampleDatasetSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deleteSampleDatasetSet(id: number | null) {
    const cache = this.cache['SampleDatasetSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SampleDatasetSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getSampleDatasetSetById(id: number | null) {
    const cache = this.cache['SampleDatasetSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SampleDatasetSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updateSampleDatasetSet(id: number | null, sampleDatasetSet: models.SampleDatasetSet | null) {
    const cache = this.cache['SampleDatasetSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (sampleDatasetSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', sampleDatasetSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SampleDatasetSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(sampleDatasetSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], sampleDatasetSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return sampleDatasetSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getSampleSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['SampleSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SampleSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['SampleSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createSampleSet(sampleSet: models.SampleSet | null) {
    const cache = this.cache['SampleSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (sampleSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', sampleSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SampleSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(sampleSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deleteSampleSet(id: number | null) {
    const cache = this.cache['SampleSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SampleSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getSampleSetById(id: number | null) {
    const cache = this.cache['SampleSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SampleSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updateSampleSet(id: number | null, sampleSet: models.SampleSet | null) {
    const cache = this.cache['SampleSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (sampleSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', sampleSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SampleSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(sampleSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], sampleSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return sampleSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getSampleTypeSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['SampleTypeSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SampleTypeSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['SampleTypeSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createSampleTypeSet(sampleTypeSet: models.SampleTypeSet | null) {
    const cache = this.cache['SampleTypeSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (sampleTypeSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', sampleTypeSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SampleTypeSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(sampleTypeSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deleteSampleTypeSet(id: number | null) {
    const cache = this.cache['SampleTypeSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SampleTypeSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getSampleTypeSetById(id: number | null) {
    const cache = this.cache['SampleTypeSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SampleTypeSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updateSampleTypeSet(id: number | null, sampleTypeSet: models.SampleTypeSet | null) {
    const cache = this.cache['SampleTypeSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (sampleTypeSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', sampleTypeSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SampleTypeSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(sampleTypeSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], sampleTypeSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return sampleTypeSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getSignatureSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['SignatureSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SignatureSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['SignatureSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createSignatureSet(signatureSet: models.SignatureSet | null) {
    const cache = this.cache['SignatureSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (signatureSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', signatureSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SignatureSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(signatureSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deleteSignatureSet(id: number | null) {
    const cache = this.cache['SignatureSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SignatureSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getSignatureSetById(id: number | null) {
    const cache = this.cache['SignatureSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SignatureSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updateSignatureSet(id: number | null, signatureSet: models.SignatureSet | null) {
    const cache = this.cache['SignatureSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (signatureSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', signatureSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SignatureSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(signatureSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], signatureSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return signatureSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getSpeechSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['SpeechSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SpeechSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['SpeechSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createSpeechSet(speechSet: models.SpeechSet | null) {
    const cache = this.cache['SpeechSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (speechSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', speechSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SpeechSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(speechSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deleteSpeechSet(id: number | null) {
    const cache = this.cache['SpeechSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SpeechSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getSpeechSetById(id: number | null) {
    const cache = this.cache['SpeechSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SpeechSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updateSpeechSet(id: number | null, speechSet: models.SpeechSet | null) {
    const cache = this.cache['SpeechSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (speechSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', speechSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/SpeechSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(speechSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], speechSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return speechSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getTextSets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null) {
    const cache = this.cache['TextSets'];
    const state = `${filter}-${top}-${skip}-${orderby}-${count}-${expand}`;

    if (cache && state == cache.state) {
      const result = cache.result.getValue();
      cache.result.unsubscribe();
      cache.result = new BehaviorSubject(result);
      return cache.result;
    }

    const headers = new Headers();

    headers.append('Accept', 'application/json');

    const search = new URLSearchParams('', new PlusQueryEncoder());
    if (filter) {
      search.set('$filter', filter);
    }
    if (top != null) {
      search.set('$top', top.toString());
    }
    if (skip != null) {
      search.set('$skip', skip.toString());
    }
    if (orderby) {
      search.set('$orderby', orderby);
    }
    if (count != null) {
      search.set('$count', count.toString());
    }
    if (expand) {
      search.set('$expand', expand);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/TextSets`), {
      method: 'get',
      search,
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          const result = new BehaviorSubject(response.json());
          this.cache['TextSets'] = { state, result };
          return result;
        }
      }
    })
    .switchMap(result => result)
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  createTextSet(textSet: models.TextSet | null) {
    const cache = this.cache['TextSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (textSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', textSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/TextSets`), {
      method: 'post',
      headers,
      body: JSON.stringify(textSet)
    })
    .map(response => {
      switch (response.status) {
        case 201: {
          const result = response.json();
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = [...cacheResult.value, result];
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] + 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] + 1;
            }
            cache.result.next(cacheResult);
          }
          return result;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  deleteTextSet(id: number | null) {
    const cache = this.cache['TextSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/TextSets(${id})`), {
      method: 'delete',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            cacheResult.value = cacheResult.value.filter(item => item.Id != id);
            if (cacheResult.hasOwnProperty('@odata.count')) {
              cacheResult['@odata.count'] = cacheResult['@odata.count'] - 1;
            } else if (cacheResult.hasOwnProperty('odata.count')) {
              cacheResult['odata.count'] = +cacheResult['odata.count'] - 1;
            }
            cache.result.next(cacheResult);
          }
          return {};
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  getTextSetById(id: number | null) {
    const cache = this.cache['TextSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/TextSets(${id})`), {
      method: 'get',
      headers
    })
    .map(response => {
      switch (response.status) {
        case 200: {
          return response.json();
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }

  updateTextSet(id: number | null, textSet: models.TextSet | null) {
    const cache = this.cache['TextSets'];
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (textSet.hasOwnProperty('@odata.etag')) {
    headers.append('If-Match', textSet['@odata.etag']);
    }

    return this.http.request(Location.joinWithSlash(`${this.basePath}`, `/TextSets(${id})`), {
      method: 'patch',
      headers,
      body: JSON.stringify(textSet)
    })
    .map(response => {
      switch (response.status) {
        case 204: {
          if (cache) {
            const cacheResult = cache.result.getValue();
            const index = cacheResult.value.findIndex(item => item.Id == id);
            cacheResult.value = [
              ...cacheResult.value.slice(0, index),
              Object.assign({}, cacheResult.value[index], textSet),
              ...cacheResult.value.slice(index + 1)
            ];
            cache.result.next(cacheResult);
          }
          return textSet;
        }
      }
    })
    .catch(response => {
      return Observable.throw(response.json());
    });
  }
}
