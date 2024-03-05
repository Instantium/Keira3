import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SingleRowEditorComponent } from '@keira/shared/core';
import { SpellDbc } from '@keira/shared/acore-world-model';
import { SpellHandlerService } from '../spell-handler.service';
import { SpellDbcService } from './spell-dbc.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'keira-spell-dbc',
  templateUrl: './spell-dbc.component.html',
})
export class SpellDbcComponent extends SingleRowEditorComponent<SpellDbc> {
  /* istanbul ignore next */ // because of: https://github.com/gotwarlost/istanbul/issues/690
  constructor(
    public editorService: SpellDbcService,
    public handlerService: SpellHandlerService,
  ) {
    super(editorService, handlerService);
  }
}
