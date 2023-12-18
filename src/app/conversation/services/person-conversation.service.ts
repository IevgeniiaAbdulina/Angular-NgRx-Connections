import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { requestHeaders } from 'src/app/shared/mocks/headers.mocks';
import { BASE_URL } from 'src/app/shared/models/api-variables';
import { ResponseException } from 'src/app/shared/models/response-interface';

import {
  ConversationItem,
  ConversationPostRequest,
  ConversationResponse
} from '../models/conversation';

@Injectable({
  providedIn: 'root'
})
export class PersonConversationService {
  options = {
    headers: requestHeaders
  };

  constructor(private http: HttpClient) {}

  /**
   * Received messages of provided conversation.
   */
  getMessagesOfConversation(
    conversationID: string,
    since?: number
  ): Observable<ConversationItem[]> {
    return this.http
      .get<ConversationResponse>(
        `${BASE_URL}/conversations/read?conversationID=${conversationID}&since=${since}`
      )
      .pipe(
        map((response: ConversationResponse) => response.Items),
        catchError(
          this.handleError<ConversationItem[]>('getMessagesOfConversation')
        )
      );
  }

  /**
   * Sends new message to the partner.
   */
  sendMessageToPartner(conversationID: string, message: string) {
    const requestBody: ConversationPostRequest = {
      conversationID,
      message
    };

    return this.http.post(
      `${BASE_URL}/conversations/append`,
      requestBody,
      this.options
    );
  }

  /**
   * Deletes conversation with the interlocutor.
   */
  deleteConversation(conversationID: string) {
    return this.http.delete(
      `${BASE_URL}/conversations/delete?conversationID=${conversationID}`,
      this.options
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: ResponseException): Observable<T> => {
      // TODO: show snackbar for user
      this.errorLog(`${operation} failed: ${error.message}`);

      // keep running the app and return empty result
      return of(result as T);
    };
  }

  private errorLog(message: string) {
    // TODO: show snackbar for user
    console.log('error log message', message);
    // TODO: --> this.messageService.add(`HeroService: ${message}`);
  }
}
