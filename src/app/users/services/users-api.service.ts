import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { requestHeaders } from 'src/app/shared/mocks/headers.mocks';
import { BASE_URL } from 'src/app/shared/models/api-variables';

import {
  ActiveConversations,
  ConversationsOfCurrentUser,
  ConversationWithUserResponse,
  UserItem,
  UserListResponse
} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  options = {
    headers: requestHeaders
  };

  constructor(private http: HttpClient) {}

  /**
   * Retrieves list of participants.
   */
  getParticipantsList(): Observable<UserItem[]> {
    return this.http
      .get<UserListResponse>(`${BASE_URL}/users`, this.options)
      .pipe(map((response: UserListResponse) => response.Items));
  }

  /**
   * Retrieves list of active conversations of current user.
   */
  activeConversationsList(): Observable<ConversationsOfCurrentUser[]> {
    return this.http
      .get<ActiveConversations>(`${BASE_URL}/conversations/list`, this.options)
      .pipe(map((response: ActiveConversations) => response.Items));
  }

  /**
   * Creates conversation with the user.
   */
  createConversationWithUser(
    companion: string
  ): Observable<ConversationWithUserResponse> {
    return this.http.post<ConversationWithUserResponse>(
      `${BASE_URL}/conversations/create`,
      companion,
      this.options
    );
  }
}
