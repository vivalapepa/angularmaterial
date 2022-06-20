import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  form: FormGroup;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router ) { 
    this.form = this.fb.group({
      usuario: ['',Validators.required ],
      password: ['',Validators.required ]
    })
  }

  ngOnInit(): void {
  }
  login(){
    const usuario= this.form.value.usuario;
    const password= this.form.value.password;
    
    if(usuario == 'tomas' && password == 'lovato'){
      // redireccionamos al dashboard  
      this.fakeloading()
      console.log('correcto') 
    } else{
      //mostramos mensaje de error
      this.error()
      console.log('incorrecto')
      this.form.reset
      
      
    }

  }
  error(){
    this._snackBar.open('pusiste cualquier cosa','',
    {duration: 5000, horizontalPosition: 'center',
    verticalPosition:'bottom'})
  }
  fakeloading(){
    this.loading= true;
    setTimeout(() => {
      //redireccionamos al dashboard

      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
