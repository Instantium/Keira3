import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModelForm } from '@keira/shared/core';
import { SpellDbc } from '@keira/shared/acore-world-model';
import { LOCALES } from './spell-dbc-texts.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'keira-spell-dbc-texts',
  templateUrl: './spell-dbc-texts.component.html',
})
export class SpellDbcTextsComponent {
  readonly LOCALES = LOCALES;
  @Input() formGroup: FormGroup<ModelForm<SpellDbc>>;
}
