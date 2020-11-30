import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalConfigService {
  constructor(private restApiService: RestApiService) {}
  public header: Observable<any> = new Observable();

  getGlobalConfig() {
    return this.restApiService.getPageBySlug('global-configurations');
  }
}
