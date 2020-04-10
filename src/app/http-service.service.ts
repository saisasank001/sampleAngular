import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  serverUrl = '/index.php/';
  imgUrl = 'https://apis.smakky.com/static/images/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  constructor(private http: HttpClient) { }

  getApi(url: any) {
    return this.http.get<any[]>(this.serverUrl + url);
  }

  postApi(json: any, url) {
    return this.http.post<any>(this.serverUrl + url, json, this.httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ` + JSON.stringify(error.error));
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

}
