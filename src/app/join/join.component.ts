import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  myForm: FormGroup;
  valid: string;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      user: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern("^[A-Za-z ]+$")
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$")
      ]],

      agree: [false, [
        Validators.requiredTrue
      ]]

    })
  }

  get user() {
    return this.myForm.get("user");
  }

  get email() {
    return this.myForm.get("email");
  }

  get password() {
    return this.myForm.get("password");
  }

  get agree() {
    return this.myForm.get("agree");
  }

  
  create() {
    this.valid = "Registered...";
  }

}
