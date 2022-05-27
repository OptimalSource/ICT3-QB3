import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookService } from '../book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  isLogin: Boolean = false;
  subscription!: Subscription;
  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.subscription = this.bookService.isAuthenticated.subscribe(
      (authenticate: boolean) => {
        this.isLogin = authenticate;
        console.log(this.isLogin);
        if(this.isLogin) this.router.navigate(['home']);
        else this.router.navigate(['']);
      }
    )
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  navigate(str: string){
    if(!this.isLogin) this.router.navigate(['']);
    else {
      this.bookService.getAuthenticate();
      this.router.navigate([str]);
    }
  }
  logout(){
    this.bookService.getUnAuthenticate();
    this.router.navigate(['']);
  }
}
