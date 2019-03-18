import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  myForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [
          Validators.required,
          Validators.email
      ]],
      password: [ '', [
        Validators.required,
        Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$")
      ] ]
    })
  }


  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  output: any;

  validate(email: HTMLInputElement, password: HTMLInputElement) {
    
    if(email.value.toLowerCase() === "sandman@protonmail.ch" && password.value === "sandman123") {
      this.http.get("http://www.mocky.io/v2/5c76d4923200003521f463fc", {responseType: 'text'}).subscribe( e => this.output = (e));
      this.router.navigate(['/dashboard'])
    } else {
      alert("Failed To Login!");
    }
  }
  


}
