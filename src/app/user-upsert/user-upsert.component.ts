import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.css']
})
export class UserUpsertComponent implements OnInit{

  submitted = false;

  userForm:FormGroup=new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl('')
  })

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){
    this.userForm=this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(5)]],
      lastName:['',[Validators.required,Validators.minLength(5)]],
      address:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]  
    })

  }

  get f(){
    return this.userForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.userForm.invalid){
      return;
    }
    console.log(JSON.stringify(this.userForm.value))
  }

  onReset(){
    this.submitted=false;
    this.userForm.reset();
  }

}
