import { TestBed } from '@angular/core/testing';

import { AdminEffectsService } from './admin-effects.service';

describe('AdminEffectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminEffectsService = TestBed.get(AdminEffectsService);
    expect(service).toBeTruthy();
  });
});
