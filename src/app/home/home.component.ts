import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data:any=[]
  id:string=""
  ind!:boolean
  constructor(private http:HttpClient,private router: Router){
    this.dataDisplay()
  }
  dataDisplay(){

    this.http.get("http://localhost:8080/settribe/fir/").subscribe(
      (succ)=>{
        this.data=succ
      },
      (err)=>{
        console.log(err)
      }
    )
  }//http://localhost:8080/settribe/fir/exportcsv
  exportCsv(){
    this.http.get("http://localhost:8080/settribe/fir/exportcsv").subscribe(
      (succ)=>{
       alert("CSV File Created")
      },
      (err)=>{
        console.log(err)
      }
    )
  }
  editData(id:number)
  {
   
    this.router.navigate(['/fir', { data: id }]);
    //this.router.navigateByUrl('/fir', { state: { id:id } });
  }
  deleteData(id:number){
    this.ind=confirm("Are you sure you Want To Delte")
    if(this.ind){
      this.http.get("http://localhost:8080/settribe/fir/delete/"+id).subscribe(
        (succ)=>{
        alert("Delete")
        this.dataDisplay()
        },
        (err)=>{
         console.log(err)
        }
      )
    }
   
  }
}
