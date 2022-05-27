import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any;
  isCredentialsValid = true
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onLogin(formData: NgForm){
    this.isCredentialsValid = true;
    if(this.email.value === '' || this.email.value !== 'test@test.com') this.isCredentialsValid = false;
    if(this.password.value === '' || this.password.value !== 'test123') this.isCredentialsValid = false;
    if(!this.isCredentialsValid) return;
    this.isCredentialsValid = true;
    this.bookService.getAuthenticate();
    this.router.navigate(['home']);
  }

  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }

}
