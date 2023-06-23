import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })

  constructor(private fb: FormBuilder) {}

  handleSubmit() {
    console.log(this.form.value);

    // this.form.patchValue({
    //   email: ''
    // })

    // this.form.setValue({
    //   email: '',
    //   password: '',
    // })
  
    this.form.reset();


  }

}

