import { Component } from '@angular/core';
import {FormBuilder,Validators,FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'r-form';
  UForm; 
  user=[];
  constructor(private form:FormBuilder) {
    
    this.UForm = this.form.group({
      'Name' : this.form.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
      'Mail':this.form.control('',[Validators.required,Validators.maxLength(50),Validators.minLength(10),(Validators.pattern('[a-z0-9.@]*'))]),
      'age' : this.form.control('',[Validators.required,Validators.min(10),Validators.max(80)]),
      'Gender':this.form.control('',Validators.required),
      'Marital_Status':this.form.control('',Validators.required),
      'region' : this.form.control('USA'),
    })
  }
 
  ngOnInit() {
    
  }
  submit(form: FormGroup){
    this.user.push(form.value);    
        this.formReset(form)
   }
   formReset(formL: FormGroup){
    this.UForm.reset(formL)
  }
}
