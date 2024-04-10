import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
// users:Observable<User[]>;
users:any[]=[];
user:User;
id:number;
constructor(private dataService: DataService,
  private router: Router
){}

ngOnInit(){
  this.user=new User()
  this.reloadData();
}

reloadData(){
  this.dataService.getAll().subscribe((res:any)=>{
    this.users=res;
    console.log(res);
  })
}

deleteUser(id:any){
  this.dataService.deleteUser(id).subscribe((data:any)=>{
    console.log(data);
    this.reloadData();
  },error=>console.log(error))
}

updateUser(id:any){
  this.dataService.updateUser(this.id,this.user).subscribe((data:any)=>{
    this.user=new User();
  })
}
}
