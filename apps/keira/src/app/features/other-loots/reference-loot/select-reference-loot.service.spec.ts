import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MysqlQueryService } from '@keira/shared/core';
import { MockedMysqlQueryService } from '@keira/shared/test-utils';
import { instance } from 'ts-mockito';
import { ReferenceLootHandlerService } from './reference-loot-handler.service';
import { SelectReferenceLootService } from './select-reference-loot.service';

describe('SelectReferenceLootService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: MysqlQueryService, useValue: instance(MockedMysqlQueryService) },
        SelectReferenceLootService,
        ReferenceLootHandlerService,
      ],
    }),
  );

  it('should be created', () => {
    expect(TestBed.inject(SelectReferenceLootService)).toBeTruthy();
  });
});
