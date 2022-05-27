import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  id!: number;
  singleBookData = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.id = this.bookService.bookId;
    this.bookService.getBookDetailsById(this.id).subscribe(
      (data: any) => {
        this.singleBookData = data.data;
      }
    )
  }
}
