import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogRef } from '@angular/cdk/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { json } from 'stream/consumers';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,ReactiveFormsModule,MatIconModule,MatButtonModule,ToastrModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private _HttpClient:HttpClient,private _FormBuilder:FormBuilder,private _ToastrService:ToastrService){}
  mail:any = 'upskilling.eg1@gmail.com'
  signupForm:FormGroup=this._FormBuilder.group({
    email:['',[Validators.required, Validators.email]],
    phone:['',[Validators.required]],
    name:['',[Validators.required]]
  })
  signup(){
    this._HttpClient.post(`http://upskilling-egypt.com:3001/contact`,this.signupForm.value).subscribe({
      next:(res:any)=>{
        let a = res.message
        console.log(res);
        this._ToastrService.success('email added successfully')
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }



}
