import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-insertreg',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,ReactiveFormsModule,RouterModule],
  templateUrl: './insertreg.component.html',
  styleUrl: './insertreg.component.css'
})
export class InsertregComponent {
  imagePreview: string = '';
  uploadedImage!: File;
  loadlogin:boolean=false
  eml:any=[]
  congormpss:string=""
  datacount:number=0
  emlindicator:boolean=false
  indicator:boolean=false
  url:string="http://localhost:8080/settribe/"
  constructor(private http:HttpClient,private router: Router){
    //this.getemailid()
    //this.oncl()
  }
  data =new FormGroup({

    id:new FormControl(null),
    firstName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    lastName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    middleName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    fullName:new FormControl(null),
    mobileNumber:new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10),Validators.minLength(10)]),
    photo:new FormControl(null,[]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
    conformpass:new FormControl('',[Validators.required])
  })
  get getemail():any{
    return this.data.get('email')
  }
  get getpassword():any{
    return this.data.get('password')
  } 
  get getphoto():any{
    return this.data.get('photo') 
  }

  get getmobileNumber():any{
    return this.data.get('mobileNumber')
  }
  get conformpass():any{
    return this.data.get('conformpass')
  }
  get getmiddleName():any{
    return this.data.get('middleName')
  }
  get getlastName():any{
    return this.data.get('lastName')
  }

  get getfirstname():any{
    return this.data.get('firstName')
  }
  subm(post:FormGroup){
    if(this.data.get('conformpass')?.value!=this.data.get('password')?.value){
    
    this.indicator=true
    this.data.controls['conformpass'].setErrors({errorpass:true})
    }
    else if(!post.valid){
      alert("Something Went Wrong")
      this.indicator=true
    }
    else{
    
    alert(post.value)
    this.http.post(this.url+"post-data",post.value).subscribe(
      (succ)=>{
        this.eml=succ
        alert("Insert data")
        this.router.navigate(['/login']);
      },
      (err)=>{
        console.log(err)
        alert("Error In Insert")
      }
    )
  }
  }
    form = new FormGroup({
      image: new FormControl(null)
    })
  onImageSelected(event: any) {
    const file = event.target.files[0];
    this.form.patchValue({ image: file });
    this.form.get('photo')!.updateValueAndValidity();

    // File preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
 
}
