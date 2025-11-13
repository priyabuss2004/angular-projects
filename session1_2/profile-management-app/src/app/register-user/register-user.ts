import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register-user',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    MatButtonModule
  ],
  templateUrl: './register-user.html',
  styleUrl: './register-user.scss',
})
export class RegisterUser {
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        label: 'Username',
        placeholder: 'Enter username',
        required: true
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'Enter email',
        required: true
      },
      validators: {
        validation: [Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]
      },
      validation: {
        // show: true,
        messages: {
          required: 'Email required',
          pattern: 'Please enter a valid email address',
        },
      },
    },
    {
      key: 'gender',
      type: 'select',
      templateOptions: {
        label: 'Gender',
        options: [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' }
        ],
        required: true
      }
    },
    {
      key: 'role',
      type: 'select',
      templateOptions: {
        label: 'Role',
        options: [
          { value: 'admin', label: 'Admin' },
          { value: 'user', label: 'User' },
          { value: 'guest', label: 'Guest' }
        ],
        required: true
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Enter password',
        required: true,
        minLength: 6
      }
    },
    {
      key: 'confirmPassword',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Confirm Password',
        placeholder: 'Re-enter password',
        required: true
      }
    },
    {
      key: 'dob',
      type: 'input',
      templateOptions: {
        type: 'date',
        label: 'Date of Birth',
        required: true
      }
    },
    {
      key: 'bio',
      type: 'textarea',
      templateOptions: {
        label: 'Bio',
        placeholder: 'Tell us about yourself',
        rows: 4
      }
    },
    {
      key: 'terms',
      type: 'checkbox',
      templateOptions: {
        label: 'I agree to the terms and conditions',
        required: true
      }
    }
  ];

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.model);
     }
      this.form.reset
  }

}
