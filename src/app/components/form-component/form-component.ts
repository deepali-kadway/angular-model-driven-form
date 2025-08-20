import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  standalone: false,
  templateUrl: './form-component.html',
  styleUrl: './form-component.css'
})
export class FormComponent {
loginForm!: FormGroup;

// We can use a FormBuilder instance via Dependency Injection to create a form group.
constructor(private formBuilderInstance: FormBuilder){
  // create a form group with two form controls: email, password, subscribe
 this.loginForm = this.formBuilderInstance.group({
    email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    subscribe: false,
  })
}

// getter for loginForm email control. This will allow us to access the email control in our html file (in the pre tag)
get email(){
  return this.loginForm.get('email');
}

get password() {
  return this.loginForm.get('password');
}

onSubmit(){
  if (this.loginForm.valid){
console.log('Form Submitted:', this.loginForm.value);
  }
}
}
