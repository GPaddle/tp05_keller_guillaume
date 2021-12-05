import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Account } from '../form/account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  @Input() password: string = "";

  constructor(private formBuilder: FormBuilder, private api: ApiService) {
    this.loginForm = this.formBuilder.group({
      account: this.formBuilder.group({
        login: new FormControl('', Validators.compose([Validators.required, Validators.pattern(`.{5}.*`)])),
        password: new FormControl('', Validators.compose([Validators.required, Validators.pattern(`.{5}.*`)])),
      })
    });

    this.onValueChanges();
  }

  onValueChanges() {
    this.loginForm.valueChanges.subscribe(val => {
      // console.log(val);
    })
  }


  submit() {

    const account = new Account(
      this.loginForm.value.account.login,
      this.loginForm.value.account.password,
    );

    this.api.postLogin(account.login, account.password)
      .subscribe(event => console.log(event));
  }

  ngOnInit(): void { }

}
