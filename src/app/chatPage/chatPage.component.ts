import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../Services/chat-service.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../Services/user-service.service';
import { Subscription } from 'rxjs';

import { Location } from '@angular/common';

@Component({
  selector: 'app-chatPage',
  templateUrl: './chatPage.component.html',
  styleUrls: ['./chatPage.component.css']
})

export class chatPageComponent implements OnInit {

  selectedReceiver: string;
  conversationHistory: any;
  message: string;
  conversationId: string;
  sender:string;
  messageSubscription: Subscription;

  isLoading:boolean = true;

  constructor(private chatService: ChatService, private userService: UserServiceService, private location: Location) {
   
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading=false;


    this.userService.getSelectedUser().subscribe(user => {
      this.sender = user;
    });
    
    this.loadConversationHistory();

    
  }, 1000);
  }

  goBack(): void {
    this.location.back();
  }

  scrollToBottom(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  sendMessage() {
    if (this.message.trim() !== '') {
      const conversationId = this.chatService.getConversationId(); 

      this.chatService.sendMessage(this.chatService.conversationId, this.message)
        .then(() => {
          this.message = '';
           this.loadConversationHistory();
           
        })
        .catch(error => {
          console.error('Error al enviar el mensaje:', error);
        });
    }
  }
 
  loadConversationHistory() {
    console.log('loadConversationHistory');
    this.messageSubscription = this.chatService.getConversationMessages()
      .subscribe(history => {

        if (history.length>0) {
           this.conversationHistory = history;
           setTimeout(() => {
            this.scrollToBottom('miDiv');
          }, 100);
        }else{
          
          if (this.chatService.allMessages.allMessages) {
          this.conversationHistory = Object.values(this.chatService.allMessages.messages);
          
          setTimeout(() => {
            console.log('scroll');
            this.scrollToBottom('miDiv');
          }, 100);
        }
      }
      });
      console.log('messagesList',this.conversationHistory);
      
  }

   
 
  
}
