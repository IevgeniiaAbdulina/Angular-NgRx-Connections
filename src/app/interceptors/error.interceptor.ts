import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { SnackBarService } from '../shared/components/snack-bar/snack-bar.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private snackBarService: SnackBarService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error.status === 400 || error.status === 404) {
          const errorString = error.type ? `Exception: ${error.type},` : '';
          this.snackBarService.showSnackBar(`${errorString} ${error.message}`);
        }
        return throwError(() => error);
      })
    );
  }
}
