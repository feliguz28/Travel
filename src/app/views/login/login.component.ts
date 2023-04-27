import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, UntypedFormControl, UntypedFormGroup } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  hide = true;

  login = new UntypedFormGroup({
    user: new UntypedFormControl('',Validators.required),
    password: new UntypedFormControl('',Validators.required),
	});
  

  constructor(private router: Router){}
  

  ngOnInit(): void {    
  }

  goToAdmin(){
    this.router.navigate(['admin']);
  }

}
