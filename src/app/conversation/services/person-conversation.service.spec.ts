import { TestBed } from '@angular/core/testing';

import { PersonConversationService } from './person-conversation.service';

describe('PersonConversationService', () => {
  let service: PersonConversationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonConversationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
