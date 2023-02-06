import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Book } from '../Models/Book.model';

@Injectable({
    providedIn: 'root'
  })
  export class BookService {
  
    baseApiUrl: string = environment.baseApiUrl;
  
    constructor(private http: HttpClient) { }
  
    GetAllBook(): Observable<Book[]>{
      return this.http.get<Book[]>(this.baseApiUrl + '/api/Book/GetAllBook');
    }
  
    AddBook(addBookRequest:Book): Observable<Book>{
      return this.http.post<Book>(this.baseApiUrl + '/api/Book/SaveBook',addBookRequest);
    }
  
  
  }
  
