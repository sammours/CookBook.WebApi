import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { germanPostalCodeValidator } from '../../custom-validators/postal-code.validator';

@Component({
  selector: 'cb-insert-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './insert-user.component.html',
  styleUrl: './insert-user.component.scss'
})
export class InsertUserComponent {
  protected user = new User();
  protected test = new FormControl('Hello');

  protected formGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    age: new FormControl(0, [Validators.required, Validators.min(18)]),
    postalCode: new FormControl('', [Validators.required, germanPostalCodeValidator()]),
  });

  protected formGroupFromFormBuilder: FormGroup;

  protected firstNameControl = new FormControl('', Validators.required);
  
  constructor(private readonly formBuilder: FormBuilder) {
    this.user.firstName = 'Jens';
    this.user.lastName = 'Kuehlner';
    this.user.email = 'x@email.com';
    this.user.age = 16;
    this.user.address.postalCode = '71100';
    this.firstNameControl.setValue(this.user.firstName);

    this.formGroupFromFormBuilder = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['']
    });

    // this.formGroup = new FormGroup({
    //   firstName: new FormControl(this.user.firstName),
    //   lastName: new FormControl(this.user.lastName),
    //   email: new FormControl(this.user.email),
    //   age: new FormControl(this.user.age),
    // });

    // Alternative
    this.formGroup.controls.firstName.setValue(this.user.firstName);
    this.formGroup.controls.lastName.setValue(this.user.lastName);
    this.formGroup.controls.email.setValue(this.user.email);
    this.formGroup.controls.age.setValue(this.user.age);
    this.formGroup.controls.postalCode.setValue(this.user.address.postalCode);

    this.formGroup.controls.postalCode.pristine
    this.formGroup.controls.postalCode.dirty

    this.formGroup.controls.postalCode.touched
    this.formGroup.controls.postalCode.untouched
    
    this.formGroup.controls.postalCode.valid
    this.formGroup.controls.postalCode.invalid
  }

  protected onSaveClicked() {
    if (this.formGroup.controls.firstName.value) {
      this.user.firstName = this.formGroup.controls.firstName.value ;
    }

    if (this.formGroup.controls.lastName.value) {
      this.user.lastName = this.formGroup.controls.lastName.value ;
    }

    if (this.formGroup.controls.email.value) {
      this.user.email = this.formGroup.controls.email.value ;
    }

    if (this.formGroup.controls.age.value) {
      this.user.age = this.formGroup.controls.age.value ;
    }

    if (this.formGroup.controls.postalCode.value) {
      this.user.address.postalCode = this.formGroup.controls.postalCode.value ;
    }

    // call server with User
  }
}

/**
Book {
    title  string => required
    description  string => required
    author  string => required
    isbn  string => required, custom isbn validator
    date  Date | undefined
    address BookAddress
    versions  BookVersion
}

BookAddress {
  street string => required
  city string => required
}

BookAddress {
  version string
  date  Date | undefined
}
 * 
 * Reactive form mit initialen Values
 * Click auf Speicher button werden die Values in dem Buchobjekt eingesetzt
 * Das Buch nach dem Speichern anzeigen
 */
