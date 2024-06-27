import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { enquiry } from '../Entity/enquiry';
import { Suspect } from '../Entity/Suspect';
import { Complainant } from '../Entity/Complainant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fir',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: './fir.component.html',
  styleUrl: './fir.component.css'
})
export class FirComponent {
  url:string="http://localhost:8080/settribe/"
  dis:any=[]
  navigation:any=[]
  id:any=null
  indicator:boolean=false
  editData:any=[]
  constructor(private http:HttpClient,private router: Router,private route: ActivatedRoute ){
    this.getDistrict();
    this.clk();
    this.editOp();
    if(this.id!=null)
    {
      alert("Edit Data")
      this.dataInEdt()
    }
  }
  editOp(){ 
    this.route.paramMap.subscribe(params => {
      this.id = params.get('data');
    });

    this.http.get("http://localhost:8080/settribe/fir/get-by-id/"+this.id).subscribe(
      (succ)=>{
       
        this.editData=succ
      },
      (err)=>{
        console.log(err)
      }
    )
   
  }
  dataInEdt(){
    console.log(JSON.stringify(this.editData))
    this.dta.get('placeOccurrence')?.setValue(this.editData.placeOccurrence)
    this.dta.get('information')?.setValue(this.editData.complainant.information)
    this.dta.get('district')?.setValue(this.editData.district)
    this.dta.get('name')?.setValue(this.editData.enquiry.name)
    this.dta.get('role')?.setValue(this.editData.enquiry.role)
    this.dta.get('coname')?.setValue(this.editData.complainant.coname)
    this.dta.get('aadharNumber')?.setValue(this.editData.complainant.aadharNumber)
    this.dta.get('dob')?.setValue(this.editData.complainant.dob)
    this.dta.get('occupation')?.setValue(this.editData.complainant.occupation)
    this.dta.get('address')?.setValue(this.editData.complainant.address)
    this.dta.get('mobileNumber')?.setValue(this.editData.complainant.mobileNumber)
    this.dta.get('nationality')?.setValue(this.editData.complainant.nationality)
    this.dta.get('occupation')?.setValue(this.editData.complainant.occupation)
    this.dta.get('susname')?.setValue(this.editData.suspect.name)
    this.dta.get('susaddress')?.setValue(this.editData.suspect.address)
    this.dta.get('fir_Number')?.setValue(this.editData.fir_Number)
    this.data.get('currentDateTime')?.setValue(this.editData.currentDateTime)
  }
  complainant:Complainant=new Complainant()
  enqui:enquiry=new enquiry("","")
  sus:Suspect=new Suspect("","")
  dta:FormGroup =new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    role:new FormControl('',[Validators.required]),
    coname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    dob:new FormControl('',[Validators.required]),
    aadharNumber:new FormControl('',[Validators.required,Validators.maxLength(12),Validators.minLength(12),Validators.pattern('[0-9]*')]),
    occupation:new FormControl('',[Validators.required]),
    mobileNumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]),
    nationality:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    address:new FormControl('',[Validators.required]),
    information:new FormControl('',[Validators.required]),
    district:new FormControl('',[Validators.required]),
    susname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    susaddress:new FormControl('',[Validators.required]),
    placeOccurrence:new FormControl('',[Validators.required]),
    fir_Number:new FormControl(null)
  })
  get getName():any{
    return this.dta.get('name')
  }
  get getRole():any{
    return this.dta.get('role')
  }
  get getConame():any{
    return this.dta.get('coname')
  }
  get getdob():any{
    return this.dta.get('dob')
  }
  get getAadharNumber():any{
    return this.dta.get('aadharNumber')
  }
  get grtOccupation():any{
    return this.dta.get('occupation')
  }
  get getMobileNumber():any{
    return this.dta.get('mobileNumber')
  }
  get getNationality():any{
    return this.dta.get('nationality')
  }
  get getAddress():any{
    return this.dta.get('address')
  }
  get getInformation():any{
    return this.dta.get('information')
  }
  get getDistricterr():any{
    return this.dta.get('district')
  }
  get getSusname():any{
    return this.dta.get('susname')
  }
  get getSusaddress():any{
    return this.dta.get('susaddress')
  }
  get getPlaceOccurrence():any{
    return this.dta.get('placeOccurrence')
  }
  

  data:FormGroup=new FormGroup({
    enquiry:new FormControl(this.enqui),
    district:new FormControl(null),
    suspect:new FormControl(this.sus),
    complainant:new FormControl(this.complainant),
    currentDateTime:new FormControl(null),
    fir_Number:new FormControl(null),
    placeOccurrence:new FormControl('')
  })
  

  clk(){
    this.data.get('fir_Number')?.setValue(this.dta.get('fir_Number')?.value)
    this.data.get('district')?.setValue(this.dta.get('district')?.value)
    
    this.data.get('placeOccurrence')?.setValue(this.dta.get('placeOccurrence')?.value)
    this.data.get('enquiry')?.setValue(new enquiry(this.dta.get('name')?.value,this.dta.get('role')?.value))
    this.data.get('suspect')?.setValue(new Suspect(this.dta.get('susname')?.value,this.dta.get('susaddress')?.value))
    this.data.get('complainant')?.setValue(new Complainant(this.dta.get('coname')?.value,this.dta.get('dob')?.value,this.dta.get('aadharNumber')?.value,this.dta.get('occupation')?.value,this.dta.get('mobileNumber')?.value,this.dta.get('nationality')?.value,this.dta.get('address')?.value,this.dta.get('information')?.value,))
  }
  getDistrict(){
    this.http.get(this.url+"get-dist").subscribe(
      (succ)=>{
        this.dis=succ
      },
      (err)=>{
        console.log(err)
      }
    )
  }
  submitt(fm:FormGroup){
    this.clk()
    this.indicator=true
    if(this.dta.valid){
    this.http.post("http://localhost:8080/settribe/fir/sub-data",fm.value).subscribe(
      (succ)=>{
        alert("Fir Consider")
        this.router.navigateByUrl('/');
      },
      (err)=>{
        console.log(err)
      }
    )
    }
   

  }
}


