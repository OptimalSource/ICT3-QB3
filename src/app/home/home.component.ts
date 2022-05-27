import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  bookData = [];
  paginationArray = [1, 2, 3, 4, 5];
  paginationNumber = 1;
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getBookData(this.paginationNumber).subscribe(
      (data: any) => {
        this.bookData = data.data;
        console.log(this.bookData);
      }
    )
  }
  updatePage(id: number){
    this.paginationNumber = id;
    this.bookService.getBookData(this.paginationNumber).subscribe(
      (data: any) => {
        this.bookData = data.data;
        console.log(this.bookData);
      }
    )
  }
  previousPage(id: number){
    this.paginationNumber--;
    this.bookService.getBookData(this.paginationNumber).subscribe(
      (data: any) => {
        this.bookData = data.data;
        console.log(this.bookData);
      }
    )
  }
  nextPage(id: number){
    this.paginationNumber++;
    this.bookService.getBookData(this.paginationNumber).subscribe(
      (data: any) => {
        this.bookData = data.data;
        console.log(this.bookData);
      }
    )
  }
  updateBookServiceId(id: number){
    this.bookService.bookId = id;
    this.router.navigate(['detail']);
  }
}
