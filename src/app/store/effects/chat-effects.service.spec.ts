import { TestBed } from '@angular/core/testing';

import { ChatEffectsService } from './chat-effects.service';

describe('MessagesEffectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatEffectsService = TestBed.get(ChatEffectsService);
    expect(service).toBeTruthy();
  });
});
