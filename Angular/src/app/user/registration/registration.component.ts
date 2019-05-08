import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit() {
  }

  OnSubmit()
  {
    //console.log("kk")
    this.service.register().subscribe(
      (res:any) => {
        if(res.succeded)
        {
          this.service.formModel.reset();
        }
      },
      err => {
        console.log(err)
      }
    );
   
  }
}
