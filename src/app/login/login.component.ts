import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  url:string="http://localhost:8080/settribe/"
  str:any=[]
  capcha:boolean=false
  ind:boolean=false
  constructor(private http:HttpClient){
    this.getemailid()
  }
  getemailid(){
    this.http.get(this.url+"captcha").subscribe(
      (succ)=>{
        this.str=succ
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  data:FormGroup =new FormGroup({
    id:new FormControl(null),
    firstName:new FormControl(null),
    lastName:new FormControl(null,[]),
    middleName:new FormControl(null,[]),
    fullName:new FormControl(null),
    mobileNumber:new FormControl(null),
    photo:new FormControl(null,[]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
    capcha:new FormControl(null,[Validators.required])
  })
  get getemail():any{
    return this.data.get('email')
  }
  get getpassword():any{
    return this.data.get('password')
  } 
  get getcapcha():any{
    return this.data.get('capcha') 
  }

  get getmobileNumber():any{
    return this.data.get('mobileNumber')
  }

  login(dta:FormGroup){
    this.ind=true
    if(dta.get('capcha')?.value!=this.str)
    {
      this.capcha=true
      alert("Capcha Not match")
    }
    else if(dta.valid){
      this.http.post(this.url+"login",dta.value).subscribe(
        (succ)=>{
          if(succ==null){
            alert("Not Login")
          }
          else{
            alert("login")
          }
        },
        (err)=>{
          console.log(err)
        }
      )
    }


  }
}
