import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MysqlQueryService, SaiHandlerService } from '@keira/shared/core';

@Injectable()
export class SaiGameobjectHandlerService extends SaiHandlerService {
  /* istanbul ignore next */ // because of: https://github.com/gotwarlost/istanbul/issues/690
  constructor(
    protected router: Router,
    readonly queryService: MysqlQueryService,
  ) {
    super(router, queryService);
  }
}
