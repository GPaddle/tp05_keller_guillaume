import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { UpdatePeople } from '../account/actions/account-actions';
import { ApiService } from '../api.service';
import { Account } from './account';
import { Address } from './address';
import { Contact } from './contact';
import { People } from './people';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  signUpForm: FormGroup;

  @Input() password: string = "";
  people: People;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private store: Store, private router: Router) {
    this.signUpForm = this.formBuilder.group({
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.pattern(`[a-zA-Z]{1,20}`)])),
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.pattern(`[a-zA-Z]{1,20}`)])),
      civility: new FormControl('', Validators.compose([Validators.required, Validators.pattern(`Monsieur|Madame|Nothing`)])),
      address: this.formBuilder.group({
        street: new FormControl('', [Validators.required]),
        postalCode: new FormControl('', Validators.compose([Validators.required, Validators.pattern(`^[0-9]{5}$`)])),
        city: new FormControl('', Validators.compose([Validators.required, Validators.pattern(`^([a-zA-Z\\u0080-\\u024F]+(?:. |-| |'))*[a-zA-Z\\u0080-\\u024F]*$`)])),
        country: new FormControl('', [Validators.required, Validators.pattern(`[A-Z][a-z]+`)])
      }),
      contact: this.formBuilder.group({
        phoneNumber: new FormControl('', Validators.compose([Validators.required, Validators.pattern(`^[0-9]{10}|\\+33[0-9]{9}$`)])),
        email: new FormControl('', [Validators.required, Validators.email])
      }),
      account: this.formBuilder.group({
        login: new FormControl('', Validators.compose([Validators.required, Validators.pattern(`[A-Za-z0-9_]{2}(?:[A-Za-z0-9_]{2,})?`)])),
        password: new FormControl('', Validators.compose([Validators.required, Validators.pattern(`.{5}.*`)])),
        passwordConfirmation: new FormControl('', [Validators.required])
      })
    }, { validators: this.checkPasswords });

    this.onValueChanges();
  }


  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    return group.get('password')?.value === group.get('passwordConfirmation')?.value ?
      null :
      { notSame: true }
  }


  onValueChanges() {
    this.signUpForm.valueChanges.subscribe(val => {
      // console.log(val);
    })
  }

  inPasswordConfirmation: any;

  submit() {
    const address = new Address(
      -1,
      this.signUpForm.value.address.street,
      this.signUpForm.value.address.postalCode,
      this.signUpForm.value.address.city,
      this.signUpForm.value.address.country,
    );
    const contact = new Contact(
      this.signUpForm.value.contact.email,
      this.signUpForm.value.contact.phoneNumber,
    );
    const account = new Account(
      this.signUpForm.value.account.login,
      this.signUpForm.value.account.password,
    );

    let people = new People(
      -1,
      this.signUpForm.value.lastName,
      this.signUpForm.value.firstName,
      this.signUpForm.value.civility,
      [address],
      contact,
      account
    );

    this.api.postRegistration(people)
      .subscribe(event => {

        console.log(event.data.object);

        const APIPeople = People.fromJSON(event.data.object);

        this.store.dispatch(new UpdatePeople(APIPeople));

        if (APIPeople.id) {
          this.api.user_id = APIPeople.id;
        }

        this.people = APIPeople;

        this.router.navigate(['/account']);
      });
  }

  ngOnInit(): void { }

}