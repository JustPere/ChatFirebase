import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../Services/user-service.service';
import { ChatService } from '../Services/chat-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  mostrarDialog: boolean;
  constructor(private router: Router, private userService: UserServiceService,private chatService: ChatService) { 
    console.log(this.userService.selectedUser$);

  }
  users = [
    { id: 'user1', name: 'Usuario 1' },
    { id: 'user2', name: 'Usuario 2' },
   
  ]; 

  selectedUser: any;
  otherUser: any;

  selectedUserName: string = '';

  ngOnInit(): void {
    // Recuperar el nombre almacenado en localStorage si existe
    this.selectedUser = this.getSelectedUserName()

    console.log(this.selectedUser);
    console.log(this.selectedUser);
    console.log(this.selectedUser);
    console.log(this.selectedUser);

    setTimeout(() => {
    if (this.selectedUser) {
      
      // Si hay un nombre almacenado, establecerlo en la variable del componente
      this.openDialog();
    }
  }, 500);
  }

selectUser(user: any): void {
  this.selectedUser = user;
  this.otherUser = 'user';


  console.log('this.selectedUser',this.selectedUser);
  console.log('this.other',this.otherUser);

  this.userService.setSelectedOther(this.otherUser);
  this.userService.setSelectedUser(this.selectedUser);
  localStorage.setItem('selectedUserName', this.selectedUser);
  this.router.navigate(['/chatPage']);

}
async openDialog(): Promise<void> {
  const isConfirmed = await this.userService.confirm();

  if (isConfirmed) {
    console.log('El usuario aceptó.');
    this.userService.setSelectedUser(this.selectedUser);

    console.log('this.selectedUserName',this.selectedUser);
    
    this.selectUser(this.selectedUser);
  } else {
    console.log('El usuario canceló.');
    localStorage.removeItem('selectedUserName');
    this.mostrarDialog=false;
    this.selectedUser = '';
    // Realizar acciones específicas si el usuario canceló
  }
}

getSelectedUserName(): string | null {
  return localStorage.getItem('selectedUserName');
}


}
