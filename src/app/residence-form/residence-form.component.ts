import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../core/services/residence.service';

@Component({
  selector: 'app-residence-form',
  templateUrl: './residence-form.component.html',
  styleUrls: ['./residence-form.component.css']
})
export class ResidenceFormComponent {

resForm!:FormGroup;
constructor(private rs:ResidenceService){}
  ngOnInit(){

    this.resForm= new FormGroup({
      name: new FormControl('',[Validators.required,Validators.pattern("^[A-Z][a-z]+$")]),
      address: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(25)]),
      image: new FormControl('',Validators.required),
      status: new FormControl('',Validators.required),

    })

  }

  get name(){
    return this.resForm.get('name');
  }

  
  get address(){
    return this.resForm.get('address');
  }

  getFormValue(){
    return console.log(this.resForm.value)
  }


  add(){
    this.rs.addResidence(this.resForm.value).subscribe(()=>alert("addes with succes"))
  }
}
