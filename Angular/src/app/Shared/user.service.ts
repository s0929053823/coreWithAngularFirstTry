import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseUrl = 'http://localhost:51558/api';

  formModel = this.fb.group(
    {
      UserName: ['', Validators.required],
      Email: ['', [Validators.email, Validators.required]],
      Passwords: this.fb.group({
        Password: ['', [Validators.required, Validators.minLength(6)]],
        ConfirmPassword: ['', Validators.required]
      }, { validator: this.comparePasswords }
      )
    }
  )

  comparePasswords(fb: FormGroup) {
    let confirmPasswordControl = fb.get('ConfirmPassword');

    if (confirmPasswordControl.errors == null || 'passwordMismatch' in confirmPasswordControl.errors) {
      if (fb.get('Password').value != confirmPasswordControl.value)
        confirmPasswordControl.setErrors({ passwordMismatch: true })
      else
        confirmPasswordControl.setErrors(null)

    }

  }

  register() {
    console.log(this.formModel.value);
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseUrl + '/ApplicationUser/Register',body);
  }
}
