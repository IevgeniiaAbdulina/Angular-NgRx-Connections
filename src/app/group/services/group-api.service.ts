import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { requestHeaders } from 'src/app/shared/mocks/headers.mocks';
import { BASE_URL } from 'src/app/shared/models/api-variables';
import { ResponseException } from 'src/app/shared/models/response-interface';

import {
  GroupItem,
  GroupPostResponse,
  GroupResponse,
  MessagesOfProvidedGroup,
  SendsNewMessageIntoGroupRequest
} from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupApiService {
  options = {
    headers: requestHeaders
  };

  constructor(private http: HttpClient) {}

  /**
    Retrieves list of available groups which can be used to broadcast messages.
   */
  getGroupList(): Observable<GroupItem[]> {
    return this.http
      .get<GroupResponse>(`${BASE_URL}/groups/list`, this.options)
      .pipe(
        map(response => response.Items),
        catchError(this.handleError<GroupItem[]>('getGroupList'))
      );
  }

  /**
   * Creates new group with specific name. Owner will be able to delete created group.
   */
  createNewGroup(groupName: string): Observable<string> {
    const requestBody = {
      name: groupName
    };
    return this.http
      .post<GroupPostResponse>(
        `${BASE_URL}/groups/create`,
        requestBody,
        this.options
      )
      .pipe(
        map((response: GroupPostResponse) => response.groupID),
        catchError(this.handleError<string>('createNewGroup'))
      );
  }

  /**
   * Deletes group by owner.
   */
  deleteGroupByOner(groupID: string) {
    console.log('Delete item id --> ', groupID);
    return this.http.delete(
      `${BASE_URL}/groups/delete?groupID=${groupID}`,
      this.options
    );
  }

  /**
   * Retrieves messages of provided group.
   */
  getGroupMessages(
    groupID: string,
    since = ''
  ): Observable<MessagesOfProvidedGroup> {
    return this.http.get<MessagesOfProvidedGroup>(
      `${BASE_URL}/groups/read?groupID=${groupID}&since=${since}`,
      this.options
    );
  }

  /**
   * Sends new message into the group channel.
   */
  sendMessageIntoGroupChannel(groupID: string, message: string) {
    const requestBody: SendsNewMessageIntoGroupRequest = {
      groupID,
      message
    };
    return this.http.post(
      `${BASE_URL}/groups/append`,
      requestBody,
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
