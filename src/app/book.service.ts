import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookId = 1;
  isAuthenticated = new Subject<boolean>();
  constructor(private http: HttpClient) { }

  getBookData(page: Number): Observable<any>{
    const url = `http://localhost:3000/books?page=${page}`;
    return this.http.get(url);
  }

  getBookDetailsByTitle(title: string): Observable<any>{
    const url = `http://localhost:3000/details?title=${title}`;
    return this.http.get(url);
  }

  getBookDetailsById(id: number){
    const url = `http://localhost:3000/details?id=${id}`;
    return this.http.get(url);
  }
  getAuthenticate(){
    this.isAuthenticated.next(true);
  }
  getUnAuthenticate(){
    this.isAuthenticated.next(false);
  }
}
