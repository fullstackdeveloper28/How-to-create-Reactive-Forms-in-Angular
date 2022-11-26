import { ViewCompiler } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 myReactiveForm:FormGroup|any;
  title = 'ReactiveFormDemo';

  ngOnInit(): void {
   this.myReactiveForm=new FormGroup(
     {
       'Details':new FormGroup(
         {
          'lastName': new FormControl(null),
          'email': new FormControl(null,[Validators.required,Validators.email]),
         }
       ),
       'firstName': new FormControl(null,Validators.required),
     
       'countory': new FormControl('india')
     }
   )
  }
  OnSubmit()
  {
    console.log(this.myReactiveForm);
  }
}
