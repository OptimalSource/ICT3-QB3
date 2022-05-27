import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  form: any;
  bookSearchData = [];
  constructor(private fb: FormBuilder, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required]
    })
  }

  onSubmit(formData: NgForm){
    this.bookService.getBookDetailsByTitle(this.title.value).subscribe(
      (data: any) => {
        this.bookSearchData = data.data;
      }
    )
  }

  get title(){
    return this.form.get('title');
  }
  updateBookServiceId(id: number){
    this.bookService.bookId = id;
    this.router.navigate(['detail']);
  }

}
