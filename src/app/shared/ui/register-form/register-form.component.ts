import {Component, inject} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from "@angular/material/select";
import {passwordsMatchValidator} from "../../validators/passwordsMatchValidator";


@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  private _formBuilder = inject(FormBuilder);

  companyInformation = this._formBuilder.group({
    companyName: ['', Validators.required],
    industry: ['', Validators.required],

  });
  personalInformation = this._formBuilder.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6),Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)]

    ],
    passwordConfirmation: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],

  },{
    validators: passwordsMatchValidator()
  });


  onSubmit(){
    console.log(this.companyInformation);
    console.log(this.personalInformation);
  }


  isLinear = false;
}
