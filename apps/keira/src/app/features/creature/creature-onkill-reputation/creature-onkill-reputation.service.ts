import { Injectable } from '@angular/core';
import { MysqlQueryService, SingleRowEditorService } from '@keira/shared/core';
import { CREATURE_ONKLL_REPUTATION_ID, CREATURE_ONKLL_REPUTATION_TABLE, CreatureOnkillReputation } from '@keira/shared/acore-world-model';
import { ToastrService } from 'ngx-toastr';
import { CreatureHandlerService } from '../creature-handler.service';

@Injectable()
export class CreatureOnkillReputationService extends SingleRowEditorService<CreatureOnkillReputation> {
  /* istanbul ignore next */ // because of: https://github.com/gotwarlost/istanbul/issues/690
  constructor(
    protected handlerService: CreatureHandlerService,
    readonly queryService: MysqlQueryService,
    protected toastrService: ToastrService,
  ) {
    super(
      CreatureOnkillReputation,
      CREATURE_ONKLL_REPUTATION_TABLE,
      CREATURE_ONKLL_REPUTATION_ID,
      null,
      false,
      handlerService,
      queryService,
      toastrService,
    );
  }
}
