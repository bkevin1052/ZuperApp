import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewItems {

  constructor(private httpClient: HttpClient) { }

  editarLista(formulario: any): Observable<any> {
    return this.httpClient.post(`${environment.server}/api/lists/editlist`,formulario).pipe(catchError(this.clientError));
  }

  getItems(formulario: any): Observable<any> {
    return this.httpClient.post(`${environment.server}/api/lists/getitems`,formulario).pipe(catchError(this.clientError));
  }

  clientError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
  }
}
