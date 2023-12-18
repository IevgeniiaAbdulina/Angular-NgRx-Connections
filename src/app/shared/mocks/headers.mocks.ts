import { HttpHeaders } from '@angular/common/http';

export interface RequestHeaders {
  'rs-uid': string; // user identifier received after successful authentication
  'rs-email': string; // user email
  Authorization: string; // Bearer <TOKEN>, where <TOKEN>
  // is token value received after successful authentication
}

export const requestHeaders = new HttpHeaders({
  'rs-uid': '836558e4jnn',
  'rs-email': 'user_abdulina@user.com',
  Authorization: 'Bearer ed15hm8d20m'
});

export const userID = '836558e4jnn';
