import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddItems {

  constructor(private httpClient: HttpClient) { }

  AddItems(formulario: any): Observable<any> {
    return this.httpClient.post(`${environment.server}/api/lists/additems`,formulario).pipe(catchError(this.clientError));
  }

  getProducts(): Observable<any> {
    return this.httpClient.get(`${environment.server}/api/lists/getproducts`).pipe(catchError(this.clientError));
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
