import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="";
  password="";

  accountDetails:any={
    userone:{acno:1000,balance:10000,username:"userone",password:"testuser"},

    usertwo:{acno:1001,balance:1000,username:"usertwo",password:"testuser2"},

    userthree:{acno:1002,balance:1500,username:"userthree",password:"testuser3"}
  }

  constructor() { }

  ngOnInit(): void {
  }

  onUsernameChange(event:any){
    this.username=event.target.value;
  }

  onPasswordChange(event:any){
    this.password=event.target.value;
  }

  login(){
    let res =this.authenticateUser(this.username,this.password)
            if(res==1){

                alert("Successful Login");
                //window.location.href="bankpg1.html";
            }

            else if(res==0){
                alert("Invalid password");

            }
            else if(res==-1){
                
                alert("Invalid username");

            }   
  }

  authenticateUser=(uname:string,pwd:string)=>{

    let dataset=this.accountDetails;

    if(uname in dataset){
        if(pwd===dataset[uname].password){
            
            return 1;
        }
        else{
            return 0;
            
        }
    }
    else{
         return -1;
    }

}
}
