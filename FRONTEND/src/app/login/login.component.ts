import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UpdatePeople } from '../account/actions/account-actions';
import { AccountState } from '../account/states/account-state';
import { ApiService } from '../api.service';
import { Account } from '../form/account';
import { People } from '../form/people';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  @Select(AccountState.getAccount) people$: Observable<People>;

  @Input() password: string = "";

  constructor(private formBuilder: FormBuilder, private api: ApiService, private store: Store, private router: Router) {
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
      .subscribe(event => {
        // console.log(event.data)

        let people: People = People.fromJSON(event.data);
        console.log(people);

        this.store.dispatch(new UpdatePeople(people));

        this.router.navigate(['/account']);
      });
  }

  ngOnInit(): void { }

}
