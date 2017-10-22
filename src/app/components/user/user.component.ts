import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  name:string;
  age:number;
  email:string;
  address:address;
  hobbies:string[]=["coding","eating","sleeping"];
  pincode:any;
  i:any;
  check:boolean = false;
  posts:posts[];

  constructor(private dataservice:DataService) { 
    console.log("constructor called");
   
  }
  
  

  ngOnInit() {
    console.log("ngoninit called");
    this.name = "Abin";
    this.age = 24;
    this.email = "abinjoseim@gmail.com";
    this.address = {
      street : "vazhakulam",
      city : "Muvattupzuha",
      state : "ernakulam",
    }
    
    this.dataservice.getData().subscribe((posts)=>{
      this.posts = posts; 
    });
  }

  addhobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  removehobby(hobby){
    console.log(hobby);
    this.i = 0;
    this.hobbies.forEach(hoby => {
     if(hoby == hobby){
        this.hobbies.splice(this.i,1);
     }
     this.i = this.i+1;
    });
  }

  editUser(){
    this.check = !this.check;
  }

}

interface address{
  street:string;
  city:string;
  state:string;
}

interface posts{
  title:string;
  userId:number;
  id:number;
  body:string;
}