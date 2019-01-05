import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { contact } from './contact';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  ServerUrl = 'localhost:8080/';
  errorData:{};
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };  

  constructor( private http: HttpClient) { 
    
  }
  
   contactForm(formdata: contact) {

    return this.http.post<contact>(this.ServerUrl + '#register', formdata, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

    
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
    
}